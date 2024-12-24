/* Onclick Response */

document.getElementById("DirectMeta").onclick = function() {
    window.location.href = "#swiper-slider"; //Provide a Redirection File Path
  };

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config parameter
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//Event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
//Auto run slider
let refreshInterval = setInterval(() =>{
    next.click();
}, 6000)
function showSlider(){
    // Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //Active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

}

//Click thumbnail
thumbnails.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    })
})

/* Download Reconnaissance & Enumeration PDF */

document.getElementById('Recon').addEventListener('click', function() {
  // Specify the URL of the PDF file
  const pdfUrl = 'assets/Task 2.pdf';

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

/* Download Brute Force PDF */

document.getElementById('BruteF').addEventListener('click', function() {
  // Specify the URL of the PDF file
  const pdfUrl = 'assets/Task 5.pdf';

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

/* Download DNS & Sub-Domain PDF */

document.getElementById('SubD').addEventListener('click', function() {
  // Specify the URL of the PDF file
  const pdfUrl = 'assets/Task 4.pdf';

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

/* Download Clickjacking PDF */

document.getElementById('ClickJ').addEventListener('click', function() {
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
