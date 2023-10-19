// Declare an integer array of 6 elements
let intArray = [];
let length = 0;

// Add 3 elements to the Array
for (let i = 0; i < 3; i++) {
    intArray[length] = i;
    length++;
}
intArray[length] = 10;
length++;



for (let i = 3; i >= 0; i--) {
    intArray[i + 1] = intArray[i];
    //4 = 10
    //3 = 2
    //2 = 1
    //1 = 0
}

// Now that we have created space for the new element,
// we can insert it at the beginning.
intArray[0] = 20;

// Say we want to insert the element at index 2.
// First, we will have to create space for the new element.
for (let i = 4; i >= 2; i--)
{
    // Shift each element one position to the right.
    intArray[i + 1] = intArray[i];
}

// Now that we have created space for the new element,
// we can insert it at the required index.
intArray[2] = 30;


for (let i = 0; i < intArray.length; i++) {
    console.log("Index " + i + " contains " + intArray[i]);
}