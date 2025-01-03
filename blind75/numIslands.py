
# Code


# Testcase
# Testcase
# Test Result
# 200. Number of Islands
# Medium
# Topics
# Companies
# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

# Example 1:

# Input: grid = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# Output: 1
# Example 2:

# Input: grid = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]
# Output: 3
 

# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 300
# grid[i][j] is '0' or '1'.0


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        result = 0

        def dfs(r,c):
            if(r,c) in visited:
                return
            
            visited.add((r,c))

            directions = [[1,0],[-1,0],[0,1],[0,-1]]

            for dr, dc in directions:
                nr = dr + r
                nc = dc + c
                if (nr in range(rows) and
                    nc in range(cols) and
                    grid[nr][nc] == '1'):
                    dfs(nr,nc)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1' and (r,c) not in visited:
                    dfs(r,c)
                    result += 1
        
        return result
