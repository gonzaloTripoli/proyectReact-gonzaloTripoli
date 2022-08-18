import { useState } from "react"


const ItemCount = ({onAdd,stock, initial}) => {


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
        
        <div className="grid grid-cols-3 gap-2 grid-rows-1 place-items-center font-mono font-extrabold bg-zinc-700 w-2/12 rounded-3xl " >


            <div className="col-start-1 col-end-2 justify-self-end row-start-1">
                <button onClick={reduce}>-</button>
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row row-end-2 border-double ">
                <p >{contador}</p>

            </div>
            <div className="col-start-3 col-end-4 justify-self-start row-start-1">
                <button onClick={increase}>+</button>

            </div>
            <div className="col-start-1 col-end-4 row-start-3">
                <button onClick={onAdd}  className="bg-gradient-to-r from-red-500 to-red-800 rounded-lg font-black h-9"> Agregar al carrito</button>
            </div>

        </div>
    )
}
export default ItemCount