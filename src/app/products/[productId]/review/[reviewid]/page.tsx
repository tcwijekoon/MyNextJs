import { notFound } from 'next/navigation'
  
function getRandomInt(count : number){
    return Math.floor(Math.random() * count);
}

export default function Review({
    params,
}:{
    params : {
        productId :  string,
        reviewId : string
        }
    }
){
    const randomInt = getRandomInt(2);

    if (randomInt === 1){
        throw new Error('Error getting random number');
    }
    if (parseInt(params.reviewId) > 1000){
        notFound();
    }
    return <h1>product {params.productId} details {params.reviewId}</h1>
}