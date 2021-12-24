import Conf, { Schema } from "conf"

export type Task = {
  text: string
  done: boolean
}

const schema: Schema<{
  tasks: Task[]
}> = {
  tasks: {
    type: `array`,
    default: [],
    items: {
      type: `object`,
      properties: {
        text: {
          type: `string`,
          default: ``,
        },
        done: {
          type: `boolean`,
          default: false,
        },
      },
    },
  },
}

export default new Conf({ schema })
