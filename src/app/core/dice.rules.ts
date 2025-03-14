import { Injectable } from "@angular/core"
import { Data } from "./data"


export interface DiceResponse {
  faces: number
  value: number
  all?: number[]
}

@Injectable({
  providedIn: "root",
})
export class Dice {
  static StorageKey = "logRolls"

  static _log = Data.subject(Dice.StorageKey)

  static roll(faces: number, log: boolean = true): DiceResponse {
    const value = Math.floor(Math.random() * faces) + 1
    const result: DiceResponse = { faces, value, all: [value] }
    if (log) Dice.log(result)
    return result
  }

  static rollMult(faces: number, length: number, log: boolean = true): DiceResponse {
    const all: number[] = Array.from({ length }, () => Dice.roll(faces, false).value)
    const result: DiceResponse = { faces, value: NaN, all }
    if (log) Dice.log(result)
    return result
  }

  static rollSum(faces: number, length: number): DiceResponse {
    const result = Dice.rollMult(faces, length, false)
    const sum = result.all?.reduce((acc, num) => acc + num, 0) || NaN
    const finalResult: DiceResponse = { faces, value: sum, all: result.all }
    Dice.log(finalResult)
    return finalResult
  }

  static rollMax(faces: number, length: number = 2): DiceResponse {
    const result = Dice.rollMult(faces, length, false)
    const max = result.all ? Math.max(...result.all) : NaN
    const finalResult: DiceResponse = { faces, value: max, all: result.all }
    Dice.log(finalResult)
    return finalResult
  }

  static rollMin(faces: number, length: number = 2): DiceResponse {
    const result = Dice.rollMult(faces, length, false)
    const min = result.all ? Math.min(...result.all) : NaN
    const finalResult: DiceResponse = { faces, value: min, all: result.all }
    Dice.log(finalResult)
    return finalResult
  }

  static clearLog(): void {
    Data.delete(Dice.StorageKey)
  }

  static log(data?: DiceResponse): DiceResponse[] | void {
    if (!data) return Data.get(Dice.StorageKey)
    Data.add(Dice.StorageKey, data)
  }

  static getLog(): DiceResponse[] {
    return Data.get(Dice.StorageKey)
  }
}
