const countries = {
  '036': 'Австралия',
  '040': 'Австрия',
  '031': 'Азербайджан',
  '008': 'Албания ',
  '012': 'Алжир',
  '024': 'Ангола',
  '660': 'Ангуила',
  '020': 'Андора',
  '010': 'Антарктида',
  '028': 'Антигуа и Барбуда',
  '032': 'Аржентина',
  '051': 'Армения',
  '533': 'Аруба (Нидерл.)',
  '004': 'Афганистан',
  '050': 'Бангладеш',
  '052': 'Барбейдос',
  '044': 'Бахамски острови',
  '048': 'Бахрейн',
  '112': 'Беларус',
  '056': 'Белгия',
  '084': 'Белиз',
  '204': 'Бенин',
  '060': 'Бермудски острови (брит.)',
  '068': 'Боливия',
  '070': 'Босна и Херцеговина',
  '072': 'Ботсуана',
  '076': 'Бразилия ',
  '086': 'Британска територия в Ин¬дий-ския океан',
  '096': 'Бруней',
  '074': 'Буве, остров (норв.)',
  '854': 'Буркина Фасо',
  '108': 'Бурунди',
  '064': 'Бутан',
  '100': 'България',
  '548': 'Вануату',
  '336': 'Ватикана',
  '826': 'Великобритания',
  '862': 'Венецуела',
  '704': 'Виетнам',
  '092': 'Виржински острови (брит.)',
  '850': 'Виржински острови (САЩ)',
  '266': 'Габон',
  '270': 'Гамбия',
  '288': 'Гана',
  '328': 'Гаяна',
  '312': 'Гваделупа, остров (фр.)',
  '320': 'Гватемала',
  '324': 'Гвинея',
  '624': 'Гвинея - Бисау',
  '276': 'Германия',
  '254': 'Гиана (фр.)',
  '292': 'Гибралтар (брит.)',
  '308': 'Гренада',
  '304': 'Гренландия (дат.)',
  '268': 'Грузия',
  '316': 'Гуам, остров (САЩ)',
  '300': 'Гърция',
  '208': 'Дания',
  '262': 'Джибути',
  '212': 'Доминика',
  '214': 'Доминиканска република',
  '818': 'Египет',
  '372': 'Ейре (Ирландия)',
  '218': 'Еквадор',
  '226': 'Екваториална Гвинея',
  '232': 'Еритрея',
  '233': 'Естония',
  '231': 'Етиопия',
  '180': 'Заир',
  '894': 'Замбия',
  '732': 'Западна Сахара',
  '716': 'Зимбабве',
  '376': 'Израел',
  '626': 'Източен Тимор',
  '016': 'Източни Самоа (САЩ)',
  '356': 'Индия',
  '360': 'Индонезия',
  '368': 'Ирак',
  '364': 'Иран',
  '352': 'Исландия',
  '724': 'Испания',
  '380': 'Италия',
  '887': 'Йемен',
  '400': 'Йордания',
  '132': 'Кабо Верде',
  '398': 'Казахстан',
  '136': 'Кайманови острови (брит.)',
  '116': 'Камбоджа (Кампучия)',
  '120': 'Камерун',
  '124': 'Канада',
  '634': 'Катар',
  '404': 'Кения',
  '196': 'Кипър',
  '417': 'Киргизстан',
  '296': 'Кирибати',
  '156': 'Китай',
  '408': 'КНДР',
  '166': 'Кокосови острови (австрал.)',
  '170': 'Колумбия',
  '174': 'Коморски острови',
  '178': 'Конго',
  '188': 'Коста Рика',
  '384': "Кот д'Ивоар",
  '192': 'Куба',
  '414': 'Кувейт',
  '418': 'Лаос',
  '428': 'Латвия',
  '426': 'Лесото',
  '430': 'Либерия',
  '434': 'Либия',
  '422': 'Ливан',
  '440': 'Литва',
  '438': 'Лихтенщайн',
  '442': 'Люксембург',
  '478': 'Мавритания',
  '480': 'Мавриций',
  '450': 'Мадагаскар',
  '446': 'Макао (Аомън) (порт.)',
  '454': 'Малави',
  '458': 'Малайзия',
  '462': 'Малдиви',
  '466': 'Мали',
  '470': 'Малта',
  '580': 'Мариански о-ви(САЩ- опека)',
  '504': 'Мароко',
  '474': 'Мартиника (фр.)',
  '584': 'Маршалови острови',
  '484': 'Мексико',
  '104': 'Мианмар (Бирма)',
  '583': 'Микронезия',
  '508': 'Мозамбик',
  '498': 'Молдова',
  '492': 'Монако',
  '496': 'Монголия',
  '500': 'Монтсерат, остров (брит.)',
  '516': 'Намибия',
  '520': 'Науру',
  '524': 'Непал',
  '562': 'Нигер',
  '566': 'Нигерия',
  '528': 'Нидерландия (Холандия)',
  '530': 'Нидерландски Антили',
  '558': 'Никарагуа',
  '570': 'Ниуе, остров (новозел.)',
  '554': 'Нова Зеландия',
  '540': 'Нова Каледония (фр.)',
  '578': 'Норвегия',
  '574': 'Норфолк, остров (австрал.)',
  '784': 'Обединени арабски емир¬ства',
  '512': 'Оман',
  '184': 'Острови Кук (новозел.)',
  '586': 'Пакистан',
  '585': 'Палау',
  '591': 'Панама',
  '598': 'Папуа - Нова Гвинея',
  '600': 'Парагвай',
  '604': 'Перу',
  '612': 'Питкерн, остров (брит.)',
  '616': 'Полша',
  '620': 'Португалия',
  '630': 'Пуерто Рико, остров (САЩ)',
  '410': 'Република Корея',
  '807': 'Република Македония',
  '710': 'Република Южна Африка',
  '638': 'Реюнион (фр.)',
  '162': 'Рождество, остров (австрал.)',
  '646': 'Руанда',
  '642': 'Румъния',
  '643': 'Русия',
  '222': 'Салвадор',
  '882': 'Самоа',
  '674': 'Сан Марино',
  '678': 'Сао Томе и Принсипи',
  '682': 'Саудитска Арабия',
  '840': 'САЩ',
  '654': 'Света Елена, остров (брит.)',
  '670': 'Сейнт Винсент и Гренадини',
  '659': 'Сейнт Китс и Нейвис',
  '662': 'Сейнт Лусия',
  '690': 'Сейшелски острови',
  '686': 'Сенегал',
  '666': 'Сен Пиер и Микелон, о-ви (фр.)',
  '694': 'Сиера Леоне',
  '702': 'Сингапур',
  '760': 'Сирия',
  '703': 'Словашка република',
  '705': 'Словения',
  '090': 'Соломонови острови',
  '706': 'Сомалия',
  '748': 'Суазиленд',
  '736': 'Судан',
  '740': 'Суринам',
  '762': 'Таджикистан',
  '158': 'Тайван',
  '764': 'Тайланд',
  '834': 'Танзания',
  '768': 'Того',
  '772': 'Токелау, острови (новозел.)',
  '776': 'Тонга',
  '780': 'Тринидад и Тобаго',
  '798': 'Тувалу',
  '788': 'Тунис',
  '795': 'Туркменистан',
  '792': 'Турция',
  '796': 'Търкс и Кайкос, о-ви (брит.)',
  '800': 'Уганда',
  '860': 'Узбекистан',
  '804': 'Украйна',
  '348': 'Унгария',
  '876': 'Уолис и Футуна, о-ви (фр.)',
  '858': 'Уругвай',
  '234': 'Ферьорски о-ви (дат.)',
  '242': 'Фиджи',
  '608': 'Филипини',
  '246': 'Финландия',
  '238': 'Фолкландски (Малвински) о-ви (брит.)',
  '250': 'Франция',
  '258': 'Френска Полинезия',
  '260': 'Френски южни територии',
  '332': 'Хаити',
  '344': 'Хонконг (Сянган) (брит.)',
  '340': 'Хондурас',
  '191': 'Хърватско',
  '334': 'Хърд и Макдоналд, о-ви (австрал.)',
  '140': 'Центр. африканска република',
  '148': 'Чад',
  '203': 'Чешка република',
  '152': 'Чили',
  '756': 'Швейцария',
  '752': 'Швеция',
  '144': 'Шри Ланка',
  '891': 'Югославия',
  '388': 'Ямайка',
  '744': 'Ян Майен, остров (норв.)',
  '392': 'Япония'
};

export default function(code) {
  return countries[code];
}