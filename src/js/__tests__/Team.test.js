import Team from '../Team';
import Daemon from '../Daemon';
import Zombie from '../Zombie';
import Undead from '../Undead';


test('Разные персонажи успешно добавляется в команду', () => {
  const team = new Team();
  const undead = new Undead('Morty');
  const zombie = new Zombie('Bobby');
  team.add(undead);
  team.add(zombie);
  const members = team.toArray();
  expect(members.length).toEqual(2);
  expect(members).toEqual([undead, zombie]);
});

test('Ошибка при добавлении персонажа, который уже существует в команде', () => {
  const team = new Team();
  const undead = new Undead('Morty');
  team.add(undead);
  expect(() => team.add(undead)).toThrowError(Error);
});

test('Несколько разных персонажей успешно добавляются в команду', () => {
  const team = new Team();
  const daemon1 = new Daemon('Rick');
  const daemon2 = new Daemon('Rick');
  const zombie = new Zombie('Bob');
  const undead = new Undead('Morty');
  team.addAll(daemon1, daemon2, zombie, undead);
  const members = team.toArray();
  expect(members.length).toEqual(4);
  expect(members).toEqual([daemon1, daemon2, zombie, undead]);
});

test('Персонажи в команде не дублируются', () => {
  const team = new Team();
  const daemon1 = new Daemon('Rick');
  const daemon2 = new Daemon('Rick');
  const zombie = new Zombie('Bob');
  const undead = new Undead('Morty');
  team.addAll(daemon1, daemon2, zombie, zombie, daemon1, undead);
  const members = team.toArray();
  expect(members.length).toEqual(4);
  expect(members).toEqual([daemon1, daemon2, zombie, undead]);
});
