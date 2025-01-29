const form = document.getElementById('formCMP');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB'); 

    const containerMensagem = document.querySelector('.mensagemJS')
    
    const numeroIgual = "Por favor, insira números diferentes";
    const correctMSG = "Sucesso, o número B é maior que A";
    const incorrectMSG = "Falha, o número B é menor que A";

    if(campoB.value == campoA.value){
        containerMensagem.innerHTML = numeroIgual;
        containerMensagem.style.backgroundColor = 'grey';
        containerMensagem.style.display = 'block';
    }
    else if (campoB.value > campoA.value) {
        containerMensagem.innerHTML = correctMSG;
        containerMensagem.style.backgroundColor = 'green';
        containerMensagem.style.display = 'block';

    }else if (campoB.value < campoA.value){
        containerMensagem.innerHTML = incorrectMSG;
        containerMensagem.style.backgroundColor = 'red';
        containerMensagem.style.display = 'block';
    }

    campoA.value = '';
    campoB.value = '';



});

console.log(form);