
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const 
}

function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}

function updateBalance(amount, isAdding){
    const balanceTag = document.getElementById('balance-total');
    const balanceinText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceinText);
    let newBalance;
    if(isAdding){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', () => {
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
    
});

document.getElementById('withdraw-button').addEventListener('click', () => {
    const amount = getInputValue('withdraw-input');
    if(amount > 0){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
    
});