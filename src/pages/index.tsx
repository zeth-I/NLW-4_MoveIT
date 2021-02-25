import { ExperienceBar } from '../component/ExperienceBar'
import Head from 'next/head'
import { Profile } from '../component/Profile'
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../component/CompletedChallenges'
import { Countdown } from '../component/Countdown'
import { ChallengeBox } from '../component/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}