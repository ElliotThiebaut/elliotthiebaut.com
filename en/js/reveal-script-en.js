let expendedText = false;
let arrow = document.querySelector("#small_arrow");
let divTextAbout = document.querySelector("#textAbout");
let textAboutExtended = "But I don't just live off work. <br><br> I live by my different passions, space, innovation, science and technology. Learning more and more about these fields fascinates me as I strive to pass on my knowledge about these subjects. <br><br>Sport is also part of my daily routine. Whether it's climbing, swimming or team sports, I never miss an opportunity to exercise. <br><br>I am also made up of values: sharing, listening, respect for others, caring for nature, passing on knowledge... All these values make me who I am and push me to become the person I want to be."
let textAbout = "Passionate, creative, inventive... <br><br>For the past two years, I've been studying in the digital area web development, UX/UI, web marketing, communication, 3D animation, motion design, graphic design and video production. I have thus acquired technical skills such as programming in different languages (HTML/CSS/JS/PHP/SQL...), the use of creative software (Adobe suite, Blender...) and the ability to establish relevant and innovative digital strategies.  <br><br>All this knowledge, of which I am proud, has been partly acquired in a self-taught way, through my new passions. I am passionate and invested in all my projects, thanks to which I continue to learn on a daily basis.  <br><br> My experience as an expatriate in different countries for 6 years has allowed me to become bilingual in English, while giving me the ability to adapt. I am always ready to take up a challenge and get involved in causes that are dear to my heart so that my work has an impact."


function seeMore() {
    if (expendedText == false) {
        divTextAbout.classList.remove("uk-animation-slide-bottom-medium");
        divTextAbout.classList.add("uk-animation-slide-top-medium");
        divTextAbout.innerHTML = textAboutExtended;
        expendedText = true;
        arrow.style.transform = 'rotate(180deg)';
    } else {
        divTextAbout.classList.remove("uk-animation-slide-top-medium");
        divTextAbout.classList.add("uk-animation-slide-bottom-medium");
        divTextAbout.innerHTML = textAbout;
        expendedText = false;
        arrow.style.transform = 'rotate(0deg)';
    }
}