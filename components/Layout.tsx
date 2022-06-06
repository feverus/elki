import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({ children, title = 'Тестовое задание Ёлки' }: Props) => (
	<div>
	<Head>
		<title>{title}</title>
		<meta charSet="utf-8" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	</Head>
	<header>
		<nav>
			<Link href="/">
				<a>На главную</a>
			</Link>
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
		</nav>
	</header>
  <section className="main-block">
		{children}
	</section>
	<footer>
	</footer>
	</div>
)

export default Layout
