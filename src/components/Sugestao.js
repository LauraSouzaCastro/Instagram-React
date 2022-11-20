export default function Sugestao(props) {
    return (
        <div className="sideB">
            <div className="sideI">
                <img src={props.imagem} alt="" />
                <span>
                    <p className="p6">{props.nome}</p>
                    <p className="p7">Segue você</p>
                </span>
            </div>
            <p className="p5">Seguir</p>
        </div>
    )
}