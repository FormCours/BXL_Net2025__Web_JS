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
let orderCallback = null;
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

    const participantsToShow = (orderCallback) ? participants.toSorted(orderCallback) : participants;

    for (const participant of participantsToShow) {
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
    orderCallback = null;
    refreshOrderButton(DOM.BTN_ORDER_ENCODE);
    refreshParticipants();
});
DOM.BTN_ORDER_APHA.addEventListener('click', () => {
    orderCallback = (a, b) => a.localeCompare(b);
    refreshOrderButton(DOM.BTN_ORDER_APHA);
    refreshParticipants();
});
DOM.BTN_ORDER_SIZE.addEventListener('click', () => {
    orderCallback = ((a, b) => a.length - b.length);
    refreshOrderButton(DOM.BTN_ORDER_SIZE);
    refreshParticipants();
});
