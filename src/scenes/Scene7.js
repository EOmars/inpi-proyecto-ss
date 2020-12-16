import Phaser from '../lib/phaser.js'


export default class Scene extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    aguacate
    calabaza
    cebolla
    chile_costeño
    chile_arbol
    ciruela
    ejote
    guayaba
    huevo
    jitomate
    nanche
    pan
    papa
    platano
    tomate
    tostada

    menu

    IMAGE_ROUTE = 'assets/escenario7/'
    SOUND_ROUTE = 'assets/escenario7/audio/'
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
        this.load.audio('kon', `${this.SOUND_ROUTE}kon.ogg`)
        this.load.audio('kutypy', `${this.SOUND_ROUTE}kutypy.ogg`)
        this.load.audio('miny', `${this.SOUND_ROUTE}miny.ogg`)
        this.load.audio('nantsy', `${this.SOUND_ROUTE}nantsy.ogg`)
        this.load.audio('pex', `${this.SOUND_ROUTE}pex.ogg`)
        this.load.audio('pojx', `${this.SOUND_ROUTE}pojx.ogg`)
        this.load.audio('siruel', `${this.SOUND_ROUTE}siruel.ogg`)
        this.load.audio('tsam', `${this.SOUND_ROUTE}tsam.ogg`)
        this.load.audio('tsap_xejk', `${this.SOUND_ROUTE}tsap_xejk.ogg`)
        this.load.audio('tsapkaaky', `${this.SOUND_ROUTE}tsapkaaky.ogg`)
        this.load.audio('tsapts_niiy', `${this.SOUND_ROUTE}tsapts_niiy.ogg`)
        this.load.audio('tse', `${this.SOUND_ROUTE}tse.ogg`)
        this.load.audio('tsuxk_kon', `${this.SOUND_ROUTE}tsuxk_kon.ogg`)
        this.load.audio('tsuxk_niiy', `${this.SOUND_ROUTE}tsuxk_niiy.ogg`)
        this.load.audio('tututy', `${this.SOUND_ROUTE}tututy.ogg`)
        this.load.audio('xunekat', `${this.SOUND_ROUTE}xunekat.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario7.png`)

        this.load.image('calabaza', `${this.IMAGE_ROUTE}calabaza.png`)
        this.load.image('calabaza-bn', `${this.IMAGE_ROUTE}calabaza-bn.png`)
        this.load.image('calabaza-borde', `${this.IMAGE_ROUTE}calabaza-borde.png`)

        this.load.image('aguacate', `${this.IMAGE_ROUTE}aguacate.png`)
        this.load.image('aguacate-bn', `${this.IMAGE_ROUTE}aguacate-bn.png`)
        this.load.image('aguacate-borde', `${this.IMAGE_ROUTE}aguacate-borde.png`)

        this.load.image('cebolla', `${this.IMAGE_ROUTE}cebolla.png`)
        this.load.image('cebolla-bn', `${this.IMAGE_ROUTE}cebolla-bn.png`)
        this.load.image('cebolla-borde', `${this.IMAGE_ROUTE}cebolla-borde.png`)

        this.load.image('chile_costeño', `${this.IMAGE_ROUTE}chile_costeño.png`)
        this.load.image('chile_costeño-bn', `${this.IMAGE_ROUTE}chile_costeño-bn.png`)
        this.load.image('chile_costeño-borde', `${this.IMAGE_ROUTE}chile_costeño-borde.png`)

        this.load.image('chile_arbol', `${this.IMAGE_ROUTE}chile_arbol.png`)
        this.load.image('chile_arbol-bn', `${this.IMAGE_ROUTE}chile_arbol-bn.png`)
        this.load.image('chile_arbol-borde', `${this.IMAGE_ROUTE}chile_arbol-borde.png`)

        this.load.image('ciruela', `${this.IMAGE_ROUTE}ciruela.png`)
        this.load.image('ciruela-bn', `${this.IMAGE_ROUTE}ciruela-bn.png`)
        this.load.image('ciruela-borde', `${this.IMAGE_ROUTE}ciruela-borde.png`)

        this.load.image('ejote', `${this.IMAGE_ROUTE}ejote.png`)
        this.load.image('ejote-bn', `${this.IMAGE_ROUTE}ejote-bn.png`)
        this.load.image('ejote-borde', `${this.IMAGE_ROUTE}ejote-borde.png`)

        this.load.image('guayaba', `${this.IMAGE_ROUTE}guayaba.png`)
        this.load.image('guayaba-bn', `${this.IMAGE_ROUTE}guayaba-bn.png`)
        this.load.image('guayaba-borde', `${this.IMAGE_ROUTE}guayaba-borde.png`)

        this.load.image('huevo', `${this.IMAGE_ROUTE}huevo.png`)
        this.load.image('huevo-bn', `${this.IMAGE_ROUTE}huevo-bn.png`)
        this.load.image('huevo-borde', `${this.IMAGE_ROUTE}huevo-borde.png`)

        this.load.image('jitomate', `${this.IMAGE_ROUTE}jitomate.png`)
        this.load.image('jitomate-bn', `${this.IMAGE_ROUTE}jitomate-bn.png`)
        this.load.image('jitomate-borde', `${this.IMAGE_ROUTE}jitomate-borde.png`)

        this.load.image('nanche', `${this.IMAGE_ROUTE}nanche.png`)
        this.load.image('nanche-bn', `${this.IMAGE_ROUTE}nanche-bn.png`)
        this.load.image('nanche-borde', `${this.IMAGE_ROUTE}nanche-borde.png`)

        this.load.image('pan', `${this.IMAGE_ROUTE}pan.png`)
        this.load.image('pan-bn', `${this.IMAGE_ROUTE}pan-bn.png`)
        this.load.image('pan-borde', `${this.IMAGE_ROUTE}pan-borde.png`)

        this.load.image('papa', `${this.IMAGE_ROUTE}papa.png`)
        this.load.image('papa-bn', `${this.IMAGE_ROUTE}papa-bn.png`)
        this.load.image('papa-borde', `${this.IMAGE_ROUTE}papa-borde.png`)

        this.load.image('platano', `${this.IMAGE_ROUTE}platano.png`)
        this.load.image('platano-bn', `${this.IMAGE_ROUTE}platano-bn.png`)
        this.load.image('platano-borde', `${this.IMAGE_ROUTE}platano-borde.png`)

        this.load.image('tomate', `${this.IMAGE_ROUTE}tomate.png`)
        this.load.image('tomate-bn', `${this.IMAGE_ROUTE}tomate-bn.png`)
        this.load.image('tomate-borde', `${this.IMAGE_ROUTE}tomate-borde.png`)

        this.load.image('tostada', `${this.IMAGE_ROUTE}tostada.png`)
        this.load.image('tostada-bn', `${this.IMAGE_ROUTE}tostada-bn.png`)
        this.load.image('tostada-borde', `${this.IMAGE_ROUTE}tostada-borde.png`)

    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.calabaza = this.add.image(140, 220, 'calabaza-bn').setScale(0.7)
            .setName('calabaza')
            .setData({
                'audio': 'tse',
                'texto': "tse´",
                'traduccion': 'calabaza',
                'pos-x': 80,
                'pos-y': 50
            })
            .setInteractive()

        this.cebolla = this.add.image(357, 220, 'cebolla-bn').setScale(0.7)
            .setName('cebolla')
            .setData({
                'audio': 'xunekat',
                'texto': "xunëkät",
                'traduccion': 'cebolla',
                'pos-x': 300,
                'pos-y': 50
            })
            .setInteractive()

        this.tostada = this.add.image(800, 230, 'tostada-bn').setScale(0.7)
            .setName('tostada')
            .setData({
                'audio': 'pex',
                'texto': "pë´x",
                'traduccion': 'tostadas',
                'pos-x': 720,
                'pos-y': 50
            })
            .setInteractive()

        this.papa = this.add.image(550, 220, 'papa-bn').setScale(0.7)
            .setName('papa')
            .setData({
                'audio': 'miny',
                'texto': "miny ",
                'traduccion': 'papa',
                'pos-x': 500,
                'pos-y': 50
            })
            .setInteractive()

        this.pan = this.add.image(1080, 250, 'pan-bn').setScale(0.7)
            .setName('pan')
            .setData({
                'audio': 'tsapkaaky',
                'texto': "tsapkaaky",
                'traduccion': 'pan',
                'pos-x': 960,
                'pos-y': 50
            })
            .setInteractive()

        this.platano = this.add.image(390, 400, 'platano-bn').setScale(0.7)
            .setName('platano')
            .setData({
                'audio': 'tsam',
                'texto': "tsä´m",
                'traduccion': 'platano',
                'pos-x': 290,
                'pos-y': 400
            })
            .setInteractive()

        this.nanche = this.add.image(140, 400, 'nanche-bn').setScale(0.6)
            .setName('nanche')
            .setData({
                'audio': 'nantsy',
                'texto': "nantsy",
                'traduccion': 'nanche',
                'pos-x': 100,
                'pos-y': 400
            })
            .setInteractive()

        this.guayaba = this.add.image(600, 410, 'guayaba-bn').setScale(0.8)
            .setName('guayaba')
            .setData({
                'audio': 'pojx',
                'texto': 'pojx',
                'traduccion': 'guayaba',
                'pos-x': 530,
                'pos-y': 400
            })
            .setInteractive()

        this.huevo = this.add.image(750, 460, 'huevo-bn').setScale(0.7)
            .setName('huevo')
            .setData({
                'audio': 'tututy',
                'texto': "tututy",
                'traduccion': 'huevo',
                'pos-x': 700,
                'pos-y': 310
            })
            .setInteractive()

        this.aguacate = this.add.image(910, 430, 'aguacate-bn').setScale(0.7)
            .setName('aguacate')
            .setData({
                'audio': 'kutypy',
                'texto': "kutypy",
                'traduccion': 'aguacate',
                'pos-x': 850,
                'pos-y': 420
            })
            .setInteractive()

        this.ciruela = this.add.image(1120, 420, 'ciruela-bn').setScale(0.7)
            .setName('ciruela')
            .setData({
                'audio': 'siruel',
                'texto': "siruel",
                'traduccion': 'ciruela',
                'pos-x': 1050,
                'pos-y': 420
            })
            .setInteractive()

        this.tomate = this.add.image(130, 600, 'tomate-bn').setScale(0.7)
            .setName('tomate')
            .setData({
                'audio': 'tsuxk_kon',
                'texto': "tsuxk ko´n",
                'traduccion': 'tomate',
                'pos-x': 80,
                'pos-y': 620
            })
            .setInteractive()


        this.jitomate = this.add.image(360, 600, 'jitomate-bn').setScale(0.7)
            .setName('jitomate')
            .setData({
                'audio': 'kon',
                'texto': "ko´n",
                'traduccion': 'jitomate',
                'pos-x': 290,
                'pos-y': 620
            })
            .setInteractive()


        this.ejote = this.add.image(600, 600, 'ejote-bn').setScale(0.7)
            .setName('ejote')
            .setData({
                'audio': 'tsap_xejk',
                'texto': "tsap xëjk",
                'traduccion': 'ejote',
                'pos-x': 540,
                'pos-y': 620
            })
            .setInteractive()

        this.chile_arbol = this.add.image(870, 600, 'chile_arbol-bn').setScale(0.7)
            .setName('chile_arbol')
            .setData({
                'audio': 'tsuxk_niiy',
                'texto': "tsuxk niiy",
                'traduccion': 'chile de arbol',
                'pos-x': 740,
                'pos-y': 620
            })
            .setInteractive()

        this.chile_costeño = this.add.image(1140, 600, 'chile_costeño-bn').setScale(0.7)
            .setName('chile_costeño')
            .setData({
                'audio': 'tsapts_niiy',
                'texto': "tsäpts niiy",
                'traduccion': 'chile costeño',
                'pos-x': 1010,
                'pos-y': 620
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