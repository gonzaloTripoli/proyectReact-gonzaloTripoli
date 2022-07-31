const ItemListContainer = (greeting) => {

    return (
        <div class="grid grid-cols-6 grid-rows-3 gap-2 place-items-center font-mono font-extrabold">
            <div class="col-start-2 col-span-4 row-start-2 "><p> Este es nuestro {greeting.name}</p></div>

        </div>
    )
}
export default ItemListContainer