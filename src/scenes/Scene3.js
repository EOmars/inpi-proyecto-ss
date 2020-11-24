import Phaser from '../lib/phaser.js'


export default class Scene extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    arcoiris
    iglesia
    municipio
    musicobombo
    musicotambor
    musicotrompeta
    musicotuba
    nubes
    sacerdote
    señor
    señora
    menu

    IMAGE_ROUTE = 'assets/escenario3/'
    SOUND_ROUTE = 'assets/escenario3/audio/'
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
        this.load.audio('ijtsy', `${this.SOUND_ROUTE}ijtsy.ogg`)
        this.load.audio('tsaptejk', `${this.SOUND_ROUTE}tsaptejk.ogg`)
        this.load.audio('kemuunytyejk', `${this.SOUND_ROUTE}kemuunytyejk.ogg`)
        this.load.audio('tampurewope', `${this.SOUND_ROUTE}tampurewope.ogg`)
        this.load.audio('tarole_wope', `${this.SOUND_ROUTE}tarole_wope.ogg`)
        this.load.audio('trumpete_xuxpe', `${this.SOUND_ROUTE}trumpete_xuxpe.ogg`)
        this.load.audio('tuupe_xuxpe', `${this.SOUND_ROUTE}tuupe_xuxpe.ogg`)
        this.load.audio('yoots', `${this.SOUND_ROUTE}yoots.ogg`)
        this.load.audio('teety', `${this.SOUND_ROUTE}teety.ogg`)
        this.load.audio('yaaytyejk', `${this.SOUND_ROUTE}yaaytyejk.ogg`)
        this.load.audio('texyjejk', `${this.SOUND_ROUTE}texyjejk.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario3.jpg`)

        this.load.image('iglesia', `${this.IMAGE_ROUTE}iglesia.png`)
        this.load.image('iglesia-bn', `${this.IMAGE_ROUTE}iglesia-bn.png`)
        this.load.image('iglesia-borde', `${this.IMAGE_ROUTE}iglesia-borde.png`)

        this.load.image('arcoiris', `${this.IMAGE_ROUTE}arcoiris.png`)
        this.load.image('arcoiris-bn', `${this.IMAGE_ROUTE}arcoiris-bn.png`)
        this.load.image('arcoiris-borde', `${this.IMAGE_ROUTE}arcoiris-borde.png`)

        this.load.image('municipio', `${this.IMAGE_ROUTE}municipio.png`)
        this.load.image('municipio-bn', `${this.IMAGE_ROUTE}municipio-bn.png`)
        this.load.image('municipio-borde', `${this.IMAGE_ROUTE}municipio-borde.png`)

        this.load.image('musicobombo', `${this.IMAGE_ROUTE}musicobombo.png`)
        this.load.image('musicobombo-bn', `${this.IMAGE_ROUTE}musicobombo-bn.png`)
        this.load.image('musicobombo-borde', `${this.IMAGE_ROUTE}musicobombo-borde.png`)

        this.load.image('musicotambor', `${this.IMAGE_ROUTE}musicotambor.png`)
        this.load.image('musicotambor-bn', `${this.IMAGE_ROUTE}musicotambor-bn.png`)
        this.load.image('musicotambor-borde', `${this.IMAGE_ROUTE}musicotambor-borde.png`)

        this.load.image('musicotrompeta', `${this.IMAGE_ROUTE}musicotrompeta.png`)
        this.load.image('musicotrompeta-bn', `${this.IMAGE_ROUTE}musicotrompeta-bn.png`)
        this.load.image('musicotrompeta-borde', `${this.IMAGE_ROUTE}musicotrompeta-borde.png`)

        this.load.image('musicotuba', `${this.IMAGE_ROUTE}musicotuba.png`)
        this.load.image('musicotuba-bn', `${this.IMAGE_ROUTE}musicotuba-bn.png`)
        this.load.image('musicotuba-borde', `${this.IMAGE_ROUTE}musicotuba-borde.png`)

        this.load.image('nubes', `${this.IMAGE_ROUTE}nubes.png`)
        this.load.image('nubes-bn', `${this.IMAGE_ROUTE}nubes-bn.png`)
        this.load.image('nubes-borde', `${this.IMAGE_ROUTE}nubes-borde.png`)

        this.load.image('sacerdote', `${this.IMAGE_ROUTE}sacerdote.png`)
        this.load.image('sacerdote-bn', `${this.IMAGE_ROUTE}sacerdote-bn.png`)
        this.load.image('sacerdote-borde', `${this.IMAGE_ROUTE}sacerdote-borde.png`)

        this.load.image('señor', `${this.IMAGE_ROUTE}señor.png`)
        this.load.image('señor-bn', `${this.IMAGE_ROUTE}señor-bn.png`)
        this.load.image('señor-borde', `${this.IMAGE_ROUTE}señor-borde.png`)

        this.load.image('señora', `${this.IMAGE_ROUTE}señora.png`)
        this.load.image('señora-bn', `${this.IMAGE_ROUTE}señora-bn.png`)
        this.load.image('señora-borde', `${this.IMAGE_ROUTE}señora-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background

        this.arcoiris = this.add.image(600, 200, 'arcoiris-bn').setScale(0.6, 0.5)
            .setName('arcoiris')
            .setData({
                'audio': 'ijtsy',
                'texto': "'ijtsy",
                'traduccion': 'arcoiris',
                'pos-x': 100,
                'pos-y': 50
            })
            .setInteractive()

        this.municipio = this.add.image(400, 300, 'municipio-bn').setScale(0.6)
            .setName('municipio')
            .setData({
                'audio': 'kemuunytyejk',
                'texto': "kemuunytyëjk",
                'traduccion': 'municipio',
                'pos-x': 350,
                'pos-y': 190
            })
            .setInteractive()

        this.nubes = this.add.image(800, 150, 'nubes-bn').setScale(0.6)
            .setName('nubes')
            .setData({
                'audio': 'yoots',
                'texto': 'yoots',
                'traduccion': 'nubes',
                'pos-x': 720,
                'pos-y': 30
            })
            .setInteractive()

        this.iglesia = this.add.image(1080, 280, 'iglesia-bn').setScale(.7)
            .setName('iglesia')
            .setData({
                'audio': 'tsaptejk',
                'texto': 'tsaptëjk ',
                'traduccion': 'iglesia',
                'pos-x': 790,
                'pos-y': 150
            })
            .setInteractive()

        this.musicotrompeta = this.add.image(200, 530, 'musicotrompeta-bn').setScale(0.7)
            .setName('musicotrompeta')
            .setData({
                'audio': 'trumpete_xuxpe',
                'texto': "trumpetë xuxpë",
                'traduccion': 'musicotrompeta ',
                'pos-x': 20,
                'pos-y': 330
            })
            .setInteractive()

        this.musicotambor = this.add.image(330, 500, 'musicotambor-bn').setScale(0.7)
            .setName('musicotambor')
            .setData({
                'audio': 'tarole_wope',
                'texto': "tarolë wopë",
                'traduccion': 'tarolista',
                'pos-x': 250,
                'pos-y': 600
            })
            .setInteractive()

        this.musicobombo = this.add.image(490, 490, 'musicobombo-bn').setScale(0.7)
            .setName('musicobombo')
            .setData({
                'audio': 'tampurewope',
                'texto': "tampurëwope",
                'traduccion': 'tamborero',
                'pos-x': 370,
                'pos-y': 300
            })
            .setInteractive()

        this.musicotuba = this.add.image(600, 480, 'musicotuba-bn').setScale(0.7)
            .setName('musicotuba')
            .setData({
                'audio': 'tuupe_xuxpe',
                'texto': 'tuupë xuxpë',
                'traduccion': 'tubista',
                'pos-x': 550,
                'pos-y': 600
            })
            .setInteractive()

        this.señor = this.add.image(800,500, 'señor-bn').setScale(0.7)
            .setName('señor')
            .setData({
                'audio': 'yaaytyejk',
                'texto': "yää'ytyejk",
                'traduccion': 'señor',
                'pos-x': 750,
                'pos-y': 300
            })
            .setInteractive()

            this.señora = this.add.image(900, 500, 'señora-bn').setScale(0.7)
            .setName('señora')
            .setData({
                'audio': 'texyjejk',
                'texto': "të'xyjëjk",
                'traduccion': 'señora',
                'pos-x': 900,
                'pos-y': 620
            })
            .setInteractive()

        this.sacerdote = this.add.image(1050, 450, 'sacerdote-bn').setScale(0.7)
            .setName('sacerdote')
            .setData({
                'audio': 'teety',
                'texto': "teety",
                'traduccion': 'sacerdote',
                'pos-x': 1050,
                'pos-y': 270
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