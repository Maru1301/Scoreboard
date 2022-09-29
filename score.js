let homeScore = 0
let guestScore = 0
let home_score = document.getElementById("home-score")
let guest_score = document.getElementById("guest-score")

function H_add(score){
    homeScore += score
    home_score.textContent = homeScore;
}

function G_add(score){
    guestScore += score
    guest_score.textContent = guestScore;
}

function restart() {
    homeScore = guestScore = 0
    home_score.textContent = guest_score.textContent = 0
}