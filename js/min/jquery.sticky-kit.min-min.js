(function(){var t,i;t=this.jQuery||window.jQuery,i=t(window),t.fn.stick_in_parent=function(o){var s,e,n,r,c,l,a,p,u,d,f;for(null==o&&(o={}),f=o.sticky_class,c=o.inner_scrolling,d=o.recalc_every,u=o.parent,p=o.offset_top,a=o.spacer,e=o.bottoming,null==p&&(p=0),null==u&&(u=void 0),null==c&&(c=!0),null==f&&(f="is_stuck"),s=t(document),null==e&&(e=!0),n=function(o,n,r,l,h,g,k,m){var v,y,_,b,w,x,C,I,z,A,j,M;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),w=s.height(),C=o.parent(),null!=u&&(C=C.closest(u)),!C.length)throw"failed to find stick parent";if(v=_=!1,(j=null!=a?a&&o.closest(a):t("<div />"))&&j.css("position",o.css("position")),I=function(){var t,i,e;return!m&&(w=s.height(),t=parseInt(C.css("border-top-width"),10),i=parseInt(C.css("padding-top"),10),n=parseInt(C.css("padding-bottom"),10),r=C.offset().top+t+i,l=C.height(),_&&(v=_=!1,null==a&&(o.insertAfter(j),j.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(f),e=!0),h=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-p,g=o.outerHeight(!0),k=o.css("float"),j&&j.css({width:o.outerWidth(!0),height:g,display:o.css("display"),"vertical-align":o.css("vertical-align"),"float":k}),e)?M():void 0},I(),g!==l)return b=void 0,x=p,A=d,M=function(){var t,u,y,z;return!m&&(y=!1,null!=A&&(--A,0>=A&&(A=d,I(),y=!0)),y||s.height()===w||I(),y=i.scrollTop(),null!=b&&(u=y-b),b=y,_?(e&&(z=y+g+x>l+r,v&&!z&&(v=!1,o.css({position:"fixed",bottom:"",top:x}).trigger("sticky_kit:unbottom"))),h>y&&(_=!1,x=p,null==a&&("left"!==k&&"right"!==k||o.insertAfter(j),j.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(f).trigger("sticky_kit:unstick")),c&&(t=i.height(),g+p>t&&!v&&(x-=u,x=Math.max(t-g,x),x=Math.min(p,x),_&&o.css({top:x+"px"})))):y>h&&(_=!0,t={position:"fixed",top:x},t.width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(f),null==a&&(o.after(j),"left"!==k&&"right"!==k||j.append(o)),o.trigger("sticky_kit:stick")),_&&e&&(null==z&&(z=y+g+x>l+r),!v&&z))?(v=!0,"static"===C.css("position")&&C.css({position:"relative"}),o.css({position:"absolute",bottom:n,top:"auto"}).trigger("sticky_kit:bottom")):void 0},z=function(){return I(),M()},y=function(){return m=!0,i.off("touchmove",M),i.off("scroll",M),i.off("resize",z),t(document.body).off("sticky_kit:recalc",z),o.off("sticky_kit:detach",y),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),C.position("position",""),_?(null==a&&("left"!==k&&"right"!==k||o.insertAfter(j),j.remove()),o.removeClass(f)):void 0},i.on("touchmove",M),i.on("scroll",M),i.on("resize",z),t(document.body).on("sticky_kit:recalc",z),o.on("sticky_kit:detach",y),setTimeout(M,0)}},r=0,l=this.length;l>r;r++)o=this[r],n(t(o));return this}}).call(this);