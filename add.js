// const add = (a, b) => {
//     return a + b;
// }

// module.exports = add;
const alert = "Fire Alert! Fire Alert!! Fire Alert!!! Please use the exit closest to you"
const interval = 3000 // 3 seconds

var time = 0
function setTime() {
    time = time + 3;

    console.log(alert);
    if (time >= 30) {
        clearInterval(timer);
    }
}
timer = setInterval(setTime, interval)