import Phaser from 'phaser'
export default class nivganado extends Phaser.Scene {

  constructor() {
    super('niv-ganado');
  }

  create(){
      
    this.add.image(960, 540, "fondowin");
    this.add.image(960,540,"general")
    
    var btnreset=this.add.image(410,580,"reintentar")
    btnreset.setInteractive()
    btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.stop();
			this.scene.start('nivel1');
		});

    var btnsig=this.add.image(1480,580,"siguiente")
    btnsig.setInteractive()
    btnsig.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.stop();
      this.scene.stop("nivel1")
			this.scene.launch('nivel2');
		});

    var btnmenu=this.add.image(940,715,"menu")
    btnmenu.setInteractive()
    btnmenu.on('pointerdown', () => this.scene.start('inicio'))
   
  
  } 
  
}