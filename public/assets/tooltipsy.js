!function(t){t.tooltipsy=function(e,i){this.options=i,this.$el=t(e),this.random=parseInt(1e4*Math.random()),this.ready=!1,this.shown=!1,this.width=0,this.height=0,this.delaytimer=null,this.$el.data("tooltipsy",this),this.init()},t.tooltipsy.prototype.init=function(){var e=this;e.settings=t.extend({},e.defaults,e.options),e.settings.delay=parseInt(e.settings.delay),"function"==typeof e.settings.content&&e.readify(),e.$el.bind("mouseenter",function(t){e.settings.delay>0?e.delaytimer=window.setTimeout(function(){e.enter(t)},e.settings.delay):e.enter(t)}).bind("mouseleave",function(t){window.clearTimeout(e.delaytimer),e.delaytimer=null,e.leave(t)})},t.tooltipsy.prototype.enter=function(e){var i=this;if(i.ready===!1&&i.readify(),i.shown===!1&&(function(t){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(i.settings.css)>0&&i.$tip.css(i.settings.css),i.width=i.$tipsy.outerWidth(),i.height=i.$tipsy.outerHeight()),"cursor"==i.settings.alignTo){var s=[e.pageX+i.settings.offset[0],e.pageY+i.settings.offset[1]];if(s[0]+i.width>t(window).width()){({top:s[1]+"px",right:s[0]+"px",left:"auto"})}else{({top:s[1]+"px",left:s[0]+"px",right:"auto"})}}else var s=[function(t){return i.settings.offset[0]<0?t.left-Math.abs(i.settings.offset[0])-i.width:0==i.settings.offset[0]?t.left-(i.width-i.$el.outerWidth())/2:t.left+i.$el.outerWidth()+i.settings.offset[0]}(i.offset(i.$el[0])),function(t){return i.settings.offset[1]<0?t.top-Math.abs(i.settings.offset[1])-i.height:0==i.settings.offset[1]?t.top-(i.height-i.$el.outerHeight())/2:t.top+i.$el.outerHeight()+i.settings.offset[1]}(i.offset(i.$el[0]))];i.$tipsy.css({top:s[1]+"px",left:s[0]+"px"}),i.settings.show(e,i.$tipsy.stop(!0,!0))},t.tooltipsy.prototype.leave=function(t){var e=this;return t.relatedTarget==e.$tip[0]?void e.$tip.bind("mouseleave",function(t){t.relatedTarget!=e.$el[0]&&e.settings.hide(t,e.$tipsy.stop(!0,!0))}):void e.settings.hide(t,e.$tipsy.stop(!0,!0))},t.tooltipsy.prototype.readify=function(){this.ready=!0,this.title=this.$el.attr("title")||"",this.$el.attr("title",""),this.$tipsy=t('<div id="tooltipsy'+this.random+'">').appendTo("body").css({position:"absolute",zIndex:"999"}).hide(),this.$tip=t('<div class="'+this.settings.className+'">').appendTo(this.$tipsy),this.$tip.data("rootel",this.$el),this.$tip.html(""!=this.settings.content?this.settings.content:this.title)},t.tooltipsy.prototype.offset=function(t){var e=ot=0;if(t.offsetParent)do e+=t.offsetLeft,ot+=t.offsetTop;while(t=t.offsetParent);return{left:e,top:ot}},t.tooltipsy.prototype.defaults={alignTo:"element",offset:[0,-1],content:"",show:function(t,e){e.fadeIn(100)},hide:function(t,e){e.fadeOut(100)},css:{},className:"tooltipsy",delay:200},t.fn.tooltipsy=function(e){return this.each(function(){new t.tooltipsy(this,e)})}}(jQuery);