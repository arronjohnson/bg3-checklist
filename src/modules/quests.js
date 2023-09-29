import questData from './questData.json';

const actThreeAreas = questData.acts[0].areas;

export default function initialise() {
  for (const area of actThreeAreas) {
    const ul = document.querySelector(`section[data-area="${area.name}"] > ul`);

    for (const quest of area.quests) {
      const checkbox = createQuestCheckbox(quest);
      ul.appendChild(checkbox);
    }
  }
  loadCheckboxStates();
}

function loadCheckboxStates() {
  for (const area of actThreeAreas) {
    for (const quest of area.quests) {
      const checkbox = document.getElementById(quest.id);
      const savedState = localStorage.getItem(`quest_${quest.id}`);

      if (checkbox && savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    }
  }
}

function saveCheckboxState(e) {
  localStorage.setItem(`quest_${e.target.id}`, e.target.checked);
}

function createQuestCheckbox(quest) {
  const input = document.createElement('input');
  input.classList = 'checkbox';
  input.id = quest.id;
  input.name = quest.id;
  input.type = 'checkbox';

  input.addEventListener('change', (e) => saveCheckboxState(e));

  const a = document.createElement('a');
  a.href = quest.url;
  a.target = '_blank';
  a.textContent = quest.name;

  const label = document.createElement('label');
  label.classList = 'label';
  label.htmlFor = quest.id;
  label.appendChild(input);
  label.appendChild(a);

  const li = document.createElement('li');
  li.appendChild(label);
  return li;
}
