let list = "Alex"
let account= "7777"
let balance = "10000"

let question = prompt('введите ваше имя для снятия средств')
if (list.toLowerCase() == question.toLowerCase()) {
    let pass = +prompt('ваш пароль')
    if (pass == account) {
     let cash_out = +prompt('сколько хотите снять')
     if (cash_out < balance) {
        alert(balance - cash_out)
     } else {
        alert('недостаточно денег')
     }

    } else {
        alert('неправильный пароль')
    }

} else {
    alert ('неправильно имя')
}