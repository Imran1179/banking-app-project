document.getElementById("login-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNumber =  document.getElementById("account-number").
        value;
        const piN = document.getElementById("pin").
        value;
        const convertedPin = parseInt(piN)
        if(accountNumber.length === 11){
            if(convertedPin === 1234){
                window.location.href="./main.html"
            }
            else{
                console.log("Login Unsuccessful");
            }
        }else{
            console.log("Need Valid Account Number");
        }
})