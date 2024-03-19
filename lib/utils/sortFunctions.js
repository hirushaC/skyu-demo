// sort by date
export const sortByDate = (array) => {
  const sortedArray = array.sort((a, b) => {
    const dateA = a.frontmatter?.date || ''; // Use an empty string if date is not defined
    const dateB = b.frontmatter?.date || ''; // Use an empty string if date is not defined

    return new Date(dateB) - new Date(dateA);
  });

  return sortedArray;
};

// sort product by weight
export const sortByWeight = (array) => {
  const withWeight = array.filter((item) => item.frontmatter.weight);
  const withoutWeight = array.filter((item) => !item.frontmatter.weight);
  const sortedWeightedArray = withWeight.sort(
    (a, b) => a.frontmatter.weight - b.frontmatter.weight
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};
