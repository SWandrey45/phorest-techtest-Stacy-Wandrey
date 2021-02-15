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

        if(clientInfo == clients[i].firstName || clientInfo == clients[i].lastName || clientInfo == clients[i].mobile || clientInfo == clients[i].email){
        ok += "<div class='col-md-6'> <div class='card' margin-top:'50px'> <div class='card-body'> <h4 class='card-header'>Customer: "+ clients[i].firstName + " " + clients[i].lastName + "</h4><p class='card-text'>"    
        // ok += "<p> Name: " + clients[i].firstName +  ' ' + clients[i].lastName + "</p>";
        ok += "<p> Mobile: " + clients[i].mobile + "</p>"; 
        ok += "<p> Email: " + clients[i].email + "</p>";
        ok += "<input type='text' id='voucherInput' class='form-control' placeholder='Enter Voucher Amount' aria-label='Enter Name or Phone Number' aria-describedby='basic-addon2'/>"
        ok += "<button onClick='generateVoucher()' style='background-color:#ef9812; color:white;'>Add Voucher</button>"
        ok += "</p></div></div></div>"
        console.log(clientID)
        } else{
            ok += "Sorry, no results for that search, please try again! Search is case sensitive :) "
            ok += "</div><div>"
            console.log('no')
            // document.getElementById("clientCard").innerHTML = "Soory! No results! ";
        }

    }
    document.getElementById("clientCard").innerHTML = ok;

})

};
const username = 'global/cloud@apiexamples.com';
const password = 'VMlRo/eh+Xd8M~l';
const url = "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher";

// voucherInfo = '{ \"clientId\":' \"WwEaIb0m4bhJphVtm2VgIw\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQS\", \"expiryDate\": \"2021-02-15T11:00:48.246Z\", \"issueDate\": \"2021-02-15T11:00:48.246Z\", \"originalBalance\": 123.12, \"serialNumber\": 123456}"

function generateVoucher(){
    $.ajax({ 
        url: url,
        async: true,
        type:'POST',
        dataType: 'json',
        contentType: 'application/json',
        voucherInfo: voucherInfo,
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
        console.log(parsedJSON)
        // let object = parsedJSON._embedded;
        // let clients = object.clients;
        // console.log(clients)

})
}