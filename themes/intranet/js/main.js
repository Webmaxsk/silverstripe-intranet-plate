(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var magnificPopup, svg4everybody, wookmark;

global.jQuery = require('jquery');

global.$ = global.jQuery;

svg4everybody = require('svg4everybody');

svg4everybody();

magnificPopup = require('magnificPopup');

if (($('.open-popup').length)) {
  $('.open-popup').magnificPopup({
    closeBtnInside: false,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      tCounter: '%curr% / %total%'
    },
    callbacks: {
      open: function() {
        return $('html').addClass('popup-opened');
      },
      close: function() {
        return $('html').removeClass('popup-opened');
      }
    },
    fixedContentPos: true,
    tClose: 'Zatvoriť (Esc)'
  });
  (function() {
    var touchswipe;
    touchswipe = require('touchswipe');
    magnificPopup = $.magnificPopup.instance;
    $('.open-popup').click(function(e) {

      /* Espera carregar o lightbox */
      setTimeout((function() {

        /* Swipe para a esquerda - Próximo */
        $('.mfp-container').swipe({
          swipeLeft: function(event, direction, distance, duration, fingerCount) {
            magnificPopup.next();
          },
          swipeRight: function(event, direction, distance, duration, fingerCount) {
            magnificPopup.prev();
          }
        });
      }), 500);
    });
  }).call(this);
}

if (($('.wookmark').length)) {
  wookmark = require('wookmark');
  $('.wookmark').wookmark({
    offset: 0
  });
}


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFnbmlmaWNQb3B1cCwgc3ZnNGV2ZXJ5Ym9keSwgd29va21hcms7XG5cbmdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5O1xuXG5zdmc0ZXZlcnlib2R5ID0gcmVxdWlyZSgnc3ZnNGV2ZXJ5Ym9keScpO1xuXG5zdmc0ZXZlcnlib2R5KCk7XG5cbm1hZ25pZmljUG9wdXAgPSByZXF1aXJlKCdtYWduaWZpY1BvcHVwJyk7XG5cbmlmICgoJCgnLm9wZW4tcG9wdXAnKS5sZW5ndGgpKSB7XG4gICQoJy5vcGVuLXBvcHVwJykubWFnbmlmaWNQb3B1cCh7XG4gICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICBnYWxsZXJ5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgdENvdW50ZXI6ICclY3VyciUgLyAldG90YWwlJ1xuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICQoJ2h0bWwnKS5hZGRDbGFzcygncG9wdXAtb3BlbmVkJyk7XG4gICAgICB9LFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdwb3B1cC1vcGVuZWQnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICB0Q2xvc2U6ICdaYXR2b3JpxaUgKEVzYyknXG4gIH0pO1xuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvdWNoc3dpcGU7XG4gICAgdG91Y2hzd2lwZSA9IHJlcXVpcmUoJ3RvdWNoc3dpcGUnKTtcbiAgICBtYWduaWZpY1BvcHVwID0gJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlO1xuICAgICQoJy5vcGVuLXBvcHVwJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgICAvKiBFc3BlcmEgY2FycmVnYXIgbyBsaWdodGJveCAqL1xuICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyogU3dpcGUgcGFyYSBhIGVzcXVlcmRhIC0gUHLDs3hpbW8gKi9cbiAgICAgICAgJCgnLm1mcC1jb250YWluZXInKS5zd2lwZSh7XG4gICAgICAgICAgc3dpcGVMZWZ0OiBmdW5jdGlvbihldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50KSB7XG4gICAgICAgICAgICBtYWduaWZpY1BvcHVwLm5leHQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN3aXBlUmlnaHQ6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQpIHtcbiAgICAgICAgICAgIG1hZ25pZmljUG9wdXAucHJldigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSwgNTAwKTtcbiAgICB9KTtcbiAgfSkuY2FsbCh0aGlzKTtcbn1cblxuaWYgKCgkKCcud29va21hcmsnKS5sZW5ndGgpKSB7XG4gIHdvb2ttYXJrID0gcmVxdWlyZSgnd29va21hcmsnKTtcbiAgJCgnLndvb2ttYXJrJykud29va21hcmsoe1xuICAgIG9mZnNldDogMFxuICB9KTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pTDNaaFozSmhiblF2Y0hWaWJHbGpMM1JvWlcxbGN5OXpiM1Z5WTJWZmFXNTBjbUZ1WlhRdmMzSmpMMnB6TDIxaGFXNHVZMjltWm1WbElpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMM1poWjNKaGJuUXZjSFZpYkdsakwzUm9aVzFsY3k5emIzVnlZMlZmYVc1MGNtRnVaWFF2YzNKakwycHpMMjFoYVc0dVkyOW1abVZsSWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFbEJRVUU3TzBGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVZBc1IwRkJaMElzVDBGQlFTeERRVUZSTEZGQlFWSTdPMEZCUTJoQ0xFMUJRVTBzUTBGQlF5eERRVUZRTEVkQlFWY3NUVUZCVFN4RFFVRkRPenRCUVVkc1FpeGhRVUZCTEVkQlFXZENMRTlCUVVFc1EwRkJVU3hsUVVGU096dEJRVU5vUWl4aFFVRkJMRU5CUVVFN08wRkJSVUVzWVVGQlFTeEhRVUZuUWl4UFFVRkJMRU5CUVZFc1pVRkJVanM3UVVGSGFFSXNTVUZCUnl4RFFVRkRMRU5CUVVFc1EwRkJSU3hoUVVGR0xFTkJRV2RDTEVOQlFVTXNUVUZCYkVJc1EwRkJTRHRGUVVWRkxFTkJRVUVzUTBGQlJTeGhRVUZHTEVOQlFXZENMRU5CUVVNc1lVRkJha0lzUTBGQkswSTdTVUZETjBJc1kwRkJRU3hGUVVGblFpeExRVVJoTzBsQlJUZENMRk5CUVVFc1JVRkJWeXhWUVVaclFqdEpRVWMzUWl4UFFVRkJMRVZCUVZNN1RVRkRVQ3hQUVVGQkxFVkJRVk1zU1VGRVJqdE5RVVZRTEZGQlFVRXNSVUZCVlN4clFrRkdTRHRMUVVodlFqdEpRVTgzUWl4VFFVRkJMRVZCUVZjN1RVRkRWQ3hKUVVGQkxFVkJRVTBzVTBGQlFUdGxRVU5LTEVOQlFVRXNRMEZCUlN4TlFVRkdMRU5CUVZNc1EwRkJReXhSUVVGV0xFTkJRVzFDTEdOQlFXNUNPMDFCUkVrc1EwRkVSenROUVVkVUxFdEJRVUVzUlVGQlR5eFRRVUZCTzJWQlEwd3NRMEZCUVN4RFFVRkZMRTFCUVVZc1EwRkJVeXhEUVVGRExGZEJRVllzUTBGQmMwSXNZMEZCZEVJN1RVRkVTeXhEUVVoRk8wdEJVR3RDTzBsQllUZENMR1ZCUVVFc1JVRkJhVUlzU1VGaVdUdEpRV00zUWl4TlFVRkJMRVZCUVZFc1owSkJaSEZDTzBkQlFTOUNPMFZCYVVKQkxFTkJRVU1zVTBGQlFUdEJRVU5ETEZGQlFVRTdTVUZCUVN4VlFVRkJMRWRCUVdFc1QwRkJRU3hEUVVGUkxGbEJRVkk3U1VGRFlpeGhRVUZCTEVkQlFXZENMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU03U1VGRGFFTXNRMEZCUVN4RFFVRkZMR0ZCUVVZc1EwRkJaMElzUTBGQlF5eExRVUZxUWl4RFFVRjFRaXhUUVVGRExFTkJRVVE3TzBGQlJYSkNPMDFCUlVFc1ZVRkJRU3hEUVVGWExFTkJRVU1zVTBGQlFUczdRVUZGVmp0UlFVVkJMRU5CUVVFc1EwRkJSU3huUWtGQlJpeERRVUZ0UWl4RFFVRkRMRXRCUVhCQ0xFTkJRMFU3VlVGQlFTeFRRVUZCTEVWQlFWY3NVMEZCUXl4TFFVRkVMRVZCUVZFc1UwRkJVaXhGUVVGdFFpeFJRVUZ1UWl4RlFVRTJRaXhSUVVFM1FpeEZRVUYxUXl4WFFVRjJRenRaUVVOVUxHRkJRV0VzUTBGQlF5eEpRVUZrTEVOQlFVRTdWVUZFVXl4RFFVRllPMVZCUjBFc1ZVRkJRU3hGUVVGWkxGTkJRVU1zUzBGQlJDeEZRVUZSTEZOQlFWSXNSVUZCYlVJc1VVRkJia0lzUlVGQk5rSXNVVUZCTjBJc1JVRkJkVU1zVjBGQmRrTTdXVUZEVml4aFFVRmhMRU5CUVVNc1NVRkJaQ3hEUVVGQk8xVkJSRlVzUTBGSVdqdFRRVVJHTzAxQlNsVXNRMEZCUkN4RFFVRllMRVZCV1Vjc1IwRmFTRHRKUVVweFFpeERRVUYyUWp0RlFVaEVMRU5CUVVRc1EwRnpRa01zUTBGQlF5eEpRWFJDUml4RFFYTkNUeXhKUVhSQ1VDeEZRVzVDUmpzN08wRkJORU5CTEVsQlFVY3NRMEZCUXl4RFFVRkJMRU5CUVVVc1YwRkJSaXhEUVVGakxFTkJRVU1zVFVGQmFFSXNRMEZCU0R0RlFVTkZMRkZCUVVFc1IwRkJWeXhQUVVGQkxFTkJRVkVzVlVGQlVqdEZRVVZZTEVOQlFVRXNRMEZCUlN4WFFVRkdMRU5CUVdNc1EwRkJReXhSUVVGbUxFTkJRWGRDTzBsQlEzUkNMRTFCUVVFc1JVRkJVU3hEUVVSak8wZEJRWGhDTEVWQlNFWWlmUT09XG4iXX0=
},{"jquery":3,"magnificPopup":4,"svg4everybody":5,"touchswipe":2,"wookmark":6}],2:[function(require,module,exports){
(function (global){

; $ = global.$ = require("/vagrant/public/themes/source_intranet/node_modules/jquery/dist/jquery.min.js");
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.14
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers.
 *    				- Add 'hold' gesture
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 * $Date: 2015-1-10 (Wed, 1 October 2015) $
 * $version 1.6.10    - Added PR from beatspace to fix tap events
 * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
 *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
 * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
 *
 * $Date: 2015-12-18 (Fri, 18 December 2015) $
 * $version 1.6.13    - Added PRs
 *                    - Fixed #267 allowPageScroll not working correctly
 * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
 * $version 1.6.15    - More bug fixes
 */

/**
 * See (http://jquery.com/).
 * @name $
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */


(function(factory) {
  if (typeof define === 'function' && define.amd && define.amd.jQuery) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS Module
    factory(__browserify_shim_require__("jquery"));
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function($) {
  "use strict";

  //Constants
  var VERSION = "1.6.15",
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out",

    NONE = "none",
    AUTO = "auto",

    SWIPE = "swipe",
    PINCH = "pinch",
    TAP = "tap",
    DOUBLE_TAP = "doubletap",
    LONG_TAP = "longtap",
    HOLD = "hold",

    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",

    ALL_FINGERS = "all",

    DOUBLE_TAP_THRESHOLD = 10,

    PHASE_START = "start",
    PHASE_MOVE = "move",
    PHASE_END = "end",
    PHASE_CANCEL = "cancel",

    SUPPORTS_TOUCH = 'ontouchstart' in window,

    SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,

    SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,

    PLUGIN_NS = 'TouchSwipe';



  /**
  * The default configuration, and available options to configure touch swipe with.
  * You can set the default values by updating any of the properties prior to instantiation.
  * @name $.fn.swipe.defaults
  * @namespace
  * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
  * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe.
  * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
  * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch.
  * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
  * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release.
  * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
  * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
  * @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
  * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
  * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
  * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
  * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
  * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
  * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
  * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
  * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
  * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not.
  * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
  * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
  * @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
  * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
  * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
  * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
  									<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
  									<code>"none"</code> : the page will not scroll when user swipes. <br/>
  									<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
  									<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
  * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices.
  * @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements.
  * @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers.

  */
  var defaults = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null, //Deprecated since 1.6.2
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "label, button, input, select, textarea, a, .noSwipe",
    preventDefaultEvents: true
  };



  /**
   * Applies TouchSwipe behaviour to one or more jQuery objects.
   * The TouchSwipe plugin can be instantiated via this method, or methods within
   * TouchSwipe can be executed via this method as per jQuery plugin architecture.
   * An existing plugin can have its options changed simply by re calling .swipe(options)
   * @see TouchSwipe
   * @class
   * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
   * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
   * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the
   * configuration properties defined in the object. See TouchSwipe
   *
   */
  $.fn.swipe = function(method) {
    var $this = $(this),
      plugin = $this.data(PLUGIN_NS);

    //Check if we are already instantiated and trying to execute a method
    if (plugin && typeof method === 'string') {
      if (plugin[method]) {
        return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.swipe');
      }
    }

    //Else update existing plugin with new options hash
    else if (plugin && typeof method === 'object') {
      plugin['option'].apply(this, arguments);
    }

    //Else not instantiated and trying to pass init object (or nothing)
    else if (!plugin && (typeof method === 'object' || !method)) {
      return init.apply(this, arguments);
    }

    return $this;
  };

  /**
   * The version of the plugin
   * @readonly
   */
  $.fn.swipe.version = VERSION;



  //Expose our defaults so a user could override the plugin defaults
  $.fn.swipe.defaults = defaults;

  /**
   * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
   * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
   * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
   * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
   */
  $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  };

  /**
   * The direction constants that are passed to the event handlers.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
   * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
   * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
   * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
   * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
   * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
   */
  $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN: IN,
    OUT: OUT
  };

  /**
   * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
   * These properties are read only
   * @namespace
   * @readonly
   * @see $.fn.swipe.defaults#allowPageScroll
   * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
   * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
   * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
   * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
   */
  $.fn.swipe.pageScroll = {
    NONE: NONE,
    HORIZONTAL: HORIZONTAL,
    VERTICAL: VERTICAL,
    AUTO: AUTO
  };

  /**
   * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the
   * options object, as well as the value of the <code>fingers</code> event property.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @see $.fn.swipe.defaults#fingers
   * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
   * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
   * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
   * @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
   * @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
   * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
   */
  $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: ALL_FINGERS
  };

  /**
   * Initialise the plugin for each DOM element matched
   * This creates a new instance of the main TouchSwipe class for each DOM element, and then
   * saves a reference to that instance in the elements data property.
   * @internal
   */
  function init(options) {
    //Prep and extend the options
    if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
      options.allowPageScroll = NONE;
    }

    //Check for deprecated options
    //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
    if (options.click !== undefined && options.tap === undefined) {
      options.tap = options.click;
    }

    if (!options) {
      options = {};
    }

    //pass empty object so we dont modify the defaults
    options = $.extend({}, $.fn.swipe.defaults, options);

    //For each element instantiate the plugin
    return this.each(function() {
      var $this = $(this);

      //Check we havent already initialised the plugin
      var plugin = $this.data(PLUGIN_NS);

      if (!plugin) {
        plugin = new TouchSwipe(this, options);
        $this.data(PLUGIN_NS, plugin);
      }
    });
  }

  /**
   * Main TouchSwipe Plugin Class.
   * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
   * @private
   * @name TouchSwipe
   * @param {DOMNode} element The HTML DOM object to apply to plugin to
   * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
   * @see $.fh.swipe.defaults
   * @see $.fh.swipe
   * @class
   */
  function TouchSwipe(element, options) {

    //take a local/instacne level copy of the options - should make it this.options really...
    var options = $.extend({}, options);

    var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
      START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
      MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
      END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
      LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //we manually detect leave on touch devices, so null event here
      CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



    //touch properties
    var distance = 0,
      direction = null,
      currentDirection = null,
      duration = 0,
      startTouchesDistance = 0,
      endTouchesDistance = 0,
      pinchZoom = 1,
      pinchDistance = 0,
      pinchDirection = 0,
      maximumsMap = null;



    //jQuery wrapped element for this instance
    var $element = $(element);

    //Current phase of th touch cycle
    var phase = "start";

    // the current number of fingers being used.
    var fingerCount = 0;

    //track mouse points / delta
    var fingerData = {};

    //track times
    var startTime = 0,
      endTime = 0,
      previousTouchEndTime = 0,
      fingerCountAtRelease = 0,
      doubleTapStartTime = 0;

    //Timeouts
    var singleTapTimeout = null,
      holdTimeout = null;

    // Add gestures to all swipable areas if supported
    try {
      $element.bind(START_EV, touchStart);
      $element.bind(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
    }

    //
    //Public methods
    //

    /**
     * re-enables the swipe plugin with the previous configuration
     * @function
     * @name $.fn.swipe#enable
     * @return {DOMNode} The Dom element that was registered with TouchSwipe
     * @example $("#element").swipe("enable");
     */
    this.enable = function() {
      $element.bind(START_EV, touchStart);
      $element.bind(CANCEL_EV, touchCancel);
      return $element;
    };

    /**
     * disables the swipe plugin
     * @function
     * @name $.fn.swipe#disable
     * @return {DOMNode} The Dom element that is now registered with TouchSwipe
     * @example $("#element").swipe("disable");
     */
    this.disable = function() {
      removeListeners();
      return $element;
    };

    /**
     * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
     * @function
     * @name $.fn.swipe#destroy
     * @example $("#element").swipe("destroy");
     */
    this.destroy = function() {
      removeListeners();
      $element.data(PLUGIN_NS, null);
      $element = null;
    };


    /**
     * Allows run time updating of the swipe configuration options.
     * @function
     * @name $.fn.swipe#option
     * @param {String} property The option property to get or set, or a has of multiple options to set
     * @param {Object} [value] The value to set the property to
     * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
     * @example $("#element").swipe("option", "threshold"); // return the threshold
     * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
     * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
     * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
     * @example $("#element").swipe("option"); // Return the current options hash
     * @see $.fn.swipe.defaults
     *
     */
    this.option = function(property, value) {

      if (typeof property === 'object') {
        options = $.extend(options, property);
      } else if (options[property] !== undefined) {
        if (value === undefined) {
          return options[property];
        } else {
          options[property] = value;
        }
      } else if (!property) {
        return options;
      } else {
        $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
      }

      return null;
    }



    //
    // Private methods
    //

    //
    // EVENTS
    //
    /**
     * Event handler for a touch start event.
     * Stops the default click event from triggering and stores where we touched
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchStart(jqEvent) {

      //If we already in a touch event (a finger already in use) then ignore subsequent ones..
      if (getTouchInProgress()) {
        return;
      }

      //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
      if ($(jqEvent.target).closest(options.excludedElements, $element).length > 0) {
        return;
      }

      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      var ret,
        touches = event.touches,
        evt = touches ? touches[0] : event;

      phase = PHASE_START;

      //If we support touches, get the finger count
      if (touches) {
        // get the total number of fingers touching the screen
        fingerCount = touches.length;
      }
      //Else this is the desktop, so stop the browser from dragging content
      else if (options.preventDefaultEvents !== false) {
        jqEvent.preventDefault(); //call this on jq event so we are cross browser
      }

      //clear vars..
      distance = 0;
      direction = null;
      currentDirection=null;
      pinchDirection = null;
      duration = 0;
      startTouchesDistance = 0;
      endTouchesDistance = 0;
      pinchZoom = 1;
      pinchDistance = 0;
      maximumsMap = createMaximumsData();
      cancelMultiFingerRelease();

      //Create the default finger data
      createFingerData(0, evt);

      // check the number of fingers is what we are looking for, or we are capturing pinches
      if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
        // get the coordinates of the touch
        startTime = getTimeStamp();

        if (fingerCount == 2) {
          //Keep track of the initial pinch distance, so we can calculate the diff later
          //Store second finger data as start
          createFingerData(1, touches[1]);
          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        }

        if (options.swipeStatus || options.pinchStatus) {
          ret = triggerHandler(event, phase);
        }
      } else {
        //A touch with more or less than the fingers we are looking for, so cancel
        ret = false;
      }

      //If we have a return value from the users handler, then return and cancel
      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
        return ret;
      } else {
        if (options.hold) {
          holdTimeout = setTimeout($.proxy(function() {
            //Trigger the event
            $element.trigger('hold', [event.target]);
            //Fire the callback
            if (options.hold) {
              ret = options.hold.call($element, event, event.target);
            }
          }, this), options.longTapThreshold);
        }

        setTouchInProgress(true);
      }

      return null;
    };



    /**
     * Event handler for a touch move event.
     * If we change fingers during move, then cancel the event
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchMove(jqEvent) {

      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
      if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
        return;

      var ret,
        touches = event.touches,
        evt = touches ? touches[0] : event;


      //Update the  finger data
      var currentFinger = updateFingerData(evt);
      endTime = getTimeStamp();

      if (touches) {
        fingerCount = touches.length;
      }

      if (options.hold)
        clearTimeout(holdTimeout);

      phase = PHASE_MOVE;

      //If we have 2 fingers get Touches distance as well
      if (fingerCount == 2) {

        //Keep track of the initial pinch distance, so we can calculate the diff later
        //We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
        if (startTouchesDistance == 0) {
          //Create second finger if this is the first time...
          createFingerData(1, touches[1]);

          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        } else {
          //Else just update the second finger
          updateFingerData(touches[1]);

          endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
          pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
        }

        pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
        pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
      }

      if ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches()) {

        //The overall direction of the swipe. From start to now.
        direction = calculateDirection(currentFinger.start, currentFinger.end);

        //The immediate direction of the swipe, direction between the last movement and this one.
        currentDirection = calculateDirection(currentFinger.last, currentFinger.end);

        //Check if we need to prevent default event (page scroll / pinch zoom) or not
        validateDefaultEvent(jqEvent, currentDirection);

        //Distance and duration are all off the main finger
        distance = calculateDistance(currentFinger.start, currentFinger.end);
        duration = calculateDuration();

        //Cache the maximum distance we made in this direction
        setMaxDistance(direction, distance);

        //Trigger status handler
        ret = triggerHandler(event, phase);


        //If we trigger end events when threshold are met, or trigger events when touch leaves element
        if (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {

          var inBounds = true;

          //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
          if (options.triggerOnTouchLeave) {
            var bounds = getbounds(this);
            inBounds = isInBounds(currentFinger.end, bounds);
          }

          //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
          if (!options.triggerOnTouchEnd && inBounds) {
            phase = getNextPhase(PHASE_MOVE);
          }
          //We end if out of bounds here, so set current phase to END, and check if its modified
          else if (options.triggerOnTouchLeave && !inBounds) {
            phase = getNextPhase(PHASE_END);
          }

          if (phase == PHASE_CANCEL || phase == PHASE_END) {
            triggerHandler(event, phase);
          }
        }
      } else {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }

      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }
    }




    /**
     * Event handler for a touch end event.
     * Calculate the direction and trigger events
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchEnd(jqEvent) {
      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
        touches = event.touches;

      //If we are still in a touch with the device wait a fraction and see if the other finger comes up
      //if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
      if (touches) {
        if (touches.length && !inMultiFingerRelease()) {
          startMultiFingerRelease(event);
          return true;
        } else if (touches.length && inMultiFingerRelease()) {
          return true;
        }
      }

      //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
      //This is used to allow 2 fingers to release fractionally after each other, whilst maintaining the event as containing 2 fingers, not 1
      if (inMultiFingerRelease()) {
        fingerCount = fingerCountAtRelease;
      }

      //Set end of swipe
      endTime = getTimeStamp();

      //Get duration incase move was never fired
      duration = calculateDuration();

      //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
      if (didSwipeBackToCancel() || !validateSwipeDistance()) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      } else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
        //call this on jq event so we are cross browser
        if (options.preventDefaultEvents !== false) {
          jqEvent.preventDefault();
        }
        phase = PHASE_END;
        triggerHandler(event, phase);
      }
      //Special cases - A tap should always fire on touch end regardless,
      //So here we manually trigger the tap end handler by itself
      //We dont run trigger handler as it will re-trigger events that may have fired already
      else if (!options.triggerOnTouchEnd && hasTap()) {
        //Trigger the pinch events...
        phase = PHASE_END;
        triggerHandlerForGesture(event, phase, TAP);
      } else if (phase === PHASE_MOVE) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }

      setTouchInProgress(false);

      return null;
    }



    /**
     * Event handler for a touch cancel event.
     * Clears current vars
     * @inner
     */
    function touchCancel() {
      // reset the variables back to default values
      fingerCount = 0;
      endTime = 0;
      startTime = 0;
      startTouchesDistance = 0;
      endTouchesDistance = 0;
      pinchZoom = 1;

      //If we were in progress of tracking a possible multi touch end, then re set it.
      cancelMultiFingerRelease();

      setTouchInProgress(false);
    }


    /**
     * Event handler for a touch leave event.
     * This is only triggered on desktops, in touch we work this out manually
     * as the touchleave event is not supported in webkit
     * @inner
     */
    function touchLeave(jqEvent) {
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we have the trigger on leave property set....
      if (options.triggerOnTouchLeave) {
        phase = getNextPhase(PHASE_END);
        triggerHandler(event, phase);
      }
    }

    /**
     * Removes all listeners that were associated with the plugin
     * @inner
     */
    function removeListeners() {
      $element.unbind(START_EV, touchStart);
      $element.unbind(CANCEL_EV, touchCancel);
      $element.unbind(MOVE_EV, touchMove);
      $element.unbind(END_EV, touchEnd);

      //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
      if (LEAVE_EV) {
        $element.unbind(LEAVE_EV, touchLeave);
      }

      setTouchInProgress(false);
    }


    /**
     * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
     */
    function getNextPhase(currentPhase) {

      var nextPhase = currentPhase;

      // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
      var validTime = validateSwipeTime();
      var validDistance = validateSwipeDistance();
      var didCancel = didSwipeBackToCancel();

      //If we have exceeded our time, then cancel
      if (!validTime || didCancel) {
        nextPhase = PHASE_CANCEL;
      }
      //Else if we are moving, and have reached distance then end
      else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
        nextPhase = PHASE_END;
      }
      //Else if we have ended by leaving and didn't reach distance, then cancel
      else if (!validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave) {
        nextPhase = PHASE_CANCEL;
      }

      return nextPhase;
    }


    /**
     * Trigger the relevant event handler
     * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
     * @param {object} event the original event object
     * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
     * @inner
     */
    function triggerHandler(event, phase) {



      var ret,
        touches = event.touches;

      // SWIPE GESTURES
      if (didSwipe() || hasSwipes()) {
          ret = triggerHandlerForGesture(event, phase, SWIPE);
      }

      // PINCH GESTURES (if the above didn't cancel)
      if ((didPinch() || hasPinches()) && ret !== false) {
          ret = triggerHandlerForGesture(event, phase, PINCH);
      }

      // CLICK / TAP (if the above didn't cancel)
      if (didDoubleTap() && ret !== false) {
        //Trigger the tap events...
        ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
      }

      // CLICK / TAP (if the above didn't cancel)
      else if (didLongTap() && ret !== false) {
        //Trigger the tap events...
        ret = triggerHandlerForGesture(event, phase, LONG_TAP);
      }

      // CLICK / TAP (if the above didn't cancel)
      else if (didTap() && ret !== false) {
        //Trigger the tap event..
        ret = triggerHandlerForGesture(event, phase, TAP);
      }

      // If we are cancelling the gesture, then manually trigger the reset handler
      if (phase === PHASE_CANCEL) {
        if (hasSwipes()) {
          ret = triggerHandlerForGesture(event, phase, SWIPE);
        }

        if (hasPinches()) {
          ret = triggerHandlerForGesture(event, phase, PINCH);
        }
        touchCancel(event);
      }

      // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
      if (phase === PHASE_END) {
        //If we support touch, then check that all fingers are off before we cancel
        if (touches) {
          if (!touches.length) {
            touchCancel(event);
          }
        } else {
          touchCancel(event);
        }
      }

      return ret;
    }



    /**
     * Trigger the relevant event handler
     * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
     * @param {object} event the original event object
     * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
     * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
     * @return Boolean False, to indicate that the event should stop propagation, or void.
     * @inner
     */
    function triggerHandlerForGesture(event, phase, gesture) {

      var ret;

      //SWIPES....
      if (gesture == SWIPE) {
        //Trigger status every time..
        $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]);

        if (options.swipeStatus) {
          ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection);
          //If the status cancels, then dont run the subsequent event handlers..
          if (ret === false) return false;
        }

        if (phase == PHASE_END && validateSwipe()) {

          //Cancel any taps that were in progress...
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);

          $element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

          if (options.swipe) {
            ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
            //If the status cancels, then dont run the subsequent event handlers..
            if (ret === false) return false;
          }

          //trigger direction specific event handlers
          switch (direction) {
            case LEFT:
              $element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeLeft) {
                ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;

            case RIGHT:
              $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeRight) {
                ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;

            case UP:
              $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeUp) {
                ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;

            case DOWN:
              $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeDown) {
                ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;
          }
        }
      }


      //PINCHES....
      if (gesture == PINCH) {
        $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

        if (options.pinchStatus) {
          ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
          //If the status cancels, then dont run the subsequent event handlers..
          if (ret === false) return false;
        }

        if (phase == PHASE_END && validatePinch()) {

          switch (pinchDirection) {
            case IN:
              $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

              if (options.pinchIn) {
                ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
              }
              break;

            case OUT:
              $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

              if (options.pinchOut) {
                ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
              }
              break;
          }
        }
      }

      if (gesture == TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {

          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);

          //If we are also looking for doubelTaps, wait incase this is one...
          if (hasDoubleTap() && !inDoubleTap()) {
            doubleTapStartTime = getTimeStamp();

            //Now wait for the double tap timeout, and trigger this single tap
            //if its not cancelled by a double tap
            singleTapTimeout = setTimeout($.proxy(function() {
              doubleTapStartTime = null;
              $element.trigger('tap', [event.target]);

              if (options.tap) {
                ret = options.tap.call($element, event, event.target);
              }
            }, this), options.doubleTapThreshold);

          } else {
            doubleTapStartTime = null;
            $element.trigger('tap', [event.target]);
            if (options.tap) {
              ret = options.tap.call($element, event, event.target);
            }
          }
        }
      } else if (gesture == DOUBLE_TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);
          doubleTapStartTime = null;
          $element.trigger('doubletap', [event.target]);

          if (options.doubleTap) {
            ret = options.doubleTap.call($element, event, event.target);
          }
        }
      } else if (gesture == LONG_TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          doubleTapStartTime = null;

          $element.trigger('longtap', [event.target]);
          if (options.longTap) {
            ret = options.longTap.call($element, event, event.target);
          }
        }
      }

      return ret;
    }


    //
    // GESTURE VALIDATION
    //

    /**
     * Checks the user has swipe far enough
     * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
     * If no threshold was set, then we return true.
     * @inner
     */
    function validateSwipeDistance() {
      var valid = true;
      //If we made it past the min swipe distance..
      if (options.threshold !== null) {
        valid = distance >= options.threshold;
      }

      return valid;
    }

    /**
     * Checks the user has swiped back to cancel.
     * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
     * If no cancelThreshold was set, then we return true.
     * @inner
     */
    function didSwipeBackToCancel() {
      var cancelled = false;
      if (options.cancelThreshold !== null && direction !== null) {
        cancelled = (getMaxDistance(direction) - distance) >= options.cancelThreshold;
      }

      return cancelled;
    }

    /**
     * Checks the user has pinched far enough
     * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
     * If no threshold was set, then we return true.
     * @inner
     */
    function validatePinchDistance() {
      if (options.pinchThreshold !== null) {
        return pinchDistance >= options.pinchThreshold;
      }
      return true;
    }

    /**
     * Checks that the time taken to swipe meets the minimum / maximum requirements
     * @return Boolean
     * @inner
     */
    function validateSwipeTime() {
      var result;
      //If no time set, then return true
      if (options.maxTimeThreshold) {
        if (duration >= options.maxTimeThreshold) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = true;
      }

      return result;
    }



    /**
     * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
     * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
     * @param {object} jqEvent The normalised jQuery representation of the event object.
     * @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
     * @see $.fn.swipe.directions
     * @inner
     */
    function validateDefaultEvent(jqEvent, direction) {

      //If the option is set, allways allow the event to bubble up (let user handle weirdness)
      if (options.preventDefaultEvents === false) {
        return;
      }

      if (options.allowPageScroll === NONE) {
        jqEvent.preventDefault();
      } else {
        var auto = options.allowPageScroll === AUTO;

        switch (direction) {
          case LEFT:
            if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
              jqEvent.preventDefault();
            }
            break;

          case RIGHT:
            if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
              jqEvent.preventDefault();
            }
            break;

          case UP:
            if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
              jqEvent.preventDefault();
            }
            break;

          case DOWN:
            if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
              jqEvent.preventDefault();
            }
            break;
        }
      }

    }


    // PINCHES
    /**
     * Returns true of the current pinch meets the thresholds
     * @return Boolean
     * @inner
     */
    function validatePinch() {
      var hasCorrectFingerCount = validateFingers();
      var hasEndPoint = validateEndPoint();
      var hasCorrectDistance = validatePinchDistance();
      return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;

    }

    /**
     * Returns true if any Pinch events have been registered
     * @return Boolean
     * @inner
     */
    function hasPinches() {
      //Enure we dont return 0 or null for false values
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }

    /**
     * Returns true if we are detecting pinches, and have one
     * @return Boolean
     * @inner
     */
    function didPinch() {
      //Enure we dont return 0 or null for false values
      return !!(validatePinch() && hasPinches());
    }




    // SWIPES
    /**
     * Returns true if the current swipe meets the thresholds
     * @return Boolean
     * @inner
     */
    function validateSwipe() {
      //Check validity of swipe
      var hasValidTime = validateSwipeTime();
      var hasValidDistance = validateSwipeDistance();
      var hasCorrectFingerCount = validateFingers();
      var hasEndPoint = validateEndPoint();
      var didCancel = didSwipeBackToCancel();

      // if the user swiped more than the minimum length, perform the appropriate action
      // hasValidDistance is null when no distance is set
      var valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;

      return valid;
    }

    /**
     * Returns true if any Swipe events have been registered
     * @return Boolean
     * @inner
     */
    function hasSwipes() {
      //Enure we dont return 0 or null for false values
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }


    /**
     * Returns true if we are detecting swipes and have one
     * @return Boolean
     * @inner
     */
    function didSwipe() {
      //Enure we dont return 0 or null for false values
      return !!(validateSwipe() && hasSwipes());
    }

    /**
     * Returns true if we have matched the number of fingers we are looking for
     * @return Boolean
     * @inner
     */
    function validateFingers() {
      //The number of fingers we want were matched, or on desktop we ignore
      return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
    }

    /**
     * Returns true if we have an end point for the swipe
     * @return Boolean
     * @inner
     */
    function validateEndPoint() {
      //We have an end value for the finger
      return fingerData[0].end.x !== 0;
    }

    // TAP / CLICK
    /**
     * Returns true if a click / tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasTap() {
      //Enure we dont return 0 or null for false values
      return !!(options.tap);
    }

    /**
     * Returns true if a double tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasDoubleTap() {
      //Enure we dont return 0 or null for false values
      return !!(options.doubleTap);
    }

    /**
     * Returns true if any long tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasLongTap() {
      //Enure we dont return 0 or null for false values
      return !!(options.longTap);
    }

    /**
     * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
     * @return Boolean
     * @inner
     */
    function validateDoubleTap() {
      if (doubleTapStartTime == null) {
        return false;
      }
      var now = getTimeStamp();
      return (hasDoubleTap() && ((now - doubleTapStartTime) <= options.doubleTapThreshold));
    }

    /**
     * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
     * @return Boolean
     * @inner
     */
    function inDoubleTap() {
      return validateDoubleTap();
    }


    /**
     * Returns true if we have a valid tap
     * @return Boolean
     * @inner
     */
    function validateTap() {
      return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
    }

    /**
     * Returns true if we have a valid long tap
     * @return Boolean
     * @inner
     */
    function validateLongTap() {
      //slight threshold on moving finger
      return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD));
    }

    /**
     * Returns true if we are detecting taps and have one
     * @return Boolean
     * @inner
     */
    function didTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateTap() && hasTap());
    }


    /**
     * Returns true if we are detecting double taps and have one
     * @return Boolean
     * @inner
     */
    function didDoubleTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateDoubleTap() && hasDoubleTap());
    }

    /**
     * Returns true if we are detecting long taps and have one
     * @return Boolean
     * @inner
     */
    function didLongTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateLongTap() && hasLongTap());
    }




    // MULTI FINGER TOUCH
    /**
     * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
     * @inner
     */
    function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp();
      fingerCountAtRelease = event.touches.length + 1;
    }

    /**
     * Cancels the tracking of time between 2 finger releases, and resets counters
     * @inner
     */
    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0;
      fingerCountAtRelease = 0;
    }

    /**
     * Checks if we are in the threshold between 2 fingers being released
     * @return Boolean
     * @inner
     */
    function inMultiFingerRelease() {

      var withinThreshold = false;

      if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime
        if (diff <= options.fingerReleaseThreshold) {
          withinThreshold = true;
        }
      }

      return withinThreshold;
    }


    /**
     * gets a data flag to indicate that a touch is in progress
     * @return Boolean
     * @inner
     */
    function getTouchInProgress() {
      //strict equality to ensure only true and false are returned
      return !!($element.data(PLUGIN_NS + '_intouch') === true);
    }

    /**
     * Sets a data flag to indicate that a touch is in progress
     * @param {boolean} val The value to set the property to
     * @inner
     */
    function setTouchInProgress(val) {

      //If destroy is called in an event handler, we have no el, and we have already cleaned up, so return.
      if(!$element) { return; }

      //Add or remove event listeners depending on touch status
      if (val === true) {
        $element.bind(MOVE_EV, touchMove);
        $element.bind(END_EV, touchEnd);

        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if (LEAVE_EV) {
          $element.bind(LEAVE_EV, touchLeave);
        }
      } else {

        $element.unbind(MOVE_EV, touchMove, false);
        $element.unbind(END_EV, touchEnd, false);

        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if (LEAVE_EV) {
          $element.unbind(LEAVE_EV, touchLeave, false);
        }
      }


      //strict equality to ensure only true and false can update the value
      $element.data(PLUGIN_NS + '_intouch', val === true);
    }


    /**
     * Creates the finger data for the touch/finger in the event object.
     * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
     * @param {object} evt The event object containing finger data
     * @return finger data object
     * @inner
     */
    function createFingerData(id, evt) {
      var f = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX;
      f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY;
      fingerData[id] = f;
      return f;
    }

    /**
     * Updates the finger data for a particular event object
     * @param {object} evt The event object containing the touch/finger data to upadte
     * @return a finger data object.
     * @inner
     */
    function updateFingerData(evt) {
      var id = evt.identifier !== undefined ? evt.identifier : 0;
      var f = getFingerData(id);

      if (f === null) {
        f = createFingerData(id, evt);
      }

      f.last.x = f.end.x;
      f.last.y = f.end.y;

      f.end.x = evt.pageX || evt.clientX;
      f.end.y = evt.pageY || evt.clientY;

      return f;
    }

    /**
     * Returns a finger data object by its event ID.
     * Each touch event has an identifier property, which is used
     * to track repeat touches
     * @param {int} id The unique id of the finger in the sequence of touch events.
     * @return a finger data object.
     * @inner
     */
    function getFingerData(id) {
      return fingerData[id] || null;
    }


    /**
     * Sets the maximum distance swiped in the given direction.
     * If the new value is lower than the current value, the max value is not changed.
     * @param {string}  direction The direction of the swipe
     * @param {int}  distance The distance of the swipe
     * @inner
     */
    function setMaxDistance(direction, distance) {
      distance = Math.max(distance, getMaxDistance(direction));
      maximumsMap[direction].distance = distance;
    }

    /**
     * gets the maximum distance swiped in the given direction.
     * @param {string}  direction The direction of the swipe
     * @return int  The distance of the swipe
     * @inner
     */
    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
      return undefined;
    }

    /**
     * Creats a map of directions to maximum swiped values.
     * @return Object A dictionary of maximum values, indexed by direction.
     * @inner
     */
    function createMaximumsData() {
      var maxData = {};
      maxData[LEFT] = createMaximumVO(LEFT);
      maxData[RIGHT] = createMaximumVO(RIGHT);
      maxData[UP] = createMaximumVO(UP);
      maxData[DOWN] = createMaximumVO(DOWN);

      return maxData;
    }

    /**
     * Creates a map maximum swiped values for a given swipe direction
     * @param {string} The direction that these values will be associated with
     * @return Object Maximum values
     * @inner
     */
    function createMaximumVO(dir) {
      return {
        direction: dir,
        distance: 0
      }
    }


    //
    // MATHS / UTILS
    //

    /**
     * Calculate the duration of the swipe
     * @return int
     * @inner
     */
    function calculateDuration() {
      return endTime - startTime;
    }

    /**
     * Calculate the distance between 2 touches (pinch)
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int;
     * @inner
     */
    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x);
      var diffY = Math.abs(startPoint.y - endPoint.y);

      return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }

    /**
     * Calculate the zoom factor between the start and end distances
     * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
     * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
     * @return float The zoom value from 0 to 1.
     * @inner
     */
    function calculatePinchZoom(startDistance, endDistance) {
      var percent = (endDistance / startDistance) * 1;
      return percent.toFixed(2);
    }


    /**
     * Returns the pinch direction, either IN or OUT for the given points
     * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
     * @see $.fn.swipe.directions
     * @inner
     */
    function calculatePinchDirection() {
      if (pinchZoom < 1) {
        return OUT;
      } else {
        return IN;
      }
    }


    /**
     * Calculate the length / distance of the swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int
     * @inner
     */
    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }

    /**
     * Calculate the angle of the swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int
     * @inner
     */
    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x;
      var y = endPoint.y - startPoint.y;
      var r = Math.atan2(y, x); //radians
      var angle = Math.round(r * 180 / Math.PI); //degrees

      //ensure value is positive
      if (angle < 0) {
        angle = 360 - Math.abs(angle);
      }

      return angle;
    }

    /**
     * Calculate the direction of the swipe
     * This will also call calculateAngle to get the latest angle of swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
     * @see $.fn.swipe.directions
     * @inner
     */
    function calculateDirection(startPoint, endPoint) {
      var angle = calculateAngle(startPoint, endPoint);

      if ((angle <= 45) && (angle >= 0)) {
        return LEFT;
      } else if ((angle <= 360) && (angle >= 315)) {
        return LEFT;
      } else if ((angle >= 135) && (angle <= 225)) {
        return RIGHT;
      } else if ((angle > 45) && (angle < 135)) {
        return DOWN;
      } else {
        return UP;
      }
    }


    /**
     * Returns a MS time stamp of the current time
     * @return int
     * @inner
     */
    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }



    /**
     * Returns a bounds object with left, right, top and bottom properties for the element specified.
     * @param {DomNode} The DOM node to get the bounds for.
     */
    function getbounds(el) {
      el = $(el);
      var offset = el.offset();

      var bounds = {
        left: offset.left,
        right: offset.left + el.outerWidth(),
        top: offset.top,
        bottom: offset.top + el.outerHeight()
      }

      return bounds;
    }


    /**
     * Checks if the point object is in the bounds object.
     * @param {object} point A point object.
     * @param {int} point.x The x value of the point.
     * @param {int} point.y The x value of the point.
     * @param {object} bounds The bounds object to test
     * @param {int} bounds.left The leftmost value
     * @param {int} bounds.right The righttmost value
     * @param {int} bounds.top The topmost value
     * @param {int} bounds.bottom The bottommost value
     */
    function isInBounds(point, bounds) {
      return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
    };


  }




  /**
   * A catch all handler that is triggered for all swipe directions.
   * @name $.fn.swipe#swipe
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */




  /**
   * A handler that is triggered for "left" swipes.
   * @name $.fn.swipe#swipeLeft
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "right" swipes.
   * @name $.fn.swipe#swipeRight
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "up" swipes.
   * @name $.fn.swipe#swipeUp
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "down" swipes.
   * @name $.fn.swipe#swipeDown
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
   * This is triggered regardless of swipe thresholds.
   * @name $.fn.swipe#swipeStatus
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
   * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler triggered for pinch in events.
   * @name $.fn.swipe#pinchIn
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A handler triggered for pinch out events.
   * @name $.fn.swipe#pinchOut
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
   * @name $.fn.swipe#pinchStatus
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A click handler triggered when a user simply clicks, rather than swipes on an element.
   * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
   * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
   * Use the <code>tap</code> event instead.
   * @name $.fn.swipe#click
   * @event
   * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
   * @name $.fn.swipe#tap
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A double tap handler triggered when a user double clicks or taps on an element.
   * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property.
   * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
   * as the script needs to check if its a double tap.
   * @name $.fn.swipe#doubleTap
   * @see  $.fn.swipe.defaults#doubleTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
   * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
   * @name $.fn.swipe#longTap
   * @see  $.fn.swipe.defaults#longTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A hold tap handler triggered as soon as the longTapThreshold is reached
   * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
   * @name $.fn.swipe#hold
   * @see  $.fn.swipe.defaults#longTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

}));

; browserify_shim__define__module__export__(typeof touchswipe != "undefined" ? touchswipe : window.touchswipe);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9qcXVlcnktdG91Y2hzd2lwZS9qcXVlcnkudG91Y2hTd2lwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIlxuOyAkID0gZ2xvYmFsLiQgPSByZXF1aXJlKFwiL3ZhZ3JhbnQvcHVibGljL3RoZW1lcy9zb3VyY2VfaW50cmFuZXQvbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanNcIik7XG47IHZhciBfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX189cmVxdWlyZTsoZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBleHBvcnRzLCByZXF1aXJlLCBkZWZpbmUsIGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKSB7XG4vKlxuICogQGZpbGVPdmVydmlldyBUb3VjaFN3aXBlIC0galF1ZXJ5IFBsdWdpblxuICogQHZlcnNpb24gMS42LjE0XG4gKlxuICogQGF1dGhvciBNYXR0IEJyeXNvbiBodHRwOi8vd3d3LmdpdGh1Yi5jb20vbWF0dGJyeXNvblxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJyeXNvbi9Ub3VjaFN3aXBlLUpxdWVyeS1QbHVnaW5cbiAqIEBzZWUgaHR0cDovL2xhYnMucmFtcGludGVyYWN0aXZlLmNvLnVrL3RvdWNoU3dpcGUvXG4gKiBAc2VlIGh0dHA6Ly9wbHVnaW5zLmpxdWVyeS5jb20vcHJvamVjdC90b3VjaFN3aXBlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTUgTWF0dCBCcnlzb25cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBvciBHUEwgVmVyc2lvbiAyIGxpY2Vuc2VzLlxuICpcbiAqL1xuXG4vKlxuICpcbiAqIENoYW5nZWxvZ1xuICogJERhdGU6IDIwMTAtMTItMTIgKFdlZCwgMTIgRGVjIDIwMTApICRcbiAqICR2ZXJzaW9uOiAxLjAuMFxuICogJHZlcnNpb246IDEuMC4xIC0gcmVtb3ZlZCBtdWx0aWJ5dGUgY29tbWVudHNcbiAqXG4gKiAkRGF0ZTogMjAxMS0yMS0wMiAoTW9uLCAyMSBGZWIgMjAxMSkgJFxuICogJHZlcnNpb246IDEuMS4wIFx0LSBhZGRlZCBhbGxvd1BhZ2VTY3JvbGwgcHJvcGVydHkgdG8gYWxsb3cgc3dpcGluZyBhbmQgc2Nyb2xsaW5nIG9mIHBhZ2VcbiAqXHRcdFx0XHRcdC0gY2hhbmdlZCBoYW5kbGVyIHNpZ25hdHVyZXMgc28gb25lIGhhbmRsZXIgY2FuIGJlIHVzZWQgZm9yIG11bHRpcGxlIGV2ZW50c1xuICogJERhdGU6IDIwMTEtMjMtMDIgKFdlZCwgMjMgRmViIDIwMTEpICRcbiAqICR2ZXJzaW9uOiAxLjIuMCBcdC0gYWRkZWQgY2xpY2sgaGFuZGxlci4gVGhpcyBpcyBmaXJlZCBpZiB0aGUgdXNlciBzaW1wbHkgY2xpY2tzIGFuZCBkb2VzIG5vdCBzd2lwZS4gVGhlIGV2ZW50IG9iamVjdCBhbmQgY2xpY2sgdGFyZ2V0IGFyZSBwYXNzZWQgdG8gaGFuZGxlci5cbiAqXHRcdFx0XHRcdC0gSWYgeW91IHVzZSB0aGUgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2pxdWVyeS11aS1mb3ItaXBhZC1hbmQtaXBob25lLyBwbHVnaW4sIHlvdSBjYW4gYWxzbyBhc3NpZ24galF1ZXJ5IG1vdXNlIGV2ZW50cyB0byBjaGlsZHJlbiBvZiBhIHRvdWNoU3dpcGUgb2JqZWN0LlxuICogJHZlcnNpb246IDEuMi4xIFx0LSByZW1vdmVkIGNvbnNvbGUgbG9nIVxuICpcbiAqICR2ZXJzaW9uOiAxLjIuMiBcdC0gRml4ZWQgYnVnIHdoZXJlIHNjb3BlIHdhcyBub3QgcHJlc2VydmVkIGluIGNhbGxiYWNrIG1ldGhvZHMuXG4gKlxuICogJERhdGU6IDIwMTEtMjgtMDQgKFRodXJzLCAyOCBBcHJpbCAyMDExKSAkXG4gKiAkdmVyc2lvbjogMS4yLjQgXHQtIENoYW5nZWQgbGljZW5jZSB0ZXJtcyB0byBiZSBNSVQgb3IgR1BMIGlubGluZSB3aXRoIGpRdWVyeS4gQWRkZWQgY2hlY2sgZm9yIHN1cHBvcnQgb2YgdG91Y2ggZXZlbnRzIHRvIHN0b3Agbm9uIGNvbXBhdGlibGUgYnJvd3NlcnMgZXJyb3JpbmcuXG4gKlxuICogJERhdGU6IDIwMTEtMjctMDkgKFR1ZXMsIDI3IFNlcHRlbWJlciAyMDExKSAkXG4gKiAkdmVyc2lvbjogMS4yLjUgXHQtIEFkZGVkIHN1cHBvcnQgZm9yIHRlc3Rpbmcgc3dpcGVzIHdpdGggbW91c2Ugb24gZGVza3RvcCBicm93c2VyICh0aGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2pvZWxoeSlcbiAqXG4gKiAkRGF0ZTogMjAxMi0xNC0wNSAoTW9uLCAxNCBNYXkgMjAxMikgJFxuICogJHZlcnNpb246IDEuMi42IFx0LSBBZGRlZCB0aW1lVGhyZXNob2xkIGJldHdlZW4gc3RhcnQgYW5kIGVuZCB0b3VjaCwgc28gdXNlciBjYW4gaWdub3JlIHNsb3cgc3dpcGVzICh0aGFua3MgdG8gTWFyayBDaGFzZSkuIERlZmF1bHQgaXMgbnVsbCwgYWxsIHN3aXBlcyBhcmUgZGV0ZWN0ZWRcbiAqXG4gKiAkRGF0ZTogMjAxMi0wNS0wNiAoVHVlcywgMDUgSnVuZSAyMDEyKSAkXG4gKiAkdmVyc2lvbjogMS4yLjcgXHQtIENoYW5nZWQgdGltZSB0aHJlc2hvbGQgdG8gaGF2ZSBudWxsIGRlZmF1bHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBBZGRlZCBkdXJhdGlvbiBwYXJhbSBwYXNzZWQgYmFjayBpbiBldmVudHMsIGFuZCByZWZhY3RvcmVkIGhvdyB0aW1lIGlzIGhhbmRsZWQuXG4gKlxuICogJERhdGU6IDIwMTItMDUtMDYgKFR1ZXMsIDA1IEp1bmUgMjAxMikgJFxuICogJHZlcnNpb246IDEuMi44IFx0LSBBZGRlZCB0aGUgcG9zc2liaWxpdHkgdG8gcmV0dXJuIGEgdmFsdWUgbGlrZSBudWxsIG9yIGZhbHNlIGluIHRoZSB0cmlnZ2VyIGNhbGxiYWNrLiBJbiB0aGF0IHdheSB3ZSBjYW4gY29udHJvbCB3aGVuIHRoZSB0b3VjaCBzdGFydC9tb3ZlIHNob3VsZCB0YWtlIGVmZmVjdCBvciBub3QgKHNpbXBseSBieSByZXR1cm5pbmcgaW4gc29tZSBjYXNlcyByZXR1cm4gbnVsbDsgb3IgcmV0dXJuIGZhbHNlOykgVGhpcyBlZmZlY3RzIHRoZSBvbnRvdWNoc3RhcnQvb250b3VjaG1vdmUgZXZlbnQuXG4gKlxuICogJERhdGU6IDIwMTItMDYtMDYgKFdlZCwgMDYgSnVuZSAyMDEyKSAkXG4gKiAkdmVyc2lvbjogMS4zLjAgXHQtIFJlZmFjdG9yZWQgd2hvbGUgcGx1Z2luIHRvIGFsbG93IGZvciBtZXRob2RzIHRvIGJlIGV4ZWN1dGVkLCBhcyB3ZWxsIGFzIGV4cG9zZWQgZGVmYXVsdHMgZm9yIHVzZXIgb3ZlcnJpZGUuIEFkZGVkICdlbmFibGUnLCAnZGlzYWJsZScsIGFuZCAnZGVzdHJveScgbWV0aG9kc1xuICpcbiAqICREYXRlOiAyMDEyLTA1LTA2IChGcmksIDA1IEp1bmUgMjAxMikgJFxuICogJHZlcnNpb246IDEuMy4xIFx0LSBCdWcgZml4ZXMgIC0gYmluZCgpIHdpdGggZmFsc2UgYXMgbGFzdCBhcmd1bWVudCBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGluIGpRdWVyeSAxLjYsIGFsc28sIGlmIHlvdSBqdXN0IGNsaWNrLCB0aGUgZHVyYXRpb24gaXMgbm93IHJldHVybmVkIGNvcnJlY3RseS5cbiAqXG4gKiAkRGF0ZTogMjAxMi0yOS0wNyAoU3VuLCAyOSBKdWx5IDIwMTIpICRcbiAqICR2ZXJzaW9uOiAxLjMuMlx0LSBBZGRlZCBmYWxsYmFja1RvTW91c2VFdmVudHMgb3B0aW9uIHRvIE5PVCBjYXB0dXJlIG1vdXNlIGV2ZW50cyBvbiBub24gdG91Y2ggZGV2aWNlcy5cbiAqIFx0XHRcdC0gQWRkZWQgXCJhbGxcIiBmaW5nZXJzIHZhbHVlIHRvIHRoZSBmaW5nZXJzIHByb3BlcnR5LCBzbyBhbnkgY29tYmluYXRpb24gb2YgZmluZ2VycyB0cmlnZ2VycyB0aGUgc3dpcGUsIGFsbG93aW5nIGV2ZW50IGhhbmRsZXJzIHRvIGNoZWNrIHRoZSBmaW5nZXIgY291bnRcbiAqXG4gKiAkRGF0ZTogMjAxMi0wOS0wOCAoVGh1cnMsIDkgQXVnIDIwMTIpICRcbiAqICR2ZXJzaW9uOiAxLjMuM1x0LSBDb2RlIHRpZHkgcHJlcCBmb3IgbWluZWZpZWQgdmVyc2lvblxuICpcbiAqICREYXRlOiAyMDEyLTA0LTEwICh3ZWQsIDQgT2N0IDIwMTIpICRcbiAqICR2ZXJzaW9uOiAxLjQuMFx0LSBBZGRlZCBwaW5jaCBzdXBwb3J0LCBwaW5jaEluIGFuZCBwaW5jaE91dFxuICpcbiAqICREYXRlOiAyMDEyLTExLTEwIChUaHVycywgMTEgT2N0IDIwMTIpICRcbiAqICR2ZXJzaW9uOiAxLjUuMFx0LSBBZGRlZCBleGNsdWRlZEVsZW1lbnRzLCBhIGpxdWVyeSBzZWxlY3RvciB0aGF0IHNwZWNpZmllcyBjaGlsZCBlbGVtZW50cyB0aGF0IGRvIE5PVCB0cmlnZ2VyIHN3aXBlcy4gQnkgZGVmYXVsdCwgdGhpcyBpcyBvbmUgc2VsZWN0IHRoYXQgcmVtb3ZlcyBhbGwgZm9ybSwgaW5wdXQgc2VsZWN0LCBidXR0b24gYW5kIGFuY2hvciBlbGVtZW50cy5cbiAqXG4gKiAkRGF0ZTogMjAxMi0yMi0xMCAoTW9uLCAyMiBPY3QgMjAxMikgJFxuICogJHZlcnNpb246IDEuNS4xXHQtIEZpeGVkIGJ1ZyB3aXRoIGpRdWVyeSAxLjggYW5kIHRyYWlsaW5nIGNvbW1hIGluIGV4Y2x1ZGVkRWxlbWVudHNcbiAqXHRcdFx0XHRcdC0gRml4ZWQgYnVnIHdpdGggSUUgYW5kIGV2ZW50UHJldmVudERlZmF1bHQoKVxuICogJERhdGU6IDIwMTMtMDEtMTIgKEZyaSwgMTIgSmFuIDIwMTMpICRcbiAqICR2ZXJzaW9uOiAxLjYuMFx0LSBGaXhlZCBidWdzIHdpdGggcGluY2hpbmcsIG1haW5seSB3aGVuIGJvdGggcGluY2ggYW5kIHN3aXBlIGVuYWJsZWQsIGFzIHdlbGwgYXMgYWRkaW5nIHRpbWUgdGhyZXNob2xkIGZvciBtdWx0aWZpbmdlciBnZXN0dXJlcywgc28gcmVsZWFzaW5nIG9uZSBmaW5nZXIgYmVvZnJlIHRoZSBvdGhlciBkb2VzbnQgdHJpZ2dlciBhcyBzaW5nbGUgZmluZ2VyIGdlc3R1cmUuXG4gKlx0XHRcdFx0XHQtIG1hZGUgdGhlIGRlbW8gc2l0ZSBhbGwgc3RhdGljIGxvY2FsIEhUTUwgcGFnZXMgc28gdGhleSBjYW4gYmUgcnVuIGxvY2FsbHkgYnkgYSBkZXZlbG9wZXJcbiAqXHRcdFx0XHRcdC0gYWRkZWQganNEb2MgY29tbWVudHMgYW5kIGFkZGVkIGRvY3VtZW50YXRpb24gZm9yIHRoZSBwbHVnaW5cbiAqXHRcdFx0XHRcdC0gY29kZSB0aWR5XG4gKlx0XHRcdFx0XHQtIGFkZGVkIHRyaWdnZXJPblRvdWNoTGVhdmUgcHJvcGVydHkgdGhhdCB3aWxsIGVuZCB0aGUgZXZlbnQgd2hlbiB0aGUgdXNlciBzd2lwZXMgb2ZmIHRoZSBlbGVtZW50LlxuICogJERhdGU6IDIwMTMtMDMtMjMgKFNhdCwgMjMgTWFyIDIwMTMpICRcbiAqICR2ZXJzaW9uOiAxLjYuMVx0LSBBZGRlZCBzdXBwb3J0IGZvciBpZTggdG91Y2ggZXZlbnRzXG4gKiAkdmVyc2lvbjogMS42LjJcdC0gQWRkZWQgc3VwcG9ydCBmb3IgZXZlbnRzIGJpbmRpbmcgd2l0aCBvbiAvIG9mZiAvIGJpbmQgaW4galEgZm9yIGFsbCBjYWxsYmFjayBuYW1lcy5cbiAqICAgICAgICAgICAgICAgICAgIC0gRGVwcmVjYXRlZCB0aGUgJ2NsaWNrJyBoYW5kbGVyIGluIGZhdm91ciBvZiB0YXAuXG4gKiAgICAgICAgICAgICAgICAgICAtIGFkZGVkIGNhbmNlbFRocmVzaG9sZCBwcm9wZXJ0eVxuICogICAgICAgICAgICAgICAgICAgLSBhZGRlZCBvcHRpb24gbWV0aG9kIHRvIHVwZGF0ZSBpbml0IG9wdGlvbnMgYXQgcnVudGltZVxuICogJHZlcnNpb24gMS42LjMgICAgLSBhZGRlZCBkb3VibGV0YXAsIGxvbmd0YXAgZXZlbnRzIGFuZCBsb25nVGFwVGhyZXNob2xkLCBkb3VibGVUYXBUaHJlc2hvbGQgcHJvcGVydHlcbiAqXG4gKiAkRGF0ZTogMjAxMy0wNC0wNCAoVGh1cnMsIDA0IEFwcmlsIDIwMTMpICRcbiAqICR2ZXJzaW9uIDEuNi40ICAgIC0gRml4ZWQgYnVnIHdpdGggY2FuY2VsVGhyZXNob2xkIGludHJvZHVjZWQgaW4gMS42LjMsIHdoZXJlIHN3aXBlIHN0YXR1cyBubyBsb25nZXIgZmlyZWQgc3RhcnQgZXZlbnQsIGFuZCBzdG9wcGVkIG9uY2Ugc3dpcGluZyBiYWNrLlxuICpcbiAqICREYXRlOiAyMDEzLTA4LTI0IChTYXQsIDI0IEF1ZyAyMDEzKSAkXG4gKiAkdmVyc2lvbiAxLjYuNSAgICAtIE1lcmdlZCBhIGZldyBwdWxsIHJlcXVlc3RzIGZpeGluZyB2YXJpb3VzIGJ1Z3MsIGFkZGVkIEFNRCBzdXBwb3J0LlxuICpcbiAqICREYXRlOiAyMDE0LTA2LTA0IChXZWQsIDA0IEp1bmUgMjAxNCkgJFxuICogJHZlcnNpb24gMS42LjYgXHQtIE1lcmdlIG9mIHB1bGwgcmVxdWVzdHMuXG4gKiAgICBcdFx0XHRcdC0gSUUxMCB0b3VjaCBzdXBwb3J0XG4gKiAgICBcdFx0XHRcdC0gT25seSBwcmV2ZW50IGRlZmF1bHQgZXZlbnQgaGFuZGxpbmcgb24gdmFsaWQgc3dpcGVcbiAqICAgIFx0XHRcdFx0LSBTZXBhcmF0ZSBsaWNlbnNlL2NoYW5nZWxvZyBjb21tZW50XG4gKiAgICBcdFx0XHRcdC0gRGV0ZWN0IGlmIHRoZSBzd2lwZSBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIHRoZSB0b3VjaCBldmVudC5cbiAqICAgIFx0XHRcdFx0LSBQYXNzIGZpbmdlcmRhdGEgdG8gZXZlbnQgaGFuZGxlcnMuXG4gKiAgICBcdFx0XHRcdC0gQWRkICdob2xkJyBnZXN0dXJlXG4gKiAgICBcdFx0XHRcdC0gQmUgbW9yZSB0b2xlcmFudCBhYm91dCB0aGUgdGFwIGRpc3RhbmNlXG4gKiAgICBcdFx0XHRcdC0gVHlwb3MgYW5kIG1pbm9yIGZpeGVzXG4gKlxuICogJERhdGU6IDIwMTUtMjItMDEgKFRodXJzLCAyMiBKYW4gMjAxNSkgJFxuICogJHZlcnNpb24gMS42LjcgICAgLSBBZGRlZCBwYXRjaCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0YnJ5c29uL1RvdWNoU3dpcGUtSnF1ZXJ5LVBsdWdpbi9pc3N1ZXMvMjA2IHRvIGZpeCBtZW1vcnkgbGVha1xuICpcbiAqICREYXRlOiAyMDE1LTItMiAoTW9uLCAyIEZlYiAyMDE1KSAkXG4gKiAkdmVyc2lvbiAxLjYuOCAgICAtIEFkZGVkIHByZXZlbnREZWZhdWx0RXZlbnRzIG9wdGlvbiB0byBwcm94eSBldmVudHMgcmVnYXJkbGVzcy5cbiAqXHRcdFx0XHRcdC0gRml4ZWQgaXNzdWUgd2l0aCBzd2lwZSBhbmQgcGluY2ggbm90IHRyaWdnZXJpbmcgYXQgdGhlIHNhbWUgdGltZVxuICpcbiAqICREYXRlOiAyMDE1LTktNiAoVHVlcywgOSBKdW5lIDIwMTUpICRcbiAqICR2ZXJzaW9uIDEuNi45ICAgIC0gQWRkZWQgUFIgZnJvbSBqZGFsdG9uL2h5YnJpZCB0byBmaXggcG9pbnRlciBldmVudHNcbiAqXHRcdFx0XHRcdC0gQWRkZWQgc2Nyb2xsaW5nIGRlbW9cbiAqXHRcdFx0XHRcdC0gQWRkZWQgdmVyc2lvbiBwcm9wZXJ0eSB0byBwbHVnaW5cbiAqXG4gKiAkRGF0ZTogMjAxNS0xLTEwIChXZWQsIDEgT2N0b2JlciAyMDE1KSAkXG4gKiAkdmVyc2lvbiAxLjYuMTAgICAgLSBBZGRlZCBQUiBmcm9tIGJlYXRzcGFjZSB0byBmaXggdGFwIGV2ZW50c1xuICogJHZlcnNpb24gMS42LjExICAgIC0gQWRkZWQgUFJzIGZyb20gaW5kcmktaW5kcmkgKCBEb2MgdGlkeXVwKSwga2tpcnNjaGUgKCBCb3dlciB0aWR5IHVwICksIFV6aVRlY2ggKHByZXZlbnREZWZhdWx0RXZlbnRzIGZpeGVzIClcbiAqXHRcdFx0XHRcdCAtIEFsbG93ZWQgc2V0dGluZyBtdWx0aXBsZSBvcHRpb25zIHZpYSAuc3dpcGUoXCJvcHRpb25zXCIsIG9wdGlvbnNfaGFzaCkgYW5kIG1vcmUgc2ltcGx5IC5zd2lwZShvcHRpb25zX2hhc2gpIG9yIGV4aXNpdG5nIGluc3RhbmNlc1xuICogJHZlcnNpb24gMS42LjEyICAgIC0gRml4ZWQgYnVnIHdpdGggbXVsdGkgZmluZ2VyIHJlbGVhc2VzIGFib3ZlIDIgbm90IHRyaWdnZXJpbmcgZXZlbnRzXG4gKlxuICogJERhdGU6IDIwMTUtMTItMTggKEZyaSwgMTggRGVjZW1iZXIgMjAxNSkgJFxuICogJHZlcnNpb24gMS42LjEzICAgIC0gQWRkZWQgUFJzXG4gKiAgICAgICAgICAgICAgICAgICAgLSBGaXhlZCAjMjY3IGFsbG93UGFnZVNjcm9sbCBub3Qgd29ya2luZyBjb3JyZWN0bHlcbiAqICR2ZXJzaW9uIDEuNi4xNCAgICAtIEZpeGVkICMyMjAgLyAjMjQ4IGRvdWJsZXRhcCBub3QgZmlyaW5nIHdpdGggc3dpcGVzLCAjMjIzIGNvbW1vbkpTIGNvbXBhdGlibGVcbiAqICR2ZXJzaW9uIDEuNi4xNSAgICAtIE1vcmUgYnVnIGZpeGVzXG4gKi9cblxuLyoqXG4gKiBTZWUgKGh0dHA6Ly9qcXVlcnkuY29tLykuXG4gKiBAbmFtZSAkXG4gKiBAY2xhc3NcbiAqIFNlZSB0aGUgalF1ZXJ5IExpYnJhcnkgIChodHRwOi8vanF1ZXJ5LmNvbS8pIGZvciBmdWxsIGRldGFpbHMuICBUaGlzIGp1c3RcbiAqIGRvY3VtZW50cyB0aGUgZnVuY3Rpb24gYW5kIGNsYXNzZXMgdGhhdCBhcmUgYWRkZWQgdG8galF1ZXJ5IGJ5IHRoaXMgcGx1Zy1pbi5cbiAqL1xuXG4vKipcbiAqIFNlZSAoaHR0cDovL2pxdWVyeS5jb20vKVxuICogQG5hbWUgZm5cbiAqIEBjbGFzc1xuICogU2VlIHRoZSBqUXVlcnkgTGlicmFyeSAgKGh0dHA6Ly9qcXVlcnkuY29tLykgZm9yIGZ1bGwgZGV0YWlscy4gIFRoaXMganVzdFxuICogZG9jdW1lbnRzIHRoZSBmdW5jdGlvbiBhbmQgY2xhc3NlcyB0aGF0IGFyZSBhZGRlZCB0byBqUXVlcnkgYnkgdGhpcyBwbHVnLWluLlxuICogQG1lbWJlck9mICRcbiAqL1xuXG5cbihmdW5jdGlvbihmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgJiYgZGVmaW5lLmFtZC5qUXVlcnkpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gQ29tbW9uSlMgTW9kdWxlXG4gICAgZmFjdG9yeShfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX18oXCJqcXVlcnlcIikpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0oZnVuY3Rpb24oJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvL0NvbnN0YW50c1xuICB2YXIgVkVSU0lPTiA9IFwiMS42LjE1XCIsXG4gICAgTEVGVCA9IFwibGVmdFwiLFxuICAgIFJJR0hUID0gXCJyaWdodFwiLFxuICAgIFVQID0gXCJ1cFwiLFxuICAgIERPV04gPSBcImRvd25cIixcbiAgICBJTiA9IFwiaW5cIixcbiAgICBPVVQgPSBcIm91dFwiLFxuXG4gICAgTk9ORSA9IFwibm9uZVwiLFxuICAgIEFVVE8gPSBcImF1dG9cIixcblxuICAgIFNXSVBFID0gXCJzd2lwZVwiLFxuICAgIFBJTkNIID0gXCJwaW5jaFwiLFxuICAgIFRBUCA9IFwidGFwXCIsXG4gICAgRE9VQkxFX1RBUCA9IFwiZG91YmxldGFwXCIsXG4gICAgTE9OR19UQVAgPSBcImxvbmd0YXBcIixcbiAgICBIT0xEID0gXCJob2xkXCIsXG5cbiAgICBIT1JJWk9OVEFMID0gXCJob3Jpem9udGFsXCIsXG4gICAgVkVSVElDQUwgPSBcInZlcnRpY2FsXCIsXG5cbiAgICBBTExfRklOR0VSUyA9IFwiYWxsXCIsXG5cbiAgICBET1VCTEVfVEFQX1RIUkVTSE9MRCA9IDEwLFxuXG4gICAgUEhBU0VfU1RBUlQgPSBcInN0YXJ0XCIsXG4gICAgUEhBU0VfTU9WRSA9IFwibW92ZVwiLFxuICAgIFBIQVNFX0VORCA9IFwiZW5kXCIsXG4gICAgUEhBU0VfQ0FOQ0VMID0gXCJjYW5jZWxcIixcblxuICAgIFNVUFBPUlRTX1RPVUNIID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LFxuXG4gICAgU1VQUE9SVFNfUE9JTlRFUl9JRTEwID0gd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICYmICF3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkICYmICFTVVBQT1JUU19UT1VDSCxcblxuICAgIFNVUFBPUlRTX1BPSU5URVIgPSAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpICYmICFTVVBQT1JUU19UT1VDSCxcblxuICAgIFBMVUdJTl9OUyA9ICdUb3VjaFN3aXBlJztcblxuXG5cbiAgLyoqXG4gICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiwgYW5kIGF2YWlsYWJsZSBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0b3VjaCBzd2lwZSB3aXRoLlxuICAqIFlvdSBjYW4gc2V0IHRoZSBkZWZhdWx0IHZhbHVlcyBieSB1cGRhdGluZyBhbnkgb2YgdGhlIHByb3BlcnRpZXMgcHJpb3IgdG8gaW5zdGFudGlhdGlvbi5cbiAgKiBAbmFtZSAkLmZuLnN3aXBlLmRlZmF1bHRzXG4gICogQG5hbWVzcGFjZVxuICAqIEBwcm9wZXJ0eSB7aW50fSBbZmluZ2Vycz0xXSBUaGUgbnVtYmVyIG9mIGZpbmdlcnMgdG8gZGV0ZWN0IGluIGEgc3dpcGUuIEFueSBzd2lwZXMgdGhhdCBkbyBub3QgbWVldCB0aGlzIHJlcXVpcmVtZW50IHdpbGwgTk9UIHRyaWdnZXIgc3dpcGUgaGFuZGxlcnMuXG4gICogQHByb3BlcnR5IHtpbnR9IFt0aHJlc2hvbGQ9NzVdIFRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIHVzZXIgbXVzdCBtb3ZlIHRoZWlyIGZpbmdlciBieSBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBhIHN3aXBlLlxuICAqIEBwcm9wZXJ0eSB7aW50fSBbY2FuY2VsVGhyZXNob2xkPW51bGxdIFRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIHVzZXIgbXVzdCBtb3ZlIHRoZWlyIGZpbmdlciBiYWNrIGZyb20gdGhlIG9yaWdpbmFsIHN3aXBlIGRpcmVjdGlvbiB0byBjYW5jZWwgdGhlIGdlc3R1cmUuXG4gICogQHByb3BlcnR5IHtpbnR9IFtwaW5jaFRocmVzaG9sZD0yMF0gVGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgdXNlciBtdXN0IHBpbmNoIHRoZWlyIGZpbmdlciBieSBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBhIHBpbmNoLlxuICAqIEBwcm9wZXJ0eSB7aW50fSBbbWF4VGltZVRocmVzaG9sZD1udWxsXSBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIGJldHdlZW4gdG91Y2hTdGFydCBhbmQgdG91Y2hFbmQgbXVzdCBOT1QgZXhjZWVkIGluIG9yZGVyIHRvIGJlIGNvbnNpZGVyZWQgYSBzd2lwZS5cbiAgKiBAcHJvcGVydHkge2ludH0gW2ZpbmdlclJlbGVhc2VUaHJlc2hvbGQ9MjUwXSBUaW1lIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHJlbGVhc2luZyBtdWx0aXBsZSBmaW5nZXJzLiAgSWYgMiBmaW5nZXJzIGFyZSBkb3duLCBhbmQgYXJlIHJlbGVhc2VkIG9uZSBhZnRlciB0aGUgb3RoZXIsIGlmIHRoZXkgYXJlIHdpdGhpbiB0aGlzIHRocmVzaG9sZCwgaXQgY291bnRzIGFzIGEgc2ltdWx0YW5lb3VzIHJlbGVhc2UuXG4gICogQHByb3BlcnR5IHtpbnR9IFtsb25nVGFwVGhyZXNob2xkPTUwMF0gVGltZSBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0YXAgYW5kIHJlbGVhc2UgZm9yIGEgbG9uZyB0YXBcbiAgKiBAcHJvcGVydHkge2ludH0gW2RvdWJsZVRhcFRocmVzaG9sZD0yMDBdIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gMiB0YXBzIHRvIGNvdW50IGFzIGEgZG91YmxlIHRhcFxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtzd2lwZT1udWxsXSBBIGhhbmRsZXIgdG8gY2F0Y2ggYWxsIHN3aXBlcy4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnN3aXBlfVxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtzd2lwZUxlZnQ9bnVsbF0gQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcImxlZnRcIiBzd2lwZXMuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZSNldmVudDpzd2lwZUxlZnR9XG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3N3aXBlUmlnaHQ9bnVsbF0gQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcInJpZ2h0XCIgc3dpcGVzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6c3dpcGVSaWdodH1cbiAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbc3dpcGVVcD1udWxsXSBBIGhhbmRsZXIgdGhhdCBpcyB0cmlnZ2VyZWQgZm9yIFwidXBcIiBzd2lwZXMuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZSNldmVudDpzd2lwZVVwfVxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtzd2lwZURvd249bnVsbF0gQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcImRvd25cIiBzd2lwZXMuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZSNldmVudDpzd2lwZURvd259XG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3N3aXBlU3RhdHVzPW51bGxdIEEgaGFuZGxlciB0cmlnZ2VyZWQgZm9yIGV2ZXJ5IHBoYXNlIG9mIHRoZSBzd2lwZS4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnN3aXBlU3RhdHVzfVxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtwaW5jaEluPW51bGxdIEEgaGFuZGxlciB0cmlnZ2VyZWQgZm9yIHBpbmNoIGluIGV2ZW50cy4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnBpbmNoSW59XG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3BpbmNoT3V0PW51bGxdIEEgaGFuZGxlciB0cmlnZ2VyZWQgZm9yIHBpbmNoIG91dCBldmVudHMuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZSNldmVudDpwaW5jaE91dH1cbiAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbcGluY2hTdGF0dXM9bnVsbF0gQSBoYW5kbGVyIHRyaWdnZXJlZCBmb3IgZXZlcnkgcGhhc2Ugb2YgYSBwaW5jaC4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnBpbmNoU3RhdHVzfVxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFt0YXA9bnVsbF0gQSBoYW5kbGVyIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBqdXN0IHRhcHMgb24gdGhlIGl0ZW0sIHJhdGhlciB0aGFuIHN3aXBlcyBpdC4gSWYgdGhleSBkbyBub3QgbW92ZSwgdGFwIGlzIHRyaWdnZXJlZCwgaWYgdGhleSBkbyBtb3ZlLCBpdCBpcyBub3QuXG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW2RvdWJsZVRhcD1udWxsXSBBIGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGRvdWJsZSB0YXBzIG9uIHRoZSBpdGVtLiBUaGUgZGVsYXkgYmV0d2VlbiB0YXBzIGNhbiBiZSBzZXQgd2l0aCB0aGUgZG91YmxlVGFwVGhyZXNob2xkIHByb3BlcnR5LiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGVmYXVsdHMjZG91YmxlVGFwVGhyZXNob2xkfVxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtsb25nVGFwPW51bGxdIEEgaGFuZGxlciB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgbG9uZyB0YXBzIG9uIHRoZSBpdGVtLiBUaGUgZGVsYXkgYmV0d2VlbiBzdGFydCBhbmQgZW5kIGNhbiBiZSBzZXQgd2l0aCB0aGUgbG9uZ1RhcFRocmVzaG9sZCBwcm9wZXJ0eS4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRlZmF1bHRzI2xvbmdUYXBUaHJlc2hvbGR9XG4gICogQHByb3BlcnR5IChmdW5jdGlvbikgW2hvbGQ9bnVsbF0gQSBoYW5kbGVyIHRyaWdnZXJlZCB3aGVuIGEgdXNlciByZWFjaGVzIGxvbmdUYXBUaHJlc2hvbGQgb24gdGhlIGl0ZW0uIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5kZWZhdWx0cyNsb25nVGFwVGhyZXNob2xkfVxuICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3RyaWdnZXJPblRvdWNoRW5kPXRydWVdIElmIHRydWUsIHRoZSBzd2lwZSBldmVudHMgYXJlIHRyaWdnZXJlZCB3aGVuIHRoZSB0b3VjaCBlbmQgZXZlbnQgaXMgcmVjZWl2ZWQgKHVzZXIgcmVsZWFzZXMgZmluZ2VyKS4gIElmIGZhbHNlLCBpdCB3aWxsIGJlIHRyaWdnZXJlZCBvbiByZWFjaGluZyB0aGUgdGhyZXNob2xkLCBhbmQgdGhlbiBjYW5jZWwgdGhlIHRvdWNoIGV2ZW50IGF1dG9tYXRpY2FsbHkuXG4gICogQHByb3BlcnR5IHtib29sZWFufSBbdHJpZ2dlck9uVG91Y2hMZWF2ZT1mYWxzZV0gSWYgdHJ1ZSwgdGhlbiB3aGVuIHRoZSB1c2VyIGxlYXZlcyB0aGUgc3dpcGUgb2JqZWN0LCB0aGUgc3dpcGUgd2lsbCBlbmQgYW5kIHRyaWdnZXIgYXBwcm9wcmlhdGUgaGFuZGxlcnMuXG4gICogQHByb3BlcnR5IHtzdHJpbmd8dW5kZWZpbmVkfSBbYWxsb3dQYWdlU2Nyb2xsPSdhdXRvJ10gSG93IHRoZSBicm93c2VyIGhhbmRsZXMgcGFnZSBzY3JvbGxzIHdoZW4gdGhlIHVzZXIgaXMgc3dpcGluZyBvbiBhIHRvdWNoU3dpcGUgb2JqZWN0LiBTZWUge0BsaW5rICQuZm4uc3dpcGUucGFnZVNjcm9sbH0uICA8YnIvPjxici8+XG4gIFx0XHRcdFx0XHRcdFx0XHRcdDxjb2RlPlwiYXV0b1wiPC9jb2RlPiA6IGFsbCB1bmRlZmluZWQgc3dpcGVzIHdpbGwgY2F1c2UgdGhlIHBhZ2UgdG8gc2Nyb2xsIGluIHRoYXQgZGlyZWN0aW9uLiA8YnIvPlxuICBcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZT5cIm5vbmVcIjwvY29kZT4gOiB0aGUgcGFnZSB3aWxsIG5vdCBzY3JvbGwgd2hlbiB1c2VyIHN3aXBlcy4gPGJyLz5cbiAgXHRcdFx0XHRcdFx0XHRcdFx0PGNvZGU+XCJob3Jpem9udGFsXCI8L2NvZGU+IDogd2lsbCBmb3JjZSBwYWdlIHRvIHNjcm9sbCBvbiBob3Jpem9udGFsIHN3aXBlcy4gPGJyLz5cbiAgXHRcdFx0XHRcdFx0XHRcdFx0PGNvZGU+XCJ2ZXJ0aWNhbFwiPC9jb2RlPiA6IHdpbGwgZm9yY2UgcGFnZSB0byBzY3JvbGwgb24gdmVydGljYWwgc3dpcGVzLiA8YnIvPlxuICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9Nb3VzZUV2ZW50cz10cnVlXSBJZiB0cnVlIG1vdXNlIGV2ZW50cyBhcmUgdXNlZCB3aGVuIHJ1biBvbiBhIG5vbiB0b3VjaCBkZXZpY2UsIGZhbHNlIHdpbGwgc3RvcCBzd2lwZXMgYmVpbmcgdHJpZ2dlcmVkIGJ5IG1vdXNlIGV2ZW50cyBvbiBub24gdG9jdWggZGV2aWNlcy5cbiAgKiBAcHJvcGVydHkge3N0cmluZ30gW2V4Y2x1ZGVkRWxlbWVudHM9XCJidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBhLCAubm9Td2lwZVwiXSBBIGpxdWVyeSBzZWxlY3RvciB0aGF0IHNwZWNpZmllcyBjaGlsZCBlbGVtZW50cyB0aGF0IGRvIE5PVCB0cmlnZ2VyIHN3aXBlcy4gQnkgZGVmYXVsdCB0aGlzIGV4Y2x1ZGVzIGFsbCBmb3JtLCBpbnB1dCwgc2VsZWN0LCBidXR0b24sIGFuY2hvciBhbmQgLm5vU3dpcGUgZWxlbWVudHMuXG4gICogQHByb3BlcnR5IHtib29sZWFufSBbcHJldmVudERlZmF1bHRFdmVudHM9dHJ1ZV0gYnkgZGVmYXVsdCBkZWZhdWx0IGV2ZW50cyBhcmUgY2FuY2VsbGVkLCBzbyB0aGUgcGFnZSBkb2Vzbid0IG1vdmUuICBZb3UgY2FuIGRpc3NhYmxlIHRoaXMgc28gYm90aCBuYXRpdmUgZXZlbnRzIGZpcmUgYXMgd2VsbCBhcyB5b3VyIGhhbmRsZXJzLlxuXG4gICovXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBmaW5nZXJzOiAxLFxuICAgIHRocmVzaG9sZDogNzUsXG4gICAgY2FuY2VsVGhyZXNob2xkOiBudWxsLFxuICAgIHBpbmNoVGhyZXNob2xkOiAyMCxcbiAgICBtYXhUaW1lVGhyZXNob2xkOiBudWxsLFxuICAgIGZpbmdlclJlbGVhc2VUaHJlc2hvbGQ6IDI1MCxcbiAgICBsb25nVGFwVGhyZXNob2xkOiA1MDAsXG4gICAgZG91YmxlVGFwVGhyZXNob2xkOiAyMDAsXG4gICAgc3dpcGU6IG51bGwsXG4gICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgIHN3aXBlUmlnaHQ6IG51bGwsXG4gICAgc3dpcGVVcDogbnVsbCxcbiAgICBzd2lwZURvd246IG51bGwsXG4gICAgc3dpcGVTdGF0dXM6IG51bGwsXG4gICAgcGluY2hJbjogbnVsbCxcbiAgICBwaW5jaE91dDogbnVsbCxcbiAgICBwaW5jaFN0YXR1czogbnVsbCxcbiAgICBjbGljazogbnVsbCwgLy9EZXByZWNhdGVkIHNpbmNlIDEuNi4yXG4gICAgdGFwOiBudWxsLFxuICAgIGRvdWJsZVRhcDogbnVsbCxcbiAgICBsb25nVGFwOiBudWxsLFxuICAgIGhvbGQ6IG51bGwsXG4gICAgdHJpZ2dlck9uVG91Y2hFbmQ6IHRydWUsXG4gICAgdHJpZ2dlck9uVG91Y2hMZWF2ZTogZmFsc2UsXG4gICAgYWxsb3dQYWdlU2Nyb2xsOiBcImF1dG9cIixcbiAgICBmYWxsYmFja1RvTW91c2VFdmVudHM6IHRydWUsXG4gICAgZXhjbHVkZWRFbGVtZW50czogXCJsYWJlbCwgYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYSwgLm5vU3dpcGVcIixcbiAgICBwcmV2ZW50RGVmYXVsdEV2ZW50czogdHJ1ZVxuICB9O1xuXG5cblxuICAvKipcbiAgICogQXBwbGllcyBUb3VjaFN3aXBlIGJlaGF2aW91ciB0byBvbmUgb3IgbW9yZSBqUXVlcnkgb2JqZWN0cy5cbiAgICogVGhlIFRvdWNoU3dpcGUgcGx1Z2luIGNhbiBiZSBpbnN0YW50aWF0ZWQgdmlhIHRoaXMgbWV0aG9kLCBvciBtZXRob2RzIHdpdGhpblxuICAgKiBUb3VjaFN3aXBlIGNhbiBiZSBleGVjdXRlZCB2aWEgdGhpcyBtZXRob2QgYXMgcGVyIGpRdWVyeSBwbHVnaW4gYXJjaGl0ZWN0dXJlLlxuICAgKiBBbiBleGlzdGluZyBwbHVnaW4gY2FuIGhhdmUgaXRzIG9wdGlvbnMgY2hhbmdlZCBzaW1wbHkgYnkgcmUgY2FsbGluZyAuc3dpcGUob3B0aW9ucylcbiAgICogQHNlZSBUb3VjaFN3aXBlXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge01peGVkfSBtZXRob2QgSWYgdGhlIGN1cnJlbnQgRE9NTm9kZSBpcyBhIFRvdWNoU3dpcGUgb2JqZWN0LCBhbmQgPGNvZGU+bWV0aG9kPC9jb2RlPiBpcyBhIFRvdWNoU3dpcGUgbWV0aG9kLCB0aGVuXG4gICAqIHRoZSA8Y29kZT5tZXRob2Q8L2NvZGU+IGlzIGV4ZWN1dGVkLCBhbmQgYW55IGZvbGxvd2luZyBhcmd1bWVudHMgYXJlIHBhc3NlZCB0byB0aGUgVG91Y2hTd2lwZSBtZXRob2QuXG4gICAqIElmIDxjb2RlPm1ldGhvZDwvY29kZT4gaXMgYW4gb2JqZWN0LCB0aGVuIHRoZSBUb3VjaFN3aXBlIGNsYXNzIGlzIGluc3RhbnRpYXRlZCBvbiB0aGUgY3VycmVudCBET01Ob2RlLCBwYXNzaW5nIHRoZVxuICAgKiBjb25maWd1cmF0aW9uIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgb2JqZWN0LiBTZWUgVG91Y2hTd2lwZVxuICAgKlxuICAgKi9cbiAgJC5mbi5zd2lwZSA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICBwbHVnaW4gPSAkdGhpcy5kYXRhKFBMVUdJTl9OUyk7XG5cbiAgICAvL0NoZWNrIGlmIHdlIGFyZSBhbHJlYWR5IGluc3RhbnRpYXRlZCBhbmQgdHJ5aW5nIHRvIGV4ZWN1dGUgYSBtZXRob2RcbiAgICBpZiAocGx1Z2luICYmIHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAocGx1Z2luW21ldGhvZF0pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpblttZXRob2RdLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zd2lwZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vRWxzZSB1cGRhdGUgZXhpc3RpbmcgcGx1Z2luIHdpdGggbmV3IG9wdGlvbnMgaGFzaFxuICAgIGVsc2UgaWYgKHBsdWdpbiAmJiB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0Jykge1xuICAgICAgcGx1Z2luWydvcHRpb24nXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vRWxzZSBub3QgaW5zdGFudGlhdGVkIGFuZCB0cnlpbmcgdG8gcGFzcyBpbml0IG9iamVjdCAob3Igbm90aGluZylcbiAgICBlbHNlIGlmICghcGx1Z2luICYmICh0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kKSkge1xuICAgICAgcmV0dXJuIGluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBwbHVnaW5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICAkLmZuLnN3aXBlLnZlcnNpb24gPSBWRVJTSU9OO1xuXG5cblxuICAvL0V4cG9zZSBvdXIgZGVmYXVsdHMgc28gYSB1c2VyIGNvdWxkIG92ZXJyaWRlIHRoZSBwbHVnaW4gZGVmYXVsdHNcbiAgJC5mbi5zd2lwZS5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gIC8qKlxuICAgKiBUaGUgcGhhc2VzIHRoYXQgYSB0b3VjaCBldmVudCBnb2VzIHRocm91Z2guICBUaGUgPGNvZGU+cGhhc2U8L2NvZGU+IGlzIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAqIFRoZXNlIHByb3BlcnRpZXMgYXJlIHJlYWQgb25seSwgYXR0ZW1wdGluZyB0byBjaGFuZ2UgdGhlbSB3aWxsIG5vdCBhbHRlciB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAqIEBuYW1lc3BhY2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSEFTRV9TVEFSVCBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBzdGFydCBwaGFzZSBvZiB0aGUgdG91Y2ggZXZlbnQuIFZhbHVlIGlzIDxjb2RlPlwic3RhcnRcIjwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSEFTRV9NT1ZFIENvbnN0YW50IGluZGljYXRpbmcgdGhlIG1vdmUgcGhhc2Ugb2YgdGhlIHRvdWNoIGV2ZW50LiBWYWx1ZSBpcyA8Y29kZT5cIm1vdmVcIjwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSEFTRV9FTkQgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgZW5kIHBoYXNlIG9mIHRoZSB0b3VjaCBldmVudC4gVmFsdWUgaXMgPGNvZGU+XCJlbmRcIjwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSEFTRV9DQU5DRUwgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgY2FuY2VsIHBoYXNlIG9mIHRoZSB0b3VjaCBldmVudC4gVmFsdWUgaXMgPGNvZGU+XCJjYW5jZWxcIjwvY29kZT4uXG4gICAqL1xuICAkLmZuLnN3aXBlLnBoYXNlcyA9IHtcbiAgICBQSEFTRV9TVEFSVDogUEhBU0VfU1RBUlQsXG4gICAgUEhBU0VfTU9WRTogUEhBU0VfTU9WRSxcbiAgICBQSEFTRV9FTkQ6IFBIQVNFX0VORCxcbiAgICBQSEFTRV9DQU5DRUw6IFBIQVNFX0NBTkNFTFxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0aW9uIGNvbnN0YW50cyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIGFyZSByZWFkIG9ubHksIGF0dGVtcHRpbmcgdG8gY2hhbmdlIHRoZW0gd2lsbCBub3QgYWx0ZXIgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgKiBAbmFtZXNwYWNlXG4gICAqIEByZWFkb25seVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gTEVGVCBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBsZWZ0IGRpcmVjdGlvbi4gVmFsdWUgaXMgPGNvZGU+XCJsZWZ0XCI8L2NvZGU+LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gUklHSFQgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgcmlnaHQgZGlyZWN0aW9uLiBWYWx1ZSBpcyA8Y29kZT5cInJpZ2h0XCI8L2NvZGU+LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gVVAgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgdXAgZGlyZWN0aW9uLiBWYWx1ZSBpcyA8Y29kZT5cInVwXCI8L2NvZGU+LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gRE9XTiBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBkb3duIGRpcmVjdGlvbi4gVmFsdWUgaXMgPGNvZGU+XCJjYW5jZWxcIjwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTiBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBpbiBkaXJlY3Rpb24uIFZhbHVlIGlzIDxjb2RlPlwiaW5cIjwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPVVQgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgb3V0IGRpcmVjdGlvbi4gVmFsdWUgaXMgPGNvZGU+XCJvdXRcIjwvY29kZT4uXG4gICAqL1xuICAkLmZuLnN3aXBlLmRpcmVjdGlvbnMgPSB7XG4gICAgTEVGVDogTEVGVCxcbiAgICBSSUdIVDogUklHSFQsXG4gICAgVVA6IFVQLFxuICAgIERPV046IERPV04sXG4gICAgSU46IElOLFxuICAgIE9VVDogT1VUXG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBwYWdlIHNjcm9sbCBjb25zdGFudHMgdGhhdCBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIHZhbHVlIG9mIDxjb2RlPmFsbG93UGFnZVNjcm9sbDwvY29kZT4gb3B0aW9uXG4gICAqIFRoZXNlIHByb3BlcnRpZXMgYXJlIHJlYWQgb25seVxuICAgKiBAbmFtZXNwYWNlXG4gICAqIEByZWFkb25seVxuICAgKiBAc2VlICQuZm4uc3dpcGUuZGVmYXVsdHMjYWxsb3dQYWdlU2Nyb2xsXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBOT05FIENvbnN0YW50IGluZGljYXRpbmcgbm8gcGFnZSBzY3JvbGxpbmcgaXMgYWxsb3dlZC4gVmFsdWUgaXMgPGNvZGU+XCJub25lXCI8L2NvZGU+LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gSE9SSVpPTlRBTCBDb25zdGFudCBpbmRpY2F0aW5nIGhvcml6b250YWwgcGFnZSBzY3JvbGxpbmcgaXMgYWxsb3dlZC4gVmFsdWUgaXMgPGNvZGU+XCJob3Jpem9udGFsXCI8L2NvZGU+LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gVkVSVElDQUwgQ29uc3RhbnQgaW5kaWNhdGluZyB2ZXJ0aWNhbCBwYWdlIHNjcm9sbGluZyBpcyBhbGxvd2VkLiBWYWx1ZSBpcyA8Y29kZT5cInZlcnRpY2FsXCI8L2NvZGU+LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gQVVUTyBDb25zdGFudCBpbmRpY2F0aW5nIGVpdGhlciBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHdpbGwgYmUgYWxsb3dlZCwgZGVwZW5kaW5nIG9uIHRoZSBzd2lwZSBoYW5kbGVycyByZWdpc3RlcmVkLiBWYWx1ZSBpcyA8Y29kZT5cImF1dG9cIjwvY29kZT4uXG4gICAqL1xuICAkLmZuLnN3aXBlLnBhZ2VTY3JvbGwgPSB7XG4gICAgTk9ORTogTk9ORSxcbiAgICBIT1JJWk9OVEFMOiBIT1JJWk9OVEFMLFxuICAgIFZFUlRJQ0FMOiBWRVJUSUNBTCxcbiAgICBBVVRPOiBBVVRPXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50cyByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQgaW4gYSBzd2lwZS4gIFRoZXNlIGFyZSB1c2VkIHRvIHNldCBib3RoIHRoZSB2YWx1ZSBvZiA8Y29kZT5maW5nZXJzPC9jb2RlPiBpbiB0aGVcbiAgICogb3B0aW9ucyBvYmplY3QsIGFzIHdlbGwgYXMgdGhlIHZhbHVlIG9mIHRoZSA8Y29kZT5maW5nZXJzPC9jb2RlPiBldmVudCBwcm9wZXJ0eS5cbiAgICogVGhlc2UgcHJvcGVydGllcyBhcmUgcmVhZCBvbmx5LCBhdHRlbXB0aW5nIHRvIGNoYW5nZSB0aGVtIHdpbGwgbm90IGFsdGVyIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICogQG5hbWVzcGFjZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQHNlZSAkLmZuLnN3aXBlLmRlZmF1bHRzI2ZpbmdlcnNcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IE9ORSBDb25zdGFudCBpbmRpY2F0aW5nIDEgZmluZ2VyIGlzIHRvIGJlIGRldGVjdGVkIC8gd2FzIGRldGVjdGVkLiBWYWx1ZSBpcyA8Y29kZT4xPC9jb2RlPi5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFRXTyBDb25zdGFudCBpbmRpY2F0aW5nIDIgZmluZ2VycyBhcmUgdG8gYmUgZGV0ZWN0ZWQgLyB3ZXJlIGRldGVjdGVkLiBWYWx1ZSBpcyA8Y29kZT4yPC9jb2RlPi5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFRIUkVFIENvbnN0YW50IGluZGljYXRpbmcgMyBmaW5nZXIgYXJlIHRvIGJlIGRldGVjdGVkIC8gd2VyZSBkZXRlY3RlZC4gVmFsdWUgaXMgPGNvZGU+MzwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGT1VSIENvbnN0YW50IGluZGljYXRpbmcgNCBmaW5nZXIgYXJlIHRvIGJlIGRldGVjdGVkIC8gd2VyZSBkZXRlY3RlZC4gTm90IGFsbCBkZXZpY2VzIHN1cHBvcnQgdGhpcy4gVmFsdWUgaXMgPGNvZGU+NDwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGSVZFIENvbnN0YW50IGluZGljYXRpbmcgNSBmaW5nZXIgYXJlIHRvIGJlIGRldGVjdGVkIC8gd2VyZSBkZXRlY3RlZC4gTm90IGFsbCBkZXZpY2VzIHN1cHBvcnQgdGhpcy4gVmFsdWUgaXMgPGNvZGU+NTwvY29kZT4uXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTEwgQ29uc3RhbnQgaW5kaWNhdGluZyBhbnkgY29tYmluYXRpb24gb2YgZmluZ2VyIGFyZSB0byBiZSBkZXRlY3RlZC4gIFZhbHVlIGlzIDxjb2RlPlwiYWxsXCI8L2NvZGU+LlxuICAgKi9cbiAgJC5mbi5zd2lwZS5maW5nZXJzID0ge1xuICAgIE9ORTogMSxcbiAgICBUV086IDIsXG4gICAgVEhSRUU6IDMsXG4gICAgRk9VUjogNCxcbiAgICBGSVZFOiA1LFxuICAgIEFMTDogQUxMX0ZJTkdFUlNcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGlzZSB0aGUgcGx1Z2luIGZvciBlYWNoIERPTSBlbGVtZW50IG1hdGNoZWRcbiAgICogVGhpcyBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBtYWluIFRvdWNoU3dpcGUgY2xhc3MgZm9yIGVhY2ggRE9NIGVsZW1lbnQsIGFuZCB0aGVuXG4gICAqIHNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoYXQgaW5zdGFuY2UgaW4gdGhlIGVsZW1lbnRzIGRhdGEgcHJvcGVydHkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XG4gICAgLy9QcmVwIGFuZCBleHRlbmQgdGhlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyAmJiAob3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgPT09IHVuZGVmaW5lZCAmJiAob3B0aW9ucy5zd2lwZSAhPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3dpcGVTdGF0dXMgIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICBvcHRpb25zLmFsbG93UGFnZVNjcm9sbCA9IE5PTkU7XG4gICAgfVxuXG4gICAgLy9DaGVjayBmb3IgZGVwcmVjYXRlZCBvcHRpb25zXG4gICAgLy9FbnN1cmUgdGhhdCBhbnkgb2xkIGNsaWNrIGhhbmRsZXJzIGFyZSBhc3NpZ25lZCB0byB0aGUgbmV3IHRhcCwgdW5sZXNzIHdlIGhhdmUgYSB0YXBcbiAgICBpZiAob3B0aW9ucy5jbGljayAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMudGFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMudGFwID0gb3B0aW9ucy5jbGljaztcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICAvL3Bhc3MgZW1wdHkgb2JqZWN0IHNvIHdlIGRvbnQgbW9kaWZ5IHRoZSBkZWZhdWx0c1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJC5mbi5zd2lwZS5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAvL0ZvciBlYWNoIGVsZW1lbnQgaW5zdGFudGlhdGUgdGhlIHBsdWdpblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAvL0NoZWNrIHdlIGhhdmVudCBhbHJlYWR5IGluaXRpYWxpc2VkIHRoZSBwbHVnaW5cbiAgICAgIHZhciBwbHVnaW4gPSAkdGhpcy5kYXRhKFBMVUdJTl9OUyk7XG5cbiAgICAgIGlmICghcGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbiA9IG5ldyBUb3VjaFN3aXBlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAkdGhpcy5kYXRhKFBMVUdJTl9OUywgcGx1Z2luKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIFRvdWNoU3dpcGUgUGx1Z2luIENsYXNzLlxuICAgKiBEbyBub3QgdXNlIHRoaXMgdG8gY29uc3RydWN0IHlvdXIgVG91Y2hTd2lwZSBvYmplY3QsIHVzZSB0aGUgalF1ZXJ5IHBsdWdpbiBtZXRob2QgJC5mbi5zd2lwZSgpOyB7QGxpbmsgJC5mbi5zd2lwZX1cbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgVG91Y2hTd2lwZVxuICAgKiBAcGFyYW0ge0RPTU5vZGV9IGVsZW1lbnQgVGhlIEhUTUwgRE9NIG9iamVjdCB0byBhcHBseSB0byBwbHVnaW4gdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gY29uZmlndXJlIHRoZSBwbHVnaW4gd2l0aC4gIEBsaW5rIHskLmZuLnN3aXBlLmRlZmF1bHRzfVxuICAgKiBAc2VlICQuZmguc3dpcGUuZGVmYXVsdHNcbiAgICogQHNlZSAkLmZoLnN3aXBlXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gVG91Y2hTd2lwZShlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICAvL3Rha2UgYSBsb2NhbC9pbnN0YWNuZSBsZXZlbCBjb3B5IG9mIHRoZSBvcHRpb25zIC0gc2hvdWxkIG1ha2UgaXQgdGhpcy5vcHRpb25zIHJlYWxseS4uLlxuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIG9wdGlvbnMpO1xuXG4gICAgdmFyIHVzZVRvdWNoRXZlbnRzID0gKFNVUFBPUlRTX1RPVUNIIHx8IFNVUFBPUlRTX1BPSU5URVIgfHwgIW9wdGlvbnMuZmFsbGJhY2tUb01vdXNlRXZlbnRzKSxcbiAgICAgIFNUQVJUX0VWID0gdXNlVG91Y2hFdmVudHMgPyAoU1VQUE9SVFNfUE9JTlRFUiA/IChTVVBQT1JUU19QT0lOVEVSX0lFMTAgPyAnTVNQb2ludGVyRG93bicgOiAncG9pbnRlcmRvd24nKSA6ICd0b3VjaHN0YXJ0JykgOiAnbW91c2Vkb3duJyxcbiAgICAgIE1PVkVfRVYgPSB1c2VUb3VjaEV2ZW50cyA/IChTVVBQT1JUU19QT0lOVEVSID8gKFNVUFBPUlRTX1BPSU5URVJfSUUxMCA/ICdNU1BvaW50ZXJNb3ZlJyA6ICdwb2ludGVybW92ZScpIDogJ3RvdWNobW92ZScpIDogJ21vdXNlbW92ZScsXG4gICAgICBFTkRfRVYgPSB1c2VUb3VjaEV2ZW50cyA/IChTVVBQT1JUU19QT0lOVEVSID8gKFNVUFBPUlRTX1BPSU5URVJfSUUxMCA/ICdNU1BvaW50ZXJVcCcgOiAncG9pbnRlcnVwJykgOiAndG91Y2hlbmQnKSA6ICdtb3VzZXVwJyxcbiAgICAgIExFQVZFX0VWID0gdXNlVG91Y2hFdmVudHMgPyAoU1VQUE9SVFNfUE9JTlRFUiA/ICdtb3VzZWxlYXZlJyA6IG51bGwpIDogJ21vdXNlbGVhdmUnLCAvL3dlIG1hbnVhbGx5IGRldGVjdCBsZWF2ZSBvbiB0b3VjaCBkZXZpY2VzLCBzbyBudWxsIGV2ZW50IGhlcmVcbiAgICAgIENBTkNFTF9FViA9IChTVVBQT1JUU19QT0lOVEVSID8gKFNVUFBPUlRTX1BPSU5URVJfSUUxMCA/ICdNU1BvaW50ZXJDYW5jZWwnIDogJ3BvaW50ZXJjYW5jZWwnKSA6ICd0b3VjaGNhbmNlbCcpO1xuXG5cblxuICAgIC8vdG91Y2ggcHJvcGVydGllc1xuICAgIHZhciBkaXN0YW5jZSA9IDAsXG4gICAgICBkaXJlY3Rpb24gPSBudWxsLFxuICAgICAgY3VycmVudERpcmVjdGlvbiA9IG51bGwsXG4gICAgICBkdXJhdGlvbiA9IDAsXG4gICAgICBzdGFydFRvdWNoZXNEaXN0YW5jZSA9IDAsXG4gICAgICBlbmRUb3VjaGVzRGlzdGFuY2UgPSAwLFxuICAgICAgcGluY2hab29tID0gMSxcbiAgICAgIHBpbmNoRGlzdGFuY2UgPSAwLFxuICAgICAgcGluY2hEaXJlY3Rpb24gPSAwLFxuICAgICAgbWF4aW11bXNNYXAgPSBudWxsO1xuXG5cblxuICAgIC8valF1ZXJ5IHdyYXBwZWQgZWxlbWVudCBmb3IgdGhpcyBpbnN0YW5jZVxuICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICAvL0N1cnJlbnQgcGhhc2Ugb2YgdGggdG91Y2ggY3ljbGVcbiAgICB2YXIgcGhhc2UgPSBcInN0YXJ0XCI7XG5cbiAgICAvLyB0aGUgY3VycmVudCBudW1iZXIgb2YgZmluZ2VycyBiZWluZyB1c2VkLlxuICAgIHZhciBmaW5nZXJDb3VudCA9IDA7XG5cbiAgICAvL3RyYWNrIG1vdXNlIHBvaW50cyAvIGRlbHRhXG4gICAgdmFyIGZpbmdlckRhdGEgPSB7fTtcblxuICAgIC8vdHJhY2sgdGltZXNcbiAgICB2YXIgc3RhcnRUaW1lID0gMCxcbiAgICAgIGVuZFRpbWUgPSAwLFxuICAgICAgcHJldmlvdXNUb3VjaEVuZFRpbWUgPSAwLFxuICAgICAgZmluZ2VyQ291bnRBdFJlbGVhc2UgPSAwLFxuICAgICAgZG91YmxlVGFwU3RhcnRUaW1lID0gMDtcblxuICAgIC8vVGltZW91dHNcbiAgICB2YXIgc2luZ2xlVGFwVGltZW91dCA9IG51bGwsXG4gICAgICBob2xkVGltZW91dCA9IG51bGw7XG5cbiAgICAvLyBBZGQgZ2VzdHVyZXMgdG8gYWxsIHN3aXBhYmxlIGFyZWFzIGlmIHN1cHBvcnRlZFxuICAgIHRyeSB7XG4gICAgICAkZWxlbWVudC5iaW5kKFNUQVJUX0VWLCB0b3VjaFN0YXJ0KTtcbiAgICAgICRlbGVtZW50LmJpbmQoQ0FOQ0VMX0VWLCB0b3VjaENhbmNlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgJC5lcnJvcignZXZlbnRzIG5vdCBzdXBwb3J0ZWQgJyArIFNUQVJUX0VWICsgJywnICsgQ0FOQ0VMX0VWICsgJyBvbiBqUXVlcnkuc3dpcGUnKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vUHVibGljIG1ldGhvZHNcbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogcmUtZW5hYmxlcyB0aGUgc3dpcGUgcGx1Z2luIHdpdGggdGhlIHByZXZpb3VzIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAbmFtZSAkLmZuLnN3aXBlI2VuYWJsZVxuICAgICAqIEByZXR1cm4ge0RPTU5vZGV9IFRoZSBEb20gZWxlbWVudCB0aGF0IHdhcyByZWdpc3RlcmVkIHdpdGggVG91Y2hTd2lwZVxuICAgICAqIEBleGFtcGxlICQoXCIjZWxlbWVudFwiKS5zd2lwZShcImVuYWJsZVwiKTtcbiAgICAgKi9cbiAgICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGVsZW1lbnQuYmluZChTVEFSVF9FViwgdG91Y2hTdGFydCk7XG4gICAgICAkZWxlbWVudC5iaW5kKENBTkNFTF9FViwgdG91Y2hDYW5jZWwpO1xuICAgICAgcmV0dXJuICRlbGVtZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBkaXNhYmxlcyB0aGUgc3dpcGUgcGx1Z2luXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQG5hbWUgJC5mbi5zd2lwZSNkaXNhYmxlXG4gICAgICogQHJldHVybiB7RE9NTm9kZX0gVGhlIERvbSBlbGVtZW50IHRoYXQgaXMgbm93IHJlZ2lzdGVyZWQgd2l0aCBUb3VjaFN3aXBlXG4gICAgICogQGV4YW1wbGUgJChcIiNlbGVtZW50XCIpLnN3aXBlKFwiZGlzYWJsZVwiKTtcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgcmV0dXJuICRlbGVtZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBzd2lwZSBwbHVnaW4gY29tcGxldGVseS4gVG8gdXNlIGFueSBzd2lwZSBtZXRob2RzLCB5b3UgbXVzdCByZSBpbml0aWFsaXNlIHRoZSBwbHVnaW4uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQG5hbWUgJC5mbi5zd2lwZSNkZXN0cm95XG4gICAgICogQGV4YW1wbGUgJChcIiNlbGVtZW50XCIpLnN3aXBlKFwiZGVzdHJveVwiKTtcbiAgICAgKi9cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgJGVsZW1lbnQuZGF0YShQTFVHSU5fTlMsIG51bGwpO1xuICAgICAgJGVsZW1lbnQgPSBudWxsO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBydW4gdGltZSB1cGRhdGluZyBvZiB0aGUgc3dpcGUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBuYW1lICQuZm4uc3dpcGUjb3B0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IFRoZSBvcHRpb24gcHJvcGVydHkgdG8gZ2V0IG9yIHNldCwgb3IgYSBoYXMgb2YgbXVsdGlwbGUgb3B0aW9ucyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3ZhbHVlXSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xuICAgICAqIEByZXR1cm4ge09iamVjdH0gSWYgb25seSBhIHByb3BlcnR5IG5hbWUgaXMgcGFzc2VkLCB0aGVuIHRoYXQgcHJvcGVydHkgdmFsdWUgaXMgcmV0dXJuZWQuIElmIG5vdGhpbmcgaXMgcGFzc2VkIHRoZSBjdXJyZW50IG9wdGlvbnMgaGFzaCBpcyByZXR1cm5lZC5cbiAgICAgKiBAZXhhbXBsZSAkKFwiI2VsZW1lbnRcIikuc3dpcGUoXCJvcHRpb25cIiwgXCJ0aHJlc2hvbGRcIik7IC8vIHJldHVybiB0aGUgdGhyZXNob2xkXG4gICAgICogQGV4YW1wbGUgJChcIiNlbGVtZW50XCIpLnN3aXBlKFwib3B0aW9uXCIsIFwidGhyZXNob2xkXCIsIDEwMCk7IC8vIHNldCB0aGUgdGhyZXNob2xkIGFmdGVyIGluaXRcbiAgICAgKiBAZXhhbXBsZSAkKFwiI2VsZW1lbnRcIikuc3dpcGUoXCJvcHRpb25cIiwge3RocmVzaG9sZDoxMDAsIGZpbmdlcnM6M30gKTsgLy8gc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYWZ0ZXIgaW5pdFxuICAgICAqIEBleGFtcGxlICQoXCIjZWxlbWVudFwiKS5zd2lwZSh7dGhyZXNob2xkOjEwMCwgZmluZ2VyczozfSApOyAvLyBzZXQgbXVsdGlwbGUgcHJvcGVydGllcyBhZnRlciBpbml0IC0gdGhlIFwib3B0aW9uXCIgbWV0aG9kIGlzIG9wdGlvbmFsIVxuICAgICAqIEBleGFtcGxlICQoXCIjZWxlbWVudFwiKS5zd2lwZShcIm9wdGlvblwiKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IG9wdGlvbnMgaGFzaFxuICAgICAqIEBzZWUgJC5mbi5zd2lwZS5kZWZhdWx0c1xuICAgICAqXG4gICAgICovXG4gICAgdGhpcy5vcHRpb24gPSBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKG9wdGlvbnMsIHByb3BlcnR5KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9uc1twcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQuZXJyb3IoJ09wdGlvbiAnICsgcHJvcGVydHkgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zd2lwZS5vcHRpb25zJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG5cbiAgICAvL1xuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIC8vXG5cbiAgICAvL1xuICAgIC8vIEVWRU5UU1xuICAgIC8vXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYSB0b3VjaCBzdGFydCBldmVudC5cbiAgICAgKiBTdG9wcyB0aGUgZGVmYXVsdCBjbGljayBldmVudCBmcm9tIHRyaWdnZXJpbmcgYW5kIHN0b3JlcyB3aGVyZSB3ZSB0b3VjaGVkXG4gICAgICogQGlubmVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGpxRXZlbnQgVGhlIG5vcm1hbGlzZWQgalF1ZXJ5IGV2ZW50IG9iamVjdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0KGpxRXZlbnQpIHtcblxuICAgICAgLy9JZiB3ZSBhbHJlYWR5IGluIGEgdG91Y2ggZXZlbnQgKGEgZmluZ2VyIGFscmVhZHkgaW4gdXNlKSB0aGVuIGlnbm9yZSBzdWJzZXF1ZW50IG9uZXMuLlxuICAgICAgaWYgKGdldFRvdWNoSW5Qcm9ncmVzcygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy9DaGVjayBpZiB0aGlzIGVsZW1lbnQgbWF0Y2hlcyBhbnkgaW4gdGhlIGV4Y2x1ZGVkIGVsZW1lbnRzIHNlbGVjdG9ycywgIG9yIGl0cyBwYXJlbnQgaXMgZXhjbHVkZWQsIGlmIHNvLCBET04nVCBzd2lwZVxuICAgICAgaWYgKCQoanFFdmVudC50YXJnZXQpLmNsb3Nlc3Qob3B0aW9ucy5leGNsdWRlZEVsZW1lbnRzLCAkZWxlbWVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vQXMgd2UgdXNlIEpxdWVyeSBiaW5kIGZvciBldmVudHMsIHdlIG5lZWQgdG8gdGFyZ2V0IHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICAgIC8vSWYgdGhlc2UgZXZlbnRzIGFyZSBiZWluZyBwcm9ncmFtbWF0aWNhbGx5IHRyaWdnZXJlZCwgd2UgZG9uJ3QgaGF2ZSBhbiBvcmlnaW5hbCBldmVudCBvYmplY3QsIHNvIHVzZSB0aGUgSnEgb25lLlxuICAgICAgdmFyIGV2ZW50ID0ganFFdmVudC5vcmlnaW5hbEV2ZW50ID8ganFFdmVudC5vcmlnaW5hbEV2ZW50IDoganFFdmVudDtcblxuICAgICAgdmFyIHJldCxcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGV2dCA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdIDogZXZlbnQ7XG5cbiAgICAgIHBoYXNlID0gUEhBU0VfU1RBUlQ7XG5cbiAgICAgIC8vSWYgd2Ugc3VwcG9ydCB0b3VjaGVzLCBnZXQgdGhlIGZpbmdlciBjb3VudFxuICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgZmluZ2VycyB0b3VjaGluZyB0aGUgc2NyZWVuXG4gICAgICAgIGZpbmdlckNvdW50ID0gdG91Y2hlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgICAvL0Vsc2UgdGhpcyBpcyB0aGUgZGVza3RvcCwgc28gc3RvcCB0aGUgYnJvd3NlciBmcm9tIGRyYWdnaW5nIGNvbnRlbnRcbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHRFdmVudHMgIT09IGZhbHNlKSB7XG4gICAgICAgIGpxRXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9jYWxsIHRoaXMgb24ganEgZXZlbnQgc28gd2UgYXJlIGNyb3NzIGJyb3dzZXJcbiAgICAgIH1cblxuICAgICAgLy9jbGVhciB2YXJzLi5cbiAgICAgIGRpc3RhbmNlID0gMDtcbiAgICAgIGRpcmVjdGlvbiA9IG51bGw7XG4gICAgICBjdXJyZW50RGlyZWN0aW9uPW51bGw7XG4gICAgICBwaW5jaERpcmVjdGlvbiA9IG51bGw7XG4gICAgICBkdXJhdGlvbiA9IDA7XG4gICAgICBzdGFydFRvdWNoZXNEaXN0YW5jZSA9IDA7XG4gICAgICBlbmRUb3VjaGVzRGlzdGFuY2UgPSAwO1xuICAgICAgcGluY2hab29tID0gMTtcbiAgICAgIHBpbmNoRGlzdGFuY2UgPSAwO1xuICAgICAgbWF4aW11bXNNYXAgPSBjcmVhdGVNYXhpbXVtc0RhdGEoKTtcbiAgICAgIGNhbmNlbE11bHRpRmluZ2VyUmVsZWFzZSgpO1xuXG4gICAgICAvL0NyZWF0ZSB0aGUgZGVmYXVsdCBmaW5nZXIgZGF0YVxuICAgICAgY3JlYXRlRmluZ2VyRGF0YSgwLCBldnQpO1xuXG4gICAgICAvLyBjaGVjayB0aGUgbnVtYmVyIG9mIGZpbmdlcnMgaXMgd2hhdCB3ZSBhcmUgbG9va2luZyBmb3IsIG9yIHdlIGFyZSBjYXB0dXJpbmcgcGluY2hlc1xuICAgICAgaWYgKCF0b3VjaGVzIHx8IChmaW5nZXJDb3VudCA9PT0gb3B0aW9ucy5maW5nZXJzIHx8IG9wdGlvbnMuZmluZ2VycyA9PT0gQUxMX0ZJTkdFUlMpIHx8IGhhc1BpbmNoZXMoKSkge1xuICAgICAgICAvLyBnZXQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSB0b3VjaFxuICAgICAgICBzdGFydFRpbWUgPSBnZXRUaW1lU3RhbXAoKTtcblxuICAgICAgICBpZiAoZmluZ2VyQ291bnQgPT0gMikge1xuICAgICAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgaW5pdGlhbCBwaW5jaCBkaXN0YW5jZSwgc28gd2UgY2FuIGNhbGN1bGF0ZSB0aGUgZGlmZiBsYXRlclxuICAgICAgICAgIC8vU3RvcmUgc2Vjb25kIGZpbmdlciBkYXRhIGFzIHN0YXJ0XG4gICAgICAgICAgY3JlYXRlRmluZ2VyRGF0YSgxLCB0b3VjaGVzWzFdKTtcbiAgICAgICAgICBzdGFydFRvdWNoZXNEaXN0YW5jZSA9IGVuZFRvdWNoZXNEaXN0YW5jZSA9IGNhbGN1bGF0ZVRvdWNoZXNEaXN0YW5jZShmaW5nZXJEYXRhWzBdLnN0YXJ0LCBmaW5nZXJEYXRhWzFdLnN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnN3aXBlU3RhdHVzIHx8IG9wdGlvbnMucGluY2hTdGF0dXMpIHtcbiAgICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0EgdG91Y2ggd2l0aCBtb3JlIG9yIGxlc3MgdGhhbiB0aGUgZmluZ2VycyB3ZSBhcmUgbG9va2luZyBmb3IsIHNvIGNhbmNlbFxuICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9JZiB3ZSBoYXZlIGEgcmV0dXJuIHZhbHVlIGZyb20gdGhlIHVzZXJzIGhhbmRsZXIsIHRoZW4gcmV0dXJuIGFuZCBjYW5jZWxcbiAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHBoYXNlID0gUEhBU0VfQ0FOQ0VMO1xuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaG9sZCkge1xuICAgICAgICAgIGhvbGRUaW1lb3V0ID0gc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9UcmlnZ2VyIHRoZSBldmVudFxuICAgICAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignaG9sZCcsIFtldmVudC50YXJnZXRdKTtcbiAgICAgICAgICAgIC8vRmlyZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhvbGQpIHtcbiAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5ob2xkLmNhbGwoJGVsZW1lbnQsIGV2ZW50LCBldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpLCBvcHRpb25zLmxvbmdUYXBUaHJlc2hvbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VG91Y2hJblByb2dyZXNzKHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG5cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgdG91Y2ggbW92ZSBldmVudC5cbiAgICAgKiBJZiB3ZSBjaGFuZ2UgZmluZ2VycyBkdXJpbmcgbW92ZSwgdGhlbiBjYW5jZWwgdGhlIGV2ZW50XG4gICAgICogQGlubmVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGpxRXZlbnQgVGhlIG5vcm1hbGlzZWQgalF1ZXJ5IGV2ZW50IG9iamVjdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b3VjaE1vdmUoanFFdmVudCkge1xuXG4gICAgICAvL0FzIHdlIHVzZSBKcXVlcnkgYmluZCBmb3IgZXZlbnRzLCB3ZSBuZWVkIHRvIHRhcmdldCB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAgICAvL0lmIHRoZXNlIGV2ZW50cyBhcmUgYmVpbmcgcHJvZ3JhbW1hdGljYWxseSB0cmlnZ2VyZWQsIHdlIGRvbid0IGhhdmUgYW4gb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCBzbyB1c2UgdGhlIEpxIG9uZS5cbiAgICAgIHZhciBldmVudCA9IGpxRXZlbnQub3JpZ2luYWxFdmVudCA/IGpxRXZlbnQub3JpZ2luYWxFdmVudCA6IGpxRXZlbnQ7XG5cbiAgICAgIC8vSWYgd2UgYXJlIGVuZGluZywgY2FuY2VsbGluZywgb3Igd2l0aGluIHRoZSB0aHJlc2hvbGQgb2YgMiBmaW5nZXJzIGJlaW5nIHJlbGVhc2VkLCBkb24ndCB0cmFjayBhbnl0aGluZy4uXG4gICAgICBpZiAocGhhc2UgPT09IFBIQVNFX0VORCB8fCBwaGFzZSA9PT0gUEhBU0VfQ0FOQ0VMIHx8IGluTXVsdGlGaW5nZXJSZWxlYXNlKCkpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdmFyIHJldCxcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGV2dCA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdIDogZXZlbnQ7XG5cblxuICAgICAgLy9VcGRhdGUgdGhlICBmaW5nZXIgZGF0YVxuICAgICAgdmFyIGN1cnJlbnRGaW5nZXIgPSB1cGRhdGVGaW5nZXJEYXRhKGV2dCk7XG4gICAgICBlbmRUaW1lID0gZ2V0VGltZVN0YW1wKCk7XG5cbiAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgIGZpbmdlckNvdW50ID0gdG91Y2hlcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmhvbGQpXG4gICAgICAgIGNsZWFyVGltZW91dChob2xkVGltZW91dCk7XG5cbiAgICAgIHBoYXNlID0gUEhBU0VfTU9WRTtcblxuICAgICAgLy9JZiB3ZSBoYXZlIDIgZmluZ2VycyBnZXQgVG91Y2hlcyBkaXN0YW5jZSBhcyB3ZWxsXG4gICAgICBpZiAoZmluZ2VyQ291bnQgPT0gMikge1xuXG4gICAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgaW5pdGlhbCBwaW5jaCBkaXN0YW5jZSwgc28gd2UgY2FuIGNhbGN1bGF0ZSB0aGUgZGlmZiBsYXRlclxuICAgICAgICAvL1dlIGRvIHRoaXMgaGVyZSBhcyB3ZWxsIGFzIHRoZSBzdGFydCBldmVudCwgaW4gY2FzZSB0aGV5IHN0YXJ0IHdpdGggMSBmaW5nZXIsIGFuZCB0aGUgcHJlc3MgMiBmaW5nZXJzXG4gICAgICAgIGlmIChzdGFydFRvdWNoZXNEaXN0YW5jZSA9PSAwKSB7XG4gICAgICAgICAgLy9DcmVhdGUgc2Vjb25kIGZpbmdlciBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lLi4uXG4gICAgICAgICAgY3JlYXRlRmluZ2VyRGF0YSgxLCB0b3VjaGVzWzFdKTtcblxuICAgICAgICAgIHN0YXJ0VG91Y2hlc0Rpc3RhbmNlID0gZW5kVG91Y2hlc0Rpc3RhbmNlID0gY2FsY3VsYXRlVG91Y2hlc0Rpc3RhbmNlKGZpbmdlckRhdGFbMF0uc3RhcnQsIGZpbmdlckRhdGFbMV0uc3RhcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vRWxzZSBqdXN0IHVwZGF0ZSB0aGUgc2Vjb25kIGZpbmdlclxuICAgICAgICAgIHVwZGF0ZUZpbmdlckRhdGEodG91Y2hlc1sxXSk7XG5cbiAgICAgICAgICBlbmRUb3VjaGVzRGlzdGFuY2UgPSBjYWxjdWxhdGVUb3VjaGVzRGlzdGFuY2UoZmluZ2VyRGF0YVswXS5lbmQsIGZpbmdlckRhdGFbMV0uZW5kKTtcbiAgICAgICAgICBwaW5jaERpcmVjdGlvbiA9IGNhbGN1bGF0ZVBpbmNoRGlyZWN0aW9uKGZpbmdlckRhdGFbMF0uZW5kLCBmaW5nZXJEYXRhWzFdLmVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBwaW5jaFpvb20gPSBjYWxjdWxhdGVQaW5jaFpvb20oc3RhcnRUb3VjaGVzRGlzdGFuY2UsIGVuZFRvdWNoZXNEaXN0YW5jZSk7XG4gICAgICAgIHBpbmNoRGlzdGFuY2UgPSBNYXRoLmFicyhzdGFydFRvdWNoZXNEaXN0YW5jZSAtIGVuZFRvdWNoZXNEaXN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoZmluZ2VyQ291bnQgPT09IG9wdGlvbnMuZmluZ2VycyB8fCBvcHRpb25zLmZpbmdlcnMgPT09IEFMTF9GSU5HRVJTKSB8fCAhdG91Y2hlcyB8fCBoYXNQaW5jaGVzKCkpIHtcblxuICAgICAgICAvL1RoZSBvdmVyYWxsIGRpcmVjdGlvbiBvZiB0aGUgc3dpcGUuIEZyb20gc3RhcnQgdG8gbm93LlxuICAgICAgICBkaXJlY3Rpb24gPSBjYWxjdWxhdGVEaXJlY3Rpb24oY3VycmVudEZpbmdlci5zdGFydCwgY3VycmVudEZpbmdlci5lbmQpO1xuXG4gICAgICAgIC8vVGhlIGltbWVkaWF0ZSBkaXJlY3Rpb24gb2YgdGhlIHN3aXBlLCBkaXJlY3Rpb24gYmV0d2VlbiB0aGUgbGFzdCBtb3ZlbWVudCBhbmQgdGhpcyBvbmUuXG4gICAgICAgIGN1cnJlbnREaXJlY3Rpb24gPSBjYWxjdWxhdGVEaXJlY3Rpb24oY3VycmVudEZpbmdlci5sYXN0LCBjdXJyZW50RmluZ2VyLmVuZCk7XG5cbiAgICAgICAgLy9DaGVjayBpZiB3ZSBuZWVkIHRvIHByZXZlbnQgZGVmYXVsdCBldmVudCAocGFnZSBzY3JvbGwgLyBwaW5jaCB6b29tKSBvciBub3RcbiAgICAgICAgdmFsaWRhdGVEZWZhdWx0RXZlbnQoanFFdmVudCwgY3VycmVudERpcmVjdGlvbik7XG5cbiAgICAgICAgLy9EaXN0YW5jZSBhbmQgZHVyYXRpb24gYXJlIGFsbCBvZmYgdGhlIG1haW4gZmluZ2VyXG4gICAgICAgIGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoY3VycmVudEZpbmdlci5zdGFydCwgY3VycmVudEZpbmdlci5lbmQpO1xuICAgICAgICBkdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uKCk7XG5cbiAgICAgICAgLy9DYWNoZSB0aGUgbWF4aW11bSBkaXN0YW5jZSB3ZSBtYWRlIGluIHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIHNldE1heERpc3RhbmNlKGRpcmVjdGlvbiwgZGlzdGFuY2UpO1xuXG4gICAgICAgIC8vVHJpZ2dlciBzdGF0dXMgaGFuZGxlclxuICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuXG5cbiAgICAgICAgLy9JZiB3ZSB0cmlnZ2VyIGVuZCBldmVudHMgd2hlbiB0aHJlc2hvbGQgYXJlIG1ldCwgb3IgdHJpZ2dlciBldmVudHMgd2hlbiB0b3VjaCBsZWF2ZXMgZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMudHJpZ2dlck9uVG91Y2hFbmQgfHwgb3B0aW9ucy50cmlnZ2VyT25Ub3VjaExlYXZlKSB7XG5cbiAgICAgICAgICB2YXIgaW5Cb3VuZHMgPSB0cnVlO1xuXG4gICAgICAgICAgLy9JZiBjaGVja2luZyBpZiB3ZSBsZWF2ZSB0aGUgZWxlbWVudCwgcnVuIHRoZSBib3VuZHMgY2hlY2sgKHdlIGNhbiB1c2UgdG91Y2hsZWF2ZSBhcyBpdHMgbm90IHN1cHBvcnRlZCBvbiB3ZWJraXQpXG4gICAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlck9uVG91Y2hMZWF2ZSkge1xuICAgICAgICAgICAgdmFyIGJvdW5kcyA9IGdldGJvdW5kcyh0aGlzKTtcbiAgICAgICAgICAgIGluQm91bmRzID0gaXNJbkJvdW5kcyhjdXJyZW50RmluZ2VyLmVuZCwgYm91bmRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL1RyaWdnZXIgZW5kIGhhbmRsZXMgYXMgd2Ugc3dpcGUgaWYgdGhyZXNob2xkcyBtZXQgb3IgaWYgd2UgaGF2ZSBsZWZ0IHRoZSBlbGVtZW50IGlmIHRoZSB1c2VyIGhhcyBhc2tlZCB0byBjaGVjayB0aGVzZS4uXG4gICAgICAgICAgaWYgKCFvcHRpb25zLnRyaWdnZXJPblRvdWNoRW5kICYmIGluQm91bmRzKSB7XG4gICAgICAgICAgICBwaGFzZSA9IGdldE5leHRQaGFzZShQSEFTRV9NT1ZFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9XZSBlbmQgaWYgb3V0IG9mIGJvdW5kcyBoZXJlLCBzbyBzZXQgY3VycmVudCBwaGFzZSB0byBFTkQsIGFuZCBjaGVjayBpZiBpdHMgbW9kaWZpZWRcbiAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRyaWdnZXJPblRvdWNoTGVhdmUgJiYgIWluQm91bmRzKSB7XG4gICAgICAgICAgICBwaGFzZSA9IGdldE5leHRQaGFzZShQSEFTRV9FTkQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwaGFzZSA9PSBQSEFTRV9DQU5DRUwgfHwgcGhhc2UgPT0gUEhBU0VfRU5EKSB7XG4gICAgICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGhhc2UgPSBQSEFTRV9DQU5DRUw7XG4gICAgICAgIHRyaWdnZXJIYW5kbGVyKGV2ZW50LCBwaGFzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHBoYXNlID0gUEhBU0VfQ0FOQ0VMO1xuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgdG91Y2ggZW5kIGV2ZW50LlxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uIGFuZCB0cmlnZ2VyIGV2ZW50c1xuICAgICAqIEBpbm5lclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBqcUV2ZW50IFRoZSBub3JtYWxpc2VkIGpRdWVyeSBldmVudCBvYmplY3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdG91Y2hFbmQoanFFdmVudCkge1xuICAgICAgLy9BcyB3ZSB1c2UgSnF1ZXJ5IGJpbmQgZm9yIGV2ZW50cywgd2UgbmVlZCB0byB0YXJnZXQgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgICAgLy9JZiB0aGVzZSBldmVudHMgYXJlIGJlaW5nIHByb2dyYW1tYXRpY2FsbHkgdHJpZ2dlcmVkLCB3ZSBkb24ndCBoYXZlIGFuIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgc28gdXNlIHRoZSBKcSBvbmUuXG4gICAgICB2YXIgZXZlbnQgPSBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgPyBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgOiBqcUV2ZW50LFxuICAgICAgICB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcblxuICAgICAgLy9JZiB3ZSBhcmUgc3RpbGwgaW4gYSB0b3VjaCB3aXRoIHRoZSBkZXZpY2Ugd2FpdCBhIGZyYWN0aW9uIGFuZCBzZWUgaWYgdGhlIG90aGVyIGZpbmdlciBjb21lcyB1cFxuICAgICAgLy9pZiBpdCBkb2VzIHdpdGhpbiB0aGUgdGhyZXNob2xkLCB0aGVuIHdlIHRyZWF0IGl0IGFzIGEgbXVsdGkgcmVsZWFzZSwgbm90IGEgc2luZ2xlIHJlbGVhc2UgYW5kIGVuZCB0aGUgdG91Y2ggLyBzd2lwZVxuICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoICYmICFpbk11bHRpRmluZ2VyUmVsZWFzZSgpKSB7XG4gICAgICAgICAgc3RhcnRNdWx0aUZpbmdlclJlbGVhc2UoZXZlbnQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRvdWNoZXMubGVuZ3RoICYmIGluTXVsdGlGaW5nZXJSZWxlYXNlKCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL0lmIGEgcHJldmlvdXMgZmluZ2VyIGhhcyBiZWVuIHJlbGVhc2VkLCBjaGVjayBob3cgbG9uZyBhZ28sIGlmIHdpdGhpbiB0aGUgdGhyZXNob2xkLCB0aGVuIGFzc3VtZSBpdCB3YXMgYSBtdWx0aWZpbmdlciByZWxlYXNlLlxuICAgICAgLy9UaGlzIGlzIHVzZWQgdG8gYWxsb3cgMiBmaW5nZXJzIHRvIHJlbGVhc2UgZnJhY3Rpb25hbGx5IGFmdGVyIGVhY2ggb3RoZXIsIHdoaWxzdCBtYWludGFpbmluZyB0aGUgZXZlbnQgYXMgY29udGFpbmluZyAyIGZpbmdlcnMsIG5vdCAxXG4gICAgICBpZiAoaW5NdWx0aUZpbmdlclJlbGVhc2UoKSkge1xuICAgICAgICBmaW5nZXJDb3VudCA9IGZpbmdlckNvdW50QXRSZWxlYXNlO1xuICAgICAgfVxuXG4gICAgICAvL1NldCBlbmQgb2Ygc3dpcGVcbiAgICAgIGVuZFRpbWUgPSBnZXRUaW1lU3RhbXAoKTtcblxuICAgICAgLy9HZXQgZHVyYXRpb24gaW5jYXNlIG1vdmUgd2FzIG5ldmVyIGZpcmVkXG4gICAgICBkdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uKCk7XG5cbiAgICAgIC8vSWYgd2UgdHJpZ2dlciBoYW5kbGVycyBhdCBlbmQgb2Ygc3dpcGUgT1IsIHdlIHRyaWdnZXIgZHVyaW5nLCBidXQgdGhleSBkaWRudCB0cmlnZ2VyIGFuZCB3ZSBhcmUgc3RpbGwgaW4gdGhlIG1vdmUgcGhhc2VcbiAgICAgIGlmIChkaWRTd2lwZUJhY2tUb0NhbmNlbCgpIHx8ICF2YWxpZGF0ZVN3aXBlRGlzdGFuY2UoKSkge1xuICAgICAgICBwaGFzZSA9IFBIQVNFX0NBTkNFTDtcbiAgICAgICAgdHJpZ2dlckhhbmRsZXIoZXZlbnQsIHBoYXNlKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50cmlnZ2VyT25Ub3VjaEVuZCB8fCAob3B0aW9ucy50cmlnZ2VyT25Ub3VjaEVuZCA9PSBmYWxzZSAmJiBwaGFzZSA9PT0gUEhBU0VfTU9WRSkpIHtcbiAgICAgICAgLy9jYWxsIHRoaXMgb24ganEgZXZlbnQgc28gd2UgYXJlIGNyb3NzIGJyb3dzZXJcbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHRFdmVudHMgIT09IGZhbHNlKSB7XG4gICAgICAgICAganFFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHBoYXNlID0gUEhBU0VfRU5EO1xuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuICAgICAgfVxuICAgICAgLy9TcGVjaWFsIGNhc2VzIC0gQSB0YXAgc2hvdWxkIGFsd2F5cyBmaXJlIG9uIHRvdWNoIGVuZCByZWdhcmRsZXNzLFxuICAgICAgLy9TbyBoZXJlIHdlIG1hbnVhbGx5IHRyaWdnZXIgdGhlIHRhcCBlbmQgaGFuZGxlciBieSBpdHNlbGZcbiAgICAgIC8vV2UgZG9udCBydW4gdHJpZ2dlciBoYW5kbGVyIGFzIGl0IHdpbGwgcmUtdHJpZ2dlciBldmVudHMgdGhhdCBtYXkgaGF2ZSBmaXJlZCBhbHJlYWR5XG4gICAgICBlbHNlIGlmICghb3B0aW9ucy50cmlnZ2VyT25Ub3VjaEVuZCAmJiBoYXNUYXAoKSkge1xuICAgICAgICAvL1RyaWdnZXIgdGhlIHBpbmNoIGV2ZW50cy4uLlxuICAgICAgICBwaGFzZSA9IFBIQVNFX0VORDtcbiAgICAgICAgdHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlKGV2ZW50LCBwaGFzZSwgVEFQKTtcbiAgICAgIH0gZWxzZSBpZiAocGhhc2UgPT09IFBIQVNFX01PVkUpIHtcbiAgICAgICAgcGhhc2UgPSBQSEFTRV9DQU5DRUw7XG4gICAgICAgIHRyaWdnZXJIYW5kbGVyKGV2ZW50LCBwaGFzZSk7XG4gICAgICB9XG5cbiAgICAgIHNldFRvdWNoSW5Qcm9ncmVzcyhmYWxzZSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBhIHRvdWNoIGNhbmNlbCBldmVudC5cbiAgICAgKiBDbGVhcnMgY3VycmVudCB2YXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdG91Y2hDYW5jZWwoKSB7XG4gICAgICAvLyByZXNldCB0aGUgdmFyaWFibGVzIGJhY2sgdG8gZGVmYXVsdCB2YWx1ZXNcbiAgICAgIGZpbmdlckNvdW50ID0gMDtcbiAgICAgIGVuZFRpbWUgPSAwO1xuICAgICAgc3RhcnRUaW1lID0gMDtcbiAgICAgIHN0YXJ0VG91Y2hlc0Rpc3RhbmNlID0gMDtcbiAgICAgIGVuZFRvdWNoZXNEaXN0YW5jZSA9IDA7XG4gICAgICBwaW5jaFpvb20gPSAxO1xuXG4gICAgICAvL0lmIHdlIHdlcmUgaW4gcHJvZ3Jlc3Mgb2YgdHJhY2tpbmcgYSBwb3NzaWJsZSBtdWx0aSB0b3VjaCBlbmQsIHRoZW4gcmUgc2V0IGl0LlxuICAgICAgY2FuY2VsTXVsdGlGaW5nZXJSZWxlYXNlKCk7XG5cbiAgICAgIHNldFRvdWNoSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBhIHRvdWNoIGxlYXZlIGV2ZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB0cmlnZ2VyZWQgb24gZGVza3RvcHMsIGluIHRvdWNoIHdlIHdvcmsgdGhpcyBvdXQgbWFudWFsbHlcbiAgICAgKiBhcyB0aGUgdG91Y2hsZWF2ZSBldmVudCBpcyBub3Qgc3VwcG9ydGVkIGluIHdlYmtpdFxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRvdWNoTGVhdmUoanFFdmVudCkge1xuICAgICAgLy9JZiB0aGVzZSBldmVudHMgYXJlIGJlaW5nIHByb2dyYW1tYXRpY2FsbHkgdHJpZ2dlcmVkLCB3ZSBkb24ndCBoYXZlIGFuIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgc28gdXNlIHRoZSBKcSBvbmUuXG4gICAgICB2YXIgZXZlbnQgPSBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgPyBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgOiBqcUV2ZW50O1xuXG4gICAgICAvL0lmIHdlIGhhdmUgdGhlIHRyaWdnZXIgb24gbGVhdmUgcHJvcGVydHkgc2V0Li4uLlxuICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlck9uVG91Y2hMZWF2ZSkge1xuICAgICAgICBwaGFzZSA9IGdldE5leHRQaGFzZShQSEFTRV9FTkQpO1xuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0aGF0IHdlcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwbHVnaW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICAkZWxlbWVudC51bmJpbmQoU1RBUlRfRVYsIHRvdWNoU3RhcnQpO1xuICAgICAgJGVsZW1lbnQudW5iaW5kKENBTkNFTF9FViwgdG91Y2hDYW5jZWwpO1xuICAgICAgJGVsZW1lbnQudW5iaW5kKE1PVkVfRVYsIHRvdWNoTW92ZSk7XG4gICAgICAkZWxlbWVudC51bmJpbmQoRU5EX0VWLCB0b3VjaEVuZCk7XG5cbiAgICAgIC8vd2Ugb25seSBoYXZlIGxlYXZlIGV2ZW50cyBvbiBkZXNrdG9wLCB3ZSBtYW51YWxseSBjYWxjdWxhdGUgbGVhdmUgb24gdG91Y2ggYXMgaXRzIG5vdCBzdXBwb3J0ZWQgaW4gd2Via2l0XG4gICAgICBpZiAoTEVBVkVfRVYpIHtcbiAgICAgICAgJGVsZW1lbnQudW5iaW5kKExFQVZFX0VWLCB0b3VjaExlYXZlKTtcbiAgICAgIH1cblxuICAgICAgc2V0VG91Y2hJblByb2dyZXNzKGZhbHNlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgdGltZSBhbmQgZGlzdGFuY2UgdGhyZXNob2xkcyBoYXZlIGJlZW4gbWV0LCBhbmQgaWYgc28gdGhlbiB0aGUgYXBwcm9wcmlhdGUgaGFuZGxlcnMgYXJlIGZpcmVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE5leHRQaGFzZShjdXJyZW50UGhhc2UpIHtcblxuICAgICAgdmFyIG5leHRQaGFzZSA9IGN1cnJlbnRQaGFzZTtcblxuICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdmFsaWQgc3dpcGUgKHVuZGVyIHRpbWUgYW5kIG92ZXIgZGlzdGFuY2UgIGFuZCBjaGVjayBpZiB3ZSBhcmUgb3V0IG9mIGJvdW5kLi4uKVxuICAgICAgdmFyIHZhbGlkVGltZSA9IHZhbGlkYXRlU3dpcGVUaW1lKCk7XG4gICAgICB2YXIgdmFsaWREaXN0YW5jZSA9IHZhbGlkYXRlU3dpcGVEaXN0YW5jZSgpO1xuICAgICAgdmFyIGRpZENhbmNlbCA9IGRpZFN3aXBlQmFja1RvQ2FuY2VsKCk7XG5cbiAgICAgIC8vSWYgd2UgaGF2ZSBleGNlZWRlZCBvdXIgdGltZSwgdGhlbiBjYW5jZWxcbiAgICAgIGlmICghdmFsaWRUaW1lIHx8IGRpZENhbmNlbCkge1xuICAgICAgICBuZXh0UGhhc2UgPSBQSEFTRV9DQU5DRUw7XG4gICAgICB9XG4gICAgICAvL0Vsc2UgaWYgd2UgYXJlIG1vdmluZywgYW5kIGhhdmUgcmVhY2hlZCBkaXN0YW5jZSB0aGVuIGVuZFxuICAgICAgZWxzZSBpZiAodmFsaWREaXN0YW5jZSAmJiBjdXJyZW50UGhhc2UgPT0gUEhBU0VfTU9WRSAmJiAoIW9wdGlvbnMudHJpZ2dlck9uVG91Y2hFbmQgfHwgb3B0aW9ucy50cmlnZ2VyT25Ub3VjaExlYXZlKSkge1xuICAgICAgICBuZXh0UGhhc2UgPSBQSEFTRV9FTkQ7XG4gICAgICB9XG4gICAgICAvL0Vsc2UgaWYgd2UgaGF2ZSBlbmRlZCBieSBsZWF2aW5nIGFuZCBkaWRuJ3QgcmVhY2ggZGlzdGFuY2UsIHRoZW4gY2FuY2VsXG4gICAgICBlbHNlIGlmICghdmFsaWREaXN0YW5jZSAmJiBjdXJyZW50UGhhc2UgPT0gUEhBU0VfRU5EICYmIG9wdGlvbnMudHJpZ2dlck9uVG91Y2hMZWF2ZSkge1xuICAgICAgICBuZXh0UGhhc2UgPSBQSEFTRV9DQU5DRUw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0UGhhc2U7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIHRoZSByZWxldmFudCBldmVudCBoYW5kbGVyXG4gICAgICogVGhlIGhhbmRsZXJzIGFyZSBwYXNzZWQgdGhlIG9yaWdpbmFsIGV2ZW50LCB0aGUgZWxlbWVudCB0aGF0IHdhcyBzd2lwZWQsIGFuZCBpbiB0aGUgY2FzZSBvZiB0aGUgY2F0Y2ggYWxsIGhhbmRsZXIsIHRoZSBkaXJlY3Rpb24gdGhhdCB3YXMgc3dpcGVkLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcInVwXCIsIG9yIFwiZG93blwiXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGhhc2UgdGhlIHBoYXNlIG9mIHRoZSBzd2lwZSAoc3RhcnQsIGVuZCBjYW5jZWwgZXRjKSB7QGxpbmsgJC5mbi5zd2lwZS5waGFzZXN9XG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJpZ2dlckhhbmRsZXIoZXZlbnQsIHBoYXNlKSB7XG5cblxuXG4gICAgICB2YXIgcmV0LFxuICAgICAgICB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcblxuICAgICAgLy8gU1dJUEUgR0VTVFVSRVNcbiAgICAgIGlmIChkaWRTd2lwZSgpIHx8IGhhc1N3aXBlcygpKSB7XG4gICAgICAgICAgcmV0ID0gdHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlKGV2ZW50LCBwaGFzZSwgU1dJUEUpO1xuICAgICAgfVxuXG4gICAgICAvLyBQSU5DSCBHRVNUVVJFUyAoaWYgdGhlIGFib3ZlIGRpZG4ndCBjYW5jZWwpXG4gICAgICBpZiAoKGRpZFBpbmNoKCkgfHwgaGFzUGluY2hlcygpKSAmJiByZXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0ID0gdHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlKGV2ZW50LCBwaGFzZSwgUElOQ0gpO1xuICAgICAgfVxuXG4gICAgICAvLyBDTElDSyAvIFRBUCAoaWYgdGhlIGFib3ZlIGRpZG4ndCBjYW5jZWwpXG4gICAgICBpZiAoZGlkRG91YmxlVGFwKCkgJiYgcmV0ICE9PSBmYWxzZSkge1xuICAgICAgICAvL1RyaWdnZXIgdGhlIHRhcCBldmVudHMuLi5cbiAgICAgICAgcmV0ID0gdHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlKGV2ZW50LCBwaGFzZSwgRE9VQkxFX1RBUCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENMSUNLIC8gVEFQIChpZiB0aGUgYWJvdmUgZGlkbid0IGNhbmNlbClcbiAgICAgIGVsc2UgaWYgKGRpZExvbmdUYXAoKSAmJiByZXQgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vVHJpZ2dlciB0aGUgdGFwIGV2ZW50cy4uLlxuICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlckZvckdlc3R1cmUoZXZlbnQsIHBoYXNlLCBMT05HX1RBUCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENMSUNLIC8gVEFQIChpZiB0aGUgYWJvdmUgZGlkbid0IGNhbmNlbClcbiAgICAgIGVsc2UgaWYgKGRpZFRhcCgpICYmIHJldCAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy9UcmlnZ2VyIHRoZSB0YXAgZXZlbnQuLlxuICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlckZvckdlc3R1cmUoZXZlbnQsIHBoYXNlLCBUQVApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSBhcmUgY2FuY2VsbGluZyB0aGUgZ2VzdHVyZSwgdGhlbiBtYW51YWxseSB0cmlnZ2VyIHRoZSByZXNldCBoYW5kbGVyXG4gICAgICBpZiAocGhhc2UgPT09IFBIQVNFX0NBTkNFTCkge1xuICAgICAgICBpZiAoaGFzU3dpcGVzKCkpIHtcbiAgICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlckZvckdlc3R1cmUoZXZlbnQsIHBoYXNlLCBTV0lQRSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzUGluY2hlcygpKSB7XG4gICAgICAgICAgcmV0ID0gdHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlKGV2ZW50LCBwaGFzZSwgUElOQ0gpO1xuICAgICAgICB9XG4gICAgICAgIHRvdWNoQ2FuY2VsKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgYXJlIGVuZGluZyB0aGUgZ2VzdHVyZSwgdGhlbiBtYW51YWxseSB0cmlnZ2VyIHRoZSByZXNldCBoYW5kbGVyIElGIGFsbCBmaW5nZXJzIGFyZSBvZmZcbiAgICAgIGlmIChwaGFzZSA9PT0gUEhBU0VfRU5EKSB7XG4gICAgICAgIC8vSWYgd2Ugc3VwcG9ydCB0b3VjaCwgdGhlbiBjaGVjayB0aGF0IGFsbCBmaW5nZXJzIGFyZSBvZmYgYmVmb3JlIHdlIGNhbmNlbFxuICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgIGlmICghdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvdWNoQ2FuY2VsKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG91Y2hDYW5jZWwoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgdGhlIHJlbGV2YW50IGV2ZW50IGhhbmRsZXJcbiAgICAgKiBUaGUgaGFuZGxlcnMgYXJlIHBhc3NlZCB0aGUgb3JpZ2luYWwgZXZlbnQsIHRoZSBlbGVtZW50IHRoYXQgd2FzIHN3aXBlZCwgYW5kIGluIHRoZSBjYXNlIG9mIHRoZSBjYXRjaCBhbGwgaGFuZGxlciwgdGhlIGRpcmVjdGlvbiB0aGF0IHdhcyBzd2lwZWQsIFwibGVmdFwiLCBcInJpZ2h0XCIsIFwidXBcIiwgb3IgXCJkb3duXCJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwaGFzZSB0aGUgcGhhc2Ugb2YgdGhlIHN3aXBlIChzdGFydCwgZW5kIGNhbmNlbCBldGMpIHtAbGluayAkLmZuLnN3aXBlLnBoYXNlc31cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ2VzdHVyZSB0aGUgZ2VzdHVyZSB0byB0cmlnZ2VyIGEgaGFuZGxlciBmb3IgOiBQSU5DSCBvciBTV0lQRSB7QGxpbmsgJC5mbi5zd2lwZS5nZXN0dXJlc31cbiAgICAgKiBAcmV0dXJuIEJvb2xlYW4gRmFsc2UsIHRvIGluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHNob3VsZCBzdG9wIHByb3BhZ2F0aW9uLCBvciB2b2lkLlxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyRm9yR2VzdHVyZShldmVudCwgcGhhc2UsIGdlc3R1cmUpIHtcblxuICAgICAgdmFyIHJldDtcblxuICAgICAgLy9TV0lQRVMuLi4uXG4gICAgICBpZiAoZ2VzdHVyZSA9PSBTV0lQRSkge1xuICAgICAgICAvL1RyaWdnZXIgc3RhdHVzIGV2ZXJ5IHRpbWUuLlxuICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdzd2lwZVN0YXR1cycsIFtwaGFzZSwgZGlyZWN0aW9uIHx8IG51bGwsIGRpc3RhbmNlIHx8IDAsIGR1cmF0aW9uIHx8IDAsIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uXSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVTdGF0dXMpIHtcbiAgICAgICAgICByZXQgPSBvcHRpb25zLnN3aXBlU3RhdHVzLmNhbGwoJGVsZW1lbnQsIGV2ZW50LCBwaGFzZSwgZGlyZWN0aW9uIHx8IG51bGwsIGRpc3RhbmNlIHx8IDAsIGR1cmF0aW9uIHx8IDAsIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uKTtcbiAgICAgICAgICAvL0lmIHRoZSBzdGF0dXMgY2FuY2VscywgdGhlbiBkb250IHJ1biB0aGUgc3Vic2VxdWVudCBldmVudCBoYW5kbGVycy4uXG4gICAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaGFzZSA9PSBQSEFTRV9FTkQgJiYgdmFsaWRhdGVTd2lwZSgpKSB7XG5cbiAgICAgICAgICAvL0NhbmNlbCBhbnkgdGFwcyB0aGF0IHdlcmUgaW4gcHJvZ3Jlc3MuLi5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2luZ2xlVGFwVGltZW91dCk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lb3V0KTtcblxuICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3N3aXBlJywgW2RpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbl0pO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGUpIHtcbiAgICAgICAgICAgIHJldCA9IG9wdGlvbnMuc3dpcGUuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbik7XG4gICAgICAgICAgICAvL0lmIHRoZSBzdGF0dXMgY2FuY2VscywgdGhlbiBkb250IHJ1biB0aGUgc3Vic2VxdWVudCBldmVudCBoYW5kbGVycy4uXG4gICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vdHJpZ2dlciBkaXJlY3Rpb24gc3BlY2lmaWMgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBMRUZUOlxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdzd2lwZUxlZnQnLCBbZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uXSk7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVMZWZ0KSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5zd2lwZUxlZnQuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUklHSFQ6XG4gICAgICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3N3aXBlUmlnaHQnLCBbZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uXSk7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVSaWdodCkge1xuICAgICAgICAgICAgICAgIHJldCA9IG9wdGlvbnMuc3dpcGVSaWdodC5jYWxsKCRlbGVtZW50LCBldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBVUDpcbiAgICAgICAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignc3dpcGVVcCcsIFtkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEsIGN1cnJlbnREaXJlY3Rpb25dKTtcblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zd2lwZVVwKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5zd2lwZVVwLmNhbGwoJGVsZW1lbnQsIGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEsIGN1cnJlbnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERPV046XG4gICAgICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3N3aXBlRG93bicsIFtkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEsIGN1cnJlbnREaXJlY3Rpb25dKTtcblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zd2lwZURvd24pIHtcbiAgICAgICAgICAgICAgICByZXQgPSBvcHRpb25zLnN3aXBlRG93bi5jYWxsKCRlbGVtZW50LCBldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvL1BJTkNIRVMuLi4uXG4gICAgICBpZiAoZ2VzdHVyZSA9PSBQSU5DSCkge1xuICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdwaW5jaFN0YXR1cycsIFtwaGFzZSwgcGluY2hEaXJlY3Rpb24gfHwgbnVsbCwgcGluY2hEaXN0YW5jZSB8fCAwLCBkdXJhdGlvbiB8fCAwLCBmaW5nZXJDb3VudCwgcGluY2hab29tLCBmaW5nZXJEYXRhXSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucGluY2hTdGF0dXMpIHtcbiAgICAgICAgICByZXQgPSBvcHRpb25zLnBpbmNoU3RhdHVzLmNhbGwoJGVsZW1lbnQsIGV2ZW50LCBwaGFzZSwgcGluY2hEaXJlY3Rpb24gfHwgbnVsbCwgcGluY2hEaXN0YW5jZSB8fCAwLCBkdXJhdGlvbiB8fCAwLCBmaW5nZXJDb3VudCwgcGluY2hab29tLCBmaW5nZXJEYXRhKTtcbiAgICAgICAgICAvL0lmIHRoZSBzdGF0dXMgY2FuY2VscywgdGhlbiBkb250IHJ1biB0aGUgc3Vic2VxdWVudCBldmVudCBoYW5kbGVycy4uXG4gICAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaGFzZSA9PSBQSEFTRV9FTkQgJiYgdmFsaWRhdGVQaW5jaCgpKSB7XG5cbiAgICAgICAgICBzd2l0Y2ggKHBpbmNoRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIElOOlxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdwaW5jaEluJywgW3BpbmNoRGlyZWN0aW9uIHx8IG51bGwsIHBpbmNoRGlzdGFuY2UgfHwgMCwgZHVyYXRpb24gfHwgMCwgZmluZ2VyQ291bnQsIHBpbmNoWm9vbSwgZmluZ2VyRGF0YV0pO1xuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnBpbmNoSW4pIHtcbiAgICAgICAgICAgICAgICByZXQgPSBvcHRpb25zLnBpbmNoSW4uY2FsbCgkZWxlbWVudCwgZXZlbnQsIHBpbmNoRGlyZWN0aW9uIHx8IG51bGwsIHBpbmNoRGlzdGFuY2UgfHwgMCwgZHVyYXRpb24gfHwgMCwgZmluZ2VyQ291bnQsIHBpbmNoWm9vbSwgZmluZ2VyRGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgT1VUOlxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdwaW5jaE91dCcsIFtwaW5jaERpcmVjdGlvbiB8fCBudWxsLCBwaW5jaERpc3RhbmNlIHx8IDAsIGR1cmF0aW9uIHx8IDAsIGZpbmdlckNvdW50LCBwaW5jaFpvb20sIGZpbmdlckRhdGFdKTtcblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5waW5jaE91dCkge1xuICAgICAgICAgICAgICAgIHJldCA9IG9wdGlvbnMucGluY2hPdXQuY2FsbCgkZWxlbWVudCwgZXZlbnQsIHBpbmNoRGlyZWN0aW9uIHx8IG51bGwsIHBpbmNoRGlzdGFuY2UgfHwgMCwgZHVyYXRpb24gfHwgMCwgZmluZ2VyQ291bnQsIHBpbmNoWm9vbSwgZmluZ2VyRGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChnZXN0dXJlID09IFRBUCkge1xuICAgICAgICBpZiAocGhhc2UgPT09IFBIQVNFX0NBTkNFTCB8fCBwaGFzZSA9PT0gUEhBU0VfRU5EKSB7XG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2luZ2xlVGFwVGltZW91dCk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lb3V0KTtcblxuICAgICAgICAgIC8vSWYgd2UgYXJlIGFsc28gbG9va2luZyBmb3IgZG91YmVsVGFwcywgd2FpdCBpbmNhc2UgdGhpcyBpcyBvbmUuLi5cbiAgICAgICAgICBpZiAoaGFzRG91YmxlVGFwKCkgJiYgIWluRG91YmxlVGFwKCkpIHtcbiAgICAgICAgICAgIGRvdWJsZVRhcFN0YXJ0VGltZSA9IGdldFRpbWVTdGFtcCgpO1xuXG4gICAgICAgICAgICAvL05vdyB3YWl0IGZvciB0aGUgZG91YmxlIHRhcCB0aW1lb3V0LCBhbmQgdHJpZ2dlciB0aGlzIHNpbmdsZSB0YXBcbiAgICAgICAgICAgIC8vaWYgaXRzIG5vdCBjYW5jZWxsZWQgYnkgYSBkb3VibGUgdGFwXG4gICAgICAgICAgICBzaW5nbGVUYXBUaW1lb3V0ID0gc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBkb3VibGVUYXBTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCd0YXAnLCBbZXZlbnQudGFyZ2V0XSk7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGFwKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy50YXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLCBvcHRpb25zLmRvdWJsZVRhcFRocmVzaG9sZCk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG91YmxlVGFwU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3RhcCcsIFtldmVudC50YXJnZXRdKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRhcCkge1xuICAgICAgICAgICAgICByZXQgPSBvcHRpb25zLnRhcC5jYWxsKCRlbGVtZW50LCBldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZSA9PSBET1VCTEVfVEFQKSB7XG4gICAgICAgIGlmIChwaGFzZSA9PT0gUEhBU0VfQ0FOQ0VMIHx8IHBoYXNlID09PSBQSEFTRV9FTkQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2luZ2xlVGFwVGltZW91dCk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lb3V0KTtcbiAgICAgICAgICBkb3VibGVUYXBTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ2RvdWJsZXRhcCcsIFtldmVudC50YXJnZXRdKTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmRvdWJsZVRhcCkge1xuICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5kb3VibGVUYXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGdlc3R1cmUgPT0gTE9OR19UQVApIHtcbiAgICAgICAgaWYgKHBoYXNlID09PSBQSEFTRV9DQU5DRUwgfHwgcGhhc2UgPT09IFBIQVNFX0VORCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzaW5nbGVUYXBUaW1lb3V0KTtcbiAgICAgICAgICBkb3VibGVUYXBTdGFydFRpbWUgPSBudWxsO1xuXG4gICAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignbG9uZ3RhcCcsIFtldmVudC50YXJnZXRdKTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5sb25nVGFwKSB7XG4gICAgICAgICAgICByZXQgPSBvcHRpb25zLmxvbmdUYXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIC8vIEdFU1RVUkUgVkFMSURBVElPTlxuICAgIC8vXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlIHVzZXIgaGFzIHN3aXBlIGZhciBlbm91Z2hcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW4gaWYgPGNvZGU+dGhyZXNob2xkPC9jb2RlPiBoYXMgYmVlbiBzZXQsIHJldHVybiB0cnVlIGlmIHRoZSB0aHJlc2hvbGQgd2FzIG1ldCwgZWxzZSBmYWxzZS5cbiAgICAgKiBJZiBubyB0aHJlc2hvbGQgd2FzIHNldCwgdGhlbiB3ZSByZXR1cm4gdHJ1ZS5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVN3aXBlRGlzdGFuY2UoKSB7XG4gICAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgICAgLy9JZiB3ZSBtYWRlIGl0IHBhc3QgdGhlIG1pbiBzd2lwZSBkaXN0YW5jZS4uXG4gICAgICBpZiAob3B0aW9ucy50aHJlc2hvbGQgIT09IG51bGwpIHtcbiAgICAgICAgdmFsaWQgPSBkaXN0YW5jZSA+PSBvcHRpb25zLnRocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgdXNlciBoYXMgc3dpcGVkIGJhY2sgdG8gY2FuY2VsLlxuICAgICAqIEByZXR1cm4gQm9vbGVhbiBpZiA8Y29kZT5jYW5jZWxUaHJlc2hvbGQ8L2NvZGU+IGhhcyBiZWVuIHNldCwgcmV0dXJuIHRydWUgaWYgdGhlIGNhbmNlbFRocmVzaG9sZCB3YXMgbWV0LCBlbHNlIGZhbHNlLlxuICAgICAqIElmIG5vIGNhbmNlbFRocmVzaG9sZCB3YXMgc2V0LCB0aGVuIHdlIHJldHVybiB0cnVlLlxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpZFN3aXBlQmFja1RvQ2FuY2VsKCkge1xuICAgICAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgaWYgKG9wdGlvbnMuY2FuY2VsVGhyZXNob2xkICE9PSBudWxsICYmIGRpcmVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxsZWQgPSAoZ2V0TWF4RGlzdGFuY2UoZGlyZWN0aW9uKSAtIGRpc3RhbmNlKSA+PSBvcHRpb25zLmNhbmNlbFRocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbmNlbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlIHVzZXIgaGFzIHBpbmNoZWQgZmFyIGVub3VnaFxuICAgICAqIEByZXR1cm4gQm9vbGVhbiBpZiA8Y29kZT5waW5jaFRocmVzaG9sZDwvY29kZT4gaGFzIGJlZW4gc2V0LCByZXR1cm4gdHJ1ZSBpZiB0aGUgdGhyZXNob2xkIHdhcyBtZXQsIGVsc2UgZmFsc2UuXG4gICAgICogSWYgbm8gdGhyZXNob2xkIHdhcyBzZXQsIHRoZW4gd2UgcmV0dXJuIHRydWUuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQaW5jaERpc3RhbmNlKCkge1xuICAgICAgaWYgKG9wdGlvbnMucGluY2hUaHJlc2hvbGQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHBpbmNoRGlzdGFuY2UgPj0gb3B0aW9ucy5waW5jaFRocmVzaG9sZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGF0IHRoZSB0aW1lIHRha2VuIHRvIHN3aXBlIG1lZXRzIHRoZSBtaW5pbXVtIC8gbWF4aW11bSByZXF1aXJlbWVudHNcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVN3aXBlVGltZSgpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICAvL0lmIG5vIHRpbWUgc2V0LCB0aGVuIHJldHVybiB0cnVlXG4gICAgICBpZiAob3B0aW9ucy5tYXhUaW1lVGhyZXNob2xkKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA+PSBvcHRpb25zLm1heFRpbWVUaHJlc2hvbGQpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgZGlyZWN0aW9uIG9mIHRoZSBzd2lwZSBhbmQgdGhlIHZhbHVlIGFsbG93UGFnZVNjcm9sbCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFsbG93IG9yIHByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIGZyb20gb2NjdXJyaW5nLlxuICAgICAqIFRoaXMgd2lsbCBlc3NlbnRpYWxseSBhbGxvdyBwYWdlIHNjcm9sbGluZyBvciBub3Qgd2hlbiB0aGUgdXNlciBpcyBzd2lwaW5nIG9uIGEgdG91Y2hTd2lwZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGpxRXZlbnQgVGhlIG5vcm1hbGlzZWQgalF1ZXJ5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBldmVudCBvYmplY3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIG9mIHRoZSBldmVudC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XG4gICAgICogQHNlZSAkLmZuLnN3aXBlLmRpcmVjdGlvbnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZURlZmF1bHRFdmVudChqcUV2ZW50LCBkaXJlY3Rpb24pIHtcblxuICAgICAgLy9JZiB0aGUgb3B0aW9uIGlzIHNldCwgYWxsd2F5cyBhbGxvdyB0aGUgZXZlbnQgdG8gYnViYmxlIHVwIChsZXQgdXNlciBoYW5kbGUgd2VpcmRuZXNzKVxuICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHRFdmVudHMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWxsb3dQYWdlU2Nyb2xsID09PSBOT05FKSB7XG4gICAgICAgIGpxRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhdXRvID0gb3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgPT09IEFVVE87XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIExFRlQ6XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMuc3dpcGVMZWZ0ICYmIGF1dG8pIHx8ICghYXV0byAmJiBvcHRpb25zLmFsbG93UGFnZVNjcm9sbCAhPSBIT1JJWk9OVEFMKSkge1xuICAgICAgICAgICAgICBqcUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgUklHSFQ6XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMuc3dpcGVSaWdodCAmJiBhdXRvKSB8fCAoIWF1dG8gJiYgb3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgIT0gSE9SSVpPTlRBTCkpIHtcbiAgICAgICAgICAgICAganFFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFVQOlxuICAgICAgICAgICAgaWYgKChvcHRpb25zLnN3aXBlVXAgJiYgYXV0bykgfHwgKCFhdXRvICYmIG9wdGlvbnMuYWxsb3dQYWdlU2Nyb2xsICE9IFZFUlRJQ0FMKSkge1xuICAgICAgICAgICAgICBqcUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgRE9XTjpcbiAgICAgICAgICAgIGlmICgob3B0aW9ucy5zd2lwZURvd24gJiYgYXV0bykgfHwgKCFhdXRvICYmIG9wdGlvbnMuYWxsb3dQYWdlU2Nyb2xsICE9IFZFUlRJQ0FMKSkge1xuICAgICAgICAgICAgICBqcUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvLyBQSU5DSEVTXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIG9mIHRoZSBjdXJyZW50IHBpbmNoIG1lZXRzIHRoZSB0aHJlc2hvbGRzXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQaW5jaCgpIHtcbiAgICAgIHZhciBoYXNDb3JyZWN0RmluZ2VyQ291bnQgPSB2YWxpZGF0ZUZpbmdlcnMoKTtcbiAgICAgIHZhciBoYXNFbmRQb2ludCA9IHZhbGlkYXRlRW5kUG9pbnQoKTtcbiAgICAgIHZhciBoYXNDb3JyZWN0RGlzdGFuY2UgPSB2YWxpZGF0ZVBpbmNoRGlzdGFuY2UoKTtcbiAgICAgIHJldHVybiBoYXNDb3JyZWN0RmluZ2VyQ291bnQgJiYgaGFzRW5kUG9pbnQgJiYgaGFzQ29ycmVjdERpc3RhbmNlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFueSBQaW5jaCBldmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNQaW5jaGVzKCkge1xuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xuICAgICAgcmV0dXJuICEhKG9wdGlvbnMucGluY2hTdGF0dXMgfHwgb3B0aW9ucy5waW5jaEluIHx8IG9wdGlvbnMucGluY2hPdXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgZGV0ZWN0aW5nIHBpbmNoZXMsIGFuZCBoYXZlIG9uZVxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpZFBpbmNoKCkge1xuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xuICAgICAgcmV0dXJuICEhKHZhbGlkYXRlUGluY2goKSAmJiBoYXNQaW5jaGVzKCkpO1xuICAgIH1cblxuXG5cblxuICAgIC8vIFNXSVBFU1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBzd2lwZSBtZWV0cyB0aGUgdGhyZXNob2xkc1xuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlU3dpcGUoKSB7XG4gICAgICAvL0NoZWNrIHZhbGlkaXR5IG9mIHN3aXBlXG4gICAgICB2YXIgaGFzVmFsaWRUaW1lID0gdmFsaWRhdGVTd2lwZVRpbWUoKTtcbiAgICAgIHZhciBoYXNWYWxpZERpc3RhbmNlID0gdmFsaWRhdGVTd2lwZURpc3RhbmNlKCk7XG4gICAgICB2YXIgaGFzQ29ycmVjdEZpbmdlckNvdW50ID0gdmFsaWRhdGVGaW5nZXJzKCk7XG4gICAgICB2YXIgaGFzRW5kUG9pbnQgPSB2YWxpZGF0ZUVuZFBvaW50KCk7XG4gICAgICB2YXIgZGlkQ2FuY2VsID0gZGlkU3dpcGVCYWNrVG9DYW5jZWwoKTtcblxuICAgICAgLy8gaWYgdGhlIHVzZXIgc3dpcGVkIG1vcmUgdGhhbiB0aGUgbWluaW11bSBsZW5ndGgsIHBlcmZvcm0gdGhlIGFwcHJvcHJpYXRlIGFjdGlvblxuICAgICAgLy8gaGFzVmFsaWREaXN0YW5jZSBpcyBudWxsIHdoZW4gbm8gZGlzdGFuY2UgaXMgc2V0XG4gICAgICB2YXIgdmFsaWQgPSAhZGlkQ2FuY2VsICYmIGhhc0VuZFBvaW50ICYmIGhhc0NvcnJlY3RGaW5nZXJDb3VudCAmJiBoYXNWYWxpZERpc3RhbmNlICYmIGhhc1ZhbGlkVGltZTtcblxuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbnkgU3dpcGUgZXZlbnRzIGhhdmUgYmVlbiByZWdpc3RlcmVkXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU3dpcGVzKCkge1xuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xuICAgICAgcmV0dXJuICEhKG9wdGlvbnMuc3dpcGUgfHwgb3B0aW9ucy5zd2lwZVN0YXR1cyB8fCBvcHRpb25zLnN3aXBlTGVmdCB8fCBvcHRpb25zLnN3aXBlUmlnaHQgfHwgb3B0aW9ucy5zd2lwZVVwIHx8IG9wdGlvbnMuc3dpcGVEb3duKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgZGV0ZWN0aW5nIHN3aXBlcyBhbmQgaGF2ZSBvbmVcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaWRTd2lwZSgpIHtcbiAgICAgIC8vRW51cmUgd2UgZG9udCByZXR1cm4gMCBvciBudWxsIGZvciBmYWxzZSB2YWx1ZXNcbiAgICAgIHJldHVybiAhISh2YWxpZGF0ZVN3aXBlKCkgJiYgaGFzU3dpcGVzKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBoYXZlIG1hdGNoZWQgdGhlIG51bWJlciBvZiBmaW5nZXJzIHdlIGFyZSBsb29raW5nIGZvclxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmluZ2VycygpIHtcbiAgICAgIC8vVGhlIG51bWJlciBvZiBmaW5nZXJzIHdlIHdhbnQgd2VyZSBtYXRjaGVkLCBvciBvbiBkZXNrdG9wIHdlIGlnbm9yZVxuICAgICAgcmV0dXJuICgoZmluZ2VyQ291bnQgPT09IG9wdGlvbnMuZmluZ2VycyB8fCBvcHRpb25zLmZpbmdlcnMgPT09IEFMTF9GSU5HRVJTKSB8fCAhU1VQUE9SVFNfVE9VQ0gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBoYXZlIGFuIGVuZCBwb2ludCBmb3IgdGhlIHN3aXBlXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbmRQb2ludCgpIHtcbiAgICAgIC8vV2UgaGF2ZSBhbiBlbmQgdmFsdWUgZm9yIHRoZSBmaW5nZXJcbiAgICAgIHJldHVybiBmaW5nZXJEYXRhWzBdLmVuZC54ICE9PSAwO1xuICAgIH1cblxuICAgIC8vIFRBUCAvIENMSUNLXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGEgY2xpY2sgLyB0YXAgZXZlbnRzIGhhdmUgYmVlbiByZWdpc3RlcmVkXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzVGFwKCkge1xuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xuICAgICAgcmV0dXJuICEhKG9wdGlvbnMudGFwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYSBkb3VibGUgdGFwIGV2ZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhc0RvdWJsZVRhcCgpIHtcbiAgICAgIC8vRW51cmUgd2UgZG9udCByZXR1cm4gMCBvciBudWxsIGZvciBmYWxzZSB2YWx1ZXNcbiAgICAgIHJldHVybiAhIShvcHRpb25zLmRvdWJsZVRhcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFueSBsb25nIHRhcCBldmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNMb25nVGFwKCkge1xuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xuICAgICAgcmV0dXJuICEhKG9wdGlvbnMubG9uZ1RhcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGNvdWxkIGJlIGluIHRoZSBwcm9jZXNzIG9mIGEgZG91YmxlIHRhcCAob25lIHRhcCBoYXMgb2NjdXJyZWQsIHdlIGFyZSBsaXN0ZW5pbmcgZm9yIGRvdWJsZSB0YXBzLCBhbmQgdGhlIHRocmVzaG9sZCBoYXNuJ3QgcGFzdC5cbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZURvdWJsZVRhcCgpIHtcbiAgICAgIGlmIChkb3VibGVUYXBTdGFydFRpbWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbm93ID0gZ2V0VGltZVN0YW1wKCk7XG4gICAgICByZXR1cm4gKGhhc0RvdWJsZVRhcCgpICYmICgobm93IC0gZG91YmxlVGFwU3RhcnRUaW1lKSA8PSBvcHRpb25zLmRvdWJsZVRhcFRocmVzaG9sZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBjb3VsZCBiZSBpbiB0aGUgcHJvY2VzcyBvZiBhIGRvdWJsZSB0YXAgKG9uZSB0YXAgaGFzIG9jY3VycmVkLCB3ZSBhcmUgbGlzdGVuaW5nIGZvciBkb3VibGUgdGFwcywgYW5kIHRoZSB0aHJlc2hvbGQgaGFzbid0IHBhc3QuXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5Eb3VibGVUYXAoKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVEb3VibGVUYXAoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBoYXZlIGEgdmFsaWQgdGFwXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVUYXAoKSB7XG4gICAgICByZXR1cm4gKChmaW5nZXJDb3VudCA9PT0gMSB8fCAhU1VQUE9SVFNfVE9VQ0gpICYmIChpc05hTihkaXN0YW5jZSkgfHwgZGlzdGFuY2UgPCBvcHRpb25zLnRocmVzaG9sZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBoYXZlIGEgdmFsaWQgbG9uZyB0YXBcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUxvbmdUYXAoKSB7XG4gICAgICAvL3NsaWdodCB0aHJlc2hvbGQgb24gbW92aW5nIGZpbmdlclxuICAgICAgcmV0dXJuICgoZHVyYXRpb24gPiBvcHRpb25zLmxvbmdUYXBUaHJlc2hvbGQpICYmIChkaXN0YW5jZSA8IERPVUJMRV9UQVBfVEhSRVNIT0xEKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBkZXRlY3RpbmcgdGFwcyBhbmQgaGF2ZSBvbmVcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaWRUYXAoKSB7XG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXG4gICAgICByZXR1cm4gISEodmFsaWRhdGVUYXAoKSAmJiBoYXNUYXAoKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIGRldGVjdGluZyBkb3VibGUgdGFwcyBhbmQgaGF2ZSBvbmVcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaWREb3VibGVUYXAoKSB7XG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXG4gICAgICByZXR1cm4gISEodmFsaWRhdGVEb3VibGVUYXAoKSAmJiBoYXNEb3VibGVUYXAoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBkZXRlY3RpbmcgbG9uZyB0YXBzIGFuZCBoYXZlIG9uZVxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpZExvbmdUYXAoKSB7XG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXG4gICAgICByZXR1cm4gISEodmFsaWRhdGVMb25nVGFwKCkgJiYgaGFzTG9uZ1RhcCgpKTtcbiAgICB9XG5cblxuXG5cbiAgICAvLyBNVUxUSSBGSU5HRVIgVE9VQ0hcbiAgICAvKipcbiAgICAgKiBTdGFydHMgdHJhY2tpbmcgdGhlIHRpbWUgYmV0d2VlbiAyIGZpbmdlciByZWxlYXNlcywgYW5kIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IGZpbmdlcnMgd2UgaW5pdGlhbGx5IGhhZCB1cFxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0TXVsdGlGaW5nZXJSZWxlYXNlKGV2ZW50KSB7XG4gICAgICBwcmV2aW91c1RvdWNoRW5kVGltZSA9IGdldFRpbWVTdGFtcCgpO1xuICAgICAgZmluZ2VyQ291bnRBdFJlbGVhc2UgPSBldmVudC50b3VjaGVzLmxlbmd0aCArIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuY2VscyB0aGUgdHJhY2tpbmcgb2YgdGltZSBiZXR3ZWVuIDIgZmluZ2VyIHJlbGVhc2VzLCBhbmQgcmVzZXRzIGNvdW50ZXJzXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FuY2VsTXVsdGlGaW5nZXJSZWxlYXNlKCkge1xuICAgICAgcHJldmlvdXNUb3VjaEVuZFRpbWUgPSAwO1xuICAgICAgZmluZ2VyQ291bnRBdFJlbGVhc2UgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgaW4gdGhlIHRocmVzaG9sZCBiZXR3ZWVuIDIgZmluZ2VycyBiZWluZyByZWxlYXNlZFxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGluTXVsdGlGaW5nZXJSZWxlYXNlKCkge1xuXG4gICAgICB2YXIgd2l0aGluVGhyZXNob2xkID0gZmFsc2U7XG5cbiAgICAgIGlmIChwcmV2aW91c1RvdWNoRW5kVGltZSkge1xuICAgICAgICB2YXIgZGlmZiA9IGdldFRpbWVTdGFtcCgpIC0gcHJldmlvdXNUb3VjaEVuZFRpbWVcbiAgICAgICAgaWYgKGRpZmYgPD0gb3B0aW9ucy5maW5nZXJSZWxlYXNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgd2l0aGluVGhyZXNob2xkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2l0aGluVGhyZXNob2xkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogZ2V0cyBhIGRhdGEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IGEgdG91Y2ggaXMgaW4gcHJvZ3Jlc3NcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRUb3VjaEluUHJvZ3Jlc3MoKSB7XG4gICAgICAvL3N0cmljdCBlcXVhbGl0eSB0byBlbnN1cmUgb25seSB0cnVlIGFuZCBmYWxzZSBhcmUgcmV0dXJuZWRcbiAgICAgIHJldHVybiAhISgkZWxlbWVudC5kYXRhKFBMVUdJTl9OUyArICdfaW50b3VjaCcpID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgZGF0YSBmbGFnIHRvIGluZGljYXRlIHRoYXQgYSB0b3VjaCBpcyBpbiBwcm9ncmVzc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VG91Y2hJblByb2dyZXNzKHZhbCkge1xuXG4gICAgICAvL0lmIGRlc3Ryb3kgaXMgY2FsbGVkIGluIGFuIGV2ZW50IGhhbmRsZXIsIHdlIGhhdmUgbm8gZWwsIGFuZCB3ZSBoYXZlIGFscmVhZHkgY2xlYW5lZCB1cCwgc28gcmV0dXJuLlxuICAgICAgaWYoISRlbGVtZW50KSB7IHJldHVybjsgfVxuXG4gICAgICAvL0FkZCBvciByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGRlcGVuZGluZyBvbiB0b3VjaCBzdGF0dXNcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgJGVsZW1lbnQuYmluZChNT1ZFX0VWLCB0b3VjaE1vdmUpO1xuICAgICAgICAkZWxlbWVudC5iaW5kKEVORF9FViwgdG91Y2hFbmQpO1xuXG4gICAgICAgIC8vd2Ugb25seSBoYXZlIGxlYXZlIGV2ZW50cyBvbiBkZXNrdG9wLCB3ZSBtYW51YWxseSBjYWxjdWF0ZSBsZWF2ZSBvbiB0b3VjaCBhcyBpdHMgbm90IHN1cHBvcnRlZCBpbiB3ZWJraXRcbiAgICAgICAgaWYgKExFQVZFX0VWKSB7XG4gICAgICAgICAgJGVsZW1lbnQuYmluZChMRUFWRV9FViwgdG91Y2hMZWF2ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgJGVsZW1lbnQudW5iaW5kKE1PVkVfRVYsIHRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICAkZWxlbWVudC51bmJpbmQoRU5EX0VWLCB0b3VjaEVuZCwgZmFsc2UpO1xuXG4gICAgICAgIC8vd2Ugb25seSBoYXZlIGxlYXZlIGV2ZW50cyBvbiBkZXNrdG9wLCB3ZSBtYW51YWxseSBjYWxjdWF0ZSBsZWF2ZSBvbiB0b3VjaCBhcyBpdHMgbm90IHN1cHBvcnRlZCBpbiB3ZWJraXRcbiAgICAgICAgaWYgKExFQVZFX0VWKSB7XG4gICAgICAgICAgJGVsZW1lbnQudW5iaW5kKExFQVZFX0VWLCB0b3VjaExlYXZlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvL3N0cmljdCBlcXVhbGl0eSB0byBlbnN1cmUgb25seSB0cnVlIGFuZCBmYWxzZSBjYW4gdXBkYXRlIHRoZSB2YWx1ZVxuICAgICAgJGVsZW1lbnQuZGF0YShQTFVHSU5fTlMgKyAnX2ludG91Y2gnLCB2YWwgPT09IHRydWUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZmluZ2VyIGRhdGEgZm9yIHRoZSB0b3VjaC9maW5nZXIgaW4gdGhlIGV2ZW50IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIGlkIHRvIHN0b3JlIHRoZSBmaW5nZXIgZGF0YSB1bmRlciAodXN1YWxseSB0aGUgb3JkZXIgdGhlIGZpbmdlcnMgd2VyZSBwcmVzc2VkKVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgVGhlIGV2ZW50IG9iamVjdCBjb250YWluaW5nIGZpbmdlciBkYXRhXG4gICAgICogQHJldHVybiBmaW5nZXIgZGF0YSBvYmplY3RcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVGaW5nZXJEYXRhKGlkLCBldnQpIHtcbiAgICAgIHZhciBmID0ge1xuICAgICAgICBzdGFydDoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICBsYXN0OiB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZi5zdGFydC54ID0gZi5sYXN0LnggPSBmLmVuZC54ID0gZXZ0LnBhZ2VYIHx8IGV2dC5jbGllbnRYO1xuICAgICAgZi5zdGFydC55ID0gZi5sYXN0LnkgPSBmLmVuZC55ID0gZXZ0LnBhZ2VZIHx8IGV2dC5jbGllbnRZO1xuICAgICAgZmluZ2VyRGF0YVtpZF0gPSBmO1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZmluZ2VyIGRhdGEgZm9yIGEgcGFydGljdWxhciBldmVudCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IFRoZSBldmVudCBvYmplY3QgY29udGFpbmluZyB0aGUgdG91Y2gvZmluZ2VyIGRhdGEgdG8gdXBhZHRlXG4gICAgICogQHJldHVybiBhIGZpbmdlciBkYXRhIG9iamVjdC5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVGaW5nZXJEYXRhKGV2dCkge1xuICAgICAgdmFyIGlkID0gZXZ0LmlkZW50aWZpZXIgIT09IHVuZGVmaW5lZCA/IGV2dC5pZGVudGlmaWVyIDogMDtcbiAgICAgIHZhciBmID0gZ2V0RmluZ2VyRGF0YShpZCk7XG5cbiAgICAgIGlmIChmID09PSBudWxsKSB7XG4gICAgICAgIGYgPSBjcmVhdGVGaW5nZXJEYXRhKGlkLCBldnQpO1xuICAgICAgfVxuXG4gICAgICBmLmxhc3QueCA9IGYuZW5kLng7XG4gICAgICBmLmxhc3QueSA9IGYuZW5kLnk7XG5cbiAgICAgIGYuZW5kLnggPSBldnQucGFnZVggfHwgZXZ0LmNsaWVudFg7XG4gICAgICBmLmVuZC55ID0gZXZ0LnBhZ2VZIHx8IGV2dC5jbGllbnRZO1xuXG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmluZ2VyIGRhdGEgb2JqZWN0IGJ5IGl0cyBldmVudCBJRC5cbiAgICAgKiBFYWNoIHRvdWNoIGV2ZW50IGhhcyBhbiBpZGVudGlmaWVyIHByb3BlcnR5LCB3aGljaCBpcyB1c2VkXG4gICAgICogdG8gdHJhY2sgcmVwZWF0IHRvdWNoZXNcbiAgICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIHVuaXF1ZSBpZCBvZiB0aGUgZmluZ2VyIGluIHRoZSBzZXF1ZW5jZSBvZiB0b3VjaCBldmVudHMuXG4gICAgICogQHJldHVybiBhIGZpbmdlciBkYXRhIG9iamVjdC5cbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRGaW5nZXJEYXRhKGlkKSB7XG4gICAgICByZXR1cm4gZmluZ2VyRGF0YVtpZF0gfHwgbnVsbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1heGltdW0gZGlzdGFuY2Ugc3dpcGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24uXG4gICAgICogSWYgdGhlIG5ldyB2YWx1ZSBpcyBsb3dlciB0aGFuIHRoZSBjdXJyZW50IHZhbHVlLCB0aGUgbWF4IHZhbHVlIGlzIG5vdCBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gb2YgdGhlIHN3aXBlXG4gICAgICogQHBhcmFtIHtpbnR9ICBkaXN0YW5jZSBUaGUgZGlzdGFuY2Ugb2YgdGhlIHN3aXBlXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0TWF4RGlzdGFuY2UoZGlyZWN0aW9uLCBkaXN0YW5jZSkge1xuICAgICAgZGlzdGFuY2UgPSBNYXRoLm1heChkaXN0YW5jZSwgZ2V0TWF4RGlzdGFuY2UoZGlyZWN0aW9uKSk7XG4gICAgICBtYXhpbXVtc01hcFtkaXJlY3Rpb25dLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0cyB0aGUgbWF4aW11bSBkaXN0YW5jZSBzd2lwZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIG9mIHRoZSBzd2lwZVxuICAgICAqIEByZXR1cm4gaW50ICBUaGUgZGlzdGFuY2Ugb2YgdGhlIHN3aXBlXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TWF4RGlzdGFuY2UoZGlyZWN0aW9uKSB7XG4gICAgICBpZiAobWF4aW11bXNNYXBbZGlyZWN0aW9uXSkgcmV0dXJuIG1heGltdW1zTWFwW2RpcmVjdGlvbl0uZGlzdGFuY2U7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0cyBhIG1hcCBvZiBkaXJlY3Rpb25zIHRvIG1heGltdW0gc3dpcGVkIHZhbHVlcy5cbiAgICAgKiBAcmV0dXJuIE9iamVjdCBBIGRpY3Rpb25hcnkgb2YgbWF4aW11bSB2YWx1ZXMsIGluZGV4ZWQgYnkgZGlyZWN0aW9uLlxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1heGltdW1zRGF0YSgpIHtcbiAgICAgIHZhciBtYXhEYXRhID0ge307XG4gICAgICBtYXhEYXRhW0xFRlRdID0gY3JlYXRlTWF4aW11bVZPKExFRlQpO1xuICAgICAgbWF4RGF0YVtSSUdIVF0gPSBjcmVhdGVNYXhpbXVtVk8oUklHSFQpO1xuICAgICAgbWF4RGF0YVtVUF0gPSBjcmVhdGVNYXhpbXVtVk8oVVApO1xuICAgICAgbWF4RGF0YVtET1dOXSA9IGNyZWF0ZU1heGltdW1WTyhET1dOKTtcblxuICAgICAgcmV0dXJuIG1heERhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1hcCBtYXhpbXVtIHN3aXBlZCB2YWx1ZXMgZm9yIGEgZ2l2ZW4gc3dpcGUgZGlyZWN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFRoZSBkaXJlY3Rpb24gdGhhdCB0aGVzZSB2YWx1ZXMgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIE9iamVjdCBNYXhpbXVtIHZhbHVlc1xuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1heGltdW1WTyhkaXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgICBkaXN0YW5jZTogMFxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy9cbiAgICAvLyBNQVRIUyAvIFVUSUxTXG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlXG4gICAgICogQHJldHVybiBpbnRcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHRvdWNoZXMgKHBpbmNoKVxuICAgICAqIEBwYXJhbSB7cG9pbnR9IHN0YXJ0UG9pbnQgQSBwb2ludCBvYmplY3QgY29udGFpbmluZyB4IGFuZCB5IGNvLW9yZGluYXRlc1xuICAgICAqIEBwYXJhbSB7cG9pbnR9IGVuZFBvaW50IEEgcG9pbnQgb2JqZWN0IGNvbnRhaW5pbmcgeCBhbmQgeSBjby1vcmRpbmF0ZXNcbiAgICAgKiBAcmV0dXJuIGludDtcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUb3VjaGVzRGlzdGFuY2Uoc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICAgIHZhciBkaWZmWCA9IE1hdGguYWJzKHN0YXJ0UG9pbnQueCAtIGVuZFBvaW50LngpO1xuICAgICAgdmFyIGRpZmZZID0gTWF0aC5hYnMoc3RhcnRQb2ludC55IC0gZW5kUG9pbnQueSk7XG5cbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGguc3FydChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgem9vbSBmYWN0b3IgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBkaXN0YW5jZXNcbiAgICAgKiBAcGFyYW0ge2ludH0gc3RhcnREaXN0YW5jZSBEaXN0YW5jZSAoYmV0d2VlbiAyIGZpbmdlcnMpIHRoZSB1c2VyIHN0YXJ0ZWQgcGluY2hpbmcgYXRcbiAgICAgKiBAcGFyYW0ge2ludH0gZW5kRGlzdGFuY2UgRGlzdGFuY2UgKGJldHdlZW4gMiBmaW5nZXJzKSB0aGUgdXNlciBlbmRlZCBwaW5jaGluZyBhdFxuICAgICAqIEByZXR1cm4gZmxvYXQgVGhlIHpvb20gdmFsdWUgZnJvbSAwIHRvIDEuXG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGluY2hab29tKHN0YXJ0RGlzdGFuY2UsIGVuZERpc3RhbmNlKSB7XG4gICAgICB2YXIgcGVyY2VudCA9IChlbmREaXN0YW5jZSAvIHN0YXJ0RGlzdGFuY2UpICogMTtcbiAgICAgIHJldHVybiBwZXJjZW50LnRvRml4ZWQoMik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwaW5jaCBkaXJlY3Rpb24sIGVpdGhlciBJTiBvciBPVVQgZm9yIHRoZSBnaXZlbiBwb2ludHNcbiAgICAgKiBAcmV0dXJuIHN0cmluZyBFaXRoZXIge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9ucy5JTn0gb3Ige0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9ucy5PVVR9XG4gICAgICogQHNlZSAkLmZuLnN3aXBlLmRpcmVjdGlvbnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQaW5jaERpcmVjdGlvbigpIHtcbiAgICAgIGlmIChwaW5jaFpvb20gPCAxKSB7XG4gICAgICAgIHJldHVybiBPVVQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gSU47XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCAvIGRpc3RhbmNlIG9mIHRoZSBzd2lwZVxuICAgICAqIEBwYXJhbSB7cG9pbnR9IHN0YXJ0UG9pbnQgQSBwb2ludCBvYmplY3QgY29udGFpbmluZyB4IGFuZCB5IGNvLW9yZGluYXRlc1xuICAgICAqIEBwYXJhbSB7cG9pbnR9IGVuZFBvaW50IEEgcG9pbnQgb2JqZWN0IGNvbnRhaW5pbmcgeCBhbmQgeSBjby1vcmRpbmF0ZXNcbiAgICAgKiBAcmV0dXJuIGludFxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZURpc3RhbmNlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3coZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueCwgMikgKyBNYXRoLnBvdyhlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCAyKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgYW5nbGUgb2YgdGhlIHN3aXBlXG4gICAgICogQHBhcmFtIHtwb2ludH0gc3RhcnRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIHtwb2ludH0gZW5kUG9pbnQgQSBwb2ludCBvYmplY3QgY29udGFpbmluZyB4IGFuZCB5IGNvLW9yZGluYXRlc1xuICAgICAqIEByZXR1cm4gaW50XG4gICAgICogQGlubmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQW5nbGUoc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICAgIHZhciB4ID0gc3RhcnRQb2ludC54IC0gZW5kUG9pbnQueDtcbiAgICAgIHZhciB5ID0gZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueTtcbiAgICAgIHZhciByID0gTWF0aC5hdGFuMih5LCB4KTsgLy9yYWRpYW5zXG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTsgLy9kZWdyZWVzXG5cbiAgICAgIC8vZW5zdXJlIHZhbHVlIGlzIHBvc2l0aXZlXG4gICAgICBpZiAoYW5nbGUgPCAwKSB7XG4gICAgICAgIGFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoYW5nbGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYW5nbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHN3aXBlXG4gICAgICogVGhpcyB3aWxsIGFsc28gY2FsbCBjYWxjdWxhdGVBbmdsZSB0byBnZXQgdGhlIGxhdGVzdCBhbmdsZSBvZiBzd2lwZVxuICAgICAqIEBwYXJhbSB7cG9pbnR9IHN0YXJ0UG9pbnQgQSBwb2ludCBvYmplY3QgY29udGFpbmluZyB4IGFuZCB5IGNvLW9yZGluYXRlc1xuICAgICAqIEBwYXJhbSB7cG9pbnR9IGVuZFBvaW50IEEgcG9pbnQgb2JqZWN0IGNvbnRhaW5pbmcgeCBhbmQgeSBjby1vcmRpbmF0ZXNcbiAgICAgKiBAcmV0dXJuIHN0cmluZyBFaXRoZXIge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9ucy5MRUZUfSAvIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnMuUklHSFR9IC8ge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9ucy5ET1dOfSAvIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnMuVVB9XG4gICAgICogQHNlZSAkLmZuLnN3aXBlLmRpcmVjdGlvbnNcbiAgICAgKiBAaW5uZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb24oc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICAgIHZhciBhbmdsZSA9IGNhbGN1bGF0ZUFuZ2xlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KTtcblxuICAgICAgaWYgKChhbmdsZSA8PSA0NSkgJiYgKGFuZ2xlID49IDApKSB7XG4gICAgICAgIHJldHVybiBMRUZUO1xuICAgICAgfSBlbHNlIGlmICgoYW5nbGUgPD0gMzYwKSAmJiAoYW5nbGUgPj0gMzE1KSkge1xuICAgICAgICByZXR1cm4gTEVGVDtcbiAgICAgIH0gZWxzZSBpZiAoKGFuZ2xlID49IDEzNSkgJiYgKGFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgcmV0dXJuIFJJR0hUO1xuICAgICAgfSBlbHNlIGlmICgoYW5nbGUgPiA0NSkgJiYgKGFuZ2xlIDwgMTM1KSkge1xuICAgICAgICByZXR1cm4gRE9XTjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVUDtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBNUyB0aW1lIHN0YW1wIG9mIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgKiBAcmV0dXJuIGludFxuICAgICAqIEBpbm5lclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFRpbWVTdGFtcCgpIHtcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5vdy5nZXRUaW1lKCk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib3VuZHMgb2JqZWN0IHdpdGggbGVmdCwgcmlnaHQsIHRvcCBhbmQgYm90dG9tIHByb3BlcnRpZXMgZm9yIHRoZSBlbGVtZW50IHNwZWNpZmllZC5cbiAgICAgKiBAcGFyYW0ge0RvbU5vZGV9IFRoZSBET00gbm9kZSB0byBnZXQgdGhlIGJvdW5kcyBmb3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Ym91bmRzKGVsKSB7XG4gICAgICBlbCA9ICQoZWwpO1xuICAgICAgdmFyIG9mZnNldCA9IGVsLm9mZnNldCgpO1xuXG4gICAgICB2YXIgYm91bmRzID0ge1xuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCxcbiAgICAgICAgcmlnaHQ6IG9mZnNldC5sZWZ0ICsgZWwub3V0ZXJXaWR0aCgpLFxuICAgICAgICB0b3A6IG9mZnNldC50b3AsXG4gICAgICAgIGJvdHRvbTogb2Zmc2V0LnRvcCArIGVsLm91dGVySGVpZ2h0KClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgcG9pbnQgb2JqZWN0IGlzIGluIHRoZSBib3VuZHMgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb2ludCBBIHBvaW50IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2ludH0gcG9pbnQueCBUaGUgeCB2YWx1ZSBvZiB0aGUgcG9pbnQuXG4gICAgICogQHBhcmFtIHtpbnR9IHBvaW50LnkgVGhlIHggdmFsdWUgb2YgdGhlIHBvaW50LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBib3VuZHMgVGhlIGJvdW5kcyBvYmplY3QgdG8gdGVzdFxuICAgICAqIEBwYXJhbSB7aW50fSBib3VuZHMubGVmdCBUaGUgbGVmdG1vc3QgdmFsdWVcbiAgICAgKiBAcGFyYW0ge2ludH0gYm91bmRzLnJpZ2h0IFRoZSByaWdodHRtb3N0IHZhbHVlXG4gICAgICogQHBhcmFtIHtpbnR9IGJvdW5kcy50b3AgVGhlIHRvcG1vc3QgdmFsdWVcbiAgICAgKiBAcGFyYW0ge2ludH0gYm91bmRzLmJvdHRvbSBUaGUgYm90dG9tbW9zdCB2YWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzSW5Cb3VuZHMocG9pbnQsIGJvdW5kcykge1xuICAgICAgcmV0dXJuIChwb2ludC54ID4gYm91bmRzLmxlZnQgJiYgcG9pbnQueCA8IGJvdW5kcy5yaWdodCAmJiBwb2ludC55ID4gYm91bmRzLnRvcCAmJiBwb2ludC55IDwgYm91bmRzLmJvdHRvbSk7XG4gICAgfTtcblxuXG4gIH1cblxuXG5cblxuICAvKipcbiAgICogQSBjYXRjaCBhbGwgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgYWxsIHN3aXBlIGRpcmVjdGlvbnMuXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjc3dpcGVcbiAgICogQGV2ZW50XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdGhlIHVzZXIgc3dpcGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBzd2lwZWRcbiAgICogQHBhcmFtIHtpbnR9IGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBvZiB0aGUgc3dpcGUgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7aW50fSBmaW5nZXJDb3VudCBUaGUgbnVtYmVyIG9mIGZpbmdlcnMgdXNlZC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmZpbmdlcnN9XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaW5nZXJEYXRhIFRoZSBjb29yZGluYXRlcyBvZiBmaW5nZXJzIGluIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50RGlyZWN0aW9uIFRoZSBjdXJyZW50IGRpcmVjdGlvbiB0aGUgdXNlciBpcyBzd2lwaW5nLlxuICAgKi9cblxuXG5cblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcImxlZnRcIiBzd2lwZXMuXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjc3dpcGVMZWZ0XG4gICAqIEBldmVudFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHtpbnR9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHN3aXBlZCBpbi4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XG4gICAqIEBwYXJhbSB7aW50fSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgc3dpcGVkXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudERpcmVjdGlvbiBUaGUgY3VycmVudCBkaXJlY3Rpb24gdGhlIHVzZXIgaXMgc3dpcGluZy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJyaWdodFwiIHN3aXBlcy5cbiAgICogQG5hbWUgJC5mbi5zd2lwZSNzd2lwZVJpZ2h0XG4gICAqIEBldmVudFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHtpbnR9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHN3aXBlZCBpbi4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XG4gICAqIEBwYXJhbSB7aW50fSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgc3dpcGVkXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudERpcmVjdGlvbiBUaGUgY3VycmVudCBkaXJlY3Rpb24gdGhlIHVzZXIgaXMgc3dpcGluZy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJ1cFwiIHN3aXBlcy5cbiAgICogQG5hbWUgJC5mbi5zd2lwZSNzd2lwZVVwXG4gICAqIEBldmVudFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHtpbnR9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHN3aXBlZCBpbi4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XG4gICAqIEBwYXJhbSB7aW50fSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgc3dpcGVkXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudERpcmVjdGlvbiBUaGUgY3VycmVudCBkaXJlY3Rpb24gdGhlIHVzZXIgaXMgc3dpcGluZy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJkb3duXCIgc3dpcGVzLlxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI3N3aXBlRG93blxuICAgKiBAZXZlbnRcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0aGUgdXNlciBzd2lwZWQgaW4uIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5kaXJlY3Rpb25zfVxuICAgKiBAcGFyYW0ge2ludH0gZGlzdGFuY2UgVGhlIGRpc3RhbmNlIHRoZSB1c2VyIHN3aXBlZFxuICAgKiBAcGFyYW0ge2ludH0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIG9mIHRoZSBzd2lwZSBpbiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtpbnR9IGZpbmdlckNvdW50IFRoZSBudW1iZXIgb2YgZmluZ2VycyB1c2VkLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZmluZ2Vyc31cbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbmdlckRhdGEgVGhlIGNvb3JkaW5hdGVzIG9mIGZpbmdlcnMgaW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnREaXJlY3Rpb24gVGhlIGN1cnJlbnQgZGlyZWN0aW9uIHRoZSB1c2VyIGlzIHN3aXBpbmcuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdHJpZ2dlcmVkIGZvciBldmVyeSBwaGFzZSBvZiB0aGUgc3dpcGUuIFRoaXMgaGFuZGxlciBpcyBjb25zdGFudGx5IGZpcmVkIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHBpbmNoLlxuICAgKiBUaGlzIGlzIHRyaWdnZXJlZCByZWdhcmRsZXNzIG9mIHN3aXBlIHRocmVzaG9sZHMuXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjc3dpcGVTdGF0dXNcbiAgICogQGV2ZW50XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGhhc2UgVGhlIHBoYXNlIG9mIHRoZSBzd2lwZSBldmVudC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLnBoYXNlc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHN3aXBlZCBpbi4gVGhpcyBpcyBudWxsIGlmIHRoZSB1c2VyIGhhcyB5ZXQgdG8gbW92ZS4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XG4gICAqIEBwYXJhbSB7aW50fSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgc3dpcGVkLiBUaGlzIGlzIDAgaWYgdGhlIHVzZXIgaGFzIHlldCB0byBtb3ZlLlxuICAgKiBAcGFyYW0ge2ludH0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIG9mIHRoZSBzd2lwZSBpbiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtpbnR9IGZpbmdlckNvdW50IFRoZSBudW1iZXIgb2YgZmluZ2VycyB1c2VkLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZmluZ2Vyc31cbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbmdlckRhdGEgVGhlIGNvb3JkaW5hdGVzIG9mIGZpbmdlcnMgaW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnREaXJlY3Rpb24gVGhlIGN1cnJlbnQgZGlyZWN0aW9uIHRoZSB1c2VyIGlzIHN3aXBpbmcuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdHJpZ2dlcmVkIGZvciBwaW5jaCBpbiBldmVudHMuXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjcGluY2hJblxuICAgKiBAZXZlbnRcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0aGUgdXNlciBwaW5jaGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBwaW5jaGVkXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxuICAgKiBAcGFyYW0ge2ludH0gem9vbSBUaGUgem9vbS9zY2FsZSBsZXZlbCB0aGUgdXNlciBwaW5jaGVkIHRvbywgMC0xLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxuICAgKi9cblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRyaWdnZXJlZCBmb3IgcGluY2ggb3V0IGV2ZW50cy5cbiAgICogQG5hbWUgJC5mbi5zd2lwZSNwaW5jaE91dFxuICAgKiBAZXZlbnRcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0aGUgdXNlciBwaW5jaGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBwaW5jaGVkXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxuICAgKiBAcGFyYW0ge2ludH0gem9vbSBUaGUgem9vbS9zY2FsZSBsZXZlbCB0aGUgdXNlciBwaW5jaGVkIHRvbywgMC0xLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxuICAgKi9cblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRyaWdnZXJlZCBmb3IgYWxsIHBpbmNoIGV2ZW50cy4gVGhpcyBoYW5kbGVyIGlzIGNvbnN0YW50bHkgZmlyZWQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGluY2guIFRoaXMgaXMgdHJpZ2dlcmVkIHJlZ2FyZGxlc3Mgb2YgdGhyZXNob2xkcy5cbiAgICogQG5hbWUgJC5mbi5zd2lwZSNwaW5jaFN0YXR1c1xuICAgKiBAZXZlbnRcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0aGUgdXNlciBwaW5jaGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBwaW5jaGVkXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxuICAgKiBAcGFyYW0ge2ludH0gem9vbSBUaGUgem9vbS9zY2FsZSBsZXZlbCB0aGUgdXNlciBwaW5jaGVkIHRvbywgMC0xLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxuICAgKi9cblxuICAvKipcbiAgICogQSBjbGljayBoYW5kbGVyIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBzaW1wbHkgY2xpY2tzLCByYXRoZXIgdGhhbiBzd2lwZXMgb24gYW4gZWxlbWVudC5cbiAgICogVGhpcyBpcyBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS42LjIsIGFueSBhc3NpZ25tZW50IHRvIGNsaWNrIHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHRhcCBoYW5kbGVyLlxuICAgKiBZb3UgY2Fubm90IHVzZSA8Y29kZT5vbjwvY29kZT4gdG8gYmluZCB0byB0aGlzIGV2ZW50IGFzIHRoZSBkZWZhdWx0IGpRIDxjb2RlPmNsaWNrPC9jb2RlPiBldmVudCB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICogVXNlIHRoZSA8Y29kZT50YXA8L2NvZGU+IGV2ZW50IGluc3RlYWQuXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjY2xpY2tcbiAgICogQGV2ZW50XG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS42LjIsIHBsZWFzZSB1c2Uge0BsaW5rICQuZm4uc3dpcGUjdGFwfSBpbnN0ZWFkXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgKiBAcGFyYW0ge0RvbU9iamVjdH0gdGFyZ2V0IFRoZSBlbGVtZW50IGNsaWNrZWQgb24uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBIGNsaWNrIC8gdGFwIGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIHNpbXBseSBjbGlja3Mgb3IgdGFwcywgcmF0aGVyIHRoYW4gc3dpcGVzIG9uIGFuIGVsZW1lbnQuXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjdGFwXG4gICAqIEBldmVudFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHtEb21PYmplY3R9IHRhcmdldCBUaGUgZWxlbWVudCBjbGlja2VkIG9uLlxuICAgKi9cblxuICAvKipcbiAgICogQSBkb3VibGUgdGFwIGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGRvdWJsZSBjbGlja3Mgb3IgdGFwcyBvbiBhbiBlbGVtZW50LlxuICAgKiBZb3UgY2FuIHNldCB0aGUgdGltZSBkZWxheSBmb3IgYSBkb3VibGUgdGFwIHdpdGggdGhlIHtAbGluayAkLmZuLnN3aXBlLmRlZmF1bHRzI2RvdWJsZVRhcFRocmVzaG9sZH0gcHJvcGVydHkuXG4gICAqIE5vdGU6IElmIHlvdSBzZXQgYm90aCA8Y29kZT5kb3VibGVUYXA8L2NvZGU+IGFuZCA8Y29kZT50YXA8L2NvZGU+IGhhbmRsZXJzLCB0aGUgPGNvZGU+dGFwPC9jb2RlPiBldmVudCB3aWxsIGJlIGRlbGF5ZWQgYnkgdGhlIDxjb2RlPmRvdWJsZVRhcFRocmVzaG9sZDwvY29kZT5cbiAgICogYXMgdGhlIHNjcmlwdCBuZWVkcyB0byBjaGVjayBpZiBpdHMgYSBkb3VibGUgdGFwLlxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI2RvdWJsZVRhcFxuICAgKiBAc2VlICAkLmZuLnN3aXBlLmRlZmF1bHRzI2RvdWJsZVRhcFRocmVzaG9sZFxuICAgKiBAZXZlbnRcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7RG9tT2JqZWN0fSB0YXJnZXQgVGhlIGVsZW1lbnQgY2xpY2tlZCBvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEEgbG9uZyB0YXAgaGFuZGxlciB0cmlnZ2VyZWQgb25jZSBhIHRhcCBoYXMgYmVlbiByZWxlYXNlIGlmIHRoZSB0YXAgd2FzIGxvbmdlciB0aGFuIHRoZSBsb25nVGFwVGhyZXNob2xkLlxuICAgKiBZb3UgY2FuIHNldCB0aGUgdGltZSBkZWxheSBmb3IgYSBsb25nIHRhcCB3aXRoIHRoZSB7QGxpbmsgJC5mbi5zd2lwZS5kZWZhdWx0cyNsb25nVGFwVGhyZXNob2xkfSBwcm9wZXJ0eS5cbiAgICogQG5hbWUgJC5mbi5zd2lwZSNsb25nVGFwXG4gICAqIEBzZWUgICQuZm4uc3dpcGUuZGVmYXVsdHMjbG9uZ1RhcFRocmVzaG9sZFxuICAgKiBAZXZlbnRcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7RG9tT2JqZWN0fSB0YXJnZXQgVGhlIGVsZW1lbnQgY2xpY2tlZCBvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEEgaG9sZCB0YXAgaGFuZGxlciB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgbG9uZ1RhcFRocmVzaG9sZCBpcyByZWFjaGVkXG4gICAqIFlvdSBjYW4gc2V0IHRoZSB0aW1lIGRlbGF5IGZvciBhIGxvbmcgdGFwIHdpdGggdGhlIHtAbGluayAkLmZuLnN3aXBlLmRlZmF1bHRzI2xvbmdUYXBUaHJlc2hvbGR9IHByb3BlcnR5LlxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI2hvbGRcbiAgICogQHNlZSAgJC5mbi5zd2lwZS5kZWZhdWx0cyNsb25nVGFwVGhyZXNob2xkXG4gICAqIEBldmVudFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHtEb21PYmplY3R9IHRhcmdldCBUaGUgZWxlbWVudCBjbGlja2VkIG9uLlxuICAgKi9cblxufSkpO1xuXG47IGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKHR5cGVvZiB0b3VjaHN3aXBlICE9IFwidW5kZWZpbmVkXCIgPyB0b3VjaHN3aXBlIDogd2luZG93LnRvdWNoc3dpcGUpO1xuXG59KS5jYWxsKGdsb2JhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG4iXX0=
},{"/vagrant/public/themes/source_intranet/node_modules/jquery/dist/jquery.min.js":3}],3:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

; browserify_shim__define__module__export__(typeof $ != "undefined" ? $ : window.$);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiOyB2YXIgX19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLyohIGpRdWVyeSB2Mi4xLjQgfCAoYykgMjAwNSwgMjAxNSBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSkrMT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxsLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omt9KSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1cImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPU0ucmVwbGFjZShcIndcIixcIncjXCIpLE89XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTitcIikpfClcIitMK1wiKlxcXFxdXCIsUD1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTytcIikqKXwuKilcXFxcKXwpXCIsUT1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFU9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxWPW5ldyBSZWdFeHAoUCksVz1uZXcgUmVnRXhwKFwiXlwiK04rXCIkXCIpLFg9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK08pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1ApLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFo9L15oXFxkJC9pLCQ9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxfPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGFhPS9bK35dLyxiYT0vJ3xcXFxcL2csY2E9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksZGE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZWE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHcseDtpZigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixkPWR8fFtdLGs9Yi5ub2RlVHlwZSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT1rJiY5IT09ayYmMTEhPT1rKXJldHVybiBkO2lmKCFlJiZwKXtpZigxMSE9PWsmJihmPV8uZXhlYyhhKSkpaWYoaj1mWzFdKXtpZig5PT09ayl7aWYoaD1iLmdldEVsZW1lbnRCeUlkKGopLCFofHwhaC5wYXJlbnROb2RlKXJldHVybiBkO2lmKGguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNlIGlmKGIub3duZXJEb2N1bWVudCYmKGg9Yi5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGopKSYmdChiLGgpJiZoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZXtpZihmWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoaj1mWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGopKSxkfWlmKGMucXNhJiYoIXF8fCFxLnRlc3QoYSkpKXtpZihzPXI9dSx3PWIseD0xIT09ayYmYSwxPT09ayYmXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bz1nKGEpLChyPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9ci5yZXBsYWNlKGJhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixzKSxzPVwiW2lkPSdcIitzK1wiJ10gXCIsbD1vLmxlbmd0aDt3aGlsZShsLS0pb1tsXT1zK3JhKG9bbF0pO3c9YWEudGVzdChhKSYmcGEoYi5wYXJlbnROb2RlKXx8Yix4PW8uam9pbihcIixcIil9aWYoeCl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwoeCkpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7cnx8Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShSLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWEubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHBhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1nLmRvY3VtZW50RWxlbWVudCxlPWcuZGVmYXVsdFZpZXcsZSYmZSE9PWUudG9wJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGVhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixlYSkpLHA9IWYoZyksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKGcuY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT0kLnRlc3QoZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhZy5nZXRFbGVtZW50c0J5TmFtZXx8IWcuZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYyYmYy5wYXJlbnROb2RlP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuIHA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT0kLnRlc3QoZy5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXGZdJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe3ZhciBiPWcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9JC50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsUCl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj0kLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHwkLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1nfHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PWd8fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxoPVthXSxpPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1nPy0xOmI9PT1nPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaS51bnNoaWZ0KGMpO3doaWxlKGhbZF09PT1pW2RdKWQrKztyZXR1cm4gZD9sYShoW2RdLGlbZF0pOmhbZF09PT12Py0xOmlbZF09PT12PzE6MH0sZyk6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFUsXCI9JyQxJ11cIiksISghYy5tYXRjaGVzU2VsZWN0b3J8fCFwfHxyJiZyLnRlc3QoYil8fHEmJnEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpYLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGNhLGRhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGNhLGRhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gWC5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlYudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFEsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWg7aWYocSl7aWYoZil7d2hpbGUocCl7bD1iO3doaWxlKGw9bFtwXSlpZihoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7az1xW3VdfHwocVt1XT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLG09alswXT09PXcmJmpbMl0sbD1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoMT09PWwubm9kZVR5cGUmJisrbSYmbD09PWIpe2tbYV09W3csbixtXTticmVha319ZWxzZSBpZihzJiYoaj0oYlt1XXx8KGJbdV09e30pKVthXSkmJmpbMF09PT13KW09alsxXTtlbHNlIHdoaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKChoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpJiYrK20mJihzJiYoKGxbdV18fChsW3VdPXt9KSlbYV09W3csbV0pLGw9PT1iKSlicmVhaztyZXR1cm4gbS09ZSxtPT09ZHx8bSVkPT09MCYmbS9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFIsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGNhLGRhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGNhLGRhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFoudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpvYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6b2EoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm9hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpvYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om9hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiBxYSgpe31xYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHFhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVMuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1ULmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFIsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVhbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHJhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiBzYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGo9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihpPWJbdV18fChiW3VdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBqWzJdPWhbMl07aWYoaVtkXT1qLGpbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiB0YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB1YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB2YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoIWN8fGMoZixkLGUpKSYmKGcucHVzaChmKSxqJiZiLnB1c2goaCkpO3JldHVybiBnfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXdhKGQpKSxlJiYhZVt1XSYmKGU9d2EoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dWEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp2YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dmEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXZhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB4YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9c2EoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXNhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3NhKHRhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB3YShpPjEmJnRhKG0pLGk+MSYmcmEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShSLFwiJDFcIiksYyxlPmkmJnhhKGEuc2xpY2UoaSxlKSksZj5lJiZ4YShhPWEuc2xpY2UoZSkpLGY+ZSYmcmEoYSkpfW0ucHVzaChjKX1yZXR1cm4gdGEobSl9ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbSxvLHA9MCxxPVwiMFwiLHI9ZiYmW10scz1bXSx0PWosdT1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHY9dys9bnVsbD09dD8xOk1hdGgucmFuZG9tKCl8fC4xLHg9dS5sZW5ndGg7Zm9yKGsmJihqPWchPT1uJiZnKTtxIT09eCYmbnVsbCE9KGw9dVtxXSk7cSsrKXtpZihlJiZsKXttPTA7d2hpbGUobz1hW20rK10paWYobyhsLGcsaCkpe2kucHVzaChsKTticmVha31rJiYodz12KX1jJiYoKGw9IW8mJmwpJiZwLS0sZiYmci5wdXNoKGwpKX1pZihwKz1xLGMmJnEhPT1wKXttPTA7d2hpbGUobz1iW20rK10pbyhyLHMsZyxoKTtpZihmKXtpZihwPjApd2hpbGUocS0tKXJbcV18fHNbcV18fChzW3FdPUYuY2FsbChpKSk7cz12YShzKX1ILmFwcGx5KGkscyksayYmIWYmJnMubGVuZ3RoPjAmJnArYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9dixqPXQpLHJ9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eGEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHlhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShjYSxkYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVgubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNhLGRhKSxhYS50ZXN0KGpbMF0udHlwZSkmJnBhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZyYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSxhYS50ZXN0KGEpJiZwYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsdj0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sdz0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geChhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHcudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGcuY2FsbChiLGEpPj0wIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHgodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHgodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXgodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdS50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgeSx6PS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEE9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtpZighYSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoYz1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTp6LmV4ZWMoYSksIWN8fCFjWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8eSkuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoY1sxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGNbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6bCwhMCkpLHYudGVzdChjWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihjIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbY10pP3RoaXNbY10oYltjXSk6dGhpcy5hdHRyKGMsYltjXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGQ9bC5nZXRFbGVtZW50QnlJZChjWzJdKSxkJiZkLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZCksdGhpcy5jb250ZXh0PWwsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHkucmVhZHk/eS5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtBLnByb3RvdHlwZT1uLmZuLHk9bihsKTt2YXIgQj0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxDPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZXh0ZW5kKHtkaXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSxzaWJsaW5nOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfX0pLG4uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dS50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWUoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2cuY2FsbChuKGEpLHRoaXNbMF0pOmcuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWUobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRChhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKENbYV18fG4udW5pcXVlKGUpLEIudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBFPS9cXFMrL2csRj17fTtmdW5jdGlvbiBHKGEpe3ZhciBiPUZbYV09e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEUpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/RlthXXx8RyhhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmLGcsaD1bXSxpPSFhLm9uY2UmJltdLGo9ZnVuY3Rpb24obCl7Zm9yKGI9YS5tZW1vcnkmJmwsYz0hMCxnPWV8fDAsZT0wLGY9aC5sZW5ndGgsZD0hMDtoJiZmPmc7ZysrKWlmKGhbZ10uYXBwbHkobFswXSxsWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlKXtiPSExO2JyZWFrfWQ9ITEsaCYmKGk/aS5sZW5ndGgmJmooaS5zaGlmdCgpKTpiP2g9W106ay5kaXNhYmxlKCkpfSxrPXthZGQ6ZnVuY3Rpb24oKXtpZihoKXt2YXIgYz1oLmxlbmd0aDshZnVuY3Rpb24gZyhiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe3ZhciBkPW4udHlwZShjKTtcImZ1bmN0aW9uXCI9PT1kP2EudW5pcXVlJiZrLmhhcyhjKXx8aC5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ZCYmZyhjKX0pfShhcmd1bWVudHMpLGQ/Zj1oLmxlbmd0aDpiJiYoZT1jLGooYikpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaCYmbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGgsYykpPi0xKWguc3BsaWNlKGMsMSksZCYmKGY+PWMmJmYtLSxnPj1jJiZnLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGgpPi0xOiEoIWh8fCFoLmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGg9W10sZj0wLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaD1pPWI9dm9pZCAwLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWh9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT12b2lkIDAsYnx8ay5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIWh8fGMmJiFpfHwoYj1ifHxbXSxiPVthLGIuc2xpY2U/Yi5zbGljZSgpOmJdLGQ/aS5wdXNoKGIpOmooYikpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWN9fTtyZXR1cm4ga30sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpLnByb2dyZXNzKGMubm90aWZ5KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZC5jYWxsKGFyZ3VtZW50cyksZT1jLmxlbmd0aCxmPTEhPT1lfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9lOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2QuY2FsbChhcmd1bWVudHMpOmUsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihlPjEpZm9yKGk9bmV3IEFycmF5KGUpLGo9bmV3IEFycmF5KGUpLGs9bmV3IEFycmF5KGUpO2U+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCkucHJvZ3Jlc3MoaChiLGosaSkpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBIO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChILnJlc29sdmVXaXRoKGwsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihsKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4obCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSSgpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixJLCExKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSSwhMSksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gSHx8KEg9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWwucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KG4ucmVhZHkpOihsLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpKSksSC5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSj1uLmFjY2Vzcz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYyluLmFjY2VzcyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfTtuLmFjY2VwdERhdGE9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBLKCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY2FjaGU9e30sMCx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue319fSksdGhpcy5leHBhbmRvPW4uZXhwYW5kbytLLnVpZCsrfUsudWlkPTEsSy5hY2NlcHRzPW4uYWNjZXB0RGF0YSxLLnByb3RvdHlwZT17a2V5OmZ1bmN0aW9uKGEpe2lmKCFLLmFjY2VwdHMoYSkpcmV0dXJuIDA7dmFyIGI9e30sYz1hW3RoaXMuZXhwYW5kb107aWYoIWMpe2M9Sy51aWQrKzt0cnl7Ylt0aGlzLmV4cGFuZG9dPXt2YWx1ZTpjfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLGIpfWNhdGNoKGQpe2JbdGhpcy5leHBhbmRvXT1jLG4uZXh0ZW5kKGEsYil9fXJldHVybiB0aGlzLmNhY2hlW2NdfHwodGhpcy5jYWNoZVtjXT17fSksY30sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMua2V5KGEpLGY9dGhpcy5jYWNoZVtlXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYilmW2JdPWM7ZWxzZSBpZihuLmlzRW1wdHlPYmplY3QoZikpbi5leHRlbmQodGhpcy5jYWNoZVtlXSxiKTtlbHNlIGZvcihkIGluIGIpZltkXT1iW2RdO3JldHVybiBmfSxnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNhY2hlW3RoaXMua2V5KGEpXTtyZXR1cm4gdm9pZCAwPT09Yj9jOmNbYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpcy5rZXkoYSksZz10aGlzLmNhY2hlW2ZdO2lmKHZvaWQgMD09PWIpdGhpcy5jYWNoZVtmXT17fTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBnP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZz9bZF06ZC5tYXRjaChFKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZ1tkW2NdXX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNFbXB0eU9iamVjdCh0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV18fHt9KX0sZGlzY2FyZDpmdW5jdGlvbihhKXthW3RoaXMuZXhwYW5kb10mJmRlbGV0ZSB0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV19fTt2YXIgTD1uZXcgSyxNPW5ldyBLLE49L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLE89LyhbQS1aXSkvZztmdW5jdGlvbiBQKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoTyxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOk4udGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31NLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gTS5oYXNEYXRhKGEpfHxMLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe1xucmV0dXJuIE0uYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe00ucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTC5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe0wucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1NLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIUwuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxQKGYsZCxlW2RdKSkpO0wuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7TS5zZXQodGhpcyxhKX0pOkoodGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkPW4uY2FtZWxDYXNlKGEpO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9TS5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9TS5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UChmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9TS5nZXQodGhpcyxkKTtNLnNldCh0aGlzLGQsYiksLTEhPT1hLmluZGV4T2YoXCItXCIpJiZ2b2lkIDAhPT1jJiZNLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7TS5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9TC5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPUwuYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIEwuZ2V0KGEsYyl8fEwuYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtMLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1MLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBRPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxSPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxTPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW4uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9LFQ9L14oPzpjaGVja2JveHxyYWRpbykkL2k7IWZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxrLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsay5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBVPVwidW5kZWZpbmVkXCI7ay5mb2N1c2luQnViYmxlcz1cIm9uZm9jdXNpblwiaW4gYTt2YXIgVj0vXmtleS8sVz0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLyxYPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxZPS9eKFteLl0qKSg/OlxcLiguKyl8KSQvO2Z1bmN0aW9uIFooKXtyZXR1cm4hMH1mdW5jdGlvbiAkKCl7cmV0dXJuITF9ZnVuY3Rpb24gXygpe3RyeXtyZXR1cm4gbC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1MLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuIHR5cGVvZiBuIT09VSYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPVkuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnLCExKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1MLmhhc0RhdGEoYSkmJkwuZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPVkuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiYoZGVsZXRlIHIuaGFuZGxlLEwucmVtb3ZlKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnLGgsaSxrLG0sbyxwPVtkfHxsXSxxPWouY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWouY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihnPWg9ZD1kfHxsLDMhPT1kLm5vZGVUeXBlJiY4IT09ZC5ub2RlVHlwZSYmIVgudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+PTAmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxrPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1lPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIubmFtZXNwYWNlX3JlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWQpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxlfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZCxjKSE9PSExKSl7aWYoIWUmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhkKSl7Zm9yKGk9by5kZWxlZ2F0ZVR5cGV8fHEsWC50ZXN0KGkrcSl8fChnPWcucGFyZW50Tm9kZSk7ZztnPWcucGFyZW50Tm9kZSlwLnB1c2goZyksaD1nO2g9PT0oZC5vd25lckRvY3VtZW50fHxsKSYmcC5wdXNoKGguZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93fHxhKX1mPTA7d2hpbGUoKGc9cFtmKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zj4xP2k6by5iaW5kVHlwZXx8cSxtPShMLmdldChnLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTC5nZXQoZyxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGcsYyksbT1rJiZnW2tdLG0mJm0uYXBwbHkmJm4uYWNjZXB0RGF0YShnKSYmKGIucmVzdWx0PW0uYXBwbHkoZyxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxlfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IW4uYWNjZXB0RGF0YShkKXx8ayYmbi5pc0Z1bmN0aW9uKGRbcV0pJiYhbi5pc1dpbmRvdyhkKSYmKGg9ZFtrXSxoJiYoZFtrXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGRbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaCYmKGRba109aCkpLGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGUsZixnLGg9W10saT1kLmNhbGwoYXJndW1lbnRzKSxqPShMLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5uYW1lc3BhY2VfcmV8fGEubmFtZXNwYWNlX3JlLnRlc3QoZy5uYW1lc3BhY2UpKSYmKGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxlPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYS5yZXN1bHQ9ZSk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoIWEuYnV0dG9ufHxcImNsaWNrXCIhPT1hLnR5cGUpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPj0wOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8bCxkPWMuZG9jdW1lbnRFbGVtZW50LGU9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhkJiZkLnNjcm9sbExlZnR8fGUmJmUuc2Nyb2xsTGVmdHx8MCktKGQmJmQuY2xpZW50TGVmdHx8ZSYmZS5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZCYmZC5zY3JvbGxUb3B8fGUmJmUuc2Nyb2xsVG9wfHwwKS0oZCYmZC5jbGllbnRUb3B8fGUmJmUuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Znx8KGEud2hpY2g9MSZmPzE6MiZmPzM6NCZmPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxkLGU9YS50eXBlLGY9YSxnPXRoaXMuZml4SG9va3NbZV07Z3x8KHRoaXMuZml4SG9va3NbZV09Zz1XLnRlc3QoZSk/dGhpcy5tb3VzZUhvb2tzOlYudGVzdChlKT90aGlzLmtleUhvb2tzOnt9KSxkPWcucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoZy5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGYpLGI9ZC5sZW5ndGg7d2hpbGUoYi0tKWM9ZFtiXSxhW2NdPWZbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9bCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksZy5maWx0ZXI/Zy5maWx0ZXIoYSxmKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PV8oKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09XygpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMCxvcmlnaW5hbEV2ZW50Ont9fSk7ZD9uLmV2ZW50LnRyaWdnZXIoZSxudWxsLGIpOm4uZXZlbnQuZGlzcGF0Y2guY2FsbChiLGUpLGUuaXNEZWZhdWx0UHJldmVudGVkKCkmJmMucHJldmVudERlZmF1bHQoKX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP1o6JCk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtpc0RlZmF1bHRQcmV2ZW50ZWQ6JCxpc1Byb3BhZ2F0aW9uU3RvcHBlZDokLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiQscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9WixhJiZhLnByZXZlbnREZWZhdWx0JiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPVosYSYmYS5zdG9wUHJvcGFnYXRpb24mJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPVosYSYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24mJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuKCFlfHxlIT09ZCYmIW4uY29udGFpbnMoZCxlKSkmJihhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLGsuZm9jdXNpbkJ1YmJsZXN8fG4uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bi5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG4uZXZlbnQuZml4KGEpLCEwKX07bi5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPUwuYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksTC5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1MLmFjY2VzcyhkLGIpLTE7ZT9MLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLEwucmVtb3ZlKGQsYikpfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9Y3x8YixiPXZvaWQgMCk7Zm9yKGcgaW4gYSl0aGlzLm9uKGcsYixjLGFbZ10sZSk7cmV0dXJuIHRoaXN9aWYobnVsbD09YyYmbnVsbD09ZD8oZD1iLGM9Yj12b2lkIDApOm51bGw9PWQmJihcInN0cmluZ1wiPT10eXBlb2YgYj8oZD1jLGM9dm9pZCAwKTooZD1jLGM9YixiPXZvaWQgMCkpLGQ9PT0hMSlkPSQ7ZWxzZSBpZighZClyZXR1cm4gdGhpcztyZXR1cm4gMT09PWUmJihmPWQsZD1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxmLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZC5ndWlkPWYuZ3VpZHx8KGYuZ3VpZD1uLmd1aWQrKykpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYSxkLGMsYil9KX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybihiPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpJiYoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPSQpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSk7dmFyIGFhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxiYT0vPChbXFx3Ol0rKS8sY2E9Lzx8JiM/XFx3KzsvLGRhPS88KD86c2NyaXB0fHN0eWxlfGxpbmspL2ksZWE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxmYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGdhPS9edHJ1ZVxcLyguKikvLGhhPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxpYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2lhLm9wdGdyb3VwPWlhLm9wdGlvbixpYS50Ym9keT1pYS50Zm9vdD1pYS5jb2xncm91cD1pYS5jYXB0aW9uPWlhLnRoZWFkLGlhLnRoPWlhLnRkO2Z1bmN0aW9uIGphKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIGthKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIGxhKGEpe3ZhciBiPWdhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBtYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylMLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxMLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihMLmhhc0RhdGEoYSkmJihmPUwuYWNjZXNzKGEpLGc9TC5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfU0uaGFzRGF0YShhKSYmKGg9TS5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxNLnNldChiLGkpKX19ZnVuY3Rpb24gb2EoYSxiKXt2YXIgYz1hLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOmEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBwYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZULnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1uLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShrLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZz1vYShoKSxmPW9hKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspcGEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8b2EoYSksZz1nfHxvYShoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKW5hKGZbZF0sZ1tkXSk7ZWxzZSBuYShhLGgpO3JldHVybiBnPW9hKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmbWEoZywhaSYmb2EoYSxcInNjcmlwdFwiKSksaH0sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGUsZixnLGgsaSxqLGs9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbD1bXSxtPTAsbz1hLmxlbmd0aDtvPm07bSsrKWlmKGU9YVttXSxlfHwwPT09ZSlpZihcIm9iamVjdFwiPT09bi50eXBlKGUpKW4ubWVyZ2UobCxlLm5vZGVUeXBlP1tlXTplKTtlbHNlIGlmKGNhLnRlc3QoZSkpe2Y9Znx8ay5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGc9KGJhLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGg9aWFbZ118fGlhLl9kZWZhdWx0LGYuaW5uZXJIVE1MPWhbMV0rZS5yZXBsYWNlKGFhLFwiPCQxPjwvJDI+XCIpK2hbMl0saj1oWzBdO3doaWxlKGotLSlmPWYubGFzdENoaWxkO24ubWVyZ2UobCxmLmNoaWxkTm9kZXMpLGY9ay5maXJzdENoaWxkLGYudGV4dENvbnRlbnQ9XCJcIn1lbHNlIGwucHVzaChiLmNyZWF0ZVRleHROb2RlKGUpKTtrLnRleHRDb250ZW50PVwiXCIsbT0wO3doaWxlKGU9bFttKytdKWlmKCghZHx8LTE9PT1uLmluQXJyYXkoZSxkKSkmJihpPW4uY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpLGY9b2Eoay5hcHBlbmRDaGlsZChlKSxcInNjcmlwdFwiKSxpJiZtYShmKSxjKSl7aj0wO3doaWxlKGU9ZltqKytdKWZhLnRlc3QoZS50eXBlfHxcIlwiKSYmYy5wdXNoKGUpfXJldHVybiBrfSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlLGY9bi5ldmVudC5zcGVjaWFsLGc9MDt2b2lkIDAhPT0oYz1hW2ddKTtnKyspe2lmKG4uYWNjZXB0RGF0YShjKSYmKGU9Y1tMLmV4cGFuZG9dLGUmJihiPUwuY2FjaGVbZV0pKSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZltkXT9uLmV2ZW50LnJlbW92ZShjLGQpOm4ucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtMLmNhY2hlW2VdJiZkZWxldGUgTC5jYWNoZVtlXX1kZWxldGUgTS5jYWNoZVtjW00uZXhwYW5kb11dfX19KSxuLmZuLmV4dGVuZCh7dGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJih0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1qYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWphKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9YT9uLmZpbHRlcihhLHRoaXMpOnRoaXMsZT0wO251bGwhPShjPWRbZV0pO2UrKylifHwxIT09Yy5ub2RlVHlwZXx8bi5jbGVhbkRhdGEob2EoYykpLGMucGFyZW50Tm9kZSYmKGImJm4uY29udGFpbnMoYy5vd25lckRvY3VtZW50LGMpJiZtYShvYShjLFwic2NyaXB0XCIpKSxjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYykpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEob2EoYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWRhLnRlc3QoYSkmJiFpYVsoYmEuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPWEucmVwbGFjZShhYSxcIjwkMT48LyQyPlwiKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShvYShiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXTtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYil7YT10aGlzLnBhcmVudE5vZGUsbi5jbGVhbkRhdGEob2EodGhpcykpLGEmJmEucmVwbGFjZUNoaWxkKGIsdGhpcyl9KSxhJiYoYS5sZW5ndGh8fGEubm9kZVR5cGUpP3RoaXM6dGhpcy5yZW1vdmUoKX0sZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnJlbW92ZShhLCEwKX0sZG9tTWFuaXA6ZnVuY3Rpb24oYSxiKXthPWUuYXBwbHkoW10sYSk7dmFyIGMsZCxmLGcsaCxpLGo9MCxsPXRoaXMubGVuZ3RoLG09dGhpcyxvPWwtMSxwPWFbMF0scT1uLmlzRnVuY3Rpb24ocCk7aWYocXx8bD4xJiZcInN0cmluZ1wiPT10eXBlb2YgcCYmIWsuY2hlY2tDbG9uZSYmZWEudGVzdChwKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPW0uZXEoYyk7cSYmKGFbMF09cC5jYWxsKHRoaXMsYyxkLmh0bWwoKSkpLGQuZG9tTWFuaXAoYSxiKX0pO2lmKGwmJihjPW4uYnVpbGRGcmFnbWVudChhLHRoaXNbMF0ub3duZXJEb2N1bWVudCwhMSx0aGlzKSxkPWMuZmlyc3RDaGlsZCwxPT09Yy5jaGlsZE5vZGVzLmxlbmd0aCYmKGM9ZCksZCkpe2ZvcihmPW4ubWFwKG9hKGMsXCJzY3JpcHRcIiksa2EpLGc9Zi5sZW5ndGg7bD5qO2orKyloPWMsaiE9PW8mJihoPW4uY2xvbmUoaCwhMCwhMCksZyYmbi5tZXJnZShmLG9hKGgsXCJzY3JpcHRcIikpKSxiLmNhbGwodGhpc1tqXSxoLGopO2lmKGcpZm9yKGk9ZltmLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGYsbGEpLGo9MDtnPmo7aisrKWg9ZltqXSxmYS50ZXN0KGgudHlwZXx8XCJcIikmJiFMLmFjY2VzcyhoLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhpLGgpJiYoaC5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChoLnNyYyk6bi5nbG9iYWxFdmFsKGgudGV4dENvbnRlbnQucmVwbGFjZShoYSxcIlwiKSkpfXJldHVybiB0aGlzfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGc9ZS5sZW5ndGgtMSxoPTA7Zz49aDtoKyspYz1oPT09Zz90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZi5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgcWEscmE9e307ZnVuY3Rpb24gc2EoYixjKXt2YXIgZCxlPW4oYy5jcmVhdGVFbGVtZW50KGIpKS5hcHBlbmRUbyhjLmJvZHkpLGY9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSYmKGQ9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZShlWzBdKSk/ZC5kaXNwbGF5Om4uY3NzKGVbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBlLmRldGFjaCgpLGZ9ZnVuY3Rpb24gdGEoYSl7dmFyIGI9bCxjPXJhW2FdO3JldHVybiBjfHwoYz1zYShhLGIpLFwibm9uZVwiIT09YyYmY3x8KHFhPShxYXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPXFhWzBdLmNvbnRlbnREb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9c2EoYSxiKSxxYS5kZXRhY2goKSkscmFbYV09YyksY312YXIgdWE9L15tYXJnaW4vLHZhPW5ldyBSZWdFeHAoXCJeKFwiK1ErXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksd2E9ZnVuY3Rpb24oYil7cmV0dXJuIGIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5vcGVuZXI/Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYixudWxsKTphLmdldENvbXB1dGVkU3R5bGUoYixudWxsKX07ZnVuY3Rpb24geGEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHx3YShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0pLGMmJihcIlwiIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksdmEudGVzdChnKSYmdWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiB5YShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0hZnVuY3Rpb24oKXt2YXIgYixjLGQ9bC5kb2N1bWVudEVsZW1lbnQsZT1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZj1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZi5zdHlsZSl7Zi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsZi5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsay5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09Zi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxlLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGUuYXBwZW5kQ2hpbGQoZik7ZnVuY3Rpb24gZygpe2Yuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MSU7dG9wOjElO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NHB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZi5pbm5lckhUTUw9XCJcIixkLmFwcGVuZENoaWxkKGUpO3ZhciBnPWEuZ2V0Q29tcHV0ZWRTdHlsZShmLG51bGwpO2I9XCIxJVwiIT09Zy50b3AsYz1cIjRweFwiPT09Zy53aWR0aCxkLnJlbW92ZUNoaWxkKGUpfWEuZ2V0Q29tcHV0ZWRTdHlsZSYmbi5leHRlbmQoayx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBnKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmZygpLGN9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWYuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWYuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGMuc3R5bGUubWFyZ2luUmlnaHQ9Yy5zdHlsZS53aWR0aD1cIjBcIixmLnN0eWxlLndpZHRoPVwiMXB4XCIsZC5hcHBlbmRDaGlsZChlKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjLG51bGwpLm1hcmdpblJpZ2h0KSxkLnJlbW92ZUNoaWxkKGUpLGYucmVtb3ZlQ2hpbGQoYyksYn19KX19KCksbi5zd2FwPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTt2YXIgemE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLEFhPW5ldyBSZWdFeHAoXCJeKFwiK1ErXCIpKC4qKSRcIixcImlcIiksQmE9bmV3IFJlZ0V4cChcIl4oWystXSk9KFwiK1ErXCIpXCIsXCJpXCIpLENhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxEYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEVhPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXTtmdW5jdGlvbiBGYShhLGIpe2lmKGIgaW4gYSlyZXR1cm4gYjt2YXIgYz1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxkPWIsZT1FYS5sZW5ndGg7d2hpbGUoZS0tKWlmKGI9RWFbZV0rYyxiIGluIGEpcmV0dXJuIGI7cmV0dXJuIGR9ZnVuY3Rpb24gR2EoYSxiLGMpe3ZhciBkPUFhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzFdLShjfHwwKSkrKGRbMl18fFwicHhcIik6Yn1mdW5jdGlvbiBIYShhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1uLmNzcyhhLGMrUltmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bi5jc3MoYSxcInBhZGRpbmdcIitSW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW4uY3NzKGEsXCJib3JkZXJcIitSW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1uLmNzcyhhLFwicGFkZGluZ1wiK1JbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bi5jc3MoYSxcImJvcmRlclwiK1JbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gSWEoYSxiLGMpe3ZhciBkPSEwLGU9XCJ3aWR0aFwiPT09Yj9hLm9mZnNldFdpZHRoOmEub2Zmc2V0SGVpZ2h0LGY9d2EoYSksZz1cImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZigwPj1lfHxudWxsPT1lKXtpZihlPXhhKGEsYixmKSwoMD5lfHxudWxsPT1lKSYmKGU9YS5zdHlsZVtiXSksdmEudGVzdChlKSlyZXR1cm4gZTtkPWcmJihrLmJveFNpemluZ1JlbGlhYmxlKCl8fGU9PT1hLnN0eWxlW2JdKSxlPXBhcnNlRmxvYXQoZSl8fDB9cmV0dXJuIGUrSGEoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZikrXCJweFwifWZ1bmN0aW9uIEphKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPUwuZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZTKGQpJiYoZltnXT1MLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHRhKGQubm9kZU5hbWUpKSkpOihlPVMoZCksXCJub25lXCI9PT1jJiZlfHxMLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPXhhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7Y29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPUZhKGksaCkpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPUJhLmV4ZWMoYykpJiYoYz0oZVsxXSsxKSplWzJdK3BhcnNlRmxvYXQobi5jc3MoYSxiKSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCIhPT1mfHxuLmNzc051bWJlcltoXXx8KGMrPVwicHhcIiksay5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1GYShhLnN0eWxlLGgpKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPXhhKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gRGEmJihlPURhW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8bi5pc051bWVyaWMoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz96YS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/bi5zd2FwKGEsQ2EsZnVuY3Rpb24oKXtyZXR1cm4gSWEoYSxiLGQpfSk6SWEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1kJiZ3YShhKTtyZXR1cm4gR2EoYSxjLGQ/SGEoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSksZSk6MCl9fX0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9eWEoay5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/bi5zd2FwKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0seGEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1JbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sdWEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9R2EpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD13YShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gS2EoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IEthLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1LYSxLYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkthLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fFwic3dpbmdcIix0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9S2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOkthLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPUthLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6S2EucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sS2EucHJvdG90eXBlLmluaXQucHJvdG90eXBlPUthLnByb3RvdHlwZSxLYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG51bGw9PWEuZWxlbVthLnByb3BdfHxhLmVsZW0uc3R5bGUmJm51bGwhPWEuZWxlbS5zdHlsZVthLnByb3BdPyhiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCk6YS5lbGVtW2EucHJvcF19LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKTphLmVsZW0uc3R5bGUmJihudWxsIT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXXx8bi5jc3NIb29rc1thLnByb3BdKT9uLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KTphLmVsZW1bYS5wcm9wXT1hLm5vd319fSxLYS5wcm9wSG9va3Muc2Nyb2xsVG9wPUthLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn19LG4uZng9S2EucHJvdG90eXBlLmluaXQsbi5meC5zdGVwPXt9O3ZhciBMYSxNYSxOYT0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sT2E9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrUStcIikoW2EteiVdKikkXCIsXCJpXCIpLFBhPS9xdWV1ZUhvb2tzJC8sUWE9W1ZhXSxSYT17XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpLGQ9Yy5jdXIoKSxlPU9hLmV4ZWMoYiksZj1lJiZlWzNdfHwobi5jc3NOdW1iZXJbYV0/XCJcIjpcInB4XCIpLGc9KG4uY3NzTnVtYmVyW2FdfHxcInB4XCIhPT1mJiYrZCkmJk9hLmV4ZWMobi5jc3MoYy5lbGVtLGEpKSxoPTEsaT0yMDtpZihnJiZnWzNdIT09Zil7Zj1mfHxnWzNdLGU9ZXx8W10sZz0rZHx8MTtkbyBoPWh8fFwiLjVcIixnLz1oLG4uc3R5bGUoYy5lbGVtLGEsZytmKTt3aGlsZShoIT09KGg9Yy5jdXIoKS9kKSYmMSE9PWgmJi0taSl9cmV0dXJuIGUmJihnPWMuc3RhcnQ9K2d8fCtkfHwwLGMudW5pdD1mLGMuZW5kPWVbMV0/ZysoZVsxXSsxKSplWzJdOitlWzJdKSxjfV19O2Z1bmN0aW9uIFNhKCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtMYT12b2lkIDB9KSxMYT1uLm5vdygpfWZ1bmN0aW9uIFRhKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDs0PmQ7ZCs9Mi1iKWM9UltkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBVYShhLGIsYyl7Zm9yKHZhciBkLGU9KFJhW2JdfHxbXSkuY29uY2F0KFJhW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7Zz5mO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gVmEoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD10aGlzLG09e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmUyhhKSxxPUwuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbC5hbHdheXMoZnVuY3Rpb24oKXtsLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP0wuZ2V0KGEsXCJvbGRkaXNwbGF5XCIpfHx0YShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1rJiZcIm5vbmVcIj09PW4uY3NzKGEsXCJmbG9hdFwiKSYmKG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixsLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sTmEuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bVtkXT1xJiZxW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobSkpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/dGEoYS5ub2RlTmFtZSk6aikmJihvLmRpc3BsYXk9aik7ZWxzZXtxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1MLmFjY2VzcyhhLFwiZnhzaG93XCIse30pLGYmJihxLmhpZGRlbj0hcCkscD9uKGEpLnNob3coKTpsLmRvbmUoZnVuY3Rpb24oKXtuKGEpLmhpZGUoKX0pLGwuZG9uZShmdW5jdGlvbigpe3ZhciBiO0wucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGIgaW4gbSluLnN0eWxlKGEsYixtW2JdKX0pO2ZvcihkIGluIG0pZz1VYShwP3FbZF06MCxkLGwpLGQgaW4gcXx8KHFbZF09Zy5zdGFydCxwJiYoZy5lbmQ9Zy5zdGFydCxnLnN0YXJ0PVwid2lkdGhcIj09PWR8fFwiaGVpZ2h0XCI9PT1kPzE6MCkpfX1mdW5jdGlvbiBXYShhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPW4uY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sbi5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1uLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gWGEoYSxiLGMpe3ZhciBkLGUsZj0wLGc9UWEubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9TGF8fFNhKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e319LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpMYXx8U2EoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPW4uVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7ZD5jO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/aC5yZXNvbHZlV2l0aChhLFtqLGJdKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKFdhKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1RYVtmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIGQ7cmV0dXJuIG4ubWFwKGssVWEsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChYYSx7dHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLnNwbGl0KFwiIFwiKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyljPWFbZF0sUmFbY109UmFbY118fFtdLFJhW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/UWEudW5zaGlmdChhKTpRYS5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LChudWxsPT1kLnF1ZXVlfHxkLnF1ZXVlPT09ITApJiYoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFMpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPVhhKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fEwuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPUwuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJlBhLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7KGJ8fCFjKSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1MLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKFRhKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjpUYShcInNob3dcIiksc2xpZGVVcDpUYShcImhpZGVcIiksc2xpZGVUb2dnbGU6VGEoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9bi50aW1lcnM7Zm9yKExhPW4ubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8bi5meC5zdG9wKCksTGE9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7TWF8fChNYT1zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKE1hKSxNYT1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bi5meD9uLmZ4LnNwZWVkc1thXXx8YTphLGI9Ynx8XCJmeFwiLHRoaXMucXVldWUoYixmdW5jdGlvbihiLGMpe3ZhciBkPXNldFRpbWVvdXQoYixhKTtjLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1sLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixrLmNoZWNrT249XCJcIiE9PWEudmFsdWUsay5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsay5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixrLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBZYSxaYSwkYT1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZihhJiYzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiB0eXBlb2YgYS5nZXRBdHRyaWJ1dGU9PT1VP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZD1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/WmE6WWEpKSxcbnZvaWQgMD09PWM/ZCYmXCJnZXRcImluIGQmJm51bGwhPT0oZT1kLmdldChhLGIpKT9lOihlPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZT92b2lkIDA6ZSk6bnVsbCE9PWM/ZCYmXCJzZXRcImluIGQmJnZvaWQgMCE9PShlPWQuc2V0KGEsYyxiKSk/ZTooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOnZvaWQgbi5yZW1vdmVBdHRyKGEsYikpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEUpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighay5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX19KSxaYT17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz0kYVtiXXx8bi5maW5kLmF0dHI7JGFbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPSRhW2JdLCRhW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCwkYVtiXT1mKSxlfX0pO3ZhciBfYT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn0scHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9YS5ub2RlVHlwZTtpZihhJiYzIT09ZyYmOCE9PWcmJjIhPT1nKXJldHVybiBmPTEhPT1nfHwhbi5pc1hNTERvYyhhKSxmJiYoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpfHxfYS50ZXN0KGEubm9kZU5hbWUpfHxhLmhyZWY/YS50YWJJbmRleDotMX19fX0pLGsub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGFiPS9bXFx0XFxyXFxuXFxmXS9nO24uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD1cInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEUpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGFiLFwiIFwiKTpcIiBcIikpe2Y9MDt3aGlsZShlPWJbZisrXSlkLmluZGV4T2YoXCIgXCIrZStcIiBcIik8MCYmKGQrPWUrXCIgXCIpO2c9bi50cmltKGQpLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD0wPT09YXJndW1lbnRzLmxlbmd0aHx8XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIik6XCJcIikpe2Y9MDt3aGlsZShlPWJbZisrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZStcIiBcIik+PTApZD1kLnJlcGxhY2UoXCIgXCIrZStcIiBcIixcIiBcIik7Zz1hP24udHJpbShkKTpcIlwiLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6dGhpcy5lYWNoKG4uaXNGdW5jdGlvbihhKT9mdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsdGhpcy5jbGFzc05hbWUsYiksYil9OmZ1bmN0aW9uKCl7aWYoXCJzdHJpbmdcIj09PWMpe3ZhciBiLGQ9MCxlPW4odGhpcyksZj1hLm1hdGNoKEUpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlKGM9PT1VfHxcImJvb2xlYW5cIj09PWMpJiYodGhpcy5jbGFzc05hbWUmJkwuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxhPT09ITE/XCJcIjpMLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIil9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVwiIFwiK2ErXCIgXCIsYz0wLGQ9dGhpcy5sZW5ndGg7ZD5jO2MrKylpZigxPT09dGhpc1tjXS5ub2RlVHlwZSYmKFwiIFwiK3RoaXNbY10uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGFiLFwiIFwiKS5pbmRleE9mKGIpPj0wKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBiYj0vXFxyL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoYmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm4udHJpbShuLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwhKCFjLnNlbGVjdGVkJiZpIT09ZXx8KGsub3B0RGlzYWJsZWQ/Yy5kaXNhYmxlZDpudWxsIT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl8fGMucGFyZW50Tm9kZS5kaXNhYmxlZCYmbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1uLmluQXJyYXkoZC52YWx1ZSxmKT49MCkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT49MDp2b2lkIDB9fSxrLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9LGJpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KTt2YXIgY2I9bi5ub3coKSxkYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGEpe3ZhciBiLGM7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtjPW5ldyBET01QYXJzZXIsYj1jLnBhcnNlRnJvbVN0cmluZyhhLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yj12b2lkIDB9cmV0dXJuKCFifHxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoKSYmbi5lcnJvcihcIkludmFsaWQgWE1MOiBcIithKSxifTt2YXIgZWI9LyMuKiQvLGZiPS8oWz8mXSlfPVteJl0qLyxnYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLGhiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLGliPS9eKD86R0VUfEhFQUQpJC8samI9L15cXC9cXC8vLGtiPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLGxiPXt9LG1iPXt9LG5iPVwiKi9cIi5jb25jYXQoXCIqXCIpLG9iPWEubG9jYXRpb24uaHJlZixwYj1rYi5leGVjKG9iLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBxYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiByYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1tYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHNiKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB0YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiB1YihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpvYix0eXBlOlwiR0VUXCIsaXNMb2NhbDpoYi50ZXN0KHBiWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpuYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP3NiKHNiKGEsbi5hamF4U2V0dGluZ3MpLGIpOnNiKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOnFiKGxiKSxhamF4VHJhbnNwb3J0OnFiKG1iKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW4uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG09ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP24obCk6bi5ldmVudCxvPW4uRGVmZXJyZWQoKSxwPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighZil7Zj17fTt3aGlsZShiPWdiLmV4ZWMoZSkpZltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1mW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gYyYmYy5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fG9iKStcIlwiKS5yZXBsYWNlKGViLFwiXCIpLnJlcGxhY2UoamIscGJbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1uLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoaD1rYi5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghaHx8aFsxXT09PXBiWzFdJiZoWzJdPT09cGJbMl0mJihoWzNdfHwoXCJodHRwOlwiPT09aFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KHBiWzNdfHwoXCJodHRwOlwiPT09cGJbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1uLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSkscmIobGIsayxiLHYpLDI9PT10KXJldHVybiB2O2k9bi5ldmVudCYmay5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFpYi50ZXN0KGsudHlwZSksZD1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihkPWsudXJsKz0oZGIudGVzdChkKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPWZiLnRlc3QoZCk/ZC5yZXBsYWNlKGZiLFwiJDFfPVwiK2NiKyspOmQrKGRiLnRlc3QoZCk/XCImXCI6XCI/XCIpK1wiXz1cIitjYisrKSksay5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZF0pLG4uZXRhZ1tkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tkXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrbmIrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihqIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoaixrLmhlYWRlcnNbal0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoaiBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2pdKGtbal0pO2lmKGM9cmIobWIsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxpJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGMuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixmLGgpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxjPXZvaWQgMCxlPWh8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGYmJih1PXRiKGssdixmKSksdT11YihrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtkXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZF09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGkmJm0udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGkmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfTpmdW5jdGlvbigpe3ZhciBiPW4odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bi5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG4odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pLG4uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXRXaWR0aDw9MCYmYS5vZmZzZXRIZWlnaHQ8PTB9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLmhpZGRlbihhKX07dmFyIHZiPS8lMjAvZyx3Yj0vXFxbXFxdJC8seGI9L1xccj9cXG4vZyx5Yj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksemI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHdiLnRlc3QoYSk/ZChhLGUpOkFiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQWIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUFiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UodmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJnpiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF5Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhVC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYSl7fX07dmFyIEJiPTAsQ2I9e30sRGI9ezA6MjAwLDEyMjM6MjA0fSxFYj1uLmFqYXhTZXR0aW5ncy54aHIoKTthLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBDYilDYlthXSgpfSksay5jb3JzPSEhRWImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBFYixrLmFqYXg9RWI9ISFFYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGsuY29yc3x8RWImJiFhLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytCYjtpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKWYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0pO2I9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmKGRlbGV0ZSBDYltnXSxiPWYub25sb2FkPWYub25lcnJvcj1udWxsLFwiYWJvcnRcIj09PWE/Zi5hYm9ydCgpOlwiZXJyb3JcIj09PWE/ZChmLnN0YXR1cyxmLnN0YXR1c1RleHQpOmQoRGJbZi5zdGF0dXNdfHxmLnN0YXR1cyxmLnN0YXR1c1RleHQsXCJzdHJpbmdcIj09dHlwZW9mIGYucmVzcG9uc2VUZXh0P3t0ZXh0OmYucmVzcG9uc2VUZXh0fTp2b2lkIDAsZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sZi5vbmxvYWQ9YigpLGYub25lcnJvcj1iKFwiZXJyb3JcIiksYj1DYltnXT1iKFwiYWJvcnRcIik7dHJ5e2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9Y2F0Y2goaCl7aWYoYil0aHJvdyBofX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2FzeW5jOiEwLGNoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZShcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksbC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBGYj1bXSxHYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUZiLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIrY2IrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoR2IudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYhKGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkdiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoR2IsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oZGIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEZiLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxsO3ZhciBkPXYuZXhlYyhhKSxlPSFjJiZbXTtyZXR1cm4gZD9bYi5jcmVhdGVFbGVtZW50KGRbMV0pXTooZD1uLmJ1aWxkRnJhZ21lbnQoW2FdLGIsZSksZSYmZS5sZW5ndGgmJm4oZSkucmVtb3ZlKCksbi5tZXJnZShbXSxkLmNoaWxkTm9kZXMpKX07dmFyIEhiPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZIYilyZXR1cm4gSGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPj0wJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmNvbXBsZXRlKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07dmFyIEliPWEuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2Z1bmN0aW9uIEpiKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLGgpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KHR5cGVvZiBkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCE9PVUmJihlPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGM9SmIoZikse3RvcDplLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZC50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxkLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtZC50b3Atbi5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtbi5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnR8fEliO3doaWxlKGEmJiFuLm5vZGVOYW1lKGEsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fElifSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihiLGMpe3ZhciBkPVwicGFnZVlPZmZzZXRcIj09PWM7bi5mbltiXT1mdW5jdGlvbihlKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGIsZSxmKXt2YXIgZz1KYihiKTtyZXR1cm4gdm9pZCAwPT09Zj9nP2dbY106YltlXTp2b2lkKGc/Zy5zY3JvbGxUbyhkP2EucGFnZVhPZmZzZXQ6ZixkP2Y6YS5wYWdlWU9mZnNldCk6YltlXT1mKX0sYixlLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09eWEoay5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9eGEoYSxiKSx2YS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBLYj1hLmpRdWVyeSxMYj1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1MYiksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9S2IpLG59LHR5cGVvZiBiPT09VSYmKGEualF1ZXJ5PWEuJD1uKSxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qcXVlcnkubWluLm1hcFxuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgJCAhPSBcInVuZGVmaW5lZFwiID8gJCA6IHdpbmRvdy4kKTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuIl19
},{}],4:[function(require,module,exports){
(function (global){

; jQuery = global.jQuery = require("/vagrant/public/themes/source_intranet/node_modules/jquery/dist/jquery.min.js");
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! Magnific Popup - v1.0.1 - 2015-12-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(__browserify_shim_require__('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,

		prependTo: null,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);
		
		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
							
						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {										
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});



/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
					
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images 

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*
			
			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/

/*>>fastclick*/
/**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 * 
 * 
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 * 
 */

(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();

/*>>fastclick*/
 _checkInstance(); }));
; browserify_shim__define__module__export__(typeof magnificPopup != "undefined" ? magnificPopup : window.magnificPopup);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9tYWduaWZpYy1wb3B1cC9kaXN0L2pxdWVyeS5tYWduaWZpYy1wb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiXG47IGpRdWVyeSA9IGdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKFwiL3ZhZ3JhbnQvcHVibGljL3RoZW1lcy9zb3VyY2VfaW50cmFuZXQvbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanNcIik7XG47IHZhciBfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX189cmVxdWlyZTsoZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBleHBvcnRzLCByZXF1aXJlLCBkZWZpbmUsIGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKSB7XG4vKiEgTWFnbmlmaWMgUG9wdXAgLSB2MS4wLjEgLSAyMDE1LTEyLTMwXG4qIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL1xuKiBDb3B5cmlnaHQgKGMpIDIwMTUgRG1pdHJ5IFNlbWVub3Y7ICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7IFxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgeyBcbiAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuIFxuIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTsgXG4gfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHsgXG4gLy8gTm9kZS9Db21tb25KUyBcbiBmYWN0b3J5KF9fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXygnanF1ZXJ5JykpOyBcbiB9IGVsc2UgeyBcbiAvLyBCcm93c2VyIGdsb2JhbHMgXG4gZmFjdG9yeSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byk7IFxuIH0gXG4gfShmdW5jdGlvbigkKSB7IFxuXG4vKj4+Y29yZSovXG4vKipcbiAqIFxuICogTWFnbmlmaWMgUG9wdXAgQ29yZSBKUyBmaWxlXG4gKiBcbiAqL1xuXG5cbi8qKlxuICogUHJpdmF0ZSBzdGF0aWMgY29uc3RhbnRzXG4gKi9cbnZhciBDTE9TRV9FVkVOVCA9ICdDbG9zZScsXG5cdEJFRk9SRV9DTE9TRV9FVkVOVCA9ICdCZWZvcmVDbG9zZScsXG5cdEFGVEVSX0NMT1NFX0VWRU5UID0gJ0FmdGVyQ2xvc2UnLFxuXHRCRUZPUkVfQVBQRU5EX0VWRU5UID0gJ0JlZm9yZUFwcGVuZCcsXG5cdE1BUktVUF9QQVJTRV9FVkVOVCA9ICdNYXJrdXBQYXJzZScsXG5cdE9QRU5fRVZFTlQgPSAnT3BlbicsXG5cdENIQU5HRV9FVkVOVCA9ICdDaGFuZ2UnLFxuXHROUyA9ICdtZnAnLFxuXHRFVkVOVF9OUyA9ICcuJyArIE5TLFxuXHRSRUFEWV9DTEFTUyA9ICdtZnAtcmVhZHknLFxuXHRSRU1PVklOR19DTEFTUyA9ICdtZnAtcmVtb3ZpbmcnLFxuXHRQUkVWRU5UX0NMT1NFX0NMQVNTID0gJ21mcC1wcmV2ZW50LWNsb3NlJztcblxuXG4vKipcbiAqIFByaXZhdGUgdmFycyBcbiAqL1xuLypqc2hpbnQgLVcwNzkgKi9cbnZhciBtZnAsIC8vIEFzIHdlIGhhdmUgb25seSBvbmUgaW5zdGFuY2Ugb2YgTWFnbmlmaWNQb3B1cCBvYmplY3QsIHdlIGRlZmluZSBpdCBsb2NhbGx5IHRvIG5vdCB0byB1c2UgJ3RoaXMnXG5cdE1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbigpe30sXG5cdF9pc0pRID0gISEod2luZG93LmpRdWVyeSksXG5cdF9wcmV2U3RhdHVzLFxuXHRfd2luZG93ID0gJCh3aW5kb3cpLFxuXHRfZG9jdW1lbnQsXG5cdF9wcmV2Q29udGVudFR5cGUsXG5cdF93cmFwQ2xhc3Nlcyxcblx0X2N1cnJQb3B1cFR5cGU7XG5cblxuLyoqXG4gKiBQcml2YXRlIGZ1bmN0aW9uc1xuICovXG52YXIgX21mcE9uID0gZnVuY3Rpb24obmFtZSwgZikge1xuXHRcdG1mcC5ldi5vbihOUyArIG5hbWUgKyBFVkVOVF9OUywgZik7XG5cdH0sXG5cdF9nZXRFbCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgYXBwZW5kVG8sIGh0bWwsIHJhdykge1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVsLmNsYXNzTmFtZSA9ICdtZnAtJytjbGFzc05hbWU7XG5cdFx0aWYoaHRtbCkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9XG5cdFx0aWYoIXJhdykge1xuXHRcdFx0ZWwgPSAkKGVsKTtcblx0XHRcdGlmKGFwcGVuZFRvKSB7XG5cdFx0XHRcdGVsLmFwcGVuZFRvKGFwcGVuZFRvKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoYXBwZW5kVG8pIHtcblx0XHRcdGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXHRfbWZwVHJpZ2dlciA9IGZ1bmN0aW9uKGUsIGRhdGEpIHtcblx0XHRtZnAuZXYudHJpZ2dlckhhbmRsZXIoTlMgKyBlLCBkYXRhKTtcblxuXHRcdGlmKG1mcC5zdC5jYWxsYmFja3MpIHtcblx0XHRcdC8vIGNvbnZlcnRzIFwibWZwRXZlbnROYW1lXCIgdG8gXCJldmVudE5hbWVcIiBjYWxsYmFjayBhbmQgdHJpZ2dlcnMgaXQgaWYgaXQncyBwcmVzZW50XG5cdFx0XHRlID0gZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGUuc2xpY2UoMSk7XG5cdFx0XHRpZihtZnAuc3QuY2FsbGJhY2tzW2VdKSB7XG5cdFx0XHRcdG1mcC5zdC5jYWxsYmFja3NbZV0uYXBwbHkobWZwLCAkLmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9nZXRDbG9zZUJ0biA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZih0eXBlICE9PSBfY3VyclBvcHVwVHlwZSB8fCAhbWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bikge1xuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0biA9ICQoIG1mcC5zdC5jbG9zZU1hcmt1cC5yZXBsYWNlKCcldGl0bGUlJywgbWZwLnN0LnRDbG9zZSApICk7XG5cdFx0XHRfY3VyclBvcHVwVHlwZSA9IHR5cGU7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuO1xuXHR9LFxuXHQvLyBJbml0aWFsaXplIE1hZ25pZmljIFBvcHVwIG9ubHkgd2hlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRfY2hlY2tJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCEkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UpIHtcblx0XHRcdC8qanNoaW50IC1XMDIwICovXG5cdFx0XHRtZnAgPSBuZXcgTWFnbmlmaWNQb3B1cCgpO1xuXHRcdFx0bWZwLmluaXQoKTtcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSA9IG1mcDtcblx0XHR9XG5cdH0sXG5cdC8vIENTUyB0cmFuc2l0aW9uIGRldGVjdGlvbiwgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjY0ODk5L2RldGVjdC1jc3MtdHJhbnNpdGlvbnMtdXNpbmctamF2YXNjcmlwdC1hbmQtd2l0aG91dC1tb2Rlcm5penJcblx0c3VwcG9ydHNUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLCAvLyAncycgZm9yIHN0eWxlLiBiZXR0ZXIgdG8gY3JlYXRlIGFuIGVsZW1lbnQgaWYgYm9keSB5ZXQgdG8gZXhpc3Rcblx0XHRcdHYgPSBbJ21zJywnTycsJ01veicsJ1dlYmtpdCddOyAvLyAndicgZm9yIHZlbmRvclxuXG5cdFx0aWYoIHNbJ3RyYW5zaXRpb24nXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuIHRydWU7IFxuXHRcdH1cblx0XHRcdFxuXHRcdHdoaWxlKCB2Lmxlbmd0aCApIHtcblx0XHRcdGlmKCB2LnBvcCgpICsgJ1RyYW5zaXRpb24nIGluIHMgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcdFx0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblxuLyoqXG4gKiBQdWJsaWMgZnVuY3Rpb25zXG4gKi9cbk1hZ25pZmljUG9wdXAucHJvdG90eXBlID0ge1xuXG5cdGNvbnN0cnVjdG9yOiBNYWduaWZpY1BvcHVwLFxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBNYWduaWZpYyBQb3B1cCBwbHVnaW4uIFxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBvbmx5IG9uY2Ugd2hlbiAkLmZuLm1hZ25pZmljUG9wdXAgb3IgJC5tYWduaWZpY1BvcHVwIGlzIGV4ZWN1dGVkXG5cdCAqL1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgYXBwVmVyc2lvbiA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdG1mcC5pc0lFNyA9IGFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgNy5cIikgIT09IC0xOyBcblx0XHRtZnAuaXNJRTggPSBhcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDguXCIpICE9PSAtMTtcblx0XHRtZnAuaXNMb3dJRSA9IG1mcC5pc0lFNyB8fCBtZnAuaXNJRTg7XG5cdFx0bWZwLmlzQW5kcm9pZCA9ICgvYW5kcm9pZC9naSkudGVzdChhcHBWZXJzaW9uKTtcblx0XHRtZnAuaXNJT1MgPSAoL2lwaG9uZXxpcGFkfGlwb2QvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLnN1cHBvcnRzVHJhbnNpdGlvbiA9IHN1cHBvcnRzVHJhbnNpdGlvbnMoKTtcblxuXHRcdC8vIFdlIGRpc2FibGUgZml4ZWQgcG9zaXRpb25lZCBsaWdodGJveCBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgaGFuZGxlIGl0IG5pY2VseS5cblx0XHQvLyBJZiB5b3Uga25vdyBhIGJldHRlciB3YXkgb2YgZGV0ZWN0aW5nIHRoaXMgLSBsZXQgbWUga25vdy5cblx0XHRtZnAucHJvYmFibHlNb2JpbGUgPSAobWZwLmlzQW5kcm9pZCB8fCBtZnAuaXNJT1MgfHwgLyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApO1xuXHRcdF9kb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG5cdFx0bWZwLnBvcHVwc0NhY2hlID0ge307XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9wZW5zIHBvcHVwXG5cdCAqIEBwYXJhbSAgZGF0YSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRvcGVuOiBmdW5jdGlvbihkYXRhKSB7XG5cblx0XHR2YXIgaTtcblxuXHRcdGlmKGRhdGEuaXNPYmogPT09IGZhbHNlKSB7IFxuXHRcdFx0Ly8gY29udmVydCBqUXVlcnkgY29sbGVjdGlvbiB0byBhcnJheSB0byBhdm9pZCBjb25mbGljdHMgbGF0ZXJcblx0XHRcdG1mcC5pdGVtcyA9IGRhdGEuaXRlbXMudG9BcnJheSgpO1xuXG5cdFx0XHRtZnAuaW5kZXggPSAwO1xuXHRcdFx0dmFyIGl0ZW1zID0gZGF0YS5pdGVtcyxcblx0XHRcdFx0aXRlbTtcblx0XHRcdGZvcihpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdFx0aWYoaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0XHRpdGVtID0gaXRlbS5lbFswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihpdGVtID09PSBkYXRhLmVsWzBdKSB7XG5cdFx0XHRcdFx0bWZwLmluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuaXRlbXMgPSAkLmlzQXJyYXkoZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW2RhdGEuaXRlbXNdO1xuXHRcdFx0bWZwLmluZGV4ID0gZGF0YS5pbmRleCB8fCAwO1xuXHRcdH1cblxuXHRcdC8vIGlmIHBvcHVwIGlzIGFscmVhZHkgb3BlbmVkIC0gd2UganVzdCB1cGRhdGUgdGhlIGNvbnRlbnRcblx0XHRpZihtZnAuaXNPcGVuKSB7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0bWZwLnR5cGVzID0gW107IFxuXHRcdF93cmFwQ2xhc3NlcyA9ICcnO1xuXHRcdGlmKGRhdGEubWFpbkVsICYmIGRhdGEubWFpbkVsLmxlbmd0aCkge1xuXHRcdFx0bWZwLmV2ID0gZGF0YS5tYWluRWwuZXEoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5ldiA9IF9kb2N1bWVudDtcblx0XHR9XG5cblx0XHRpZihkYXRhLmtleSkge1xuXHRcdFx0aWYoIW1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0pIHtcblx0XHRcdFx0bWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSB7fTtcblx0XHR9XG5cblxuXG5cdFx0bWZwLnN0ID0gJC5leHRlbmQodHJ1ZSwge30sICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cywgZGF0YSApOyBcblx0XHRtZnAuZml4ZWRDb250ZW50UG9zID0gbWZwLnN0LmZpeGVkQ29udGVudFBvcyA9PT0gJ2F1dG8nID8gIW1mcC5wcm9iYWJseU1vYmlsZSA6IG1mcC5zdC5maXhlZENvbnRlbnRQb3M7XG5cblx0XHRpZihtZnAuc3QubW9kYWwpIHtcblx0XHRcdG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkJnQ2xpY2sgPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5zaG93Q2xvc2VCdG4gPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5lbmFibGVFc2NhcGVLZXkgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cblx0XHQvLyBCdWlsZGluZyBtYXJrdXBcblx0XHQvLyBtYWluIGNvbnRhaW5lcnMgYXJlIGNyZWF0ZWQgb25seSBvbmNlXG5cdFx0aWYoIW1mcC5iZ092ZXJsYXkpIHtcblxuXHRcdFx0Ly8gRGFyayBvdmVybGF5XG5cdFx0XHRtZnAuYmdPdmVybGF5ID0gX2dldEVsKCdiZycpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAud3JhcCA9IF9nZXRFbCgnd3JhcCcpLmF0dHIoJ3RhYmluZGV4JywgLTEpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYobWZwLl9jaGVja0lmQ2xvc2UoZS50YXJnZXQpKSB7XG5cdFx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyID0gX2dldEVsKCdjb250YWluZXInLCBtZnAud3JhcCk7XG5cdFx0fVxuXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIgPSBfZ2V0RWwoJ2NvbnRlbnQnKTtcblx0XHRpZihtZnAuc3QucHJlbG9hZGVyKSB7XG5cdFx0XHRtZnAucHJlbG9hZGVyID0gX2dldEVsKCdwcmVsb2FkZXInLCBtZnAuY29udGFpbmVyLCBtZnAuc3QudExvYWRpbmcpO1xuXHRcdH1cblxuXG5cdFx0Ly8gSW5pdGlhbGl6aW5nIG1vZHVsZXNcblx0XHR2YXIgbW9kdWxlcyA9ICQubWFnbmlmaWNQb3B1cC5tb2R1bGVzO1xuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBuID0gbW9kdWxlc1tpXTtcblx0XHRcdG4gPSBuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbi5zbGljZSgxKTtcblx0XHRcdG1mcFsnaW5pdCcrbl0uY2FsbChtZnApO1xuXHRcdH1cblx0XHRfbWZwVHJpZ2dlcignQmVmb3JlT3BlbicpO1xuXG5cblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuKSB7XG5cdFx0XHQvLyBDbG9zZSBidXR0b25cblx0XHRcdGlmKCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUpIHtcblx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKCBfZ2V0Q2xvc2VCdG4oKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X21mcE9uKE1BUktVUF9QQVJTRV9FVkVOVCwgZnVuY3Rpb24oZSwgdGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHRcdHZhbHVlcy5jbG9zZV9yZXBsYWNlV2l0aCA9IF9nZXRDbG9zZUJ0bihpdGVtLnR5cGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWNsb3NlLWJ0bi1pbic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYobWZwLnN0LmFsaWduVG9wKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYWxpZ24tdG9wJztcblx0XHR9XG5cblx0XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRtZnAud3JhcC5jc3Moe1xuXHRcdFx0XHRvdmVyZmxvdzogbWZwLnN0Lm92ZXJmbG93WSxcblx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcblx0XHRcdFx0b3ZlcmZsb3dZOiBtZnAuc3Qub3ZlcmZsb3dZXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndyYXAuY3NzKHsgXG5cdFx0XHRcdHRvcDogX3dpbmRvdy5zY3JvbGxUb3AoKSxcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZSdcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiggbWZwLnN0LmZpeGVkQmdQb3MgPT09IGZhbHNlIHx8IChtZnAuc3QuZml4ZWRCZ1BvcyA9PT0gJ2F1dG8nICYmICFtZnAuZml4ZWRDb250ZW50UG9zKSApIHtcblx0XHRcdG1mcC5iZ092ZXJsYXkuY3NzKHtcblx0XHRcdFx0aGVpZ2h0OiBfZG9jdW1lbnQuaGVpZ2h0KCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRcblxuXHRcdGlmKG1mcC5zdC5lbmFibGVFc2NhcGVLZXkpIHtcblx0XHRcdC8vIENsb3NlIG9uIEVTQyBrZXlcblx0XHRcdF9kb2N1bWVudC5vbigna2V5dXAnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRfd2luZG93Lm9uKCdyZXNpemUnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnVwZGF0ZVNpemUoKTtcblx0XHR9KTtcblxuXG5cdFx0aWYoIW1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYXV0by1jdXJzb3InO1xuXHRcdH1cblx0XHRcblx0XHRpZihfd3JhcENsYXNzZXMpXG5cdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhfd3JhcENsYXNzZXMpO1xuXG5cblx0XHQvLyB0aGlzIHRyaWdnZXJzIHJlY2FsY3VsYXRpb24gb2YgbGF5b3V0LCBzbyB3ZSBnZXQgaXQgb25jZSB0byBub3QgdG8gdHJpZ2dlciB0d2ljZVxuXHRcdHZhciB3aW5kb3dIZWlnaHQgPSBtZnAud0ggPSBfd2luZG93LmhlaWdodCgpO1xuXG5cdFx0XG5cdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHt9O1xuXG5cdFx0aWYoIG1mcC5maXhlZENvbnRlbnRQb3MgKSB7XG4gICAgICAgICAgICBpZihtZnAuX2hhc1Njcm9sbEJhcih3aW5kb3dIZWlnaHQpKXtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG1mcC5fZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICAgICAgICAgICAgICAgIGlmKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93U3R5bGVzLm1hcmdpblJpZ2h0ID0gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdGlmKCFtZnAuaXNJRTcpIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZTcgZG91YmxlLXNjcm9sbCBidWdcblx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0XG5cdFx0XG5cdFx0dmFyIGNsYXNzZXNUb2FkZCA9IG1mcC5zdC5tYWluQ2xhc3M7XG5cdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRjbGFzc2VzVG9hZGQgKz0gJyBtZnAtaWU3Jztcblx0XHR9XG5cdFx0aWYoY2xhc3Nlc1RvYWRkKSB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoIGNsYXNzZXNUb2FkZCApO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBjb250ZW50XG5cdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cblx0XHRfbWZwVHJpZ2dlcignQnVpbGRDb250cm9scycpO1xuXG5cdFx0Ly8gcmVtb3ZlIHNjcm9sbGJhciwgYWRkIG1hcmdpbiBlLnQuY1xuXHRcdCQoJ2h0bWwnKS5jc3Mod2luZG93U3R5bGVzKTtcblx0XHRcblx0XHQvLyBhZGQgZXZlcnl0aGluZyB0byBET01cblx0XHRtZnAuYmdPdmVybGF5LmFkZChtZnAud3JhcCkucHJlcGVuZFRvKCBtZnAuc3QucHJlcGVuZFRvIHx8ICQoZG9jdW1lbnQuYm9keSkgKTtcblxuXHRcdC8vIFNhdmUgbGFzdCBmb2N1c2VkIGVsZW1lbnRcblx0XHRtZnAuX2xhc3RGb2N1c2VkRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFxuXHRcdC8vIFdhaXQgZm9yIG5leHQgY3ljbGUgdG8gYWxsb3cgQ1NTIHRyYW5zaXRpb25cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XG5cdFx0XHRpZihtZnAuY29udGVudCkge1xuXHRcdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBjb250ZW50IGlzIG5vdCBkZWZpbmVkIChub3QgbG9hZGVkIGUudC5jKSB3ZSBhZGQgY2xhc3Mgb25seSBmb3IgQkdcblx0XHRcdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIFRyYXAgdGhlIGZvY3VzIGluIHBvcHVwXG5cdFx0XHRfZG9jdW1lbnQub24oJ2ZvY3VzaW4nICsgRVZFTlRfTlMsIG1mcC5fb25Gb2N1c0luKTtcblxuXHRcdH0sIDE2KTtcblxuXHRcdG1mcC5pc09wZW4gPSB0cnVlO1xuXHRcdG1mcC51cGRhdGVTaXplKHdpbmRvd0hlaWdodCk7XG5cdFx0X21mcFRyaWdnZXIoT1BFTl9FVkVOVCk7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBwb3B1cFxuXHQgKi9cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFtZnAuaXNPcGVuKSByZXR1cm47XG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0NMT1NFX0VWRU5UKTtcblxuXHRcdG1mcC5pc09wZW4gPSBmYWxzZTtcblx0XHQvLyBmb3IgQ1NTMyBhbmltYXRpb25cblx0XHRpZihtZnAuc3QucmVtb3ZhbERlbGF5ICYmICFtZnAuaXNMb3dJRSAmJiBtZnAuc3VwcG9ydHNUcmFuc2l0aW9uICkgIHtcblx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUChSRU1PVklOR19DTEFTUyk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuX2Nsb3NlKCk7XG5cdFx0XHR9LCBtZnAuc3QucmVtb3ZhbERlbGF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogSGVscGVyIGZvciBjbG9zZSgpIGZ1bmN0aW9uXG5cdCAqL1xuXHRfY2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdF9tZnBUcmlnZ2VyKENMT1NFX0VWRU5UKTtcblxuXHRcdHZhciBjbGFzc2VzVG9SZW1vdmUgPSBSRU1PVklOR19DTEFTUyArICcgJyArIFJFQURZX0NMQVNTICsgJyAnO1xuXG5cdFx0bWZwLmJnT3ZlcmxheS5kZXRhY2goKTtcblx0XHRtZnAud3JhcC5kZXRhY2goKTtcblx0XHRtZnAuY29udGFpbmVyLmVtcHR5KCk7XG5cblx0XHRpZihtZnAuc3QubWFpbkNsYXNzKSB7XG5cdFx0XHRjbGFzc2VzVG9SZW1vdmUgKz0gbWZwLnN0Lm1haW5DbGFzcyArICcgJztcblx0XHR9XG5cblx0XHRtZnAuX3JlbW92ZUNsYXNzRnJvbU1GUChjbGFzc2VzVG9SZW1vdmUpO1xuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHttYXJnaW5SaWdodDogJyd9O1xuXHRcdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0fVxuXHRcdFxuXHRcdF9kb2N1bWVudC5vZmYoJ2tleXVwJyArIEVWRU5UX05TICsgJyBmb2N1c2luJyArIEVWRU5UX05TKTtcblx0XHRtZnAuZXYub2ZmKEVWRU5UX05TKTtcblxuXHRcdC8vIGNsZWFuIHVwIERPTSBlbGVtZW50cyB0aGF0IGFyZW4ndCByZW1vdmVkXG5cdFx0bWZwLndyYXAuYXR0cignY2xhc3MnLCAnbWZwLXdyYXAnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdG1mcC5iZ092ZXJsYXkuYXR0cignY2xhc3MnLCAnbWZwLWJnJyk7XG5cdFx0bWZwLmNvbnRhaW5lci5hdHRyKCdjbGFzcycsICdtZnAtY29udGFpbmVyJyk7XG5cblx0XHQvLyByZW1vdmUgY2xvc2UgYnV0dG9uIGZyb20gdGFyZ2V0IGVsZW1lbnRcblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmXG5cdFx0KCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUgfHwgbWZwLmN1cnJUZW1wbGF0ZVttZnAuY3Vyckl0ZW0udHlwZV0gPT09IHRydWUpKSB7XG5cdFx0XHRpZihtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKVxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpO1xuXHRcdH1cblxuXG5cdFx0aWYobWZwLnN0LmF1dG9Gb2N1c0xhc3QgJiYgbWZwLl9sYXN0Rm9jdXNlZEVsKSB7XG5cdFx0XHQkKG1mcC5fbGFzdEZvY3VzZWRFbCkuZm9jdXMoKTsgLy8gcHV0IHRhYiBmb2N1cyBiYWNrXG5cdFx0fVxuXHRcdG1mcC5jdXJySXRlbSA9IG51bGw7XHRcblx0XHRtZnAuY29udGVudCA9IG51bGw7XG5cdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG51bGw7XG5cdFx0bWZwLnByZXZIZWlnaHQgPSAwO1xuXG5cdFx0X21mcFRyaWdnZXIoQUZURVJfQ0xPU0VfRVZFTlQpO1xuXHR9LFxuXHRcblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cblx0XHRpZihtZnAuaXNJT1MpIHtcblx0XHRcdC8vIGZpeGVzIGlPUyBuYXYgYmFycyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9NYWduaWZpYy1Qb3B1cC9pc3N1ZXMvMlxuXHRcdFx0dmFyIHpvb21MZXZlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHpvb21MZXZlbDtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcblx0XHRcdG1mcC53SCA9IGhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndIID0gd2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCk7XG5cdFx0fVxuXHRcdC8vIEZpeGVzICM4NDogcG9wdXAgaW5jb3JyZWN0bHkgcG9zaXRpb25lZCB3aXRoIHBvc2l0aW9uOnJlbGF0aXZlIG9uIGJvZHlcblx0XHRpZighbWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKCdoZWlnaHQnLCBtZnAud0gpO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKCdSZXNpemUnKTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXQgY29udGVudCBvZiBwb3B1cCBiYXNlZCBvbiBjdXJyZW50IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVJdGVtSFRNTDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbbWZwLmluZGV4XTtcblxuXHRcdC8vIERldGFjaCBhbmQgcGVyZm9ybSBtb2RpZmljYXRpb25zXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCk7XG5cblx0XHRpZihtZnAuY29udGVudClcblx0XHRcdG1mcC5jb250ZW50LmRldGFjaCgpO1xuXG5cdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRpdGVtID0gbWZwLnBhcnNlRWwoIG1mcC5pbmRleCApO1xuXHRcdH1cblxuXHRcdHZhciB0eXBlID0gaXRlbS50eXBlO1x0XG5cblx0XHRfbWZwVHJpZ2dlcignQmVmb3JlQ2hhbmdlJywgW21mcC5jdXJySXRlbSA/IG1mcC5jdXJySXRlbS50eXBlIDogJycsIHR5cGVdKTtcblx0XHQvLyBCZWZvcmVDaGFuZ2UgZXZlbnQgd29ya3MgbGlrZSBzbzpcblx0XHQvLyBfbWZwT24oJ0JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGUsIHByZXZUeXBlLCBuZXdUeXBlKSB7IH0pO1xuXHRcdFxuXHRcdG1mcC5jdXJySXRlbSA9IGl0ZW07XG5cblx0XHRcblxuXHRcdFxuXG5cdFx0aWYoIW1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pIHtcblx0XHRcdHZhciBtYXJrdXAgPSBtZnAuc3RbdHlwZV0gPyBtZnAuc3RbdHlwZV0ubWFya3VwIDogZmFsc2U7XG5cblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgbWFya3VwXG5cdFx0XHRfbWZwVHJpZ2dlcignRmlyc3RNYXJrdXBQYXJzZScsIG1hcmt1cCk7XG5cblx0XHRcdGlmKG1hcmt1cCkge1xuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID0gJChtYXJrdXApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbWFya3VwIGZvdW5kIHdlIGp1c3QgZGVmaW5lIHRoYXQgdGVtcGxhdGUgaXMgcGFyc2VkXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9wcmV2Q29udGVudFR5cGUgJiYgX3ByZXZDb250ZW50VHlwZSAhPT0gaXRlbS50eXBlKSB7XG5cdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtJytfcHJldkNvbnRlbnRUeXBlKyctaG9sZGVyJyk7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBuZXdDb250ZW50ID0gbWZwWydnZXQnICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSldKGl0ZW0sIG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pO1xuXHRcdG1mcC5hcHBlbmRDb250ZW50KG5ld0NvbnRlbnQsIHR5cGUpO1xuXG5cdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xuXG5cdFx0X21mcFRyaWdnZXIoQ0hBTkdFX0VWRU5ULCBpdGVtKTtcblx0XHRfcHJldkNvbnRlbnRUeXBlID0gaXRlbS50eXBlO1xuXHRcdFxuXHRcdC8vIEFwcGVuZCBjb250YWluZXIgYmFjayBhZnRlciBpdHMgY29udGVudCBjaGFuZ2VkXG5cdFx0bWZwLmNvbnRhaW5lci5wcmVwZW5kKG1mcC5jb250ZW50Q29udGFpbmVyKTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdBZnRlckNoYW5nZScpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFNldCBIVE1MIGNvbnRlbnQgb2YgcG9wdXBcblx0ICovXG5cdGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uKG5ld0NvbnRlbnQsIHR5cGUpIHtcblx0XHRtZnAuY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cdFx0XG5cdFx0aWYobmV3Q29udGVudCkge1xuXHRcdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJiBtZnAuc3QuY2xvc2VCdG5JbnNpZGUgJiZcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAsIHdlIGp1c3QgYXBwZW5kIGNsb3NlIGJ1dHRvbiBlbGVtZW50IGluc2lkZVxuXHRcdFx0XHRpZighbWZwLmNvbnRlbnQuZmluZCgnLm1mcC1jbG9zZScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmFwcGVuZChfZ2V0Q2xvc2VCdG4oKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1mcC5jb250ZW50ID0gbmV3Q29udGVudDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLmNvbnRlbnQgPSAnJztcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcihCRUZPUkVfQVBQRU5EX0VWRU5UKTtcblx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtJyt0eXBlKyctaG9sZGVyJyk7XG5cblx0XHRtZnAuY29udGVudENvbnRhaW5lci5hcHBlbmQobWZwLmNvbnRlbnQpO1xuXHR9LFxuXG5cblxuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgTWFnbmlmaWMgUG9wdXAgZGF0YSBvYmplY3QgYmFzZWQgb24gZ2l2ZW4gZGF0YVxuXHQgKiBAcGFyYW0gIHtpbnR9IGluZGV4IEluZGV4IG9mIGl0ZW0gdG8gcGFyc2Vcblx0ICovXG5cdHBhcnNlRWw6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdLFxuXHRcdFx0dHlwZTtcblxuXHRcdGlmKGl0ZW0udGFnTmFtZSkge1xuXHRcdFx0aXRlbSA9IHsgZWw6ICQoaXRlbSkgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHlwZSA9IGl0ZW0udHlwZTtcblx0XHRcdGl0ZW0gPSB7IGRhdGE6IGl0ZW0sIHNyYzogaXRlbS5zcmMgfTtcblx0XHR9XG5cblx0XHRpZihpdGVtLmVsKSB7XG5cdFx0XHR2YXIgdHlwZXMgPSBtZnAudHlwZXM7XG5cblx0XHRcdC8vIGNoZWNrIGZvciAnbWZwLVRZUEUnIGNsYXNzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYoIGl0ZW0uZWwuaGFzQ2xhc3MoJ21mcC0nK3R5cGVzW2ldKSApIHtcblx0XHRcdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2RhdGEtbWZwLXNyYycpO1xuXHRcdFx0aWYoIWl0ZW0uc3JjKSB7XG5cdFx0XHRcdGl0ZW0uc3JjID0gaXRlbS5lbC5hdHRyKCdocmVmJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aXRlbS50eXBlID0gdHlwZSB8fCBtZnAuc3QudHlwZSB8fCAnaW5saW5lJztcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0aXRlbS5wYXJzZWQgPSB0cnVlO1xuXHRcdG1mcC5pdGVtc1tpbmRleF0gPSBpdGVtO1xuXHRcdF9tZnBUcmlnZ2VyKCdFbGVtZW50UGFyc2UnLCBpdGVtKTtcblxuXHRcdHJldHVybiBtZnAuaXRlbXNbaW5kZXhdO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHNpbmdsZSBwb3B1cCBvciBhIGdyb3VwIG9mIHBvcHVwc1xuXHQgKi9cblx0YWRkR3JvdXA6IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIGVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5tZnBFbCA9IHRoaXM7XG5cdFx0XHRtZnAuX29wZW5DbGljayhlLCBlbCwgb3B0aW9ucyk7XG5cdFx0fTtcblxuXHRcdGlmKCFvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0fSBcblxuXHRcdHZhciBlTmFtZSA9ICdjbGljay5tYWduaWZpY1BvcHVwJztcblx0XHRvcHRpb25zLm1haW5FbCA9IGVsO1xuXHRcdFxuXHRcdGlmKG9wdGlvbnMuaXRlbXMpIHtcblx0XHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdFx0ZWwub2ZmKGVOYW1lKS5vbihlTmFtZSwgZUhhbmRsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gZmFsc2U7XG5cdFx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIG9wdGlvbnMuZGVsZWdhdGUgLCBlSGFuZGxlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLml0ZW1zID0gZWw7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9vcGVuQ2xpY2s6IGZ1bmN0aW9uKGUsIGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIG1pZENsaWNrID0gb3B0aW9ucy5taWRDbGljayAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5taWRDbGljayA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5taWRDbGljaztcblxuXG5cdFx0aWYoIW1pZENsaWNrICYmICggZS53aGljaCA9PT0gMiB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGlzYWJsZU9uID0gb3B0aW9ucy5kaXNhYmxlT24gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZGlzYWJsZU9uIDogJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLmRpc2FibGVPbjtcblxuXHRcdGlmKGRpc2FibGVPbikge1xuXHRcdFx0aWYoJC5pc0Z1bmN0aW9uKGRpc2FibGVPbikpIHtcblx0XHRcdFx0aWYoICFkaXNhYmxlT24uY2FsbChtZnApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgeyAvLyBlbHNlIGl0J3MgbnVtYmVyXG5cdFx0XHRcdGlmKCBfd2luZG93LndpZHRoKCkgPCBkaXNhYmxlT24gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoZS50eXBlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIFRoaXMgd2lsbCBwcmV2ZW50IHBvcHVwIGZyb20gY2xvc2luZyBpZiBlbGVtZW50IGlzIGluc2lkZSBhbmQgcG9wdXAgaXMgYWxyZWFkeSBvcGVuZWRcblx0XHRcdGlmKG1mcC5pc09wZW4pIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XHRcblxuXHRcdG9wdGlvbnMuZWwgPSAkKGUubWZwRWwpO1xuXHRcdGlmKG9wdGlvbnMuZGVsZWdhdGUpIHtcblx0XHRcdG9wdGlvbnMuaXRlbXMgPSBlbC5maW5kKG9wdGlvbnMuZGVsZWdhdGUpO1xuXHRcdH1cblx0XHRtZnAub3BlbihvcHRpb25zKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRleHQgb24gcHJlbG9hZGVyXG5cdCAqL1xuXHR1cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cywgdGV4dCkge1xuXG5cdFx0aWYobWZwLnByZWxvYWRlcikge1xuXHRcdFx0aWYoX3ByZXZTdGF0dXMgIT09IHN0YXR1cykge1xuXHRcdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtcy0nK19wcmV2U3RhdHVzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXRleHQgJiYgc3RhdHVzID09PSAnbG9hZGluZycpIHtcblx0XHRcdFx0dGV4dCA9IG1mcC5zdC50TG9hZGluZztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdHN0YXR1czogc3RhdHVzLFxuXHRcdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0XHR9O1xuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBzdGF0dXNcblx0XHRcdF9tZnBUcmlnZ2VyKCdVcGRhdGVTdGF0dXMnLCBkYXRhKTtcblxuXHRcdFx0c3RhdHVzID0gZGF0YS5zdGF0dXM7XG5cdFx0XHR0ZXh0ID0gZGF0YS50ZXh0O1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmh0bWwodGV4dCk7XG5cblx0XHRcdG1mcC5wcmVsb2FkZXIuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtcy0nK3N0YXR1cyk7XG5cdFx0XHRfcHJldlN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH0sXG5cblxuXHQvKlxuXHRcdFwiUHJpdmF0ZVwiIGhlbHBlcnMgdGhhdCBhcmVuJ3QgcHJpdmF0ZSBhdCBhbGxcblx0ICovXG5cdC8vIENoZWNrIHRvIGNsb3NlIHBvcHVwIG9yIG5vdFxuXHQvLyBcInRhcmdldFwiIGlzIGFuIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxuXHRfY2hlY2tJZkNsb3NlOiBmdW5jdGlvbih0YXJnZXQpIHtcblxuXHRcdGlmKCQodGFyZ2V0KS5oYXNDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjbG9zZU9uQ29udGVudCA9IG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrO1xuXHRcdHZhciBjbG9zZU9uQmcgPSBtZnAuc3QuY2xvc2VPbkJnQ2xpY2s7XG5cblx0XHRpZihjbG9zZU9uQ29udGVudCAmJiBjbG9zZU9uQmcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFdlIGNsb3NlIHRoZSBwb3B1cCBpZiBjbGljayBpcyBvbiBjbG9zZSBidXR0b24gb3Igb24gcHJlbG9hZGVyLiBPciBpZiB0aGVyZSBpcyBubyBjb250ZW50LlxuXHRcdFx0aWYoIW1mcC5jb250ZW50IHx8ICQodGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNsb3NlJykgfHwgKG1mcC5wcmVsb2FkZXIgJiYgdGFyZ2V0ID09PSBtZnAucHJlbG9hZGVyWzBdKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIGNvbnRlbnRcblx0XHRcdGlmKCAgKHRhcmdldCAhPT0gbWZwLmNvbnRlbnRbMF0gJiYgISQuY29udGFpbnMobWZwLmNvbnRlbnRbMF0sIHRhcmdldCkpICApIHtcblx0XHRcdFx0aWYoY2xvc2VPbkJnKSB7XG5cdFx0XHRcdFx0Ly8gbGFzdCBjaGVjaywgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBpbiBET00sIChpbiBjYXNlIGl0J3MgcmVtb3ZlZCBvbmNsaWNrKVxuXHRcdFx0XHRcdGlmKCAkLmNvbnRhaW5zKGRvY3VtZW50LCB0YXJnZXQpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoY2xvc2VPbkNvbnRlbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfYWRkQ2xhc3NUb01GUDogZnVuY3Rpb24oY05hbWUpIHtcblx0XHRtZnAuYmdPdmVybGF5LmFkZENsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5hZGRDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9yZW1vdmVDbGFzc0Zyb21NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0dGhpcy5iZ092ZXJsYXkucmVtb3ZlQ2xhc3MoY05hbWUpO1xuXHRcdG1mcC53cmFwLnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0fSxcblx0X2hhc1Njcm9sbEJhcjogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cdFx0cmV0dXJuICggIChtZnAuaXNJRTcgPyBfZG9jdW1lbnQuaGVpZ2h0KCkgOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkgPiAod2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCkpICk7XG5cdH0sXG5cdF9zZXRGb2N1czogZnVuY3Rpb24oKSB7XG5cdFx0KG1mcC5zdC5mb2N1cyA/IG1mcC5jb250ZW50LmZpbmQobWZwLnN0LmZvY3VzKS5lcSgwKSA6IG1mcC53cmFwKS5mb2N1cygpO1xuXHR9LFxuXHRfb25Gb2N1c0luOiBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIGUudGFyZ2V0ICE9PSBtZnAud3JhcFswXSAmJiAhJC5jb250YWlucyhtZnAud3JhcFswXSwgZS50YXJnZXQpICkge1xuXHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X3BhcnNlTWFya3VwOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG5cdFx0dmFyIGFycjtcblx0XHRpZihpdGVtLmRhdGEpIHtcblx0XHRcdHZhbHVlcyA9ICQuZXh0ZW5kKGl0ZW0uZGF0YSwgdmFsdWVzKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoTUFSS1VQX1BBUlNFX0VWRU5ULCBbdGVtcGxhdGUsIHZhbHVlcywgaXRlbV0gKTtcblxuXHRcdCQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0YXJyID0ga2V5LnNwbGl0KCdfJyk7XG5cdFx0XHRpZihhcnIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2FyclswXSk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBhdHRyID0gYXJyWzFdO1xuXHRcdFx0XHRcdGlmKGF0dHIgPT09ICdyZXBsYWNlV2l0aCcpIHtcblx0XHRcdFx0XHRcdGlmKGVsWzBdICE9PSB2YWx1ZVswXSkge1xuXHRcdFx0XHRcdFx0XHRlbC5yZXBsYWNlV2l0aCh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKGF0dHIgPT09ICdpbWcnKSB7XG5cdFx0XHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRcdFx0ZWwuYXR0cignc3JjJywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgoICc8aW1nIHNyYz1cIicrdmFsdWUrJ1wiIGNsYXNzPVwiJyArIGVsLmF0dHIoJ2NsYXNzJykgKyAnXCIgLz4nICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsLmF0dHIoYXJyWzFdLCB2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRlbXBsYXRlLmZpbmQoRVZFTlRfTlMgKyAnLScra2V5KS5odG1sKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRfZ2V0U2Nyb2xsYmFyU2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gdGh4IERhdmlkXG5cdFx0aWYobWZwLnNjcm9sbGJhclNpemUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRzY3JvbGxEaXYuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogOTlweDsgaGVpZ2h0OiA5OXB4OyBvdmVyZmxvdzogc2Nyb2xsOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTk5OTlweDsnO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXHRcdFx0bWZwLnNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuc2Nyb2xsYmFyU2l6ZTtcblx0fVxuXG59OyAvKiBNYWduaWZpY1BvcHVwIGNvcmUgcHJvdG90eXBlIGVuZCAqL1xuXG5cblxuXG4vKipcbiAqIFB1YmxpYyBzdGF0aWMgZnVuY3Rpb25zXG4gKi9cbiQubWFnbmlmaWNQb3B1cCA9IHtcblx0aW5zdGFuY2U6IG51bGwsXG5cdHByb3RvOiBNYWduaWZpY1BvcHVwLnByb3RvdHlwZSxcblx0bW9kdWxlczogW10sXG5cblx0b3BlbjogZnVuY3Rpb24ob3B0aW9ucywgaW5kZXgpIHtcblx0XHRfY2hlY2tJbnN0YW5jZSgpO1x0XG5cblx0XHRpZighb3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRcdFxuXG5cdFx0b3B0aW9ucy5pc09iaiA9IHRydWU7XG5cdFx0b3B0aW9ucy5pbmRleCA9IGluZGV4IHx8IDA7XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2Uub3BlbihvcHRpb25zKTtcblx0fSxcblxuXHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSAmJiAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UuY2xvc2UoKTtcblx0fSxcblxuXHRyZWdpc3Rlck1vZHVsZTogZnVuY3Rpb24obmFtZSwgbW9kdWxlKSB7XG5cdFx0aWYobW9kdWxlLm9wdGlvbnMpIHtcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5kZWZhdWx0c1tuYW1lXSA9IG1vZHVsZS5vcHRpb25zO1xuXHRcdH1cblx0XHQkLmV4dGVuZCh0aGlzLnByb3RvLCBtb2R1bGUucHJvdG8pO1x0XHRcdFxuXHRcdHRoaXMubW9kdWxlcy5wdXNoKG5hbWUpO1xuXHR9LFxuXG5cdGRlZmF1bHRzOiB7ICAgXG5cblx0XHQvLyBJbmZvIGFib3V0IG9wdGlvbnMgaXMgaW4gZG9jczpcblx0XHQvLyBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9kb2N1bWVudGF0aW9uLmh0bWwjb3B0aW9uc1xuXHRcdFxuXHRcdGRpc2FibGVPbjogMCxcdFxuXG5cdFx0a2V5OiBudWxsLFxuXG5cdFx0bWlkQ2xpY2s6IGZhbHNlLFxuXG5cdFx0bWFpbkNsYXNzOiAnJyxcblxuXHRcdHByZWxvYWRlcjogdHJ1ZSxcblxuXHRcdGZvY3VzOiAnJywgLy8gQ1NTIHNlbGVjdG9yIG9mIGlucHV0IHRvIGZvY3VzIGFmdGVyIHBvcHVwIGlzIG9wZW5lZFxuXHRcdFxuXHRcdGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuXG5cdFx0Y2xvc2VPbkJnQ2xpY2s6IHRydWUsXG5cblx0XHRjbG9zZUJ0bkluc2lkZTogdHJ1ZSwgXG5cblx0XHRzaG93Q2xvc2VCdG46IHRydWUsXG5cblx0XHRlbmFibGVFc2NhcGVLZXk6IHRydWUsXG5cblx0XHRtb2RhbDogZmFsc2UsXG5cblx0XHRhbGlnblRvcDogZmFsc2UsXG5cdFxuXHRcdHJlbW92YWxEZWxheTogMCxcblxuXHRcdHByZXBlbmRUbzogbnVsbCxcblx0XHRcblx0XHRmaXhlZENvbnRlbnRQb3M6ICdhdXRvJywgXG5cdFxuXHRcdGZpeGVkQmdQb3M6ICdhdXRvJyxcblxuXHRcdG92ZXJmbG93WTogJ2F1dG8nLFxuXG5cdFx0Y2xvc2VNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZVwiPiYjMjE1OzwvYnV0dG9uPicsXG5cblx0XHR0Q2xvc2U6ICdDbG9zZSAoRXNjKScsXG5cblx0XHR0TG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuXG5cdFx0YXV0b0ZvY3VzTGFzdDogdHJ1ZVxuXG5cdH1cbn07XG5cblxuXG4kLmZuLm1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdF9jaGVja0luc3RhbmNlKCk7XG5cblx0dmFyIGpxRWwgPSAkKHRoaXMpO1xuXG5cdC8vIFdlIGNhbGwgc29tZSBBUEkgbWV0aG9kIG9mIGZpcnN0IHBhcmFtIGlzIGEgc3RyaW5nXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdGlmKG9wdGlvbnMgPT09ICdvcGVuJykge1xuXHRcdFx0dmFyIGl0ZW1zLFxuXHRcdFx0XHRpdGVtT3B0cyA9IF9pc0pRID8ganFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJykgOiBqcUVsWzBdLm1hZ25pZmljUG9wdXAsXG5cdFx0XHRcdGluZGV4ID0gcGFyc2VJbnQoYXJndW1lbnRzWzFdLCAxMCkgfHwgMDtcblxuXHRcdFx0aWYoaXRlbU9wdHMuaXRlbXMpIHtcblx0XHRcdFx0aXRlbXMgPSBpdGVtT3B0cy5pdGVtc1tpbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtcyA9IGpxRWw7XG5cdFx0XHRcdGlmKGl0ZW1PcHRzLmRlbGVnYXRlKSB7XG5cdFx0XHRcdFx0aXRlbXMgPSBpdGVtcy5maW5kKGl0ZW1PcHRzLmRlbGVnYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmVxKCBpbmRleCApO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9vcGVuQ2xpY2soe21mcEVsOml0ZW1zfSwganFFbCwgaXRlbU9wdHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihtZnAuaXNPcGVuKVxuXHRcdFx0XHRtZnBbb3B0aW9uc10uYXBwbHkobWZwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHQvLyBjbG9uZSBvcHRpb25zIG9ialxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XG5cdFx0XG5cdFx0Lypcblx0XHQgKiBBcyBaZXB0byBkb2Vzbid0IHN1cHBvcnQgLmRhdGEoKSBtZXRob2QgZm9yIG9iamVjdHMgXG5cdFx0ICogYW5kIGl0IHdvcmtzIG9ubHkgaW4gbm9ybWFsIGJyb3dzZXJzXG5cdFx0ICogd2UgYXNzaWduIFwib3B0aW9uc1wiIG9iamVjdCBkaXJlY3RseSB0byB0aGUgRE9NIGVsZW1lbnQuIEZUVyFcblx0XHQgKi9cblx0XHRpZihfaXNKUSkge1xuXHRcdFx0anFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJywgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxRWxbMF0ubWFnbmlmaWNQb3B1cCA9IG9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0bWZwLmFkZEdyb3VwKGpxRWwsIG9wdGlvbnMpO1xuXG5cdH1cblx0cmV0dXJuIGpxRWw7XG59O1xuXG5cbi8vUXVpY2sgYmVuY2htYXJrXG4vKlxudmFyIHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCksXG5cdGksXG5cdHJvdW5kcyA9IDEwMDA7XG5cbmZvcihpID0gMDsgaSA8IHJvdW5kczsgaSsrKSB7XG5cbn1cbmNvbnNvbGUubG9nKCdUZXN0ICMxOicsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG5zdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuZm9yKGkgPSAwOyBpIDwgcm91bmRzOyBpKyspIHtcblxufVxuY29uc29sZS5sb2coJ1Rlc3QgIzI6JywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG4qL1xuXG5cbi8qPj5jb3JlKi9cblxuLyo+PmlubGluZSovXG5cbnZhciBJTkxJTkVfTlMgPSAnaW5saW5lJyxcblx0X2hpZGRlbkNsYXNzLFxuXHRfaW5saW5lUGxhY2Vob2xkZXIsIFxuXHRfbGFzdElubGluZUVsZW1lbnQsXG5cdF9wdXRJbmxpbmVFbGVtZW50c0JhY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfbGFzdElubGluZUVsZW1lbnQpIHtcblx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlci5hZnRlciggX2xhc3RJbmxpbmVFbGVtZW50LmFkZENsYXNzKF9oaWRkZW5DbGFzcykgKS5kZXRhY2goKTtcblx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSU5MSU5FX05TLCB7XG5cdG9wdGlvbnM6IHtcblx0XHRoaWRkZW5DbGFzczogJ2hpZGUnLCAvLyB3aWxsIGJlIGFwcGVuZGVkIHdpdGggYG1mcC1gIHByZWZpeFxuXHRcdG1hcmt1cDogJycsXG5cdFx0dE5vdEZvdW5kOiAnQ29udGVudCBub3QgZm91bmQnXG5cdH0sXG5cdHByb3RvOiB7XG5cblx0XHRpbml0SW5saW5lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElOTElORV9OUyk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrSU5MSU5FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldElubGluZTogZnVuY3Rpb24oaXRlbSwgdGVtcGxhdGUpIHtcblxuXHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXG5cdFx0XHRpZihpdGVtLnNyYykge1xuXHRcdFx0XHR2YXIgaW5saW5lU3QgPSBtZnAuc3QuaW5saW5lLFxuXHRcdFx0XHRcdGVsID0gJChpdGVtLnNyYyk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0YXJnZXQgZWxlbWVudCBoYXMgcGFyZW50IC0gd2UgcmVwbGFjZSBpdCB3aXRoIHBsYWNlaG9sZGVyIGFuZCBwdXQgaXQgYmFjayBhZnRlciBwb3B1cCBpcyBjbG9zZWRcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gZWxbMF0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpZihwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUpIHtcblx0XHRcdFx0XHRcdGlmKCFfaW5saW5lUGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gaW5saW5lU3QuaGlkZGVuQ2xhc3M7XG5cdFx0XHRcdFx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlciA9IF9nZXRFbChfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHRfaGlkZGVuQ2xhc3MgPSAnbWZwLScrX2hpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB0YXJnZXQgaW5saW5lIGVsZW1lbnQgd2l0aCBwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0X2xhc3RJbmxpbmVFbGVtZW50ID0gZWwuYWZ0ZXIoX2lubGluZVBsYWNlaG9sZGVyKS5kZXRhY2goKS5yZW1vdmVDbGFzcyhfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbmxpbmVTdC50Tm90Rm91bmQpO1xuXHRcdFx0XHRcdGVsID0gJCgnPGRpdj4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZW0uaW5saW5lRWxlbWVudCA9IGVsO1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCB7fSwgaXRlbSk7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmlubGluZSovXG5cbi8qPj5hamF4Ki9cbnZhciBBSkFYX05TID0gJ2FqYXgnLFxuXHRfYWpheEN1cixcblx0X3JlbW92ZUFqYXhDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhfYWpheEN1cik7XG5cdFx0fVxuXHR9LFxuXHRfZGVzdHJveUFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRpZihtZnAucmVxKSB7XG5cdFx0XHRtZnAucmVxLmFib3J0KCk7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoQUpBWF9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRzZXR0aW5nczogbnVsbCxcblx0XHRjdXJzb3I6ICdtZnAtYWpheC1jdXInLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBjb250ZW50PC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRBamF4OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKEFKQVhfTlMpO1xuXHRcdFx0X2FqYXhDdXIgPSBtZnAuc3QuYWpheC5jdXJzb3I7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0XHRfbWZwT24oJ0JlZm9yZUNoYW5nZS4nICsgQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0fSxcblx0XHRnZXRBamF4OiBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdGlmKF9hamF4Q3VyKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cblx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe1xuXHRcdFx0XHR1cmw6IGl0ZW0uc3JjLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXHRcdFx0XHRcdHZhciB0ZW1wID0ge1xuXHRcdFx0XHRcdFx0ZGF0YTpkYXRhLFxuXHRcdFx0XHRcdFx0eGhyOmpxWEhSXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdQYXJzZUFqYXgnLCB0ZW1wKTtcblxuXHRcdFx0XHRcdG1mcC5hcHBlbmRDb250ZW50KCAkKHRlbXAuZGF0YSksIEFKQVhfTlMgKTtcblxuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblxuXHRcdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHRcdFx0fSwgMTYpO1xuXG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdBamF4Q29udGVudEFkZGVkJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSBpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBtZnAuc3QuYWpheC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBtZnAuc3QuYWpheC5zZXR0aW5ncyk7XG5cblx0XHRcdG1mcC5yZXEgPSAkLmFqYXgob3B0cyk7XG5cblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdH1cbn0pO1xuXG5cblxuXG5cblx0XG5cbi8qPj5hamF4Ki9cblxuLyo+PmltYWdlKi9cbnZhciBfaW1nSW50ZXJ2YWwsXG5cdF9nZXRUaXRsZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZihpdGVtLmRhdGEgJiYgaXRlbS5kYXRhLnRpdGxlICE9PSB1bmRlZmluZWQpIFxuXHRcdFx0cmV0dXJuIGl0ZW0uZGF0YS50aXRsZTtcblxuXHRcdHZhciBzcmMgPSBtZnAuc3QuaW1hZ2UudGl0bGVTcmM7XG5cblx0XHRpZihzcmMpIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihzcmMpKSB7XG5cdFx0XHRcdHJldHVybiBzcmMuY2FsbChtZnAsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uZWwpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uZWwuYXR0cihzcmMpIHx8ICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnaW1hZ2UnLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxmaWd1cmU+Jytcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWltZ1wiPjwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPGZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicrXG5cdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdCc8L2ZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHQnPC9maWd1cmU+Jytcblx0XHRcdFx0JzwvZGl2PicsXG5cdFx0Y3Vyc29yOiAnbWZwLXpvb20tb3V0LWN1cicsXG5cdFx0dGl0bGVTcmM6ICd0aXRsZScsIFxuXHRcdHZlcnRpY2FsRml0OiB0cnVlLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SW1hZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGltZ1N0ID0gbWZwLnN0LmltYWdlLFxuXHRcdFx0XHRucyA9ICcuaW1hZ2UnO1xuXG5cdFx0XHRtZnAudHlwZXMucHVzaCgnaW1hZ2UnKTtcblxuXHRcdFx0X21mcE9uKE9QRU5fRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuY3Vyckl0ZW0udHlwZSA9PT0gJ2ltYWdlJyAmJiBpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3dpbmRvdy5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9OUyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdSZXNpemUnK25zLCBtZnAucmVzaXplSW1hZ2UpO1xuXHRcdFx0aWYobWZwLmlzTG93SUUpIHtcblx0XHRcdFx0X21mcE9uKCdBZnRlckNoYW5nZScsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZXNpemVJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5jdXJySXRlbTtcblx0XHRcdGlmKCFpdGVtIHx8ICFpdGVtLmltZykgcmV0dXJuO1xuXG5cdFx0XHRpZihtZnAuc3QuaW1hZ2UudmVydGljYWxGaXQpIHtcblx0XHRcdFx0dmFyIGRlY3IgPSAwO1xuXHRcdFx0XHQvLyBmaXggYm94LXNpemluZyBpbiBpZTcvOFxuXHRcdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRcdGRlY3IgPSBwYXJzZUludChpdGVtLmltZy5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSArIHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcuY3NzKCdtYXgtaGVpZ2h0JywgbWZwLndILWRlY3IpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X29uSW1hZ2VIYXNTaXplOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRpZihpdGVtLmltZykge1xuXHRcdFx0XHRcblx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblxuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGl0ZW0uaXNDaGVja2luZ0ltZ1NpemUgPSBmYWxzZTtcblxuXHRcdFx0XHRfbWZwVHJpZ2dlcignSW1hZ2VIYXNTaXplJywgaXRlbSk7XG5cblx0XHRcdFx0aWYoaXRlbS5pbWdIaWRkZW4pIHtcblx0XHRcdFx0XHRpZihtZnAuY29udGVudClcblx0XHRcdFx0XHRcdG1mcC5jb250ZW50LnJlbW92ZUNsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0aGF0IGxvb3BzIHVudGlsIHRoZSBpbWFnZSBoYXMgc2l6ZSB0byBkaXNwbGF5IGVsZW1lbnRzIHRoYXQgcmVseSBvbiBpdCBhc2FwXG5cdFx0ICovXG5cdFx0ZmluZEltYWdlU2l6ZTogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHR2YXIgY291bnRlciA9IDAsXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdLFxuXHRcdFx0XHRtZnBTZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKGRlbGF5KSB7XG5cblx0XHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZGVjZWxlcmF0aW5nIGludGVydmFsIHRoYXQgY2hlY2tzIGZvciBzaXplIG9mIGFuIGltYWdlXG5cdFx0XHRcdFx0X2ltZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKGNvdW50ZXIgPiAyMDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID09PSAzKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDEwKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihjb3VudGVyID09PSA0MCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gMTAwKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRtZnBTZXRJbnRlcnZhbCgxKTtcblx0XHR9LFxuXG5cdFx0Z2V0SW1hZ2U6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdHZhciBndWFyZCA9IDAsXG5cblx0XHRcdFx0Ly8gaW1hZ2UgbG9hZCBjb21wbGV0ZSBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZENvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uaW1nWzBdLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcblx0XHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0XHRfbWZwVHJpZ2dlcignSW1hZ2VMb2FkQ29tcGxldGUnKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgaW1hZ2UgY29tcGxldGUgY2hlY2sgZmFpbHMgMjAwIHRpbWVzICgyMCBzZWMpLCB3ZSBhc3N1bWUgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IuXG5cdFx0XHRcdFx0XHRcdGd1YXJkKys7XG5cdFx0XHRcdFx0XHRcdGlmKGd1YXJkIDwgMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChvbkxvYWRDb21wbGV0ZSwxMDApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG9uTG9hZEVycm9yKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gaW1hZ2UgZXJyb3IgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRFcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbWdTdC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykgKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltZ1N0ID0gbWZwLnN0LmltYWdlO1xuXG5cblx0XHRcdHZhciBlbCA9IHRlbXBsYXRlLmZpbmQoJy5tZnAtaW1nJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWcuY2xhc3NOYW1lID0gJ21mcC1pbWcnO1xuXHRcdFx0XHRpZihpdGVtLmVsICYmIGl0ZW0uZWwuZmluZCgnaW1nJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aW1nLmFsdCA9IGl0ZW0uZWwuZmluZCgnaW1nJykuYXR0cignYWx0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcgPSAkKGltZykub24oJ2xvYWQubWZwbG9hZGVyJywgb25Mb2FkQ29tcGxldGUpLm9uKCdlcnJvci5tZnBsb2FkZXInLCBvbkxvYWRFcnJvcik7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblxuXHRcdFx0XHQvLyB3aXRob3V0IGNsb25lKCkgXCJlcnJvclwiIGV2ZW50IGlzIG5vdCBmaXJpbmcgd2hlbiBJTUcgaXMgcmVwbGFjZWQgYnkgbmV3IElNR1xuXHRcdFx0XHQvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGF2b2lkIHN1Y2ggY2xvbmluZ1xuXHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRpdGVtLmltZyA9IGl0ZW0uaW1nLmNsb25lKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXTtcblx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYoIWltZy53aWR0aCkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge1xuXHRcdFx0XHR0aXRsZTogX2dldFRpdGxlKGl0ZW0pLFxuXHRcdFx0XHRpbWdfcmVwbGFjZVdpdGg6IGl0ZW0uaW1nXG5cdFx0XHR9LCBpdGVtKTtcblxuXHRcdFx0bWZwLnJlc2l6ZUltYWdlKCk7XG5cblx0XHRcdGlmKGl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblxuXHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdHRlbXBsYXRlLmFkZENsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW1nU3QudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGVtcGxhdGUucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2xvYWRpbmcnKTtcblx0XHRcdGl0ZW0ubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdGlmKCFpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aXRlbS5pbWdIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0bWZwLmZpbmRJbWFnZVNpemUoaXRlbSk7XG5cdFx0XHR9IFxuXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuXG5cbi8qPj5pbWFnZSovXG5cbi8qPj56b29tKi9cbnZhciBoYXNNb3pUcmFuc2Zvcm0sXG5cdGdldEhhc01velRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKGhhc01velRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRoYXNNb3pUcmFuc2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBoYXNNb3pUcmFuc2Zvcm07XHRcdFxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ3pvb20nLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdGVhc2luZzogJ2Vhc2UtaW4tb3V0Jyxcblx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdG9wZW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXMoJ2ltZycpID8gZWxlbWVudCA6IGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0fVxuXHR9LFxuXG5cdHByb3RvOiB7XG5cblx0XHRpbml0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgem9vbVN0ID0gbWZwLnN0Lnpvb20sXG5cdFx0XHRcdG5zID0gJy56b29tJyxcblx0XHRcdFx0aW1hZ2U7XG5cdFx0XHRcdFxuXHRcdFx0aWYoIXpvb21TdC5lbmFibGVkIHx8ICFtZnAuc3VwcG9ydHNUcmFuc2l0aW9uKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGR1cmF0aW9uID0gem9vbVN0LmR1cmF0aW9uLFxuXHRcdFx0XHRnZXRFbFRvQW5pbWF0ZSA9IGZ1bmN0aW9uKGltYWdlKSB7XG5cdFx0XHRcdFx0dmFyIG5ld0ltZyA9IGltYWdlLmNsb25lKCkucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpLmFkZENsYXNzKCdtZnAtYW5pbWF0ZWQtaW1hZ2UnKSxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gPSAnYWxsICcrKHpvb21TdC5kdXJhdGlvbi8xMDAwKSsncyAnICsgem9vbVN0LmVhc2luZyxcblx0XHRcdFx0XHRcdGNzc09iaiA9IHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogOTk5OSxcblx0XHRcdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdFx0XHQnLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5JzogJ2hpZGRlbidcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0ID0gJ3RyYW5zaXRpb24nO1xuXG5cdFx0XHRcdFx0Y3NzT2JqWyctd2Via2l0LScrdF0gPSBjc3NPYmpbJy1tb3otJyt0XSA9IGNzc09ialsnLW8tJyt0XSA9IGNzc09ialt0XSA9IHRyYW5zaXRpb247XG5cblx0XHRcdFx0XHRuZXdJbWcuY3NzKGNzc09iaik7XG5cdFx0XHRcdFx0cmV0dXJuIG5ld0ltZztcblx0XHRcdFx0fSxcblx0XHRcdFx0c2hvd01haW5Db250ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b3BlblRpbWVvdXQsXG5cdFx0XHRcdGFuaW1hdGVkSW1nO1xuXG5cdFx0XHRfbWZwT24oJ0J1aWxkQ29udHJvbHMnK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KG9wZW5UaW1lb3V0KTtcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0XHQvLyBCYXNpY2FsbHksIGFsbCBjb2RlIGJlbG93IGRvZXMgaXMgY2xvbmVzIGV4aXN0aW5nIGltYWdlLCBwdXRzIGluIG9uIHRvcCBvZiB0aGUgY3VycmVudCBvbmUgYW5kIGFuaW1hdGVkIGl0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW1hZ2UgPSBtZnAuX2dldEl0ZW1Ub1pvb20oKTtcblxuXHRcdFx0XHRcdGlmKCFpbWFnZSkge1xuXHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7IFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoKSApO1xuXG5cdFx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKGFuaW1hdGVkSW1nKTtcblxuXHRcdFx0XHRcdG9wZW5UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoIHRydWUgKSApO1xuXHRcdFx0XHRcdFx0b3BlblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2UgPSBhbmltYXRlZEltZyA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0X21mcFRyaWdnZXIoJ1pvb21BbmltYXRpb25FbmRlZCcpO1xuXHRcdFx0XHRcdFx0XHR9LCAxNik7IC8vIGF2b2lkIGJsaW5rIHdoZW4gc3dpdGNoaW5nIGltYWdlcyBcblxuXHRcdFx0XHRcdFx0fSwgZHVyYXRpb24pOyAvLyB0aGlzIHRpbWVvdXQgZXF1YWxzIGFuaW1hdGlvbiBkdXJhdGlvblxuXG5cdFx0XHRcdFx0fSwgMTYpOyAvLyBieSBhZGRpbmcgdGhpcyB0aW1lb3V0IHdlIGF2b2lkIHNob3J0IGdsaXRjaCBhdCB0aGUgYmVnaW5uaW5nIG9mIGFuaW1hdGlvblxuXG5cblx0XHRcdFx0XHQvLyBMb3RzIG9mIHRpbWVvdXRzLi4uXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X21mcE9uKEJFRk9SRV9DTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cblx0XHRcdFx0XHRtZnAuc3QucmVtb3ZhbERlbGF5ID0gZHVyYXRpb247XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cdFx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQodHJ1ZSkgKTtcblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCgpICk7XG5cdFx0XHRcdFx0fSwgMTYpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cdFx0XHRcdFx0aWYoYW5pbWF0ZWRJbWcpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbWFnZSA9IG51bGw7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdF9hbGxvd1pvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnO1xuXHRcdH0sXG5cblx0XHRfZ2V0SXRlbVRvWm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihtZnAuY3Vyckl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLmltZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gR2V0IGVsZW1lbnQgcG9zdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuXHRcdF9nZXRPZmZzZXQ6IGZ1bmN0aW9uKGlzTGFyZ2UpIHtcblx0XHRcdHZhciBlbDtcblx0XHRcdGlmKGlzTGFyZ2UpIHtcblx0XHRcdFx0ZWwgPSBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwgPSBtZnAuc3Quem9vbS5vcGVuZXIobWZwLmN1cnJJdGVtLmVsIHx8IG1mcC5jdXJySXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvZmZzZXQgPSBlbC5vZmZzZXQoKTtcblx0XHRcdHZhciBwYWRkaW5nVG9wID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLXRvcCcpLDEwKTtcblx0XHRcdHZhciBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdG9mZnNldC50b3AgLT0gKCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBwYWRkaW5nVG9wICk7XG5cblxuXHRcdFx0Lypcblx0XHRcdFxuXHRcdFx0QW5pbWF0aW5nIGxlZnQgKyB0b3AgKyB3aWR0aC9oZWlnaHQgbG9va3MgZ2xpdGNoeSBpbiBGaXJlZm94LCBidXQgcGVyZmVjdCBpbiBDaHJvbWUuIEFuZCB2aWNlLXZlcnNhLlxuXG5cdFx0XHQgKi9cblx0XHRcdHZhciBvYmogPSB7XG5cdFx0XHRcdHdpZHRoOiBlbC53aWR0aCgpLFxuXHRcdFx0XHQvLyBmaXggWmVwdG8gaGVpZ2h0K3BhZGRpbmcgaXNzdWVcblx0XHRcdFx0aGVpZ2h0OiAoX2lzSlEgPyBlbC5pbm5lckhlaWdodCgpIDogZWxbMF0ub2Zmc2V0SGVpZ2h0KSAtIHBhZGRpbmdCb3R0b20gLSBwYWRkaW5nVG9wXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJIGhhdGUgdG8gZG8gdGhpcywgYnV0IHRoZXJlIGlzIG5vIGFub3RoZXIgb3B0aW9uXG5cdFx0XHRpZiggZ2V0SGFzTW96VHJhbnNmb3JtKCkgKSB7XG5cdFx0XHRcdG9ialsnLW1vei10cmFuc2Zvcm0nXSA9IG9ialsndHJhbnNmb3JtJ10gPSAndHJhbnNsYXRlKCcgKyBvZmZzZXQubGVmdCArICdweCwnICsgb2Zmc2V0LnRvcCArICdweCknO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqLmxlZnQgPSBvZmZzZXQubGVmdDtcblx0XHRcdFx0b2JqLnRvcCA9IG9mZnNldC50b3A7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblxuXHR9XG59KTtcblxuXG5cbi8qPj56b29tKi9cblxuLyo+PmlmcmFtZSovXG5cbnZhciBJRlJBTUVfTlMgPSAnaWZyYW1lJyxcblx0X2VtcHR5UGFnZSA9ICcvL2Fib3V0OmJsYW5rJyxcblx0XG5cdF9maXhJZnJhbWVCdWdzID0gZnVuY3Rpb24oaXNTaG93aW5nKSB7XG5cdFx0aWYobWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdKSB7XG5cdFx0XHR2YXIgZWwgPSBtZnAuY3VyclRlbXBsYXRlW0lGUkFNRV9OU10uZmluZCgnaWZyYW1lJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHsgXG5cdFx0XHRcdC8vIHJlc2V0IHNyYyBhZnRlciB0aGUgcG9wdXAgaXMgY2xvc2VkIHRvIGF2b2lkIFwidmlkZW8ga2VlcHMgcGxheWluZyBhZnRlciBwb3B1cCBpcyBjbG9zZWRcIiBidWdcblx0XHRcdFx0aWYoIWlzU2hvd2luZykge1xuXHRcdFx0XHRcdGVsWzBdLnNyYyA9IF9lbXB0eVBhZ2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTggYmxhY2sgc2NyZWVuIGJ1ZyBmaXhcblx0XHRcdFx0aWYobWZwLmlzSUU4KSB7XG5cdFx0XHRcdFx0ZWwuY3NzKCdkaXNwbGF5JywgaXNTaG93aW5nID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJRlJBTUVfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0bWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgc3JjPVwiLy9hYm91dDpibGFua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nK1xuXHRcdFx0XHQnPC9kaXY+JyxcblxuXHRcdHNyY0FjdGlvbjogJ2lmcmFtZV9zcmMnLFxuXG5cdFx0Ly8gd2UgZG9uJ3QgY2FyZSBhbmQgc3VwcG9ydCBvbmx5IG9uZSBkZWZhdWx0IHR5cGUgb2YgVVJMIGJ5IGRlZmF1bHRcblx0XHRwYXR0ZXJuczoge1xuXHRcdFx0eW91dHViZToge1xuXHRcdFx0XHRpbmRleDogJ3lvdXR1YmUuY29tJywgXG5cdFx0XHRcdGlkOiAndj0nLCBcblx0XHRcdFx0c3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdHZpbWVvOiB7XG5cdFx0XHRcdGluZGV4OiAndmltZW8uY29tLycsXG5cdFx0XHRcdGlkOiAnLycsXG5cdFx0XHRcdHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEnXG5cdFx0XHR9LFxuXHRcdFx0Z21hcHM6IHtcblx0XHRcdFx0aW5kZXg6ICcvL21hcHMuZ29vZ2xlLicsXG5cdFx0XHRcdHNyYzogJyVpZCUmb3V0cHV0PWVtYmVkJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJZnJhbWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnR5cGVzLnB1c2goSUZSQU1FX05TKTtcblxuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkge1xuXHRcdFx0XHRpZihwcmV2VHlwZSAhPT0gbmV3VHlwZSkge1xuXHRcdFx0XHRcdGlmKHByZXZUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7IC8vIGlmcmFtZSBpZiByZW1vdmVkXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG5ld1R5cGUgPT09IElGUkFNRV9OUykge1xuXHRcdFx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3ModHJ1ZSk7IC8vIGlmcmFtZSBpcyBzaG93aW5nXG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fS8vIGVsc2Uge1xuXHRcdFx0XHRcdC8vIGlmcmFtZSBzb3VyY2UgaXMgc3dpdGNoZWQsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0XHRcdC8vfVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCArICcuJyArIElGUkFNRV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Z2V0SWZyYW1lOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXHRcdFx0dmFyIGVtYmVkU3JjID0gaXRlbS5zcmM7XG5cdFx0XHR2YXIgaWZyYW1lU3QgPSBtZnAuc3QuaWZyYW1lO1xuXHRcdFx0XHRcblx0XHRcdCQuZWFjaChpZnJhbWVTdC5wYXR0ZXJucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGVtYmVkU3JjLmluZGV4T2YoIHRoaXMuaW5kZXggKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5pZCkge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHRoaXMuaWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gZW1iZWRTcmMuc3Vic3RyKGVtYmVkU3JjLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLCBlbWJlZFNyYy5sZW5ndGgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZW1iZWRTcmMgPSB0aGlzLmlkLmNhbGwoIHRoaXMsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5zcmMucmVwbGFjZSgnJWlkJScsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdHZhciBkYXRhT2JqID0ge307XG5cdFx0XHRpZihpZnJhbWVTdC5zcmNBY3Rpb24pIHtcblx0XHRcdFx0ZGF0YU9ialtpZnJhbWVTdC5zcmNBY3Rpb25dID0gZW1iZWRTcmM7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCBkYXRhT2JqLCBpdGVtKTtcblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cblxuXG4vKj4+aWZyYW1lKi9cblxuLyo+PmdhbGxlcnkqL1xuLyoqXG4gKiBHZXQgbG9vcGVkIGluZGV4IGRlcGVuZGluZyBvbiBudW1iZXIgb2Ygc2xpZGVzXG4gKi9cbnZhciBfZ2V0TG9vcGVkSWQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBudW1TbGlkZXMgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xuXHRcdFx0cmV0dXJuIGluZGV4IC0gbnVtU2xpZGVzO1xuXHRcdH0gZWxzZSAgaWYoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblx0X3JlcGxhY2VDdXJyVG90YWwgPSBmdW5jdGlvbih0ZXh0LCBjdXJyLCB0b3RhbCkge1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoLyVjdXJyJS9naSwgY3VyciArIDEpLnJlcGxhY2UoLyV0b3RhbCUvZ2ksIHRvdGFsKTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCdnYWxsZXJ5Jywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRhcnJvd01hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWFycm93IG1mcC1hcnJvdy0lZGlyJVwiPjwvYnV0dG9uPicsXG5cdFx0cHJlbG9hZDogWzAsMl0sXG5cdFx0bmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuXHRcdGFycm93czogdHJ1ZSxcblxuXHRcdHRQcmV2OiAnUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KScsXG5cdFx0dE5leHQ6ICdOZXh0IChSaWdodCBhcnJvdyBrZXkpJyxcblx0XHR0Q291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJ1xuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdEdhbGxlcnk6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgZ1N0ID0gbWZwLnN0LmdhbGxlcnksXG5cdFx0XHRcdG5zID0gJy5tZnAtZ2FsbGVyeScsXG5cdFx0XHRcdHN1cHBvcnRzRmFzdENsaWNrID0gQm9vbGVhbigkLmZuLm1mcEZhc3RDbGljayk7XG5cblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlOyAvLyB0cnVlIC0gbmV4dCwgZmFsc2UgLSBwcmV2XG5cdFx0XHRcblx0XHRcdGlmKCFnU3QgfHwgIWdTdC5lbmFibGVkICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtZ2FsbGVyeSc7XG5cblx0XHRcdF9tZnBPbihPUEVOX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRpZihnU3QubmF2aWdhdGVCeUltZ0NsaWNrKSB7XG5cdFx0XHRcdFx0bWZwLndyYXAub24oJ2NsaWNrJytucywgJy5tZnAtaW1nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfZG9jdW1lbnQub24oJ2tleWRvd24nK25zLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdVcGRhdGVTdGF0dXMnK25zLCBmdW5jdGlvbihlLCBkYXRhKSB7XG5cdFx0XHRcdGlmKGRhdGEudGV4dCkge1xuXHRcdFx0XHRcdGRhdGEudGV4dCA9IF9yZXBsYWNlQ3VyclRvdGFsKGRhdGEudGV4dCwgbWZwLmN1cnJJdGVtLmluZGV4LCBtZnAuaXRlbXMubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKGUsIGVsZW1lbnQsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHR2YXIgbCA9IG1mcC5pdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHZhbHVlcy5jb3VudGVyID0gbCA+IDEgPyBfcmVwbGFjZUN1cnJUb3RhbChnU3QudENvdW50ZXIsIGl0ZW0uaW5kZXgsIGwpIDogJyc7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJyArIG5zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEgJiYgZ1N0LmFycm93cyAmJiAhbWZwLmFycm93TGVmdCkge1xuXHRcdFx0XHRcdHZhciBtYXJrdXAgPSBnU3QuYXJyb3dNYXJrdXAsXG5cdFx0XHRcdFx0XHRhcnJvd0xlZnQgPSBtZnAuYXJyb3dMZWZ0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksICdsZWZ0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSxcdFx0XHRcblx0XHRcdFx0XHRcdGFycm93UmlnaHQgPSBtZnAuYXJyb3dSaWdodCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudE5leHQpLnJlcGxhY2UoLyVkaXIlL2dpLCAncmlnaHQnKSApLmFkZENsYXNzKFBSRVZFTlRfQ0xPU0VfQ0xBU1MpO1xuXG5cdFx0XHRcdFx0dmFyIGVOYW1lID0gc3VwcG9ydHNGYXN0Q2xpY2sgPyAnbWZwRmFzdENsaWNrJyA6ICdjbGljayc7XG5cdFx0XHRcdFx0YXJyb3dMZWZ0W2VOYW1lXShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSk7XHRcdFx0XG5cdFx0XHRcdFx0YXJyb3dSaWdodFtlTmFtZV0oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdH0pO1x0XG5cblx0XHRcdFx0XHQvLyBQb2x5ZmlsbCBmb3IgOmJlZm9yZSBhbmQgOmFmdGVyIChhZGRzIGVsZW1lbnRzIHdpdGggY2xhc3NlcyBtZnAtYSBhbmQgbWZwLWIpXG5cdFx0XHRcdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRcdFx0XHRfZ2V0RWwoJ2InLCBhcnJvd0xlZnRbMF0sIGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdF9nZXRFbCgnYScsIGFycm93TGVmdFswXSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdFx0X2dldEVsKCdiJywgYXJyb3dSaWdodFswXSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdFx0X2dldEVsKCdhJywgYXJyb3dSaWdodFswXSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1mcC5jb250YWluZXIuYXBwZW5kKGFycm93TGVmdC5hZGQoYXJyb3dSaWdodCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENIQU5HRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fcHJlbG9hZFRpbWVvdXQpIGNsZWFyVGltZW91dChtZnAuX3ByZWxvYWRUaW1lb3V0KTtcblxuXHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAucHJlbG9hZE5lYXJieUltYWdlcygpO1xuXHRcdFx0XHRcdG1mcC5fcHJlbG9hZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9LCAxNik7XHRcdFxuXHRcdFx0fSk7XG5cblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2RvY3VtZW50Lm9mZihucyk7XG5cdFx0XHRcdG1mcC53cmFwLm9mZignY2xpY2snK25zKTtcblx0XHRcdFxuXHRcdFx0XHRpZihtZnAuYXJyb3dMZWZ0ICYmIHN1cHBvcnRzRmFzdENsaWNrKSB7XG5cdFx0XHRcdFx0bWZwLmFycm93TGVmdC5hZGQobWZwLmFycm93UmlnaHQpLmRlc3Ryb3lNZnBGYXN0Q2xpY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtZnAuYXJyb3dSaWdodCA9IG1mcC5hcnJvd0xlZnQgPSBudWxsO1xuXHRcdFx0fSk7XG5cblx0XHR9LCBcblx0XHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCArIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmV2OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSBmYWxzZTtcblx0XHRcdG1mcC5pbmRleCA9IF9nZXRMb29wZWRJZChtZnAuaW5kZXggLSAxKTtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdH0sXG5cdFx0Z29UbzogZnVuY3Rpb24obmV3SW5kZXgpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSAobmV3SW5kZXggPj0gbWZwLmluZGV4KTtcblx0XHRcdG1mcC5pbmRleCA9IG5ld0luZGV4O1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmVsb2FkTmVhcmJ5SW1hZ2VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwID0gbWZwLnN0LmdhbGxlcnkucHJlbG9hZCxcblx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRwcmVsb2FkQWZ0ZXIgPSBNYXRoLm1pbihwWzFdLCBtZnAuaXRlbXMubGVuZ3RoKSxcblx0XHRcdFx0aTtcblxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEFmdGVyIDogcHJlbG9hZEJlZm9yZSk7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleCtpKTtcblx0XHRcdH1cblx0XHRcdGZvcihpID0gMTsgaSA8PSAobWZwLmRpcmVjdGlvbiA/IHByZWxvYWRCZWZvcmUgOiBwcmVsb2FkQWZ0ZXIpOyBpKyspIHtcblx0XHRcdFx0bWZwLl9wcmVsb2FkSXRlbShtZnAuaW5kZXgtaSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfcHJlbG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cblx0XHRcdGlmKG1mcC5pdGVtc1tpbmRleF0ucHJlbG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdO1xuXHRcdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdGl0ZW0gPSBtZnAucGFyc2VFbCggaW5kZXggKTtcblx0XHRcdH1cblxuXHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkJywgaXRlbSk7XG5cblx0XHRcdGlmKGl0ZW0udHlwZSA9PT0gJ2ltYWdlJykge1xuXHRcdFx0XHRpdGVtLmltZyA9ICQoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbignbG9hZC5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9KS5vbignZXJyb3IubWZwbG9hZGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkRXJyb3InLCBpdGVtKTtcblx0XHRcdFx0fSkuYXR0cignc3JjJywgaXRlbS5zcmMpO1xuXHRcdFx0fVxuXG5cblx0XHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKlxuVG91Y2ggU3VwcG9ydCB0aGF0IG1pZ2h0IGJlIGltcGxlbWVudGVkIHNvbWUgZGF5XG5cbmFkZFN3aXBlR2VzdHVyZTogZnVuY3Rpb24oKSB7XG5cdHZhciBzdGFydFgsXG5cdFx0bW92ZWQsXG5cdFx0bXVsdGlwbGVUb3VjaGVzO1xuXG5cdFx0cmV0dXJuO1xuXG5cdHZhciBuYW1lc3BhY2UgPSAnLm1mcCcsXG5cdFx0YWRkRXZlbnROYW1lcyA9IGZ1bmN0aW9uKHByZWYsIGRvd24sIG1vdmUsIHVwLCBjYW5jZWwpIHtcblx0XHRcdG1mcC5fdFN0YXJ0ID0gcHJlZiArIGRvd24gKyBuYW1lc3BhY2U7XG5cdFx0XHRtZnAuX3RNb3ZlID0gcHJlZiArIG1vdmUgKyBuYW1lc3BhY2U7XG5cdFx0XHRtZnAuX3RFbmQgPSBwcmVmICsgdXAgKyBuYW1lc3BhY2U7XG5cdFx0XHRtZnAuX3RDYW5jZWwgPSBwcmVmICsgY2FuY2VsICsgbmFtZXNwYWNlO1xuXHRcdH07XG5cblx0aWYod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG5cdFx0YWRkRXZlbnROYW1lcygnTVNQb2ludGVyJywgJ0Rvd24nLCAnTW92ZScsICdVcCcsICdDYW5jZWwnKTtcblx0fSBlbHNlIGlmKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuXHRcdGFkZEV2ZW50TmFtZXMoJ3RvdWNoJywgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJywgJ2NhbmNlbCcpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxuXHRfd2luZG93Lm9uKG1mcC5fdFN0YXJ0LCBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIG9FID0gZS5vcmlnaW5hbEV2ZW50O1xuXHRcdG11bHRpcGxlVG91Y2hlcyA9IG1vdmVkID0gZmFsc2U7XG5cdFx0c3RhcnRYID0gb0UucGFnZVggfHwgb0UuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG5cdH0pLm9uKG1mcC5fdE1vdmUsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRtdWx0aXBsZVRvdWNoZXMgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bW92ZWQgPSB0cnVlO1xuXHRcdH1cblx0fSkub24obWZwLl90RW5kICsgJyAnICsgbWZwLl90Q2FuY2VsLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYobW92ZWQgJiYgIW11bHRpcGxlVG91Y2hlcykge1xuXHRcdFx0dmFyIG9FID0gZS5vcmlnaW5hbEV2ZW50LFxuXHRcdFx0XHRkaWZmID0gc3RhcnRYIC0gKG9FLnBhZ2VYIHx8IG9FLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYKTtcblxuXHRcdFx0aWYoZGlmZiA+IDIwKSB7XG5cdFx0XHRcdG1mcC5uZXh0KCk7XG5cdFx0XHR9IGVsc2UgaWYoZGlmZiA8IC0yMCkge1xuXHRcdFx0XHRtZnAucHJldigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59LFxuKi9cblxuXG4vKj4+Z2FsbGVyeSovXG5cbi8qPj5yZXRpbmEqL1xuXG52YXIgUkVUSU5BX05TID0gJ3JldGluYSc7XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShSRVRJTkFfTlMsIHtcblx0b3B0aW9uczoge1xuXHRcdHJlcGxhY2VTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdHJldHVybiBpdGVtLnNyYy5yZXBsYWNlKC9cXC5cXHcrJC8sIGZ1bmN0aW9uKG0pIHsgcmV0dXJuICdAMngnICsgbTsgfSk7XG5cdFx0fSxcblx0XHRyYXRpbzogMSAvLyBGdW5jdGlvbiBvciBudW1iZXIuICBTZXQgdG8gMSB0byBkaXNhYmxlLlxuXHR9LFxuXHRwcm90bzoge1xuXHRcdGluaXRSZXRpbmE6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG5cblx0XHRcdFx0dmFyIHN0ID0gbWZwLnN0LnJldGluYSxcblx0XHRcdFx0XHRyYXRpbyA9IHN0LnJhdGlvO1xuXG5cdFx0XHRcdHJhdGlvID0gIWlzTmFOKHJhdGlvKSA/IHJhdGlvIDogcmF0aW8oKTtcblxuXHRcdFx0XHRpZihyYXRpbyA+IDEpIHtcblx0XHRcdFx0XHRfbWZwT24oJ0ltYWdlSGFzU2l6ZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdtYXgtd2lkdGgnOiBpdGVtLmltZ1swXS5uYXR1cmFsV2lkdGggLyByYXRpbyxcblx0XHRcdFx0XHRcdFx0J3dpZHRoJzogJzEwMCUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRfbWZwT24oJ0VsZW1lbnRQYXJzZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uc3JjID0gc3QucmVwbGFjZVNyYyhpdGVtLCByYXRpbyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5yZXRpbmEqL1xuXG4vKj4+ZmFzdGNsaWNrKi9cbi8qKlxuICogRmFzdENsaWNrIGV2ZW50IGltcGxlbWVudGF0aW9uLiAocmVtb3ZlcyAzMDBtcyBkZWxheSBvbiB0b3VjaCBkZXZpY2VzKVxuICogQmFzZWQgb24gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbW9iaWxlL2FydGljbGVzL2Zhc3RfYnV0dG9uc1xuICpcbiAqIFlvdSBtYXkgdXNlIGl0IG91dHNpZGUgdGhlIE1hZ25pZmljIFBvcHVwIGJ5IGNhbGxpbmcganVzdDpcbiAqXG4gKiAkKCcueW91ci1lbCcpLm1mcEZhc3RDbGljayhmdW5jdGlvbigpIHtcbiAqICAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCEnKTtcbiAqIH0pO1xuICpcbiAqIFRvIHVuYmluZDpcbiAqICQoJy55b3VyLWVsJykuZGVzdHJveU1mcEZhc3RDbGljaygpO1xuICogXG4gKiBcbiAqIE5vdGUgdGhhdCBpdCdzIGEgdmVyeSBiYXNpYyBhbmQgc2ltcGxlIGltcGxlbWVudGF0aW9uLCBpdCBibG9ja3MgZ2hvc3QgY2xpY2sgb24gdGhlIHNhbWUgZWxlbWVudCB3aGVyZSBpdCB3YXMgYm91bmQuXG4gKiBJZiB5b3UgbmVlZCBzb21ldGhpbmcgbW9yZSBhZHZhbmNlZCwgdXNlIHBsdWdpbiBieSBGVCBMYWJzIGh0dHBzOi8vZ2l0aHViLmNvbS9mdGxhYnMvZmFzdGNsaWNrXG4gKiBcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cdHZhciBnaG9zdENsaWNrRGVsYXkgPSAxMDAwLFxuXHRcdHN1cHBvcnRzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csXG5cdFx0dW5iaW5kVG91Y2hNb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRfd2luZG93Lm9mZigndG91Y2htb3ZlJytucysnIHRvdWNoZW5kJytucyk7XG5cdFx0fSxcblx0XHRlTmFtZSA9ICdtZnBGYXN0Q2xpY2snLFxuXHRcdG5zID0gJy4nK2VOYW1lO1xuXG5cblx0Ly8gQXMgWmVwdG8uanMgZG9lc24ndCBoYXZlIGFuIGVhc3kgd2F5IHRvIGFkZCBjdXN0b20gZXZlbnRzIChsaWtlIGpRdWVyeSksIHNvIHdlIGltcGxlbWVudCBpdCBpbiB0aGlzIHdheVxuXHQkLmZuLm1mcEZhc3RDbGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRyZXR1cm4gJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgZWxlbSA9ICQodGhpcyksXG5cdFx0XHRcdGxvY2s7XG5cblx0XHRcdGlmKCBzdXBwb3J0c1RvdWNoICkge1xuXG5cdFx0XHRcdHZhciB0aW1lb3V0LFxuXHRcdFx0XHRcdHN0YXJ0WCxcblx0XHRcdFx0XHRzdGFydFksXG5cdFx0XHRcdFx0cG9pbnRlck1vdmVkLFxuXHRcdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRcdG51bVBvaW50ZXJzO1xuXG5cdFx0XHRcdGVsZW0ub24oJ3RvdWNoc3RhcnQnICsgbnMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRwb2ludGVyTW92ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRudW1Qb2ludGVycyA9IDE7XG5cblx0XHRcdFx0XHRwb2ludCA9IGUub3JpZ2luYWxFdmVudCA/IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIDogZS50b3VjaGVzWzBdO1xuXHRcdFx0XHRcdHN0YXJ0WCA9IHBvaW50LmNsaWVudFg7XG5cdFx0XHRcdFx0c3RhcnRZID0gcG9pbnQuY2xpZW50WTtcblxuXHRcdFx0XHRcdF93aW5kb3cub24oJ3RvdWNobW92ZScrbnMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdHBvaW50ID0gZS5vcmlnaW5hbEV2ZW50ID8gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBlLnRvdWNoZXM7XG5cdFx0XHRcdFx0XHRudW1Qb2ludGVycyA9IHBvaW50Lmxlbmd0aDtcblx0XHRcdFx0XHRcdHBvaW50ID0gcG9pbnRbMF07XG5cdFx0XHRcdFx0XHRpZiAoTWF0aC5hYnMocG9pbnQuY2xpZW50WCAtIHN0YXJ0WCkgPiAxMCB8fFxuXHRcdFx0XHRcdFx0XHRNYXRoLmFicyhwb2ludC5jbGllbnRZIC0gc3RhcnRZKSA+IDEwKSB7XG5cdFx0XHRcdFx0XHRcdHBvaW50ZXJNb3ZlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdHVuYmluZFRvdWNoTW92ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLm9uKCd0b3VjaGVuZCcrbnMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdHVuYmluZFRvdWNoTW92ZSgpO1xuXHRcdFx0XHRcdFx0aWYocG9pbnRlck1vdmVkIHx8IG51bVBvaW50ZXJzID4gMSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsb2NrID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRsb2NrID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9LCBnaG9zdENsaWNrRGVsYXkpO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5vbignY2xpY2snICsgbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZighbG9jaykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdCQuZm4uZGVzdHJveU1mcEZhc3RDbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykub2ZmKCd0b3VjaHN0YXJ0JyArIG5zICsgJyBjbGljaycgKyBucyk7XG5cdFx0aWYoc3VwcG9ydHNUb3VjaCkgX3dpbmRvdy5vZmYoJ3RvdWNobW92ZScrbnMrJyB0b3VjaGVuZCcrbnMpO1xuXHR9O1xufSkoKTtcblxuLyo+PmZhc3RjbGljayovXG4gX2NoZWNrSW5zdGFuY2UoKTsgfSkpO1xuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgbWFnbmlmaWNQb3B1cCAhPSBcInVuZGVmaW5lZFwiID8gbWFnbmlmaWNQb3B1cCA6IHdpbmRvdy5tYWduaWZpY1BvcHVwKTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuIl19
},{"/vagrant/public/themes/source_intranet/node_modules/jquery/dist/jquery.min.js":3}],5:[function(require,module,exports){
!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof exports ? module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.0 | github.com/jonathantneal/svg4everybody */
    function embed(svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.getAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            svg.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], svg = use.parentNode;
                if (svg && /svg/i.test(svg.nodeName)) {
                    var src = use.getAttribute("xlink:href");
                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
                        // remove the <use> element
                        svg.removeChild(use);
                        // parse the src and get the url and id
                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                        // if the link is external
                        if (url.length) {
                            // get the cached xhr request
                            var xhr = requests[url];
                            // ensure the xhr request exists
                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                            xhr._embeds.push({
                                svg: svg,
                                id: id
                            }), // prepare the xhr ready state change event
                            loadreadystatechange(xhr);
                        } else {
                            // embed the local id into the svg
                            embed(svg, document.getElementById(id));
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    return svg4everybody;
});
},{}],6:[function(require,module,exports){
(function (global){

; $ = global.$ = require("/vagrant/public/themes/source_intranet/node_modules/jquery/dist/jquery.min.js");
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*!
  Wookmark plugin
  @name wookmark.js
  @author Christoph Ono (chri@sto.ph or @gbks)
  @author Sebastian Helzle (me@helzle.it or @sebobo)
  @version 2.1.2
  @date 05/05/2016
  @category jQuery plugin
  @copyright (c) 2009-2016 Christoph Ono (www.wookmark.com)
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
/*global define, window, jQuery*/
/*jslint plusplus: true, bitwise: true */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['window', 'document'], factory);
  } else {
    factory(window, document);
  }
}(function (window, document) {

  // Wookmark default options
  // ------------------------
  var defaultOptions = {
    align: 'center',
    autoResize: true,
    comparator: null,
    direction: undefined,
    ignoreInactiveItems: true,
    inactiveClass: 'wookmark-inactive',
    itemSelector: undefined,
    itemWidth: 0,
    fillEmptySpace: false,
    flexibleWidth: 0,
    offset: 5,
    outerOffset: 0,
    onLayoutChanged: undefined,
    placeholderClass: 'wookmark-placeholder',
    possibleFilters: [],
    resizeDelay: 50,
    verticalOffset: undefined
  };

  // Helper functions
  // ----------------

  // Bind function to set the context for the Wookmark instance function
  function __bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  }

  // Function for executing css writes to dom on the next animation frame if supported
  var executeNextFrame = window.requestAnimationFrame || function (callback) { callback(); };

  // Update multiple css values on an object
  function setCSS(el, properties) {
    var key;
    for (key in properties) {
      if (properties.hasOwnProperty(key)) {
        el.style[key] = properties[key];
      }
    }
  }

  // Update the css properties of multiple elements at the same time
  // befor the browsers next animation frame.
  // The parameter `data` has to be an array containing objects, each
  // with the element and the desired css properties.
  function bulkUpdateCSS(data, callback) {
    executeNextFrame(function () {
      var i, item;
      for (i = 0; i < data.length; i++) {
        item = data[i];
        setCSS(item.el, item.css);
      }
      // Run optional callback
      if (typeof callback === 'function') {
        executeNextFrame(callback);
      }
    });
  }

  // Remove whitespace around filter names
  function cleanFilterName(filterName) {
    return filterName.replace(/^\s+|\s+$/g, '').toLowerCase();
  }

  // Remove listener from an element (IE8 compatible)
  function removeEventListener(el, eventName, handler) {
    if (window.jQuery) {
      $(el).off(eventName, handler);
    } else if (el.removeEventListener) {
      el.removeEventListener(eventName, handler);
    } else {
      el.detachEvent('on' + eventName, handler);
    }
  }

  // Add listener to an element (IE8 compatible)
  function addEventListener(el, eventName, handler) {
    removeEventListener(el, eventName, handler);

    if (window.jQuery) {
      $(el).on(eventName, handler);
    } else if (el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, function () {
        handler.call(el);
      });
    }
  }

  // Checks if element `el` is not visible in the browser
  function isHidden(el) {
    return el.offsetParent === null;
  }

  // Returns the elements height without margin
  function getHeight(el) {
    return el.offsetHeight;
  }

  // Returns the elements width without margin
  function getWidth(el) {
    return el.offsetWidth;
  }

  // Return true if element has class
  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    }
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }

  // Add class to element (IE8+)
  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  // Remove class from element (IE8+)
  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  // Get value of specified data attribute
  function getData(el, attr, isInt, prefix) {
    if (prefix === undefined) {
      prefix = 'wookmark-';
    }
    var val = el.getAttribute('data-' + prefix + attr);
    if (isInt === true) {
      return parseInt(val, 10);
    }
    return val;
  }

  // Set value of specified data attribute
  function setData(el, attr, val, prefix) {
    if (prefix === undefined) {
      prefix = 'wookmark-';
    }
    el.setAttribute('data-' + prefix + attr, val);
  }

  // Remove duplicates from given array
  function removeDuplicates(items) {
    var temp = {}, result = [], x, i = items.length;
    while (i--) {
      x = getData(items[i], 'id', true);
      if (!temp.hasOwnProperty(x)) {
        temp[x] = 1;
        result.push(items[i]);
      }
    }
    return result;
  }

  // Get the computed style from an element (IE 8 compatible)
  function getStyle(el, prop) {
    return window.getComputedStyle !== undefined ? window.getComputedStyle(el, null).getPropertyValue(prop) : el.currentStyle[prop];
  }


  // IE 8 compatible indexOf
  function indexOf(items, item) {
    var len = items.length, i;
    for (i = 0; i < len; i++) {
      if (items[i] === item) {
        return i;
      }
    }
    return -1;
  }

  // Main wookmark plugin class
  // --------------------------
  function Wookmark(container, options) {
    options = options || {};

    if (typeof container === 'string') {
      container = document.querySelector(container);
    }

    // Instance variables.
    this.container = container;
    this.columns = this.resizeTimer = null;
    this.activeItemCount = 0;
    this.placeholders = [];
    this.itemHeightsInitialized = false;
    this.itemHeightsDirty = false;
    this.elementTag = 'div';

    // Bind instance methods
    this.initItems = __bind(this.initItems, this);
    this.updateOptions = __bind(this.updateOptions, this);
    this.onResize = __bind(this.onResize, this);
    this.onRefresh = __bind(this.onRefresh, this);
    this.getItemWidth = __bind(this.getItemWidth, this);
    this.layout = __bind(this.layout, this);
    this.layoutFull = __bind(this.layoutFull, this);
    this.layoutColumns = __bind(this.layoutColumns, this);
    this.filter = __bind(this.filter, this);
    this.clear = __bind(this.clear, this);
    this.getActiveItems = __bind(this.getActiveItems, this);
    this.refreshPlaceholders = __bind(this.refreshPlaceholders, this);
    this.sortElements = __bind(this.sortElements, this);
    this.updateFilterClasses = __bind(this.updateFilterClasses, this);

    // Initialize children of the container
    this.initItems();

    // Initial update and layout
    this.container.style.display = 'block';
    this.updateOptions(options);

    // Collect filter classes after items have been initialized
    this.updateFilterClasses();

    // Listen to resize event of the browser if enabled
    if (this.autoResize) {
      addEventListener(window, 'resize', this.onResize);
    }

    // Listen to external refresh event
    addEventListener(this.container, 'refreshWookmark', this.onRefresh);
  }

  // Get all valid children of the container object and store them
  Wookmark.prototype.initItems = function () {
    // By select all children of the container if no selector is specified
    if (this.itemSelector === undefined) {
      var items = [], child, children = this.container.children,
          i = children.length;
      while (i--) {
        child = children[i];
        // Skip comment nodes on IE8
        if (child.nodeType !== 8) {
          // Show item
          child.style.display = '';
          setData(child, 'id', i);
          items.unshift(child);
        }
      }
      this.items = items;
    } else {
      this.items = this.container.querySelectorAll(this.itemSelector);
    }

    if (this.items.length) {
      this.elementTag = this.items[0].tagName;
    }
    this.itemHeightsDirty = true;
  };

  // Reload all filter classes from all items and cache them
  Wookmark.prototype.updateFilterClasses = function () {
    // Collect filter data
    var i = this.items.length, j, filterClasses = {}, itemFilterClasses,
      item, filterClass, possibleFilters = this.possibleFilters,
      k = possibleFilters.length, possibleFilter;

    while (i--) {
      item = this.items[i];

      // Read filter classes and globally store each filter class as object and the fitting items in the array
      itemFilterClasses = JSON.parse(getData(item, 'filter-class', false, ''));
      if (itemFilterClasses && typeof itemFilterClasses === 'object') {
        j = itemFilterClasses.length;
        while (j--) {
          filterClass = cleanFilterName(itemFilterClasses[j]);
          if (!filterClasses.hasOwnProperty(filterClass)) {
            filterClasses[filterClass] = [];
          }
          filterClasses[filterClass].push(item);
        }
      }
    }

    while (k--) {
      possibleFilter = cleanFilterName(possibleFilters[k]);
      if (!filterClasses.hasOwnProperty(possibleFilter)) {
        filterClasses[possibleFilter] = [];
      }
    }

    this.filterClasses = filterClasses;
  };

  // Method for updating the plugins options
  Wookmark.prototype.updateOptions = function (options) {
    var key;
    this.itemHeightsDirty = true;
    options = options || {};

    // Overwrite non existing instance variables with the ones from options or the defaults
    for (key in defaultOptions) {
      if (defaultOptions.hasOwnProperty(key)) {
        if (options.hasOwnProperty(key)) {
          this[key] = options[key];
        } else if (!this.hasOwnProperty(key)) {
          this[key] = defaultOptions[key];
        }
      }
    }

    // Vertical offset uses a fallback to offset
    this.verticalOffset = this.verticalOffset || this.offset;

    // Update layout so changes apply
    this.layout(true);
  };

  // This timer ensures that layout is not continuously called as window is being dragged.
  Wookmark.prototype.onResize = function () {
    clearTimeout(this.resizeTimer);
    this.itemHeightsDirty = this.flexibleWidth !== 0;
    this.resizeTimer = setTimeout(this.layout, this.resizeDelay);
  };

  // Marks the items heights as dirty and does a relayout
  Wookmark.prototype.onRefresh = function () {
    this.itemHeightsDirty = true;
    this.layout();
  };

  // Filters the active items with the given string filters.
  // @param filters array of string
  // @param mode 'or' or 'and'
  Wookmark.prototype.filter = function (filters, mode, dryRun) {
    var activeFilters = [], activeFiltersLength, activeItems = [],
      i, j, k, filter;

    filters = filters || [];
    mode = mode || 'or';
    dryRun = dryRun || false;

    if (filters.length) {
      // Collect active filters
      for (i = 0; i < filters.length; i++) {
        filter = cleanFilterName(filters[i]);
        if (this.filterClasses.hasOwnProperty(filter)) {
          activeFilters.push(this.filterClasses[filter]);
        }
      }

      // Get items for active filters with the selected mode
      i = activeFiltersLength = activeFilters.length;
      if (mode === 'or' || activeFiltersLength === 1) {
        // Set all items in all active filters active
        while (i--) {
          activeItems = activeItems.concat(activeFilters[i]);
        }
      } else if (mode === 'and') {
        var shortestFilter = activeFilters[0], itemValid = true,
          foundInFilter, currentItem, currentFilter;

        // Find shortest filter class
        while (i--) {
          if (activeFilters[i].length < shortestFilter.length) {
            shortestFilter = activeFilters[i];
          }
        }

        // Iterate over shortest filter and find elements in other filter classes
        shortestFilter = shortestFilter || [];
        i = shortestFilter.length;
        while (i--) {
          currentItem = shortestFilter[i];
          j = activeFiltersLength;
          itemValid = true;

          while (j-- && itemValid) {
            currentFilter = activeFilters[j];
            if (shortestFilter !== currentFilter) {
              // Search for current item in each active filter class
              foundInFilter = false;
              k = currentFilter.length;
              while (k-- && !foundInFilter) {
                foundInFilter = currentFilter[k] === currentItem;
              }
              itemValid &= foundInFilter;
            }
          }

          if (itemValid) {
            activeItems = activeItems.concat(shortestFilter[i]);
          }
        }
      }

      // Remove duplicates from active items
      if (activeFiltersLength > 1) {
        activeItems = removeDuplicates(activeItems);
      }

      // Hide inactive items
      if (!dryRun) {
        i = this.items.length;
        while (i--) {
          if (indexOf(activeItems, this.items[i]) === -1) {
            addClass(this.items[i], this.inactiveClass);
          }
        }
      }
    } else {
      // Show all items if no filter is selected
      activeItems = this.items;
    }

    // Show active items
    if (!dryRun) {
      i = activeItems.length;
      while (i--) {
        removeClass(activeItems[i], this.inactiveClass);
      }
      // Unset columns and refresh grid for a full layout
      this.columns = null;
      this.layout();
    }
    return activeItems;
  };

  // Creates or updates existing placeholders to create columns of even height
  Wookmark.prototype.refreshPlaceholders = function (columnWidth, sideOffset) {
    var i,
      containerHeight = getHeight(this.container),
      columnsLength = this.columns.length,
      column,
      height,
      innerOffset,
      lastColumnItem,
      placeholdersHtml = '',
      placeholder,
      top;

    // Add more placeholders if necessary
    if (this.placeholders.length < columnsLength) {
      for (i = 0; i < columnsLength - this.placeholders.length; i++) {
        placeholdersHtml += '<' + this.elementTag + ' class="' + this.placeholderClass + '"/>';
      }
      this.container.insertAdjacentHTML('beforeend', placeholdersHtml);
      this.placeholders = this.container.querySelectorAll('.' + this.placeholderClass);
    }

    innerOffset = (this.offset + parseInt(getStyle(this.placeholders[0], 'border-left-width'), 10) * 2) || 0;
    innerOffset += (parseInt(getStyle(this.placeholders[0], 'padding-left'), 10) * 2)  || 0;

    // Update each placeholder
    for (i = 0; i < this.placeholders.length; i++) {
      placeholder = this.placeholders[i];
      column = this.columns[i];

      if (i >= columnsLength || column.length === 0) {
        placeholder.style.display = 'none';
      } else {
        lastColumnItem = column[column.length - 1];
        top = getData(lastColumnItem, 'top', true) + getData(lastColumnItem, 'height', true) + this.verticalOffset;
        height = Math.max(0, containerHeight - top - innerOffset);

        setCSS(placeholder, {
          position: 'absolute',
          display: height > 0 ? 'block' : 'none',
          left: (i * columnWidth + sideOffset) + 'px',
          top: top + 'px',
          width: (columnWidth - innerOffset) + 'px',
          height: height + 'px'
        });
      }
    }
  };

  // Method the get active items which are not disabled and visible
  Wookmark.prototype.getActiveItems = function () {
    var inactiveClass = this.inactiveClass,
      i,
      result = [],
      item,
      items = this.items;

    if (this.ignoreInactiveItems) {
      for (i = 0; i < items.length; i++) {
        item = items[i];
        if (!hasClass(item, inactiveClass)) {
          result.push(item);
        }
      }
    } else {
      return items;
    }
    return result;
  };

  // Method to get the standard item width
  Wookmark.prototype.getItemWidth = function () {
    var itemWidth = this.itemWidth,
      innerWidth = getWidth(this.container) - 2 * this.outerOffset,
      flexibleWidth = this.flexibleWidth;

    if (typeof itemWidth === 'function') {
      itemWidth = this.itemWidth();
    }

    if (this.items.length > 0 && (itemWidth === undefined || (itemWidth === 0 && !this.flexibleWidth))) {
      itemWidth = getWidth(this.items[0]);
    } else if (typeof itemWidth === 'string' && itemWidth.indexOf('%') >= 0) {
      itemWidth = parseFloat(itemWidth) / 100 * innerWidth;
    }

    // Calculate flexible item width if option is set
    if (flexibleWidth) {
      if (typeof flexibleWidth === 'function') {
        flexibleWidth = flexibleWidth();
      }

      if (typeof flexibleWidth === 'string' && flexibleWidth.indexOf('%') >= 0) {
        flexibleWidth = parseFloat(flexibleWidth) / 100 * innerWidth;
      }

      // Find highest column count
      var paddedInnerWidth = (innerWidth + this.offset),
        flexibleColumns = Math.floor(0.5 + paddedInnerWidth / (flexibleWidth + this.offset)),
        fixedColumns = Math.floor(paddedInnerWidth / (itemWidth + this.offset)),
        columns = Math.max(flexibleColumns, fixedColumns),
        columnWidth = Math.min(flexibleWidth, Math.floor((innerWidth - (columns - 1) * this.offset) / columns));

      itemWidth = Math.max(itemWidth, columnWidth);
    }

    return itemWidth;
  };

  // Main layout method.
  Wookmark.prototype.layout = function (force, callback) {
    // Do nothing if container isn't visible
    if (!force && isHidden(this.container)) { return; }

    // Calculate basic layout parameters.
    var calculatedItemWidth = this.getItemWidth(),
      columnWidth = calculatedItemWidth + this.offset,
      containerWidth = getWidth(this.container),
      innerWidth = containerWidth - 2 * this.outerOffset,
      columns = Math.floor((innerWidth + this.offset) / columnWidth),
      offset,
      maxHeight = 0,
      activeItems = this.getActiveItems(),
      activeItemsLength = activeItems.length,
      item;

    // Cache item heights
    if (force || this.itemHeightsDirty || !this.itemHeightsInitialized) {
      for (var i = 0; i < activeItemsLength; i++) {
        item = activeItems[i];

        if (this.flexibleWidth) {
          // Stretch items to fill calculated width
          item.style.width = calculatedItemWidth + 'px';
        }
        setData(item, 'height', item.offsetHeight);
      }
      this.itemHeightsDirty = false;
      this.itemHeightsInitialized = true;
    }

    // Use less columns if there are to few items
    columns = Math.max(1, Math.min(columns, activeItemsLength));

    // Calculate the offset based on the alignment of columns to the parent container
    offset = this.outerOffset;
    if (this.align === 'center') {
      offset += Math.floor(0.5 + (innerWidth - (columns * columnWidth - this.offset)) >> 1);
    }

    // Get direction for positioning
    this.direction = this.direction || (this.align === 'right' ? 'right' : 'left');

    // If container and column count hasn't changed, we can only update the columns.
    if (!force && this.columns !== null && this.columns.length === columns && this.activeItemCount === activeItemsLength) {
      maxHeight = this.layoutColumns(columnWidth, offset);
    } else {
      maxHeight = this.layoutFull(columnWidth, columns, offset);
    }
    this.activeItemCount = activeItemsLength;

    // Set container height to height of the grid.
    this.container.style.height = maxHeight + 'px';

    // Update placeholders
    if (this.fillEmptySpace) {
      this.refreshPlaceholders(columnWidth, offset);
    }

    if (this.onLayoutChanged !== undefined && typeof this.onLayoutChanged === 'function') {
      this.onLayoutChanged();
    }

    // Run optional callback
    if (typeof callback === 'function') {
      callback();
    }
  };

  // Sort elements with configurable comparator
  Wookmark.prototype.sortElements = function (elements) {
    return typeof this.comparator === 'function' ? elements.sort(this.comparator) : elements;
  };

  // Perform a full layout update.
  Wookmark.prototype.layoutFull = function (columnWidth, columns, offset) {
    var item, k = 0, i = 0, activeItems, activeItemCount, shortest = null, shortestIndex = null,
        sideOffset, heights = [], itemBulkCSS = [], leftAligned = this.align === 'left', self = this;

    this.columns = [];

    // Sort elements before layouting
    activeItems = this.sortElements(this.getActiveItems());
    activeItemCount = activeItems.length;

    // Prepare arrays to store height of columns and items.
    while (heights.length < columns) {
      heights.push(this.outerOffset);
      this.columns.push([]);
    }

    // Loop over items.
    while (i < activeItemCount) {
      item = activeItems[i];

      // Find the shortest column.
      shortest = heights[0];
      shortestIndex = 0;
      for (k = 0; k < columns; k++) {
        if (heights[k] < shortest) {
          shortest = heights[k];
          shortestIndex = k;
        }
      }
      setData(item, 'top', shortest);

      // stick to left side if alignment is left and this is the first column
      sideOffset = offset;
      if (shortestIndex > 0 || !leftAligned) {
        sideOffset += shortestIndex * columnWidth;
      }

      // Position the item.
      itemBulkCSS[i] = {
        el: item,
        css: {
          position: 'absolute',
          top: shortest + 'px'
        }
      };
      itemBulkCSS[i].css[this.direction] = sideOffset + 'px';

      // Update column height and store item in shortest column
      heights[shortestIndex] += getData(item, 'height', true) + this.verticalOffset;
      this.columns[shortestIndex].push(item);
      i++;
    }

    // Update all css in the next frame and mark container as initalised
    bulkUpdateCSS(itemBulkCSS, function () {
      // Initialisation done
      if (!hasClass(self.container, 'wookmark-initialised')) {
        addClass(self.container, 'wookmark-initialised');
      }
    });

    // Return longest column
    return Math.max.apply(Math, heights);
  };

  // This layout method only updates the vertical position of the
  // existing column assignments.
  Wookmark.prototype.layoutColumns = function (columnWidth, offset) {
    var heights = [], itemBulkCSS = [], k = 0, j = 0,
      i = this.columns.length, currentHeight,
      column, item, sideOffset;

    while (i--) {
      currentHeight = this.outerOffset;
      heights.push(currentHeight);
      column = this.columns[i];
      sideOffset = i * columnWidth + offset;

      for (k = 0; k < column.length; k++, j++) {
        item = column[k];
        setData(item, 'top', currentHeight);
        itemBulkCSS[j] = {
          el: item,
          css: {
            top: currentHeight + 'px'
          }
        };
        itemBulkCSS[j].css[this.direction] = sideOffset + 'px';

        currentHeight += getData(item, 'height', true) + this.verticalOffset;
      }
      heights[i] = currentHeight;
    }

    bulkUpdateCSS(itemBulkCSS);

    // Return longest column
    return Math.max.apply(Math, heights);
  };

  // Clear event listeners and time outs and the instance itself
  Wookmark.prototype.clear = function () {
    clearTimeout(this.resizeTimer);
    var i = this.placeholders.length;
    while (i--) {
      this.container.removeChild(this.placeholders[i]);
    }
    removeEventListener(window, 'resize', this.onResize);
    removeEventListener(this.container, 'refreshWookmark', this.onRefresh);
  };

  // Register as jQuery plugin if jQuery is loaded
  if (window.jQuery !== undefined) {
    jQuery.fn.wookmark = function (options) {
      var i = this.length;

      // Use first element if container is an jQuery object
      if (options !== undefined && options.container instanceof jQuery) {
        options.container = options.container[0];
      }

      // Call plugin multiple times if there are multiple elements selected
      if (i > 1) {
        while (i--) {
          $(this).eq(i).wookmark(options);
        }
      } else if (i === 1) {
        // Create a wookmark instance or update an existing one
        if (!this.wookmarkInstance) {
          this.wookmarkInstance = new Wookmark(this[0], options || {});
        } else {
          this.wookmarkInstance.updateOptions(options || {});
        }
      }
      return this;
    };
  }

  window.Wookmark = Wookmark;
  return Wookmark;
}));

; browserify_shim__define__module__export__(typeof wookmark != "undefined" ? wookmark : window.wookmark);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93b29rbWFyay93b29rbWFyay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiXG47ICQgPSBnbG9iYWwuJCA9IHJlcXVpcmUoXCIvdmFncmFudC9wdWJsaWMvdGhlbWVzL3NvdXJjZV9pbnRyYW5ldC9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1wiKTtcbjsgdmFyIF9fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbi8qIVxuICBXb29rbWFyayBwbHVnaW5cbiAgQG5hbWUgd29va21hcmsuanNcbiAgQGF1dGhvciBDaHJpc3RvcGggT25vIChjaHJpQHN0by5waCBvciBAZ2JrcylcbiAgQGF1dGhvciBTZWJhc3RpYW4gSGVsemxlIChtZUBoZWx6bGUuaXQgb3IgQHNlYm9ibylcbiAgQHZlcnNpb24gMi4xLjJcbiAgQGRhdGUgMDUvMDUvMjAxNlxuICBAY2F0ZWdvcnkgalF1ZXJ5IHBsdWdpblxuICBAY29weXJpZ2h0IChjKSAyMDA5LTIwMTYgQ2hyaXN0b3BoIE9ubyAod3d3Lndvb2ttYXJrLmNvbSlcbiAgQGxpY2Vuc2UgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApIGxpY2Vuc2UuXG4qL1xuLypnbG9iYWwgZGVmaW5lLCB3aW5kb3csIGpRdWVyeSovXG4vKmpzbGludCBwbHVzcGx1czogdHJ1ZSwgYml0d2lzZTogdHJ1ZSAqL1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWyd3aW5kb3cnLCAnZG9jdW1lbnQnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeSh3aW5kb3csIGRvY3VtZW50KTtcbiAgfVxufShmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCkge1xuXG4gIC8vIFdvb2ttYXJrIGRlZmF1bHQgb3B0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgIGNvbXBhcmF0b3I6IG51bGwsXG4gICAgZGlyZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgaWdub3JlSW5hY3RpdmVJdGVtczogdHJ1ZSxcbiAgICBpbmFjdGl2ZUNsYXNzOiAnd29va21hcmstaW5hY3RpdmUnLFxuICAgIGl0ZW1TZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgIGl0ZW1XaWR0aDogMCxcbiAgICBmaWxsRW1wdHlTcGFjZTogZmFsc2UsXG4gICAgZmxleGlibGVXaWR0aDogMCxcbiAgICBvZmZzZXQ6IDUsXG4gICAgb3V0ZXJPZmZzZXQ6IDAsXG4gICAgb25MYXlvdXRDaGFuZ2VkOiB1bmRlZmluZWQsXG4gICAgcGxhY2Vob2xkZXJDbGFzczogJ3dvb2ttYXJrLXBsYWNlaG9sZGVyJyxcbiAgICBwb3NzaWJsZUZpbHRlcnM6IFtdLFxuICAgIHJlc2l6ZURlbGF5OiA1MCxcbiAgICB2ZXJ0aWNhbE9mZnNldDogdW5kZWZpbmVkXG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQmluZCBmdW5jdGlvbiB0byBzZXQgdGhlIGNvbnRleHQgZm9yIHRoZSBXb29rbWFyayBpbnN0YW5jZSBmdW5jdGlvblxuICBmdW5jdGlvbiBfX2JpbmQoZm4sIG1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gZm9yIGV4ZWN1dGluZyBjc3Mgd3JpdGVzIHRvIGRvbSBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUgaWYgc3VwcG9ydGVkXG4gIHZhciBleGVjdXRlTmV4dEZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfTtcblxuICAvLyBVcGRhdGUgbXVsdGlwbGUgY3NzIHZhbHVlcyBvbiBhbiBvYmplY3RcbiAgZnVuY3Rpb24gc2V0Q1NTKGVsLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjc3MgcHJvcGVydGllcyBvZiBtdWx0aXBsZSBlbGVtZW50cyBhdCB0aGUgc2FtZSB0aW1lXG4gIC8vIGJlZm9yIHRoZSBicm93c2VycyBuZXh0IGFuaW1hdGlvbiBmcmFtZS5cbiAgLy8gVGhlIHBhcmFtZXRlciBgZGF0YWAgaGFzIHRvIGJlIGFuIGFycmF5IGNvbnRhaW5pbmcgb2JqZWN0cywgZWFjaFxuICAvLyB3aXRoIHRoZSBlbGVtZW50IGFuZCB0aGUgZGVzaXJlZCBjc3MgcHJvcGVydGllcy5cbiAgZnVuY3Rpb24gYnVsa1VwZGF0ZUNTUyhkYXRhLCBjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVOZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGl0ZW07XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtID0gZGF0YVtpXTtcbiAgICAgICAgc2V0Q1NTKGl0ZW0uZWwsIGl0ZW0uY3NzKTtcbiAgICAgIH1cbiAgICAgIC8vIFJ1biBvcHRpb25hbCBjYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBleGVjdXRlTmV4dEZyYW1lKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB3aGl0ZXNwYWNlIGFyb3VuZCBmaWx0ZXIgbmFtZXNcbiAgZnVuY3Rpb24gY2xlYW5GaWx0ZXJOYW1lKGZpbHRlck5hbWUpIHtcbiAgICByZXR1cm4gZmlsdGVyTmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBsaXN0ZW5lciBmcm9tIGFuIGVsZW1lbnQgKElFOCBjb21wYXRpYmxlKVxuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgICAgJChlbCkub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfSBlbHNlIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBsaXN0ZW5lciB0byBhbiBlbGVtZW50IChJRTggY29tcGF0aWJsZSlcbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcblxuICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAkKGVsKS5vbihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH0gZWxzZSBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbChlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVja3MgaWYgZWxlbWVudCBgZWxgIGlzIG5vdCB2aXNpYmxlIGluIHRoZSBicm93c2VyXG4gIGZ1bmN0aW9uIGlzSGlkZGVuKGVsKSB7XG4gICAgcmV0dXJuIGVsLm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGVsZW1lbnRzIGhlaWdodCB3aXRob3V0IG1hcmdpblxuICBmdW5jdGlvbiBnZXRIZWlnaHQoZWwpIHtcbiAgICByZXR1cm4gZWwub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgZWxlbWVudHMgd2lkdGggd2l0aG91dCBtYXJnaW5cbiAgZnVuY3Rpb24gZ2V0V2lkdGgoZWwpIHtcbiAgICByZXR1cm4gZWwub2Zmc2V0V2lkdGg7XG4gIH1cblxuICAvLyBSZXR1cm4gdHJ1ZSBpZiBlbGVtZW50IGhhcyBjbGFzc1xuICBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJywgJ2dpJykudGVzdChlbC5jbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gQWRkIGNsYXNzIHRvIGVsZW1lbnQgKElFOCspXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gZWxlbWVudCAoSUU4KylcbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdmFsdWUgb2Ygc3BlY2lmaWVkIGRhdGEgYXR0cmlidXRlXG4gIGZ1bmN0aW9uIGdldERhdGEoZWwsIGF0dHIsIGlzSW50LCBwcmVmaXgpIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWZpeCA9ICd3b29rbWFyay0nO1xuICAgIH1cbiAgICB2YXIgdmFsID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBwcmVmaXggKyBhdHRyKTtcbiAgICBpZiAoaXNJbnQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIC8vIFNldCB2YWx1ZSBvZiBzcGVjaWZpZWQgZGF0YSBhdHRyaWJ1dGVcbiAgZnVuY3Rpb24gc2V0RGF0YShlbCwgYXR0ciwgdmFsLCBwcmVmaXgpIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWZpeCA9ICd3b29rbWFyay0nO1xuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIHByZWZpeCArIGF0dHIsIHZhbCk7XG4gIH1cblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGdpdmVuIGFycmF5XG4gIGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoaXRlbXMpIHtcbiAgICB2YXIgdGVtcCA9IHt9LCByZXN1bHQgPSBbXSwgeCwgaSA9IGl0ZW1zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB4ID0gZ2V0RGF0YShpdGVtc1tpXSwgJ2lkJywgdHJ1ZSk7XG4gICAgICBpZiAoIXRlbXAuaGFzT3duUHJvcGVydHkoeCkpIHtcbiAgICAgICAgdGVtcFt4XSA9IDE7XG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY29tcHV0ZWQgc3R5bGUgZnJvbSBhbiBlbGVtZW50IChJRSA4IGNvbXBhdGlibGUpXG4gIGZ1bmN0aW9uIGdldFN0eWxlKGVsLCBwcm9wKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSA6IGVsLmN1cnJlbnRTdHlsZVtwcm9wXTtcbiAgfVxuXG5cbiAgLy8gSUUgOCBjb21wYXRpYmxlIGluZGV4T2ZcbiAgZnVuY3Rpb24gaW5kZXhPZihpdGVtcywgaXRlbSkge1xuICAgIHZhciBsZW4gPSBpdGVtcy5sZW5ndGgsIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoaXRlbXNbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIE1haW4gd29va21hcmsgcGx1Z2luIGNsYXNzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZ1bmN0aW9uIFdvb2ttYXJrKGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2UgdmFyaWFibGVzLlxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMucmVzaXplVGltZXIgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlSXRlbUNvdW50ID0gMDtcbiAgICB0aGlzLnBsYWNlaG9sZGVycyA9IFtdO1xuICAgIHRoaXMuaXRlbUhlaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuaXRlbUhlaWdodHNEaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudFRhZyA9ICdkaXYnO1xuXG4gICAgLy8gQmluZCBpbnN0YW5jZSBtZXRob2RzXG4gICAgdGhpcy5pbml0SXRlbXMgPSBfX2JpbmQodGhpcy5pbml0SXRlbXMsIHRoaXMpO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucyA9IF9fYmluZCh0aGlzLnVwZGF0ZU9wdGlvbnMsIHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSBfX2JpbmQodGhpcy5vblJlc2l6ZSwgdGhpcyk7XG4gICAgdGhpcy5vblJlZnJlc2ggPSBfX2JpbmQodGhpcy5vblJlZnJlc2gsIHRoaXMpO1xuICAgIHRoaXMuZ2V0SXRlbVdpZHRoID0gX19iaW5kKHRoaXMuZ2V0SXRlbVdpZHRoLCB0aGlzKTtcbiAgICB0aGlzLmxheW91dCA9IF9fYmluZCh0aGlzLmxheW91dCwgdGhpcyk7XG4gICAgdGhpcy5sYXlvdXRGdWxsID0gX19iaW5kKHRoaXMubGF5b3V0RnVsbCwgdGhpcyk7XG4gICAgdGhpcy5sYXlvdXRDb2x1bW5zID0gX19iaW5kKHRoaXMubGF5b3V0Q29sdW1ucywgdGhpcyk7XG4gICAgdGhpcy5maWx0ZXIgPSBfX2JpbmQodGhpcy5maWx0ZXIsIHRoaXMpO1xuICAgIHRoaXMuY2xlYXIgPSBfX2JpbmQodGhpcy5jbGVhciwgdGhpcyk7XG4gICAgdGhpcy5nZXRBY3RpdmVJdGVtcyA9IF9fYmluZCh0aGlzLmdldEFjdGl2ZUl0ZW1zLCB0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hQbGFjZWhvbGRlcnMgPSBfX2JpbmQodGhpcy5yZWZyZXNoUGxhY2Vob2xkZXJzLCB0aGlzKTtcbiAgICB0aGlzLnNvcnRFbGVtZW50cyA9IF9fYmluZCh0aGlzLnNvcnRFbGVtZW50cywgdGhpcyk7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJDbGFzc2VzID0gX19iaW5kKHRoaXMudXBkYXRlRmlsdGVyQ2xhc3NlcywgdGhpcyk7XG5cbiAgICAvLyBJbml0aWFsaXplIGNoaWxkcmVuIG9mIHRoZSBjb250YWluZXJcbiAgICB0aGlzLmluaXRJdGVtcygpO1xuXG4gICAgLy8gSW5pdGlhbCB1cGRhdGUgYW5kIGxheW91dFxuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcblxuICAgIC8vIENvbGxlY3QgZmlsdGVyIGNsYXNzZXMgYWZ0ZXIgaXRlbXMgaGF2ZSBiZWVuIGluaXRpYWxpemVkXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJDbGFzc2VzKCk7XG5cbiAgICAvLyBMaXN0ZW4gdG8gcmVzaXplIGV2ZW50IG9mIHRoZSBicm93c2VyIGlmIGVuYWJsZWRcbiAgICBpZiAodGhpcy5hdXRvUmVzaXplKSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBleHRlcm5hbCByZWZyZXNoIGV2ZW50XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmNvbnRhaW5lciwgJ3JlZnJlc2hXb29rbWFyaycsIHRoaXMub25SZWZyZXNoKTtcbiAgfVxuXG4gIC8vIEdldCBhbGwgdmFsaWQgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5lciBvYmplY3QgYW5kIHN0b3JlIHRoZW1cbiAgV29va21hcmsucHJvdG90eXBlLmluaXRJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBCeSBzZWxlY3QgYWxsIGNoaWxkcmVuIG9mIHRoZSBjb250YWluZXIgaWYgbm8gc2VsZWN0b3IgaXMgc3BlY2lmaWVkXG4gICAgaWYgKHRoaXMuaXRlbVNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBpdGVtcyA9IFtdLCBjaGlsZCwgY2hpbGRyZW4gPSB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbixcbiAgICAgICAgICBpID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAvLyBTa2lwIGNvbW1lbnQgbm9kZXMgb24gSUU4XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSAhPT0gOCkge1xuICAgICAgICAgIC8vIFNob3cgaXRlbVxuICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICBzZXREYXRhKGNoaWxkLCAnaWQnLCBpKTtcbiAgICAgICAgICBpdGVtcy51bnNoaWZ0KGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLml0ZW1TZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRUYWcgPSB0aGlzLml0ZW1zWzBdLnRhZ05hbWU7XG4gICAgfVxuICAgIHRoaXMuaXRlbUhlaWdodHNEaXJ0eSA9IHRydWU7XG4gIH07XG5cbiAgLy8gUmVsb2FkIGFsbCBmaWx0ZXIgY2xhc3NlcyBmcm9tIGFsbCBpdGVtcyBhbmQgY2FjaGUgdGhlbVxuICBXb29rbWFyay5wcm90b3R5cGUudXBkYXRlRmlsdGVyQ2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDb2xsZWN0IGZpbHRlciBkYXRhXG4gICAgdmFyIGkgPSB0aGlzLml0ZW1zLmxlbmd0aCwgaiwgZmlsdGVyQ2xhc3NlcyA9IHt9LCBpdGVtRmlsdGVyQ2xhc3NlcyxcbiAgICAgIGl0ZW0sIGZpbHRlckNsYXNzLCBwb3NzaWJsZUZpbHRlcnMgPSB0aGlzLnBvc3NpYmxlRmlsdGVycyxcbiAgICAgIGsgPSBwb3NzaWJsZUZpbHRlcnMubGVuZ3RoLCBwb3NzaWJsZUZpbHRlcjtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuXG4gICAgICAvLyBSZWFkIGZpbHRlciBjbGFzc2VzIGFuZCBnbG9iYWxseSBzdG9yZSBlYWNoIGZpbHRlciBjbGFzcyBhcyBvYmplY3QgYW5kIHRoZSBmaXR0aW5nIGl0ZW1zIGluIHRoZSBhcnJheVxuICAgICAgaXRlbUZpbHRlckNsYXNzZXMgPSBKU09OLnBhcnNlKGdldERhdGEoaXRlbSwgJ2ZpbHRlci1jbGFzcycsIGZhbHNlLCAnJykpO1xuICAgICAgaWYgKGl0ZW1GaWx0ZXJDbGFzc2VzICYmIHR5cGVvZiBpdGVtRmlsdGVyQ2xhc3NlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaiA9IGl0ZW1GaWx0ZXJDbGFzc2VzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgIGZpbHRlckNsYXNzID0gY2xlYW5GaWx0ZXJOYW1lKGl0ZW1GaWx0ZXJDbGFzc2VzW2pdKTtcbiAgICAgICAgICBpZiAoIWZpbHRlckNsYXNzZXMuaGFzT3duUHJvcGVydHkoZmlsdGVyQ2xhc3MpKSB7XG4gICAgICAgICAgICBmaWx0ZXJDbGFzc2VzW2ZpbHRlckNsYXNzXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWx0ZXJDbGFzc2VzW2ZpbHRlckNsYXNzXS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKGstLSkge1xuICAgICAgcG9zc2libGVGaWx0ZXIgPSBjbGVhbkZpbHRlck5hbWUocG9zc2libGVGaWx0ZXJzW2tdKTtcbiAgICAgIGlmICghZmlsdGVyQ2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eShwb3NzaWJsZUZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyQ2xhc3Nlc1twb3NzaWJsZUZpbHRlcl0gPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckNsYXNzZXMgPSBmaWx0ZXJDbGFzc2VzO1xuICB9O1xuXG4gIC8vIE1ldGhvZCBmb3IgdXBkYXRpbmcgdGhlIHBsdWdpbnMgb3B0aW9uc1xuICBXb29rbWFyay5wcm90b3R5cGUudXBkYXRlT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIGtleTtcbiAgICB0aGlzLml0ZW1IZWlnaHRzRGlydHkgPSB0cnVlO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gT3ZlcndyaXRlIG5vbiBleGlzdGluZyBpbnN0YW5jZSB2YXJpYWJsZXMgd2l0aCB0aGUgb25lcyBmcm9tIG9wdGlvbnMgb3IgdGhlIGRlZmF1bHRzXG4gICAgZm9yIChrZXkgaW4gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgIGlmIChkZWZhdWx0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IGRlZmF1bHRPcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJ0aWNhbCBvZmZzZXQgdXNlcyBhIGZhbGxiYWNrIHRvIG9mZnNldFxuICAgIHRoaXMudmVydGljYWxPZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0IHx8IHRoaXMub2Zmc2V0O1xuXG4gICAgLy8gVXBkYXRlIGxheW91dCBzbyBjaGFuZ2VzIGFwcGx5XG4gICAgdGhpcy5sYXlvdXQodHJ1ZSk7XG4gIH07XG5cbiAgLy8gVGhpcyB0aW1lciBlbnN1cmVzIHRoYXQgbGF5b3V0IGlzIG5vdCBjb250aW51b3VzbHkgY2FsbGVkIGFzIHdpbmRvdyBpcyBiZWluZyBkcmFnZ2VkLlxuICBXb29rbWFyay5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICAgIHRoaXMuaXRlbUhlaWdodHNEaXJ0eSA9IHRoaXMuZmxleGlibGVXaWR0aCAhPT0gMDtcbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLmxheW91dCwgdGhpcy5yZXNpemVEZWxheSk7XG4gIH07XG5cbiAgLy8gTWFya3MgdGhlIGl0ZW1zIGhlaWdodHMgYXMgZGlydHkgYW5kIGRvZXMgYSByZWxheW91dFxuICBXb29rbWFyay5wcm90b3R5cGUub25SZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXRlbUhlaWdodHNEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfTtcblxuICAvLyBGaWx0ZXJzIHRoZSBhY3RpdmUgaXRlbXMgd2l0aCB0aGUgZ2l2ZW4gc3RyaW5nIGZpbHRlcnMuXG4gIC8vIEBwYXJhbSBmaWx0ZXJzIGFycmF5IG9mIHN0cmluZ1xuICAvLyBAcGFyYW0gbW9kZSAnb3InIG9yICdhbmQnXG4gIFdvb2ttYXJrLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZmlsdGVycywgbW9kZSwgZHJ5UnVuKSB7XG4gICAgdmFyIGFjdGl2ZUZpbHRlcnMgPSBbXSwgYWN0aXZlRmlsdGVyc0xlbmd0aCwgYWN0aXZlSXRlbXMgPSBbXSxcbiAgICAgIGksIGosIGssIGZpbHRlcjtcblxuICAgIGZpbHRlcnMgPSBmaWx0ZXJzIHx8IFtdO1xuICAgIG1vZGUgPSBtb2RlIHx8ICdvcic7XG4gICAgZHJ5UnVuID0gZHJ5UnVuIHx8IGZhbHNlO1xuXG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAvLyBDb2xsZWN0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWx0ZXIgPSBjbGVhbkZpbHRlck5hbWUoZmlsdGVyc1tpXSk7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlckNsYXNzZXMuaGFzT3duUHJvcGVydHkoZmlsdGVyKSkge1xuICAgICAgICAgIGFjdGl2ZUZpbHRlcnMucHVzaCh0aGlzLmZpbHRlckNsYXNzZXNbZmlsdGVyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGl0ZW1zIGZvciBhY3RpdmUgZmlsdGVycyB3aXRoIHRoZSBzZWxlY3RlZCBtb2RlXG4gICAgICBpID0gYWN0aXZlRmlsdGVyc0xlbmd0aCA9IGFjdGl2ZUZpbHRlcnMubGVuZ3RoO1xuICAgICAgaWYgKG1vZGUgPT09ICdvcicgfHwgYWN0aXZlRmlsdGVyc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBTZXQgYWxsIGl0ZW1zIGluIGFsbCBhY3RpdmUgZmlsdGVycyBhY3RpdmVcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGFjdGl2ZUl0ZW1zID0gYWN0aXZlSXRlbXMuY29uY2F0KGFjdGl2ZUZpbHRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhbmQnKSB7XG4gICAgICAgIHZhciBzaG9ydGVzdEZpbHRlciA9IGFjdGl2ZUZpbHRlcnNbMF0sIGl0ZW1WYWxpZCA9IHRydWUsXG4gICAgICAgICAgZm91bmRJbkZpbHRlciwgY3VycmVudEl0ZW0sIGN1cnJlbnRGaWx0ZXI7XG5cbiAgICAgICAgLy8gRmluZCBzaG9ydGVzdCBmaWx0ZXIgY2xhc3NcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGlmIChhY3RpdmVGaWx0ZXJzW2ldLmxlbmd0aCA8IHNob3J0ZXN0RmlsdGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hvcnRlc3RGaWx0ZXIgPSBhY3RpdmVGaWx0ZXJzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBzaG9ydGVzdCBmaWx0ZXIgYW5kIGZpbmQgZWxlbWVudHMgaW4gb3RoZXIgZmlsdGVyIGNsYXNzZXNcbiAgICAgICAgc2hvcnRlc3RGaWx0ZXIgPSBzaG9ydGVzdEZpbHRlciB8fCBbXTtcbiAgICAgICAgaSA9IHNob3J0ZXN0RmlsdGVyLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGN1cnJlbnRJdGVtID0gc2hvcnRlc3RGaWx0ZXJbaV07XG4gICAgICAgICAgaiA9IGFjdGl2ZUZpbHRlcnNMZW5ndGg7XG4gICAgICAgICAgaXRlbVZhbGlkID0gdHJ1ZTtcblxuICAgICAgICAgIHdoaWxlIChqLS0gJiYgaXRlbVZhbGlkKSB7XG4gICAgICAgICAgICBjdXJyZW50RmlsdGVyID0gYWN0aXZlRmlsdGVyc1tqXTtcbiAgICAgICAgICAgIGlmIChzaG9ydGVzdEZpbHRlciAhPT0gY3VycmVudEZpbHRlcikge1xuICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIGN1cnJlbnQgaXRlbSBpbiBlYWNoIGFjdGl2ZSBmaWx0ZXIgY2xhc3NcbiAgICAgICAgICAgICAgZm91bmRJbkZpbHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICBrID0gY3VycmVudEZpbHRlci5sZW5ndGg7XG4gICAgICAgICAgICAgIHdoaWxlIChrLS0gJiYgIWZvdW5kSW5GaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEluRmlsdGVyID0gY3VycmVudEZpbHRlcltrXSA9PT0gY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXRlbVZhbGlkICY9IGZvdW5kSW5GaWx0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGl0ZW1WYWxpZCkge1xuICAgICAgICAgICAgYWN0aXZlSXRlbXMgPSBhY3RpdmVJdGVtcy5jb25jYXQoc2hvcnRlc3RGaWx0ZXJbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFjdGl2ZSBpdGVtc1xuICAgICAgaWYgKGFjdGl2ZUZpbHRlcnNMZW5ndGggPiAxKSB7XG4gICAgICAgIGFjdGl2ZUl0ZW1zID0gcmVtb3ZlRHVwbGljYXRlcyhhY3RpdmVJdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEhpZGUgaW5hY3RpdmUgaXRlbXNcbiAgICAgIGlmICghZHJ5UnVuKSB7XG4gICAgICAgIGkgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGlmIChpbmRleE9mKGFjdGl2ZUl0ZW1zLCB0aGlzLml0ZW1zW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKHRoaXMuaXRlbXNbaV0sIHRoaXMuaW5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNob3cgYWxsIGl0ZW1zIGlmIG5vIGZpbHRlciBpcyBzZWxlY3RlZFxuICAgICAgYWN0aXZlSXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWN0aXZlIGl0ZW1zXG4gICAgaWYgKCFkcnlSdW4pIHtcbiAgICAgIGkgPSBhY3RpdmVJdGVtcy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGFjdGl2ZUl0ZW1zW2ldLCB0aGlzLmluYWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgLy8gVW5zZXQgY29sdW1ucyBhbmQgcmVmcmVzaCBncmlkIGZvciBhIGZ1bGwgbGF5b3V0XG4gICAgICB0aGlzLmNvbHVtbnMgPSBudWxsO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZUl0ZW1zO1xuICB9O1xuXG4gIC8vIENyZWF0ZXMgb3IgdXBkYXRlcyBleGlzdGluZyBwbGFjZWhvbGRlcnMgdG8gY3JlYXRlIGNvbHVtbnMgb2YgZXZlbiBoZWlnaHRcbiAgV29va21hcmsucHJvdG90eXBlLnJlZnJlc2hQbGFjZWhvbGRlcnMgPSBmdW5jdGlvbiAoY29sdW1uV2lkdGgsIHNpZGVPZmZzZXQpIHtcbiAgICB2YXIgaSxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA9IGdldEhlaWdodCh0aGlzLmNvbnRhaW5lciksXG4gICAgICBjb2x1bW5zTGVuZ3RoID0gdGhpcy5jb2x1bW5zLmxlbmd0aCxcbiAgICAgIGNvbHVtbixcbiAgICAgIGhlaWdodCxcbiAgICAgIGlubmVyT2Zmc2V0LFxuICAgICAgbGFzdENvbHVtbkl0ZW0sXG4gICAgICBwbGFjZWhvbGRlcnNIdG1sID0gJycsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHRvcDtcblxuICAgIC8vIEFkZCBtb3JlIHBsYWNlaG9sZGVycyBpZiBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcnMubGVuZ3RoIDwgY29sdW1uc0xlbmd0aCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbHVtbnNMZW5ndGggLSB0aGlzLnBsYWNlaG9sZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGFjZWhvbGRlcnNIdG1sICs9ICc8JyArIHRoaXMuZWxlbWVudFRhZyArICcgY2xhc3M9XCInICsgdGhpcy5wbGFjZWhvbGRlckNsYXNzICsgJ1wiLz4nO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwbGFjZWhvbGRlcnNIdG1sKTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLnBsYWNlaG9sZGVyQ2xhc3MpO1xuICAgIH1cblxuICAgIGlubmVyT2Zmc2V0ID0gKHRoaXMub2Zmc2V0ICsgcGFyc2VJbnQoZ2V0U3R5bGUodGhpcy5wbGFjZWhvbGRlcnNbMF0sICdib3JkZXItbGVmdC13aWR0aCcpLCAxMCkgKiAyKSB8fCAwO1xuICAgIGlubmVyT2Zmc2V0ICs9IChwYXJzZUludChnZXRTdHlsZSh0aGlzLnBsYWNlaG9sZGVyc1swXSwgJ3BhZGRpbmctbGVmdCcpLCAxMCkgKiAyKSAgfHwgMDtcblxuICAgIC8vIFVwZGF0ZSBlYWNoIHBsYWNlaG9sZGVyXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucGxhY2Vob2xkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXJzW2ldO1xuICAgICAgY29sdW1uID0gdGhpcy5jb2x1bW5zW2ldO1xuXG4gICAgICBpZiAoaSA+PSBjb2x1bW5zTGVuZ3RoIHx8IGNvbHVtbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RDb2x1bW5JdGVtID0gY29sdW1uW2NvbHVtbi5sZW5ndGggLSAxXTtcbiAgICAgICAgdG9wID0gZ2V0RGF0YShsYXN0Q29sdW1uSXRlbSwgJ3RvcCcsIHRydWUpICsgZ2V0RGF0YShsYXN0Q29sdW1uSXRlbSwgJ2hlaWdodCcsIHRydWUpICsgdGhpcy52ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoMCwgY29udGFpbmVySGVpZ2h0IC0gdG9wIC0gaW5uZXJPZmZzZXQpO1xuXG4gICAgICAgIHNldENTUyhwbGFjZWhvbGRlciwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGRpc3BsYXk6IGhlaWdodCA+IDAgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIGxlZnQ6IChpICogY29sdW1uV2lkdGggKyBzaWRlT2Zmc2V0KSArICdweCcsXG4gICAgICAgICAgdG9wOiB0b3AgKyAncHgnLFxuICAgICAgICAgIHdpZHRoOiAoY29sdW1uV2lkdGggLSBpbm5lck9mZnNldCkgKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gTWV0aG9kIHRoZSBnZXQgYWN0aXZlIGl0ZW1zIHdoaWNoIGFyZSBub3QgZGlzYWJsZWQgYW5kIHZpc2libGVcbiAgV29va21hcmsucHJvdG90eXBlLmdldEFjdGl2ZUl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbmFjdGl2ZUNsYXNzID0gdGhpcy5pbmFjdGl2ZUNsYXNzLFxuICAgICAgaSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgaXRlbSxcbiAgICAgIGl0ZW1zID0gdGhpcy5pdGVtcztcblxuICAgIGlmICh0aGlzLmlnbm9yZUluYWN0aXZlSXRlbXMpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIGlmICghaGFzQ2xhc3MoaXRlbSwgaW5hY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gTWV0aG9kIHRvIGdldCB0aGUgc3RhbmRhcmQgaXRlbSB3aWR0aFxuICBXb29rbWFyay5wcm90b3R5cGUuZ2V0SXRlbVdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdGVtV2lkdGggPSB0aGlzLml0ZW1XaWR0aCxcbiAgICAgIGlubmVyV2lkdGggPSBnZXRXaWR0aCh0aGlzLmNvbnRhaW5lcikgLSAyICogdGhpcy5vdXRlck9mZnNldCxcbiAgICAgIGZsZXhpYmxlV2lkdGggPSB0aGlzLmZsZXhpYmxlV2lkdGg7XG5cbiAgICBpZiAodHlwZW9mIGl0ZW1XaWR0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaXRlbVdpZHRoID0gdGhpcy5pdGVtV2lkdGgoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwICYmIChpdGVtV2lkdGggPT09IHVuZGVmaW5lZCB8fCAoaXRlbVdpZHRoID09PSAwICYmICF0aGlzLmZsZXhpYmxlV2lkdGgpKSkge1xuICAgICAgaXRlbVdpZHRoID0gZ2V0V2lkdGgodGhpcy5pdGVtc1swXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbVdpZHRoID09PSAnc3RyaW5nJyAmJiBpdGVtV2lkdGguaW5kZXhPZignJScpID49IDApIHtcbiAgICAgIGl0ZW1XaWR0aCA9IHBhcnNlRmxvYXQoaXRlbVdpZHRoKSAvIDEwMCAqIGlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGZsZXhpYmxlIGl0ZW0gd2lkdGggaWYgb3B0aW9uIGlzIHNldFxuICAgIGlmIChmbGV4aWJsZVdpZHRoKSB7XG4gICAgICBpZiAodHlwZW9mIGZsZXhpYmxlV2lkdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmxleGlibGVXaWR0aCA9IGZsZXhpYmxlV2lkdGgoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBmbGV4aWJsZVdpZHRoID09PSAnc3RyaW5nJyAmJiBmbGV4aWJsZVdpZHRoLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgIGZsZXhpYmxlV2lkdGggPSBwYXJzZUZsb2F0KGZsZXhpYmxlV2lkdGgpIC8gMTAwICogaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBoaWdoZXN0IGNvbHVtbiBjb3VudFxuICAgICAgdmFyIHBhZGRlZElubmVyV2lkdGggPSAoaW5uZXJXaWR0aCArIHRoaXMub2Zmc2V0KSxcbiAgICAgICAgZmxleGlibGVDb2x1bW5zID0gTWF0aC5mbG9vcigwLjUgKyBwYWRkZWRJbm5lcldpZHRoIC8gKGZsZXhpYmxlV2lkdGggKyB0aGlzLm9mZnNldCkpLFxuICAgICAgICBmaXhlZENvbHVtbnMgPSBNYXRoLmZsb29yKHBhZGRlZElubmVyV2lkdGggLyAoaXRlbVdpZHRoICsgdGhpcy5vZmZzZXQpKSxcbiAgICAgICAgY29sdW1ucyA9IE1hdGgubWF4KGZsZXhpYmxlQ29sdW1ucywgZml4ZWRDb2x1bW5zKSxcbiAgICAgICAgY29sdW1uV2lkdGggPSBNYXRoLm1pbihmbGV4aWJsZVdpZHRoLCBNYXRoLmZsb29yKChpbm5lcldpZHRoIC0gKGNvbHVtbnMgLSAxKSAqIHRoaXMub2Zmc2V0KSAvIGNvbHVtbnMpKTtcblxuICAgICAgaXRlbVdpZHRoID0gTWF0aC5tYXgoaXRlbVdpZHRoLCBjb2x1bW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1XaWR0aDtcbiAgfTtcblxuICAvLyBNYWluIGxheW91dCBtZXRob2QuXG4gIFdvb2ttYXJrLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBjb250YWluZXIgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZm9yY2UgJiYgaXNIaWRkZW4odGhpcy5jb250YWluZXIpKSB7IHJldHVybjsgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGJhc2ljIGxheW91dCBwYXJhbWV0ZXJzLlxuICAgIHZhciBjYWxjdWxhdGVkSXRlbVdpZHRoID0gdGhpcy5nZXRJdGVtV2lkdGgoKSxcbiAgICAgIGNvbHVtbldpZHRoID0gY2FsY3VsYXRlZEl0ZW1XaWR0aCArIHRoaXMub2Zmc2V0LFxuICAgICAgY29udGFpbmVyV2lkdGggPSBnZXRXaWR0aCh0aGlzLmNvbnRhaW5lciksXG4gICAgICBpbm5lcldpZHRoID0gY29udGFpbmVyV2lkdGggLSAyICogdGhpcy5vdXRlck9mZnNldCxcbiAgICAgIGNvbHVtbnMgPSBNYXRoLmZsb29yKChpbm5lcldpZHRoICsgdGhpcy5vZmZzZXQpIC8gY29sdW1uV2lkdGgpLFxuICAgICAgb2Zmc2V0LFxuICAgICAgbWF4SGVpZ2h0ID0gMCxcbiAgICAgIGFjdGl2ZUl0ZW1zID0gdGhpcy5nZXRBY3RpdmVJdGVtcygpLFxuICAgICAgYWN0aXZlSXRlbXNMZW5ndGggPSBhY3RpdmVJdGVtcy5sZW5ndGgsXG4gICAgICBpdGVtO1xuXG4gICAgLy8gQ2FjaGUgaXRlbSBoZWlnaHRzXG4gICAgaWYgKGZvcmNlIHx8IHRoaXMuaXRlbUhlaWdodHNEaXJ0eSB8fCAhdGhpcy5pdGVtSGVpZ2h0c0luaXRpYWxpemVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUl0ZW1zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGFjdGl2ZUl0ZW1zW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmZsZXhpYmxlV2lkdGgpIHtcbiAgICAgICAgICAvLyBTdHJldGNoIGl0ZW1zIHRvIGZpbGwgY2FsY3VsYXRlZCB3aWR0aFxuICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBjYWxjdWxhdGVkSXRlbVdpZHRoICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKGl0ZW0sICdoZWlnaHQnLCBpdGVtLm9mZnNldEhlaWdodCk7XG4gICAgICB9XG4gICAgICB0aGlzLml0ZW1IZWlnaHRzRGlydHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXRlbUhlaWdodHNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVXNlIGxlc3MgY29sdW1ucyBpZiB0aGVyZSBhcmUgdG8gZmV3IGl0ZW1zXG4gICAgY29sdW1ucyA9IE1hdGgubWF4KDEsIE1hdGgubWluKGNvbHVtbnMsIGFjdGl2ZUl0ZW1zTGVuZ3RoKSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIG9mZnNldCBiYXNlZCBvbiB0aGUgYWxpZ25tZW50IG9mIGNvbHVtbnMgdG8gdGhlIHBhcmVudCBjb250YWluZXJcbiAgICBvZmZzZXQgPSB0aGlzLm91dGVyT2Zmc2V0O1xuICAgIGlmICh0aGlzLmFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgb2Zmc2V0ICs9IE1hdGguZmxvb3IoMC41ICsgKGlubmVyV2lkdGggLSAoY29sdW1ucyAqIGNvbHVtbldpZHRoIC0gdGhpcy5vZmZzZXQpKSA+PiAxKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgZGlyZWN0aW9uIGZvciBwb3NpdGlvbmluZ1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gfHwgKHRoaXMuYWxpZ24gPT09ICdyaWdodCcgPyAncmlnaHQnIDogJ2xlZnQnKTtcblxuICAgIC8vIElmIGNvbnRhaW5lciBhbmQgY29sdW1uIGNvdW50IGhhc24ndCBjaGFuZ2VkLCB3ZSBjYW4gb25seSB1cGRhdGUgdGhlIGNvbHVtbnMuXG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLmNvbHVtbnMgIT09IG51bGwgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCA9PT0gY29sdW1ucyAmJiB0aGlzLmFjdGl2ZUl0ZW1Db3VudCA9PT0gYWN0aXZlSXRlbXNMZW5ndGgpIHtcbiAgICAgIG1heEhlaWdodCA9IHRoaXMubGF5b3V0Q29sdW1ucyhjb2x1bW5XaWR0aCwgb2Zmc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF4SGVpZ2h0ID0gdGhpcy5sYXlvdXRGdWxsKGNvbHVtbldpZHRoLCBjb2x1bW5zLCBvZmZzZXQpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUl0ZW1Db3VudCA9IGFjdGl2ZUl0ZW1zTGVuZ3RoO1xuXG4gICAgLy8gU2V0IGNvbnRhaW5lciBoZWlnaHQgdG8gaGVpZ2h0IG9mIHRoZSBncmlkLlxuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG5cbiAgICAvLyBVcGRhdGUgcGxhY2Vob2xkZXJzXG4gICAgaWYgKHRoaXMuZmlsbEVtcHR5U3BhY2UpIHtcbiAgICAgIHRoaXMucmVmcmVzaFBsYWNlaG9sZGVycyhjb2x1bW5XaWR0aCwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbkxheW91dENoYW5nZWQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5vbkxheW91dENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub25MYXlvdXRDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLy8gUnVuIG9wdGlvbmFsIGNhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU29ydCBlbGVtZW50cyB3aXRoIGNvbmZpZ3VyYWJsZSBjb21wYXJhdG9yXG4gIFdvb2ttYXJrLnByb3RvdHlwZS5zb3J0RWxlbWVudHMgPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuY29tcGFyYXRvciA9PT0gJ2Z1bmN0aW9uJyA/IGVsZW1lbnRzLnNvcnQodGhpcy5jb21wYXJhdG9yKSA6IGVsZW1lbnRzO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBmdWxsIGxheW91dCB1cGRhdGUuXG4gIFdvb2ttYXJrLnByb3RvdHlwZS5sYXlvdXRGdWxsID0gZnVuY3Rpb24gKGNvbHVtbldpZHRoLCBjb2x1bW5zLCBvZmZzZXQpIHtcbiAgICB2YXIgaXRlbSwgayA9IDAsIGkgPSAwLCBhY3RpdmVJdGVtcywgYWN0aXZlSXRlbUNvdW50LCBzaG9ydGVzdCA9IG51bGwsIHNob3J0ZXN0SW5kZXggPSBudWxsLFxuICAgICAgICBzaWRlT2Zmc2V0LCBoZWlnaHRzID0gW10sIGl0ZW1CdWxrQ1NTID0gW10sIGxlZnRBbGlnbmVkID0gdGhpcy5hbGlnbiA9PT0gJ2xlZnQnLCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuY29sdW1ucyA9IFtdO1xuXG4gICAgLy8gU29ydCBlbGVtZW50cyBiZWZvcmUgbGF5b3V0aW5nXG4gICAgYWN0aXZlSXRlbXMgPSB0aGlzLnNvcnRFbGVtZW50cyh0aGlzLmdldEFjdGl2ZUl0ZW1zKCkpO1xuICAgIGFjdGl2ZUl0ZW1Db3VudCA9IGFjdGl2ZUl0ZW1zLmxlbmd0aDtcblxuICAgIC8vIFByZXBhcmUgYXJyYXlzIHRvIHN0b3JlIGhlaWdodCBvZiBjb2x1bW5zIGFuZCBpdGVtcy5cbiAgICB3aGlsZSAoaGVpZ2h0cy5sZW5ndGggPCBjb2x1bW5zKSB7XG4gICAgICBoZWlnaHRzLnB1c2godGhpcy5vdXRlck9mZnNldCk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaChbXSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCBvdmVyIGl0ZW1zLlxuICAgIHdoaWxlIChpIDwgYWN0aXZlSXRlbUNvdW50KSB7XG4gICAgICBpdGVtID0gYWN0aXZlSXRlbXNbaV07XG5cbiAgICAgIC8vIEZpbmQgdGhlIHNob3J0ZXN0IGNvbHVtbi5cbiAgICAgIHNob3J0ZXN0ID0gaGVpZ2h0c1swXTtcbiAgICAgIHNob3J0ZXN0SW5kZXggPSAwO1xuICAgICAgZm9yIChrID0gMDsgayA8IGNvbHVtbnM7IGsrKykge1xuICAgICAgICBpZiAoaGVpZ2h0c1trXSA8IHNob3J0ZXN0KSB7XG4gICAgICAgICAgc2hvcnRlc3QgPSBoZWlnaHRzW2tdO1xuICAgICAgICAgIHNob3J0ZXN0SW5kZXggPSBrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXREYXRhKGl0ZW0sICd0b3AnLCBzaG9ydGVzdCk7XG5cbiAgICAgIC8vIHN0aWNrIHRvIGxlZnQgc2lkZSBpZiBhbGlnbm1lbnQgaXMgbGVmdCBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgY29sdW1uXG4gICAgICBzaWRlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgaWYgKHNob3J0ZXN0SW5kZXggPiAwIHx8ICFsZWZ0QWxpZ25lZCkge1xuICAgICAgICBzaWRlT2Zmc2V0ICs9IHNob3J0ZXN0SW5kZXggKiBjb2x1bW5XaWR0aDtcbiAgICAgIH1cblxuICAgICAgLy8gUG9zaXRpb24gdGhlIGl0ZW0uXG4gICAgICBpdGVtQnVsa0NTU1tpXSA9IHtcbiAgICAgICAgZWw6IGl0ZW0sXG4gICAgICAgIGNzczoge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogc2hvcnRlc3QgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpdGVtQnVsa0NTU1tpXS5jc3NbdGhpcy5kaXJlY3Rpb25dID0gc2lkZU9mZnNldCArICdweCc7XG5cbiAgICAgIC8vIFVwZGF0ZSBjb2x1bW4gaGVpZ2h0IGFuZCBzdG9yZSBpdGVtIGluIHNob3J0ZXN0IGNvbHVtblxuICAgICAgaGVpZ2h0c1tzaG9ydGVzdEluZGV4XSArPSBnZXREYXRhKGl0ZW0sICdoZWlnaHQnLCB0cnVlKSArIHRoaXMudmVydGljYWxPZmZzZXQ7XG4gICAgICB0aGlzLmNvbHVtbnNbc2hvcnRlc3RJbmRleF0ucHVzaChpdGVtKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYWxsIGNzcyBpbiB0aGUgbmV4dCBmcmFtZSBhbmQgbWFyayBjb250YWluZXIgYXMgaW5pdGFsaXNlZFxuICAgIGJ1bGtVcGRhdGVDU1MoaXRlbUJ1bGtDU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGRvbmVcbiAgICAgIGlmICghaGFzQ2xhc3Moc2VsZi5jb250YWluZXIsICd3b29rbWFyay1pbml0aWFsaXNlZCcpKSB7XG4gICAgICAgIGFkZENsYXNzKHNlbGYuY29udGFpbmVyLCAnd29va21hcmstaW5pdGlhbGlzZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFJldHVybiBsb25nZXN0IGNvbHVtblxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBoZWlnaHRzKTtcbiAgfTtcblxuICAvLyBUaGlzIGxheW91dCBtZXRob2Qgb25seSB1cGRhdGVzIHRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGVcbiAgLy8gZXhpc3RpbmcgY29sdW1uIGFzc2lnbm1lbnRzLlxuICBXb29rbWFyay5wcm90b3R5cGUubGF5b3V0Q29sdW1ucyA9IGZ1bmN0aW9uIChjb2x1bW5XaWR0aCwgb2Zmc2V0KSB7XG4gICAgdmFyIGhlaWdodHMgPSBbXSwgaXRlbUJ1bGtDU1MgPSBbXSwgayA9IDAsIGogPSAwLFxuICAgICAgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGgsIGN1cnJlbnRIZWlnaHQsXG4gICAgICBjb2x1bW4sIGl0ZW0sIHNpZGVPZmZzZXQ7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gdGhpcy5vdXRlck9mZnNldDtcbiAgICAgIGhlaWdodHMucHVzaChjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpXTtcbiAgICAgIHNpZGVPZmZzZXQgPSBpICogY29sdW1uV2lkdGggKyBvZmZzZXQ7XG5cbiAgICAgIGZvciAoayA9IDA7IGsgPCBjb2x1bW4ubGVuZ3RoOyBrKyssIGorKykge1xuICAgICAgICBpdGVtID0gY29sdW1uW2tdO1xuICAgICAgICBzZXREYXRhKGl0ZW0sICd0b3AnLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgICAgaXRlbUJ1bGtDU1Nbal0gPSB7XG4gICAgICAgICAgZWw6IGl0ZW0sXG4gICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICB0b3A6IGN1cnJlbnRIZWlnaHQgKyAncHgnXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpdGVtQnVsa0NTU1tqXS5jc3NbdGhpcy5kaXJlY3Rpb25dID0gc2lkZU9mZnNldCArICdweCc7XG5cbiAgICAgICAgY3VycmVudEhlaWdodCArPSBnZXREYXRhKGl0ZW0sICdoZWlnaHQnLCB0cnVlKSArIHRoaXMudmVydGljYWxPZmZzZXQ7XG4gICAgICB9XG4gICAgICBoZWlnaHRzW2ldID0gY3VycmVudEhlaWdodDtcbiAgICB9XG5cbiAgICBidWxrVXBkYXRlQ1NTKGl0ZW1CdWxrQ1NTKTtcblxuICAgIC8vIFJldHVybiBsb25nZXN0IGNvbHVtblxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBoZWlnaHRzKTtcbiAgfTtcblxuICAvLyBDbGVhciBldmVudCBsaXN0ZW5lcnMgYW5kIHRpbWUgb3V0cyBhbmQgdGhlIGluc3RhbmNlIGl0c2VsZlxuICBXb29rbWFyay5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICAgIHZhciBpID0gdGhpcy5wbGFjZWhvbGRlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucGxhY2Vob2xkZXJzW2ldKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuY29udGFpbmVyLCAncmVmcmVzaFdvb2ttYXJrJywgdGhpcy5vblJlZnJlc2gpO1xuICB9O1xuXG4gIC8vIFJlZ2lzdGVyIGFzIGpRdWVyeSBwbHVnaW4gaWYgalF1ZXJ5IGlzIGxvYWRlZFxuICBpZiAod2luZG93LmpRdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgalF1ZXJ5LmZuLndvb2ttYXJrID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG5cbiAgICAgIC8vIFVzZSBmaXJzdCBlbGVtZW50IGlmIGNvbnRhaW5lciBpcyBhbiBqUXVlcnkgb2JqZWN0XG4gICAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuY29udGFpbmVyIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJbMF07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGwgcGx1Z2luIG11bHRpcGxlIHRpbWVzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBlbGVtZW50cyBzZWxlY3RlZFxuICAgICAgaWYgKGkgPiAxKSB7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAkKHRoaXMpLmVxKGkpLndvb2ttYXJrKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgd29va21hcmsgaW5zdGFuY2Ugb3IgdXBkYXRlIGFuIGV4aXN0aW5nIG9uZVxuICAgICAgICBpZiAoIXRoaXMud29va21hcmtJbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMud29va21hcmtJbnN0YW5jZSA9IG5ldyBXb29rbWFyayh0aGlzWzBdLCBvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndvb2ttYXJrSW5zdGFuY2UudXBkYXRlT3B0aW9ucyhvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIHdpbmRvdy5Xb29rbWFyayA9IFdvb2ttYXJrO1xuICByZXR1cm4gV29va21hcms7XG59KSk7XG5cbjsgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18odHlwZW9mIHdvb2ttYXJrICE9IFwidW5kZWZpbmVkXCIgPyB3b29rbWFyayA6IHdpbmRvdy53b29rbWFyayk7XG5cbn0pLmNhbGwoZ2xvYmFsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIGRlZmluZUV4cG9ydChleCkgeyBtb2R1bGUuZXhwb3J0cyA9IGV4OyB9KTtcbiJdfQ==
},{"/vagrant/public/themes/source_intranet/node_modules/jquery/dist/jquery.min.js":3}]},{},[1])