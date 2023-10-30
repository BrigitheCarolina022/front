import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';
export class MyElement extends LitElement{
    static get styles(){
        return[styleCssn];
    }
    // ejercicio por modulo
    render(){
        return html`
        <html>
        <head>
        <meta charset="UTF-8" />
        <title>SITS</title>
        </head>        
        <body>
        <div class="body">
        <center>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                    <div class="card">
                        <div class="card-header bg-danger-1 ">
                            <div class="text-center">
                                <h3>
                                    <b>PUMAS DC.</b>
                                </h3>
                            </div>
                        </div>
                            <div class="text center card-body">
                                <br>
        
                                <form >
                                <div class="input-group ">
                                    <input type="text" class="form-control" name="username" placeholder="Usuario" required="Por favor ingrese su usuario">
                                </div>
                                <br>
                                
                                <div class="input-group ">
                                    <input type="password" class="form-control" name="password" placeholder="Password" required="Por favor ingrese su password" >
                                </div>
                                <br>
                                <br>
                                <br>
                                    <div class="text-center">
+                                        <button type="submit" class="btn-danger-1" >Ingresar</button> 
                                    </div>
                                    <br>  
                                    <div class="text-center">
                                        <a class="olvido-con"><b>Olvido su contraseña?</b></a>
                                    </div>  
                                    <br>                                                                            
                                </form>
                            </div>
                    </div>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>
            </center>
            </div>
        </body>
        
        </html>
        `;

    }
}
customElements.define('my-element',MyElement);