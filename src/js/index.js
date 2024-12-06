const botao = document.querySelector(".botao").addEventListener('click', aleatoryAdvice);

async function getAdvice() {
    const urlApi = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(urlApi);
    return await resposta.json();
}

async function aleatoryAdvice() {
    const conselhos = await getAdvice();
    const advice = conselhos.slip.advice;
    console.log(conselhos)
    document.getElementById("advices").textContent = advice;
    const id = conselhos.slip.id;
    document.getElementById("numberId").textContent = id;
}

aleatoryAdvice()