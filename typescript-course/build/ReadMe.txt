Para o VS Code, você deverá realizar a seguinte configuração:

CTRL + SHIFT + b e o editor irá abrir um arquivo chamado tasks.json 

Nesse arquivo, logo abaixo da propriedade "version", insira as seguintes propriedades: 

"type" : "typescript",
"command": "tsc"
"group" : {
    "kind": "build",
    "isDefault": true
},
"tsconfig": "tsconfig.json"