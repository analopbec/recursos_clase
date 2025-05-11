
const bombon = {
    pesoActual : 15,
    precio() {
      return 5
    },
    sabor() {
      return "frutilla"
    },
    peso() {
      return this.pesoActual
    },
    esLibreDeGluten() {
      return true
    },
    recibirMordisco() {
      this.pesoActual = (this.pesoActual * 0.8) -1
    }
  }

console.log(bombon.pesoActual);
console.log(`el peso del bombon es: ${bombon.peso()}`);
console.log('el precio del bombon es: ',bombon.precio());
console.log("sabor: ",bombon.sabor());



//en lista: 

const mariano = {
    golosinas:[],
    comprar(unaGolosina){
      this.golosinas.push(unaGolosina) // agrega la golosina a la lista
    },
    cantidadDeGolosinas(){ // largo de la lista (cantidad de golosinas)
      return this.golosinas.length
    },
    tieneLaGolosina(unaGolosina){ // busca si incluye una golosina especifica
      return this.golosinas.includes(unaGolosina)
    },
    probarGolosinas(){ // recorre la lista y le hace un morder a cada golosina
      this.golosinas.forEach( g => g.recibirMordisco() )
    },
    hayGolosinaSinTACC() { // recorre la lista y devuelve true si hay al menos una golosina sin TACC
      return this.golosinas.some( g=> g.esLibreDeGluten())
    },
    preciosCuidados() { // recorre la lista y devuelve true si todas las golosinas tienen un precio menor o igual a 10
      return this.golosinas.every( g=> g.precio()<= 10)
    },
    golosinaDeSabor(unSabor) { // busca una golosina de un sabor especifico y devuelve la primera que encuentra
      return this.golosinas.find( g=> g.sabor() == unSabor)
    },
    golosinasDeSabor(unSabor) { // busca todas las golosinas de un sabor especifico y devuelve un array con todas las que encuentra
      return this.golosinas.filter( g=> g.sabor() == unSabor)
    },
    sabores() { // devuelve un array con los sabores de todas las golosinas
      return new Set(this.golosinas.map( g=> g.sabor()))
    },
    pesoGolosinas() { //tre un array del peso de cada golosina y devuelve la suma de todos los pesos
      const pesos = this.golosinas.map( g => g.peso() )
      return pesos.reduce( (a,b) => a + b, 0 )
    },
    golosinaMasCara() { // busca la golosina mas cara y devuelve la primera que encuentra
      const precios = this.golosinas.map( g => g.precio() )
      return this.golosinas.find( g=> g.precio() == Math.max(...precios))
    }, 
    desechar(unaGolosina) { // busca una golosina en la lista y trae el indice. Luego elimina dicho indice
      const indice = this.golosinas.findIndex( g=> g==unaGolosina)
      this.golosinas.splice(indice,1)
    }
  }







const VALOR_COMUN = 10

class Tarea {
  constructor(codigo, duracion, tipoComplejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tipoComplejidad = tipoComplejidad;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
  }
  getCosto() {
    let costoBase = this.duracion * VALOR_COMUN;
    let extra = 0;

    switch (this.tipoComplejidad) {
      case "minima":
        extra = 0; // No agrega porcentaje extra
        break;
      case "media":
        extra = costoBase * 0.05; // Agrega un 5% extra
        break;
      case "maxima":
        if (this.duracion <= 10) {
          extra = costoBase * 0.07; // Agrega un 7% extra
        } else {
          const diasExtra = this.duracion - 10;
          extra = costoBase * 0.07 + diasExtra * 1000; // 7% más $1000 por cada día extra
        }
        break;
    }
    return costoBase + extra;
  }

}

class TareaCompuesta {
  constructor(codigo, duracion, tipoComplejidad, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.tipoComplejidad = new tipoComplejidad //"compuesta"; // Tipo de complejidad por defecto
  }

  getDuracion() {
    return this.tareas.reduce( // 
      // Utiliza reduce para sumar las duraciones de todas las tareas
      // La funcion reduce toma un acumulador (acum) y la tarea actual (tarea)
      // y devuelve la duracion total de la tarea compuesta
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
  getCosto() {
    let costoBase = this.tareas.reduce(
      (acum, tarea) => acum + tarea.getCosto(),
      this.duracion * VALOR_COMUN
    );

    // Agregar overhead si hay más de 3 subtareas directas
    if (this.tareas.length > 3) {
      costoBase += costoBase * 0.04; // 4% extra por overhead
    }

    return costoBase;
  }
  cantidadSubtareas() {
    return this.tareas.length;
  }
}




module.exports = { Tarea, TareaCompuesta };



if (condición) {
  // Código si la condición es verdadera
} else if (otraCondición) {
  // Código si la otra condición es verdadera
} else {
  // Código si ninguna condición es verdadera
}

let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


condición ? expresión_si_verdadero : expresión_si_falso;

return edad >= 18 ? true : false;

return (condicion || condicion) ? verdadero : falso
return (condicion && condicion) ? verdadero : falso