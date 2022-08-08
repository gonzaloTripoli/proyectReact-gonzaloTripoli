import ItemList from "./ItemList"
import { products } from "../utils/products"
import { useEffect, useState } from "react"
import { customFetch } from "../utils/customFetch"

const ItemListContainer = (greeting) => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(a => {
                setList(a)
                setLoading(false)
            })

    }, [])


    return (
        <div>
            {!loading ?
                <ItemList data={list} />
                :
                <h2 className="text-black font-extrabold font-black">loading</h2>}
        </div>)
}
export default ItemListContainer