import CartWidget from "./CartWidget"
import NavItem from "./NavItem"


function NavBar() {
    return (
        <>
            <div class="col-start-1 row-start-2"><CartWidget /></div>
            <div class="col-start-2 col-end-3  row-start-2">
                <NavItem name="Phones" />
            </div>
            <div class="col-start-3 col-end-4 row-start-2 ">
                <NavItem name="TV`s" />
            </div>
            <div class="col-start-4 col-end-5 row-start-2">
                <NavItem name="OFFERS" />
            </div>
            <div class="col-start-5 col-end-6 row-start-2">
                <NavItem name="More"  />
            </div>
        </>)
}

export default NavBar