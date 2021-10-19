import Phaser from 'phaser'


export default class FishController extends Phaser.Scene {

    private Scene?:Phaser.Scene
    private pez?:Phaser.Physics.Matter.Sprite
    private TipoPez?:string
   
   
	constructor(scene:Phaser.Scene,pez:Phaser.Physics.Matter.Sprite,tipoPez:string)
	{
		super('fishcontroller')

        this.Scene= scene
        this.pez= pez
        this.TipoPez= tipoPez
     

        this.pez.setFriction(0,0)
        this.pez.setScale(1)
        this.pez.setVelocityX(Phaser.Math.Between(-3,-5))
        this.pez.setIgnoreGravity(true)

        /////// seteo de información /////////

        this.pez.setDataEnabled()
        this.pez.data.set('levantado', "peces");
        this.pez.data.set('tipo',tipoPez);
        this.pez.setData('colisionando',false);
        

        this.pez.data.set('seleccionado',false)// si esta seleccionado 

	}




}