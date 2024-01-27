#version 300 es
precision mediump int;
precision mediump float;

in vec2 fragTexCoord;
in vec4 fragColor;

uniform sampler2D texture0;
uniform vec3 colorTable[8];
uniform int initialPosition;
uniform int colorTableSize;

out vec4 outColor;

void main()
{
    // Texel color fetching from texture sampluer
    vec4 texelColor = texture(texture0, fragTexCoord);
    int n;

    outColor = vec4( texelColor.r, texelColor.g, texelColor.b, texelColor.a);

    for (int i = 0; i < colorTableSize; ++i) {
        if ( texelColor.rgb == colorTable[i].rgb ) {
            if ( ( initialPosition + i ) >= colorTableSize )
                n = ( initialPosition + i ) - colorTableSize;
            else
                n = ( initialPosition + i );
            outColor = vec4(colorTable[ n ].r, colorTable[ n ].g, colorTable[ n ].b, texelColor.a );
            break;
        }
    }
}
