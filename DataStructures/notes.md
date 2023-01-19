# Notes

## Last Update

2023-1-19

### GRoE

Golden Rule of Equals

### Static Nested Classes

If the nested class never uses any instance variables or methods if the outer class, declare it static.

- Static classes cannot access outer class's instance variables or methods.
- Results in a minor saving of memory.

### Arraycopy

Two ways to copy arrays:

- Item by item using a loop
- Using arraycopy. Take 5 parameters:
  - Source array
  - Start position in source
  - Target array
  - Start position in target
  - Number to copy

  ```Java
  System.arraycopy(b, 0, x, 3, 2)
  ```



## Bookmark

[A new way](https://joshhug.gitbooks.io/hug61b/content/chap3/chap31.html)
