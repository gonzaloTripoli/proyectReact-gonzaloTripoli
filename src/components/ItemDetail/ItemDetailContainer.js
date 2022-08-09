import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(a => {
                setProduct(a[2])
                setLoading(false)

            })
    }, [])


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