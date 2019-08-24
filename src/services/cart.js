const createOrClearCart = () => {
    let cart = { items: [] };
    setCart(cart);
    return cart;
}

const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
        cart = createOrClearCart();
    }
    return cart;
}

const setCart = (cartJson) => {
    localStorage.setItem('cart', JSON.stringify(cartJson));
}

const addProduto = (produto) => {
    let cart = getCart();
    let produtoBuscado = cart.items.find(x => x.produto.id == produto.id);
    if (!produtoBuscado) {
        cart.items.push({ qtd: 1, produto: produto });
    }else{
        produtoBuscado.qtd++;
    }
    setCart(cart);
    return cart;
}

const removeProduto = (item) => {
    let cart = getCart();
    let position = cart.items.findIndex(x => x.produto.id == item.produto.id);
    if (position != -1) {
        cart.items.splice(position, 1);
    }
    setCart(cart);
    return cart;
}

const increaseQuantity = (item) => {
    let cart = getCart();
    let position = cart.items.findIndex(x => x.produto.id == item.produto.id);
    if (position != -1) {
        cart.items[position].qtd++;
    }
    setCart(cart);
    return cart;
}

const setQuantity = (item, qtd) => {
    let cart = getCart();
    let position = cart.items.findIndex(x => x.produto.id == item.produto.id);
    if (position != -1) {
        cart.items[position].qtd = qtd;
    }
    setCart(cart);
    return cart;
}

const setPrice = (item, preco) => {
    let cart = getCart();
    let position = cart.items.findIndex(x => x.produto.id == item.produto.id);
    if (position != -1) {
        cart.items[position].produto.preco = preco;
    }
    setCart(cart);
    return cart;
}

const decreaseQuantity = (item) => {
    let cart = getCart();
    let position = cart.items.findIndex(x => x.produto.id == item.produto.id);
    if (position != -1) {
        cart.items[position].qtd--;
        if (cart.items[position].qtd < 1) {
            cart = removeProduto(item);
        }
    }
    setCart(cart);
    return cart;
}

const total = () => {
    let cart = getCart();
    let sum = 0;
    for (var i = 0; i < cart.items.length; i++) {
        sum += cart.items[i].produto.preco * cart.items[i].qtd;
    }
    return sum;
}

export { getCart, addProduto, removeProduto, increaseQuantity, decreaseQuantity, total, setQuantity, setPrice };

