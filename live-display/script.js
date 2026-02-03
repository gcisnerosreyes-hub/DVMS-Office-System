const studentList = document.getElementById("studentList");

// Load students from localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStudents() {
  studentList.innerHTML = "";

  const now = Date.now();

  students.forEach(student => {
    // Calculate minutes waiting
    const minutes = Math.floor((now - student.checkInTime) / 60000);

    let color = "green";
    if (minutes > 20) color = "red";
    else if (minutes > 10) color = "yellow";

    const tr = document.createElement("tr");
    tr.style.backgroundColor = color;

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td>${student.reason}</td>
      <td>${minutes} min</td>
    `;
    studentList.appendChild(tr);
  });
}

// Refresh every 10 seconds
setInterval(renderStudents, 10000);
renderStudents();
