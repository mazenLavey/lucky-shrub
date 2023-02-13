// render projects

let projectsGrid = document.querySelector('.projects__grid');

let projecList = fetch("projects.json").then(res => res.json()).then((data) => {
    data.forEach((project)=>{
        return (
            projectsGrid.insertAdjacentHTML("beforeend", 
            `<div class="pojects__gallery">
            <i class="fa-solid fa-magnifying-glass-plus" aria-hidden="true"></i>
            <img src=${project.img.src} alt=${project.img.alt} width=${project.img.width} height=${project.img.height} loading=${project.img.loading} id=${project.id}>
            </div>`
            )
        );
    })
})

// popup 

let popup = document.getElementsByClassName('popup')[0];

function createPopup(projectId) {
    fetch("projects.json").then(res => res.json()).then( (data) => {
        const popupDiv = document.createElement('div');
        popupDiv.classList.add('popup');
        popupDiv.classList.add('active');
        popupDiv.innerHTML = `
        <div class="popup__bg"></div>
        <div class="popup__box">
            <i class="fa-solid fa-circle-xmark" id="popup_close" aria-hidden="true"></i>
            <h2>${data[projectId].name}</h2>
            <div class="popup__box__content">
                <img src=${data[projectId].img.src} alt=${data[projectId].img.alt}>
                <div>
                    <p>${data[projectId].description}</p>
                    <div class="info">    
                        <p>${data[projectId].period}</p>
                        <span>${data[projectId].cost}<span/>
                    <div>
                <div/>
            </div>
        </div>
        `
        document.body.appendChild(popupDiv);
        // closing function
        let popupClose = document.getElementById('popup_close');
        let popupBg = document.getElementsByClassName('popup__bg')[0];
        popupClose.addEventListener('click', (e)=>{
            e.target.parentElement.parentElement.remove();
            
        })

        popupBg.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
        })
    })
    

}

projecList.finally( ()=>{
    let pojectsGallery = document.querySelectorAll('.pojects__gallery');

    pojectsGallery.forEach(element => {
        element.addEventListener('click', (e)=>{
            createPopup(e.target.id);
        })
    });
    }
);


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

// multi Language settings


let translation;

fetch('translation.json')
    .then(res => res.json())
    .then(data => {
        translation = data
    });


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

const changeTranslation = (choosedLang)=>{
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
