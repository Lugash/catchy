/* Catchy
 *
 * /starting.js - Starting Screen
 *
 * coded by Lugash
 * started at 05/2017
 */

class FLStarting {
    constructor( width, height ) {
        this.frames = {
            "logo": {
                "sx": 631,
                "sy": 16,
                "sw": 382,
                "sh": 59,
                "dx": ( width / 2 ) - ( 382 / 2 ), // center
                "dy": ( height / 5 ),
                "dw": 382,
                "dh": 59,
            },
            "ready": {
                "sx": 665,
                "sy": 95,
                "sw": 283,
                "sh": 33,
                "dx": ( width / 2 ) - ( 283 / 2 ), // center,
                "dy": ( height / 2.8 ),
                "dw": 283,
                "dh": 33,
            },
        };
    }

    draw( game ) {
        game.drawSpriteFromFrames( this.frames.logo );
        game.drawSpriteFromFrames( this.frames.ready );
    }
}
