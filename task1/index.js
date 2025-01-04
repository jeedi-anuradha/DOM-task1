let products = [
    { id: 201, name: "Smartphone", price: 699, category: "Electronics", stock: 50, rating: 4.6 },
    { id: 202, name: "Blender", price: 49, category: "Appliances", stock: 20, rating: 4.3 },
    { id: 203, name: "Yoga Mat", price: 25, category: "Fitness", stock: 100, rating: 4.9 },
    { id: 204, name: "Office Desk", price: 299, category: "Furniture", stock: 10, rating: 4.2 },
    { id: 205, name: "Bluetooth Speaker", price: 79, category: "Electronics", stock: 60, rating: 4.7 }
];
let div=document.createElement('div')
div.className='grid-container'
products.forEach(obj=>{
    let item=document.createElement('div')
    item.className='item'
    for(let key in obj){
        let p=document.createElement('p')
        p.innerText=`${key} : ${obj[key]}`
        item.appendChild(p)
    }
    let button=document.createElement('button')
        button.innerText='Buy Now'
        item.appendChild(button)
    div.appendChild(item)
})
document.body.appendChild(div)