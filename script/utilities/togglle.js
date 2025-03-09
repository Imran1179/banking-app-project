document.getElementById("cash-out").style.display = 'none';

document.getElementById("Add-Money").addEventListener("click",
    function(){
        handleToggle("add-money","block");
        handleToggle("cash-out","none");
        handleToggle("transaction-history","none");
})

document.getElementById("Cash-Out").addEventListener("click",
    function(){
        handleToggle("add-money","none");
        handleToggle("cash-out","block");
        handleToggle("transaction-history","none");
})

// togggle.js theke utilities a nia nilam.
 
// function handleToggle(id,status){
//     document.getElementById(id).style.display = status;
// }