document.getElementById("add-money-btn").addEventListener('click',
    function(event){
        event.preventDefault();
        const amount = getElementById("amount");
        console.log(amount)
        const Pin = getElementById("pin");
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertMainBalance = parseFloat(mainBalance);
        if(isNaN(amount)){
            return 
        }
        console.log(convertMainBalance)

        console.log(mainBalance);

        if(Pin === 1234){
                        const sum = convertMainBalance + amount;
                        console.log(sum);
                        setInnerTextByIdaAndValue("main-balance",sum);

                        // code for transaction.
                        const container = document.getElementById("transaction-container");
                        const p = document.createElement("p")
                        p.innerText = `
                        added ${amount} from this account
                        `
                        container.appendChild(p)




                    }else{
                        console.log("Wrong Pin");
                    }
        
})