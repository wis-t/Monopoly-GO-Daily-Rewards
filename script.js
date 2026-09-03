document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  const selectedRewardText = document.getElementById("selectedReward");
  const rewardButton = document.getElementById("rewardButton");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const progressBar = document.getElementById("progressBar");
  const progressNumber = document.getElementById("progressNumber");
  const continueButton = document.getElementById("continueButton");
  const modalText = document.getElementById("modalText");
  const onlineNumber = document.getElementById("onlineNumber");
  const locker = document.getElementById("locker");

  // Smooth Tab Scrolling
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // Update Selections Summary
  function updateSelectionSummary() {
    const selectedInputs = Array.from(radioInputs).filter((input) => input.checked);
    const selectedValues = selectedInputs.map((input) => input.value);
    if (selectedValues.length > 0) {
      selectedRewardText.textContent = selectedValues.join(" + ");
    }
    radioInputs.forEach((input) => {
      const parentLabel = input.closest(".choice");
      if (parentLabel) {
        if (input.checked) {
          parentLabel.classList.add("selected");
        } else {
          parentLabel.classList.remove("selected");
        }
      }
    });
  }

  radioInputs.forEach((input) => input.addEventListener("change", updateSelectionSummary));
  updateSelectionSummary();

  // Show Loading Modal
  rewardButton.addEventListener("click", () => {
    modal.classList.add("show");
    progressBar.style.width = "0%";
    progressNumber.textContent = "0%";
    continueButton.style.display = "none";
    modalText.textContent = "Preparing your selected reward...";

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        modalText.textContent = "Your reward package is ready!";
        continueButton.style.display = "block";
      }
      progressBar.style.width = `${currentProgress}%`;
      progressNumber.textContent = `${currentProgress}%`;
    }, 70);
  });

  // Show Locker on Continue Click
  continueButton.addEventListener("click", () => {
    modal.classList.remove("show");
    if (locker) {
      locker.style.display = "block";
      locker.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  closeModal.addEventListener("click", () => modal.classList.remove("show"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });

  // Online Counter Animation
  setInterval(() => {
    const baseCount = 24853;
    const variance = Math.floor(Math.random() * 80) - 40;
    onlineNumber.textContent = (baseCount + variance).toLocaleString();
  }, 4000);
});
