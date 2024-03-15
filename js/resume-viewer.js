// URL of the PDF file
var pdfUrl = 'https://raw.githubusercontent.com/YRZiTO/YRZiTO.github.io/main/resume/resume.pdf';

// Function to check if the device is mobile
function isMobileDevice() {
    // Check if the device matches a mobile media query
    return window.matchMedia("only screen and (max-width: 768px)").matches;
}

// Import PDF.js modules
import { PDFViewer } from 'src/pdfjs-4.0.379-dist/build/pdf.mjs';
import { PDFWorker } from 'src/pdfjs-4.0.379-dist/build/pdf.worker.mjs';

// Function to initialize PDF viewer
function initializePDFViewer() {
    if (!isMobileDevice()) {
        var container = document.getElementById('pdfContainer');
        var viewer = new PDFViewer({ container });
        viewer.load(pdfUrl);
    }
}

// Call the function when the page loads
window.onload = initializePDFViewer;
