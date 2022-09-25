//select div where are link for languages
const langWrapEl = document.querySelector('.choose_language');

//select links inside this wrapper
const langLinksEl = document.querySelectorAll('.the_lang');

//select elements for translation
const catLinkEl = document.querySelector('[data-cat_link]');
const dogLinkEl = document.querySelector('[data-dog_link]');
const rabbitLinkEl = document.querySelector('[data-rabbit_link]');
const mainHeadingEl = document.querySelector('[data-main_heading]');

const bunnyHeadingEl = document.querySelector('[data-bunny_heading]');
const bunnyParagEl = document.querySelector('[data-bunny_parag]');

const grassHeadingEl = document.querySelector('[data-grass_heading]');
const grassParagEl = document.querySelector('[data-grass_parag]');

const nutritionHeadingEl = document.querySelector('[data-nutrition_heading]');
const nutritionParagEl = document.querySelector('[data-nutrition_parag]');

const galleryHeadingEl = document.querySelector('[data-gallery]');
const galleryCountEl = document.querySelector('[data-slide_count]');

const hygieneHeadingEl = document.querySelector('[data-hygiene_heading]');
const hygieneParagEl = document.querySelector('[data-hygiene_parag]');


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

        bunnyHeadingEl.textContent = languageStorage[givelangEl].bunnyHeading;
        bunnyParagEl.textContent = languageStorage[givelangEl].bunnyParag;

        grassHeadingEl.textContent = languageStorage[givelangEl].grassHeading;
        grassParagEl.textContent = languageStorage[givelangEl].grassParag;

        nutritionHeadingEl.textContent = languageStorage[givelangEl].nutritionHeading;
        nutritionParagEl.textContent = languageStorage[givelangEl].nutritionParag;

        galleryHeadingEl.textContent = languageStorage[givelangEl].galleryHeading;
        galleryCountEl.textContent = languageStorage[givelangEl].galleryCount;

        hygieneHeadingEl.textContent = languageStorage[givelangEl].hygieneHeading;
        hygieneParagEl.textContent = languageStorage[givelangEl].hygieneParag;


        footerEl.textContent = languageStorage[givelangEl].footer;
        footerLinkEl.textContent = languageStorage[givelangEl].footerLink;
    })
});