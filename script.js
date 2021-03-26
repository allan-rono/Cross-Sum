const num = document.getElementById("num");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");


function getCrossSum() {
    let numValue = num.value;
    let crossSum = 0

    for (var i = 0; i < numValue.length; i++) {
        crossSum = crossSum + Number(numValue[i])
    }

    answer.innerHTML = crossSum;
}

submit.addEventListener("click", getCrossSum);