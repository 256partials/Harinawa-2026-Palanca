// Image optimization with lazy loading
const initializeImageLoading = () => {
    const cards = document.querySelectorAll('.card');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src && !img.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        cards.forEach(card => {
            imageObserver.observe(card);
        });
    }
};

const graduationDate = new Date('2026-05-20T023:59:59');
currentDate = Date.now();
timeTillGrad = Math.ceil((graduationDate-currentDate)/(1000 * 60 * 60 * 24));

document.getElementById('days').innerText = (String(timeTillGrad) + ' days left...');

const to_home = document.getElementsByClassName("nav-logo")[0];

to_home.addEventListener("click", function() {
    window.location = "./";
});

const cardlist = document.getElementsByClassName('card');
Array.from(cardlist).forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
});
const hoverlist = document.getElementsByClassName('card-name');
const namelist = [
    "Abella, Denise", 
    "Abellana, Crizelle M.", 
    "Abellana, Kathreen Lara S.", 
    "Abendan, Emmanuel D.", 
    "Ada, Dominic L.",
    "Adiong, Karlo U.", 
    "Alanano, Ernest Claude A.", 
    "Alcantara, Zy Jrehd Rhoven G.", 
    "Alemania, Neil Joseph K.", 
    "Alvarez, Jacob Johnson B.",
    "Arbon, Jianna Angela N.", 
    "Arellano, Godwin El Seihgfredd R.", 
    "Auza, Jeremiah E.", 
    "Ayuban, Niño Zane Gabriel J.", 
    "Baes, Daven L.",
    "Bangay, Angel Mae P.", 
    "Baring, Vince Harris C.", 
    "Batucan, Rigel Neron A.", 
    "Bellester, Boien B.", 
    "Biñan, Jon Nathaniel J.",
    "Buno, Sophia Gwyneth M.", 
    "Cagabhion, Lawrence Jymz T.", 
    "Cañete, Peter Kyle H.", 
    "Carusca, Franceen Andrei S.", 
    "Castaño, Felix Angelo P.",
    "Castolo, Thessa Mae I.", 
    "Catada, Jodia Jace Rajl V.", 
    "Cerdania, Nathaniel R.", 
    "Cinco, Shamea L.", 
    "Concepcion, Zabrina Khae J.",
    "Dapitan, Mondethird A.", 
    "De Guzman, Samantha Isabelle B.", 
    "De Juan, Jopril Kobi R.", 
    "De Los Santos, Gelyn C.", 
    "Deiparine, Japheth Ivan D.",
    "Despi, Oneil Adrian S.",
    "Dicdiquin, Athena Celine Faye B.",
    "Diones, Debbie Joan D.",
    "Ente, Christine Jul C.",
    "Erazo, Adrien Ivon A.",
    "Falar, Rain Kirby N.",
    "Flores, Baby Say C.",
    "Gador, Maria Vania M.",
    "Galarpe, Carl Jezrael E.",
    "Garcia, Nicolo Andreas A.",
    "Goldenbogen, Michael R.",
    "Guinita, Hannah Alaine P.",
    "Itumay, Zen Correl I.",
    "Jaum, Justine M.",
    "Larena, Arriannie Lesh",
    "Lenares, Danielle Rose T.",
    "Logarta, Franchesca Evanne N.",
    "Lumayog, Myel Danielle B.",
    "Macalintal, Rayne D.",
    "Maceda, Cyrus Rei A.",
    "Maglasang, Haleigh Kjyll A.",
    "Mahusay, Aljur S.",
    "Manuel, Kacey Terrence E.",
    "Mar, Rheagan Matthew G.",
    "Melencion, Arianna Marie B.",
    "Miranda, Maryloine Faye C.",
    "Monternel, Zheanne Gaile D.",
    "Nacario, Xantine Larise Maria M.",
    "Navarrete, Prince Timothy Uriel V.",
    "Newns, Khrizael C.",
    "Ocampo, John Mhenard B.",
    "Orapa, Sophia D.",
    "Ortega, Yxzia Emmanuel R.",
    "Quiñones, Shinn H.",
    "Quiseo, Giovanni Niño T.",
    "Ravina, Aaron Y.",
    "Ravina, John Gabriel P.",
    "Remedio, Nicah Claude S.",
    "Rusiana, Jan Abram B.",
    "Salazar, Zachary Frederick F.",
    "Shoemaker, Raymond B.",
    "Sol, Jorj Andrei R.",
    "Suarez, Nichola Sophia Illyich R.",
    "Tan, Louisse Theresa V.",
    "Torregosa, Jon Cris A.",
    "Trumpeta, Matt Alfonso L.",
    "Valencia, Brent Andre P.",
    "Valerio, Varick Vince L.",
    "Villaflores, John Mike F.",
    "Villanueva, Edmund Paolo T.",
    "Villarte, Chad S.",
    "Yano, Dexcy Mea M.",
    "Yap, Io Mari V.",
    "Yu, Selene Liana M."
];

const nomiddleinitial = [];

for (let index = 0; index < cardlist.length; index++) {

    const element = cardlist[index];
    const element_tooltip = hoverlist[index];
    
    element.setAttribute("alt", namelist[index]);
    element_tooltip.innerText = nomiddleinitial.includes(index) ? namelist[index] : namelist[index].slice(0, (namelist[index].length));
    element.addEventListener('click', function (){
        document.body.style.opacity = '0.8';
        document.body.style.transition = 'opacity 0.3s ease-out';
        setTimeout(() => {
            location.href = "./msg.html?card=" + encodeURIComponent(element.id.slice(4));
        }, 100);
    });
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Initialize image loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeImageLoading);
} else {
    initializeImageLoading();
}