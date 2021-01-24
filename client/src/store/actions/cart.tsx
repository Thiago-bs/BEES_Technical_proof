import Cart from '../../models/Cart'
import Beer from '../../models/Beer'

export function changeCart(cart: Cart, beer: Beer, amount: number){
    beer = { ...beer, amount: amount };
    return {
        type: 'ADD_BEER_TO_CART',
        cart,
        beer
    }
}

export function deleteItemOnCart(cart: Cart, beer: Beer, index: number){
    let listProducts = cart.products.splice(index, 1);
    cart = { ...cart, products: listProducts}
    return {
        type: 'DELETE_ITEM_ON_CART',
        cart,
        beer,
    }
}