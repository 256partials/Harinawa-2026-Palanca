/*const BATCH_SIZE = 20; // change if needed !!!!
let currentIndex = 0;
const container = document.getElementById("card-cont");
const names = [
    "Abella, Denise A.", 
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
const getGMT8 = () => {
    const now = new Date();
    return new Date(now.getTime() + (8 * 60 * 60 * 1000));
};

const gradDate = new Date('2026-05-20');
const daysLeft = Math.ceil((gradDate - getGMT8()) / (1000 * 60 * 60 * 24));

document.getElementById("days").innerText = "Graduation Day!";

function createCard(index) {
    const div = document.createElement("div");
    div.className = "tooltip-container";

    const img = document.createElement("img");
    img.className = "card";
    img.src = `./imgs_small/${index + 1}.webp`;

    img.loading = "lazy";
    img.decoding = "async";

    img.alt = names[index];

    img.addEventListener("click", () => {
        location.href = `./msg.html?card=${index + 1}`;
    });

    const name = document.createElement("p");
    name.className = "card-name poppins";
    name.innerText = names[index];

    div.appendChild(img);
    div.appendChild(name);

    return div;
}
function loadBatch() {
    for (let i = 0; i < BATCH_SIZE && currentIndex < names.length; i++) {
        container.appendChild(createCard(currentIndex));
        currentIndex++;
    }
} loadBatch();

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadBatch();
    }
});
document.querySelector(".nav-logo").onclick = () => location.href = "./";*/

const BATCH_SIZE = 20; // change if needed !!!!
let currentIndex = 0;
const container = document.getElementById("card-cont");

/* =========================
   CHANGED: FULL DATASET
   ========================= */
