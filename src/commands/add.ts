import chalk from "chalk"

import config, { Task } from "../config"

export const add = (text: string) => {
  const tasks = config.get(`tasks`)

  const newTask: Task = {
    text,
    done: false,
  }

  config.set(`tasks`, [...tasks, newTask])

  console.log(chalk.green.bold(`Task has been added successfully!`))
}
