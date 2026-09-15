/* ============================================================
   OLOGENETICA · PACOTE EXTRA — PORTUGUÊS (BR)
   Conteúdo das seções avançadas:
   · LIS  — a Linha DENTRO da esfera (11 esferas × 6 Linhas = 66 leituras)
   · RINGS — os 21 Anéis de códons (nome + essência)
   · TL   — linha do tempo dos ciclos pessoais
   · WX   — clima do perfil (trânsitos)
   · YR   — o ano solar
   · RN   — seção dos anéis
   · ALM  — almanaque das 64 Chaves
   · LIB  — biblioteca das 64 Chaves
   · PST  — pôster do quadrante
   · DS   — modo «hora desconhecida»
   Os templates usam marcadores {assim}. Textos originais.
   ============================================================ */
(function () {

  // A Linha dentro da esfera: LIS[esfera][linha]
  const LIS = {
    lavoro: {
      1: "Seu gênio se constrói como uma biblioteca: você vira mestre daquilo que estudou a fundo, e o mundo reconhece a autoridade dos seus alicerces.",
      2: "Seu gênio é natural: trabalha melhor quando ninguém está olhando. Chamados sinceros o despertam; pressões o apagam.",
      3: "Seu gênio se forja errando: todo ofício você aprende desmontando. O currículo de verdade são as tentativas.",
      4: "Seu gênio passa pelas pessoas: a carreira é a sua rede. As melhores oportunidades vêm de quem já conhece você.",
      5: "Seu gênio é a solução prática: o mundo chama você quando as coisas pegam fogo — e projeta em você mais do que você pediu.",
      6: "Seu gênio amadurece em fases: provas até os ~30, observação até os ~50, depois autoridade. Não adiante o calendário."
    },
    evoluzione: {
      1: "O desafio pede alicerces: o crescimento passa pelo estudo paciente do que assusta você, não por pular essa etapa.",
      2: "O desafio chega até você sozinho: não o procure. Você cresce quando responde só aos chamados que se parecem com você.",
      3: "O desafio é feito de tropeços: cada fracasso no tema é um pedaço do caminho, não uma condenação.",
      4: "O desafio se joga nas relações próximas: o tema se apresenta através das pessoas que você ama.",
      5: "O desafio traz projeções: os outros verão você como causa ou como salvação. Aprenda a devolver o que não é seu.",
      6: "O desafio tem três estações: primeiro você o vive, depois o observa, por fim o ensina. A compreensão plena chega na terceira."
    },
    radianza: {
      1: "A vitalidade se acende na profundidade: entender recarrega você. Um dia estudando o que você ama vale umas férias.",
      2: "A vitalidade é espontânea mas reservada: acende nos espaços protegidos e apaga sob observação.",
      3: "A vitalidade ama o impacto: o corpo se acende no fazer, tentar, refazer. O «certo na teoria» apaga você.",
      4: "A vitalidade é relacional: as pessoas certas recarregam você. A rede não é lazer — é saúde.",
      5: "A vitalidade se acende no resolver: quando a sua praticidade serve de verdade, o corpo responde.",
      6: "A vitalidade segue as estações longas: respeite a fase em que você está. Forçar a fase errada custa saúde."
    },
    scopo: {
      1: "O propósito se ativa servindo com o conhecimento: quando o que você estudou sustenta algo maior que você.",
      2: "O propósito encontra você: ele se ativa quando algo maior chama o seu talento natural pelo nome.",
      3: "O propósito se constrói sobre as tentativas: coloque a serviço os erros que você já pagou, e outros não os pagarão.",
      4: "O propósito passa pela comunidade: ativa-se dentro de um tecido de pessoas, nunca em solitária.",
      5: "O propósito é prático: ativa-se quando a sua solução serve a muitos, não só a você.",
      6: "O propósito floresce tarde e em grande: a terceira fase da vida é o seu território natural."
    },
    attrazione: {
      1: "Você atrai quem busca solidez: suas relações começam devagar e duram muito. Confie nos tempos de construção.",
      2: "Você atrai sem procurar: as pessoas certas encontram você na sua toca. Não se mostre mais — deixe-se encontrar por quem olha de verdade.",
      3: "Você atrai pela experiência: as relações são experimentos, e a competência se constrói sobre os fracassos — material, não acidentes.",
      4: "Você atrai através da rede: os amores chegam das amizades. O vínculo parte do tecido social que já existe.",
      5: "Você atrai projeções: quem chega vê em você o que lhe falta. As relações verdadeiras começam quando a auréola cai.",
      6: "Você atrai pelo exemplo: nas relações busca o quadro inteiro — e as três fases da vida mudam o que você atrai."
    },
    iq: {
      1: "Sua mente se defendeu estudando: saber era segurança. O ponto cego: acreditar que entender basta para viver.",
      2: "Sua mente adolescente funcionava sozinha — e talvez ninguém a tenha reconhecido. O ponto cego: ainda esperar esse reconhecimento.",
      3: "Sua mente aprendeu errando em voz alta: o ponto cego é se punir pelos erros que são o seu método.",
      4: "Sua mente se formou no grupo: pensar era pertencer. O ponto cego: confundir o consenso com a verdade.",
      5: "Sua mente aprendeu a resolver pelos outros: o ponto cego é a necessidade de que a solução seja aplaudida.",
      6: "Sua mente olha do alto desde sempre: o ponto cego é observar a vida em vez de vivê-la."
    },
    eq: {
      1: "Seu coração se protegeu com as regras: saber «como se faz» acalmava. Hoje ele se abre onde encontra clareza.",
      2: "Seu coração só se abria nos lugares seguros: hoje ainda precisa de tocas. Respeite-as, sem precisar justificá-las.",
      3: "Seu coração aprendeu com os impactos: as emoções se entendem atravessando-as, não prevenindo-as.",
      4: "Seu coração bate no grupo: a exclusão é a ferida, o pertencimento é o remédio — e a armadilha.",
      5: "Seu coração aprendeu a carregar o peso: quando criança, quem resolvia era você. Hoje pode largar o papel de bombeiro.",
      6: "Seu coração observa antes de se abrir: não é frieza — é o calendário longo da confiança."
    },
    sq: {
      1: "Nos primeiros anos a confiança precisava de chão firme: ritos, repetições, presenças certas. Ainda é a sua raiz.",
      2: "Nos primeiros anos bastava ser visto sem precisar pedir: a raiz da confiança é quem encontrou você sem que chamasse.",
      3: "Nos primeiros anos o mundo se aprendia tocando: cair e levantar é a sua primeira língua.",
      4: "Nos primeiros anos a casa eram as pessoas: a raiz da confiança é o calor do círculo próximo.",
      5: "Nos primeiros anos você sentia as expectativas dos adultos: a raiz é aprender que o amor não se ganha resolvendo.",
      6: "Nos primeiros anos você olhava tudo um passo atrás: a raiz é a confiança de quem observa antes de entrar."
    },
    nucleo: {
      1: "A ferida pede para ser estudada: a vocação nasce escavando a sua própria profundidade até o fundo.",
      2: "A ferida ficou invisível por muito tempo — até para você. A vocação nasce quando você deixa alguém vê-la.",
      3: "A ferida voltou mil vezes: a vocação é a arte destilada de todas essas tentativas.",
      4: "A ferida fala de pertencimento: a vocação é criar para os outros o lugar que faltou para você.",
      5: "A ferida é o peso das projeções: a vocação é servir sem carregar o que não é seu.",
      6: "A ferida se compreende à distância: a vocação chega quando você para de combatê-la e a conta do alto."
    },
    cultura: {
      1: "Na comunidade você é o alicerce: quem estuda, verifica e guarda o saber do grupo.",
      2: "Na comunidade você é a reserva natural: o talento que o grupo chama quando precisa — e que deve ser protegido do desgaste.",
      3: "Na comunidade você é quem já tentou: o explorador que volta com o mapa dos erros.",
      4: "Na comunidade você é o tecelão: mantém vivos os fios entre as pessoas. Sem você o grupo é uma soma; com você, um corpo.",
      5: "Na comunidade você é a referência prática: o grupo prospera quando a sua solução circula — e você, quando depois se recolhe.",
      6: "Na comunidade você é o teto: a visão longa que o grupo consulta nas encruzilhadas."
    },
    perla: {
      1: "A prosperidade vem da profundidade: você é recompensado pelo que sabe de verdade, quando para de se vender barato e confuso.",
      2: "A prosperidade vem se você se deixa encontrar: o mercado certo chama você — o marketing forçado desvaloriza.",
      3: "A prosperidade vem das tentativas recicladas: cada fracasso vira know-how precioso.",
      4: "A prosperidade passa pela rede: o trabalho vem de quem confia em você, não de desconhecidos.",
      5: "A prosperidade vem resolvendo: reduza a oferta a uma solução clara e o valor fica evidente.",
      6: "A prosperidade amadurece tarde e bem: as semeaduras longas rendem mais que qualquer atalho."
    }
  };

  // Os 21 Anéis de códons: nome + essência
  const RINGS = {
    fire:        { n: "Anel do Fogo",                    t: "A centelha criativa que fecunda a matéria." },
    water:       { n: "Anel da Água",                    t: "A direção e a contribuição: saber para onde vai a correnteza." },
    lifedeath:   { n: "Anel da Vida e da Morte",         t: "Os ciclos de nascer, nutrir e deixar ir." },
    union:       { n: "Anel da União",                   t: "O vínculo: como as pessoas se encontram de verdade." },
    light:       { n: "Anel da Luz",                     t: "A mente luminosa: visões, ritmos e ideias." },
    alchemy:     { n: "Anel da Alquimia",                t: "Transformar o chumbo das lembranças em ouro." },
    humanity:    { n: "Anel da Humanidade",              t: "O amor que amadurece através das provas humanas." },
    trials:      { n: "Anel das Provas",                 t: "A expressão que se refina nos exames da vida." },
    purification:{ n: "Anel da Purificação",             t: "A escuta e o desejo que se tornam límpidos." },
    seeking:     { n: "Anel da Busca",                   t: "O impulso de buscar: subir, começar, melhorar." },
    prosperity:  { n: "Anel da Prosperidade",            t: "Talento e recursos que se multiplicam juntos." },
    matter:      { n: "Anel da Matéria",                 t: "A profundidade encarnada: corpo, ofício, raízes." },
    gaia:        { n: "Anel de Gaia",                    t: "As necessidades da terra e das suas criaturas." },
    origin:      { n: "Anel da Origem",                  t: "A semente de tudo: o códon de partida da roda." },
    whirlwind:   { n: "Anel do Redemoinho",              t: "As revoluções emocionais que mudam de era." },
    illuminati:  { n: "Anel dos Iluminados",             t: "O faro e os valores que guiam as equipes." },
    illusion:    { n: "Anel da Ilusão",                  t: "Risco e memória: o que vale de verdade a aposta." },
    miracles:    { n: "Anel dos Milagres",               t: "A curiosidade e a dúvida que abrem o possível." },
    noreturn:    { n: "Anel do Não Retorno",             t: "A palavra dita: influência e precisão." },
    secrets:     { n: "Anel dos Segredos",               t: "A graça escondida nas tempestades do coração." },
    divinity:    { n: "Anel da Divindade",               t: "A potência e a intuição em estado puro." }
  };

  // Linha do tempo dos ciclos
  const TL = {
    title: "A sua linha do tempo dos ciclos",
    sub: "Os ciclos de desenvolvimento da Sequência de Vênus, o retorno de Saturno e — para as Linhas 6 — as três fases da vida, calculados sobre as suas datas reais.",
    segs: { sq: "SQ · imprinting", eq: "EQ · coração", iq: "IQ · mente" },
    marks: { saturn1: "1º retorno de Saturno", saturn2: "2º retorno de Saturno" },
    line6: { l6p1: "Fase 1 · experiência", l6p2: "Fase 2 · observação", l6p3: "Fase 3 · referência" },
    now: "HOJE", years: "anos",
    nowTpl: "Hoje você tem {age} anos: {phase}",
    phases: {
      sq: "você ainda está no ciclo do imprinting (0–7).",
      eq: "você está no ciclo emocional (7–14).",
      iq: "você está no ciclo mental (14–21).",
      adult: "os três ciclos de formação estão completos: agora a Sequência de Vênus se percorre de trás para frente, por contemplação.",
      l6p1: "para a sua Linha 6, você está na fase da experiência direta (até os ~30).",
      l6p2: "para a sua Linha 6, você está na fase do recolhimento e da observação (~30–50): não é estagnação, é digestão.",
      l6p3: "para a sua Linha 6, você está na fase da referência: o que você atravessou agora é exemplo."
    }
  };

  // Clima do perfil (trânsitos de hoje)
  const WX = {
    title: "O clima do perfil",
    sub: "Onde os planetas estão agora na roda das 64 Chaves, e quais das suas esferas eles estão tocando.",
    inKey: "{body} está na Chave {key} ({gift})",
    hitSame: "ativa a sua {sphere}",
    hitMirror: "faz de espelho para a sua {sphere}",
    noHits: "nenhum contato direto com o seu perfil hoje — clima neutro.",
    moonNote: "A Lua muda de Chave a cada ~10 horas: o contato dela é uma onda breve.",
    updated: "calculado agora"
  };

  // O ano solar
  const YR = {
    title: "O seu ano",
    sub: "No retorno solar — o instante em que o Sol volta exatamente sobre o seu Sol natal — lemos onde estão Vênus, Marte e Júpiter: o clima do ano em curso.",
    returnAt: "Retorno solar {year}: {date}",
    inKey: "{body} do ano na Chave {key} ({gift})",
    hitSame: "— ativa a sua {sphere}",
    hitMirror: "— espelho da sua {sphere}",
    quiet: "este ano não toca diretamente o perfil: tema de fundo, sem urgência."
  };

  // Seção dos anéis
  const RN = {
    title: "Os seus anéis de códons",
    sub: "As 64 Chaves se agrupam em 21 anéis (como os códons do DNA em famílias). Estes são os anéis que as suas 11 esferas tocam.",
    hitTpl: "Chave {key} ({sphere})",
    ofRing: "do anel:",
    touched: "{n} anéis tocados de 21"
  };

  // Almanaque
  const ALM = {
    title: "ALMANAQUE DAS 64 CHAVES",
    ksuper: "O CALENDÁRIO SOLAR · UM ANO DE CHAVES",
    sub: "O Sol atravessa uma Chave a cada ~5,7 dias: este é o calendário dos próximos doze meses. Baixe o arquivo ICS e as 64 «estações» aparecem no seu calendário.",
    today: "HOJE",
    todayTpl: "Hoje o Sol está na Chave {key} — {o} → {d} → {s}",
    until: "até {date}",
    ics: "Baixar o calendário (ICS)",
    icsName: "ologenetica-almanaque",
    icsEvt: "Sol na Chave {key} — {d}",
    icsDesc: "Sombra: {o} → Dom: {d} → Siddhi: {s}. {t}",
    tableFrom: "De", tableKey: "Chave", tableSpectrum: "Espectro"
  };

  // Biblioteca
  const LIB = {
    title: "AS 64 CHAVES",
    ksuper: "BIBLIOTECA · O ESPECTRO COMPLETO",
    sub: "Todas as 64 Chaves do I Ching com o seu espectro Sombra → Dom → Siddhi. Para ler como se visita uma biblioteca: uma de cada vez, sem pressa.",
    ringLbl: "Anel", partnerLbl: "Espelho", lineLbl: "Linhas"
  };

  // Pôster
  const PST = {
    btn: "Baixar o pôster do quadrante (PNG)",
    subtitle: "PERFIL HOLOGENÉTICO",
    linee: "LINHAS", croce: "CRUZ", making: "Gerando o pôster…"
  };

  // Hora desconhecida
  const DS = {
    certain: "CERTA", variable: "VARIÁVEL",
    note: "Sem a hora de nascimento: {stable} esferas de 11 permanecem idênticas em qualquer hora do dia; as outras {variable} podem variar (mostradas com o cálculo do meio-dia).",
    variants: "possíveis: {list}"
  };

  window.HOLO_EXTRA = window.HOLO_EXTRA || {};
  window.HOLO_EXTRA.pt = { LIS, RINGS, TL, WX, YR, RN, ALM, LIB, PST, DS };
})();
