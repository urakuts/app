function userSummaRange(){
    let rangeSumma = document.querySelector('#rangeSumma');
    let textSumma = document.querySelector('#textSumma')
    textSumma.value = rangeSumma.value;
}

function userSummaText(){
    let rangeSumma = document.querySelector('#rangeSumma');
    let textSumma = document.querySelector('#textSumma')
    rangeSumma.value = textSumma.value;
}
function periodDateRange(){
    let rangeDate = document.querySelector('#periodDate');
    let textDate = document.querySelector('#textDate');
    textDate.value = rangeDate.value;
}

function periodDateText(){
    let rangeDate = document.querySelector('#periodDate');
    let textDate = document.querySelector('#textDate');
    rangeDate.value = textDate.value;
}