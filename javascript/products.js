//Clases para el registro de cada apartado
class Producto{
    constructor(nombre,linea,max,min,clas,pven){
        this.nombre=nombre;
        this.linea=linea;
        this.max=max;
        this.min=min;
        this.clas=clas;
        this.pven=pven;
    }

}
//Clase para la interfaz de usuario
class UI{
    addProduct(product){

        const productlist=document.getElementById("productlist");
        const elemento3=document.createElement('div');
        elemento3.innerHTML=`
            <div class="card text-left mb-4 style="padding-bottom:2rem;">
                <div class="card-body">
                    <div>
                        <strong style="color:red;">Nombre del cliente:</strong>
                        ${product.nombre}
                    </div>
                    <div>
                        <strong style="color:red;">Descripción:</strong>
                        ${product.linea}
                    </div>
                    <div>
                        <strong style="color:red;">Maximos:</strong>
                        ${product.max}
                    </div>
                    <a href="" class="btn btn-danger" name="borrar" style="float:right;">Eliminar</a>
                </div>
            </div>
        `;
        productlist.appendChild(elemento3);
    }

    resetProduct(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
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
        const client=document.querySelector("#product");
        container.insertBefore(div, product);

        //Mostar con temporiizador
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

//DOM events
document.getElementById("product-form").addEventListener("submit", function(e){
    
    const pnp=document.getElementById("pnp").value;
    const plp=document.getElementById("plp").value;
    const mxp=document.getElementById("mxp").value;
    const plc=document.getElementById("pcl").value;
    const crep=document.getElementById("crep").value;
    const ppv=document.getElementById("ppv").value;

    const product= new Producto(pnp, plp, mxp, plc, crep, ppv); //creación de objeto tipo proveedor

    const ui2=new UI();
    ui2.addProduct(product);
    ui2.resetProduct();
    ui2.mostrarMensaje("Datos guardados correctamente","success");

    e.preventDefault();
})

document.getElementById("productlist").addEventListener("click", function(e){
    const ui2=new UI();
    ui2.deleteProduct(e.target);
    e.preventDefault();
});