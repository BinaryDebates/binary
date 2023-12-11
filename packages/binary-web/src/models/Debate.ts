import type User from './User'
import { generateRandomUser } from './User'
import * as uuid from 'uuid'
import RFK from 'imgs/RFK.jpeg'
import hotez from 'imgs/hotez.jpeg'
import JR from 'imgs/JR.jpeg'
import rfkvshotez from 'imgs/rfkvshotez.jpeg'

export interface Participant {
  imgRoute: string
  name: string
  role: 'Debater' | 'Moderator'
  accepted: boolean
  id: string
}

export function generateRandomParticipant (): Participant {
  const id = uuid.v4()
  const isDebater = Math.random() < 0.5
  const accepted = Math.random() < 0.5
  const options: Participant[] = [
    {
      imgRoute: RFK,
      name: 'RFK ' + id.substring(0, 5),
      role: isDebater ? 'Debater' : 'Moderator',
      accepted,
      id
    },
    {
      imgRoute: JR,
      name: 'Joe Rogan ' + id.substring(0, 5),
      role: isDebater ? 'Debater' : 'Moderator',
      accepted,
      id
    },
    {
      imgRoute: hotez,
      name: 'Hotez ' + id.substring(0, 5),
      role: isDebater ? 'Debater' : 'Moderator',
      accepted,
      id
    }
  ]
  return options[Math.floor(Math.random() * options.length)]
}

export interface Pledge {
  user: User
  pledgeAmount: number
}

export interface Terms {
  fundsUse: string
  timeline: string
  fundingGoal: string
  refunds: string
  note: string
}

export function generateRandomTerms (): Terms {
  return {
    fundsUse: 'Pay the bills',
    timeline: '100 years from now',
    fundingGoal: '$5',
    refunds: 'never',
    note: 'note here'
  }
}

export default interface Debate {
  id: string

  imgRoute: string
  name: string
  subtitle: string
  description: string

  date: Date
  goal: number

  participants: Participant[]
  pledges: Pledge[]
  terms: Terms
}

export function totalPledges (debate: Debate): number {
  return debate.pledges.reduce((partialSum, { pledgeAmount }) => partialSum + pledgeAmount, 0)
}

export function generateRandomDebate (): Debate {
  const id = uuid.v4()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return {
    id,
    imgRoute: rfkvshotez,
    name: 'Debate ' + id.substring(0, 4),
    subtitle: 'The debate of the century :)',
    description: 'This is the description',
    terms: generateRandomTerms(),
    date: tomorrow,
    goal: 1000000,

    participants: [...Array(4)].map(() => {
      return generateRandomParticipant()
    }),

    pledges: [...Array(10)].map(() => {
      return {
        user: generateRandomUser(),
        pledgeAmount: Math.floor(Math.random() * 100000) / 100
      }
    })
  }
}
