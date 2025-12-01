import { useState } from 'react';
import './ControlPanel.css';

/**
 * Componente ControlPanel - Panel de control con botones de acción
 *
 * Props:
 * - selectedWords: número de palabras seleccionadas
 * - selectedImages: número de imágenes seleccionadas
 * - selectedCount: total de cartas seleccionadas
 * - flippedWords: número de palabras volteadas
 * - flippedImages: número de imágenes volteadas
 * - onFlipSelected: función para voltear cartas seleccionadas
 * - onReset: función para reiniciar todas las cartas
 * - onOpenConfig: función para abrir configuración
 * - darkMode: estado del modo oscuro
 * - onToggleDarkMode: función para cambiar modo oscuro
 */
const ControlPanel = ({ selectedWords, selectedImages, selectedCount, flippedWords, flippedImages, onFlipSelected, onReset, onOpenConfig, darkMode, onToggleDarkMode }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleToggleMaximize = async () => {
    if (window.electronAPI) {
      const newState = await window.electronAPI.toggleMaximize();
      setIsMaximized(newState);
    }
  };

  const handleClose = () => {
    if (window.electronAPI) {
      window.electronAPI.closeWindow();
    }
  };
  return (
    <div className="control-panel">
      <div className="control-row">
        <div className="control-info">
          <div className="counter-group">
            <span className="counter-label">Seleccionadas:</span>
            <span className="selected-count">
              📝 {selectedWords}
            </span>
            <span className="selected-count">
              🖼️ {selectedImages}
            </span>
          </div>
          <div className="counter-group">
            <span className="counter-label">Reveladas:</span>
            <span className="flipped-count">
              📝 {flippedWords}
            </span>
            <span className="flipped-count">
              🖼️ {flippedImages}
            </span>
          </div>
        </div>

        <div className="control-buttons">
          <button
            className="btn btn-primary"
            onClick={onFlipSelected}
            disabled={selectedCount === 0}
          >
            ✨ Revelar carta/s
          </button>

          <button
            className="btn btn-secondary"
            onClick={onReset}
          >
            🔄 Reiniciar / Mezclar
          </button>

          <button
            className="btn btn-config"
            onClick={onOpenConfig}
          >
            ⚙️ Configurar
          </button>

          <button
            className="btn btn-theme"
            onClick={onToggleDarkMode}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="btn btn-window"
            onClick={handleToggleMaximize}
            title={isMaximized ? "Restaurar ventana" : "Maximizar ventana"}
          >
            {isMaximized ? '🗗' : '🗖'}
          </button>

          <button
            className="btn btn-close"
            onClick={handleClose}
            title="Cerrar aplicación"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
