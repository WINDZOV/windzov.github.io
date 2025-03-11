function createCalendar(year) {
    const container = document.getElementById('calendar-container');
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Augosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dias = [
        'Lunes', 'Martes', "Miércoles", "Jueves", "Viernes", "Sábado", "Domíngo" ]
  
    months.forEach((month, index) => {
      const monthDiv = document.createElement('div');
      monthDiv.classList.add('month');
      
      const monthTitle = document.createElement('h3');
      monthTitle.textContent = month;
      monthDiv.appendChild(monthTitle);
  
      const daysDiv = document.createElement('div');
      daysDiv.classList.add('days');
      
  
      const firstDay = new Date(year, index, 1).getDay();
      const daysInMonth = new Date(year, index + 1, 0).getDate();
      
      // Пустые ячейки до первого дня месяца
      for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        daysDiv.appendChild(emptyDay);
      }
  
      // Дни месяца
      for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;
        daysDiv.appendChild(dayDiv);
      }
  
      monthDiv.appendChild(daysDiv);
      container.appendChild(monthDiv);
    });
  }
  
  // Создаем календарь для текущего года
  const currentYear = new Date().getFullYear();
  createCalendar(currentYear);