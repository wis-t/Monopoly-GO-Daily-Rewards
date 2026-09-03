/*
=================================================
DESTINATION
ضع هنا الرابط الذي تريد فتحه بعد اختيار المكافأة
=================================================
*/

const DESTINATION_URL = "https://example.com/";


const modal = document.getElementById("modal");
const rewardButton = document.getElementById("rewardButton");

const closeModal = document.getElementById("closeModal");

const progressBar = document.getElementById("progressBar");
const progressNumber = document.getElementById("progressNumber");

const modalText = document.getElementById("modalText");

const continueButton =
  document.getElementById("continueButton");

const selectedReward =
  document.getElementById("selectedReward");



/*
====================================
UPDATE SELECTED REWARD
====================================
*/

function updateSelectedReward() {

  const selected =
    document.querySelector(
      'input[type="radio"]:checked'
    );

  if (selected) {

    selectedReward.textContent =
      selected.value;

  }

}


document
  .querySelectorAll('input[type="radio"]')
  .forEach((input) => {

    input.addEventListener(
      "change",
      updateSelectedReward
    );

  });



/*
====================================
TABS
====================================
*/

document
  .querySelectorAll(".tab")
  .forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".tab")
          .forEach((item) => {

            item.classList.remove("active");

          });

        tab.classList.add("active");

        const target =
          document.getElementById(
            tab.dataset.tab
          );

        if (target) {

          target.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }

      }
    );

  });



/*
====================================
OPEN MODAL
====================================
*/

rewardButton.addEventListener(
  "click",
  () => {

    modal.classList.add("show");

    progressBar.style.width = "0%";

    progressNumber.textContent = "0%";

    continueButton.style.display = "none";

    modalText.textContent =
      "Preparing your selected reward...";

    startProgress();

  }
);



/*
====================================
PROGRESS ANIMATION
====================================
*/

function startProgress() {

  let progress = 0;

  const timer =
    setInterval(
      () => {

        progress += 5;

        if (progress >= 100) {

          progress = 100;

          clearInterval(timer);

          finishProgress();

        }

        progressBar.style.width =
          progress + "%";

        progressNumber.textContent =
          progress + "%";

      },
      90
    );

}



/*
====================================
FINISH
====================================
*/

function finishProgress() {

  modalText.textContent =
    "Your selection is ready. Continue to the next step.";

  continueButton.style.display =
    "block";

}



/*
====================================
CONTINUE
====================================
*/

continueButton.addEventListener(
  "click",
  () => {

    if (
      !DESTINATION_URL ||
      DESTINATION_URL ===
      "https://example.com/"
    ) {

      alert(
        "Please configure DESTINATION_URL in script.js."
      );

      return;

    }

    window.location.href =
      DESTINATION_URL;

  }
);



/*
====================================
CLOSE
====================================
*/

closeModal.addEventListener(
  "click",
  () => {

    modal.classList.remove("show");

  }
);


modal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === modal
    ) {

      modal.classList.remove(
        "show"
      );

    }

  }
);



/*
====================================
ONLINE COUNTER
Visual effect only
====================================
*/

const onlineNumber =
  document.getElementById(
    "onlineNumber"
  );


setInterval(
  () => {

    const base = 24853;

    const random =
      Math.floor(
        Math.random() * 120
      );

    onlineNumber.textContent =
      (
        base + random
      ).toLocaleString();

  },
  5000
);
