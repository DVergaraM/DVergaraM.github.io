import React from "react";
import "../stylesheets/Dispositivo.css";

function Dispositivo(props) {
  return (
    <div className="contenedor-dispositivo">
      <img
        className="imagen-dispositivo"
        src={require(`../media/dispositivo-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedor-texto-dispositivo">
        <p className="nombre-dispositivo">
          <strong>{props.nombre}</strong>
        </p>
        <p className="fecha-dispositivo">
          Creado en <strong>{props.fecha}</strong> en{" "}
          <strong>{props.lugar}</strong>
        </p>
        <p className="texto-dispositivo">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Dispositivo;
