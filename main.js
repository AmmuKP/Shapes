function createCanvas() {
    createCanvas(300, 280);
}
function draw() {
    circle(30, 30, 20);
    describe('white circle with black outline in mid of gray canvas');
    ellipse(56, 46, 55, 55);
    describe('white ellipse with black outline in middle of a gray canvas');
    rect(30, 20, 55, 85);
    describe('white rect with black outline in mid-right of canvas');
    rect(30, 20, 55, 55, 20);
    describe('white rect with black outline and round edges in mid-right of canvas');
    rect(30, 20, 55, 55, 20, 15, 10, 5);
    describe('white rect with black outline and round edges of different radii');
}