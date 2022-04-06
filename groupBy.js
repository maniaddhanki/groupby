const isArray = Array.isArray;

const areEqual = function (element1, element2) {
  const areArrays = isArray(element1) && isArray(element2);

  if (!areArrays) {
    return element1 === element2;
  }

  if (element1.length !== element2.length) {
    return false;
  }

  for (let index = 0; index < element1.length; index++) {
    if (!areEqual(element1[index], element2[index])) {
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
  const groupIndex = locateGroup(element, groups);
  if (groupIndex < 0) {
    groups.push([element]);
    return groups;
  }
  groups[groupIndex].push(element);
  return groups;
};

const groupSimilarElement = function (array) {
  const groups = [];
  for (let index = 0; index < array.length; index++) {
    addToGroup(groups, array[index]);
  }
  return groups;
};

const main = function () {
  console.log(groupSimilarElement([1, 2, 1]));
  console.log(groupSimilarElement([1, 2, 3, 1, 2, 4]));
  console.log(groupSimilarElement([[1, 1], 1, [1, 1], 1]));
  console.log(groupSimilarElement([[1, 2], '1,2', '1,2', [1, 2]]));
  console.log(groupSimilarElement(['1', 2, 1, 'a', 'b', 'a']));
  console.log(groupSimilarElement([[], 2, 1, []]));
  console.log(groupSimilarElement([[1, 2], [1, 2]]));
  console.log(groupSimilarElement([[], 1, [], 1]));
  console.log(groupSimilarElement([[[1], [2]], [[1], [2]]]));
};

main();
