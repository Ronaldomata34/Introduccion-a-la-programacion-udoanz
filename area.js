
alert("Introduce las dimensiones de las figuras: ")

// Ortoedro
var alturaOrtoedro = parseInt(prompt("Introduce el valor de la altura del Ortoedro: "))
var longitudOrtoedro = parseInt(prompt("Introduce el valor de la longitud del Ortoedro: "))
var profundidadOrtoedro = parseInt(prompt("Introduce el valor de la profundidad del Ortoedro: "))

//Piramide recta
var alturaPiramide = parseInt(prompt("Introduce el valor de la altura de la piramide: "))
var longitudPiramide = parseInt(prompt("Introduce el valor de la longitud de la base de la piramide: "))

// Cilindro
var radioBase = parseInt(prompt("Introduce el valor del radio del cilindro: "))
var alturaCilindro = parseInt(prompt("Introduce el valor de la altura del Cilindro: "))

// Areas
var arearectangulo = longitudOrtoedro * profundidadOrtoedro
var areaBasePiramide = Math.pow(longitudPiramide, 2)
var areaBaseCilindro = Math.PI * Math.pow(radioBase, 2)

// Volumenes
var volumenOrtoedro = arearectangulo * alturaOrtoedro
var volumenPiramide = areaBasePiramide * alturaPiramide / 3
var volumenCilindro = areaBaseCilindro * alturaCilindro

var sumaDeVolumenes = volumenCilindro + volumenPiramide + volumenOrtoedro
var sumaDeAreas = arearectangulo + areaBaseCilindro + areaBasePiramide

alert("Area de la base del cilindro es: " + areaBaseCilindro + " unidades" +
	" Area de la base del ortoedro es: " + arearectangulo + " unidades" +
	" Area de la base de la piramide es: " + areaBasePiramide + " unidades")

alert("Volumen del ortoedro es: " + volumenOrtoedro + " unidades " +
	"Volumen de la piramide es: " + volumenPiramide + " unidades " +
	"Volumen del cilidro es: " + volumenCilindro + " unidades")

alert("Suma de volumenes es: " + sumaDeVolumenes + " unidades " +
	"Suma de areas es: " + sumaDeAreas + " unidades")

// función que dirá que area y volumen es mayor: 
function cualVolumenEsMayor(volumenOrtoedro, volumenCilindro, volumenPiramide) {
	if ((volumenPiramide>volumenCilindro) && (volumenPiramide>volumenOrtoedro)) {
		return alert("El volumen de la piramide es mayor, con: " + volumenPiramide + " unidades")
	} 
	else if ((volumenOrtoedro>volumenCilindro) && (volumenOrtoedro>volumenPiramide)) {
		return alert("El volumen del Ortoedro es mayor, con: " + volumenOrtoedro + " unidades")
	} 
	else {
		return alert("El volumen del Cilindro es mayor, con: " + volumenCilindro + " unidades")
	}
}

function cualAreaEsMayor(arearectangulo, areaBaseCilindro, areaBasePiramide) {
	if ((areaBasePiramide>areaBaseCilindro) && (areaBasePiramide>arearectangulo)) {
		return alert("El area de la base de la piramide es mayor, con: " + areaBasePiramide + " unidades")
	} 
	else if ((arearectangulo>areaBaseCilindro) && (arearectangulo>areaBasePiramide)) {
		return alert("El area de la base del Ortoedro es mayor, con: " + arearectangulo + " unidades")
	} 
	else {
		return alert("El area de la base del Cilindro es mayor, con: " + areaBaseCilindro + " unidades")
	}
}

cualVolumenEsMayor(volumenOrtoedro, volumenCilindro, volumenPiramide)
cualAreaEsMayor(arearectangulo, areaBaseCilindro, areaBasePiramide)


