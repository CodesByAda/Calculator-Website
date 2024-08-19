const displaybox = document.getElementById('display-box');
const calcButtons = document.querySelectorAll('.calc-button');
const AC = document.getElementById('allclear');
const CE = document.getElementById('clear-element');
const equals = document.getElementById('equals');


calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        const btnval = button.innerHTML;

        if (button.id == equals.id) {
            if (displaybox.value) {
                const answer = eval(displaybox.value);
                displaybox.value = answer;
            }
        }
        else if (button.id == AC.id) {
            displaybox.value = null;
        }
        else if (button.id == CE.id) {
            let currentValue = displaybox.value;

            if(currentValue) {
                displaybox.value = currentValue.slice(0, -1);
                console.log(displaybox + currentValue);
            }
        }
        else {
            displaybox.value += btnval;
        }
    })
})