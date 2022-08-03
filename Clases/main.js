class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }
  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const usuario = new Usuario(
  "Rodrigo",
  "Deganutti",
  [
    { nombre: "Habitos Atomicos", autor: "James Clear" },
    { nombre: "El nombre del viento", autor: "Carlos Ruiz Zafon" },
    { nombre: "El fantasma de Canterville", autor: "Edgar Allan Poe" },
  ],
  ["Fredy", "Ramses"]
);

/* Muestra el nombre y apelido completos */
console.log(usuario.getFullName());

/* Agrega una mascota al array de mascotas  */
usuario.addMascota("Manu");

/* Muestra el numero de mascotas */
console.log(usuario.countMascotas());

/* Agrega un libro al array de libros */
usuario.addBook("El señor de los anillos", "J.R.R. Tolkien");

/* Muestra los nombres de los libros */
console.log(usuario.getBookNames());
