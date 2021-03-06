const codes = {
  '1': 'Чрез план за земеразделяне',
  '2': 'В съществуващи стари реални граници',
  '3': 'Във възстановими стари реални граници',
  '4': 'Чрез план за оземляване',
  '5': 'Обезщетяване',
  '6': 'Съществуваща собственост преди ЗСПЗЗ',
  '7': 'По реда на параграф 4 от ПЗР на ЗСПЗЗ',
  '8': 'по чл.4 при усл. на чл.7, ал.5 от ЗВСГЗГФ',
  '9': 'възстановяване в ревир'
};

export default function(code) {
  return codes[code];
}
