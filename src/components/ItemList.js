import Item from "./Item"

const ItemList = ({ data }) => {
    return (
        <>
            <Item data={data[0]} />
            <Item data={data[1]} />
        </>

    )
}
export default ItemList