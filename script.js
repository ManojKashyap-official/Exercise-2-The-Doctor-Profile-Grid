const list = document.getElementById("doctor-list");

function buildCard(doc) {
  const card = document.createElement("article");
  card.className = "doctor-card";

  if (doc.focus) {
    card.style.setProperty("--focus", doc.focus);
  }

  card.innerHTML = `
    <figure class="photo">
      <img src="${doc.image}" alt="${doc.name}" width="480" height="576" loading="lazy" />
    </figure>
    <div class="info">
      <h2>${doc.name}</h2>
      <p class="specialty">${doc.specialty}</p>
      <a class="btn" href="${doc.href}">View Profile</a>
    </div>
  `;

  return card;
}

if (list) {
  const frag = document.createDocumentFragment();
  providers.forEach((doc) => frag.appendChild(buildCard(doc)));
  list.appendChild(frag);
}
