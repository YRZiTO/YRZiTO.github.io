// Function to check if the device is mobile
// Function to check if the device is mobile
function isMobileDevice() {
    // Check if the device matches a mobile media query
    return window.matchMedia("only screen and (max-width: 768px)").matches;
}

// Function to update resume link based on device type
function updateResumeLink() {
    var resumeLink = document.getElementById('resumeLink');
    if (isMobileDevice()) {
        // For mobile devices, set the link to open the PDF directly
        resumeLink.href = "https://raw.githubusercontent.com/YRZiTO/YRZiTO.github.io/main/resume/resume.pdf";
        resumeLink.target = "_blank"; // Open in new tab
    } else {
        // For other devices, set the link to go to the resume.html page
        resumeLink.href = "resume.html";
        resumeLink.target = "_self"; // Open in the same tab
    }
}

// Call the function when the page loads
window.onload = updateResumeLink;
