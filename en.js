/*
  VERSAO EM INGLES (aparece sozinha quando o navegador da pessoa esta em ingles ou em outra lingua que nao seja
  portugues nem espanhol, fora do Brasil; ou quando ela escolhe EN no topo ou no rodape; link direto: ?lang=en)
  Os textos fixos das paginas ficam no proprio HTML, no atributo data-en.
  Aqui ficam: textos dos roteiros (L, D, ROTEIROS), da pagina da pousada (ESPACOS) e frases do app.js.
  Mesmas regras do portugues: nunca "ruins" (archaeological site / World Heritage Site), sem travessao,
  a pousada sugere e nao vende roteiros, nao serve almoco nem jantar.
  "pousada" vira "the inn"; "apartamentos" vira "rooms" (em ingles "apartment" e imovel de aluguel).
  Lugar sem traducao aqui continua em portugues.
*/
const EN = {
  ui: {
    manha: 'Morning', tarde: 'Afternoon', noite: 'Evening',
    ordinais: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'],
    oDia: 'The day', diaMin: 'day', diasMin: 'days', Dia: 'Day',
    cidade: 'town', cidades: 'towns', passeios: 'stops',
    verRoteiro: 'See the itinerary', ideiaRoteiro: 'Itinerary idea',
    consultarPara: 'Check rates for',
    waRoteiro: 'Hi! I saw the itinerary idea for {n} {d} and would like to know the rates for my dates.',
    waGeral: 'Hi! I saw the itineraries and would like to know the rates for my dates.',
    waPousada: 'Hi! I saw the photos of the inn and would like to know the rates for my dates.',
    localizacao: 'Location', verFotos: 'See all {n} photos full screen', ampliar: 'Enlarge: ',
    fotosPousada: 'Photos of the inn', fechar: 'Close', fotoAnt: 'Previous photo', fotoProx: 'Next photo',
    passeiosDia: 'Stops of the day', menu: 'Menu', fecharMenu: 'Close menu',
    consultarWA: 'Check rates on WhatsApp', mandarDirect: 'Send a DM',
    consultar: 'Check rates', direct: 'Instagram',
    grupoSM: 'In São Miguel das Missões', grupoRegiao: 'Around the region', nosRoteiros: 'Featured in the itineraries for',
    todosPontos: '↑ All attractions', verMapa: 'View on map', verPonto: 'More about this place', fotosPontos: 'Photos of the attractions',
    waPontos: 'Hi! I saw the attractions and would like to know the rates for my dates.',
    aConfirmar: 'to confirm'
  },

  // nome da regiao que aparece na foto (cidades ficam com o nome original)
  O: { 'Região das Missões': 'Missions Region' },

  L: {
    sitio:      { t: 'São Miguel Arcanjo World Heritage Site', d: 'A walk through the archaeological site recognized by UNESCO: the church, the square of the reductions and the details of the stone carved by the Guarani.' },
    museu:      { t: 'Museum of the Missions', d: 'Sacred statues carved in the reductions, kept inside the site itself.' },
    aldeia:     { t: 'Tekoá Koenju Guarani village', d: 'A Mbyá Guarani community that keeps alive the language, the songs and the crafts of the people who built the reductions. A visit to listen and learn, always arranged in advance.' },
    benzedores: { t: 'Visit to the benzedores', d: 'Dona Alzira keeps alive the benzedura, a folk tradition of prayers and blessings handed down from generation to generation in the Missions. A visit to see this tradition up close, always arranged in advance.' },
    artesanato: { t: 'Guarani crafts', d: 'Pieces made by Guarani families from the region, a way to take the Missions home with you.' },
    someluz:    { t: 'Sound and Light Show', d: 'At night, the story of the Seven Peoples told with light and narration on the church façade.' },
    someluz2:   { t: 'Sound and Light again, if you like', d: 'Those who enjoyed it on the first night often watch it again with new eyes, already knowing the story.' },
    cafe:       { t: 'The best breakfast in the region, at the inn', d: 'Included in the rate, to start the day at your own pace.' },
    fonte:      { t: 'Mission Fountain', d: 'A stone fountain from the time of the reductions, one of the loveliest corners of town.' },
    praca:      { t: 'Square and town center', d: 'A walk around downtown São Miguel, with time for a coffee and the little shops.' },
    irmaica:    { t: 'Cenair Maicá Square', d: 'The square with the statue of nativist singer and songwriter Cenair Maicá, one of the great names of Missions music, guitar in hand.' },
    antimon:    { t: 'Anti-Monument to the Bandeirante', d: 'The head of a bandeirante sunk into the ground. Bandeirantes raided the reductions to capture Guarani people, and this work turns the idea of a monument upside down: instead of raising up the attacker, it sinks him. A way of telling the story of the Missions through the eyes of those who lived here.' },
    borraio:    { t: 'Borraio Minhas Origens', d: 'A rustic shed full of old objects, tools and keepsakes that tell the story of where the families of the region came from.' },
    jantar:     { t: 'Dinner in town', d: 'The inn does not serve dinner, but will tell you where to eat well in São Miguel.' },
    caaro:      { t: 'Caaró Sanctuary, in Caibaté', d: 'A place of faith linked to the martyrs of the Missions, with the sanctuary and the woods around it.' },
    catedral:   { t: 'Angelopolitana Cathedral, in Santo Ângelo', d: 'The cathedral inspired by the church of São Miguel Arcanjo, in the heart of Santo Ângelo.' },
    stoangelo:  { t: 'Downtown Santo Ângelo', d: 'Square, shops and lunch before heading back to the inn.' },
    volta:      { t: 'Back to the inn', d: 'The same bed every night: no packing and unpacking in every town.' },
    saojoao:    { t: 'São João Batista Site, in Entre-Ijuís', d: 'Remains of another reduction of the Seven Peoples, to understand how the Missions spread across the region.' },
    piscina:    { t: 'Afternoon at the inn’s pool', d: 'After a morning on the road, the afternoon is for resting without leaving the inn.' },
    saonic:     { t: 'São Nicolau', d: 'One of the Seven Peoples, with an archaeological site and the Uruguay River landscape nearby.' },
    saoluiz:    { t: 'São Luiz Gonzaga', d: 'Another of the Seven Peoples, with the memory of the Missions in the town center.' },
    detalhes:   { t: 'The site, slowly', d: 'A second visit to the World Heritage Site to see what usually goes unnoticed: the sundial, the priests’ orchard and the paths of the reductions.' },
    cotiguacu:  { t: 'Cotiguaçu', d: 'The remains of the house where the reduction’s widows and orphaned girls lived, a part of the site’s history that often goes unnoticed.' },
    livre:      { t: 'Free evening', d: 'For a relaxed dinner in town or an evening in at the inn.' },
    argentina:  { t: 'San Ignacio Miní, in Argentina', d: 'Across the Uruguay River, another Jesuit reduction recognized by UNESCO.' },
    caminho:    { t: 'Or: a stretch of the Caminho das Missões', d: 'For those who enjoy walking, a stretch of the trail on foot between the old mission towns.' }
  },

  D: {
    essencial: 'The essentials of São Miguel',
    sitio: 'The World Heritage Site',
    cidade: 'The town of São Miguel',
    caaro: 'Caaró and Santo Ângelo',
    saojoao: 'São João Batista',
    calma: 'A slow day',
    saonic: 'São Nicolau and São Luiz Gonzaga',
    outrolado: 'Across the river'
  },

  // pela quantidade de dias
  R: {
    1: { nome: 'One day in São Miguel', resumo: 'The essentials in a single trip: the World Heritage Site by day and the Sound and Light Show at night.', ideal: 'Travelers passing through or visiting for the first time.', capaLeg: 'São Miguel Arcanjo · World Heritage Site' },
    2: { nome: 'Two days in São Miguel', resumo: 'First the site and the Sound and Light Show. Then the town at your own pace.', ideal: 'Couples and families who want to see it all without rushing.', capaLeg: 'Mission Fountain · São Miguel das Missões' },
    3: { nome: 'Three days in the Missions', resumo: 'São Miguel as your base, with Caaró and the Santo Ângelo Cathedral along the way.', ideal: 'Those who want to experience the Missions beyond a single place.' },
    4: { nome: 'Four days, one more of the Seven Peoples', resumo: 'The three-day itinerary plus a morning at the São João Batista site.', ideal: 'History lovers who want to see more than one reduction.' },
    5: { nome: 'Five days through the Seven Peoples', resumo: 'The mission towns of the region, always coming back to the same inn.', ideal: 'Those who want to explore the whole region calmly.' },
    6: { nome: 'Six days, with one slow day', resumo: 'The Seven Peoples and a full day to revisit the site calmly and rest at the inn.', ideal: 'Vacationers who want to travel without wearing themselves out.', capaLeg: 'Arches of São Miguel Arcanjo · World Heritage Site' },
    7: { nome: 'A week in the Missions', resumo: 'From São Miguel Arcanjo to the other side of the Uruguay River, with the inn as your base.', ideal: 'Those who want the full Missions experience.' }
  },

  // pagina da pousada, pelo id de cada espaco; legs na mesma ordem das fotos
  E: {
    apartamentos: { curto: 'Rooms', rotulo: 'Accommodation', titulo: 'Rooms',
      texto: 'From single to quadruple, with carefully made beds, so couples, families and groups of friends can rest well after the day’s outings.',
      itens: ['Single', 'Double', 'Triple', 'Quadruple', 'Private bathroom'],
      legs: ['Room with a double and a single bed', 'Double room', 'Triple room', 'Room with a double and a single bed', 'Room with two beds'] },
    suites: { curto: 'Suites', rotulo: 'A little extra', titulo: 'Suites with whirlpool tub',
      texto: 'Spacious suites with a whirlpool tub, cozy lighting and a double-sink vanity. For a trip for two or a celebration.',
      itens: ['Whirlpool tub', 'Double bed', 'Double sink'],
      legs: ['Suite with whirlpool tub, overview', 'Double bed with linens', 'Table and lighting in the suite', 'Whirlpool tub', 'Double-sink vanity'] },
    cafe: { curto: 'The best breakfast in the region', rotulo: 'Every morning', titulo: 'The best breakfast in the region',
      texto: 'Included in the rate. Fruit, bread, cold cuts, cakes and whatever else the kitchen prepares that day. On nice days, breakfast can also turn into a picnic in the inn’s garden.',
      legs: ['Cakes, homemade bread and pastries at breakfast', 'Picnic in the inn’s garden', 'Cakes and homemade bread', 'Honeycomb at breakfast', 'Picnic between the rooms', 'Fruit, butter, jams and honey', 'Picnic for two on the lawn', 'Bread and cakes in the breakfast room', 'Picnic basket'] },
    cozinha: { curto: 'Kitchen and barbecue', rotulo: 'For guests', titulo: 'Kitchen and barbecue area',
      texto: 'An equipped kitchen and a barbecue area with a large table, to cook a meal or enjoy a family barbecue.',
      legs: ['Barbecue area', 'Kitchen', 'Equipped kitchen'] },
    piscina: { curto: 'Pool', rotulo: 'Leisure', titulo: 'Pool',
      texto: 'For hot afternoons between outings, with sun loungers and tables around it.',
      legs: ['The inn’s pool', 'Tables around the pool', 'Pool with palm trees', 'Sun loungers', 'Pool area'] },
    jardins: { curto: 'Gardens', rotulo: 'Outdoor areas', titulo: 'Gardens and outdoor areas',
      texto: 'Palm trees, lawns and garden paths between the rooms. A pleasant place to come back to at the end of the day.',
      legs: ['Façade with palm trees', 'Flowers at the entrance', 'Garden in front of the rooms', 'Inner garden', 'Garden between the rooms'] },
    estacionamento: { curto: 'Parking', rotulo: 'Included in the rate', titulo: 'Parking',
      texto: 'Your car stays inside the inn for your whole stay while you enjoy the outings.',
      legs: ['Parking next to the garden', 'Parking sign', 'Car access'] }
  }
};
