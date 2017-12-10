SpaceHipster.MainMenu = function() {};

SpaceHipster.MainMenu.prototype = {
    /*
        score recieve from Game state.
        in the first time, score set 0
    */
    init: function(score) {
        var score = score || 0;
        this.highestScore = this.highestScore || 0;
    
        this.highestScore = Math.max(score, this.highestScore);
    },
    create: function() {
        // create background by loop one image more time
        this.background = this.game.add.tileSprite(0,  0,  this.game.width, this.game.height, 'space');

        this.background.autoScroll(-20, 15);

        var text = "Tap to begin"; 

        var style = {
            font: "30px Arial",
            fill: "#fff",
            align: "center"
        }

        var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);

        t.anchor.setTo(0.5, 0.5);

        text = "Highest score: " + this.highestScore;

        style = {
            font: "15px Arial",
            fill: "#fff",
            align: "center"
        }
        
        var h = this.game.add.text(this.game.width/2, this.game.height/2+50, text,  style);

        h.anchor.setTo(0.5, 0.5);

    },

    update: function() {

        if (this.game.input.activePointer.justPressed()) {

            this.game.state.start('Game');

        }

    }
}