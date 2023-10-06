import questData from './questData.json';

export default function initialise() {
  const actButtons = document.querySelectorAll('.act-button');
  actButtons.forEach((btn) =>
    btn.addEventListener('click', (e) => loadAct(Number(e.target.dataset.act))),
  );

  loadAct(1);
}

function loadAct(actNumber) {
  const locContainer = document.querySelector('.sublocation-container');
  locContainer.classList = `sublocation-container sublocation-container--act${actNumber}`;

  const actButtons = document.querySelectorAll('.act-button');
  actButtons.forEach((btn) => btn.classList.remove('active'));

  const actButton = document.querySelector(`.act-button[data-act="${actNumber}"]`);
  actButton.classList.add('active');

  loadQuests(questData.acts[actNumber - 1].areas);
}

function loadCheckboxStates(areaList) {
  for (const area of areaList) {
    for (const quest of area.quests) {
      const checkbox = document.getElementById(quest.id);
      const savedState = localStorage.getItem(`quest_${quest.id}`);

      if (checkbox && savedState !== null) {
        checkbox.checked = savedState === 'true';
      }

      if (quest.subquests) {
        for (const subquest of quest.subquests) {
          const subCheckbox = document.getElementById(subquest.id);
          const subSavedState = localStorage.getItem(`quest_${subquest.id}`);

          if (subCheckbox && subSavedState !== null) {
            subCheckbox.checked = subSavedState === 'true';
          }
        }
      }
    }
  }
}

function loadQuests(areaList) {
  const locContainer = document.querySelector('.sublocation-container');
  locContainer.innerHTML = '';

  for (const area of areaList) {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');

    section.classList.add('area-card');
    h1.innerText = area.name;
    section.appendChild(h1);
    section.appendChild(ul);
    locContainer.appendChild(section);

    for (const quest of area.quests) {
      const checkbox = createQuestCheckbox(quest);
      ul.appendChild(checkbox);

      if (quest.subquests) {
        for (const subquest of quest.subquests) {
          const subCheckbox = createQuestCheckbox(subquest);
          subCheckbox.classList.add('subquest');
          ul.appendChild(subCheckbox);
        }
      }
    }
  }
  loadCheckboxStates(areaList);
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

  const label = document.createElement('label');
  label.classList = 'label';
  label.htmlFor = quest.id;
  label.appendChild(input);

  if (quest.url) {
    const a = document.createElement('a');
    a.href = quest.url;
    a.target = '_blank';
    a.textContent = quest.name;

    label.appendChild(a);
  } else {
    const span = document.createElement('span');
    span.textContent = quest.name;

    label.appendChild(span);
  }

  const li = document.createElement('li');
  li.appendChild(label);
  return li;
}
