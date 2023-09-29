import questData from './questData.json';

const main = questData.acts[0].areas[0].quests;
const mainList = document.querySelector('section[data-area="Main Quests"] > ul');
const rivington = questData.acts[0].areas[1].quests;
const rivingtonList = document.querySelector('section[data-area="Rivington"] > ul');
const lowerCity = questData.acts[0].areas[2].quests;
const lowerCityList = document.querySelector('section[data-area="Lower City"] > ul');
const hoh = questData.acts[0].areas[3].quests;
const hohList = document.querySelector('section[data-area="House of Hope"] > ul');

export default function initialise() {
  main.forEach((quest) => {
    const checkbox = createQuestCheckbox(quest);
    mainList.appendChild(checkbox);
  });

  rivington.forEach((quest) => {
    const checkbox = createQuestCheckbox(quest);
    rivingtonList.appendChild(checkbox);
  });

  lowerCity.forEach((quest) => {
    const checkbox = createQuestCheckbox(quest);
    lowerCityList.appendChild(checkbox);
  });

  hoh.forEach((quest) => {
    const checkbox = createQuestCheckbox(quest);
    hohList.appendChild(checkbox);
  });

  loadCheckboxStates();
}

function loadCheckboxStates() {
  for (const quest of main) {
    const checkbox = document.getElementById(quest.id);
    if (checkbox) {
      const savedState = localStorage.getItem(`quest_${quest.id}`);
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    }
  }

  for (const quest of rivington) {
    const checkbox = document.getElementById(quest.id);
    if (checkbox) {
      const savedState = localStorage.getItem(`quest_${quest.id}`);
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    }
  }

  for (const quest of lowerCity) {
    const checkbox = document.getElementById(quest.id);
    if (checkbox) {
      const savedState = localStorage.getItem(`quest_${quest.id}`);
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    }
  }

  for (const quest of hoh) {
    const checkbox = document.getElementById(quest.id);
    if (checkbox) {
      const savedState = localStorage.getItem(`quest_${quest.id}`);
      if (savedState !== null) {
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
