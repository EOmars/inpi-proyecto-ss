import Phaser from '../lib/phaser.js'


export default class Scene extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    abuela
    abuelo
    adornos
    aguardiente
    atole
    elote
    gusano
    luciernaga
    madre
    niño
    mesa
    olla
    padre
    rueda_fortuna
    tamal
    toro_mecanico
    vendedoras    
    menu

    IMAGE_ROUTE = 'assets/escenario6/'
    SOUND_ROUTE = 'assets/escenario6/audio/'
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
        this.load.audio('aweeny', `${this.SOUND_ROUTE}aweeny.ogg`)
        this.load.audio('enk_awtetpe', `${this.SOUND_ROUTE}enk_awtetpe.ogg`)
        this.load.audio('mej_taak', `${this.SOUND_ROUTE}mej_taak.ogg`)
        this.load.audio('mej_teety', `${this.SOUND_ROUTE}mej_teety.ogg`)
        this.load.audio('pujx_tsakaaj', `${this.SOUND_ROUTE}pujx_tsakaaj.ogg`)
        this.load.audio('mek_neej', `${this.SOUND_ROUTE}mek_neej.ogg`)
        this.load.audio('miky', `${this.SOUND_ROUTE}miky.ogg`)
        this.load.audio('mixy', `${this.SOUND_ROUTE}mixy.ogg`)
        this.load.audio('nany', `${this.SOUND_ROUTE}nany.ogg`)
        this.load.audio('pekpajt', `${this.SOUND_ROUTE}pekpajt.ogg`)        
        this.load.audio('taak', `${this.SOUND_ROUTE}taak.ogg`)
        this.load.audio('teety', `${this.SOUND_ROUTE}teety.ogg`)
        this.load.audio('tinek', `${this.SOUND_ROUTE}tinek.ogg`)
        this.load.audio('xexy', `${this.SOUND_ROUTE}xexy.ogg`)
        this.load.audio('yik_tsujepe', `${this.SOUND_ROUTE}yik_tsujepe.ogg`)
        this.load.audio('tookpe', `${this.SOUND_ROUTE}tookpe.ogg`)
        this.load.audio('tseekx_pejk', `${this.SOUND_ROUTE}tseekx_pejk.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario6.jpg`)

        this.load.image('abuelo', `${this.IMAGE_ROUTE}abuelo.png`)
        this.load.image('abuelo-bn', `${this.IMAGE_ROUTE}abuelo-bn.png`)
        this.load.image('abuelo-borde', `${this.IMAGE_ROUTE}abuelo-borde.png`)

        this.load.image('abuela', `${this.IMAGE_ROUTE}abuela.png`)
        this.load.image('abuela-bn', `${this.IMAGE_ROUTE}abuela-bn.png`)
        this.load.image('abuela-borde', `${this.IMAGE_ROUTE}abuela-borde.png`)

        this.load.image('adornos', `${this.IMAGE_ROUTE}adornos.png`)
        this.load.image('adornos-bn', `${this.IMAGE_ROUTE}adornos-bn.png`)
        this.load.image('adornos-borde', `${this.IMAGE_ROUTE}adornos-borde.png`)

        this.load.image('aguardiente', `${this.IMAGE_ROUTE}aguardiente.png`)
        this.load.image('aguardiente-bn', `${this.IMAGE_ROUTE}aguardiente-bn.png`)
        this.load.image('aguardiente-borde', `${this.IMAGE_ROUTE}aguardiente-borde.png`)

        this.load.image('atole', `${this.IMAGE_ROUTE}atole.png`)
        this.load.image('atole-bn', `${this.IMAGE_ROUTE}atole-bn.png`)
        this.load.image('atole-borde', `${this.IMAGE_ROUTE}atole-borde.png`)

        this.load.image('elote', `${this.IMAGE_ROUTE}elote.png`)
        this.load.image('elote-bn', `${this.IMAGE_ROUTE}elote-bn.png`)
        this.load.image('elote-borde', `${this.IMAGE_ROUTE}elote-borde.png`)

        this.load.image('gusano', `${this.IMAGE_ROUTE}gusano.png`)
        this.load.image('gusano-bn', `${this.IMAGE_ROUTE}gusano-bn.png`)
        this.load.image('gusano-borde', `${this.IMAGE_ROUTE}gusano-borde.png`)

        this.load.image('luciernaga', `${this.IMAGE_ROUTE}luciernaga.png`)
        this.load.image('luciernaga-bn', `${this.IMAGE_ROUTE}luciernaga-bn.png`)
        this.load.image('luciernaga-borde', `${this.IMAGE_ROUTE}luciernaga-borde.png`)

        this.load.image('madre', `${this.IMAGE_ROUTE}madre.png`)
        this.load.image('madre-bn', `${this.IMAGE_ROUTE}madre-bn.png`)
        this.load.image('madre-borde', `${this.IMAGE_ROUTE}madre-borde.png`)

        this.load.image('niño', `${this.IMAGE_ROUTE}niño.png`)
        this.load.image('niño-bn', `${this.IMAGE_ROUTE}niño-bn.png`)
        this.load.image('niño-borde', `${this.IMAGE_ROUTE}niño-borde.png`)

        this.load.image('mesa', `${this.IMAGE_ROUTE}mesa.png`)
        this.load.image('mesa-bn', `${this.IMAGE_ROUTE}mesa-bn.png`)
        this.load.image('mesa-borde', `${this.IMAGE_ROUTE}mesa-borde.png`)

        this.load.image('olla', `${this.IMAGE_ROUTE}olla.png`)
        this.load.image('olla-bn', `${this.IMAGE_ROUTE}olla-bn.png`)
        this.load.image('olla-borde', `${this.IMAGE_ROUTE}olla-borde.png`)

        this.load.image('padre', `${this.IMAGE_ROUTE}padre.png`)
        this.load.image('padre-bn', `${this.IMAGE_ROUTE}padre-bn.png`)
        this.load.image('padre-borde', `${this.IMAGE_ROUTE}padre-borde.png`)

        this.load.image('rueda_fortuna', `${this.IMAGE_ROUTE}rueda_fortuna.png`)
        this.load.image('rueda_fortuna-bn', `${this.IMAGE_ROUTE}rueda_fortuna-bn.png`)
        this.load.image('rueda_fortuna-borde', `${this.IMAGE_ROUTE}rueda_fortuna-borde.png`)

        this.load.image('tamal', `${this.IMAGE_ROUTE}tamal.png`)
        this.load.image('tamal-bn', `${this.IMAGE_ROUTE}tamal-bn.png`)
        this.load.image('tamal-borde', `${this.IMAGE_ROUTE}tamal-borde.png`)

        this.load.image('toro_mecanico', `${this.IMAGE_ROUTE}toro_mecanico.png`)
        this.load.image('toro_mecanico-bn', `${this.IMAGE_ROUTE}toro_mecanico-bn.png`)
        this.load.image('toro_mecanico-borde', `${this.IMAGE_ROUTE}toro_mecanico-borde.png`)

        this.load.image('vendedoras', `${this.IMAGE_ROUTE}vendedoras.png`)
        this.load.image('vendedoras-bn', `${this.IMAGE_ROUTE}vendedoras-bn.png`)
        this.load.image('vendedoras-borde', `${this.IMAGE_ROUTE}vendedoras-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background


        this.adornos = this.add.image(640, 120, 'adornos-bn').setScale(0.67)
            .setName('adornos')
            .setData({
                'audio': 'yik_tsujepe',
                'texto': "yik tsújëpë",
                'traduccion': 'adornos',
                'pos-x': 250,
                'pos-y': 50
            })
            .setInteractive()

        this.toro_mecanico = this.add.image(350, 350, 'toro_mecanico-bn').setScale(0.7)
            .setName('toro_mecanico')
            .setData({
                'audio': 'pujx_tsakaaj',
                'texto': "pujx tsakääj",
                'traduccion': 'toro mecánico',
                'pos-x': 300,
                'pos-y': 200
            })
            .setInteractive()

        this.rueda_fortuna = this.add.image(750, 290, 'rueda_fortuna-bn').setScale(0.6)
            .setName('rueda_fortuna')
            .setData({
                'audio': 'enk_awtetpe',
                'texto': "enk awtëtpë",
                'traduccion': 'rueda de la fortuna',
                'pos-x': 530,
                'pos-y': 50
            })
            .setInteractive()


        this.gusano = this.add.image(380, 550, 'gusano-bn').setScale(0.6)
            .setName('gusano')
            .setData({
                'audio': 'tinek',
                'texto': "tïnë’k",
                'traduccion': 'gusano',
                'pos-x': 330,
                'pos-y': 540
            })
            .setInteractive()

        this.luciernaga = this.add.image(80, 380, 'luciernaga-bn').setScale(0.8)
            .setName('luciernaga')
            .setData({
                'audio': 'tseekx_pejk',
                'texto': 'tseekx pëjk',
                'traduccion': 'luciérnaga',
                'pos-x': 20,
                'pos-y': 250
            })
            .setInteractive()


        this.vendedoras = this.add.image(1050, 320, 'vendedoras-bn').setScale(0.7)
            .setName('vendedoras')
            .setData({
                'audio': 'tookpe',
                'texto': "too´kpë",
                'traduccion': 'vendedoras',
                'pos-x': 900,
                'pos-y': 100
            })
            .setInteractive()

        this.mesa = this.add.image(1055, 425, 'mesa-bn').setScale(0.8)
            .setName('mesa')
            .setData({
                'audio': 'pekpajt',
                'texto': "pëkpajt",
                'traduccion': 'mesa',
                'pos-x': 900,
                'pos-y': 400
            })
            .setInteractive()

        this.olla = this.add.image(1220, 300, 'olla-bn').setScale(0.5)
            .setName('olla')
            .setData({
                'audio': 'aweeny',
                'texto': "awëëny ",
                'traduccion': 'olla',
                'pos-x': 1160,
                'pos-y': 200
            })
            .setInteractive()



        this.elote = this.add.image(1080, 310, 'elote-bn').setScale(0.7)
            .setName('elote')
            .setData({
                'audio': 'xexy',
                'texto': "xë´xy",
                'traduccion': 'elote',
                'pos-x': 1050,
                'pos-y': 200
            })
            .setInteractive()

        this.madre = this.add.image(1200, 540, 'madre-bn').setScale(0.7)
            .setName('madre')
            .setData({
                'audio': 'taak',
                'texto': "tääk",
                'traduccion': 'madre',
                'pos-x': 1150,
                'pos-y': 590
            })
            .setInteractive()

        this.padre = this.add.image(1090, 540, 'padre-bn').setScale(0.7)
            .setName('padre')
            .setData({
                'audio': 'teety',
                'texto': "teety",
                'traduccion': 'padre',
                'pos-x': 1000,
                'pos-y': 620
            })
            .setInteractive()

        this.aguardiente = this.add.image(1140, 340, 'aguardiente-bn').setScale(1)
            .setName('aguardiente')
            .setData({
                'audio': 'mek_neej',
                'texto': "mëk nëëj",
                'traduccion': 'aguardiente',
                'pos-x': 1080,
                'pos-y': 370
            })
            .setInteractive()

        this.tamal = this.add.image(995, 345, 'tamal-bn').setScale(0.8)
            .setName('tamal')
            .setData({
                'audio': 'miky',
                'texto': "mi´ky",
                'traduccion': 'tamal',
                'pos-x': 900,
                'pos-y': 300
            })
            .setInteractive()

        this.atole = this.add.image(1000, 300, 'atole-bn').setScale(1.2)
            .setName('atole')
            .setData({
                'audio': 'nany',
                'texto': "na´ny",
                'traduccion': 'atole',
                'pos-x': 880,
                'pos-y': 210
            })
            .setInteractive()

        this.abuelo = this.add.image(850, 420, 'abuelo-bn').setScale(0.6)
            .setName('abuelo')
            .setData({
                'audio': 'mej_teety',
                'texto': 'mëj teety',
                'traduccion': 'abuelo',
                'pos-x': 670,
                'pos-y': 550
            })
            .setInteractive()

        this.niño = this.add.image(960, 605, 'niño-bn').setScale(0.7)
            .setName('niño')
            .setData({
                'audio': 'mixy',
                'texto': "mixy",
                'traduccion': 'niño',
                'pos-x': 870,
                'pos-y': 620
            })
            .setInteractive()

        this.abuela = this.add.image(750, 420, 'abuela-bn').setScale(0.6)
            .setName('abuela')
            .setData({
                'audio': 'mej_taak',
                'texto': "mëj tääk",
                'traduccion': 'abuela',
                'pos-x': 550,
                'pos-y': 340
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