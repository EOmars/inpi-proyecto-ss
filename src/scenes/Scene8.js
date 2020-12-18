import Phaser from '../lib/phaser.js'


export default class Scene extends Phaser.Scene {


    /** @type {Phaser.GameObjects.Image} */
    amarillo
    blanco
    negro
    rojo
    verde

    uno
    dos
    tres
    cuatro
    cinco
    seis
    siete
    ocho
    nueve
    diez
    once
    doce
    trece
    catorce
    quince
    dieciseis
    diecisiete
    dieciocho
    diecinueve
    veinte
    veintiuno
    veintidos
    veintitres
    veinticuatro
    veinticinco
    veintiseis
    veintisiete
    veintiocho
    veintinueve
    treinta

    menu

    IMAGE_ROUTE = 'assets/escenario8/'
    SOUND_ROUTE = 'assets/escenario8/audio/'
    style = { font: "bold 25px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }

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
        this.load.audio('puts', `${this.SOUND_ROUTE}puts.ogg`)
        this.load.audio('poop', `${this.SOUND_ROUTE}poop.ogg`)
        this.load.audio('yek', `${this.SOUND_ROUTE}yek.ogg`)
        this.load.audio('tsapts', `${this.SOUND_ROUTE}tsapts.ogg`)
        this.load.audio('tsuxk', `${this.SOUND_ROUTE}tsuxk.ogg`)

        this.load.audio('tuk', `${this.SOUND_ROUTE}tuk.ogg`)
        this.load.audio('matsk', `${this.SOUND_ROUTE}matsk.ogg`)
        this.load.audio('tekeek', `${this.SOUND_ROUTE}tekeek.ogg`)
        this.load.audio('maktaxk', `${this.SOUND_ROUTE}maktaxk.ogg`)
        this.load.audio('makoxk', `${this.SOUND_ROUTE}makoxk.ogg`)
        this.load.audio('tutujk', `${this.SOUND_ROUTE}tutujk.ogg`)
        this.load.audio('wexujk', `${this.SOUND_ROUTE}wexujk.ogg`)
        this.load.audio('tuktujk', `${this.SOUND_ROUTE}tuktujk.ogg`)
        this.load.audio('taxujk', `${this.SOUND_ROUTE}taxujk.ogg`)
        this.load.audio('majk', `${this.SOUND_ROUTE}majk.ogg`)
        this.load.audio('maktuk', `${this.SOUND_ROUTE}maktuk.ogg`)
        this.load.audio('makmatsk', `${this.SOUND_ROUTE}makmatsk.ogg`)
        this.load.audio('maktekeek', `${this.SOUND_ROUTE}maktekeek.ogg`)
        this.load.audio('makmakts', `${this.SOUND_ROUTE}makmakts.ogg`)
        this.load.audio('makmokx', `${this.SOUND_ROUTE}makmokx.ogg`)
        this.load.audio('maktujt', `${this.SOUND_ROUTE}maktujt.ogg`)
        this.load.audio('makwexujk', `${this.SOUND_ROUTE}makwexujk.ogg`)
        this.load.audio('maktuktujk', `${this.SOUND_ROUTE}maktuktujk.ogg`)
        this.load.audio('maktaxujk', `${this.SOUND_ROUTE}maktaxujk.ogg`)
        this.load.audio('eepx', `${this.SOUND_ROUTE}eepx.ogg`)
        this.load.audio('eepxuk', `${this.SOUND_ROUTE}eepxuk.ogg`)
        this.load.audio('eepxmatsk', `${this.SOUND_ROUTE}eepxmatsk.ogg`)
        this.load.audio('eepxekeek', `${this.SOUND_ROUTE}eepxekeek.ogg`)
        this.load.audio('eepxmaktaxk', `${this.SOUND_ROUTE}eepxmaktaxk.ogg`)
        this.load.audio('eepxmakoxk', `${this.SOUND_ROUTE}eepxmakoxk.ogg`)
        this.load.audio('eepxutujk', `${this.SOUND_ROUTE}eepxutujk.ogg`)
        this.load.audio('eepxwexujk', `${this.SOUND_ROUTE}eepxwexujk.ogg`)
        this.load.audio('eepxuktujk', `${this.SOUND_ROUTE}eepxuktujk.ogg`)
        this.load.audio('eepxxaxujk', `${this.SOUND_ROUTE}eepxxaxujk.ogg`)
        this.load.audio('eepxmajk', `${this.SOUND_ROUTE}eepxmajk.ogg`)

        //imagenes
        this.load.image('regresar', 'assets/flecha_izq.png')
        this.load.image('background', `${this.IMAGE_ROUTE}escenario8.jpg`)

        this.load.image('blanco', `${this.IMAGE_ROUTE}blanco.png`)
        this.load.image('blanco-bn', `${this.IMAGE_ROUTE}blanco-bn.png`)
        this.load.image('blanco-borde', `${this.IMAGE_ROUTE}blanco-borde.png`)

        this.load.image('amarillo', `${this.IMAGE_ROUTE}amarillo.png`)
        this.load.image('amarillo-bn', `${this.IMAGE_ROUTE}amarillo-bn.png`)
        this.load.image('amarillo-borde', `${this.IMAGE_ROUTE}amarillo-borde.png`)

        this.load.image('negro', `${this.IMAGE_ROUTE}negro.png`)
        this.load.image('negro-bn', `${this.IMAGE_ROUTE}negro-bn.png`)
        this.load.image('negro-borde', `${this.IMAGE_ROUTE}negro-borde.png`)

        this.load.image('rojo', `${this.IMAGE_ROUTE}rojo.png`)
        this.load.image('rojo-bn', `${this.IMAGE_ROUTE}rojo-bn.png`)
        this.load.image('rojo-borde', `${this.IMAGE_ROUTE}rojo-borde.png`)

        this.load.image('verde', `${this.IMAGE_ROUTE}verde.png`)
        this.load.image('verde-bn', `${this.IMAGE_ROUTE}verde-bn.png`)
        this.load.image('verde-borde', `${this.IMAGE_ROUTE}verde-borde.png`)

        this.load.image('uno', `${this.IMAGE_ROUTE}1.png`)
        this.load.image('uno-bn', `${this.IMAGE_ROUTE}1-bn.png`)
        this.load.image('uno-borde', `${this.IMAGE_ROUTE}1-borde.png`)

        this.load.image('dos', `${this.IMAGE_ROUTE}2.png`)
        this.load.image('dos-bn', `${this.IMAGE_ROUTE}2-bn.png`)
        this.load.image('dos-borde', `${this.IMAGE_ROUTE}2-borde.png`)

        this.load.image('tres', `${this.IMAGE_ROUTE}3.png`)
        this.load.image('tres-bn', `${this.IMAGE_ROUTE}3-bn.png`)
        this.load.image('tres-borde', `${this.IMAGE_ROUTE}3-borde.png`)

        this.load.image('cuatro', `${this.IMAGE_ROUTE}4.png`)
        this.load.image('cuatro-bn', `${this.IMAGE_ROUTE}4-bn.png`)
        this.load.image('cuatro-borde', `${this.IMAGE_ROUTE}4-borde.png`)

        this.load.image('cinco', `${this.IMAGE_ROUTE}5.png`)
        this.load.image('cinco-bn', `${this.IMAGE_ROUTE}5-bn.png`)
        this.load.image('cinco-borde', `${this.IMAGE_ROUTE}5-borde.png`)

        this.load.image('seis', `${this.IMAGE_ROUTE}6.png`)
        this.load.image('seis-bn', `${this.IMAGE_ROUTE}6-bn.png`)
        this.load.image('seis-borde', `${this.IMAGE_ROUTE}6-borde.png`)

        this.load.image('siete', `${this.IMAGE_ROUTE}7.png`)
        this.load.image('siete-bn', `${this.IMAGE_ROUTE}7-bn.png`)
        this.load.image('siete-borde', `${this.IMAGE_ROUTE}7-borde.png`)

        this.load.image('ocho', `${this.IMAGE_ROUTE}8.png`)
        this.load.image('ocho-bn', `${this.IMAGE_ROUTE}8-bn.png`)
        this.load.image('ocho-borde', `${this.IMAGE_ROUTE}8-borde.png`)

        this.load.image('nueve', `${this.IMAGE_ROUTE}9.png`)
        this.load.image('nueve-bn', `${this.IMAGE_ROUTE}9-bn.png`)
        this.load.image('nueve-borde', `${this.IMAGE_ROUTE}9-borde.png`)

        this.load.image('diez', `${this.IMAGE_ROUTE}10.png`)
        this.load.image('diez-bn', `${this.IMAGE_ROUTE}10-bn.png`)
        this.load.image('diez-borde', `${this.IMAGE_ROUTE}10-borde.png`)

        this.load.image('once', `${this.IMAGE_ROUTE}11.png`)
        this.load.image('once-bn', `${this.IMAGE_ROUTE}11-bn.png`)
        this.load.image('once-borde', `${this.IMAGE_ROUTE}11-borde.png`)

        this.load.image('doce', `${this.IMAGE_ROUTE}12.png`)
        this.load.image('doce-bn', `${this.IMAGE_ROUTE}12-bn.png`)
        this.load.image('doce-borde', `${this.IMAGE_ROUTE}12-borde.png`)

        this.load.image('trece', `${this.IMAGE_ROUTE}13.png`)
        this.load.image('trece-bn', `${this.IMAGE_ROUTE}13-bn.png`)
        this.load.image('trece-borde', `${this.IMAGE_ROUTE}13-borde.png`)

        this.load.image('catorce', `${this.IMAGE_ROUTE}14.png`)
        this.load.image('catorce-bn', `${this.IMAGE_ROUTE}14-bn.png`)
        this.load.image('catorce-borde', `${this.IMAGE_ROUTE}14-borde.png`)

        this.load.image('quince', `${this.IMAGE_ROUTE}15.png`)
        this.load.image('quince-bn', `${this.IMAGE_ROUTE}15-bn.png`)
        this.load.image('quince-borde', `${this.IMAGE_ROUTE}15-borde.png`)

        this.load.image('dieciseis', `${this.IMAGE_ROUTE}16.png`)
        this.load.image('dieciseis-bn', `${this.IMAGE_ROUTE}16-bn.png`)
        this.load.image('dieciseis-borde', `${this.IMAGE_ROUTE}16-borde.png`)

        this.load.image('diecisiete', `${this.IMAGE_ROUTE}17.png`)
        this.load.image('diecisiete-bn', `${this.IMAGE_ROUTE}17-bn.png`)
        this.load.image('diecisiete-borde', `${this.IMAGE_ROUTE}18-borde.png`)

        this.load.image('dieciocho', `${this.IMAGE_ROUTE}18.png`)
        this.load.image('dieciocho-bn', `${this.IMAGE_ROUTE}18-bn.png`)
        this.load.image('dieciocho-borde', `${this.IMAGE_ROUTE}18-borde.png`)

        this.load.image('diecinueve', `${this.IMAGE_ROUTE}19.png`)
        this.load.image('diecinueve-bn', `${this.IMAGE_ROUTE}19-bn.png`)
        this.load.image('diecinueve-borde', `${this.IMAGE_ROUTE}19-borde.png`)

        this.load.image('veinte', `${this.IMAGE_ROUTE}20.png`)
        this.load.image('veinte-bn', `${this.IMAGE_ROUTE}20-bn.png`)
        this.load.image('veinte-borde', `${this.IMAGE_ROUTE}20-borde.png`)

        this.load.image('veintiuno', `${this.IMAGE_ROUTE}21.png`)
        this.load.image('veintiuno-bn', `${this.IMAGE_ROUTE}21-bn.png`)
        this.load.image('veintiuno-borde', `${this.IMAGE_ROUTE}21-borde.png`)

        this.load.image('veintidos', `${this.IMAGE_ROUTE}22.png`)
        this.load.image('veintidos-bn', `${this.IMAGE_ROUTE}22-bn.png`)
        this.load.image('veintidos-borde', `${this.IMAGE_ROUTE}22-borde.png`)

        this.load.image('veintitres', `${this.IMAGE_ROUTE}23.png`)
        this.load.image('veintitres-bn', `${this.IMAGE_ROUTE}23-bn.png`)
        this.load.image('veintitres-borde', `${this.IMAGE_ROUTE}23-borde.png`)

        this.load.image('veinticuatro', `${this.IMAGE_ROUTE}24.png`)
        this.load.image('veinticuatro-bn', `${this.IMAGE_ROUTE}24-bn.png`)
        this.load.image('veinticuatro-borde', `${this.IMAGE_ROUTE}24-borde.png`)

        this.load.image('veinticinco', `${this.IMAGE_ROUTE}25.png`)
        this.load.image('veinticinco-bn', `${this.IMAGE_ROUTE}25-bn.png`)
        this.load.image('veinticinco-borde', `${this.IMAGE_ROUTE}25-borde.png`)

        this.load.image('veintiseis', `${this.IMAGE_ROUTE}26.png`)
        this.load.image('veintiseis-bn', `${this.IMAGE_ROUTE}26-bn.png`)
        this.load.image('veintiseis-borde', `${this.IMAGE_ROUTE}26-borde.png`)

        this.load.image('veintisiete', `${this.IMAGE_ROUTE}27.png`)
        this.load.image('veintisiete-bn', `${this.IMAGE_ROUTE}27-bn.png`)
        this.load.image('veintisiete-borde', `${this.IMAGE_ROUTE}27-borde.png`)

        this.load.image('veintiocho', `${this.IMAGE_ROUTE}28.png`)
        this.load.image('veintiocho-bn', `${this.IMAGE_ROUTE}28-bn.png`)
        this.load.image('veintiocho-borde', `${this.IMAGE_ROUTE}28-borde.png`)

        this.load.image('veintinueve', `${this.IMAGE_ROUTE}29.png`)
        this.load.image('veintinueve-bn', `${this.IMAGE_ROUTE}29-bn.png`)
        this.load.image('veintinueve-borde', `${this.IMAGE_ROUTE}29-borde.png`)

        this.load.image('treinta', `${this.IMAGE_ROUTE}30.png`)
        this.load.image('treinta-bn', `${this.IMAGE_ROUTE}30-bn.png`)
        this.load.image('treinta-borde', `${this.IMAGE_ROUTE}30-borde.png`)
    }

