/**
 * @filename: instructions.ts
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date August 15, 2016
 * @description COMP397 - Web Game Programming - Final Project - The JavaScript Arcade Game
 * @version 0.3 - Version includes levels 1, 2, and 3
 */

module scenes {
    export class Instructions extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _instructionsLabel: objects.Label;
        private _startButton: objects.Button;
        private _returnButton: objects.Button;
        private _planet:objects.Button;
        private _cloud:createjs.Bitmap;
        private _bullet:createjs.Bitmap;
        private _fuel:createjs.Bitmap;
        private _gun:createjs.Bitmap;
        private _life:createjs.Bitmap;
        private _robot:createjs.Bitmap;
        /**
         * Creates an instance of Instructions scene.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public start(): void {


            let gameInstructions = [];
            let instructionsArray = [
                "STEER WITH A MOUSE",
                "",
                "INFECT PLANETS: ",
                "",
                "AVOID CLOUDS AND BULLETS: ",
                "",
                "PICK USEFUL ITEMS: ",
                "",
                "FINISH THE ROBOT WITH MOUSE: ",

            ];
            this._space = new objects.Space("space");
            this.addChild(this._space);
            for (var line = 0; line < instructionsArray.length; line++) {

                gameInstructions[line] = new createjs.Text(instructionsArray[line], "BroadwayFont");
                gameInstructions[line].x = 10
                gameInstructions[line].y = 20 + (2 * line);

                this.addChild(new objects.Label(
                    instructionsArray[line], "25px", "BroadwayFont", "#7200ff",
                    320, 40 * line + 40, true));
            }

            // Add Menu Label
            this.addChild(this._instructionsLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 400, true
            );
            this._startButton.scaleX = 1.5;
            this._startButton.scaleY = 1.5;
            this.addChild(this._startButton);

            this._returnButton = new objects.Button(
                "returnButton", 320, 450, true
            );
            this._returnButton.scaleX = 1.5;
            this._returnButton.scaleY = 1.5;
            this.addChild(this._returnButton);

            // start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._returnButton.on("click", this._returnButtonClick, this);

            this._planet = new objects.Button("planet", 490,120,true);
            this._planet.scaleX=0.7;
            this._planet.scaleY=0.7;
            this.addChild(this._planet);

            this._cloud = new objects.Button("chargedCloud", 550,200,true);
            this._cloud.scaleX=0.5;
            this._cloud.scaleY=0.5;
            this.addChild(this._cloud);

            this._bullet = new objects.Button("bullet", 600,200,true);
            this.addChild(this._bullet);

            this._fuel = new objects.Button("fuelBox", 500,279,true);
            this._fuel.scaleX=0.7;
            this._fuel.scaleY=0.7;
            this.addChild(this._fuel);

            this._gun = new objects.Button("gunBox", 540,280,true);
            this._gun.scaleX=0.7;
            this._gun.scaleY=0.7;
            this.addChild(this._gun);

            this._life = new objects.Button("liveBox", 580,280,true);
            this._life.scaleX=0.7;
            this._life.scaleY=0.7;
            this.addChild(this._life);

            this._robot = new objects.Button("robot", 560,360,true);
            this._robot.scaleX=0.5;
            this._robot.scaleY=0.5;
            this.addChild(this._robot);

            // add this scene to the global scene container
            core.stage.addChild(this);

            
        }

        public update(): void {
            this._space.update();
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
        private _returnButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        }
    }
}