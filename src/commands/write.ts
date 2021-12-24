import fs from "fs"

import chalk from "chalk"
import { InteractiveScheme, LuumSpec, schemeToScssRule } from "luum"

import config from "../config"

const BLUE: LuumSpec = {
  hue: 200,
  sat: 255,
  lum: 0,
  prefer: `lum`,
}

const scheme: InteractiveScheme = {
  root: [[`spec`, BLUE]],
  attributes: {
    "--color-bg": {
      base: [[`lum`, 95 / 100]],
      hover: [[`lum`, 1]],
      active: [[`prefer`, `sat`]],
      disabled: [[`lum`, 0]],
    },
    "--color-fg": {
      base: [
        [`fix`, `sat`],
        [`shade`, 10],
      ],
      hover: [[`fix`, `sat`]],
      active: [[`lum`, 0]],
      disabled: [[`lum`, 0]],
    },
  },
}

export const write = () => {
  const tasks = config.get(`tasks`)

  const taskList = tasks
    .map(({ text, done }) => `.${text} { ${done ? `height` : `width`}: 0px }`)
    .join(`\n`)

  console.log(taskList)
  fs.writeFile(`luum.scss`, schemeToScssRule(`.foo`, scheme), `utf-8`, (err) => {
    if (err) {
      console.log(chalk.red.bold(`Error writing tasks to file!`))
    } else {
      console.log(chalk.green.bold(`Tasks have been written to file!`))
    }
  })
}
