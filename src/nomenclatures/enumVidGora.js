const codes = {
  '1': 'Иглолистни',
  '2': 'Широколистни високостъблени',
  '3': 'За реконструкция',
  '4': 'Превръщане',
  //'5': '',
  '6': 'нискостъблени',
  '7': 'тополови'
  //'8'
};

export default function(code) {
  return codes[code];
}