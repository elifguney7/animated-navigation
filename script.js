const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//Control nav animation 
function navAnimation(direction1, direction2){
    navItems.forEach((nav, i) =>{  
        console.log(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
}

function toggleNav(){
    menuBars.classList.toggle('change');
    // Toggle menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // animate in - overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');         
        // Animate in - nav items
        navAnimation('out', 'in');
    } else {
        // animate out - overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');        
        // Animate out - nav items
        navAnimation('in', 'out');

    }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
