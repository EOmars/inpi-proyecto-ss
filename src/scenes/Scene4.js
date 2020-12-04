import Phaser from '../lib/phaser.js'


export default class Scene extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    aguila
    venado
    gavilan
    zorro
    zopilote
    rocas
    sol
    nubes

    menu

    IMAGE_ROUTE = 'assets/escenario4/'
    SOUND_ROUTE = 'assets/escenario4/audio/'
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
        this.load.audio('mejtsy', `${this.SOUND_ROUTE}mejtsy.ogg`)
        this.load.audio('tsaaj', `${this.SOUND_ROUTE}tsaaj.ogg`)
        this.load.audio('ujts_jatsyu', `${this.SOUND_ROUTE}ujts_jatsyu.ogg`)
        this.load.audio('wajx', `${this.SOUND_ROUTE}wajx.ogg`)
        this.load.audio('xeejk', `${this.SOUND_ROUTE}xeejk.ogg`)
        this.load.audio('xeew', `${this.SOUND_ROUTE}xeew.ogg`)
        this.load.audio('yoots', `${this.SOUND_ROUTE}yoots.ogg`)
        this.load.audio('weejts', `${this.SOUND_ROUTE}weejts.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario4.jpg`)

        this.load.image('venado', `${this.IMAGE_ROUTE}venado.png`)
        this.load.image('venado-bn', `${this.IMAGE_ROUTE}venado-bn.png`)
        this.load.image('venado-borde', `${this.IMAGE_ROUTE}venado-borde.png`)

        this.load.image('aguila', `${this.IMAGE_ROUTE}aguila.png`)
        this.load.image('aguila-bn', `${this.IMAGE_ROUTE}aguila-bn.png`)
        this.load.image('aguila-borde', `${this.IMAGE_ROUTE}aguila-borde.png`)

        this.load.image('gavilan', `${this.IMAGE_ROUTE}gavilan.png`)
        this.load.image('gavilan-bn', `${this.IMAGE_ROUTE}gavilan-bn.png`)
        this.load.image('gavilan-borde', `${this.IMAGE_ROUTE}gavilan-borde.png`)

        this.load.image('zorro', `${this.IMAGE_ROUTE}zorro.png`)
        this.load.image('zorro-bn', `${this.IMAGE_ROUTE}zorro-bn.png`)
        this.load.image('zorro-borde', `${this.IMAGE_ROUTE}zorro-borde.png`)

        this.load.image('zopilote', `${this.IMAGE_ROUTE}zopilote.png`)
        this.load.image('zopilote-bn', `${this.IMAGE_ROUTE}zopilote-bn.png`)
        this.load.image('zopilote-borde', `${this.IMAGE_ROUTE}zopilote-borde.png`)

        this.load.image('rocas', `${this.IMAGE_ROUTE}rocas.png`)
        this.load.image('rocas-bn', `${this.IMAGE_ROUTE}rocas-bn.png`)
        this.load.image('rocas-borde', `${this.IMAGE_ROUTE}rocas-borde.png`)

        this.load.image('sol', `${this.IMAGE_ROUTE}sol.png`)
        this.load.image('sol-bn', `${this.IMAGE_ROUTE}sol-bn.png`)
        this.load.image('sol-borde', `${this.IMAGE_ROUTE}sol-borde.png`)

        this.load.image('nubes', `${this.IMAGE_ROUTE}nubes.png`)
        this.load.image('nubes-bn', `${this.IMAGE_ROUTE}nubes-bn.png`)
        this.load.image('nubes-borde', `${this.IMAGE_ROUTE}nubes-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.sol = this.add.image(450, 80, 'sol-bn').setScale(0.7)
            .setName('sol')
            .setData({
                'audio': 'xeew',
                'texto': 'wëëw ',
                'traduccion': 'sol',
                'pos-x': 560,
                'pos-y': 50
            })
            .setInteractive()

        this.nubes = this.add.image(600, 220, 'nubes-bn').setScale(0.6)
            .setName('nubes')
            .setData({
                'audio': 'yoots',
                'texto': 'yoots',
                'traduccion': 'nube  ',
                'pos-x': 900,
                'pos-y': 80
            })
            .setInteractive()

        this.rocas = this.add.image(625, 490, 'rocas-bn').setScale(0.65)
            .setName('rocas')
            .setData({
                'audio': 'tsaaj',
                'texto': "tsääj",
                'traduccion': 'roca ',
                'pos-x': 50,
                'pos-y': 610
            })
            .setInteractive()

        this.aguila = this.add.image(160, 420, 'aguila-bn').setScale(0.6)
            .setName('aguila')
            .setData({
                'audio': 'weejts',
                'texto': "weejts",
                'traduccion': 'aguila',
                'pos-x': 50,
                'pos-y': 290
            })
            .setInteractive()

        this.gavilan = this.add.image(750, 350, 'gavilan-bn').setScale(0.7)
            .setName('gavilan')
            .setData({
                'audio': 'mejtsy',
                'texto': "me’jtsy",
                'traduccion': 'gavilan',
                'pos-x': 820,
                'pos-y': 320
            })
            .setInteractive()


        this.venado = this.add.image(470, 350, 'venado-bn').setScale(.7)
            .setName('venado')
            .setData({
                'audio': 'ujts_jatsyu',
                'texto': "ujts jatsyu'",
                'traduccion': 'venado',
                'pos-x': 350,
                'pos-y': 570
            })
            .setInteractive()



        this.zopilote = this.add.image(1160, 345, 'zopilote-bn').setScale(0.7)
            .setName('zopilote')
            .setData({
                'audio': 'xeejk',
                'texto': "xeejk",
                'traduccion': 'zopilote',
                'pos-x': 940,
                'pos-y': 430
            })
            .setInteractive()

        this.zorro = this.add.image(900, 600, 'zorro-bn').setScale(0.7)
            .setName('zorro')
            .setData({
                'audio': 'wajx',
                'texto': "wääjx",
                'traduccion': 'zorro',
                'pos-x': 640,
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