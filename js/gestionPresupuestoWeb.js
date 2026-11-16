function mostrarDatoEnId (idElemento, valor) {
    document.getElementById(idElemento).textContent = valor;
}

function mostrarGastoWeb (idElemento, gasto) {
    let listaEtiquetasHTML = "";
    
    for (let eti of gasto.etiquetas){
        listaEtiquetasHTML += `<span class="gasto-etiquetas-etiqueta">
        ${eti}
        </span>`;
    }
    
    document.getElementById(idElemento).innerHTML = `<div class="gasto">
  <div class="gasto-descripcion">${gasto.descripcion}</div>
  <div class="gasto-fecha">${gasto.fecha.toLocaleString()}</div> 
  <div class="gasto-valor">${gasto.valor}</div> 
  <div class="gasto-etiquetas">
    ${listaEtiquetasHTML}
    <!-- Etcétera -->
  </div> 
</div>`
}

function mostrarGastosAgrupadosWeb (idElemento, agrup, periodo) {

}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
}