function createVisitedManager() {
    const visited = [];
    
    function setVisited(i, j) {
        if (!visited[i]) {
            visited[i] = [];
        }
        
        visited[i][j] = true;
    }
    
    function isVisited(i, j) {
        return !!visited[i]?.[j];
    }
    
    return {
        visited,
        setVisited,
        isVisited,
    }
}

function maxAreaOfIsland(grid: number[][]): number {
    const {
        setVisited,
        isVisited,
    } = createVisitedManager();
    
    let maximum = 0;
    
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            const cell = grid[i][j];
            if (cell === 1) {
                maximum = Math.max(maximum, walkIsland(grid, 0, i, j, { setVisited, isVisited }));
            }
        }
    }
    
    return maximum;
}

function walkIsland(grid, area, i, j, { setVisited, isVisited }) {
    const isInBounds = 0 <= i && i < grid.length && 0 <= j && j < grid[0].length;
    
    if (!isInBounds || isVisited(i, j) || grid[i][j] !== 1) {
        return area;
    }
    
    setVisited(i, j);
    
    area = walkIsland(grid, area, i + 1, j, { setVisited, isVisited });
    area = walkIsland(grid, area, i - 1, j, { setVisited, isVisited });
    area = walkIsland(grid, area, i, j + 1, { setVisited, isVisited });
    area = walkIsland(grid, area, i, j - 1, { setVisited, isVisited });
    
    return area + 1;
}
