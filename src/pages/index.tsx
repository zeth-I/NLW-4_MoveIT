import Head from 'next/head'

import { ExperienceBar } from '../component/ExperienceBar'
import { Profile } from '../component/Profile'
import { CompletedChallenges } from '../component/CompletedChallenges'
import { Countdown } from '../component/Countdown'
import { ChallengeBox } from '../component/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'

import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengeContext'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}