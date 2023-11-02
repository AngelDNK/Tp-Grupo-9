const CANCION_1 = {nombre: "Na - Canserbero", album: "Vida", duracion: "6:22", reproducciones: 17135570};
const CANCION_2 = {nombre: "Salando las heridas - Los Redondos", album: "La Mosca y La Sopa", duracion: "5:02", reproducciones: 4063894};
const CANCION_3 = {nombre: "Caminando - Ciro y los persas", album: "27", duracion: "5:03", reproducciones: 11934304};
const CANCION_4 = {nombre: "Alma Dinamita, Freestyle, Fresco - Wos", album: "Live Set", duracion: "11:00", reproducciones: 34581113};
const CANCION_5 = {nombre: "Only God Can Judge Me - Tupac", album: "all eyes on me", duracion: "4:57", reproducciones: 24966867};
const CANCION_6 = {nombre: "I dont want to miss a thing - Aerosmith", album: "Armageddon", duracion: "4:52", reproducciones: 580794918};

const CANCIONES = [CANCION_1, CANCION_2, CANCION_3, CANCION_4, CANCION_5, CANCION_6];

localStorage.setItem("canciones", CANCIONES);
const cancionesLocalStorage = localStorage.getItem("canciones");
console.log(typeof(cancionesLocalStorage));