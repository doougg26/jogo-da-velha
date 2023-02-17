let player, winner = null
let selectedPlayer = document.getElementById('selected')
let selectedWinner = document.getElementById('winner')
let squares = document.getElementsByClassName('quadrado')


changePlayer('X')

function square(id) {
    let sqred = document.getElementById(id)
    if (winner !== null) {
        return
    }
    if (sqred.innerHTML !== '-') {
        return
    }
    sqred.innerHTML = player
    sqred.style.color = '#000'
    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    changePlayer(player)
    checkWinner()
}

function changePlayer(value) {
    player = value
    selectedPlayer.innerHTML = player

}
function checkWinner() {
    let q1 = document.getElementById('1')
    let q2 = document.getElementById('2')
    let q3 = document.getElementById('3')
    let q4 = document.getElementById('4')
    let q5 = document.getElementById('5')
    let q6 = document.getElementById('6')
    let q7 = document.getElementById('7')
    let q8 = document.getElementById('8')
    let q9 = document.getElementById('9')

    if (checkSequence(q1, q2, q3)) {
        changeColor(q1, q2, q3)
        changeWinner(q1)
        return
    }

    if (checkSequence(q4, q5, q6)) {
        changeColor(q4, q5, q6)
        changeWinner(q4)
        return
    }

    if (checkSequence(q7, q8, q9)) {
        changeColor(q7, q8, q9)
        changeWinner(q7)
        return
    }

    if (checkSequence(q1, q4, q7)) {
        changeColor(q1, q4, q7)
        changeWinner(q1)
        return
    }

    if (checkSequence(q2, q5, q8)) {
        changeColor(q2, q5, q8)
        changeWinner(q2)
        return
    }

    if (checkSequence(q3, q6, q9)) {
        changeColor(q3, q6, q9)
        changeWinner(q3)
        return
    }

    if (checkSequence(q1, q5, q9)) {
        changeColor(q1, q5, q9)
        changeWinner(q1)
        return
    }

    if (checkSequence(q3, q5, q7)) {
        changeColor(q3, q5, q7)
        changeWinner(q3)
    }

}



function changeWinner(sqred) {
    winner = sqred.innerHTML
    selectedWinner.innerHTML = winner
}

function changeColor(q1, q2, q3) {
    q1.style.background = '#00ff00'
    q2.style.background = '#00ff00'
    q3.style.background = '#00ff00'

}

function checkSequence(q1, q2, q3) {
    let equal = false
    if (q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) {
        equal = true
    }
    return equal
}

function reset() {
    winner = null
    selectedWinner.innerHTML = ''
    for (let i = 1; i <= 9; i++) {
        let quad = document.getElementById(i)
        quad.style.background = '#eee'
        quad.style.color = '#eee'
        quad.innerHTML = '-'
    }
    changePlayer('X')
}