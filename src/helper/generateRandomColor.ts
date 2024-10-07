// export const generateRandomColor = (): string => {
//     const colors = [
//       'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-purple-100',
//       'bg-pink-100', 'bg-indigo-100', 'bg-yellow-100', 'bg-orange-100',
//       'bg-teal-100', 'bg-cyan-100'
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

export const generateRandomColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
