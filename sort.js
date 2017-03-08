/**
 * Created by xaj on 2017/3/8.
 */
//冒泡
function bubbleSort(arr) {
    var i, j;
    for (i = 1; i < arr.length; i++)
    {
        for (j = 0; j < arr.length-i; j++)
        {
            if (arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}


//select
function selectSort(arr) {
    var i;
    for (i=0; i < arr.length; i++)
    {
        var index = i;
        var min = arr[i];
        for (var j = i+1; j<arr.length;j++)
        {
            if (min > arr[j])
            {
                min = arr[j];
                index=j
            }
        }
        var temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }

    return arr
}
//quick
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

//insertion
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++)
    {
        var temp = arr[i];
        var j = i-1;
        while (j>=0 && arr[j]>temp)
        {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr
}



console.log(insertSort([12, 1, 2, 13, 3]))