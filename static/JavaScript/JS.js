function clientSearch(){
    let clientInfo = document.getElementById("input").value;
    let infoType = document.getElementById("dropdownmenu");
    let infoTypeChosen = infoType.options[infoType.selectedIndex].value; 
    console.log(clientInfo);
    console.log(infoTypeChosen)


var username = 'global/cloud@apiexamples.com';
var password = 'VMlRo/eh+Xd8M~l';
var url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?' + infoTypeChosen + '=' + clientInfo;
 
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

    let ok = " <div class='card' margin-top:'50px'> <div class='card-body' style='background-color: white; margin-top: 50px;'> <h4 class='card-header'>Customer Information</h4><p class='card-text'>";
    for(let i = 0; i < clients.length; i++){
        clientID = clients[i].clientId

        clientID = clients[i].clientId
        if(clientInfo == clients[i].firstName || clientInfo == clients[i].lastName || clientInfo == clients[i].mobile || clientInfo == clients[i].email){
        ok += "<p> Name: " + clients[i].firstName +  ' ' + clients[i].lastName + "</p>";
        ok += "<p> Mobile: " + clients[i].mobile + "</p>"; 
        ok += "<p> Email: " + clients[i].email + "</p>";
        ok += "<button style='background-color:#ef9812; color:white;'>Add Voucher</button>"
        ok += "</p></div> </div>"
        console.log(clientID)
        return clientID
        } else{
            console.log('no')
            document.getElementById("clientCard").innerHTML = "Soory! No results! ";
        }

    }
    document.getElementById("clientCard").innerHTML = ok;

})

};

function generateVoucher(){
    
}
