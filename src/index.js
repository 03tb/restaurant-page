import './style.css';
import Logo from './img/logo.png';
import TeamPhoto from './img/background.jpeg';
import aboutBody from './about.js';
import aboutPhoto from './img/about.jpg';
import menu from './menu.js';
import twitter from './img/twitter.png'

export { wrapper, aboutPhoto, contentDOM };

// Global
const contentDOM = document.querySelector('#content');
const wrapper = document.createElement('div');

// header 

(function initialize() {
    navigation();
    homePage();
    footer();
})();

function navigation() {
    const header = document.createElement('header');
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.className = 'logo';
    myLogo.setAttribute('alt', 'Lakers Logo Home Button');
    header.appendChild(myLogo);

    const navUl = document.createElement('ul');

    const listItemHome = document.createElement('li');
    listItemHome.className = "list-item"
    listItemHome.textContent = "Home";
    listItemHome.addEventListener('click', () => {
        resetHome();
        homePage();
        footer();
    })

    const listItemMenu = document.createElement('li');
    listItemMenu.className = "list-item"
    listItemMenu.textContent = "Menu";
    listItemMenu.addEventListener('click', () => {
        resetWrapper();
        menu();
    })

    const listItemAbout = document.createElement('li');
    listItemAbout.className = "list-item"
    listItemAbout.textContent = "About";
    listItemAbout.addEventListener('click', () => {
        resetWrapper();
        aboutBody();
    })

    contentDOM.appendChild(header);

    header.appendChild(navUl);
    navUl.appendChild(listItemHome);
    navUl.appendChild(listItemMenu);
    navUl.appendChild(listItemAbout);
}


// body


function homePage () {
    wrapper.className = 'wrapper';
    
    const hero = document.createElement('h1');
    hero.textContent = 'Welcome to the chow hall of the 17 time reigning champions'
    
    wrapper.appendChild(hero);
    
    const teamPhoto = new Image();
    teamPhoto.src = TeamPhoto;
    teamPhoto.className = 'team-photo';
    teamPhoto.setAttribute('alt', 'illustrated image of 2023/2024 lakers roster');
    
    wrapper.appendChild(teamPhoto)
    
    contentDOM.appendChild(wrapper);
}

//

function footer() {
    const footer = document.createElement('footer');
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    //left section of footer
    const footerLinks = document.createElement('ul');
    const footerLi1 = document.createElement('li');
    footerLi1.textContent = 'Twitter'

    const footerLi2 = document.createElement('li');
    footerLi2.textContent = 'Facebook'

    const footerLi3 = document.createElement('li');
    footerLi3.textContent = 'TikTok'

  
 
    //middle line
    const footerBreak = document.createElement('div');
    footerBreak.className = 'footer-hr';

    //right section of footer
    const footerRight = document.createElement('div');
    footerRight.textContent = "A concept by Thomas Baeg 2024";



    footerLinks.appendChild(footerLi1);
    footerLinks.appendChild(footerLi2);
    footerLinks.appendChild(footerLi3);

    footerContainer.appendChild(footerLinks);
    footerContainer.appendChild(footerBreak);
    footerContainer.appendChild(footerRight);
    footer.appendChild(footerContainer);
    contentDOM.appendChild(footer);
}





// function to clear wrapper when changing tabs

function resetWrapper () {
    wrapper.textContent = "";
}

function resetHome() {
    contentDOM.textContent = "";
    wrapper.textContent = "";
    navigation();
    // homePage();
}