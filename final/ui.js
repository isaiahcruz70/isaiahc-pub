const resultsContainer = document.getElementById('results');
const decisionOutput = document.getElementById('decisionOutput');
const healthyOutput = document.getElementById('healthyOutput');

export const renderDecision = (decisionObj) => {
    decisionOutput.value = decisionObj.decision;
    healthyOutput.value = decisionObj.wantHealthy ? 'Yes' : 'No';
    showResults();
};

export const showResults = () => {
    resultsContainer.style.display = 'block';
};

export const hideResults = () => {
    resultsContainer.style.display = 'none';
};