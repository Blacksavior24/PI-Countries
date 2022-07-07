/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "PER",
	name: "Peru",
	flag: "https://flagcdn.com/pe.svg",
	continent: "South America",
	capital: "Lima",
	subregion: "South America",
	area: 1285216,
	poblation: 32971846,
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () => agent.get('/countries').expect(200));
    it('should return json', () => agent.get('/countries').expect('content-type', /json/ ));
  });
});
