import { Children } from "react";

export default function ProductDetailsLayout({
    children, }: {
        children : React.ReactNode;
    }
){
return(
    <>
        {children}
        {/* <h1>Feature products</h1> */}
    </>
);
}