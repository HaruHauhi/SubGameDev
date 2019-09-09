let width;
let height;
let x;
let y;

class GameScene extends Phaser.Scene
{
    constructor (test)
    {
        super({ key: 'GameScene' });
    }
    preload ()
    {
        this.load.image('sky', '../../src/assets/Birds eye view.png');

    }
    create ()
    {
        
        
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height *0.5;

        this.tileSprite = this.add.tileSprite(x,y,500,700,'sky')
        
        
        
    }
    update ()
    {        
    this.tileSprite.tilePositionY -=1;
        
    }
}

export default GameScene;
