import Phaser, { Physics, Tweens } from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class fondo extends Phaser.Scene
{
    private nubes?: Phaser.Physics.Matter.Sprite
    private nubes2?: Phaser.Physics.Matter.Sprite
    private nubes3?: Phaser.Physics.Matter.Sprite
    private nubes4?: Phaser.Physics.Matter.Sprite
    private nubes5?: Phaser.Physics.Matter.Sprite
    private nubes6?: Phaser.Physics.Matter.Sprite

	constructor()
	{
		super({
			key: 'fondo'
		})
	}

	init()
	{
	
	}

	create()
	{
        const mapa= this.add.image(960,540,"fondoniv1")

        this.nubes=this.matter.add.sprite(500,200,"nubes",undefined,{isSensor:true})
        this.nubes.setIgnoreGravity(true)
        this.nubes.setFriction(0,0)
        this.nubes.setVelocityX(0.09)
        
        this.nubes2=this.matter.add.sprite(1000,200,"nubes2",undefined,{isSensor:true})
        this.nubes2.setIgnoreGravity(true)
        this.nubes2.setFriction(0,0)
        this.nubes2.setVelocityX(0.09)

        this.nubes3=this.matter.add.sprite(1500,100,"nubes3",undefined,{isSensor:true})
        this.nubes3.setIgnoreGravity(true)
        this.nubes3.setFriction(0,0)
        this.nubes3.setVelocityX(-0.09)

        this.nubes4=this.matter.add.sprite(100,150,"nubes3",undefined,{isSensor:true})
        this.nubes4.setIgnoreGravity(true)
        this.nubes4.setFriction(0,0)
        this.nubes4.setVelocityX(0.08)
        
        this.nubes5=this.matter.add.sprite(100,250,"nubes",undefined,{isSensor:true})
        this.nubes5.setIgnoreGravity(true)
        this.nubes5.setFriction(0,0)
        this.nubes5.setVelocityX(0.08)
        this.nubes5.setScale(0.5)
        
        this.nubes6=this.matter.add.sprite(1800,250,"nubes",undefined,{isSensor:true})
        this.nubes6.setIgnoreGravity(true)
        this.nubes6.setFriction(0,0)
        this.nubes6.setVelocityX(-0.08)
        this.nubes6.setScale(0.5)
  }

}