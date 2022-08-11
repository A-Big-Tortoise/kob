const AC_GAME_OGJECTS = []

export class AcGameObject{
    constructor(){
        AC_GAME_OGJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() { //只执行一次
    }
    update() { //每一帧执行一次
    }

    on_destroy(){ //删除之前执行
    }
    destroy() {
        this.on_destroy()

        for (let i in AC_GAME_OGJECTS){
            const obj = AC_GAME_OGJECTS[i];
            if (obj == this){
                AC_GAME_OGJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //上一次被执行的时刻

const step = timestamp => {
    for (let obj of AC_GAME_OGJECTS){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step)
}
requestAnimationFrame(step)