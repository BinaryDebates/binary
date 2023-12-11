import RFK from '../imgs/RFK.jpeg'
import * as uuid from 'uuid'

export default interface User {
  name: string
  userName: string
  imgRoute: string
}

export function generateRandomUser (): User {
  const id = uuid.v4()
  return {
    userName: 'username ' + id,
    name: 'RFK ' + id,
    imgRoute: RFK
  }
}
