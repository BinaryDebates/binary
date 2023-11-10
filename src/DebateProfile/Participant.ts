
export type ParticipantId = string & { __participantIdBrand: any };

export namespace ParticipantId {
  export const of = (id: string) => id as ParticipantId;
}

export interface Participant {
    id:ParticipantId,
    name: string,
    role: ParticipantRole,
    imgRoute:string,
}

export type ParticipantRole = 'moderator' | 'participant';