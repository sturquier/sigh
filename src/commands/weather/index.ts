import fetch from "node-fetch"
import { getIpApiNetworkInformations } from "../network"

export const getWeatherData: () => Promise<void> = async () => {
  const networkInformations = (await getIpApiNetworkInformations()) as {
    lat: number
    lon: number
  }
  const { lat, lon } = networkInformations

  const response = await fetch(
    `${process.env.OPEN_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  )
  const data: Record<string, unknown> = await response.json()

  return console.log(data)
}
