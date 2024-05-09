import Navbar from '@/components/navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
  }, [])
  return (
    <>
      <Head>
        <title>SE Mini Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <main className='font-dark1'>
      </main>
    </>
  )
}
