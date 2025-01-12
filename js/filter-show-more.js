const filterForm = document.querySelector('.form-container');

if (filterForm) {

    const filterFormTitleClose = document.querySelector('.filter-form-title-close');

    console.log(filterFormTitleClose);
    filterFormTitleClose.addEventListener('click', () => {
        document.querySelector('.filter-container').classList.add('filter-container-hidden');
    })

    const showMoreFilterBtn = document.querySelector('.filter-show-more__btn');
    // console.log(showMoreFilterBtn);

    // console.log(filterForm);
    const filterHiddenSections = filterForm.querySelectorAll('.filter-hidden');

    showMoreFilterBtn.addEventListener('click', (e) => {
        e.preventDefault();

        filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.remove('none'));
        showMoreFilterBtn.classList.add('none');
    })


// const filtersRangeOne = document.querySelectorAll('.filter-show-more__range');
// const filtersRangeTwo = document.querySelectorAll('.filters-range-two');

}