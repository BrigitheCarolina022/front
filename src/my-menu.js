import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';
export class myMenu extends LitElement{
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
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="col-sm-3">
    <div class="card box-sombra card-menu">
<ul style="padding-left: 1px;">
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Inicio</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Presidencia</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Vice Presidencia</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Secretaria</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Tesoreria</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Revisoria Fiscal</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Lista afiliados</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Lista de Jugadores</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Lista de Coach's</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Lista Material</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Lista Asistencia</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Cronograma</span>
</a>
</li>
<li class="option-menu">
<a class="link-buttom">
<img src="src/3.png" alt="" class="img-list-link">
<span class="text-list-font">Varios</span>
</a>
</li>
</ul>
</div>
</div>


    </body>
</html>


    
     `;

    }
}
customElements.define('my-menu',myMenu);