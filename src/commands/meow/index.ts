import fetch from "node-fetch"

export const getRandomCatFacts: () => Promise<void> = async () => {
  const response = await fetch(process.env.MEOW_FACTS_URL)
  const data: { data: [string] } = await response.json()

  return console.log(JSON.stringify(data.data[0]))
}
