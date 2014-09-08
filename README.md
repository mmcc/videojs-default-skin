# Video.js default theme

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
