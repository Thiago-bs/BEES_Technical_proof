import Beer from '../models/Beer'

export default {
    render(beer: Beer) {
        return {
            id: beer.id,
            name: beer.name,
            detail: beer.detail,
            cost: beer.cost,
            promotion:  beer.promotion,
            image_url: beer.image_url,
            amount: beer.amount,
        };
    },
    renderMany(beers: Beer[]){
        return beers.map(beer => this.render(beer))
    }
}