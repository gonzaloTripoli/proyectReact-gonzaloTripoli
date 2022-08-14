import CartWidget from "../CartWidget"
import NavItem from "./NavItem"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <div className="col-start-1 row-start-2 "><CartWidget src="/images/logo.png" path="/" /></div>
            <div className="col-start-2 col-end-3  row-start-2">
                <NavItem name="Cell Phones" path="/products/phones" />
            </div>
            <div className="col-start-3 col-end-4 row-start-2 ">
                <NavItem name="TV`s" path="/products/tv" />
            </div>
            <div className="col-start-4 col-end-5 row-start-2">
                <NavItem name="Audio" path="/products/audio" />
            </div>
            <div className="col-start-11 col-end-12 row-start-2 ">
                <NavItem name="Support" path="/support"></NavItem>
            </div>
            <div className="col-start-12 col-end-13 row-start-2 ">
                <div >
                    <Link to="/cart" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-13 bg-borderBlackNew hover:bg-neutral-900 hover:text-white  rounded-lg border-double border-8 border-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>
                </div>

            </div>

        </>)
}

export default NavBar