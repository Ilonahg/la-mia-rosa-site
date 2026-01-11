/* ================= ANNOUNCEMENT BAR ================= */

document.addEventListener('DOMContentLoaded', () => {
  const announcements = document.querySelectorAll('.announcement-text');
  if (!announcements.length) return;

  let current = 0;

  setInterval(() => {
    announcements[current].classList.remove('active');
    current = (current + 1) % announcements.length;
    announcements[current].classList.add('active');
  }, 4000);
});
async function loadAnnouncement() {
  const res = await fetch('partials/announcement.html');
  const html = await res.text();
  document.body.insertAdjacentHTML('afterbegin', html);
}

loadAnnouncement();
