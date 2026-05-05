let _currentCallbacks = {};

const footprintTable = document.getElementById('footprintTable');
const tableBody = document.getElementById('history-list');
const noEntriesMessage = document.getElementById('noEntriesMessage');

export const renderTable = (data, callbacks) => {
  _currentCallbacks = callbacks;
  tableBody.innerHTML = '';

  if (data.length === 0) {
    footprintTable.style.display = 'none';
    noEntriesMessage.style.display = 'block';
    return;
  }

  footprintTable.style.display = 'table';
  noEntriesMessage.style.display = 'none';

  const sortedData = [...data].sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  sortedData.forEach((entry) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${new Date(entry.timestamp).toLocaleString()}</td>
      <td>$${entry.mealBudget}</td>
      <td>${entry.timeAvailable} min</td>
      <td>${entry.needQuick ? 'Yes' : 'No'}</td>
      <td>${entry.wantHealthy ? 'Yes' : 'No'}</td>
      <td>${entry.mealPreference}</td>
      <td>${entry.decision}</td>
      <td class="action-cell">
        <button class="action-button edit" data-id="${entry.id}">Edit</button>
        <button class="action-button delete" data-id="${entry.id}">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
};

const handleTableClick = (event) => {
  const target = event.target;
  const id = target.dataset.id;

  if (target.classList.contains('edit') && typeof _currentCallbacks.onEdit === 'function') {
    _currentCallbacks.onEdit(id);
  } else if (target.classList.contains('delete') && typeof _currentCallbacks.onDelete === 'function') {
    _currentCallbacks.onDelete(id);
  }
};

tableBody.addEventListener('click', handleTableClick);