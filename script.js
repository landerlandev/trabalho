function toggleAnswer(id) {
      var answer = document.getElementById(id);
      answer.classList.toggle("show");
    }

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(function (radio) {
  radio.addEventListener('change', function () {
    console.log('Selecionado: ' + this.value);
  });
});

const customSelect = document.querySelector('.custom-select select');
const selectArrow = document.querySelector('.select-arrow');

customSelect.addEventListener('change', function () {
  console.log('Selecionado: ' + this.value);
});

selectArrow.addEventListener('click', function () {
  customSelect.focus();
});

const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}

window.onload = function() {
  var marcarDesmarcarTodos = document.getElementById('marcarDesmarcarTodos');
  var checkboxes = document.getElementsByClassName('opcao');

  marcarDesmarcarTodos.addEventListener('change', function() {
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = marcarDesmarcarTodos.checked;
    }
  });

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
      var todosMarcados = true;
      var algumMarcado = false;
      for (var j = 0; j < checkboxes.length; j++) {
        if (!checkboxes[j].checked) {
          todosMarcados = false;
        } else {
          algumMarcado = true;
        }
      }
      if (todosMarcados) {
        marcarDesmarcarTodos.checked = true;
      } else if (algumMarcado) {
        marcarDesmarcarTodos.checked = false;
      }
    });
  }
};
