import ItemList from "./ItemList"
import { products } from "../../utils/products"
import { useEffect, useState } from "react"
import { customFetch } from "../../utils/customFetch"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ }) => {
    const { id } = useParams()
    console.log(id)
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(a => {
                if (id != null) {
                    setLoading(false)
                    setList(a.filter(x => x.category === id))
                } else {
                    setList(a)
                    setLoading(false)
                }

            })

    }, [id])
    var title = id!=undefined? id=="phones"? "PHONES" : id =="tv" ? "TELEVISIONS" : "AUDIO" : "MAIN PAGE"
    return (
        <div>
            <div className="h-40 text-center align-bottom font-mono">
                <p className="py-12  text-3xl ">{title}</p>
            </div>
            {!loading ?
                <ItemList data={list} />
                :
                <h2 className="text-black font-extrabold font-mono">loading</h2>}
        </div>)
}
export default ItemListContainer