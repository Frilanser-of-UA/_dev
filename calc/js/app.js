let inputCalc = document.querySelector('.calc-input');
inputCalc.addEventListener("input", function(){
    inputCalc.value = inputCalc.value.replace (/\D/g, '');
});