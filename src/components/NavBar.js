export default function NavBar(){
    return (
        <div className="barra">
            <div className="iEs">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="linha"></div>
                <img className="logo" src="./assets/logo.png" alt="" />
            </div>
            <div className="iCe">
                <input className="pesquisar" type="search" placeholder="Pesquisar" />
            </div>
            <div className="mob"><img src="./assets/logo.png" alt=""/></div>
            <div className="iDi">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline" class="some"></ion-icon>
                <ion-icon name="heart-outline" class="some"></ion-icon>
                <ion-icon name="person-outline" class="some"></ion-icon>
            </div>
        </div>
    )
}