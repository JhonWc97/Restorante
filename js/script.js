const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const imagenes = document.querySelectorAll("img");
const btnTodos = document.querySelector(".todos");
const btnEsaladas = document.querySelector(".ensaladas");
const btnPastas = document.querySelector(".pastas");
const btnPizzas = document.querySelector(".pizzas");
const btnPostres = document.querySelector(".postres");
const contenedorPlatillos = document.querySelector(".platillos");

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  platillos();
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imagen = entry.target;
      imagen.src = imagen.dataset.src;
      observer.unobserve(imagen);
    }
  });
});

// console.log(imagenes);
imagenes.forEach((imagen) => {
  observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
  boton.addEventListener("click", () => {
    navegacion.classList.add("ocultar");
    overlay.remove();
    boton.remove();
  });

  overlay.onclick = function () {
    overlay.remove();
    navegacion.classList.add("ocultar");
    boton.remove();
  };
};

const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");

  const body = document.querySelector("body");
  body.appendChild(overlay);
  //if (document.querySelectorAll(".pantalla-completa").length > 0) return;

  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");

  //console.log(navegacion.children);
  //while (navegacion.children[5]) {
  //  navegacion.removeChild(navegacion.children[5]);
  //}

  //if (document.querySelectorAll("").length > 0) return;

  navegacion.appendChild(btnCerrar);
  cerrarMenu(btnCerrar, overlay);
  console.log(btnCerrar);
};

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  //console.log(navegacion);
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

const platillos = () => {
  let platillosArreglo = [];
  const platillos = document.querySelectorAll(".platillo");

  platillos.forEach(
    (platillo) => (platillosArreglo = [...platillosArreglo, platillo])
  );

  const ensaladas = platillosArreglo.filter(
    (ensalada) => ensalada.getAttribute("data-platillo") === "ensalada"
  );

  const pastas = platillosArreglo.filter(
    (pasta) => pasta.getAttribute("data-platillo") === "pasta"
  );

  const pizzas = platillosArreglo.filter(
    (pizza) => pizza.getAttribute("data-platillo") === "pizza"
  );

  const postres = platillosArreglo.filter(
    (postre) => postre.getAttribute("data-platillo") === "postre"
  );

  mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillos);

  /*
  console.log(ensaladas);
  console.log(pastas);
  console.log(pizzas);
  console.log(postres);
  */
};

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => {
  btnEsaladas.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    ensaladas.forEach((ensalada) => contenedorPlatillos.appendChild(ensalada));
  });

  btnPastas.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    pastas.forEach((pasta) => contenedorPlatillos.appendChild(pasta));
  });

  btnPizzas.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    pizzas.forEach((pizza) => contenedorPlatillos.appendChild(pizza));
  });

  btnPostres.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    postres.forEach((postre) => contenedorPlatillos.appendChild(postre));
  });

  btnTodos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    todos.forEach((todo) => contenedorPlatillos.appendChild(todo));
  });
};

const limpiarHtml = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};

// trabajo con funciones
/*
document.addEventListener("DOMContentLoaded", () => {
  sumar2();
});

sumar();
//function declaration
function sumar() {
  console.log("function declaration", 2 + 2);
}

//arrow function o funcion de expresion
const sumar2 = () => {
  console.log("arrow function", 3 + 3);
};

// se debe declarar antes del llamado
sumar2();
*/
