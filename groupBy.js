const areEqual = function (element1, element2) {
  if (element1 === element2) {
    return true;
  }
  return areArraysEqual(element1, element2);
};

const areArraysEqual = function (array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const locateGroup = function (element, array) {
  for (let index = 0; index < array.length; index++) {
    const groupFirstElement = array[index][0];
    if (areEqual(groupFirstElement, element)) {
      return index;
    }
  }
  return -1;
};

const addToGroup = function (groups, element) {
  let groupIndex = locateGroup(element, groups);
  if (groupIndex < 0) {
    groups.push([element]);
    return groups;
  }
  groups[groupIndex].push(element);
  return groups;
};

const groupBy = function (array) {
  const groups = [];
  for (let index = 0; index < array.length; index++) {
    addToGroup(groups, array[index]);
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
