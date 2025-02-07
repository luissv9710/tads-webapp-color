// Obtener elementos del DOM
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

// Función para actualizar el color
function updateColor() {
    const r = parseInt(redRange.value);
    const g = parseInt(greenRange.value);
    const b = parseInt(blueRange.value);

    const hex = rgbToHex(r, g, b);

    // Actualizar estilos y valores
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hex;
    
    // Sincronizar los inputs numéricos con los sliders
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
}

// Función para convertir RGB a HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + (+b)).toString(16).slice(1).toUpperCase()}`;
}

// Función para actualizar sliders desde inputs numéricos
function updateSliders() {
    redRange.value = redInput.value;
    greenRange.value = greenInput.value;
    blueRange.value = blueInput.value;
    updateColor();
}

// Eventos para actualizar el color desde sliders
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// Eventos para actualizar sliders desde inputs numéricos
redInput.addEventListener("input", updateSliders);
greenInput.addEventListener("input", updateSliders);
blueInput.addEventListener("input", updateSliders);

// Inicializar color
updateColor();