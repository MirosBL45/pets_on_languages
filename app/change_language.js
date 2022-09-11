//select div where are link for languages
const langWrapEl = document.querySelector('.choose_language');

//select links inside this wrapper
const langLinksEl = document.querySelectorAll('.the_lang');

//select elements for translation
const catLinkEl = document.querySelector('[data-cat_link]');
const dogLinkEl = document.querySelector('[data-dog_link]');
const rabbitLinkEl = document.querySelector('[data-rabbit_link]');

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
    })
});