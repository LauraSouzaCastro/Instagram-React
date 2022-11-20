import Post from "./Post"
export default function Posts(){
  const posts = [
    {id: 0, imagem: "./assets/meowed 1.png", nome: "meowed", imagemPost: "./assets/gato-telefone 1.png", imagemCurtida: "./assets/respondeai 1.png", curtidoPor: "respondeai", numCurtidas: 101523},
    {id: 1, imagem: "./assets/barked 1.png", nome: "barked", imagemPost: "./assets/dog 1.png",  imagemCurtida: "./assets/adorableanimals 2.png", curtidoPor: "adorable_animals", numCurtidas: 99159},
    {id: 2, imagem: "./assets/meowed 1.png", nome: "meowed", imagemPost: "./assets/gato-telefone 1.png",  imagemCurtida: "./assets/respondeai 1.png", curtidoPor: "respondeai", numCurtidas: 101523}
  ]
    return (
        <div className="feed">
          {posts.map((p) => <Post imagem={p.imagem} nome={p.nome} imagemPost={p.imagemPost} imagemCurtida={p.imagemCurtida} curtidoPor={p.curtidoPor} numCurtidas={p.numCurtidas} key={p.id} id={p.id}/>)}
        </div>
    )
}