document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const destinationInput = event.target.querySelector('input[type="text"]').value.toLowerCase();
    const startDate = event.target.querySelectorAll('input[type="date"]')[0].value;
    const endDate = event.target.querySelectorAll('input[type="date"]')[1].value;
    const travelers = event.target.querySelector('input[type="number"]').value;
  
    const resultsList = document.querySelector('.results-list');
    resultsList.innerHTML = '';
  
    const destinationPaths = {
        paris: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/paris/',
        newyork: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/newyork/',
        tokyo: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/tokyo/',
        dubai: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/dubia/',
        istanbul: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/Istanbul/',
        roma: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/roma/',
        barcelone: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/Barcelone/',
        londres: 'C:/Users/LENOVO/Desktop/agnece voyage/hotel/Londresé/'
    };
  
    const path = destinationPaths[destinationInput];
  
    if (!path) {
      alert('Destination non trouvée.');
      return;
    }
    
  
    for (let i = 1; i <= 8; i++) {
      const result = document.createElement('div');
      result.className = 'result-item';
      result.innerHTML = `
        <img src="${path}${i}.jpg" alt="Hôtel ${i}" class="hotel-image" />
        <h3>${destinationInput.charAt(0).toUpperCase() + destinationInput.slice(1)} - Hôtel ${i}</h3>
        <p>Dates: ${startDate} - ${endDate}</p>
        <p>Voyageurs: ${travelers}</p>
        <p>Prix: ${(Math.random() * 0.005 + 0.001).toFixed(6)} &pi;
 / nuit</p>
        <button>Réserver maintenant</button>
      `;
      resultsList.appendChild(result);
    }
  });
  