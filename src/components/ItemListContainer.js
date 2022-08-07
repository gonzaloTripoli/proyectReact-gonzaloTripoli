import ItemList from "./ItemList"

const ItemListContainer = (greeting) => {

    var products = [{
        title: "iphone 13",
        id: "1",
        price: 1500,
        imageUrl: "/images/product-images/iphone13.webp"
    }, {
        title: "iphone 12",
        id: "2",
        price: 1300,
        imageUrl: "/images/product-images/iphone12.webp"

    }]


    return (
        <ItemList data={products} />
    )
}
export default ItemListContainer