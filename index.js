window.onload = () => {
    let computer = 0 
    let player = 0
    function getChoice() {
        let choices = ['Rock', 'Paper', 'Scissors']
        return choices[Math.floor(Math.random()*2)]
    }
    function checkScore() {
        let winner; 
        if(computer===5) {
            winner = "Computer Won!"
        } else if(player === 5) {
            winner = "Player Won!"
        } 
        if(computer === 5 || player === 5) {
            let result = document.querySelector('.result')
            result.textContent = winner
            computer = 0 
            player = 0 
        }

    }
    function playRound(c, p) {
        if(c === p) {
            return 'Draw'
        } else if(c === 'rock' && p === 'scissors') {
            computer++
        } else if(p === 'rock' && c === 'scissors') {
            player++
        } else if(c==='paper' && p === 'rock') {
            computer++
        } else if(p === 'paper' && c === 'rock') {
            player++
        } else if(c ==='scissors' && p === 'paper') {
            computer++
        } else if(p === 'scissors' && c === 'paper') {
            player++
        } 
    }
    let buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let c = getChoice()
            let p;
            if(button.id === '1') {
                p = 'Rock'
            } else if(button.id === '2') {
                p = 'Paper'
            } else if(button.id === '3') {
                p = 'Scissors'
            }
            console.log(`p: ${p}, c: ${c}`)
            let result = document.querySelector('.result')
            result.textContent = ""
            playRound(c.toLowerCase(), p.toLowerCase())
            let selection = document.querySelector('.selections')
            selection.textContent = `Player: ${p} | Computer: ${c}`
            let score = document.querySelector('.scores')
            score.textContent = `Player: ${player} | Computer: ${computer}`
            checkScore()
        })
    })
}