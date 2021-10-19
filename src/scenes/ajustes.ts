import Phaser from 'phaser'
export default class galeria extends Phaser.Scene {

  constructor() {
    super('ajustes');
  }

  create(){

    this.add.image(960, 540, "fondomenu");
    this.add.image(960,480,"ajustes");
    
    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    botonvolver.on('pointerdown', () => this.scene.start('inicio'))
    
  } 
}