function Random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRund(array) {
    var indiceRun = Random(0, array.length);
    ttestoAleatorio.textContent=array[indiceRun];
}
var texts = ["O mundo precisa mais de ti !",
    "Não desanime , se  este desafio não for porta será escada! ",
    "EU nao sou a boela da banda!",
    "O princípio não define o final !",
    "Hoje Deus preparou algo bem melhor para voçe!",
    "Ame o teu próximo como a ti mesmo!"];

    const click=document.getElementById('gerar');
    const ttestoAleatorio=document.getElementById('testoAleatorio')
    
       gerar.addEventListener('click', () => getRund(texts))
          
       console.log(gerar)

       

 
 