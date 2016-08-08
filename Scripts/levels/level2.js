/**
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date August 1, 2016
 * @description COMP397 - Web Game Programming - Final Project - The JavaScript Arcade Game
 * @version 0.1 - Initial version of Flying Dead
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var levels;
(function (levels) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        function Level2() {
            _super.call(this);
        }
        Level2.prototype.InitializeLevel = function () {
            // stub initialization
            this._stubLabel = new objects.Label("This is level 2 stub.", "40px", "Broadway", "#7200ff", 320, 140);
            this._stubNextLevelButton = new objects.Button("nextLevelStub", 320, 200, true);
            this._stubNextLevelButton.on("click", this._nextLevel, this);
            this._stubGameOverButton = new objects.Button("gameOverStub", 320, 300, true);
            this._stubGameOverButton.on("click", this._gameOver, this);
            this.addChild(this._stubLabel);
            this.addChild(this._stubNextLevelButton);
            this.addChild(this._stubGameOverButton);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Level2.prototype.UpdateLevel = function () {
        };
        // EVENT HANDLERS ++++++++++++++++
        /**
         * Simulates next level continuation
         *
         * @param event
         * @private
         */
        Level2.prototype._nextLevel = function (event) {
            createjs.Sound.stop();
            core.play.levelNumber++;
            core.play.ChangeLevel();
        };
        /**
         * Simulates game over for this level
         *
         * @param event
         * @private
         */
        Level2.prototype._gameOver = function (event) {
            createjs.Sound.stop();
            createjs.Sound.play("over");
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Level2;
    }(objects.Level));
    levels.Level2 = Level2;
})(levels || (levels = {}));
//# sourceMappingURL=level2.js.map