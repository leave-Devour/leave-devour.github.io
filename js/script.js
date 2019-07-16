/*(function($){
  // Search
  var html1 = ['<div class="wrap1" style="float:right;position:fixed;top:30px;right:20px;">',
        '<div class="cube">',
            '<div class="out_front">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTZzut.png" class="pic">',
            '</div>',
            '<div class="out_back">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTeVvn.png" class="pic">',
            '</div>',

            '<div class="out_left">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTmL6A.png" class="pic">',
            '</div>',

            '<div class="out_right">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTmv0P.png" class="pic">',
            '</div>',

            '<div class="out_top">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTnPpQ.png" class="pic">',
            '</div>',

            '<div class="out_bottom">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTnV00.png" class="pic">',
            '</div>',
 
         
            '<span class="in_front">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTnJ76.jpg" class="in_pic">',
            '</span>',
            '<span class="in_back">',
                 '<img src="https://s2.ax1x.com/2019/07/15/ZTnw1H.png" class="in_pic">',
            '</span>',
            '<span class="in_left">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTn0cd.png" class="in_pic">',
            '</span>',
            '<span class="in_right">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTnW9g.jpg" class="in_pic">',
            '</span>',
            '<span class="in_top">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTnIun.png" class="in_pic">',
            '</span>',
            '<span class="in_bottom">',
                '<img src="https://s2.ax1x.com/2019/07/15/ZTnoBq.jpg" class="in_pic">',
            '</span>',
        '</div>',
 
    '</div>','<canvas id="heart"></canvas>'].join('');
      var box1 = $(html1);
      $('body').append(box1);
      */

(function($){
  // Search
  var html1 = ['<div class="wrap1" style="float:right;position:fixed;top:30px;right:20px;">',
        '<div class="cube">',
            '<div class="out_front">',
                '<img src="https://leave-Devour.github.io/css/images/1.png" class="pic">',
            '</div>',
            '<div class="out_back">',
                '<img src="https://leave-Devour.github.io/css/images/2.png" class="pic">',
            '</div>',

            '<div class="out_left">',
                '<img src="https://leave-Devour.github.io/css/images/3.png" class="pic">',
            '</div>',

            '<div class="out_right">',
                '<img src="https://leave-Devour.github.io/css/images/4.png" class="pic">',
            '</div>',

            '<div class="out_top">',
                '<img src="https://leave-Devour.github.io/css/images/5.png" class="pic">',
            '</div>',

            '<div class="out_bottom">',
                '<img src="https://leave-Devour.github.io/css/images/6.png" class="pic">',
            '</div>',
 
         
            '<span class="in_front">',
                '<img src="https://leave-Devour.github.io/css/images/7.jpg" class="in_pic">',
            '</span>',
            '<span class="in_back">',
                 '<img src="https://leave-Devour.github.io/css/images/8.png" class="in_pic">',
            '</span>',
            '<span class="in_left">',
                '<img src="https://leave-Devour.github.io/css/images/9.png" class="in_pic">',
            '</span>',
            '<span class="in_right">',
                '<img src="https://leave-Devour.github.io/css/images/10.jpg" class="in_pic">',
            '</span>',
            '<span class="in_top">',
                '<img src="https://leave-Devour.github.io/css/images/11.png" class="in_pic">',
            '</span>',
            '<span class="in_bottom">',
                '<img src="https://leave-Devour.github.io/css/images/12.jpg" class="in_pic">',
            '</span>',
        '</div>',
    '</div>'].join('');
      var box1 = $(html1);
      $('body').append(box1);



var s = document.readyState;
if (s === 'complete' || s === 'loaded' || s === 'interactive') init();
else document.addEventListener('DOMContentLoaded', init, false);



  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
            '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
            '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
            '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
            '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });
})(jQuery);


!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);


