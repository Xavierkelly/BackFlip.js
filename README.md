# BackFlip
A jquery plugin that allows you to dynamically change the background colors of a container or div with a couple lines of code.

### Example
![alt tag](http://kellytech.herokuapp.com/static/img/backflip.png)

[View BackFlip.js Demo](http://backflip.kelly.tech/)

### External styling sheets that are needed:
- [Get Bootstrap](http://getbootstrap.com/)
- [Jquery](https://jquery.com/)
- [Google Font](https://www.google.com/fonts)

### How to Change/Update dynamically background color with JavaScript

###### Add and choose your hex color to the array. You can add as many as you like.
```
colors = new Array('#2388e5', '#3994e8', '#50a1ea','#67aded', '#7eb9f0');
```

###### Call function with count = 0 
```
function changeBackground(count){
/* check array length */
count %= colors.length;
/* set background color */
document.getElementById('customid').style.background = colors[count]
/* set time */
setTimeout("changeBackground("+(count+1)+")", 2000);
}
```

