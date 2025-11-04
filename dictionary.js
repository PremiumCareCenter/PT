// dictionary.js

const dictionary = {
    'en': {
        // General
        'logo': 'Premium Care',
        'lang_switch': 'العربية',
        'cta_main': 'Book Now',
        'footer_copy': '© 2025 Premium Care Physiotherapy. All rights reserved.',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Service',
        'learn_more': 'Learn More',

        // Meta Description (index.html)
        'main_page_description': 'Premium Care Physiotherapy and Rehabilitation Center. Offering specialized services, expert team, and detailed exercises for recovery.',
        'main_page_title': 'Premium Care | Physiotherapy Center',


        // Navbar Links (index.html & exercises.html)
        'nav_services': 'Services',
        'nav_location': 'Location & Hours',
        'nav_team': 'Our Team',
        'nav_exercises': 'Exercises',
        'nav_book': 'Book',
        'nav_contact': 'Contact',

        // Hero Section (index.html)
        'hero_title': 'Expert Physiotherapy & Rehabilitation Center',
        'hero_subtitle': 'Your journey to recovery starts with Premium Care.',
        'cta_hero': 'Start Your Booking',

        // Services Section (index.html)
        'sec_services_title': 'Our Specialized Services',
        'service_1_title': 'Manual Therapy',
        'service_1_desc': 'Hands-on techniques for joint mobilization and soft tissue release.',
        'service_2_title': 'Electrotherapy',
        'service_2_desc': 'Using advanced devices like ultrasound and TENS for pain management.',
        'service_3_title': 'Post-Surgical Rehabilitation',
        'service_3_desc': 'Structured programs to regain strength and mobility after operations.',
        'service_4_title': 'Clinical Nutrition',
        'service_4_desc': 'Personalized nutrition plans for weight adjustment and overall health.',
        'service_5_title': 'Sports Injuries',
        'service_5_desc': 'Comprehensive care for athletic injuries to ensure a safe return to activity.',
        'service_6_title': 'Neurological Rehabilitation',
        'service_6_desc': 'Specialized therapies for stroke, MS, and other neurological conditions.',

        // Location & Hours Section (index.html)
        'sec_location_title': 'Location & Working Hours',
        'location_address_title': 'Our Location',
        'location_address_details': 'El-Moatasem, Luxor City, Luxor, Luxor Governorate',
        'hours_title': 'Working Hours',
        'hour_sat': 'Saturday <span>5:00 PM – 10:00 PM</span>',
        'hour_sun': 'Sunday <span>Closed</span>',
        'hour_mon': 'Monday <span>5:00 PM – 10:00 PM</span>',
        'hour_tue': 'Tuesday <span>5:00 PM – 10:00 PM</span>',
        'hour_wed': 'Wednesday <span>5:00 PM – 10:00 PM</span>',
        'hour_thu': 'Thursday <span>5:00 PM – 10:00 PM</span>',
        'hour_fri': 'Friday <span>5:00 PM – 10:00 PM</span>',

        // Team Section (index.html)
        'sec_team_title': 'Meet Our Certified Team',
        'team_1_name': 'Dr. Abanoub Emad',
        'team_1_title': 'Certified Physical Therapist',
        'team_1_focus': 'Specializes in Spine injuries & Neurological rehabilitation & Clinical nutrition.',
        'team_2_name': 'Dr. Christen Nasr',
        'team_2_title': 'Certified physical therapist',
        'team_2_focus': 'specializes in Orthopedic & Post-surgical Rehab.',

        // Booking Section (index.html)
        'sec_book_title': 'Request Your Appointment',
        'form_name_placeholder': 'Full Name',
        'form_phone_placeholder': 'Phone Number',
        'form_date_placeholder': 'Select a Date',
        'form_cond_placeholder': 'Briefly describe your condition (e.g., lower back pain, knee replacement follow-up)',
        'form_submit': 'Submit Booking Request',

        // Contact Section (index.html)
        'sec_contact_title': 'Contact & Support',
        'contact_phone_display': 'Phone: <a href="tel:+20 10 22562927">+20 10 22562927</a>',
        'contact_email': 'Email: premiumcarept.center@gmail.com',
        'facebook_page': 'Facebook: <a href="https://www.facebook.com/share/1KHVbbyh4T/" target="_blank">Premium Care PT Center</a>',

        // Exercises Page (exercises.html)
        'sec_exercises_title': 'Common Physiotherapy Exercises',
        'sec_exercises_subtitle': 'Understand the physics behind your recovery.',

        'ex_1_title': 'The Plank',
        'ex_1_desc': '<strong>Physics:</strong> Engages core muscles (rectus abdominis, obliques) isometrically. The goal is to maintain a neutral spine against gravity, increasing muscles\' time under tension for stability and endurance, not strength.',
        'ex_1_full_desc': `
            <p>The Plank is a fundamental exercise for strengthening the entire core, including the rectus abdominis, obliques, and transverse abdominis. It's an isometric exercise, meaning the muscles contract without changing length, providing static strength and endurance.</p>
            <p><strong>How to perform:</strong> Start in a push-up position, but support your weight on your forearms instead of your hands. Keep your body in a straight line from head to heels, engaging your core and glutes. Avoid sagging your hips or raising your rear too high. Hold for 30-60 seconds, or as tolerated.</p>
            <p><strong>Benefits:</strong> Improves core stability, reduces back pain, enhances posture, and builds overall body endurance. It's crucial for preventing injuries and supporting dynamic movements.</p>
        `,

        'ex_2_title': 'Terminal Knee Extension (TKE)',
        'ex_2_desc': '<strong>Physics:</strong> Targets the vastus medialis obliquus (VMO) of the quadriceps. By focusing on the last 30 degrees of extension, it applies mechanical load specifically to improve patellar tracking and stability around the kneecap, crucial for arthritis and post-surgical recovery.',
        'ex_2_full_desc': `
            <p>Terminal Knee Extension (TKE) focuses on activating the vastus medialis obliquus (VMO), a crucial part of the quadriceps that helps stabilize the kneecap. This exercise is particularly important for individuals recovering from knee injuries, surgery, or those with patellofemoral pain syndrome.</p>
            <p><strong>How to perform:</strong> Sit on the floor with one leg straight and the other bent. Place a rolled towel or foam roller under the knee of the straight leg. Press your knee down into the towel, lifting your heel slightly off the floor, and hold the contraction for 5-10 seconds. Focus on squeezing your quadriceps, especially the muscle just above your inner knee. Relax and repeat 10-15 times.</p>
            <p><strong>Benefits:</strong> Strengthens the VMO, improves patellar tracking, reduces knee pain, and enhances knee joint stability. It's often prescribed as a rehabilitation exercise to restore full knee extension and function.</p>
        `,

        'ex_3_title': 'Scapular Squeezes',
        'ex_3_desc': '<strong>Physics:</strong> Activates the rhomboids and middle trapezius. This exercise focuses on retracting and depressing the scapula to improve posture and create a stable base for the rotator cuff, following the principle of proximal stability for distal mobility.',
        'ex_3_full_desc': `
            <p>Scapular squeezes, or shoulder blade squeezes, are effective for strengthening the muscles that support your shoulder blades, primarily the rhomboids and middle trapezius. These muscles are vital for good posture, shoulder stability, and preventing shoulder and neck pain.</p>
            <p><strong>How to perform:</strong> Sit or stand tall with your shoulders relaxed. Gently squeeze your shoulder blades together and slightly down, as if trying to hold a pencil between them. Avoid shrugging your shoulders up towards your ears. Hold the squeeze for 5-10 seconds, then release slowly. Repeat for 10-15 repetitions.</p>
            <p><strong>Benefits:</strong> Improves posture, strengthens upper back muscles, reduces rounded shoulders, alleviates neck and shoulder tension, and enhances overall shoulder function by stabilizing the scapula.</p>
        `,

        'ex_4_title': 'Glute Bridges',
        'ex_4_desc': '<strong>Physics:</strong> Primarily targets the gluteus maximus and hamstrings. This exercise works by extending the hips against gravity, strengthening the posterior chain muscles which are vital for lumbar stability, hip extension power, and preventing lower back pain by improving muscle imbalances.',
        'ex_4_full_desc': `
            <p>Glute bridges are a fantastic exercise for activating and strengthening the gluteal muscles (gluteus maximus, medius, and minimus) and hamstrings. They are crucial for improving hip extension, core stability, and can help alleviate lower back pain by strengthening supporting muscles.</p>
            <p><strong>How to perform:</strong> Lie on your back with your knees bent and feet flat on the floor, hip-width apart. Your arms should be by your sides with palms down. Engage your core and glutes, then lift your hips off the floor until your body forms a straight line from your shoulders to your knees. Squeeze your glutes at the top. Slowly lower back down. Perform 2-3 sets of 10-15 repetitions.</p>
            <p><strong>Benefits:</strong> Strengthens glutes and hamstrings, improves hip mobility, enhances core stability, can reduce lower back pain, and is a great preparatory exercise for squats and deadlifts.</p>
        `,

        'ex_5_title': 'Bird-Dog',
        'ex_5_desc': '<strong>Physics:</strong> A core stability exercise that improves lumbopelvic control and balance. It challenges the deep core stabilizers (transversus abdominis, multifidus) to maintain a neutral spine while moving the limbs, enhancing proprioception and dynamic stability.',
        'ex_5_full_desc': `
            <p>The Bird-Dog exercise is a highly effective movement for improving core stability, balance, and coordination. It targets the deep core muscles, including the transversus abdominis and multifidus, which are essential for maintaining a stable spine and preventing lower back issues.</p>
            <p><strong>How to perform:</strong> Start on your hands and knees, with your hands directly under your shoulders and knees under your hips. Keep your back flat and your core engaged. Slowly extend one arm straight forward and the opposite leg straight back, keeping both parallel to the floor. Maintain a stable torso without tilting your hips. Hold for a few seconds, then slowly return to the starting position. Alternate sides. Perform 2-3 sets of 8-12 repetitions per side.</p>
            <p><strong>Benefits:</strong> Strengthens core muscles, improves balance and coordination, enhances spinal stability, and can help reduce lower back pain. It's a gentle yet powerful exercise for functional movement.</p>
        `,

        'ex_6_title': 'Squatting',
        'ex_6_desc': '<strong>Physics:</strong> The squat is a fundamental full-body exercise that involves lowering your hips from a standing position and then standing back up. It primarily targets the quadriceps, hamstrings, gluteus maximus, and core muscles. The exercise utilizes the movement against gravitational forces to build strength, power, and endurance in the lower body while also engaging stabilizing muscles for balance and coordination.',
        'ex_6_full_desc': `
            <p>Squats are an excellent exercise for improving lower body strength, stability, and mobility. They target multiple muscle groups, including the quadriceps, hamstrings, gluteus maximus, and core, making them a highly effective functional movement.</p>
            <p><strong>How to perform:</strong> Stand with your feet shoulder-width apart and your toes slightly pointed outward. Engage your core and keep your chest up as you lower your hips back and down, as if sitting into a chair. Keep your weight on your heels and ensure your knees track over your toes. Lower down until your thighs are parallel to the ground (or as low as you can comfortably go), then push through your heels to return to the starting position. Perform 2-3 sets of 10-15 repetitions.</p>
            <p><strong>Benefits:</strong> Builds lower body strength, improves balance and coordination, enhances core stability, and can help prevent injuries by promoting proper movement patterns.</p>
        `,
    },
    'ar': {
        // General
        'logo': 'بريميوم كير',
        'lang_switch': 'English',
        'cta_main': 'احجز الآن',
        'footer_copy': '© 2025 بريميوم كير للعلاج الطبيعي. جميع الحقوق محفوظة.',
        'footer_privacy': 'سياسة الخصوصية',
        'footer_terms': 'شروط الخدمة',
        'learn_more': 'تعلم المزيد',

        // Meta Description (index.html)
        'main_page_description': 'مركز بريميوم كير للعلاج الطبيعي وإعادة التأهيل. نقدم خدمات متخصصة، فريق خبراء، وتمارين مفصلة للتعافي.',
        'main_page_title': 'بريميوم كير | مركز العلاج الطبيعي',

        // Navbar Links (index.html & exercises.html)
        'nav_services': 'الخدمات',
        'nav_location': 'الموقع وساعات العمل',
        'nav_team': 'فريقنا',
        'nav_exercises': 'التمارين',
        'nav_book': 'حجز موعد',
        'nav_contact': 'اتصل بنا',

        // Hero Section (index.html)
        'hero_title': 'مركز خبير للعلاج الطبيعي وإعادة التأهيل',
        'hero_subtitle': 'رحلتك نحو التعافي تبدأ مع بريميوم كير.',
        'cta_hero': 'ابدأ حجز موعدك',

        // Services Section (index.html)
        'sec_services_title': 'خدماتنا المتخصصة',
        'service_1_title': 'العلاج اليدوي',
        'service_1_desc': 'تقنيات يدوية لتعبئة المفاصل وتحرير الأنسجة الرخوة.',
        'service_2_title': 'العلاج الكهربائي',
        'service_2_desc': 'استخدام أجهزة متقدمة مثل الموجات فوق الصوتية و TENS لتخفيف الألم.',
        'service_3_title': 'إعادة التأهيل بعد الجراحة',
        'service_3_desc': 'برامج منظمة لاستعادة القوة والحركة بعد العمليات.',
        'service_4_title': 'التغذية السريرية',
        'service_4_desc': 'خطط تغذية مخصصة لتعديل الوزن والصحة العامة.',
        'service_5_title': 'الإصابات الرياضية',
        'service_5_desc': 'رعاية شاملة للإصابات الرياضية لضمان عودة آمنة للنشاط.',
        'service_6_title': 'إعادة التأهيل العصبي',
        'service_6_desc': 'علاجات متخصصة للسكتة الدماغية، التصلب المتعدد، وحالات عصبية أخرى.',

        // Location & Hours Section (index.html)
        'sec_location_title': 'الموقع وساعات العمل',
        'location_address_title': 'موقعنا',
        'location_address_details': 'المعتصم، مدينة الأقصر، الأقصر، محافظة الأقصر',
        'hours_title': 'ساعات العمل',
        'hour_sat': 'السبت <span>5:00 م – 10:00 م</span>',
        'hour_sun': 'الأحد <span>مغلق</span>',
        'hour_mon': 'الاثنين <span>5:00 م – 10:00 م</span>',
        'hour_tue': 'الثلاثاء <span>5:00 م – 10:00 م</span>',
        'hour_wed': 'الأربعاء <span>5:00 م – 10:00 م</span>',
        'hour_thu': 'الخميس <span>5:00 م – 10:00 م</span>',
        'hour_fri': 'الجمعة <span>5:00 م – 10:00 م</span>',

        // Team Section (index.html)
        'sec_team_title': 'قابل فريقنا المعتمد',
        'team_1_name': 'د. أبانوب عماد',
        'team_1_title': 'أخصائي علاج طبيعي معتمد',
        'team_1_focus': 'متخصص في إصابات العمود الفقري وإعادة التأهيل العصبي والتغذية السريرية.',
        'team_2_name': 'د. كريستين نصر',
        'team_2_title': 'أخصائية علاج طبيعي معتمدة',
        'team_2_focus': 'متخصصة في العظام وإعادة التأهيل بعد الجراحة.',

        // Booking Section (index.html)
        'sec_book_title': 'اطلب موعدك',
        'form_name_placeholder': 'الاسم الكامل',
        'form_phone_placeholder': 'رقم الهاتف',
        'form_date_placeholder': 'اختر تاريخًا',
        'form_cond_placeholder': 'صف حالتك باختصار (مثال: آلام أسفل الظهر، متابعة استبدال الركبة)',
        'form_submit': 'إرسال طلب الحجز',

        // Contact Section (index.html)
        'sec_contact_title': 'تواصل معنا',
        'contact_phone_display': 'الهاتف: <a href="tel:+20 10 22562927">+20 10 22562927</a>',
        'facebook_page': 'فيسبوك: <a href="https://www.facebook.com/share/1KHVbbyh4T/" target="_blank">Premium Care PT Center</a>',

        // Exercises Page (exercises.html)
        'sec_exercises_title': 'تمارين العلاج الطبيعي الشائعة',
        'sec_exercises_subtitle': 'افهم الفيزياء الكامنة وراء تعافيك.',

        'ex_1_title': 'تمرين البلانك (Plank)',
        'ex_1_desc': '<strong>الفيزياء:</strong> يشرك عضلات الجذع (العضلة المستقيمة البطنية والعضلات المائلة) بشكل متساوي القياس. الهدف هو الحفاظ على العمود الفقري في وضع محايد ضد الجاذبية، مما يزيد من وقت بقاء العضلات تحت التوتر لتحقيق الاستقرار والتحمل، وليس القوة.',
        'ex_1_full_desc': `
            <p>تمرين البلانك هو تمرين أساسي لتقوية كامل الجذع، بما في ذلك العضلة المستقيمة البطنية، العضلات المائلة، والعضلة المستعرضة البطنية. إنه تمرين ثابت، مما يعني أن العضلات تنقبض دون تغيير في الطول، مما يوفر قوة تحمل واستقرارًا ثابتًا.</p>
            <p><strong>كيفية الأداء:</strong> ابدأ في وضعية الضغط، ولكن ادعم وزن جسمك على الساعدين بدلاً من اليدين. حافظ على جسمك في خط مستقيم من الرأس إلى الكعبين، مع شد الجذع والأرداف. تجنب ترهل الوركين أو رفع المؤخرة عاليًا جدًا. استمر لمدة 30-60 ثانية، أو حسب قدرتك.</p>
            <p><strong>الفوائد:</strong> يحسن استقرار الجذع، يقلل آلام الظهر، يعزز الوضعية، ويبني قوة تحمل الجسم بشكل عام. إنه ضروري للوقاية من الإصابات ودعم الحركات الديناميكية.</p>
        `,

        'ex_2_title': 'تمديد الركبة النهائي (TKE)',
        'ex_2_desc': '<strong>الفيزياء:</strong> يستهدف العضلة المتسعة الإنسية المائلة (VMO) من العضلة الرباعية. بالتركيز على آخر 30 درجة من التمديد، فإنه يطبق حملاً ميكانيكيًا خصيصًا لتحسين التتبع والاستقرار حول الرضفة (صابونة الركبة)، وهو أمر بالغ الأهمية لالتهاب المفاصل والتعافي بعد الجراحة.',
        'ex_2_full_desc': `
            <p>تمديد الركبة النهائي (TKE) يركز على تنشيط العضلة المتسعة الإنسية المائلة (VMO)، وهي جزء حيوي من العضلة الرباعية يساعد على تثبيت الرضفة. هذا التمرين مهم بشكل خاص للأفراد الذين يتعافون من إصابات الركبة أو الجراحة، أو أولئك الذين يعانون من متلازمة الألم الرضفي الفخذي.</p>
            <p><strong>كيفية الأداء:</strong> اجلس على الأرض مع فرد إحدى الساقين وثني الأخرى. ضع منشفة ملفوفة أو أسطوانة فوم تحت ركبة الساق المفرودة. اضغط ركبتك لأسفل على المنشفة، ارفع كعبك قليلاً عن الأرض، واحتفظ بالانقباض لمدة 5-10 ثوانٍ. ركز على عصر عضلات الفخذ الرباعية، خاصة العضلة الموجودة فوق ركبتك الداخلية مباشرةً. استرخ وكرر 10-15 مرة.</p>
            <p><strong>الفوائد:</strong> يقوي الـ VMO، يحسن تتبع الرضفة، يقلل آلام الركبة، ويعزز استقرار مفصل الركبة. غالبًا ما يوصف كتمرين لإعادة التأهيل لاستعادة التمديد الكامل للركبة ووظيفتها.</p>
        `,

        'ex_3_title': 'عصر لوح الكتف',
        'ex_3_desc': '<strong>الفيزياء:</strong> ينشط العضلات المعينية والعضلة شبه المنحرفة الوسطى. يركز هذا التمرين على سحب وخفض لوح الكتف لتحسين الوضعية وإنشاء قاعدة مستقرة للكفة المدورة، باتباع مبدأ الاستقرار القريب للحركة البعيدة.',
        'ex_3_full_desc': `
            <p>عصر لوح الكتف، أو ضغط لوح الكتف، فعال في تقوية العضلات التي تدعم لوحي كتفك، بشكل أساسي العضلات المعينية والعضلة شبه المنحرفة الوسطى. هذه العضلات حيوية للوضعية الجيدة، استقرار الكتف، والوقاية من آلام الكتف والرقبة.</p>
            <p><strong>كيفية الأداء:</strong> اجلس أو قف بشكل مستقيم مع إرخاء كتفيك. اضغط لوحي كتفك بلطف معًا وإلى الأسفل قليلاً، كما لو كنت تحاول الإمساك بقلم بينهما. تجنب رفع كتفيك نحو أذنيك. استمر في الضغط لمدة 5-10 ثوانٍ، ثم حرر ببطء. كرر 10-15 مرة.</p>
            <p><strong>الفوائد:</strong> يحسن الوضعية، يقوي عضلات الجزء العلوي من الظهر، يقلل من الكتفين المستديرة، يخفف من توتر الرقبة والكتف، ويعزز وظيفة الكتف بشكل عام عن طريق تثبيت لوح الكتف.</p>
        `,
        'ex_4_title': 'جسر الأرداف (Glute Bridges)',
        'ex_4_desc': '<strong>الفيزياء:</strong> يستهدف بشكل أساسي العضلة الألوية الكبرى والعضلات المأبضية. يعمل هذا التمرين عن طريق تمديد الوركين ضد الجاذبية، مما يقوي عضلات السلسلة الخلفية التي تعتبر حيوية لاستقرار أسفل الظهر، وقوة تمديد الورك، ومنع آلام أسفل الظهر عن طريق تحسين اختلالات العضلات.',
        'ex_4_full_desc': `
            <p>تعتبر تمارين جسر الأرداف تمرينًا رائعًا لتنشيط وتقوية عضلات الأرداف (العضلة الألوية الكبرى، الوسطى، والصغرى) والعضلات المأبضية. إنها حاسمة لتحسين تمديد الورك، واستقرار الجذع، ويمكن أن تساعد في تخفيف آلام أسفل الظهر عن طريق تقوية العضلات الداعمة.</p>
            <p><strong>كيفية الأداء:</strong> استلقِ على ظهرك مع ثني ركبتيك ووضع قدميك مسطحتين على الأرض، بعرض الوركين. يجب أن تكون ذراعيك بجانب جسمك مع توجيه راحتي اليد للأسفل. شد جذعك وعضلات الأرداف، ثم ارفع وركيك عن الأرض حتى يشكل جسمك خطًا مستقيمًا من كتفيك إلى ركبتيك. اضغط عضلات الأرداف في الأعلى. اخفض جسمك ببطء إلى الأسفل. قم بأداء 2-3 مجموعات من 10-15 تكرارًا.</p>
            <p><strong>الفوائد:</strong> يقوي عضلات الأرداف والمأبضية، يحسن حركة الورك، يعزز استقرار الجذع، يمكن أن يقلل آلام أسفل الظهر، وهو تمرين تحضيري رائع للقرفصاء والرفعة المميتة.</p>
        `,
        'ex_5_title': 'تمرين الكلب الطائر (Bird-Dog)',
        'ex_5_desc': '<strong>الفيزياء:</strong> تمرين لاستقرار الجذع يحسن التحكم الحوضي القطني والتوازن. يتحدى عضلات الجذع العميقة المستقرة (العضلة المستعرضة البطنية، العضلة متعددة الفصوص) للحفاظ على عمود فقري محايد أثناء تحريك الأطراف، مما يعزز الحس العميق والاستقرار الديناميكي.',
        'ex_5_full_desc': `
            <p>تمرين الكلب الطائر هو حركة فعالة للغاية لتحسين استقرار الجذع والتوازن والتنسيق. يستهدف عضلات الجذع العميقة، بما في ذلك العضلة المستعرضة البطنية والعضلة متعددة الفصوص، وهي ضرورية للحفاظ على عمود فقري مستقر ومنع مشاكل أسفل الظهر.</p>
            <p><strong>كيفية الأداء:</strong> ابدأ على يديك وركبتيك، مع وضع يديك مباشرة تحت كتفيك وركبتيك تحت وركيك. حافظ على ظهرك مستويًا وجذعك مشدودًا. مد ذراعًا واحدًا ببطء إلى الأمام والساق المقابلة للخلف مباشرة، مع إبقاء كلاهما موازيين للأرض. حافظ على جذع مستقر دون إمالة وركيك. استمر لبضع ثوانٍ، ثم عد ببطء إلى وضع البداية. بدل بين الجانبين. قم بأداء 2-3 مجموعات من 8-12 تكرارًا لكل جانب.</p>
            <p><strong>الفوائد:</strong> يقوي عضلات الجذع، يحسن التوازن والتنسيق، يعزز استقرار العمود الفقري، ويمكن أن يساعد في تقليل آلام أسفل الظهر. إنه تمرين لطيف لكنه قوي للحركة الوظيفية.</p>
        `,
        'ex_6_title': 'القرفصاء (Squatting)',
        'ex_6_desc': '<strong>الفيزياء:</strong> تمرين القرفصاء هو تمرين أساسي لكامل الجسم يتضمن خفض وركيك من وضع الوقوف ثم الوقوف مرة أخرى. يستهدف بشكل أساسي عضلات الفخذين الأمامية (الرباعية)، والفخذين الخلفية (أوتار الركبة)، والألوية الكبرى، وعضلات الجذع. يستخدم التمرين الحركة ضد قوى الجاذبية لبناء القوة، والقدرة، والتحمل في الجزء السفلي من الجسم، بينما يشغل أيضًا العضلات المثبتة لتحقيق التوازن والتنسيق.',
        'ex_6_full_desc': `
    <p>يعتبر القرفصاء من التمارين الوظيفية الأساسية التي تحاكي حركات الحياة اليومية، وهو مفيد للغاية لتحسين القوة العامة، واللياقة البدنية، والحفاظ على صحة المفاصل. وهو مناسب للأفراد من جميع المستويات اللياقية ويمكن تعديله ليناسب الاحتياجات المختلفة.</p>
    <p><strong>كيفية الأداء:</strong> قف وقدميك أوسع قليلاً من عرض الكتفين، وأصابع قدميك متجهة قليلاً إلى الخارج. حافظ على استقامة ظهرك وصدرك مرفوعًا. ابدأ بخفض وركيك وكأنك تجلس على كرسي، مع الحفاظ على ركبتيك في خط واحد مع أصابع قدميك ولا تدعهما تتجاوزانها بكثير. استمر في النزول حتى يصبح فخذاك موازيين للأرض أو أدنى قليلاً إذا سمحت مرونتك. ادفع من خلال كعبيك للعودة ببطء إلى وضع الوقوف. حافظ على شد عضلات الجذع طوال الحركة. قم بأداء 3 مجموعات من 8-12 تكرارًا.</p>
    <p><strong>الفوائد:</strong> يبني قوة كبيرة في عضلات الفخذين، المؤخرة، وأوتار الركبة، ويحسن استقرار الجذع، ويعزز المرونة في الوركين والكاحلين. كما أنه يحسن اللياقة الوظيفية، مما يقلل من خطر الإصابات في الأنشطة اليومية والرياضية.</p>
`, // <--- تم تغيير الفاصلة المنقوطة (;) هنا إلى فاصلة (,) إذا كان هناك عنصر آخر بعده، أو لا شيء إذا كان هذا آخر عنصر في الكائن.
    }
};