/* -------------------
    Calculate button
----------------------*/
document.getElementById('calculate-btn').addEventListener('click', function () {
  //   Total income field
  const totalIncomeText = document.getElementById('total-income');
  const totalIncomeAmount = Math.abs(totalIncomeText.value);

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
  //   Total balance calculation
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

/* -------------------
    Save button
----------------------*/
document.getElementById('save-btn').addEventListener('click', function () {
  const saveInputText = document.getElementById('save-input');
  const saveInputAmount = Math.abs(saveInputText.value);

  const saveAmount = totalBalanceAmount % saveInputText;
  console.log(saveAmount);
});
