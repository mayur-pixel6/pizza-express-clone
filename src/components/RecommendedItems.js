

import { MapData } from './map';
import { RecommendedItemsList, startersItemList, SignatureDoughBallsList, EightInchPizzaList, PastaList, CalabreseCalzonesList, SaladList, BeveragesList, DessertsList } from '../data/data'

export const RecommendedItems = () => {
    return (
        MapData(RecommendedItemsList)
    )
}

export const StartersItems = () => {
    return (
        MapData(startersItemList)
    )
}

export const SignatureDoughBalls = () => {
    return (
        MapData(SignatureDoughBallsList)
    )
}

export const EightInchPizza = () => {
    return (
        MapData(EightInchPizzaList)
    )
}
export const Pasta = () => {
    return (
        MapData(PastaList)
    )
}
export const CalabreseCalzones = () => {
    return (
        MapData(CalabreseCalzonesList)
    )
}
export const Salad = () => {
    return (
        MapData(SaladList)
    )
}
export const Beverages = () => {
    return (
        MapData(BeveragesList)
    )
}
export const Desserts = () => {
    return (
        MapData(DessertsList)
    )
}
