radio.onReceivedNumber(function (receivedNumber) {
    enex = receivedNumber
    eney = -1
})
input.onButtonPressed(Button.A, function () {
    padx += -1
})
function moveEnemy () {
    if (eney < 5) {
        led.unplot(enex, eney)
        eney += 1
        led.plot(enex, eney)
        if (eney == 4) {
            if (enex == padx) {
                music.playMelody("G A B - - - - - ", 600)
            } else {
                music.playMelody("F E D - - - - - ", 600)
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (missy == -1) {
        missx = padx
        missy = 4
    }
})
input.onButtonPressed(Button.B, function () {
    padx += 1
})
function moveMissle () {
    if (missy > -1) {
        if (missy < 4) {
            led.unplot(missx, missy)
        }
        if (missy == 0) {
            radio.sendNumber(missx)
        }
        missy += -1
        led.plot(missx, missy)
    }
}
let missx = 0
let eney = 0
let enex = 0
let missy = 0
let padx = 0
padx = 2
let ppadx = padx
missy = -1
led.plot(padx, 4)
loops.everyInterval(500, function () {
    moveMissle()
    moveEnemy()
})
basic.forever(function () {
    if (padx != ppadx) {
        if (padx < 0) {
            padx = 0
        }
        if (padx > 4) {
            padx = 4
        }
        led.unplot(ppadx, 4)
        led.plot(padx, 4)
        ppadx = padx
    }
})
