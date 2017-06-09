/* Catchy
 *
 * /game-over.js - Game Over Screen
 *
 * coded by Lugash
 * started at 05/2017
 */

class FLGameOver {
    constructor( width, height ) {
        this.frames = {
            "title": {
                "sx": 649,
                "sy": 145,
                "sw": 299,
                "sh": 33,
                "dx": ( width / 2 ) - ( 299 / 2 ),
                "dy": ( height / 2.8 ),
                "dw": 299,
                "dh": 33,
            },
            "modal": {
                "sx": 507,
                "sy": 374,
                "sw": 253,
                "sh": 130,
                "dx": ( width / 2 ) - ( 253 / 2 ),
                "dy": ( height / 2 ),
                "dw": 253,
                "dh": 130,
            },
            "cyphers": {
                "sx": 518,
                "sw": 12,
                "sh": 14,
                "sy": {
                    "0": 100,
                    "1": 118,
                    "2": 152,
                    "3": 170,
                    "4": 204,
                    "5": 222,
                    "6": 256,
                    "7": 274,
                    "8": 308,
                    "9": 326,
                },
            },
        };
    }

    draw( game ) {
        game.drawSpriteFromFrames( this.frames.title );
        game.drawSpriteFromFrames( this.frames.modal );

        this.drawScore( game, game.score );
    }

    drawScore( game, iScore ) {
        let aScoreParts = `${ iScore }`.split( "" ).reverse(),
            { sx, sy, sw, sh } = this.frames.cyphers;

        aScoreParts.forEach( ( sScorePart, iIndex ) => {
            let dx = ( game.width / 2 ) - sw;

            game.drawSpriteFromFrames( {
                sx,
                "sy": sy[ sScorePart ],
                sw, sh,
                "dx": dx - ( iIndex * ( sw + 2 ) ),
                "dy": this.frames.modal.dy + 75,
                "dw": sw,
                "dh": sh,
            } );
        } );
    }
}
