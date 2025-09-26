// preview.js

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
    reportType,
    reportNo,
    department,
    title,
    courseName,
    courseCode,
    facultyName,
    designation,
    studentName,
    studentID: studentIdFromData,
    section,
    program,
    submissionDate,
  } = data;

 

  // Download PDF functionality
  const downloadPdf = document.getElementById("downloadPdf");
  downloadPdf.addEventListener("click", () => {
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
