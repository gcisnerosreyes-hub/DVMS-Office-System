// Get form elements
const form = document.querySelector("form");

// Load existing students from localStorage or start empty
let students = JSON.parse(localStorage.getItem("students")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const grade = form.grade.value;
  const reason = form.reason.value;

  if (!name) return alert("Enter your name");

  const student = {
    id: Date.now(), // unique id
    name,
    grade,
    reason,
    checkInTime: Date.now(),
    status: "waiting"
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  form.reset();
  alert("✅ Checked in!");
});
