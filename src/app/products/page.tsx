import Link from "next/link";

export default function ProductList({params}){
    const prodId = 100; 

    return (
    <>
        <h1> Product List</h1>
       <h2> 
            <Link href="products/1"> Product 1</Link>
       </h2>
       <h2> 
            <Link href={`products/${prodId}`}> Product {prodId}</Link>
       </h2>
        
    </>
    )
}