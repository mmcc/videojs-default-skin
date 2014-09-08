# Video.js default theme

## Building the theme

```
$ git clone https://github.com/mmcc/videojs-default-skin.git && cd videojs-default-skin
```

The repo already has a pre-built css file in the `dist` folder. If you'd like to make edits,
simply make the edits you'd like and:

```
$ npm install
$ grunt
```

## SCSS syntax usage guideline.

### Nesting should *only* be used for pseudo elements.

Nesting can be convenient, but avoid it for anything other than pseudo elements.

```scss
// Good
.something {
  color: #000;

  &:hover { text-decoration: underline; }
}
.something .neat {
  background-color: #0000ff;
}

// Bad
.something {
  color: #000;

  .neat {
    background-color: #0000ff;
  }

  &:hover { text-decoration: underline; }
}
```
