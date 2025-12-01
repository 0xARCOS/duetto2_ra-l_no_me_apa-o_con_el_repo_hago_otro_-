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

// Lista de 88 emojis representando situaciones cotidianas, personas, objetos y emociones
// (Adaptación del juego OH original que usa pinturas de acuarela)
const emojiList = [
  // Personas y relaciones (11)
  '👤', '👥', '👶', '👧', '👦', '👨', '👩', '👴', '👵', '👫', '👪',
  // Emociones y expresiones (11)
  '😊', '😢', '😡', '😰', '😱', '😍', '🤔', '😴', '😷', '🤗', '😔',
  // Naturaleza (11)
  '🌅', '🌊', '🏔️', '🌳', '🦋', '🌙', '⭐', '🌸', '🔥', '💧', '🌈',
  // Lugares y edificios (11)
  '🏠', '🏡', '🏢', '🏥', '🏫', '⛪', '🏛️', '🌉', '🏰', '🗿', '🚪',
  // Objetos cotidianos (11)
  '📱', '💼', '📚', '🔑', '🎁', '💌', '📷', '🎵', '🕯️', '⏰', '🔔',
  // Símbolos y conceptos (11)
  '❤️', '💔', '⚖️', '🔗', '💡', '🎯', '⚡', '🌟', '✨', '💫', '🔮',
  // Actividades (11)
  '🎭', '🎨', '🎪', '🎬', '📖', '✍️', '🎤', '🎮', '⚽', '🏃', '🧘',
  // Comida y elementos vitales (11)
  '🍞', '🍎', '☕', '🍷', '💊', '🚰', '🌾', '🥀', '🌹', '🍃', '🌱',
  // Adicionales (11)
  '🛏️', '🪑', '🚗', '✈️', '⛵', '🎓', '💰', '🏆', '🎲', '🧩', '🗝️'
];

export const imageCards = emojiList.map((emoji, index) => ({
  id: `i${index + 1}`,
  type: 'image',
  content: emoji,
  state: 'faceDown'
}));

// NOTA IMPORTANTE:
// Juego OH original de Ely Raman (1976) - 88 palabras + 88 imágenes
// Las imágenes originales son pinturas de acuarela. Esta versión usa emojis como representación.
// Para usar imágenes reales, reemplazar los emojis con URLs o rutas:
// content: '/images/card-01.jpg'
