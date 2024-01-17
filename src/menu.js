import { wrapper } from "./index.js";
import rackRibs from './img/menu/rack-ribs.jpeg';
import kobeBeef from './img/menu/kobe-beef.jpg'
import beefBurger from './img/menu/burger.jpg'
import doner from './img/menu/doner.jpg'
import tacos from './img/menu/tacos.jpg'
import paela from './img/menu/paela.jpg'

export default function menu() {
    menuItem1.menuItemPrint();
    menuItem2.menuItemPrint(); 
    menuItem3.menuItemPrint();
    menuItem4.menuItemPrint();
    menuItem5.menuItemPrint();
    menuItem6.menuItemPrint();
}

class menuItem {
    constructor (name, price, imgurl,description) {
        this.name = name;
        this.price = price;
        this.imgurl = imgurl;
        this.description = description;
    }

    menuItemPrint() {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.className = 'item-container';
    
        const itemName = document.createElement('h3');
        itemName.textContent = this.name

        const itemPrice = document.createElement('h4');
        itemPrice.textContent = this.price;

        const itemImg = document.createElement('img')
        itemImg.src = this.imgurl;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = this.description;

        menuItemContainer.appendChild(itemName);
        menuItemContainer.appendChild(itemPrice);
        menuItemContainer.appendChild(itemImg);
        menuItemContainer.appendChild(itemDescription);
        wrapper.className = 'wrapper item-wrapper'
        wrapper.appendChild(menuItemContainer);
    }
}

const menuItem1 = new menuItem (
    'Kareem\'s Sky Hook Ribs', 
    '$' + 32.99, 
    rackRibs,
    'Savor Kareem\'s favorite succulent ribs, slow-cooked for perfection. Complement your meal with our crispy golden chips. A delightful duo of flavor awaits!'
)

const menuItem2 = new menuItem (
    'Kobe\'s A5 Wagyu Steak', 
    '$' + 109.99,
    kobeBeef,
    'Experience luxury with our A5 Wagyu from Kobe. Indulge in the exquisite tenderness and rich marbling of this premium beef, expertly prepared to elevate your dining experience. Unparalleled flavor awaits!'
)

const menuItem3 = new menuItem (
    'Shaq\'s Beef Burger',
    '$' + 12.99,
    beefBurger,
    'Satisfy your cravings with our signature Shaq Beef Burger, featuring a perfectly grilled patty nestled in a golden brioche bun.'
)

const menuItem4 = new menuItem (
    'Magic\'s Turkish Doner',
    '$' + 23.99,
    doner,
    'Indulge in the authentic flavors of our Turkish Doner, where succulent layers of seasoned meat are expertly grilled and wrapped in a warm, fluffy flatbread. '
)

const menuItem5 = new menuItem (
    'LeBron\'s GOAT Tacos',
    '$' + 13.99,
    tacos,
    'Get in on the TACO TUESDAY greatness with Bron\'s GOAT Tacos.'
)

const menuItem6 = new menuItem (
    'Pau\'s Seafood Paela',
    '$' + 43.99,
    paela,
    'Indulge in the rich, aromatic experience of our Paella, a Spanish culinary masterpiece. Immerse yourself in a symphony of flavors as saffron-infused rice, succulent seafood, and a medley of vibrant vegetables come together in a celebration of authentic Spanish cuisine.'
)
