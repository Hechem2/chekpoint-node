const generatePassword = require("generate-password");

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  return password;
}

const password = generateRandomPassword();
console.log("Generated Password:", password);