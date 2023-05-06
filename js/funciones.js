const guardarContacto = (db, contacto) => {
  db.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/";
};

const cargarContacto = (db, parentNode) => {
  let claves = Object.keys(db);
  for (clave of claves) {
    let contacto = JSON.parse(db.getItem(clave));
    crearContacto(parentNode, contacto, db);
    }
};
