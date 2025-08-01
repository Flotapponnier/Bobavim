export function initializeBackToMenuButton() {
  const menuButton = document.getElementById(
    window.UI_SELECTORS.BACK_MENU_BUTTON.replace("#", ""),
  );
  if (!menuButton) return;

  menuButton.addEventListener("click", async function () {
    menuButton.disabled = true;
    try {
      // Call quit game endpoint before navigating away
      await fetch(window.API_ENDPOINTS.QUIT_GAME, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      window.location.href = "/";
    } catch (error) {
      logger.error("Error going back to menu:", error);
      // Still navigate to menu even if quit call fails
      window.location.href = "/";
    }
  });

  menuButton.addEventListener("mouseenter", function () {
    menuButton.textContent = "🧋";
  });

  menuButton.addEventListener("mouseleave", function () {
    menuButton.textContent = "Menu";
  });
}