import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import ItemListContainer from './ItemList/ItemListContainer';
const Main = () => {
    return (
        < >
            <div className='grid place-items-center  '>
                <ItemListContainer greeting={"Store"} />
                <ItemDetailContainer />
            </div>
        </>
    )
}
export default Main