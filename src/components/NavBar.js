import CartWidget from "./CartWidget"


function NavBar() {
    return (
        <>
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
        </>)
}

export default NavBar