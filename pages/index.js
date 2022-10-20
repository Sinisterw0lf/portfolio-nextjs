import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className='text-center space-y-5'>
          <p className=''>Retrouvez ma présentation, mes compétences, ainsi que mon CV</p>
          <button className = 'p-3 rounded-md bg-teal-100 text-xl'> En savoir plus </button>
        </div>
        
      </Layout>
    </div>
  )
}
