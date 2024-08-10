<script>
  const toggleMobileMenu = document.getElementById('toggleMobileMenu');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  toggleMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
</script>