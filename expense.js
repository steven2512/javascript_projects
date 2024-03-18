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
    //Assigning class names to children elements
    newAmount.className = 'amount-rc'
    newNote.className = 'note-rc'
    //Note for new transaction
    newNote.innerText = note.value


    if (type.value) === 'Expense' {
        newAmount.innerText = '+' + amount.value
    }
    newTransaction.append(newAmount)
    history.append(newTransaction)
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    addTransaction()

})

note.addEventListener('change', function (e) {

})