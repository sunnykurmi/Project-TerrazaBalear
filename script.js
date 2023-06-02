ScrollTrigger.matchMedia({
	"(min-width: 1024px)": function hello() {
        function init() {
            gsap.registerPlugin(ScrollTrigger);
            const locoScroll = new LocomotiveScroll({
                el: document.querySelector('#main'),
                smooth: true
            });
            locoScroll.on('scroll', ScrollTrigger.update);
            ScrollTrigger.scrollerProxy('#main', {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
            });
            ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
            ScrollTrigger.refresh();
        }
        init()
        $(function () {
            $('#txt h1').textillate();
        })

        document.querySelector("#menu h1:nth-child(1)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(1)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(2)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(2)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(3)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(3)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(4)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(4)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(5)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(5)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(1)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(1)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(2)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(2)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(3)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(3)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(4)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(4)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(5)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(5)").style.opacity=0
        })



        document.querySelector("#right i").addEventListener("click",function(){
            document.querySelector("#menu").style.top ="0"
        })
        document.querySelector("#menu>i").addEventListener("click",function(){
            document.querySelector("#menu").style.top ="-100%"
        })



        gsap.to("#txt h1",{
            wordSpacing: "5vw",
            delay:2,
            duration:1,
            ease: "power1.inOut"
        },"hello")
        gsap.to("#txt h1:nth-child(4)",{
            x:30,
            delay:2.1,
            ease: "power1.inOut"
         
        },"hello")
        gsap.fromTo("#nav",{
            opacity:0
        },{
            opacity:1,
            delay:2.2
            
        })
        gsap.fromTo("#page2 video",{
            opacity:0,
            y:100,
            width:"76%"
        },{
            opacity:1,
            width:"90%",
            y:0,
            delay:2.6
        })
        
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#page2",
                start:"top 83%",
                end:"top -10%",
                scroller:"#main",
                // markers:true,
                scrub:true,
            }
        })
        tl.to("#page2 video",{
            width:"100%"
        },"hello")
        tl.to("#txt",{
            y:-280
        },"hello")
        
        gsap.to("#bar",{
            scrollTrigger:{
                trigger:"#page4",
                start:"top top",
                end:"+=" + (window.innerHeight *5),
                scrub:2,
                scroller:"#main"
            },
            width:"100%"
        })
        
        var tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:"#page4",
                start:"top top",
                end:"+=" + (window.innerHeight *5),
                pin:true,
                scrub:2,
                scroller:"#main"
            }
        })
        
        tl1.to("#slide1 img,#vid1 video",{
            scale:1.1
        },"hello")
        
        tl1.to("#slide2",{
            y:"-100%"
        },"hello")
        
        tl1.to("#vid2",{
            x:"-100%"
        },"hello")
        
        tl1.fromTo("#slide2 img",{
            y:-750,
            scale:1
        },{
            y:0,
            scale:1.1
        },"hello")
        
        tl1.fromTo("#vid2 video",{
            x:-600,
            scale:1
        },{
            x:0,
            scale:1.1
        },"hello")
        
        tl1.fromTo("#slide2 h1,#slide2 h2",{
            y:-750
        },{
            y:0
        },"hello")
        
        tl1.to("#slide1 h1,#slide1 h2",{
            opacity:0,
            duration:0.3
        },"hello")
        
        tl1.to("#slide3",{
            y:"-100%"
        },"hello1")
        
        tl1.to("#vid3",{
            x:"-100%"
        },"hello1")
        
        tl1.fromTo("#slide3 img",{
            y:-750,
            scale:1
        },{
            y:0,
            scale:1.1
        },"hello1")
        
        tl1.fromTo("#vid3 video",{
            x:-600,
            scale:1
        },{
            x:0,
            scale:1.1
        },"hello1")
        
        tl1.fromTo("#slide3 h1,#slide3 h2",{
            y:-750
        },{
            y:0
        },"hello1")
        
        tl1.to("#slide4",{
            y:"-100%"
        },"hello2")
        
        tl1.to("#vid4",{
            x:"-100%"
        },"hello2")
        
        tl1.fromTo("#slide4 img",{
            y:-750,
            scale:1
        },{
            y:0,
            scale:1.1
        },"hello2")
        tl1.fromTo("#vid4 video",{
            x:-600,
            scale:1
        },{
            x:0,
            scale:1.1
        },"hello2")
        
        tl1.fromTo("#slide4 h1,#slide4 h2",{
            y:-750
        },{
            y:0
        },"hello2")
        
        tl1.to("#slide5",{
            y:"-100%"
        },"hello3")
        
        tl1.to("#vid5",{
            x:"-100%"
        },"hello3")
        
        tl1.fromTo("#slide5 img",{
            y:-750,
            scale:1
        },{
            y:0,
            scale:1.1
        },"hello3")
        
        tl1.fromTo("#vid5 video",{
            x:-600,
            scale:1
        },{
            x:0,
            scale:1.1
        },"hello3")
        
        tl1.fromTo("#slide5 h1,#slide5 h2",{
            y:-750
        },{
            y:0
        },"hello3")
        
        gsap.to("#page5 h1",{
            scrollTrigger:{
                trigger:"#page5",
                scrub:true,
                start:"top 60%",
                scroller:"#main"
            },
            wordSpacing:"5vw"
        })
         
        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:"#page6",
                start:"top 100%",
                // markers:true,
                end:"+=" + (window.innerHeight *5),
                scrub:2,
                scroller:"#main"
            }
        })
        tl3.fromTo("#page6top",{
            x:0
        },{
            x:-800
        },"hello")
        tl3.fromTo("#page6bottom",{
            x:-800
        },{
            x:0
        },"hello")
        
        gsap.fromTo("#page3 h1,#page3 p,#page3 btn",{
            opacity:0,
            y:100
        },{
            scrollTrigger:{
                trigger:"#page3",
                start:"30% 50%",
                // markers:true,
                scroller:"#main"
            },
            opacity:1
            ,y:0
        })
  },hello(){}
});
ScrollTrigger.matchMedia({
	"(max-width: 600px)": function hello1() {
        function init() {
            gsap.registerPlugin(ScrollTrigger);
            const locoScroll = new LocomotiveScroll({
                el: document.querySelector('#main'),
                smooth: true
            });
            locoScroll.on('scroll', ScrollTrigger.update);
            ScrollTrigger.scrollerProxy('#main', {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
            });
            ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
            ScrollTrigger.refresh();
        }
        init()
        
        $(function () {
            $('#txt h1').textillate();
        })
        document.querySelector("#menu h1:nth-child(1)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(1)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(2)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(2)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(3)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(3)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(4)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(4)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(5)").addEventListener("mousemove",function(){
            document.querySelector("#menuvideo video:nth-child(5)").style.opacity=1
        })
        document.querySelector("#menu h1:nth-child(1)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(1)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(2)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(2)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(3)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(3)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(4)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(4)").style.opacity=0
        })
        document.querySelector("#menu h1:nth-child(5)").addEventListener("mouseleave",function(){
            document.querySelector("#menuvideo video:nth-child(5)").style.opacity=0
        })



        document.querySelector("#right i").addEventListener("click",function(){
            document.querySelector("#menu").style.top ="0"
        })
        document.querySelector("#menu>i").addEventListener("click",function(){
            document.querySelector("#menu").style.top ="-100%"
        })
        gsap.to("#txt h1",{
            wordSpacing: "5vw",
            delay:2,
            duration:1,
            ease: "power1.inOut"
        },"hello")
        gsap.to("#txt h1:nth-child(4)",{
            x:30,
            delay:2.1,
            ease: "power1.inOut"
         
        },"hello")
        gsap.fromTo("#nav,#play",{
            opacity:0
        },{
            opacity:1,
            delay:2.2
            
        })
        gsap.fromTo("#page2 video",{
            opacity:0,
            y:100,
            width:"76%"
        },{
            opacity:1,
            width:"90%",
            y:0,
            delay:2.6
        })
        
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#page2",
                start:"top 83%",
                end:"top -10%",
                scroller:"#main",
                // markers:true,
                scrub:true,
            }
        })
        tl.to("#page2 video",{
            width:"100%"
        },"hello")
        tl.to("#txt",{
            y:-280
        },"hello")
        

        // var tl1 = gsap.timeline({
        //     scrollTrigger:{
        //         trigger:"#page4",
        //         start:"-100% top",
        //         end:"+=" + (window.innerHeight *5),
        //         pin:true,
        //         scrub:2,
        //         scroller:"#main"
        //     }
        // })
        
        // tl1.to("#slide1 img,#vid1 video",{
        //     scale:1.1
        // },"hello")
        
        // tl1.to("#slide2",{
        //     y:"-100%"
        // },"hello")
        
        // tl1.to("#vid2",{
        //     x:"-100%"
        // },"hello")
        
        // tl1.fromTo("#slide2 img",{
        //     y:-750,
        //     scale:1
        // },{
        //     y:0,
        //     scale:1.1
        // },"hello")
        
        // tl1.fromTo("#vid2 video",{
        //     x:-600,
        //     scale:1
        // },{
        //     x:0,
        //     scale:1.1
        // },"hello")
        
        // tl1.fromTo("#slide2 h1,#slide2 h2",{
        //     y:-750
        // },{
        //     y:0
        // },"hello")
        
        // tl1.to("#slide1 h1,#slide1 h2",{
        //     opacity:0,
        //     duration:0.3
        // },"hello")
        
        // tl1.to("#slide3",{
        //     y:"-100%"
        // },"hello1")
        
        // tl1.to("#vid3",{
        //     x:"-100%"
        // },"hello1")
        
        // tl1.fromTo("#slide3 img",{
        //     y:-750,
        //     scale:1
        // },{
        //     y:0,
        //     scale:1.1
        // },"hello1")
        
        // tl1.fromTo("#vid3 video",{
        //     x:-600,
        //     scale:1
        // },{
        //     x:0,
        //     scale:1.1
        // },"hello1")
        
        // tl1.fromTo("#slide3 h1,#slide3 h2",{
        //     y:-750
        // },{
        //     y:0
        // },"hello1")
        
        // tl1.to("#slide4",{
        //     y:"-100%"
        // },"hello2")
        
        // tl1.to("#vid4",{
        //     x:"-100%"
        // },"hello2")
        
        // tl1.fromTo("#slide4 img",{
        //     y:-750,
        //     scale:1
        // },{
        //     y:0,
        //     scale:1.1
        // },"hello2")
        // tl1.fromTo("#vid4 video",{
        //     x:-600,
        //     scale:1
        // },{
        //     x:0,
        //     scale:1.1
        // },"hello2")
        
        // tl1.fromTo("#slide4 h1,#slide4 h2",{
        //     y:-750
        // },{
        //     y:0
        // },"hello2")
        
        // tl1.to("#slide5",{
        //     y:"-100%"
        // },"hello3")
        
        // tl1.to("#vid5",{
        //     x:"-100%"
        // },"hello3")
        
        // tl1.fromTo("#slide5 img",{
        //     y:-750,
        //     scale:1
        // },{
        //     y:0,
        //     scale:1.1
        // },"hello3")
        
        // tl1.fromTo("#vid5 video",{
        //     x:-600,
        //     scale:1
        // },{
        //     x:0,
        //     scale:1.1
        // },"hello3")
        
        // tl1.fromTo("#slide5 h1,#slide5 h2",{
        //     y:-750
        // },{
        //     y:0
        // },"hello3")
        
        gsap.to("#page5 h1",{
            scrollTrigger:{
                trigger:"#page5",
                scrub:true,
                start:"top 60%",
                scroller:"#main"
            },
            wordSpacing:"5vw"
        })
         
        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:"#page6",
                start:"top 100%",
                // markers:true,
                end:"+=" + (window.innerHeight *5),
                scrub:2,
                scroller:"#main"
            }
        })
        tl3.fromTo("#page6top",{
            x:0
        },{
            x:-300
        },"hello")
        tl3.fromTo("#page6bottom",{
            x:-280
        },{
            x:0
        },"hello")
        
        gsap.fromTo("#page3 h1,#page3 p,#page3 btn",{
            opacity:0,
            y:100
        },{
            scrollTrigger:{
                trigger:"#page3",
                start:"30% 50%",
                scroller:"#main"
            },
            opacity:1
            ,y:0
        })
  },hello1(){}
});


