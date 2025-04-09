//gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" })
//gsap.from(".link", { duration: 2, opacity: 0, delay: 1, stagger: .7 })
//gsap.from(".right", { duration: 1, x: "-100vw", ease: "rough", delay: 1 })
//gsap.from(".left", { duration: 1, x: "-100%", delay: 1 })
//gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.2 })
//gsap.fromTo("button", { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 5, rotation: 0 })

const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
    .from(".header", { y: "-100%", ease: "bounce" })
    .from(".link", { opacity: 0, stagger: .7 })
    .from(".right", {x: "-100vw", ease: "rough"},1)
    .from(".left", {x: "-100vw"},"<.5")
    .to(".footer", { y: "0", ease: "elastic" ,opacity:1},3)
    .fromTo("button", { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 5, rotation: 0 })
    .from(".img1", {x:"-100vw",ease:"rough"})
    .from(".img2",{x:"100vw",ease:"rough"},"<.5")

const button=document.querySelector("button")
button.addEventListener("click",()=>{
    timeline.timeScale(3)
    timeline.reverse()
})    