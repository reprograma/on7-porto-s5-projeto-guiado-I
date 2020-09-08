// 3. Liste uma lista de mercado

const listaDeMercado = ['maçã', 'banana', 'chamyto', 'nutella', 'coca-cola', 'bisnaguinha', 'rap10']

function listaMercado(lista){
    for (item of lista) {
        console.log(item)
    }
}
listaMercado(listaDeMercado)

const listaMap = listaDeMercado.map(function (itemMercado){
    return itemMercado
})
console.log('Lista com Map',listaMap)

const listaMapArrow = listaDeMercado.map(itemMercado => itemMercado)
console.log('Lista com Map Arrow',listaMapArrow)

