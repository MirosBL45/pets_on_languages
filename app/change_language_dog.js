//select div where are link for languages
const langWrapEl = document.querySelector('.choose_language');

//select links inside this wrapper
const langLinksEl = document.querySelectorAll('.the_lang');

//select elements for translation
const catLinkEl = document.querySelector('[data-cat_link]');
const dogLinkEl = document.querySelector('[data-dog_link]');
const rabbitLinkEl = document.querySelector('[data-rabbit_link]');
const mainHeadingEl = document.querySelector('[data-main_heading]');

const dogHeadingEl = document.querySelector('[data-dog_heading]');
const dogParagEl = document.querySelector('[data-dog_parag]');

const bdHeadingEl = document.querySelector('[data-bd_heading]');
const bdParagEl = document.querySelector('[data-bd_parag]');

const responsibilityHeadingEl = document.querySelector('[data-responsibility_heading]');
const responsibilityParagEl = document.querySelector('[data-responsibility_parag]');

const galleryHeadingEl = document.querySelector('[data-gallery]');
const galleryCountEl = document.querySelector('[data-slide_count]');

const healthHeadingEl = document.querySelector('[data-health_heading]');
const healthParagEl = document.querySelector('[data-health_parag]');


const footerEl = document.querySelector('[data-footer]');
const footerLinkEl = document.querySelector('[data-footer_link]');

langLinksEl.forEach(el => {
    el.addEventListener('click', () => {
        //change active language link
        let activeLink = langWrapEl.querySelector('.active_language');
        activeLink.classList.remove('active_language');
        el.classList.add('active_language');

        //change visible active link
        let chosenLang = el.querySelector('span').innerText;

        let visibleLangWrap = document.querySelector('.globe_wrapper');
        let toBeLang = visibleLangWrap.querySelector('span');

        toBeLang.innerText = chosenLang;

        //change text language inside elements
        const givelangEl = el.getAttribute('givelang');

        catLinkEl.textContent = languageStorage[givelangEl].catLink;
        dogLinkEl.textContent = languageStorage[givelangEl].dogLink;
        rabbitLinkEl.textContent = languageStorage[givelangEl].rabbitLink;
        mainHeadingEl.textContent = languageStorage[givelangEl].mainHeading;

        dogHeadingEl.textContent = languageStorage[givelangEl].dogHeading;
        dogParagEl.textContent = languageStorage[givelangEl].dogParag;

        bdHeadingEl.textContent = languageStorage[givelangEl].bdHeading;
        bdParagEl.textContent = languageStorage[givelangEl].bdParag;

        responsibilityHeadingEl.textContent = languageStorage[givelangEl].responsibilityHeading;
        responsibilityParagEl.textContent = languageStorage[givelangEl].responsibilityParag;

        galleryHeadingEl.textContent = languageStorage[givelangEl].galleryHeading;
        galleryCountEl.textContent = languageStorage[givelangEl].galleryCount;

        healthHeadingEl.textContent = languageStorage[givelangEl].healthHeading;
        healthParagEl.textContent = languageStorage[givelangEl].healthParag;


        footerEl.textContent = languageStorage[givelangEl].footer;
        footerLinkEl.textContent = languageStorage[givelangEl].footerLink;
    })
});