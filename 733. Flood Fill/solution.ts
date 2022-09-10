type Point = [ number, number ];
type QueueItem = {
    origin: Point,
    adjacent: [ Point, Point, Point, Point ]
};

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialColor = image[sr][sc];
    const initialOrigin: Point = [ sr, sc ];
    
    if (typeof getPixel(initialOrigin) === 'undefined') {
        return image;
    }

    const visited: boolean[][] = [];

    function setVisited(point: Point): void {
        if (!visited[point[0]]) {
            visited[point[0]] = [];
        }
        
        visited[point[0]][point[1]] = true;
    }

    function hasBeenVisited(point: Point): boolean {
        return visited[point[0]]?.[point[1]];
    }    
    
    function getAdjacentPoints([ x, y ]: Point): Point[] {
        return ([
            [ x - 1, y ],
            [ x + 1, y ],
            [ x, y - 1 ],
            [ x, y + 1 ],
        ] as Point[]).filter(point => !hasBeenVisited(point));
    }
    
    function getPixel(point: Point) {
        // console.log(`getPixel([ ${point[0]}, ${point[1]} ])`, image[point[0]]?.[point[1]]);
        return image[point[0]]?.[point[1]];
    }

    function pixelMatch(point: Point) {
        return getPixel(point) === initialColor;
    }

    const queue: Point[] = getAdjacentPoints(initialOrigin);

    image[sr][sc] = color;
    
    while (queue.length) {
        const point = (queue.shift() as Point);
        const [ x, y ] = point;

        if (!hasBeenVisited(point) && pixelMatch(point)) {
            image[x][y] = color;
            setVisited(point);
            queue.push(...getAdjacentPoints(point));
        }
    }

    return image;
};
