#! /usr/bin/env node

import { program } from "commander"

import { add, list, write } from "./commands"

program
  .command(`list`)
  .description(`List all tasks in the todo list`)
  .action(list)

program
  .command(`add <task>`)
  .description(`Add a task to the todo list`)
  .action(add)

program
  .command(`write`)
  .description(`Write the todo list to the file`)
  .action(write)

program.parse()
