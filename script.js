function lol (){
    document.getElementById("title-text").innerHTML = "About Us";
    document.querySelector(".mobile-buttons").innerHTML = "<div id ='about-us-text'> <h1>Welcome to <span id = 'fancy-story'>Fireside!</span></h1><br>We are two college students attending NYU Stern, passionate about bridging the gap between tech professionals and college students. We designed Fireside to provide a space for tech & VC professionals to share their experiences, insights, and advice with the next generation of innovators. <br> <br> Our programming will include weekly remote meetings with analysts, partners, product managers, and professionals in every role, along with many opportunities for networking and in-person events. <br> <br> We want to make career and industry insight easy to access and utilize, no matter what background or connections you have. <br><br> Thank you for joining us on this journey. We look forward to sharing the stories and insights of tech professionals from around the world with you, and we hope that our platform can be a valuable resource as you pursue your own career in tech or venture capital.</div><a href='https://forms.zohopublic.com/fireside1/form/FiresideInterest/formperma/z2FXRwwPoQCdY7iT0HdSAQFBYsRIxNh1WFiwDWPl0MI' target='_blank'><button id='join' class='cool-button inner2' style = 'margin-top:4vh; padding: 1.5vh 12vh'> <span id='fancy-yours' style = 'font-weight: 600'>Apply Now</span></button></a>";
    document.getElementById("paragraph-text").style.visibility = "hidden";
    document.querySelector(".mobile-buttons").style.flexDirection = "column";
    document.querySelector(".mobile-buttons").style.justifyContent = "center";
    document.querySelector("#title-text").style.marginBottom = "0";
    document.querySelector(".mobile-buttons").style.alignItems = "center";
    document.getElementById("title-text").style.marginTop = "14vh";
}

function changestuff () {
    document.getElementById("title-text").innerHTML = "Application <span id = 'fancy-story' style = 'display: block'>Submitted!</span>";
    document.querySelector(".mobile-buttons").innerHTML = "";
}

function submitted () {
    document.getElementById("title-text").innerHTML = "Waiting...";
    setTimeout(changestuff, 2000)
}

