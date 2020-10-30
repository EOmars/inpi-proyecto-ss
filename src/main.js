import Phaser from './lib/phaser.js'
import Scene1 from './scenes/Scene1.js'





export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: Scene1,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        }
    }
})