#! /usr/bin/env node

import chalk from "chalk"
import figlet from "figlet"

const main = (): void => {
  console.log(
    chalk.green(figlet.textSync("Sigh", { horizontalLayout: "full" }))
  )
}

main()
