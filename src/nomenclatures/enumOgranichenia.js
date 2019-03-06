const codes = {
  '1':
    'Главна водопроводна мрежа. Над водопровода и на 3 m от двете му страни се за¬бра¬ня¬ва разполагане на трайни и временни постройки и трайни наса¬ж¬де¬ния.',
  '2': "Санитарно-охранителна зона на водоснабдителен обект - Пояс 'A'. Забранява се вся¬как¬ва дейност, несвързана с експлоатацията на обекта.",
  '3':
    "Санитарно-охранителна зона на водоснабдителен обект - Пояс 'Б'. Забраняват се и се ограничават дейностите от селскостопански характер, като се раз¬ре¬ша¬ва ограничено пол-зване на орни земи, хидромелиоративна дейност и пасища.",
  '4': "Санитарно-охранителна зона на водоснабдителен обект - Пояс 'В'. Има ог¬ра¬ни¬чителен ха¬¬рак¬тер по отношение на селскостопанската дейност.",
  '11':
    'Електропровод 20 kV. На 10 m от двете страни до крайните проводници или на 11 m от оста на електропровода, не може да се строят сгради и съоръжения и да се засажда ви¬со-ко¬стеблена растителност.',
  '12':
    'Електропровод 110 kV. На 20 m от двете страни до крайните проводници или на 24 m от оста на електропровода не може да се строят сгради и съоръжения и да се засажда ви¬со-костеблена растителност.',
  '13':
    'Електропровод 220 kV. На 25 m от двете страни до крайните проводници или на 30 m от оста на електропровода не може да се строят сгради и съоръжения и да се засажда ви¬со-костеблена растителност.',
  '14':
    'Електропровод 400 kV с една тройка. На 30 m от двете страни до крайните про¬водници или на 41 m от оста на електропровода не може да се строят сгради и съоръжения и да се за¬сажда високостеблена растителност.',
  '15':
    'Електропровод 400 kV с две тройки. На 30 m от двете страни до крайните проводници или на 50 m от оста на електропровода не може да се строят сгради и съоръжения и да се за-сажда високостеблена растителност.',
  '16':
    'Електропровод над 400 kV. На 60 m от оста на електропровода не може да се строят сгра-ди и съоръжения и да се засажда високостеблена растителност.',
  '21':
    'Магистрален газопровод 1000 mm. В охранителната зона на 250 m от двете му страни се забранява засаждане на овощни и други градини, на дървета с развита коренова сис¬те¬ма и на горско-дървесни видове в предоставените площи за просеки за строи¬тел¬ство¬то на газопровода на по-малко от 10 m от двете му страни.',
  '22':
    'Магистрален газопровод 700 mm или от 600 до 800 mm. В охранителната зона на 200 m от двете му страни се забранява засаждане на овощни и други гра¬ди¬ни, на дървета с раз-ви¬та коренова система и на горски и дървесни видове в пре¬доставените площи за просеки за строителство на газопровода на по-малко от 10 m от двете му страни.',
  '23':
    'Отклонение от магистрален газопровод от 300 до 500 mm. В охранителната зо¬на на 150 m от двете му страни се забранява засаждане на овощни и други дървета с раз¬ви¬та коренова система и на горски и дървесни видове в пре¬до¬ставените площи за про¬се¬ки за строителството на по-малко от 10 m от двете му страни.',
  '24':
    'Отклонение от магистрален газопровод до 300 mm. В охранителната зона на 100 m от две¬те му страни се забранява засаждане на овощни и други градини, на дървета с раз¬ви¬та коренова система и на горски и дървесни видове в пре¬до¬ста¬вените площи за про¬се¬ки за строителство на газопровода на по-малко от 10 m от двете му страни.',
  '29':
    'Компресорна станция на газопровод. На 700 m от площадката се забранява за¬саж¬да¬не¬то на овощни видове с развита коренова система и горско-дървесни видове.',
  '30':
    'Газоразпределителна станция 175 m. На 175 m от площадката се забранява за¬саж¬да¬не¬то на овощни видове с развита коренова система и горско-дървесни видове.',
  '31': 'Нефтопровод от 500 до 1000 mm. Охранителна зона на 150 m от двете му стра¬ни.',
  '32': 'Нефтопровод от 300 до 500 mm. Охранителна зона на 100 m от двете му стра¬ни.',
  '33': 'Нефтопровод до 300 mm. Охранителна зона на 75 m от двете му страни.',
  '39': 'Помпени станции на нефтопровод/продуктопровод. Охранителна зона на 200 m от гра¬ни-ците на площадката.',
  '40': 'Компресорни станции на нефтопровод. Охранителна зона на 700 m от гра¬ни¬ци¬те на пло-щадката.',
  '41': 'Продуктопровод за леки въглеводороди от 300 до 500 mm с подземно по¬ла¬га¬не. Охра¬ни-телна зона 500 m от двете страни.',
  '42': 'Продуктопровод за леки въглеводороди от 300 до 500 mm с надземно по¬ла¬га¬не. Охра¬ни-телна зона 1000 m от двете страни.',
  '43': 'Продуктопровод за леки въглеводороди от 150 до 300 mm с подземно по¬ла¬га¬не. Охра¬ни-телна зона 250 m от двете страни.',
  '44': 'Продуктопровод за леки въглеводороди от 150 до 300 mm с надземно по¬ла¬га¬не. Охра¬ни-телна зона 500 m от двете страни.',
  '45': 'Продуктопровод за леки въглеводороди до 150 mm с подземно полагане. Ох¬ранителна зо¬на 150 m от двете страни.',
  '46': 'Продуктопровод за леки въглеводороди до 150 mm с надземно полагане. Ох¬ра¬нителна зо¬на 300 m от двете страни.',
  '49': 'Помпена станция за продуктопровод за леки въглеводороди. Охранителна зо¬на 200 m от границите на площадката.',
  '50': 'Компресорна станция за продуктопровод за леки въглеводороди. Охранителна зона 700 m от границите на площадката.',
  '51':
    "Курортни ресурси - зона 'А'. Забранява се жилищно и промишлено строи¬тел¬ство, гео¬ло-гопроучвателна дейност, изхвърляне на отпадъчни води, употреба на химически ве¬ще-ства за растителна защита.",
  '52':
    "Курортни ресурси-зона 'Б'. Забранява се промишлена дейност, изграждане на поливни кла¬денци, употреба на химически вещества за растителна защита в климатично-ле¬чеб¬ни курорти.",
  '53': "Курортни ресурси - зона 'В'. Забраняват се дейности, които въздействуват не¬бла¬¬го¬при¬я¬т-но върху минералните води.",
  '60':
    'Защитена територия. Резерват. Изключителна държавна собственост съгласно ЗЗТ. Забраняват се всякакви дейности с изключение на тези посочени в чл.17 от ЗЗТ.',
  '61':
    'Защитена територия. Национален парк. Изключителна държавна собственост съгласно ЗЗТ. Забраняват се дейностите посочени в чл.21 от ЗЗТ и други дейности, определени от заповедта за обявяване на защитената територия и плана за управление.',
  '62':
    'Защитена територия. Природна забележителност. Забраняват се дейности, които могат да нарушат тяхното естествено състояние или да намалят естетическата им стойност, съгласно ЗЗТ и заповедта за обявяване.',
  '63':
    'Защитена територия. Поддържан резерват. Изключителна държавна собственост съгласно ЗЗТ.Забраняват се всякакви дейности с изключение на тези посочени в чл.27 от ЗЗТ.',
  '64':
    'Защитена територия. Природен парк. Забраняват се дейностите посочени в чл.31 от ЗЗТ и други дейности определени със заповедта за обявяване на защитената територия и с плана за управление.',
  '65':
    'Защитена територия. Защитена местност. Забраняват се дейности, противоречащи на изискванията за опазване на конкретните обекти, предмет на защита, съгласно ЗЗТ и заповедта за обявяване.',
  '72': 'Имотът попада в зона със замърсяване BI. Има ограничения в земе¬пол¬зването, отра¬зе¬ни в сертификат.',
  '73': 'Имотът попада в зона със замърсяване BII. Има ограничения в земе¬пол¬зва¬не¬то, от¬ра¬зе¬ни в сертификат.',
  '74': 'Имотът попада в зона със замърсяване BIII. Има ограничения в земе¬пол¬зва¬не¬то, от¬ра¬зени в сертификат.',
  '75': 'Имотът попада в зона със замърсяване C. Има ограничения в земеползването, от¬ра¬зе¬ни в сертификат.',
  '76': 'Имотът попада в зона със замърсяване. Има ограничения в земеползването, от¬ра¬зе¬ни в сертификат.',
  '81': 'Трайните насаждения да се опазват и стопанисват в съответствие с чл.18 от ЗСПЗЗ до из-тичане на амортизационния срок.',
  '82': 'Хидромелиоративните съоръжения да се опазват и стопанисват в съответствие с чл.18 от ЗСПЗЗ до изтичане на амортизационния срок',
  '83': 'Оризовите полета да се опазват и стопанисват в съответствие с чл.18 от ЗСПЗЗ до из¬ти-чане на амортизационния срок.',
  '87': 'Да се използува съгласно Закона за устройство на територията',
  '88': 'Да се използува съгласно Закона за лова и опазване на дивеча и Правилника за прилагането му.',
  '89': 'Зона на летище (3 km от центъра му). Забранява се строителство на жи¬вот¬но¬въд¬ни сгра-ди.',
  '90':
    'Зона на летище (500 m от полосата за излитане). Забранява се засаждане на дървета с височина над 5 m. Високата растителност (над 1 m) се окосява.',
  '91':
    'Археологически обект с режим А. Забраняват се благоустройствени, строи¬тел¬ни, сел¬ско¬-сто¬пан¬ски, мелиоративни и други дейности, които нарушават це¬лост¬¬та на земния пласт в границите на археологическия обект. Допуска се из¬пол¬зва¬нето на земята като ли¬вади и пасища.',
  '92':
    'Археологически обект с режим Б. Забраняват се изкопни работи, дълбочинна об¬ра¬бот¬ка на поч¬¬вата, засаждане на култури с дълбока коренова система, за¬бла¬тяване и дру¬ги, които могат да унищожат или засегнат археологическата суб¬станция в границите на обекта. Допуска се обработка на почвата (оран) на дълбочина до 0,25 m.',
  '93':
    'Археологически обект с режим В. Забраняват се изкопни работи, несвързани със сел¬ско¬-сто¬пан¬ски¬те дейности. Допускат се всички селскостопански дейности при ус¬ло¬вия¬та на чл.18 от ЗПКМ.',
  '94':
    'Археологически обект с режим Г. Разрешават се всички дейности, като тези, свър¬зани с из¬коп¬ни работи, се съгласуват с държавните органи, следящи за опазване на кул¬тур¬но-историческото на¬след¬ство (музеи, НИПК, АИМ при БАН) и при условията на чл.18 от ЗПКМ.',
  '96': 'Да се използва съгласно Закона за биологичното разнообразие и заповедта за обявяване.',
  '97': 'Буферна зона към резерват за растителни видове. Да се използва съгласно ЗООС.',
  '98': 'Да се използва съгласно Закона за горите и правилника за неговото прилагане.',
  '99': 'Да се използва съгласно Закона за териториално и селищно устройство и пра¬¬вил¬ни¬ка за неговото прилагане.'
};

export default function(code) {
  return codes[code];
}
