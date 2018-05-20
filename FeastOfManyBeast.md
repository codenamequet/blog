---
title: Feast Of Many Beast
# We can even add meta tags to the page! This sets the keywords meta tag.
# <meta name="keywords" content="my SEO keywords"/>
meta:
  - name: keywords
  - content: my SEO keywords
---

# The Feast Of Many Beast [(Codewars)](https://www.codewars.com/kata/5aa736a455f906981800360d)

<!-- Write about what the code war challange was -->
```
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings,and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
```

<!-- How I began solving the challenge -->
### Psudo Code
* I knew that the beggining and ending character needed to match so `.charAt()` came to mind
* I knew true or false needed to be returned
* I knew that everything needed to be lowercased and since hyphens, spaces, are included in strings no need to do anything special to add them. Also knew that there are no animals with "numberals" in their name and thus if for some reason a dish did false would be returned.

### Actual Writing Code

I started writing my function as an arrow function and figured I could use an if/else statement to solve my problem.

```const feasts = (beast, dish) => {
    if () {
        return true
    } else {
        return false
    }
}
```

So from there I knew that I needed all of the beast who's first and final character matched the first and final character of the dish they were bringing. I also needed to make sure that characters were always lowercase as the instructions would say to expect. I know this matters for 2 reasons.

1. If the user for some reason where to put in an uppercase animal and a lowercase dish or vice versa for some reason even if it was the same character it would always return false. The same letter but different case != the same character.
2. The instructions asked for it, therfore they may test for it. Gotta add that in so I'm not going crazy trying to figure out why that test isn't passing later.

```const feasts = (beast, dish) => {
    if (beast.charAt(0).toLowerCase() === 
    dish.charAt(0).toLowerCase()) {
        return true
    } else {
        return false
    }
}
```

So from here I did a few things. I used the `.charAt()` method on `beast` & `dish`. `.charAt()` goes through a string and looks for what character is at that index of a string (which follows the rules of an array). So .charAt(0) looks for the first character in both the beast and dish variables. We then use `.toLowerCase()` to turn every character at the first index of that string into a lowercase letter before comparing them.

So from here I ran a test in my console and called `feast(bird, bd)` which returned `true`. I then ran `feast(bird, abc)` and that returned `false`.

So now I have to get my last characters to compare each other. `argument.length - 1` returns the last character in the string. Lets take the example 'dog' as a string asigned to beast - `beast.length == 3`, which means the last index is 2. So subtracting 1 from `beasts.length == 2`, and we get the last index.

:::warning
:warning: This does not actually work!
:::

```const feasts = (beast, dish) => {
    if (beast.charAt(0).toLowerCase() && beast.charAt(beast.length - 1).toLowerCase() === 
    dish.charAt(0).toLowerCase() && dish.charAt(dish.length - 1)) {
        return true
    } else {
        return false
    }
}
```

The issue is that I was comparing the first & last characters beast to each other, and the first & last characters in dish to each other. This would probably rarely return true.

### Final solution

<!-- Use pic of code latter -->
```const feast = (beast, dish) => {
    if (beast.charAt(0).toLowerCase() === dish.charAt(0).toLowerCase() && 
    beast.charAt(beast.length -1).toLowerCase() === dish.charAt
    (dish.length-1).toLowerCase()) {
    return true
  } else {
      return false
  }
}
```
This now runs in the console returning true when both the first and last character of `beast == dish`. I now look over my code and think that this should pass all the test, which it did.

### Conclusion

This challenge wasn't too bad at all. It didn't take long for me to think about how to solve it, and the only hiccup was getting the comparisons correct. Overall it was a decent challenge to start my day off and get my brain working.

:::tip Fun Fact
Fun fact here
:::
