export default function Review({
    params
    ,}:{
        productId :  string,
        reviewId : string
    }
){
    return <h1>product {params.productId} details {params.reviewid}</h1>
}