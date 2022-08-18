import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import ItemListContainer from './ItemList/ItemListContainer';
import { Routes, Route } from "react-router-dom"
import Cart from './Cart';
const Main = () => {
    return (
        < >
            <div className='grid place-items-center  '>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/products/:id" element={<ItemListContainer />} />
                    <Route path="/products/phones/:id" element={<ItemDetailContainer />} />
                    <Route path="/products/tv/:id" element={<ItemDetailContainer />} />
                    <Route path="/products/audio/:id" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<Cart />} />

                </Routes>
            </div>
        </>
    )
}
export default Main