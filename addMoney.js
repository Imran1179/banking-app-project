// document.getElementById('add-money').addEventListener('click',
//     function(event){
//         event.preventDefault();
//         const Amount = document.getElementById("amount").value;

//         // converted amount string to number;
//         const convertedAmount = parseFloat(Amount);

//         const pin = document.getElementById("pin").value;
//         // converted pin ,,, string to number
//         const convertedPiN = parseInt(pin);
        
//         // main balance part
//         const mainBalance = document.getElementById("main-balance").innerText;

//         // convert main balance >>> string to number;
//         const convertMainBalance = parseFloat(mainBalance);

//         if(convertedPiN === 1234){
//             const sum = convertMainBalance + convertedAmount;
//             console.log(sum)
//             document.getElementById('main-balance').innerText = sum;
//         }else{
//             console.log("Wrong Pin");
//         }
// })