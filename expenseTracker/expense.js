const balance = document.querySelector('#balanceAmount')
const money_plus = document.querySelector('#money-plus')
const money_minus = document.querySelector('#money-minus')
const history = document.querySelector('#history-rc')
const form = document.querySelector('#tst-form')
const note = document.querySelector('#note')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const type = document.querySelector('#type')
const errorMsg = document.querySelector('.error')

//form validation error mesages
function showError(target, msg) {
    let element = target.nextElementSibling
    element.className = ('error invalid')
    element.innerText = msg
}
function showSuccess(target) {
    let element = target.nextElementSibling
    element.className = 'error'
}

//form validation
function validCheck(targetArr) {
    let isValid = true
    for (let target of targetArr) {
        if (!target.value.trim()) {
            showError(target, 'Field can not be empty')
            isValid = false
        }
        else {
            showSuccess(target)
        }
    }
    return isValid
}

//Clear user input after succesfully adding transaction:
function resetInput(form) {
    let input = document.querySelectorAll('.transaction input')
    input.forEach((input) => {
        input.value = ''
    })
    type.value = 'Expense'
}


//update history section through transaction
function addTransaction() {
    //creating new elements in the DOM
    let newTransaction = document.createElement('li');
    let newAmount = document.createElement('span')
    let newNote = document.createElement('span')
    let deleteButton = document.createElement('button')
    //Assigning class names to children elements
    newAmount.className = 'amount-rc'
    newNote.className = 'note-rc'
    deleteButton.className = 'delete'
    //Assign the delete button
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

    //Assign the input note
    newNote.innerText = note.value
    //Assign the amount note
    if (type.value === 'expense') {
        newTransaction.className = 'minus'
        newTransaction.append('-$')
        newAmount.innerText = amount.value
    } else {
        newTransaction.className = 'plus'
        newTransaction.append('+$')
        newAmount.innerText = amount.value
    }
    //append to the history section
    newTransaction.append(newAmount, newNote, deleteButton)
    history.append(newTransaction)
    //add functionality for delete btn
    deleteButton.addEventListener('click', function () {
        history.removeChild(newTransaction)
        updateCashFlow()
    })

}

function updateCashFlow() {
    const plus = document.querySelectorAll('.history-rc li.plus .amount-rc')
    const minus = document.querySelectorAll('.history-rc li.minus .amount-rc')
    let totalIncome = 0
    let totalExpense = 0
    plus.forEach((income) => {
        totalIncome += +income.innerText

    })
    minus.forEach((income) => {
        totalExpense += +income.innerText
    })
    money_plus.innerText = `+$${totalIncome}`
    money_minus.innerText = `-$${totalExpense}`
    balance.innerText = `$${totalIncome + (-totalExpense)}`
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let valid = validCheck([note, amount])
    if (valid) {
        addTransaction()
        updateCashFlow()
    }
    resetInput()


})

note.addEventListener('change', function (e) {

})