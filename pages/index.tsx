import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Главная">
    <div className='temporary'>
      <h1>Тестовое задание</h1>
      <div className='temporary-text'>
        Это главная страница сайта. Выполненное тестовое задание находится на странице:
        <br/><br/><br/>
      </div>
      <div className='big-link'>
        <Link href="/cottages">
          <a>Коттеджи</a>
        </Link>
      </div>
      <div className='temporary-text'>
      <br/><br/><br/>
        Проект работает на node.js, поэтому возможно обновление контента модификацией файла https://elki.rent/test/aframe.json <br/>
        Я установил время хранения кэша в 10 секунд, пожалуйста, подождите некоторое время и обновите страницу с помощью ctrl+F5.
        <br/><br/><br/>
      </div>      
    </div>
  </Layout>
)

export default IndexPage