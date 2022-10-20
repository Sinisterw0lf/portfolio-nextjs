import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Navbar from '../components/navigation/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Layout>
        <h1 className='uppercase text-center pt-20 text-6xl font-bold'>Développeur web</h1>
        <div className='flex justify-center py-20'>
          <img src="undraw_prog.svg" alt="" />
        </div>
        
      </Layout>
    </div>
  )
}
