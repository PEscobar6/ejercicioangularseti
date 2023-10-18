export function isMutant(dna: string[]): boolean {
  const n = dna.length;
  const mutantSequences = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];

  for (const sequence of mutantSequences) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (checkSequence(i, j, sequence, dna)) {
          return true;
        }
      }
    }
  }

  return false;
}

function checkSequence(x: number, y: number, sequence: string, dna: string[]): boolean {
  const n = dna.length;

  const directions = [
    [0, 1], // Derecha
    [1, 0], // Abajo
    [1, 1], // Diagonal derecha abajo
  ];

  for (const [dx, dy] of directions) {
    let count = 0;
    for (let i = 0; i < sequence.length; i++) {
      const newX = x + i * dx;
      const newY = y + i * dy;
      if (newX >= 0 && newX < n && newY >= 0 && newY < n && dna[newX][newY] === sequence[i]) {
        count++;
      } else {
        break;
      }
    }
    if (count === sequence.length) {
      return true;
    }
  }

  return false;
}
