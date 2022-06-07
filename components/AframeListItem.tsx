import React from 'react'
import { Cottage } from '../interfaces'
import Carousel from './Carousel'

type ListItemProps = {
  data: Cottage
}

const AframeListItem = ( {data}: ListItemProps ) => {
  return (
    <div className='item' id={'item-'+data.id}>
        <h2>{data.name}</h2>
      <Carousel images={data.images} />
      <div className='description'>
        {data.description}
      </div>
      <div className='price'>
        <h3>от {data.price} руб./сут</h3> 
      </div>
    </div>
  )
}

export default AframeListItem
