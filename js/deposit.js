document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit clicked')

    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    // console.log(depositAmount);
    const depositTotalElement = document.getElementById('deposit-total');
   const depositTotal = depositTotalElement.innerText;
   depositTotalElement.innerText = depositAmount;

   depositField.value = "";
})
