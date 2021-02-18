// This first function searches the client API! 

function clientSearch(){

    let clientInfo = document.getElementById("input").value;
    let infoType = document.getElementById("dropdownmenu");
    let infoTypeChosen = infoType.options[infoType.selectedIndex].value; 

    const username = 'global/cloud@apiexamples.com';
    const password = 'VMlRo/eh+Xd8M~l';
    const url = 'https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?' + infoTypeChosen + '=' + clientInfo;

 // I made a connection with AJAX 
$.ajax({ 
    url: url,
    async: true,
    type:'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Basic "+btoa(username+':'+password));
    },
    success: function(){
        console.log("Success!")
    },
    error: function(err) {
        console.log(err)
    }
}).done(function (clientJSON) { 
    
    //The Call retrieves the json response 
    let oldJSON = JSON.stringify(clientJSON);
    let parsedJSON = JSON.parse(oldJSON);
    let object = parsedJSON._embedded;
    let clients = object.clients;

    let ok = " "; //if the response is ok,

//I loop through it using a for loop! 
    for(let i = 0; i < clients.length; i++){
        clientName = clients[i].firstName + " " + clients[i].lastName;
        clientid = clients[i].clientId;
        //Set a variable for truthy falsey reuse-y 
        let IsEqualToClientInfo = (clientInfo.toLowerCase() === clients[i].firstName.toLowerCase() || clientInfo.toLowerCase() === clients[i].lastName.toLowerCase() || clientInfo === clients[i].mobile || clientInfo === clients[i].email);

        //Please note how the toLowerCase makes the search input case insensitive!! 

        if(IsEqualToClientInfo){ 
        //if the above boolean is true, use the data to make a card, then display the card on the DOM
        ok += "<div class='col-md-6'> <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>Client: "+ clients[i].firstName + " " + clients[i].lastName + "</h4><p class='card-text'>"    
        ok += "<p><b> Mobile:</b> " + clients[i].mobile + "</p>"; 
        ok += "<p> <b>Email:</b> " + clients[i].email + "</p>";
        ok +=" <p><b>Client ID: </b>"+ clients[i].clientId + "</p>"
        ok += "<button class='btn-sm' onClick='generateVoucher()' style='background-color:#ef9812; color:white;'>Add Voucher</button>"
        ok += "</p></div></div></div>"        
         }
        }

        document.getElementById("clientCard").innerHTML = ok;

}).fail(function (error) { //Else, respond that the customer doesn't exist! This bit of code doesn't quite work, and doesnt return anything. sorry!!  
    let ok = "<h4>Sorry, that client doesn't exist! Search again! :) </h4>";
    document.getElementById("clientCard").innerHTML = ok;
    })
};

//Now we move on to generating the unique voucher for the clients! 
function generateVoucher(){
    voucher = " ";
    const username = 'global/cloud@apiexamples.com';
    const password = 'VMlRo/eh+Xd8M~l';
    let balance = document.getElementById("voucherInput").value;


    var date = new Date; // Today's date 
    //based on today's date, get all the elements of it so that we can manipulate it for an expiration date! 
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear(); 


    //make today's date readable by the API
    var todaysDate = date.toISOString();
    //calculate a new expiry, 6 months will get clients in quick :) 
    var calcMonth = new Date(year, month + 6, day)
    //convert that date to be readable by the API! 
    var sixMonth = calcMonth.toISOString();

//Now we create the URL and the data that will be sent to the post request, using the clientID that was made global in the previous function, and the balance that the user inputs
var url = "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher";
var data = '{ \"clientId\": \"'+clientid+'\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQSw\", \"expiryDate\": \"'+ sixMonth +'\", \"issueDate\": \"'+ todaysDate +'\", \"originalBalance\": '+ balance +'}';

$.ajax({ 
    url: url,
    async: true,
    type:'POST',
    dataType: 'json',
    data: data,
    contentType: 'application/json',
    headers: {
    "accept" : '*/*',
    "authorization": "Basic" + "Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTogVk1sUm8vZWgrWGQ4TX5s", //this authorization is from the curl found on the API website when the credentials are used to authorize the page 
    },
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Basic "+btoa(username+':'+password));
    },
    success: function(json){
        console.log("Success!")
    },
    error: function(err) {
        console.log(err)
    }
}).done(function (voucherJSON) { //upon a successful post, I take the data from the json object for displaying in the voucher card 

    let oldJSON = JSON.stringify(voucherJSON);
    let pJSON = JSON.parse(oldJSON);
    let ID = pJSON.voucherId;
    let num = pJSON.serialNumber;
    let issueDate = pJSON.issueDate;
    let expiryDate = pJSON.expiryDate;
    clientNumber = pJSON.clientId;
    
    //the information from the json is then used here to build it with HTML: 
    var voucher =" <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>";
    voucher += "<h4> Voucher created successfully! </h4>";
    voucher += "<p> <b>Amount:</b> €"+balance+" </p>";
    voucher += "<p><b> ID:</b> "+ID+" </p>";
    voucher += "<p> <b>Serial Number: </b>"+ num+" </p>";
    voucher += "<p><b> Date Issued:</b> "+issueDate+" </p>";
    voucher += "<p><b> Expires On :</b>"+expiryDate+" </p>";
    voucher += "</p></div>"
    document.getElementById("voucherCard").innerHTML = voucher;


}).fail(function(error){ //this fail works if the user enters anything besides money 
    var voucher = "<h4> Whoops! Try making your voucher again!</h4>"
    document.getElementById("voucherCard").innerHTML = voucher;
})
}

//I heavily referenced this source for the ajax GET/POST requests: 
// https://stackoverflow.com/questions/34860814/basic-authentication-using-javascript