import React from 'react'
import Banner from '../../components/Banner/Banner'
import Top from '../../components/Top/Top'
import { useLoaderData } from 'react-router'
import useApps from '../../hooks/useApps'
import Loading from '../../components/Loading/Loading'

const Home = () => {
  // const data = useLoaderData();
    const { apps, loading , error } = useApps();

  // console.log(data)
  return (
    <>
     {
     loading?<Loading/>:
      <div>
        <Banner/>
      <Top data={apps} />
      </div>
    }
    
    </>
   
  )
}

export default Home