function clientSearch(){
    let clientInfo = document.getElementById("input").value;
    let infoType = document.getElementById("dropdownmenu");
    let infoTypeChosen = infoType.options[infoType.selectedIndex].value; 

    const username = 'global/cloud@apiexamples.com';
    const password = 'VMlRo/eh+Xd8M~l';
    const url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?' + infoTypeChosen + '=' + clientInfo;
 
$.ajax({ 
    url: url,
    async: true,
    type:'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Basic "+btoa(username+':'+password));
    },
    success: function(json){
        console.log("Success!")
    },
    error: function(err) {
        console.log(err)
    }
}).done(function (clientJSON) {
    let oldJSON = JSON.stringify(clientJSON);
    let parsedJSON = JSON.parse(oldJSON);
    let object = parsedJSON._embedded;
    let clients = object.clients;

    let ok = " ";

    for(let i = 0; i < clients.length; i++){
        clientName = clients[i].firstName + " " + clients[i].lastName;
        clientid = clients[i].clientId;

        let IsEqualToClientInfo = (clientInfo.toLowerCase() === clients[i].firstName.toLowerCase() || clientInfo.toLowerCase() === clients[i].lastName.toLowerCase() || clientInfo === clients[i].mobile || clientInfo === clients[i].email);

        if(IsEqualToClientInfo){
        ok += "<div class='col-md-6'> <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>Client: "+ clients[i].firstName + " " + clients[i].lastName + "</h4><p class='card-text'>"    
        ok += "<p><b> Mobile:</b> " + clients[i].mobile + "</p>"; 
        ok += "<p> <b>Email:</b> " + clients[i].email + "</p>";
        ok +=" <p><b>Client ID: </b>"+ clients[i].clientId + "</p>"
        ok += "<button class='btn-sm' onClick='generateVoucher()' style='background-color:#ef9812; color:white;'>Add Voucher</button>"
        ok += "</p></div></div></div>"        
         }
        }
        document.getElementById("clientCard").innerHTML = ok;

}).fail(function (error) {
    let ok = "<h4>Sorry, that client doesn't exist! Search again! :) </h4>";
    document.getElementById("clientCard").innerHTML = ok;
    })

};
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



var url = "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher";
var data = '{ \"clientId\": \"'+clientid+'\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQSw\", \"expiryDate\": \"'+ sixMonth +'\", \"issueDate\": \"'+ todaysDate +'\", \"originalBalance\": '+ balance +'}';

// curl -X POST "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher" -H "accept: */*" -H "authorization: Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=" -H "Content-Type: application/json" -d "{ \"clientId\": \"WwEaIb0m4bhJphVtm2VgIw\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQSw\", \"expiryDate\": \"2021-02-16T18:20:05.126Z\", \"issueDate\": \"2021-02-16T18:20:05.126Z\", \"originalBalance\": 123.12, \"serialNumber\": 122343412356}"

$.ajax({ 
    url: url,
    async: true,
    type:'POST',
    dataType: 'json',
    data: data,
    contentType: 'application/json',
    headers: {
    "accept" : '*/*',
    "authorization": "Basic" + "Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=",
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
}).done(function (voucherJSON) {
    let oldJSON = JSON.stringify(voucherJSON);
    let pJSON = JSON.parse(oldJSON);
    let ID = pJSON.voucherId;
    let num = pJSON.serialNumber;
    let issueDate = pJSON.issueDate;
    let expiryDate = pJSON.expiryDate;
    clientNumber = pJSON.clientId;
    
    var voucher =" <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>";
    voucher += "<h4> Voucher created successfully! </h4>";
    voucher += "<p> <b>Amount:</b> €"+balance+" </p>";
    voucher += "<p><b> ID:</b> "+ID+" </p>";
    voucher += "<p> <b>Serial Number: </b>"+ num+" </p>";
    voucher += "<p><b> Date Issued:</b> "+issueDate+" </p>";
    voucher += "<p><b> Expires On :</b>"+expiryDate+" </p>";
    voucher += "</p></div>"
    document.getElementById("voucherCard").innerHTML = voucher;


}).fail(function(error){
    var voucher = "<h4> Whoops! Try making your voucher again!</h4>"
    document.getElementById("voucherCard").innerHTML = voucher;
})
}



// https://stackoverflow.com/questions/34860814/basic-authentication-using-javascript