<section id="flor" class="page page--flor">
    <div class="flor__lluvia" aria-label="Pétalos de orquídea que puedes tocar"></div>

    <header class="flor__header">
        <p class="seccion__etiqueta">Con cariño, para Berenice</p>
        <h2 class="flor__titulo">Orquídeas para Bere</h2>
    </header>

    <div class="flor__escena" aria-hidden="true">
        <div class="ramo">
            <span class="ramo__tallo ramo__tallo--1"></span>
            <span class="ramo__tallo ramo__tallo--2"></span>
            <span class="ramo__tallo ramo__tallo--3"></span>
            <span class="ramo__hoja ramo__hoja--1"></span>
            <span class="ramo__hoja ramo__hoja--2"></span>
            <span class="ramo__hoja ramo__hoja--3"></span>
            <span class="ramo__papel"></span>
            <span class="ramo__lazo"></span>

            <?php for ($flor = 1; $flor <= 5; $flor++): ?>
                <span class="orquidea orquidea--<?= $flor ?>">
                    <span class="orquidea__petalo"></span>
                    <span class="orquidea__petalo"></span>
                    <span class="orquidea__petalo"></span>
                    <span class="orquidea__petalo"></span>
                    <span class="orquidea__petalo"></span>
                    <span class="orquidea__centro"></span>
                </span>
            <?php endfor; ?>
        </div>
    </div>

    <p class="flor__frase">Cada orquídea guarda algo bonito para ti.</p>

    <dialog id="flor-modal" class="flor-modal" aria-labelledby="flor-modal-etiqueta">
        <button id="flor-modal-cerrar" class="flor-modal__cerrar" type="button" aria-label="Cerrar mensaje">×</button>
        <p id="flor-modal-etiqueta" class="seccion__etiqueta">Una flor para Berenice</p>
        <p id="flor-modal-mensaje" class="flor-modal__mensaje"></p>
        <span class="flor-modal__adorno" aria-hidden="true">✿</span>
    </dialog>

    <button id="btn-flor-volver" class="btn btn--primary" type="button">
        <span>Volver al mensaje</span>
        <span class="btn__icono">←</span>
    </button>
</section>