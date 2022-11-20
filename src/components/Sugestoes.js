import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoes = [
        {id: 0, imagem: "./assets/badvibesmemes 1.png", nome: "bad.vibes.memes"},
        {id: 1, imagem: "./assets/chibirdart 1.png", nome: "chibirdart"},
        {id: 2, imagem: "./assets/razoesparaacreditar 1.png", nome: "razoesparaacreditar"},
        {id: 3, imagem: "./assets/adorableanimals 2.png", nome: "adorable_animals"},
        {id: 4, imagem: "./assets/smallcutecats 1.png", nome: "smallcutecats"},
    ]
    return (
        <div>
            <div className="sideT">
                <p className="p3">Sugestões para você</p>
                <p className="p4">Ver tudo</p>
            </div>
            {sugestoes.map((s) => <Sugestao imagem={s.imagem} nome={s.nome} key={s.id} id={s.id}/>)}
        </div>
    )
}