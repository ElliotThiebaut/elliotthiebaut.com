let expendedText = false;
let arrow = document.querySelector("#small_arrow");
let divTextAbout = document.querySelector("#textAbout");
let textAboutExtended = "Mais je ne vis pas que du travail. <br><br> Je vis par mes différentes passions, l'espace, l'innovation, la science et la technologie.En apprendre toujours plus sur ces domaines me fascine, tandis que je m'efforce de transmettre mes connaissances à ces sujets. <br><br>Le sport fait également parti de mes occupations quotidiennes.Que ce soit l'escalade, la natation ou les sports d'équipe, je ne rate jamais une occasion de me dépenser.<br><br>Je suis également fait de valeurs: le partage, l'écoute, le respect pour les autres et la nature, la transmission de génération en générations… Toutes ces valeurs font de moi qui je suis et me pousse à devenir celui que je souhaite."
let textAbout = "Passionné, créatif, inventif... <br><br>Depuis deux ans, j'étudie dans le domaine du digitale le développement web, l'UX/UI, le web marketing et la communication, l'animation 3D, le motion design, le design graphique et la production vidéo. J'ai ainsi acquis des compétences techniques comme la programmation dans différents langages (HTML/CSS/JS, PHP, SQL...), ou l'utilisation de logiciels créatifs (suite Adobe, Blender…) ou encore la capacité d'établir des stratégies digitales pertinentes et innovantes. <br><br> Toutes ces connaissances, dont je suis fier ont été acquises en partie de façon autodidacte, au fil de mes nouvelles passions. Je suis passionné et investis dans tous mes projets, grâce auquels je continue d'apprendre au quotidien. <br><br> Mon expérience en tant qu'expatrié dans différents pays pendant 6 ans m'a permis de devenir bilingue en anglais, tout en me conférant une capacité d'adaptation. Je suis toujours prêt à relever un challenge, et à m'investir auprès de causes qui me sont chères afin que mon travail ait un impact."


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