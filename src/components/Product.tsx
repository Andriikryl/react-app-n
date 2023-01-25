import React, { useState } from "react"
import { IProduct } from "../moduls"

interface ProductProps {
    product: IProduct
}

export function Product ({product}: ProductProps) {

    const [details, setDetailse] = useState(false)

    const btnBgClassName =  details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]
    
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            {product.title}
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button className={btnClasses.join(' ')} onClick={() => setDetailse(prev => !prev)}>{details ? 'Hide Details' : 'Show Details'}</button>

            {details && <div>
                <p>
                    {product.description}
                </p>
                <p>Rate: <span>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}