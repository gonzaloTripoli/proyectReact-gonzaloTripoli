import { Link } from "react-router-dom"


const CartWidget = ({ src,path }) => {
    console.log(path)
    return (
        <Link to={path}> <img className="lg:w-24 rounded-t-2xl " src={src} /></Link>
    )
}
export default CartWidget