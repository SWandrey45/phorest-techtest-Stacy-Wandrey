function clientSearch(){
    let clientInfo = document.getElementById("input").value;
    let infoType = document.getElementById("dropdownmenu");
    let infoType2 = infoType.options[infoType.selectedIndex].value; 
    console.log(clientInfo);
    console.log(infoType2);
}