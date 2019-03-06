const codes = {
  '1': 'Дървопроизв.и средообр.',
  '2': 'резерват',
  '3': '',
  '4': 'защитена местност',
  '5': '',
  '6': 'природна забележителност ',
  '7': 'зелена зона',
  '8': 'лесопарк',
  '9': 'национален парк',
  '10': 'курортна гора',
  '11': 'д.з.г. пояс',
  '12': 'вододайна зона',
  '13': 'защитна ивица шосе',
  '14': 'горна гр. на гората',
  '15': 'тех. пр. борба с ероз.',
  '16': 'на др. ведомство',
  '17': 'семенна база',
  '18': '200 м. край язовир',
  '19': 'защ. ивица край река',
  '20': '1 км. край морето',
  '21': 'защ. ивица ж.п.линия',
  '22': 'защ. ивица на Дунав',
  '23': 'нелесопригодна площ',
  '24': 'ускорено производство',
  '25': 'издънково стопанство',
  '26': 'интензивни култури',
  '27': 'клек',
  '28': 'скално-урвест терен',
  '29': 'полезащитен гор. пояс',
  '30': 'поройни земи',
  '31': 'буферна зона',
  '32': 'защ. ивица газопровод',
  '33': 'ловно стоп.територия',
  '34': 'ПЛС',
  '35': 'токовище',
  '36': 'тех. пр. озелен.магистр.',
  '37': '200 м. около манастир',
  '38': 'защитен обект',
  '39': 'защитна ивица',
  '40': 'защитни гори',
  '41': 'вилна зона по 21 ПМС',
  '42': 'дивечоразв. Станция',
  '43': 'защитен ландшафт',
  '44': 'курортен ресурс',
  '45': 'курорт',
  '46': 'курортна местност',
  '47': '200 м. около хижа',
  '48': 'паметник на културата',
  '49': 'дендрариум',
  '50': 'ботаническа градина',
  '51': 'зоологическа градина',
  '52': 'плантация',
  '53': 'рекреационни',
  '54': 'други',
  '55': 'водоохранни земи',
  '56': 'водосборен басейн',
  '57': 'район на извор',
  '58': 'противоерозионни земи',
  '59': 'ерозирани земи',
  '60': 'мелиоративни земи',
  '61': 'защ. ивица магистрала',
  '62': 'поддържан резерват',
  '63': 'промишлена зона',
  '64': 'ловен парк',
  '65': 'хидропарк',
  '66': 'паркова площ',
  '67': 'охранителна зона',
  '68': 'ловностопански земи',
  '69': 'горски разсадник',
  '70': 'семепроизв.насаждение',
  '71': 'семепроизв.градина',
  '72': 'научно-изсл.гора',
  '73': 'гора около ц.пром.зам.',
  '74': '200 м езеро',
  '75': 'остров река Дунав',
  '76': '10м канал',
  '77': 'зоопарк',
  '78': 'крайселищен парк',
  '79': 'хидроложки стационар',
  '80': 'природен парк',
  '96': 'архит. резерват',
  '142': 'генеративна градина',
  '143': 'временно семепр. нас.',
  '144': 'географска култура',
  '150': 'Историко-арх. резерват'
};

export default function(code) {
  return codes[code];
}