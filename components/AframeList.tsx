import * as React from 'react'
import { useState, useEffect } from 'react';
import AframeListItem from './AframeListItem'
import LeftMenu from './LeftMenu'
import { Cottage } from '../interfaces'
import { Waypoint } from 'react-waypoint';

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
				<Waypoint   
				key={item.id}
				bottomOffset={"70%"}
				onEnter={() => {handle(item.id)}}
					>           
					<div><AframeListItem data={item} /></div>
				</Waypoint>
			))}
		</div>
		</>    
	)
}

export default AframeList
