let canvas = document.getElementById('clock')
let ctx = canvas.getContext("2d")

let ratio = window.devicePixelRatio

ctx.scale(ratio, ratio)

function step(timestamp) {
    //update
    let date = new Date()

    let second = date.getSeconds()
    let minute = date.getMinutes()
    let hour = date.getHours()

    let state = []

    state[0] = Math.floor(hour / 10).toString(2).padStart(4, '0').split('')
    state[1] = (hour % 10).toString(2).padStart(4, '0').split('')

    state[2] = Math.floor(minute / 10).toString(2).padStart(4, '0').split('')
    state[3] = (minute % 10).toString(2).padStart(4, '0').split('')

    state[4] = Math.floor(second / 10).toString(2).padStart(4, '0').split('')
    state[5] = (second % 10).toString(2).padStart(4, '0').split('')

    //render
    ctx.save()

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 4; j++) {
            if (i % 2 == 0 && j == 0) continue

            ctx.beginPath()

            let x = 10 + i * 30
            let y = 10 + j * 30

            ctx.arc(x, y, 10, 0, 2 * Math.PI, 0)

            if (state[i][j] == 1) ctx.fillStyle = '#fe011b'
            else ctx.fillStyle = '#fff'

            ctx.fill()
        }
    }

    ctx.restore()
    window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)

function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("txt").innerHTML =
        hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 100);
}
function checkTime(i){
    if(i < 10){
        i = "0" + i;
        return i;
    }
    else{
        return i;
    }
}