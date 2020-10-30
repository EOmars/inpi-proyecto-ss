import Phaser from '../lib/phaser.js'


export default class Scene1 extends Phaser.Scene {

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.GameObjects.Image} */
    vaca
    arbol

    IMAGE_ROUTE = 'assets/escenario1/'
    SOUND_ROUTE = 'assets/escenario1/audio/'

    constructor() {
        super('game')
    }

    preload() {
        //audios
        this.load.audio('tsakaaj', `${this.SOUND_ROUTE}tsakaaj.ogg`)
        this.load.audio('ujts', `${this.SOUND_ROUTE}ujts.ogg`)

        //imagenes
        this.load.image('background', 'assets/escenario1/escenario1.jpg')
        
        this.load.image('arbol', 'assets/escenario1/arbol.png')
        this.load.image('arbol-bn', 'assets/escenario1/arbol-bn.png')        
        this.load.image('arbol-borde','assets/escenario1/arbol-borde.png')

        this.load.image('vaca', 'assets/escenario1/vaca.png')
        this.load.image('vaca-bn', 'assets/escenario1/vaca-bn.png')
        this.load.image('vaca-borde', 'assets/escenario1/vaca-borde.png')

    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.vaca = this.add.image(450, 450, 'vaca-bn').setScale(0.6)
            .setName('vaca')
            .setData('audio', 'tsakaaj')
            .setInteractive()

        this.arbol = this.add.image(200, 250, 'arbol-bn').setScale(0.6)
        .setName('arbol')
        .setData('audio', 'ujts')
        .setInteractive()

        this.input.on('gameobjectdown', this.onObjectClicked.bind(this))
        this.input.on('gameobjectover', this.onObjectOver)
        this.input.on('gameobjectout', this.onObjectOut)
    }

    update() {

    }

    onObjectOver(pointer, gameObject, event) {
        event.stopPropagation()
        gameObject.setTexture(`${gameObject.name}-borde`)
    }

    onObjectOut(pointer, gameObject, event) {
        event.stopPropagation()
        gameObject.setTexture(gameObject.state ? `${gameObject.name}` : `${gameObject.name}-bn`)
    }

    onObjectClicked(pointer, gameObject) {
        event.stopPropagation()
        gameObject.setState(1)
        gameObject.setTexture(`${gameObject.name}`)
        this.sound.play(`${gameObject.getData('audio')}`)
    }
}