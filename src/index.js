module.exports = solveSudoku = (m, e = 0, r, c) => {
  if (e == 81) return m;
  if (m[r = e / 9 | 0][c = e % 9]) return solveSudoku(m, e + 1);
g:for (let g = 1; g < 10; g++) {
    for (let i = 0; i < 9; ++i)
      if(g === m[r][i] || g === m[i][c] || g === m[(r / 3 | 0) * 3 + (i / 3 | 0)][(c / 3 | 0) * 3 + i % 3]) continue g;
    m[r][c] = g;
    if (solveSudoku(m, e + 1)) return m;
  }
  return m[r][c] = 0;
}
