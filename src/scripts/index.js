const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.id == "encrypt") {
      encrypt();
    } else if (event.target.id == "decrypt") {
      decrypt();
    } else if (event.target.id == "copy-button") {
      copyText();
    } else {
      return;
    }
  });
});

function encrypt() {
  const textInput = document.getElementById("enter-field").value;

  if (textInput == "") {
    document.getElementById("out-container").classList.add("hidden");
    document.getElementById("no-out-container").classList.remove("hidden");
    return;
  }

  const textEncrypted = textEncrypter(textInput);
  document.getElementById("out-field").innerHTML = textEncrypted;
  document.getElementById("out-container").classList.remove("hidden");
  document.getElementById("no-out-container").classList.add("hidden");
}

function decrypt() {
  const textInput = document.getElementById("enter-field").value;

  if (textInput == "") {
    document.getElementById("out-container").classList.add("hidden");
    document.getElementById("no-out-container").classList.remove("hidden");
    return;
  }

  const textDecrypted = textDecrypter(textInput);
  document.getElementById("out-field").innerHTML = textDecrypted;
  document.getElementById("out-container").classList.remove("hidden");
  document.getElementById("no-out-container").classList.add("hidden");
}

function copyText() {
  const text = document.getElementById("out-field").innerText;

  if (text == "") {
    return;
  }

  if (!navigator.clipboard) {
    alert("Copiar não suportado pelo seu navegador");
    return;
  }

  navigator.clipboard.writeText(text);
}

function textEncrypter(text) {
  let textConverted = Array.from(text);

  textConverted = textConverted
    .map((caracter) => {
      if (caracter == "e") {
        return "est";
      } else if (caracter == "i") {
        return "into";
      } else if (caracter == "a") {
        return "auau";
      } else if (caracter == "o") {
        return "obey";
      } else if (caracter == "u") {
        return "uffo";
      } else {
        return caracter;
      }
    })
    .join("");

  return textConverted;
}

function textDecrypter(text) {
  let decryptedText = text;

  decryptedText = decryptedText.replace(/est/g, "e");
  decryptedText = decryptedText.replace(/into/g, "i");
  decryptedText = decryptedText.replace(/auau/g, "a");
  decryptedText = decryptedText.replace(/obey/g, "o");
  decryptedText = decryptedText.replace(/uffo/g, "u");

  return decryptedText;
}
