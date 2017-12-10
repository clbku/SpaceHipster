// if SpaceHipster is exist, use it. or not, create new object
var SpaceHipster = SpaceHipster || {};
// creat Preload state
SpaceHipster.Preload = function() {}
// set prototype
SpaceHipster.Preload.prototype = {

    preload: function() {
        // add sprite
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        // set anchor
        this.splash.anchor.setTo(0.5, 0.5);
        // add sprite
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY+128, 'preloadbar');

        this.preloadBar.anchor.setTo(0.5, 0.5);
        // set preload sprite
        this.load.setPreloadSprite(this.preloadBar);
        // load
        this.load.image('space', 'assets/images/space.png');

        this.load.image('rock', 'assets/images/rock.png');

        this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
        
        this.load.spritesheet('playership', 'assets/images/player.png', 12, 12);

        this.load.image('playerParticle', 'assets/images/player-particle.png');

        this.load.audio('collect', 'assets/audio/collect.ogg');

        this.load.audio('explosion', 'assets/audio/explosion.ogg');
    },
    create: function() {
        this.state.start('MainMenu');
    },

}