import { Cell } from "./Cell";
import { AcGameObject } from "./AcGameObject";

export class Snake extends AcGameObject{
    constructor(info, gamemap){
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)];

        this.speed = 5;
        
        this.next_cell = null;
        this.direction = -1; //0,1,2,3 上右下左
        this.status = "idle";//idle, move, die

        this.dr = [-1, 0, 1, 0];
        this.dc = [0, 1, 0, -1];
        this.step = 0;

        this.eps = 1e-2;
    }

    set_direction(d){
        this.direction = d;
    }
    start(){

    }

    next_step(){ //将snake的状态，调整为，能进行下一步的状态
    //包括：确定和构造next_cell，更改状态为move，增加步数step，移动一位cells
        const d = this.direction;
        this.next_cell = new Cell(this.cells[0].r + this.dr[d], this.cells[0].c + this.dc[d]);
        this.direction = -1;
        this.status = "move";
        this.step ++;

        const k = this.cells.length;
        for (let i = k; i > 0; i--){
            this.cells[i] = JSON.parse(JSON.stringify(this.cells[i-1]));
        }
    }

    update_move(){
        const dx = this.next_cell.x - this.cells[0].x;
        const dy = this.next_cell.y - this.cells[0].y;
        const distance = Math.sqrt(dx * dx, dy * dy); //每一帧移动的距离

        if(distance < this.eps){
            this.status = "idle";
            this.cells[0] = this.next_cell;
            this.next_cell = null;
        }else{
            const movedistance = this.speed * this.timedelta / 1000;
            this.cells[0].x += movedistance * dx / distance;
            this.cells[0].y += movedistance * dy / distance;
        }
    }

    update(){
        if(this.status === "move"){
            this.update_move();
        }
        this.render();
    }
    
    render(){
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;

        for(const cell of this.cells){
            ctx.beginPath();
            ctx.arc(cell.x * L , cell.y * L , L/2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}