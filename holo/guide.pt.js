/* ============================================================
   OLOGENETICA · GUIA — PORTUGUÊS (BRASIL)
   Conteúdo da página "Como se lê": array de painéis
   { cls: classe de cor do painel, h: título, html: corpo }.
   As classes cls e a estrutura HTML interna devem ser mantidas
   idênticas nas traduções.
   ============================================================ */
(function () {
  window.HOLO_GUIDE = window.HOLO_GUIDE || {};
  window.HOLO_GUIDE.pt = {
    ksuper: "// o manual, em versão pop",
    title: "COMO SE LÊ (E SE CALCULA)",
    sub: "De onde saem aqueles números tipo «26.4»? O que são Sombra, Dom e Siddhi? E por que os três meses antes do nascimento também contam? Tudo aqui embaixo.",
    panels: [
      { cls: "yellow", h: "A ideia em 30 segundos", html: `
<p>O Perfil Hologenético é um mapa que une três linguagens antigas e uma moderna: os <b>64 hexagramas do I Ching</b>, a <b>roda zodiacal</b> da astrologia, o cálculo «personalidade + design» do <b>Human Design</b>, e a correspondência simbólica com os <b>64 códons do DNA</b>. O resultado: 11 esferas da sua vida, cada uma habitada por uma das 64 Chaves, cada uma com a sua Linha (de 1 a 6).</p>
<p>Não é uma jaula nem uma profecia: é um <b>convite à contemplação</b>. Cada Chave descreve um espectro de frequências — do comportamento reativo (Sombra) ao talento (Dom) até o pleno florescimento (Siddhi) — e você decide, dia após dia, em que altura tocá-la.</p>` },
      { cls: "red", h: "O cálculo, passo a passo", html: `
<ol class="steps">
<li><b>Momento do nascimento → Personalidade.</b> Com as efemérides astronômicas calculamos a longitude eclíptica exata (tropical) de Sol, Terra, Vênus, Marte e Júpiter no momento em que você nasceu. Esta é a sua parte <b>consciente</b>: aquilo que você reconhece como «eu».</li>
<li><b>~3 meses antes → Design.</b> Voltamos atrás até o momento em que o Sol estava exatamente <b>88° de arco</b> antes da sua posição de nascimento (cerca de 88-89 dias). Ali calculamos de novo Sol, Terra, Lua, Vênus, Marte e Júpiter. Esta é a sua parte <b>inconsciente</b>: a marca pré-natal, aquilo que o corpo sabe antes de a mente chegar.</li>
<li><b>Da roda às Chaves.</b> Os 360° do zodíaco são divididos em <b>64 setores de 5,625°</b>, um por hexagrama. A ancoragem é a padrão: o hexagrama 41 começa a 2°00' de Aquário. Cada planeta «cai» assim dentro de uma Chave.</li>
<li><b>As Linhas.</b> Cada setor é por sua vez dividido em <b>6 Linhas de 0,9375°</b>. Por isso uma esfera se escreve «26.4»: Chave 26, Linha 4 — o <i>quê</i> e o <i>como</i>.</li>
<li><b>Das posições às Esferas.</b> Cada esfera do perfil corresponde a um corpo celeste preciso (tabela aqui embaixo): o Sol de personalidade vira o Life's Work, a Terra de design o Purpose, a Lua de design a Attraction, e assim por diante.</li>
</ol>
<div class="mono">setor = 360° ÷ 64 = 5,625°&nbsp;&nbsp;·&nbsp;&nbsp;linha = 5,625° ÷ 6 = 0,9375°<br>design = instante em que lon(Sol) = lon(Sol no nascimento) − 88°<br>Terra = Sol + 180°&nbsp;&nbsp;·&nbsp;&nbsp;âncora: hexagrama 41 → 302° (2° Aquário)</div>` },
      { cls: "", h: "As 11 Esferas e seus planetas", html: `
<table class="stable">
<tr><th>Esfera</th><th>Corpo celeste</th><th>O que conta</th></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Life's Work</td><td>Sol · natal</td><td>Seu gênio exterior: aquilo que você veio fazer. (Na Sequência da Pérola também se chama «Brand».)</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Evolution</td><td>Terra · natal</td><td>Aquilo que a vida ensina a você através dos desafios.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Radiance</td><td>Sol · design</td><td>Aquilo que acende vitalidade e saúde quando você o vive.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Purpose</td><td>Terra · design</td><td>O fundamento profundo: ativa-se servindo a algo maior.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Attraction</td><td>Lua · design</td><td>Quem e o que você atrai nas relações.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>IQ</td><td>Vênus · natal</td><td>O ciclo mental dos 14–21 anos: como a mente aprendeu a se defender.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>EQ</td><td>Marte · natal</td><td>O ciclo emocional dos 7–14 anos: como o coração aprendeu a reagir.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>SQ</td><td>Vênus · design</td><td>O imprinting dos primeiros 7 anos: a raiz da confiança.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Core / Vocation</td><td>Marte · design</td><td>A ferida mais antiga — que, transformada, vira vocação.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Culture</td><td>Júpiter · design</td><td>O seu lugar na comunidade.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Pearl</td><td>Júpiter · natal</td><td>A recompensa: a prosperidade que chega quando você simplifica.</td></tr>
</table>` },
      { cls: "teal", h: "O espectro: Sombra → Dom → Siddhi", html: `
<p>Cada Chave não é um rótulo, mas uma <b>faixa de frequências</b>. A mesma energia pode ser vivida em três alturas:</p>
<div class="spectrum">
<div class="spec o"><div class="t">SOMBRA</div><p>A frequência do medo: o comportamento reativo, repetitivo, vitimista. Não é «má» — é energia comprimida pedindo atenção.</p></div>
<div class="spec d"><div class="t">DOM</div><p>A frequência do talento: quando você acolhe a sombra sem reprimi-la nem descarregá-la, a mesma energia se abre e vira a sua contribuição.</p></div>
<div class="spec s"><div class="t">SIDDHI</div><p>A frequência do pleno florescimento: a promessa mais alta da Chave, rara como um eclipse. Serve de estrela-guia, não de meta.</p></div>
</div>
<p style="margin-top:12px">A leitura se faz assim: <b>comece sempre pela Sombra</b>. Pergunte-se onde aquele comportamento diz respeito a você (ninguém está de fora), observe-o com gentileza por algumas semanas, e note como — sem forçar nada — o Dom começa a despontar.</p>` },
      { cls: "pink", h: "As 6 Linhas: o seu estilo", html: `
<p>Se a Chave é o <i>quê</i>, a Linha é o <i>como</i>. São seis arquétipos que retornam em todo o perfil:</p>
<div class="linegrid">
<div class="linecard"><b>Linha 1 — O Investigador</b><p>Estuda, aprofunda, constrói fundamentos. Segurança = conhecimento.</p></div>
<div class="linecard"><b>Linha 2 — O Eremita</b><p>Talento natural que não se vê por si só: floresce quando é chamado.</p></div>
<div class="linecard"><b>Linha 3 — O Experimentador</b><p>Aprende por tentativa e erro: cada tropeço é material precioso.</p></div>
<div class="linecard"><b>Linha 4 — O Oportunista</b><p>Vive de relações: as oportunidades chegam através das pessoas.</p></div>
<div class="linecard"><b>Linha 5 — O Herege</b><p>Soluções práticas e carisma: atrai as projeções dos outros.</p></div>
<div class="linecard"><b>Linha 6 — O Modelo</b><p>Três vidas em uma: experimenta, observa do teto, vira exemplo.</p></div>
</div>
<p style="margin-top:12px">O perfil também se assina com duas Linhas, tipo <b>6/2</b>: a primeira é a Linha do Sol natal (consciente), a segunda a do Sol de design (inconsciente). São o estilo que você mostra e o estilo que age sozinho.</p>` },
      { cls: "blue", h: "O percurso de leitura recomendado", html: `
<ol>
<li><b>Sequência de Ativação</b> (Life's Work → Evolution → Radiance → Purpose): o seu propósito de vida. Contemple uma esfera de cada vez, sem pressa.</li>
<li><b>Sequência de Vênus</b> (Attraction → IQ → EQ → SQ → Core): as relações como espelho. Percorre-se de trás para a frente nos ciclos de 7 anos, até a ferida original.</li>
<li><b>Sequência da Pérola</b> (Vocation → Culture → Pearl → Brand): a prosperidade. Vem por último: primeiro o quem, depois o como, enfim o quê.</li>
</ol>
<p>Regra de ouro: <b>melhor uma Chave contemplada por um mês do que onze lidas numa noite.</b> O perfil não se «consome»: habita-se.</p>` }
    ],
    foot: "Sistema inspirado no Perfil Hologenético (Gene Keys de Richard Rudd — síntese de I Ching, astrologia e Human Design). É uma ferramenta contemplativa e simbólica: não tem relação com a genética nem validação científica. Textos originais, por diversão e contemplação."
  };
})();
