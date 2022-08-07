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
            <div className="grid grid-cols-5 grid-rows-6 gap-16 place-items-center" >
                <div className="row-start-2">
                <Item data={dataChange[0]} />
                </div>
                <div className="row-start-2">
                <Item data={dataChange[1]} />
                </div>
                <div className="row-start-2">
                <Item data={dataChange[0]} />
                </div>
                <div className="row-start-2">
                <Item data={dataChange[1]} />
                </div>
                <div className="row-start-2">
                <Item data={dataChange[1]} />
                </div>
                
            </div>
        </>

    )
}
export default ItemList