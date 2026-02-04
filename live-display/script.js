// Daily reset (clears students each day)
const today = new Date().toDateString();
const lastDay = localStorage.getItem("lastDay");

if (lastDay !== today) {
  localStorage.removeItem("students");
  localStorage.setItem("lastDay", today);
}

// Load existing students
let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const grade = document.getElementById("grade").value;
  const reason = document.getElementById("reason").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  const student = {
    id: Date.now(),
    name,
    grade,
    reason,
    checkInTime: Date.now(),
    status: "waiting"
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  form.reset();
  alert("✅ You are checked in!");
});
