<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="bootstrap.min.css" media="all">
	<title></title>
</head>
<body>

<@card>
Hateemel
</@card>


<script src="elode.min.js"></script>
<script src="templating.js"></script>

<script>
var Borneos = new borneoTemplating()
window.onerror=function(e){alert(e)}
Borneos.createComponent({
card : "div.card.p-2.my-2",
title : "h1.display-6"
})

Borneos.renderBody()

alert(Borneos.render(`<@card>
<@title>Title</@title>
</@card>`))
</script>
</body>
</html>
