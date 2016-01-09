import { expect } from 'chai';
import path from 'path';
import { readFileSync } from 'fs';
import json from '../../src/json';

const fixture = path.join(__dirname, '/../fixture/coverage.json');
const data = JSON.parse(readFileSync(fixture, 'utf8'));

it('should output valid json', () => {
  expect(JSON.parse(json(data))).to.be.an.object;
});
