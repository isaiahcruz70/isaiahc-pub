import * as formHandler from './form-handler.js';
import * as decisionLogic from './decision.js';
import * as resultsDisplay from './ui.js';
import * as dataStore from './data-store.js';
import * as tableRenderer from './table-render.js';

let myData = dataStore.getFromLS();

const mealDecisionForm = document.getElementById('mealDecisionForm');
const clearFormButton = document.getElementById('clearFormButton');

const renderApp = () => {
    tableRenderer.renderTable(myData, {
        onDelete: handleDeleteEntry,
        onEdit: handleEditEntry
    });
};

const validateForm = (inputs) => {
    const errors = {};

    if (inputs.mealBudget === '') {
        errors.mealBudget = 'Please enter a meal budget of 0 or more.';
    } else if (Number(inputs.mealBudget) < 0) {
        errors.mealBudget = 'Please enter a meal budget of 0 or more.';
    }

    if (inputs.timeAvailable === '') {
        errors.timeAvailable = 'Please enter a time available amount of 0 minutes or more.';
    } else if (Number(inputs.timeAvailable) < 0) {
        errors.timeAvailable = 'Please enter a time available amount of 0 minutes or more.';
    }

    if (!inputs.mealPreference) {
        errors.mealPreference = 'Please select a meal preference.';
    }

    return errors;
};

const handleDeleteEntry = (id) => {
    const index = myData.findIndex((entry) => {
        return entry.id === id;
    });

    if (index !== -1) {
        myData.splice(index, 1);
        dataStore.saveToLS(myData);
        renderApp();

        if (myData.length === 0) {
            resultsDisplay.hideResults();
        }
    }
};

const handleEditEntry = (id) => {
    const entryToEdit = myData.find((entry) => {
        return entry.id === id;
    });

    if (entryToEdit) {
        formHandler.populateFormForEdit(entryToEdit);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    const inputs = formHandler.getFormInputs();

    formHandler.clearErrors();

    const errors = validateForm(inputs);

    if (Object.keys(errors).length > 0) {
        formHandler.showErrors(errors);
        return;
    }

    const cleanInputs = {
        ...inputs,
        mealBudget: Number(inputs.mealBudget),
        timeAvailable: Number(inputs.timeAvailable)
    };

    const decision = decisionLogic.evaluateMealDecision(cleanInputs);

    if (cleanInputs.id) {
        const index = myData.findIndex((entry) => {
            return entry.id === cleanInputs.id;
        });

        if (index !== -1) {
            const updatedEntry = {
                id: myData[index].id,
                timestamp: myData[index].timestamp,
                mealBudget: cleanInputs.mealBudget,
                timeAvailable: cleanInputs.timeAvailable,
                needQuick: cleanInputs.needQuick,
                wantHealthy: cleanInputs.wantHealthy,
                mealPreference: cleanInputs.mealPreference,
                decision: decision.decision
            };

            myData[index] = updatedEntry;
            dataStore.saveToLS(myData);
            resultsDisplay.renderDecision(updatedEntry);
        }
    } else {
        const newEntry = {
            id: dataStore.generateUniqueId(),
            timestamp: new Date().toISOString(),
            mealBudget: cleanInputs.mealBudget,
            timeAvailable: cleanInputs.timeAvailable,
            needQuick: cleanInputs.needQuick,
            wantHealthy: cleanInputs.wantHealthy,
            mealPreference: cleanInputs.mealPreference,
            decision: decision.decision
        };

        myData.push(newEntry);
        dataStore.saveToLS(myData);
        resultsDisplay.renderDecision(newEntry);
    }

    renderApp();
    formHandler.clearForm();
};

const handleClearForm = () => {
    formHandler.clearForm();
    formHandler.clearErrors();
    resultsDisplay.hideResults();
};

const init = () => {
    mealDecisionForm.addEventListener('submit', handleFormSubmit);
    clearFormButton.addEventListener('click', handleClearForm);

    resultsDisplay.hideResults();
    renderApp();
};

document.addEventListener('DOMContentLoaded', init);