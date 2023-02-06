



// button scroll to top:
let btnUp = document.createElement('div');
btnUp.textContent = 'Up';
btnUp.classList = 'btn-up d-flex-row';
btnUp.addEventListener('click', ()=>{
    window.scrollTo({top:0})
})

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 750) {
        document.body.appendChild(btnUp);
    } else {
        btnUp.remove();
    }
})

// nav for mobile:
let barsIcon = document.getElementsByClassName('m-bars')[0];
let bgNavMobile = document.getElementsByClassName('bg-nav-mobile')[0];
let headerNav = document.getElementsByClassName('header__nav-mobile')[0];

barsIcon.addEventListener('click', ()=>{
    bgNavMobile.style = 'display: block;'
    headerNav.style = 'display: block;'

    bgNavMobile.addEventListener('click', ()=>{
        if (headerNav.style.display === 'block') {
            headerNav.style = 'display: none;'
            bgNavMobile.style = 'display: none;'
        }
    })

    headerNav.addEventListener('click', ()=>{
        headerNav.style = 'display: none;'
        bgNavMobile.style = 'display: none;'
    })

})

// settings menu

let settingsBg = document.getElementsByClassName('settings__bg')[0];
let settingsMenu =document.getElementsByClassName('settings__wrapper')[0];
let settingsIcon =document.getElementsByClassName('settings__icon')[0];

settingsIcon.addEventListener('click', ()=>{
    settingsMenu.classList.toggle('active');
    settingsBg.classList.toggle('active');

});

settingsBg.addEventListener('click', ()=>{
    settingsMenu.classList.toggle('active');
    settingsBg.classList.toggle('active');
})


// dark mode settings

const darkModeBtn = document.getElementById('dark_mode');
const darkMode = () =>{
    if (darkModeBtn.checked === true) {
        dark();
    } else {
        light();
    }
    
};

const dark = ()=>{
    window.localStorage.setItem('darkMode', 'true');
    document.documentElement.style.setProperty('--main-bg-color', '#111');
    document.documentElement.style.setProperty('--font-color', '#fff');
    document.documentElement.style.setProperty('--secondry-color', '#1f1f1f');
    document.documentElement.style.setProperty('--faded-bg', '#ffffff4d');
}

const light = ()=>{
    window.localStorage.setItem('darkMode', 'false');
    document.documentElement.style.setProperty('--main-bg-color', '#fff');
    document.documentElement.style.setProperty('--font-color', '#111');
    document.documentElement.style.setProperty('--secondry-color', '#f7f7f7');
    document.documentElement.style.setProperty('--faded-bg', '#0000004d');
}

// popup 

const popup = document.getElementsByClassName('popup')[0];
const pojectsGallery = Array.from(document.querySelectorAll('.pojects__gallery'));

function createPopup(src, alt, info, cost) {
    
    const popupDiv = document.createElement('div');

    popupDiv.classList.add('popup');
    popupDiv.classList.add('active');
    popupDiv.innerHTML = `
    <div class="popup__bg"></div>
    <div class="popup__box">
        <i class="fa-solid fa-circle-xmark" id="popup_close"></i>
        <h2>${alt}</h2>
        <div class="popup__box__content">
            <img src=${src} alt=${alt}>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias illo repudiandae expedita unde rerum cupiditate odit, quo maxime earum, eos veritatis! Eaque doloremque assumenda natus fugiat maxime dignissimos neque perspiciatis.</p>
                <div class="info">    
                    <p>${info}</p>
                    <span>${cost}<span/>
                <div>
            <div/>
        </div>
    </div>
    `

    document.body.appendChild(popupDiv);

}

pojectsGallery.forEach(element => {
    element.addEventListener('click', (e)=>{
        createPopup(e.target.src, e.target.alt, e.target.dataset.info, e.target.dataset.cost);

        const popupClose = document.getElementById('popup_close');
        const popupBg = document.getElementsByClassName('popup__bg')[0];

        popupClose.addEventListener('click', (e)=>{
            e.target.parentElement.parentElement.remove();
            
        })

        popupBg.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
        })
    })
});

// multi Language settings

