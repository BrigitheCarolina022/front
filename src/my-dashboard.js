import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';
export class myDashboard extends LitElement{
    static get styles(){
        return[styleCssn];
    }
    // ejercicio por modulo
    render(){
        return html`
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>SITS</title>
    </head>
    <body >
        <nav class="navbar bg-light fixed-top box-sombra" style="">

    <div class="perfil-menu">
        <div class="row row-user">
            <div class="col-sm-1">
                <img src="src/2.png" alt="" class="img-style-logo">
            </div>
            <div class="col-sm-11">
                <div class="nav text-left">
                    <label class="margin" id="username">Admin Admin</label>
                </div>
            </div>
        </div>
    </div>


    <button class="navbar-toggler text-white" type="button" style="background-color: white;
    color: white;
    margin: 12px;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon text-white" style="color: white;"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item option-menu">
                    <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                    <span class="text-list-font">Perfil</span>
                </li>
                <li class="nav-item option-menu">
                    <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                    <span class="text-list-font">Contactenos</span>
                </li>
                <li class="nav-item option-menu">
                    <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                    <span class="text-list-font">Salir</span>
                </li>
            </ul>

        </div>

</div>
</nav>
</body>
</html>


    
     `;

    }
}
customElements.define('my-dashboard',myDashboard);