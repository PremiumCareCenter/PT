// script.js

// Make sure dictionary.js is loaded BEFORE script.js in your HTML
// <script src="dictionary.js"></script>
// <script src="script.js"></script>

// --- Global Variables and Initial Language Setup ---
// Initialize currentLang from localStorage or default to 'en'
let currentLang = localStorage.getItem('lang') || 'en';
const langSwitchButton = document.getElementById('lang-switch');

// --- Navbar Toggle for Mobile ---
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Global Flatpickr instance to manage it across language changes
let flatpickrInstance = null;

// Global declarations for modal elements to ensure they're accessible everywhere
const exerciseModal = document.getElementById('exerciseModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeButton = document.querySelector('.close-button');


// --- Language Switching Logic ---
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang; // Set the HTML lang attribute

    updateContent();
    updateFooterLinks(lang);
    updateFlatpickrLocale(lang); // Update Flatpickr locale
}

function updateContent() {
    // Update text content
    document.querySelectorAll('.data-text').forEach(element => {
        const key = element.dataset.key;
        if (dictionary[currentLang] && dictionary[currentLang][key]) {
            element.innerHTML = dictionary[currentLang][key];
        } else {
            console.warn(`Missing translation for text key: ${key} in ${currentLang} language.`);
        }
    });

    // Update attributes (like placeholders)
    document.querySelectorAll('.data-attr').forEach(element => {
        const key = element.dataset.key;
        // Use 'placeholder' as default attribute if data-attr is not explicitly set
        const attr = element.dataset.attr || 'placeholder';
        if (dictionary[currentLang] && dictionary[currentLang][key]) {
            element.setAttribute(attr, dictionary[currentLang][key]);
        }
    });
}

function updateFooterLinks(lang) {
    const privacyLink = document.getElementById('privacy-policy-link');
    const termsLink = document.getElementById('terms-of-service-link');

    if (privacyLink) {
        privacyLink.href = `privacy-policy.html?lang=${lang}`;
    }
    if (termsLink) {
        termsLink.href = `terms-of-service.html?lang=${lang}`;
    }
}

function updateFlatpickrLocale(lang) {
    const bookingDateInput = document.getElementById('bookingDate');
    if (bookingDateInput && typeof flatpickr !== 'undefined') {
        // Destroy existing instance if it exists
        if (flatpickrInstance) {
            flatpickrInstance.destroy();
        }
        // Initialize new instance with the correct locale
        flatpickrInstance = flatpickr(bookingDateInput, {
            dateFormat: "Y-m-d", // Example date format
            locale: (lang === 'ar' ? 'ar' : 'en') // Use 'ar' locale if currentLang is ar, else default to en
        });
    }
}


// --- Modal Logic for Exercises Page ---
// window.setModalContent is globally defined for the 'Learn More' buttons to call.
window.setModalContent = function (titleKey, descKey) {
    if (modalTitle && modalDescription && exerciseModal && dictionary[currentLang] && dictionary[currentLang][titleKey] && dictionary[currentLang][descKey]) {
        modalTitle.innerHTML = dictionary[currentLang][titleKey];
        modalDescription.innerHTML = dictionary[currentLang][descKey];
        exerciseModal.style.display = 'flex'; // Use flex to center, matches your CSS
    } else {
        console.error('Missing modal element or translation key for modal content:', titleKey, descKey);
    }
}

// Function to close the modal
function closeAllModals() {
    if (exerciseModal) {
        exerciseModal.style.display = 'none';
    }
}


