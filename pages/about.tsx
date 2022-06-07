import Link from 'next/link'
import Layout from '../components/Layout'
import LinkToIndex from '../components/LinkToIndex'

const AboutPage = () => (
  <Layout title="О проекте">
    <div className='temporary'>
      <h1>О проекте</h1>
      <p>Раздел в разработке</p>
    </div>
    <LinkToIndex/>
  </Layout>
)

export default AboutPage