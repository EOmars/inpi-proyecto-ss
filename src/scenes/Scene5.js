import Phaser from '../lib/phaser.js'

export default class Scene extends Phaser.Scene {

    /** @type {Phaser.GameObjects.Image} */
    abeja
    carpintero
    conejo
    coyote
    flor
    gato_montez
    gusano
    hormiga
    montaña
    piedra
    sol
    menu

    IMAGE_ROUTE = 'assets/escenario5/'
    SOUND_ROUTE = 'assets/escenario5/audio/'
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
        this.load.audio('key', `${this.SOUND_ROUTE}key.ogg`)
        this.load.audio('kopk', `${this.SOUND_ROUTE}kopk.ogg`)
        this.load.audio('kuuy', `${this.SOUND_ROUTE}kuuy.ogg`)
        this.load.audio('miyuk', `${this.SOUND_ROUTE}miyuk.ogg`)
        this.load.audio('pijy', `${this.SOUND_ROUTE}pijy.ogg`)
        this.load.audio('seere_jeyujk', `${this.SOUND_ROUTE}seere_jeyujk.ogg`)
        this.load.audio('tinek', `${this.SOUND_ROUTE}tinek.ogg`)
        this.load.audio('tsijynyat', `${this.SOUND_ROUTE}tsijynyat.ogg`)
        this.load.audio('ujts_mext', `${this.SOUND_ROUTE}ujts_mext.ogg`)
        this.load.audio('xeew', `${this.SOUND_ROUTE}xeew.ogg`)
        this.load.audio('tsaaj', `${this.SOUND_ROUTE}tsaaj.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario5.png`)

        this.load.image('carpintero', `${this.IMAGE_ROUTE}carpintero.png`)
        this.load.image('carpintero-bn', `${this.IMAGE_ROUTE}carpintero-bn.png`)
        this.load.image('carpintero-borde', `${this.IMAGE_ROUTE}carpintero-borde.png`)

        this.load.image('abeja', `${this.IMAGE_ROUTE}abeja.png`)
        this.load.image('abeja-bn', `${this.IMAGE_ROUTE}abeja-bn.png`)
        this.load.image('abeja-borde', `${this.IMAGE_ROUTE}abeja-borde.png`)

        this.load.image('conejo', `${this.IMAGE_ROUTE}conejo.png`)
        this.load.image('conejo-bn', `${this.IMAGE_ROUTE}conejo-bn.png`)
        this.load.image('conejo-borde', `${this.IMAGE_ROUTE}conejo-borde.png`)

        this.load.image('coyote', `${this.IMAGE_ROUTE}coyote.png`)
        this.load.image('coyote-bn', `${this.IMAGE_ROUTE}coyote-bn.png`)
        this.load.image('coyote-borde', `${this.IMAGE_ROUTE}coyote-borde.png`)

        this.load.image('flor', `${this.IMAGE_ROUTE}flor.png`)
        this.load.image('flor-bn', `${this.IMAGE_ROUTE}flor-bn.png`)
        this.load.image('flor-borde', `${this.IMAGE_ROUTE}flor-borde.png`)

        this.load.image('gato_montez', `${this.IMAGE_ROUTE}gatomontez.png`)
        this.load.image('gato_montez-bn', `${this.IMAGE_ROUTE}gatomontez-bn.png`)
        this.load.image('gato_montez-borde', `${this.IMAGE_ROUTE}gatomontez-borde.png`)

        this.load.image('gusano', `${this.IMAGE_ROUTE}gusano.png`)
        this.load.image('gusano-bn', `${this.IMAGE_ROUTE}gusano-bn.png`)
        this.load.image('gusano-borde', `${this.IMAGE_ROUTE}gusano-borde.png`)

        this.load.image('hormiga', `${this.IMAGE_ROUTE}hormiga.png`)
        this.load.image('hormiga-bn', `${this.IMAGE_ROUTE}hormiga-bn.png`)
        this.load.image('hormiga-borde', `${this.IMAGE_ROUTE}hormiga-borde.png`)

        this.load.image('montaña', `${this.IMAGE_ROUTE}montañas.png`)
        this.load.image('montaña-bn', `${this.IMAGE_ROUTE}montañas-bn.png`)
        this.load.image('montaña-borde', `${this.IMAGE_ROUTE}montañas-borde.png`)

