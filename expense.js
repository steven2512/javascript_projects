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
    newTransaction = document.createElement('li');
    newAmount = document.createElement('span')
    newNote = document.createElement('note')
})