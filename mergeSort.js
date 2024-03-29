const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
    // console.log(sorted.concat(arr1.slice().concat(arr2.slice())))
    sortedArr = sorted.concat(arr1.slice().concat(arr2.slice()));
    // console.log(sortedArr)
    return sortedArr
  };

  const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
  
    return merge(left, right); 
  };