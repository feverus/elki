import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Главная">
    <h1>Тестовое задание</h1>
    <p>
      <Link href="/cottages">
        <a>Коттеджи</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage