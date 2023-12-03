import { useState, useRef, useEffect } from 'react';
import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tabulador.css';
export const Tabulador = () => {

    const [switchActivated, setSwitchActivated] = useState(true);
    const tabsRef = useRef([]);
  
    useEffect(() => {
      // Encuentra todos los elementos con ID que comienza con "tab-"
      tabsRef.current = Array.from(document.querySelectorAll('[id^="tab"]'));
  
      // Añade un evento de tecla para manejar las flechas arriba/abajo
      const handleKeyDown = (event) => {
        // Verifica si la tecla presionada es ArrowDown o ArrowUp y si el switch está activado
        if ((event.key === "ArrowDown" || event.key === "ArrowUp") && switchActivated) {
          // Encuentra el índice del elemento activo
          const currentIndex = tabsRef.current.findIndex(tab => tab === document.activeElement);
  
          // Calcula el nuevo índice basado en la tecla presionada
          let newIndex;
          if (event.key === "ArrowDown") {
            newIndex = (currentIndex + 1) % tabsRef.current.length;
          } else {
            newIndex = (currentIndex - 1 + tabsRef.current.length) % tabsRef.current.length;
          }
  
          // Obtiene el elemento correspondiente al nuevo índice y lo enfoca
          const newTab = tabsRef.current[newIndex];
  
          // Asegura que el nuevo div pueda recibir el foco
          newTab.setAttribute("tabindex", "0");
  
          // Enfoca el nuevo div
          newTab.focus();
  
          // Agrega una clase de transición
          newTab.classList.add("transition-class");
  
          // Elimina la clase después de un pequeño retraso (300ms)
          setTimeout(() => {
            newTab.classList.remove("transition-class");
          }, 2000);
        }
      };
  
      // Añade el evento de tecla al documento
      document.addEventListener("keydown", handleKeyDown);
  
      // Limpia el evento al desmontar el componente
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [switchActivated]);
  
    // Función para activar/desactivar la funcionalidad
    const toggleFunctionality = () => {
      // Verifica el estado del switch y ajusta la funcionalidad en consecuencia
      if (switchActivated) {
        // Desactiva la funcionalidad eliminando el atributo tabindex
        tabsRef.current.forEach(tab => tab.removeAttribute("tabindex"));
      } else {
        // Activa la funcionalidad estableciendo el atributo tabindex a "0"
        tabsRef.current.forEach(tab => tab.setAttribute("tabindex", "0"));
      }
  
      // Cambia el estado del switch
      setSwitchActivated(!switchActivated);
    };

    return (
        <>
    <button id='tab-1' onClick={toggleFunctionality}><FontAwesomeIcon icon={faArrowsTurnRight} /></button>
        </>
    )
}