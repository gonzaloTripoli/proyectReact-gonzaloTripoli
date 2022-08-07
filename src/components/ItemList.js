import Item from "./Item"
import { useState, useEffect } from "react"

const ItemList = ({ data }) => {
    const [dataChange, setData] = useState([{
        title: "cargando",
        id: "cargando",
        price: "cargando",
        imageUrl: "/images/loading.gif"
    }, {
        title: "cargando",
        id: "cargando",
        price: "cargando",
        imageUrl: "/images/loading.gif"
    }])
    useEffect(() => {
        setTimeout(() => {
            console.log("SSS")
            setData(data)
        }, 2000)
    }, [data])

    return (
        <>
            <div className="grid grid-cols-5 grid-rows-6 gap-16 place-items-center w-max " >
                <div className="row-start-2 w-44">
                <Item data={dataChange[0]} />
                </div>
                <div className="row-start-2  w-full">
                <Item data={dataChange[1]} />
                </div>
                <div className="row-start-2  w-full">
                <Item data={dataChange[0]} />
                </div>
                <div className="row-start-2  w-full">
                <Item data={dataChange[1]} />
                </div>
                <div className="row-start-2 w-full ">
                <Item data={dataChange[1]} />
                </div>
                
            </div>
        </>

    )
}
export default ItemList