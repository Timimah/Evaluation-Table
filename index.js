getTable = () => {
    alert()
    for (let i = 1; i <= noOfRows.value; i++) {
        console.log(i)
        // eval_table.innerHTML += `<tr></tr>`
        for( let j = 1; j <= noOfColumns.value; j++)
        // console.log(i*j)
        if(evaluate.value == 'Add')  {
            // eval_table.innerHTML += `<tr></tr>`
            eval_table.innerHTML += `<td>${i} + ${j} = ${(i + j)}</td>`
            // eval_table.innerHTML += `</tr>`
        }
        else if (evaluate.value == 'Multiply'){
            eval_table.innerHTML = `${i} x ${j} = ${(i * j)}`
            // eval_table.innerHTML += `</tr>`
        }
        else if (evaluate.value == 'Divide'){
            eval_table.innerHTML += `${i} / ${j} = ${(i / j)}`
            // eval_table.innerHTML += `</tr>`
        }
        else if (evaluate.value == 'Subtract'){
            eval_table.innerHTML += `${i} - ${j} = ${(i - j)}`
            
        }
        // eval_table.innerHTML += `</tr></tr>`
    }
}