document.addEventListener("DOMContentLoaded", function () {

    // 1. Display a welcome message in the console
    console.log("Welcome to Nayana's Portfolio!");

    // 2. Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Make the email address clickable
    const contactSection = document.querySelector("#contact");
    const emailParagraph = contactSection.querySelector("p");

    if (emailParagraph) {
        const email = emailParagraph.textContent.trim();

        if (email.includes("@")) {
            const emailLink = document.createElement("a");
            emailLink.href = "mailto:" + email;
            emailLink.textContent = email;

            emailParagraph.replaceChildren(emailLink);
        }
    }

    // 4. Automatically update the copyright year
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            new Date().getFullYear() + " Nayana | My Portfolio";
    }

});