import gameSave from '../app';

test('correct promise', () => {
  const standart = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  return expect(gameSave).resolves.toEqual(standart);
});
