# 🧠 Clasificador de Toxicidad

Este es un pequeño proyecto web que utiliza [TensorFlow.js](https://www.tensorflow.org/js) y el modelo preentrenado [`toxicity`](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) para detectar contenido tóxico en frases escritas en inglés.

## ¿Qué hace?

- Permite al usuario ingresar una frase en inglés.
- Al hacer clic en el botón "Analizar", el modelo detecta si la frase contiene:
  - Insultos
  - Lenguaje obsceno
  - Discriminación
  - Amenazas
  - Comentarios sexuales inapropiados
  - Entre otros tipos de toxicidad
- Muestra el resultado en formato JSON con los análisis correspondientes.

## ¿Cómo ejecutarlo?

1. Cloná o descargá este repositorio.
   ```bash
   cd https://github.com/Fleitaselene-dev/clasificador_toxicidad.git
3. Abrí el archivo `index2.html` en tu navegador.
4. Escribí una frase en inglés y presioná "Analizar".


## 📦 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- [TensorFlow.js](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.0.0/)
- [Modelo de Toxicidad](https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity)

