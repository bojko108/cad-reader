const codes = {
  '1': 'Семенен естествен',
  '2': 'Семенен изкуствен',
  '3': 'Издънков',
  '4': 'Отрезници'
  //'5'
};

export default function(code) {
  return codes[code];
}
