import { useState } from "react";

export default function Post(props) {
  let [nomeCoracao, setNomeCoracao] = useState("heart-outline");
  let [curtidas, setCurtidas] = useState(props.numCurtidas);
  let [postSalvo, setPostSalvo] = useState("bookmark-outline");
  function some(){
    const coracao = document.getElementById(props.id)
    coracao.parentNode.parentNode.parentNode.parentNode.children[1].children[1].classList.add("escondido")
  }
  function coracao(dbl){
    if(nomeCoracao === "heart" && dbl === false){
      document.getElementById(props.id).classList.remove("vermelho")
      nomeCoracao = "heart-outline"
      setCurtidas(curtidas-1)
    }else if(nomeCoracao !== "heart" && dbl === true){
      nomeCoracao = "heart"
      const coracao = document.getElementById(props.id)
      coracao.classList.add("vermelho")
      coracao.parentNode.parentNode.parentNode.parentNode.children[1].children[1].classList.remove("escondido")
      setTimeout(some, 800)
      setCurtidas(curtidas+1)
    }else if(nomeCoracao !== "heart"){
      nomeCoracao = "heart"
      document.getElementById(props.id).classList.add("vermelho")
      setCurtidas(curtidas+1)
    }
    setNomeCoracao(nomeCoracao)
  }
  function salvar(){
    if(postSalvo === "bookmark-outline"){
      postSalvo = "bookmark"
    }else{
      postSalvo = "bookmark-outline"
    }
    setPostSalvo(postSalvo)
  }

  return (
    <div className="post" data-test="post">
      <div className="cabeca">
        <div className="canD">
          <img className="imagemC" src={props.imagem} alt="" />
          <span className="nomeD">{props.nome}</span>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="caixaImagem">
        <img className="imagemPost" src={props.imagemPost} alt="" onDoubleClick={() => coracao(true)} data-test="post-image" />
        <ion-icon name="heart" class="escondido"></ion-icon>
      </div>  
      <div className="rodape">
        <div className="rodapeI">
          <div className="iconesP">
            <ion-icon name={nomeCoracao} data-test="like-post" onClick={() => coracao(false)} id={props.id}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name={postSalvo} data-test="save-post" onClick={salvar}></ion-icon>
        </div>
        <div className="curtidas">
          <img src={props.imagemCurtida} alt="" />
          <span className="normal">
            Curtido por <span className="negrito">{props.curtidoPor}</span> e&nbsp;
            <span className="negrito">outras <span data-test="likes-number">{curtidas}</span> pessoas</span>
          </span>
        </div>
      </div>
    </div>
  )
}