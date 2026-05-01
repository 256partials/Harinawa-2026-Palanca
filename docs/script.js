// Performance monitoring
let loadedImagesCount = 0;
let totalImages = 89;
let imageLoadErrors = 0;

// Image optimization with enhanced lazy loading
const initializeImageLoading = () => {
    const cards = document.querySelectorAll('.card');
    totalImages = cards.length;
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        // Load image with error handling
                        const tempImg = new Image();
                        tempImg.onload = () => {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            loadedImagesCount++;
                            if (loadedImagesCount === totalImages) {
                                console.log('✓ All images loaded successfully');
                            }
                        };
                        tempImg.onerror = () => {
                            imageLoadErrors++;
                            console.warn(`✗ Failed to load image: ${img.dataset.src}`);
                            img.classList.add('error');
                        };
                        tempImg.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px'  // Increased from 50px for better preload buffer
        });
        
        cards.forEach(card => {
            imageObserver.observe(card);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        cards.forEach(card => {
            if (card.dataset.src) {
                card.src = card.dataset.src;
                card.classList.add('loaded');
            }
        });
    }
};

// Function to get current time in GMT+08
const getGMT8Time = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (8 * 3600000));
};

const graduationDate = new Date('2026-05-20T00:00:00');
const currentDate = getGMT8Time();
timeTillGrad = Math.ceil((graduationDate-currentDate)/(1000 * 60 * 60 * 24));

document.getElementById('days').innerText = (String(timeTillGrad) + ' days left...');

const to_home = document.getElementsByClassName("nav-logo")[0];

to_home.addEventListener("click", function() {
    window.location = "./";
});

const cardlist = document.getElementsByClassName('card');
const isMobileDevice = window.innerWidth <= 768;

// Only apply animation delays on non-mobile to reduce CPU overhead
if (!isMobileDevice) {
    Array.from(cardlist).forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
}

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

// Set up card metadata for all cards
for (let index = 0; index < cardlist.length; index++) {
    const element = cardlist[index];
    const element_tooltip = hoverlist[index];
    
    element.setAttribute("alt", namelist[index]);
    element_tooltip.innerText = nomiddleinitial.includes(index) ? namelist[index] : namelist[index].slice(0, (namelist[index].length));
}

// Use event delegation instead of 89 individual listeners (memory efficient)
const cardContainer = document.querySelector('.card-cont');
let navigationAbort = null;

if (cardContainer) {
    cardContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            // Cancel any previous navigation
            if (navigationAbort) navigationAbort.abort();
            
            document.body.style.opacity = '0.8';
            document.body.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => {
                location.href = "./msg.html?card=" + encodeURIComponent(card.id.slice(4));
            }, 100);
        }
    });
}

// Cleanup function - called before navigation
const cleanupPage = () => {
    // Cancel animation delays
    Array.from(cardlist).forEach(card => {
        card.style.animationDelay = '';
    });
    
    // Stop any pending operations
    if (navigationAbort) navigationAbort.abort();
};

// Cleanup on page unload/navigation
window.addEventListener('beforeunload', cleanupPage);

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Initialize image loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log(`[Palanca] Initializing lazy loading for ${totalImages} images...`);
        initializeImageLoading();
        console.log('[Palanca] Page ready in', Math.round(performance.now()), 'ms');
    });
} else {
    console.log(`[Palanca] Initializing lazy loading for ${totalImages} images...`);
    initializeImageLoading();
    console.log('[Palanca] Page ready in', Math.round(performance.now()), 'ms');
}

// Prevent memory bloat on long sessions - log high memory usage (advanced)
if ('memory' in performance) {
    setInterval(() => {
        const usedMemory = performance.memory.usedJSHeapSize / 1048576; // Convert to MB
        if (usedMemory > 150) {
            console.warn(`[Palanca] High memory usage detected: ${Math.round(usedMemory)}MB`);
        }
    }, 5000);
}