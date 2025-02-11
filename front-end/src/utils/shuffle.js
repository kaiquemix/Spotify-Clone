export const shuffleArray = (array) => {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

// Existe essa forma usando Destructuring
// export const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]]; // Swap usando destructuring
//   }
// };

// 🔥 Conclusão
// ✅ O código embaralha um array de forma eficiente.
// ✅ Usa um algoritmo clássico de troca de posições.
// ✅ Modifica o array original (não retorna um novo).
// ✅ Pode ser melhorado usando let e const.