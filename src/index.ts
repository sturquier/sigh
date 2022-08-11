#! /usr/bin/env node

import chalk from "chalk"
import figlet from "figlet"
import { Command } from "commander"
import * as dotenv from "dotenv"
import { getDetailedCommands } from "./utils"

const main = (): void => {
  const program = new Command()
  program
    .name("sigh")
    .description("Sigh CLI")
    .version("1.0.0")
    .addHelpCommand(false)

  console.log(
    `${chalk.blue(figlet.textSync("Sigh", { horizontalLayout: "full" }))}\n`
  )

  getDetailedCommands(program)
  program.parse(process.argv)
}

dotenv.config()
main()
