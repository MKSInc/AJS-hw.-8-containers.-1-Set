import Character from '../character';

test('The Character class must create an object of the form: { name: \'argument in constructor\' }', () => {
  expect(new Character('player1')).toEqual({ name: 'player1' });
});
