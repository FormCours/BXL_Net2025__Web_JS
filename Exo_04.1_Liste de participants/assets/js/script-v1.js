const DOM = {
    INPUT_FIRSTNAME: document.getElementById('input-firstname'),
    INPUT_LASTNAME: document.getElementById('input-lastname'),
    BTN_FROM_ADD: document.getElementById('btn-add'),
    CONTAINER_RESULT: document.getElementById('container-result'),
    BTN_ORDER_ENCODE: document.getElementById('btn-order-encode'),
    BTN_ORDER_APHA: document.getElementById('btn-order-apha'),
    BTN_ORDER_SIZE: document.getElementById('btn-order-size'),
};

const participants = [];
let order = 1;
DOM.BTN_ORDER_ENCODE.disabled = true;

DOM.BTN_FROM_ADD.addEventListener('click', () => {
    const firstname = DOM.INPUT_FIRSTNAME.value;
    const lastname = DOM.INPUT_LASTNAME.value.toUpperCase();

    participants.push(`${firstname} ${lastname}`);
    refreshParticipants();

    DOM.INPUT_FIRSTNAME.value = '';
    DOM.INPUT_LASTNAME.value = '';
});

function refreshParticipants() {

    DOM.CONTAINER_RESULT.innerHTML = '';

    for (const participant of getParticipantToShow()) {
        const resultItem = document.createElement('li');
        resultItem.textContent = participant;

        DOM.CONTAINER_RESULT.appendChild(resultItem);
    }
}

function refreshOrderButton(btnSelected) {
    DOM.BTN_ORDER_ENCODE.disabled = false;
    DOM.BTN_ORDER_APHA.disabled = false;
    DOM.BTN_ORDER_SIZE.disabled = false;
    btnSelected.disabled = true;
}

DOM.BTN_ORDER_ENCODE.addEventListener('click', () => {
    order = 1;
    refreshOrderButton(DOM.BTN_ORDER_ENCODE);
    refreshParticipants();
});
DOM.BTN_ORDER_APHA.addEventListener('click', () => {
    order = 2;
    refreshOrderButton(DOM.BTN_ORDER_APHA);
    refreshParticipants();
});
DOM.BTN_ORDER_SIZE.addEventListener('click', () => {
    order = 3;
    refreshOrderButton(DOM.BTN_ORDER_SIZE);
    refreshParticipants();
});

function getParticipantToShow() {
    switch (order) {
        case 1:
            return participants;
        case 2:
            return participants.toSorted((a, b) => a.localeCompare(b));
        case 3:
            return participants.toSorted((a, b) => a.length - b.length);
    }
}