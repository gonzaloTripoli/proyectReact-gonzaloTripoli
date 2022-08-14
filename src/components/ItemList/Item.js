import { Link } from "react-router-dom"
import CartWidget from "../CartWidget"

const Item = ({ data }) => {
    return (

        <div className="grid place-items-center text-center border-gray-500 border-4 rounded-lg  shadow-2xl" >
            <div className="row-start-1">
                <p >{data.title}</p>
            </div>
            <div className="row-start-2">
                <CartWidget src={data.imageUrl} path={data.id} />
            </div>
            <div className="row-start-3">
                <p>Articulo Nro. {data.id}</p>

            </div>
            <div className="row-start-4 ">
                <p>{data.price} $</p>
             <button className="bg-gray-700 rounded-2xl w-24">Ver detalle</button>
            </div>

        </div>

    )
}
export default Item