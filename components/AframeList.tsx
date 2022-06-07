import * as React from 'react'
import { useState, useEffect } from 'react';
import AframeListItem from './AframeListItem'
import LeftMenu from './LeftMenu'
import { Cottage } from '../interfaces'
import VisibilitySensor from "react-visibility-sensor"

type ListProps = {
	items: Cottage[]
}

const AframeList = ( {items} : ListProps) => {
	const [leftMenuActiveItem, setLeftMenuActiveItem] = useState(0);
	const handle = (id:number) => {
		console.log(id)
		setLeftMenuActiveItem(id)
	} 
		return (
		<>
		<LeftMenu items={items} active={leftMenuActiveItem} />
		<div className='aframe'>      
			{items.map((item:Cottage) => (
				<VisibilitySensor   
				key={item.id}
				onChange={() => {handle(item.id)}}
				intervalDelay={10}
				partialVisibility={false}
				delayedCall={true}
					>           
					<AframeListItem data={item} />
				</VisibilitySensor>
			))}
		</div>
		</>    
	)
}

export default AframeList
