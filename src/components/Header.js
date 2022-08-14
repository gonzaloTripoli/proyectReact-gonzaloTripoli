import Navbar from "./Nav/NavBar"

const Header = () => {
  return (
    // hover:bg-black rounded-md hover:text-white
    <>
      <div className="grid grid-cols-12 grid-rows-3 h-28  place-items-center bg-borderBlackNew font-medium use border-4  rounded-full shadow-2xl">
        <Navbar />
        <div className="col-start-12 col-end-13 row-start-2" >
         
        </div>

      </div>



    </>



  )
}
export default Header