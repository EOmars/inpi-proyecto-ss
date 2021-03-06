import Phaser from '../lib/phaser.js'


export default class Scene1 extends Phaser.Scene {

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.GameObjects.Image} */
    vaca
    arbol
    cangrejo
    escorpion
    lagartija
    pez
    sol
    tortuga
    vibora
    menu

    IMAGE_ROUTE = 'assets/escenario1/'
    SOUND_ROUTE = 'assets/escenario1/audio/'
    style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }

    constructor() {
        super('game')
    }

    preload() {
        const progressBar = this.add.graphics()
        const progressBox = this.add.graphics()
        progressBox.fillStyle(0x222222, 0.8)
        progressBox.fillRect(50, 270, this.scale.width - 100, 50)

        const width = this.cameras.main.width
        const height = this.cameras.main.height
        const loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 150,
            text: "Tso`ntäkp...",
            style: {
                font: '40px monospace',
                fill: '#ffffff'
            }
        })
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '25px monospace',
                fill: '#ffffff'
            }
        })
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', (value) => {
            // console.log("value: ", value)
            progressBar.clear()
            progressBar.fillStyle(0xffffff, 1)
            progressBar.fillRect(50, 280, (this.scale.width - 100) * value, 30)
            percentText.setText(parseInt(value * 100) + '%');
        })

        this.load.on('fileprogress', (file) => {
            // console.log(file.src)
        })

        this.load.on('complete', () => {
            console.log('complete')
            progressBar.destroy()
            progressBox.destroy()
            loadingText.destroy()
            percentText.destroy()
        })

        //audios
        this.load.audio('tsakaaj', `${this.SOUND_ROUTE}tsakaaj.ogg`)
        this.load.audio('ujts', `${this.SOUND_ROUTE}ujts.ogg`)
        this.load.audio('akx', `${this.SOUND_ROUTE}akx.ogg`)
        this.load.audio('eexy', `${this.SOUND_ROUTE}eexy.ogg`)
        this.load.audio('kajpy', `${this.SOUND_ROUTE}kajpy.ogg`)
        this.load.audio('tek', `${this.SOUND_ROUTE}tek.ogg`)
        this.load.audio('tsaany', `${this.SOUND_ROUTE}tsaany.ogg`)
        this.load.audio('xeew', `${this.SOUND_ROUTE}xeew.ogg`)
        this.load.audio('pijytyuk', `${this.SOUND_ROUTE}pijytyuk.ogg`)


        //imagenes
        this.load.image('background', 'assets/escenario1/escenario1.jpg')
        this.load.image('regresar', 'assets/flecha_izq.png')

        this.load.image('arbol', 'assets/escenario1/arbol.png')
        this.load.image('arbol-bn', 'assets/escenario1/arbol-bn.png')
        this.load.image('arbol-borde', 'assets/escenario1/arbol-borde.png')

        this.load.image('vaca', 'assets/escenario1/vaca.png')
        this.load.image('vaca-bn', 'assets/escenario1/vaca-bn.png')
        this.load.image('vaca-borde', 'assets/escenario1/vaca-borde.png')

        this.load.image('cangrejo', `${this.IMAGE_ROUTE}cangrejo.png`)
        this.load.image('cangrejo-bn', `${this.IMAGE_ROUTE}cangrejo-bn.png`)
        this.load.image('cangrejo-borde', `${this.IMAGE_ROUTE}cangrejo-borde.png`)

        this.load.image('escorpion', `${this.IMAGE_ROUTE}escorpion.png`)
        this.load.image('escorpion-bn', `${this.IMAGE_ROUTE}escorpion-bn.png`)
        this.load.image('escorpion-borde', `${this.IMAGE_ROUTE}escorpion-borde.png`)

        this.load.image('lagartija', `${this.IMAGE_ROUTE}lagartija.png`)
        this.load.image('lagartija-bn', `${this.IMAGE_ROUTE}lagartija-bn.png`)
        this.load.image('lagartija-borde', `${this.IMAGE_ROUTE}lagartija-borde.png`)

        this.load.image('pez', `${this.IMAGE_ROUTE}pez.png`)
        this.load.image('pez-bn', `${this.IMAGE_ROUTE}pez-bn.png`)
        this.load.image('pez-borde', `${this.IMAGE_ROUTE}pez-borde.png`)

        this.load.image('sol', `${this.IMAGE_ROUTE}sol.png`)
        this.load.image('sol-bn', `${this.IMAGE_ROUTE}sol-bn.png`)
        this.load.image('sol-borde', `${this.IMAGE_ROUTE}sol-borde.png`)

        this.load.image('tortuga', `${this.IMAGE_ROUTE}tortuga.png`)
        this.load.image('tortuga-bn', `${this.IMAGE_ROUTE}tortuga-bn.png`)
        this.load.image('tortuga-borde', `${this.IMAGE_ROUTE}tortuga-borde.png`)

        this.load.image('vibora', `${this.IMAGE_ROUTE}vibora.png`)
        this.load.image('vibora-bn', `${this.IMAGE_ROUTE}vibora-bn.png`)
        this.load.image('vibora-borde', `${this.IMAGE_ROUTE}vibora-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.arbol = this.add.image(180, 220, 'arbol-bn').setScale(0.6)
            .setName('arbol')
            .setData({
                'audio': 'ujts',
                'texto': 'ujts',
                'traduccion': 'árbol',
                'pos-x': 250,
                'pos-y': 140
            })
            .setInteractive()

        this.vaca = this.add.image(410, 450, 'vaca-bn').setScale(0.7)
            .setName('vaca')
            .setData({
                'audio': 'tsakaaj',
                'texto': 'tsakääj',
                'traduccion': 'vaca',
                'pos-x': 410,
                'pos-y': 230
            })
            .setInteractive()

        this.cangrejo = this.add.image(700, 350, 'cangrejo-bn').setScale(0.9)
            .setName('cangrejo')
            .setData({
                'audio': 'eexy',
                'texto': 'eexy',
                'traduccion': 'cangrejo',
                'pos-x': 710,
                'pos-y': 220
            })
            .setInteractive()

        this.escorpion = this.add.image(700, 630, 'escorpion-bn').setScale(0.8)
            .setName('escorpion')
            .setData({
                'audio': 'kajpy',
                'texto': 'käjpy',
                'traduccion': 'escorpion',
                'pos-x': 800,
                'pos-y': 630
            })
            .setInteractive()

        this.lagartija = this.add.image(200, 620, 'lagartija-bn').setScale(0.8)
            .setName('lagartija')
            .setData({
                'audio': 'tek',
                'texto': 'tek',
                'traduccion': 'lagartija',
                'pos-x': 350,
                'pos-y': 610
            })
            .setInteractive()

        this.pez = this.add.image(630, 570, 'pez-bn').setScale(0.9)
            .setName('pez')
            .setData({
                'audio': 'akx',
                'texto': 'äkx ',
                'traduccion': 'pez ',
                'pos-x': 640,
                'pos-y': 450
            })
            .setInteractive()

        this.sol = this.add.image(500, 80, 'sol-bn').setScale(0.9)
            .setName('sol')
            .setData({
                'audio': 'xeew',
                'texto': 'xëëw ',
                'traduccion': 'sol',
                'pos-x': 600,
                'pos-y': 80
            })
            .setInteractive()

        this.tortuga = this.add.image(900, 500, 'tortuga-bn').setScale(0.7)
            .setName('tortuga')
            .setData({
                'audio': 'pijytyuk',
                'texto': 'pijytyuk',
                'traduccion': 'tortuga',
                'pos-x': 1020,
                'pos-y': 450
            })
            .setInteractive()

        this.vibora = this.add.image(1000, 360, 'vibora-bn').setScale(0.6)
            .setName('vibora')
            .setData({
                'audio': 'tsaany',
                'texto': "tsää'ny",
                'traduccion': 'vibora',
                'pos-x': 1000,
                'pos-y': 230
            })
            .setInteractive()

        this.regresar = this.add.image(1200, 50, 'regresar').setScale(0.3)
            .setName('regresar')
            .setInteractive()
        this.menu = this.add.text(1130, 100, 'Wëmpet\nRegresar', this.style)


        this.input.on('gameobjectdown', this.onObjectClicked.bind(this))
        this.input.on('gameobjectover', this.onObjectOver)
        this.input.on('gameobjectout', this.onObjectOut)
    }

    update() {

    }

    onObjectOver(pointer, gameObject, event) {
        event.stopPropagation()
        if (gameObject.name == 'regresar') {
            gameObject.setScale(0.4)
            return
        }
        gameObject.setTexture(`${gameObject.name}-borde`)
    }

    onObjectOut(pointer, gameObject, event) {
        event.stopPropagation()
        if (gameObject.name == 'regresar') {
            gameObject.setScale(0.3)
            return
        }
        gameObject.setTexture(gameObject.state ? `${gameObject.name}` : `${gameObject.name}-bn`)
    }

    onObjectClicked(pointer, gameObject, event) {
        event.stopPropagation()
        if (gameObject.name == 'regresar') {
            return window.location.href = '/'
        }

        this.sound.play(`${gameObject.getData('audio')}`)

        if (!gameObject.state) {
            const x = gameObject.getData('pos-x')
            const y = gameObject.getData('pos-y')
            const txtLength = gameObject.getData('texto').length > gameObject.getData('traduccion').length ?
                gameObject.getData('texto').length : gameObject.getData('traduccion').length

            const bar = this.add.graphics()
            bar.fillStyle(0x000000, 0.5)
            bar.fillRect(x - 10, y - 10, txtLength * 20, 90)

            this.add.text(x, y,
                gameObject.getData('texto') + "\n" + gameObject.getData('traduccion'),
                this.style
            )
        }
        gameObject.setState(1)
    }
}