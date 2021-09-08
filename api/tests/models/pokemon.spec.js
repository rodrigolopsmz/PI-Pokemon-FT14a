const { Pokemon,Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(async() => {
      await Type.sync({ force: true })
      await Pokemon.sync({ force: true })
      });
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Artan' });
      });
    })
    describe('life', () => {
      it('Debería dar un error si en un campo que va un número se ingresa una letra', (done) => {
        Pokemon.create({ name: 'Artan',life:'a' }).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());
      });
      it('Debería funcionar en caso que sea una propiedad valida', () => {
        Pokemon.create({ name: 'Artan',life:10  });
      });
    })
    describe('height', () => {
      it('Debería dar un error si en un campo que va un número se ingresa una letra', (done) => {
        Pokemon.create({ name: 'Artan',height:'a' }).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());
      });
      it('Debería funcionar en caso que sea una propiedad valida', () => {
        Pokemon.create({ name: 'Artan',height:10  });
      });
    })
    describe('weight', () => {
      it('Debería dar un error si en un campo que va un número se ingresa una letra', (done) => {
        Pokemon.create({ name: 'Artan',weight:'a' }).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());
      });
      it('Debería funcionar en caso que sea una propiedad valida', () => {
        Pokemon.create({ name: 'Artan',weight:10  });
      });
    })
    describe('speed', () => {

      it('Debería dar un error si en un campo que va un número se ingresa una letra', (done) => {
        Pokemon.create({ name: 'Artan',speed:'a' }).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());
      });
      it('Debería funcionar en caso que sea una propiedad valida', () => {
        Pokemon.create({ name: 'Artan',speed:10  });
      });
    })
    describe('attack', () => {

      it('Debería dar un error si en un campo que va un número se ingresa una letra', (done) => {
        Pokemon.create({ name: 'Artan',attack:'a' }).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());

      });
      it('Debería funcionar en caso que sea una propiedad valida', () => {
        Pokemon.create({ name: 'Artan',attack:10  });
      });

      
    });

    describe('types', () => {

      it('Debería dar un error si se omite los campos obligatorios name o TypeId', (done) => {
        Type.create({name: 'Fuego'}).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());
      });

      it('Debería dar un error si se omite los campos obligatorios name o TypeId', (done) => {
        Type.create({typeId: 1}).then(() => done(new Error('It requires a valid number')))
        .catch(() => done());
      });

      it('Debería funcionar al agregar los campos ', (done) => {
        Type.create({name:'Fuego',typeId: 500001}).then(() => done())
        .catch(() => done(new Error('It requires a valid number')));
      });
    })
  });

  
});
