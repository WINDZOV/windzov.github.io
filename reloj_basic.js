export class Reloj {
  constructor() {
    this.actualizarHora();// mostramos la hora inmediatamente 
    setInterval(() => this.actualizarHora(), 1000); // 1000 milisegundos== a 1 segundo. setInterval utiliza milisegundo y por eso hay que indicar en la misma manera. 
  }

  actualizarHora() {
    const now = new Date();
    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    console.log(`🕒 Ahora es: ${horas}:${minutos}:${segundos}`);
  }
} 