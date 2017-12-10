var SpaceHipster = SpaceHipster || {}

SpaceHipster.Boot = function() {}

SpaceHipster.Boot.prototype = {

    preload: function() {
        // load image
        this.load.image('logo', 'assets/images/logo.png');
        // load image
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');

    },

    create: function() {
        // set background to white
        this.game.stage.backgroundColor = "#fff";
        // scale mode
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // scale option
        this.scale.minWidth = 240;

        this.scale.maxWidth = 2880;

        this.scale.minHeight = 170;

        this.scale.maxHeight = 1920;

        this.scale.pageAlignHorizontally = true;

        this.scale.setScreenSize(true);
        // add arcade physics libary
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // move to Preload state
        this.state.start('Preload');
    }

}