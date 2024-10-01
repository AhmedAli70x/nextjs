"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const NavigationTestPage = () => {

    //client Side Navigation
     
    const pathname= usePathname()
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    console.log(q)

    const router = useRouter()

    const handleClick = ()=> {
        console.log("clicked")
        router.push("/")
    }
    return <div>
         <Link href="/" prefetch={false} >Click here</Link>
         <button onClick={handleClick}> Write and redirect</button>
    </div>;
  };
  
  export default NavigationTestPage;