    create() {
        //1280 * 720
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background')
            .setScale(2 / 3) // 1920 tam original del background
            
        this.rojo = this.add.image(790, 470, 'rojo-bn').setScale(0.65)
            .setName('rojo')
            .setData({
                'audio': 'tsapts',
                'texto': "täpts",
                'traduccion': 'rojo',
                'pos-x': 760,
                'pos-y': 540
            })
            .setInteractive()

        this.amarillo = this.add.image(900, 470, 'amarillo-bn').setScale(0.65)
            .setName('amarillo')
            .setData({
                'audio': 'puts',
                'texto': "pu´ts",
                'traduccion': 'amarillo',
                'pos-x': 850,
                'pos-y': 540
            })
            .setInteractive()

        this.verde = this.add.image(1010, 470, 'verde-bn').setScale(0.65)
            .setName('verde')
            .setData({
                'audio': 'tsuxk',
                'texto': 'tsuxk ',
                'traduccion': 'verde',
                'pos-x': 980,
                'pos-y': 540
            })
            .setInteractive()

        this.negro = this.add.image(1120, 470, 'negro-bn').setScale(.65)
            .setName('negro')
            .setData({
                'audio': 'yek',
                'texto': "yëk",
                'traduccion': 'negro ',
                'pos-x': 1080,
                'pos-y': 540
            })
            .setInteractive()

        this.blanco = this.add.image(1230, 470, 'blanco-bn').setScale(0.65)
            .setName('blanco')
            .setData({
                'audio': 'poop',
                'texto': 'poop',
                'traduccion': 'blanco ',
                'pos-x': 1180,
                'pos-y': 540
            })
            .setInteractive()

        this.uno = this.add.image(185, 190, 'uno-bn').setScale(0.7)
            .setName('uno')
            .setData({
                'audio': 'tuk',
                'texto': "tu´k",
                'traduccion': 'uno',
                'pos-x': 470,
                'pos-y': 20
            })
            .setInteractive()

        this.dos = this.add.image(245, 190, 'dos-bn').setScale(0.7)
            .setName('dos')
            .setData({
                'audio': 'matsk',
                'texto': "matsk ",
                'traduccion': 'dos',
                'pos-x': 540,
                'pos-y': 20
            })
            .setInteractive()

        this.tres = this.add.image(305, 190, 'tres-bn').setScale(0.7)
            .setName('tres')
            .setData({
                'audio': 'tekeek',
                'texto': "tëkëëk",
                'traduccion': 'tres',
                'pos-x': 640,
                'pos-y': 20
            })
            .setInteractive()

        this.cuatro = this.add.image(360, 190, 'cuatro-bn').setScale(0.7)
            .setName('cuatro')
            .setData({
                'audio': 'maktaxk',
                'texto': "maktäxk ",
                'traduccion': 'cuatro',
                'pos-x': 740,
                'pos-y': 20
            })
            .setInteractive()

        this.cinco = this.add.image(420, 190, 'cinco-bn').setScale(0.7)
            .setName('cinco')
            .setData({
                'audio': 'makoxk',
                'texto': "makoxk ",
                'traduccion': 'cinco',
                'pos-x': 870,
                'pos-y': 20
            })
            .setInteractive()

        this.seis = this.add.image(75, 250, 'seis-bn').setScale(0.7)
            .setName('seis')
            .setData({
                'audio': 'tutujk',
                'texto': "tutujk",
                'traduccion': 'seis',
                'pos-x': 470,
                'pos-y': 120
            })
            .setInteractive()

        this.siete = this.add.image(130, 250, 'siete-bn').setScale(0.7)
            .setName('siete')
            .setData({
                'audio': 'wexujk',
                'texto': "wëxujk ",
                'traduccion': 'siete',
                'pos-x': 570,
                'pos-y': 120
            })
            .setInteractive()

        this.ocho = this.add.image(185, 250, 'ocho-bn').setScale(0.7)
            .setName('ocho')
            .setData({
                'audio': 'tuktujk',
                'texto': "tuktujk",
                'traduccion': 'ocho',
                'pos-x': 685,
                'pos-y': 120
            })
            .setInteractive()

        this.nueve = this.add.image(245, 250, 'nueve-bn').setScale(0.7)
            .setName('nueve')
            .setData({
                'audio': 'taxujk',
                'texto': "täxujk",
                'traduccion': 'nueve',
                'pos-x': 800,
                'pos-y': 120
            })
            .setInteractive()

        this.diez = this.add.image(305, 250, 'diez-bn').setScale(0.7)
            .setName('diez')
            .setData({
                'audio': 'majk',
                'texto': "mäjk ",
                'traduccion': 'diez',
                'pos-x': 915,
                'pos-y': 120
            })
            .setInteractive()

        this.once = this.add.image(360, 250, 'once-bn').setScale(0.7)
            .setName('once')
            .setData({
                'audio': 'maktuk',
                'texto': "maktu´k ",
                'traduccion': 'once',
                'pos-x': 1000,
                'pos-y': 120
            })
            .setInteractive()

        this.doce = this.add.image(420, 250, 'doce-bn').setScale(0.7)
            .setName('doce')
            .setData({
                'audio': 'makmatsk',
                'texto': "makmatsk ",
                'traduccion': 'doce',
                'pos-x': 470,
                'pos-y': 220
            })
            .setInteractive()

        this.trece = this.add.image(75, 310, 'trece-bn').setScale(0.7)
            .setName('trece')
            .setData({
                'audio': 'maktekeek',
                'texto': "maktëkëëk ",
                'traduccion': 'trece',
                'pos-x': 610,
                'pos-y': 220
            })
            .setInteractive()

        this.catorce = this.add.image(130, 310, 'catorce-bn').setScale(0.7)
            .setName('catorce')
            .setData({
                'audio': 'makmakts',
                'texto': "makmäkts ",
                'traduccion': 'catorce',
                'pos-x': 770,
                'pos-y': 220
            })
            .setInteractive()

        this.quince = this.add.image(185, 310, 'quince-bn').setScale(0.7)
            .setName('quince')
            .setData({
                'audio': 'makmokx',
                'texto': "makmokx  ",
                'traduccion': 'quince',
                'pos-x': 920,
                'pos-y': 220
            })
            .setInteractive()

        this.dieciseis = this.add.image(245, 310, 'dieciseis-bn').setScale(0.7)
            .setName('dieciseis')
            .setData({
                'audio': 'maktujt',
                'texto': "maktujk",
                'traduccion': 'dieciseis',
                'pos-x': 470,
                'pos-y': 320
            })
            .setInteractive()

        this.diecisiete = this.add.image(305, 310, 'diecisiete-bn').setScale(0.7)
            .setName('diecisiete')
            .setData({
                'audio': 'makwexujk',
                'texto': "makwëxujk",
                'traduccion': 'diecisiete',
                'pos-x': 610,
                'pos-y': 320
            })
            .setInteractive()

        this.dieciocho = this.add.image(360, 310, 'dieciocho-bn').setScale(0.7)
            .setName('dieciocho')
            .setData({
                'audio': 'maktuktujk',
                'texto': "maktuktujk",
                'traduccion': 'dieciocho',
                'pos-x': 770,
                'pos-y': 320
            })
            .setInteractive()

        this.diecinueve = this.add.image(420, 310, 'diecinueve-bn').setScale(0.7)
            .setName('diecinueve')
            .setData({
                'audio': 'maktaxujk',
                'texto': "maktäxujk",
                'traduccion': 'diecinueve',
                'pos-x': 930,
                'pos-y': 320
            })
            .setInteractive()

        this.veinte = this.add.image(75, 370, 'veinte-bn').setScale(0.7)
            .setName('veinte')
            .setData({
                'audio': 'eepx',
                'texto': "eepx",
                'traduccion': 'veinte',
                'pos-x': 50,
                'pos-y': 490
            })
            .setInteractive()

        this.veintiuno = this.add.image(130, 370, 'veintiuno-bn').setScale(0.7)
            .setName('veintiuno')
            .setData({
                'audio': 'eepxuk',
                'texto': "eexpu´k ",
                'traduccion': 'veintiuno',
                'pos-x': 155,
                'pos-y': 490
            })
            .setInteractive()

        this.veintidos = this.add.image(185, 370, 'veintidos-bn').setScale(0.7)
            .setName('veintidos')
            .setData({
                'audio': 'eepxmatsk',
                'texto': "eepxmatsk ",
                'traduccion': 'veintidos',
                'pos-x': 310,
                'pos-y': 490
            })
            .setInteractive()

        this.veintitres = this.add.image(245, 370, 'veintitres-bn').setScale(0.7)
            .setName('veintitres')
            .setData({
                'audio': 'eepxekeek',
                'texto': "eepxëkëëk ",
                'traduccion': 'veintitres',
                'pos-x': 470,
                'pos-y': 490
            })
            .setInteractive()

        this.veinticuatro = this.add.image(305, 370, 'veinticuatro-bn').setScale(0.7)
            .setName('veinticuatro')
            .setData({
                'audio': 'eepxmaktaxk',
                'texto': "eepxmaktäxk",
                'traduccion': 'veinticuatro',
                'pos-x': 50,
                'pos-y': 570
            })
            .setInteractive()

        this.veinticinco = this.add.image(360, 370, 'veinticinco-bn').setScale(0.7)
            .setName('veinticinco')
            .setData({
                'audio': 'eepxmakoxk',
                'texto': "eepxmakoxk",
                'traduccion': 'veinticinco',
                'pos-x': 250,
                'pos-y': 570
            })
            .setInteractive()

        this.veintiseis = this.add.image(420, 370, 'veintiseis-bn').setScale(0.7)
            .setName('veintiseis')
            .setData({
                'audio': 'eepxutujk',
                'texto': "eepxutujk",
                'traduccion': 'veintiseis',
                'pos-x': 440,
                'pos-y': 570
            })
            .setInteractive()

        this.veintisiete = this.add.image(75, 440, 'veintisiete-bn').setScale(0.7)
            .setName('veintisiete')
            .setData({
                'audio': 'eepxwexujk',
                'texto': "eepxwexujk",
                'traduccion': 'veintisiete',
                'pos-x': 50,
                'pos-y': 650
            })
            .setInteractive()

        this.veintiocho = this.add.image(130, 440, 'veintiocho-bn').setScale(0.7)
            .setName('veintiocho')
            .setData({
                'audio': 'eepxuktujk',
                'texto': "eepxujtujk",
                'traduccion': 'veintiocho',
                'pos-x': 230,
                'pos-y': 650
            })
            .setInteractive()

        this.veintinueve = this.add.image(185, 440, 'veintinueve-bn').setScale(0.7)
            .setName('veintinueve')
            .setData({
                'audio': 'eepxxaxujk',
                'texto': "eepxxaxujk",
                'traduccion': 'veintinueve',
                'pos-x': 400,
                'pos-y': 650
            })
            .setInteractive()

        this.treinta = this.add.image(245, 440, 'treinta-bn').setScale(0.7)
            .setName('treinta')
            .setData({
                'audio': 'eepxmajk',
                'texto': "eepxmäjk ",
                'traduccion': 'treinta',
                'pos-x': 590,
                'pos-y': 650
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
            bar.fillStyle(0x000000, 0.6)
            bar.fillRect(x - 10, y - 10, txtLength * 15, 70)

            this.add.text(x, y,
                gameObject.getData('texto') + "\n" + gameObject.getData('traduccion'),
                this.style
            )
        }
        gameObject.setState(1)
    }
}