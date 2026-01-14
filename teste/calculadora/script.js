function soma() {
    var numero1 = parseFloat(document.getElementById("n1").value);
    var numero2 = parseFloat(document.getElementById("n2").value);
    var resp = document.getElementById("resposta");
    resp.textContent = numero1 + numero2;

    //nao deixar console  

    console.log(numero1, numero2);
}
function subtracao() {
    var numero3 = parseFloat(document.getElementById("num3").value);
    var numero4 = parseFloat(document.getElementById("num4").value);
    var resp = document.getElementById("respostaSubtracao");
    resp.textContent2 = numero3 - numero4;
    console.log(numero3, numero4);
}
function multiplicacao() {
    var numero5 = parseFloat(document.getElementById("nume5").value);
    var numero6 = parseFloat(document.getElementById("nume6").value);
    var resp = document.getElementById("respostaMultiplicacao");
    resp.textContent3 = numero5 * numero6;
    console.log(numero5, numero6);
}

function divisao() {
    var numero1 = parseFloat(document.getElementById("num7").value);
    var numero2 = parseFloat(document.getElementById("num8").value);
    var resp = document.getElementById("respostaDivisao");
    resp.textContent4 = numero1 / numero2;
    console.log(numero1, numero2);
}