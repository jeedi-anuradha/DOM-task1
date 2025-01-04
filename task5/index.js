let products = [
    { id: 1001, name: "Noise Cancelling Headphones", price: 349, category: "Electronics", stock: 25, rating: 4.9 },
    { id: 1002, name: "Air Fryer", price: 129, category: "Appliances", stock: 15, rating: 4.6 },
    { id: 1003, name: "Cycling Helmet", price: 79, category: "Fitness", stock: 60, rating: 4.8 },
    { id: 1004, name: "TV Stand", price: 199, category: "Furniture", stock: 12, rating: 4.4 },
    { id: 1005, name: "Smartphone Case", price: 19, category: "Accessories", stock: 100, rating: 4.5 }
];
let div=document.createElement('div')
div.className='container'
products.forEach(product=>{
    let item=document.createElement('div')
    item.className='item'
    for(let key in product){
        let p=document.createElement('p')
        p.innerText=`${key} : ${product[key]}`
        item.appendChild(p)
    }
    div.appendChild(item)
})
document.body.appendChild(div)