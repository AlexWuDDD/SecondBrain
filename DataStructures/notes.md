# Notes

## Last Update

2023-2-11

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

### Type upper bounds

You might be wondering, why does it "extend" comparable and not "implement"? Comparable is an interface after all.

Well, it turns out, "extends" in this context has a different meaning than in the polymorphism context.

When we say that the Dog class extends the Animal class, we are saying that Dogs can do anything that animals can do and more! We are giving Dog the abilities of an animal. When we say that K extends Comparable, we are simply stating a fact. We aren't giving K the abilities of a Comparable, we are just saying that K must be Comparable. This different use of extends is called type upper bounding. Confusing? That's okay, it is confusing. Just remember, in the context of inheritance, the extends keyword is active in giving the subclass the abilities of the superclass. You can think of it as a fairy Godmother: she sees your needs and helps you out with some of her fairy magic. On the other hand, in the context of generics, extends simply states a fact: You must be a subclass of whatever you're extending. When used with generics (like in generic method headers), extends imposes a constraint rather than grants new abilities. It's akin to a fortune teller, who just tells you something without doing much about it.

## There is no magic shortcut

In the end, there is no shortcut to doing runtime analysis. It requires careful thought. But there are a few useful techniques and things to know.

Techniques:

- Find exact sum
- Write out examples
- Draw pictures

**Sum Things to Know** Here are two important sums you'll see quite often, and should remember:

$1+2+3+...+Q=Q(Q+1)/2=\theta(Q^2)$(Sum of First Natural Numbers)

$1+2+4+8+...+Q=2Q-1=\theta(Q)$(Sum of First Powers of 2)

![some explain ](./Capture1.PNG)

## Bookmark

[Omega and Amortized Analysis](https://joshhug.gitbooks.io/hug61b/content/chap8/chap84.html)
