const listaSuper = document.getElementById('lista_super');
const input=document.getElementById('input_lista');
const botonAgregar = document.getElementById('boton_agregar');


botonAgregar.addEventListener('click', onClickAdd);

input.addEventListener('input', onTypeList);

function onClickAdd() {
    const li = createListItem(input.value);
    listaSuper.appendChild(li);
    input.value = '';
    botonAgregar.disabled = true;

}

function onTypeList() {
    botonAgregar.disabled = input.value.legth ===0;
}

function guardar() {
    Swal.fire({
      position: "center",
      icon: "success", 
      title: "Producto Agregado Con Éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  }

function createListItem(name) {
    const listItem = document.createElement('li');
    const heading = document.createElement('span');
    heading.textContent = name;
    const botonEliminar = document.createElement('button');

    listItem.classList.add('lista_item');
    botonEliminar.textContent = 'X';
    botonEliminar.id = 'boton_eliminar';
    botonEliminar.addEventListener('click', onClickDelete);

    listItem.appendChild(heading);
    listItem.appendChild(botonEliminar);
    console.log(listItem)
    return listItem;
    
}

function onClickDelete(){
    this.parentNode.remove();
}