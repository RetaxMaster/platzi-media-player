class AutoPause {

    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {

        this.player = player;

        // Podemos observar un elemento a medida que se va haciendo scroll en la pantalla y con threshold (umbral) podemos indicar el porcentaje de video que se debe ver para que se dispare el handler
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

    }

    // En el handler nos pasa una lista de objetos que estamos observando, en este caso solo hay uno
    handleIntersection(entries) {

        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }

    }

}

export default AutoPause;