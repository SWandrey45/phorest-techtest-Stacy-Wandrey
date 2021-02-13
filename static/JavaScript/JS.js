function clientSearch(){
    let clientInfo = document.getElementById("input").value;
    let infoType = document.getElementById("dropdownmenu");
    let infoType2 = infoType.options[infoType.selectedIndex].value; 
    console.log(clientInfo);
    console.log(infoType2)
}

$(document).ready(function(){
    $.getJson("/json",function(data){
        console.log(data.result2);
        let items =  [];
        $.each(data.result2, function(key, value){
        console.log(key);
        console.log(value);
        items.push('<li id=" ' + value.firstName + '">' + value.lastName+    '</li>');
    });
})
})