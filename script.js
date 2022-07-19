// ------------variables---------------

let playerscore = 0;
let computerscore = 0;
let moves = 0;   
let RockBtn = document.querySelector('.Rock');
let PaperBtn = document.querySelector('.Paper');
let  ScissorBtn = document.querySelector('.Scissor');
let Computeritems  = ['Rock','Paper','Scissor'];     
let Items = [RockBtn,PaperBtn,ScissorBtn];
let movesLeft = document.querySelector('.movesleft');

// ---------------functions------------------

function playGame() {
        
        Items.forEach(choices => {
            choices.addEventListener('click', function(){
                
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;
                
                const c_choice = Math.floor(Math.random()*3);
                const Computerchoice = Computeritems[c_choice]; 
                winner(this.innerText, Computerchoice);
                
                if (moves == 5){
                    gameOver(Items, movesLeft);
                }
            })
        })  
    }
    const winner = (Player, Computer) => 
    {
        const result = document.querySelector('.result');
        const playerCount = document.querySelector('.p-count');
        const computerCount = document.querySelector('.c-count'); 
        
        Player = Player.toLowerCase();
        Computer = Computer.toLowerCase();
        
        if (Player == Computer)
        result.innerText = 'It s a tie'
        else if (Player == 'rock' && Computer == 'paper')
        {
            result.innerText = 'Computer Won this round';
            computerscore++;
            computerCount.innerText = `${computerscore}`;
        }
        else if (Player == 'rock' && Computer == 'scissor')
        {
            result.innerText = 'Player Won this round';
            playerscore++;
            playerCount.innerText = `${playerscore}`;
        }
        else if (Player == 'scissor' && Computer == 'rock')
        {
            result.innerText = 'Computer won this round';
            computerscore++;
            computerCount.innerText = `${computerscore}`; 
        }
        else if (Player == 'scissor' && Computer == 'paper')
        {
            result.innerText = 'Player won this round';
            playerscore++;
            playerCount.innerText = `${computerscore}`; 
        }
        else if (Player == 'paper' && Computer == 'scissor')
        {
            result.innerText = 'Computer won this round';
            computerscore++;
            computerCount.innerText = `${computerscore}`;
        }
        else if (Player == 'paper' && Computer == 'rock')
        {
            result.textContent = 'Player won this round';
            playerscore++;
            playerCount.innerText = `${playerscore}`; 
        }
    }
    const gameOver = (pCount, cCount) => {
        
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        
        Items.forEach(choices => {
            choices.style.display = 'none';
        })
        
        chooseMove.innerText = 'Game over!';
        movesLeft.style.display = 'none';
        
            reloadBtn.innerText = 'Play again';
            reloadBtn.style.display = 'flex';
            reloadBtn.style.textAlign = "center";
            reloadBtn.addEventListener('click', function() {
                window.location.reload();
            })        
        if (playerscore == computerscore){
            result.style.display = '25px';
            result.innerText = 'Its a tie, no one won this round';
            result.style.color = '#232528';
        }
        else if (playerscore > computerscore){
            result.style.fontSize = '25px';
            result.innerText = 'YOU WON THIS GAME!';
            result.style.color= '#232528';
        }
        else if( playerscore < computerscore){
            result.style.fontSize = '25px';
            result.innerText = 'SADLY YOU LOST ):'
            result.style.color = '#232528';
        }
    }
playGame();