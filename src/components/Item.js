import CartWidget from "./CartWidget"

const Item = ({ data }) => {
    return (

        <div className="grid grid-rows-4 place-items-center text-center  border-black border-4 h-4/6 w-1/12" >
            <div className="row-start-1">
                <p >{data.title}</p>
            </div>
            <div className="row-start-2">
                <CartWidget src={data.imageUrl} />
            </div>
            <div className="row-start-3">
                <p>Articulo Nro. {data.id}</p>

            </div>
            <div className="row-start-4 h-5/6">
                <p>{data.price} $</p>
                <button className="bg-gray-700 rounded-2xl w-24">Ver detalle</button>
            </div>

        </div>

    )
}
export default Item