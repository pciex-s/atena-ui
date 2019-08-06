const cart = localStorage.getItem('cart');
const addItemToCart =  (item) => {
    if(!cart){
        localStorage.setItem('cart','{"itens": []}');
        addToStorage(item);
    }else{
        addToStorage(item);
    }
}

const addToStorage = (item) =>{
    let cartJson = JSON.parse(localStorage.getItem('cart'));
    cartJson.itens.push(item);
    localStorage.setItem('cart', JSON.stringify(cartJson));
}

const getCart = () => {
    return JSON.parse(localStorage.getItem('cart'));
}

export {addItemToCart, getCart};
    
