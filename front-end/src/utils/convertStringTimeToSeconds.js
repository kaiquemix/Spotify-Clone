export const convertStringTimeToSeconds = (stringTime) => {
  // Usando Destructuring
  const [minutes, seconds] = stringTime.split(":").map(Number);

  // const colonPosition = stringTime.indexOf(":");
  // const minutes = Number(stringTime.substring(0, colonPosition));
  // const seconds = Number(stringTime.substring(colonPosition + 1));

  return minutes * 60 + seconds;
};

//stringTime é o tempo no formato "mm:ss", por exemplo, "02:45" (2 minutos e 45 segundos).
//.indexOf(":") retorna a posição do caractere ":" dentro da string.
//return - Converte os minutos para segundos (minutes * 60) e Soma os segundos extraídos.

// 📌 Resumo
// ✅ Converte "mm:ss" para segundos.
// ✅ Usa indexOf(), substring(), e Number() para extrair valores.
// ✅ Pode ser otimizado com .split(":").map(Number).
// ✅ Retorna minutes * 60 + seconds.