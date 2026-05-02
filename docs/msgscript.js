// Image optimization with mobile awareness
const isMobileMsgPage = window.innerWidth <= 768;

const optimizeImage = (imgElement) => {
    if (imgElement && imgElement.src) {
        imgElement.style.maxWidth = '100%';
        imgElement.style.maxHeight = '100%';
        imgElement.style.height = 'auto';
        imgElement.style.width = 'auto';
        imgElement.style.display = 'block';
        
        // Add loading state for mobile
        if (isMobileMsgPage) {
            imgElement.style.objectFit = 'cover';
        }
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
timeTillGrad = Math.round((graduationDate-currentDate)/(1000 * 60 * 60 * 24));

document.getElementById('days').innerText = (String(timeTillGrad) + ' days left...');

const to_home = document.getElementsByClassName("nav-logo")[0];

to_home.addEventListener("click", function() {
    document.body.style.opacity = '0.8';
    document.body.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => {
        location.href = "./";
    }, 100);
});

const namelist = [
    "Abella, Denise", "Abellana, Crizelle M.", "Abellana, Kathreen Lara S.", "Abendan, Emmanuel D.", "Ada, Dominic L.",
    "Adiong, Karlo U.", "Alanano, Ernest Claude A.", "Alcantara, Zy Jrehd Rhoven G.", "Alemania, Neil Joseph K.", "Alvarez, Jacob Johnson B.",
    "Arbon, Jianna Angela N.", "Arellano, Godwin El Seihgfredd R.", "Auza, Jeremiah E.", "Ayuban, Niño Zane Gabriel J.", "Baes, Daven L.",
    "Bangay, Angel Mae P.", "Baring, Vince Harris C.", "Batucan, Rigel Neron A.", "Bellester, Boien B.", "Biñan, Jon Nathaniel J.",
    "Buno, Sophia Gwyneth M.", "Cagabhion, Lawrence Jymz T.", "Cañete, Peter Kyle H.", "Carusca, Franceen Andrei S.", "Castaño, Felix Angelo P.",
    "Castolo, Thessa Mae I.", "Catada, Jodia Jace Rajl V.", "Cerdania, Nathaniel R.", "Cinco, Shamea L.", "Concepcion, Zabrina Khae J.",
    "Dapitan, Mondethird A.", "De Guzman, Samantha Isabelle B.", "De Juan, Jopril Kobi R.", "De Los Santos, Gelyn C.", "Deiparine, Japheth Ivan D.",
    "Despi, Oneil Adrian S.", "Dicdiquin, Athena Celine Faye B.", "Diones, Debbie Joan D.", "Ente, Christine Jul C.", "Erazo, Adrien Ivon A.",
    "Falar, Rain Kirby N.", "Flores, Baby Say C.", "Gador, Maria Vania M.", "Galarpe, Carl Jezrael E.", "Garcia, Nicolo Andreas A.",
    "Goldenbogen, Michael R.", "Guinita, Hannah Alaine P.", "Itumay, Zen Correl I.", "Jaum, Justine M.", "Larena, Arriannie Lesh",
    "Lenares, Danielle Rose T.", "Logarta, Franchesca Evanne N.", "Lumayog, Myel Danielle B.", "Macalintal, Rayne D.", "Maceda, Cyrus Rei A.",
    "Maglasang, Haleigh Kjyll A.", "Mahusay, Aljur S.", "Manuel, Kacey Terrence E.", "Mar, Rheagan Matthew G.", "Melencion, Arianna Marie B.",
    "Miranda, Maryloine Faye C.", "Monternel, Zheanne Gaile D.", "Nacario, Xantine Larise Maria M.", "Navarrete, Prince Timothy Uriel V.", "Newns, Khrizael C.",
    "Ocampo, John Mhenard B.", "Orapa, Sophia D.", "Ortega, Yxzia Emmanuel R.", "Quiñones, Shinn H.", "Quiseo, Giovanni Niño T.",
    "Ravina, Aaron Y.", "Ravina, John Gabriel P.", "Remedio, Nicah Claude S.", "Rusiana, Jan Abram B.", "Salazar, Zachary Frederick F.",
    "Shoemaker, Raymond B.", "Sol, Jorj Andrei R.", "Suarez, Nichola Sophia Illyich R.", "Tan, Louisse Theresa V.", "Torregosa, Jon Cris A.",
    "Trumpeta, Matt Alfonso L.", "Valencia, Brent Andre P.", "Valerio, Varick Vince L.", "Villaflores, John Mike F.", "Villanueva, Edmund Paolo T.",
    "Villarte, Chad S.", "Yano, Dexcy Mea M.", "Yap, Io Mari V.", "Yu, Selene Liana M."
];
const displaynamelist = [
    "Abella, Denise", "Abellana, Crizelle M.", "Abellana, Kathreen Lara S.", "Abendan, Emmanuel D.", "Ada, Dominic L.",
    "Adiong, Karlo U.", "Alanano, Ernest Claude A.", "Alcantara, Zy Jrehd Rhoven G.", "Alemania, Neil Joseph K.", "Alvarez, Jacob Johnson B.",
    "Arbon, Jianna Angela N.", "Arellano, Godwin El Seihgfredd R.", "Auza, Jeremiah E.", "Ayuban, Niño Zane Gabriel J.", "Baes, Daven L.",
    "Bangay, Angel Mae P.", "Baring, Vince Harris C.", "Batucan, Rigel Neron A.", "Bellester, Boien B.", "Biñan, Jon Nathaniel J.",
    "Buno, Sophia Gwyneth M.", "Cagabhion, Lawrence Jymz T.", "Cañete, Peter Kyle H.", "Carusca, Franceen Andrei S.", "Castaño, Felix Angelo P.",
    "Castolo, Thessa Mae I.", "Catada, Jodia Jace Rajl V.", "Cerdania, Nathaniel R.", "Cinco, Shamea L.", "Concepcion, Zabrina Khae J.",
    "Dapitan, Mondethird A.", "De Guzman, Samantha Isabelle B.", "De Juan, Jopril Kobi R.", "De Los Santos, Gelyn C.", "Deiparine, Japheth Ivan D.",
    "Despi, Oneil Adrian S.", "Dicdiquin, Athena Celine Faye B.", "Diones, Debbie Joan D.", "Ente, Christine Jul C.", "Erazo, Adrien Ivon A.",
    "Falar, Rain Kirby N.", "Flores, Baby Say C.", "Gador, Maria Vania M.", "Galarpe, Carl Jezrael E.", "Garcia, Nicolo Andreas A.",
    "Goldenbogen, Michael R.", "Guinita, Hannah Alaine P.", "Itumay, Zen Correl I.", "Jaum, Justine M.", "Larena, Arriannie Lesh",
    "Lenares, Danielle Rose T.", "Logarta, Franchesca Evanne N.", "Lumayog, Myel Danielle B.", "Macalintal, Rayne D.", "Maceda, Cyrus Rei A.",
    "Maglasang, Haleigh Kjyll A.", "Mahusay, Aljur S.", "Manuel, Kacey Terrence E.", "Mar, Rheagan Matthew G.", "Melencion, Arianna Marie B.",
    "Miranda, Maryloine Faye C.", "Monternel, Zheanne Gaile D.", "Nacario, Xantine Larise Maria M.", "Navarrete, Prince Timothy Uriel V.", "Newns, Khrizael C.",
    "Ocampo, John Mhenard B.", "Orapa, Sophia D.", "Ortega, Yxzia Emmanuel R.", "Quiñones, Shinn H.", "Quiseo, Giovanni Niño T.",
    "Ravina, Aaron Y.", "Ravina, John Gabriel P.", "Remedio, Nicah Claude S.", "Rusiana, Jan Abram B.", "Salazar, Zachary Frederick F.",
    "Shoemaker, Raymond B.", "Sol, Jorj Andrei R.", "Suarez, Nichola Sophia Illyich R.", "Tan, Louisse Theresa V.", "Torregosa, Jon Cris A.",
    "Trumpeta, Matt Alfonso L.", "Valencia, Brent Andre P.", "Valerio, Varick Vince L.", "Villaflores, John Mike F.", "Villanueva, Edmund Paolo T.",
    "Villarte, Chad S.", "Yano, Dexcy Mea M.", "Yap, Io Mari V.", "Yu, Selene Liana M."
]
/*const sectionlist = [
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026",
    "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026", "Class of 2026"
]*/

const card_number = document.location.href.split('?')['1'].split('&')[0].split('=')[1];

const name_container = document.getElementById("display-name");
const section_container = document.getElementById("section");
const img_container = document.getElementById("settable-img");
const name = namelist[card_number - 1];

// Set the message page image (optimized version)
img_container.setAttribute("src", "./msg_imgs/" + card_number + ".webp");
img_container.setAttribute("alt", namelist[card_number - 1]);

name_container.innerHTML = displaynamelist[card_number - 1];
section_container.innerHTML = "Class of 2026";

// Optimize image display
optimizeImage(img_container);
img_container.addEventListener('load', () => {
    optimizeImage(img_container);
});

img_container.addEventListener('error', () => {
    console.warn(`Failed to load image ${card_number}. Attempting fallback...`);
    img_container.src = "./imgs/" + card_number + ".webp";
});

document.title = "Message for " + namelist[card_number - 1];

const btn = document.getElementById("submit-btn");
let isSubmitting = false;

document.getElementById("msg-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    isSubmitting = true;
    
    btn.disabled = true;
    
    const sender = document.getElementById("name").value || "Anonymous";
    const message = document.getElementById("msg").value;
    
    if (!message.trim()) {
        alert("Please enter a message.");
        btn.disabled = false;
        isSubmitting = false;
        return;
    }
    
    // Timeout for slow networks
    const timeoutId = setTimeout(() => {
        console.error("Message submission timed out");
        alert("Request timed out. Please try again.");
        btn.disabled = false;
        isSubmitting = false;
    }, 10000);
    
    fetch("https://script.google.com/macros/s/AKfycbwB4BTEKqm60MRET46LlgLC1AmvgMIKea4S5BTjNqCg6xAAauY2kA2ZU9fxCql3TcE/exec", {
        method: "POST",
        body: JSON.stringify({
            "receiver": namelist[card_number - 1],
            "sender": sender,  
            "msg": message
        })
    })
    .then(response => response.json())
    .then(data => {
        clearTimeout(timeoutId);
        console.log("Success:", data);
        alert("Message sent successfully!");
        document.getElementById("msg").value = "";
        btn.disabled = false;
        isSubmitting = false;
    })
    .catch(error => {
        clearTimeout(timeoutId);
        console.error("Error:", error);
        alert("Oops! Something went wrong. Please try again.");
        btn.disabled = false;
        isSubmitting = false;
    });
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});