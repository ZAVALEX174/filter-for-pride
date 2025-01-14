const filterForm = document.querySelector('.form-container');

if (filterForm) {
    const filterFormTitleClose = document.querySelector('.filter-form-title-close');
    const filterShowContentList = document.querySelector('.filter__show-content-list');
    const showMoreFilterBtn = document.querySelector('.filter-show-more__btn');
    const hideFilterBtn = document.querySelector('.hide-filter__btn');
    const filterOverAutoBtn = document.querySelector('.filter-over-auto__btn');
    const filterScrollElem = document.querySelector('.filter-scroll');
    const filterHiddenSections = filterForm.querySelectorAll('.filter-hidden');
    const horizontalInputs = document.getElementById('form-container');
    const horLabels = horizontalInputs.querySelectorAll('.option__btn');

    if (filterFormTitleClose) {
        filterFormTitleClose.addEventListener('click', () => {
            document.querySelector('.filter-container').classList.add('filter-container-hidden');
        });
    }

    if (showMoreFilterBtn && hideFilterBtn && filterOverAutoBtn) {
        showMoreFilterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.remove('none'));
            showMoreFilterBtn.classList.add('none');
            hideFilterBtn.classList.remove('none');
            filterOverAutoBtn.classList.remove('none');
            filterScrollElem.classList.remove('filter-over-auto-scroll');
        });

        hideFilterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.add('none'));
            showMoreFilterBtn.classList.remove('none');
            hideFilterBtn.classList.add('none');
            filterOverAutoBtn.classList.add('none');
        });

        filterOverAutoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            filterScrollElem.classList.add('filter-over-auto-scroll');
            filterOverAutoBtn.classList.add('none');
        });
    }

    const createElement = (text) => {
        let newListItem = document.createElement('li');
        newListItem.textContent = text;
        newListItem.classList.add('filter__show-content-item');
        filterShowContentList.appendChild(newListItem);
        return newListItem;
    };

    if (horLabels) {
        horLabels.forEach(label => {
            const checks = label.querySelector('.checkbox-real');
            checks.checked = false;
            console.log(checks.checked);
            if (checks) {
                label.addEventListener('change', (e) => {
                    let val = label.querySelector('.option__radio-title');
                    if (val) {
                        if (checks.checked) {
                            createElement(val.innerHTML);
                        } else {
                            let items = filterShowContentList.querySelectorAll('.filter__show-content-item');
                            items.forEach(item => {
                                if (item.textContent === val.innerHTML) {
                                    item.remove();
                                }
                            });
                        }
                    }
                });
            }
        });
    }
}