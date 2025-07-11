const works = () => {
  const worksList = document.querySelector('[data-js-finished-works]');
  if (!worksList) return;

  fetch('/assets/data/works.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Fehler beim Laden der Daten');
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((work) => {
        const listItem = document.createElement('li');
        listItem.classList.add('work-item');

        listItem.innerHTML = `
          <a href="${work.url}"><h3>${work.title}</h3></a>
          <p><strong>Autor:</strong> ${work.author}</p>
          <p><strong>Type:</strong> ${work.type}</p>
          <a href="${work.url}">
          <button class="simple-button">Zur Arbeit</button>
          </a>
          
        `;

        worksList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Fehler beim Laden der JSON:', error);
      worksList.innerHTML = `<li>Die Arbeiten konnten nicht geladen werden.</li>`;
    });
};

export { works };
