document.addEventListener("DOMContentLoaded", () => {
  // Retrieve studentID from URL (assumes URL is like preview.html?studentID=22103425)
  const urlParams = new URLSearchParams(window.location.search);
  const studentID = urlParams.get("studentID");
  if (!studentID) return;

  // Retrieve saved data from localStorage
  const storedData = localStorage.getItem(`coverPageData_${studentID}`);
  if (!storedData) return;

  const data = JSON.parse(storedData);

  // Destructure all values from the data object
  const {
    department,
    reportType,
    reportNo,
    title,

    courseName,
    courseCode,
    facultyName,
    designation,
    facultyDept,
    studentName,

    section,
    submissionDate,
  } = data;
  const reportTypeContent = document.getElementById("reportTypeContent");
  const titleContent = document.getElementById("titleContent");
  const courseNameContent = document.getElementById("courseNameContent");
  const courseCodeContent = document.getElementById("courseCodeContent");
  const facultyNameContent = document.getElementById("facultyNameContent");
  const facultyDesignationContent = document.getElementById(
    "facultyDesignationContent"
  );
  const facultyDepartmentContent = document.getElementById(
    "facultyDepartmentContent"
  );
  const studentNameContent = document.getElementById("studentNameContent");
  const studentIdContent = document.getElementById("studentIdContent");
  const studentSectionContent = document.getElementById(
    "studentSectionContent"
  );
  const dateOfSubmissionContent = document.getElementById(
    "dateOfSubmissionContent"
  );
 const date = new Date(submissionDate); // yyyy-mm-dd → JS Date

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
  if (reportType === "assignment") {
    reportTypeContent.textContent = "Assignment";
  } else {
    reportTypeContent.textContent = `Lab Report-${reportNo}`;
  }
  titleContent.textContent = title;
  courseNameContent.textContent = `Course Name: ${courseName}`;
  courseCodeContent.textContent = `Course Code: ${courseCode}`;
  facultyNameContent.textContent = facultyName;
  facultyDesignationContent.textContent = designation;
  facultyDepartmentContent.textContent = `Department of ${facultyDept}`;
  studentNameContent.textContent = studentName;
  studentIdContent.textContent = `ID: ${studentID}`;
  studentSectionContent.textContent = `Section: ${section}`;
  dateOfSubmissionContent.textContent = `${day}-${month}-${year}`;

  
  // Download PDF functionality
  const downloadPdf = document.getElementById("downloadPdf");
  downloadPdf.addEventListener("click", () => {
    console.table(
      facultyDept,
      reportType,
      reportNo,
      department,
      title,
      courseName,
      courseCode,
      facultyName,
      designation,
      studentName,
      studentID,
      section,
      submissionDate
    );
    const element = document.getElementById("coverPagePreview");

    const opt = {
      margin: 0,
      filename: "LabReport_HalfSize.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "px", format: [397, 561], orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  });
});
