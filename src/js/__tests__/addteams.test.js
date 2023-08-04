import Character from '../character';
import Team from '../team';

test('Проверка на добавление нового игрока', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Вова' });

  newTeam.add(player);

  const newSet = new Set();
  newSet.add({ name: 'Вова' });

  expect(newTeam.members).toEqual(newSet);
});

test('Добавление cуществующего игрока', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Вова' });

  newTeam.add(player);

  expect(() => {
    newTeam.add(player);
  }).toThrow('Данный игрок уже в команде');
});

test('Проверка дубликатов при добавлении новых игроков', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Вова' });
  const player1 = new Character({ name: 'Петя' });
  const player2 = new Character({ name: 'Лёша' });

  newTeam.addAll(player, player1, player2, player2);

  expect(newTeam.members.size).toEqual(3);
});

test('Проверка получение Set из массива', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Вова' });
  const player1 = new Character({ name: 'Петя' });
  const player2 = new Character({ name: 'Лёша' });

  newTeam.addAll(player, player1, player2);

  newTeam.toArray();

  const sample = [
    { name: 'Вова' },
    { name: 'Петя' },
    { name: 'Лёша' },
  ];

  expect(newTeam.members).toEqual(sample);
});
