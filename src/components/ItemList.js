import Item from "./Item"
import { useState, useEffect } from "react"

const ItemList = ({ data }) => {
    const [dataChange, setData] = useState([{
        title: "cargando",
        id: "cargando",
        price: "cargando",
        imageUrl: "cargando"
    }, {
        title: "cargando",
        id: "cargando",
        price: "cargando",
        imageUrl: "cargando"
    }])


    useEffect(() => {
        setTimeout(() => {
            console.log("SSS")
            setData(data)
        }, 2000)
    }, [data])

    return (
        <>
            <Item data={dataChange[0]} />
            <Item data={dataChange[1]} />
        </>

    )
}
export default ItemList