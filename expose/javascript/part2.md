1. `3`
2. `150`
3. `150`
4. The function returns an array: `[ 50, 100, 150 ]` but this is not visible in the terminal.
5. `ReferenceError: i is not defined` error is output because `i` is not in the scope of line 12, it is defined in the for-loop.
6. `ReferenceError: discountedPrice is not defined` error is output because `discountedPrice` is out of the scope of line 13, it is defined in the for-loop.
7. `150`
8. The function returns an array: `[ 50, 100, 150 ]` but this is not visible in the terminal.
9. `ReferenceError: i is not defined` error is output because `i` is defined for the scope of the for-loop using `let` and so it not visible to line 11.
10. `3`
11. The function returns an array: `[ 50, 100, 150 ]` but this is not visible in the terminal.
12. :
	1. `student.name`
	2. `student['Grad Year']`
	3. `student.greeting()`
	4. `student['Favorite Teacher'].name`
	5. `student.courseLoad[0]`
13. :
	1. `32` addition treats `2` as a string and concatenates `3` and `2`
	2. `1` subtraction only works with numbers, so `'3'` is treated at `3` and so `3-2` is `1`
	3. `3` null has numeric value `0` so `3 + 0` is `3`.
	4. `3null` null when converted to a string has value `'null'` so it is concatenated with `'3'`
	5. `4` true has numeric value `1` so it is added to `3` to get 4.
	6. `0` false and null both have numeric values of `0` so their sum is also `0`
	7. `3undefined` undefined has string value `'undefined'` when it is converted to string, and the two stings are concatenated.
	8. `NaN` subtraction only works with numeric values, so `'3'` is converted to `3` but `undefined` has no numerical equivalent, so the operation results in not a number
14. :
	1. `true` conversion is done to numeric values, so the comparison `2 > 1` returns true.
	2. `false` the ascii values of the first characters of the strings are compared, since 2 appears later in the ascii table than 1, the output is `false`.
	3. `true` conversion to numeric values results in comparison `2 == 2` so returns true.
	4. `false` strict equality looks for the same type of object, so value returns false.
	5. `false` true has numeric values `1` so the comparison `1 == 2` returns false.
	6. `true` the conversion to boolean (of value `2`) happens before the strict equality operator, so by the time the two values are compared, they are both `true`, so the result is true.part
15. `==` compares values after type conversions (so `'3' == 3` is true) but `===` compares values without comparisons, looking for exactly identical values (`'3' == 3` is false)
17. `[ 2, 4, 6 ]` function `doSomething` is called on each of the entries of the array (through the `callback` variable), so every array entry is doubled and then the new array `newArr`.
19. :
```
	1
	4
	3
	2
	```
