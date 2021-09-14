const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

const TIE = 0;
const WIN = 1;
const LOSE = 2;

const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorButton = document.getElementById("scissor")
const generateImage = document.getElementById("generate-img")
const textMiddle =document.getElementById("text-middle");


rockButton.addEventListener('click', () => {
  jugar(ROCK);
  paperButton.style.filter = 'grayscale(100%)'
  scissorButton.style.filter = 'grayscale(100%)'
})

paperButton.addEventListener('click', () => {
  jugar(PAPER);
  rockButton.style.filter = 'grayscale(100%)'
  scissorButton.style.filter = 'grayscale(100%)'
})

scissorButton.addEventListener('click', () => {
  jugar(SCISSOR);
  rockButton.style.filter = 'grayscale(100%)'
  paperButton.style.filter = 'grayscale(100%)'
})

function jugar(user){
  const generate = Math.floor(Math.random() *3 );
  const result = process(user,generate )

  const interval = setInterval(()=>{
    const random = Math.floor(Math.random() *3 );
    generateImage.src = `./img/${random}.png`
  }, 50)

  textMiddle.innerHTML = "..."
  setTimeout( () => {
    clearInterval(interval);
    generateImage.src = `./img/${generate}.png`
    switch(result) {
      case TIE:
        alerta('Tie!', 'warning')
        break;
      case WIN:
        alerta('You win!', 'success')
        break;
      case LOSE:
        alerta('You lose!', 'error')
        break;
    }
    textMiddle.innerHTML =  "Escoge!";
  }, 800)
}

function process(user, generate) {
  if(user === generate) {
    return TIE;
  } else if( user=== ROCK) {
    if (generate === PAPER) return LOSE;
    if (generate === SCISSOR) return WIN;
  } else if( user === PAPER) {
    if (generate === ROCK) return WIN;
    if (generate === SCISSOR) return LOSE;
  } else if (user === SCISSOR) {
    if (generate === ROCK) return LOSE;
    if (generate === PAPER) return WIN;
  }
}

function alerta(text, icon) {
  setTimeout(()=> Swal.fire(
    text,
    'Try again',
    icon
  ),100)
  rockButton.style.filter = 'none'
  paperButton.style.filter = 'none'
  scissorButton.style.filter = 'none'
}