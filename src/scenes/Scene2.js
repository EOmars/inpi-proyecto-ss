import Phaser from '../lib/phaser.js'


export default class Scene2 extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    caballo
    cabra
    gallo
    guajolote
    luna
    murcielago
    palma
    pastor
    pollo
    puerco
    vaca
    menu

    IMAGE_ROUTE = 'assets/escenario2/'
    SOUND_ROUTE = 'assets/escenario2/audio/'
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
        this.load.audio('jatsyu', `${this.SOUND_ROUTE}jatsyu.ogg`)
        this.load.audio('kutsy', `${this.SOUND_ROUTE}kutsy.ogg`)
        this.load.audio('naaaw', `${this.SOUND_ROUTE}naaaw.ogg`)
        this.load.audio('po', `${this.SOUND_ROUTE}po.ogg`)
        this.load.audio('tiixy', `${this.SOUND_ROUTE}tiixy.ogg`)
        this.load.audio('tsakatexy', `${this.SOUND_ROUTE}tsakatexy.ogg`)
        this.load.audio('tsapnaaaw', `${this.SOUND_ROUTE}tsapnaaaw.ogg`)
        this.load.audio('tsekeexpe', `${this.SOUND_ROUTE}tsekeexpe.ogg`)
        this.load.audio('tsyipetexy', `${this.SOUND_ROUTE}tsyipetexy.ogg`)
        this.load.audio('tutk', `${this.SOUND_ROUTE}tutk.ogg`)



        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario2.jpg`)

        this.load.image('cabra', `${this.IMAGE_ROUTE}cabra.png`)
        this.load.image('cabra-bn', `${this.IMAGE_ROUTE}cabra-bn.png`)
        this.load.image('cabra-borde', `${this.IMAGE_ROUTE}cabra-borde.png`)

        this.load.image('caballo', `${this.IMAGE_ROUTE}caballo.png`)
        this.load.image('caballo-bn', `${this.IMAGE_ROUTE}caballo-bn.png`)
        this.load.image('caballo-borde', `${this.IMAGE_ROUTE}caballo-borde.png`)

        this.load.image('gallo', `${this.IMAGE_ROUTE}gallo.png`)
        this.load.image('gallo-bn', `${this.IMAGE_ROUTE}gallo-bn.png`)
        this.load.image('gallo-borde', `${this.IMAGE_ROUTE}gallo-borde.png`)

        this.load.image('guajolote', `${this.IMAGE_ROUTE}guajolote.png`)
        this.load.image('guajolote-bn', `${this.IMAGE_ROUTE}guajolote-bn.png`)
        this.load.image('guajolote-borde', `${this.IMAGE_ROUTE}guajolote-borde.png`)

        this.load.image('luna', `${this.IMAGE_ROUTE}luna.png`)
        this.load.image('luna-bn', `${this.IMAGE_ROUTE}luna-bn.png`)
        this.load.image('luna-borde', `${this.IMAGE_ROUTE}luna-borde.png`)

        this.load.image('murcielago', `${this.IMAGE_ROUTE}murcielago.png`)
        this.load.image('murcielago-bn', `${this.IMAGE_ROUTE}murcielago-bn.png`)
        this.load.image('murcielago-borde', `${this.IMAGE_ROUTE}murcielago-borde.png`)

        this.load.image('palma', `${this.IMAGE_ROUTE}palma.png`)
        this.load.image('palma-bn', `${this.IMAGE_ROUTE}palma-bn.png`)
        this.load.image('palma-borde', `${this.IMAGE_ROUTE}palma-borde.png`)

        this.load.image('pastor', `${this.IMAGE_ROUTE}pastor.png`)
        this.load.image('pastor-bn', `${this.IMAGE_ROUTE}pastor-bn.png`)
        this.load.image('pastor-borde', `${this.IMAGE_ROUTE}pastor-borde.png`)

        this.load.image('pollo', `${this.IMAGE_ROUTE}pollo.png`)
        this.load.image('pollo-bn', `${this.IMAGE_ROUTE}pollo-bn.png`)
        this.load.image('pollo-borde', `${this.IMAGE_ROUTE}pollo-borde.png`)

        this.load.image('puerco', `${this.IMAGE_ROUTE}puerco.png`)
        this.load.image('puerco-bn', `${this.IMAGE_ROUTE}puerco-bn.png`)
        this.load.image('puerco-borde', `${this.IMAGE_ROUTE}puerco-borde.png`)

        this.load.image('vaca', `${this.IMAGE_ROUTE}vaca.png`)
        this.load.image('vaca-bn', `${this.IMAGE_ROUTE}vaca-bn.png`)
        this.load.image('vaca-borde', `${this.IMAGE_ROUTE}vaca-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.palma = this.add.image(450, 250, 'palma-bn').setScale(0.7)
            .setName('palma')
            .setData({
                'audio': 'tiixy',
                'texto': 'tiixy',
                'traduccion': 'palma',
                'pos-x': 350,
                'pos-y': 80
            })
            .setInteractive()

        this.cabra = this.add.image(600, 450, 'cabra-bn').setScale(.7)
            .setName('cabra')
            .setData({
                'audio': 'tsyipetexy',
                'texto': 'tsyipë të’xy ',
                'traduccion': 'cabra',
                'pos-x': 400,
                'pos-y': 450
            })
            .setInteractive()

        this.caballo = this.add.image(180, 250, 'caballo-bn').setScale(0.7)
            .setName('caballo')
            .setData({
                'audio': 'jatsyu',
                'texto': "jatsyu'",
                'traduccion': 'caballo',
                'pos-x': 250,
                'pos-y': 250
            })
            .setInteractive()

        this.gallo = this.add.image(120, 480, 'gallo-bn').setScale(0.6)
            .setName('gallo')
            .setData({
                'audio': 'tsapnaaaw',
                'texto': "tsap na'ääw",
                'traduccion': 'gallo',
                'pos-x': 50,
                'pos-y': 520
            })
            .setInteractive()

        this.guajolote = this.add.image(900, 600, 'guajolote-bn').setScale(0.7)
            .setName('guajolote')
            .setData({
                'audio': 'naaaw',
                'texto': "na'ääw",
                'traduccion': 'guajolote',
                'pos-x': 800,
                'pos-y': 630
            })
            .setInteractive()

        this.luna = this.add.image(700, 80, 'luna-bn').setScale(0.8)
            .setName('luna')
            .setData({
                'audio': 'po',
                'texto': "po' ",
                'traduccion': 'luna',
                'pos-x': 660,
                'pos-y': 120
            })
            .setInteractive()

        this.murcielago = this.add.image(1000, 90, 'murcielago-bn').setScale(0.6)
            .setName('murcielago')
            .setData({
                'audio': 'tiixy',
                'texto': 'tiixy',
                'traduccion': 'murcielago ',
                'pos-x': 940,
                'pos-y': 170
            })
            .setInteractive()

        this.pastor = this.add.image(830, 250, 'pastor-bn').setScale(0.7)
            .setName('pastor')
            .setData({
                'audio': 'tsekeexpe',
                'texto': 'tsëkë expë',
                'traduccion': 'pastor',
                'pos-x': 600,
                'pos-y': 280
            })
            .setInteractive()

        this.puerco = this.add.image(350, 580, 'puerco-bn').setScale(0.6)
            .setName('puerco')
            .setData({
                'audio': 'kutsy',
                'texto': "kutsy",
                'traduccion': 'puerco',
                'pos-x': 350,
                'pos-y': 630
            })
            .setInteractive()


        this.pollo = this.add.image(650, 600, 'pollo-bn').setScale(0.7)
            .setName('pollo')
            .setData({
                'audio': 'tutk',
                'texto': "tutk",
                'traduccion': 'pollo',
                'pos-x': 650,
                'pos-y': 630
            })
            .setInteractive()


        this.vaca = this.add.image(1100, 450, 'vaca-bn').setScale(0.7)
            .setName('vaca')
            .setData({
                'audio': 'tsakatexy',
                'texto': "tsakätë'xy",
                'traduccion': 'vaca',
                'pos-x': 1050,
                'pos-y': 550
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