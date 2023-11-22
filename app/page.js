import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='px-8 py-20 max-w-6xl mx-auto'>
      <h1 className='text-6xl'>Home page</h1>
      <Link href='/about'>about page</Link>
      <Link href='/contact'>contact page</Link>
    </main>
  )
}
