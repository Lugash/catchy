/* Catchy
 *
 * /cloud.js - Cloud Class
 *
 * coded by Lugash
 * started at 05/2017
 */


class FLCloud {
    constructor( width, height ) {
        this.frame = {
            "cloud1": {
                "sx": 793,
                "sy": 378,
                "sw": 116,
                "sh": 66,
                "dx": width - 100,
                "dy": 0,
                "dw": 116,
                "dh": 66,
            },
            "cloud2": {
                "sx": 885,
                "sy": 444,
                "sw": 119,
                "sh": 47,
                "dx": width  / 2,
                "dy": 50,
                "dw": 119,
                "dh": 47,
            },
            "cloud3": {
                "sx": 851,
                "sy": 250,
                "sw": 86,
                "sh": 49,
                "dx": width / 3,
                "dy": 60,
                "dw": 86,
                "dh": 49,
            },
        };

        this.speed1 = .15;
        this.speed2 = .08;
        this.speed3 = .05;
    }

    draw( game ) {
        game.drawSpriteFromFrames( this.frame.cloud1 );
        game.drawSpriteFromFrames( this.frame.cloud2 );
        game.drawSpriteFromFrames( this.frame.cloud3 );
    }

    update() {
        this.frame.cloud1.dx -= this.speed1;
        this.frame.cloud2.dx -= this.speed2;
        this.frame.cloud3.dx -= this.speed3;
    }
}
