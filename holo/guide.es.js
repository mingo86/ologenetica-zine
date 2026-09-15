/* ============================================================
   OLOGENETICA · GUÍA — ESPAÑOL
   Contenido de la página "Cómo se lee": array de paneles
   { cls: clase de color del panel, h: título, html: cuerpo }.
   Las clases cls y la estructura HTML interna deben mantenerse
   idénticas en las traducciones.
   ============================================================ */
(function () {
  window.HOLO_GUIDE = window.HOLO_GUIDE || {};
  window.HOLO_GUIDE.es = {
    ksuper: "// el manual, en versión pop",
    title: "CÓMO SE LEE (Y SE CALCULA)",
    sub: "¿De dónde salen esos números tipo «26.4»? ¿Qué son Sombra, Don y Siddhi? ¿Y por qué cuentan también los tres meses antes del nacimiento? Todo aquí abajo.",
    panels: [
      { cls: "yellow", h: "La idea en 30 segundos", html: `
<p>El Perfil Hologenético es un mapa que une tres lenguajes antiguos y uno moderno: los <b>64 hexagramas del I Ching</b>, la <b>rueda zodiacal</b> de la astrología, el cálculo «personalidad + diseño» del <b>Human Design</b>, y la correspondencia simbólica con los <b>64 codones del ADN</b>. El resultado: 11 esferas de tu vida, cada una habitada por una de las 64 Llaves, cada una con su Línea (del 1 al 6).</p>
<p>No es una jaula ni una profecía: es una <b>invitación a la contemplación</b>. Cada Llave describe un espectro de frecuencias — del comportamiento reactivo (Sombra) al talento (Don) a la plena floración (Siddhi) — y tú decides, día a día, a qué altura tocarla.</p>` },
      { cls: "red", h: "El cálculo, paso a paso", html: `
<ol class="steps">
<li><b>Momento del nacimiento → Personalidad.</b> Con las efemérides astronómicas calculamos la longitud eclíptica exacta (tropical) de Sol, Tierra, Venus, Marte y Júpiter en el momento en que naciste. Esta es tu parte <b>consciente</b>: lo que reconoces como «yo».</li>
<li><b>~3 meses antes → Diseño.</b> Retrocedemos hasta el momento en que el Sol se encontraba exactamente <b>88° de arco</b> antes de su posición de nacimiento (unos 88-89 días). Ahí calculamos de nuevo Sol, Tierra, Luna, Venus, Marte y Júpiter. Esta es tu parte <b>inconsciente</b>: la huella prenatal, lo que el cuerpo sabe antes de que la mente llegue.</li>
<li><b>De la rueda a las Llaves.</b> Los 360° del zodíaco se dividen en <b>64 sectores de 5,625°</b>, uno por hexagrama. El anclaje es el estándar: el hexagrama 41 empieza a 2°00' de Acuario. Cada planeta «cae» así dentro de una Llave.</li>
<li><b>Las Líneas.</b> Cada sector se divide a su vez en <b>6 Líneas de 0,9375°</b>. Por eso una esfera se escribe «26.4»: Llave 26, Línea 4 — el <i>qué</i> y el <i>cómo</i>.</li>
<li><b>De las posiciones a las Esferas.</b> Cada esfera del perfil corresponde a un cuerpo celeste preciso (tabla aquí abajo): el Sol de personalidad se convierte en el Life's Work, la Tierra de diseño en el Purpose, la Luna de diseño en la Attraction, y así sucesivamente.</li>
</ol>
<div class="mono">sector = 360° ÷ 64 = 5,625°&nbsp;&nbsp;·&nbsp;&nbsp;línea = 5,625° ÷ 6 = 0,9375°<br>diseño = instante en que lon(Sol) = lon(Sol al nacer) − 88°<br>Tierra = Sol + 180°&nbsp;&nbsp;·&nbsp;&nbsp;ancla: hexagrama 41 → 302° (2° Acuario)</div>` },
      { cls: "", h: "Las 11 Esferas y sus planetas", html: `
<table class="stable">
<tr><th>Esfera</th><th>Cuerpo celeste</th><th>Qué cuenta</th></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Life's Work</td><td>Sol · natal</td><td>Tu genio exterior: aquello que has venido a hacer. (En la Secuencia de la Perla se llama también «Brand».)</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Evolution</td><td>Tierra · natal</td><td>Lo que la vida te enseña a través de los desafíos.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Radiance</td><td>Sol · diseño</td><td>Lo que enciende vitalidad y salud cuando lo vives.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Purpose</td><td>Tierra · diseño</td><td>El fundamento profundo: se activa sirviendo a algo más grande.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Attraction</td><td>Luna · diseño</td><td>A quién y qué atraes en las relaciones.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>IQ</td><td>Venus · natal</td><td>El ciclo mental de los 14–21 años: cómo la mente aprendió a defenderse.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>EQ</td><td>Marte · natal</td><td>El ciclo emocional de los 7–14 años: cómo el corazón aprendió a reaccionar.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>SQ</td><td>Venus · diseño</td><td>El imprinting de los primeros 7 años: la raíz de la confianza.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Core / Vocation</td><td>Marte · diseño</td><td>La herida más antigua — que, transformada, se vuelve vocación.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Culture</td><td>Júpiter · diseño</td><td>Tu lugar en la comunidad.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Pearl</td><td>Júpiter · natal</td><td>La recompensa: la prosperidad que llega cuando simplificas.</td></tr>
</table>` },
      { cls: "teal", h: "El espectro: Sombra → Don → Siddhi", html: `
<p>Cada Llave no es una etiqueta sino una <b>banda de frecuencias</b>. La misma energía puede vivirse a tres alturas:</p>
<div class="spectrum">
<div class="spec o"><div class="t">SOMBRA</div><p>La frecuencia del miedo: el comportamiento reactivo, repetitivo, victimista. No es «mala» — es energía comprimida que pide atención.</p></div>
<div class="spec d"><div class="t">DON</div><p>La frecuencia del talento: cuando acoges la sombra sin reprimirla ni descargarla, la misma energía se abre y se convierte en tu contribución.</p></div>
<div class="spec s"><div class="t">SIDDHI</div><p>La frecuencia de la plena floración: la promesa más alta de la Llave, rara como un eclipse. Sirve de estrella polar, no de objetivo.</p></div>
</div>
<p style="margin-top:12px">La lectura se hace así: <b>empieza siempre por la Sombra</b>. Pregúntate dónde te toca ese comportamiento (nadie queda excluido), obsérvalo con amabilidad durante unas semanas, y nota cómo — sin forzar nada — empieza a asomarse el Don.</p>` },
      { cls: "pink", h: "Las 6 Líneas: tu estilo", html: `
<p>Si la Llave es el <i>qué</i>, la Línea es el <i>cómo</i>. Son seis arquetipos que vuelven en todo el perfil:</p>
<div class="linegrid">
<div class="linecard"><b>Línea 1 — El Investigador</b><p>Estudia, profundiza, construye cimientos. Seguridad = conocimiento.</p></div>
<div class="linecard"><b>Línea 2 — El Ermitaño</b><p>Talento natural que no se ve a sí mismo: florece cuando lo llaman.</p></div>
<div class="linecard"><b>Línea 3 — El Experimentador</b><p>Aprende por ensayo y error: cada tropiezo es material precioso.</p></div>
<div class="linecard"><b>Línea 4 — El Oportunista</b><p>Vive de relaciones: las oportunidades llegan a través de las personas.</p></div>
<div class="linecard"><b>Línea 5 — El Hereje</b><p>Soluciones prácticas y carisma: atrae las proyecciones de los demás.</p></div>
<div class="linecard"><b>Línea 6 — El Modelo</b><p>Tres vidas en una: experimenta, observa desde el tejado, se vuelve ejemplo.</p></div>
</div>
<p style="margin-top:12px">El perfil se firma también con dos Líneas, tipo <b>6/2</b>: la primera es la Línea del Sol natal (consciente), la segunda la del Sol de diseño (inconsciente). Son el estilo que muestras y el estilo que actúa solo.</p>` },
      { cls: "blue", h: "El recorrido de lectura recomendado", html: `
<ol>
<li><b>Secuencia de Activación</b> (Life's Work → Evolution → Radiance → Purpose): tu propósito de vida. Contempla una esfera cada vez, sin prisa.</li>
<li><b>Secuencia de Venus</b> (Attraction → IQ → EQ → SQ → Core): las relaciones como espejo. Se recorre hacia atrás por los ciclos de 7 años, hasta la herida originaria.</li>
<li><b>Secuencia de la Perla</b> (Vocation → Culture → Pearl → Brand): la prosperidad. Llega la última: primero el quién, luego el cómo, por último el qué.</li>
</ol>
<p>Regla de oro: <b>mejor una Llave contemplada durante un mes que once leídas en una tarde.</b> El perfil no se «consume»: se habita.</p>` }
    ],
    foot: "Sistema inspirado en el Perfil Hologenético (Gene Keys de Richard Rudd — síntesis de I Ching, astrología y Human Design). Es una herramienta contemplativa y simbólica: no tiene relación con la genética ni validación científica. Textos originales, para el juego y la contemplación."
  };
})();
