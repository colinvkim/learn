---
title: "Forms and input handling"
description: "Learn how to read input values, validate data, handle submissions, and build interactive form experiences without page reloads."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Forms are the primary way users send data to your application. JavaScript intercepts submissions, validates input, and provides immediate feedback.

## Reading input values

The `value` property reads the current value of form controls:

```html
<input type="text" id="username" />
<input type="email" id="email" />
```

```javascript
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");

const username = usernameInput.value;
const email = emailInput.value;
```

### Other input types

```javascript
// Checkbox — boolean
const checkbox = document.querySelector("#agree");
checkbox.checked;  // true or false

// Select — selected option value
const select = document.querySelector("#role");
select.value;  // value of the selected option

// Radio buttons — the checked one
const selected = document.querySelector('input[name="plan"]:checked');
selected ? selected.value : null;

// Textarea — same as input
const textarea = document.querySelector("#bio");
textarea.value;
```

## Handling form submission

Listen for the `submit` event and prevent the default page reload:

```html
<form id="signup">
  <input type="text" name="username" required />
  <input type="email" name="email" required />
  <button type="submit">Sign Up</button>
</form>
```

```javascript
const form = document.querySelector("#signup");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log(data);
  // { username: "Ada", email: "ada@example.com" }

  // Send data to the server
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Submission failed");

    console.log("Account created");
  } catch (error) {
    console.error("Error:", error.message);
  }
});
```

`FormData` collects all named inputs from the form. `Object.fromEntries()` converts the entries into a plain object.

<Tip title="Use the form element in FormData">
  <p><code>new FormData(form)</code> reads all inputs with <code>name</code> attributes inside the form. Inputs without <code>name</code> attributes are not included. Always include <code>name</code> on form inputs you want to submit.</p>
</Tip>

## Real-time validation

Listen for `input` or `change` events to validate as the user types:

```javascript
const emailInput = document.querySelector("#email");
const errorEl = document.querySelector("#email-error");

emailInput.addEventListener("input", () => {
  const value = emailInput.value;

  if (value && !value.includes("@")) {
    emailInput.classList.add("invalid");
    errorEl.textContent = "Please enter a valid email";
  } else {
    emailInput.classList.remove("invalid");
    errorEl.textContent = "";
  }
});
```

Use `input` for immediate feedback (fires on every keystroke). Use `change` for validation when the user finishes editing (fires on blur).

## Debouncing input validation

Validating on every keystroke can be wasteful for expensive checks (e.g., checking username availability against a server). Debounce the validation:

```javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const validateUsername = debounce(async (value) => {
  const response = await fetch(`/api/check-username?name=${value}`);
  const { available } = await response.json();
  errorEl.textContent = available ? "" : "Username is taken";
}, 300);

usernameInput.addEventListener("input", (event) => {
  validateUsername(event.target.value);
});
```

The validation only runs 300ms after the user stops typing.

## Disabling the submit button

Prevent multiple submissions by disabling the button:

```javascript
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  try {
    await fetch("/api/signup", { method: "POST", body: JSON.stringify(data) });
    console.log("Done");
  } catch (error) {
    console.error(error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Sign Up";
  }
});
```

## Form accessibility

Forms should be accessible by default when using proper HTML. JavaScript should not break accessibility:

- use `<label for="input-id">` to associate labels with inputs
- use `aria-describedby` to link error messages to inputs
- do not remove focus outlines unless replacing them with a visible alternative

## What to carry forward

- read input values with the `.value` property
- `FormData(form)` collects all named inputs from a form
- `Object.fromEntries(formData.entries())` converts form data to a plain object
- prevent form submission with `event.preventDefault()`
- use `input` events for real-time validation, `change` for on-blur validation
- debounce expensive validation checks like server-side username availability
- disable the submit button during async submission to prevent duplicates
- use proper HTML labels and ARIA attributes for form accessibility

Forms connect user input to application logic. Combined with fetch, events, and DOM manipulation, they enable complete interactive features. The next unit covers error handling and debugging — the skills that keep working code working.