const translation = {
    en: {
        'logo': 'Logo',
        'about': 'About',
        'projects': 'Projects',
        'services': 'Services',
        'contact': 'Contact',
        'title': 'SPRING<br><span>of</span> FLOWERS',
        'description': 'Let Your Lawn<br>come to life!',
        'more': 'More',
        'about-paragraph': "<span style='color: #227721; font-weight: bold;'>Lucky Shrub</span> was started by a husband and wife team, Jason and Maria, who share a long-time love for plants. Jason is the garden architect. He creates and oversees all designs while managing his team of landscapers. Maria manages all the marketing for the company and oversees the nursery. <br><br> We have always tried to offer perfect outdoor maintenance and great customer service. As we work with some of the leading gardening experts in the Britch!!, we have managed to develop a reputation that is worth bragging with. All gardening teams are well-trained and equipped with everthing that's needed for perfect garden care. <br><br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio quidem corrupti laboriosam, minima error hic optio vero dolorem, dolor illo possimus quae eius voluptatum, consectetur pariatur corporis provident.",
        'call-to-action': 'Garden life provides you with <br>a free consultation on gardening',
        'call-to-action-btn': 'get free estimate',
        'our-projects': 'Our projects',
        'our-services': 'Our services',
        'our-services-paragraph': 'We carry out such services and approach to lawn and garden care to keep your lush green lawn and garden',
        'landscape-design': 'landscape design',
        'installation':'installation',
        'tree-trimming':'tree trimming',
        'maintenance':'maintenance',
        'contact-paragraph': 'Have a question or want to get in touch? <br>Leave your details, we will contact you.',
        'submit': 'submit now',
        'logo-paragraph': 'design. transform. enjoy',
        'address': 'Contact Address',
        'links': 'Quick links',
        'mode': 'Dark Mode',
        'off': 'Off',
        'on': 'On',
        'language': 'Language',
    },
    ru: {
        'logo': 'Логотип',
        'about': 'О нас',
        'projects': 'Проекты',
        'services': 'Услуги',
        'contact': 'Контакт',
        'title': 'ВЕСНА<br>ЦВЕТОВ',
        'description': 'Пусть Ваш газон<br>оживает!',
        'more': 'Еще',
        'about-paragraph': "<span style='color: #227721; font-weight: bold;'>Lucky Shrub</span> была основана командой мужа и жены, Джейсоном и Марией, которых объединяет давняя любовь к растениям. Джейсон - садовый архитектор. Он создает и контролирует все проекты, управляя своей командой ландшафтных дизайнеров. Мария управляет всем маркетингом компании и курирует питомник. <br><br> Мы всегда старались предложить идеальное обслуживание на открытом воздухе и отличное обслуживание клиентов. Поскольку мы работаем с некоторыми из ведущих специалистов по садоводству в Britch!!, нам удалось завоевать репутацию, которой стоит похвастаться. Все бригады садоводов хорошо обучены и оснащены всем необходимым для идеального ухода за садом. <br><br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio quidem corrupti laboriosam, minima error hic optio vero dolorem, dolor illo possimus quae eius voluptatum, consectetur pariatur corporis provident.",
        'call-to-action': 'Garden life предоставляет вам <br>бесплатную консультацию по садоводству.',
        'call-to-action-btn': 'получить бесплатный расчет',
        'our-projects': 'Наши проекты',
        'our-services': 'Наши сервисы',
        'our-services-paragraph': 'Мы осуществляем такие услуги и подход к уходу за газоном и садом, чтобы сохранить ваш пышный зеленый газон и сад',
        'landscape-design': 'ландшафтный дизайн',
        'installation':'установка',
        'tree-trimming':'обрезка деревьев',
        'maintenance':'поддержание',
        'contact-paragraph': 'Есть вопрос или хотите связаться? <br>Оставьте свои данные, мы свяжемся с вами.',
        'submit': 'отправить сейчас',
        'logo-paragraph': 'дизайн. трансформируйте. наслаждайтесь',
        'address': 'Контактный адрес',
        'links': 'Ссылки',
        'mode': 'Темный режим',
        'off': 'Выкл.',
        'on': 'Вкл.',
        'language': 'Язык',
    }
}

const language = document.querySelectorAll('.language');
const content = document.querySelectorAll('[data-multilang]');

language.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        changeTranslation(e.target.lang);
        language.forEach((btn)=>{
            btn.classList.remove('active');
        })
        e.target.classList.add('active');
    });
});

const changeTranslation = (choosedLang, langBtn)=>{
    if (choosedLang === 'ru') {
        window.localStorage.setItem('language', 'ru');
        content.forEach((element)=>{
            element.innerHTML = translation.ru[element.dataset.multilang];  
        });

    } else if (choosedLang === 'en') {
        window.localStorage.setItem('language', 'en');
        content.forEach((element)=>{
            element.innerHTML = translation.en[element.dataset.multilang];  
        });
    }
}

// check on load

window.onload = ()=>{
    // check lang
    changeTranslation(window.localStorage.getItem('language'))
    if (window.localStorage.getItem('language') === 'ru') {
        language.forEach((btn)=>{
            btn.classList.remove('active');
        });
        language[1].classList.add('active');
    }

    // check page mode
   if (window.localStorage.getItem('darkMode') === 'true') {
    darkModeBtn.checked = true;
    dark();
   };
}