const interpolation = (obj) => {
    const durationStep = obj.duration / obj.step
    let delayStep = (obj.end - obj.start) / obj.step
    let [x, y] = [obj.start , 0]
    let dir = false
    if (obj.start > obj.end) {
        dir = true
        delayStep = (obj.start - obj.end) / obj.step
    }
    const count = setInterval(()=> {
        y += durationStep
        obj.callback([parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))]);
        if (dir) {
            if (x <= obj.end) {
                clearInterval(count)
            }
            x -= delayStep
        } else {
            x += delayStep
            if (x >= obj.end) {
                clearInterval(count)
            }
        }
        if (y >= obj.duration) {
            clearInterval(count)
        }
    },durationStep)
}


/* const interpolation = (obj) => {
    obj.callback = function() {
        let res = []
        const ds = this.duration / this.step
        const ts = this.end / this.step
        let startts = this.start
        let startds = this.start
        for (let i = 0; i < this.step;i++) {
            startds += ds
            res.push([parseFloat(startts.toFixed(1)),parseFloat(startds.toFixed(1))])
            startts+= ts
        }
        return res
    }
    return obj.callback()
} */
// const obj = {step: 5,start: 0,end: 1,duration: 10}
// console.log(interpolation(obj))
// console.log(obj.callback());

/*
    [
        [0, 2],
        [0.2, 4],
        [0.4, 6],
        [0.6, 8],
        [0.8, 10],
    ]
*/
