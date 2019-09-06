import 'phaser';
import GameScene from './scenes/GameScene';
const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 600,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene
        // Entity
    ]
};

const game = new Phaser.Game(config);