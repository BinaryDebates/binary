export type ParticipantId = string & { __participantIdBrand: any }

// TODO: Fix this
/* eslint-disable-next-line */
export namespace ParticipantId {
  export const of = (id: string): ParticipantId => id as ParticipantId
}

export interface Participant {
  id: ParticipantId
  name: string
  role: ParticipantRole
  imgRoute: string
}

export type ParticipantRole = 'moderator' | 'participant'
