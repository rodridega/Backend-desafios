const { promises: fs } = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  async save(producto) {
    const AllProducts = await this.getAll();

    let newId;
    if (AllProducts.length === 0) {
      newId = 1;
    } else {
      const ultimoId = AllProducts[AllProducts.length - 1].id;
      newId = ultimoId + 1;
    }

    AllProducts.push({ id: newId, ...producto });

    try {
     await fs.writeFile(this.file, JSON.stringify(AllProducts, null, 2), (err) => {
        if (err) throw err;
      });
      return console.log(newId);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    const AllProducts = await this.getAll();
    const producto = AllProducts.find((producto) => producto.id === id);
    return producto;
  }

  async getAll() {
    try {
      const data = await fs.readFile(this.file, "utf-8");
      const dataParseada = JSON.parse(data);
      return dataParseada;
    } catch (error) {
      return [];
    }
  }

  async deleteById(id) {
    const productos = await this.getAll();

    const productosFiltrados = productos.filter((producto) => {
      return producto.id != id;
    });

    if (productosFiltrados.length == productos.length) {
      throw new Error("No se encontro el producto");
    }

    try {
      await fs.writeFile(
        this.file,
        JSON.stringify(productosFiltrados, null, 2)
      );
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteAll() {
    try {
      await fs.writeFile(this.file, "[]", "utf-8");
    } catch (error) {
      throw new Error(error);
    }
  }
}

const listaProductos = new Contenedor("./productos.txt");

// Llamada a la funciones
/* 
listaProductos.save({
  nombre: "Teclado",
  precio: 300,
  thumbnail: "https://picsum.photos/200/300",
});

listaProductos.save({
  nombre: "Mouse",
  precio: 200,
  thumbnail: "https://picsum.photos/200/300",
});
 */

module.exports = Contenedor
/* listaProductos.getById(2).then((producto) => console.log(producto));

listaProductos.getAll().then((productos) => console.log(productos)); */

/* listaProductos.deleteById(1).then(() => console.log("Producto eliminado"));
 */
