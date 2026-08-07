/* ==========================================================
   AMJ VISUALS
   Premium Website Script
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================
       PART 1 - LOADER
    ========================================================== */

    const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 700);

});


    /* ==========================================================
       PART 1 - STICKY HEADER
    ========================================================== */

    const header = document.querySelector("header");

function stickyHeader(){

    if(!header) return;

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

}

stickyHeader();

window.addEventListener("scroll", stickyHeader);


    /* ==========================================================
       PART 1 - SMOOTH SCROLL
    ========================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


    /* ==========================================================
       PART 1 - BACK TO TOP
    ========================================================== */

    const backTop=document.querySelector(".back-to-top");

function backTopButton(){

    if(!backTop) return;

    if(window.scrollY>500){

        backTop.style.opacity="1";
        backTop.style.visibility="visible";
        backTop.style.pointerEvents="auto";

    }else{

        backTop.style.opacity="0";
        backTop.style.visibility="hidden";
        backTop.style.pointerEvents="none";

    }

}

backTopButton();

window.addEventListener("scroll",backTopButton);


    /* ==========================================================
       PART 2 - MOBILE MENU
    ========================================================== */

    const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");
        menu.classList.toggle("open");

        const icon = menu.querySelector("i");

        if (icon) {

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}


    /* ==========================================================
       PART 2 - ACTIVE NAVIGATION
    ========================================================== */

    const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


    /* ==========================================================
       PART 2 - COUNTER ANIMATION
    ========================================================== */

   const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 150;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.4

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


   /* ==========================================================
   PART 3 - SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(
".service-card,.portfolio-item,.gallery-item,.testimonial-card,.stat-box,.about-content,.contact-wrapper,.footer-col"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(item=>{

    item.classList.add("hidden");

    revealObserver.observe(item);

});


    /* ==========================================================
   PART 3 - RIPPLE BUTTON EFFECT
========================================================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        const rect=this.getBoundingClientRect();

        circle.style.width=diameter+"px";
        circle.style.height=diameter+"px";

        circle.style.left=(e.clientX-rect.left-diameter/2)+"px";
        circle.style.top=(e.clientY-rect.top-diameter/2)+"px";

        circle.className="ripple";

        const ripple=this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


 /* ==========================================================
   PART 3 - SCROLL PROGRESS BAR
========================================================== */

const progress=document.createElement("div");

progress.id="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const percentage=(scrollTop/scrollHeight)*100;

    progress.style.width=percentage+"%";

});


/* ==========================================================
   HERO PARALLAX
========================================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    hero.style.backgroundPositionY=window.scrollY*0.4+"px";

});

/* ==========================================================
   FLOATING SERVICE ICONS
========================================================== */

document.querySelectorAll(".service-card i").forEach(icon=>{

    icon.animate(

    [

        {
            transform:"translateY(0px)"
        },

        {
            transform:"translateY(-8px)"
        },

        {
            transform:"translateY(0px)"
        }

    ],

    {

        duration:2500,

        iterations:Infinity

    });

});

   /* ==========================================================
   PART 4 - GALLERY LIGHTBOX
========================================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

let lightbox;
let lightboxImg;
let currentIndex = 0;

if (galleryImages.length > 0) {

    lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-prev">&#10094;</span>
        <img class="lightbox-image" src="" alt="">
        <span class="lightbox-next">&#10095;</span>
    `;

    document.body.appendChild(lightbox);

    lightboxImg = lightbox.querySelector(".lightbox-image");

}


    /* ==========================================================
   PART 4.2 - OPEN IMAGE
========================================================== */

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex=index;

        lightbox.classList.add("active");

        lightboxImg.src=image.src;

        document.body.style.overflow="hidden";

    });

});

/* ==========================================================
   PART 4.3 - CLOSE LIGHTBOX
========================================================== */

const closeBtn=document.querySelector(".lightbox-close");

if(closeBtn){

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

document.body.style.overflow="";

});

}

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="";

}

});

/* ==========================================================
   PART 4.4 - NEXT / PREVIOUS BUTTONS
========================================================== */

