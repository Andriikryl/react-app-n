import React, {useState} from 'react'
import {IProduct} from '../models'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <>
        <Card sx={{ maxWidth: 345 }} className='m-10'>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="140"
          src={product.image} className="w-1/6 p-20" alt={product.title} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          { product.title }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}>
           { details ? 'Hide Details' : 'Show Details' }
        </Button>
        <Typography gutterBottom variant="h5" component="div" className='pl-10 '>
       Prise: {product.price}
          </Typography>
      </CardActions>
      <Typography variant="body2" color="text.secondary">
        {details && <div>
        <p>{ product.description }</p>
        <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
      </div>}
          </Typography>
    </Card>
    </>
  )
  
}