const graduates = [
    { name: "Abella, Denise A.", email: "daabella@cvisc.pshs.edu.ph" },
    { name: "Abellana, Crizelle M.", email: "cmabellana@cvisc.pshs.edu.ph" },
    { name: "Abellana, Kathreen Lara S.", email: "ksabellana@cvisc.pshs.edu.ph" },
    { name: "Abendan, Emmanuel D.", email: "edabendan@cvisc.pshs.edu.ph" },
    { name: "Ada, Dominic L.", email: "dlada@cvisc.pshs.edu.ph" },
    { name: "Adiong, Karlo U.", email: "kuadiong@cvisc.pshs.edu.ph" },
    { name: "Alanano, Ernest Claude A.", email: "eaalanano@cvisc.pshs.edu.ph" },
    { name: "Alcantara, Zy Jrehd Rhoven G.", email: "zgalcantara@cvisc.pshs.edu.ph" },
    { name: "Alemania, Neil Joseph K.", email: "nkalemania@cvisc.pshs.edu.ph" },
    { name: "Alvarez, Jacob Johnson B.", email: "jbalvarez@cvisc.pshs.edu.ph" },
    { name: "Arbon, Jianna Angela N.", email: "jnarbon@cvisc.pshs.edu.ph" },
    { name: "Arellano, Godwin El Seihgfredd R.", email: "grarellano@cvisc.pshs.edu.ph" },
    { name: "Auza, Jeremiah E.", email: "jeauza@cvisc.pshs.edu.ph" },
    { name: "Ayuban, Niño Zane Gabriel J.", email: "njayuban@cvisc.pshs.edu.ph" },
    { name: "Baes, Daven L.", email: "dbaes@cvisc.pshs.edu.ph" },
    { name: "Bangay, Angel Mae P.", email: "apbangay@cvisc.pshs.edu.ph" },
    { name: "Baring, Vince Harris C.", email: "vcbaring@cvisc.pshs.edu.ph" },
    { name: "Batucan, Rigel Neron A.", email: "rabatucan@cvisc.pshs.edu.ph" },
    { name: "Bellester, Boien B.", email: "bbbellester@cvisc.pshs.edu.ph" },
    { name: "Biñan, Jon Nathaniel J.", email: "jjbinan@cvisc.pshs.edu.ph" },
    { name: "Buno, Sophia Gwyneth M.", email: "smbuno@cvisc.pshs.edu.ph" },
    { name: "Cagabhion, Lawrence Jymz T.", email: "ltcagabhion@cvisc.pshs.edu.ph" },
    { name: "Cañete, Peter Kyle H.", email: "phcanete@cvisc.pshs.edu.ph" },
    { name: "Carusca, Franceen Andrei S.", email: "fscarusca@cvisc.pshs.edu.ph" },
    { name: "Castaño, Felix Angelo P.", email: "fpcastano@cvisc.pshs.edu.ph" },
    { name: "Castolo, Thessa Mae I.", email: "ticastolo@cvisc.pshs.edu.ph" },
    { name: "Catada, Jodia Jace Rajl V.", email: "jvcatada@cvisc.pshs.edu.ph" },
    { name: "Cerdania, Nathaniel R.", email: "nrcerdania@cvisc.pshs.edu.ph" },
    { name: "Cinco, Shamea L.", email: "slcinco@cvisc.pshs.edu.ph" },
    { name: "Concepcion, Zabrina Khae J.", email: "zjconcepcion@cvisc.pshs.edu.ph" },
    { name: "Dapitan, Mondethird A.", email: "madapitan@cvisc.pshs.edu.ph" },
    { name: "De Guzman, Samantha Isabelle B.", email: "sbdeguzman@cvisc.pshs.edu.ph" },
    { name: "De Juan, Jopril Kobi R.", email: "jrdejuan@cvisc.pshs.edu.ph" },
    { name: "De Los Santos, Gelyn C.", email: "gcdelossantos@cvisc.pshs.edu.ph" },
    { name: "Deiparine, Japheth Ivan D.", email: "jddeiparine@cvisc.pshs.edu.ph" },
    { name: "Despi, Oneil Adrian S.", email: "osdespi@cvisc.pshs.edu.ph" },
    { name: "Dicdiquin, Athena Celine Faye B.", email: "abdicdiquin@cvisc.pshs.edu.ph" },
    { name: "Diones, Debbie Joan D.", email: "dddiones@cvisc.pshs.edu.ph" },
    { name: "Ente, Christine Jul C.", email: "ccente@cvisc.pshs.edu.ph" },
    { name: "Erazo, Adrien Ivon A.", email: "aaerazo@cvisc.pshs.edu.ph" },
    { name: "Falar, Rain Kirby N.", email: "rnfalar@cvisc.pshs.edu.ph" },
    { name: "Flores, Baby Say C.", email: "bcflores@cvisc.pshs.edu.ph" },
    { name: "Gador, Maria Vania M.", email: "mmgador@cvisc.pshs.edu.ph" },
    { name: "Galarpe, Carl Jezrael E.", email: "cegalarpe@cvisc.pshs.edu.ph" },
    { name: "Garcia, Nicolo Andreas A.", email: "nagarcia@cvisc.pshs.edu.ph" },
    { name: "Goldenbogen, Michael R.", email: "mrgoldenbogen@cvisc.pshs.edu.ph" },
    { name: "Guinita, Hannah Alaine P.", email: "hpguinita@cvisc.pshs.edu.ph" },
    { name: "Itumay, Zen Correl I.", email: "ziitumay@cvisc.pshs.edu.ph" },
    { name: "Jaum, Justine M.", email: "jmjaum@cvisc.pshs.edu.ph" },
    { name: "Larena, Arriannie Lesh", email: "alarena@cvisc.pshs.edu.ph" },
    { name: "Lenares, Danielle Rose T.", email: "dtlenares@cvisc.pshs.edu.ph" },
    { name: "Logarta, Franchesca Evanne N.", email: "fnlogarta@cvisc.pshs.edu.ph" },
    { name: "Lumayog, Myel Danielle B.", email: "mblumayog@cvisc.pshs.edu.ph" },
    { name: "Macalintal, Rayne D.", email: "rdmacalintal@cvisc.pshs.edu.ph" },
    { name: "Maceda, Cyrus Rei A.", email: "camaceda@cvisc.pshs.edu.ph" },
    { name: "Maglasang, Haleigh Kjyll A.", email: "hamaglasang@cvisc.pshs.edu.ph" },
    { name: "Mahusay, Aljur S.", email: "amahusay@cvisc.pshs.edu.ph" },
    { name: "Manuel, Kacey Terrence E.", email: "kemanuel@cvisc.pshs.edu.ph" },
    { name: "Mar, Rheagan Matthew G.", email: "rgmar@cvisc.pshs.edu.ph" },
    { name: "Melencion, Arianna Marie B.", email: "abmelencion@cvisc.pshs.edu.ph" },
    { name: "Miranda, Maryloine Faye C.", email: "mcmiranda@cvisc.pshs.edu.ph" },
    { name: "Monternel, Zheanne Gaile D.", email: "zdmonternel@cvisc.pshs.edu.ph" },
    { name: "Nacario, Xantine Larise Maria M.", email: "xmnacario@cvisc.pshs.edu.ph" },
    { name: "Navarrete, Prince Timothy Uriel V.", email: "pvnavarrete@cvisc.pshs.edu.ph" },
    { name: "Newns, Khrizael C.", email: "kcnewns@cvisc.pshs.edu.ph" },
    { name: "Ocampo, John Mhenard B.", email: "jbocampo@cvisc.pshs.edu.ph" },
    { name: "Orapa, Sophia D.", email: "sdorapa@cvisc.pshs.edu.ph" },
    { name: "Ortega, Yxzia Emmanuel R.", email: "yrortega@cvisc.pshs.edu.ph" },
    { name: "Quiñones, Shinn H.", email: "shquinones@cvisc.pshs.edu.ph" },
    { name: "Quiseo, Giovanni Niño T.", email: "gtquiseo@cvisc.pshs.edu.ph" },
    { name: "Ravina, Aaron Y.", email: "ayravina@cvisc.pshs.edu.ph" },
    { name: "Ravina, John Gabriel P.", email: "jpravina@cvisc.pshs.edu.ph" },
    { name: "Remedio, Nicah Claude S.", email: "nsremedio@cvisc.pshs.edu.ph" },
    { name: "Rusiana, Jan Abram B.", email: "jbrusiana@cvisc.pshs.edu.ph" },
    { name: "Salazar, Zachary Frederick F.", email: "zfsalazar@cvisc.pshs.edu.ph" },
    { name: "Shoemaker, Raymond B.", email: "rbshoemaker@cvisc.pshs.edu.ph" },
    { name: "Sol, Jorj Andrei R.", email: "jrsol@cvisc.pshs.edu.ph" },
    { name: "Suarez, Nichola Sophia Illyich R.", email: "nrsuarez@cvisc.pshs.edu.ph" },
    { name: "Tan, Louisse Theresa V.", email: "lvtan@cvisc.pshs.edu.ph" },
    { name: "Torregosa, Jon Cris A.", email: "jatorregosa@cvisc.pshs.edu.ph" },
    { name: "Trumpeta, Matt Alfonso L.", email: "mltrumpeta@cvisc.pshs.edu.ph" },
    { name: "Valencia, Brent Andre P.", email: "bpvalencia@cvisc.pshs.edu.ph" },
    { name: "Valerio, Varick Vince L.", email: "vlvalerio@cvisc.pshs.edu.ph" },
    { name: "Villaflores, John Mike F.", email: "jfvillaflores@cvisc.pshs.edu.ph" },
    { name: "Villanueva, Edmund Paolo T.", email: "etvillanueva@cvisc.pshs.edu.ph" },
    { name: "Villarte, Chad S.", email: "csvillarte@cvisc.pshs.edu.ph" },
    { name: "Yano, Dexcy Mea M.", email: "dmyano@cvisc.pshs.edu.ph" },
    { name: "Yap, Io Mari V.", email: "ivyap@cvisc.pshs.edu.ph" },
    { name: "Yu, Selene Liana M.", email: "smyu@cvisc.pshs.edu.ph" },
];

