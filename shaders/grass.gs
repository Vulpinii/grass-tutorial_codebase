#version 410 core

layout (points) in;
layout (points) out;
layout (max_vertices = 1) out;

/*
in VS_OUT {
    
} gs_in[];

out GS_OUT {
    
} gs_out;
*/

void main()
{
    gl_Position = gl_in[0].gl_Position;
    EmitVertex();
    EndPrimitive();
} 
