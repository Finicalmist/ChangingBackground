## ChangingBackground
Changes the Background Image from Themes
##Compatible with
* [ClearVision](https://github.com/Zerthox/ClearVision)

## How to make your Theme compatible:
Instead of this:
```css
.element1{
  background-image: url(https://asdf.asdf.com/sameimage.png);
}
.element2{
  background-image: url(https://asdf.asdf.com/sameimage.png);
}
.element3{
  background-image: url(https://asdf.asdf.com/sameimage.png);
}
```
use this:
```css
:root{
  --background-image: url(https://asdf.asdf.com/image.png);
}
.element1{
  background-image: var(--background-image);
}
.element2{
  background-image: var(--background-image);
}
.element3{
  background-image: var(--background-image);
}
```
!Important!: It has to be **--background-image!**
