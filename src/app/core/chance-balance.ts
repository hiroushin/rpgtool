
export class ChanceBalance {

  static roll(items: any[]) {
    // Normaliza os pesos, assumindo que se "chance" não existir, o padrão é 1
    const weightedItems = items.map(item => ({
      item,
      weight: item.chance ?? 1,
    }));

    // Calcula a soma total dos pesos
    const totalWeight = weightedItems.reduce((sum, { weight }) => sum + weight, 0);

    // Gera um número aleatório dentro da soma total de pesos
    let random = Math.random() * totalWeight;

    // Percorre a lista e encontra o item correspondente ao número aleatório
    for (const { item, weight } of weightedItems) {
      if (random < weight) {
        return item;
      }
      random -= weight;
    }

    // Caso algo dê errado (o que não deveria ocorrer), retorna o primeiro item
    return items[0];
  }

}
