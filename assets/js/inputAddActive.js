let input = document.querySelectorAll('[type="radio"]');
let label = document.getElementsByTagName('label');
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function() {
        for (let j = 0; j < input.length; j++) {
            if (input[j].checked === true) {
                label[j].classList.add('active');
            } else {
                label[j].classList.remove('active');
            }
        }
    })
}