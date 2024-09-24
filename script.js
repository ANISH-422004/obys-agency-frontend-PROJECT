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
        duration: 0.5,
        delay: 2.9,
        onComplete: function() {
                document.getElementById("loder").style.display = 'none'; // Hide the loader completely
    }
    })
    tl.from("#page1",{
        opacity:0,
        y:1200,
        duration:1,
    
    })
    
        
    
    
    
    
}

loderanimation()