import React from 'react'
import Banner from '../../components/Banner/Banner'
import Top from '../../components/Top/Top'
import { useLoaderData } from 'react-router'

const Home = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div><Banner/>
    <Top data={data} />
    </div>
  )
}

export default Home