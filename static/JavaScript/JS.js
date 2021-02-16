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
        console.log(json)
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
        clientName = clients[i].firstName + " " + clients[i].lastName;

        let IsEqualToClientInfo = (clientInfo.toLowerCase() === clients[i].firstName.toLowerCase() || clientInfo.toLowerCase() === clients[i].lastName.toLowerCase() || clientInfo === clients[i].mobile || clientInfo === clients[i].email);


        if(IsEqualToClientInfo){
        ok += "<div class='col-md-6'> <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>Client: "+ clients[i].firstName + " " + clients[i].lastName + "</h4><p class='card-text'>"    
        ok += "<p><b> Mobile:</b> " + clients[i].mobile + "</p>"; 
        ok += "<p> <b>Email:</b> " + clients[i].email + "</p>";
        ok += "<input type='text' id='voucherInput' class='form-control' placeholder='Enter Voucher Amount' aria-label='Enter Name or Phone Number' aria-describedby='basic-addon2'/>"
        ok += "<button class='btn-sm' onClick='generateVoucher()' style='background-color:#ef9812; color:white;'>Add Voucher</button>"
        ok +=" <p>"+ clients[i].clientId + "</p>"
        ok += "</p></div></div></div>"
        console.log(clientID)
         }if(!IsEqualToClientInfo){
             ok = "<p>whoops</p>"
         }
    }
    document.getElementById("clientCard").innerHTML = ok;


}).fail(function (error) {
    var ok = "<h4 class='importantVouchRes'>Sorry, your voucher cannot be processed. Please try again!</h4>";
    document.getElementById("clientCard").innerHTML = ok;
  })
};

function generateVoucher(){
    voucher = " ";

    const username = 'global/cloud@apiexamples.com';
    const password = 'VMlRo/eh+Xd8M~l';

    let balance = document.getElementById("voucherInput").value;
    let clientId = clientID;
    let date = new Date;

    let todaysDate = date.toISOString();
    let sixMonth = date.toISOString();



var url = "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher";
var data = '{ \"clientId\": \"'+clientId+'\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQSw\", \"expiryDate\": \"'+ sixMonth +'\", \"issueDate\": \"'+ todaysDate +'\", \"originalBalance\": '+ balance +'}';

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
        console.log(json)
    },
    error: function(err) {
        console.log(err)
    }
}).done(function (voucherJSON) {
    let oldJSON = JSON.stringify(voucherJSON);
    let parsedJSON = JSON.parse(oldJSON);
    let ID = parsedJSON.voucherId;
    let num = parsedJSON.serialNumber;
    let issueDate = parsedJSON.issueDate;
    let expiryDate = parsedJSON.expiryDate;
    let client = clientId;
    
    var voucher ="<div class='col-md-12'> <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>";
    voucher += "<h4> Voucher created for: <b>"+clientName+"</b>! </h4>";
    voucher += "<p> <b>Amount:</b> "+balance+" </p>";
    voucher += "<p><b> ID:</b> "+ID+" </p>";
    voucher += "<p> <b>Serial Number: </b>"+ num+" </p>";
    voucher += "<p><b> Date Issued:</b> "+issueDate+" </p>";
    voucher += "<p><b> Expires On :</b>"+expiryDate+" </p>";
    voucher += "<p> <b>Client ID: </b>"+client+" </p>";
    voucher += "</p></div></div>"
    document.getElementById("voucherCard").innerHTML = voucher;


}).fail(function(error){
    var voucher = "<p> Whoops! Try again!</p>"
    document.getElementById("voucherCard").innerHTML = voucher;
})
}



// https://stackoverflow.com/questions/34860814/basic-authentication-using-javascript