import { test, expect } from './fixtures';

const casos = [
  { usuario: 'student', clave: 'incorrecta' },
  { usuario: 'inexistente', clave: 'Password123' },
  { usuario: '', clave: '' },
];
for (const caso of casos) {
  test(`login falla con usuario: ${caso.usuario}`, async ({ loginPage }) => {
    await loginPage.iniciarSesion(caso.usuario, caso.clave);
  });
}
