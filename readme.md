# Dynamic Css javascript

This project aim is to declare styling in class without using css.
It just import one javascript then can run it.

## <ins>Pros and Cons

Pros: 
1. not need memorise new syntax for declare the css.
2. not need import css file.
3. just import this javascript and follow the syntax, then you can run already.

Cons:
1. class maybe very long in html. This may cause html large file size.
2. css maybe repeating in different class.
3. may consider vendor lock.

## <ins>How to install it

1. Download the dynamiccss.js in this repo.
2. put this line at your html.
```
<script type="text/javascript" src="dynamiccss.js"></script>
```

## <ins>How to use it

pattern of the classname:
```
dcj=>[css attribute name]=>[css option 1]=>[css option 2]=>...=>[css option n] 
```
where n is number of option in that css attribute.

Example: 
in css 
```
div {
    color: blue
}
```

in html
```
<div class="dcj=>color=>blue"></div>
```

Your can refer to the example.html look for more example.

# Future update
In order to solve the cons issue, this section is needed.

#### The number is refer to the cons.
1. Try to reduce the long declare. Method may use variable to replace it but it will take more time to read and trace it.
2. This can solve by use same class name. But it will be optional.
3. This can be solve by have export function from example.html to example.html to example.css. This will update in future. 

#### Other bug or issue found will be solve.

# Donate 

If useful for you and you like this, kindly consider a donation.

[Donate](https://paypal.me/weitaoyap?country.x=MY&locale.x=en_US)

Thank you.
