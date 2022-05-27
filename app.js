let roberto, pedro, cofla;
let nRoberto, nPedro, nCofla;
nRoberto = "Roberto";
nPedro = "Pedro";
nCofla = "Cofla";

//Precio de los helados
let palitoHeladoA = 600;
let palitoHeladoC = 1000;
let heladoHeladix = 1600;
let heladoHeladovich = 1700;
let heladoHelardo = 1800;
let heladoConfites = 2900;
let poteCuartoKg = 2900;

roberto = prompt("Ingrese su dinero roberto: ");
pedro = prompt("Ingrese su dinero pedro: ");
cofla = prompt("Ingrese su dinero cofla: ");

function venderHelado(cliente, nCliente) {
    if(cliente >= poteCuartoKg){
        alert(`${nCliente} compro un pote 1/4 por ${poteCuartoKg}`);
    }else if(cliente >= heladoConfites){
        alert(`${nCliente} compro un helado confites por ${heladoConfites}`);
    }else if(cliente >= heladoHelardo){
        alert(`${nCliente} compro un helado helardo por ${heladoHelardo}`);
    }else if(cliente >= heladoHeladovich){
        alert(`${nCliente} compro un helado heladovich por ${heladoHeladovich}`);
    }else if(cliente >= heladoHeladix){
        alert(`${nCliente} compro un helado heladix por ${heladoHeladix}`);
    }else if(cliente >= palitoHeladoC){
        alert(`${nCliente} compro un palito crema por ${palitoHeladoC}`);
    }else if(cliente >= palitoHeladoA){
        alert(`${nCliente} compro un palito agua por ${palitoHeladoA}`);
    }else{
        alert(`no cuenta con el dinero suficiente`);
    }
}
venderHelado(roberto, nRoberto);
venderHelado(pedro, nPedro);
venderHelado(cofla, nCofla);