function mincost(arr)
{ 
//write your code here
// return the min cost
let totalCost = 0;

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // Take the two smallest elements
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert the new rope at the correct position to keep the array sorted
        let index = arr.findIndex(num => num > cost);
        if (index === -1) {
            arr.push(cost); // If it's the largest, push at the end
        } else {
            arr.splice(index, 0, cost); // Insert at the right position
        }
    }

    return totalCost;
}

module.exports=mincost;
