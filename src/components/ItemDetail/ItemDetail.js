const ItemDetail = ({ data }) => {
    console.log(data)

    return (
        < div className="grid gap-4">
            <div className="col-start-1">
                <img src={data.imageUrl}></img>
            </div>

            <div className="col-start-2 flex items-start ">
                <div className="py-8 grid gap-2">
                    <p class="text-sm font-mono">Category:{data.category}</p>
                    <h1 className="text-2xl">{data.title}</h1>
                    <br />
                    <p> {data.price}$</p>
                    <p>Stock disponible:{data.stock}</p>
                    <input type="number" className="bg-slate-300 rounded-lg" />
                    <br/>
                    <button className="bg-sky-600 rounded-2xl w-24">Comprar</button>
                </div>
            </div>




        </div >
    )
}
export default ItemDetail