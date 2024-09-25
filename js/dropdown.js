//فانکش مربوط به تغییر زبان در صفحه اصلی

// انتخاب عناصر

const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

// افزودن رویداد کلیک به toggle
dropdownToggle.addEventListener("click", (event) => {
  event.preventDefault(); // جلوگیری از حرکت به لینک
  dropdownMenu.classList.toggle("hidden"); // نمایش یا پنهان کردن منو
});

// بستن منو در صورت کلیک خارج از آن
window.addEventListener("click", (event) => {
  if (
    !dropdownToggle.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden"); // پنهان کردن منو
  }
});
