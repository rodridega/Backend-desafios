const express = require("express");
const app = express();

const Contenedor = require("../FileSystem/index");


//Funcion para cargar 3 productos
const cargarProductos = async () => {
  const contenedor = new Contenedor("./productos.txt")

  await contenedor.save({
    nombre: "Teclado",
    precio: 300,
    thumbnail: "https://picsum.photos/200/300",
  });
  await contenedor.save({
    nombre: "Mouse",
    precio: 40,
    thumbnail: "https://picsum.photos/200/300",
  });
  await contenedor.save({
    nombre: "Parlante",
    precio: 4000,
    thumbnail: "https://picsum.photos/200/300",
  });
};
 
//Cargamos productos en el archivo products,txt
cargarProductos();
 
//Funcion para traer productos
const getProductos = async () => {
  const contenedor = new Contenedor("./productos.txt");

  let productos = await contenedor.getAll();

  return productos;
};

//GET con todos los productos usando el Contenedor
app.get("/productos", async (req, res) => {
  try {
    const AllProducts = await getProductos("./productos.txt");
    res.send(AllProducts);
  } catch (error) {
    throw new error(error);
  }
});

//GET con un producto random usando el id como referencia
app.get("/productoRandom", async (req, res) => {
  try {
    const AllProducts = await getProductos("./productos.txt");
    const idProducts = AllProducts.map((producto) => producto.id);
    const idRandom = Math.floor(Math.random() * idProducts.length);

    res.send(AllProducts[idRandom]);

    console.log(idRandom);
  } catch (error) {
    throw new error(error);
  }
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto ${PORT} `);
});
