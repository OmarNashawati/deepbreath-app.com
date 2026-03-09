const email_form = document.getElementById("email_form");
const email_input = document.getElementById("email_input");

email_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = email_input.value;

  if (!email || email === "") {
    console.log("please enter an email");
    return;
  }

  try {
    await axios.post("/website/submitEmail", { email });
    email_input.value = "";
  } catch (error) {
    console.log(error);
  }
});
