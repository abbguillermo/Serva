import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
export default class galeria extends Phaser.Scene {

  private pez?:number
  private imagen1!:Phaser.GameObjects.Image
  private imagen2!:Phaser.GameObjects.Image
  
  constructor() {
    super('especies');
  }

  create(){
    
    this.add.image(960, 540, "fondomenu");
    this.add.image(960,520,"especies");
    
    var botonok=this.add.image(960,960,"ok")
    botonok.setInteractive()
    botonok.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
      this.scene.stop();
      this.scene.resume('nivel1');
        
    });
    


   
    events.on("boga",this.tipo1,this)
    events.on("sardina",this.tipo2,this)
    if (this.pez==1){
        this.imagen1=this.add.image(1300,460,"boga")
    } 
    if(this.pez==2){
        this.imagen2=this.add.image(1300,460,"sardina")
    }
  } 

  update(){
   
   


  }
  tipo1(){
    this.pez==1
  }
  tipo2(){
    this.pez==2
  }
  tipo3(){
    this.pez=1
  }
}