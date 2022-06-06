import * as React from 'react'
import { Cottage } from '../interfaces'

type ListProps = {
  items: Cottage[]
  active: number
}

const LeftMenu = ( {items, active} : ListProps) => {
  const scrollToAnchor = (id) => {
    const anchorComment = document.getElementById('item-'+id);
    if(anchorComment){
        anchorComment.scrollIntoView({ behavior: "smooth" });
    }  
  }
  return (
    <div className='left-menu'>
      <h3>Коттеджи A-frame</h3>
      <ul>
        {items.map((item:Cottage) => (
          <li key={item.id}
            onClick = {() => scrollToAnchor(item.id)}
            className={(item.id===active)?"active":""}> 
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftMenu
