import { wrapper, aboutPhoto, content } from './index.js'

export default function aboutBody() {
    wrapper.className = 'wrapper';
    const hero = document.createElement('h2');
    hero.textContent = 'Join us in this culinary journey where the legends once dined. Bring your friends, family, and fellow fans where the legacy lives on, and every meal is a champion\'s feast.'
    wrapper.appendChild(hero)

    const lakersLegends = new Image();
    lakersLegends.src = aboutPhoto;
    lakersLegends.alt = 'photo of lakers hall of fame players';
    lakersLegends.className = 'about-photo';

    wrapper.appendChild(lakersLegends);
}