document.getElementById("btn-submit").addEventListener("click", function () {
  // console.log('submit clicked')
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email);

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(password);

  if (email === "mail@mail.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    console.log("invalid user");
  }
});
