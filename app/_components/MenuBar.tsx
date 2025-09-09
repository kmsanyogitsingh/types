import Link from "next/link";

const MenuBar=()=>{
    return(
        <>
            <Link href="/">home</Link>&nbsp;&nbsp;
            <Link href="/about">about</Link>&nbsp;&nbsp;
            <Link href="/contact">contact</Link>&nbsp;&nbsp;          

        </>
    );
}
export default MenuBar;