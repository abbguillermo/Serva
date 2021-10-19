import Phaser from 'phaser'
export default class creditos extends Phaser.Scene {

  constructor() {
    super('creditos');
  }

  create(){
   
    this.add.image(960,540,"fondomenu")
    this.add.image(960,540,"creditos")

    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    botonvolver.on('pointerdown', () => this.scene.start('inicio'))

  }
   
}