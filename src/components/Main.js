import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import ItemListContainer from './ItemList/ItemListContainer';
import { Routes, Route } from "react-router-dom"
const Main = () => {
    return (
        < >
            <div className='grid place-items-center  '>
                <Routes>
                    <Route path="/" element={<ItemListContainer  />} />
                    <Route path="/products/:id" element={<ItemListContainer/>} />
                    <Route path="/products/phones/:id" element={<ItemDetailContainer />} />
                    <Route path="/products/tv/:id" element={<ItemDetailContainer />} />

                </Routes>
            </div>
        </>
    )
}
export default Main