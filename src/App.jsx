import { useState } from "react";
import Card from "./Card";

const App = () => {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [show, setShow] = useState(false); 
  const [error, setError] = useState(false);


  const [iniciales, setIniciales] = useState('');
  const [nombre, setNombre] = useState ('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (iniciales.length > 3 && nombre <= 6){

      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }



  }

  const handleChange = (e) =>  setIniciales(e.target.value)
  const handleChange2 = (e) =>  setNombre(e.target.value)

  console.log(show)
  


  return (

    <div className="App" >
      <form onSubmit={handleSubmit}>
      <label >Introduce 3 iniciales</label>
        <input type="text"onChange={handleChange} />
        <label>Introduce nombre</label>
        <input type="text"onChange={handleChange2} />
        <button>Enviar</button>

        {error && <h4>Por favor chequea que la información sea correcta</h4>}

        {show ? 
        <Card iniciales = {iniciales} nombre = {nombre}/>
        : null}
      </form>
  

      








    </div>
  );
}

export default App;
