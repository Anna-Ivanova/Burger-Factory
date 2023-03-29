export const productsData = [

    {
        id: 1,
        imgurl: '../../images/buns.png',
        name: 'Buns'
    },
    {
        id: 2,
        imgurl: '../../images/salad.png',
        name: 'Salad'
    },
    {
        id: 3,
        imgurl: '../../images/tomato.png',
        name: 'Tomato'
    },
    {
        id: 4,
        imgurl: '../../images/cheese.png',
        name: 'Cheese'
    },
    {
        id: 5,
        imgurl: '../../images/ham.png',
        name: 'Ham'
    },

]
export const menu = [
    {
        id: 1,
        imgurl: './images/burgermenu.png',
        title: '1/4 Pound Cheese',
        description: 'A flame-grilled beef patty topped with melted American cheese, crunchy pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        price: 10
    },
    {
        id: 2,
        imgurl: './images/burgermenu.png',
        title: 'Big Burger',
        description: 'A flame-grilled, plant-based patty with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun.',
        price: 15
    },
    {
        id: 3,
        imgurl: './images/burgermenu.png',
        title: 'Pure Bacon',
        description: "Two 1/4 lb* flame-grilled beef patties with crispy bacon, melted American cheese, ketchup, and creamy mayonnaise on a toasted sesame seed bun.",
        price: 17
    }
]
export const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 730 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 730, min: 0 },
        items: 1
    }
};

