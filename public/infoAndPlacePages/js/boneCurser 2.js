// animated dog being used from https://codepen.io/chrisgannon/pen/OMomWJ


var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container'),
  dogSVG = select('.dogSVG'),
  bone = select('#bone'),
  browL = select('#browL'),
  browR = select('#browR'),
  eyeSpinL = select('#eyeSpinL'),
  eyeSpinR = select('#eyeSpinR'),
    stageWidth =  600,
    stageHeight = stageWidth,
    mousePos = {x:0,y:0}

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set([nose, bone, '.eye'], {
  transformOrigin:'50% 50%'
})
TweenMax.set(browL, {
  transformOrigin:'0% 50%'
})
TweenMax.set(browR, {
  transformOrigin:'100% 150%'
})
TweenMax.set([eyeSpinL,eyeSpinR], {
  transformOrigin:'65% 50%'
})

var tl = new TimelineMax();
var eyeMaxY = 1;
var browMaxY = 2;
var browMaxRot = 0;
var snoutMinY = 2;
var snoutMaxY = 12;
var noseMaxY = 12;


var noseShineTL = new TimelineMax({paused:true});
noseShineTL.fromTo('#noseShine', 1, {
  drawSVG:'0% 20%'
},{
   drawSVG:'0% 50%',
  ease:Linear.easeNone
})
.to('#noseShine', 1, {
  drawSVG:'40% 60%',
  ease:Linear.easeNone
})
.to('#noseShine', 1, {
  drawSVG:'80% 100%',
  ease:Linear.easeNone
})

dogSVG.onmousemove = function(e){
  
  //console.log(((stageWidth/2) - e.offsetX) * -1)
  mousePos.x = ((stageWidth/2) - e.offsetX) * -1;
  mousePos.y = ((stageHeight/2) - e.offsetY) * -1;
  
  TweenMax.to('#eyeGroup',1,{
    x:mousePos.x/20,
    y:((mousePos.y/12) > eyeMaxY) ? eyeMaxY : mousePos.y/12
  })  
  
  TweenMax.to(browL,1,{    
    rotation:((mousePos.y/25) > browMaxRot) ? browMaxRot : mousePos.y/25
  })
 TweenMax.to(browR,1,{    
    rotation:-((mousePos.y/15) > browMaxRot) ? -browMaxRot : -mousePos.y/15
  })
  TweenMax.to('#browGroup',1,{
    x:mousePos.x/40,
    y:((mousePos.y/25) > browMaxY) ? browMaxY : mousePos.y/25
  })
  
  TweenMax.to('#snout',1,{
    x:mousePos.x/30,
    y:((mousePos.y/60) < snoutMinY) ? snoutMinY : mousePos.y/60
  })  
  TweenMax.to('#nose',1,{
    x:mousePos.x/8,
    y:((mousePos.y/10) > noseMaxY) ? noseMaxY : mousePos.y/10
  })

    TweenMax.to(bone, 1, {
      x:e.offsetX - (bone.getBBox().width/2),
      y:e.offsetY- (bone.getBBox().height/2),
      ease:Elastic.easeOut.config(0.7, 0.8)
    })
    
    TweenMax.to('#earL',1, {
      x:-(mousePos.x/50),
      y:-(mousePos.y/50)
    })
    TweenMax.to('#earR',1, {
      x:-(mousePos.x/50),
      y:-(mousePos.y/50)
    })
    TweenMax.to('#dogGroup',1, {
      x:(mousePos.x/23),
      y:(mousePos.y/23)
    })
    
    TweenMax.set(noseShineTL,{
      time:noseShineTL.duration() - ((e.offsetX/stageWidth) * noseShineTL.duration())
    })
    
    
    
    
}


function blink(){
  
  TweenMax.to('.eye', 0.1,{
    attr:{
      ry:0
    },
    repeat:1,
    yoyo:true,
    onComplete:blink,
    delay:Math.random() * 10
  })
  
}

function sniff(){
  
 TweenMax.to('#nose', 0.1,{
    scaleX:1.1,
    repeat:1,
    yoyo:true,
    onComplete:sniff,
    delay:Math.random()
  })  
}


container.addEventListener('click', function(e){
  TweenMax.to([bone,eyeSpinL, eyeSpinR], 1, {
    rotation:'+=720',
    onUpdate:function(){
      TweenMax.set('.eye', {
        rotation:-eyeSpinL._gsTransform.rotation
      })
    }
  })
  
})
blink();
sniff();
dogSVG.onmousemove({offsetX:300, offsetY:60 })