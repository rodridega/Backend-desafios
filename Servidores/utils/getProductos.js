const Contenedor = require("../../FileSystem/index");

const getProductos = async (path) => {
  const contenedor = new Contenedor(path);

  let productos = await contenedor.getAll();

  console.log(productos);
  return productos;
};

module.exports = getProductos;
