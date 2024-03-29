function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            indices.push(arr[i]);
        }
    }
    return indices;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    oddIndices = [];
    for (i = arr.length - 1; i >= 0; i--) {
        if (i % 2 != 0) {
            oddIndices.push(arr[i]);
        }
    }
    return oddIndices;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let powerTwo = 2**j;
            let result = arr[i];
            if (result === powerTwo) {
            indices.push(arr.indexOf(arr[i]));
        }
        }


    }

    return indices;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let powerOfN = n**j;
            let result = arr[i];
            if (result === powerOfN) {
            indices.push(arr.indexOf(arr[i]));
        }
        }


    }

    return indices;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let result = [];
    let middleIndex = Math.ceil(arr.length / 2);
    if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length / 2 ; i++) {
        result.push(arr[i]);
    }
    return result;

    } else {
        for (let i = 0; i < middleIndex; i++) {
            result.push(arr[i]);
        }
        return result;
    }
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let result = [];
    let middleIndex = Math.ceil(arr.length / 2);
    for (let i = middleIndex; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
