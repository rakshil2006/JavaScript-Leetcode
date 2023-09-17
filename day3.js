function expect(value) {
  return {
    toBe: function(expected)
    {
      if (value === expected)
      {
        return true;
      } 
      else 
      {
        throw new Error(`Not Equal`);
      }
    },
    notToBe: function(notExpected)
    {
      if (value !== notExpected)
      {
        return true;
      } else {
        throw new Error(`Equal`);
      }
    }
  };
}

try {
  expect(5).toBe(5);
  expect(10).notToBe(5);
  expect("hello").toBe("world");
} catch (error)
{
  console.error(error.message);
}
