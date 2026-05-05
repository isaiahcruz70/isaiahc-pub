const entryIdInput = document.getElementById('entryId');
const mealBudgetInput = document.getElementById('mealBudget');
const timeAvailableInput = document.getElementById('timeAvailable');
const needQuickInput = document.getElementById('needQuick');
const wantHealthyInput = document.getElementById('wantHealthy');
const mealPreferenceInput = document.getElementById('mealPreference');
const submitButton = document.getElementById('submitButton');

const mealBudgetError = document.getElementById('mealBudgetError');
const timeAvailableError = document.getElementById('timeAvailableError');
const mealPreferenceError = document.getElementById('mealPreferenceError');

export const getFormInputs = () => {
    return {
        id: entryIdInput.value || null,
        mealBudget: mealBudgetInput.value,
        timeAvailable: timeAvailableInput.value,
        needQuick: needQuickInput.checked,
        wantHealthy: wantHealthyInput.checked,
        mealPreference: mealPreferenceInput.value
    };
};

export const populateFormForEdit = (entry) => {
    entryIdInput.value = entry.id;
    mealBudgetInput.value = entry.mealBudget;
    timeAvailableInput.value = entry.timeAvailable;
    needQuickInput.checked = entry.needQuick;
    wantHealthyInput.checked = entry.wantHealthy;
    mealPreferenceInput.value = entry.mealPreference;
    submitButton.textContent = 'Update Entry';
};

export const clearForm = () => {
    entryIdInput.value = '';
    mealBudgetInput.value = '';
    timeAvailableInput.value = '';
    needQuickInput.checked = false;
    wantHealthyInput.checked = false;
    mealPreferenceInput.value = '';
    submitButton.textContent = 'Get Decision';
};

export const clearErrors = () => {
    mealBudgetError.textContent = '';
    timeAvailableError.textContent = '';
    mealPreferenceError.textContent = '';
};

export const showErrors = (errors) => {
    mealBudgetError.textContent = errors.mealBudget || '';
    timeAvailableError.textContent = errors.timeAvailable || '';
    mealPreferenceError.textContent = errors.mealPreference || '';
};