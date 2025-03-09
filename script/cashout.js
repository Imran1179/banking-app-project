// document.getElementById('cash-out-btn').addEventListener('click',
//     function(event){
//         event.preventDefault();

//         const pin = document.getElementById("cash-out-pin").value;

//         const convertedPin = parseInt(pin);

//         const cashOutAmount = document.getElementById("cash-out-amount").value;

//         const convertedCashOutAmount = parseFloat(cashOutAmount);

//          // main balance part
//          // const mainBalance = document.getElementById("main-balance").innerText;

//          // convert main balance >>> string to number;
//          const convertMainBalance = parseFloat(mainBalance);

//          if(convertedPin === 1234){
//             const sum = convertMainBalance - convertedCashOutAmount;
//             const mainBalance = document.getElementById("main-balance").innerText=sum;
//          }
//          else{
//             alert('enter valid pin')
//          }

//  })