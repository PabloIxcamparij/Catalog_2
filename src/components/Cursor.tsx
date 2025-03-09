import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = () => setIsHoveringLink(true);
    const handleMouseOut = () => setIsHoveringLink(false);

    document.addEventListener("mousemove", handleMouseMove);

    // Manejar los eventos de hover en los links
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
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringLink ? "custom-cursor--link" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
