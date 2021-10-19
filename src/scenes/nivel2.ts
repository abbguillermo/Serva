import Phaser, { GameObjects } from 'phaser'
import GanchoController from './ganchoController';
import RobotController from './robotController';
import FishController from './FishController';
import BasuraController from './BasuraController';
import ObstaculosController from './ObstaculosController';
import { sharedInstance as events } from './EventCenter';

export default class nivel_2 extends Phaser.Scene {
  
  private robot?:Phaser.Physics.Matter.Sprite
  private ganchos?:Phaser.Physics.Matter.Sprite
  private gancho?:any
  private peces0?:Phaser.Physics.Matter.Sprite
  private peces1?:Phaser.Physics.Matter.Sprite
  private peces2?:Phaser.Physics.Matter.Sprite
  private basura0?:Phaser.Physics.Matter.Sprite
  private basura1?:Phaser.Physics.Matter.Sprite
  private basura2?:Phaser.Physics.Matter.Sprite
  private pared?:any
  private temporizador?:any
  private tiempo?:number
  private tiempoBasura?:number
  private basuraRandom?:number
  private objbasura?:any
  private objpez?: any
  private piso?:Phaser.Physics.Matter.Sprite
  private robotController?:RobotController
  private ganchoController?:GanchoController
  private fishcontroller?:any
  private basuracontroller:any
  public btnclose:any
  private obstacles!: ObstaculosController
  constructor() {
    super('nivel2');
  }

  init(){
    this.obstacles = new ObstaculosController()
    
  }

  
  create(){

    this.scene.launch('ui')
    this.piso= this.matter.add.sprite(960,990,"piso",undefined,{isStatic:true})
    this.piso.setData("tipo","borde")
    
    this.add.image(960, 540, "recuadro")
    this.scene.launch('fondo')
    this.tiempo=0
    this.tiempoBasura=0
    
    //caundo tenga pez.setData("puntaje",100)
    this.add.image(960, 40, "barrageneral");
    this.add.image(1000, 49, "barrabasura");
    this.add.image(960, 105, "barravida");

    //paredes invisibles
    var worldWidth = 1920;
    var worldHeight = 1080;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight);
    // this.pared=this.matter.world.setBounds(0,250,1900,0)
      //this.pared.setData("levantado","choque")
  
    
    //contolador gancho
    this.gancho = this.matter.add.sprite(960, 330, 'ganchopunta')
    .setFixedRotation()  
    .setIgnoreGravity(true)
    
    this.ganchoController=new GanchoController(
      this,
      this.gancho,
      this.fishcontroller,
      this.obstacles,
      this.basuracontroller
    )  
   
    //controlador robot
    this.robot = this.matter.add.sprite(960,230, 'personaje',undefined,{isStatic:true}).setFixedRotation()
      console.log(this.robot)
    this.robotController= new RobotController(
      this,
      this.robot,
      this.gancho
    )
      
   
   
    
      //temp
      this.temporizador= this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });
    //control de basura 
    
    
   
      events.on("pierde",this.juegoganado,this)
      events.on("gana",this.juegoganado,this)
  }
  destroy(){
  
  }

  update(t:number,dt:number){
    this.robotController?.update(dt)
    this.ganchoController?.update(dt)
    
   
   
   //CONTROL BASURA
    if (this.tiempoBasura!<this.tiempo!)
    {
      this.basuraRandom=Phaser.Math.Between(0,2)
      if(this.basuraRandom==0){
       this.creaBasura("basura","bot-rota")
      
       this.creaPez("pez1", "sardina")
       this.tiempoBasura=this.tiempo!+1
      }
      
      else if (this.basuraRandom==1){
        this.creaBasura("basura","bota")
       
        this.creaPez("pez2", "boga")
        this.tiempoBasura=this.tiempo!+1
      }
      
      else{
        this.creaBasura("basura","botella")
       
        this.creaPez("pez3", "dorado") 
        this.tiempoBasura=this.tiempo!+1
      }

    }

    
  }
 
  cadaSegundo(){
    this.tiempo = this.tiempo! + 1
  }
  
  creaBasura (tipo,sprite){
    const tipoBasura = tipo
    this.objbasura = new BasuraController(this,this.matter.add.sprite(-200,Phaser.Math.Between(500,900) , sprite, undefined, {
        isSensor: true       
    }),tipo)
    
  }

  creaPez (tipo,sprite){
    const TipoPez = tipo
    this.objpez = new FishController(this,this.matter.add.sprite(2000,Phaser.Math.Between(500,900) , sprite, undefined, {
        isSensor: true       
    }),tipo)
    
  }
  juegoganado(){
    this.scene.stop("ui")
    this.scene.stop("nivel1")
    this.scene.stop("fondo")
    this.scene.launch("niv-ganado")
  }

}
