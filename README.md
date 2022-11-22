Projeto #07 - Instagram [React]

# Requisitos

- Geral
    - [x]  Você deve criar seu projeto usando o comando que demos do `create-react-app`
        
        ```bash
        create-react-app nome-do-projeto --template @bootcamp-ra/cra-template-semana1
        ```
        
    - [x]  Por padrão, o `create-react-app` já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado `git init` lá). Em seguida, crie o projeto também no GitHub e conecte seu projeto local ao GitHub (a entrega será por lá)
- Layout
    - [x]  O layout é quase o mesmo do Instagram que vocês fizeram no início do curso! A única diferença é o ícone de lápis após o nome da pessoa dona do perfil, como visto abaixo:
    - [x]  Você pode utilizar o seu próprio código do Instagram para iniciar o projeto ou utilizar o que nós fornecemos no fim desse enunciado 😃
    
- CSS e Imagens
    - [x]  Arquivos CSS podem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`
    - [x]  Você também deve criar, dentro da `public`, uma pasta `assets` para colocar as images
- Componentes
    - [x]  A página deve ser componentizada em **arquivos diferentes**, utilizando import/export
        - Lista dos componentes que deverão ser feitos
            - App
            - Corpo
            - SideBar
            - NavBar
            - Usuario
            - Stories (onde cada item será um componente diferente, o Story)
            - Posts (onde cada item será um componente diferente, o Post)
            - Sugestoes (onde cada item será um componente diferente, o Sugestao)
            
    - [x]  Todos os itens repetitivos do projeto devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, esses itens são:
        - Os stories (deve ter pelo menos 2 stories)
        - Os posts (deve ter pelo menos 2 posts)
        - As sugestões de seguidores (deve ter pelo menos 2 sugestões)
        - O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)
                
- Dados Dinâmicos
    - [x]  O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
        - [x]  Nome de usuário (ao apertar o lápis, aparece um prompt para alterá-lo)
            - O texto que deve ser mudado é apenas o que aparece ao lado do lápis!
        - [x]  Imagem de perfil (ao clicar uma vez na imagem, aparece um prompt pedindo novo link)
        - [x]  Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido)
        - [x]  Like no post
            - Ao clicar no ícone do like o usuário poderá curtir a postagem, caso a postagem já esteja curtida ao clicar no ícone a postagem não deve ficar curtida.
            - Ao clicar na imagem de um post do feed, o usuário poderá curtir a postagem, ou seja, o botão do like deverá ficar preenchido em vermelho
                - OBS: assim como no Instagram real, clicar na imagem **NÃO** retira likes, apenas adiciona caso já não tenha
            - O número de likes deverá aumentar quando a pessoa der um like e diminuir quando retirá-lo.

- **Para correção automática ⚠️**
    
    - [x] Para que a correção automática de projetos consiga avaliar seu projeto, é necessário adicionar os atributos indicados no Figma abaixo

# Bônus

- Like com double click na imagem
    - [x]  Para dar like clicando na imagem, é necessário clicar duas vezes seguidas, rapidamente.
        - Clicar duas vezes com um intervalo de tempo grande NÃO CONFIGURA double click.
- Animação de coração no double click
    - [x]  Quando ocorrer o double click na imagem, deverá surgir no centro da imagem um coração, que primeiro cresce e depois desaparece.
