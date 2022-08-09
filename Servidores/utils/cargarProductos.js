const Contenedor = require("../../FileSystem/index");

const cargarProductos = async (path) => {
  const contenedor = new Contenedor(path);

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

module.exports = cargarProductos;
