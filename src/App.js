import "./App.css";
import { useState } from "react";
import html2canvas from 'html2canvas'
function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState('');

  const onChangeLine1 = (valor1) => {
    setLinea1(valor1.target.value);
  };
  const onChangeLine2 = (valor2) => {
    setLinea2(valor2.target.value);
  };

  const onChangeImage = (image) => {
    setImage(image.target.value);
  };
  const onClickButton = () => {
   
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();

  });
  };

  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="niña">niña</option>
        <option value="futurama">futurama</option>
      </select>
      <br />

      <input onChange={onChangeLine1} type="text" placeholder="linea 1" />
      <br />
      <input onChange={onChangeLine2} type="text" placeholder="linea 2" />
      <br />
      <button onClick={onClickButton}>Exportar</button>

      <div className="meme" id="meme">
        <spam id='linea1'>{linea1}</spam>
        <br />
        
        <img src={"/Image/"+ image+".jpg" }/>
       
        <spam id='linea2'>{linea2}</spam>
      </div>
    </div>
  );
}

export default App;
