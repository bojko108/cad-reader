const codes = {
  '0': 'Няма информация',
  '1': 'Малкоетажно 1-3 етажа',
  '2': 'Средноетажно 4-5 етажа',
  '3': 'Многоетажно'
};

export default function(code) {
  return codes[code];
}
