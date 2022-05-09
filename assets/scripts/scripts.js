
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}

function submitAdoptForm(event) {
    event.preventDefault();
    const fname = document.forms["adopt-form"]["fname"].value;
    const lname = document.forms["adopt-form"]["lname"].value;
    const mobile = document.forms["adopt-form"]["mobile"].value;
    const email = document.forms["adopt-form"]["email"].value;
    const address = document.forms["adopt-form"]["address"].value;

    alert('thanks ' + fname + ' ' + lname + ' for your help. we received your information and we will get back to you soon');
}
