import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detectar si el usuario está en un dispositivo táctil
    const checkIfDesktop = () => {
      setIsDesktop(!window.matchMedia("(pointer: coarse)").matches);
    };

    checkIfDesktop(); // Verificar al cargar la página
    window.addEventListener("resize", checkIfDesktop); // Verificar en cambios de tamaño de pantalla

    if (!isDesktop) return; // Si no es un dispositivo de escritorio, salir

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = () => setIsHoveringLink(true);
    const handleMouseOut = () => setIsHoveringLink(false);

    document.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, [isDesktop]); // Se ejecuta nuevamente si cambia `isDesktop`

  if (!isDesktop) return null; // No renderizar el cursor en dispositivos táctiles

  return (
    <div
      className={`custom-cursor ${isHoveringLink ? "custom-cursor--link" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
