function clientSearch(){
    let clientInfo = document.getElementById("input").value;
    let infoType = document.getElementById("dropdownmenu");
    let infoTypeChosen = infoType.options[infoType.selectedIndex].value; 
    console.log(clientInfo);
    console.log(infoTypeChosen)


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
        console.log("Yay! Success")
    },
    error: function(err) {
        console.log(err)
    }
}).done(function (clientJSON) {
    let oldJSON = JSON.stringify(clientJSON);
    let parsedJSON = JSON.parse(oldJSON);
    let object = parsedJSON._embedded;
    let clients = object.clients;
    console.log(clients)

    let ok = " ";
    for(let i = 0; i < clients.length; i++){
        clientID = clients[i].clientId
        if(clientInfo.toLowerCase() === clients[i].firstName.toLowerCase() || clientInfo.toLowerCase() === clients[i].lastName.toLowerCase() || clientInfo === clients[i].mobile || clientInfo === clients[i].email){
        ok += "<div class='col-md-6'> <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>Client: "+ clients[i].firstName + " " + clients[i].lastName + "</h4><p class='card-text'>"    
        ok += "<p> Mobile: " + clients[i].mobile + "</p>"; 
        ok += "<p> Email: " + clients[i].email + "</p>";
        ok += "<input type='text' id='voucherInput' class='form-control' placeholder='Enter Voucher Amount' aria-label='Enter Name or Phone Number' aria-describedby='basic-addon2'/>"
        ok += "<button class='btn-sm' onClick='generateVoucher()' style='background-color:#ef9812; color:white;'>Add Voucher</button>"
        ok += "<div style='color: white;'>   .  </div></p></div></div></div>"
        console.log(clientID)
         } 
        else if(clientInfo.toLowerCase() !== clients[i].firstName.toLowerCase() || clientInfo.toLowerCase() !== clients[i].lastName.toLowerCase() || clientInfo !== clients[i].mobile || clientInfo !== clients[i].email || clientInfo === ""){
            //  ok = " ";
             ok += "Sorry, no results for that search, please try again! Search is case sensitive :) ";
            console.log('no')
        } else{
            // ok = " "
             ok += "Sorry, no results for that search, please try again! Search is case sensitive :) "
             document.getElementById("clientCard").innerHTML = ok;
        }

    }
    document.getElementById("clientCard").innerHTML = ok;

})

};

function generateVoucher(){
const username = 'global/cloud@apiexamples.com';
const password = 'VMlRo/eh+Xd8M~l';

var url = "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic "+btoa(username+':'+password));

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};


document.getElementById("voucherInput").value;   
var data = '{ "clientId":' + clientID + ', "creatingBranchId": "SE-J0emUgQnya14mOGdQS", "expiryDate": "2021-02-15T11:00:48.246Z", "issueDate": "2021-02-15T11:00:48.246Z", "originalBalance":' + balance + ', "serialNumber": 123456}';

xhr.send(data);

}



// https://stackoverflow.com/questions/34860814/basic-authentication-using-javascript