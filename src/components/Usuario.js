import { useState } from "react";
export default function Usuario(props) {
    let [nome, setNome] = useState(props.nome);
    let  [imagem, setImagem ]= useState(props.imagem);

  function editaNome(){
    let novoNome = prompt("Informe o nome")
    if(novoNome){
        setNome(novoNome)
    }  
  }
  function editaImagem(){
    let novaImagem = prompt("Informe a url")
    if(novaImagem){
        setImagem(novaImagem)
    }  
  }
    return (
        <div className="sideP" data-test="user">
            <img src={imagem} alt="" data-test="profile-image" onClick={editaImagem}/>
            <span>
                <p className="p1">catanacomics</p>
                <div className="caixaNome">
                    <p className="p2" data-test="name">{nome}</p>
                    <ion-icon name="pencil-sharp" data-test="edit-name" onClick={editaNome}></ion-icon>
                </div>
            </span>
        </div>
    )
}