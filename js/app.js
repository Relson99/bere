document.addEventListener('DOMContentLoaded', () => {
    const pages = Array.from(document.querySelectorAll('.page'));

    const mostrarPagina = (id) => {
        pages.forEach((page) => {
            const isActive = page.id === id;
            page.classList.toggle('active', isActive);
        });
    };

    const btnComenzar = document.getElementById('btn-comenzar');
    const btnFlorDirecto = document.getElementById('btn-flor-directo');
    const btnContinuar = document.getElementById('btn-continuar');
    const btnFrases = document.getElementById('btn-frases');
    const btnVolver = document.getElementById('btn-volver');
    const btnFlor = document.getElementById('btn-flor');
    const btnFlorVolver = document.getElementById('btn-flor-volver');

    if (btnComenzar) {
        btnComenzar.addEventListener('click', () => {
            mostrarPagina('introduccion');
        });
    }

    if (btnFlorDirecto) {
        btnFlorDirecto.addEventListener('click', () => {
            mostrarPagina('flor');
        });
    }

    if (btnContinuar) {
        btnContinuar.addEventListener('click', () => {
            mostrarPagina('mensaje');
        });
    }

    if (btnFrases) {
        btnFrases.addEventListener('click', () => {
            mostrarPagina('frases');
        });
    }

    if (btnFlor) {
        btnFlor.addEventListener('click', () => {
            mostrarPagina('flor');
        });
    }

    if (btnFlorVolver) {
        btnFlorVolver.addEventListener('click', () => {
            mostrarPagina('mensaje');
        });
    }

    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            mostrarPagina('inicio');
        });
    }

    const frases = [
        'Eres más fuerte de lo que imaginas, y cada día lo demuestras.',
        'Tu sonrisa tiene el poder de cambiar el ánimo de cualquier día.',
        'No necesitas ser perfecta para ser increíble.',
        'Cada paso que das te acerca más a tu mejor versión.',
        'Tu valor no depende de lo que otros vean en ti.',
        'Hay una luz especial en ti que merece ser cuidada.',
        'Confía en tu proceso; todo está floreciendo a su tiempo.',
        'Tú puedes más de lo que te imaginas, incluso en los días difíciles.',
        'La belleza de tu interior es más brillante que cualquier duda.',
        'Eres una razón más que válida para creer en cosas bonitas.',
        'No te compares con nadie; eres una historia única y preciosa.',
        'Tus sueños no son demasiado grandes; solo requieren valentía.',
        'Cuida tu energía, porque hay cosas bellas que merecen tu atención.',
        'Cada pequeño esfuerzo cuenta y te lleva más lejos de lo que crees.',
        'La confianza empieza cuando decides escucharte a ti misma.',
        'Tu esencia es valiosa, tu presencia es memorable y tu corazón merece paz.',
        'Día a día te vuelves más fuerte, más sabia y más brillante.',
        'No todo tiene que resolverse de pronto; también está bien avanzar despacio.',
        'Hay belleza en tu crecimiento, aunque aún no lo veas con claridad.',
        'Tú mereces amor, calma, respeto y una vida que te haga feliz.',
        'Aunque a veces te cueste, rara vez dejas de ser increíble.',
        'Eres una mezcla de alegría, fuerza y sensibilidad que vale la pena.',
        'No tienes que demostrarle a nadie qué tan valiosa eres.',
        'Las personas que te conocen bien saben que tu brillo es real.',
        'Hay un camino hermoso esperando a que lo recorras con confianza.',
        'Lo que hoy parece difícil puede convertirse en una gran victoria mañana.',
        'A veces la fuerza más grande es seguir adelante aun sin entender todo.',
        'Tu historia aún tiene muchos capítulos hermosos por escribir.',
        'Eres capaz de reconstruir tus días con paciencia y amor.',
        'Cada sueño que sostienes merece una oportunidad para crecer.',
        'No hace falta que todo salga perfecto para que haya un gran progreso.',
        'Tu presencia puede ser un hogar para quien te necesita.',
        'Cree en la versión de ti que aún no se ha mostrado al mundo.',
        'No subestimes lo que puedes crear cuando te tomas en serio tu bienestar.',
        'Eres más resiliente de lo que piensas y más bella de lo que sabes.',
        'La vida tiene una manera especial de recompensar la constancia.',
        'Tú no eres un error; eres una experiencia preciosa en evolución.',
        'Lo que te hace especial no es perfecto; es auténtico.',
        'Cada vez que decides seguir, te conviertes en una prueba de fortaleza.',
        'Tu esfuerzo cuenta aunque no siempre lo veas reflejado de inmediato.',
        'Mereces una vida en la que la paz y la alegría te acompañen.',
        'La forma en que intentas seguir adelante ya es un acto de valentía.',
        'Tus metas no son imposibles; solo requieren más confianza que miedo.',
        'Hay un brillo en ti que no necesita aprobación para existir.',
        'A veces lo más hermoso es aprender a quererse con paciencia.',
        'Permítete crecer sin exigirte perfección.',
        'No hay una sola versión correcta de ti; hay muchas maneras de florecer.',
        'Eres una persona digna de ser amada con profundidad y sinceridad.',
        'Tus posibilidades son más grandes que tu preocupación actual.',
        'Cada día es una oportunidad para vivir más desde el corazón.',
        'Tu valor permanece aunque te sientas cansada o confundida.',
        'Hay fuerza en tu vulnerabilidad y belleza en tu autenticidad.',
        'Lo que te hace distinta es lo que hace que valga la pena conocerte.',
        'No te alejes de tus sueños por miedo a ser vista.',
        'La calma también es una forma de progresar.',
        'Eres capaz de convertir lo normal en algo inolvidable.',
        'Tu energía importa y merece ser cuidada con intención.',
        'A veces basta con respirar profundo y seguir siendo tú.',
        'Los buenos momentos también te están buscando.',
        'No necesitas tener todas las respuestas para estar en el camino correcto.',
        'Cuando crees en ti, cambias el tono de tu vida.',
        'La verdad es que te mereces más de lo que te permites imaginar.',
        'Tu historia tiene más luz de la que tú crees.',
        'La gentleness que llevas dentro también es fuerza.',
        'No pierdas la chance de ser feliz solo por no querer depender de alguien.',
        'La vida siempre deja espacio para la alegría si decides abrirlo.',
        'Tu brillo no pasa desapercibido para quienes realmente te ven.',
        'Nada de lo que te está ocurriendo define todo lo que puedes llegar a ser.',
        'Mereces ser tratada con atención, respeto y cariño genuino.',
        'Hay una paz que llega cuando te permites ser tú sin censura.',
        'Tus cualidades hacen más difícil ignorarte.',
        'Cada paso pequeño crea un camino más hermoso que cualquiera de tus dudas.',
        'La confianza se construye con paciencia y con decisiones coherentes.',
        'Eres capaz de sostener tus propios sueños sin perderte en el ruido.',
        'Hay una historia hermosa en la forma en que sigues adelante.',
        'No necesitas justificar tu valor; ya existe.',
        'La vida te invita a cuidarte, quererte y creer en lo que viene.',
        'Tu belleza no es superficial; también está en la manera en que te sientes.',
        'No te quedes en lo que no te ayuda; sigue moviéndote hacia lo que te inspira.',
        'Cada nuevo día es una oportunidad para elegir la versión más plena de ti.',
        'Tu luz vale la pena, aunque no siempre te la enseñen a reconocer.',
        'El proceso no siempre es bonito, pero sí es valioso.',
        'Hay una forma de ser feliz que te está esperando en medio del caos.',
        'No te confundas por un mal momento; tú eres mucho más grande que eso.',
        'Tu corazón merece ser cuidado con la misma delicadeza con la que te cuidas a ti.',
        'No te pongas límites que no tienen razón de existir.',
        'Cuando te permites ser tú, el mundo responde de forma distinta.',
        'Cada vez que superas una duda, te vuelves un poco más libre.',
        'Lo que te hace bella es que sigues intentando amar y crecer.',
        'La confianza no aparece de golpe; se fortalece con cada paso.',
        'Hay un futuro más luminoso para ti de lo que puedes ver ahora.',
        'Eres más valiosa de lo que tu mente a veces intenta convencerte.',
        'Aprender a quererte es una de las decisiones más profundas que puedes tomar.',
        'La vida no necesita ser perfecta para ser hermosa.',
        'Tu bienestar importa tanto como cualquier otra meta.',
        'Lo bueno sigue llegando, aunque tú aún no lo veas claramente.',
        'No hay que esperar a sentirse perfecta para empezar a ser feliz.',
        'Eres capaz de crear un mundo interior más tranquilo y más luminoso.',
        'Tú mereces sentirte especial todos los días.',
        'Tu valor no cambia según la aprobación de los demás.',
        'Cada emoción que atraviesas te está enseñando a ser más tú.',
        'Por más difícil que sea, hay una fuerza profunda dentro de ti.',
        'Sigue siendo tú, porque esa es la persona más bonita que puedes ser.'
    ];

    const fraseGrid = document.getElementById('frases-grid');

    if (fraseGrid) {
        fraseGrid.innerHTML = frases.map((frase, index) => `
            <article class="frase-card">
                <span class="frase-card__numero">${index + 1}</span>
                <p>${frase}</p>
            </article>
        `).join('');
    }

    const frasesFlor = [
        'Berenice, admiro la forma en que sigues adelante incluso cuando el camino se pone difícil.',
        'Tu esfuerzo de cada día merece ser celebrado, también en las cosas que solo tú conoces.',
        'Hay una fuerza serena en ti que inspira a quienes tienen la suerte de conocerte.',
        'Me encanta que seas tú: auténtica, especial y llena de luz propia.',
        'Cada meta que persigues habla de tu valentía y de todo lo que eres capaz de lograr.',
        'Tu dedicación convierte los pasos pequeños en logros enormes.',
        'Admiro el corazón que pones en aquello que te importa.',
        'Ojalá pudieras verte un momento con los ojos de quienes te admiramos.',
        'Berenice, mereces un amor que te cuide, te respete y celebre cada parte de ti.',
        'Tu manera de escuchar y estar presente es un regalo que no pasa inadvertido.',
        'Incluso en tus días cansados, sigues teniendo un valor inmenso.',
        'Me inspira que vuelvas a intentarlo con tanta determinación.',
        'Tu sensibilidad no te hace débil: es una de las formas más bonitas de tu fuerza.',
        'Estoy orgulloso de cada esfuerzo que haces, incluso de los que nadie más ve.',
        'Hay algo en tu sonrisa que vuelve más amable cualquier día.',
        'Que nunca te falten motivos para reconocer lo lejos que has llegado.',
        'Tu pasión y tu constancia hacen que tus sueños tengan raíces fuertes.',
        'Te admiro por la persona que eres y por todo lo que sigues construyendo.',
        'Berenice, tu presencia hace más cálidos los momentos que compartimos.',
        'No tienes que tener todo resuelto para merecer cariño y admiración.',
        'Cada vez que eliges creer en ti, das un paso valiente hacia lo que deseas.',
        'Tu bondad deja huellas bonitas en las personas que te rodean.',
        'Quiero que recuerdes cuánto mereces ser querida, hoy y todos los días.',
        'Lo que haces importa, tu esfuerzo cuenta y tú importas muchísimo.',
        'Admiro tu manera de levantarte con ternura y seguir avanzando.',
        'Tu esencia es irrepetible; qué suerte que el mundo tenga a alguien como tú.',
        'Estoy aquí para celebrar tus victorias y acompañarte en los días pesados.',
        'El amor que mereces también incluye paciencia, calma y respeto por tus tiempos.',
        'Berenice, confío en todo lo que puedes alcanzar sin dejar de ser tú.',
        'Gracias por existir con tanta belleza, fortaleza y verdad.'
    ];

    const escenaFlor = document.querySelector('.flor__escena');
    const lluviaFlor = document.querySelector('.flor__lluvia');
    const modalFlor = document.getElementById('flor-modal');
    const mensajeModalFlor = document.getElementById('flor-modal-mensaje');
    const cerrarModalFlor = document.getElementById('flor-modal-cerrar');

    if (escenaFlor && lluviaFlor && modalFlor && mensajeModalFlor) {
        frasesFlor.forEach((frase, indice) => {
            const petalo = document.createElement('button');
            const duracion = 18 + Math.random() * 22;
            const numero = (minimo, maximo) => minimo + Math.random() * (maximo - minimo);

            petalo.className = 'flor__petalo';
            petalo.type = 'button';
            petalo.setAttribute('aria-label', `Abrir dedicatoria ${indice + 1} para Berenice`);
            petalo.style.left = `${numero(0, 100)}%`;
            petalo.style.top = `${numero(0, 100)}%`;
            petalo.style.setProperty('--vuelo-x', `${numero(-75, 75).toFixed(1)}vw`);
            petalo.style.setProperty('--vuelo-y', `${numero(-75, 75).toFixed(1)}vh`);
            petalo.style.setProperty('--fin-x', `${numero(-130, 130).toFixed(1)}vw`);
            petalo.style.setProperty('--fin-y', `${numero(-130, 130).toFixed(1)}vh`);
            petalo.style.setProperty('--giro-vuelo', `${numero(240, 720).toFixed(0)}deg`);
            petalo.style.setProperty('--duracion-vuelo', `${duracion.toFixed(1)}s`);
            petalo.style.setProperty('--retraso-vuelo', `${-numero(0, duracion).toFixed(1)}s`);
            petalo.style.setProperty('--escala-petalo', numero(0.72, 1.2).toFixed(2));
            petalo.addEventListener('click', () => {
                mensajeModalFlor.textContent = frase;
                modalFlor.showModal();
            });

            lluviaFlor.appendChild(petalo);
        });

        cerrarModalFlor.addEventListener('click', () => modalFlor.close());
        modalFlor.addEventListener('click', (event) => {
            if (event.target === modalFlor) {
                modalFlor.close();
            }
        });
    }

    mostrarPagina('inicio');
});