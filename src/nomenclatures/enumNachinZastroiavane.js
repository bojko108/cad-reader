const codes = {
  '0': 'Няма информация',
  '1': 'Свободно',
  '2': 'Свързано',
  '3': 'Комплексно'
};

export default function(code) {
  return codes[code];
}
