module.exports = solveSudoku = (m, rs = 0) => {
  for (let r = rs; r < 9; ++r)
    for (let c = 0; c < 9; ++c)
      if (!m[r][c]){
      g:for (let g = 1; g < 10; g++) {
          for (let i = 0; i < 9; ++i)
            if(g === m[r][i] || g === m[i][c] || g === m[Math.floor(r / 3) * 3 + Math.floor(i / 3)][Math.floor(c / 3) * 3 + i % 3])
              continue g;
          m[r][c] = g;
          if (solveSudoku(m, r)) return m;
        }
        return m[r][c] = 0;
      }
  return m;
}
