$(window).load(function(){$(".se-pre-con").fadeOut("slow")}),$(document).ready(function(){$(".student-list").waypoint(function(){$(this.element).toggleClass("in-range")},{offset:"30%"}),$(".student-list").waypoint(function(){$(this.element).toggleClass("in-range")},{offset:"55%"}),$(".student-list").hover(function(){$(this).toggleClass("hovered"),$(".in-range").toggleClass("in-range-overridden")}),$("#school-name").waypoint(function(){$("#logo").toggleClass("opacity-zero")});var o=$("#video-container"),t=o.outerHeight();$(document).scroll(function(){var e=(t-window.scrollY)/t;e>=50&&o.css("opacity",e)}),$(".module").waypoint(function(){$(this.element).find("p.caption").toggleClass("opacity-toggle")},{offset:"50%"}),$(".module").waypoint(function(){$(this.element).find("p.caption").toggleClass("opacity-toggle")},{offset:"-30%"}),$(".fitvid-container").fitVids(),$(".profile-header ").waypoint(function(){$(".profile-header").toggleClass("scroll-opacity")}),$(".profile-footer").waypoint(function(){$(".profile-header").toggleClass("scroll-opacity")})});