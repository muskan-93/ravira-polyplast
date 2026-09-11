// ======================================================
// RAVIRA POLY PLAST - SCRIPT.JS

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const companyEmail = "GUPTAMUSKAN9327@GMAIL.COM";

        const subject = "New Website Enquiry - " + name;

        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n\n" +
            "Message:\n" + message;

        const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + encodeURIComponent(companyEmail) +
            "&su=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.open(gmailURL, "_blank");

    });

}
// ================= PRODUCT POPUP =================

const products = [

    {
        image: "PRODUCT1.JPG",
        title: "Plastic Film Rolls",
        description:
            "Plastic film rolls manufactured for flexible packaging and industrial applications. Our films are produced in bulk with a focus on consistent quality and reliable performance. Suitable for different packaging requirements and available according to customer specifications."
    },

    {
        image: "PRODUCT2.JPG",
        title: "Packaging Film",
        description:
            "Packaging film designed for wrapping and protecting products during storage, handling and transportation. Manufactured for bulk requirements with a focus on flexibility and dependable performance. Suitable for a variety of commercial and industrial packaging applications."
    },

    {
        image: "PRODUCT3.JPG",
        title: "Plastic Packaging",
        description:
            "Plastic packaging solutions designed to provide practical protection and handling for different products. Manufactured in bulk for commercial and industrial requirements. Product dimensions and specifications can be customized according to customer needs."
    },

    {
        image: "PRODUCT4.JPG",
        title: "Plastic Cover Bags",
        description:
            "Flexible plastic cover bags suitable for packaging, covering and protecting different products. Manufactured in bulk with attention to consistent quality and usability. Available in different sizes and specifications based on customer requirements."
    },

    {
        image: "PRODUCT5.JPG",
        title: "LLDPE Plastic Film Rolls",
        description:
            "LLDPE plastic film rolls manufactured for flexible packaging and various industrial applications. The material provides flexibility and practical handling for bulk packaging requirements. Products can be supplied in different sizes and specifications according to customer needs."
    },

    {
        image: "PRODUCT6.JPG",
        title: "Printed Poly Bags",
        description:
            "Printed poly bags manufactured for packaging and business requirements. Custom printing can be used for branding, product information or other customer specifications. Suitable for businesses looking for practical and customizable packaging solutions in bulk."
    },

    {
        image: "PRODUCT7.JPG",
        title: "Garbage Bags",
        description:
            "Garbage bags manufactured in bulk for waste collection, commercial and general disposal requirements. Designed to provide flexible and practical waste-handling solutions. Available in different sizes and specifications according to customer requirements."
    },

    {
        image: "PRODUCT8.JPG",
        title: "Custom Printed Poly Bags",
        description:
            "Custom printed poly bags designed for packaging, branding and commercial applications. Printing can be customized according to customer requirements. Manufactured in bulk with a focus on practical packaging, consistent quality and reliable production."
    }

];


// OPEN PRODUCT POPUP

function openProduct(index) {

    const product = products[index];

    document.getElementById("modalImage").src =
        product.image;

    document.getElementById("modalTitle").textContent =
        product.title;

    document.getElementById("modalDescription").textContent =
        product.description;

    document.getElementById("productModal").style.display =
        "flex";
}


// CLOSE PRODUCT POPUP

function closeProduct() {

    document.getElementById("productModal").style.display =
        "none";
}


// CLOSE PRODUCT POPUP WHEN CLICKING OUTSIDE

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("productModal");

    if (event.target === modal) {

        closeProduct();

    }

});


// ================= MACHINERY POPUP =================

const machines = [

    "machine1.jpg",

    "machine2.jpg",

    "machine3.jpg",

    "machine4.jpg"

];


// OPEN MACHINERY POPUP

function openMachine(index) {

    document.getElementById("machineModalImage").src =
        machines[index];

    document.getElementById("machineModal").style.display =
        "flex";

}


// CLOSE MACHINERY POPUP

function closeMachine() {

    document.getElementById("machineModal").style.display =
        "none";

}


// CLOSE MACHINERY POPUP WHEN CLICKING OUTSIDE

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("machineModal");

    if (event.target === modal) {

        closeMachine();

    }

});
