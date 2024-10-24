// Fungsi Custom Cursor dan Trail
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  const trail = document.createElement('div');

  trail.classList.add('trail');
  trail.style.left = `${e.pageX - 5}px`;
  trail.style.top = `${e.pageY - 5}px`;

  document.body.appendChild(trail);
  cursor.style.left = `${e.pageX - 5}px`;
  cursor.style.top = `${e.pageY - 5}px`;

  setTimeout(() => {
    trail.remove();
  }, 300);
});

// Buka Modal Edit Profil
function openEditForm() {
  document.getElementById('edit-modal').style.display = 'flex';
}

// Tutup Modal Edit Profil
function closeEditForm() {
  document.getElementById('edit-modal').style.display = 'none';
}

// Tangani Formulir Edit Profil
document.getElementById('edit-profile-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('edit-name').value;
  const role = document.getElementById('edit-role').value;
  const email = document.getElementById('edit-email').value;
  const phone = document.getElementById('edit-phone').value;

  document.getElementById('profile-name').textContent = name;
  document.getElementById('profile-role').textContent = role;
  document.getElementById('profile-email').textContent = email;
  document.getElementById('profile-phone').textContent = phone;

  closeEditForm();
});
