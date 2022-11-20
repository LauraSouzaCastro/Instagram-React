import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar(){
    let usuario = {nome: "Catana", imagem: "./assets/catanacomics 1.png"}
    return (
        <div className="sidebar">
        <Usuario nome={usuario.nome} imagem={usuario.imagem}/>
        <Sugestoes />
        <p className="p8">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p className="p8">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}