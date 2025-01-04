let products = [
    { id: 901, name: "Monitor", price: 199, category: "Electronics", stock: 50, rating: 4.6 },
    { id: 902, name: "Microwave Oven", price: 149, category: "Appliances", stock: 20, rating: 4.4 },
    { id: 903, name: "Fitness Tracker", price: 99, category: "Fitness", stock: 80, rating: 4.7 },
    { id: 904, name: "Bookshelf", price: 129, category: "Furniture", stock: 10, rating: 4.3 },
    { id: 905, name: "Gaming Keyboard", price: 99, category: "Electronics", stock: 35, rating: 4.8 }
];
let div=document.createElement('div')
div.className='grid-container'
products.forEach(product=>{
    let item=document.createElement('div')
    item.className='item'
    for(let key in product){
        let p=document.createElement('p')
        p.innerText=`${key} : ${product[key]}`;
        item.appendChild(p)
    }
    div.appendChild(item)
})
document.body.appendChild(div)