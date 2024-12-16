// duplicate array

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
      if (unique.includes(item) === false) {
        unique.push(item);
      }
    }
    return unique;
  }
  
  const khayBesi = ["abul", "babul", "cabul", "abul", "babul"];
  const uniqueArr = noDuplicate(khayBesi);
  console.log(uniqueArr);