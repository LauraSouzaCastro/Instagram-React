export default function Story(props){
    return (
        <div className="storie">
            <img className="borda" src="./assets/stories_background.jpg" alt=""/>
            <img className="foto" src={props.imagem} alt="" />
            <p className="nome">{props.nome}</p>
        </div>
    )
}