// script.js

// Make sure dictionary.js is loaded BEFORE script.js in your HTML
// <script src="dictionary.js"></script>
// <script src="script.js"></script>

// --- Global Variables and Initial Language Setup ---
// Initialize currentLang from localStorage or default to 'en'
let currentLang = localStorage.getItem('lang') || 'en';
const langSwitchButton = document.getElementById('lang-switch');

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

    // Explicitly update the main page title (if needed, otherwise rely on data-text on a visible element)
    // If your <title> tag in HTML head needs translation, you would do it here:
    // const headTitle = document.querySelector('head title');
    // if (headTitle && dictionary[currentLang] && dictionary[currentLang]['page_title_key']) {
    //     headTitle.textContent = dictionary[currentLang]['page_title_key'];
    // }
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

// --- Smooth Scrolling & Page Navigation Logic ---
// Function to handle smooth scrolling or page navigation for anchor links
function handleNavLinkClick(e) {
    e.preventDefault(); // Prevent default link behavior

    const href = this.getAttribute('href');
    const parts = href.split('#');
    const page = parts[0]; // e.g., 'index.html' or ''
    const hash = parts[1]; // e.g., 'services' or undefined

    // Determine the current page
    const currentPagePath = window.location.pathname.split('/').pop(); // 'index.html' or 'exercises.html'

    // If the link points to a different page (e.g., from exercises.html to index.html#services)
    if (page && page !== currentPagePath) {
        window.location.href = href; // Navigate to the new page with the hash
    }
    // If the link points to the current page AND has a hash (e.g., index.html#services from index.html)
    else if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Update URL hash without causing a full page reload
            history.pushState(null, null, `#${hash}`);
        }
    } else if (!page && hash) { // Handle links like simply '#services' on the current page
        const targetElement = document.getElementById(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, null, `#${hash}`);
        }
    } else if (page && !hash) { // Handle links like 'index.html' without a hash
        window.location.href = href; // Just navigate to the page
    }
}


// --- Modal Logic for Exercises Page ---
// window.setModalContent is globally defined in your original code, so it's good.
window.setModalContent = function (titleKey, descKey) {
    if (modalTitle && modalDescription && exerciseModal && dictionary[currentLang] && dictionary[currentLang][titleKey] && dictionary[currentLang][descKey]) {
        modalTitle.innerHTML = dictionary[currentLang][titleKey];
        modalDescription.innerHTML = dictionary[currentLang][descKey];
        exerciseModal.style.display = 'block'; // Show the modal
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


    // --- Attach Event Listeners to Navigation Links ---
    // Select ALL navigation links that might point to sections or other pages
    document.querySelectorAll('.site-header .nav-links a, .site-header .logo').forEach(link => {
        // Ensure the link actually has an href attribute to prevent errors
        if (link.hasAttribute('href')) {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                // Links starting with '#' (but not just '#') are local anchors on the current page
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1); // Remove '#'
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        history.pushState(null, null, `#${targetId}`);
                    }
                });
            } else if (href.includes('index.html#') || href === 'index.html' || href === 'exercises.html' || href === 'index.html#') {
                // Links that point to index.html with or without a hash, or exercises.html
                link.addEventListener('click', handleNavLinkClick);
            }
        }
    });

    // Fallback for any other links with href starting with '#' not caught by the above loop
    // (e.g., if you have internal links not within .site-header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#') return; // Exclude blank links

        // Check if this anchor already has a click listener from the main navigation loop
        // This is a simple check; a more robust solution might involve a class or data attribute
        // For now, if the href matches patterns handled above, we might skip to avoid double listeners
        const href = anchor.getAttribute('href');
        if (!anchor.closest('.site-header') && href.startsWith('#')) { // Only process if not already covered by site-header
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1); // Remove the '#'
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, `#${targetId}`);
                }
            });
        }
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

            // Step 1: Define the target WhatsApp number (include country code without '+')
            //         *** IMPORTANT: Replace '963999999999' with your actual WhatsApp number. ***
            const whatsappNumber = '+201022562927';

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

            // --- Backend Integration (Optional - Uncomment if you have a backend) ---
            /*
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
            // For initial load, we might not want to pushState if it's already in the URL
            // history.replaceState(null, null, `#${targetId}`); 
        }
    }

    // Check if on exercises.html and initialize modal display logic
    // Ensure modal is hidden by default if on this page
    if (document.body.id === 'exercises-page') {
        if (exerciseModal) {
            exerciseModal.style.display = 'none';
        }
    }

    // No need to call updateFlatpickrLocale(currentLang) here, as setLanguage(currentLang)
    // already calls it at the very beginning of DOMContentLoaded.
}); // End of main DOMContentLoaded