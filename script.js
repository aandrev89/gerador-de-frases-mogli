const fraseh3 = document.getElementById("fraseh3");
const fraseBtn = document.getElementById("fraseBtn");
const resetarBtn = document.getElementById("resetarBtn");
const contador = document.getElementById("contador");
const contadorAlert = document.getElementById("contadorAlert");
let numcontador = 0;
let numcontadorAlert = 0;
let numfrase;
let fraseAleatoria;
let frase = [
    "Mogli, protegido por Baloo e Baguera.",
"Shere Khan ameaça a selva de Mogli.",
"O Rei Louie deseja o segredo de Mogli.",
"Kaa tenta hipnotizar Mogli.",
"Mogli enfrenta os perigos da selva.",
"Elefantes são liderados por Hathi ",
"A serpente Kaa seduz Mogli.",
"Mogli e a loba Raksha.",
"Mogli encontra o Rei Louie.",
"Baloo, o sábio urso de Mogli.",
"Baguera guia Mogli pela selva.",
"Shere Khan teme o fogo dos homens.",
"Mogli aprende com os elefantes.",
"O Rei Louie dança com Mogli.",
"A amizade entre Mogli e Baloo.",
"Mogli enfrenta seus medos na selva.",
"Kaa tenta trair Mogli.",
"Mogli protege sua família animal.",
"A selva é o lar de Mogli.",
"Mogli, o menino da selva.",
"Abutres cantam, somos nós",
"Baloo e Baguera, os protetores de Mogli.",
"Shere Khan busca vingança.",
"Mogli desbrava os mistérios da selva.",
"O Rei Louie tenta seduzir Mogli.",
"Mogli e os segredos da selva.",
"Mogli e a lei da selva.",
"A jornada de Mogli para a civilização.",
"Mogli, entre o mundo humano e animal.",
"Mogli, o menino livre na natureza.",
"Aventuras selvagens de Mogli."
];

fraseBtn.onclick = function(){
    
    numcontador++;
    numfrase = Math.floor(Math.random() * frase.length);
    fraseAleatoria = frase[numfrase]
    fraseh3.textContent = fraseAleatoria;
    contador.textContent = `Contador: ${numcontador}`;


    if(fraseAleatoria === "Abutres cantam, somos nós" ){

        numcontadorAlert++;
        contadorAlert.textContent = `Encontrou Abutres: ${numcontadorAlert}`;


    }

}

resetarBtn.onclick = function(){
    numcontador = 0;
    contador.textContent = `Contador: ${numcontador}`;
    fraseh3.textContent = "Frases do Mogli";
    numcontadorAlert = 0;
    contadorAlert.textContent = `Encontrou Abutres: ${numcontadorAlert}`;

}