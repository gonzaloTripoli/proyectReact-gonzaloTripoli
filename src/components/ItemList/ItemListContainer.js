import ItemList from "./ItemList"
import { products } from "../../utils/products"
import { useEffect, useState } from "react"
import { customFetch } from "../../utils/customFetch"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ }) => {
    const id = useParams()
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(a => {
                setList(a)
                setLoading(false)
            })

    }, [id])


    return (
        <div>
            <p className="text-center font-black">Store</p>

            {!loading ?
                <ItemList data={list} />
                :
                <h2 className="text-black font-extrabold ">loading</h2>}
        </div>)
}
export default ItemListContainer