import CartWidget from "./CartWidget"


function NavBar() {
    return (
        <>
            <div class="col-start-1 row-start-2"><CartWidget /></div>
            <div class="col-start-2 col-end-3  row-start-2">
                <a href="default.asp" class="hover:bg-sky-50 rounded-lg hover:ring-sky-500" >Home</a>
            </div>
            <div class="col-start-3 col-end-4 row-start-2 ">
                <a href="default.asp" class="hover:bg-sky-50 rounded-lg hover:ring-sky-500" >About</a>
            </div>
            <div class="col-start-4 col-end-5 row-start-2">
                <a href="default.asp" class="hover:bg-sky-50 rounded-lg hover:ring-sky-500" >Contact</a>
            </div>
            <div class="col-start-5 col-end-6 row-start-2">
                <a href="default.asp" class="hover:bg-sky-50 rounded-lg hover:ring-sky-500" >Market</a>
            </div>
        </>)
}

export default NavBar