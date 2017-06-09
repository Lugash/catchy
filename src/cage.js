/* Catchy
 *
 * /cage.js - Cage Class
 *
 * coded by Lugash
 * started at 05/2017
 */

class FLCage {
    constructor( width, height ) {
        this.width = width;
        this.height = height;

        this.frames = {
            "top": {
                "sx": 513,
                "sy": 8,
                "sw": 57,
                "sh": 75,
                "dx": ( width / 2 ) - ( 57 / 2 ), // center
                "dy": ( height / 2.5 ) - 60,
                "dw": 57,
                "dh": 75,
            },
        };

        this.state = {
            "speed": 0,
            "acceleration": 1,
        };
    }

    draw( game ) {
        game.drawSpriteFromFrames( this.frames.top );
    }


    handleAction() {
        if (this.frames.top.dy == 140) {
            this.frames.top.dy = 150;
        } else {
            this.frames.top.dy = 140;
        }
    }
}

