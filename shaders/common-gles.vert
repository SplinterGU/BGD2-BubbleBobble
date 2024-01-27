#version 300 es

precision mediump int;
precision mediump float;

// Input vertex attributes
in vec3 bgd_Vertex;
in vec2 bgd_TexCoord;
in vec4 bgd_Color;

// Input uniform values
uniform mat4 bgd_ModelViewProjectionMatrix;

// Output vertex attributes (to fragment shader)
out vec2 fragTexCoord;
out vec4 fragColor;

// NOTE: Add here your custom variables

void main()
{
    // Send vertex attributes to fragment shader
    fragTexCoord = bgd_TexCoord;
    fragColor = bgd_Color;

    // Calculate final vertex position
    gl_Position = bgd_ModelViewProjectionMatrix * vec4(bgd_Vertex, 1.0);
}
