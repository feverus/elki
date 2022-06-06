import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import List from '../components/List'
import LinkToIndex from '../components/LinkToIndex'
import getAframe from '../utils/get-aframe'
import { Cottage } from '../interfaces'

type Props = {
  items?: Array<Cottage>
  error?: string
}

const CottagesPage = ({ items, error }: Props) => {
  if (error) {
    return (
      <Layout title="Ошибка API">
        <h1>Ошибка API</h1>
        {error}
        <LinkToIndex/>
      </Layout>
    )
  } else {
    return (
      <Layout title="Коттеджи">        
        <List items={items} />
        <LinkToIndex/>
      </Layout>
    )
  }

}

export const getStaticProps: GetStaticProps = async () => {
  const answer = await getAframe()
  if (typeof answer==='string') {
    return { props: { error:answer } } 
  } else {
    return { props: { items:answer } } 
  }
}

export default CottagesPage