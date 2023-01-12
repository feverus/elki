import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Главная">
    <div className='temporary'>
      <h1>Тестовое задание</h1>
      <div className='temporary-text'>
        Это главная страница сайта. Выполненное тестовое задание находится на странице:
      </div>
      <div className='big-link'>
        <Link href="/cottages">
          <a>Коттеджи</a>
        </Link>
      </div>    
    </div>
  </Layout>
)

export default IndexPage