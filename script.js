// script.js — Premium Care PT Center Phase 1 Rebuild
// All bugs fixed + new features: transparent nav, counters, modals, lightbox, accordion, WhatsApp hide

/* ══════════════════════════════════════════════
   LANGUAGE SYSTEM
══════════════════════════════════════════════ */
let currentLang = localStorage.getItem('pc_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pc_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    updateAllContent();
    updateFooterLinks(lang);
}

function updateAllContent() {
    // Update innerHTML for .data-text elements
    document.querySelectorAll('.data-text').forEach(el => {
        const key = el.dataset.key;
        if (dictionary[currentLang]?.[key] !== undefined) {
            el.innerHTML = dictionary[currentLang][key];
        }
    });
    // Update placeholder for .data-attr elements
    document.querySelectorAll('.data-attr').forEach(el => {
        const key = el.dataset.key;
        const attr = el.dataset.attr || 'placeholder';
        if (dictionary[currentLang]?.[key] !== undefined) {
            el.setAttribute(attr, dictionary[currentLang][key]);
        }
    });
    // Update select options
    document.querySelectorAll('select option.data-text').forEach(el => {
        const key = el.dataset.key;
        if (dictionary[currentLang]?.[key] !== undefined) {
            el.textContent = dictionary[currentLang][key];
        }
    });
    // Update booking date min
    const dateInput = document.getElementById('bookingDate');
    if (dateInput && !dateInput.value) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

function updateFooterLinks(lang) {
    const p = document.getElementById('privacy-policy-link');
    const t = document.getElementById('terms-of-service-link');
    if (p) p.href = `privacy-policy.html?lang=${lang}`;
    if (t) t.href = `terms-of-service.html?lang=${lang}`;
}

/* ══════════════════════════════════════════════
   NAVBAR — scroll behavior + mobile toggle
══════════════════════════════════════════════ */
function initNavbar() {
    const header = document.getElementById('site-header');
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');

    if (!header) return;

    // Transparent on hero, solid on scroll
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.remove('transparent');
            header.classList.add('scrolled');
        } else {
            header.classList.add('transparent');
            header.classList.remove('scrolled');
        }
    }
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    // Mobile hamburger
    function toggleMenu(open) {
        const isOpen = (open !== undefined) ? open : !navLinks.classList.contains('open');
        navLinks.classList.toggle('open', isOpen);
        overlay.classList.toggle('active', isOpen);
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    if (hamburger) hamburger.addEventListener('click', () => toggleMenu());
    if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

    // Close menu on nav link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Active link on scroll (highlight current section)
    const sections = document.querySelectorAll('section[id]');
    function updateActiveLink() {
        const scrollY = window.scrollY + 120;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;
            const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
            if (link) {
                link.classList.toggle('active-nav', scrollY >= top && scrollY < bottom);
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/* ══════════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════════ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        if (link.getAttribute('href') === '#') return;
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    // On load, scroll to hash
    if (window.location.hash) {
        setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

/* ══════════════════════════════════════════════
   ANIMATED COUNTERS
══════════════════════════════════════════════ */
function initCounters() {
    const items = document.querySelectorAll('.stat-item[data-count-target]');
    if (!items.length) return;

    let triggered = false;

    function animateCounter(el) {
        const target = parseInt(el.dataset.countTarget, 10);
        const numEl = el.querySelector('.count-number');
        if (!numEl) return;
        const duration = 1800;
        const start = performance.now();
        function step(ts) {
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            numEl.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting) && !triggered) {
            triggered = true;
            items.forEach(animateCounter);
        }
    }, { threshold: 0.4 });

    items.forEach(item => observer.observe(item));
}

/* ══════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════ */
function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger siblings in the same grid
                const parent = entry.target.parentElement;
                const siblings = parent ? [...parent.querySelectorAll('.reveal')] : [];
                const idx = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${idx * 80}ms`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   SERVICE MODALS
══════════════════════════════════════════════ */
const serviceIcons = ['', 'fa-hands', 'fa-bolt', 'fa-person-walking-with-cane', 'fa-apple-whole', 'fa-person-running', 'fa-brain'];

function openServiceModal(num) {
    const modal = document.getElementById('service-modal');
    const titleEl = document.getElementById('service-modal-title');
    const bodyEl = document.getElementById('service-modal-body');
    const iconEl = document.querySelector('.modal-service-icon');

    if (!modal || !titleEl || !bodyEl) return;

    const lang = dictionary[currentLang];
    titleEl.textContent = lang[`service_${num}_title`] || '';
    bodyEl.innerHTML = lang[`service_${num}_modal_full`] || '';
    if (iconEl) {
        iconEl.className = `modal-service-icon fas ${serviceIcons[num] || 'fa-stethoscope'}`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
}

window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;

function initServiceModal() {
    const modal = document.getElementById('service-modal');
    const closeBtn = document.getElementById('service-modal-close');
    if (!modal) return;
    closeBtn?.addEventListener('click', closeServiceModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeServiceModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeServiceModal();
    });
}

/* ══════════════════════════════════════════════
   GALLERY LIGHTBOX
══════════════════════════════════════════════ */
function openLightbox(item) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (!lightbox || !img) return;

    const srcImg = item.querySelector('img');
    const capEl = item.querySelector('.gallery-overlay span');
    img.src = srcImg?.src || '';
    img.alt = srcImg?.alt || '';
    if (caption) caption.textContent = capEl?.textContent || '';

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

function initLightbox() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox();
    });
}

/* ══════════════════════════════════════════════
   FIRST VISIT ACCORDION
══════════════════════════════════════════════ */
function initAccordion() {
    const toggle = document.getElementById('first-visit-toggle');
    const content = document.getElementById('first-visit-content');
    if (!toggle || !content) return;

    toggle.addEventListener('click', () => {
        const isOpen = content.classList.contains('open');
        content.classList.toggle('open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
    });
}

/* ══════════════════════════════════════════════
   BOOKING FORM — WhatsApp submit
══════════════════════════════════════════════ */
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    // Set min date to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // ── Category toggle logic ──
    const categoryBtns = document.querySelectorAll('.category-btn');
    const serviceInput  = document.getElementById('bookingService');
    const complaintGroup = document.getElementById('complaintGroup');
    const conditionField = document.getElementById('condition');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            categoryBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            serviceInput.value = this.dataset.value;

            const isPT = this.dataset.value === 'Physiotherapy';
            complaintGroup.style.display = isPT ? '' : 'none';
            if (!isPT && conditionField) conditionField.value = '';
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name    = document.getElementById('name')?.value?.trim();
        const phone   = document.getElementById('phone')?.value?.trim();
        const date    = document.getElementById('bookingDate')?.value;
        const service = serviceInput?.value;
        const time    = document.getElementById('bookingTime')?.value;
        const condition = conditionField?.value?.trim();

        const isPT = service === 'Physiotherapy';

        if (!name || !phone || !date || !service) {
            alert(dictionary[currentLang]?.book_fill_all || 'Please fill in all required fields.');
            return;
        }
        if (isPT && !condition) {
            alert(dictionary[currentLang]?.book_fill_complaint || 'Please briefly describe your main complaint so the doctor can prepare.');
            return;
        }

        const whatsappNumber = '201022562927';
        const timeText      = time      ? `\nالوقت المفضل / Preferred time: ${time}` : '';
        const complaintText = (isPT && condition) ? `\n📝 الشكوى الرئيسية / Main Complaint: ${condition}` : '';

        const serviceAR = isPT
            ? 'علاج طبيعي / Physiotherapy'
            : 'تغذية علاجية / Nutrition';

        const message =
`🏥 *Premium Care PT Center — طلب حجز / Booking Request*

👤 الاسم / Name: ${name}
📞 الهاتف / Phone: ${phone}
📅 التاريخ / Date: ${date}
🏷️ الخدمة / Service: ${serviceAR}${timeText}${complaintText}`;

        const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(link, '_blank', 'noopener,noreferrer');

        alert(dictionary[currentLang]?.book_whatsapp_confirm || 'Opening WhatsApp. Please press Send.');
        form.reset();
        categoryBtns.forEach(b => b.classList.remove('selected'));
        serviceInput.value = '';
        complaintGroup.style.display = 'none';
    });
}

/* ══════════════════════════════════════════════
   FLOATING WHATSAPP — hide near contact section
══════════════════════════════════════════════ */
function initFloatingWhatsapp() {
    const btn = document.getElementById('whatsapp-float');
    const contact = document.getElementById('contact');
    if (!btn || !contact) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            btn.classList.toggle('hide', e.isIntersecting);
        });
    }, { threshold: 0.3 });

    observer.observe(contact);
}

/* ══════════════════════════════════════════════
   LANG SWITCH BUTTON
══════════════════════════════════════════════ */
function initLangSwitch() {
    const btn = document.getElementById('lang-switch');
    if (!btn) return;
    btn.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
}

/* ══════════════════════════════════════════════
   EXERCISES PAGE — modal system (re-used)
══════════════════════════════════════════════ */
window.setModalContent = function (titleKey, descKey) {
    const modal = document.getElementById('exerciseModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDescription');
    if (!modal || !title || !desc) return;
    const lang = dictionary[currentLang];
    if (lang?.[titleKey]) title.innerHTML = lang[titleKey];
    if (lang?.[descKey]) desc.innerHTML = lang[descKey];
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

function initExerciseModal() {
    const modal = document.getElementById('exerciseModal');
    const closeBtn = document.querySelector('.close-button');
    if (!modal) return;
    modal.style.display = 'none';

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ══════════════════════════════════════════════
   INIT — DOM READY
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    // Language first
    setLanguage(currentLang);
    initLangSwitch();

    // Navigation
    initNavbar();
    initSmoothScroll();

    // Animations & interactions
    initReveal();
    initCounters();

    // Modals & overlays
    initServiceModal();
    initLightbox();
    initAccordion();

    // Forms
    initBookingForm();

    // Floating elements
    initFloatingWhatsapp();

    // Exercises page modal
    initExerciseModal();

    // Auto-update copyright year dynamically
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('[data-key="footer_copy"]').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/\d{4}/, currentYear);
    });

    // On exercises page: suppress scroll-spy overriding active-nav set in HTML
    if (document.body.id === 'exercises-body') {
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active-nav');
        });
        const exercisesLink = document.querySelector('.nav-links a[href="exercises.html"]');
        if (exercisesLink) exercisesLink.classList.add('active-nav');
    }
});
