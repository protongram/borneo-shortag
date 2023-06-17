class borneoTemplating{
	constructor(){
		this.ComponentList = {}
	}
	//@param renderTarget : HTMLElement.innerHTML or string
	render(renderTarget){
		for(let replaceTag of Object.entries(this.ComponentList)){
			var ElodeHtml = Elode(replaceTag[1]).html()
			var tag = ElodeHtml.match(/<([^\s>]+)(\s|>)+/)[0].replace('<','').replace(' ','')
			var opentag = ElodeHtml.match(/<([^\s>]+)\s?(.*)+>/)[0].replace(`</${tag}>`,'')
			renderTarget = renderTarget.replaceAll(`<@${replaceTag[0]}>`,`${opentag}`)
				.replaceAll(`</@${replaceTag[0]}>`,`</${tag}>`)
		}
		return renderTarget
	}
	//@param objs : Object {}
	createComponent(objs){
		for(let ElodeHtml of Object.entries(objs))
			this.ComponentList[ElodeHtml[0]]=ElodeHtml[1]
	}
	renderBody(){
		document.body.innerHTML=this.render(document.body.innerHTML.replace(/&lt;(\/)?@(.*)&gt;/g,'<@$1$2>'))	}
}
