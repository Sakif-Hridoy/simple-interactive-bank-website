document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log('deposit clicked')

//   deposit operation
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
//   console.log(typeof newDepositAmount);
  const newDepositAmount = parseFloat(newDepositAmountString);
  // console.log(depositAmount);
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)

  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;



//   Balance Total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotalElement.innerText = currentBalanceTotal;





depositField.value = "";

});
