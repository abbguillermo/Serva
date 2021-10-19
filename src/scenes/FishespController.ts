import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'


export default class FishespController extends Phaser.Scene {

    private Scene?:Phaser.Scene
    private pezesp?:Phaser.Physics.Matter.Sprite
    private TipoPezesp?:string
   
   
	constructor(scene:Phaser.Scene,pezesp:Phaser.Physics.Matter.Sprite,tipoPezesp:string)
	{
		super('fishespcontroller')

        this.Scene= scene
        this.pezesp= pezesp
        this.TipoPezesp= tipoPezesp
     

        this.pezesp.setFriction(0,0)
        this.pezesp.setScale(1)
        this.pezesp.setVelocityX(Phaser.Math.Between(-3,-5))
        this.pezesp.setIgnoreGravity(true)

        /////// seteo de información /////////
        this.pezesp.setDataEnabled()
        this.pezesp.data.set('levantado', "peces");
        this.pezesp.data.set('tipo',tipoPezesp);
        this.pezesp.setData('colisionando',false);
        

        this.pezesp.data.set('seleccionado',false)

        this.pezesp.setInteractive()
        .on("pointerdown",() => this.agarrar());
        
      
	}

agarrar(){
events.emit("agarrado")
   
}


}