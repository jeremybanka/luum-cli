import chalk from "chalk"

import config from "../config"

const { log } = console

const thereAre = (list: unknown[]) => Boolean(list.length)

export const list = () => {
  const tasks = config.get(`tasks`)
  if (thereAre(tasks)) {
    log(
      chalk.blue.bold(
        `Tasks in green are done. Tasks in yellow are still not done.`
      )
    )
    tasks
      .map((task) =>
        task.done ? chalk.green(task.text) : chalk.yellow(task.text)
      )
      .forEach((task) => log(task))
  } else {
    console.log(
      chalk.red.bold(`No tasks. Add some with ${chalk.yellow(`luum add`)}`)
    )
  }
}
