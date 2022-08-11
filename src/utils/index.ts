import fs from "fs"
import path from "path"
import { Command } from "commander"
import { getRandomCatFacts } from "../commands/meow"

const PATH_TO_COMMANDS = path.join(process.cwd(), "src", "commands")

export const getAvailableCommands = (): string[] =>
  fs.readdirSync(PATH_TO_COMMANDS)

export const getDetailedCommands = (program: Command): Command[] => {
  const detailedCommands: Command[] = []

  getAvailableCommands().forEach((command) => {
    switch (command) {
      case "meow":
        program
          .command(command)
          .description("Get random cat facts")
          .action(getRandomCatFacts)
        break
      case "weather":
        program.command(command).description("Get weather data")
        break
    }
  })

  return detailedCommands
}
