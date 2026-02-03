const staffList = document.getElementById("staffStudentList");

let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStaff() {
  staffList.innerHTML = "";

  students.forEach(student => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td>${student.reason}</td>
      <td>${student.status}</td>
      <td>
        <button onclick="markSeen(${student.id})">Seen</button>
        <button onclick="queueStudent(${student.id})">Queue</button>
        <button onclick="removeStudent(${student.id})">Remove</button>
      </td>
    `;
    staffList.appendChild(tr);
  });
}

function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
  renderStaff();
}

// Button functions
function markSeen(id) {
  students = students.map(s => s.id === id ? {...s, status: "seen"} : s);
  saveStudents();
}

function queueStudent(id) {
  students = students.map(s => s.id === id ? {...s, status: "queued"} : s);
  saveStudents();
}

function removeStudent(id) {
  students = students.filter(s => s.id !== id);
  saveStudents();
}

renderStaff();
