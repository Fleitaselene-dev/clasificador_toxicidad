//Valor de nivel minimo de confianza
const threshold = 0.5;
//Variable global del modelo
let model

//Carga del modelo de toxicidad
toxicity.load(threshold).then((loadedModel) => {
    model = loadedModel; })

function checkToxicity(){ 
    //Obtencion del valor ingresado a la input
    const sentences = [document.getElementById("sentences").value];
    //Clasificacion del contenido de la input
    model.classify(sentences).then((predictions) => {
    //Mostramos el resultado en formato Json
    const result = document.getElementById("result").textContent = JSON.stringify(predictions, null, 2);
 });
 }  