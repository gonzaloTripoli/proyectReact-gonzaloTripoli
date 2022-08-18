import Item from "./Item"

const ItemList = ({ data }) => {

    return (
        <>
            <div className="grid grid-cols-5 grid-rows-2 gap-16 place-items-center w-max " >
                {data.map(product => <div key={product.id} className={data.length>5? parseInt(product.id)<=5? "row-start-1 w-44" : parseInt(product.id)<=10? "row-start-2 w-44" :"row-start-3 w-44" :"row-start-1 w-44"}>
                    <Item  data={product} />
                </div>)
                }
            </div>
        </>

    )
}
export default ItemList