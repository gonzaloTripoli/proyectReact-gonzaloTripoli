import Navbar from "./NavBar"
import NavItem from "./NavItem"
const Footer = () => {
  return (
    // hover:bg-black rounded-md hover:text-white
    <>
      <div class="grid grid-cols-12 grid-rows-3 h-28  place-items-center bg-borderBlackNew font-medium use border-4  rounded-full shadow-2xl">
        <Navbar />
        <div class="col-start-12 col-end-13 row-start-2" >
          <div >
            <a href="#" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-13 bg-borderBlackNew hover:bg-neutral-900 hover:text-white  rounded-lg border-double border-8 border-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a> </div>
        </div>

      </div>



    </>



  )
}
export default Footer