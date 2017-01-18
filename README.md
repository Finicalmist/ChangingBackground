## ChangingBackground
Changes the Background Image from Themes
##Compatible with
* [ClearVision](https://github.com/Zerthox/ClearVision) (Not anymore, you have to modify the .css file)

## How to make your Theme compatible:
Instead of this:
```css
.element1{
  background-image: url(https://asdf.asdf.com/sameimage.png);
  transition: 5s;
}
.element2{
  background-image: url(https://asdf.asdf.com/sameimage.png);
  transition: 5s;
}
.element3{
  background-image: url(https://asdf.asdf.com/sameimage.png);
  transition: 5s;
}
```
use this:
```css
:root{
  --background-image: url(https://asdf.asdf.com/image.png);
  --transition: 5s;
}
.element1{
  background-image: var(--background-image);
  transition: var(--transition);
}
.element2{
  background-image: var(--background-image);
  transition: var(--transition);
}
.element3{
  background-image: var(--background-image);
  transition: var(--transition);
}
```
!Important: It has to be **--background-image** and **--transition!**
