setInterval(checkbackground,200)

function checkbackground(){
    generateRandomColor()
    changeBackgroundColor()
    changeBackgroundText()
}

function generateRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16)
}
    
function changeBackgroundColor(){
    let colorBG=document.getElementById('color-overlay')
    colorBG.style.backgroundColor=generateRandomColor()
    }

    function changeBackgroundText(){
        let textBG = document.getElementById('text')
        if(textBG.innerHTML == "LET'S ROCK AND ROLL")
        textBG.innerHTML = 'ON THE FLOOR BABY'
        else if(textBG.innerHTML == "ON THE FLOOR BABY")
        textBG.innerHTML = 'HIT IT HARD'
        else if(textBG.innerHTML == "HIT IT HARD")
        textBG.innerHTML = 'ROCK THE PARTY BABY'
        else if(textBG.innerHTML == "ROCK THE PARTY BABY")
        textBG.innerHTML = "LET'S ROCK AND ROLL"
    }