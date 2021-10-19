import Phaser from 'phaser'
export default class preload extends Phaser.Scene {

  constructor() {
    super('preload');
  }

  preload(){
    this.load.image("botonclose","assets/Sprites/Interface/Buttons/gripper_close.png");
    this.load.image("fondomenu", "assets/Sprites/Backgrounds/background_menus.png");
    this.load.image("fondowin","assets/Sprites/Backgrounds/background_2.png")
    this.load.image("logo", "assets/Sprites/Logo/logo.png");
    this.load.image("botonInstrucciones","assets/Sprites/Interface/Buttons/instructions.png");
    this.load.image("botonJugar","assets/Sprites/Interface/Buttons/Play.png");
    this.load.image("creditosmenu","assets/Sprites/Interface/Buttons/credits_v1.png");
    this.load.image("settingsmenu","assets/Sprites/Interface/Buttons/settings.png");
    this.load.image("creditos","assets/Sprites/Interface/PopUps/credits.png");
    this.load.image("niveles","assets/Sprites/Interface/PopUps/levels.png");
    this.load.image("general","assets/Sprites/Interface/PopUps/general.png");
    this.load.image("volver","assets/Sprites/Interface/Buttons/back.png");
    this.load.image("niv1","assets/Sprites/Interface/Buttons/level_1.png");
    this.load.image("niv2","assets/Sprites/Interface/Buttons/level_2.png");
    this.load.image("niv3","assets/Sprites/Interface/Buttons/level_3.png");
    this.load.image("galery","assets/Sprites/Interface/Buttons/gallery.png");
    this.load.image("pausa","assets/Sprites/Interface/Buttons/pause.png");
    this.load.image("nivelblock","assets/Sprites/Interface/Buttons/level_blocked.png");
    this.load.image("mutear","assets/Sprites/Interface/Buttons/sound_mute_v2.png");
    this.load.image("desmutear","assets/Sprites/Interface/Buttons/sound_unmute_v2.png");
    this.load.image("fondoniv1", "assets/Sprites/Backgrounds/background_1.png");
    this.load.image("barrageneral","assets/Sprites/Interface/Bars/general.png");
    this.load.image("barrabasura","assets/Sprites/Interface/Bars/cuota_up.png");
    this.load.image("barravida","assets/Sprites/Interface/Bars/life_up.png");
    this.load.image("recuadro","assets/Sprites/Interface/Extras/Frame.png");
    this.load.image("extensionesbot","assets/Sprites/Interface/Extras/frame_extension.png");
    this.load.image("ajustes","assets/Sprites/Interface/PopUps/settings.png");
    this.load.image("instrucciones","assets/Sprites/Interface/PopUps/instructions.png");
    this.load.image("especies","assets/Sprites/Interface/PopUps/species.png");

    //Botones
    this.load.image("reintentar","assets/Sprites/Interface/Buttons/retry.png");
    this.load.image("menu","assets/Sprites/Interface/Buttons/menu.png");
    this.load.image("siguiente","assets/Sprites/Interface/Buttons/next.png");
    this.load.image("ok","assets/Sprites/Interface/Buttons/ok.png");

    //Ganchos
    this.load.image("ganchopunta","assets/Sprites/Serva/grippers_open.png");
    this.load.image("ganchocerrado", "assets/Sprite/Serva/grippers_close");

    //Caras personaje
    this.load.image("personaje","assets/Sprites/Serva/body_happy.png");
    this.load.image("personajetriste","assets/Sprites/Serva/body_sad.png");
    this.load.image("personajeconc","assets/Sprites/Serva/body_concentrated.png");
    this.load.image("personajebien","assets/Sprites/Serva/body_goodg.png");
    this.load.image("personajemal","assets/Sprites/Serva/body_bad.png");

    //Boton gancho
    this.load.image("botongancho","assets/Sprites/Interface/Buttons/gripper.png");

    //Peces
    this.load.image("piraña","assets/Sprites/Fishes/pirana.png");
    this.load.image("anguila", "assets/Sprites/Fishes/anguila.png");
    this.load.image("boga", "assets/Sprites/Fishes/boga.png");
    this.load.image("dientudo", "assets/Sprites/Fishes/dientudo.png");
    this.load.image("dorado", "assets/Sprites/Fishes/dorado.png");
    this.load.image("manguruyu", "assets/Sprites/Fishes/manguruyu.png");
    this.load.image("mojarra", "assets/Sprites/Fishes/mojarra.png");
    this.load.image("pacu", "assets/Sprites/Fishes/pacu.png");
    this.load.image("pati", "assets/Sprites/Fishes/pati.png");
    this.load.image("sabalo", "assets/Sprites/Fishes/sabalo.png");
    this.load.image("sardina", "assets/Sprites/Fishes/sardina.png");
    this.load.image("viejadelagua", "assets/Sprites/Fishes/viejadelagua.png");
    this.load.image("sardinablanca", "assets/Sprites/Fishes/sardina_white.png");
    this.load.image("bogablanca", "assets/Sprites/Fishes/boga_white.png");
    this.load.image("doradoblanco", "assets/Sprites/Fishes/dorado_white.png");
    //Basura
    this.load.image("bota","assets/Sprites/Trash/trash_1.png");
    this.load.image("bot-rota","assets/Sprites/Trash/trash_2.png");
    this.load.image("botella","assets/Sprites/Trash/trash_3.png");
    this.load.image("pila","assets/Sprites/Trash/trash_4.png");
    this.load.image("celular","assets/Sprites/Trash/trash_5.png");
    this.load.image("bolsa","assets/Sprites/Trash/trash_6.png");
    this.load.image("cable","assets/Sprites/Trash/trash_7.png");
    this.load.image("lata","assets/Sprites/Trash/trash_8.png");

    //Fondo
    this.load.image("nubes","assets/Sprites/Clouds/cloud_1.png");
    this.load.image("nubes2","assets/Sprites/Clouds/cloud_2.png");
    this.load.image("nubes3","assets/Sprites/Clouds/cloud_3.png");

    //UI Barras
    this.load.image("vidallena","assets/Sprites/Interface/Bars/life_bar.png");
    this.load.image("basurallena","assets/Sprites/Interface/Bars/cuota_bar.png");



    this.load.image("piso","assets/Sprites/Backgrounds/piso.png");
    //Personaje
    this.load.spritesheet('personaje', 'assets/Sprites/Serva/´spritessheet.png', { frameWidth: 800, frameHeight: 150 });
  }

  create(){
    this.scene.start("inicio");
  }

}