        this.load.image('piedra', `${this.IMAGE_ROUTE}piedra.png`)
        this.load.image('piedra-bn', `${this.IMAGE_ROUTE}piedra-bn.png`)
        this.load.image('piedra-borde', `${this.IMAGE_ROUTE}piedra-borde.png`)

        this.load.image('sol', `${this.IMAGE_ROUTE}sol.png`)
        this.load.image('sol-bn', `${this.IMAGE_ROUTE}sol-bn.png`)
        this.load.image('sol-borde', `${this.IMAGE_ROUTE}sol-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.montaña = this.add.image(980, 200, 'montaña-bn').setScale(0.7)
            .setName('montaña')
            .setData({
                'audio': 'kopk',
                'texto': "kopk",
                'traduccion': 'montaña',
                'pos-x': 950,
                'pos-y': 30
            })
            .setInteractive()

        this.piedra = this.add.image(150, 630, 'piedra-bn').setScale(0.7)
            .setName('piedra')
            .setData({
                'audio': 'tsaaj',
                'texto': "tsääj",
                'traduccion': 'piedra',
                'pos-x': 300,
                'pos-y': 630
            })
            .setInteractive()

        this.hormiga = this.add.image(150, 600, 'hormiga-bn').setScale(0.6)
            .setName('hormiga')
            .setData({
                'audio': 'kuuy',
                'texto': 'kuuy',
                'traduccion': 'hormiga',
                'pos-x': 240,
                'pos-y': 500
            })
            .setInteractive()

        this.sol = this.add.image(650, 120, 'sol-bn').setScale(0.7)
            .setName('sol')
            .setData({
                'audio': 'xeew',
                'texto': "xëëw ",
                'traduccion': 'sol',
                'pos-x': 720,
                'pos-y': 20
            })
            .setInteractive()

        this.flor = this.add.image(1000, 528, 'flor-bn').setScale(0.6)
            .setName('flor')
            .setData({
                'audio': 'pijy',
                'texto': "pijy",
                'traduccion': 'flor',
                'pos-x': 750,
                'pos-y': 500
            })
            .setInteractive()

        this.abeja = this.add.image(1000, 300, 'abeja-bn').setScale(0.6, 0.5)
            .setName('abeja')
            .setData({
                'audio': 'seere_jeyujk',
                'texto': "seerë jëyujk",
                'traduccion': 'abeja',
                'pos-x': 800,
                'pos-y': 350
            })
            .setInteractive()

        this.gato_montez = this.add.image(390, 350, 'gato_montez-bn').setScale(0.7)
            .setName('gato_montez')
            .setData({
                'audio': 'ujts_mext',
                'texto': "ujts mext",
                'traduccion': 'gato montés ',
                'pos-x': 20,
                'pos-y': 330
            })
            .setInteractive()

        this.conejo = this.add.image(600, 550, 'conejo-bn').setScale(0.7)
            .setName('conejo')
            .setData({
                'audio': 'key',
                'texto': "këy",
                'traduccion': 'conejo',
                'pos-x': 690,
                'pos-y': 620
            })
            .setInteractive()

        this.carpintero = this.add.image(220, 130, 'carpintero-bn').setScale(.7)
            .setName('carpintero')
            .setData({
                'audio': 'tsijynyat',
                'texto': 'tsijynyät ',
                'traduccion': 'pájaro carpintero',
                'pos-x': 270,
                'pos-y': 30
            })
            .setInteractive()

        this.coyote = this.add.image(700, 300, 'coyote-bn').setScale(0.7)
            .setName('coyote')
            .setData({
                'audio': 'miyuk',
                'texto': "miyuk",
                'traduccion': 'coyote',
                'pos-x': 500,
                'pos-y': 250
            })
            .setInteractive()

        this.gusano = this.add.image(1150, 600, 'gusano-bn').setScale(0.7)
            .setName('gusano')
            .setData({
                'audio': 'tinek',
                'texto': "tïnë'k",
                'traduccion': 'gusano',
                'pos-x': 1160,
                'pos-y': 600
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