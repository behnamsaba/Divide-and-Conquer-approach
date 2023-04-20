function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floorIdx = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= x) {
            floorIdx = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return floorIdx === -1 ? -1 : arr[floorIdx];
}

module.exports = findFloor;
