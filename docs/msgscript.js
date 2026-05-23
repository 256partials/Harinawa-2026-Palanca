/*const params = new URLSearchParams(location.search);
const card = params.get("card");

const namelist = [
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
    "Baring, Vince harris C.", 
    "Batucan, Rigel Neron A.", 
    "Bellester, Boien B.", 
    "Biñan, Jon Nathaniel J.",
    "Buno, Sophia Gwyneth M.", 
    "Cagabhion, Lawrence Jymz T.", "Cañete, Peter Kyle H.", "Carusca, Franceen Andrei S.", "Castaño, Felix Angelo P.",
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

const img = document.getElementById("settable-img");

img.src = `./msg_imgs/${card}.webp`;
img.loading = "eager";
img.decoding = "async";

// fallbackk
img.onerror = () => {
    img.src = `./imgs_small/${card}.webp`;
};

document.getElementById("display-name").innerText = namelist[card - 1];
document.title = "Message for " + namelist[card - 1];

const WEBAPP_URL = "PASTE_YOUR_DEPLOYMENT_URL_HERE";

const form = document.getElementById("msg-form");
const submitBtn = document.getElementById("submit-btn");

const nameInput = document.getElementById("name");
const messageInput = document.getElementById("msg");

const displayName = document.getElementById("display-name");
const graduateImage = document.getElementById("settable-img");

const params = new URLSearchParams(window.location.search);

const graduateName = params.get("name") || "Graduate";
const graduateEmail = params.get("email") || "aaron.ravina@proton.me";
const graduateImageSrc = params.get("img") || "";

displayName.textContent = graduateName;
graduateImage.src = graduateImageSrc;

document.title = `${graduateName} | Palanca '26`;

const statusText = document.createElement("p");

statusText.className = "poppins";
statusText.style.marginTop = "8px";
statusText.style.color = "#d8d8e6";

form.appendChild(statusText);

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    if (submitBtn.disabled) return;

    const senderName =
        nameInput.value.trim() || "Anonymous";

    const message =
        messageInput.value.trim();

    if (!message) {

        statusText.textContent =
            "Please enter a message.";

        return;

    }

    submitBtn.disabled = true;

    statusText.textContent =
        "Sending your message...";

    const payload = {

        submissionId: crypto.randomUUID(),

        graduateName,
        graduateEmail,

        senderName,
        message,

        userAgent: navigator.userAgent,

        timestamp: new Date().toISOString()

    };

    try {

        const response = await fetch(
            WEBAPP_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type": "text/plain"
                },

                body: JSON.stringify(payload)
            }
        );

        const result = await response.json();

        if (result.success) {

            statusText.textContent =
                "Message successfully delivered!";

            form.reset();

        } else {

            statusText.textContent =
                "Your message was safely saved, but email delivery failed temporarily.";

        }

    } catch (error) {

        console.error(error);

        statusText.textContent =
            "Connection issue. Please try again carefully.";

    } finally {

        submitBtn.disabled = false;

    }

});
/*
// submission

let submitting = false;

document.getElementById("msg-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (submitting) return;

    const name = document.getElementById("name").value || "Anonymous";
    const msg = document.getElementById("msg").value;

    if (!msg.trim()) return alert("Enter a message");
    submitting = true;

    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbydy8fxkYWlGYcbIWM3n53_olZpERwbPMlDH3EPiQwzlowly3-xZHrHPrPCNeOWEA/exec", {
            method: "POST",
            body: JSON.stringify({
                receiver: namelist[card - 1],
                sender: name,
                msg: msg
            })
        });

        alert("Message sent!");
        document.getElementById("msg").value = "";

    } catch {
        alert("Error sending message.");
    }

    submitting = false;
});

*/
const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyAJ9TUJFfK_UVP7wg6zw5bW3rc4M1OozoFslU1qF8L-KzEntEuqt4e0EP_8ZXanv9U/exec";

const form = document.getElementById("msg-form");
const submitBtn = document.getElementById("submit-btn");

const nameInput = document.getElementById("name");
const messageInput = document.getElementById("msg");

const displayName = document.getElementById("display-name");
const graduateImage = document.getElementById("settable-img");

const params = new URLSearchParams(window.location.search);

const graduateName =
    params.get("name") || "Graduate";

const graduateEmail =
    params.get("email") || "";

const graduateImageSrc =
    params.get("img") || "";

displayName.textContent = graduateName;

graduateImage.src = graduateImageSrc;

document.title =
    `${graduateName} | Palanca '26'`;

const statusText =
    document.createElement("p");

statusText.className = "poppins";

statusText.style.marginTop = "8px";

statusText.style.color = "#d8d8e6";

form.appendChild(statusText);

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    if (submitBtn.disabled) return;

    const senderName =
        nameInput.value.trim() || "Anonymous";

    const message =
        messageInput.value.trim();

    if (!message) {

        statusText.textContent =
            "Please enter a message.";

        return;

    }

    submitBtn.disabled = true;

    statusText.textContent =
        "Sending message...";

    const payload = {

        submissionId:
            crypto.randomUUID(),

        graduateEmail,

        senderName,

        message,

        timestamp:
            new Date().toISOString(),

        userAgent:
            navigator.userAgent

    };

    try {

        const response = await fetch(
            WEBAPP_URL,
            {

                method: "POST",

                headers: {
                    "Content-Type": "text/plain"
                },

                body:
                    JSON.stringify(payload)

            }
        );

        const result =
            await response.json();

        if (result.success) {

            statusText.textContent =
                "Message sent successfully!";

            form.reset();

        } else {

            statusText.textContent =
                result.message ||
                "Failed to send message.";

        }

    } catch (error) {

        console.error(error);

        statusText.textContent =
            "Connection error. Please try again.";

    } finally {

        submitBtn.disabled = false;

    }

});