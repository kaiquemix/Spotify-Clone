export const formatTimeInSeconds = (timeInSeconds) => {
  //Usando destructuring
  const [minutes, seconds] = [
    Math.floor(timeInSeconds / 60),
    Math.floor(timeInSeconds % 60),
  ].map((num) => num.toString().padStart(2, "0"));

  return `${minutes}:${seconds}`;

  // Usando variável normal
  // const minutes = Math.floor(timeInSeconds / 60);
  // const seconds = Math.floor(timeInSeconds % 60);
  // const formatedMinutes = minutes.toString().padStart(2, "0");
  // const formatedSeconds = seconds.toString().padStart(2, "0");

  // return `${formatedMinutes}:${formatedSeconds}`;
};

//Math.floor() arredonda para baixo (remove as casas decimais).
//.toString() → Converte o número para string.
//.padStart(2, "0") → Garante que tenha dois dígitos, adicionando "0" na frente, se necessário.

// 🚀 Resumo
// ✅ Divide os segundos para obter os minutos.
// ✅ Usa % para pegar os segundos restantes.
// ✅ Garante dois dígitos com padStart(2, "0").
// ✅ Retorna uma string no formato "mm:ss".
