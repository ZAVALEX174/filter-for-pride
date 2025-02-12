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

    // if (showMoreFilterBtn && hideFilterBtn && filterOverAutoBtn) {
    //     showMoreFilterBtn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.remove('none'));
    //         showMoreFilterBtn.classList.add('none');
    //         hideFilterBtn.classList.remove('none');
    //         filterOverAutoBtn.classList.remove('none');
    //         filterScrollElem.classList.remove('filter-over-auto-scroll');
    //     });

    //     hideFilterBtn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         filterHiddenSections.forEach(filterHiddenSection => filterHiddenSection.classList.add('none'));
    //         showMoreFilterBtn.classList.remove('none');
    //         hideFilterBtn.classList.add('none');
    //         filterOverAutoBtn.classList.add('none');
    //     });

    //     filterOverAutoBtn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         filterScrollElem.classList.add('filter-over-auto-scroll');
    //         filterOverAutoBtn.classList.add('none');
    //     });
    // }

    const createElement = (text) => {
        let newListItem = document.createElement('li');
        newListItem.textContent = text;
        newListItem.classList.add('filter__show-content-item');

        let divEl = document.createElement('div');
        divEl.classList.add('filter__show-content-item__btn-svg');
        newListItem.appendChild(divEl);

        filterShowContentList.appendChild(newListItem);
        return newListItem;
    };

    if (horLabels) {
        horLabels.forEach(label => {
            const checks = label.querySelector('.checkbox-real');
            checks.checked = false;
            // console.log(checks.checked);
            if (checks) {
                label.addEventListener('change', (e) => {
                    let val = label.querySelector('.option__radio-title');
                    if (val) {
                        if (checks.checked) {
                            createElement(val.innerHTML);

                            // показ оставшихся фильтров
                            filterHiddenSections.forEach(el => {
                                el.classList.remove('none');
                            });


                            // удаление по нажатию на тайтлы
                            let items = filterShowContentList.querySelectorAll('.filter__show-content-item');
                            items.forEach(item => {
                                item.addEventListener('click', () => {
                                    item.remove();
                                    let impCheck = label.querySelector('.checkbox-real:checked');
                                    impCheck.checked = false;
                                })
                            })
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

    // Получение данных из слайдов от... до....
    const rangeSlider1 = document.getElementById('range-slider1');
    const rangeSlider2 = document.getElementById('range-slider2');
    // const horLabels = horizontalInputs.querySelectorAll('.option__btn');

    if (rangeSlider1) {
        noUiSlider.create(rangeSlider1, {
            start: [1, 2000],
            step: 1,
            connect: true,
            keyboardSupport: false,
            range: {
                'min': 1,
                'max': 2000
            }
        });

        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];

        rangeSlider1.noUiSlider.on('update', function (values, handle) {

            inputs[handle].value = Math.round(values[handle]);
        });

        rangeSlider1.noUiSlider.on('keydown', function (values, handle) {

            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider1 = (i, value) => {

            let arr = [null, null];
            arr[i] = value;

            console.log(arr[i]);

            rangeSlider1.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                e.preventDefault();
                console.log(index);
                setRangeSlider1(index, e.currentTarget.value);
            });
        });

        const getResultFromInputFirstField = document.getElementById('r2');
        getResultFromInputFirstField.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(inputs[1].value);
            createElementSliderOne(inputs[0].value, inputs[1].value);
        })
    }

    const createElementSliderOne = (fromCount, toCount) => {
        console.log(toCount);
        let newListItem = document.createElement('li');
        newListItem.textContent = `Глубина бурения (max), м: от ${fromCount} до ${toCount}`;
        newListItem.classList.add('filter__show-content-item');

        let divEl = document.createElement('div');
        divEl.classList.add('filter__show-content-item__btn-svg');
        newListItem.appendChild(divEl);

        filterShowContentList.appendChild(newListItem);
        return newListItem;
    };

    if (rangeSlider2) {
        noUiSlider.create(rangeSlider2, {
            start: [45, 1000],
            step: 1,
            connect: true,
            range: {
                'min': 45,
                'max': 1000
            }
        });

        const input2 = document.getElementById('input-2');
        const input3 = document.getElementById('input-3');
        const inputs = [input2, input3];


        rangeSlider2.noUiSlider.on('update', function (values, handle) {

            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider2 = (i, value) => {

            let arr = [null, null];
            arr[i] = value;

            console.log(arr[0], arr[1]);

            rangeSlider2.noUiSlider.set(arr);
            console.log(arr)
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                e.preventDefault();
                setRangeSlider2(index, e.currentTarget.value);
            });
        });
        const getResultFromInputSecondField = document.getElementById('r2');
        getResultFromInputSecondField.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(inputs[1].value);
            createElementSliderTwo(inputs[0].value, inputs[1].value);
        })
    }

    const createElementSliderTwo = (fromCount, toCount) => {
        console.log(toCount);
        let newListItem = document.createElement('li');
        newListItem.textContent = `Глубина бурения (max), м: от ${fromCount} до ${toCount}`;
        newListItem.classList.add('filter__show-content-item');

        let divEl = document.createElement('div');
        divEl.classList.add('filter__show-content-item__btn-svg');
        newListItem.appendChild(divEl);

        filterShowContentList.appendChild(newListItem);
        return newListItem;
    };

    const resetBtn = document.querySelector('.reset__btn');
    resetBtn.addEventListener('click', (e) => {
        let items = filterShowContentList.querySelectorAll('.filter__show-content-item');
        items.forEach(item => {
            item.remove();
        });
    })

    // получаем количество пунктов в первом фильтре
    const firstFilterHidden = document.getElementById('hide-filter-first');
    let elementsfirstFilterHidden = firstFilterHidden.querySelectorAll('.option__btn');
    console.log(elementsfirstFilterHidden.length);
    const hideFilterFirstShowBtn = document.getElementById('hide-filter-first-show');
    const hideFilterFirstHiddenBtn = document.getElementById('hide-filter-first-hidden');

    if (elementsfirstFilterHidden.length > 5) {
        console.log('Нас много');
        hideFilterFirstShowBtn.classList.remove('none');
        hideFilterFirstHiddenBtn.classList.remove('none');
    }

    // получаем количество пунктов во втором фильтре
    const secondFilterHidden = document.getElementById('hide-second-first');
    let elementssecondFilterHidden = secondFilterHidden.querySelectorAll('.option__btn');
    console.log(elementsfirstFilterHidden.length);
    const hideFilterSecondShowBtn = document.getElementById('hide-filter-second-show');
    const hideFilterSHiddenBtn = document.getElementById('hide-filter-second-hidden');

    if (elementssecondFilterHidden.length > 5) {
        console.log('Нас много');
        hideFilterSecondShowBtn.classList.remove('none');
        hideFilterSHiddenBtn.classList.remove('none');
        hideFilterSecondShowBtn.addEventListener('click', (e) => {
            secondFilterHidden.classList.add('filter-over-auto-scroll');
            // hideFilterSecondShowBtn.classList.add('none');
        })

        hideFilterSHiddenBtn.addEventListener('click', (e) => {
            secondFilterHidden.classList.remove('filter-over-auto-scroll');
            // hideFilterSHiddenBtn.classList.add('none');
            // hideFilterSecondShowBtn.classList.remove('none');
        });


    }

}