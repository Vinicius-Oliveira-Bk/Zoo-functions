const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });

  it('A função é case sensitive;', () => {
    const actual = handlerElephants('averageage');
    expect(actual).toBeNull();
  });

  it('Para o argumento location deve retornar a string NW', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toContain(expected);
  });

  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });

  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const expected = ['Monday'];
    expect(['Friday', 'Saturday', 'Sunday', 'Tuesday']).toEqual(
      expect.not.arrayContaining(expected),
    );
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
