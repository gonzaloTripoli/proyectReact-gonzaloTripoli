import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';
const Main = () => {
    return (


        <>
            <ItemListContainer name="Store" />
            <ItemCount initial={0} stock={10} />
        </>
    )
}
export default Main