/* =========================
   CHANGED: derived names list
   ========================= */
const names = graduates.map(g => g.name);

const getGMT8 = () => {
    const now = new Date();
    return new Date(now.getTime() + (8 * 60 * 60 * 1000));
};

const gradDate = new Date('2026-05-20');
const daysLeft = Math.ceil((gradDate - getGMT8()) / (1000 * 60 * 60 * 24));

document.getElementById("days").innerText = "Graduation Day!";

function createCard(index) {
    const div = document.createElement("div");
    div.className = "tooltip-container";

    const img = document.createElement("img");
    img.className = "card";
    img.src = `./imgs_small/${index + 1}.webp`;

    img.loading = "lazy";
    img.decoding = "async";

    img.alt = names[index];

    img.addEventListener("click", () => {
        location.href = `msg.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&img=${encodeURIComponent(img)}`;
    });

    const name = document.createElement("p");
    name.className = "card-name poppins";
    name.innerText = names[index];

    div.appendChild(img);
    div.appendChild(name);

    return div;
}

function loadBatch() {
    for (let i = 0; i < BATCH_SIZE && currentIndex < names.length; i++) {
        container.appendChild(createCard(currentIndex));
        currentIndex++;
    }
}
loadBatch();

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadBatch();
    }
});

document.querySelector(".nav-logo").onclick = () => location.href = "./";