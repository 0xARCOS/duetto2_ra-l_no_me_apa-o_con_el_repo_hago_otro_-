// Cartas OH - Juego original de Ely Raman (1976) - 88 cartas por mazo (176 total)

// Lista de 88 palabras del juego OH original (traducidas al español)
const wordList = [
  'AFECTO', 'SOLO', 'IRA', 'ANSIEDAD', 'DISCULPA', 'APARIENCIA', 'ATAQUE', 'ATRACTIVO',
  'COMIENZO', 'ALARDEAR', 'ABURRIMIENTO', 'JEFE', 'CAMBIO', 'NIÑO', 'CÓMICO', 'COMPULSIÓN',
  'CONFORMAR', 'CONFUSIÓN', 'CICLO', 'PELIGRO', 'DEPENDER', 'DESTRUIR', 'DESHONRA', 'DISGUSTO',
  'SUEÑO', 'ELIMINAR', 'BOCHORNO', 'ERÓTICO', 'EXPERTO', 'FRACASO', 'FASCINACIÓN', 'PADRE',
  'MIEDO', 'FIRME', 'JUEGO', 'DAR', 'IR', 'DUELO', 'CULPA', 'HÁBITO',
  'ODIO', 'DUDA', 'OCULTAR', 'HOGAR', 'AFERRARSE', 'HOMOSEXUAL', 'ESPERANZA', 'HUMILLAR',
  'ALEGRÍA', 'INTIMIDAR', 'RISA', 'SOLTAR', 'MENTIRA', 'AMOR', 'HOMBRES', 'MADRE',
  'DESNUDO', 'DEUDA', 'DOLOR', 'POSTURA', 'PODER', 'RESENTIR', 'RESISTIR', 'RETIRARSE',
  'RÍGIDO', 'RIVAL', 'PUDRIR', 'AUTODERROTA', 'VERGÜENZA', 'COMPARTIR', 'DEBER', 'ESCLAVO',
  'DETENER', 'EXTRAÑOS', 'ESTÚPIDO', 'ÉXITO', 'SUPRIMIR', 'TOMAR', 'AMENAZA', 'FEO',
  'VÍCTIMA', 'VIOLAR', 'ESPERAR', 'CANSADO', 'SABIO', 'MUJERES', 'MARAVILLOSO', 'PRESENTE'
];

export const wordCards = wordList.map((word, index) => ({
  id: `w${index + 1}`,
  type: 'word',
  content: word,
  state: 'faceDown'
}));

// Lista de 88 imágenes del juego OH original (pinturas de acuarela)
// Actualmente hay 83 imágenes disponibles, las últimas 5 usan emojis como placeholder
const imageList = [];
for (let i = 1; i <= 88; i++) {
  if (i <= 83) {
    imageList.push(`/images/card-${String(i).padStart(2, '0')}.png`);
  } else {
    // Placeholders para las 5 imágenes faltantes (84-88)
    const placeholders = ['🎲', '🧩', '🗝️', '🌟', '✨'];
    imageList.push(placeholders[i - 84]);
  }
}

export const imageCards = imageList.map((image, index) => ({
  id: `i${index + 1}`,
  type: 'image',
  content: typeof image === 'string' && image.startsWith('/') ? '' : image,
  imageData: typeof image === 'string' && image.startsWith('/') ? image : null,
  state: 'faceDown'
}));

// NOTA IMPORTANTE:
// Juego OH original de Ely Raman (1976) - 88 palabras + 88 imágenes
// Las imágenes originales son pinturas de acuarela.
// Actualmente se usan 83 imágenes reales (card-01.png a card-83.png)
// Las últimas 5 cartas (84-88) usan emojis como placeholder hasta que se agreguen las imágenes faltantes
