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

// Imágenes pintadas originales del juego OH de Ely Raman (1976)
// 88 pinturas de acuarela representando situaciones cotidianas, personas, objetos y emociones
// Las imágenes se cargan desde /public/oh_images/

export const imageCards = Array.from({ length: 88 }, (_, index) => ({
  id: `i${index + 1}`,
  type: 'image',
  content: `🎨`, // Emoji de fallback si la imagen no carga
  imageData: `/oh_images/oh_card_${String(index + 1).padStart(2, '0')}.jpg`,
  state: 'faceDown'
}));

// NOTA IMPORTANTE:
// Juego OH original de Ely Raman (1976) - 88 palabras + 88 imágenes
// Las imágenes originales son pinturas de acuarela extraídas del PDF oficial.
// Se almacenan en /public/oh_images/ y se referencian mediante el campo imageData
