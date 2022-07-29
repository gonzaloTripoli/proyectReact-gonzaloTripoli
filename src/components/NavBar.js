
import CartWidget from "./CartWidget"


function NavBar() {
    return (
        <>
            <div class="grid grid-cols-12 grid-rows-3 h-40 gap-2 place-items-center  bg-sky-200 font-extrabold use">
                <div></div>
                <div class="col-start-1 row-start-2"><CartWidget /></div>
                <div class="col-start-7 col-end-8  row-start-2">
                    <a href="default.asp" >Home</a>
                </div>
                <div class="col-start-8 col-end-9 row-start-2 ">
                    <a href="default.asp">About</a>
                </div>
                <div class="col-start-9 col-end-10 row-start-2">
                    <a href="default.asp">Contact</a>
                </div>
                <div class="col-start-10 col-end-11 row-start-2">
                    <a href="default.asp">Market</a>
                </div>
                <div class="col-start-12 col-end-13 bg-sky-900 row-start-2" >
                    <div ><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-13 bg-sky-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>  </div>
                </div>

            </div>



        </>)
}

export default NavBar