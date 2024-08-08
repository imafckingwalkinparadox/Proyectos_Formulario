let root = document.querySelector("#root");


let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

//Lista de textos 
let formularios = [
    {nombre:"Login", link:"componentes/login/login.html"},
    {nombre:"De Contacto", link:"componentes/DeContacto/DeContacto.html"},
    {nombre:"De Registro", link:"componentes/DeRegistro/DeRegistro.html"},
    {nombre:"De Búsqueda", link:"componentes/DeBusqueda/DeBusqueda.html"},
    {nombre:"De Pedido Compras", link:"componentes/DePedidoCompras/DePedidoCompras.html"},
    {nombre:"De Comentarios Reseñas", link:"componentes/DeComentariosReseña/DeComentariosReseña.html"},
];


formularios.forEach(itemLista=>{


    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;


    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);