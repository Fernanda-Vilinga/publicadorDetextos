
function Random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function getRund (array: any[]): any {
    const indiceRun= Random(0, array.length);
  
    return array[indiceRun];
  }
  

  const texts:string[]=["O mundo precisa mais de ti !",
    "Não desanime , se  este desafio não for porta será escada! " , 
    "EU nao sou a boela da banda!", 
    "O princípio não define o final !" , 
    "Hoje Deus preparou algo bem melhor para voçe!",
    "Ame o teu próximo como a ti mesmo!"]
  
  const valorAleatorio = getRund(texts);

  console.log("Valor aleatório da array:", valorAleatorio);

  
