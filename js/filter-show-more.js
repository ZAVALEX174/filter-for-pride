const filterForm = document.querySelector('.form-container');

if (filterForm) {

    const filterFormTitleClose = document.querySelector('.filter-form-title-close');

    console.log(filterFormTitleClose);
    filterFormTitleClose.addEventListener('click', () => {
        document.querySelector('.filter-container').classList.add('filter-container-hidden');
    })

    const showMoreFilterBtn = document.querySelector('.filter-show-more__btn');
    const hideFilterBtn = document.querySelector('.hide-filter__btn');
    const filterOverAutoBtn = document.querySelector('.filter-over-auto__btn');
    console.log(hideFilterBtn);

    // console.log(filterForm);
    const filterHiddenSections = filterForm.querySelectorAll('.filter-hidden');

    showMoreFilterBtn.addEventListener('click', (e) => {
        e.preventDefault();

        filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.remove('none'));
        showMoreFilterBtn.classList.add('none');

        hideFilterBtn.classList.remove('none');
        filterOverAutoBtn.classList.remove('none');
        filterScrollElem.classList.remove('filter-over-auto-scroll');

    })

    hideFilterBtn.addEventListener('click', (e) => {
        e.preventDefault();

        filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.add('none'));

        showMoreFilterBtn.classList.remove('none');
        hideFilterBtn.classList.add('none');
        filterOverAutoBtn.classList.add('none');
    })


    const filterScrollElem = document.querySelector('.filter-scroll');
    console.log(filterOverAutoBtn, filterScrollElem);

    filterOverAutoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        filterScrollElem.classList.add('filter-over-auto-scroll');
        filterOverAutoBtn.classList.add('none');
    })

// const filtersRangeOne = document.querySelectorAll('.filter-show-more__range');
// const filtersRangeTwo = document.querySelectorAll('.filters-range-two');

}