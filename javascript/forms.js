//Clases para el registro de cada apartado
class Provider{
    constructor(nombre,rfc,rep,tel,email,comm){
        this.nombre=nombre;
        this.rfc=rfc;
        this.rep=rep;
        this.tel=tel;
        this.email=email;
        this.comm=comm;
    }

}

class client{
    constructor(nombre,lna,tel,email){
        this.nombre=nombre;
        this.lna=lna;
        this.tel=tel;
        this.email=email;
    }

}
//Clase para la interfaz de usuario
class UI{
    addProvider(provider){

        const providerlist=document.getElementById("providerlist");
        const elemento=document.createElement('div');
        elemento.innerHTML=`
            <div class="card text-left mb-4 style="padding-bottom:2rem;">
                <div class="card-body">
                    <div>
                        <strong style="color:red;">Nombre del proveedor:</strong>
                        ${provider.nombre}
                    </div>
                    <div>
                        <strong style="color:red;">RFC:</strong>
                        ${provider.rfc}
                    </div>
                    <div>
                        <strong style="color:red;">Representante:</strong>
                        ${provider.rep}
                    </div>
                    <div>
                        <strong style="color:red;">Telefono:</strong>
                        ${provider.tel}
                    </div>
                    <div>
                        <strong style="color:red;">Email:</strong>
                        ${provider.email}
                    </div>
                    <div>
                        <strong style="color:red;">Comentario:</strong>
                        ${provider.comm}
                    </div>
                    <a href="" class="btn btn-danger" name="borrar" style="float:right;">Eliminar</a>
                </div>
            </div>
        `;
        providerlist.appendChild(elemento);
    }

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

    resetProvider(){
        document.getElementById("provider-form").reset();
    }

    deleteProvider(element){
        if(element.name=='borrar'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    resetClient(){
        document.getElementById("clientform").reset();
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
        const reg=document.querySelector("#reg");
        container.insertBefore(div, reg);

        //Mostar con temporiizador
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

//DOM events

document.getElementById("provider-form").addEventListener("submit", function(e){
    
    const pname=document.getElementById("nameprov").value;
    const prfc=document.getElementById("rfcprov").value;
    const repprop=document.getElementById("nrep").value;
    const ptel=document.getElementById("telpro").value;
    const pmail=document.getElementById("crep").value;
    const pcom=document.getElementById("com").value;

    const provider= new Provider(pname, prfc, repprop, ptel, pmail, pcom); //creación de objeto tipo proveedor

    const ui=new UI();
    ui.addProvider(provider);
    ui.resetProvider();
    ui.mostrarMensaje("Datos guardados correctamente","success");

    e.preventDefault();
})

document.getElementById("providerlist").addEventListener("click", function(e){
    const ui1=new UI();
    ui1.deleteProvider(e.target);
    e.preventDefault();
});


document.getElementById("clientform").addEventListener("submit", function(e){
    
    const cname=document.getElementById("cna").value;
    const clna=document.getElementById("cap").value;
    const ctel=document.getElementById("cte").value;
    const cmail=document.getElementById("cce").value;

    const client= new client(cname, clna, ctel, cmail); //creación de objeto tipo proveedor

    const ui1=new UI();
    ui1.addClient(client);
    ui1.resetClient();
    ui1.mostrarMensaje("Datos guardados correctamente","success");

    e.preventDefault();
})

document.getElementById("clientlist").addEventListener("click", function(e){
    const ui1=new UI();
    ui1.deleteProvider(e.target);
    e.preventDefault();
});