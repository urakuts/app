//  Щомісячний платіж
function calcMonth(){

let summa = document.querySelector('#textSumma').value;
let period = document.querySelector('#textDate').value;
let rate = 0;
// визначаємо процентну ставку
if (period <= 12){
    rate = 0.22;
}else if (period > 12 && period <=24) {
    rate = 0.185;     
}else{
    rate = 0.17;
}
// Розрахунок, місячного платежу

let mothPayment = 0;
let rateMoth = rate / 12;
mothPayment = Number(summa * rateMoth / (1 - (1 / Math.pow(1 + rateMoth, period)))).toFixed(2);
document.querySelector('#payment').value = mothPayment;
return mothPayment;
}

// Загальна сума кредиту

function calcYear(){
    let period = document.querySelector('#textDate').value;
    let yearPayment = (calcMonth() * period).toFixed(2);
    document.querySelector('#rezult').value = yearPayment
    return yearPayment;
}
document.querySelector('#rezult').value = calcYear();