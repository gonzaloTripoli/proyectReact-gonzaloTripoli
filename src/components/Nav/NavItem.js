import { Link } from "react-router-dom"

const NavItem = (content) => {
    return (
        <Link to={content.path} className="hover:bg-neutral-900 hover:text-white  rounded-lg border-double border-8 border-transparent" > {content.children}{content.name}</Link>
    )
}
export default NavItem