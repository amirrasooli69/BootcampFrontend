import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>Hello every body</h3>
      <Link href="/cources">Go to Cources</Link>
      <Link href="/students">Go to Student</Link>

    </div>
  )
}
