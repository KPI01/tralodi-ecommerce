'use client'
import { useContext, useStat } from 'react'
import { Sesion } from '../context/sesion'

export function useCurrency () {
    const { mndAct, divisas, dispatch } = useContext(Sesion)
    const [ currrency, setCurrency ] = useState({ 'nombre': mndAct.nombre, 'simb': mndAct.simbolo })
    const tasa = divisas[0].valorDolar

    // ActionCreator para cambiar de moneda
    const chgCurrency = (moneda) => {
        setCurrency({ 'nombre': moneda.nombre, 'simb': moneda.simbolo})
        dispatch({
            type: 'SET_CURRENCY',
            payload: moneda
        })
    }

    return{
        currency,
        chgCurrency
    }
}