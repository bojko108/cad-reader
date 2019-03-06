// in meters
const codes = {
  '11': 0.05,
  '12': 0.1,
  '13': 0.15,
  '14': 0.2,
  '15': 0.3,
  '16': 0.4,
  '17': 0.6,
  '18': 0.9,
  '19': 1.2,
  '20': 1.8,
  '21': 'над 1.8'
};

export default function(code) {
  return codes[code];
}
