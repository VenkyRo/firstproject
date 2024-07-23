const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");

const randomDice = ()=> {
    const random = Math.floor(Math.random() * 7);
    if(random >= 1 && random<=6){
        rollDice(random);
    }
    else{
        randomDice();
    }
}

const rollDice = random => {
    dice.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random){
            case 1 : dice.style.transfrom = 'rotateX(0deg) rotateY(0deg)'
            break;

            case 6 : dice.style.transfrom = 'rotateX(180deg) rotateY(0deg)'
            break;

            case 2 : dice.style.transfrom = 'rotateX(-90deg) rotateY(0deg)'
            break;

            case 5 : dice.style.transfrom = 'rotateX(90deg) rotateY(0deg)'
            break;

            case 3 : dice.style.transfrom = 'rotateX(0deg) rotateY(90deg)'
            break;

            case 4 : dice.style.transfrom = 'rotateX(0deg) rotateY(-90deg)'
            break;

            default: break;
        }
        dice.style.animation = 'none';
        
    }, 4050);
}

rollBtn.addEventListener('click',randomDice);