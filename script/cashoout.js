document.getElementById("cash-out-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const amount = getElementById("cash-out-amount");
        const CashOutPin = getElementById("cash-out-pin");
        const MainBalance = getInnerText("main-balance");
        if(isNaN(amount)){
            return 
        }
        if(accountNumber.length === 11){
            if(CashOutPin === 1234){
                const sum = MainBalance - amount;
                setInnerTextByIdaAndValue("main-balance",sum)

                // code for transaction.
                const container = document.getElementById("transaction-container");
                const p = document.createElement("p")
                p.innerText = `
                cashout ${amount} from this account
                `
                container.appendChild(p)



            }
            else{
                alert("enter the valid pin");
            }
        }else{
            alert("account number is not valid")
        }
})