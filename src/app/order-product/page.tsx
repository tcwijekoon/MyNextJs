"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){

    const router = useRouter();

    const clickButton = () => {
        console.log("clicked");
        router.push("/");  // to go root
        // router.back();  // to go back
        // router.forward(); // to go forward
        // router.replace("/");  // this will delete this page from the history
    }

    return (
        <>
        <h1> order prduct</h1>
        <button onClick={clickButton} > Order </button>
        </>
    )
}