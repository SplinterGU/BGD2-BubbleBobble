// Input vertex attributes
attribute vec3 bgd_Vertex;
attribute vec2 bgd_TexCoord;
attribute vec4 bgd_Color;

// Input uniform values
uniform mat4 bgd_ModelViewProjectionMatrix;

// Output vertex attributes (to fragment shader)
varying vec2 fragTexCoord;
varying vec4 fragColor;

// NOTE: Add here your custom variables

void main()
{
    // Send vertex attributes to fragment shader
    fragTexCoord = bgd_TexCoord;
    fragColor = bgd_Color;

    // Calculate final vertex position
    gl_Position = bgd_ModelViewProjectionMatrix * vec4(bgd_Vertex, 1.0);
}
