const NavItem = (content) => {
    return (
        <a href="default.asp" class="hover:bg-neutral-900 hover:text-white  rounded-lg border-double border-8 border-transparent" > {content.children}{content.name}</a>


    )
}
export default NavItem