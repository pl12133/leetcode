function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialColor = image[sr][sc];
    
    if (initialColor !== color) {
        return fill(image, sr, sc, initialColor, color);
    }
    return image;
};

function fill(image: number[][], sr: number, sc: number, initialColor: number, nextColor: number): number[][] {

    if (0 <= sr && sr < image.length && 0 <= sc && sc < image[0].length && initialColor === image[sr][sc]) {
        image[sr][sc] = nextColor;

        fill(image, sr + 1, sc, initialColor, nextColor);
        fill(image, sr - 1, sc, initialColor, nextColor);
        fill(image, sr, sc + 1, initialColor, nextColor);
        fill(image, sr, sc - 1, initialColor, nextColor);
    }
    
    return image;
}
