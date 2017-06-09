/* Catchy
 *
 * /catchy.js - Catchy main class
 *
 * coded by Lugash
 * started at 05/2017
 */

const SPRITESHEET_PATH = "./resources/sprite-ok.png";

class Catchy {
    constructor( { canvas, context, width, height } ) {
        // init canvas-related properties
        this.canvas = canvas;
        this.context = context;
        this.width = width;
        this.height = height;
        this.animationRequestId = null;

        // load spritesheet
        this.sprites = new Image();
        this.sprites.addEventListener( "load", () => {
            this.setup();
        } );
        this.sprites.src = SPRITESHEET_PATH;
    }

    setup() {
        this.reset();

        this.canvas.addEventListener( "click", this.handleAction.bind( this ) );
        document.addEventListener( "keydown", this.handleAction.bind( this ) );

        this.animate();
    }

    reset() {
        let { width, height } = this;

        this.background = new FLBackground( width, height );
        this.starting = new FLStarting( width, height );
        this.cloud = new FLCloud( width, height );
        this.bird = new FLBird( width, height );
        this.gameOver = new FLGameOver( width, height );
        this.cage = new FLCage( width, height );

        // init game-related properties
        this.started = false;
        this.ended = false;
        this.score = 0;
        this.insideTubeIndex = null;
    }

    animate() {
        this.animationRequestId = window.requestAnimationFrame( this.animate.bind( this ) );

        // check game state
        if ( this.started ) {
            this.checkState();
        }
        // update elements
        if ( this.started ) {
            this.cloud.update();
            this.bird.update();
        }
        // draw
        this.context.clearRect( 0, 0, this.width, this.height );
        this.background.draw( this );
        this.cage.draw( this );

        this.cloud.draw( this );
        if ( this.started ) {
            this.bird.draw( this );
            if ( this.ended ) {
                this.gameOver.draw( this );
            }
        } else {
            this.starting.draw( this );
        }
    }

    handleAction( oEvent ) {

        if ( oEvent.type === "keydown" && oEvent.keyCode !== 32 ) {
            return;
        }

        if ( this.started ) {
            let { "dx": birdX, "dy": birdY, "dw": birdW, "dh": birdH } = this.bird.destinationFrame;
            let { "dx": cageX, "dy": cageY, "dw": cageW, "dh": cageH } = this.cage.frames.top;
            let { "acceleration": accel } = this.bird.state;

            if ( birdX > cageX && birdX < cageX+cageW) {
                this.bird.handleAction(); // remet flappy à gauche
                this.cage.handleAction(); // effet cage

                this.score++;
                console.log("dedans", this.score, accel);
            }

            else {
                console.log("dehors");
            }

            // if (this.score == 5) {
            //     console.log("putaaaain");
            // }

        } else {
            this.started = true;
        }

        if ( this.ended ) {
                this.reset();
                this.animate();
        }
    }

    checkState() {
        let { "dx": birdX, "dy": birdY, "dw": birdW, "dh": birdH } = this.bird.destinationFrame;

        // bird s'échappe
        if ( birdX >= 500  ) {
            this.over();
        }
    }

    over() {
        this.ended = true;

        window.cancelAnimationFrame( this.animationRequestId );   
    }

    drawSpriteFromFrames( { sx, sy, sw, sh, dx, dy, dw, dh } ) {
        this.context.drawImage( this.sprites, sx, sy, sw, sh, dx, dy, dw, dh );
    }
}
