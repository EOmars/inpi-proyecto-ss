import Phaser from '../lib/phaser.js'


export default class Scene extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    calabaza
    elote //falta quitar en el fondo
    frijol
    fuego
    humo
    leña
    metate
    pajaro
    perro

    menu

    IMAGE_ROUTE = 'assets/escenario9/'
    SOUND_ROUTE = 'assets/escenario9/audio/'
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
        this.load.audio('jaxy', `${this.SOUND_ROUTE}jaxy.ogg`)
        this.load.audio('jeen', `${this.SOUND_ROUTE}jeen.ogg`)
        this.load.audio('jok', `${this.SOUND_ROUTE}jok.ogg`)
        this.load.audio('joon', `${this.SOUND_ROUTE}joon.ogg`)
        this.load.audio('mojk', `${this.SOUND_ROUTE}mojk.ogg`)
        this.load.audio('paan', `${this.SOUND_ROUTE}paan.ogg`)
        this.load.audio('tse', `${this.SOUND_ROUTE}tse.ogg`)
        this.load.audio('uk', `${this.SOUND_ROUTE}uk.ogg`)
        this.load.audio('xejk', `${this.SOUND_ROUTE}xejk.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario9.png`)

        // this.load.image('elote', `${this.IMAGE_ROUTE}elote.png`)
        // this.load.image('elote-bn', `${this.IMAGE_ROUTE}elote-bn.png`)
        // this.load.image('elote-borde', `${this.IMAGE_ROUTE}elote-borde.png`)

        this.load.image('calabaza', `${this.IMAGE_ROUTE}calabaza.png`)
        this.load.image('calabaza-bn', `${this.IMAGE_ROUTE}calabaza-bn.png`)
        this.load.image('calabaza-borde', `${this.IMAGE_ROUTE}calabaza-borde.png`)

        this.load.image('frijol', `${this.IMAGE_ROUTE}frijol.png`)
        this.load.image('frijol-bn', `${this.IMAGE_ROUTE}frijol-bn.png`)
        this.load.image('frijol-borde', `${this.IMAGE_ROUTE}frijol-borde.png`)

        this.load.image('fuego', `${this.IMAGE_ROUTE}fuego.png`)
        this.load.image('fuego-bn', `${this.IMAGE_ROUTE}fuego-bn.png`)
        this.load.image('fuego-borde', `${this.IMAGE_ROUTE}fuego-borde.png`)

        this.load.image('humo', `${this.IMAGE_ROUTE}humo.png`)
        this.load.image('humo-bn', `${this.IMAGE_ROUTE}humo-bn.png`)
        this.load.image('humo-borde', `${this.IMAGE_ROUTE}humo-borde.png`)

        this.load.image('elote', `${this.IMAGE_ROUTE}elote.png`)
        this.load.image('elote-bn', `${this.IMAGE_ROUTE}elote-bn.png`)
        this.load.image('elote-borde', `${this.IMAGE_ROUTE}elote-borde.png`)

        this.load.image('leña', `${this.IMAGE_ROUTE}leña.png`)
        this.load.image('leña-bn', `${this.IMAGE_ROUTE}leña-bn.png`)
        this.load.image('leña-borde', `${this.IMAGE_ROUTE}leña-borde.png`)

        this.load.image('metate', `${this.IMAGE_ROUTE}metate.png`)
        this.load.image('metate-bn', `${this.IMAGE_ROUTE}metate-bn.png`)
        this.load.image('metate-borde', `${this.IMAGE_ROUTE}metate-borde.png`)

        this.load.image('pajaro', `${this.IMAGE_ROUTE}pajaro.png`)
        this.load.image('pajaro-bn', `${this.IMAGE_ROUTE}pajaro-bn.png`)
        this.load.image('pajaro-borde', `${this.IMAGE_ROUTE}pajaro-borde.png`)

        this.load.image('perro', `${this.IMAGE_ROUTE}perro.png`)
        this.load.image('perro-bn', `${this.IMAGE_ROUTE}perro-bn.png`)
        this.load.image('perro-borde', `${this.IMAGE_ROUTE}perro-borde.png`)

    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.humo = this.add.image(100, 450, 'humo-bn').setScale(0.8)
            .setName('humo')
            .setData({
                'audio': 'jok',
                'texto': "jok",
                'traduccion': 'humo ',
                'pos-x': 80,
                'pos-y': 300
            })
            .setInteractive()

        this.fuego = this.add.image(110, 550, 'fuego-bn').setScale(.8)
            .setName('fuego')
            .setData({
                'audio': 'jeen',
                'texto': "jëën",
                'traduccion': 'fuego',
                'pos-x': 80,
                'pos-y': 620
            })
            .setInteractive()


        this.metate = this.add.image(370, 530, 'metate-bn').setScale(0.8)
            .setName('metate')
            .setData({
                'audio': 'paan',
                'texto': 'pään',
                'traduccion': 'metate',
                'pos-x': 340,
                'pos-y': 380
            })
            .setInteractive()


        this.calabaza = this.add.image(570, 540, 'calabaza-bn').setScale(0.8)
            .setName('calabaza')
            .setData({
                'audio': 'tse',
                'texto': "tse´",
                'traduccion': 'calabaza',
                'pos-x': 530,
                'pos-y': 380
            })
            .setInteractive()

        this.perro = this.add.image(480, 620, 'perro-bn').setScale(0.8)
            .setName('perro')
            .setData({
                'audio': 'uk',
                'texto': "uk",
                'traduccion': 'perro',
                'pos-x': 290,
                'pos-y': 600
            })
            .setInteractive()

        this.leña = this.add.image(690, 600, 'leña-bn').setScale(0.8)
            .setName('leña')
            .setData({
                'audio': 'jaxy',
                'texto': "jä´xy",
                'traduccion': 'leña',
                'pos-x': 700,
                'pos-y': 650
            })
            .setInteractive()

        this.frijol = this.add.image(1080, 620, 'frijol-bn').setScale(0.67)
            .setName('frijol')
            .setData({
                'audio': 'xejk',
                'texto': "xëjk",
                'traduccion': 'frijol',
                'pos-x': 1150,
                'pos-y': 460
            })
            .setInteractive()

        // this.elote = this.add.image(1080, 310, 'elote-bn').setScale(0.7)
        //     .setName('elote')
        //     .setData({
        //         'audio': 'xexy',
        //         'texto': "xë´xy",
        //         'traduccion': 'elote',
        //         'pos-x': 1050,
        //         'pos-y': 200
        //     })
        //     .setInteractive()

        this.pajaro = this.add.image(930, 100, 'pajaro-bn').setScale(0.9)
            .setName('pajaro')
            .setData({
                'audio': 'joon',
                'texto': "joon",
                'traduccion': 'pajaro',
                'pos-x': 720,
                'pos-y': 75
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