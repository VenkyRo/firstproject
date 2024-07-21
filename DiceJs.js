function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImg");

    const values = [];
    const images = [];

    for(let i = 0;i<numOfDice;i++){
        const value = Math.floor(Math.random()*6)+1;
       // console.log(value);
       values.push(value);
       images.push(`<img src="DiceIMG/${value}.png " alt="Dice ${value}">`);

    }
    //console.log(values);
    diceResult.textContent=`dice:${values.join(',')}`;
    diceImages.innerHTML=images.join('');
    
}