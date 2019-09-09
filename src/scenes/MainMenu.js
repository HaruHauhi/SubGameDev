class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MainMenu" });
    }
    preload() {
        this.load.image('1', '../../images/Birds eye view.png');
        this.load.image('2', '../../images/Sign.png');
        this.load.image('3', '../../images/Sign2.png');
        this.load.image('4', '../../images/Sign3.png');
        this.load.image('5', '../../images/Sign4.png');
        this.load.image('6', '../../images/Grass.png');
        this.load.image('7', '../../images/Ground.png');
        this.load.image('8', '../../images/Mountain.png');
        this.load.image('9', '../../images/Sun and Sky.png');
        
        
    }

    create() {
        this.add.image(0, 0, "9");
        this.Play = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "2"
        );
        
       
        this.Play.setInteractive();

        
                    
        this.Play.on("pointerdown", function () {
            this.Play.setTexture("2");
           
            this.scene.start('GameScene');
        }, this);

        
        var text = this.add.text(250, 350, 'Play', { fill: '#00ff00' });
    }
    
    update() {

    }
}
export default MainMenu;
