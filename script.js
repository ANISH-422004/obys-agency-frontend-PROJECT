function loderanimation(){
    gsap.from("#line-num",{
        opacity:0,
        duration:0.6 ,
        delay:1.5,
    }
    )
    gsap.from("#wait #h3",{
        opacity:0,
        delay:2,
    
    })
    
    var tl =  gsap.timeline()
    tl.from(".line h1",{
        y:155,
        stagger:0.25,
        duration:0.6 ,
        delay:0.5,      
    })
    
    tl.from(".line h2",{
        opacity:0,
        duration:0.6 ,
        delay:0.5,      
    })
    tl.to("#line-num",{
        // opacity:0,
        onStart: function(){
            var h5timer= document.querySelector("#line-num h5")
            var grow = 0
            setInterval(function(){
            if (grow<100){
                grow++
                h5timer.innerHTML= grow
            }
            else{
            h5timer.innerHTML= grow
            }
    },30)
    
    
        }
    })
    tl.to(".line h2",{
        animationName: "anime",
        
    
    })
    tl.to("#loder",{
        opacity: 0,
        duration: 0, // after work make it o.5
        delay: 0,  // afeter work make it 2.9
        onComplete: function() {
                document.getElementById("loder").style.display = 'none'; // Hide the loader completely
    }
    })
    tl.from("#page1",{
        opacity:0,
        y:1200,
        duration:1,
    
    })

    tl.from("#hero-1 h1,#hero-2 h1,#hero-3 h2,#hero-4 h1",{
        y:150,
        stagger:0.2,
        lazy: false
    })
    
    tl.from("#nav",{
       opacity:0,
    })
    
    
    
    
    
}
loderanimation()

function cursorAnimation(){

    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
           x:dets.x,
           y:dets.y,
           // delay:0.001,
        })
   })
   
   
   Shery.makeMagnet("#nav-part2 h4", {});
   
}
cursorAnimation()


