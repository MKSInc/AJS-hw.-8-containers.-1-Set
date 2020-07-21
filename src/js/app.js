// TODO: write your code here
import Team from './team';
import Character from './character';

const player1 = new Character('player1');
const player2 = new Character('player2');
const team = new Team();

team.addAll(player1, player2, player1);
// eslint-disable-next-line no-console
console.log(team.toArray());
