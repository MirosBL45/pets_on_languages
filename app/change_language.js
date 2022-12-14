//select div where are link for languages
const langWrapEl = document.querySelector('.choose_language');

//select links inside this wrapper
const langLinksEl = document.querySelectorAll('.the_lang');

//select elements for translation
const catLinkEl = document.querySelector('[data-cat_link]');
const dogLinkEl = document.querySelector('[data-dog_link]');
const rabbitLinkEl = document.querySelector('[data-rabbit_link]');
const mainHeadingEl = document.querySelector('[data-main_heading]');
const chooseHeadingEl = document.querySelector('[data-choose_heading]');
const chooseParagEl = document.querySelector('[data-choose_parag]');
const bpHeadingEl = document.querySelector('[data-bp_heading]');
const bpParagEl = document.querySelector('[data-bp_parag]');
const bhHeadingEl = document.querySelector('[data-bh_heading]');
const bhParagEl = document.querySelector('[data-bh_parag]');
const tcHeadingEl = document.querySelector('[data-tc_heading]');
const tcParagEl = document.querySelector('[data-tc_parag]');
const ayHeadingEl = document.querySelector('[data-ay_heading]');
const ayParagEl = document.querySelector('[data-ay_parag]');
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
        chooseHeadingEl.textContent = languageStorage[givelangEl].chooseHeading;
        chooseParagEl.textContent = languageStorage[givelangEl].chooseParag;
        bpHeadingEl.textContent = languageStorage[givelangEl].bpHeading;
        bpParagEl.textContent = languageStorage[givelangEl].bpParag;
        bhHeadingEl.textContent = languageStorage[givelangEl].bhHeading;
        bhParagEl.textContent = languageStorage[givelangEl].bhParag;
        tcHeadingEl.textContent = languageStorage[givelangEl].tcHeading;
        tcParagEl.textContent = languageStorage[givelangEl].tcParag;
        ayHeadingEl.textContent = languageStorage[givelangEl].ayHeading;
        ayParagEl.textContent = languageStorage[givelangEl].ayParag;
        footerEl.textContent = languageStorage[givelangEl].footer;
        footerLinkEl.textContent = languageStorage[givelangEl].footerLink;
    })
});