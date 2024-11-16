function rock(){
    const randomNumber= Math.random();
    let computerMove ='';
    if(randomNumber>=0 && randomNumber <1/3){computerMove ='rock';}
    else if (randomNumber>=1/3 && randomNumber <2/3){computerMove ='paper';}
    else if (randomNumber >=2/3 && randomNumber <1){computerMove ='scissors';}  
    console.log(computerMove);

    let result='';
    if(computerMove ==='rock'){result='Tie';}
    else if (computerMove ==='paper'){result='You lose';}
    else if (computerMove ==='scisors'){result='You Win';}
    alert(`You picked rock.Computer picked ${computerMove}.${result}`)
}

function paper(){
    const randomNumber=Math.random();
    let computerMove ='';
    if(randomNumber>=0 && randomNumber<1/3){computerMove ='rock';}
    else if (randomNumber>=1/3 && randomNumber <2/3){computerMove ='paper';}
    else if (randomNumber >=2/3 && randomNumber <1){computerMove ='scissors';}  
    console.log(computerMove);

    let result='';
    if(computerMove ==='rock'){result='You Win';}
    else if (computerMove ==='paper'){result='Tie';}
    else if (computerMove ==='scisors'){result='You lose';}
    alert(`You picked paper.Computer picked ${computerMove}.${result}`)
    }  

function scissors(){
    const randomNumber=Math.random()
    let computerMove ='';
    if(randomNumber>=0 && randomNumber <1/3){computerMove ='rock';}
    else if (randomNumber>=1/3 && randomNumber <2/3){computerMove ='paper';}
    else if (randomNumber >=2/3 && randomNumber <1){computerMove ='scissors';}  
    console.log(computerMove);

    let result='';
    if(computerMove ==='rock'){result='You lose';}
    else if (computerMove ==='paper'){result='You Win';}
    else if (computerMove ==='scisors'){result='Tie';}
    alert(`You picked Scissors.Computer picked ${computerMove}.${result}`)
    }
