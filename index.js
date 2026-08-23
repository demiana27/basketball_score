let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function addHome(points) {
    homeScore += points
    homeScoreEl.innerText = homeScore
}

function addGuest(points) {
    guestScore += points
    guestScoreEl.innerText = guestScore
}