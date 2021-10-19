import Phaser from 'phaser'
export default class pausa extends Phaser.Scene {

  constructor() {
    super('pausa');
  }

  create(){
      
    this.add.image(960, 540, "fondowin");
    this.add.image(960,540,"general")
    
    var btnreset=this.add.image(410,580,"reintentar")
    btnreset.setInteractive()
    btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.stop();
            this.scene.stop("nivel1")
			this.scene.launch('nivel1');
		});

    var btnresume=this.add.image(1480,580,"botonJugar")
    btnresume.setInteractive()
    btnresume.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
        this.scene.stop();
        this.scene.resume('nivel1');
    });

    var btnmenu=this.add.image(940,715,"menu")
    btnmenu.setInteractive()
    btnmenu.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
        this.scene.stop();
        this.scene.stop("nivel1")
        this.scene.stop("fondo")
        this.scene.stop("ui")
        this.scene.start('inicio');
    });
   
  
  } 
  
}