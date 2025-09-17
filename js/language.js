// Language Translation System
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.translations = {
            en: {
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.about': 'About',
                'nav.contact': 'Contact Us',
                'hero.lets_enjoy': "Discover Azerbaijan's",
                'hero.trip_in': 'Most Beautiful Places in',
                'form.destination': 'Destination',
                'form.date': 'Date',
                'form.people': '# of People',
                'form.search': 'Search',
                'form.save_search': 'Save this search',
                'dest.gabala': 'Mountain Tourism',
                'dest.shaki': 'Cultural Heritage',
                'dest.lankaran': 'Coastal Area',
                'dest.naftalan': 'Health Tourism',
                'dest.quba': 'Natural Beauty',
                'package.gabala': 'Gabala Mountain Tourism',
                'package.shaki': 'Shaki Palace',
                'package.lankaran': 'Lankaran Coast',
                'package.naftalan': 'Naftalan Health',
                'package.ismayilli': 'Ismayilli Mountain Tourism',
                'package.ask_price': 'Ask for Price',
                'meta.title': 'KONAQLY - Azerbaijan\'s Most Beautiful Recreation Areas',
                'meta.description': 'KONAQLY - Azerbaijan\'s most beautiful recreation areas, natural beauties and cultural sites. Gabala, Shaki, Lankaran, Naftalan and other popular places.',
                'meta.keywords': 'azerbaijan, recreation, nature, gabala, shaki, lankaran, naftalan, konaqly, tourism',
                'features.hotels': 'Luxury Hotels',
                'features.hotels_desc': 'Comfortable accommodation in Azerbaijan\'s best hotels.',
                'features.cuisine': 'Traditional Cuisine',
                'features.cuisine_desc': 'We bring you the taste of traditional Azerbaijani cuisine.',
                'features.tours': 'Nature Tours',
                'features.tours_desc': 'Discover the natural beauties of Azerbaijan.',
                'features.support': '24/7 Support',
                'features.support_desc': 'We are always with you.',
                'stats.travels': 'Number of Trips',
                'stats.clients': 'Number of Clients',
                'stats.destinations': 'Recreation Areas',
                'stats.experience': 'Years of Experience',
                'sections.destinations': 'Popular Recreation Areas',
                'sections.offers': 'Special Offers & Discounts',
                'sections.offers_desc': 'Experience unforgettable moments in Azerbaijan\'s most beautiful recreation areas. We provide you with the best service with our special packages and discounts.',
                'sections.video_title': 'Discover Azerbaijan\'s Nature',
                'sections.video_desc1': 'Discover the miraculous nature and cultural heritage of Azerbaijan. There is beauty everywhere from the mountains of Gabala to the shores of Lankaran.',
                'sections.video_desc2': 'Visit the most beautiful places of Azerbaijan with KONAQLY and create unforgettable memories. Our professional guides will provide you with the best experience.',
                'sections.cta_title': 'Discover the Best. Contact Us Now',
                'sections.cta_desc': 'Experience unforgettable moments in Azerbaijan\'s most beautiful recreation areas. KONAQLY provides you with the best service.',
                'footer.about': 'About KONAQLY',
                'footer.about_desc': 'Experience unforgettable moments in Azerbaijan\'s most beautiful recreation areas. We have been providing you with the best service for 15 years.',
                'footer.pages': 'Pages',
                'footer.services': 'Services',
                'footer.contact': 'Contact',
                'footer.copyright': 'KONAQLY RESERVATIONS BRAND BY AZERBAIJAN',
                'services.mountain': 'Mountain Tourism',
                'services.coastal': 'Coastal Tours',
                'services.cultural': 'Cultural Tours',
                'services.car_rental': 'Car Rental',
                'services.cruise': 'Cruise Trips',
                'services.luxury_hotels': 'Luxury Hotels',
                'services.railway': 'Railway',
                'services.insurance': 'Travel Insurance',
                'services.package_tours': 'Package Tours',
                'services.health_tourism': 'Health Tourism',
                'services.guide_books': 'Guide Books',
                'services.restaurants': 'Special Restaurant Meals',
                'services.viano': 'Special Viano Welcome',
                'services.partners': 'Partner Restaurants',
                'services.premium': 'Premium Services',
                'services.concierge': '24/7 Concierge Service',
                'services.transfer': 'Airport Transfer',
                'details.mountain_title': 'Mountain Tourism',
                'details.mountain_desc': 'Adventure tours in Gabala, Quba, Baku mountains. Natural beauty at 3000m altitude.',
                'details.beach_title': 'Beach Tourism',
                'details.beach_desc': 'Relaxation on Lankaran, Astara shores. Beautiful views of the Caspian Sea.',
                'details.health_title': 'Health Tourism',
                'details.health_desc': 'Naftalan oil, Gabala mineral waters. Natural treatment centers.',
                'details.culture_title': 'Cultural Tours',
                'details.culture_desc': 'Shaki Palace, Gobustan rock paintings, Baku city. Historical monuments.',
                'details.premium_title': 'Our Premium Services',
                'stats.tours': 'Tours',
                'stats.customers': 'Customers',
                'stats.destinations': 'Places',
                'buttons.start': 'Get Started',
                'buttons.contact': 'Get in touch',
                'buttons.cancel': 'Cancel',
                'buttons.send_whatsapp': 'Send to WhatsApp',
                'modal.customer_title': 'Complete Your Information',
                'modal.search_info': 'Search Details',
                'form.first_name': 'First Name',
                'form.last_name': 'Last Name',
                'form.phone': 'Phone Number',
                'form.email': 'Email (Optional)',
                'form.message': 'Additional Message (Optional)',
                'packages.special_title': 'Special Packages',
                'packages.luxury_guide': 'Luxury Guide Service',
                'packages.luxury_guide_desc': 'Private tour with professional guide',
                'packages.premium_transfer': 'Premium Transfer',
                'packages.premium_transfer_desc': 'Transfer with luxury car',
                'packages.gourmet_dining': 'Gourmet Dining',
                'packages.gourmet_dining_desc': 'Special meals at famous restaurants',
                'packages.photo_service': 'Photo Service',
                'packages.photo_service_desc': 'Memories with professional photographer',
                'packages.luxury_accommodation': 'Luxury Accommodation',
                'packages.luxury_accommodation_desc': 'Stay at 5-star hotels',
                'packages.helicopter_tour': 'Helicopter Tour',
                'packages.helicopter_tour_desc': 'Aerial view of Azerbaijan',
                'footer.blog': 'Blog',
                'footer.about_us': 'About Us',
                'footer.contact_us': 'Contact Us',
                'footer.location': 'Baku, Azerbaijan',
                'about.title': 'About KONAQLY',
                'about.subtitle': 'Experience unforgettable moments in Azerbaijan\'s most beautiful recreation areas.',
                'about.main_title': 'About KONAQLY',
                'about.description': 'KONAQLY was created to experience unforgettable moments in Azerbaijan\'s most beautiful recreation areas. We have been providing the best service to our customers for 15 years. Discover all the beautiful places from Gabala to Lankaran.',
                'about.service1': 'Mountain Tourism',
                'about.service2': 'Coastal Tours',
                'about.service3': 'Cultural Tours',
                'about.service4': 'Health Tourism',
                'about.service5': 'Car Rental',
                'about.service6': 'Luxury Hotels',
                'about.service7': 'Travel Insurance',
                'about.service8': 'Package Tours',
                'about.service9': 'Guide Service',
                'about.service10': '24/7 Support',
                'about.team_title': 'Our Team',
                'about.team_desc': 'Our professional team is dedicated to providing you with the best travel experience in Azerbaijan.',
                'team.member1_name': 'James Watson',
                'team.member1_title': 'Co-Founder & CEO',
                'team.member2_name': 'Carl Anderson',
                'team.member2_title': 'Co-Founder & CEO',
                'team.member3_name': 'Michelle Allison',
                'team.member3_title': 'Co-Founder & CEO',
                'team.member4_name': 'Drew Wood',
                'team.member4_title': 'Co-Founder & CEO',
                'services.title': 'Our Services',
                'services.subtitle': 'We provide the best services in Azerbaijan\'s most beautiful recreation areas.',
                'contact.title': 'Contact Us',
                'contact.subtitle': 'Get in touch with us for the best travel experience in Azerbaijan.',
                'elements.title': 'Elements',
                'elements.subtitle': 'Explore our website elements and components.'
            },
            ar: {
                'nav.home': 'الرئيسية',
                'nav.services': 'الخدمات',
                'nav.about': 'حول',
                'nav.contact': 'اتصل بنا',
                'hero.lets_enjoy': 'اكتشف أجمل',
                'hero.trip_in': 'أماكن أذربيجان في',
                'form.destination': 'الوجهة',
                'form.date': 'التاريخ',
                'form.people': 'عدد الأشخاص',
                'form.search': 'بحث',
                'form.save_search': 'احفظ هذا البحث',
                'dest.gabala': 'السياحة الجبلية',
                'dest.shaki': 'التراث الثقافي',
                'dest.lankaran': 'المنطقة الساحلية',
                'dest.naftalan': 'السياحة العلاجية',
                'dest.quba': 'الجمال الطبيعي',
                'package.gabala': 'السياحة الجبلية في قابالا',
                'package.shaki': 'قصر شاكي',
                'package.lankaran': 'ساحل لنكران',
                'package.naftalan': 'نفتالان العلاجي',
                'package.ismayilli': 'السياحة الجبلية في إسماعيلي',
                'package.ask_price': 'اسأل عن السعر',
                'meta.title': 'كوناقلي - أجمل مناطق الاستجمام في أذربيجان',
                'meta.description': 'كوناقلي - أجمل مناطق الاستجمام في أذربيجان، الجمال الطبيعي والمواقع الثقافية. قابالا، شاكي، لنكران، نفتالان وأماكن شائعة أخرى.',
                'meta.keywords': 'أذربيجان، استجمام، طبيعة، قابالا، شاكي، لنكران، نفتالان، كوناقلي، سياحة',
                'features.hotels': 'فنادق فاخرة',
                'features.hotels_desc': 'إقامة مريحة في أفضل فنادق أذربيجان.',
                'features.cuisine': 'المطبخ التقليدي',
                'features.cuisine_desc': 'نقدم لك طعم المطبخ الأذربيجاني التقليدي.',
                'features.tours': 'جولات طبيعية',
                'features.tours_desc': 'اكتشف الجمال الطبيعي لأذربيجان.',
                'features.support': 'دعم 24/7',
                'features.support_desc': 'نحن دائماً معك.',
                'stats.travels': 'عدد الرحلات',
                'stats.clients': 'عدد العملاء',
                'stats.destinations': 'مناطق الاستجمام',
                'stats.experience': 'سنوات من الخبرة',
                'sections.destinations': 'مناطق الاستجمام الشائعة',
                'sections.offers': 'عروض خاصة وخصومات',
                'sections.offers_desc': 'اختبر لحظات لا تُنسى في أجمل مناطق الاستجمام في أذربيجان. نقدم لك أفضل خدمة مع حزمنا الخاصة وخصوماتنا.',
                'sections.video_title': 'اكتشف طبيعة أذربيجان',
                'sections.video_desc1': 'اكتشف الطبيعة المعجزة والتراث الثقافي لأذربيجان. هناك جمال في كل مكان من جبال قابالا إلى شواطئ لنكران.',
                'sections.video_desc2': 'زر أجمل أماكن أذربيجان مع كوناقلي واصنع ذكريات لا تُنسى. مرشدونا المحترفون سيقدمون لك أفضل تجربة.',
                'sections.cta_title': 'اكتشف الأفضل. اتصل بنا الآن',
                'sections.cta_desc': 'اختبر لحظات لا تُنسى في أجمل مناطق الاستجمام في أذربيجان. كوناقلي يقدم لك أفضل خدمة.',
                'footer.about': 'حول كوناقلي',
                'footer.about_desc': 'اختبر لحظات لا تُنسى في أجمل مناطق الاستجمام في أذربيجان. نقدم لك أفضل خدمة منذ 15 عاماً.',
                'footer.pages': 'الصفحات',
                'footer.services': 'الخدمات',
                'footer.contact': 'اتصل',
                'footer.copyright': 'KONAQLY RESERVATIONS BRAND BY AZERBAIJAN',
                'services.mountain': 'السياحة الجبلية',
                'services.coastal': 'جولات ساحلية',
                'services.cultural': 'جولات ثقافية',
                'services.car_rental': 'تأجير السيارات',
                'services.cruise': 'رحلات بحرية',
                'services.luxury_hotels': 'فنادق فاخرة',
                'services.railway': 'السكك الحديدية',
                'services.insurance': 'تأمين السفر',
                'services.package_tours': 'جولات مجمعة',
                'services.health_tourism': 'السياحة العلاجية',
                'services.guide_books': 'كتب دليل',
                'services.restaurants': 'وجبات في مطاعم خاصة',
                'services.viano': 'ترحيب خاص بـ Viano',
                'services.partners': 'مطاعم الشركاء',
                'services.premium': 'خدمات مميزة',
                'services.concierge': 'خدمة الكونسيرج 24/7',
                'services.transfer': 'نقل المطار',
                'details.mountain_title': 'السياحة الجبلية',
                'details.mountain_desc': 'جولات مغامرة في جبال جابالا، قوبا، زاقاتالا. جمال طبيعي على ارتفاع 3000 متر.',
                'details.beach_title': 'السياحة الساحلية',
                'details.beach_desc': 'الاستجمام على شواطئ لنكران، أستارا. مناظر جميلة لبحر قزوين.',
                'details.health_title': 'السياحة العلاجية',
                'details.health_desc': 'زيت نافتالان، المياه المعدنية في جابالا. مراكز العلاج الطبيعي.',
                'details.culture_title': 'الجولات الثقافية',
                'details.culture_desc': 'قصر شاكي، رسوم صخرية في قوبوستان، مدينة باكو. المعالم التاريخية.',
                'details.premium_title': 'خدماتنا المميزة',
                'stats.tours': 'الجولات',
                'stats.customers': 'العملاء',
                'stats.destinations': 'الأماكن',
                'buttons.start': 'ابدأ الآن',
                'buttons.contact': 'تواصل معنا',
                'buttons.cancel': 'إلغاء',
                'buttons.send_whatsapp': 'إرسال إلى واتساب',
                'modal.customer_title': 'أكمل معلوماتك',
                'modal.search_info': 'تفاصيل البحث',
                'form.first_name': 'الاسم الأول',
                'form.last_name': 'الاسم الأخير',
                'form.phone': 'رقم الهاتف',
                'form.email': 'البريد الإلكتروني (اختياري)',
                'form.message': 'رسالة إضافية (اختياري)',
                'packages.special_title': 'الحزم الخاصة',
                'packages.luxury_guide': 'خدمة دليل فاخرة',
                'packages.luxury_guide_desc': 'جولة خاصة مع دليل محترف',
                'packages.premium_transfer': 'نقل مميز',
                'packages.premium_transfer_desc': 'النقل بسيارة فاخرة',
                'packages.gourmet_dining': 'طعام فاخر',
                'packages.gourmet_dining_desc': 'وجبات خاصة في مطاعم شهيرة',
                'packages.photo_service': 'خدمة التصوير',
                'packages.photo_service_desc': 'ذكريات مع مصور محترف',
                'packages.luxury_accommodation': 'إقامة فاخرة',
                'packages.luxury_accommodation_desc': 'الإقامة في فنادق 5 نجوم',
                'packages.helicopter_tour': 'جولة بالهليكوبتر',
                'packages.helicopter_tour_desc': 'منظر جوي لأذربيجان',
                'footer.blog': 'المدونة',
                'footer.about_us': 'من نحن',
                'footer.contact_us': 'اتصل بنا',
                'footer.location': 'باكو، أذربيجان',
                'about.title': 'حول كوناقلي',
                'about.subtitle': 'اختبر لحظات لا تُنسى في أجمل مناطق الاستجمام في أذربيجان.',
                'about.main_title': 'حول كوناقلي',
                'about.description': 'تم إنشاء كوناقلي لاختبار لحظات لا تُنسى في أجمل مناطق الاستجمام في أذربيجان. نقدم أفضل خدمة لعملائنا منذ 15 عاماً. اكتشف جميع الأماكن الجميلة من Gabala إلى Lankaran.',
                'about.service1': 'السياحة الجبلية',
                'about.service2': 'جولات ساحلية',
                'about.service3': 'جولات ثقافية',
                'about.service4': 'السياحة العلاجية',
                'about.service5': 'تأجير السيارات',
                'about.service6': 'فنادق فاخرة',
                'about.service7': 'تأمين السفر',
                'about.service8': 'جولات مجمعة',
                'about.service9': 'خدمة المرشد',
                'about.service10': 'دعم 24/7',
                'about.team_title': 'فريقنا',
                'about.team_desc': 'فريقنا المحترف مكرس لتقديم أفضل تجربة سفر لك في أذربيجان.',
                'team.member1_name': 'جيمس واتسون',
                'team.member1_title': 'الشريك المؤسس والرئيس التنفيذي',
                'team.member2_name': 'كارل أندرسون',
                'team.member2_title': 'الشريك المؤسس والرئيس التنفيذي',
                'team.member3_name': 'ميشيل أليسون',
                'team.member3_title': 'الشريك المؤسس والرئيس التنفيذي',
                'team.member4_name': 'درو وود',
                'team.member4_title': 'الشريك المؤسس والرئيس التنفيذي',
                'services.title': 'خدماتنا',
                'services.subtitle': 'نقدم أفضل الخدمات في أجمل مناطق الاستجمام في أذربيجان.',
                'contact.title': 'اتصل بنا',
                'contact.subtitle': 'تواصل معنا للحصول على أفضل تجربة سفر في أذربيجان.',
                'elements.title': 'العناصر',
                'elements.subtitle': 'استكشف عناصر ومكونات موقعنا الإلكتروني.'
            },
            zh: {
                'nav.home': '首页',
                'nav.services': '服务',
                'nav.about': '关于',
                'nav.contact': '联系我们',
                'hero.lets_enjoy': '发现阿塞拜疆',
                'hero.trip_in': '最美丽的地方在',
                'form.destination': '目的地',
                'form.date': '日期',
                'form.people': '人数',
                'form.search': '搜索',
                'form.save_search': '保存此搜索',
                'dest.gabala': '山地旅游',
                'dest.shaki': '文化遗产',
                'dest.lankaran': '沿海地区',
                'dest.naftalan': '健康旅游',
                'dest.quba': '自然美景',
                'package.gabala': '加巴拉山地旅游',
                'package.shaki': '舍基宫殿',
                'package.lankaran': '连科兰海岸',
                'package.naftalan': '纳夫塔兰健康',
                'package.ismayilli': '伊斯梅利山地旅游',
                'package.ask_price': '询问价格',
                'meta.title': 'KONAQLY - 阿塞拜疆最美丽的休闲区',
                'meta.description': 'KONAQLY - 阿塞拜疆最美丽的休闲区、自然美景和文化遗址。加巴拉、舍基、连科兰、纳夫塔兰和其他热门地点。',
                'meta.keywords': '阿塞拜疆，休闲，自然，加巴拉，舍基，连科兰，纳夫塔兰，konaqly，旅游',
                'features.hotels': '豪华酒店',
                'features.hotels_desc': '在阿塞拜疆最好的酒店舒适住宿。',
                'features.cuisine': '传统美食',
                'features.cuisine_desc': '我们为您带来传统阿塞拜疆美食的味道。',
                'features.tours': '自然之旅',
                'features.tours_desc': '发现阿塞拜疆的自然美景。',
                'features.support': '24/7支持',
                'features.support_desc': '我们始终与您同在。',
                'stats.travels': '旅行次数',
                'stats.clients': '客户数量',
                'stats.destinations': '休闲区',
                'stats.experience': '经验年数',
                'sections.destinations': '热门休闲区',
                'sections.offers': '特别优惠和折扣',
                'sections.offers_desc': '在阿塞拜疆最美丽的休闲区体验难忘的时刻。我们通过特别套餐和折扣为您提供最好的服务。',
                'sections.video_title': '发现阿塞拜疆的自然',
                'sections.video_desc1': '发现阿塞拜疆的神奇自然和文化遗产。从加巴拉的山脉到连科兰的海岸，到处都是美景。',
                'sections.video_desc2': '与KONAQLY一起参观阿塞拜疆最美丽的地方，创造难忘的回忆。我们的专业导游将为您提供最佳体验。',
                'sections.cta_title': '发现最好的。立即联系我们',
                'sections.cta_desc': '在阿塞拜疆最美丽的休闲区体验难忘的时刻。KONAQLY为您提供最好的服务。',
                'footer.about': '关于KONAQLY',
                'footer.about_desc': '在阿塞拜疆最美丽的休闲区体验难忘的时刻。15年来我们一直为您提供最好的服务。',
                'footer.pages': '页面',
                'footer.services': '服务',
                'footer.contact': '联系',
                'footer.copyright': 'KONAQLY RESERVATIONS BRAND BY AZERBAIJAN',
                'services.mountain': '山地旅游',
                'services.coastal': '海岸之旅',
                'services.cultural': '文化之旅',
                'services.car_rental': '汽车租赁',
                'services.cruise': '邮轮旅行',
                'services.luxury_hotels': '豪华酒店',
                'services.railway': '铁路',
                'services.insurance': '旅行保险',
                'services.package_tours': '套餐旅游',
                'services.health_tourism': '健康旅游',
                'services.guide_books': '导游书籍',
                'services.restaurants': '特色餐厅用餐',
                'services.viano': 'Viano特别欢迎',
                'services.partners': '合作餐厅',
                'services.premium': '高级服务',
                'services.concierge': '24/7礼宾服务',
                'services.transfer': '机场接送',
                'details.mountain_title': '山地旅游',
                'details.mountain_desc': '在加巴拉、古巴、扎加塔拉山脉的冒险之旅。海拔3000米的自然美景。',
                'details.beach_title': '海滨旅游',
                'details.beach_desc': '在连科兰、阿斯塔拉海岸的休闲。里海的美丽景色。',
                'details.health_title': '健康旅游',
                'details.health_desc': '纳夫塔兰石油、加巴拉矿泉水。天然治疗中心。',
                'details.culture_title': '文化之旅',
                'details.culture_desc': '沙基宫、戈布斯坦岩石画、巴库市。历史古迹。',
                'details.premium_title': '我们的优质服务',
                'stats.tours': '旅游',
                'stats.customers': '客户',
                'stats.destinations': '地点',
                'buttons.start': '开始',
                'buttons.contact': '联系我们',
                'buttons.cancel': '取消',
                'buttons.send_whatsapp': '发送到WhatsApp',
                'modal.customer_title': '完成您的信息',
                'modal.search_info': '搜索详情',
                'form.first_name': '名字',
                'form.last_name': '姓氏',
                'form.phone': '电话号码',
                'form.email': '邮箱（可选）',
                'form.message': '附加消息（可选）',
                'packages.special_title': '特殊套餐',
                'packages.luxury_guide': '豪华导游服务',
                'packages.luxury_guide_desc': '专业导游私人旅游',
                'packages.premium_transfer': '高级接送',
                'packages.premium_transfer_desc': '豪华汽车接送',
                'packages.gourmet_dining': '美食餐饮',
                'packages.gourmet_dining_desc': '著名餐厅特色美食',
                'packages.photo_service': '摄影服务',
                'packages.photo_service_desc': '专业摄影师记录回忆',
                'packages.luxury_accommodation': '豪华住宿',
                'packages.luxury_accommodation_desc': '五星级酒店住宿',
                'packages.helicopter_tour': '直升机游览',
                'packages.helicopter_tour_desc': '阿塞拜疆空中美景',
                'footer.blog': '博客',
                'footer.about_us': '关于我们',
                'footer.contact_us': '联系我们',
                'footer.location': '巴库，阿塞拜疆',
                'about.title': '关于KONAQLY',
                'about.subtitle': '在阿塞拜疆最美丽的休闲区体验难忘的时刻。',
                'about.main_title': '关于KONAQLY',
                'about.description': 'KONAQLY旨在在阿塞拜疆最美丽的休闲区体验难忘的时刻。15年来我们一直为客户提供最好的服务。探索从Gabala到Lankaran的所有美丽地方。',
                'about.service1': '山地旅游',
                'about.service2': '海岸之旅',
                'about.service3': '文化之旅',
                'about.service4': '健康旅游',
                'about.service5': '汽车租赁',
                'about.service6': '豪华酒店',
                'about.service7': '旅行保险',
                'about.service8': '套餐旅游',
                'about.service9': '导游服务',
                'about.service10': '24/7支持',
                'about.team_title': '我们的团队',
                'about.team_desc': '我们的专业团队致力于为您提供阿塞拜疆最好的旅行体验。',
                'team.member1_name': '詹姆斯·沃森',
                'team.member1_title': '联合创始人兼首席执行官',
                'team.member2_name': '卡尔·安德森',
                'team.member2_title': '联合创始人兼首席执行官',
                'team.member3_name': '米歇尔·艾利森',
                'team.member3_title': '联合创始人兼首席执行官',
                'team.member4_name': '德鲁·伍德',
                'team.member4_title': '联合创始人兼首席执行官',
                'services.title': '我们的服务',
                'services.subtitle': '我们在阿塞拜疆最美丽的休闲区提供最好的服务。',
                'contact.title': '联系我们',
                'contact.subtitle': '与我们联系，获得阿塞拜疆最好的旅行体验。',
                'elements.title': '元素',
                'elements.subtitle': '探索我们网站的元素和组件。'
            }
        };
        
        this.languageFlags = {
            'en': '🇺🇸',
            'ar': '🇸🇦',
            'zh': '🇨🇳'
        };
        
        this.init();
        this.initScrollAnimation();
        this.initSearchForm();
        this.initDateInput();
    }
    
    initScrollAnimation() {
        let lastScrollTop = 0;
        let ticking = false;
        
        const hero = document.querySelector('.hero');
        const sections = document.querySelectorAll('.section');
        const features = document.querySelectorAll('.feature-1');
        const counters = document.querySelectorAll('.counter-wrap');
        const destinations = document.querySelectorAll('.media-thumb');
        const packages = document.querySelectorAll('.media-1');
        // const videoSection = document.querySelector('.col-lg-5'); // DISABLED
        const ctaSection = document.querySelector('.cta-section');
        const footer = document.querySelector('.site-footer');
        const featureCards = document.querySelectorAll('.feature-card');
        const premiumServices = document.querySelector('.premium-services');
        // const statsSection = document.querySelector('.stats-section'); // DISABLED
        const packageItems = document.querySelectorAll('.package-item');
        // const heroPackageItems = document.querySelectorAll('.hero-package-item'); // DISABLED
        
        
        // Intersection Observer for better performance
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        [...sections, ...features, ...counters, ...destinations, ...packages, ctaSection, footer, ...featureCards, premiumServices, ...packageItems].forEach(el => {
            if (el) observer.observe(el);
        });
        
        // Scroll handler with throttling
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const windowHeight = window.innerHeight;
                    
                    // Hero scroll animation
                    if (hero) {
                        if (scrollTop > 50) {
                            hero.classList.add('scrolled');
                        } else {
                            hero.classList.remove('scrolled');
                        }
                    }
                    
                    // Parallax effect for hero
                    if (hero) {
                        const heroHeight = hero.offsetHeight;
                        const parallaxSpeed = scrollTop * 0.5;
                        hero.style.transform = `translateY(${parallaxSpeed}px)`;
                    }
                    
                    // Counter animation trigger
                    counters.forEach(counter => {
                        const counterTop = counter.offsetTop;
                        const counterHeight = counter.offsetHeight;
                        const scrollProgress = (scrollTop - counterTop + windowHeight) / (windowHeight + counterHeight);
                        
                        if (scrollProgress > 0.3 && scrollProgress < 0.7) {
                            counter.classList.add('animate-in');
                        }
                    });
                    
                    // Staggered animation for features
                    features.forEach((feature, index) => {
                        const featureTop = feature.offsetTop;
                        const featureHeight = feature.offsetHeight;
                        const scrollProgress = (scrollTop - featureTop + windowHeight) / (windowHeight + featureHeight);
                        
                        if (scrollProgress > 0.2) {
                            setTimeout(() => {
                                feature.classList.add('animate-in');
                            }, index * 100);
                        }
                    });
                    
                    // Staggered animation for destinations
                    destinations.forEach((destination, index) => {
                        const destTop = destination.offsetTop;
                        const destHeight = destination.offsetHeight;
                        const scrollProgress = (scrollTop - destTop + windowHeight) / (windowHeight + destHeight);
                        
                        if (scrollProgress > 0.2) {
                            setTimeout(() => {
                                destination.classList.add('animate-in');
                            }, index * 150);
                        }
                    });
                    
                    // Staggered animation for packages
                    packages.forEach((pkg, index) => {
                        const pkgTop = pkg.offsetTop;
                        const pkgHeight = pkg.offsetHeight;
                        const scrollProgress = (scrollTop - pkgTop + windowHeight) / (windowHeight + pkgHeight);
                        
                        if (scrollProgress > 0.2) {
                            setTimeout(() => {
                                pkg.classList.add('animate-in');
                            }, index * 120);
                        }
                    });
                    
                    lastScrollTop = scrollTop;
                    ticking = false;
                });
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial animation trigger
        setTimeout(() => {
            handleScroll();
        }, 100);
    }
    
    initSearchForm() {
        const searchForm = document.getElementById('searchForm');
        const customerModal = document.getElementById('customerModal');
        const sendToWhatsAppBtn = document.getElementById('sendToWhatsApp');
        
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(searchForm);
                const destination = formData.get('destination');
                const travelDate = formData.get('travel_date');
                const people = formData.get('people');
                const saveSearch = formData.get('save_search');
                
                if (!destination || !travelDate || !people) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Store search data
                this.searchData = {
                    destination,
                    travelDate,
                    people,
                    saveSearch: saveSearch === 'on'
                };
                
                // Show search details in modal
                this.showSearchDetails();
                
                // Show customer modal
                $(customerModal).modal('show');
            });
        }
        
        if (sendToWhatsAppBtn) {
            sendToWhatsAppBtn.addEventListener('click', () => {
                this.sendToWhatsApp();
            });
        }
    }
    
    showSearchDetails() {
        const searchDetails = document.getElementById('searchDetails');
        if (searchDetails && this.searchData) {
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            const lang = this.translations[currentLang];
            
            searchDetails.innerHTML = `
                <div class="row">
                    <div class="col-6"><strong>${lang['form.destination']}:</strong></div>
                    <div class="col-6">${this.searchData.destination}</div>
                </div>
                <div class="row">
                    <div class="col-6"><strong>${lang['form.date']}:</strong></div>
                    <div class="col-6">${this.searchData.travelDate}</div>
                </div>
                <div class="row">
                    <div class="col-6"><strong>${lang['form.people']}:</strong></div>
                    <div class="col-6">${this.searchData.people}</div>
                </div>
            `;
        }
    }
    
    sendToWhatsApp() {
        const customerForm = document.getElementById('customerForm');
        const formData = new FormData(customerForm);
        
        const firstName = formData.get('first_name');
        const lastName = formData.get('last_name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!firstName || !lastName || !phone) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Create WhatsApp message
        let whatsappMessage = `🏔️ *KONAQLY Tourism Inquiry*\n\n`;
        whatsappMessage += `👤 *Customer Information:*\n`;
        whatsappMessage += `Name: ${firstName} ${lastName}\n`;
        whatsappMessage += `Phone: ${phone}\n`;
        if (email) whatsappMessage += `Email: ${email}\n`;
        
        whatsappMessage += `\n🎯 *Travel Details:*\n`;
        whatsappMessage += `Destination: ${this.searchData.destination}\n`;
        whatsappMessage += `Date: ${this.searchData.travelDate}\n`;
        whatsappMessage += `People: ${this.searchData.people}\n`;
        
        if (message) {
            whatsappMessage += `\n💬 *Additional Message:*\n${message}\n`;
        }
        
        whatsappMessage += `\n📅 *Inquiry Date:* ${new Date().toLocaleString()}\n`;
        whatsappMessage += `🌐 *Website:* KONAQLY Tourism`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/994556966995?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Close modal
        $('#customerModal').modal('hide');
        
        // Show success message
        this.showSuccessMessage();
    }
    
    showSuccessMessage() {
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        const lang = this.translations[currentLang];
        
        // Create success alert
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed';
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            <strong>✅ Success!</strong> Your inquiry has been sent to WhatsApp.
            <button type="button" class="close" data-dismiss="alert">
                <span>&times;</span>
            </button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    }
    
    initDateInput() {
        const dateInput = document.getElementById('travelDate');
        if (dateInput) {
            // Set minimum date to today
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const minDate = tomorrow.toISOString().split('T')[0];
            dateInput.setAttribute('min', minDate);
            
            // Add date validation
            dateInput.addEventListener('change', (e) => {
                const selectedDate = new Date(e.target.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate < today) {
                    e.target.style.borderColor = '#dc3545';
                    e.target.setCustomValidity('Please select a future date');
                } else {
                    e.target.style.borderColor = '#28a745';
                    e.target.setCustomValidity('');
                }
            });
        }
    }

    
    init() {
        // Always show language modal if no language is selected
        if (!localStorage.getItem('selectedLanguage')) {
            this.showLanguageModal();
        } else {
            this.applyLanguage(this.currentLanguage);
        }
        
        // Add event listeners
        this.addEventListeners();
    }
    
    showLanguageModal() {
        setTimeout(() => {
            $('#languageModal').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
            });
        }, 500);
        
        // Hide the main content until language is selected
        $('body').addClass('language-modal-open');
    }
    
    addEventListeners() {
        // Language selection buttons
        $('.language-btn').on('click', (e) => {
            const selectedLang = $(e.target).data('lang');
            this.setLanguage(selectedLang);
            $('#languageModal').modal('hide');
        });
        
        // Language toggle button
        $('#languageToggle').on('click', (e) => {
            e.preventDefault();
            $('#languageModal').modal('show');
        });
        
        // Close modal when clicking outside (only if language is already selected)
        $('#languageModal').on('hidden.bs.modal', () => {
            // If no language is selected, show modal again
            if (!localStorage.getItem('selectedLanguage')) {
                setTimeout(() => {
                    $('#languageModal').modal('show');
                }, 100);
            }
        });
    }
    
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        this.applyLanguage(lang);
        
        // Show the main content after language is selected
        $('body').removeClass('language-modal-open');
    }
    
    applyLanguage(lang) {
        // Update document language
        document.documentElement.lang = lang;
        
        // Update current language flag
        $('#currentLang').text(this.languageFlags[lang]);
        
        // Apply RTL for Arabic
        if (lang === 'ar') {
            $('html').attr('dir', 'rtl');
            $('body').addClass('rtl');
        } else {
            $('html').attr('dir', 'ltr');
            $('body').removeClass('rtl');
        }
        
        // Translate all elements
        this.translateElements(lang);
    }
    
    translateElements(lang) {
        const translations = this.translations[lang];
        
        // Check if translations exist
        if (!translations) {
            console.warn(`Translations for language '${lang}' not found`);
            return;
        }
        
        // Translate elements with data-translate attribute
        $('[data-translate]').each(function() {
            const key = $(this).data('translate');
            if (translations && translations[key]) {
                $(this).text(translations[key]);
            }
        });
        
        // Translate placeholders
        $('[data-translate-placeholder]').each(function() {
            const key = $(this).data('translate-placeholder');
            if (translations && translations[key]) {
                $(this).attr('placeholder', translations[key]);
            }
        });
        
        // Translate values
        $('[data-translate-value]').each(function() {
            const key = $(this).data('translate-value');
            if (translations && translations[key]) {
                $(this).attr('value', translations[key]);
            }
        });
        
        // Translate content attributes
        $('[data-translate-content]').each(function() {
            const key = $(this).data('translate-content');
            if (translations && translations[key]) {
                $(this).attr('content', translations[key]);
            }
        });
        
        // Translate title
        if (translations && translations['meta.title']) {
            document.title = translations['meta.title'];
        }
    }
}

// Initialize when document is ready with error handling
$(document).ready(function() {
    try {
        new LanguageManager();
    } catch (error) {
        console.error('Language Manager initialization error:', error);
        // Fallback: basic language functionality
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        console.log('Fallback language:', savedLang);
    }
});





