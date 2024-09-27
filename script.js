function locanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
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
    tl.from("#hero-1 ,#page2",{
        opacity:0,
     
    },"-=1.3") //"-=1.2" this helps to start this animation ahade of its time in the main timeline 


    tl.from("#nav",{
       opacity:0,
    })
    
    
    
    
    
}
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


loderanimation()

cursorAnimation()

locanimation()

