import { useState } from "react"
import { Link } from "react-router-dom"

import ItemCount from "../ItemCount"
const ItemDetail = ({ data }) => {
    const [onAdd, added] = useState(false)
    const add = () => {

        added(true)
    }
    return (
        <>
            < div className="grid gap-4">
                <div className="col-start-1">
                    <img src={data.imageUrl}></img>
                </div>

                <div className="col-start-2 flex items-start ">
                    <div className="py-8 grid gap-2">
                        <p className="text-sm font-mono">Category:{data.category}</p>
                        <h1 className="text-2xl">{data.title}</h1>
                        <br />
                        <p> {data.price}$</p>
                        <p>Stock disponible:{data.stock}</p>
                        <br />
                    </div>
                </div>

            </div >
            {
                !onAdd == true ?
                    <ItemCount stock={data.stock} initial={0} onAdd={add} />
                    :
                    <Link to="/cart">
                    <button className="bg-red-500 rounded-2xl w-24"> Ir al carrito</button>
                    </Link>
                
            }
        </>
    )
}
export default ItemDetail