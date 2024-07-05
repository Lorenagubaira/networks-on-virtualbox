const { validateVMs } = require('./validateVMs');
const path = require('path');

const configPath = path.resolve(__dirname, '../../windows_report.txt');
const results = validateVMs(configPath);

test('The Windows machine must have a NatNetwork interface', () => {
  expect(results.windowsHasNatNetwork).toBe(true);
});

test('The Windows machine\'s NatNetwork interface connection must be on', () => {
  expect(results.windowsNatNetworkConnected).toBe(true);
});

test('The Debian machine must have a NatNetwork interface', () => {
  expect(results.debianHasNatNetwork).toBe(true);
});

test('The Debian machine\'s NatNetwork interface connection must be on', () => {
  expect(results.debianNatNetworkConnected).toBe(true);
});

test('Both interfaces must be on the same Nat Network', () => {
  expect(results.sameNatNetwork).toBe(true);
});
