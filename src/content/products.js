import i18n from '../services/i18n.js';
import {locale} from '../app.js';

var productCatalog = [{}];

const products = {

    loadProductCatalog : async() => {

        await i18n.loadStringsJSON(locale);
        console.log("Loaded locale strings for " + locale);

        productCatalog = [{
            "productID" : 1,
            "type": "droid",
            "class": 2,
            "title": i18n.getString("title", "1"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/Mario Kart.png",
            "desc": i18n.getString("desc", "1")
        },
        {
            "productID" : 2,
            "type": "droid",
            "class": 4,
            "title": i18n.getString("title", "2"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/Mario Party.png",
            "desc": i18n.getString("desc", "2")
        },
        {
            "productID" : 3,
            "type": "droid",
            "class": 1,
            "title": i18n.getString("title", "3"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/Mario Odyssey.png",
            "desc": i18n.getString("desc", "3")
        },
        {
            "productID" : 4,
            "type": "droid",
            "title": i18n.getString("title", "4"),
            "price": 4500,
            "qty": 59.99,
            "imageURL": "img/animals.png",
            "desc": i18n.getString("desc", "4")
        },
        {
            "productID" : 5,
            "type": "vehicle",
            "title": i18n.getString("title", "5"),
            "price": 1000000,
            "qty": 26.99,
            "imageURL": "img/hades.png",
            "desc": i18n.getString("desc", "5")
        },
        {
            "productID" : 6,
            "type": "droid",
            "title": i18n.getString("title", "6"),
            "price": 5210,
            "qty": 59.99,
            "imageURL": "img/pokem.png",
            "desc": i18n.getString("desc", "6")
        },
        {
            "productID" : 7,
            "type": "vehicle",
            "title": i18n.getString("title", "7"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/Super-Mario-Bros.-Wonder.jpg",
            "desc": i18n.getString("desc", "7")
        },
        {
            "productID" : 8,
            "type": "vehicle",
            "title": i18n.getString("title", "8"),
            "price": 69.99,
            "qty": 0,
            "imageURL": "img/The-Legend-of-Zelda-Tears-of-the-Kingdom.jpg",
            "desc": i18n.getString("desc", "8")
        },
        
        {
            "productID" : 9,
            "type": "vehicle",
            "title": i18n.getString("title", "9"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/Splatoon-3.jpg",
            "desc": i18n.getString("desc", "9")
        },
        {
            "productID" : 10,
            "type": "droid",
            "title": i18n.getString("title", "10"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/The Legend of Zelda Breath of the Wild.jpg",
            "desc": i18n.getString("desc", "10")
        },
        {
            "productID" : 11,
            "type": "vehicle",
            "title": i18n.getString("title", "11"),
            "price": 39.99,
            "qty": 0,
            "imageURL": "img/It takes two.jpg",
            "desc": i18n.getString("desc", "11")
        },
        {
            "productID" : 12,
            "type": "vehicle",
            "title": i18n.getString("title", "12"),
            "price": 59.99,
            "qty": 0,
            "imageURL": "img/Kirby’s Return to Dream Land Deluxe.jpg",
            "desc": i18n.getString("desc", "12")
        },
        {
            "productID" : 13,
            "type": "droid",
            "title": i18n.getString("title", "13"),
            "price": 49.99,
            "qty": 0,
            "imageURL": "img/Luigi's Mansion 2.jpg",
            "desc": i18n.getString("desc", "13")
        }

        ];

        return productCatalog;
    }
}


export default products;