// انتخاب عناصر HTML
const chatInput = document.getElementById("chatInput");
const telegramIcon = document.getElementById("telegramIcon");
const output = document.getElementById("responseContainer");
const logoContainer = document.getElementById("logoContainer");

// رویداد کلیک برای آیکون ارسال
telegramIcon.addEventListener("click", () => {
  const inputText = chatInput.value.trim(); // دریافت متن از input و حذف فضاهای خالی

  if (inputText) {
    // حذف لوگو
    logoContainer.style.display = "none";

    // نمایش پاسخ (در اینجا به صورت مثال یک متن ثابت نمایش داده می‌شود)
    output.innerHTML = `<p>${inputText}</p>`;

    // نمایش پاسخ
    output.classList.remove("hidden");

    // پاک کردن input بعد از ارسال
    chatInput.value = "";
  }
});
