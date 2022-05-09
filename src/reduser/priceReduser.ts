const ADD_PRISE = 'ADD_PRISE'

type Pricetype = {
    name: string
    colors: string
    id: number

}
let initialState = {
    prise: [
        {
            id: 1 ,
            name: 'f',
            colors: ''
        }
    ] as Array<Pricetype>,


}
export type PriceReduser = typeof initialState
const priceReduser = (state = initialState, action: any): PriceReduser => {

    switch (action.type) {
        case ADD_PRISE:
            let prise = action.prise

            return {
                ...state,
                prise: [...state.prise, prise]
            }
        

        default: return state
    }
}
export type addPriceType = {
    type: typeof ADD_PRISE
    prise: string
}
export const addPriceActionCreetor = (prise: string) => {
    return { type: ADD_PRISE, prise }
}



export default priceReduser