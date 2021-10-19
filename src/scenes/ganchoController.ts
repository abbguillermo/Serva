import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
import RobotController from './robotController'
import StateMachine from '../statemachine/StateMachine'
import FishController from './FishController'
import ObstaculosController from './ObstaculosController'
import BasuraController from './BasuraController'

export default class GanchoController {

	private scene?: Phaser.Scene
	private sprite!: Phaser.Physics.Matter.Sprite	
	private stateMachine!: StateMachine
	private peces?:FishController
	private basura?:BasuraController
	private obstacles?: ObstaculosController
	
	//private boton: any
	//	private stateMachine: StateMachine
	private velocidad!:number

	constructor(scene: Phaser.Scene, sprite: Phaser.Physics.Matter.Sprite,peces:FishController,obstacles: ObstaculosController,basura:BasuraController) {		
		/* cuando lo creamos lo hacemos asi:*/
		
 /*
		this.playerController = new PlayerController(
			this, 
			this.penquin,
			this.cursors,
			this.obstacles
		)
			
		// this hace referencia a la escena

		*/
		this.velocidad=5
	
		this.scene = scene
		this.sprite = sprite
		this.peces=peces
		this.basura=basura
		this.obstacles = obstacles
		this.stateMachine = new StateMachine(this, 'grip')
		this.sprite.setIgnoreGravity(true)
		this.sprite.setFriction(0,0)
	
		this.createAnimations()
		this.stateMachine.addState("arriba",{
			onEnter: this.arribaOnEnter,
		})

		
		this.stateMachine.addState('abierto', {
			onEnter: this.abiertoOnEnter,
		})

		.addState('cerrado', {
			onEnter: this.cerradoOnEnter,
		})
		.addState('bajando', {
			onUpdate: this.bajandoOnUpdate,
		})
		
		
		
		this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
			const body = data.bodyB as MatterJS.BodyType

			
		

			const gameObject = body.gameObject
			if (!gameObject)
			{
				return
			}

			if (gameObject instanceof Phaser.Physics.Matter.Sprite)
			{
		    if (body){
					
					events.emit("subir")
					
				} 
			}
					
		
			const sprite = gameObject as Phaser.Physics.Matter.Sprite
			const type = sprite.getData('levantado')

			switch (type)
			{
				case 'basura':
				{
					sprite.destroy()
					events.emit("bien")
					events.emit("sumar-basura")
					break
				}

				case 'peces':
				{
					//sprite.destroy()
					events.emit("mal")
					events.emit("descont-vida")
					break
				}
			}
			
		})

	
	events.on("bajar",this.baja,this)
	events.on("subir",this.sube,this)	
	}

	/*create(){
		events.on("mover",this.moviendoseOnUpdate,this)

	}*/

	update(dt: number)
	{
		this.stateMachine.update(dt)
	}

	private arribaOnEnter(){
		this.sprite.setVelocityY(-7)
	}	
	

	private abiertoOnEnter()
	{
		this.sprite.play('grip-open')
	}

	private cerradoOnEnter()
	{
		this.sprite.play('grip-close')
	}
	
	public bajandoOnUpdate()
	{
		
		this.sprite.setVelocityY(this.velocidad);
		/*this.sprite.setIgnoreGravity(false)*/
		/*this.scene.tweens.add({
      targets: [ this.sprite],
      x:2100,
      duration: 21000,
      ease: 'Sine.easeInOut',
      flipX: false,
      yoyo: true,
      repeat: -1,
      delay: function (target, key, value, targetIndex) {
        return targetIndex * 1000;
      }
		});*/
	}
	
	private createAnimations()
	{
		this.sprite.anims.create({
			key: 'grip-open',
			frames: [{ key: 'ganchopunta'}]
		})

		this.sprite.anims.create({
			key: 'grip-close',
			frames: [{ key: 'ganchocerrado'}]
		})
	}
	
	private baja(){
		this.stateMachine.setState("bajando")
	}
	private sube(){
		this.stateMachine.setState("arriba")
	}
		
	/*private concentrado(){
		events.emit("bajando")
	}*/

}