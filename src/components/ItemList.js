import Item from "./Item"

const ItemList = ({ data }) => {

    return (
        <>
            <div className="grid grid-cols-5 grid-rows-6 gap-16 place-items-center w-max " >
                {data.map(product => <div className="row-start-1 w-44">
                    <Item key={product.id} data={product} />
                </div>)
                }
            </div>
        </>

    )
}
export default ItemList