import Phaser from 'phaser'
export default class Sniv extends Phaser.Scene {

  constructor() {
    super('seleccion');
  }

  create (){
    this.add.image(960, 540,"fondomenu");
    this.add.image(960,540,"niveles")
    this.add.image(960,640,"nivelblock")
    this.add.image(1340,640,"nivelblock")

    //botn LVL 1
    var niv1=this.add.image(580,640,"niv1")
    niv1.setInteractive()
    niv1.on('pointerdown', () => this.scene.start('nivel1'))

    //botn LVL 2. retomar cuando exista escena de victoria
    // if (unlockLVL == 1){
      // var niv2=this.add.image(580,640,"niv2")
      // niv1.setInteractive()
      //niv1.on('pointerdown', () => this.scene.start('nivel2'))
    //}

    //botn LVL 3. retomar cuando exista escena de victoria
    //if (unlockLVL == 2){
      // var niv2=this.add.image(580,640,"niv3")
      //niv1.setInteractive()
      //niv1.on('pointerdown', () => this.scene.start('nivel3'))
    //}
    
    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    botonvolver.on('pointerdown', () => this.scene.start('inicio'))
  }

 update ()
 {
  
 }
 
}
