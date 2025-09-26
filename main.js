document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get all input values and assign to variables
    const department = document.getElementById("department").value;
    const reportType = document.getElementById("reportType").value;
    const reportNo = document.getElementById("reportNoInput")?.value || "";
    const title = document.getElementById("title").value;
    const courseName = document.getElementById("courseName").value;
    const courseCode = document.getElementById("courseCode").value;
    const facultyName = document.getElementById("facultyName").value;
    const designation = document.getElementById("designation").value;
    const studentName = document.getElementById("studentName").value;
    const studentID = document.getElementById("studentID").value; // get value here!
    const section = document.getElementById("section").value;
    const serial = document.getElementById("serial").value;
    const program = document.getElementById("program").value;
    const submissionDate = document.getElementById("submissionDate").value;

    // Put variables into formData object
    const formData = {
      department,
      reportType,
      reportNo,
      title,
      courseName,
      courseCode,
      facultyName,
      designation,
      studentName,
      studentID,
      section,
      serial,
      program,
      submissionDate,
    };

    // Save to localStorage using studentID as key
    localStorage.setItem(
      `coverPageData_${studentID}`,
      JSON.stringify(formData)
    );

    // Show data in console
    console.table(formData);

    window.location.href = `/preview.html?studentID=${studentID}`;
  });
});
