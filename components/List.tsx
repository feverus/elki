import * as React from 'react'
import { useState } from 'react';
import ListItem from './ListItem'
import LeftMenu from './LeftMenu'
import { Cottage } from '../interfaces'
import VisibilitySensor from "react-visibility-sensor";

type ListProps = {
  items: Cottage[]
}

const List = ( {items} : ListProps) => {
  const [leftMenuActiveItem, setLeftMenuActiveItem] = useState(0);
  return (
    <>
    <LeftMenu items={items} active={leftMenuActiveItem} />
    <div className='aframe'>
         {items.map((item:Cottage) => (
          <VisibilitySensor
            key={item.id}
            onChange={() => {setLeftMenuActiveItem(item.id)}}
            intervalDelay={10}
            partialVisibility={false}>
              <ListItem data={item} />
          </VisibilitySensor>
        ))}
    </div>
    </>    
  )
}

export default List
