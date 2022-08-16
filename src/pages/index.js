import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Home/Header'
import { NavBar } from '../components/NavBar/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="p-5 lg;p-20 max-w-2xl m-auto w-full">
        <Header />
      </div>
    </>
  )
}
