import Phaser from 'phaser'
import preload from './scenes/preload'
import UI from './scenes/ui'
import menu from './scenes/menu'
import galeria from './scenes/galery'
import creditos from './scenes/creditos'
import instrucciones from './scenes/instrucciones'
import Sniv from './scenes/selecniveles'
import nivel_1 from './scenes/nivel1'
import fondo from "./scenes/fondo"
import nivwin from "./scenes/niv_ganado"
import nivel_2 from './scenes/nivel2'
import pausa from './scenes/pausa'
import ajustes from "./scenes/ajustes"
import especies from "./scenes/especies"


const config : Phaser.Types.Core.GameConfig =
{
  type: Phaser.WEBGL,
  scale: 
  {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  physics: 
  {
    default: 'matter',
    matter:
    {
      gravity: { y:0.5 },
      debug: false
    }
  },


  
  scene: [preload, menu,galeria,ajustes,creditos,instrucciones,Sniv,fondo, nivel_1,UI,especies,pausa,nivwin,nivel_2]
};

export default new Phaser.Game(config)