



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

const darkMode = () =>{
    const darkModeBtn = document.getElementById('dark_mode');
    if (darkModeBtn.checked === true) {
        document.documentElement.style.setProperty('--main-bg-color', '#111');
        document.documentElement.style.setProperty('--font-color', '#fff');
        document.documentElement.style.setProperty('--secondry-color', '#1f1f1f');
        document.documentElement.style.setProperty('--faded-bg', '#ffffff4d');
    } else {
        document.documentElement.style.setProperty('--main-bg-color', '#fff');
        document.documentElement.style.setProperty('--font-color', '#111');
        document.documentElement.style.setProperty('--secondry-color', '#f7f7f7');
        document.documentElement.style.setProperty('--faded-bg', '#0000004d');
    }
    
};

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

