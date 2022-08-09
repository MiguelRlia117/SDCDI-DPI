//Clases para el registro de cada apartado
class Client{
    constructor(nombre,lna,tel,email){
        this.nombre=nombre;
        this.lna=lna;
        this.tel=tel;
        this.email=email;
    }

}
//Clase para la interfaz de usuario
class UI{
    addClient(client){

        const clientlist=document.getElementById("clientlist");
        const elemento1=document.createElement('div');
        elemento1.innerHTML=`
            <div class="card text-left mb-4 style="padding-bottom:2rem;">
                <div class="card-body">
                    <div>
                        <strong style="color:red;">Nombre del cliente:</strong>
                        ${client.nombre}
                    </div>
                    <div>
                        <strong style="color:red;">RFC:</strong>
                        ${client.lna}
                    </div>
                    <div>
                        <strong style="color:red;">Telefono:</strong>
                        ${client.tel}
                    </div>
                    <div>
                        <strong style="color:red;">Email:</strong>
                        ${client.email}
                    </div>
                    <a href="" class="btn btn-danger" name="borrar" style="float:right;">Eliminar</a>
                </div>
            </div>
        `;
        clientlist.appendChild(elemento1);
    }

    resetClient(){
        document.getElementById("client-form").reset();
    }

    deleteClient(element){
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
        const client=document.querySelector("#client");
        container.insertBefore(div, client);

        //Mostar con temporiizador
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

//DOM events
document.getElementById("client-form").addEventListener("submit", function(e){
    
    const cname=document.getElementById("cna").value;
    const clna=document.getElementById("cap").value;
    const ctel=document.getElementById("cte").value;
    const cmail=document.getElementById("cce").value;

    const client= new Client(cname, clna, ctel, cmail); //creación de objeto tipo proveedor

    const ui1=new UI();
    ui1.addClient(client);
    ui1.resetClient();
    ui1.mostrarMensaje("Datos guardados correctamente","success");

    e.preventDefault();
})

document.getElementById("clientlist").addEventListener("click", function(e){
    const ui1=new UI();
    ui1.deleteClient(e.target);
    e.preventDefault();
});