document.getElementById('sortButton').addEventListener('click', function() {
    let array = [5, 3, 8, 4, 2];
    bubbleSort(array);
    document.getElementById('result').textContent = 'Sorted Array: ' + array.join(', ');
});

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
