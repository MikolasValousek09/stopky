radio.setGroup(92)
Sensors.SetLightLevel()

let hasStarted = false
Sensors.OnLightDrop(function () {
    music.playTone(600, 500)
    console.log("Start")
    basic.showString("!")
    if (!hasStarted) {
       
        radio.sendNumber(1)
        hasStarted = true
    }
})

radio.onReceivedNumber(function (receivedNumber: number) {

    console.log(receivedNumber)
    basic.showNumber(receivedNumber)
})


input.onButtonPressed(Button.A, function () {

    radio.sendNumber(9)
    control.reset()
})