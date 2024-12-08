const EventEmitter=require("node:events")

class Timer extends EventEmitter{
    constructor(duration){
        super()
        this.duration=duration
    }
    start(){
        this.emit("start")
        this.countdown(this.duration)
    }
    countdown(timeLeft){
        if(timeLeft<0){
            this.emit("end","timer ended")
            return
        }
        this.emit("tick",timeLeft)
        const star=Date.now()
        while(Date.now()-star<1000){}
        this.countdown(timeLeft-1)
    }
}

module.exports = Timer







