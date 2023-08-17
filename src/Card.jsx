//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <h2>{props.iniciales} </h2>
    </div>
  );
}

export default Card;
