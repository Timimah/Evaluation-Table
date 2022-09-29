getTable = () => {
    // alert()
    for (let i = 1; i <= noOfRows.value; i++) {
        eval_table.innerHTML += `<div class="w-100 border-dark">`
        for( let j = 1; j <= noOfColumns.value; j++)
        if(evaluate.value == 'Add')  {
            eval_table.innerHTML += `<div class="col border text-center py-3">${j} + ${i} = ${(j + i)}</div><br><br>`
        }
        else if (evaluate.value == 'Multiply'){
            eval_table.innerHTML += `<div class="col border text-center p-3">${j} x ${i} = ${(j * i)}</div><br><br>`
        }
        else if (evaluate.value == 'Divide'){
            eval_table.innerHTML += `<div class="col border text-center p-3">${j} / ${i} = ${(j / i)}</div><br><br>`
        }
        else if (evaluate.value == 'Subtdact'){
            eval_table.innerHTML += `<div class="col border text-center p-3">${j} - ${i} = ${(j - i)}</div><br><br>`
        }
        eval_table.innerHTML += `</div>`
    }
}