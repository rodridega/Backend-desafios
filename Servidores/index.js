const express = require("express");
const cargarProductos = require("./utils/cargarProductos");
const getProductos = require("./utils/getProductos");
const app = express();

//Cargamos productos en el archivo products,txt
cargarProductos("./productos.txt");

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