// --- Main DOM Content Loaded Event Listener ---
document.addEventListener('DOMContentLoaded', () => {

    // Set initial language and content
    setLanguage(currentLang); // This also initializes Flatpickr

    // --- CRITICAL FIX: Navbar Toggle Listener ---
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggles the menu visibility via CSS

            // Toggle the icon (fa-bars to fa-times)
            const icon = hamburgerMenu.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Add event listener for language switch button
    if (langSwitchButton) {
        langSwitchButton.addEventListener('click', () => {
            const newLang = (currentLang === 'en') ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    // Event listeners for closing the modal
    if (closeButton) {
        closeButton.addEventListener('click', closeAllModals);
    }
    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === exerciseModal) {
            closeAllModals();
        }
    });


    // --- CONSOLIDATED: Attach Smooth Scroll Listeners ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        // Exclude blank links like href="#"
        if (link.getAttribute('href') === '#') return;

        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, `#${targetId}`);

                // Close the mobile menu after clicking a link
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    // Reset the icon to the bars
                    const icon = hamburgerMenu.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });


    // --- Booking Form Submission Handler ---
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents the default form submission behavior

            // Get form field values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const bookingDate = document.getElementById('bookingDate').value;
            const condition = document.getElementById('condition').value;

            // Basic client-side validation
            if (!name || !phone || !bookingDate || !condition) {
                const requiredFieldsMessage = {
                    'en': 'Please fill in all required fields.',
                    'ar': 'الرجاء تعبئة جميع الحقول المطلوبة.'
                };
                alert(requiredFieldsMessage[currentLang]);
                return; // Stop the function if validation fails
            }

            // --- Open WhatsApp with pre-written message ---

            // Step 1: Define the target WhatsApp number (with country code)
            const whatsappNumber = '201022562927';

            // Step 2: Construct the pre-written message
            const whatsappMessage = `
طلب حجز موعد جديد:
الاسم: ${name}
رقم الهاتف: ${phone}
التاريخ المفضل: ${bookingDate}
الحالة/الوصف: ${condition}
`;
            // Step 3: Encode the message for a URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Step 4: Create the WhatsApp link
            // Note: wa.me requires the number *without* the leading '+'
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Step 5: Open the WhatsApp link in a new tab/window
            window.open(whatsappLink, '_blank');

            // Optional: Display a small alert to inform the user that WhatsApp is opening
            const whatsappOpeningMessage = {
                'en': 'Opening WhatsApp to send your booking request. Please press send in WhatsApp.',
                'ar': 'جارٍ فتح الواتساب لإرسال طلب حجزك. الرجاء الضغط على إرسال في الواتساب.'
            };
            alert(whatsappOpeningMessage[currentLang]);

            // Step 6: Clear the form fields after attempting to open WhatsApp
            bookingForm.reset();

            /*
            // --- Backend Integration (Optional - Uncomment if you have a backend) ---
            fetch('/submit-booking', { // Replace '/submit-booking' with your actual backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, bookingDate, condition }),
            })
            .then(response => {
                if (!response.ok) { // Check if response was successful
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                const successMessage = {
                    'en': 'Your booking request has been received successfully! We will contact you soon.',
                    'ar': 'تم استلام طلب الحجز بنجاح! سنتصل بك قريباً.'
                };
                alert(successMessage[currentLang]);
                bookingForm.reset(); // Clear the form fields ONLY ON SUCCESS
            })
            .catch((error) => {
                console.error('Error:', error);
                const errorMessage = {
                    'en': 'An error occurred while submitting your booking request. Please try again.',
                    'ar': 'حدث خطأ أثناء إرسال طلب الحجز. الرجاء المحاولة مرة أخرى.'
                };
                alert(errorMessage[currentLang]);
            });
            */
        });
    }

    // Check if there's a hash in the URL on page load and scroll to it
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // Remove '#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Check if on exercises.html and ensure modal is hidden by default
    if (document.body.id === 'exercises-page') {
        if (exerciseModal) {
            exerciseModal.style.display = 'none';
        }
    }

    // Close the menu after clicking a link
    const navLinksList = document.querySelectorAll('.nav-links a');

    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburgerMenu.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
    // --- Smooth Section Reveal on Scroll ---
    const sections = document.querySelectorAll("section, .exercise-card, .team-member, .service-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));

}); // End of main DOMContentLoaded event listener