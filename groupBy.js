const toArray = function (element) {
  return [].concat(element);
};

const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (areBothArrays(array1[index], array2[index])) {
      if (areArraysEqual(array1[index], array2[index])) {
        return true;
      };
    }
    else if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const getLocation = function (element, array) {
  for (let index = 0; index < array.length; index++) {
    const groupFirstElement = array[index][0];
    if (areArraysEqual(toArray(groupFirstElement), toArray(element))) {
      return index;
    }
  }
  return -1;
};

const group = function (element, groups) {
  const location = getLocation(element, groups);
  if (location < 0) {
    groups.push([element])
    return groups;
  }
  groups[location].push(element);
  return groups;
};

const groupBy = function (array) {
  const groups = [];
  for (let index = 0; index < array.length; index++) {
    group(array[index], groups);
  }
  return groups;
};

const main = function () {
  console.log(groupBy([1, 2, 1]));
  console.log(groupBy([1, 2, 3, 1, 2, 4]));
  console.log(groupBy([[1, 1], 1, [1, 1], 1]));
  console.log(groupBy([[1, 2], '1,2', '1,2', [1, 2]]));
  console.log(groupBy(['1', 2, 1, 'a', 'b', 'a']));
  console.log(groupBy([[], 2, 1, []]));
  console.log(groupBy([[1, 2], [1, 2]]));
  console.log(groupBy([[], 1, [], 1]));
  console.log(groupBy([[[1], [2]], [[1], [2]]]));
};

main();
