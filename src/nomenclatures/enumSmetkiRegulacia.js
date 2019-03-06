const codes = {
  '0': 'Няма информация',
  '1': 'Не са уредени',
  '2': 'Уредени са'
};

export default function(code) {
  return codes[code];
}
