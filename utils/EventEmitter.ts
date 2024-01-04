type EventArgs = Record<string, unknown>
type ListenerWithPayload<Payolad> = (payload: Payolad) => void

class EventEmitter<Args extends EventArgs> {
  private map: Partial<Record<keyof Args, ListenerWithPayload<Args[keyof Args]>[]>> = {}

  emit<Key extends keyof Args>(event: Key, payload: Args[Key]): void {
    this.map[event]?.forEach(listener => {
      listener(payload)
    })
  }

  on<Key extends keyof Args>(event: Key, listener: ListenerWithPayload<Args[Key]>): void {
    if (!this.map[event]) this.map[event] = []

    this.map[event]?.push(listener as ListenerWithPayload<Args[keyof Args]>)
  }

  off<Key extends keyof Args>(event: Key, listener: ListenerWithPayload<Args[Key]>): void {
    const list = this.map[event]

    if (!list) return

    const index = list.indexOf(listener as ListenerWithPayload<Args[keyof Args]>)

    if (index === -1) return

    list.splice(index, 1)

    if (list.length) return

    delete this.map[event]
  }

  once<Key extends keyof Args>(event: Key, listener: ListenerWithPayload<Args[Key]>): void {
    const newListener: ListenerWithPayload<Args[Key]> = (payload?: Args[Key]): void => {
      this.off(event, newListener)

      listener(payload as Args[Key])
    }

    this.on(event, newListener)
  }
}

export const eventEmitter = new EventEmitter<{
  'update:header-padding': number
}>()
