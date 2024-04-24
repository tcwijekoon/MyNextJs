export default function Docs({
    params,
}:{
    slug: string[]
}){    
    // folder name [[...slug]] was there previously, but with that name dev server not start, so added first as parent floder name, 
    // below code related to [[...slug]] folder name pattern
    // if (params.slug.length == 2){        
    //     return <h1> this is {params.slug[0]} doc folder {params.slug[1]}</h1>    
    // }else if (params.slug.length == 1){
    //     return <h1> this is {params.slug[0]} doc folder</h1>    
    // }

    return <h1> this is doc folder</h1>
}