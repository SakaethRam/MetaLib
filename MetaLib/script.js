/* Download Cybersecurity PDF */

document.getElementById('Cyber').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 1.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 1.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});

/* Download Recon PDF */

document.getElementById('Recon').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 2.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 2.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});


/* Download Recon Tools PDF */

document.getElementById('Recon-tools').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 3.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 3.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});

/* Download Burp Suite PDF */

document.getElementById('BSuite').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 4.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 4.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});

/* Download Brute Force PDF */

document.getElementById('BruteF').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 5.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 5.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});

/* Download TERMUX PDF */

document.getElementById('Termux').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 6.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 6.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});

/* Download Burp Suite PDF */

document.getElementById('spf').addEventListener('click', function() {
    // Specify the URL of the PDF file
    const pdfUrl = 'assets/Task 7.pdf';

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'assets/Task 7.pdf';  // File name for the download

    // Programmatically trigger the download by clicking the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element after the download starts
    document.body.removeChild(link);
});


window.addEventListener('load', function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.8s ease';

        // Hide splash screen after fade-out
        setTimeout(function() {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    }, 3000); // Display splash screen for 3 seconds
});
