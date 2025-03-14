import { classes, races } from "../data/pathfinder2";
import { ChanceBalance } from "./chance-balance";
import { Data } from "./data";
import { Names } from "./names";

export class Pathfinder2 {
  static StorageKey = "npcsPathfinder2"

  static list() {
    return Data.get(Pathfinder2.StorageKey)
  }

  static subject() {
    return Data.subject(Pathfinder2.StorageKey)
  }

  static chanceBalanceClasses(race: any) {
    var c = []
    for (const i in classes) {
      let chance = classes[i].chance || 1
      if (classes[i].attributes.key.filter(item => race.attributes.good.includes(item)).length) {
        chance += 1
      }
      if (classes[i].attributes.key.filter(item => race.attributes.bad.includes(item)).length) {
        chance -= 0.5
      }
      c.push(Object.assign({}, classes[i], {
        chance: chance
      }))
    }
    return ChanceBalance.roll(c)
  }

  static generateNpc() {
    const r = ChanceBalance.roll(races)
    const c = Pathfinder2.chanceBalanceClasses(r)
    const result = {
      "name": Names.generate(),
      "race": r.name,
      "sub": ChanceBalance.roll(r.sub).name,
      "class": c.name,
    }
    Data.add(Pathfinder2.StorageKey, result)
    return result
  }

}
