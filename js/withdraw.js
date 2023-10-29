document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('withdraw clcked')
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = "";

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid Number');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // if er niche dite hobe karon age update hoye jache
    // const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotalElement.innerText = currentWithdrawTotal;

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Not Enough Balance to Withdraw');
        return;
    }

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal
    // withdrawTotalElement.innerText = newWithdrawAmount;

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
})