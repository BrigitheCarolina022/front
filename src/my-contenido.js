import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';
export class myContenido extends LitElement{
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
    <br>
    <br>
    <div class="col-sm-9">
    <div class="card card-padding box-sombra">
        <div class="container-fluid text-center">
            <div class="message">
                <h5>BIENVENID@ AL SISTEMA INTEGRADO DE PUMAS</h5>
                <h1>PUMAS TIC</h1>
            </div>

        </div>
    </div>
</div>

    </body>
</html>


    
     `;

    }
}
customElements.define('my-contenido',myContenido);