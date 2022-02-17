/* -------------------
    Calculate button
----------------------*/
document.getElementById('calculate-btn').addEventListener('click', function () {
  //   Total balance calculation
  const totalExpenseAmount = totalExpense();
  const totalIncomeAmount = totalIncome();
  const totalBalanceAmount = totalIncomeAmount - totalExpenseAmount;

  //   Find default value of total expense
  const prevExpense = document.getElementById('total-expense');
  const prevExpenseAmount = prevExpense.innerText;
  prevExpense.innerText = totalExpenseAmount;

  //   Find default value of total balance
  const prevBalanceText = document.getElementById('total-balance');
  const prevBalanceAmount = prevBalanceText.innerText;
  prevBalanceText.innerText = totalBalanceAmount;
});

function totalIncome() {
  //   Total income field
  const totalIncomeText = document.getElementById('total-income');
  const totalIncomeAmount = Math.abs(totalIncomeText.value);
  return totalIncomeAmount;
}

function totalExpense() {
  //   Food expense field
  const foodExpInputText = document.getElementById('food-input');
  const foodExpAmount = Math.abs(foodExpInputText.value);
  //   Rent expense field
  const rentExpInputText = document.getElementById('rent-input');
  const rentExpAmount = Math.abs(rentExpInputText.value);
  //   Clothes expense field
  const clothesExpInputText = document.getElementById('clothes-input');
  const clothesExpAmount = Math.abs(clothesExpInputText.value);

  //   Total expense calculation
  const totalExpenseAmount = foodExpAmount + rentExpAmount + clothesExpAmount;
  //   clear input field value
  foodExpInputText.value = '';
  rentExpInputText.value = '';
  clothesExpInputText.value = '';

  return totalExpenseAmount;
}

/* -------------------
    Save button
----------------------*/
document.getElementById('save-btn').addEventListener('click', function () {
  const saveInputText = document.getElementById('save-input');
  const saveInputAmount = Math.abs(saveInputText.value);
  //   clear input field value
  saveInputText.value = '';

  const totalExpenseAmount = totalExpense();
  const totalIncomeAmount = totalIncome();
  const totalBalanceAmount = totalIncomeAmount - totalExpenseAmount;
  const saveAmount = (saveInputAmount / 100) * totalBalanceAmount;

  //   Total saving
  const prevSavingId = document.getElementById('saving-amount');
  const prevSavingAmount = prevSavingId.innerText;
  prevSavingId.innerText = saveAmount;

  //   Remaining Balance
  const totalRemaingAmount = totalBalanceAmount - saveAmount;
  const prevRemainingBalance = document.getElementById('remaining-balance');
  const prevRemainingBalanceAmount = prevRemainingBalance.innerText;
  prevRemainingBalance.innerText = totalRemaingAmount;
});
