const result = document.getElementById('result')
const operation = document.getElementById('operation')
const buttons = document.querySelectorAll('.btn')

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(button.id === 'clear'){
            currentInput = '';
            previousInput = '';
            operator = '';
            result.textContent = 0
            operation.textContent = 0
        } else if (button.id === 'equals') {
            if (currentInput !== '' && previousInput !== ''){
                operation.textContent = `${previousInput} ${operator} ${currentInput}`
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`)
                result.textContent = currentInput
                previousInput = ''
                operator = ''
                
            }
        } else if (button.classList.contains('operator')){
            if(button.id === 'multiply'){
                operator = '*'
                previousInput = currentInput
                currentInput = ''
                operation.textContent = `${previousInput} ${operator} ${currentInput}`
            } else if(button.id === 'percentage'){
                operator = '%'
                previousInput = currentInput
                currentInput = ''
                operation.textContent = `${previousInput} ${operator} ${currentInput}`
            } else if(button.id === 'division'){
                operator = '/'
                previousInput = currentInput
                currentInput = ''
                operation.textContent = `${previousInput} ${operator} ${currentInput}`
            } else if(button.id === 'subtract'){
                operator = '-'
                previousInput = currentInput
                currentInput = ''
                operation.textContent = `${previousInput} ${operator} ${currentInput}`
            } else if(button.id === 'addition'){
                operator = '+'
                previousInput = currentInput
                currentInput = ''
                operation.textContent = `${previousInput} ${operator} ${currentInput}`
            } else if(button.id === 'change-symbol'){
                const changeSymbol = document.getElementById('change-symbol');
                changeSymbol.addEventListener('click', () => {
                    currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
                    result.textContent = currentInput;   
                });
            }
        } else {
            currentInput += value
            result.textContent = currentInput
            operation.textContent = previousInput
        }
    })
})