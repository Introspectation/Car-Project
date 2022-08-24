class Controls {
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.backward=false;//also reverse
        this.brake=false;

        this.#addKeyboardListeners();
    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){//i used 2 different case for result, original is only Arrowkeys
                case "ArrowLeft":
                case "A":
                case "a":
                    this.left=true;
                    break;
                case "ArrowRight":
                case "D":
                case "d":
                    this.right=true;
                    break;
                case "ArrowUp":
                case "W":
                case "w":
                    this.forward=true;
                    break;
                case "ArrowDown":
                case "S":
                case "s":
                    this.backward=true;
                    break;
                case "B":
                case "b":
                    this.brake=true;
            }
            console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){//i used 3 different case for result, original is only Arrowkeys
                case "ArrowLeft":
                case "A":
                case "a":
                    this.left=false;
                    break;
                case "ArrowRight":
                case "D":
                case "d":
                    this.right=false;
                    break;
                case "ArrowUp":
                case "W":
                case "w":
                    this.forward=false;
                    break;
                case "ArrowDown":
                case "S":
                case "s":
                    this.backward=false;
                    break;
                case "B":
                case "b":
                    this.brake=false;
            }
            console.table(this);
        }
    }
}