const game = () => {
    
    let playerscore = 0;
    let computerscore = 0;
    let moves = 0;    

    const playgame = () =>
    {
        const Rock = document.querySelector('.Rock');
        const Paper = document.querySelector('.Paper');
        const Scissor = document.querySelector('.Scissor');
        const Items = [Rock,Paper,Scissor];
        const Computeritems  = ['Rock', 'Paper', 'Scissor'];     

        Playerchoices.forEach(choices => {
            choices.addEventListner('click', function(){
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = 'Moves Left : ${5-moves}';
            
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
        const result = document-querySelector('.result');
        const playerCount = document.querySelector('.p-count');
        const computerCount = document.querySelector('.c-count'); 

        Player = Player.toLowerCase();
        Computer = Computer.toLowerCase();

        if (Player == Computer)
            result.innerText = 'It s a tie'
        else if (Player == 'Rock' && Computer == 'Paper')
            {
                result.textContent = 'Computer Won this round';
                computerscore++;
                computerCount.textContent = computerscore;
            }
        else if (Player == 'Rock' && Computer == 'Scissor')
            {
                result.textContent = 'Player Won this round';
                playerscore++;
                playerCount.textContent = playerscore;
            }
        else if (Player == 'Scissor' && Computer == 'Rock')
            {
                result.textContent = 'Computer won this round';
                computerscore++;
                computerCount.textContent = computerscore; 
            }
        else if (Player == 'Scissor' && Computer == 'Paper')
            {
                result.text.Content = 'Player won this round';
                playerscore++;
                playerCount.textContent = playerscore; 
            }
        else if (Player == 'Paper' && computer == 'Scissor')
            {
                result.textContent = 'Computer won this round';
                computerscore++;
                computerCount.textContent = computerscore;
            }
        else if (Player == 'Paper' && Computer == 'Rock')
        {
            result.text.Content = 'Player won this round';
            playerscore++;
            playerCount.textContent = playerscore; 
        }
    }
    const gameover = (pCount, cCount) => {


    
    } 
    playgame();
}
game();