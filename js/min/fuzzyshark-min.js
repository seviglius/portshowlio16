$(window).load(function(){$(".se-pre-con").fadeOut("slow")}),$(document).ready(function(){$(".student-list").waypoint(function(s){"down"===s&&($(this.element).siblings().removeClass("in-range"),$(this.element).addClass("in-range"),console.log("60%, down")),"up"===s&&($(this.element).removeClass("in-range"),$(this.element).prev().addClass("in-range"),console.log("60%, up"))},{offset:"60%"}),$(".student-list:first-child").waypoint(function(s){"up"===s&&($(".student-list").removeClass("in-range"),console.log("60%, up"))},{offset:"60%"}),$(".student-list:last-child").waypoint(function(s){"down"===s&&($(this.element).removeClass("in-range"),console.log("remove last element")),"up"===s&&($(this.element).addClass("in-range"),console.log("bring back last element"))},{offset:"15%"}),$(".student-list").hover(function(){$(this).toggleClass("hovered"),$(this).siblings().toggleClass("in-range-overridden")}),$("#school-name").waypoint(function(){$("#logo").toggleClass("opacity-zero")},{offset:"10%"}),$("#school-name").waypoint(function(){$("#logo").toggleClass("opacity-zero")},{offset:"40%"});var s=$("#video-container"),o=s.outerHeight();$(document).scroll(function(){var i=(o-window.scrollY)/o;i>=50&&s.css("opacity",i)}),$(".module").waypoint(function(){$(this.element).find("p.caption").toggleClass("opacity-toggle")},{offset:"50%"}),$(".module").waypoint(function(){$(this.element).find("p.caption").toggleClass("opacity-toggle")},{offset:"-30%"}),$(".caption-alternate").waypoint(function(){$(this.element).toggleClass("opacity-toggle")},{offset:"70%"}),$(".caption-alternate").waypoint(function(){$(this.element).toggleClass("opacity-toggle")},{offset:"10%"}),$(".fitvid-container").fitVids(),$(".profile-header ").waypoint(function(){$(".profile-header").toggleClass("scroll-opacity")}),$(".profile-footer").waypoint(function(){$(".profile-header").toggleClass("scroll-opacity")})}),$(".single-design").find("#bottom-design-button").addClass("active"),$(".single-photography").find("#bottom-photo-button").addClass("active"),$(".single-design").find(".bottom-nav-design").css("display","block"),$(".single-design").find(".bottom-nav-photo").css("display","none"),$(".single-photography").find(".bottom-nav-design").css("display","none"),$(".single-photography").find(".bottom-nav-photo").css("display","block"),$("#bottom-design-button").click(function(){$(".bottom-nav-design").css("display","block"),$(".bottom-nav-photo").css("display","none"),$(this).addClass("active"),$(this).siblings().removeClass("active")}),$("#bottom-photo-button").click(function(){$(".bottom-nav-design").css("display","none"),$(".bottom-nav-photo").css("display","block"),$(this).addClass("active"),$(this).siblings().removeClass("active")}),$("#parent>div:nth-child(4n)").after('<div class="clearfix visible-all">'),$("#parent>.design").filter(function(s){return s%4==3}).after('<div class="clearfix visible-design">'),$("#parent>.photography").filter(function(s){return s%4==3}).after('<div class="clearfix visible-photo">'),$("#all").click(function(){$(".visible-all").css("display","block"),$(".visible-design").css("display","none"),$(".visible-photo").css("display","none")}),$("#design").click(function(){$(".visible-all").css("display","none"),$(".visible-design").css("display","block"),$(".visible-photo").css("display","none")}),$("#photography").click(function(){$(".visible-all").css("display","none"),$(".visible-design").css("display","none"),$(".visible-photo").css("display","block")}),jQuery(function($){$("h1,h2,h3,li,p").each(function(){$(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,"&nbsp;$1"))})}),$(".single img").addClass("lazy"),$(".single iframe").addClass("lazy");