import fs from "fs"
import path from "path"
import { Command } from "commander"
import { getNetworkInformations } from "../commands/network"
import { getRandomCatFacts } from "../commands/meow"
import { getWeatherData } from "../commands/weather"

const PATH_TO_COMMANDS: string = path.join(process.cwd(), "src", "commands")

const getAvailableCommands = (): string[] => fs.readdirSync(PATH_TO_COMMANDS)

export const getDetailedCommands = (program: Command): Command[] => {
  const detailedCommands: Command[] = []

  getAvailableCommands().forEach((command) => {
    switch (command) {
      case "network":
        program
          .command(command)
          .option("-ip, --ipapi", "Output from IP-API")
          .description("Get network informations")
          .action(getNetworkInformations)
        break
      case "meow":
        program
          .command(command)
          .description("Get random cat facts")
          .action(getRandomCatFacts)
        break
      case "weather":
        program
          .command(command)
          .description("Get weather data")
          .action(getWeatherData)
        break
    }
  })

  return detailedCommands
}
