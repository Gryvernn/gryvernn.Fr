document.addEventListener("DOMContentLoaded", function () {
    const agePopup = document.getElementById("age-verification");
    const birthdateInput = document.getElementById("birthdate");
    const protectedContent = document.getElementById("protected-content");

    sessionStorage.removeItem("ageVerified");

    function verifyAge() {
        let birthdate = new Date(birthdateInput.value);
        let today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        let monthDiff = today.getMonth() - birthdate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        if (age >= 18) {
            sessionStorage.setItem("ageVerified", "true");
            agePopup.style.display = "none";
            if (protectedContent) {
                protectedContent.classList.remove("blurred"); 
                protectedContent.style.pointerEvents = "auto"; 
            }
        } else {
            alert("Vous devez avoir au moins 18 ans pour accéder à ce contenu.");
        }
    }

    document.querySelector("#age-verification button").addEventListener("click", verifyAge);

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    const photoImg = document.querySelector(".photo-img");
    if (photoImg) {
        photoImg.style.animation = "bounce 1.5s infinite ease-in-out";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-grid img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (!image.classList.contains('fullscreen')) {
                image.classList.add('fullscreen');
                overlay.style.display = 'block';
            }
        });
    });

    overlay.addEventListener('click', () => {
        const fullscreenImage = document.querySelector('.fullscreen');
        if (fullscreenImage) {
            fullscreenImage.classList.remove('fullscreen');
            overlay.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    if (!sessionStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-popup").style.display = "flex";
    }

    document.getElementById("accept-cookies").addEventListener("click", function() {
        sessionStorage.setItem("cookiesAccepted", "true");
        document.getElementById("cookie-popup").style.display = "none";
    });
});
