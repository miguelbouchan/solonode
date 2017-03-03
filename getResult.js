fs = require('fs');
var datosGenerales = [];
fs.readFile('changes.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var arr = data.split("\n");
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        var arrsec = arr[i].split("|")
        arr[i] = arrsec[0].trim()
        if (arr[i].indexOf("handler") != -1) {
            newarr.push(arr[i]);
        }
    }
    
    var service = {};
    var sync = true;
    var valores=[];
    for (var i = 0; i < newarr.length; i++) {
        var sync = true;
        var cadena = newarr[i].replace(/handler.js/, "s-function.json")
        var direccion = newarr[i].replace(/handler.js/, "")
        console.log(cadena)
        fs.readFile(cadena, 'utf8', function (err, datajson) {
            var resultado = JSON.parse(datajson);
            service.name = resultado.name;
            service.dir = direccion;
            valores.push({name:resultado.name,dir:direccion})
            console.log(service)
            console.log("----------------------------")
             console.log(datosGenerales)
            datosGenerales.push(service);
            console.log(datosGenerales)
            console.log("----------------------------")
            sync = false;
        });
        while (sync) { require('deasync').sleep(100); }
        console.log(i)
    }
    console.log(valores)
    console.log("valores")
    writeFile(valores)
});



function writeFile(datosGenerales) {
    fs.readFile("deployservices.sh", 'utf8', function (err, datash) {
        if (err) {
            return console.log(err);
        }
        var secondfile = "";
        var arrsh = datash.split("\n");
        for (var j = 0; j < arrsh.length; j++) {
            if (arrsh[j].indexOf("declare -A") != -1) {
                arrsh[j] = "#declare -A"
                if (datosGenerales.length > 0) {
                    arrsh[j] = "declare -A ";
                }
                for (var k = 0; k < datosGenerales.length; k++) {
                    //arrsh[j] = arrsh[j].replace(new RegExp("\\)", 'gi'), datosGenerales[k].name + " )");
                    arrsh[j] = arrsh[j] + "servicio" + k + "=([nombre]='" + datosGenerales[k].name + "' [direccion]='" + datosGenerales[k].dir + "') ";
                }
            }
            secondfile = secondfile + arrsh[j] + "\n";
        }
        fs.writeFile("deployservices.sh", secondfile, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}