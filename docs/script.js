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
    { name: "Denise Abella", email: "daabella@cvisc.pshs.edu.ph" },
    { name: "Crizelle Abellana", email: "cmabellana@cvisc.pshs.edu.ph" },
    { name: "Kathreen Lara Abellana", email: "ksabellana@cvisc.pshs.edu.ph" },
    { name: "Emmanuel Abendan", email: "edabendan@cvisc.pshs.edu.ph" },
    { name: "Dominic Ada", email: "dlada@cvisc.pshs.edu.ph" },
    { name: "Karlo Adiong", email: "kuadiong@cvisc.pshs.edu.ph" },
    { name: "Ernest Claude A. Alanano", email: "eaalanano@cvisc.pshs.edu.ph" },
    { name: "Zy Jrehd Rhoven Alcantara", email: "zgalcantara@cvisc.pshs.edu.ph" },
    { name: "Neil Joseph Alemania", email: "nkalemania@cvisc.pshs.edu.ph" },
    { name: "Jacob Johnson Alvarez", email: "jbalvarez@cvisc.pshs.edu.ph" },
    { name: "Jianna Angela Arbon", email: "jnarbon@cvisc.pshs.edu.ph" },
    { name: "Godwin El Seihgfredd Arellano", email: "grarellano@cvisc.pshs.edu.ph" },
    { name: "Jeremiah Auza", email: "jeauza@cvisc.pshs.edu.ph" },
    { name: "Niño Zane Gabriel Ayuban", email: "njayuban@cvisc.pshs.edu.ph" },
    { name: "Daven Baes", email: "dbaes@cvisc.pshs.edu.ph" },
    { name: "Angel Mae Bangay", email: "apbangay@cvisc.pshs.edu.ph" },
    { name: "Vince harris Baring", email: "vcbaring@cvisc.pshs.edu.ph" },
    { name: "Rigel Neron Batucan", email: "rabatucan@cvisc.pshs.edu.ph" },
    { name: "Boien Bellester", email: "bbbellester@cvisc.pshs.edu.ph" },
    { name: "Jon Nathaniel Biñan", email: "jjbinan@cvisc.pshs.edu.ph" },
    { name: "Sophia Gwyneth Buno", email: "smbuno@cvisc.pshs.edu.ph" },
    { name: "Lawrence Jymz Cagabhion", email: "ltcagabhion@cvisc.pshs.edu.ph" },
    { name: "Peter Kyle Cañete", email: "phcanete@cvisc.pshs.edu.ph" },
    { name: "Franceen Andrei Carusca", email: "fscarusca@cvisc.pshs.edu.ph" },
    { name: "Felix Castano", email: "fpcastano@cvisc.pshs.edu.ph" },
    { name: "Thessa Mae I. Castolo", email: "ticastolo@cvisc.pshs.edu.ph" },
    { name: "Jodia Jace Catada", email: "jvcatada@cvisc.pshs.edu.ph" },
    { name: "Nathaniel Cerdania", email: "nrcerdania@cvisc.pshs.edu.ph" },
    { name: "Shamea Cinco", email: "slcinco@cvisc.pshs.edu.ph" },
    { name: "Zabrina Khae Concepcion", email: "zjconcepcion@cvisc.pshs.edu.ph" },
    { name: "Mondethird Dapitan", email: "madapitan@cvisc.pshs.edu.ph" },
    { name: "Japheth Ivan Deiparine", email: "jddeiparine@cvisc.pshs.edu.ph" },
    { name: "Oneil Adrian Despi", email: "osdespi@cvisc.pshs.edu.ph" },
    { name: "Athena Celine Faye Dicdiquin", email: "abdicdiquin@cvisc.pshs.edu.ph" },
    { name: "Debbie Joan Diones", email: "dddiones@cvisc.pshs.edu.ph" },
    { name: "Christine Jul Ente", email: "ccente@cvisc.pshs.edu.ph" },
    { name: "Adrien Ivon Erazo", email: "aaerazo@cvisc.pshs.edu.ph" },
    { name: "Rain Kirby Falar", email: "rnfalar@cvisc.pshs.edu.ph" },
    { name: "Baby Say Flores", email: "bcflores@cvisc.pshs.edu.ph" },
    { name: "Maria Vania Gador", email: "mmgador@cvisc.pshs.edu.ph" },
    { name: "Carl Jezrael Galarpe", email: "cegalarpe@cvisc.pshs.edu.ph" },
    { name: "Nicolo Andreas Garcia", email: "nagarcia@cvisc.pshs.edu.ph" },
    { name: "Michael Goldenbogen", email: "mrgoldenbogen@cvisc.pshs.edu.ph" },
    { name: "Hannah Alaine Guinita", email: "hpguinita@cvisc.pshs.edu.ph" },
    { name: "Samantha Isabelle De Guzman", email: "sbdeguzman@cvisc.pshs.edu.ph" },
    { name: "Zen Correl Itumay", email: "ziitumay@cvisc.pshs.edu.ph" },
    { name: "Justine Jaum", email: "jmjaum@cvisc.pshs.edu.ph" },
    { name: "Jopril Kobi De Juan", email: "jrdejuan@cvisc.pshs.edu.ph" },
    { name: "Arriannie Lesh Larena", email: "alarena@cvisc.pshs.edu.ph" },
    { name: "Danielle Rose Lenares", email: "dtlenares@cvisc.pshs.edu.ph" },
    { name: "Franchesca Evanne Logarta", email: "fnlogarta@cvisc.pshs.edu.ph" },
    { name: "Myel Danielle Lumayog", email: "mblumayog@cvisc.pshs.edu.ph" },
    { name: "Rayne Macalintal", email: "rdmacalintal@cvisc.pshs.edu.ph" },
    { name: "Cyrus Rei Maceda", email: "camaceda@cvisc.pshs.edu.ph" },
    { name: "Haleigh Kjyll Maglasang", email: "hamaglasang@cvisc.pshs.edu.ph" },
    { name: "Aljur Mahusay", email: "amahusay@cvisc.pshs.edu.ph" },
    { name: "Kacey Terrence Manuel", email: "kemanuel@cvisc.pshs.edu.ph" },
    { name: "Rheagan Matthew Mar", email: "rgmar@cvisc.pshs.edu.ph" },
    { name: "Arianna Marie Melencion", email: "abmelencion@cvisc.pshs.edu.ph" },
    { name: "Maryloine Faye Miranda", email: "mcmiranda@cvisc.pshs.edu.ph" },
    { name: "Zheanne Gaile Monternel", email: "zdmonternel@cvisc.pshs.edu.ph" },
    { name: "Xantine Larise Maria Nacario", email: "xmnacario@cvisc.pshs.edu.ph" },
    { name: "Prince Timothy Uriel Navarrete", email: "pvnavarrete@cvisc.pshs.edu.ph" },
    { name: "Khrizael Newns", email: "kcnewns@cvisc.pshs.edu.ph" },
    { name: "John Mhenard Ocampo", email: "jbocampo@cvisc.pshs.edu.ph" },
    { name: "Sophia Orapa", email: "sdorapa@cvisc.pshs.edu.ph" },
    { name: "Yxzia Emmanuel Ortega", email: "yrortega@cvisc.pshs.edu.ph" },
    { name: "Shinn Quiñones", email: "shquinones@cvisc.pshs.edu.ph" },
    { name: "Giovanni Nino Quiseo", email: "gtquiseo@cvisc.pshs.edu.ph" },
    { name: "Aaron Ravina", email: "ayravina@cvisc.pshs.edu.ph" },
    { name: "John Gabriel Ravina", email: "jpravina@cvisc.pshs.edu.ph" },
    { name: "Nicah Claude Remedio", email: "nsremedio@cvisc.pshs.edu.ph" },
    { name: "Jan Abram Rusiana", email: "jbrusiana@cvisc.pshs.edu.ph" },
    { name: "Zachary Frederick Salazar", email: "zfsalazar@cvisc.pshs.edu.ph" },
    { name: "Gelyn De Los Santos", email: "gcdelossantos@cvisc.pshs.edu.ph" },
    { name: "Raymond Shoemaker", email: "rbshoemaker@cvisc.pshs.edu.ph" },
    { name: "Jorj Andrei Sol", email: "jrsol@cvisc.pshs.edu.ph" },
    { name: "Nichola Sophia Illyich Suarez", email: "nrsuarez@cvisc.pshs.edu.ph" },
    { name: "Louisse Theresa Tan", email: "lvtan@cvisc.pshs.edu.ph" },
    { name: "Jon Cris Torregosa", email: "jatorregosa@cvisc.pshs.edu.ph" },
    { name: "Matt Alfonso Trumpeta", email: "mltrumpeta@cvisc.pshs.edu.ph" },
    { name: "Brent Andre Valencia", email: "bpvalencia@cvisc.pshs.edu.ph" },
    { name: "Varick Vince Valerio", email: "vlvalerio@cvisc.pshs.edu.ph" },
    { name: "John Mike Villaflores", email: "jfvillaflores@cvisc.pshs.edu.ph" },
    { name: "Edmund Paolo Villanueva", email: "etvillanueva@cvisc.pshs.edu.ph" },
    { name: "Chad Villarte", email: "csvillarte@cvisc.pshs.edu.ph" },
    { name: "Dexcy Mea Yano", email: "dmyano@cvisc.pshs.edu.ph" },
    { name: "Io Mari Yap", email: "ivyap@cvisc.pshs.edu.ph" },
    { name: "Selene Liana Yu", email: "smyu@cvisc.pshs.edu.ph" }
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
}
loadBatch();

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadBatch();
    }
});

document.querySelector(".nav-logo").onclick = () => location.href = "./";