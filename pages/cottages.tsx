import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../components/Layout'
import AframeList from '../components/AframeList'
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
        <AframeList items={items} />
        <LinkToIndex/>
      </Layout>
    )
  }

}

export const getStaticProps: GetStaticProps = async () => {
  const answer = await getAframe()
  console.log(answer)
  if (typeof answer==='string') {
    return { props: { error:answer }, revalidate: 10 } 
  } else {
    return { props: { items:answer }, revalidate: 10 } 
  }
}

export default CottagesPage