const balance = document.querySelector('#balanceAmount')
const money_plus = document.querySelector('money-plus')
const history = document.querySelector('#history-rc')
const form = document.querySelector('#tst-form')
const note = document.querySelector('#note')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const type = document.querySelector('#type')

//gather user input for transaction and append to history section at the end
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

}

function updateCashFlow() {

}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    validCheck()
    addTransaction()
    updateCashFlow()

})

note.addEventListener('change', function (e) {

})