import { BehaviorSubject } from "rxjs"

export class Data {

  static subjects: Record<string, any> = {}


  static subject(table: string): BehaviorSubject<any[]> {
    let s = Data.subjects[table]
    if (!s) Data.subjects[table] = new BehaviorSubject<any[]>([])
    return Data.subjects[table]
  }

  static delete(table: string): void {
    Data.subject(table).next([])
    localStorage.removeItem(table)
  }

  static add(table: string, data: any): void {
    let current = Data.get(table)
    current.unshift(data)
    Data.subject(table).next(current)
    localStorage.setItem(table, JSON.stringify(current))
  }

  static get(table: string): any[] {
    try {
      const storedData = localStorage.getItem(table)
      return storedData ? JSON.parse(storedData) : []
    } catch (error) {
      console.error("Erro ao ler o localStorage:", error)
      return []
    }
  }
}
