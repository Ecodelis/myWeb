<p className="lead">
  Until now, trying to style an article, document, or blog post with Tailwind has been a very
  tedious task.
</p>

The `@tailwindcss/typography` plugin is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.

> Why is Tailwind removing the default styles on my `h1` elements? How do I disable this? What do you mean I lose all the other base styles too?

<div className="not-prose">
  <h2>Shouldn't be colored</h2>
</div>

```html
<p>
  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
  springing up around the country.
</p>
```

For more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/main/README.md).

---

## This is a heading

1. We want everything to look good out of the box.
2. Really just the first reason, that's the whole point of the plugin.
3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.

Now **I'm going to show you** an example of an unordered list to make sure that looks good, too:

- So here is the first item in this list.
- In this example we're keeping the items short.
- Later, we'll use longer, more complex list items.

Let's even style a table:

| Wrestler                | Origin       | Finisher           |
| ----------------------- | ------------ | ------------------ |
| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter       |
| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |
| Randy Savage            | Sarasota, FL | Elbow Drop         |
| Vader                   | Boulder, CO  | Vader Bomb         |
| Razor Ramon             | Chuluota, FL | Razor's Edge       |

Finally, a figure with a caption:

<figure>
  <img
    src=""
    alt=""
  />
  <figcaption>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
    classical Latin literature from 45 BC, making it over 2000 years old.
  </figcaption>
</figure>

And that's the end of our little demo.