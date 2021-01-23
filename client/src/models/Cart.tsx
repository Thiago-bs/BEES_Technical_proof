import Beer from './Beer'

export default interface Cart{
    activeCart: boolean,
    products: Beer[];
}