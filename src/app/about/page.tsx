// export const metadata = {
//     title : "About next Learning if not override child pages",
// };

import { Metadata } from "next";

// export const metadata : Metadata= {
//     title : "about",  // here it use parent( main layout.tsx) title template title and pass this parameter
// };

export const metadata : Metadata = {
    title : {
        absolute : "Absolute about title", // to use override aslute title in main layout.tsx title
    }
}

export default function About(){
    return <h1>About</h1>;
}