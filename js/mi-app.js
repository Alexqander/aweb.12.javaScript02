var i,j;



var ctrlFilas = document.createElement("input");
ctrlFilas.setAttribute("type","number");
ctrlFilas.setAttribute("id","ctrl-filas");

var ctrlColumnas = document.createElement("input");
ctrlColumnas.setAttribute("type","number");
ctrlColumnas.setAttribute("id","ctrl-col");


var btn = document.createElement("button");
btn.textContent="dibujar tabla";
btn.setAttribute("type","button");
btn.setAttribute("onclick","dibujarTabla()");

var br =document.createElement("br");
var br1 =document.createElement("br");
var br2 =document.createElement("br");
var br3 =document.createElement("br");


document.body.appendChild(ctrlFilas);
document.body.appendChild(br2);
document.body.appendChild(br);
document.body.appendChild(ctrlColumnas);

document.body.appendChild(br1);
document.body.appendChild(br3);

document.body.appendChild(btn);


function dibujarTabla(){

    var ctrlfilas = document.getElementById("ctrl-filas");
    var filas =ctrlfilas.value;

    var ctrlcolu = document.getElementById("ctrl-filas");
    var columnas =ctrlcolu.value;

    var res =filas*columnas; 

    console.log(filas);

    document.write("<table border>");

    for(i=0; i <filas; i++){

        document.write("<tr>");


        for(j=0; j<columnas; j++){

            document.write("<td>");
            document.write(res);
            res --;
            document.write("</td>");
        }
        document.write("</tr>");
    }

    document.write("</table>");

}
















