import { useState } from "react"


const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(initial)

    const increase = () => {
        if (contador < stock) {
            setContador(contador + 1)

        }
    }
    const reduce = () => {
        if (contador > 0) {
            setContador(contador - 1)

        }

    }
    const reset = () => {
        if (contador != 0) {
            setContador(0)
        }
    }

    return (
        <div class="grid grid-cols-5 gap-2 grid-rows-2 place-items-center font-mono font-extrabold">


            <div className="col-start-2 col-end-3 justify-self-end row-start-1">
                <button onClick={reduce}>-</button>
            </div>
            <div className="col-start-3 col-end-4 row-start-1 row row-end-2 border-double ">
                <p >{contador}</p>

            </div>
            <div className="col-start-4 col-end-5 justify-self-start row-start-1">
                <button onClick={increase}>+</button>

            </div>
            <div className="col-start-2 col-end-5 row-start-3">
                <button onClick={reset} className="bg-gradient-to-r from-red-500 to-red-800 rounded-lg font-black h-9"> Agregar al carrito</button>
            </div>

        </div>
    )
}
export default ItemCount