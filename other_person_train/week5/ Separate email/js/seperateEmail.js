function checkEmail() {
  const searchCharacter = "@";
  const emailAddress = document.getElementById("emailAddress").value;

  const findCharacter = emailAddress.indexOf(searchCharacter);
  let finalMessage = " ";

  if (findCharacter == -1) {
    finalMessage = "Your email address should have '@' .";
    document.getElementById("message").classList.add("red");
    document.getElementById("message").classList.remove("green");
  } else {
    const splitEmail = emailAddress.split(searchCharacter);
    finalMessage = `Your name is: ${splitEmail[0]}`;
    document.getElementById("message").classList.add("green");
    document.getElementById("message").classList.remove("red");
  }

  document.getElementById("emailAddress").value = " ";
  document.getElementById("message").innerText = finalMessage;
}
