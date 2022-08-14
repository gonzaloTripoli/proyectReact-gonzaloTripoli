import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(a => {
                setProduct(a.find(a => a.id ==id))
                setLoading(false)

            })
    }, [id])


    return (
        <>
            {
                !loading ?
                    <ItemDetail data={product} />
                    :
                    < div > loading</div >
            }
        </>
    )
}
export default ItemDetailContainer