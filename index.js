/*globals Phaser */
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
};

let gameState = {};

function preload() {}

function create() {
    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

    //  Add in a stack of balls

    for (var i = 0; i < 64; i++)
    {
        var ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
        ball.setCircle();
        ball.setFriction(0.005);
        ball.setBounce(1);
    }
}

function update() {
    
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true
            
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config)
