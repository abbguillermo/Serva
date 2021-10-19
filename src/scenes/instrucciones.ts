import Phaser from 'phaser'
export default class instrucciones extends Phaser.Scene {

  constructor() {
    super('instrucciones');
  }

  create(){
      
    this.add.image(960, 540, "fondomenu");
    this.add.image(960,500,"instrucciones")
    
    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    botonvolver.on('pointerdown', () => this.scene.start('inicio'))
  
  } 
  
}