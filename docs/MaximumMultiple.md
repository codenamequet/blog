---
title: Maximum Multiple
# We can even add meta tags to the page! This sets the keywords meta tag.
# <meta name="keywords" content="my SEO keywords"/>
meta:
  - name: keywords
  - content: my SEO keywords
---

# Maximum Multiple [(Codewars)](http://www.codewars.com/kata/maximum-multiple/)

```Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positve values .
```
### Psudo Code
* Divisor and bound are the arguments passed into the function
* N must be be divisible by divisor
* N must be less than or equal to bound
* N will always be greater than 0

### Actual Code
I wrote an arrow function and passed it the arguments divisor and bound and decided to go with a for loop to solve this problem. I created a variable n that is equal to bound. N is always less than or equal to bound, since N can be equal to bound then starting there seems like the best idea. I then write that as long as N is less than or equal to bound to continue the for loop, and once that condition is ran and through and not met to decrement N by 1.

```const maxMultiple = (divisor, bound) => {
  for (let n = bound; n <= bound; n--) {
    
  }
}
```

Now I'm set up where the next lines of codeneed to break out of the loop once N is the biggest number modules divisor and less than or equal to bound. If/Else seems like the best way to do this.

const maxMultiple = (divisor, bound) => {
  for (let n = bound; n <= bound; n--) {
    if (n % divisor === 0) {
      return n
    } else {
      continue
    }
  }
}

Here I wrote an if/else statement that checks to see if N is modules divisor with N always starting out equal to bound. If N is modulus divisor then it return N and leaves the loop. If not then it goes on to the else statement which tells it to continue the loop until it finds the largest number modulus divisor, but equal too or less than bound.

:::tip Continue Statement
information about the conitnue statement
:::

### Final Solution
const maxMultiple = (divisor, bound) => {
  for (let n = bound; n <= bound; n--) {
    if (n % divisor === 0) {
      return n
    } else {
      continue
    }
  }
}
