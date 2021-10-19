import Phaser from 'phaser'
export default class menu extends Phaser.Scene {

  constructor() {
    super('inicio');
  }
  
  create() {
   //this.setNivel()

    var fondo=this.add.image(960, 540,"fondomenu");
    var logo=this.add.image(1200, 500,"logo");
    this.add.image(100, 530,"extensionesbot");

    //boton jugar
    var botonjugar=this.add.image(400,300,"botonJugar")
    botonjugar.setInteractive()
    botonjugar.on('pointerdown', () => this.scene.start('seleccion'))
    
    //boton intruccciones
    var botonins=this.add.image(400,550,"botonInstrucciones")
    botonins.setInteractive()
    botonins.on('pointerdown', () => this.scene.start('instrucciones'))
   
    //boton galeria
    var botonGal=this.add.image(400,785,"galery")
    botonGal.setInteractive()
    botonGal.on('pointerdown', () => this.scene.start('galery'))

    //boton creditos
    var botonCreditos=this.add.image(1860,1020,"creditosmenu")
    botonCreditos.setInteractive()
    botonCreditos.on('pointerdown', () => this.scene.start('creditos'))

    //boton ajustes
    var botonAjust=this.add.image(1860,60,"settingsmenu")
    botonAjust.setInteractive()
    botonAjust.on('pointerdown', () => this.scene.start('ajustes'))
    
  }

  //setNivel(){
   // local storage
		//unlockLVL = parseInt(localStorage.getItem('NivUnl')|| 0)
  //  }
}
