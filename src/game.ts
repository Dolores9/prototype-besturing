import * as PIXI from "pixi.js"
import tigerImage from "./images/tiger.png"
import backgroundImage from "./images/background.jpg"
import { Tiger } from "./tiger"

class bunnyGame {

    public pixi: PIXI.Application
    public loader: PIXI.Loader
    public background = backgroundImage
    public tigers : Tiger [] = []

    constructor() {
        this.pixi = new PIXI.Application({
            width: innerWidth, height: innerHeight})
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("backgroundTexture", backgroundImage)
            .add("tigerTexture", tigerImage)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
        this.pixi.stage.addChild(this.background)

        // for (let i = 0; i < 25; i++) {
        //     let lonelyFish = new Fish(this.loader.resources["fishTexture"].texture!)
        //     this.pixi.stage.addChild(lonelyFish)
        //     this.fishes.push(lonelyFish)

        //     let manyBubbles = new Bubble(this.loader.resources["bubbleTexture"].texture!)
        //     this.pixi.stage.addChild(manyBubbles)
        //     this.bubbles.push(manyBubbles)

        // }
        for(let i = 0; i < 1; i++){
            let tiger = new Tiger(this.loader.resources["tigerTexture"].texture!)
            this.pixi.stage.addChild(tiger)
            this.tigers.push(tiger)
        }


        this.pixi.ticker.add((delta) => this.updateTheStage(delta))
    }

    updateTheStage(delta: number) {

        // for (let myfish of this.fishes) {
        //     myfish.swim()
        // }

        for (let myTiger of this.tigers){
            myTiger.update();
        }

    }
}

new tigerGame()