'use server'
import axios from "axios"

type countersType = {
    countUsers: number
    countPools: number
    countGuesses: number
  }

export async function getCounters() {
    const responsePools = await axios.get('http://localhost:3333/pools/count')
    const responseGuesses = await axios.get('http://localhost:3333/users/count')
    const responseUsers = await axios.get('http://localhost:3333/guesses/count')

    return {
      countUsers: responseUsers.data.count,
      countPools: responsePools.data.count,
      countGuesses: responseGuesses.data.count
    }
  }