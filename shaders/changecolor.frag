// Input vertex attributes (from vertex shader)
varying vec2 fragTexCoord;
varying vec4 fragColor;

// Input uniform values
uniform sampler2D texture0;
uniform vec3 colorTable[8];         // Color table (input data) MAX_SIZE = 8
uniform int initialPosition;        // Initial position in the table (input data)
uniform int colorTableSize;         // Color table size (input data)

void main()
{
    // Texel color fetching from texture sampler
    vec3 texelColor = texture2D(texture0, fragTexCoord).rgb;

    for (int i = 0; i < colorTableSize; ++i) {
        if (texelColor.r == colorTable[i].r && texelColor.g == colorTable[i].g && texelColor.b == colorTable[i].b ) {
            gl_FragColor = vec4(colorTable[ ( initialPosition + i ) % colorTableSize ], texture2D(texture0, fragTexCoord ).a);
            return;
        }
    }
    gl_FragColor = vec4(texelColor, texture2D(texture0, fragTexCoord ).a);
}
