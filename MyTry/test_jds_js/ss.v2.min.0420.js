"use strict";
function _extends() {
  return (
    (_extends =
      // Object.assign(target, source) 結果為在target的基礎上接納source的所有數據，重複類型將以source爲準被覆蓋。
      Object.assign ||
      function (a) {
        for (var b, c = 1; c < arguments.length; c++)
          for (var d in ((b = arguments[c]), b))
            // Object.prototype.hasOwnProperty.call（） 返回布爾值，也就是後面括號内是否有值（有：ture/1; 無：false/0）
            Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        return a;
      }),
    // _extends.apply()   _extends繼承this的相關屬性（這裏是arguments）
    _extends.apply(this, arguments)  
  );
}
function _classCallCheck(a, b) {
  // instanceof 返回布爾值，用來檢驗b是否存在a的原型鏈上（即：b的結構是否完全等同於a）
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(a, b) {
  for (var c, d = 0; d < b.length; d++)
    (c = b[d]),
      (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      "value" in c && (c.writable = !0),
      // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
      // Object.defineProperty(a, c.key, c)  對象a的新屬性c.key的值為c
      Object.defineProperty(a, c.key, c);
}
function _createClass(a, b, c) {
  return (
    b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a
  );
}
function _defineProperty(a, b, c) {
  return (
    b in a
      ? Object.defineProperty(a, b, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[b] = c),
    a
  );
}
var SS = (function () {
  function a() {
    var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    _classCallCheck(this, a),
      _defineProperty(this, "V", "2.0.5"),
      _defineProperty(this, "W", parseInt($(window).width())),
      _defineProperty(
        this,
        "J",
        "  ____    ____\n /',__\\  /',__\\\n/\\__, `\\/\\__, `\\\n\\/\\____/\\/\\____/\n \\/___/  \\/___/"
      ),
      _defineProperty(this, "opt", {}),
      _defineProperty(this, "urlParams", {}),
      _defineProperty(this, "tileTime", null),
      (this.opt = _extends(
        {
          angaAnimaSpeed: 600,
          angaAnimaMoreY: 0,
          lazyOn: !1,
          tilePC: null,
          tileSP: null,
        },
        b
      )),
      (this.opt.angaAnimaSpeed = parseInt(this.opt.angaAnimaSpeed)),
      (this.opt.angaAnimaMoreY = parseInt(this.opt.angaAnimaMoreY)),
      isNaN(this.opt.angaAnimaMoreY) && (this.opt.angaAnimaMoreY = 0),
      this.init();
  }
  return (
    _createClass(a, [
      {
        key: "plus",
        value: function plus(a) {
          var b =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : "https://code.jquery.com/jquery-3.3.1.min.js";
          jQuery.getScript(b, function () {
            var b = $.noConflict(!0);
            (function (b) {
              a && a(b);
            })(b);
          });
        },
      },
      {
        key: "init",
        value: function init() {
          var a = this;
          this.getUrlAllParam(),
            this.tileRun(),
            this.lazy(),
            this.swiper(),
            this.coponSwitch(),
            this.searchBox(),
            this.angaAnima(),
            this.countDown(),
            this.couponPopUp(),
            this.detialPopUp(),
            this.entryPopUp(),
            this.mapPopUp(),
            this.seeMore(),
            this.switchMenu(),
            this.scrollUpDown(),
            this.popOver(),
            (window.onload = function () {
              a.initOnload();
            });
        },
      },
      {
        key: "initOnload",
        value: function initOnload() {
          this.tabBox(),
            this.showFix(),
            this.searchBoxOnload(),
            this.tabBoxClick(),
            this.angaLoad();
        },
      },
      {
        key: "getAttrSet",
        value: function getAttrSet(a, b, c, d, e) {
          var f = $(a).attr(b);
          return f
            ? (!0 == d && (f = "#" + f), !0 == e && (f = parseInt(f)), f)
            : c;
        },
      },
      {
        key: "getUrlParam",
        value: function getUrlParam(a) {
          var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
            c = window.location.search.substr(1).match(b);
          return null == c ? null : unescape(c[2]);
        },
      },
      {
        key: "getUrlAllParam",
        value: function getUrlAllParam() {
          var a = location.search,
            b = {};
          if (-1 != a.indexOf("?"))
            for (
              var c = a.substr(1), d = c.split("&"), e = 0;
              e < d.length;
              e++
            )
              b[d[e].split("=")[0]] = unescape(d[e].split("=")[1]);
          this.urlParams = b;
        },
      },
      {
        key: "tileAll",
        value: function tileAll(a, b) {
          var c = this;
          $(window).resize(function () {
            c.W = $(window).width();
          }),
            720 < this.W ? a && a() : b && b(),
            $(window).resize(function () {
              !1 !== c.tileTime && clearTimeout(c.tileTime),
                (c.tileTime = setTimeout(function () {}, 200));
            });
        },
      },
      {
        key: "tileRun",
        value: function tileRun() {
          this.tileAll(this.opt.tilePC, this.opt.tileSP);
        },
      },
      {
        key: "angaAnima",
        value: function angaAnima() {
          $(".ss-contents a[href^=#]")
            .not("#search-box a,a.ssPagetop")
            .Plugin_AngaAnima({
              animaSpeed: this.opt.angaAnimaSpeed,
              moreY: this.opt.angaAnimaMoreY,
            }),
            $(".ss-contents a.ssPagetop").Plugin_AngaAnima({
              animaSpeed: this.opt.angaAnimaSpeed,
              moreY: 0,
            });
        },
      },
      {
        key: "angaLoad",
        value: function angaLoad() {
          var a = "." + this.getUrlParam("anga");
          if (1 == $(a).length) {
            var b = this,
              c = parseInt($(a).offset().top);
            $("html, body")
              .not(":animated")
              .animate(
                { scrollTop: c - b.opt.angaAnimaMoreY },
                b.opt.angaAnimaSpeed,
                "swing",
                function () {}
              );
          }
        },
      },
      {
        key: "showFix",
        value: function showFix() {
          // 頁面裏存在.jss_showFix時，$(".jss_showFix").length 起碼大於等於1
          // (0 >= $(".jss_showFix").length)  就等於0
          // if（！0）  就等於 if（true) 因此進入if語句
          // 反之，沒有.jss_showFix時，直接跳過if語句
          if (!(0 >= $(".jss_showFix").length)) {
            var a = this;
            $(".jss_showFix").each(function (b) {
              // b是所有.jss_showFix的array，利用each的情況下，按順序從0起計
              // 因此，在存在多個.jss_showFix的頁面中，該語句可以分別為不同對象的.jss_showFix增加不同class名以便區別處理
              $(this).addClass("jss_showFix" + (b + 1)),
                $(".jss_showFix" + (b + 1)).Plugin_ShowFix({
                  fixY: "#" + $(this).attr("fixY"),
                  showOnly: a.getAttrSet(this, "showOnly", !1, !0),
                });
            });
          }
        },
      },
      {
        key: "countDown",
        value: function countDown() {
          function a() {
            (i = j.attr("endDate")),
              (d = "20" + i.slice(0, 2)),
              (e = i.slice(2, 4)),
              (f = i.slice(4, 6)),
              (g = i.slice(6, 8)),
              (h = i.slice(8, 10));
          }
          function b() {
            var b,
              a = Math.floor,
              d = new Date(),
              e = c.getTime() - d.getTime() + 0,
              f = a(e / 86400000);
            e -= 86400000 * f;
            var g = a(e / 3600000);
            e -= 3600000 * g;
            var h = a(e / 60000);
            e -= 60000 * h;
            var l = a(e / 1e3);
            e -= 1e3 * l;
            var m = a(e / 10);
            for (b = 0; 2 > b; b++) h = "0" + h;
            for (b = 0; 2 > b; b++) l = "0" + l;
            for (b = 0; 2 > b; b++) m = "0" + m;
            if (
              ((h = h.substring(h.length - 2, h.length)),
              (l = l.substring(l.length - 2, l.length)),
              (m = m.substring(m.length - 2, m.length)),
              0 <= c - d)
            ) {
              var w = f;
              10 > w && (w = "0" + w);
              var n = (w + "").slice(0, 1),
                o = (w + "").slice(1, 2),
                p = g;
              10 > p && (p = "0" + p);
              var q = (p + "").slice(0, 1),
                r = (p + "").slice(1, 2),
                s = h.slice(0, 1),
                t = h.slice(1, 2),
                u = l.slice(0, 1),
                v = l.slice(1, 2);
              j.html(
                '<span class="dayF day' +
                  n +
                  '">' +
                  n +
                  '\u65E5</span><span class="day' +
                  o +
                  '">' +
                  o +
                  '\u65E5</span><span class="hourA' +
                  q +
                  '">' +
                  q +
                  '</span><span class="hourB' +
                  r +
                  '">' +
                  r +
                  '\u6642</span><span class="minuteA' +
                  s +
                  '">' +
                  s +
                  '</span><span class="minuteB' +
                  t +
                  '">' +
                  t +
                  "\u5206</span>"
              );
            } else
              j.addClass("end"),
                (k = !0),
                j.empty(),
                j.append(
                  $("<img>").attr({
                    src:
                      "https://img.travel.rakuten.co.jp/special/supersale/201803/images/time/timeoverDH.gif",
                    alt: g,
                    width: 302,
                    height: 36,
                  })
                );
          }
          if (!(0 >= $(".jss_countDown").length)) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j = $("#countDownArea");
            a();
            var k = !1;
            (c = new Date(d, e - 1, f, g, h, 0)), b();
            var l = setInterval(function () {
              b(), k && clearInterval(l);
            }, 1e3);
          }
        },
      },
      {
        key: "couponPopUp",
        value: function couponPopUp() {
          if (!(0 >= $(".jss_couponPopUp").length)) {
            var a,
              b = this.W;
            $(".jss_couponPopUp").live("click", function () {
              var c = window.innerHeight,
                d = parseInt(c - 28) + "px";
              $("#cpDetail").empty();
              var e = $(this)
                .parent()
                .parent()
                .parent()
                .find(".detealbox")
                .clone();
              if (
                ($("#cpDetail").append(e),
                $(".popUpplanCP h2")
                  .children("span")
                  .text("\u30AF\u30FC\u30DD\u30F3\u8A73\u7D30\u6761\u4EF6"),
                $(".jss_black_cp").fadeIn(),
                setTimeout(function () {
                  var a =
                    $("#cpDetail").find(".detealbox.cp__acordion").height() + 5;
                  $(".popUpplanCP").height(a);
                }, 300),
                $(".popUpplanCP").fadeIn(300, function () {
                  a = $(window).scrollTop();
                }),
                720 > b)
              ) {
                $("#cpDetail").css("height", d);
                var f = $(this).parent().parent().parent();
                f.offset().top;
              }
            }),
              $(".jss_close_cp").live("click", function () {
                $(".jss_black_cp").fadeOut(),
                  $(".jss_popUp_cp").fadeOut(300, function () {
                    $("html").css({ paddingRight: "", overflow: "" }),
                      $("html,body").scrollTop(a);
                  });
              }),
              $(".jss_black_cp").live("click", function () {
                720 < b &&
                  ($(".jss_black_cp").fadeOut(),
                  $(".jss_popUp_cp").fadeOut(300, function () {
                    $("html").css({ paddingRight: "", overflow: "" }),
                      $("html,body").scrollTop(a);
                  }));
              });
          }
        },
      },
      {
        key: "detialPopUp",
        value: function detialPopUp() {
          if (!(0 >= $(".jss_detialPopUp").length)) {
            $(
              '\n        <div class="black jss_black_plan" style="display:none;"></div>\n        <div class="popUpplan jss_popUp_plan" style="display:none;">\n            <p id="popUpplan"></p>\n            <span class="close jss_close_plan">close</span>\n        </div>\n        '
            ).appendTo("body"),
              $(".jss_detialPopUp").Plugin_pickUpSwitch();
          }
        },
      },
      {
        key: "mapPopUp",
        value: function mapPopUp() {
          if (!(0 >= $(".jss_mapPopUp").length)) {
            $(
              '\n        <div class="black jss_black_plan" style="display:none;"></div>\n        <div class="popUpplan jss_popUp_plan mapPopUp" style="display:none;">\n            <p id="popUpplan"></p>\n            <span class="close jss_close_plan">close</span>\n        </div>\n        '
            ).appendTo("body"),
              (clickTop = $(window).scrollTop()),
              $("html").css({ "overflow-x": "hidden", top: -clickTop + "px" }),
              $(".jss_mapPopUp").Plugin_pickUpSwitch(),
              $(".black").click(function () {
                setTimeout(function () {
                  $(".popUpplanCP").fadeOut(), $(".popUpplan").fadeOut();
                }, 50);
              });
          }
        },
      },
      {
        key: "entryPopUp",
        value: function entryPopUp() {
          0 >= $(".jss_entryPopUp").length ||
            $(".jss_entryPopUp").each(function () {
              var a = this;
              $(a).click(function () {
                $(".popUpplanCP h2")
                  .children("span")
                  .text("\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u6982\u8981");
                var a = $(this).parents(".jss").find(".detealbox").html();
                (clickTop = $(window).scrollTop()),
                  setTimeout(function () {
                    $("#cpDetail").append(a), $(".popUpplanCP").fadeIn();
                  }, 300),
                  setTimeout(function () {
                    var a =
                      $("#cpDetail").find(".detealbox.cp__acordion").height() +
                      5;
                    $(".popUpplanCP").height(a);
                  }, 400),
                  $("#cpClosePC").click(function () {
                    setTimeout(function () {
                      $(".popUpplanCP").removeClass("entryPopUp"),
                        $("html,body").scrollTop(clickTop);
                    }, 10);
                  }),
                  $("#cpClose").click(function () {
                    setTimeout(function () {
                      $(".popUpplanCP").removeClass("entryPopUp"),
                        $("html,body").scrollTop(clickTop);
                    }, 300);
                  }),
                  $(".black").click(function () {
                    setTimeout(function () {
                      $(".popUpplanCP").removeClass("entryPopUp"),
                        $("html,body").scrollTop(clickTop);
                    }, 10);
                  }),
                  $(".jss_close_cp").live("click", function () {
                    $(".black").fadeOut(),
                      $(".popUpplanCP").fadeOut(),
                      $("html,body").scrollTop(clickTop);
                  });
              });
            });
        },
      },
      {
        key: "tabBox",
        value: function tabBox() {
          if (!(0 >= $(".jss_tab").length)) {
            var a = this;
            $(".jss_tab").each(function (b) {
              var c = $(this);
              $(this).addClass("jss_tab" + (b + 1));
              var d = "jss_tab" + b;
              if (
                (c.addClass("jss_tab" + (b + 1)),
                $(c).children(".swiper-container").length)
              )
                var e = $(c)
                    .find(".swiper-container")
                    .find(".jss_tabNav")
                    .find("li"),
                  f = $(c)
                    .children(".swiper-container")
                    .children(".jss_tabNavDown")
                    .find("li");
              else
                var e = $(c).find(".jss_tabNav").find("li"),
                  f = $(c).children(".jss_tabNavDown").find("li");
              if ($(c).children(".dp-container").length)
                var g = $(c).children(".dp-container").children(".jss_tabMain");
              else var g = $(c).children(".jss_tabMain");
              var h = a.getAttrSet(c, "fadeSpeed", 0, "", !0),
                i = a.getAttrSet(c, "show", 1, "", !0) - 1,
                j = a.getAttrSet(c, "sessionOn", !0);
              $(e).each(function (a) {
                $(this).click(function () {
                  $(e).removeClass("active"),
                    $(e).eq(a).addClass("active"),
                    (window.ActiveXObject ||
                      -1 != navigator.userAgent.indexOf("Firefox") ||
                      -1 != navigator.userAgent.indexOf("Chrome") ||
                      -1 != navigator.userAgent.indexOf("Safari")) &&
                      sessionStorage.setItem(d, a),
                    $(g).fadeOut(0),
                    $(g)
                      .eq(a)
                      .fadeIn(h, function () {}),
                    $(f).removeClass("active"),
                    $(f).eq(a).addClass("active");
                });
              }),
                window.ActiveXObject ||
                -1 != navigator.userAgent.indexOf("Firefox") ||
                -1 != navigator.userAgent.indexOf("Chrome") ||
                -1 != navigator.userAgent.indexOf("Safari")
                  ? parseInt(sessionStorage.getItem(d)) + 1 &&
                    "true" === j.toString()
                    ? ($(e).removeClass("active"),
                      $(e)
                        .eq(parseInt(sessionStorage.getItem(d)))
                        .addClass("active"),
                      $(g).hide(),
                      $(g)
                        .eq(parseInt(sessionStorage.getItem(d)))
                        .show(),
                      $(g)
                        .eq(parseInt(sessionStorage.getItem(d)))
                        .trigger("click"),
                      setTimeout(function () {
                        $(e)
                          .eq(parseInt(sessionStorage.getItem(d)))
                          .trigger("click");
                      }, 500))
                    : ($(e).removeClass("active"),
                      $(e).eq(i).addClass("active"),
                      $(e).eq(i).trigger("click"),
                      $(g).hide(),
                      $(g).eq(i).show(),
                      setTimeout(function () {
                        $(e)
                          .eq(parseInt(sessionStorage.getItem(d)))
                          .trigger("click");
                      }, 500))
                  : ($(e).removeClass("active"),
                    $(e).eq(i).addClass("active"),
                    $(e).eq(i).trigger("click"),
                    $(g).hide(),
                    $(g).eq(i).show());
            });
          }
        },
      },
      {
        key: "tabBoxClick",
        value: function tabBoxClick() {
          var a = this.urlParams,
            b = Object.keys(a);
          if (b.length)
            for (var c in a)
              c.startsWith("jss_tab") &&
                $("." + c)
                  .find(".jss_tabNav li")
                  .eq(a[c])
                  .trigger("click");
        },
      },
      {
        key: "seeMore",
        value: function seeMore() {
          0 >= $(".jss_seeMore").length ||
            $(".jss_seeMore").each(function () {
              var a = this,
                b = $(this).text(),
                c = $(this).attr("openText")
                  ? $(this).attr("openText")
                  : "\u9589\u3058\u308B";
              $(a).click(function () {
                return (
                  $(a).parent().toggleClass("active"),
                  $(this).parent().hasClass("active")
                    ? $(this).text(c)
                    : $(this).text(b),
                  !1
                );
              });
            });
        },
      },
      {
        key: "switchMenu",
        value: function switchMenu() {
          0 >= $(".jss_switchMenu").length ||
            ($(".jss_switchMenu").each(function () {
              var a = this;
              $(a).click(function () {
                $(a).toggleClass("active");
              }),
                $(a)
                  .find("a")
                  .click(function () {
                    $(a).toggleClass("active");
                  });
            }),
            $(document).click(function (a) {
              var b = $(".jss_switchMenu,.jss_switchMenu ul");
              b.is(a.target) ||
                0 !== b.has(a.target).length ||
                $(".jss_switchMenu").removeClass("active");
            }));
        },
      },
      {
        key: "swiperSlideTo",
        value: function swiperSlideTo() {
          var a = this.urlParams,
            b = Object.keys(a);
          if (b.length)
            for (var c in a)
              c.startsWith("jss_swiper") && $("." + c).attr("slideTo", a[c]);
        },
      },
      {
        key: "swiper",
        value: function swiper() {
          var a = this;
          0 >= $(".jss_swiper").length ||
            ($("<link>")
              .attr({
                rel: "stylesheet",
                type: "text/css",
                href:
                  "https://img.travel.rakuten.co.jp/special/supersale/201706/css/swiper.min.css",
              })
              .appendTo("head"),
            $(".jss_swiper").Plugin_LoadJS({
              about: "swiper.min.js",
              url: [
                "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js",
              ],
              successDo: function successDo() {
                var b = a;
                if (
                  ($(".jss_swiper").each(function (a) {
                    var c = "jss_swiper" + (a + 1),
                      d = "jss_swiper" + (a + 1);
                    $(this).addClass(d),
                      (d = ".jss_swiper" + (a + 1)),
                      b.swiperSlideTo();
                    var e = b.getAttrSet(this, "swiperSetup", "");
                    e = $.parseJSON(e.replace(/'/g, '"'));
                    var c = new Swiper($(d), e);
                    $(d).attr("slideTo") &&
                      c.slideTo(parseInt($(d).attr("slideTo")));
                  }),
                  $(".OSUSUME ").length)
                ) {
                  var c = new Swiper(".OSUSUME .swiper-container.swiper-nav", {
                      pagination: ".swiper-pagination-display",
                      initialSlide: 0,
                      slidesPerView: "auto",
                      spaceBetween: 10,
                      loop: !0,
                      loopedSlides: $(
                        ".OSUSUME .swiper-container.swiper-nav .swiper-slide"
                      ).size(),
                      loopAdditionalSlides: 3,
                      observer: !0,
                      observeParents: !0,
                    }),
                    d = new Swiper(
                      ".OSUSUME .swiper-container.swiper-display.pc",
                      {
                        pagination: ".swiper-pagination-display.pc",
                        paginationClickable: !0,
                        initialSlide: 0,
                        spaceBetween: 10,
                        prevButton: ".swiper-prev-btn.pc",
                        nextButton: ".swiper-next-btn.pc",
                        loop: !0,
                        observer: !0,
                        observeParents: !0,
                      }
                    ),
                    e = new Swiper(
                      ".OSUSUME .swiper-container.swiper-display.sp",
                      {
                        initialSlide: 0,
                        slidesPerView: 2,
                        centeredSlides: !0,
                        spaceBetween: 15,
                        prevButton: ".swiper-prev-btn",
                        nextButton: ".swiper-next-btn",
                        loop: !0,
                        loopedSlides: $(
                          ".OSUSUME .swiper-container.swiper-display.sp .swiper-slide"
                        ).size(),
                        setWrapperSize: !0,
                        observer: !0,
                        observeParents: !0,
                      }
                    );
                  (e.params.control = c), (c.params.control = e);
                  var f = function (a, b) {
                      $(a).css({
                        webkitTransform: "scale(" + b + ")",
                        mozTransform: "scale(" + b + ")",
                        oTransform: "scale(" + b + ")",
                        msTransform: "scale(" + b + ")",
                        transform: "scale(" + b + ")",
                      });
                    },
                    g = function () {
                      var a = 0.7 * window.outerWidth,
                        b = $(
                          ".OSUSUME .swiper-container.swiper-display.sp .swiper-slide"
                        ).width(),
                        c = e.slides.height(),
                        d = a / b,
                        g = 100 / b;
                      return (
                        f(
                          ".OSUSUME .swiper-container.swiper-display.sp .swiper-slide",
                          g
                        ),
                        f(
                          ".OSUSUME .swiper-container.swiper-display.sp .swiper-slide-active",
                          d
                        ),
                        $(".OSUSUME .outer-swiper").css({
                          height: c * d + "px",
                          "padding-top": (+c * (d - 1)) / 2 + "px",
                        }),
                        {
                          win_wid: a,
                          s_wid: b,
                          s_hgt: c,
                          s_tscale: d,
                          s_tscale_o: g,
                        }
                      );
                    },
                    h = g();
                  c.on("click", function (a) {
                    setTimeout(function () {
                      var b = a.clickedIndex - a.loopedSlides;
                      0 > b && (b = a.clickedIndex), e.slideTo(b, 100);
                    }, 0);
                  }),
                    e.on("slideChangeStart", function () {
                      setTimeout(function () {
                        f(".swiper-display.sp .swiper-slide", h.s_tscale_o),
                          f(
                            ".swiper-display.sp .swiper-slide-active",
                            h.s_tscale
                          );
                      }, 0);
                    }),
                    e.on("slideChangeEnd", function () {
                      setTimeout(function () {
                        f(".swiper-display.sp .swiper-slide", h.s_tscale_o),
                          f(
                            ".swiper-display.sp .swiper-slide-active",
                            h.s_tscale
                          );
                      }, 0);
                    }),
                    e.on("click", function (a) {
                      setTimeout(function () {
                        var b = a.clickedIndex - a.loopedSlides;
                        0 > b && (b = a.clickedIndex), e.slideTo(indexer, 100);
                      }, 0);
                    });
                }
                720 > b.W &&
                  $(".jss_swiper_sp").each(function (a) {
                    var b = "jss_swiper_sp" + (a + 1),
                      c = "jss_swiper_sp" + (a + 1);
                    $(this).addClass(c), (c = ".jss_swiper_sp" + (a + 1));
                    var b = new Swiper($(c), {
                      slidesPerView: "auto",
                      spaceBetween: 0,
                      freeMode: !0,
                      scrollbar: ".swiper-scrollbarSP",
                      scrollbarHide: !0,
                    });
                  });
              },
            }));
        },
      },
      {
        key: "coponSwitch",
        value: function coponSwitch() {
          if (
            !(
              0 >= $(".jss_coponSwitch").length && 0 >= $(".cp__trigger").length
            )
          ) {
            var a = this;
            $(".jss_coponSwitch").each(function (b) {
              $(this).addClass("jss_coponSwitch" + (b + 1)),
                $(".jss_coponSwitch" + (b + 1)).Plugin_CoponSwitch(
                  { speed: a.getAttrSet($(this), "speed", "fast", "", !0) },
                  a
                );
            });
          }
        },
      },
      {
        key: "searchBox",
        value: function searchBox() {
          0 >= $("#search-box").length ||
            $(".jss_searchBox li .schTb").click(function () {
              var a = $(this).parents(".jss_searchBox").attr("index"),
                b = $(this).parent("li").attr("fm"),
                c = "#" + $(this).parent("li").attr("fm");
              $(c).trigger("click"),
                $(this)
                  .parent("li")
                  .parent(".jss_searchBox")
                  .find("li")
                  .removeClass("on"),
                $(this).parent("li").addClass("on"),
                (window.ActiveXObject ||
                  -1 != navigator.userAgent.indexOf("Firefox") ||
                  -1 != navigator.userAgent.indexOf("Chrome") ||
                  -1 != navigator.userAgent.indexOf("Safari")) &&
                  (sessionStorage.setItem("search_tab_session", a),
                  sessionStorage.setItem("search_radio_session", b));
            });
        },
      },
      {
        key: "searchBoxOnload",
        value: function searchBoxOnload() {
          if (!(0 >= $("#search-box").length)) {
            var a = $("#search-box").attr("sessionOn");
            a &&
              (window.ActiveXObject ||
                -1 != navigator.userAgent.indexOf("Firefox") ||
                -1 != navigator.userAgent.indexOf("Chrome") ||
                -1 != navigator.userAgent.indexOf("Safari")) &&
              ($(".jss_searchSwitch li a")
                .eq(parseInt(sessionStorage.getItem("search_tab_session")))
                .trigger("click"),
              ("oa-radio" == sessionStorage.getItem("search_radio_session") ||
                "oap-radio" ==
                  sessionStorage.getItem("search_radio_session")) &&
                $("#oh-search-form").hide(),
              720 < this.W
                ? $(
                    ".jss_searchBox li[fm=".concat(
                      sessionStorage.getItem("search_radio_session"),
                      "] .schTb"
                    )
                  ).trigger("click")
                : $(
                    ".jss_searchBox li[fm=".concat(
                      sessionStorage.getItem("search_radio_session"),
                      "] .schTb"
                    )
                  ).trigger("click"));
          }
        },
      },
      {
        key: "scrollUpDown",
        value: function scrollUpDown() {
          if (!(0 >= $(".jss_scrollUpDown").length)) {
            var a = 0,
              b = $(".jss_scrollUpDown"),
              c = $("#" + $(b).attr("scrollY")).offset().top;
            $(window).scroll(function () {
              var d = $(this).scrollTop();
              d > a
                ? $(window).scrollTop() >= c && $(b).removeClass("active2")
                : $(window).scrollTop() <= c
                ? $(b).removeClass("active2")
                : $(b).addClass("active2"),
                (a = d);
            });
          }
        },
      },
      {
        key: "popOver",
        value: function popOver() {
          if (!(0 >= $(".jss_popOver").length)) {
            var a = this;
            if (
              ($(".jss_popOver").each(function () {
                var b = this,
                  c = $(b).find(".jss_popOverInfo");
                720 < a.W
                  ? $(b).hover(
                      function () {
                        $(c).addClass("active");
                      },
                      function () {
                        $(c).removeClass("active");
                      }
                    )
                  : ($(b)
                      .find(".details")
                      .click(function () {
                        $(".jss_popOverInfo").not(c).removeClass("active");
                        var a = $(b).find(".price-info").innerHeight() + 8;
                        $(b)
                          .find(".price-info")
                          .css("top", -a + "px"),
                          $(c).toggleClass("active");
                      }),
                    $(document).click(function (a) {
                      var b = $(".jss_popOverInfo,.jss_popOver");
                      b.is(a.target) ||
                        0 !== b.has(a.target).length ||
                        $(".jss_popOverInfo").removeClass("active");
                    })),
                  $(b).click(function () {
                    return !1;
                  });
              }),
              !(0 >= $(".jss_popOverS").length))
            ) {
              var b = $(".jss_popOverS .squeeze li:first"),
                c = $(".jss_popOverS").next(".jss_popOverInfoS");
              720 < a.W
                ? ($(b).hover(
                    function () {
                      $(c).addClass("active");
                    },
                    function () {
                      $(c).removeClass("active");
                    }
                  ),
                  $(c).hover(
                    function () {
                      $(c).addClass("active");
                    },
                    function () {
                      $(c).removeClass("active");
                    }
                  ))
                : ($("#rdoTeikei1").click(function () {
                    $(c).addClass("active");
                  }),
                  $("#rdoTeikei5").click(function () {
                    $(c).removeClass("active");
                  }),
                  $(document).click(function (a) {
                    var b = $(".jss_popOverInfo,.jss_popOver");
                    b.is(a.target) ||
                      0 !== b.has(a.target).length ||
                      $(".jss_popOverInfo").removeClass("active");
                  }));
            }
          }
        },
      },
      {
        key: "lazy",
        value: function lazy() {
          this.opt.lazyOn &&
            $("body").Plugin_LoadJS({
              about: "jquery.lazyload.js",
              url: ["https://appelsiini.net/js/lazyload.min.js"],
              successDo: function successDo() {
                $("img.lazy").each(function () {
                  $(this).attr("data-src", $(this).attr("src")),
                    $(this).attr(
                      "src",
                      "data:image/gif;base64,R0lGODlhLAHhAPcCAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNjczODY5REU3N0IxMUU2QTNDRUI4MjBDODUxOUEyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNjczODY5RUU3N0IxMUU2QTNDRUI4MjBDODUxOUEyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM2NzM4NjlCRTc3QjExRTZBM0NFQjgyMEM4NTE5QTJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM2NzM4NjlDRTc3QjExRTZBM0NFQjgyMEM4NTE5QTJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAgAsAAAAACwB4QAACP8ABQgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4uvH0++vPnz6NOrX8++vfv38OPLn0+/vv37+PPr38+/v///AAYo4IAEFmjggQgmqOCCDDbo4IMQRijhhBRWaOGFGGao4YYcdujhhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABinkkEQWaeSRSCap5JJMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5pQBAQA7"
                    );
                }),
                  $("img.lazy").lazyload({
                    effect_speed: 800,
                    effectspeed: 800,
                  });
              },
            });
        },
      },
    ]),
    a
  );
})();
(function (a) {
  a.fn.tile = function (b) {
    var d,
      e,
      f,
      g,
      i,
      j = this.length - 1;
    return (
      b || (b = this.length),
      this.each(function () {
        (i = this.style),
          i.removeProperty && i.removeProperty("height"),
          i.removeAttribute && i.removeAttribute("height");
      }),
      this.each(function (c) {
        (f = c % b),  // 取模，判斷是一行裏的第幾位或者整體裏的第幾位
          0 == f && (d = []),  // 爲零，該行到此爲止，給到當前行高度后高度清零，後續另外存高度；不爲零，則繼續給當前高度    另外定義d數組
          (d[f] = a(this)),  // 將本體全部付給d數組
          (g = d[f].height()),  // 把當前對象高度付給g
          (0 == f || g > e) && (e = g),  // 判斷是不是到此爲止，或者是不是當前對象高度大於前對象高度，同時把當前對象高度保存到前次對象高度裏
          (c == j || f == b - 1) &&  // 判斷是不是到最後一個對象了，或者是不是到限制行最後一個對象了
            a.each(d, function () {  // d數組循環取最高值
              this.height(e);  // 付最高值
            });
      })
    );
  };
})(jQuery),
  (function (a) {
    var b = function (b, c) {
      (this.$ele = b),
        (this.defaults = {
          animaSpeed: 600,
          moreY: 0,
          moreDo: function moreDo() {},
        }),
        (this.options = a.extend({}, this.defaults, c));
    };
    (b.prototype = {
      AngaAnimaMe: function AngaAnimaMe() {
        var b,
          c,
          d = this;
        d.$ele.click(function () {
          if (((b = a(this).attr("href")), 0 < a(b).length))
            return (
              (c = parseInt(a(b).offset().top)),
              a("html, body")
                .not(":animated")
                .animate(
                  { scrollTop: c - d.options.moreY },
                  d.options.animaSpeed,
                  "swing",
                  function () {}
                ),
              "#search-box" == b &&
                (a("#searchTitle").addClass("close"),
                a("#searchTitle").removeClass("open"),
                a("#search-box-body").slideDown()),
              !1
            );
        });
      },
    }),
      (a.fn.Plugin_AngaAnima = function (a) {
        var c = new b(this, a);
        c.AngaAnimaMe();
      });
  })(jQuery),
  (function (a) {
    var b = function (b, c) {
      (this.ele = b),
        (this.defaults = {
          about: "",
          url: [],
          successDo: function successDo() {},
        }),
        (this.options = a.extend({}, this.defaults, c));
    };
    (b.prototype = {
      LoadJSDo: function LoadJSDo() {
        var b = this;
        if (a(this.ele.selector).length && this.options.url.length)
          for (var c in this.options.url)
            a.getScript(this.options.url[c], function () {
              b.LoadJSDoMore();
            });
      },
      LoadJSDoMore: function LoadJSDoMore() {
        this.options.successDo();
      },
    }),
      (a.fn.Plugin_LoadJS = function (a) {
        var c = new b(this, a);
        c.LoadJSDo();
      });
  })(jQuery),
  (function (a) {
    var b = function (b, c) {
      (this.$ele = b),
        (this.timer = null),
        (this._rt = ".rt-header"),
        (this.defaults = {
          fixY: "body",
          showSpeed: 300,
          showOnly: !1,
          moreDO: function moreDO() {},
        }),
        (this.options = a.extend({}, this.defaults, c));
    };
    (b.prototype = {
      scrollMe: function scrollMe() {
        // 判斷是否存在length意味著判斷是否執行語句
        // && 后則直接為執行對象賦（初始）值, 本代碼中賦予對象在當前窗口所在高度值
        // 這是縮略寫法，這裏的&&用法并不是希望左右兩邊都符合條件的用法
        0 < a(this.options.fixY).length &&
          ((this._fixY = a(this.options.fixY).offset().top),
          // 這裏的a指代對象所在當前窗口，因此a(document)就是window
          // a(document).scrollTop()即當前窗口的滾動條位置
          a(document).scrollTop() > this._fixY
            // 這裏開始是儅 a(document).scrollTop() > this._fixY 為true的情況下執行的語句
            ? (this.$ele.addClass("active"),
              // is(":hidden") 判斷是否為隱藏屬性對象
              a(this.$ele).is(":hidden")
              // fadeIn 儅對象隱藏前提下開啓淡入效果，括號内為透明度由0到1的時長，按毫秒記
                ? this.$ele.fadeIn(this.options.showSpeed)
                : this.$ele.fadeIn(0))
            // 這裏開始是儅 a(document).scrollTop() > this._fixY 為false的情況下執行的語句
            : (this.$ele.removeClass("active"),
              a(this.$ele).is(":hidden")
              // fadeOut 儅對象顯示前提下開啓淡出效果，括號内為透明度由1到0的時長，按毫秒記
                ? this.$ele.fadeOut(0)
                : this.$ele.fadeOut(this.options.showSpeed)));


        0 < a(this.options.showOnly).length &&
          (a(document).scrollTop() + a(window).height() >
          a(this.options.showOnly).offset().top +
            a(this.options.showOnly).height()
            ? (this.$ele.addClass("active2"),
              this.$ele.css({ position: "absolute" }))
            : (this.$ele.removeClass("active2"),
              this.$ele.css({ position: "fixed" })));
      },
      windowScroll: function windowScroll() {
        this.$ele.hide();
        var b = this;
        b.scrollMe(this.$ele);
        a(window).width();
        b.scrollMe(b.$ele),
          a(window).scroll(function () {
            b.scrollMe(b.$ele);
          });
      },
    }),
      (a.fn.Plugin_ShowFix = function (a) {
        var c = new b(this, a);
        return c.windowScroll(), this;
      });
  })(jQuery),
  (function (a) {
    var b = function (a) {
      this.$ele = a;
    };
    (b.prototype = {
      pickUpSwitchCore: function pickUpSwitchCore() {
        var b,
          c = this,
          d = null;
        a(this.$ele).each(function () {
          var c = a("#popUpplan");
          0 < c.length && a("#popUpplan").empty();
          a(this).click(function () {
            (d = a(this).attr("addClass")),
              d ? a(".jss_popUp_plan").addClass(d) : null;
            var e = a(this).next(".details").html();
            if (0 < c.length) {
              a("#popUpplan").html(e),
                a(".jss_popUp_plan").fadeIn(300, function () {
                  b = a(window).scrollTop();
                }),
                a(".jss_black_plan").fadeIn();
              var f = a(window).scrollTop(),
                g = a("#popUpplan").height() + 50,
                h = a(window).height();
              a(".jss_popUp_plan").css({ top: 0.5 * (h - g) + "px" });
            }
            return !1;
          }),
            a(".jss_close_plan").live("click", function () {
              a(".jss_black_plan").fadeOut(),
                a(".jss_popUp_plan").fadeOut(300, function () {
                  d ? a(".jss_popUp_plan").removeClass(d) : null,
                    a("html,body").scrollTop(b);
                });
            }),
            a(".jss_black_plan").live("click", function () {
              a(".jss_black_plan").fadeOut(),
                a(".jss_popUp_plan").fadeOut(200, function () {
                  d ? a(".jss_popUp_plan").removeClass(d) : null,
                    a("html,body").scrollTop(b);
                });
            });
        });
      },
    }),
      (a.fn.Plugin_pickUpSwitch = function (a) {
        var c = new b(this, a);
        c.pickUpSwitchCore();
      });
  })(jQuery),
  (function (a) {
    var b = function (b, c, d) {
      (this.$ele = b),
        (this.defaults = { speed: "fast" }),
        (this.options = a.extend({}, this.defaults, c)),
        (this.root = d);
    };
    (b.prototype = {
      coponSwitchCore: function coponSwitchCore() {
        var b = this;
        a(this.$ele).each(function () {
          var c = b.options.speed;
          0 > a(this).attr("class").indexOf("active-submenu") &&
            a(this).next().hide();
          a(this).click(function () {
            a(this).next().is(":hidden")
              ? (a(this).addClass("active-submenu"),
                a(this)
                  .next()
                  .slideDown(c, function () {}))
              : (a(this).removeClass("active-submenu"),
                a(this)
                  .next()
                  .slideUp(c, function () {}));
          });
        });
      },
    }),
      (a.fn.Plugin_CoponSwitch = function (a, c) {
        var d = new b(this, a, c);
        d.coponSwitchCore();
      });
  })(jQuery),
  $(document).ready(function () {
    $(".chkThreeFour").click(function () {
      "on" == $(this).val()
        ? ($(".chkThreeFour").attr("checked", !1), $(".chkThreeFour").val(""))
        : ($(".chkThreeFour").attr("checked", !1),
          $(".chkThreeFour").val(""),
          $(this).val("on"),
          $(this).attr("checked", !0));
    }),
      $(".chkDayTime").click(function () {
        "on" == $(this).val()
          ? ($(".chkDayTime").attr("checked", !1), $(".chkDayTime").val(""))
          : ($(".chkDayTime").attr("checked", !1),
            $(".chkDayTime").val(""),
            $(this).val("on"),
            $(this).attr("checked", !0));
      }),
      $("#busCdt3").click(function () {
        var a = $(this).attr("checked");
        !0 == a ? $(this).val("on") : $(this).val("");
      }),
      $("#busCdt4").click(function () {
        var a = $(this).attr("checked");
        !0 == a ? $(this).val("on") : $(this).val("");
      }),
      $("#busCdt5").click(function () {
        var a = $(this).attr("checked");
        !0 == a ? $(this).val("on") : $(this).val("");
      }),
      $("li[fm=bus-radioKanko]").live("click", function () {
        $('.searchSelectCar input[type="checkbox"]')
          .attr("checked", !1)
          .val("");
      });
  });
var spSearchSetBUS = {
  init: function init() {
    $('#db-dpt option[value=""]').eq(0).text("\u51FA\u767A\u5730\u9078\u629E"),
      $('#db-arv option[value=""]')
        .eq(0)
        .text("\u5230\u7740\u5730\u9078\u629E");
  },
};
$("#db-radio").live("click", function () {
  setTimeout(function () {
    spSearchSetBUS.init();
  }, 300);
}),
  $("#db-dpt").click(function () {
    setTimeout(function () {
      spSearchSetBUS.init();
    }, 600);
  }),
  $("#db-arv").click(function () {
    setTimeout(function () {
      spSearchSetBUS.init();
    }, 600);
  });
