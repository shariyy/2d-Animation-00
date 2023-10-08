
let state = 'idle'
const change = document.getElementById('options');

change.addEventListener('change', function(e){
   state = e.target.value;
    
})
const canvas = document.querySelector('#canva1')
const context = canvas.getContext('2d');
const canvasHeigth = canvas.height = 600
const canvasWidth = canvas.width = 600
let spriteWidth = 575
let spriteHeight = 523
let gameFrame = 0 
let frameRate = 5

document.addEventListener('keypress', (e)=>{
    let a = e.target.value
    console.log(a);
})




const sprite = [
    {   name:"idle",
        frame:7   },
    {   name:"jump",
        frame:7   },
    {   name:"fall",
        frame:7   },
    {   name:"run",
        frame:9   },
    {   name:"dizzy",
        frame:11   },
    {   name:"sit",
        frame:5   },
    {   name:"roll",
        frame:7   },
    {   name:"bite",
        frame:7   },
    {   name:"ko",
        frame:12  },
    {   name:"hurt",
        frame:4  },
]

animationState = {}

sprite.forEach((state, index)=>{
    let frame = {locations:[]}
    for (let i = 0; i < state.frame; i++) {
        let positionX = i*spriteWidth
        let positionY = index*spriteHeight
        frame.locations.push({x:positionX,y:positionY})
    }
    animationState[state.name] = frame
})
let position = 0
let X = 0

const playerImage = new Image();
playerImage.src = 'Photos/shadow_dog.png';
function animate() {
    let frameLength = animationState[state].locations.length
    let position = Math.floor((gameFrame/frameRate)%frameLength)
    
    let frameX = animationState[state].locations[position].x
    let frameY = animationState[state].locations[0].y
    context.clearRect(0,0,canvasWidth, canvasHeigth)
    context.drawImage(playerImage, frameX,frameY, spriteWidth, spriteHeight, 0, 0,  spriteWidth, spriteHeight)
    gameFrame++
    requestAnimationFrame(animate)
        
}
animate()



