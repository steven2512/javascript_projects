const balance = document.querySelector('#balanceAmount')
const money_plus = document.querySelector('money-plus')
const history = document.querySelector('#history-rc')
const form = document.querySelector('#tst-form')
const note = document.querySelector('#note')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const type = document.querySelector('#type')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let newTransaction = document.createElement('li');
    let newAmount = document.createElement('span')
    let newNote = document.createElement('span')
    // let newDate = document.createElement
    let btn = document.createElement('button')
    newNote.innerText = note.value
    newAmount.innerText = amount.value
    newTransaction.append(newNote, newAmount)
    history.append(newTransaction)

})

note.addEventListener('change', function (e) {

})