const nextBtn = document.querySelector(".lightbox-next");
const prevBtn = document.querySelector(".lightbox-prev");

function showImage(index){

    if(index < 0){

        index = galleryImages.length - 1;

    }

    if(index >= galleryImages.length){

        index = 0;

    }

    currentIndex = index;

    lightboxImg.src = galleryImages[currentIndex].src;

}

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        showImage(currentIndex + 1);

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        showImage(currentIndex - 1);

    });

}

/* ==========================================================
   PART 4.5 - KEYBOARD CONTROLS
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        showImage(currentIndex + 1);

    }

    if(e.key==="ArrowLeft"){

        showImage(currentIndex - 1);

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow="";

    }

});

/* ==========================================================
   PART 4.6 - TOUCH SWIPE SUPPORT
========================================================== */

let touchStartX = 0;
let touchEndX = 0;

if(lightbox){

    lightbox.addEventListener("touchstart",(e)=>{

        touchStartX = e.changedTouches[0].screenX;

    });

    lightbox.addEventListener("touchend",(e)=>{

        touchEndX   = e.changedTouches[0].screenX;

        if(touchEndX < touchStartX - 50){

            showImage(currentIndex + 1);

        }

        if(touchEndX > touchStartX + 50){

            showImage(currentIndex - 1);

        }

    });

}

/* ==========================================================
   PART 4.7 - PORTFOLIO ANIMATION
========================================================== */

const portfolioItems=document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transition="all .35s ease";

        item.style.transform="translateY(-12px) scale(1.02)";

        item.style.boxShadow="0 25px 60px rgba(0,0,0,.35)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateY(0) scale(1)";

        item.style.boxShadow="none";

    });

});
    
/* ==========================================================
   PART 5 - CUSTOM CURSOR
========================================================== */

const cursor=document.createElement("div");
cursor.className="custom-cursor";

const cursorDot=document.createElement("div");
cursorDot.className="cursor-dot";

document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursorDot.style.left=e.clientX+"px";
cursorDot.style.top=e.clientY+"px";

});


  /* ==========================================================
   PART 5 - CURSOR HOVER EFFECT
========================================================== */

document.querySelectorAll(

"a,.btn,.service-card,.portfolio-item,.gallery-item,img"

).forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-hover");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-hover");

});

});


   /* ==========================================================
   PART 5 - MOUSE GLOW
========================================================== */

const mouseGlow = document.createElement("div");

mouseGlow.className = "mouse-glow";

document.body.appendChild(mouseGlow);

window.addEventListener("mousemove",(e)=>{

    mouseGlow.style.left = e.clientX + "px";

    mouseGlow.style.top = e.clientY + "px";

});



   /* ==========================================================
   PART 6 - PERFORMANCE
========================================================== */

/* Lazy Load Images */

const lazyImages = document.querySelectorAll("img[data-src]");

if(lazyImages.length){

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src;

img.onload=()=>{

img.removeAttribute("data-src");

img.classList.add("loaded");

};

observer.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});

}

/* Debounce Function */

function debounce(func,delay){

let timeout;

return function(){

const context=this;

const args=arguments;

clearTimeout(timeout);

timeout=setTimeout(()=>{

func.apply(context,args);

},delay);

};

}

/* Optimized Resize */

window.addEventListener("resize",

debounce(()=>{

console.log("Resize Optimized");

},200)

);

/* Optimized Scroll */

window.addEventListener("scroll",

debounce(()=>{

// Reserved for future optimization

},20)

);

/* Preload Images */

document.querySelectorAll("img").forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

   /* ==========================================================
   PART 6 - FINAL INITIALIZATION
========================================================== */

console.log("%cAMJ VISUALS WEBSITE LOADED",

"color:#00e5ff;font-size:18px;font-weight:bold");

console.log("Premium Version Loaded Successfully");

/* Disable Right Click (Optional) */

// document.addEventListener("contextmenu",(e)=>{

// e.preventDefault();

//});

/* Disable Image Drag */

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

/* Fade In Body */

document.body.classList.add("loaded");

/* Error Safe */

window.onerror=function(){

return true;

};

});
