{
    "nombre": "Diego Jasso",
    "edad": "24",
    "nacionalidad": "Mexicana"
}

var json = '{"nombre": "Diego":, "edad":"}24:, "nacionalidad": "mexicana"}'
var obj = JSON.parse(json);console.log(obj.nombre);obj.nombre = "pedro"
console.log(ojb.nombre);

var json = '{"nombre": "Roberto","edad:51","nacionalidad":"colombiana","hobies":["natacion","musica","bailar"]}';

var obj = JSON.parse(json);
console.log(obj.hobies[0]);
obj.hobies[0] = "peliculas";
console.log(obj.hobies[0]);