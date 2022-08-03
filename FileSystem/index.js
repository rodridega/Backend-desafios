const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  async save(producto) {
    const AllProducts = await this.getAll();

    console.log(AllProducts);

    let newId;
    if (AllProducts.length === 0) {
      newId = 1;
    } else {
      const ultimoId = AllProducts[AllProducts.length - 1].id;
      newId = ultimoId + 1;
    }

    AllProducts.push({ id: newId, ...producto });

    try {
      await fs.writeFile(
        this.file,
        JSON.stringify(AllProducts, null, 2),
        (err) => {
          if (err) throw err;
        }
      );
      return newId;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      const data = await fs.readFile(this.file, "utf-8");
      const dataParse = JSON.parse(data);
      return dataParse;
    } catch (error) {
      throw new Error(error);
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
        JSON.stringify(productosFiltrados, null, 2),
        (err) => {
          if (err) throw err;
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

const listaProductos = new Contenedor("./productos.txt");

listaProductos.save({
  title: "Laptop",
  price: 1000,
  thumbnail: "https://via.placeholder.com/150",
});
