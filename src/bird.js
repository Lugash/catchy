/* Catchy
 *
 * /bird.js - Bird Class
 *
 * coded by Lugash
 * started at 05/2017
 */

class FLBird {
    constructor( width, height ) {
        this.width = width;
        this.height = height;

        this.frames = [
            {
                "sx": 573,
                "sy": 208,
                "sw": 34,
                "sh": 24,
            },
            {
                "sx": 629,
                "sy": 208,
                "sw": 34,
                "sh": 24,
            },
            {
                "sx": 685,
                "sy": 208,
                "sw": 34,
                "sh": 24,
            },
        ];

        this.animation = {
            "max": this.frames.length,
            "current": 0,
        };

        this.state = {
            "speed": 0,
            "acceleration": 0.05,
        };

        this.position = {
            "top": 0,
            "left": 0,
        };

        this.destinationFrame = {
            "dx": 30,
            "dy": ( height / 2.5 ) - ( 24 / 2),
            "dw": 34,
            "dh": 24,
        };

        this.time = {
            "start": Date.now(),
            "current": null,
        };
    }

    draw( game ) {
        let { sx, sy, sw, sh } = this.frames[ this.animation.current ],
            { dx, dy, dw, dh } = this.destinationFrame;

        game.context.save();
        game.context.translate( dx, dy );
        // game.context.rotate( this.state.speed / 10 );
        game.drawSpriteFromFrames( {
            sx, sy, sw, sh,
            "dx": dw / 2 * -1,
            "dy": dh / 2 * -1,
            dw, dh,
        } );
        game.context.restore();
    }

    update() {
        this.time.current = Date.now();

        if ( this.time.current - this.time.start > 50 ) {
            this.animation.current += 1;
            if ( this.animation.current === this.animation.max ) {
                this.animation.current = 0;
            }
            this.time.start = Date.now();
        }

        this.state.speed += this.state.acceleration;
        this.destinationFrame.dx += this.state.speed;
    }

    handleAction() {
        this.state.speed = 0;
        this.state.acceleration += 0.025;
        this.destinationFrame.dx = -17; // 17
    }
}
