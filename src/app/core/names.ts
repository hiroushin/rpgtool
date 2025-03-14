import { Dice } from "./dice.rules"

export class Names {

  protected static consonant = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
  protected static vowel = ["a", "e", "i", "o", "u", "y"]
  protected static unityEnd = ["r", "s", "h", "l", "z", "n", "m"]
  protected static unityMid = ["r", "h", "l"]

  static generate(): string {
    let nSyllables = Dice.roll(3, false).value
    let name = ""
    while (nSyllables) {
      const u = Dice.roll(5, false).value
      const c = Dice.roll(Names.consonant.length, false).value
      const v = Dice.roll(Names.vowel.length, false).value
      const ue = Dice.roll(Names.unityEnd.length, false).value
      const um = Dice.roll(Names.unityMid.length, false).value
      name += Names.consonant[c - 1]
      if (u == 1) name += Names.unityMid[um - 1]
      name += Names.vowel[v - 1]
      if (u == 2) name += Names.unityEnd[ue - 1]
      nSyllables--
    }
    return name.slice(0, 1).toUpperCase() + name.slice(1)
  }

}
