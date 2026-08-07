// Efek navbar saat scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(5,15,35,0.95)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        nav.style.background = "rgba(10,20,40,.85)";
        nav.style.boxShadow = "none";
    }
});

// Animasi kartu saat muncul di layar
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition="0.6s";
    observer.observe(card);
});
