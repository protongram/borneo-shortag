# Borneo Shortag

BornoShortag is a library that can create
custom tag or reusable web components without hard code

Example :

JS :
```javascript
var Shortag = new borneoShortag()
var myComponent = {
navbar:"nav.navbar.bg-primary.fixed-top"
}

Shortag.createComponent(myComponent)
Shortag.renderBody()
```


Method list :
```javascript
.render(string)
return rendered string
.renderBody()
render document.body.innerHTML 
.createComponent(Object)
add component object to the component list
```
