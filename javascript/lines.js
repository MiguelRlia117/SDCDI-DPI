//Clases para el registro de cada apartado
class Line{
    constructor(nombre,des){
        this.nombre=nombre;
        this.des=des;
    }

}
//Clase para la interfaz de usuario
class UI{
    addLine(line){

        const linelist=document.getElementById("linelist");
        const elemento2=document.createElement('div');
        elemento2.innerHTML=`
            <div class="card text-left mb-4 style="padding-bottom:2rem;">
                <div class="card-body">
                    <div>
                        <strong style="color:red;">Nombre del cliente:</strong>
                        ${line.nombre}
                    </div>
                    <div>
                        <strong style="color:red;">Descripción:</strong>
                        ${line.des}
                    </div>
                    <a href="" class="btn btn-danger" name="borrar" style="float:right;">Eliminar</a>
                </div>
            </div>
        `;
        linelist.appendChild(elemento2);
    }

    resetLine(){
        document.getElementById("line-form").reset();
    }

    deleteLine(element){
        if(element.name=='borrar'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    mostrarMensaje(message, cssC){
        const div=document.createElement("div");
        div.className=`alert alert-${cssC} mt-4`;
        div.appendChild(document.createTextNode(message));
        //Mostrar en pantalla
        const container= document.querySelector(".container");
        const client=document.querySelector("#line");
        container.insertBefore(div, line);

        //Mostar con temporiizador
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

//DOM events
document.getElementById("line-form").addEventListener("submit", function(e){
    
    const lna=document.getElementById("lna").value;
    const lde=document.getElementById("lde").value;

    const line= new Line(lna,lde); //creación de objeto tipo proveedor

    const ui1=new UI();
    ui1.addLine(line);
    ui1.resetLine();
    ui1.mostrarMensaje("Datos guardados correctamente","success");

    e.preventDefault();
})

document.getElementById("linelist").addEventListener("click", function(e){
    const ui1=new UI();
    ui1.deleteLine(e.target);
    e.preventDefault();
});