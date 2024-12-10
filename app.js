document.getElementById('infoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Formni yuborishni bloklash

    // Inputlardan qiymatlarni olish
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;

    // Yangi karta yaratish
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${fname} ${lname}</h3>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Country:</strong> ${country}</p>
    `;

    // Karta konteyneriga qo'shish
    document.getElementById('cardsContainer').appendChild(card);

    // Formni tozalash
    document.getElementById('infoForm').reset();
  });