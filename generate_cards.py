#!/usr/bin/env python3
# Generate 89 card HTML elements and name lists for Harinawa 2026 Palanca

# All 89 Harinawa 2026 batch students
names = [
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
    "Miranda, Maryloline Faye C.",
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
]

print("Number of cards:", len(names))
print("First 5:", names[:5])
print("Last 5:", names[-5:])
print()

# Generate HTML for all cards with numbered images
with open("cards.html", "w") as f:
    for i in range(89):
        card_num = i + 1
        f.write(f'            <div class="tooltip-container">\n')
        f.write(f'                <img tabindex="-1" src="./imgs/{card_num}.webm" alt="" class="card" id="card{card_num}"  loading="lazy">\n')
        f.write(f'                <p class="card-name poppins"></p>\n')
        f.write(f'            </div>\n')

print("Generated 89 cards in cards.html")

# Generate JavaScript data
with open("js_data.js", "w") as f:
    f.write("const namelist = [\n")
    for i, name in enumerate(names):
        f.write(f'    "{name}",\n')
    f.write("];\n\n")
    
    f.write("const displaynamelist = [\n")
    for i, name in enumerate(names):
        f.write(f'    "{name}",\n')
    f.write("];\n\n")
    
    f.write("const sectionlist = [\n")
    for i in range(89):
        f.write(f'    "Class of 2026",\n')
    f.write("];\n")

print("Generated JavaScript data in js_data.js")

# Generate Google Apps Script data with emails
def generate_email(name):
    """Generate email from name format: FirstName Middle Initial LastName"""
    parts = name.split(", ")
    last_name = parts[0]
    first_middle = parts[1]
    
    # Extract first name initial
    first_initial = first_middle[0]
    
    # Extract middle initial if it exists
    middle_initial = ""
    if len(first_middle) > 2 and first_middle[1] != " ":
        # Find the space to know where middle name starts
        for i, char in enumerate(first_middle):
            if char == " ":
                if i + 1 < len(first_middle):
                    middle_initial = first_middle[i + 1]
                break
    
    # Construct email
    email = f"{first_initial}{middle_initial}{last_name}".lower().replace(" ", "") + "@cvisc.pshs.edu.ph"
    return email

with open("apps_script_data.js", "w") as f:
    f.write("const data = [\n")
    for name in names:
        email = generate_email(name)
        f.write(f'    {{ name: "{name}", email: "{email}" }},\n')
    f.write("];\n")

print("Generated Google Apps Script data in apps_script_data.js")
