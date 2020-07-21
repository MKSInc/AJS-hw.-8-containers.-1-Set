import Team from '../team';
import Character from '../character';

const player1 = new Character('player1');
const player2 = new Character('player2');

test('The team.add() method should add the object to the Set team.members container', () => {
  const team = new Team();
  team.add(player1);
  expect(team.members).toEqual(new Set([player1]));
});

test('The team.add() method should throw an \'Этот персонаж уже в команде\' exception if the object to add is already in the command', () => {
  const team = new Team();
  team.add(player1);
  team.add(player2);
  expect(() => { team.add(player1); }).toThrowError('Этот персонаж уже в команде');
});

test('The team.addAll() method should add an arbitrary number of objects to the team without duplication', () => {
  const team = new Team();
  team.addAll(player1, player2);
  expect(team.members).toEqual(new Set([player1, player2]));
});

test('The team.toArray() method should convert the Set team.members container to an array', () => {
  const team = new Team();
  team.add(player1);
  expect(team.toArray()).toEqual([player1]);
});
