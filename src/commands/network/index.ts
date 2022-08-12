import chalk from "chalk"
import fetch from "node-fetch"
import os, { NetworkInterfaceInfo } from "os"

const getEthernetInformations = (): NetworkInterfaceInfo[] =>
  os.networkInterfaces().en0

const getIPv6Address = (): string =>
  getEthernetInformations().find(
    (info) => info.family === "IPv6" && info.scopeid < 4
  ).address

const getOSNetworkInformations = (): void => {
  Object.entries(os.networkInterfaces()).forEach(
    (networkInterface: [string, NetworkInterfaceInfo[]]) => {
      console.log(chalk.bold(networkInterface[0]))
      console.table(networkInterface[1])
    }
  )
}

export const getIpApiNetworkInformations: () => Promise<
  Record<string, unknown>
> = async () => {
  const response = await fetch(`${process.env.IP_API_URL}${getIPv6Address()}`)
  const data: Record<string, unknown> = await response.json()

  return data
}

export const getNetworkInformations = async (option: {
  ipapi?: boolean
}): Promise<void> => {
  if (option.ipapi) {
    console.log(await getIpApiNetworkInformations())
  } else {
    getOSNetworkInformations()
  }
}
