const codes = {
  '0': '0', // Липсва информация
  '1': '0310-1', // Знаци от камък и бетон
  '2': '0310-1-1', // Камък от твърда порода
  '3': '0310-1-2', // Метална тръба с бетонирана горна част
  '4': '0310-1-3', // Бетоново блокче с метална тръба в центъра
  '5': '0310-2', // Знаци от полимерен бетон
  '6': '0310-3', // Знаци от полимерен бетон с 'С' образен ствол
  '7': '0310-4', // Знаци от други материали
  '8': '0310-5', // Знаци за стабилизиране върху трайни настилки
  '9': '0310-5-1', // Метална тръба
  '10': '0310-5-2' // Маркиращ пирон
};

export default function(code) {
  return codes[code];
}
