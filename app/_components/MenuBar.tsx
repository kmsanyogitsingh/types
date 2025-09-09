import Link from "next/link";

const MenuBar=()=>{
    return(
        <>
            <Link href="/">home</Link>&nbsp;&nbsp;
            <Link href="/input">input</Link>&nbsp;&nbsp;
            <Link href="/show">show</Link>&nbsp;&nbsp;    
         <Link href="/update">Update</Link>
        </>
    );
}
export default MenuBar;