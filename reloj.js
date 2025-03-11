export class Reloj {
  constructor(elementId) {
    this.elemento = document.getElementById('reloj');
    this.actualizarHora();
    this.intervalo = setInterval(() => this.actualizarHora(), 1000);
  }

  actualizarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    const horaActual = `🕒 ${horas}:${minutos}:${segundos}`;
    console.log(horaActual);
    if (this.elemento) {
      this.elemento.textContent = horaActual; 
    }
  }
}
