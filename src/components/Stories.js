import Story from "./Story"
export default function Stories(){
    const stories = [
        {id: 0, imagem: "./assets/9gag 1.png",nome: "9gag"},
        {id: 1, imagem: "./assets/meowed 1.png",nome: "meowed"},
        {id: 2, imagem: "./assets/barked 1.png",nome: "barked"},
        {id: 3, imagem: "./assets/nathanwpylestrangeplanet 1.png",nome: "nathanwpyle..."},
        {id: 4, imagem: "./assets/wawawiwacomicsa 1.png",nome: "wawawiwac..."},
        {id: 5, imagem: "./assets/respondeai 1.png",nome: "respondeai"},
        {id: 6, imagem: "./assets/filomoderna 1.png",nome: "filomoderna"},
        {id: 7, imagem: "./assets/memeriagourmet 1.png",nome: "memeriago"}
    ]
    return (
        <div className="caixaStories">
            <ion-icon name="chevron-forward-circle" class="setinha"></ion-icon>
            <div className="stories">
                {stories.map((s) => <Story imagem={s.imagem} nome={s.nome} key={s.id} id={s.id}/>)}
            </div>
        </div>
    )
}