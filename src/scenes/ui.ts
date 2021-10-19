import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class UI extends Phaser.Scene
{
	
	

	private width=300
	private width2=0
	private barravida!:Phaser.GameObjects.Image
	private barrabasura!:Phaser.GameObjects.Image

	private btnclose?:Phaser.Physics.Matter.Sprite
	constructor()
	{
		super({
			key: 'ui'
		})
	}

	init()
	{
	
	}

	create()
	{
		this.width=300
		this.width2=0
		this.barravida=this.add.image(810,104,"vidallena")
		this.barravida.displayOriginX=0

		this.barrabasura=this.add.image(575,50,"basurallena")
		this.barrabasura.displayOriginX=0
		
		let GanchoButton = this.add.image(1500, 970,"botongancho")
		.setInteractive()
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.ganchobotn()
		});
		//.on("pointerdown",() => this.ganchobotn())

		let pausabtn=this.add.image(1900,30,"pausa")
		.setInteractive()
		pausabtn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.pause('nivel1');
			this.scene.launch('pausa');
		});
		events.on('descont-vida', this.descontar, this)
		events.on("sumar-basura",this.sumar,this)
		events.on("agarrado",this.agarrado,this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			
		})
		events.on("romper-boton",this.borrarBtn,this)
		
	}
	
	update(){
		if(this.width>=0){
			this.barravida.displayWidth=this.width
		}
		if(this.width<=0){
			events.emit("pierde")
		}
		if(this.width2>=0){
			
			this.barrabasura.displayWidth=this.width2
		}
		if(this.width2>=850){
			console.log("ejecuta")
			events.emit("gana")
		}
	}	

	private ganchobotn(){
		
		events.emit('bajar')
		this.btnclose = this.matter.add.sprite(1500, 970,"botonclose", undefined, {isStatic: true})
		.setInteractive()
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.nada()
		});
		//.on("pointerdown",() => this.nada());
	}
	private nada(){
		//No tocar!! 
	}
	private borrarBtn(){
		
		this.btnclose?.destroy();
	}
	private descontar(){
		this.width=this.width-300
	}
	private sumar(){
		
		this.width2=this.width2+800
	}
agarrado(){
			
			this.scene.pause('nivel1');
			this.scene.launch('especies');
		
}

}