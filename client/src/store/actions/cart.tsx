import Cart from '../../models/Cart'
import Beer from '../../models/Beer'

export function changeCart(cart: Cart, beer: Beer){
    return {
        type: 'ADD_BEER_TO_CART',
        cart,
        beer
    }
}