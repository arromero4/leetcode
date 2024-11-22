// Problem Statement:
// Amazon Fresh plans to deliver groceries to customers in Techlandia using a truck. The city is represented as a grid where:

// 1 represents accessible roads.
// 0 represents areas without roads (not accessible).
// 9 represents the delivery destination.
// The truck starts at the top-left corner of the grid (always accessible) and can move up, down, left, or right. It must find the minimum distance to reach the destination. If it is impossible to reach the destination, return -1.

// Assumptions:
// The grid is a 2D list of integers where:
// 1 ≤ rows, columns ≤ 10³.
// The truck can only navigate through cells marked 1 or 9.
// The truck cannot move outside the grid.
// The goal is to minimize the total distance to the destination.
// Input:
// A 2D grid (area) of integers.

// Output:
// An integer representing the total distance traversed to deliver the order, or -1 if the destination is unreachable.


// 2. Code Question 2

// Amazon Fresh is a grocery delivery service that offers consumers the option of purchasing their groceries online and having them delivered on schedule. The Amazon Fresh team is planning a route for a delivery truck to deliver customer orders in the city of Techlandia. The planner will create a delivery area for each order to effectively plan the route. The area is abstracted as a grid. Not all locations are accessible by road. The truck only needs to make a single delivery.

// Write an algorithm to determine the minimum distance required for the truck to deliver the order.

// Assumptions:

// Some places in the delivery area cannot be accessed by the driver, as there are no roads in those locations.
// The delivery area can be represented as a two-dimensional grid of integers, where each integer represents one cell.
// The truck must start from the top-left corner of the area, which is always accessible, and can move one cell up, down, left, or right at a time.
// The truck must navigate around the areas without roads and cannot leave the area.
// The accessible areas are represented as 1, areas without roads are represented by 0, and the order destination is represented by 9.
// Input
// The input to the function/method consists of one argument:
// area, representing the two-dimensional grid of integers.

// Output
// Return an integer representing the total distance traversed to deliver the order else return -1.

// Constraints:
// 1 ≤ rows, columns ≤ 10³


function minimumDistance(area) {
  const rows = area.length;
  const cols = area[0].length;
  
  // Directions for moving up, down, left, and right
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  // Check if a cell is within bounds and accessible
  const isValid = (r, c) => 
    r >= 0 && 
    r < rows && 
    c >= 0 && 
    c < cols && 
    (area[r][c] === 1 || 
    area[r][c] === 9);

  // BFS setup
  const queue = [[0, 0, 0]]; // [row, col, distance]
  const visited = new Set();
  visited.add(`0,0`); // Mark the starting cell as visited

  // BFS loop
  while (queue.length > 0) {
    console.log(queue);
    const [currentRow, currentCol, distance] = queue.shift();

    // If we reach the destination, return the distance
    if (area[currentRow][currentCol] === 9) {
      return distance;
    }

    // Explore all valid directions
    for (const [dr, dc] of directions) {
      const newRow = currentRow + dr; //0
      const newCol = currentCol + dc;//0

      if (isValid(newRow, newCol) && !visited.has(`${newRow},${newCol}`)) {
        queue.push([newRow, newCol, distance + 1]);
        visited.add(`${newRow},${newCol}`);
      }
    }
  }

  // If we exhaust the queue without finding the destination
  return -1;
}

// Example usage
const area = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1]
];

console.log(minimumDistance(area)); // Output: 3
