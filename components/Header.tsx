import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import IconBurger from '../svg/burger.svg';
import IconClose from '../svg/close.svg';

const Header = () => {
	const [showed, show] = useState(false);
	return (
	<header>
		<div className='burger'>
			<IconBurger onClick={() => show(true)}/>
		</div>
		<nav className={(showed)?"":"hidden"}>
			<div className='left-align'>
				<div className='close'>
					<IconClose onClick={() => show(false)}/>
				</div>
				<Link href="/cottages">
					<a>Коттеджи</a>
				</Link>
				<Link href="/locations">
					<a>Локации</a>
				</Link>
				<Link href="/about">
					<a>О проекте</a>
				</Link>
				<Link href="/booking">
					<a>Бронирование</a>
				</Link>
			</div>
		</nav>
	</header>
  	)
}

export default Header
