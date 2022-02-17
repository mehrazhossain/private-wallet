/* -------------------
    Calculate button
----------------------*/
document.getElementById('calculate-btn').addEventListener('click', function () {
  //   Total balance calculation
  const totalExpenseAmount = totalExpense();
  const totalIncomeAmount = totalIncome();
  if (totalIncomeAmount > totalExpenseAmount) {
    const totalBalanceAmount = totalIncomeAmount - totalExpenseAmount;

    //   Find default value of total expense
    const prevExpense = document.getElementById('total-expense');
    const prevExpenseAmount = prevExpense.innerText;
    prevExpense.innerText = totalExpenseAmount;

    //   Find default value of total balance
    const prevBalanceText = document.getElementById('total-balance');
    const prevBalanceAmount = prevBalanceText.innerText;
    prevBalanceText.innerText = totalBalanceAmount;
  } else {
    // Error handling
    const createEl = document.createElement('small');
    const textNode = document.createTextNode('Please! type valid input.');
    createEl.appendChild(textNode);
    document.getElementById('exp-form').appendChild(createEl);
  }
});

function totalIncome() {
  //   Total income field
  const totalIncomeText = document.getElementById('total-income');
  const totalIncomeAmount = totalIncomeText.value;
  if (totalIncomeAmount > 0) {
    return totalIncomeAmount;
  }
}

function totalExpense() {
  const foodExpInputText = document.getElementById('food-input');
  const foodExpAmount = Math.abs(foodExpInputText.value);
  const rentExpInputText = document.getElementById('rent-input');
  const rentExpAmount = Math.abs(rentExpInputText.value);
  const clothesExpInputText = document.getElementById('clothes-input');
  const clothesExpAmount = Math.abs(clothesExpInputText.value);

  //   Total expense calculation
  const totalExpenseAmount = foodExpAmount + rentExpAmount + clothesExpAmount;
  return totalExpenseAmount;
}

/* -------------------
    Save button
----------------------*/
document.getElementById('save-btn').addEventListener('click', function () {
  const saveInputText = document.getElementById('save-input');
  const saveInputAmount = Math.abs(saveInputText.value);
  if (saveInputAmount <= 100) {
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
  } else {
    // Error handling
    const createEle = document.createElement('small');
    const node = document.createTextNode('Input must be within 100.');
    createEle.appendChild(node);
    document.getElementById('showSaveError').appendChild(createEle);
  }
});
