(function (window) {
  "use strict";
  var BN = (window.BN = window.BN || {});
  BN.lang = BN.lang || {};
  BN.lang.locales = {
    base: {
      domain: "www.panidersattel.com",
      ehotelier_id: "42",
      offerdetail_id: "74",
      request_id: "54",
      booking_id: "55",
      stationData: "1",
      hotel_name: "Hotel Pinei ****",
      family_name: "Mahlknecht",
      vat: "IT02225790217",
      tel: "+39 0471 700009",
      fax: "+39 0471 700039",
      mail: "info@panidersattel.com",
      street: "St. Michael 37/1",
      street2: "San Michele, 37/1",
      street3: "San Michele, 37/1",
      zip: "I-39040",
      city: "Kastelruth (BZ)",
      city2: "Castelrotto (BZ)",
      city3: "Castelrotto (BZ)",
      region: "Südtirol",
      region2: "Alto Adige",
      region3: "South Tyrol",
      state: "Italien",
      state2: "Italia",
      state3: "Italy",
      face: "",
      size: "",
      color: "",
      color1: "",
      color2: "",
      properties: "",
      baseurl: "https://{$domain}/",
      mfp_wrapper: "mfp-gallery",
      mfp_class: "mfp-item",
      copyright:
        "2016 | Brandnamic GmbH | Hotel & Destination Marketing | HG SR PS JM KG",
    },
    it: {
      sys_language_uid: "1",
      language: "it",
      locale_all: "it_IT",
      author: "",
      keywords: "",
      family: "Famiglia",
      vat_name: "IVA",
      request: "richiedi",
      call: "chiamare",
      request_room: "Richiedete ora senza impegno",
      booking: "prenota",
      phone: "Telefono",
      email: "Email",
      web: "Sito web",
      back: "indietro",
      next: "avanti",
      price: "prezzo",
      from: "a partire da",
      more: "avanti",
      description: "descrizione",
      room: "Stanza",
      nights: "notti",
      days: "giorni",
      period: "periodi",
      open: "apri",
      close: "chiudi",
      price_day: "Euro/persona e giorno",
      price_day2: "per persona al giorno",
      price_week: "da 7 giorni",
      incl: "incl.",
      no_offers: "Al momento non ci sono pacchetti disponibili.",
      offer: "Offerta:",
      select_offer: "offerta selezionata:",
      remove: "rimuovi",
      no_news: "Purtroppo non ci sono novità al momento.",
      news: "Novità",
      no_service: "Al momento non ci sono servizi disponibili.",
      no_weather:
        "I dettagli meteo aggiornati sono disponibili dalle ore 11.00.",
      weather_forecast_today: "Previsione per oggi",
      weather_forecast_tomorrow: "Previsione per domani",
      weather_next_days: "Previsione",
      weather_general_conditions: "Situazione meteo",
      weather_today: "Previsione per oggi",
      weather_tomorrow: "Previsione per domani",
      weather_service_southtyrol: "Servizio meteo provinciale Alto Adige",
      weather_link_service_southtyrol:
        "http://www.provincia.bz.it/meteo/home.asp",
      room_description: "Visualizza descrizione camera",
      free: "gratuito",
      per_day: "al giorno",
      street: "{$street2}",
      city: "{$city2}",
      region: "{$region2}",
      state: "{$state2}",
      uc_privacy_text: "Impostazioni privacy",
      price_on_request: "Prezzo su richiesta",
    },
    de: {
      sys_language_uid: "0",
      language: "de",
      locale_all: "de_DE",
      author: "",
      keywords: "",
      family: "Familie",
      vat_name: "MwSt.Nr",
      request: "Anfragen",
      call: "Anrufen",
      request_room: "Jetzt unverbindlich anfragen",
      booking: "Buchen",
      phone: "Telefon",
      email: "Email",
      web: "Webseite",
      back: "zurück",
      next: "weiter",
      price: "Preise",
      from: "ab",
      more: "mehr",
      description: "Beschreibung",
      room: "Zimmer",
      nights: "Nächte",
      days: "Tage",
      period: "Zeitraum",
      open: "öffnen",
      close: "schließem",
      price_day: "Euro/Person und Tag",
      price_day2: "pro Person und Tag",
      price_week: "ab 7 Tage",
      incl: "inkl.",
      no_offers: "Derzeit sind keine Angebote verfügbar.",
      offer: "Angebot:",
      select_offer: "Ausgewähltes Angebot:",
      remove: "entfernen",
      no_news: "Derzeit sind keine News verfügbar.",
      news: "Neuigkeiten",
      no_service: "Derzeit sind keine Leistungen verfügbar.",
      no_weather: "Aktuelle Wetterdaten sind erst ab 11:00 Uhr verfügbar.",
      weather_forecast_today: "Vorhersage für heute",
      weather_forecast_tomorrow: "Vorhersage für morgen",
      weather_next_days: "Vorschau auf die nächsten Tage",
      weather_general_conditions: "Allgemeine Wetterlage",
      weather_today: "Das Wetter heute",
      weather_tomorrow: "Das Wetter morgen",
      weather_service_southtyrol: "Landeswetterdienst Südtirol",
      weather_link_service_southtyrol:
        "http://www.provinz.bz.it/wetter/home.asp",
      room_description: "Zimmerbeschreibung anzeigen",
      free: "Kostenlos",
      per_day: "pro Tag",
      uc_privacy_text: "Datenschutz-Einstellungen",
      price_on_request: "Preis auf Anfrage",
    },
    en: {
      sys_language_uid: "2",
      language: "en",
      locale_all: "en_GB",
      author: "",
      keywords: "",
      family: "Family",
      vat_name: "VAT.No.",
      request: "request",
      call: "call",
      request_room: "Send us a non-binding enquiry",
      booking: "booking",
      phone: "Phone",
      email: "Email",
      web: "Website",
      back: "back",
      next: "next",
      price: "Price",
      from: "from",
      more: "more",
      description: "description",
      room: "Room",
      nights: "nights",
      days: "days",
      period: "period",
      open: "open",
      close: "close",
      price_day: "Euro/person and day",
      price_day2: "per person and day",
      price_week: "from 7 days",
      incl: "incl.",
      no_offers: "Currently there are no packages available.",
      offer: "Offer:",
      select_offer: "selected offer:",
      remove: "remove",
      no_news: "Unfortunately there are no news at the moment.",
      news: "News",
      no_service:
        "Currently there are no services available. = Currently there are no services available.",
      no_weather: "Current meteorological data is available from 11:00 AM.",
      weather_forecast_today: "The weather today",
      weather_forecast_tomorrow: "The weather tomorrow",
      weather_next_days: "Prevision",
      weather_general_conditions: "Weather situation",
      weather_today: "The weather today",
      weather_tomorrow: "The weather tomorrow",
      weather_service_southtyrol: "Landeswetterdienst South Tyrol",
      weather_link_service_southtyrol:
        "http://www.provinz.bz.it/wetter/home.asp",
      room_description: "Show room description",
      free: "free",
      per_day: "per day",
      street: "{$street3}",
      city: "{$city3}",
      region: "{$region3}",
      state: "{$state3}",
      uc_privacy_text: "Privacy settings",
      price_on_request: "Price on request",
    },
  };
})(window);
(function (name, context, factory) {
  var matchMedia = window.matchMedia;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(matchMedia);
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return (context[name] = factory(matchMedia));
    });
  } else context[name] = factory(matchMedia);
})("enquire", this, function (matchMedia) {
  "use strict";
  function each(collection, fn) {
    var i = 0,
      length = collection.length,
      cont;
    for (i; i < length; i++) {
      cont = fn(collection[i], i);
      if (cont === false) break;
    }
  }
  function isArray(target) {
    return Object.prototype.toString.apply(target) === "[object Array]";
  }
  function isFunction(target) {
    return typeof target === "function";
  }
  function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
  }
  QueryHandler.prototype = {
    setup: function () {
      if (this.options.setup) this.options.setup();
      this.initialised = true;
    },
    on: function () {
      !this.initialised && this.setup();
      this.options.match && this.options.match();
    },
    off: function () {
      this.options.unmatch && this.options.unmatch();
    },
    destroy: function () {
      this.options.destroy ? this.options.destroy() : this.off();
    },
    equals: function (target) {
      return this.options === target || this.options.match === target;
    },
  };
  function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = matchMedia(query);
    var self = this;
    this.listener = function (mql) {
      self.mql = mql;
      self.assess();
    };
    this.mql.addListener(this.listener);
  }
  MediaQuery.prototype = {
    addHandler: function (handler) {
      var qh = new QueryHandler(handler);
      this.handlers.push(qh);
      this.matches() && qh.on();
    },
    removeHandler: function (handler) {
      var handlers = this.handlers;
      each(handlers, function (h, i) {
        if (h.equals(handler)) {
          h.destroy();
          return !handlers.splice(i, 1);
        }
      });
    },
    matches: function () {
      return this.mql.matches || this.isUnconditional;
    },
    clear: function () {
      each(this.handlers, function (handler) {
        handler.destroy();
      });
      this.mql.removeListener(this.listener);
      this.handlers.length = 0;
    },
    assess: function () {
      var action = this.matches() ? "on" : "off";
      each(this.handlers, function (handler) {
        handler[action]();
      });
    },
  };
  function MediaQueryDispatch() {
    if (!matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    this.queries = {};
    this.browserIsIncapable = !matchMedia("only all").matches;
  }
  MediaQueryDispatch.prototype = {
    register: function (q, options, shouldDegrade) {
      var queries = this.queries,
        isUnconditional = shouldDegrade && this.browserIsIncapable;
      if (!queries[q]) queries[q] = new MediaQuery(q, isUnconditional);
      if (isFunction(options))
        options = {
          match: options,
        };
      if (!isArray(options)) options = [options];
      each(options, function (handler) {
        if (isFunction(handler))
          handler = {
            match: handler,
          };
        queries[q].addHandler(handler);
      });
      return this;
    },
    unregister: function (q, handler) {
      var query = this.queries[q];
      if (query)
        if (handler) {
          query.removeHandler(handler);
        } else {
          query.clear();
          delete this.queries[q];
        }
      return this;
    },
  };
  return new MediaQueryDispatch();
});
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    var OldCookies = window.Cookies,
      api = (window.Cookies = factory());
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0,
      result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) result[key] = attributes[key];
    }
    return result;
  }
  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === "undefined") return;
      if (arguments.length > 1) {
        attributes = extend(
          {
            path: "/",
          },
          api.defaults,
          attributes
        );
        if (typeof attributes.expires === "number") {
          var expires = new Date();
          expires.setMilliseconds(
            expires.getMilliseconds() + attributes.expires * 864e5
          );
          attributes.expires = expires;
        }
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) value = result;
        } catch (e) {}
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          );
        } else value = converter.write(value, key);
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        return (document.cookie = [
          key,
          "=",
          value,
          attributes.expires && "; expires=" + attributes.expires.toUTCString(),
          attributes.path && "; path=" + attributes.path,
          attributes.domain && "; domain=" + attributes.domain,
          attributes.secure ? "; secure" : "",
        ].join(""));
      }
      if (!key) result = {};
      var cookies = document.cookie ? document.cookie.split("; ") : [],
        rdecode = /(%[0-9A-Z]{2})+/g,
        i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split("="),
          cookie = parts.slice(1).join("=");
        if (cookie.charAt(0) === '"') cookie = cookie.slice(1, -1);
        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read
            ? converter.read(cookie, name)
            : converter(cookie, name) ||
              cookie.replace(rdecode, decodeURIComponent);
          if (this.json)
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) result[name] = cookie;
        } catch (e) {}
      }
      return result;
    }
    api.set = api;
    api.get = function (key) {
      return api(key);
    };
    api.getJSON = function () {
      return api.apply(
        {
          json: true,
        },
        [].slice.call(arguments)
      );
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(
        key,
        "",
        extend(attributes, {
          expires: -1,
        })
      );
    };
    api.withConverter = init;
    return api;
  }
  return init(function () {});
});
(function ($) {
  var chop = /(\s*\S+|\s)$/,
    start = /^(\S*)/;
  $.truncate = function (html, options) {
    return $("<div></div>").append(html).truncate(options).html();
  };
  $.fn.truncate = function (options) {
    if ($.isNumeric(options))
      options = {
        length: options,
      };
    var o = $.extend({}, $.truncate.defaults, options);
    return this.each(function () {
      var self = $(this);
      if (o.noBreaks) self.find("br").replaceWith(" ");
      var text = self.text(),
        excess = text.length - o.length;
      if (o.stripTags) self.text(text);
      if (o.words && excess > 0) {
        var truncated = text.slice(0, o.length).replace(chop, "").length;
        if (o.keepFirstWord && truncated === 0) {
          excess = text.length - start.exec(text)[0].length - 1;
        } else excess = text.length - truncated - 1;
      }
      if (excess < 0 || (!excess && !o.truncated)) return;
      $.each(self.contents().get().reverse(), function (i, el) {
        var $el = $(el),
          text = $el.text(),
          length = text.length;
        if (length <= excess) {
          o.truncated = true;
          excess -= length;
          $el.remove();
          return;
        }
        if (el.nodeType === 3) {
          $(el.splitText(length - excess - 1)).replaceWith(o.ellipsis);
          return false;
        }
        $el.truncate(
          $.extend(o, {
            length: length - excess,
          })
        );
        return false;
      });
    });
  };
  $.truncate.defaults = {
    stripTags: false,
    words: false,
    keepFirstWord: false,
    noBreaks: false,
    length: Infinity,
    ellipsis: "\u2026",
  };
})(jQuery);
(function () {
  "use strict";
  $(window).on("load", function () {
    window.BN = window.brandnamic = window.brandnamic || window.BN || {};
    var ehid = $("body").attr("data-ehid");
    window.brandnamic.formDefaults = {
      all: {
        hotel_id: ehid,
        language: BN.lang.currLang,
        validation: "live-iconColor-noText",
      },
      std_quick: {
        variation: "horizontal",
        onFormComplete: function () {
          var $block = $("#quickrequest").find(
            ".bn__form-grid__block:nth-last-of-type(3)"
          );
          $("#quickrequest")
            .find(".bn__form-grid__block")
            .first()
            .insertAfter($block);
          $(".quickrequest .qr-button-booking").removeClass("hidden");
          $(".quickrequest .loader").addClass("hidden");
          $("#quickrequest").removeClass("hidden");
        },
      },
      dsgvo_quickrequest: {
        variation: "horizontal",
        onFormComplete: function () {
          $(".quickrequest .qr-button-booking").removeClass("hidden");
          $(".quickrequest .loader").addClass("hidden");
          $("#quickrequest").removeClass("hidden");
        },
      },
      dsgvo_request: {
        onFormComplete: function () {
          $("#request").removeClass("hidden");
          $(".request .loader").addClass("hidden");
        },
        additionals: 0,
      },
      dsgvo_newsletter: {
        onFormComplete: function () {
          $("#newsletter").removeClass("hidden");
          $(".loader").addClass("hidden");
        },
      },
    };
  });
})();
(function () {
  "use strict";
  $(window).on("load", function () {
    (function (b, n, f, o, r, m, s) {
      if (r && !new RegExp("^" + n + "\\/\\/" + f, "i").test(r))
        m.cookie =
          "bn_ref=" +
          r +
          (o ? (/\?/.test(r) ? "&" : "?") + o.substr(1) : "") +
          "; path=/";
      // nimiq
      // if (m.querySelectorAll('bn-dynform-init')) {
      //     var i = 0
      //       , d = [n + '//admin.ehotelier.it/js/bn_dynform_v1.js', n + '//slave.ehotelier.it/js/bn_dynform_v1.js']
      //       , c = function c(e) {
      //         var a = document.createElement("script");
      //         a.type = "text/javascript",
      //         a.readyState ? a.onreadystatechange = function() {
      //             "error" == a.readyState && (a.onreadystatechange = null,
      //             e.length && e.shift() && (s.proxyUrl = e[0]) && c(e))
      //         }
      //         : a.onerror = function() {
      //             e.length && e.shift() && (s.proxyUrl = e[0]) && c(e)
      //         }
      //         ,
      //         a.src = e[0],
      //         document.getElementsByTagName("head")[0].appendChild(a)
      //     };
      //     (s.proxyUrl = d[0]) && c(d)
      // }
    })(
      window,
      location.protocol,
      location.host,
      location.search,
      document.referrer,
      document,
      window.brandnamic
    );
  });
})();
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (e) {
  var t,
    n,
    i,
    o,
    r,
    a,
    s = "Close",
    l = "BeforeClose",
    c = "AfterClose",
    d = "BeforeAppend",
    u = "MarkupParse",
    p = "Open",
    f = "Change",
    m = "mfp",
    g = "." + m,
    h = "mfp-ready",
    v = "mfp-removing",
    C = "mfp-prevent-close",
    y = function () {},
    w = !!window.jQuery,
    b = e(window),
    I = function (e, n) {
      t.ev.on(m + e + g, n);
    },
    x = function (t, n, i, o) {
      var r = document.createElement("div");
      return (
        (r.className = "mfp-" + t),
        i && (r.innerHTML = i),
        o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
        r
      );
    },
    k = function (n, i) {
      t.ev.triggerHandler(m + n, i),
        t.st.callbacks &&
          ((n = n.charAt(0).toLowerCase() + n.slice(1)),
          t.st.callbacks[n] &&
            t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
    },
    T = function (n) {
      return (
        (n === a && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (a = n)),
        t.currTemplate.closeBtn
      );
    },
    E = function () {
      e.magnificPopup.instance ||
        ((t = new y()), t.init(), (e.magnificPopup.instance = t));
    },
    _ = function () {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
      return !1;
    };
  (y.prototype = {
    constructor: y,
    init: function () {
      var n = navigator.appVersion;
      (t.isIE7 = -1 !== n.indexOf("MSIE 7.")),
        (t.isIE8 = -1 !== n.indexOf("MSIE 8.")),
        (t.isLowIE = t.isIE7 || t.isIE8),
        (t.isAndroid = /android/gi.test(n)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
        (t.supportsTransition = _()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (i = e(document)),
        (t.popupsCache = {});
    },
    open: function (n) {
      var o;
      if (n.isObj === !1) {
        (t.items = n.items.toArray()), (t.index = 0);
        var a,
          s = n.items;
        for (o = 0; o < s.length; o++)
          if (((a = s[o]), a.parsed && (a = a.el[0]), a === n.el[0])) {
            t.index = o;
            break;
          }
      } else
        (t.items = e.isArray(n.items) ? n.items : [n.items]),
          (t.index = n.index || 0);
      if (t.isOpen) return void t.updateItemHTML();
      (t.types = []),
        (r = ""),
        n.mainEl && n.mainEl.length ? (t.ev = n.mainEl.eq(0)) : (t.ev = i),
        n.key
          ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            (t.currTemplate = t.popupsCache[n.key]))
          : (t.currTemplate = {}),
        (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
        (t.fixedContentPos =
          "auto" === t.st.fixedContentPos
            ? !t.probablyMobile
            : t.st.fixedContentPos),
        t.st.modal &&
          ((t.st.closeOnContentClick = !1),
          (t.st.closeOnBgClick = !1),
          (t.st.showCloseBtn = !1),
          (t.st.enableEscapeKey = !1)),
        t.bgOverlay ||
          ((t.bgOverlay = x("bg").on("click" + g, function () {
            t.close();
          })),
          (t.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + g, function (e) {
              t._checkIfClose(e.target) && t.close();
            })),
          (t.container = x("container", t.wrap))),
        (t.contentContainer = x("content")),
        t.st.preloader &&
          (t.preloader = x("preloader", t.container, t.st.tLoading));
      var l = e.magnificPopup.modules;
      for (o = 0; o < l.length; o++) {
        var c = l[o];
        (c = c.charAt(0).toUpperCase() + c.slice(1)), t["init" + c].call(t);
      }
      k("BeforeOpen"),
        t.st.showCloseBtn &&
          (t.st.closeBtnInside
            ? (I(u, function (e, t, n, i) {
                n.close_replaceWith = T(i.type);
              }),
              (r += " mfp-close-btn-in"))
            : t.wrap.append(T())),
        t.st.alignTop && (r += " mfp-align-top"),
        t.fixedContentPos
          ? t.wrap.css({
              overflow: t.st.overflowY,
              overflowX: "hidden",
              overflowY: t.st.overflowY,
            })
          : t.wrap.css({
              top: b.scrollTop(),
              position: "absolute",
            }),
        (t.st.fixedBgPos === !1 ||
          ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
          t.bgOverlay.css({
            height: i.height(),
            position: "absolute",
          }),
        t.st.enableEscapeKey &&
          i.on("keyup" + g, function (e) {
            27 === e.keyCode && t.close();
          }),
        b.on("resize" + g, function () {
          t.updateSize();
        }),
        t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
        r && t.wrap.addClass(r);
      var d = (t.wH = b.height()),
        f = {};
      if (t.fixedContentPos && t._hasScrollBar(d)) {
        var m = t._getScrollbarSize();
        m && (f.marginRight = m);
      }
      t.fixedContentPos &&
        (t.isIE7
          ? e("body, html").css("overflow", "hidden")
          : (f.overflow = "hidden"));
      var v = t.st.mainClass;
      return (
        t.isIE7 && (v += " mfp-ie7"),
        v && t._addClassToMFP(v),
        t.updateItemHTML(),
        k("BuildControls"),
        e("html").css(f),
        t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
        (t._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          t.content
            ? (t._addClassToMFP(h), t._setFocus())
            : t.bgOverlay.addClass(h),
            i.on("focusin" + g, t._onFocusIn);
        }, 16),
        (t.isOpen = !0),
        t.updateSize(d),
        k(p),
        n
      );
    },
    close: function () {
      t.isOpen &&
        (k(l),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(v),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      k(s);
      var n = v + " " + h + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (n += t.st.mainClass + " "),
        t._removeClassFromMFP(n),
        t.fixedContentPos)
      ) {
        var o = {
          marginRight: "",
        };
        t.isIE7 ? e("body, html").css("overflow", "") : (o.overflow = ""),
          e("html").css(o);
      }
      i.off("keyup" + g + " focusin" + g),
        t.ev.off(g),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        k(c);
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), (t.wH = i);
      } else t.wH = e || b.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), k("Resize");
    },
    updateItemHTML: function () {
      var n = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (
        (k("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
        (t.currItem = n),
        !t.currTemplate[i])
      ) {
        var r = t.st[i] ? t.st[i].markup : !1;
        k("FirstMarkupParse", r),
          r ? (t.currTemplate[i] = e(r)) : (t.currTemplate[i] = !0);
      }
      o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
        n,
        t.currTemplate[i]
      );
      t.appendContent(a, i),
        (n.preloaded = !0),
        k(f, n),
        (o = n.type),
        t.container.prepend(t.contentContainer),
        k("AfterChange");
    },
    appendContent: function (e, n) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0
            ? t.content.find(".mfp-close").length || t.content.append(T())
            : (t.content = e)
          : (t.content = ""),
        k(d),
        t.container.addClass("mfp-" + n + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (n) {
      var i,
        o = t.items[n];
      if (
        (o.tagName
          ? (o = {
              el: e(o),
            })
          : ((i = o.type),
            (o = {
              data: o,
              src: o.src,
            })),
        o.el)
      ) {
        for (var r = t.types, a = 0; a < r.length; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = i || t.st.type || "inline"),
        (o.index = n),
        (o.parsed = !0),
        (t.items[n] = o),
        k("ElementParse", o),
        t.items[n]
      );
    },
    addGroup: function (e, n) {
      var i = function (i) {
        (i.mfpEl = this), t._openClick(i, e, n);
      };
      n || (n = {});
      var o = "click.magnificPopup";
      (n.mainEl = e),
        n.items
          ? ((n.isObj = !0), e.off(o).on(o, i))
          : ((n.isObj = !1),
            n.delegate
              ? e.off(o).on(o, n.delegate, i)
              : ((n.items = e), e.off(o).on(o, i)));
    },
    _openClick: function (n, i, o) {
      var r =
        void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || (2 !== n.which && !n.ctrlKey && !n.metaKey)) {
        var a =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0;
          } else if (b.width() < a) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
          (o.el = e(n.mfpEl)),
          o.delegate && (o.items = i.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n),
          i || "loading" !== e || (i = t.st.tLoading);
        var o = {
          status: e,
          text: i,
        };
        k("UpdateStatus", o),
          (e = o.status),
          (i = o.text),
          t.preloader.html(i),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (n = e);
      }
    },
    _checkIfClose: function (n) {
      if (!e(n).hasClass(C)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (
          !t.content ||
          e(n).hasClass("mfp-close") ||
          (t.preloader && n === t.preloader[0])
        )
          return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)),
        k(u, [t, n, i]),
        e.each(n, function (e, n) {
          if (void 0 === n || n === !1) return !0;
          if (((o = e.split("_")), o.length > 1)) {
            var i = t.find(g + "-" + o[0]);
            if (i.length > 0) {
              var r = o[1];
              "replaceWith" === r
                ? i[0] !== n[0] && i.replaceWith(n)
                : "img" === r
                ? i.is("img")
                  ? i.attr("src", n)
                  : i.replaceWith(
                      '<img src="' + n + '" class="' + i.attr("class") + '" />'
                    )
                : i.attr(o[1], n);
            }
          } else t.find(g + "-" + e).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: y.prototype,
      modules: [],
      open: function (t, n) {
        return (
          E(),
          (t = t ? e.extend(!0, {}, t) : {}),
          (t.isObj = !0),
          (t.index = n || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, n) {
        n.options && (e.magnificPopup.defaults[t] = n.options),
          e.extend(this.proto, n.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
      },
    }),
    (e.fn.magnificPopup = function (n) {
      E();
      var i = e(this);
      if ("string" == typeof n) {
        if ("open" === n) {
          var o,
            r = w ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = i), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick(
              {
                mfpEl: o,
              },
              i,
              r
            );
        } else
          t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
      } else
        (n = e.extend(!0, {}, n)),
          w ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
          t.addGroup(i, n);
      return i;
    });
  var S,
    P,
    O,
    z = "inline",
    M = function () {
      O && (P.after(O.addClass(S)).detach(), (O = null));
    };
  e.magnificPopup.registerModule(z, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(z),
          I(s + "." + z, function () {
            M();
          });
      },
      getInline: function (n, i) {
        if ((M(), n.src)) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (P || ((S = o.hiddenClass), (P = x(S)), (S = "mfp-" + S)),
              (O = r.after(P).detach().removeClass(S))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
          return (n.inlineElement = r), r;
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      },
    },
  });
  var B,
    F = "ajax",
    H = function () {
      B && e(document.body).removeClass(B);
    },
    L = function () {
      H(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(F, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(F),
          (B = t.st.ajax.cursor),
          I(s + "." + F, L),
          I("BeforeChange." + F, L);
      },
      getAjax: function (n) {
        B && e(document.body).addClass(B), t.updateStatus("loading");
        var i = e.extend(
          {
            url: n.src,
            success: function (i, o, r) {
              var a = {
                data: i,
                xhr: r,
              };
              k("ParseAjax", a),
                t.appendContent(e(a.data), F),
                (n.finished = !0),
                H(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(h);
                }, 16),
                t.updateStatus("ready"),
                k("AjaxContentAdded");
            },
            error: function () {
              H(),
                (n.finished = n.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", n.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(i)), "";
      },
    },
  });
  var A,
    j = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = t.st.image.titleSrc;
      if (i) {
        if (e.isFunction(i)) return i.call(t, n);
        if (n.el) return n.el.attr(i) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var n = t.st.image,
          i = ".image";
        t.types.push("image"),
          I(p + i, function () {
            "image" === t.currItem.type &&
              n.cursor &&
              e(document.body).addClass(n.cursor);
          }),
          I(s + i, function () {
            n.cursor && e(document.body).removeClass(n.cursor),
              b.off("resize" + g);
          }),
          I("Resize" + i, t.resizeImage),
          t.isLowIE && I("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE &&
            (n =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          A && clearInterval(A),
          (e.isCheckingImgSize = !1),
          k("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var n = 0,
          i = e.img[0],
          o = function (r) {
            A && clearInterval(A),
              (A = setInterval(function () {
                return i.naturalWidth > 0
                  ? void t._onImageHasSize(e)
                  : (n > 200 && clearInterval(A),
                    n++,
                    void (3 === n
                      ? o(10)
                      : 40 === n
                      ? o(50)
                      : 100 === n && o(500)));
              }, r));
          };
        o(1);
      },
      getImage: function (n, i) {
        var o = 0,
          r = function () {
            n &&
              (n.img[0].complete
                ? (n.img.off(".mfploader"),
                  n === t.currItem &&
                    (t._onImageHasSize(n), t.updateStatus("ready")),
                  (n.hasSize = !0),
                  (n.loaded = !0),
                  k("ImageLoadComplete"))
                : (o++, 200 > o ? setTimeout(r, 100) : a()));
          },
          a = function () {
            n &&
              (n.img.off(".mfploader"),
              n === t.currItem &&
                (t._onImageHasSize(n),
                t.updateStatus("error", s.tError.replace("%url%", n.src))),
              (n.hasSize = !0),
              (n.loaded = !0),
              (n.loadError = !0));
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            n.el &&
              n.el.find("img").length &&
              (c.alt = n.el.find("img").attr("alt")),
            (n.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
            (c.src = n.src),
            l.is("img") && (n.img = n.img.clone()),
            (c = n.img[0]),
            c.naturalWidth > 0 ? (n.hasSize = !0) : c.width || (n.hasSize = !1);
        }
        return (
          t._parseMarkup(
            i,
            {
              title: j(n),
              img_replaceWith: n.img,
            },
            n
          ),
          t.resizeImage(),
          n.hasSize
            ? (A && clearInterval(A),
              n.loadError
                ? (i.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", n.src)))
                : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
              i)
            : (t.updateStatus("loading"),
              (n.loading = !0),
              n.hasSize ||
                ((n.imgHidden = !0),
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
              i)
        );
      },
    },
  });
  var N,
    W = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          n = t.st.zoom,
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o,
            r,
            a = n.duration,
            c = function (e) {
              var t = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          I("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css("visibility", "hidden"),
                (e = t._getItemToZoom()),
                !e)
              )
                return void d();
              (r = c(e)),
                r.css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), k("ZoomAnimationEnded");
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            I(l + i, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (((e = t._getItemToZoom()), !e)) return;
                  r = c(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            I(s + i, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return t.currItem.hasSize ? t.currItem.img : !1;
      },
      _getOffset: function (n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (w ? i.innerHeight() : i[0].offsetHeight) - a - r,
        };
        return (
          W()
            ? (s["-moz-transform"] = s.transform =
                "translate(" + o.left + "px," + o.top + "px)")
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var R = "iframe",
    Z = "//about:blank",
    q = function (e) {
      if (t.currTemplate[R]) {
        var n = t.currTemplate[R].find("iframe");
        n.length &&
          (e || (n[0].src = Z),
          t.isIE8 && n.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(R, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(R),
          I("BeforeChange", function (e, t, n) {
            t !== n && (t === R ? q() : n === R && q(!0));
          }),
          I(s + "." + R, function () {
            q();
          });
      },
      getIframe: function (n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(i, a, n),
          t.updateStatus("ready"),
          i
        );
      },
    },
  });
  var D = function (e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e;
    },
    K = function (e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var n = t.st.gallery,
          o = ".mfp-gallery",
          a = Boolean(e.fn.mfpFastClick);
        return (
          (t.direction = !0),
          n && n.enabled
            ? ((r += " mfp-gallery"),
              I(p + o, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + o, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  i.on("keydown" + o, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              I("UpdateStatus" + o, function (e, n) {
                n.text &&
                  (n.text = K(n.text, t.currItem.index, t.items.length));
              }),
              I(u + o, function (e, i, o, r) {
                var a = t.items.length;
                o.counter = a > 1 ? K(n.tCounter, r.index, a) : "";
              }),
              I("BuildControls" + o, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    o = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(C)),
                    r = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(C)),
                    s = a ? "mfpFastClick" : "click";
                  o[s](function () {
                    t.prev();
                  }),
                    r[s](function () {
                      t.next();
                    }),
                    t.isIE7 &&
                      (x("b", o[0], !1, !0),
                      x("a", o[0], !1, !0),
                      x("b", r[0], !1, !0),
                      x("a", r[0], !1, !0)),
                    t.container.append(o.add(r));
                }
              }),
              I(f + o, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              void I(s + o, function () {
                i.off(o),
                  t.wrap.off("click" + o),
                  t.arrowLeft &&
                    a &&
                    t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                  (t.arrowRight = t.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (t.direction = !0), (t.index = D(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = D(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1; e <= (t.direction ? o : i); e++)
          t._preloadItem(t.index + e);
        for (e = 1; e <= (t.direction ? i : o); e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (n) {
        if (((n = D(n)), !t.items[n].preloaded)) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)),
            k("LazyLoad", i),
            "image" === i.type &&
              (i.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  i.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (i.hasSize = !0), (i.loadError = !0), k("LazyLoadError", i);
                })
                .attr("src", i.src)),
            (i.preloaded = !0);
        }
      },
    },
  });
  var Y = "retina";
  e.magnificPopup.registerModule(Y, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            n = e.ratio;
          (n = isNaN(n) ? n() : n),
            n > 1 &&
              (I("ImageHasSize." + Y, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              I("ElementParse." + Y, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
        }
      },
    },
  }),
    (function () {
      var t = 1e3,
        n = "ontouchstart" in window,
        i = function () {
          b.off("touchmove" + r + " touchend" + r);
        },
        o = "mfpFastClick",
        r = "." + o;
      (e.fn.mfpFastClick = function (o) {
        return e(this).each(function () {
          var a,
            s = e(this);
          if (n) {
            var l, c, d, u, p, f;
            s.on("touchstart" + r, function (e) {
              (u = !1),
                (f = 1),
                (p = e.originalEvent
                  ? e.originalEvent.touches[0]
                  : e.touches[0]),
                (c = p.clientX),
                (d = p.clientY),
                b
                  .on("touchmove" + r, function (e) {
                    (p = e.originalEvent ? e.originalEvent.touches : e.touches),
                      (f = p.length),
                      (p = p[0]),
                      (Math.abs(p.clientX - c) > 10 ||
                        Math.abs(p.clientY - d) > 10) &&
                        ((u = !0), i());
                  })
                  .on("touchend" + r, function (e) {
                    i(),
                      u ||
                        f > 1 ||
                        ((a = !0),
                        e.preventDefault(),
                        clearTimeout(l),
                        (l = setTimeout(function () {
                          a = !1;
                        }, t)),
                        o());
                  });
            });
          }
          s.on("click" + r, function () {
            a || o();
          });
        });
      }),
        (e.fn.destroyMfpFastClick = function () {
          e(this).off("touchstart" + r + " click" + r),
            n && b.off("touchmove" + r + " touchend" + r);
        });
    })(),
    E();
});
(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("jquery"));
  } else factory(jQuery);
})(function ($) {
  "use strict";
  var Slick = window.Slick || {};
  Slick = (function () {
    var instanceUid = 0;
    function Slick(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3e3,
        centerMode: false,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (slider, i) {
          return (
            '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' +
            (i + 1) +
            "</button>"
          );
        },
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: false,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: false,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1e3,
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false,
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.hidden = "hidden";
      _.paused = false;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = "visibilitychange";
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data("slick") || {};
      _.options = $.extend({}, _.defaults, dataSettings, settings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== "undefined") {
        _.hidden = "mozHidden";
        _.visibilityChange = "mozvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        _.hidden = "webkitHidden";
        _.visibilityChange = "webkitvisibilitychange";
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(true);
      _.checkResponsive(true);
    }
    return Slick;
  })();
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (
    markup,
    index,
    addBefore
  ) {
    var _ = this;
    if (typeof index === "boolean") {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) return false;
    _.unload();
    if (typeof index === "number") {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else $(markup).insertAfter(_.$slides.eq(index));
    } else if (addBefore === true) {
      $(markup).prependTo(_.$slideTrack);
    } else $(markup).appendTo(_.$slideTrack);
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === true &&
      _.options.vertical === false
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate(
        {
          height: targetHeight,
        },
        _.options.speed
      );
    }
  };
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false)
      targetLeft = -targetLeft;
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate(
          {
            left: targetLeft,
          },
          _.options.speed,
          _.options.easing,
          callback
        );
      } else
        _.$slideTrack.animate(
          {
            top: targetLeft,
          },
          _.options.speed,
          _.options.easing,
          callback
        );
    } else if (_.cssTransitions === false) {
      if (_.options.rtl === true) _.currentLeft = -_.currentLeft;
      $({
        animStart: _.currentLeft,
      }).animate(
        {
          animStart: targetLeft,
        },
        {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function (now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = "translate(" + now + "px, 0px)";
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = "translate(0px," + now + "px)";
              _.$slideTrack.css(animProps);
            }
          },
          complete: function () {
            if (callback) callback.call();
          },
        }
      );
    } else {
      _.applyTransition();
      targetLeft = Math.ceil(targetLeft);
      if (_.options.vertical === false) {
        animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
      } else
        animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
      _.$slideTrack.css(animProps);
      if (callback)
        setTimeout(function () {
          _.disableTransition();
          callback.call();
        }, _.options.speed);
    }
  };
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) asNavFor = $(asNavFor).not(_.$slider);
    if (asNavFor !== null && typeof asNavFor === "object")
      asNavFor.each(function () {
        var target = $(this).slick("getSlick");
        if (!target.unslicked) target.slideHandler(index, true);
      });
  };
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === false) {
      transition[_.transitionType] =
        _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
    } else
      transition[_.transitionType] =
        "opacity " + _.options.speed + "ms " + _.options.cssEase;
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else _.$slides.eq(slide).css(transition);
  };
  Slick.prototype.autoPlay = function () {
    var _ = this;
    if (_.autoPlayTimer) clearInterval(_.autoPlayTimer);
    if (_.slideCount > _.options.slidesToShow && _.paused !== true)
      _.autoPlayTimer = setInterval(
        _.autoPlayIterator,
        _.options.autoplaySpeed
      );
  };
  Slick.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) clearInterval(_.autoPlayTimer);
  };
  Slick.prototype.autoPlayIterator = function () {
    var _ = this;
    if (_.options.infinite === false) {
      if (_.direction === 1) {
        if (_.currentSlide + 1 === _.slideCount - 1) _.direction = 0;
        _.slideHandler(_.currentSlide + _.options.slidesToScroll);
      } else {
        if (_.currentSlide - 1 === 0) _.direction = 1;
        _.slideHandler(_.currentSlide - _.options.slidesToScroll);
      }
    } else _.slideHandler(_.currentSlide + _.options.slidesToScroll);
  };
  Slick.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
      _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow
          .removeClass("slick-hidden")
          .removeAttr("aria-hidden tabindex");
        _.$nextArrow
          .removeClass("slick-hidden")
          .removeAttr("aria-hidden tabindex");
        if (_.htmlExpr.test(_.options.prevArrow))
          _.$prevArrow.prependTo(_.options.appendArrows);
        if (_.htmlExpr.test(_.options.nextArrow))
          _.$nextArrow.appendTo(_.options.appendArrows);
        if (_.options.infinite !== true)
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
      } else
        _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1",
        });
    }
  };
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dotString;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      dotString = '<ul class="' + _.options.dotsClass + '">';
      for (i = 0; i <= _.getDotCount(); i += 1)
        dotString += "<li>" + _.options.customPaging.call(this, _, i) + "</li>";
      dotString += "</ul>";
      _.$dots = $(dotString).appendTo(_.options.appendDots);
      _.$dots
        .find("li")
        .first()
        .addClass("slick-active")
        .attr("aria-hidden", "false");
    }
  };
  Slick.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider
      .children(_.options.slide + ":not(.slick-cloned)")
      .addClass("slick-slide");
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element)
        .attr("data-slick-index", index)
        .data("originalStyling", $(element).attr("style") || "");
    });
    _.$slider.addClass("slick-slider");
    _.$slideTrack =
      _.slideCount === 0
        ? $('<div class="slick-track"/>').appendTo(_.$slider)
        : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack
      .wrap('<div aria-live="polite" class="slick-list"/>')
      .parent();
    _.$slideTrack.css("opacity", 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true)
      _.options.slidesToScroll = 1;
    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
    if (_.options.draggable === true) _.$list.addClass("draggable");
  };
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 1) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement("div");
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement("div");
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target =
              a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target))
              row.appendChild(originalSlides.get(target));
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.html(newSlides);
      _.$slider
        .children()
        .children()
        .children()
        .css({
          width: 100 / _.options.slidesPerRow + "%",
          display: "inline-block",
        });
    }
  };
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false,
      sliderWidth = _.$slider.width(),
      windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === "window") {
      respondToWidth = windowWidth;
    } else if (_.respondTo === "slider") {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === "min")
      respondToWidth = Math.min(windowWidth, sliderWidth);
    if (
      _.options.responsive &&
      _.options.responsive.length &&
      _.options.responsive !== null
    ) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints)
        if (_.breakpoints.hasOwnProperty(breakpoint))
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint])
              targetBreakpoint = _.breakpoints[breakpoint];
          } else if (respondToWidth > _.breakpoints[breakpoint])
            targetBreakpoint = _.breakpoints[breakpoint];
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend(
                {},
                _.originalSettings,
                _.breakpointSettings[targetBreakpoint]
              );
              if (initial === true) _.currentSlide = _.options.initialSlide;
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend(
              {},
              _.originalSettings,
              _.breakpointSettings[targetBreakpoint]
            );
            if (initial === true) _.currentSlide = _.options.initialSlide;
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else if (_.activeBreakpoint !== null) {
        _.activeBreakpoint = null;
        _.options = _.originalSettings;
        if (initial === true) _.currentSlide = _.options.initialSlide;
        _.refresh(initial);
        triggerBreakpoint = targetBreakpoint;
      }
      if (!initial && triggerBreakpoint !== false)
        _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
    }
  };
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.target),
      indexOffset,
      slideOffset,
      unevenOffset;
    if ($target.is("a")) event.preventDefault();
    if (!$target.is("li")) $target = $target.closest("li");
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset
      ? 0
      : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case "previous":
        slideOffset =
          indexOffset === 0
            ? _.options.slidesToScroll
            : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow)
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        break;
      case "next":
        slideOffset =
          indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow)
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        break;
      case "index":
        var index =
          event.data.index === 0
            ? 0
            : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger("focus");
        break;
      default:
        return;
    }
  };
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    return index;
  };
  Slick.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $("li", _.$dots).off("click.slick", _.changeSlide);
      if (_.options.pauseOnDotsHover === true && _.options.autoplay === true)
        $("li", _.$dots)
          .off("mouseenter.slick", $.proxy(_.setPaused, _, true))
          .off("mouseleave.slick", $.proxy(_.setPaused, _, false));
    }
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
      _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
    }
    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
    _.$list.off("click.slick", _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.$list.off("mouseenter.slick", $.proxy(_.setPaused, _, true));
    _.$list.off("mouseleave.slick", $.proxy(_.setPaused, _, false));
    if (_.options.accessibility === true)
      _.$list.off("keydown.slick", _.keyHandler);
    if (_.options.focusOnSelect === true)
      $(_.$slideTrack).children().off("click.slick", _.selectHandler);
    $(window).off(
      "orientationchange.slick.slick-" + _.instanceUid,
      _.orientationChange
    );
    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
    $(document).off("ready.slick.slick-" + _.instanceUid, _.setPosition);
  };
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 1) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr("style");
      _.$slider.html(originalSlides);
    }
  };
  Slick.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  Slick.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $(".slick-cloned", _.$slider).detach();
    if (_.$dots) _.$dots.remove();
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", "");
      if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", "");
      if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
    }
    if (_.$slides) {
      _.$slides
        .removeClass(
          "slick-slide slick-active slick-center slick-visible slick-current"
        )
        .removeAttr("aria-hidden")
        .removeAttr("data-slick-index")
        .each(function () {
          $(this).attr("style", $(this).data("originalStyling"));
        });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass("slick-slider");
    _.$slider.removeClass("slick-initialized");
    _.unslicked = true;
    if (!refresh) _.$slider.trigger("destroy", [_]);
  };
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = "";
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else _.$slides.eq(slide).css(transition);
  };
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex,
      });
      _.$slides.eq(slideIndex).animate(
        {
          opacity: 1,
        },
        _.options.speed,
        _.options.easing,
        callback
      );
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex,
      });
      if (callback)
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
    }
  };
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate(
        {
          opacity: 0,
          zIndex: _.options.zIndex - 2,
        },
        _.options.speed,
        _.options.easing
      );
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2,
      });
    }
  };
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (
    filter
  ) {
    var _ = this;
    if (filter !== null) {
      _.$slidesCache = _.$slides;
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;
    return _.currentSlide;
  };
  Slick.prototype.getDotCount = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      pagerQty = 0;
    if (_.options.infinite === true) {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow
            ? _.options.slidesToScroll
            : _.options.slidesToShow;
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow
            ? _.options.slidesToScroll
            : _.options.slidesToShow;
      }
    return pagerQty - 1;
  };
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        verticalOffset = verticalHeight * _.options.slidesToShow * -1;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0)
        if (
          slideIndex + _.options.slidesToScroll > _.slideCount &&
          _.slideCount > _.options.slidesToShow
        )
          if (slideIndex > _.slideCount) {
            _.slideOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              _.slideWidth *
              -1;
            verticalOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              verticalHeight *
              -1;
          } else {
            _.slideOffset =
              (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1;
            verticalOffset =
              (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1;
          }
    } else if (slideIndex + _.options.slidesToShow > _.slideCount) {
      _.slideOffset =
        (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
      verticalOffset =
        (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset +=
        _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    if (_.options.variableWidth === true) {
      if (
        _.slideCount <= _.options.slidesToShow ||
        _.options.infinite === false
      ) {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
      } else
        targetSlide = _.$slideTrack
          .children(".slick-slide")
          .eq(slideIndex + _.options.slidesToShow);
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft =
            (_.$slideTrack.width() -
              targetSlide[0].offsetLeft -
              targetSlide.width()) *
            -1;
        } else targetLeft = 0;
      } else targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      if (_.options.centerMode === true) {
        if (
          _.slideCount <= _.options.slidesToShow ||
          _.options.infinite === false
        ) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else
          targetSlide = _.$slideTrack
            .children(".slick-slide")
            .eq(slideIndex + _.options.slidesToShow + 1);
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft =
              (_.$slideTrack.width() -
                targetSlide[0].offsetLeft -
                targetSlide.width()) *
              -1;
          } else targetLeft = 0;
        } else targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (
    option
  ) {
    var _ = this;
    return _.options[option];
  };
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter +=
        _.options.slidesToScroll <= _.options.slidesToShow
          ? _.options.slidesToScroll
          : _.options.slidesToShow;
    }
    return indexes;
  };
  Slick.prototype.getSlick = function () {
    return this;
  };
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      centerOffset;
    centerOffset =
      _.options.centerMode === true
        ? _.slideWidth * Math.floor(_.options.slidesToShow / 2)
        : 0;
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        if (
          slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 >
          _.swipeLeft * -1
        ) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed =
        Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
      return slidesTraversed;
    } else return _.options.slidesToScroll;
  };
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (
    slide,
    dontAnimate
  ) {
    var _ = this;
    _.changeSlide(
      {
        data: {
          message: "index",
          index: parseInt(slide),
        },
      },
      dontAnimate
    );
  };
  Slick.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass("slick-initialized")) {
      $(_.$slider).addClass("slick-initialized");
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
    }
    if (creation) _.$slider.trigger("init", [_]);
    if (_.options.accessibility === true) _.initADA();
  };
  Slick.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.on(
        "click.slick",
        {
          message: "previous",
        },
        _.changeSlide
      );
      _.$nextArrow.on(
        "click.slick",
        {
          message: "next",
        },
        _.changeSlide
      );
    }
  };
  Slick.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow)
      $("li", _.$dots).on(
        "click.slick",
        {
          message: "index",
        },
        _.changeSlide
      );
    if (
      _.options.dots === true &&
      _.options.pauseOnDotsHover === true &&
      _.options.autoplay === true
    )
      $("li", _.$dots)
        .on("mouseenter.slick", $.proxy(_.setPaused, _, true))
        .on("mouseleave.slick", $.proxy(_.setPaused, _, false));
  };
  Slick.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.$list.on(
      "touchstart.slick mousedown.slick",
      {
        action: "start",
      },
      _.swipeHandler
    );
    _.$list.on(
      "touchmove.slick mousemove.slick",
      {
        action: "move",
      },
      _.swipeHandler
    );
    _.$list.on(
      "touchend.slick mouseup.slick",
      {
        action: "end",
      },
      _.swipeHandler
    );
    _.$list.on(
      "touchcancel.slick mouseleave.slick",
      {
        action: "end",
      },
      _.swipeHandler
    );
    _.$list.on("click.slick", _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    _.$list.on("mouseenter.slick", $.proxy(_.setPaused, _, true));
    _.$list.on("mouseleave.slick", $.proxy(_.setPaused, _, false));
    if (_.options.accessibility === true)
      _.$list.on("keydown.slick", _.keyHandler);
    if (_.options.focusOnSelect === true)
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    $(window).on(
      "orientationchange.slick.slick-" + _.instanceUid,
      $.proxy(_.orientationChange, _)
    );
    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
    $(document).on("ready.slick.slick-" + _.instanceUid, _.setPosition);
  };
  Slick.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow)
      _.$dots.show();
    if (_.options.autoplay === true) _.autoPlay();
  };
  Slick.prototype.keyHandler = function (event) {
    var _ = this;
    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT"))
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: "previous",
          },
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true)
        _.changeSlide({
          data: {
            message: "next",
          },
        });
  };
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $("img[data-lazy]", imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr("data-lazy"),
          imageToLoad = document.createElement("img");
        imageToLoad.onload = function () {
          image.animate(
            {
              opacity: 0,
            },
            100,
            function () {
              image.attr("src", imageSource).animate(
                {
                  opacity: 1,
                },
                200,
                function () {
                  image.removeAttr("data-lazy").removeClass("slick-loading");
                }
              );
            }
          );
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(
          0,
          _.currentSlide - (_.options.slidesToShow / 2 + 1)
        );
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite
        ? _.options.slidesToShow + _.currentSlide
        : _.currentSlide;
      rangeEnd = rangeStart + _.options.slidesToShow;
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-slide");
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider
        .find(".slick-cloned")
        .slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider
        .find(".slick-cloned")
        .slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  Slick.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({
      opacity: 1,
    });
    _.$slider.removeClass("slick-loading");
    _.initUI();
    if (_.options.lazyLoad === "progressive") _.progressiveLazyLoad();
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: "next",
      },
    });
  };
  Slick.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = true;
  };
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;
    _.paused = false;
    _.autoPlay();
  };
  Slick.prototype.postSlide = function (index) {
    var _ = this;
    _.$slider.trigger("afterChange", [_, index]);
    _.animating = false;
    _.setPosition();
    _.swipeLeft = null;
    if (_.options.autoplay === true && _.paused === false) _.autoPlay();
    if (_.options.accessibility === true) _.initADA();
  };
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: "previous",
      },
    });
  };
  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };
  Slick.prototype.progressiveLazyLoad = function () {
    var _ = this,
      imgCount,
      targetImage;
    imgCount = $("img[data-lazy]", _.$slider).length;
    if (imgCount > 0) {
      targetImage = $("img[data-lazy]", _.$slider).first();
      targetImage.attr("src", null);
      targetImage
        .attr("src", targetImage.attr("data-lazy"))
        .removeClass("slick-loading")
        .load(function () {
          targetImage.removeAttr("data-lazy");
          _.progressiveLazyLoad();
          if (_.options.adaptiveHeight === true) _.setPosition();
        })
        .error(function () {
          targetImage.removeAttr("data-lazy");
          _.progressiveLazyLoad();
        });
    }
  };
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      firstVisible;
    firstVisible = _.slideCount - _.options.slidesToShow;
    if (!_.options.infinite)
      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      } else if (_.currentSlide > firstVisible) _.currentSlide = firstVisible;
    currentSlide = _.currentSlide;
    _.destroy(true);
    $.extend(_, _.initials, {
      currentSlide: currentSlide,
    });
    _.init();
    if (!initializing)
      _.changeSlide(
        {
          data: {
            message: "index",
            index: currentSlide,
          },
        },
        false
      );
  };
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || "window";
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint)
              _.breakpoints.splice(l, 1);
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] =
            responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  Slick.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0)
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true)
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    _.setSlideClasses(0);
    _.setPosition();
    _.$slider.trigger("reInit", [_]);
    if (_.options.autoplay === true) _.focusHandler();
  };
  Slick.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) _.setPosition();
      }, 50);
    }
  };
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (
    index,
    removeBefore,
    removeAll
  ) {
    var _ = this;
    if (typeof index === "boolean") {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else index = removeBefore === true ? --index : index;
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) return false;
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else _.$slideTrack.children(this.options.slide).eq(index).remove();
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === true) position = -position;
    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = "translate(" + x + ", " + y + ")";
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
        _.$slideTrack.css(positionProps);
      }
    }
  };
  Slick.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === false) {
      if (_.options.centerMode === true)
        _.$list.css({
          padding: "0px " + _.options.centerPadding,
        });
    } else {
      _.$list.height(
        _.$slides.first().outerHeight(true) * _.options.slidesToShow
      );
      if (_.options.centerMode === true)
        _.$list.css({
          padding: _.options.centerPadding + " 0px",
        });
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(
        Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)
      );
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5e3 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(
        Math.ceil(
          _.$slides.first().outerHeight(true) *
            _.$slideTrack.children(".slick-slide").length
        )
      );
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false)
      _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
  };
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === true) {
        $(element).css({
          position: "relative",
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        });
      } else
        $(element).css({
          position: "relative",
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        });
    });
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1,
    });
  };
  Slick.prototype.setHeight = function () {
    var _ = this;
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === true &&
      _.options.vertical === false
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css("height", targetHeight);
    }
  };
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function (
    option,
    value,
    refresh
  ) {
    var _ = this,
      l,
      item;
    if (option === "responsive" && $.type(value) === "array") {
      for (item in value)
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint)
              _.options.responsive.splice(l, 1);
            l--;
          }
          _.options.responsive.push(value[item]);
        }
    } else _.options[option] = value;
    if (refresh === true) {
      _.unload();
      _.reinit();
    }
  };
  Slick.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else _.setFade();
    _.$slider.trigger("setPosition", [_]);
  };
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === true ? "top" : "left";
    if (_.positionProp === "top") {
      _.$slider.addClass("slick-vertical");
    } else _.$slider.removeClass("slick-vertical");
    if (
      bodyStyle.WebkitTransition !== undefined ||
      bodyStyle.MozTransition !== undefined ||
      bodyStyle.msTransition !== undefined
    )
      if (_.options.useCSS === true) _.cssTransitions = true;
    if (_.options.fade)
      if (typeof _.options.zIndex === "number") {
        if (_.options.zIndex < 3) _.options.zIndex = 3;
      } else _.options.zIndex = _.defaults.zIndex;
    if (bodyStyle.OTransform !== undefined) {
      _.animType = "OTransform";
      _.transformType = "-o-transform";
      _.transitionType = "OTransition";
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = "MozTransform";
      _.transformType = "-moz-transform";
      _.transitionType = "MozTransition";
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.MozPerspective === undefined
      )
        _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = "webkitTransform";
      _.transformType = "-webkit-transform";
      _.transitionType = "webkitTransition";
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = "msTransform";
      _.transformType = "-ms-transform";
      _.transitionType = "msTransition";
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = "transform";
      _.transformType = "transform";
      _.transitionType = "transition";
    }
    _.transformsEnabled =
      _.options.useTransform && _.animType !== null && _.animType !== false;
  };
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider
      .find(".slick-slide")
      .removeClass("slick-active slick-center slick-current")
      .attr("aria-hidden", "true");
    _.$slides.eq(index).addClass("slick-current");
    if (_.options.centerMode === true) {
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides
            .slice(index - centerOffset, index + centerOffset + 1)
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides
            .slice(
              indexOffset - centerOffset + 1,
              indexOffset + centerOffset + 2
            )
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        }
        if (index === 0) {
          allSlides
            .eq(allSlides.length - 1 - _.options.slidesToShow)
            .addClass("slick-center");
        } else if (index === _.slideCount - 1)
          allSlides.eq(_.options.slidesToShow).addClass("slick-center");
      }
      _.$slides.eq(index).addClass("slick-center");
    } else if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
      _.$slides
        .slice(index, index + _.options.slidesToShow)
        .addClass("slick-active")
        .attr("aria-hidden", "false");
    } else if (allSlides.length <= _.options.slidesToShow) {
      allSlides.addClass("slick-active").attr("aria-hidden", "false");
    } else {
      remainder = _.slideCount % _.options.slidesToShow;
      indexOffset =
        _.options.infinite === true ? _.options.slidesToShow + index : index;
      if (
        _.options.slidesToShow == _.options.slidesToScroll &&
        _.slideCount - index < _.options.slidesToShow
      ) {
        allSlides
          .slice(
            indexOffset - (_.options.slidesToShow - remainder),
            indexOffset + remainder
          )
          .addClass("slick-active")
          .attr("aria-hidden", "false");
      } else
        allSlides
          .slice(indexOffset, indexOffset + _.options.slidesToShow)
          .addClass("slick-active")
          .attr("aria-hidden", "false");
    }
    if (_.options.lazyLoad === "ondemand") _.lazyLoad();
  };
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) _.options.centerMode = false;
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else infiniteCount = _.options.slidesToShow;
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex])
            .clone(true)
            .attr("id", "")
            .attr("data-slick-index", slideIndex - _.slideCount)
            .prependTo(_.$slideTrack)
            .addClass("slick-cloned");
        }
        for (i = 0; i < infiniteCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex])
            .clone(true)
            .attr("id", "")
            .attr("data-slick-index", slideIndex + _.slideCount)
            .appendTo(_.$slideTrack)
            .addClass("slick-cloned");
        }
        _.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            $(this).attr("id", "");
          });
      }
    }
  };
  Slick.prototype.setPaused = function (paused) {
    var _ = this;
    if (_.options.autoplay === true && _.options.pauseOnHover === true) {
      _.paused = paused;
      if (!paused) {
        _.autoPlay();
      } else _.autoPlayClear();
    }
  };
  Slick.prototype.selectHandler = function (event) {
    var _ = this,
      targetElement = $(event.target).is(".slick-slide")
        ? $(event.target)
        : $(event.target).parents(".slick-slide"),
      index = parseInt(targetElement.attr("data-slick-index"));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.setSlideClasses(index);
      _.asNavFor(index);
      return;
    }
    _.slideHandler(index);
  };
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this;
    sync = sync || false;
    if (_.animating === true && _.options.waitForAnimate === true) return;
    if (_.options.fade === true && _.currentSlide === index) return;
    if (_.slideCount <= _.options.slidesToShow) return;
    if (sync === false) _.asNavFor(index);
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (
      _.options.infinite === false &&
      _.options.centerMode === false &&
      (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else _.postSlide(targetSlide);
      }
      return;
    } else if (
      _.options.infinite === false &&
      _.options.centerMode === true &&
      (index < 0 || index > _.slideCount - _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else _.postSlide(targetSlide);
      }
      return;
    }
    if (_.options.autoplay === true) clearInterval(_.autoPlayTimer);
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else animSlide = _.slideCount + targetSlide;
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else animSlide = targetSlide - _.slideCount;
    } else animSlide = targetSlide;
    _.animating = true;
    _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else _.postSlide(animSlide);
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else _.postSlide(animSlide);
  };
  Slick.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow)
      _.$dots.hide();
    _.$slider.addClass("slick-loading");
  };
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round((r * 180) / Math.PI);
    if (swipeAngle < 0) swipeAngle = 360 - Math.abs(swipeAngle);
    if (swipeAngle <= 45 && swipeAngle >= 0)
      return _.options.rtl === false ? "left" : "right";
    if (swipeAngle <= 360 && swipeAngle >= 315)
      return _.options.rtl === false ? "left" : "right";
    if (swipeAngle >= 135 && swipeAngle <= 225)
      return _.options.rtl === false ? "right" : "left";
    if (_.options.verticalSwiping === true)
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "left";
      } else return "right";
    return "vertical";
  };
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount;
    _.dragging = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
    if (_.touchObject.curX === undefined) return false;
    if (_.touchObject.edgeHit === true)
      _.$slider.trigger("edge", [_, _.swipeDirection()]);
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      switch (_.swipeDirection()) {
        case "left":
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide + _.getSlideCount())
            : _.currentSlide + _.getSlideCount();
          _.slideHandler(slideCount);
          _.currentDirection = 0;
          _.touchObject = {};
          _.$slider.trigger("swipe", [_, "left"]);
          break;
        case "right":
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide - _.getSlideCount())
            : _.currentSlide - _.getSlideCount();
          _.slideHandler(slideCount);
          _.currentDirection = 1;
          _.touchObject = {};
          _.$slider.trigger("swipe", [_, "right"]);
          break;
      }
    } else if (_.touchObject.startX !== _.touchObject.curX) {
      _.slideHandler(_.currentSlide);
      _.touchObject = {};
    }
  };
  Slick.prototype.swipeHandler = function (event) {
    var _ = this;
    if (
      _.options.swipe === false ||
      ("ontouchend" in document && _.options.swipe === false)
    ) {
      return;
    } else if (
      _.options.draggable === false &&
      event.type.indexOf("mouse") !== -1
    )
      return;
    _.touchObject.fingerCount =
      event.originalEvent && event.originalEvent.touches !== undefined
        ? event.originalEvent.touches.length
        : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === true)
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    switch (event.data.action) {
      case "start":
        _.swipeStart(event);
        break;
      case "move":
        _.swipeMove(event);
        break;
      case "end":
        _.swipeEnd(event);
        break;
    }
  };
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches;
    touches =
      event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || (touches && touches.length !== 1)) return false;
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX =
      touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY =
      touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(
      Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
    );
    if (_.options.verticalSwiping === true)
      _.touchObject.swipeLength = Math.round(
        Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
      );
    swipeDirection = _.swipeDirection();
    if (swipeDirection === "vertical") return;
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4)
      event.preventDefault();
    positionOffset =
      (_.options.rtl === false ? 1 : -1) *
      (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true)
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;
    if (_.options.infinite === false)
      if (
        (_.currentSlide === 0 && swipeDirection === "right") ||
        (_.currentSlide >= _.getDotCount() && swipeDirection === "left")
      ) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else
      _.swipeLeft =
        curLeft +
        swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    if (_.options.verticalSwiping === true)
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    if (_.options.fade === true || _.options.touchMove === false) return false;
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    _.setCSS(_.swipeLeft);
  };
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    if (
      _.touchObject.fingerCount !== 1 ||
      _.slideCount <= _.options.slidesToShow
    ) {
      _.touchObject = {};
      return false;
    }
    if (
      event.originalEvent !== undefined &&
      event.originalEvent.touches !== undefined
    )
      touches = event.originalEvent.touches[0];
    _.touchObject.startX = _.touchObject.curX =
      touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY =
      touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.unload = function () {
    var _ = this;
    $(".slick-cloned", _.$slider).remove();
    if (_.$dots) _.$dots.remove();
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow))
      _.$prevArrow.remove();
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow))
      _.$nextArrow.remove();
    _.$slides
      .removeClass("slick-slide slick-active slick-visible slick-current")
      .attr("aria-hidden", "true")
      .css("width", "");
  };
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger("unslick", [_, fromBreakpoint]);
    _.destroy();
  };
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (
      _.options.arrows === true &&
      _.slideCount > _.options.slidesToShow &&
      !_.options.infinite
    ) {
      _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$nextArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false");
      } else if (
        _.currentSlide >= _.slideCount - _.options.slidesToShow &&
        _.options.centerMode === false
      ) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false");
      } else if (
        _.currentSlide >= _.slideCount - 1 &&
        _.options.centerMode === true
      ) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false");
      }
    }
  };
  Slick.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots
        .find("li")
        .removeClass("slick-active")
        .attr("aria-hidden", "true");
      _.$dots
        .find("li")
        .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
        .addClass("slick-active")
        .attr("aria-hidden", "false");
    }
  };
  Slick.prototype.visibility = function () {
    var _ = this;
    if (document[_.hidden]) {
      _.paused = true;
      _.autoPlayClear();
    } else if (_.options.autoplay === true) {
      _.paused = false;
      _.autoPlay();
    }
  };
  Slick.prototype.initADA = function () {
    var _ = this;
    _.$slides
      .add(_.$slideTrack.find(".slick-cloned"))
      .attr({
        "aria-hidden": "true",
        tabindex: "-1",
      })
      .find("a, input, button, select")
      .attr({
        tabindex: "-1",
      });
    _.$slideTrack.attr("role", "listbox");
    _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
      $(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + _.instanceUid + i + "",
      });
    });
    if (_.$dots !== null)
      _.$dots
        .attr("role", "tablist")
        .find("li")
        .each(function (i) {
          $(this).attr({
            role: "presentation",
            "aria-selected": "false",
            "aria-controls": "navigation" + _.instanceUid + i + "",
            id: "slick-slide" + _.instanceUid + i + "",
          });
        })
        .first()
        .attr("aria-selected", "true")
        .end()
        .find("button")
        .attr("role", "button")
        .end()
        .closest("div")
        .attr("role", "toolbar");
    _.activateADA();
  };
  Slick.prototype.activateADA = function () {
    var _ = this;
    _.$slideTrack
      .find(".slick-active")
      .attr({
        "aria-hidden": "false",
      })
      .find("a, input, button, select")
      .attr({
        tabindex: "0",
      });
  };
  Slick.prototype.focusHandler = function () {
    var _ = this;
    _.$slider.on("focus.slick blur.slick", "*", function (event) {
      event.stopImmediatePropagation();
      var sf = $(this);
      setTimeout(function () {
        if (_.isPlay)
          if (sf.is(":focus")) {
            _.autoPlayClear();
            _.paused = true;
          } else {
            _.paused = false;
            _.autoPlay();
          }
      }, 0);
    });
  };
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == "object" || typeof opt == "undefined") {
        _[i].slick = new Slick(_[i], opt);
      } else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != "undefined") return ret;
    }
    return _;
  };
});
!(function (e) {
  var t = navigator.userAgent;
  e.HTMLPictureElement &&
    /ecko/.test(t) &&
    t.match(/rv\:(\d+)/) &&
    RegExp.$1 < 41 &&
    addEventListener(
      "resize",
      (function () {
        var t,
          r = document.createElement("source"),
          n = function (e) {
            var t,
              n,
              s = e.parentNode;
            "PICTURE" === s.nodeName.toUpperCase()
              ? ((t = r.cloneNode()),
                s.insertBefore(t, s.firstElementChild),
                setTimeout(function () {
                  s.removeChild(t);
                }))
              : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) &&
                ((e._pfLastSize = e.offsetWidth),
                (n = e.sizes),
                (e.sizes += ",100vw"),
                setTimeout(function () {
                  e.sizes = n;
                }));
          },
          s = function () {
            var e,
              t = document.querySelectorAll(
                "picture > img, img[srcset][sizes]"
              );
            for (e = 0; e < t.length; e++) n(t[e]);
          },
          i = function () {
            clearTimeout(t), (t = setTimeout(s, 99));
          },
          c = e.matchMedia && matchMedia("(orientation: landscape)"),
          a = function () {
            i(), c && c.addListener && c.addListener(i);
          };
        return (
          (r.srcset =
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          /^[c|i]|d$/.test(document.readyState || "")
            ? a()
            : document.addEventListener("DOMContentLoaded", a),
          i
        );
      })()
    );
})(window),
  (function (e, t, r) {
    "use strict";
    function n(e) {
      return " " === e || "	" === e || "\n" === e || "\f" === e || "\r" === e;
    }
    function s(t, r) {
      var n = new e.Image();
      return (
        (n.onerror = function () {
          (z[t] = !1), ee();
        }),
        (n.onload = function () {
          (z[t] = 1 === n.width), ee();
        }),
        (n.src = r),
        "pending"
      );
    }
    function i() {
      (W = !1),
        (F = e.devicePixelRatio),
        (B = {}),
        (Q = {}),
        (v.DPR = F || 1),
        (G.width = Math.max(e.innerWidth || 0, b.clientWidth)),
        (G.height = Math.max(e.innerHeight || 0, b.clientHeight)),
        (G.vw = G.width / 100),
        (G.vh = G.height / 100),
        (A = [G.height, G.width, F].join("-")),
        (G.em = v.getEmValue()),
        (G.rem = G.em);
    }
    function c(e, t, r, n) {
      var s, i, c, a;
      return (
        "saveData" === T.algorithm
          ? e > 2.7
            ? (a = r + 1)
            : ((i = t - r),
              (s = Math.pow(e - 0.6, 1.5)),
              (c = i * s),
              n && (c += 0.1 * s),
              (a = e + c))
          : (a = r > 1 ? Math.sqrt(e * t) : e),
        a > r
      );
    }
    function a(e) {
      var t,
        r = v.getSet(e),
        n = !1;
      "pending" !== r &&
        ((n = A), r && ((t = v.setRes(r)), v.applySetCandidate(t, e))),
        (e[v.ns].evaled = n);
    }
    function u(e, t) {
      return e.res - t.res;
    }
    function o(e, t, r) {
      var n;
      return (
        !r && t && ((r = e[v.ns].sets), (r = r && r[r.length - 1])),
        (n = l(t, r)),
        n &&
          ((t = v.makeUrl(t)),
          (e[v.ns].curSrc = t),
          (e[v.ns].curCan = n),
          n.res || Z(n, n.set.sizes)),
        n
      );
    }
    function l(e, t) {
      var r, n, s;
      if (e && t)
        for (s = v.parseSet(t), e = v.makeUrl(e), r = 0; r < s.length; r++)
          if (e === v.makeUrl(s[r].url)) {
            n = s[r];
            break;
          }
      return n;
    }
    function f(e, t) {
      var r,
        n,
        s,
        i,
        c = e.getElementsByTagName("source");
      for (r = 0, n = c.length; n > r; r++)
        (s = c[r]),
          (s[v.ns] = !0),
          (i = s.getAttribute("srcset")),
          i &&
            t.push({
              srcset: i,
              media: s.getAttribute("media"),
              type: s.getAttribute("type"),
              sizes: s.getAttribute("sizes"),
            });
    }
    function d(e, t) {
      function r(t) {
        var r,
          n = t.exec(e.substring(d));
        return n ? ((r = n[0]), (d += r.length), r) : void 0;
      }
      function s() {
        var e,
          r,
          n,
          s,
          i,
          u,
          o,
          l,
          f,
          d = !1,
          m = {};
        for (s = 0; s < a.length; s++)
          (i = a[s]),
            (u = i[i.length - 1]),
            (o = i.substring(0, i.length - 1)),
            (l = parseInt(o, 10)),
            (f = parseFloat(o)),
            O.test(o) && "w" === u
              ? ((e || r) && (d = !0), 0 === l ? (d = !0) : (e = l))
              : J.test(o) && "x" === u
              ? ((e || r || n) && (d = !0), 0 > f ? (d = !0) : (r = f))
              : O.test(o) && "h" === u
              ? ((n || r) && (d = !0), 0 === l ? (d = !0) : (n = l))
              : (d = !0);
        d ||
          ((m.url = c),
          e && (m.w = e),
          r && (m.d = r),
          n && (m.h = n),
          n || r || e || (m.d = 1),
          1 === m.d && (t.has1x = !0),
          (m.set = t),
          p.push(m));
      }
      function i() {
        for (r(j), u = "", o = "in descriptor"; ; ) {
          if (((l = e.charAt(d)), "in descriptor" === o)) {
            if (n(l)) {
              u && (a.push(u), (u = ""), (o = "after descriptor"));
            } else {
              if ("," === l) return (d += 1), u && a.push(u), void s();
              if ("(" === l) {
                (u += l), (o = "in parens");
              } else {
                if ("" === l) return u && a.push(u), void s();
                u += l;
              }
            }
          } else if ("in parens" === o) {
            if (")" === l) {
              (u += l), (o = "in descriptor");
            } else {
              if ("" === l) return a.push(u), void s();
              u += l;
            }
          } else if ("after descriptor" === o)
            if (n(l));
            else {
              if ("" === l) return void s();
              (o = "in descriptor"), (d -= 1);
            }
          d += 1;
        }
      }
      for (var c, a, u, o, l, f = e.length, d = 0, p = []; ; ) {
        if ((r(q), d >= f)) return p;
        (c = r(V)),
          (a = []),
          "," === c.slice(-1) ? ((c = c.replace(_, "")), s()) : i();
      }
    }
    function p(e) {
      function t(e) {
        function t() {
          i && (c.push(i), (i = ""));
        }
        function r() {
          c[0] && (a.push(c), (c = []));
        }
        for (var s, i = "", c = [], a = [], u = 0, o = 0, l = !1; ; ) {
          if (((s = e.charAt(o)), "" === s)) return t(), r(), a;
          if (l) {
            if ("*" === s && "/" === e[o + 1]) {
              (l = !1), (o += 2), t();
              continue;
            }
            o += 1;
          } else {
            if (n(s)) {
              if ((e.charAt(o - 1) && n(e.charAt(o - 1))) || !i) {
                o += 1;
                continue;
              }
              if (0 === u) {
                t(), (o += 1);
                continue;
              }
              s = " ";
            } else if ("(" === s) {
              u += 1;
            } else if (")" === s) {
              u -= 1;
            } else {
              if ("," === s) {
                t(), r(), (o += 1);
                continue;
              }
              if ("/" === s && "*" === e.charAt(o + 1)) {
                (l = !0), (o += 2);
                continue;
              }
            }
            (i += s), (o += 1);
          }
        }
      }
      function r(e) {
        return l.test(e) && parseFloat(e) >= 0
          ? !0
          : f.test(e)
          ? !0
          : "0" === e || "-0" === e || "+0" === e
          ? !0
          : !1;
      }
      var s,
        i,
        c,
        a,
        u,
        o,
        l =
          /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        f = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      for (i = t(e), c = i.length, s = 0; c > s; s++)
        if (((a = i[s]), (u = a[a.length - 1]), r(u))) {
          if (((o = u), a.pop(), 0 === a.length)) return o;
          if (((a = a.join(" ")), v.matchesMedia(a))) return o;
        }
      return "100vw";
    }
    t.createElement("picture");
    var m,
      h,
      g,
      A,
      v = {},
      w = function () {},
      S = t.createElement("img"),
      x = S.getAttribute,
      y = S.setAttribute,
      E = S.removeAttribute,
      b = t.documentElement,
      z = {},
      T = {
        algorithm: "",
      },
      R = "data-pfsrc",
      C = R + "set",
      M = navigator.userAgent,
      L =
        /rident/.test(M) ||
        (/ecko/.test(M) && M.match(/rv\:(\d+)/) && RegExp.$1 > 35),
      P = "currentSrc",
      D = /\s+\+?\d+(e\d+)?w/,
      U = /(\([^)]+\))?\s*(.+)/,
      $ = e.picturefillCFG,
      k =
        "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
      I = "font-size:100%!important;",
      W = !0,
      B = {},
      Q = {},
      F = e.devicePixelRatio,
      G = {
        px: 1,
        in: 96,
      },
      H = t.createElement("a"),
      N = !1,
      j = /^[ \t\n\r\u000c]+/,
      q = /^[, \t\n\r\u000c]+/,
      V = /^[^ \t\n\r\u000c]+/,
      _ = /[,]+$/,
      O = /^\d+$/,
      J = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      K = function (e, t, r, n) {
        e.addEventListener
          ? e.addEventListener(t, r, n || !1)
          : e.attachEvent && e.attachEvent("on" + t, r);
      },
      X = function (e) {
        var t = {};
        return function (r) {
          return r in t || (t[r] = e(r)), t[r];
        };
      },
      Y = (function () {
        var e = /^([\d\.]+)(em|vw|px)$/,
          t = function () {
            for (var e = arguments, t = 0, r = e[0]; ++t in e; )
              r = r.replace(e[t], e[++t]);
            return r;
          },
          r = X(function (e) {
            return (
              "return " +
              t(
                (e || "").toLowerCase(),
                /\band\b/g,
                "&&",
                /,/g,
                "||",
                /min-([a-z-\s]+):/g,
                "e.$1>=",
                /max-([a-z-\s]+):/g,
                "e.$1<=",
                /calc([^)]+)/g,
                "($1)",
                /(\d+[\.]*[\d]*)([a-z]+)/g,
                "($1 * e.$2)",
                /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                ""
              ) +
              ";"
            );
          });
        return function (t, n) {
          var s;
          if (!(t in B))
            if (((B[t] = !1), n && (s = t.match(e)))) {
              B[t] = s[1] * G[s[2]];
            } else
              try {
                B[t] = new Function("e", r(t))(G);
              } catch (i) {}
          return B[t];
        };
      })(),
      Z = function (e, t) {
        return (
          e.w
            ? ((e.cWidth = v.calcListLength(t || "100vw")),
              (e.res = e.w / e.cWidth))
            : (e.res = e.d),
          e
        );
      },
      ee = function (e) {
        var r,
          n,
          s,
          i = e || {};
        if (
          (i.elements &&
            1 === i.elements.nodeType &&
            ("IMG" === i.elements.nodeName.toUpperCase()
              ? (i.elements = [i.elements])
              : ((i.context = i.elements), (i.elements = null))),
          (r =
            i.elements ||
            v.qsa(
              i.context || t,
              i.reevaluate || i.reselect ? v.sel : v.selShort
            )),
          (s = r.length))
        ) {
          for (v.setupRun(i), N = !0, n = 0; s > n; n++) v.fillImg(r[n], i);
          v.teardownRun(i);
        }
      };
    (m =
      e.console && console.warn
        ? function (e) {
            console.warn(e);
          }
        : w),
      P in S || (P = "src"),
      (z["image/jpeg"] = !0),
      (z["image/gif"] = !0),
      (z["image/png"] = !0),
      (z["image/svg+xml"] = t.implementation.hasFeature(
        "http://wwwindow.w3.org/TR/SVG11/feature#Image",
        "1.1"
      )),
      (v.ns = ("pf" + new Date().getTime()).substr(0, 9)),
      (v.supSrcset = "srcset" in S),
      (v.supSizes = "sizes" in S),
      (v.supPicture = !!e.HTMLPictureElement),
      v.supSrcset &&
        v.supPicture &&
        !v.supSizes &&
        !(function (e) {
          (S.srcset = "data:,a"),
            (e.src = "data:,a"),
            (v.supSrcset = S.complete === e.complete),
            (v.supPicture = v.supSrcset && v.supPicture);
        })(t.createElement("img")),
      (v.selShort = "picture>img,img[srcset]"),
      (v.sel = v.selShort),
      (v.cfg = T),
      v.supSrcset && (v.sel += ",img[" + C + "]"),
      (v.DPR = F || 1),
      (v.u = G),
      (v.types = z),
      (g = v.supSrcset && !v.supSizes),
      (v.setSize = w),
      (v.makeUrl = X(function (e) {
        return (H.href = e), H.href;
      })),
      (v.qsa = function (e, t) {
        return e.querySelectorAll(t);
      }),
      (v.matchesMedia = function () {
        return (
          e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
            ? (v.matchesMedia = function (e) {
                return !e || matchMedia(e).matches;
              })
            : (v.matchesMedia = v.mMQ),
          v.matchesMedia.apply(this, arguments)
        );
      }),
      (v.mMQ = function (e) {
        return e ? Y(e) : !0;
      }),
      (v.calcLength = function (e) {
        var t = Y(e, !0) || !1;
        return 0 > t && (t = !1), t;
      }),
      (v.supportsType = function (e) {
        return e ? z[e] : !0;
      }),
      (v.parseSize = X(function (e) {
        var t = (e || "").match(U);
        return {
          media: t && t[1],
          length: t && t[2],
        };
      })),
      (v.parseSet = function (e) {
        return e.cands || (e.cands = d(e.srcset, e)), e.cands;
      }),
      (v.getEmValue = function () {
        var e;
        if (!h && (e = t.body)) {
          var r = t.createElement("div"),
            n = b.style.cssText,
            s = e.style.cssText;
          (r.style.cssText = k),
            (b.style.cssText = I),
            (e.style.cssText = I),
            e.appendChild(r),
            (h = r.offsetWidth),
            e.removeChild(r),
            (h = parseFloat(h, 10)),
            (b.style.cssText = n),
            (e.style.cssText = s);
        }
        return h || 16;
      }),
      (v.calcListLength = function (e) {
        if (!(e in Q) || T.uT) {
          var t = v.calcLength(p(e));
          Q[e] = t ? t : G.width;
        }
        return Q[e];
      }),
      (v.setRes = function (e) {
        var t;
        if (e) {
          t = v.parseSet(e);
          for (var r = 0, n = t.length; n > r; r++) Z(t[r], e.sizes);
        }
        return t;
      }),
      (v.setRes.res = Z),
      (v.applySetCandidate = function (e, t) {
        if (e.length) {
          var r,
            n,
            s,
            i,
            a,
            l,
            f,
            d,
            p,
            m = t[v.ns],
            h = v.DPR;
          if (
            ((l = m.curSrc || t[P]),
            (f = m.curCan || o(t, l, e[0].set)),
            f &&
              f.set === e[0].set &&
              ((p = L && !t.complete && f.res - 0.1 > h),
              p || ((f.cached = !0), f.res >= h && (a = f))),
            !a)
          )
            for (e.sort(u), i = e.length, a = e[i - 1], n = 0; i > n; n++)
              if (((r = e[n]), r.res >= h)) {
                (s = n - 1),
                  (a =
                    e[s] &&
                    (p || l !== v.makeUrl(r.url)) &&
                    c(e[s].res, r.res, h, e[s].cached)
                      ? e[s]
                      : r);
                break;
              }
          a &&
            ((d = v.makeUrl(a.url)),
            (m.curSrc = d),
            (m.curCan = a),
            d !== l && v.setSrc(t, a),
            v.setSize(t));
        }
      }),
      (v.setSrc = function (e, t) {
        var r;
        (e.src = t.url),
          "image/svg+xml" === t.set.type &&
            ((r = e.style.width),
            (e.style.width = e.offsetWidth + 1 + "px"),
            e.offsetWidth + 1 && (e.style.width = r));
      }),
      (v.getSet = function (e) {
        var t,
          r,
          n,
          s = !1,
          i = e[v.ns].sets;
        for (t = 0; t < i.length && !s; t++)
          if (
            ((r = i[t]),
            r.srcset && v.matchesMedia(r.media) && (n = v.supportsType(r.type)))
          ) {
            "pending" === n && (r = n), (s = r);
            break;
          }
        return s;
      }),
      (v.parseSets = function (e, t, n) {
        var s,
          i,
          c,
          a,
          u = t && "PICTURE" === t.nodeName.toUpperCase(),
          o = e[v.ns];
        (o.src === r || n.src) &&
          ((o.src = x.call(e, "src")),
          o.src ? y.call(e, R, o.src) : E.call(e, R)),
          (o.srcset === r || n.srcset || !v.supSrcset || e.srcset) &&
            ((s = x.call(e, "srcset")), (o.srcset = s), (a = !0)),
          (o.sets = []),
          u && ((o.pic = !0), f(t, o.sets)),
          o.srcset
            ? ((i = {
                srcset: o.srcset,
                sizes: x.call(e, "sizes"),
              }),
              o.sets.push(i),
              (c = (g || o.src) && D.test(o.srcset || "")),
              c ||
                !o.src ||
                l(o.src, i) ||
                i.has1x ||
                ((i.srcset += ", " + o.src),
                i.cands.push({
                  url: o.src,
                  d: 1,
                  set: i,
                })))
            : o.src &&
              o.sets.push({
                srcset: o.src,
                sizes: null,
              }),
          (o.curCan = null),
          (o.curSrc = r),
          (o.supported = !(u || (i && !v.supSrcset) || c)),
          a &&
            v.supSrcset &&
            !o.supported &&
            (s ? (y.call(e, C, s), (e.srcset = "")) : E.call(e, C)),
          o.supported &&
            !o.srcset &&
            ((!o.src && e.src) || e.src !== v.makeUrl(o.src)) &&
            (null === o.src ? e.removeAttribute("src") : (e.src = o.src)),
          (o.parsed = !0);
      }),
      (v.fillImg = function (e, t) {
        var r,
          n = t.reselect || t.reevaluate;
        e[v.ns] || (e[v.ns] = {}),
          (r = e[v.ns]),
          (n || r.evaled !== A) &&
            ((!r.parsed || t.reevaluate) && v.parseSets(e, e.parentNode, t),
            r.supported ? (r.evaled = A) : a(e));
      }),
      (v.setupRun = function () {
        (!N || W || F !== e.devicePixelRatio) && i();
      }),
      v.supPicture
        ? ((ee = w), (v.fillImg = w))
        : !(function () {
            var r,
              n = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
              s = function () {
                var e = t.readyState || "";
                (i = setTimeout(s, "loading" === e ? 200 : 999)),
                  t.body &&
                    (v.fillImgs(), (r = r || n.test(e)), r && clearTimeout(i));
              },
              i = setTimeout(s, t.body ? 9 : 99),
              c = function (e, t) {
                var r,
                  n,
                  s = function () {
                    var i = new Date() - n;
                    t > i ? (r = setTimeout(s, t - i)) : ((r = null), e());
                  };
                return function () {
                  (n = new Date()), r || (r = setTimeout(s, t));
                };
              },
              a = b.clientHeight,
              u = function () {
                (W =
                  Math.max(e.innerWidth || 0, b.clientWidth) !== G.width ||
                  b.clientHeight !== a),
                  (a = b.clientHeight),
                  W && v.fillImgs();
              };
            K(e, "resize", c(u, 99)), K(t, "readystatechange", s);
          })(),
      (v.picturefill = ee),
      (v.fillImgs = ee),
      (v.teardownRun = w),
      (ee._ = v),
      (e.picturefillCFG = {
        pf: v,
        push: function (e) {
          var t = e.shift();
          "function" == typeof v[t]
            ? v[t].apply(v, e)
            : ((T[t] = e[0]),
              N &&
                v.fillImgs({
                  reselect: !0,
                }));
        },
      });
    for (; $ && $.length; ) e.picturefillCFG.push($.shift());
    (e.picturefill = ee),
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = ee)
        : "function" == typeof define &&
          define.amd &&
          define("picturefill", function () {
            return ee;
          }),
      v.supPicture ||
        (z["image/webp"] = s(
          "image/webp",
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
        ));
  })(window, document);
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.element = b),
      (this.options = a.extend({}, g, c)),
      (this._defaults = g),
      (this._name = f),
      this.init();
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide();
      },
      showElement: function (a) {
        a.show();
      },
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft();
        },
        setLeft: function (a, b) {
          a.scrollLeft(b);
        },
        getTop: function (a) {
          return a.scrollTop();
        },
        setTop: function (a, b) {
          a.scrollTop(b);
        },
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10);
        },
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10);
        },
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        },
      },
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b);
        },
        setTop: function (a, b) {
          a.css("top", b);
        },
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] =
            "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
        },
      },
    },
    j = (function () {
      var b,
        c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break;
        }
      return (
        "WebkitOpacity" in d && (e = "Webkit"),
        "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return (
            e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
          );
        }
      );
    })(),
    k = j("transform"),
    l =
      a("<div />", {
        style: "background:#fff",
      }).css("background-position-x") !== d,
    m = l
      ? function (a, b, c) {
          a.css({
            "background-position-x": b,
            "background-position-y": c,
          });
        }
      : function (a, b, c) {
          a.css("background-position", b + " " + c);
        },
    n = l
      ? function (a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y"),
          ];
        }
      : function (a) {
          return a.css("background-position").split(" ");
        },
    o =
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.mozRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1e3 / 60);
      };
  (e.prototype = {
    init: function () {
      (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({
          firstLoad: !0,
        }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b),
        (this.$scrollElement = a(this.element)),
        (this.$element = this.element === b ? a("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== d
            ? a(this.options.viewportElement)
            : this.$scrollElement[0] === b ||
              "scroll" === this.options.scrollProperty
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      (this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return b.getTop(a.$scrollElement);
        });
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      (this._setScrollLeft =
        "function" == typeof e
          ? function (a) {
              e(b.$scrollElement, a);
            }
          : a.noop),
        (this._setScrollTop =
          "function" == typeof f
            ? function (a) {
                f(b.$scrollElement, a);
              }
            : a.noop),
        (this._setPosition =
          d.setPosition ||
          function (a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e),
              b.options.verticalScrolling && d.setTop(a, f, g);
          });
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive &&
        d.bind("load." + this.name, function () {
          c.refresh();
        }),
        d.bind("resize." + this.name, function () {
          c._detectViewport(), c.options.responsive && c.refresh();
        });
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      (c && c.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        c &&
          c.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          a(b).load(function () {
            var a = d._getScrollLeft(),
              b = d._getScrollTop();
            d._setScrollLeft(a + 1),
              d._setScrollTop(b + 1),
              d._setScrollLeft(a),
              d._setScrollTop(b);
          }),
        this._setScrollLeft(e),
        this._setScrollTop(f);
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = b ? a.top : 0),
        (this.viewportOffsetLeft = b ? a.left : 0);
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop();
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--)
          this.particles[c].$element.data("stellar-elementIsActive", d);
      (this.particles = []),
        this.options.parallaxElements &&
          this.$element.find("[data-stellar-ratio]").each(function () {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = a(this),
              n = 0,
              o = 0,
              p = 0,
              q = 0;
            if (m.data("stellar-elementIsActive")) {
              if (m.data("stellar-elementIsActive") !== this) return;
            } else m.data("stellar-elementIsActive", this);
            b.options.showElement(m),
              m.data("stellar-startingLeft")
                ? (m.css("left", m.data("stellar-startingLeft")),
                  m.css("top", m.data("stellar-startingTop")))
                : (m.data("stellar-startingLeft", m.css("left")),
                  m.data("stellar-startingTop", m.css("top"))),
              (f = m.position().left),
              (g = m.position().top),
              (h =
                "auto" === m.css("margin-left")
                  ? 0
                  : parseInt(m.css("margin-left"), 10)),
              (i =
                "auto" === m.css("margin-top")
                  ? 0
                  : parseInt(m.css("margin-top"), 10)),
              (k = m.offset().left - h),
              (l = m.offset().top - i),
              m.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((n = p), (o = q), (j = b), !1)
                  : ((p += b.position().left), void (q += b.position().top));
              }),
              (c =
                m.data("stellar-horizontal-offset") !== d
                  ? m.data("stellar-horizontal-offset")
                  : j !== d && j.data("stellar-horizontal-offset") !== d
                  ? j.data("stellar-horizontal-offset")
                  : b.horizontalOffset),
              (e =
                m.data("stellar-vertical-offset") !== d
                  ? m.data("stellar-vertical-offset")
                  : j !== d && j.data("stellar-vertical-offset") !== d
                  ? j.data("stellar-vertical-offset")
                  : b.verticalOffset),
              b.particles.push({
                $element: m,
                $offsetParent: j,
                isFixed: "fixed" === m.css("position"),
                horizontalOffset: c,
                verticalOffset: e,
                startingPositionLeft: f,
                startingPositionTop: g,
                startingOffsetLeft: k,
                startingOffsetTop: l,
                parentOffsetLeft: n,
                parentOffsetTop: o,
                stellarRatio:
                  m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                width: m.outerWidth(!0),
                height: m.outerHeight(!0),
                isHidden: !1,
              });
          });
    },
    _findBackgrounds: function () {
      var b,
        c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
          ((b = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
            (b = b.add(this.$element)),
          b.each(function () {
            var b,
              g,
              h,
              i,
              j,
              k,
              l,
              o = a(this),
              p = n(o),
              q = 0,
              r = 0,
              s = 0,
              t = 0;
            if (o.data("stellar-backgroundIsActive")) {
              if (o.data("stellar-backgroundIsActive") !== this) return;
            } else o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft")
              ? m(
                  o,
                  o.data("stellar-backgroundStartingLeft"),
                  o.data("stellar-backgroundStartingTop")
                )
              : (o.data("stellar-backgroundStartingLeft", p[0]),
                o.data("stellar-backgroundStartingTop", p[1])),
              (h =
                "auto" === o.css("margin-left")
                  ? 0
                  : parseInt(o.css("margin-left"), 10)),
              (i =
                "auto" === o.css("margin-top")
                  ? 0
                  : parseInt(o.css("margin-top"), 10)),
              (j = o.offset().left - h - e),
              (k = o.offset().top - i - f),
              o.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((q = s), (r = t), (l = b), !1)
                  : ((s += b.position().left), void (t += b.position().top));
              }),
              (b =
                o.data("stellar-horizontal-offset") !== d
                  ? o.data("stellar-horizontal-offset")
                  : l !== d && l.data("stellar-horizontal-offset") !== d
                  ? l.data("stellar-horizontal-offset")
                  : c.horizontalOffset),
              (g =
                o.data("stellar-vertical-offset") !== d
                  ? o.data("stellar-vertical-offset")
                  : l !== d && l.data("stellar-vertical-offset") !== d
                  ? l.data("stellar-vertical-offset")
                  : c.verticalOffset),
              c.backgrounds.push({
                $element: o,
                $offsetParent: l,
                isFixed: "fixed" === o.css("background-attachment"),
                horizontalOffset: b,
                verticalOffset: g,
                startingValueLeft: p[0],
                startingValueTop: p[1],
                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                  ? 0
                  : parseInt(p[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                  ? 0
                  : parseInt(p[1], 10),
                startingPositionLeft: o.position().left,
                startingPositionTop: o.position().top,
                startingOffsetLeft: j,
                startingOffsetTop: k,
                parentOffsetLeft: q,
                parentOffsetTop: r,
                stellarRatio:
                  o.data("stellar-background-ratio") === d
                    ? 1
                    : o.data("stellar-background-ratio"),
              });
          }));
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)
        (a = this.particles[e]),
          (b = a.$element.data("stellar-startingLeft")),
          (c = a.$element.data("stellar-startingTop")),
          this._setPosition(a.$element, b, b, c, c),
          this.options.showElement(a.$element),
          a.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)
        (d = this.backgrounds[e]),
          d.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          m(d.$element, d.startingValueLeft, d.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = a.noop),
        a(b)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            d.bind("resize.horizontal-" + this.name, function () {
              c.horizontalOffset = c.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            d.bind("resize.vertical-" + this.name, function () {
              c.verticalOffset = c.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (
        this.currentScrollLeft !== k ||
        this.currentScrollTop !== l ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = k,
            this.currentScrollTop = l,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight,
            j = this.particles.length - 1;
          j >= 0;
          j--
        )
          (a = this.particles[j]),
            (b = a.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((f =
                  (k +
                    a.horizontalOffset +
                    this.viewportOffsetLeft +
                    a.startingPositionLeft -
                    a.startingOffsetLeft +
                    a.parentOffsetLeft) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionLeft),
                (h = f - a.startingPositionLeft + a.startingOffsetLeft))
              : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((g =
                  (l +
                    a.verticalOffset +
                    this.viewportOffsetTop +
                    a.startingPositionTop -
                    a.startingOffsetTop +
                    a.parentOffsetTop) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionTop),
                (i = g - a.startingPositionTop + a.startingOffsetTop))
              : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
            this.options.hideDistantElements &&
              ((o =
                !this.options.horizontalScrolling ||
                (h + a.width > (a.isFixed ? 0 : k) &&
                  h <
                    (a.isFixed ? 0 : k) +
                      this.viewportWidth +
                      this.viewportOffsetLeft)),
              (n =
                !this.options.verticalScrolling ||
                (i + a.height > (a.isFixed ? 0 : l) &&
                  i <
                    (a.isFixed ? 0 : l) +
                      this.viewportHeight +
                      this.viewportOffsetTop))),
            o && n
              ? (a.isHidden &&
                  (this.options.showElement(a.$element), (a.isHidden = !1)),
                this._setPosition(
                  a.$element,
                  f,
                  a.startingPositionLeft,
                  g,
                  a.startingPositionTop
                ))
              : a.isHidden ||
                (this.options.hideElement(a.$element), (a.isHidden = !0));
        for (j = this.backgrounds.length - 1; j >= 0; j--)
          (c = this.backgrounds[j]),
            (b = c.isFixed ? 0 : 1),
            (d = this.options.horizontalScrolling
              ? (k +
                  c.horizontalOffset -
                  this.viewportOffsetLeft -
                  c.startingOffsetLeft +
                  c.parentOffsetLeft -
                  c.startingBackgroundPositionLeft) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueLeft),
            (e = this.options.verticalScrolling
              ? (l +
                  c.verticalOffset -
                  this.viewportOffsetTop -
                  c.startingOffsetTop +
                  c.parentOffsetTop -
                  c.startingBackgroundPositionTop) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueTop),
            m(c.$element, d, e);
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), (b = !1);
        },
        d = function () {
          b || (o(c), (b = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, d), d();
    },
    _startAnimationLoop: function () {
      var a = this;
      (this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (a.fn[f] = function (b) {
      var c = arguments;
      return b === d || "object" == typeof b
        ? this.each(function () {
            a.data(this, "plugin_" + f) ||
              a.data(this, "plugin_" + f, new e(this, b));
          })
        : "string" == typeof b && "_" !== b[0] && "init" !== b
        ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e &&
              "function" == typeof d[b] &&
              d[b].apply(d, Array.prototype.slice.call(c, 1)),
              "destroy" === b && a.data(this, "plugin_" + f, null);
          })
        : void 0;
    }),
    (a[f] = function () {
      var c = a(b);
      return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0));
    }),
    (a[f].scrollProperty = h),
    (a[f].positionProperty = i),
    (b.Stellar = e);
})(jQuery, this, document);
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global.moment = factory());
})(this, function () {
  "use strict";
  var hookCallback;
  function utils_hooks__hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return Object.prototype.toString.call(input) === "[object Array]";
  }
  function isDate(input) {
    return (
      input instanceof Date ||
      Object.prototype.toString.call(input) === "[object Date]"
    );
  }
  function map(arr, fn) {
    var res = [],
      i;
    for (i = 0; i < arr.length; ++i) res.push(fn(arr[i], i));
    return res;
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function extend(a, b) {
    for (var i in b) if (hasOwnProp(b, i)) a[i] = b[i];
    if (hasOwnProp(b, "toString")) a.toString = b.toString;
    if (hasOwnProp(b, "valueOf")) a.valueOf = b.valueOf;
    return a;
  }
  function create_utc__createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) m._pf = defaultParsingFlags();
    return m._pf;
  }
  function valid__isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      m._isValid =
        !isNaN(m._d.getTime()) &&
        flags.overflow < 0 &&
        !flags.empty &&
        !flags.invalidMonth &&
        !flags.invalidWeekday &&
        !flags.nullInput &&
        !flags.invalidFormat &&
        !flags.userInvalidated;
      if (m._strict)
        m._isValid =
          m._isValid &&
          flags.charsLeftOver === 0 &&
          flags.unusedTokens.length === 0 &&
          flags.bigHour === undefined;
    }
    return m._isValid;
  }
  function valid__createInvalid(flags) {
    var m = create_utc__createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else getParsingFlags(m).userInvalidated = true;
    return m;
  }
  var momentProperties = (utils_hooks__hooks.momentProperties = []);
  function copyConfig(to, from) {
    var i, prop, val;
    if (typeof from._isAMomentObject !== "undefined")
      to._isAMomentObject = from._isAMomentObject;
    if (typeof from._i !== "undefined") to._i = from._i;
    if (typeof from._f !== "undefined") to._f = from._f;
    if (typeof from._l !== "undefined") to._l = from._l;
    if (typeof from._strict !== "undefined") to._strict = from._strict;
    if (typeof from._tzm !== "undefined") to._tzm = from._tzm;
    if (typeof from._isUTC !== "undefined") to._isUTC = from._isUTC;
    if (typeof from._offset !== "undefined") to._offset = from._offset;
    if (typeof from._pf !== "undefined") to._pf = getParsingFlags(from);
    if (typeof from._locale !== "undefined") to._locale = from._locale;
    if (momentProperties.length > 0)
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (typeof val !== "undefined") to[prop] = val;
      }
    return to;
  }
  var updateInProgress = false;
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (updateInProgress === false) {
      updateInProgress = true;
      utils_hooks__hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return (
      obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else return Math.floor(number);
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
      value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber))
      value = absFloor(coercedNumber);
    return value;
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;
    for (i = 0; i < len; i++)
      if (
        (dontConvert && array1[i] !== array2[i]) ||
        (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
      )
        diffs++;
    return diffs + lengthDiff;
  }
  function Locale() {}
  var locales = {},
    globalLocale;
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0,
      j,
      next,
      locale,
      split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split("-") : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join("-"));
        if (locale) return locale;
        if (
          next &&
          next.length >= j &&
          compareArrays(split, next, true) >= j - 1
        )
          break;
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (
      !locales[name] &&
      typeof module !== "undefined" &&
      module &&
      module.exports
    )
      try {
        oldLocale = globalLocale._abbr;
        require("./locale/" + name);
        locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    return locales[name];
  }
  function locale_locales__getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (typeof values === "undefined") {
        data = locale_locales__getLocale(key);
      } else data = defineLocale(key, values);
      if (data) globalLocale = data;
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, values) {
    if (values !== null) {
      values.abbr = name;
      locales[name] = locales[name] || new Locale();
      locales[name].set(values);
      locale_locales__getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function locale_locales__getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
    if (!key) return globalLocale;
    if (!isArray(key)) {
      locale = loadLocale(key);
      if (locale) return locale;
      key = [key];
    }
    return chooseLocale(key);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === "string"
      ? aliases[units] || aliases[units.toLowerCase()]
      : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
      normalizedProp,
      prop;
    for (prop in inputObject)
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
      }
    return normalizedInput;
  }
  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        get_set__set(this, unit, value);
        utils_hooks__hooks.updateOffset(this, keepTime);
        return this;
      } else return get_set__get(this, unit);
    };
  }
  function get_set__get(mom, unit) {
    return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]();
  }
  function get_set__set(mom, unit, value) {
    return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
  }
  function getSet(units, value) {
    var unit;
    if (typeof units === "object") {
      for (unit in units) this.set(unit, units[unit]);
    } else {
      units = normalizeUnits(units);
      if (typeof this[units] === "function") return this[units](value);
    }
    return this;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
    return (
      (sign ? (forceSign ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
      absNumber
    );
  }
  var formattingTokens =
      /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === "string")
      func = function () {
        return this[callback]();
      };
    if (token) formatTokenFunctions[token] = func;
    if (padded)
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    if (ordinal)
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, "");
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
      i,
      length;
    for (i = 0, length = array.length; i < length; i++)
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else array[i] = removeFormattingTokens(array[i]);
    return function (mom) {
      var output = "";
      for (i = 0; i < length; i++)
        output +=
          array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      return output;
    };
  }
  function formatMoment(m, format) {
    if (!m.isValid()) return m.localeData().invalidDate();
    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
      formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var match1 = /\d/,
    match2 = /\d\d/,
    match3 = /\d{3}/,
    match4 = /\d{4}/,
    match6 = /[+-]?\d{6}/,
    match1to2 = /\d\d?/,
    match1to3 = /\d{1,3}/,
    match1to4 = /\d{1,4}/,
    match1to6 = /[+-]?\d{1,6}/,
    matchUnsigned = /\d+/,
    matchSigned = /[+-]?\d+/,
    matchOffset = /Z|[+-]\d\d:?\d\d/gi,
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
    matchWord =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    regexes = {};
  function isFunction(sth) {
    return (
      typeof sth === "function" &&
      Object.prototype.toString.call(sth) === "[object Function]"
    );
  }
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex)
      ? regex
      : function (isStrict) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
    return regexes[token](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return s
      .replace("\\", "")
      .replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }
      )
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
      func = callback;
    if (typeof token === "string") token = [token];
    if (typeof callback === "number")
      func = function (input, array) {
        array[callback] = toInt(input);
      };
    for (i = 0; i < token.length; i++) tokens[token[i]] = func;
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token))
      tokens[token](input, config._a, config, token);
  }
  var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6;
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  addFormatToken("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken("MMMM", 0, 0, function (format) {
    return this.localeData().months(this, format);
  });
  addUnitAlias("month", "M");
  addRegexToken("M", match1to2);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", matchWord);
  addRegexToken("MMMM", matchWord);
  addParseToken(["M", "MM"], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else getParsingFlags(config).invalidMonth = input;
  });
  var defaultLocaleMonths =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    );
  function localeMonths(m) {
    return this._months[m.month()];
  }
  var defaultLocaleMonthsShort =
    "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  function localeMonthsShort(m) {
    return this._monthsShort[m.month()];
  }
  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          "^" + this.months(mom, "").replace(".", "") + "$",
          "i"
        );
        this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(mom, "").replace(".", "") + "$",
          "i"
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (
        strict &&
        format === "MMMM" &&
        this._longMonthsParse[i].test(monthName)
      ) {
        return i;
      } else if (
        strict &&
        format === "MMM" &&
        this._shortMonthsParse[i].test(monthName)
      ) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) return i;
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (typeof value === "string") {
      value = mom.localeData().monthsParse(value);
      if (typeof value !== "number") return mom;
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      utils_hooks__hooks.updateOffset(this, true);
      return this;
    } else return get_set__get(this, "Month");
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function checkOverflow(m) {
    var overflow,
      a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow =
        a[MONTH] < 0 || a[MONTH] > 11
          ? MONTH
          : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
          ? DATE
          : a[HOUR] < 0 ||
            a[HOUR] > 24 ||
            (a[HOUR] === 24 &&
              (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0))
          ? HOUR
          : a[MINUTE] < 0 || a[MINUTE] > 59
          ? MINUTE
          : a[SECOND] < 0 || a[SECOND] > 59
          ? SECOND
          : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
          ? MILLISECOND
          : -1;
      if (
        getParsingFlags(m)._overflowDayOfYear &&
        (overflow < YEAR || overflow > DATE)
      )
        overflow = DATE;
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  function warn(msg) {
    if (
      utils_hooks__hooks.suppressDeprecationWarnings === false &&
      typeof console !== "undefined" &&
      console.warn
    )
      console.warn("Deprecation warning: " + msg);
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (firstTime) {
        warn(msg + "\n" + new Error().stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  utils_hooks__hooks.suppressDeprecationWarnings = false;
  var from_string__isoRegex =
      /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    isoDates = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
      ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
      ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d{2}/],
      ["YYYY-DDD", /\d{4}-\d{3}/],
    ],
    isoTimes = [
      ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
      ["HH:mm", /(T| )\d\d:\d\d/],
      ["HH", /(T| )\d\d/],
    ],
    aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
  function configFromISO(config) {
    var i,
      l,
      string = config._i,
      match = from_string__isoRegex.exec(string);
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDates.length; i < l; i++)
        if (isoDates[i][1].exec(string)) {
          config._f = isoDates[i][0];
          break;
        }
      for (i = 0, l = isoTimes.length; i < l; i++)
        if (isoTimes[i][1].exec(string)) {
          config._f += (match[6] || " ") + isoTimes[i][0];
          break;
        }
      if (string.match(matchOffset)) config._f += "Z";
      configFromStringAndFormat(config);
    } else config._isValid = false;
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  utils_hooks__hooks.createFromInputFallback = deprecate(
    "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
    function (config) {
      config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
    }
  );
  function createDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);
    if (y < 1970) date.setFullYear(y);
    return date;
  }
  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 1970) date.setUTCFullYear(y);
    return date;
  }
  addFormatToken(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addUnitAlias("year", "y");
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function (input, array) {
    array[YEAR] =
      input.length === 2
        ? utils_hooks__hooks.parseTwoDigitYear(input)
        : toInt(input);
  });
  addParseToken("YY", function (input, array) {
    array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  utils_hooks__hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", false);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addRegexToken("w", match1to2);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(
    ["w", "ww", "W", "WW"],
    function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
    }
  );
  function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek,
      daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
      adjustedMoment;
    if (daysToDayOfWeek > end) daysToDayOfWeek -= 7;
    if (daysToDayOfWeek < end - 7) daysToDayOfWeek += 7;
    adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, "d");
    return {
      week: Math.ceil(adjustedMoment.dayOfYear() / 7),
      year: adjustedMoment.year(),
    };
  }
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6,
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addUnitAlias("dayOfYear", "DDD");
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function dayOfYearFromWeeks(
    year,
    week,
    weekday,
    firstDayOfWeekOfYear,
    firstDayOfWeek
  ) {
    var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear,
      janX = createUTCDate(year, 0, 1 + week1Jan),
      d = janX.getUTCDay(),
      dayOfYear;
    if (d < firstDayOfWeek) d += 7;
    weekday = weekday != null ? 1 * weekday : firstDayOfWeek;
    dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;
    return {
      year: dayOfYear > 0 ? year : year - 1,
      dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear,
    };
  }
  function getSetDayOfYear(input) {
    var dayOfYear =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }
  function defaults(a, b, c) {
    if (a != null) return a;
    if (b != null) return b;
    return c;
  }
  function currentDateArray(config) {
    var now = new Date();
    if (config._useUTC)
      return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
    return [now.getFullYear(), now.getMonth(), now.getDate()];
  }
  function configFromArray(config) {
    var i,
      date,
      input = [],
      currentDate,
      yearToUse;
    if (config._d) return;
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null)
      dayOfYearFromWeekInfo(config);
    if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse))
        getParsingFlags(config)._overflowDayOfYear = true;
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i)
      config._a[i] = input[i] = currentDate[i];
    for (; i < 7; i++)
      config._a[i] = input[i] =
        config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    if (
      config._a[HOUR] === 24 &&
      config._a[MINUTE] === 0 &&
      config._a[SECOND] === 0 &&
      config._a[MILLISECOND] === 0
    ) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(
      null,
      input
    );
    if (config._tzm != null)
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    if (config._nextDay) config._a[HOUR] = 24;
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(
        w.GG,
        config._a[YEAR],
        weekOfYear(local__createLocal(), 1, 4).year
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = defaults(
        w.gg,
        config._a[YEAR],
        weekOfYear(local__createLocal(), dow, doy).year
      );
      week = defaults(w.w, 1);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < dow) ++week;
      } else if (w.e != null) {
        weekday = w.e + dow;
      } else weekday = dow;
    }
    temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
  utils_hooks__hooks.ISO_8601 = function () {};
  function configFromStringAndFormat(config) {
    if (config._f === utils_hooks__hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = "" + config._i,
      i,
      parsedInput,
      tokens,
      token,
      skipped,
      stringLength = string.length,
      totalParsedInputLength = 0;
    tokens =
      expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) ||
        [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0)
          getParsingFlags(config).unusedInput.push(skipped);
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else getParsingFlags(config).unusedTokens.push(token);
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput)
        getParsingFlags(config).unusedTokens.push(token);
    }
    getParsingFlags(config).charsLeftOver =
      stringLength - totalParsedInputLength;
    if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
    if (
      getParsingFlags(config).bigHour === true &&
      config._a[HOUR] <= 12 &&
      config._a[HOUR] > 0
    )
      getParsingFlags(config).bigHour = undefined;
    config._a[HOUR] = meridiemFixWrap(
      config._locale,
      config._a[HOUR],
      config._meridiem
    );
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) return hour;
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) hour += 12;
      if (!isPm && hour === 12) hour = 0;
      return hour;
    } else return hour;
  }
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (!valid__isValid(tempConfig)) continue;
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) return;
    var i = normalizeObjectUnits(config._i);
    config._a = [
      i.year,
      i.month,
      i.day || i.date,
      i.hour,
      i.minute,
      i.second,
      i.millisecond,
    ];
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
      format = config._f;
    config._locale = config._locale || locale_locales__getLocale(config._l);
    if (input === null || (format === undefined && input === ""))
      return valid__createInvalid({
        nullInput: true,
      });
    if (typeof input === "string")
      config._i = input = config._locale.preparse(input);
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else if (isDate(input)) {
      config._d = input;
    } else configFromInput(config);
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
      config._d = new Date();
    } else if (isDate(input)) {
      config._d = new Date(+input);
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (typeof input === "object") {
      configFromObject(config);
    } else if (typeof input === "number") {
      config._d = new Date(input);
    } else utils_hooks__hooks.createFromInputFallback(config);
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (typeof locale === "boolean") {
      strict = locale;
      locale = undefined;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function local__createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
      function () {
        var other = local__createLocal.apply(null, arguments);
        return other < this ? this : other;
      }
    ),
    prototypeMax = deprecate(
      "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
      function () {
        var other = local__createLocal.apply(null, arguments);
        return other > this ? this : other;
      }
    );
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
    if (!moments.length) return local__createLocal();
    res = moments[0];
    for (i = 1; i < moments.length; ++i)
      if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;
    this._milliseconds =
      +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
    this._days = +days + weeks * 7;
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = locale_locales__getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset(),
        sign = "+";
      if (offset < 0) {
        offset = -offset;
        sign = "-";
      }
      return (
        sign +
        zeroFill(~~(offset / 60), 2) +
        separator +
        zeroFill(~~offset % 60, 2)
      );
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchOffset);
  addRegexToken("ZZ", matchOffset);
  addParseToken(["Z", "ZZ"], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(string) {
    var matches = (string || "").match(matchOffset) || [],
      chunk = matches[matches.length - 1] || [],
      parts = (chunk + "").match(chunkOffset) || ["-", 0, 0],
      minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === "+" ? minutes : -minutes;
  }
  function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff =
        (isMoment(input) || isDate(input)
          ? +input
          : +local__createLocal(input)) - +res;
      res._d.setTime(+res._d + diff);
      utils_hooks__hooks.updateOffset(res, false);
      return res;
    } else return local__createLocal(input).local();
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }
  utils_hooks__hooks.updateOffset = function () {};
  function getSetOffset(input, keepLocalTime) {
    var offset = this._offset || 0,
      localAdjust;
    if (input != null) {
      if (typeof input === "string") input = offsetFromString(input);
      if (Math.abs(input) < 16) input = input * 60;
      if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) this.add(localAdjust, "m");
      if (offset !== input)
        if (!keepLocalTime || this._changeInProgress) {
          add_subtract__addSubtract(
            this,
            create__createDuration(input - offset, "m"),
            1,
            false
          );
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          utils_hooks__hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      return this;
    } else return this._isUTC ? offset : getDateOffset(this);
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") input = -input;
      this.utcOffset(input, keepLocalTime);
      return this;
    } else return -this.utcOffset();
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) this.subtract(getDateOffset(this), "m");
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm) {
      this.utcOffset(this._tzm);
    } else if (typeof this._i === "string") this.utcOffset(offsetFromString(this._i));
    return this;
  }
  function hasAlignedHourOffset(input) {
    input = input ? local__createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function isDaylightSavingTimeShifted() {
    if (typeof this._isDSTShifted !== "undefined") return this._isDSTShifted;
    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      var other = c._isUTC
        ? create_utc__createUTC(c._a)
        : local__createLocal(c._a);
      this._isDSTShifted =
        this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else this._isDSTShifted = false;
    return this._isDSTShifted;
  }
  function isLocal() {
    return !this._isUTC;
  }
  function isUtcOffset() {
    return this._isUTC;
  }
  function isUtc() {
    return this._isUTC && this._offset === 0;
  }
  var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    create__isoRegex =
      /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  function create__createDuration(input, key) {
    var duration = input,
      match = null,
      sign,
      ret,
      diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months,
      };
    } else if (typeof input === "number") {
      duration = {};
      if (key) {
        duration[key] = input;
      } else duration.milliseconds = input;
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign,
      };
    } else if (!!(match = create__isoRegex.exec(input))) {
      sign = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        d: parseIso(match[4], sign),
        h: parseIso(match[5], sign),
        m: parseIso(match[6], sign),
        s: parseIso(match[7], sign),
        w: parseIso(match[8], sign),
      };
    } else if (duration == null) {
      duration = {};
    } else if (
      typeof duration === "object" &&
      ("from" in duration || "to" in duration)
    ) {
      diffRes = momentsDifference(
        local__createLocal(duration.from),
        local__createLocal(duration.to)
      );
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, "_locale"))
      ret._locale = input._locale;
    return ret;
  }
  create__createDuration.fn = Duration.prototype;
  function parseIso(inp, sign) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0,
    };
    res.months =
      other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) --res.months;
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          "moment()." +
            name +
            "(period, number) is deprecated. Please use moment()." +
            name +
            "(number, period)."
        );
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === "string" ? +val : val;
      dur = create__createDuration(val, period);
      add_subtract__addSubtract(this, dur, direction);
      return this;
    };
  }
  function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
      days = duration._days,
      months = duration._months;
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) mom._d.setTime(+mom._d + milliseconds * isAdding);
    if (days)
      get_set__set(mom, "Date", get_set__get(mom, "Date") + days * isAdding);
    if (months) setMonth(mom, get_set__get(mom, "Month") + months * isAdding);
    if (updateOffset) utils_hooks__hooks.updateOffset(mom, days || months);
  }
  var add_subtract__add = createAdder(1, "add"),
    add_subtract__subtract = createAdder(-1, "subtract");
  function moment_calendar__calendar(time, formats) {
    var now = time || local__createLocal(),
      sod = cloneWithOffset(now, this).startOf("day"),
      diff = this.diff(sod, "days", true),
      format =
        diff < -6
          ? "sameElse"
          : diff < -1
          ? "lastWeek"
          : diff < 0
          ? "lastDay"
          : diff < 1
          ? "sameDay"
          : diff < 2
          ? "nextDay"
          : diff < 7
          ? "nextWeek"
          : "sameElse";
    return this.format(
      (formats && formats[format]) ||
        this.localeData().calendar(format, this, local__createLocal(now))
    );
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var inputMs;
    units = normalizeUnits(
      typeof units !== "undefined" ? units : "millisecond"
    );
    if (units === "millisecond") {
      input = isMoment(input) ? input : local__createLocal(input);
      return +this > +input;
    } else {
      inputMs = isMoment(input) ? +input : +local__createLocal(input);
      return inputMs < +this.clone().startOf(units);
    }
  }
  function isBefore(input, units) {
    var inputMs;
    units = normalizeUnits(
      typeof units !== "undefined" ? units : "millisecond"
    );
    if (units === "millisecond") {
      input = isMoment(input) ? input : local__createLocal(input);
      return +this < +input;
    } else {
      inputMs = isMoment(input) ? +input : +local__createLocal(input);
      return +this.clone().endOf(units) < inputMs;
    }
  }
  function isBetween(from, to, units) {
    return this.isAfter(from, units) && this.isBefore(to, units);
  }
  function isSame(input, units) {
    var inputMs;
    units = normalizeUnits(units || "millisecond");
    if (units === "millisecond") {
      input = isMoment(input) ? input : local__createLocal(input);
      return +this === +input;
    } else {
      inputMs = +local__createLocal(input);
      return (
        +this.clone().startOf(units) <= inputMs &&
        inputMs <= +this.clone().endOf(units)
      );
    }
  }
  function diff(input, units, asFloat) {
    var that = cloneWithOffset(input, this),
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
      delta,
      output;
    units = normalizeUnits(units);
    if (units === "year" || units === "month" || units === "quarter") {
      output = monthDiff(this, that);
      if (units === "quarter") {
        output = output / 3;
      } else if (units === "year") output = output / 12;
    } else {
      delta = this - that;
      output =
        units === "second"
          ? delta / 1e3
          : units === "minute"
          ? delta / 6e4
          : units === "hour"
          ? delta / 36e5
          : units === "day"
          ? (delta - zoneDelta) / 864e5
          : units === "week"
          ? (delta - zoneDelta) / 6048e5
          : delta;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
      anchor = a.clone().add(wholeMonthDiff, "months"),
      anchor2,
      adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust);
  }
  utils_hooks__hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  function toString() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function moment_format__toISOString() {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
      if ("function" === typeof Date.prototype.toISOString) {
        return this.toDate().toISOString();
      } else return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    } else return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }
  function format(inputString) {
    var output = formatMoment(
      this,
      inputString || utils_hooks__hooks.defaultFormat
    );
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (!this.isValid()) return this.localeData().invalidDate();
    return create__createDuration({
      to: this,
      from: time,
    })
      .locale(this.locale())
      .humanize(!withoutSuffix);
  }
  function fromNow(withoutSuffix) {
    return this.from(local__createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (!this.isValid()) return this.localeData().invalidDate();
    return create__createDuration({
      from: this,
      to: time,
    })
      .locale(this.locale())
      .humanize(!withoutSuffix);
  }
  function toNow(withoutSuffix) {
    return this.to(local__createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = locale_locales__getLocale(key);
      if (newLocaleData != null) this._locale = newLocaleData;
      return this;
    }
  }
  var lang = deprecate(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (key) {
      if (key === undefined) {
        return this.localeData();
      } else return this.locale(key);
    }
  );
  function localeData() {
    return this._locale;
  }
  function startOf(units) {
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0);
    }
    if (units === "week") this.weekday(0);
    if (units === "isoWeek") this.isoWeekday(1);
    if (units === "quarter") this.month(Math.floor(this.month() / 3) * 3);
    return this;
  }
  function endOf(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === "millisecond") return this;
    return this.startOf(units)
      .add(1, units === "isoWeek" ? "week" : units)
      .subtract(1, "ms");
  }
  function to_type__valueOf() {
    return +this._d - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(+this / 1e3);
  }
  function toDate() {
    return this._offset ? new Date(+this) : this._d;
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond(),
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds(),
    };
  }
  function moment_valid__isValid() {
    return valid__isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  addFormatToken(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addUnitAlias("weekYear", "gg");
  addUnitAlias("isoWeekYear", "GG");
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
    }
  );
  addWeekParseToken(["gg", "GG"], function (input, week, config, token) {
    week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  function weeksInYear(year, dow, doy) {
    return weekOfYear(
      local__createLocal([year, 11, 31 + dow - doy]),
      dow,
      doy
    ).week;
  }
  function getSetWeekYear(input) {
    var year = weekOfYear(
      this,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    ).year;
    return input == null ? year : this.add(input - year, "y");
  }
  function getSetISOWeekYear(input) {
    var year = weekOfYear(this, 1, 4).year;
    return input == null ? year : this.add(input - year, "y");
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  addFormatToken("Q", 0, 0, "quarter");
  addUnitAlias("quarter", "Q");
  addRegexToken("Q", match1);
  addParseToken("Q", function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((input - 1) * 3 + (this.month() % 3));
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addUnitAlias("date", "D");
  addRegexToken("D", match1to2);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken("ddd", 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken("dddd", 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", matchWord);
  addRegexToken("ddd", matchWord);
  addRegexToken("dddd", matchWord);
  addWeekParseToken(["dd", "ddd", "dddd"], function (input, week, config) {
    var weekday = config._locale.weekdaysParse(input);
    if (weekday != null) {
      week.d = weekday;
    } else getParsingFlags(config).invalidWeekday = input;
  });
  addWeekParseToken(["d", "e", "E"], function (input, week, config, token) {
    week[token] = toInt(input);
  });
  function parseWeekday(input, locale) {
    if (typeof input !== "string") return input;
    if (!isNaN(input)) return parseInt(input, 10);
    input = locale.weekdaysParse(input);
    if (typeof input === "number") return input;
    return null;
  }
  var defaultLocaleWeekdays =
    "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  function localeWeekdays(m) {
    return this._weekdays[m.day()];
  }
  var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  function localeWeekdaysShort(m) {
    return this._weekdaysShort[m.day()];
  }
  var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  function localeWeekdaysMin(m) {
    return this._weekdaysMin[m.day()];
  }
  function localeWeekdaysParse(weekdayName) {
    var i, mom, regex;
    this._weekdaysParse = this._weekdaysParse || [];
    for (i = 0; i < 7; i++) {
      if (!this._weekdaysParse[i]) {
        mom = local__createLocal([2e3, 1]).day(i);
        regex =
          "^" +
          this.weekdays(mom, "") +
          "|^" +
          this.weekdaysShort(mom, "") +
          "|^" +
          this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (this._weekdaysParse[i].test(weekdayName)) return i;
    }
  }
  function getSetDayOfWeek(input) {
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else return day;
  }
  function getSetLocaleDayOfWeek(input) {
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    return input == null
      ? this.day() || 7
      : this.day(this.day() % 7 ? input : input - 7);
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, function () {
    return this.hours() % 12 || 12;
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase
      );
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2);
  addRegexToken("h", match1to2);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["a", "A"], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? "pm" : "PM";
    } else return isLower ? "am" : "AM";
  }
  var getSetHour = makeGetSet("Hours", true);
  addFormatToken("m", ["mm", 2], 0, "minute");
  addUnitAlias("minute", "m");
  addRegexToken("m", match1to2);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addUnitAlias("second", "s");
  addRegexToken("s", match1to2);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });
  addUnitAlias("millisecond", "ms");
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token;
  for (token = "SSSS"; token.length <= 9; token += "S")
    addRegexToken(token, matchUnsigned);
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S")
    addParseToken(token, parseMs);
  var getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var momentPrototype__proto = Moment.prototype;
  momentPrototype__proto.add = add_subtract__add;
  momentPrototype__proto.calendar = moment_calendar__calendar;
  momentPrototype__proto.clone = clone;
  momentPrototype__proto.diff = diff;
  momentPrototype__proto.endOf = endOf;
  momentPrototype__proto.format = format;
  momentPrototype__proto.from = from;
  momentPrototype__proto.fromNow = fromNow;
  momentPrototype__proto.to = to;
  momentPrototype__proto.toNow = toNow;
  momentPrototype__proto.get = getSet;
  momentPrototype__proto.invalidAt = invalidAt;
  momentPrototype__proto.isAfter = isAfter;
  momentPrototype__proto.isBefore = isBefore;
  momentPrototype__proto.isBetween = isBetween;
  momentPrototype__proto.isSame = isSame;
  momentPrototype__proto.isValid = moment_valid__isValid;
  momentPrototype__proto.lang = lang;
  momentPrototype__proto.locale = locale;
  momentPrototype__proto.localeData = localeData;
  momentPrototype__proto.max = prototypeMax;
  momentPrototype__proto.min = prototypeMin;
  momentPrototype__proto.parsingFlags = parsingFlags;
  momentPrototype__proto.set = getSet;
  momentPrototype__proto.startOf = startOf;
  momentPrototype__proto.subtract = add_subtract__subtract;
  momentPrototype__proto.toArray = toArray;
  momentPrototype__proto.toObject = toObject;
  momentPrototype__proto.toDate = toDate;
  momentPrototype__proto.toISOString = moment_format__toISOString;
  momentPrototype__proto.toJSON = moment_format__toISOString;
  momentPrototype__proto.toString = toString;
  momentPrototype__proto.unix = unix;
  momentPrototype__proto.valueOf = to_type__valueOf;
  momentPrototype__proto.year = getSetYear;
  momentPrototype__proto.isLeapYear = getIsLeapYear;
  momentPrototype__proto.weekYear = getSetWeekYear;
  momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
  momentPrototype__proto.quarter = momentPrototype__proto.quarters =
    getSetQuarter;
  momentPrototype__proto.month = getSetMonth;
  momentPrototype__proto.daysInMonth = getDaysInMonth;
  momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
  momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks =
    getSetISOWeek;
  momentPrototype__proto.weeksInYear = getWeeksInYear;
  momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
  momentPrototype__proto.date = getSetDayOfMonth;
  momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
  momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
  momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
  momentPrototype__proto.dayOfYear = getSetDayOfYear;
  momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
  momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
  momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
  momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds =
    getSetMillisecond;
  momentPrototype__proto.utcOffset = getSetOffset;
  momentPrototype__proto.utc = setOffsetToUTC;
  momentPrototype__proto.local = setOffsetToLocal;
  momentPrototype__proto.parseZone = setOffsetToParsedOffset;
  momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
  momentPrototype__proto.isDST = isDaylightSavingTime;
  momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
  momentPrototype__proto.isLocal = isLocal;
  momentPrototype__proto.isUtcOffset = isUtcOffset;
  momentPrototype__proto.isUtc = isUtc;
  momentPrototype__proto.isUTC = isUtc;
  momentPrototype__proto.zoneAbbr = getZoneAbbr;
  momentPrototype__proto.zoneName = getZoneName;
  momentPrototype__proto.dates = deprecate(
    "dates accessor is deprecated. Use date instead.",
    getSetDayOfMonth
  );
  momentPrototype__proto.months = deprecate(
    "months accessor is deprecated. Use month instead",
    getSetMonth
  );
  momentPrototype__proto.years = deprecate(
    "years accessor is deprecated. Use year instead",
    getSetYear
  );
  momentPrototype__proto.zone = deprecate(
    "moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
    getSetZone
  );
  var momentPrototype = momentPrototype__proto;
  function moment__createUnix(input) {
    return local__createLocal(input * 1e3);
  }
  function moment__createInZone() {
    return local__createLocal.apply(null, arguments).parseZone();
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  };
  function locale_calendar__calendar(key, mom, now) {
    var output = this._calendar[key];
    return typeof output === "function" ? output.call(mom, now) : output;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) return format;
    this._longDateFormat[key] = formatUpper.replace(
      /MMMM|MM|DD|dddd/g,
      function (val) {
        return val.slice(1);
      }
    );
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d",
    defaultOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }
  function preParsePostFormat(string) {
    return string;
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  };
  function relative__relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return typeof output === "function"
      ? output(number, withoutSuffix, string, isFuture)
      : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? "future" : "past"];
    return typeof format === "function"
      ? format(output)
      : format.replace(/%s/i, output);
  }
  function locale_set__set(config) {
    var prop, i;
    for (i in config) {
      prop = config[i];
      if (typeof prop === "function") {
        this[i] = prop;
      } else this["_" + i] = prop;
    }
    this._ordinalParseLenient = new RegExp(
      this._ordinalParse.source + "|" + /\d{1,2}/.source
    );
  }
  var prototype__proto = Locale.prototype;
  prototype__proto._calendar = defaultCalendar;
  prototype__proto.calendar = locale_calendar__calendar;
  prototype__proto._longDateFormat = defaultLongDateFormat;
  prototype__proto.longDateFormat = longDateFormat;
  prototype__proto._invalidDate = defaultInvalidDate;
  prototype__proto.invalidDate = invalidDate;
  prototype__proto._ordinal = defaultOrdinal;
  prototype__proto.ordinal = ordinal;
  prototype__proto._ordinalParse = defaultOrdinalParse;
  prototype__proto.preparse = preParsePostFormat;
  prototype__proto.postformat = preParsePostFormat;
  prototype__proto._relativeTime = defaultRelativeTime;
  prototype__proto.relativeTime = relative__relativeTime;
  prototype__proto.pastFuture = pastFuture;
  prototype__proto.set = locale_set__set;
  prototype__proto.months = localeMonths;
  prototype__proto._months = defaultLocaleMonths;
  prototype__proto.monthsShort = localeMonthsShort;
  prototype__proto._monthsShort = defaultLocaleMonthsShort;
  prototype__proto.monthsParse = localeMonthsParse;
  prototype__proto.week = localeWeek;
  prototype__proto._week = defaultLocaleWeek;
  prototype__proto.firstDayOfYear = localeFirstDayOfYear;
  prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
  prototype__proto.weekdays = localeWeekdays;
  prototype__proto._weekdays = defaultLocaleWeekdays;
  prototype__proto.weekdaysMin = localeWeekdaysMin;
  prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
  prototype__proto.weekdaysShort = localeWeekdaysShort;
  prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
  prototype__proto.weekdaysParse = localeWeekdaysParse;
  prototype__proto.isPM = localeIsPM;
  prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
  prototype__proto.meridiem = localeMeridiem;
  function lists__get(format, index, field, setter) {
    var locale = locale_locales__getLocale(),
      utc = create_utc__createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function list(format, index, field, count, setter) {
    if (typeof format === "number") {
      index = format;
      format = undefined;
    }
    format = format || "";
    if (index != null) return lists__get(format, index, field, setter);
    var i,
      out = [];
    for (i = 0; i < count; i++) out[i] = lists__get(format, i, field, setter);
    return out;
  }
  function lists__listMonths(format, index) {
    return list(format, index, "months", 12, "month");
  }
  function lists__listMonthsShort(format, index) {
    return list(format, index, "monthsShort", 12, "month");
  }
  function lists__listWeekdays(format, index) {
    return list(format, index, "weekdays", 7, "day");
  }
  function lists__listWeekdaysShort(format, index) {
    return list(format, index, "weekdaysShort", 7, "day");
  }
  function lists__listWeekdaysMin(format, index) {
    return list(format, index, "weekdaysMin", 7, "day");
  }
  locale_locales__getSetGlobalLocale("en", {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
      var b = number % 10,
        output =
          toInt((number % 100) / 10) === 1
            ? "th"
            : b === 1
            ? "st"
            : b === 2
            ? "nd"
            : b === 3
            ? "rd"
            : "th";
      return number + output;
    },
  });
  utils_hooks__hooks.lang = deprecate(
    "moment.lang is deprecated. Use moment.locale instead.",
    locale_locales__getSetGlobalLocale
  );
  utils_hooks__hooks.langData = deprecate(
    "moment.langData is deprecated. Use moment.localeData instead.",
    locale_locales__getLocale
  );
  var mathAbs = Math.abs;
  function duration_abs__abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function duration_add_subtract__addSubtract(
    duration,
    input,
    value,
    direction
  ) {
    var other = create__createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function duration_add_subtract__add(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, 1);
  }
  function duration_add_subtract__subtract(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else return Math.ceil(number);
  }
  function bubble() {
    var milliseconds = this._milliseconds,
      days = this._days,
      months = this._months,
      data = this._data,
      seconds,
      minutes,
      hours,
      years,
      monthsFromDays;
    if (
      !(
        (milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0)
      )
    ) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }
    data.milliseconds = milliseconds % 1e3;
    seconds = absFloor(milliseconds / 1e3);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    return (days * 4800) / 146097;
  }
  function monthsToDays(months) {
    return (months * 146097) / 4800;
  }
  function as(units) {
    var days,
      months,
      milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "year") {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === "month" ? months : months / 12;
    } else {
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days / 7 + milliseconds / 6048e5;
        case "day":
          return days + milliseconds / 864e5;
        case "hour":
          return days * 24 + milliseconds / 36e5;
        case "minute":
          return days * 1440 + milliseconds / 6e4;
        case "second":
          return days * 86400 + milliseconds / 1e3;
        case "millisecond":
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function duration_as__valueOf() {
    return (
      this._milliseconds +
      this._days * 864e5 +
      (this._months % 12) * 2592e6 +
      toInt(this._months / 12) * 31536e6
    );
  }
  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms"),
    asSeconds = makeAs("s"),
    asMinutes = makeAs("m"),
    asHours = makeAs("h"),
    asDays = makeAs("d"),
    asWeeks = makeAs("w"),
    asMonths = makeAs("M"),
    asYears = makeAs("y");
  function duration_get__get(units) {
    units = normalizeUnits(units);
    return this[units + "s"]();
  }
  function makeGetter(name) {
    return function () {
      return this._data[name];
    };
  }
  var milliseconds = makeGetter("milliseconds"),
    seconds = makeGetter("seconds"),
    minutes = makeGetter("minutes"),
    hours = makeGetter("hours"),
    days = makeGetter("days"),
    months = makeGetter("months"),
    years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round,
    thresholds = {
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11,
    };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function duration_humanize__relativeTime(
    posNegDuration,
    withoutSuffix,
    locale
  ) {
    var duration = create__createDuration(posNegDuration).abs(),
      seconds = round(duration.as("s")),
      minutes = round(duration.as("m")),
      hours = round(duration.as("h")),
      days = round(duration.as("d")),
      months = round(duration.as("M")),
      years = round(duration.as("y")),
      a = (seconds < thresholds.s && ["s", seconds]) ||
        (minutes === 1 && ["m"]) ||
        (minutes < thresholds.m && ["mm", minutes]) ||
        (hours === 1 && ["h"]) ||
        (hours < thresholds.h && ["hh", hours]) ||
        (days === 1 && ["d"]) ||
        (days < thresholds.d && ["dd", days]) ||
        (months === 1 && ["M"]) ||
        (months < thresholds.M && ["MM", months]) ||
        (years === 1 && ["y"]) || ["yy", years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }
  function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) return false;
    if (limit === undefined) return thresholds[threshold];
    thresholds[threshold] = limit;
    return true;
  }
  function humanize(withSuffix) {
    var locale = this.localeData(),
      output = duration_humanize__relativeTime(this, !withSuffix, locale);
    if (withSuffix) output = locale.pastFuture(+this, output);
    return locale.postformat(output);
  }
  var iso_string__abs = Math.abs;
  function iso_string__toISOString() {
    var seconds = iso_string__abs(this._milliseconds) / 1e3,
      days = iso_string__abs(this._days),
      months = iso_string__abs(this._months),
      minutes,
      hours,
      years;
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    years = absFloor(months / 12);
    months %= 12;
    var Y = years,
      M = months,
      D = days,
      h = hours,
      m = minutes,
      s = seconds,
      total = this.asSeconds();
    if (!total) return "P0D";
    return (
      (total < 0 ? "-" : "") +
      "P" +
      (Y ? Y + "Y" : "") +
      (M ? M + "M" : "") +
      (D ? D + "D" : "") +
      (h || m || s ? "T" : "") +
      (h ? h + "H" : "") +
      (m ? m + "M" : "") +
      (s ? s + "S" : "")
    );
  }
  var duration_prototype__proto = Duration.prototype;
  duration_prototype__proto.abs = duration_abs__abs;
  duration_prototype__proto.add = duration_add_subtract__add;
  duration_prototype__proto.subtract = duration_add_subtract__subtract;
  duration_prototype__proto.as = as;
  duration_prototype__proto.asMilliseconds = asMilliseconds;
  duration_prototype__proto.asSeconds = asSeconds;
  duration_prototype__proto.asMinutes = asMinutes;
  duration_prototype__proto.asHours = asHours;
  duration_prototype__proto.asDays = asDays;
  duration_prototype__proto.asWeeks = asWeeks;
  duration_prototype__proto.asMonths = asMonths;
  duration_prototype__proto.asYears = asYears;
  duration_prototype__proto.valueOf = duration_as__valueOf;
  duration_prototype__proto._bubble = bubble;
  duration_prototype__proto.get = duration_get__get;
  duration_prototype__proto.milliseconds = milliseconds;
  duration_prototype__proto.seconds = seconds;
  duration_prototype__proto.minutes = minutes;
  duration_prototype__proto.hours = hours;
  duration_prototype__proto.days = days;
  duration_prototype__proto.weeks = weeks;
  duration_prototype__proto.months = months;
  duration_prototype__proto.years = years;
  duration_prototype__proto.humanize = humanize;
  duration_prototype__proto.toISOString = iso_string__toISOString;
  duration_prototype__proto.toString = iso_string__toISOString;
  duration_prototype__proto.toJSON = iso_string__toISOString;
  duration_prototype__proto.locale = locale;
  duration_prototype__proto.localeData = localeData;
  duration_prototype__proto.toIsoString = deprecate(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    iso_string__toISOString
  );
  duration_prototype__proto.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1e3);
  });
  addParseToken("x", function (input, array, config) {
    config._d = new Date(toInt(input));
  });
  utils_hooks__hooks.version = "2.10.6";
  setHookCallback(local__createLocal);
  utils_hooks__hooks.fn = momentPrototype;
  utils_hooks__hooks.min = min;
  utils_hooks__hooks.max = max;
  utils_hooks__hooks.utc = create_utc__createUTC;
  utils_hooks__hooks.unix = moment__createUnix;
  utils_hooks__hooks.months = lists__listMonths;
  utils_hooks__hooks.isDate = isDate;
  utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
  utils_hooks__hooks.invalid = valid__createInvalid;
  utils_hooks__hooks.duration = create__createDuration;
  utils_hooks__hooks.isMoment = isMoment;
  utils_hooks__hooks.weekdays = lists__listWeekdays;
  utils_hooks__hooks.parseZone = moment__createInZone;
  utils_hooks__hooks.localeData = locale_locales__getLocale;
  utils_hooks__hooks.isDuration = isDuration;
  utils_hooks__hooks.monthsShort = lists__listMonthsShort;
  utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
  utils_hooks__hooks.defineLocale = defineLocale;
  utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
  utils_hooks__hooks.normalizeUnits = normalizeUnits;
  utils_hooks__hooks.relativeTimeThreshold =
    duration_humanize__getSetRelativeTimeThreshold;
  var _moment = utils_hooks__hooks;
  return _moment;
});
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    exports.Handlebars = factory();
  } else root.Handlebars = factory();
})(this, function () {
  return (function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = (installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false,
      });
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  })([
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      var _runtime = __webpack_require__(1),
        _runtime2 = _interopRequireDefault(_runtime),
        _AST = __webpack_require__(2),
        _AST2 = _interopRequireDefault(_AST),
        _Parser$parse = __webpack_require__(3),
        _Compiler$compile$precompile = __webpack_require__(4),
        _JavaScriptCompiler = __webpack_require__(5),
        _JavaScriptCompiler2 = _interopRequireDefault(_JavaScriptCompiler),
        _Visitor = __webpack_require__(6),
        _Visitor2 = _interopRequireDefault(_Visitor),
        _noConflict = __webpack_require__(7),
        _noConflict2 = _interopRequireDefault(_noConflict),
        _create = _runtime2["default"].create;
      function create() {
        var hb = _create();
        hb.compile = function (input, options) {
          return _Compiler$compile$precompile.compile(input, options, hb);
        };
        hb.precompile = function (input, options) {
          return _Compiler$compile$precompile.precompile(input, options, hb);
        };
        hb.AST = _AST2["default"];
        hb.Compiler = _Compiler$compile$precompile.Compiler;
        hb.JavaScriptCompiler = _JavaScriptCompiler2["default"];
        hb.Parser = _Parser$parse.parser;
        hb.parse = _Parser$parse.parse;
        return hb;
      }
      var inst = create();
      inst.create = create;
      _noConflict2["default"](inst);
      inst.Visitor = _Visitor2["default"];
      inst["default"] = inst;
      exports["default"] = inst;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireWildcard = __webpack_require__(9)["default"],
        _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      var _import = __webpack_require__(10),
        base = _interopRequireWildcard(_import),
        _SafeString = __webpack_require__(11),
        _SafeString2 = _interopRequireDefault(_SafeString),
        _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception),
        _import2 = __webpack_require__(13),
        Utils = _interopRequireWildcard(_import2),
        _import3 = __webpack_require__(14),
        runtime = _interopRequireWildcard(_import3),
        _noConflict = __webpack_require__(7),
        _noConflict2 = _interopRequireDefault(_noConflict);
      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _SafeString2["default"];
        hb.Exception = _Exception2["default"];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;
        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };
        return hb;
      }
      var inst = create();
      inst.create = create;
      _noConflict2["default"](inst);
      inst["default"] = inst;
      exports["default"] = inst;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var AST = {
        Program: function Program(statements, blockParams, strip, locInfo) {
          this.loc = locInfo;
          this.type = "Program";
          this.body = statements;
          this.blockParams = blockParams;
          this.strip = strip;
        },
        MustacheStatement: function MustacheStatement(
          path,
          params,
          hash,
          escaped,
          strip,
          locInfo
        ) {
          this.loc = locInfo;
          this.type = "MustacheStatement";
          this.path = path;
          this.params = params || [];
          this.hash = hash;
          this.escaped = escaped;
          this.strip = strip;
        },
        BlockStatement: function BlockStatement(
          path,
          params,
          hash,
          program,
          inverse,
          openStrip,
          inverseStrip,
          closeStrip,
          locInfo
        ) {
          this.loc = locInfo;
          this.type = "BlockStatement";
          this.path = path;
          this.params = params || [];
          this.hash = hash;
          this.program = program;
          this.inverse = inverse;
          this.openStrip = openStrip;
          this.inverseStrip = inverseStrip;
          this.closeStrip = closeStrip;
        },
        PartialStatement: function PartialStatement(
          name,
          params,
          hash,
          strip,
          locInfo
        ) {
          this.loc = locInfo;
          this.type = "PartialStatement";
          this.name = name;
          this.params = params || [];
          this.hash = hash;
          this.indent = "";
          this.strip = strip;
        },
        ContentStatement: function ContentStatement(string, locInfo) {
          this.loc = locInfo;
          this.type = "ContentStatement";
          this.original = this.value = string;
        },
        CommentStatement: function CommentStatement(comment, strip, locInfo) {
          this.loc = locInfo;
          this.type = "CommentStatement";
          this.value = comment;
          this.strip = strip;
        },
        SubExpression: function SubExpression(path, params, hash, locInfo) {
          this.loc = locInfo;
          this.type = "SubExpression";
          this.path = path;
          this.params = params || [];
          this.hash = hash;
        },
        PathExpression: function PathExpression(
          data,
          depth,
          parts,
          original,
          locInfo
        ) {
          this.loc = locInfo;
          this.type = "PathExpression";
          this.data = data;
          this.original = original;
          this.parts = parts;
          this.depth = depth;
        },
        StringLiteral: function StringLiteral(string, locInfo) {
          this.loc = locInfo;
          this.type = "StringLiteral";
          this.original = this.value = string;
        },
        NumberLiteral: function NumberLiteral(number, locInfo) {
          this.loc = locInfo;
          this.type = "NumberLiteral";
          this.original = this.value = Number(number);
        },
        BooleanLiteral: function BooleanLiteral(bool, locInfo) {
          this.loc = locInfo;
          this.type = "BooleanLiteral";
          this.original = this.value = bool === "true";
        },
        UndefinedLiteral: function UndefinedLiteral(locInfo) {
          this.loc = locInfo;
          this.type = "UndefinedLiteral";
          this.original = this.value = undefined;
        },
        NullLiteral: function NullLiteral(locInfo) {
          this.loc = locInfo;
          this.type = "NullLiteral";
          this.original = this.value = null;
        },
        Hash: function Hash(pairs, locInfo) {
          this.loc = locInfo;
          this.type = "Hash";
          this.pairs = pairs;
        },
        HashPair: function HashPair(key, value, locInfo) {
          this.loc = locInfo;
          this.type = "HashPair";
          this.key = key;
          this.value = value;
        },
        helpers: {
          helperExpression: function helperExpression(node) {
            return !!(
              node.type === "SubExpression" ||
              node.params.length ||
              node.hash
            );
          },
          scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
          },
          simpleId: function simpleId(path) {
            return (
              path.parts.length === 1 &&
              !AST.helpers.scopedId(path) &&
              !path.depth
            );
          },
        },
      };
      exports["default"] = AST;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"],
        _interopRequireWildcard = __webpack_require__(9)["default"];
      exports.__esModule = true;
      exports.parse = parse;
      var _parser = __webpack_require__(15),
        _parser2 = _interopRequireDefault(_parser),
        _AST = __webpack_require__(2),
        _AST2 = _interopRequireDefault(_AST),
        _WhitespaceControl = __webpack_require__(16),
        _WhitespaceControl2 = _interopRequireDefault(_WhitespaceControl),
        _import = __webpack_require__(17),
        Helpers = _interopRequireWildcard(_import),
        _extend = __webpack_require__(13);
      exports.parser = _parser2["default"];
      var yy = {};
      _extend.extend(yy, Helpers, _AST2["default"]);
      function parse(input, options) {
        if (input.type === "Program") return input;
        _parser2["default"].yy = yy;
        yy.locInfo = function (locInfo) {
          return new yy.SourceLocation(options && options.srcName, locInfo);
        };
        var strip = new _WhitespaceControl2["default"]();
        return strip.accept(_parser2["default"].parse(input));
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      exports.Compiler = Compiler;
      exports.precompile = precompile;
      exports.compile = compile;
      var _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception),
        _isArray$indexOf = __webpack_require__(13),
        _AST = __webpack_require__(2),
        _AST2 = _interopRequireDefault(_AST),
        slice = [].slice;
      function Compiler() {}
      Compiler.prototype = {
        compiler: Compiler,
        equals: function equals(other) {
          var len = this.opcodes.length;
          if (other.opcodes.length !== len) return false;
          for (var i = 0; i < len; i++) {
            var opcode = this.opcodes[i],
              otherOpcode = other.opcodes[i];
            if (
              opcode.opcode !== otherOpcode.opcode ||
              !argEquals(opcode.args, otherOpcode.args)
            )
              return false;
          }
          len = this.children.length;
          for (var i = 0; i < len; i++)
            if (!this.children[i].equals(other.children[i])) return false;
          return true;
        },
        guid: 0,
        compile: function compile(program, options) {
          this.sourceNode = [];
          this.opcodes = [];
          this.children = [];
          this.options = options;
          this.stringParams = options.stringParams;
          this.trackIds = options.trackIds;
          options.blockParams = options.blockParams || [];
          var knownHelpers = options.knownHelpers;
          options.knownHelpers = {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            if: true,
            unless: true,
            with: true,
            log: true,
            lookup: true,
          };
          if (knownHelpers)
            for (var _name in knownHelpers)
              if (_name in knownHelpers)
                options.knownHelpers[_name] = knownHelpers[_name];
          return this.accept(program);
        },
        compileProgram: function compileProgram(program) {
          var childCompiler = new this.compiler(),
            result = childCompiler.compile(program, this.options),
            guid = this.guid++;
          this.usePartial = this.usePartial || result.usePartial;
          this.children[guid] = result;
          this.useDepths = this.useDepths || result.useDepths;
          return guid;
        },
        accept: function accept(node) {
          this.sourceNode.unshift(node);
          var ret = this[node.type](node);
          this.sourceNode.shift();
          return ret;
        },
        Program: function Program(program) {
          this.options.blockParams.unshift(program.blockParams);
          var body = program.body,
            bodyLength = body.length;
          for (var i = 0; i < bodyLength; i++) this.accept(body[i]);
          this.options.blockParams.shift();
          this.isSimple = bodyLength === 1;
          this.blockParams = program.blockParams
            ? program.blockParams.length
            : 0;
          return this;
        },
        BlockStatement: function BlockStatement(block) {
          transformLiteralToPath(block);
          var program = block.program,
            inverse = block.inverse;
          program = program && this.compileProgram(program);
          inverse = inverse && this.compileProgram(inverse);
          var type = this.classifySexpr(block);
          if (type === "helper") {
            this.helperSexpr(block, program, inverse);
          } else if (type === "simple") {
            this.simpleSexpr(block);
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("blockValue", block.path.original);
          } else {
            this.ambiguousSexpr(block, program, inverse);
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("ambiguousBlockValue");
          }
          this.opcode("append");
        },
        PartialStatement: function PartialStatement(partial) {
          this.usePartial = true;
          var params = partial.params;
          if (params.length > 1) {
            throw new _Exception2["default"](
              "Unsupported number of partial arguments: " + params.length,
              partial
            );
          } else if (!params.length)
            params.push({
              type: "PathExpression",
              parts: [],
              depth: 0,
            });
          var partialName = partial.name.original,
            isDynamic = partial.name.type === "SubExpression";
          if (isDynamic) this.accept(partial.name);
          this.setupFullMustacheParams(partial, undefined, undefined, true);
          var indent = partial.indent || "";
          if (this.options.preventIndent && indent) {
            this.opcode("appendContent", indent);
            indent = "";
          }
          this.opcode("invokePartial", isDynamic, partialName, indent);
          this.opcode("append");
        },
        MustacheStatement: function MustacheStatement(mustache) {
          this.SubExpression(mustache);
          if (mustache.escaped && !this.options.noEscape) {
            this.opcode("appendEscaped");
          } else this.opcode("append");
        },
        ContentStatement: function ContentStatement(content) {
          if (content.value) this.opcode("appendContent", content.value);
        },
        CommentStatement: function CommentStatement() {},
        SubExpression: function SubExpression(sexpr) {
          transformLiteralToPath(sexpr);
          var type = this.classifySexpr(sexpr);
          if (type === "simple") {
            this.simpleSexpr(sexpr);
          } else if (type === "helper") {
            this.helperSexpr(sexpr);
          } else this.ambiguousSexpr(sexpr);
        },
        ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
          var path = sexpr.path,
            name = path.parts[0],
            isBlock = program != null || inverse != null;
          this.opcode("getContext", path.depth);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          this.accept(path);
          this.opcode("invokeAmbiguous", name, isBlock);
        },
        simpleSexpr: function simpleSexpr(sexpr) {
          this.accept(sexpr.path);
          this.opcode("resolvePossibleLambda");
        },
        helperSexpr: function helperSexpr(sexpr, program, inverse) {
          var params = this.setupFullMustacheParams(sexpr, program, inverse),
            path = sexpr.path,
            name = path.parts[0];
          if (this.options.knownHelpers[name]) {
            this.opcode("invokeKnownHelper", params.length, name);
          } else if (this.options.knownHelpersOnly) {
            throw new _Exception2["default"](
              "You specified knownHelpersOnly, but used the unknown helper " +
                name,
              sexpr
            );
          } else {
            path.falsy = true;
            this.accept(path);
            this.opcode(
              "invokeHelper",
              params.length,
              path.original,
              _AST2["default"].helpers.simpleId(path)
            );
          }
        },
        PathExpression: function PathExpression(path) {
          this.addDepth(path.depth);
          this.opcode("getContext", path.depth);
          var name = path.parts[0],
            scoped = _AST2["default"].helpers.scopedId(path),
            blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
          if (blockParamId) {
            this.opcode("lookupBlockParam", blockParamId, path.parts);
          } else if (!name) {
            this.opcode("pushContext");
          } else if (path.data) {
            this.options.data = true;
            this.opcode("lookupData", path.depth, path.parts);
          } else this.opcode("lookupOnContext", path.parts, path.falsy, scoped);
        },
        StringLiteral: function StringLiteral(string) {
          this.opcode("pushString", string.value);
        },
        NumberLiteral: function NumberLiteral(number) {
          this.opcode("pushLiteral", number.value);
        },
        BooleanLiteral: function BooleanLiteral(bool) {
          this.opcode("pushLiteral", bool.value);
        },
        UndefinedLiteral: function UndefinedLiteral() {
          this.opcode("pushLiteral", "undefined");
        },
        NullLiteral: function NullLiteral() {
          this.opcode("pushLiteral", "null");
        },
        Hash: function Hash(hash) {
          var pairs = hash.pairs,
            i = 0,
            l = pairs.length;
          this.opcode("pushHash");
          for (; i < l; i++) this.pushParam(pairs[i].value);
          while (i--) this.opcode("assignToHash", pairs[i].key);
          this.opcode("popHash");
        },
        opcode: function opcode(name) {
          this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc,
          });
        },
        addDepth: function addDepth(depth) {
          if (!depth) return;
          this.useDepths = true;
        },
        classifySexpr: function classifySexpr(sexpr) {
          var isSimple = _AST2["default"].helpers.simpleId(sexpr.path),
            isBlockParam =
              isSimple && !!this.blockParamIndex(sexpr.path.parts[0]),
            isHelper =
              !isBlockParam && _AST2["default"].helpers.helperExpression(sexpr),
            isEligible = !isBlockParam && (isHelper || isSimple);
          if (isEligible && !isHelper) {
            var _name2 = sexpr.path.parts[0],
              options = this.options;
            if (options.knownHelpers[_name2]) {
              isHelper = true;
            } else if (options.knownHelpersOnly) isEligible = false;
          }
          if (isHelper) {
            return "helper";
          } else if (isEligible) {
            return "ambiguous";
          } else return "simple";
        },
        pushParams: function pushParams(params) {
          for (var i = 0, l = params.length; i < l; i++)
            this.pushParam(params[i]);
        },
        pushParam: function pushParam(val) {
          var value = val.value != null ? val.value : val.original || "";
          if (this.stringParams) {
            if (value.replace)
              value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
            if (val.depth) this.addDepth(val.depth);
            this.opcode("getContext", val.depth || 0);
            this.opcode("pushStringParam", value, val.type);
            if (val.type === "SubExpression") this.accept(val);
          } else {
            if (this.trackIds) {
              var blockParamIndex = undefined;
              if (
                val.parts &&
                !_AST2["default"].helpers.scopedId(val) &&
                !val.depth
              )
                blockParamIndex = this.blockParamIndex(val.parts[0]);
              if (blockParamIndex) {
                var blockParamChild = val.parts.slice(1).join(".");
                this.opcode(
                  "pushId",
                  "BlockParam",
                  blockParamIndex,
                  blockParamChild
                );
              } else {
                value = val.original || value;
                if (value.replace)
                  value = value.replace(/^\.\//g, "").replace(/^\.$/g, "");
                this.opcode("pushId", val.type, value);
              }
            }
            this.accept(val);
          }
        },
        setupFullMustacheParams: function setupFullMustacheParams(
          sexpr,
          program,
          inverse,
          omitEmpty
        ) {
          var params = sexpr.params;
          this.pushParams(params);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          if (sexpr.hash) {
            this.accept(sexpr.hash);
          } else this.opcode("emptyHash", omitEmpty);
          return params;
        },
        blockParamIndex: function blockParamIndex(name) {
          for (
            var depth = 0, len = this.options.blockParams.length;
            depth < len;
            depth++
          ) {
            var blockParams = this.options.blockParams[depth],
              param =
                blockParams && _isArray$indexOf.indexOf(blockParams, name);
            if (blockParams && param >= 0) return [depth, param];
          }
        },
      };
      function precompile(input, options, env) {
        if (
          input == null ||
          (typeof input !== "string" && input.type !== "Program")
        )
          throw new _Exception2["default"](
            "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
              input
          );
        options = options || {};
        if (!("data" in options)) options.data = true;
        if (options.compat) options.useDepths = true;
        var ast = env.parse(input, options),
          environment = new env.Compiler().compile(ast, options);
        return new env.JavaScriptCompiler().compile(environment, options);
      }
      function compile(input, _x, env) {
        var options = arguments[1] === undefined ? {} : arguments[1];
        if (
          input == null ||
          (typeof input !== "string" && input.type !== "Program")
        )
          throw new _Exception2["default"](
            "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
              input
          );
        if (!("data" in options)) options.data = true;
        if (options.compat) options.useDepths = true;
        var compiled = undefined;
        function compileInput() {
          var ast = env.parse(input, options),
            environment = new env.Compiler().compile(ast, options),
            templateSpec = new env.JavaScriptCompiler().compile(
              environment,
              options,
              undefined,
              true
            );
          return env.template(templateSpec);
        }
        function ret(context, execOptions) {
          if (!compiled) compiled = compileInput();
          return compiled.call(this, context, execOptions);
        }
        ret._setup = function (setupOptions) {
          if (!compiled) compiled = compileInput();
          return compiled._setup(setupOptions);
        };
        ret._child = function (i, data, blockParams, depths) {
          if (!compiled) compiled = compileInput();
          return compiled._child(i, data, blockParams, depths);
        };
        return ret;
      }
      function argEquals(a, b) {
        if (a === b) return true;
        if (
          _isArray$indexOf.isArray(a) &&
          _isArray$indexOf.isArray(b) &&
          a.length === b.length
        ) {
          for (var i = 0; i < a.length; i++)
            if (!argEquals(a[i], b[i])) return false;
          return true;
        }
      }
      function transformLiteralToPath(sexpr) {
        if (!sexpr.path.parts) {
          var literal = sexpr.path;
          sexpr.path = new _AST2["default"].PathExpression(
            false,
            0,
            [literal.original + ""],
            literal.original + "",
            literal.loc
          );
        }
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      var _COMPILER_REVISION$REVISION_CHANGES = __webpack_require__(10),
        _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception),
        _isArray = __webpack_require__(13),
        _CodeGen = __webpack_require__(18),
        _CodeGen2 = _interopRequireDefault(_CodeGen);
      function Literal(value) {
        this.value = value;
      }
      function JavaScriptCompiler() {}
      JavaScriptCompiler.prototype = {
        nameLookup: function nameLookup(parent, name) {
          if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
            return [parent, ".", name];
          } else return [parent, "['", name, "']"];
        },
        depthedLookup: function depthedLookup(name) {
          return [this.aliasable("this.lookup"), '(depths, "', name, '")'];
        },
        compilerInfo: function compilerInfo() {
          var revision = _COMPILER_REVISION$REVISION_CHANGES.COMPILER_REVISION,
            versions =
              _COMPILER_REVISION$REVISION_CHANGES.REVISION_CHANGES[revision];
          return [revision, versions];
        },
        appendToBuffer: function appendToBuffer(source, location, explicit) {
          if (!_isArray.isArray(source)) source = [source];
          source = this.source.wrap(source, location);
          if (this.environment.isSimple) {
            return ["return ", source, ";"];
          } else if (explicit) {
            return ["buffer += ", source, ";"];
          } else {
            source.appendToBuffer = true;
            return source;
          }
        },
        initializeBuffer: function initializeBuffer() {
          return this.quotedString("");
        },
        compile: function compile(environment, options, context, asObject) {
          this.environment = environment;
          this.options = options;
          this.stringParams = this.options.stringParams;
          this.trackIds = this.options.trackIds;
          this.precompile = !asObject;
          this.name = this.environment.name;
          this.isChild = !!context;
          this.context = context || {
            programs: [],
            environments: [],
          };
          this.preamble();
          this.stackSlot = 0;
          this.stackVars = [];
          this.aliases = {};
          this.registers = {
            list: [],
          };
          this.hashes = [];
          this.compileStack = [];
          this.inlineStack = [];
          this.blockParams = [];
          this.compileChildren(environment, options);
          this.useDepths =
            this.useDepths || environment.useDepths || this.options.compat;
          this.useBlockParams =
            this.useBlockParams || environment.useBlockParams;
          var opcodes = environment.opcodes,
            opcode = undefined,
            firstLoc = undefined,
            i = undefined,
            l = undefined;
          for (i = 0, l = opcodes.length; i < l; i++) {
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
          }
          this.source.currentLocation = firstLoc;
          this.pushSource("");
          if (
            this.stackSlot ||
            this.inlineStack.length ||
            this.compileStack.length
          )
            throw new _Exception2["default"](
              "Compile completed with content left on stack"
            );
          var fn = this.createFunctionContext(asObject);
          if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn,
              },
              programs = this.context.programs;
            for (i = 0, l = programs.length; i < l; i++)
              if (programs[i]) ret[i] = programs[i];
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
              ret.compiler = JSON.stringify(ret.compiler);
              this.source.currentLocation = {
                start: {
                  line: 1,
                  column: 0,
                },
              };
              ret = this.objectLiteral(ret);
              if (options.srcName) {
                ret = ret.toStringWithSourceMap({
                  file: options.destName,
                });
                ret.map = ret.map && ret.map.toString();
              } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
          } else return fn;
        },
        preamble: function preamble() {
          this.lastContext = 0;
          this.source = new _CodeGen2["default"](this.options.srcName);
        },
        createFunctionContext: function createFunctionContext(asObject) {
          var varDeclarations = "",
            locals = this.stackVars.concat(this.registers.list);
          if (locals.length > 0) varDeclarations += ", " + locals.join(", ");
          var aliasCount = 0;
          for (var alias in this.aliases) {
            var node = this.aliases[alias];
            if (
              this.aliases.hasOwnProperty(alias) &&
              node.children &&
              node.referenceCount > 1
            ) {
              varDeclarations += ", alias" + ++aliasCount + "=" + alias;
              node.children[0] = "alias" + aliasCount;
            }
          }
          var params = ["depth0", "helpers", "partials", "data"];
          if (this.useBlockParams || this.useDepths) params.push("blockParams");
          if (this.useDepths) params.push("depths");
          var source = this.mergeSource(varDeclarations);
          if (asObject) {
            params.push(source);
            return Function.apply(this, params);
          } else
            return this.source.wrap([
              "function(",
              params.join(","),
              ") {\n  ",
              source,
              "}",
            ]);
        },
        mergeSource: function mergeSource(varDeclarations) {
          var isSimple = this.environment.isSimple,
            appendOnly = !this.forceBuffer,
            appendFirst = undefined,
            sourceSeen = undefined,
            bufferStart = undefined,
            bufferEnd = undefined;
          this.source.each(function (line) {
            if (line.appendToBuffer) {
              if (bufferStart) {
                line.prepend("  + ");
              } else bufferStart = line;
              bufferEnd = line;
            } else {
              if (bufferStart) {
                if (!sourceSeen) {
                  appendFirst = true;
                } else bufferStart.prepend("buffer += ");
                bufferEnd.add(";");
                bufferStart = bufferEnd = undefined;
              }
              sourceSeen = true;
              if (!isSimple) appendOnly = false;
            }
          });
          if (appendOnly) {
            if (bufferStart) {
              bufferStart.prepend("return ");
              bufferEnd.add(";");
            } else if (!sourceSeen) this.source.push('return "";');
          } else {
            varDeclarations +=
              ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
            if (bufferStart) {
              bufferStart.prepend("return buffer + ");
              bufferEnd.add(";");
            } else this.source.push("return buffer;");
          }
          if (varDeclarations)
            this.source.prepend(
              "var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n")
            );
          return this.source.merge();
        },
        blockValue: function blockValue(name) {
          var blockHelperMissing = this.aliasable("helpers.blockHelperMissing"),
            params = [this.contextName(0)];
          this.setupHelperArgs(name, 0, params);
          var blockName = this.popStack();
          params.splice(1, 0, blockName);
          this.push(
            this.source.functionCall(blockHelperMissing, "call", params)
          );
        },
        ambiguousBlockValue: function ambiguousBlockValue() {
          var blockHelperMissing = this.aliasable("helpers.blockHelperMissing"),
            params = [this.contextName(0)];
          this.setupHelperArgs("", 0, params, true);
          this.flushInline();
          var current = this.topStack();
          params.splice(1, 0, current);
          this.pushSource([
            "if (!",
            this.lastHelper,
            ") { ",
            current,
            " = ",
            this.source.functionCall(blockHelperMissing, "call", params),
            "}",
          ]);
        },
        appendContent: function appendContent(content) {
          if (this.pendingContent) {
            content = this.pendingContent + content;
          } else this.pendingLocation = this.source.currentLocation;
          this.pendingContent = content;
        },
        append: function append() {
          if (this.isInline()) {
            this.replaceStack(function (current) {
              return [" != null ? ", current, ' : ""'];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
          } else {
            var local = this.popStack();
            this.pushSource([
              "if (",
              local,
              " != null) { ",
              this.appendToBuffer(local, undefined, true),
              " }",
            ]);
            if (this.environment.isSimple)
              this.pushSource([
                "else { ",
                this.appendToBuffer("''", undefined, true),
                " }",
              ]);
          }
        },
        appendEscaped: function appendEscaped() {
          this.pushSource(
            this.appendToBuffer([
              this.aliasable("this.escapeExpression"),
              "(",
              this.popStack(),
              ")",
            ])
          );
        },
        getContext: function getContext(depth) {
          this.lastContext = depth;
        },
        pushContext: function pushContext() {
          this.pushStackLiteral(this.contextName(this.lastContext));
        },
        lookupOnContext: function lookupOnContext(parts, falsy, scoped) {
          var i = 0;
          if (!scoped && this.options.compat && !this.lastContext) {
            this.push(this.depthedLookup(parts[i++]));
          } else this.pushContext();
          this.resolvePath("context", parts, i, falsy);
        },
        lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
          this.useBlockParams = true;
          this.push([
            "blockParams[",
            blockParamId[0],
            "][",
            blockParamId[1],
            "]",
          ]);
          this.resolvePath("context", parts, 1);
        },
        lookupData: function lookupData(depth, parts) {
          if (!depth) {
            this.pushStackLiteral("data");
          } else this.pushStackLiteral("this.data(data, " + depth + ")");
          this.resolvePath("data", parts, 0, true);
        },
        resolvePath: function resolvePath(type, parts, i, falsy) {
          var _this = this;
          if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict, this, parts, type));
            return;
          }
          var len = parts.length;
          for (; i < len; i++)
            this.replaceStack(function (current) {
              var lookup = _this.nameLookup(current, parts[i], type);
              if (!falsy) {
                return [" != null ? ", lookup, " : ", current];
              } else return [" && ", lookup];
            });
        },
        resolvePossibleLambda: function resolvePossibleLambda() {
          this.push([
            this.aliasable("this.lambda"),
            "(",
            this.popStack(),
            ", ",
            this.contextName(0),
            ")",
          ]);
        },
        pushStringParam: function pushStringParam(string, type) {
          this.pushContext();
          this.pushString(type);
          if (type !== "SubExpression")
            if (typeof string === "string") {
              this.pushString(string);
            } else this.pushStackLiteral(string);
        },
        emptyHash: function emptyHash(omitEmpty) {
          if (this.trackIds) this.push("{}");
          if (this.stringParams) {
            this.push("{}");
            this.push("{}");
          }
          this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
        },
        pushHash: function pushHash() {
          if (this.hash) this.hashes.push(this.hash);
          this.hash = {
            values: [],
            types: [],
            contexts: [],
            ids: [],
          };
        },
        popHash: function popHash() {
          var hash = this.hash;
          this.hash = this.hashes.pop();
          if (this.trackIds) this.push(this.objectLiteral(hash.ids));
          if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
          }
          this.push(this.objectLiteral(hash.values));
        },
        pushString: function pushString(string) {
          this.pushStackLiteral(this.quotedString(string));
        },
        pushLiteral: function pushLiteral(value) {
          this.pushStackLiteral(value);
        },
        pushProgram: function pushProgram(guid) {
          if (guid != null) {
            this.pushStackLiteral(this.programExpression(guid));
          } else this.pushStackLiteral(null);
        },
        invokeHelper: function invokeHelper(paramSize, name, isSimple) {
          var nonHelper = this.popStack(),
            helper = this.setupHelper(paramSize, name),
            simple = isSimple ? [helper.name, " || "] : "",
            lookup = ["("].concat(simple, nonHelper);
          if (!this.options.strict)
            lookup.push(" || ", this.aliasable("helpers.helperMissing"));
          lookup.push(")");
          this.push(
            this.source.functionCall(lookup, "call", helper.callParams)
          );
        },
        invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
          var helper = this.setupHelper(paramSize, name);
          this.push(
            this.source.functionCall(helper.name, "call", helper.callParams)
          );
        },
        invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
          this.useRegister("helper");
          var nonHelper = this.popStack();
          this.emptyHash();
          var helper = this.setupHelper(0, name, helperCall),
            helperName = (this.lastHelper = this.nameLookup(
              "helpers",
              name,
              "helper"
            )),
            lookup = ["(", "(helper = ", helperName, " || ", nonHelper, ")"];
          if (!this.options.strict) {
            lookup[0] = "(helper = ";
            lookup.push(
              " != null ? helper : ",
              this.aliasable("helpers.helperMissing")
            );
          }
          this.push([
            "(",
            lookup,
            helper.paramsInit ? ["),(", helper.paramsInit] : [],
            "),",
            "(typeof helper === ",
            this.aliasable('"function"'),
            " ? ",
            this.source.functionCall("helper", "call", helper.callParams),
            " : helper))",
          ]);
        },
        invokePartial: function invokePartial(isDynamic, name, indent) {
          var params = [],
            options = this.setupParams(name, 1, params, false);
          if (isDynamic) {
            name = this.popStack();
            delete options.name;
          }
          if (indent) options.indent = JSON.stringify(indent);
          options.helpers = "helpers";
          options.partials = "partials";
          if (!isDynamic) {
            params.unshift(this.nameLookup("partials", name, "partial"));
          } else params.unshift(name);
          if (this.options.compat) options.depths = "depths";
          options = this.objectLiteral(options);
          params.push(options);
          this.push(this.source.functionCall("this.invokePartial", "", params));
        },
        assignToHash: function assignToHash(key) {
          var value = this.popStack(),
            context = undefined,
            type = undefined,
            id = undefined;
          if (this.trackIds) id = this.popStack();
          if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
          }
          var hash = this.hash;
          if (context) hash.contexts[key] = context;
          if (type) hash.types[key] = type;
          if (id) hash.ids[key] = id;
          hash.values[key] = value;
        },
        pushId: function pushId(type, name, child) {
          if (type === "BlockParam") {
            this.pushStackLiteral(
              "blockParams[" +
                name[0] +
                "].path[" +
                name[1] +
                "]" +
                (child ? " + " + JSON.stringify("." + child) : "")
            );
          } else if (type === "PathExpression") {
            this.pushString(name);
          } else if (type === "SubExpression") {
            this.pushStackLiteral("true");
          } else this.pushStackLiteral("null");
        },
        compiler: JavaScriptCompiler,
        compileChildren: function compileChildren(environment, options) {
          var children = environment.children,
            child = undefined,
            compiler = undefined;
          for (var i = 0, l = children.length; i < l; i++) {
            child = children[i];
            compiler = new this.compiler();
            var index = this.matchExistingProgram(child);
            if (index == null) {
              this.context.programs.push("");
              index = this.context.programs.length;
              child.index = index;
              child.name = "program" + index;
              this.context.programs[index] = compiler.compile(
                child,
                options,
                this.context,
                !this.precompile
              );
              this.context.environments[index] = child;
              this.useDepths = this.useDepths || compiler.useDepths;
              this.useBlockParams =
                this.useBlockParams || compiler.useBlockParams;
            } else {
              child.index = index;
              child.name = "program" + index;
              this.useDepths = this.useDepths || child.useDepths;
              this.useBlockParams = this.useBlockParams || child.useBlockParams;
            }
          }
        },
        matchExistingProgram: function matchExistingProgram(child) {
          for (
            var i = 0, len = this.context.environments.length;
            i < len;
            i++
          ) {
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return i;
          }
        },
        programExpression: function programExpression(guid) {
          var child = this.environment.children[guid],
            programParams = [child.index, "data", child.blockParams];
          if (this.useBlockParams || this.useDepths)
            programParams.push("blockParams");
          if (this.useDepths) programParams.push("depths");
          return "this.program(" + programParams.join(", ") + ")";
        },
        useRegister: function useRegister(name) {
          if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
          }
        },
        push: function push(expr) {
          if (!(expr instanceof Literal)) expr = this.source.wrap(expr);
          this.inlineStack.push(expr);
          return expr;
        },
        pushStackLiteral: function pushStackLiteral(item) {
          this.push(new Literal(item));
        },
        pushSource: function pushSource(source) {
          if (this.pendingContent) {
            this.source.push(
              this.appendToBuffer(
                this.source.quotedString(this.pendingContent),
                this.pendingLocation
              )
            );
            this.pendingContent = undefined;
          }
          if (source) this.source.push(source);
        },
        replaceStack: function replaceStack(callback) {
          var prefix = ["("],
            stack = undefined,
            createdStack = undefined,
            usedLiteral = undefined;
          if (!this.isInline())
            throw new _Exception2["default"]("replaceStack on non-inline");
          var top = this.popStack(true);
          if (top instanceof Literal) {
            stack = [top.value];
            prefix = ["(", stack];
            usedLiteral = true;
          } else {
            createdStack = true;
            var _name = this.incrStack();
            prefix = ["((", this.push(_name), " = ", top, ")"];
            stack = this.topStack();
          }
          var item = callback.call(this, stack);
          if (!usedLiteral) this.popStack();
          if (createdStack) this.stackSlot--;
          this.push(prefix.concat(item, ")"));
        },
        incrStack: function incrStack() {
          this.stackSlot++;
          if (this.stackSlot > this.stackVars.length)
            this.stackVars.push("stack" + this.stackSlot);
          return this.topStackName();
        },
        topStackName: function topStackName() {
          return "stack" + this.stackSlot;
        },
        flushInline: function flushInline() {
          var inlineStack = this.inlineStack;
          this.inlineStack = [];
          for (var i = 0, len = inlineStack.length; i < len; i++) {
            var entry = inlineStack[i];
            if (entry instanceof Literal) {
              this.compileStack.push(entry);
            } else {
              var stack = this.incrStack();
              this.pushSource([stack, " = ", entry, ";"]);
              this.compileStack.push(stack);
            }
          }
        },
        isInline: function isInline() {
          return this.inlineStack.length;
        },
        popStack: function popStack(wrapped) {
          var inline = this.isInline(),
            item = (inline ? this.inlineStack : this.compileStack).pop();
          if (!wrapped && item instanceof Literal) {
            return item.value;
          } else {
            if (!inline) {
              if (!this.stackSlot)
                throw new _Exception2["default"]("Invalid stack pop");
              this.stackSlot--;
            }
            return item;
          }
        },
        topStack: function topStack() {
          var stack = this.isInline() ? this.inlineStack : this.compileStack,
            item = stack[stack.length - 1];
          if (item instanceof Literal) {
            return item.value;
          } else return item;
        },
        contextName: function contextName(context) {
          if (this.useDepths && context) {
            return "depths[" + context + "]";
          } else return "depth" + context;
        },
        quotedString: function quotedString(str) {
          return this.source.quotedString(str);
        },
        objectLiteral: function objectLiteral(obj) {
          return this.source.objectLiteral(obj);
        },
        aliasable: function aliasable(name) {
          var ret = this.aliases[name];
          if (ret) {
            ret.referenceCount++;
            return ret;
          }
          ret = this.aliases[name] = this.source.wrap(name);
          ret.aliasable = true;
          ret.referenceCount = 1;
          return ret;
        },
        setupHelper: function setupHelper(paramSize, name, blockHelper) {
          var params = [],
            paramsInit = this.setupHelperArgs(
              name,
              paramSize,
              params,
              blockHelper
            ),
            foundHelper = this.nameLookup("helpers", name, "helper");
          return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [this.contextName(0)].concat(params),
          };
        },
        setupParams: function setupParams(helper, paramSize, params) {
          var options = {},
            contexts = [],
            types = [],
            ids = [],
            param = undefined;
          options.name = this.quotedString(helper);
          options.hash = this.popStack();
          if (this.trackIds) options.hashIds = this.popStack();
          if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
          }
          var inverse = this.popStack(),
            program = this.popStack();
          if (program || inverse) {
            options.fn = program || "this.noop";
            options.inverse = inverse || "this.noop";
          }
          var i = paramSize;
          while (i--) {
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
              types[i] = this.popStack();
              contexts[i] = this.popStack();
            }
          }
          if (this.trackIds) options.ids = this.source.generateArray(ids);
          if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
          }
          if (this.options.data) options.data = "data";
          if (this.useBlockParams) options.blockParams = "blockParams";
          return options;
        },
        setupHelperArgs: function setupHelperArgs(
          helper,
          paramSize,
          params,
          useRegister
        ) {
          var options = this.setupParams(helper, paramSize, params, true);
          options = this.objectLiteral(options);
          if (useRegister) {
            this.useRegister("options");
            params.push("options");
            return ["options=", options];
          } else {
            params.push(options);
            return "";
          }
        },
      };
      (function () {
        var reservedWords =
            "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(
              " "
            ),
          compilerWords = (JavaScriptCompiler.RESERVED_WORDS = {});
        for (var i = 0, l = reservedWords.length; i < l; i++)
          compilerWords[reservedWords[i]] = true;
      })();
      JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
        return (
          !JavaScriptCompiler.RESERVED_WORDS[name] &&
          /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)
        );
      };
      function strictLookup(requireTerminal, compiler, parts, type) {
        var stack = compiler.popStack(),
          i = 0,
          len = parts.length;
        if (requireTerminal) len--;
        for (; i < len; i++) stack = compiler.nameLookup(stack, parts[i], type);
        if (requireTerminal) {
          return [
            compiler.aliasable("this.strict"),
            "(",
            stack,
            ", ",
            compiler.quotedString(parts[i]),
            ")",
          ];
        } else return stack;
      }
      exports["default"] = JavaScriptCompiler;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      var _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception),
        _AST = __webpack_require__(2),
        _AST2 = _interopRequireDefault(_AST);
      function Visitor() {
        this.parents = [];
      }
      Visitor.prototype = {
        constructor: Visitor,
        mutating: false,
        acceptKey: function acceptKey(node, name) {
          var value = this.accept(node[name]);
          if (this.mutating) {
            if (value && (!value.type || !_AST2["default"][value.type]))
              throw new _Exception2["default"](
                'Unexpected node type "' +
                  value.type +
                  '" found when accepting ' +
                  name +
                  " on " +
                  node.type
              );
            node[name] = value;
          }
        },
        acceptRequired: function acceptRequired(node, name) {
          this.acceptKey(node, name);
          if (!node[name])
            throw new _Exception2["default"](node.type + " requires " + name);
        },
        acceptArray: function acceptArray(array) {
          for (var i = 0, l = array.length; i < l; i++) {
            this.acceptKey(array, i);
            if (!array[i]) {
              array.splice(i, 1);
              i--;
              l--;
            }
          }
        },
        accept: function accept(object) {
          if (!object) return;
          if (this.current) this.parents.unshift(this.current);
          this.current = object;
          var ret = this[object.type](object);
          this.current = this.parents.shift();
          if (!this.mutating || ret) {
            return ret;
          } else if (ret !== false) return object;
        },
        Program: function Program(program) {
          this.acceptArray(program.body);
        },
        MustacheStatement: function MustacheStatement(mustache) {
          this.acceptRequired(mustache, "path");
          this.acceptArray(mustache.params);
          this.acceptKey(mustache, "hash");
        },
        BlockStatement: function BlockStatement(block) {
          this.acceptRequired(block, "path");
          this.acceptArray(block.params);
          this.acceptKey(block, "hash");
          this.acceptKey(block, "program");
          this.acceptKey(block, "inverse");
        },
        PartialStatement: function PartialStatement(partial) {
          this.acceptRequired(partial, "name");
          this.acceptArray(partial.params);
          this.acceptKey(partial, "hash");
        },
        ContentStatement: function ContentStatement() {},
        CommentStatement: function CommentStatement() {},
        SubExpression: function SubExpression(sexpr) {
          this.acceptRequired(sexpr, "path");
          this.acceptArray(sexpr.params);
          this.acceptKey(sexpr, "hash");
        },
        PathExpression: function PathExpression() {},
        StringLiteral: function StringLiteral() {},
        NumberLiteral: function NumberLiteral() {},
        BooleanLiteral: function BooleanLiteral() {},
        UndefinedLiteral: function UndefinedLiteral() {},
        NullLiteral: function NullLiteral() {},
        Hash: function Hash(hash) {
          this.acceptArray(hash.pairs);
        },
        HashPair: function HashPair(pair) {
          this.acceptRequired(pair, "value");
        },
      };
      exports["default"] = Visitor;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      (function (global) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = function (Handlebars) {
          var root = typeof global !== "undefined" ? global : window,
            $Handlebars = root.Handlebars;
          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
          };
        };
        module.exports = exports["default"];
      }).call(
        exports,
        (function () {
          return this;
        })()
      );
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["default"] = function (obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      };
      exports.__esModule = true;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (typeof obj === "object" && obj !== null)
            for (var key in obj)
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
          newObj["default"] = obj;
          return newObj;
        }
      };
      exports.__esModule = true;
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireWildcard = __webpack_require__(9)["default"],
        _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;
      exports.createFrame = createFrame;
      var _import = __webpack_require__(13),
        Utils = _interopRequireWildcard(_import),
        _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception),
        VERSION = "3.0.1";
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 6;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var isArray = Utils.isArray,
        isFunction = Utils.isFunction,
        toString = Utils.toString,
        objectType = "[object Object]";
      function HandlebarsEnvironment(helpers, partials) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        registerDefaultHelpers(this);
      }
      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: logger,
        log: log,
        registerHelper: function registerHelper(name, fn) {
          if (toString.call(name) === objectType) {
            if (fn)
              throw new _Exception2["default"](
                "Arg not supported with multiple helpers"
              );
            Utils.extend(this.helpers, name);
          } else this.helpers[name] = fn;
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (toString.call(name) === objectType) {
            Utils.extend(this.partials, name);
          } else {
            if (typeof partial === "undefined")
              throw new _Exception2["default"](
                "Attempting to register a partial as undefined"
              );
            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
      };
      function registerDefaultHelpers(instance) {
        instance.registerHelper("helperMissing", function () {
          if (arguments.length === 1) {
            return undefined;
          } else throw new _Exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        });
        instance.registerHelper(
          "blockHelperMissing",
          function (context, options) {
            var inverse = options.inverse,
              fn = options.fn;
            if (context === true) {
              return fn(this);
            } else if (context === false || context == null) {
              return inverse(this);
            } else if (isArray(context)) {
              if (context.length > 0) {
                if (options.ids) options.ids = [options.name];
                return instance.helpers.each(context, options);
              } else return inverse(this);
            } else {
              if (options.data && options.ids) {
                var data = createFrame(options.data);
                data.contextPath = Utils.appendContextPath(
                  options.data.contextPath,
                  options.name
                );
                options = {
                  data: data,
                };
              }
              return fn(context, options);
            }
          }
        );
        instance.registerHelper("each", function (context, options) {
          if (!options)
            throw new _Exception2["default"]("Must pass iterator to #each");
          var fn = options.fn,
            inverse = options.inverse,
            i = 0,
            ret = "",
            data = undefined,
            contextPath = undefined;
          if (options.data && options.ids)
            contextPath =
              Utils.appendContextPath(
                options.data.contextPath,
                options.ids[0]
              ) + ".";
          if (isFunction(context)) context = context.call(this);
          if (options.data) data = createFrame(options.data);
          function execIteration(field, index, last) {
            if (data) {
              data.key = field;
              data.index = index;
              data.first = index === 0;
              data.last = !!last;
              if (contextPath) data.contextPath = contextPath + field;
            }
            ret =
              ret +
              fn(context[field], {
                data: data,
                blockParams: Utils.blockParams(
                  [context[field], field],
                  [contextPath + field, null]
                ),
              });
          }
          if (context && typeof context === "object")
            if (isArray(context)) {
              for (var j = context.length; i < j; i++)
                execIteration(i, i, i === context.length - 1);
            } else {
              var priorKey = undefined;
              for (var key in context)
                if (context.hasOwnProperty(key)) {
                  if (priorKey) execIteration(priorKey, i - 1);
                  priorKey = key;
                  i++;
                }
              if (priorKey) execIteration(priorKey, i - 1, true);
            }
          if (i === 0) ret = inverse(this);
          return ret;
        });
        instance.registerHelper("if", function (conditional, options) {
          if (isFunction(conditional)) conditional = conditional.call(this);
          if (
            (!options.hash.includeZero && !conditional) ||
            Utils.isEmpty(conditional)
          ) {
            return options.inverse(this);
          } else return options.fn(this);
        });
        instance.registerHelper("unless", function (conditional, options) {
          return instance.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash,
          });
        });
        instance.registerHelper("with", function (context, options) {
          if (isFunction(context)) context = context.call(this);
          var fn = options.fn;
          if (!Utils.isEmpty(context)) {
            if (options.data && options.ids) {
              var data = createFrame(options.data);
              data.contextPath = Utils.appendContextPath(
                options.data.contextPath,
                options.ids[0]
              );
              options = {
                data: data,
              };
            }
            return fn(context, options);
          } else return options.inverse(this);
        });
        instance.registerHelper("log", function (message, options) {
          var level =
            options.data && options.data.level != null
              ? parseInt(options.data.level, 10)
              : 1;
          instance.log(level, message);
        });
        instance.registerHelper("lookup", function (obj, field) {
          return obj && obj[field];
        });
      }
      var logger = {
        methodMap: {
          0: "debug",
          1: "info",
          2: "warn",
          3: "error",
        },
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 1,
        log: function log(level, message) {
          if (typeof console !== "undefined" && logger.level <= level) {
            var method = logger.methodMap[level];
            (console[method] || console.log).call(console, message);
          }
        },
      };
      exports.logger = logger;
      var log = logger.log;
      exports.log = log;
      function createFrame(object) {
        var frame = Utils.extend({}, object);
        frame._parent = object;
        return frame;
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      function SafeString(string) {
        this.string = string;
      }
      SafeString.prototype.toString = SafeString.prototype.toHTML =
        function () {
          return "" + this.string;
        };
      exports["default"] = SafeString;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var errorProps = [
        "description",
        "fileName",
        "lineNumber",
        "message",
        "name",
        "number",
        "stack",
      ];
      function Exception(message, node) {
        var loc = node && node.loc,
          line = undefined,
          column = undefined;
        if (loc) {
          line = loc.start.line;
          column = loc.start.column;
          message += " - " + line + ":" + column;
        }
        var tmp = Error.prototype.constructor.call(this, message);
        for (var idx = 0; idx < errorProps.length; idx++)
          this[errorProps[idx]] = tmp[errorProps[idx]];
        if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
        if (loc) {
          this.lineNumber = line;
          this.column = column;
        }
      }
      Exception.prototype = new Error();
      exports["default"] = Exception;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
        },
        badChars = /[&<>"'`]/g,
        possible = /[&<>"'`]/;
      function escapeChar(chr) {
        return escape[chr];
      }
      function extend(obj) {
        for (var i = 1; i < arguments.length; i++)
          for (var key in arguments[i])
            if (Object.prototype.hasOwnProperty.call(arguments[i], key))
              obj[key] = arguments[i][key];
        return obj;
      }
      var toString = Object.prototype.toString;
      exports.toString = toString;
      var isFunction = function isFunction(value) {
        return typeof value === "function";
      };
      if (isFunction(/x/))
        exports.isFunction = isFunction = function (value) {
          return (
            typeof value === "function" &&
            toString.call(value) === "[object Function]"
          );
        };
      var isFunction;
      exports.isFunction = isFunction;
      var isArray =
        Array.isArray ||
        function (value) {
          return value && typeof value === "object"
            ? toString.call(value) === "[object Array]"
            : false;
        };
      exports.isArray = isArray;
      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++)
          if (array[i] === value) return i;
        return -1;
      }
      function escapeExpression(string) {
        if (typeof string !== "string") {
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return "";
          } else if (!string) return string + "";
          string = "" + string;
        }
        if (!possible.test(string)) return string;
        return string.replace(badChars, escapeChar);
      }
      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else return false;
      }
      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }
      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + "." : "") + id;
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireWildcard = __webpack_require__(9)["default"],
        _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;
      var _import = __webpack_require__(13),
        Utils = _interopRequireWildcard(_import),
        _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception),
        _COMPILER_REVISION$REVISION_CHANGES$createFrame =
          __webpack_require__(10);
      function checkRevision(compilerInfo) {
        var compilerRevision = (compilerInfo && compilerInfo[0]) || 1,
          currentRevision =
            _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;
        if (compilerRevision !== currentRevision)
          if (compilerRevision < currentRevision) {
            var runtimeVersions =
                _COMPILER_REVISION$REVISION_CHANGES$createFrame
                  .REVISION_CHANGES[currentRevision],
              compilerVersions =
                _COMPILER_REVISION$REVISION_CHANGES$createFrame
                  .REVISION_CHANGES[compilerRevision];
            throw new _Exception2["default"](
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                runtimeVersions +
                ") or downgrade your runtime to an older version (" +
                compilerVersions +
                ")."
            );
          } else
            throw new _Exception2["default"](
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                compilerInfo[1] +
                ")."
            );
      }
      function template(templateSpec, env) {
        if (!env)
          throw new _Exception2["default"]("No environment passed to template");
        if (!templateSpec || !templateSpec.main)
          throw new _Exception2["default"](
            "Unknown template object: " + typeof templateSpec
          );
        env.VM.checkRevision(templateSpec.compiler);
        function invokePartialWrapper(partial, context, options) {
          if (options.hash) context = Utils.extend({}, context, options.hash);
          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var result = env.VM.invokePartial.call(
            this,
            partial,
            context,
            options
          );
          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(
              partial,
              templateSpec.compilerOptions,
              env
            );
            result = options.partials[options.name](context, options);
          }
          if (result != null) {
            if (options.indent) {
              var lines = result.split("\n");
              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) break;
                lines[i] = options.indent + lines[i];
              }
              result = lines.join("\n");
            }
            return result;
          } else
            throw new _Exception2["default"](
              "The partial " +
                options.name +
                " could not be compiled when running in runtime-only mode"
            );
        }
        var container = {
          strict: function strict(obj, name) {
            if (!(name in obj))
              throw new _Exception2["default"](
                '"' + name + '" not defined in ' + obj
              );
            return obj[name];
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++)
              if (depths[i] && depths[i][name] != null) return depths[i][name];
          },
          lambda: function lambda(current, context) {
            return typeof current === "function"
              ? current.call(context)
              : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            return templateSpec[i];
          },
          programs: [],
          program: function program(
            i,
            data,
            declaredBlockParams,
            blockParams,
            depths
          ) {
            var programWrapper = this.programs[i],
              fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(
                this,
                i,
                fn,
                data,
                declaredBlockParams,
                blockParams,
                depths
              );
            } else if (!programWrapper)
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) value = value._parent;
            return value;
          },
          merge: function merge(param, common) {
            var obj = param || common;
            if (param && common && param !== common)
              obj = Utils.extend({}, common, param);
            return obj;
          },
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler,
        };
        function ret(context) {
          var options = arguments[1] === undefined ? {} : arguments[1],
            data = options.data;
          ret._setup(options);
          if (!options.partial && templateSpec.useData)
            data = initData(context, data);
          var depths = undefined,
            blockParams = templateSpec.useBlockParams ? [] : undefined;
          if (templateSpec.useDepths)
            depths = options.depths
              ? [context].concat(options.depths)
              : [context];
          return templateSpec.main.call(
            container,
            context,
            container.helpers,
            container.partials,
            data,
            blockParams,
            depths
          );
        }
        ret.isTop = true;
        ret._setup = function (options) {
          if (!options.partial) {
            container.helpers = container.merge(options.helpers, env.helpers);
            if (templateSpec.usePartial)
              container.partials = container.merge(
                options.partials,
                env.partials
              );
          } else {
            container.helpers = options.helpers;
            container.partials = options.partials;
          }
        };
        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams)
            throw new _Exception2["default"]("must pass block params");
          if (templateSpec.useDepths && !depths)
            throw new _Exception2["default"]("must pass parent depths");
          return wrapProgram(
            container,
            i,
            templateSpec[i],
            data,
            0,
            blockParams,
            depths
          );
        };
        return ret;
      }
      function wrapProgram(
        container,
        i,
        fn,
        data,
        declaredBlockParams,
        blockParams,
        depths
      ) {
        function prog(context) {
          var options = arguments[1] === undefined ? {} : arguments[1];
          return fn.call(
            container,
            context,
            container.helpers,
            container.partials,
            options.data || data,
            blockParams && [options.blockParams].concat(blockParams),
            depths && [context].concat(depths)
          );
        }
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }
      function resolvePartial(partial, context, options) {
        if (!partial) {
          partial = options.partials[options.name];
        } else if (!partial.call && !options.name) {
          options.name = partial;
          partial = options.partials[partial];
        }
        return partial;
      }
      function invokePartial(partial, context, options) {
        options.partial = true;
        if (partial === undefined) {
          throw new _Exception2["default"](
            "The partial " + options.name + " could not be found"
          );
        } else if (partial instanceof Function)
          return partial(context, options);
      }
      function noop() {
        return "";
      }
      function initData(context, data) {
        if (!data || !("root" in data)) {
          data = data
            ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data)
            : {};
          data.root = context;
        }
        return data;
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var handlebars = (function () {
        var parser = {
            trace: function trace() {},
            yy: {},
            symbols_: {
              error: 2,
              root: 3,
              program: 4,
              EOF: 5,
              program_repetition0: 6,
              statement: 7,
              mustache: 8,
              block: 9,
              rawBlock: 10,
              partial: 11,
              content: 12,
              COMMENT: 13,
              CONTENT: 14,
              openRawBlock: 15,
              END_RAW_BLOCK: 16,
              OPEN_RAW_BLOCK: 17,
              helperName: 18,
              openRawBlock_repetition0: 19,
              openRawBlock_option0: 20,
              CLOSE_RAW_BLOCK: 21,
              openBlock: 22,
              block_option0: 23,
              closeBlock: 24,
              openInverse: 25,
              block_option1: 26,
              OPEN_BLOCK: 27,
              openBlock_repetition0: 28,
              openBlock_option0: 29,
              openBlock_option1: 30,
              CLOSE: 31,
              OPEN_INVERSE: 32,
              openInverse_repetition0: 33,
              openInverse_option0: 34,
              openInverse_option1: 35,
              openInverseChain: 36,
              OPEN_INVERSE_CHAIN: 37,
              openInverseChain_repetition0: 38,
              openInverseChain_option0: 39,
              openInverseChain_option1: 40,
              inverseAndProgram: 41,
              INVERSE: 42,
              inverseChain: 43,
              inverseChain_option0: 44,
              OPEN_ENDBLOCK: 45,
              OPEN: 46,
              mustache_repetition0: 47,
              mustache_option0: 48,
              OPEN_UNESCAPED: 49,
              mustache_repetition1: 50,
              mustache_option1: 51,
              CLOSE_UNESCAPED: 52,
              OPEN_PARTIAL: 53,
              partialName: 54,
              partial_repetition0: 55,
              partial_option0: 56,
              param: 57,
              sexpr: 58,
              OPEN_SEXPR: 59,
              sexpr_repetition0: 60,
              sexpr_option0: 61,
              CLOSE_SEXPR: 62,
              hash: 63,
              hash_repetition_plus0: 64,
              hashSegment: 65,
              ID: 66,
              EQUALS: 67,
              blockParams: 68,
              OPEN_BLOCK_PARAMS: 69,
              blockParams_repetition_plus0: 70,
              CLOSE_BLOCK_PARAMS: 71,
              path: 72,
              dataName: 73,
              STRING: 74,
              NUMBER: 75,
              BOOLEAN: 76,
              UNDEFINED: 77,
              NULL: 78,
              DATA: 79,
              pathSegments: 80,
              SEP: 81,
              $accept: 0,
              $end: 1,
            },
            terminals_: {
              2: "error",
              5: "EOF",
              13: "COMMENT",
              14: "CONTENT",
              16: "END_RAW_BLOCK",
              17: "OPEN_RAW_BLOCK",
              21: "CLOSE_RAW_BLOCK",
              27: "OPEN_BLOCK",
              31: "CLOSE",
              32: "OPEN_INVERSE",
              37: "OPEN_INVERSE_CHAIN",
              42: "INVERSE",
              45: "OPEN_ENDBLOCK",
              46: "OPEN",
              49: "OPEN_UNESCAPED",
              52: "CLOSE_UNESCAPED",
              53: "OPEN_PARTIAL",
              59: "OPEN_SEXPR",
              62: "CLOSE_SEXPR",
              66: "ID",
              67: "EQUALS",
              69: "OPEN_BLOCK_PARAMS",
              71: "CLOSE_BLOCK_PARAMS",
              74: "STRING",
              75: "NUMBER",
              76: "BOOLEAN",
              77: "UNDEFINED",
              78: "NULL",
              79: "DATA",
              81: "SEP",
            },
            productions_: [
              0,
              [3, 2],
              [4, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [12, 1],
              [10, 3],
              [15, 5],
              [9, 4],
              [9, 4],
              [22, 6],
              [25, 6],
              [36, 6],
              [41, 2],
              [43, 3],
              [43, 1],
              [24, 3],
              [8, 5],
              [8, 5],
              [11, 5],
              [57, 1],
              [57, 1],
              [58, 5],
              [63, 1],
              [65, 3],
              [68, 3],
              [18, 1],
              [18, 1],
              [18, 1],
              [18, 1],
              [18, 1],
              [18, 1],
              [18, 1],
              [54, 1],
              [54, 1],
              [73, 2],
              [72, 1],
              [80, 3],
              [80, 1],
              [6, 0],
              [6, 2],
              [19, 0],
              [19, 2],
              [20, 0],
              [20, 1],
              [23, 0],
              [23, 1],
              [26, 0],
              [26, 1],
              [28, 0],
              [28, 2],
              [29, 0],
              [29, 1],
              [30, 0],
              [30, 1],
              [33, 0],
              [33, 2],
              [34, 0],
              [34, 1],
              [35, 0],
              [35, 1],
              [38, 0],
              [38, 2],
              [39, 0],
              [39, 1],
              [40, 0],
              [40, 1],
              [44, 0],
              [44, 1],
              [47, 0],
              [47, 2],
              [48, 0],
              [48, 1],
              [50, 0],
              [50, 2],
              [51, 0],
              [51, 1],
              [55, 0],
              [55, 2],
              [56, 0],
              [56, 1],
              [60, 0],
              [60, 2],
              [61, 0],
              [61, 1],
              [64, 1],
              [64, 2],
              [70, 1],
              [70, 2],
            ],
            performAction: function anonymous(
              yytext,
              yyleng,
              yylineno,
              yy,
              yystate,
              $$,
              _$
            ) {
              var $0 = $$.length - 1;
              switch (yystate) {
                case 1:
                  return $$[$0 - 1];
                  break;
                case 2:
                  this.$ = new yy.Program(
                    $$[$0],
                    null,
                    {},
                    yy.locInfo(this._$)
                  );
                  break;
                case 3:
                  this.$ = $$[$0];
                  break;
                case 4:
                  this.$ = $$[$0];
                  break;
                case 5:
                  this.$ = $$[$0];
                  break;
                case 6:
                  this.$ = $$[$0];
                  break;
                case 7:
                  this.$ = $$[$0];
                  break;
                case 8:
                  this.$ = new yy.CommentStatement(
                    yy.stripComment($$[$0]),
                    yy.stripFlags($$[$0], $$[$0]),
                    yy.locInfo(this._$)
                  );
                  break;
                case 9:
                  this.$ = new yy.ContentStatement($$[$0], yy.locInfo(this._$));
                  break;
                case 10:
                  this.$ = yy.prepareRawBlock(
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    this._$
                  );
                  break;
                case 11:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                  };
                  break;
                case 12:
                  this.$ = yy.prepareBlock(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    false,
                    this._$
                  );
                  break;
                case 13:
                  this.$ = yy.prepareBlock(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    true,
                    this._$
                  );
                  break;
                case 14:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0]),
                  };
                  break;
                case 15:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0]),
                  };
                  break;
                case 16:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0]),
                  };
                  break;
                case 17:
                  this.$ = {
                    strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                    program: $$[$0],
                  };
                  break;
                case 18:
                  var inverse = yy.prepareBlock(
                      $$[$0 - 2],
                      $$[$0 - 1],
                      $$[$0],
                      $$[$0],
                      false,
                      this._$
                    ),
                    program = new yy.Program(
                      [inverse],
                      null,
                      {},
                      yy.locInfo(this._$)
                    );
                  program.chained = true;
                  this.$ = {
                    strip: $$[$0 - 2].strip,
                    program: program,
                    chain: true,
                  };
                  break;
                case 19:
                  this.$ = $$[$0];
                  break;
                case 20:
                  this.$ = {
                    path: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 2], $$[$0]),
                  };
                  break;
                case 21:
                  this.$ = yy.prepareMustache(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0 - 4],
                    yy.stripFlags($$[$0 - 4], $$[$0]),
                    this._$
                  );
                  break;
                case 22:
                  this.$ = yy.prepareMustache(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0 - 4],
                    yy.stripFlags($$[$0 - 4], $$[$0]),
                    this._$
                  );
                  break;
                case 23:
                  this.$ = new yy.PartialStatement(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    yy.stripFlags($$[$0 - 4], $$[$0]),
                    yy.locInfo(this._$)
                  );
                  break;
                case 24:
                  this.$ = $$[$0];
                  break;
                case 25:
                  this.$ = $$[$0];
                  break;
                case 26:
                  this.$ = new yy.SubExpression(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    yy.locInfo(this._$)
                  );
                  break;
                case 27:
                  this.$ = new yy.Hash($$[$0], yy.locInfo(this._$));
                  break;
                case 28:
                  this.$ = new yy.HashPair(
                    yy.id($$[$0 - 2]),
                    $$[$0],
                    yy.locInfo(this._$)
                  );
                  break;
                case 29:
                  this.$ = yy.id($$[$0 - 1]);
                  break;
                case 30:
                  this.$ = $$[$0];
                  break;
                case 31:
                  this.$ = $$[$0];
                  break;
                case 32:
                  this.$ = new yy.StringLiteral($$[$0], yy.locInfo(this._$));
                  break;
                case 33:
                  this.$ = new yy.NumberLiteral($$[$0], yy.locInfo(this._$));
                  break;
                case 34:
                  this.$ = new yy.BooleanLiteral($$[$0], yy.locInfo(this._$));
                  break;
                case 35:
                  this.$ = new yy.UndefinedLiteral(yy.locInfo(this._$));
                  break;
                case 36:
                  this.$ = new yy.NullLiteral(yy.locInfo(this._$));
                  break;
                case 37:
                  this.$ = $$[$0];
                  break;
                case 38:
                  this.$ = $$[$0];
                  break;
                case 39:
                  this.$ = yy.preparePath(true, $$[$0], this._$);
                  break;
                case 40:
                  this.$ = yy.preparePath(false, $$[$0], this._$);
                  break;
                case 41:
                  $$[$0 - 2].push({
                    part: yy.id($$[$0]),
                    original: $$[$0],
                    separator: $$[$0 - 1],
                  });
                  this.$ = $$[$0 - 2];
                  break;
                case 42:
                  this.$ = [
                    {
                      part: yy.id($$[$0]),
                      original: $$[$0],
                    },
                  ];
                  break;
                case 43:
                  this.$ = [];
                  break;
                case 44:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 45:
                  this.$ = [];
                  break;
                case 46:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 53:
                  this.$ = [];
                  break;
                case 54:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 59:
                  this.$ = [];
                  break;
                case 60:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 65:
                  this.$ = [];
                  break;
                case 66:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 73:
                  this.$ = [];
                  break;
                case 74:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 77:
                  this.$ = [];
                  break;
                case 78:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 81:
                  this.$ = [];
                  break;
                case 82:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 85:
                  this.$ = [];
                  break;
                case 86:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 89:
                  this.$ = [$$[$0]];
                  break;
                case 90:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 91:
                  this.$ = [$$[$0]];
                  break;
                case 92:
                  $$[$0 - 1].push($$[$0]);
                  break;
              }
            },
            table: [
              {
                3: 1,
                4: 2,
                5: [2, 43],
                6: 3,
                13: [2, 43],
                14: [2, 43],
                17: [2, 43],
                27: [2, 43],
                32: [2, 43],
                46: [2, 43],
                49: [2, 43],
                53: [2, 43],
              },
              {
                1: [3],
              },
              {
                5: [1, 4],
              },
              {
                5: [2, 2],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: [1, 11],
                14: [1, 18],
                15: 16,
                17: [1, 21],
                22: 14,
                25: 15,
                27: [1, 19],
                32: [1, 20],
                37: [2, 2],
                42: [2, 2],
                45: [2, 2],
                46: [1, 12],
                49: [1, 13],
                53: [1, 17],
              },
              {
                1: [2, 1],
              },
              {
                5: [2, 44],
                13: [2, 44],
                14: [2, 44],
                17: [2, 44],
                27: [2, 44],
                32: [2, 44],
                37: [2, 44],
                42: [2, 44],
                45: [2, 44],
                46: [2, 44],
                49: [2, 44],
                53: [2, 44],
              },
              {
                5: [2, 3],
                13: [2, 3],
                14: [2, 3],
                17: [2, 3],
                27: [2, 3],
                32: [2, 3],
                37: [2, 3],
                42: [2, 3],
                45: [2, 3],
                46: [2, 3],
                49: [2, 3],
                53: [2, 3],
              },
              {
                5: [2, 4],
                13: [2, 4],
                14: [2, 4],
                17: [2, 4],
                27: [2, 4],
                32: [2, 4],
                37: [2, 4],
                42: [2, 4],
                45: [2, 4],
                46: [2, 4],
                49: [2, 4],
                53: [2, 4],
              },
              {
                5: [2, 5],
                13: [2, 5],
                14: [2, 5],
                17: [2, 5],
                27: [2, 5],
                32: [2, 5],
                37: [2, 5],
                42: [2, 5],
                45: [2, 5],
                46: [2, 5],
                49: [2, 5],
                53: [2, 5],
              },
              {
                5: [2, 6],
                13: [2, 6],
                14: [2, 6],
                17: [2, 6],
                27: [2, 6],
                32: [2, 6],
                37: [2, 6],
                42: [2, 6],
                45: [2, 6],
                46: [2, 6],
                49: [2, 6],
                53: [2, 6],
              },
              {
                5: [2, 7],
                13: [2, 7],
                14: [2, 7],
                17: [2, 7],
                27: [2, 7],
                32: [2, 7],
                37: [2, 7],
                42: [2, 7],
                45: [2, 7],
                46: [2, 7],
                49: [2, 7],
                53: [2, 7],
              },
              {
                5: [2, 8],
                13: [2, 8],
                14: [2, 8],
                17: [2, 8],
                27: [2, 8],
                32: [2, 8],
                37: [2, 8],
                42: [2, 8],
                45: [2, 8],
                46: [2, 8],
                49: [2, 8],
                53: [2, 8],
              },
              {
                18: 22,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                18: 33,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                4: 34,
                6: 3,
                13: [2, 43],
                14: [2, 43],
                17: [2, 43],
                27: [2, 43],
                32: [2, 43],
                37: [2, 43],
                42: [2, 43],
                45: [2, 43],
                46: [2, 43],
                49: [2, 43],
                53: [2, 43],
              },
              {
                4: 35,
                6: 3,
                13: [2, 43],
                14: [2, 43],
                17: [2, 43],
                27: [2, 43],
                32: [2, 43],
                42: [2, 43],
                45: [2, 43],
                46: [2, 43],
                49: [2, 43],
                53: [2, 43],
              },
              {
                12: 36,
                14: [1, 18],
              },
              {
                18: 38,
                54: 37,
                58: 39,
                59: [1, 40],
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                5: [2, 9],
                13: [2, 9],
                14: [2, 9],
                16: [2, 9],
                17: [2, 9],
                27: [2, 9],
                32: [2, 9],
                37: [2, 9],
                42: [2, 9],
                45: [2, 9],
                46: [2, 9],
                49: [2, 9],
                53: [2, 9],
              },
              {
                18: 41,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                18: 42,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                18: 43,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                31: [2, 73],
                47: 44,
                59: [2, 73],
                66: [2, 73],
                74: [2, 73],
                75: [2, 73],
                76: [2, 73],
                77: [2, 73],
                78: [2, 73],
                79: [2, 73],
              },
              {
                21: [2, 30],
                31: [2, 30],
                52: [2, 30],
                59: [2, 30],
                62: [2, 30],
                66: [2, 30],
                69: [2, 30],
                74: [2, 30],
                75: [2, 30],
                76: [2, 30],
                77: [2, 30],
                78: [2, 30],
                79: [2, 30],
              },
              {
                21: [2, 31],
                31: [2, 31],
                52: [2, 31],
                59: [2, 31],
                62: [2, 31],
                66: [2, 31],
                69: [2, 31],
                74: [2, 31],
                75: [2, 31],
                76: [2, 31],
                77: [2, 31],
                78: [2, 31],
                79: [2, 31],
              },
              {
                21: [2, 32],
                31: [2, 32],
                52: [2, 32],
                59: [2, 32],
                62: [2, 32],
                66: [2, 32],
                69: [2, 32],
                74: [2, 32],
                75: [2, 32],
                76: [2, 32],
                77: [2, 32],
                78: [2, 32],
                79: [2, 32],
              },
              {
                21: [2, 33],
                31: [2, 33],
                52: [2, 33],
                59: [2, 33],
                62: [2, 33],
                66: [2, 33],
                69: [2, 33],
                74: [2, 33],
                75: [2, 33],
                76: [2, 33],
                77: [2, 33],
                78: [2, 33],
                79: [2, 33],
              },
              {
                21: [2, 34],
                31: [2, 34],
                52: [2, 34],
                59: [2, 34],
                62: [2, 34],
                66: [2, 34],
                69: [2, 34],
                74: [2, 34],
                75: [2, 34],
                76: [2, 34],
                77: [2, 34],
                78: [2, 34],
                79: [2, 34],
              },
              {
                21: [2, 35],
                31: [2, 35],
                52: [2, 35],
                59: [2, 35],
                62: [2, 35],
                66: [2, 35],
                69: [2, 35],
                74: [2, 35],
                75: [2, 35],
                76: [2, 35],
                77: [2, 35],
                78: [2, 35],
                79: [2, 35],
              },
              {
                21: [2, 36],
                31: [2, 36],
                52: [2, 36],
                59: [2, 36],
                62: [2, 36],
                66: [2, 36],
                69: [2, 36],
                74: [2, 36],
                75: [2, 36],
                76: [2, 36],
                77: [2, 36],
                78: [2, 36],
                79: [2, 36],
              },
              {
                21: [2, 40],
                31: [2, 40],
                52: [2, 40],
                59: [2, 40],
                62: [2, 40],
                66: [2, 40],
                69: [2, 40],
                74: [2, 40],
                75: [2, 40],
                76: [2, 40],
                77: [2, 40],
                78: [2, 40],
                79: [2, 40],
                81: [1, 45],
              },
              {
                66: [1, 32],
                80: 46,
              },
              {
                21: [2, 42],
                31: [2, 42],
                52: [2, 42],
                59: [2, 42],
                62: [2, 42],
                66: [2, 42],
                69: [2, 42],
                74: [2, 42],
                75: [2, 42],
                76: [2, 42],
                77: [2, 42],
                78: [2, 42],
                79: [2, 42],
                81: [2, 42],
              },
              {
                50: 47,
                52: [2, 77],
                59: [2, 77],
                66: [2, 77],
                74: [2, 77],
                75: [2, 77],
                76: [2, 77],
                77: [2, 77],
                78: [2, 77],
                79: [2, 77],
              },
              {
                23: 48,
                36: 50,
                37: [1, 52],
                41: 51,
                42: [1, 53],
                43: 49,
                45: [2, 49],
              },
              {
                26: 54,
                41: 55,
                42: [1, 53],
                45: [2, 51],
              },
              {
                16: [1, 56],
              },
              {
                31: [2, 81],
                55: 57,
                59: [2, 81],
                66: [2, 81],
                74: [2, 81],
                75: [2, 81],
                76: [2, 81],
                77: [2, 81],
                78: [2, 81],
                79: [2, 81],
              },
              {
                31: [2, 37],
                59: [2, 37],
                66: [2, 37],
                74: [2, 37],
                75: [2, 37],
                76: [2, 37],
                77: [2, 37],
                78: [2, 37],
                79: [2, 37],
              },
              {
                31: [2, 38],
                59: [2, 38],
                66: [2, 38],
                74: [2, 38],
                75: [2, 38],
                76: [2, 38],
                77: [2, 38],
                78: [2, 38],
                79: [2, 38],
              },
              {
                18: 58,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                28: 59,
                31: [2, 53],
                59: [2, 53],
                66: [2, 53],
                69: [2, 53],
                74: [2, 53],
                75: [2, 53],
                76: [2, 53],
                77: [2, 53],
                78: [2, 53],
                79: [2, 53],
              },
              {
                31: [2, 59],
                33: 60,
                59: [2, 59],
                66: [2, 59],
                69: [2, 59],
                74: [2, 59],
                75: [2, 59],
                76: [2, 59],
                77: [2, 59],
                78: [2, 59],
                79: [2, 59],
              },
              {
                19: 61,
                21: [2, 45],
                59: [2, 45],
                66: [2, 45],
                74: [2, 45],
                75: [2, 45],
                76: [2, 45],
                77: [2, 45],
                78: [2, 45],
                79: [2, 45],
              },
              {
                18: 65,
                31: [2, 75],
                48: 62,
                57: 63,
                58: 66,
                59: [1, 40],
                63: 64,
                64: 67,
                65: 68,
                66: [1, 69],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                66: [1, 70],
              },
              {
                21: [2, 39],
                31: [2, 39],
                52: [2, 39],
                59: [2, 39],
                62: [2, 39],
                66: [2, 39],
                69: [2, 39],
                74: [2, 39],
                75: [2, 39],
                76: [2, 39],
                77: [2, 39],
                78: [2, 39],
                79: [2, 39],
                81: [1, 45],
              },
              {
                18: 65,
                51: 71,
                52: [2, 79],
                57: 72,
                58: 66,
                59: [1, 40],
                63: 73,
                64: 67,
                65: 68,
                66: [1, 69],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                24: 74,
                45: [1, 75],
              },
              {
                45: [2, 50],
              },
              {
                4: 76,
                6: 3,
                13: [2, 43],
                14: [2, 43],
                17: [2, 43],
                27: [2, 43],
                32: [2, 43],
                37: [2, 43],
                42: [2, 43],
                45: [2, 43],
                46: [2, 43],
                49: [2, 43],
                53: [2, 43],
              },
              {
                45: [2, 19],
              },
              {
                18: 77,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                4: 78,
                6: 3,
                13: [2, 43],
                14: [2, 43],
                17: [2, 43],
                27: [2, 43],
                32: [2, 43],
                45: [2, 43],
                46: [2, 43],
                49: [2, 43],
                53: [2, 43],
              },
              {
                24: 79,
                45: [1, 75],
              },
              {
                45: [2, 52],
              },
              {
                5: [2, 10],
                13: [2, 10],
                14: [2, 10],
                17: [2, 10],
                27: [2, 10],
                32: [2, 10],
                37: [2, 10],
                42: [2, 10],
                45: [2, 10],
                46: [2, 10],
                49: [2, 10],
                53: [2, 10],
              },
              {
                18: 65,
                31: [2, 83],
                56: 80,
                57: 81,
                58: 66,
                59: [1, 40],
                63: 82,
                64: 67,
                65: 68,
                66: [1, 69],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                59: [2, 85],
                60: 83,
                62: [2, 85],
                66: [2, 85],
                74: [2, 85],
                75: [2, 85],
                76: [2, 85],
                77: [2, 85],
                78: [2, 85],
                79: [2, 85],
              },
              {
                18: 65,
                29: 84,
                31: [2, 55],
                57: 85,
                58: 66,
                59: [1, 40],
                63: 86,
                64: 67,
                65: 68,
                66: [1, 69],
                69: [2, 55],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                18: 65,
                31: [2, 61],
                34: 87,
                57: 88,
                58: 66,
                59: [1, 40],
                63: 89,
                64: 67,
                65: 68,
                66: [1, 69],
                69: [2, 61],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                18: 65,
                20: 90,
                21: [2, 47],
                57: 91,
                58: 66,
                59: [1, 40],
                63: 92,
                64: 67,
                65: 68,
                66: [1, 69],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                31: [1, 93],
              },
              {
                31: [2, 74],
                59: [2, 74],
                66: [2, 74],
                74: [2, 74],
                75: [2, 74],
                76: [2, 74],
                77: [2, 74],
                78: [2, 74],
                79: [2, 74],
              },
              {
                31: [2, 76],
              },
              {
                21: [2, 24],
                31: [2, 24],
                52: [2, 24],
                59: [2, 24],
                62: [2, 24],
                66: [2, 24],
                69: [2, 24],
                74: [2, 24],
                75: [2, 24],
                76: [2, 24],
                77: [2, 24],
                78: [2, 24],
                79: [2, 24],
              },
              {
                21: [2, 25],
                31: [2, 25],
                52: [2, 25],
                59: [2, 25],
                62: [2, 25],
                66: [2, 25],
                69: [2, 25],
                74: [2, 25],
                75: [2, 25],
                76: [2, 25],
                77: [2, 25],
                78: [2, 25],
                79: [2, 25],
              },
              {
                21: [2, 27],
                31: [2, 27],
                52: [2, 27],
                62: [2, 27],
                65: 94,
                66: [1, 95],
                69: [2, 27],
              },
              {
                21: [2, 89],
                31: [2, 89],
                52: [2, 89],
                62: [2, 89],
                66: [2, 89],
                69: [2, 89],
              },
              {
                21: [2, 42],
                31: [2, 42],
                52: [2, 42],
                59: [2, 42],
                62: [2, 42],
                66: [2, 42],
                67: [1, 96],
                69: [2, 42],
                74: [2, 42],
                75: [2, 42],
                76: [2, 42],
                77: [2, 42],
                78: [2, 42],
                79: [2, 42],
                81: [2, 42],
              },
              {
                21: [2, 41],
                31: [2, 41],
                52: [2, 41],
                59: [2, 41],
                62: [2, 41],
                66: [2, 41],
                69: [2, 41],
                74: [2, 41],
                75: [2, 41],
                76: [2, 41],
                77: [2, 41],
                78: [2, 41],
                79: [2, 41],
                81: [2, 41],
              },
              {
                52: [1, 97],
              },
              {
                52: [2, 78],
                59: [2, 78],
                66: [2, 78],
                74: [2, 78],
                75: [2, 78],
                76: [2, 78],
                77: [2, 78],
                78: [2, 78],
                79: [2, 78],
              },
              {
                52: [2, 80],
              },
              {
                5: [2, 12],
                13: [2, 12],
                14: [2, 12],
                17: [2, 12],
                27: [2, 12],
                32: [2, 12],
                37: [2, 12],
                42: [2, 12],
                45: [2, 12],
                46: [2, 12],
                49: [2, 12],
                53: [2, 12],
              },
              {
                18: 98,
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                36: 50,
                37: [1, 52],
                41: 51,
                42: [1, 53],
                43: 100,
                44: 99,
                45: [2, 71],
              },
              {
                31: [2, 65],
                38: 101,
                59: [2, 65],
                66: [2, 65],
                69: [2, 65],
                74: [2, 65],
                75: [2, 65],
                76: [2, 65],
                77: [2, 65],
                78: [2, 65],
                79: [2, 65],
              },
              {
                45: [2, 17],
              },
              {
                5: [2, 13],
                13: [2, 13],
                14: [2, 13],
                17: [2, 13],
                27: [2, 13],
                32: [2, 13],
                37: [2, 13],
                42: [2, 13],
                45: [2, 13],
                46: [2, 13],
                49: [2, 13],
                53: [2, 13],
              },
              {
                31: [1, 102],
              },
              {
                31: [2, 82],
                59: [2, 82],
                66: [2, 82],
                74: [2, 82],
                75: [2, 82],
                76: [2, 82],
                77: [2, 82],
                78: [2, 82],
                79: [2, 82],
              },
              {
                31: [2, 84],
              },
              {
                18: 65,
                57: 104,
                58: 66,
                59: [1, 40],
                61: 103,
                62: [2, 87],
                63: 105,
                64: 67,
                65: 68,
                66: [1, 69],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                30: 106,
                31: [2, 57],
                68: 107,
                69: [1, 108],
              },
              {
                31: [2, 54],
                59: [2, 54],
                66: [2, 54],
                69: [2, 54],
                74: [2, 54],
                75: [2, 54],
                76: [2, 54],
                77: [2, 54],
                78: [2, 54],
                79: [2, 54],
              },
              {
                31: [2, 56],
                69: [2, 56],
              },
              {
                31: [2, 63],
                35: 109,
                68: 110,
                69: [1, 108],
              },
              {
                31: [2, 60],
                59: [2, 60],
                66: [2, 60],
                69: [2, 60],
                74: [2, 60],
                75: [2, 60],
                76: [2, 60],
                77: [2, 60],
                78: [2, 60],
                79: [2, 60],
              },
              {
                31: [2, 62],
                69: [2, 62],
              },
              {
                21: [1, 111],
              },
              {
                21: [2, 46],
                59: [2, 46],
                66: [2, 46],
                74: [2, 46],
                75: [2, 46],
                76: [2, 46],
                77: [2, 46],
                78: [2, 46],
                79: [2, 46],
              },
              {
                21: [2, 48],
              },
              {
                5: [2, 21],
                13: [2, 21],
                14: [2, 21],
                17: [2, 21],
                27: [2, 21],
                32: [2, 21],
                37: [2, 21],
                42: [2, 21],
                45: [2, 21],
                46: [2, 21],
                49: [2, 21],
                53: [2, 21],
              },
              {
                21: [2, 90],
                31: [2, 90],
                52: [2, 90],
                62: [2, 90],
                66: [2, 90],
                69: [2, 90],
              },
              {
                67: [1, 96],
              },
              {
                18: 65,
                57: 112,
                58: 66,
                59: [1, 40],
                66: [1, 32],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                5: [2, 22],
                13: [2, 22],
                14: [2, 22],
                17: [2, 22],
                27: [2, 22],
                32: [2, 22],
                37: [2, 22],
                42: [2, 22],
                45: [2, 22],
                46: [2, 22],
                49: [2, 22],
                53: [2, 22],
              },
              {
                31: [1, 113],
              },
              {
                45: [2, 18],
              },
              {
                45: [2, 72],
              },
              {
                18: 65,
                31: [2, 67],
                39: 114,
                57: 115,
                58: 66,
                59: [1, 40],
                63: 116,
                64: 67,
                65: 68,
                66: [1, 69],
                69: [2, 67],
                72: 23,
                73: 24,
                74: [1, 25],
                75: [1, 26],
                76: [1, 27],
                77: [1, 28],
                78: [1, 29],
                79: [1, 31],
                80: 30,
              },
              {
                5: [2, 23],
                13: [2, 23],
                14: [2, 23],
                17: [2, 23],
                27: [2, 23],
                32: [2, 23],
                37: [2, 23],
                42: [2, 23],
                45: [2, 23],
                46: [2, 23],
                49: [2, 23],
                53: [2, 23],
              },
              {
                62: [1, 117],
              },
              {
                59: [2, 86],
                62: [2, 86],
                66: [2, 86],
                74: [2, 86],
                75: [2, 86],
                76: [2, 86],
                77: [2, 86],
                78: [2, 86],
                79: [2, 86],
              },
              {
                62: [2, 88],
              },
              {
                31: [1, 118],
              },
              {
                31: [2, 58],
              },
              {
                66: [1, 120],
                70: 119,
              },
              {
                31: [1, 121],
              },
              {
                31: [2, 64],
              },
              {
                14: [2, 11],
              },
              {
                21: [2, 28],
                31: [2, 28],
                52: [2, 28],
                62: [2, 28],
                66: [2, 28],
                69: [2, 28],
              },
              {
                5: [2, 20],
                13: [2, 20],
                14: [2, 20],
                17: [2, 20],
                27: [2, 20],
                32: [2, 20],
                37: [2, 20],
                42: [2, 20],
                45: [2, 20],
                46: [2, 20],
                49: [2, 20],
                53: [2, 20],
              },
              {
                31: [2, 69],
                40: 122,
                68: 123,
                69: [1, 108],
              },
              {
                31: [2, 66],
                59: [2, 66],
                66: [2, 66],
                69: [2, 66],
                74: [2, 66],
                75: [2, 66],
                76: [2, 66],
                77: [2, 66],
                78: [2, 66],
                79: [2, 66],
              },
              {
                31: [2, 68],
                69: [2, 68],
              },
              {
                21: [2, 26],
                31: [2, 26],
                52: [2, 26],
                59: [2, 26],
                62: [2, 26],
                66: [2, 26],
                69: [2, 26],
                74: [2, 26],
                75: [2, 26],
                76: [2, 26],
                77: [2, 26],
                78: [2, 26],
                79: [2, 26],
              },
              {
                13: [2, 14],
                14: [2, 14],
                17: [2, 14],
                27: [2, 14],
                32: [2, 14],
                37: [2, 14],
                42: [2, 14],
                45: [2, 14],
                46: [2, 14],
                49: [2, 14],
                53: [2, 14],
              },
              {
                66: [1, 125],
                71: [1, 124],
              },
              {
                66: [2, 91],
                71: [2, 91],
              },
              {
                13: [2, 15],
                14: [2, 15],
                17: [2, 15],
                27: [2, 15],
                32: [2, 15],
                42: [2, 15],
                45: [2, 15],
                46: [2, 15],
                49: [2, 15],
                53: [2, 15],
              },
              {
                31: [1, 126],
              },
              {
                31: [2, 70],
              },
              {
                31: [2, 29],
              },
              {
                66: [2, 92],
                71: [2, 92],
              },
              {
                13: [2, 16],
                14: [2, 16],
                17: [2, 16],
                27: [2, 16],
                32: [2, 16],
                37: [2, 16],
                42: [2, 16],
                45: [2, 16],
                46: [2, 16],
                49: [2, 16],
                53: [2, 16],
              },
            ],
            defaultActions: {
              4: [2, 1],
              49: [2, 50],
              51: [2, 19],
              55: [2, 52],
              64: [2, 76],
              73: [2, 80],
              78: [2, 17],
              82: [2, 84],
              92: [2, 48],
              99: [2, 18],
              100: [2, 72],
              105: [2, 88],
              107: [2, 58],
              110: [2, 64],
              111: [2, 11],
              123: [2, 70],
              124: [2, 29],
            },
            parseError: function parseError(str, hash) {
              throw new Error(str);
            },
            parse: function parse(input) {
              var self = this,
                stack = [0],
                vstack = [null],
                lstack = [],
                table = this.table,
                yytext = "",
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
              this.lexer.setInput(input);
              this.lexer.yy = this.yy;
              this.yy.lexer = this.lexer;
              this.yy.parser = this;
              if (typeof this.lexer.yylloc == "undefined")
                this.lexer.yylloc = {};
              var yyloc = this.lexer.yylloc;
              lstack.push(yyloc);
              var ranges = this.lexer.options && this.lexer.options.ranges;
              if (typeof this.yy.parseError === "function")
                this.parseError = this.yy.parseError;
              function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
              }
              function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number")
                  token = self.symbols_[token] || token;
                return token;
              }
              var symbol,
                preErrorSymbol,
                state,
                action,
                a,
                r,
                yyval = {},
                p,
                len,
                newState,
                expected;
              while (true) {
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) {
                  action = this.defaultActions[state];
                } else {
                  if (symbol === null || typeof symbol == "undefined")
                    symbol = lex();
                  action = table[state] && table[state][symbol];
                }
                if (
                  typeof action === "undefined" ||
                  !action.length ||
                  !action[0]
                ) {
                  var errStr = "";
                  if (!recovering) {
                    expected = [];
                    for (p in table[state])
                      if (this.terminals_[p] && p > 2)
                        expected.push("'" + this.terminals_[p] + "'");
                    if (this.lexer.showPosition) {
                      errStr =
                        "Parse error on line " +
                        (yylineno + 1) +
                        ":\n" +
                        this.lexer.showPosition() +
                        "\nExpecting " +
                        expected.join(", ") +
                        ", got '" +
                        (this.terminals_[symbol] || symbol) +
                        "'";
                    } else
                      errStr =
                        "Parse error on line " +
                        (yylineno + 1) +
                        ": Unexpected " +
                        (symbol == 1
                          ? "end of input"
                          : "'" + (this.terminals_[symbol] || symbol) + "'");
                    this.parseError(errStr, {
                      text: this.lexer.match,
                      token: this.terminals_[symbol] || symbol,
                      line: this.lexer.yylineno,
                      loc: yyloc,
                      expected: expected,
                    });
                  }
                }
                if (action[0] instanceof Array && action.length > 1)
                  throw new Error(
                    "Parse Error: multiple actions possible at state: " +
                      state +
                      ", token: " +
                      symbol
                  );
                switch (action[0]) {
                  case 1:
                    stack.push(symbol);
                    vstack.push(this.lexer.yytext);
                    lstack.push(this.lexer.yylloc);
                    stack.push(action[1]);
                    symbol = null;
                    if (!preErrorSymbol) {
                      yyleng = this.lexer.yyleng;
                      yytext = this.lexer.yytext;
                      yylineno = this.lexer.yylineno;
                      yyloc = this.lexer.yylloc;
                      if (recovering > 0) recovering--;
                    } else {
                      symbol = preErrorSymbol;
                      preErrorSymbol = null;
                    }
                    break;
                  case 2:
                    len = this.productions_[action[1]][1];
                    yyval.$ = vstack[vstack.length - len];
                    yyval._$ = {
                      first_line: lstack[lstack.length - (len || 1)].first_line,
                      last_line: lstack[lstack.length - 1].last_line,
                      first_column:
                        lstack[lstack.length - (len || 1)].first_column,
                      last_column: lstack[lstack.length - 1].last_column,
                    };
                    if (ranges)
                      yyval._$.range = [
                        lstack[lstack.length - (len || 1)].range[0],
                        lstack[lstack.length - 1].range[1],
                      ];
                    r = this.performAction.call(
                      yyval,
                      yytext,
                      yyleng,
                      yylineno,
                      this.yy,
                      action[1],
                      vstack,
                      lstack
                    );
                    if (typeof r !== "undefined") return r;
                    if (len) {
                      stack = stack.slice(0, -1 * len * 2);
                      vstack = vstack.slice(0, -1 * len);
                      lstack = lstack.slice(0, -1 * len);
                    }
                    stack.push(this.productions_[action[1]][0]);
                    vstack.push(yyval.$);
                    lstack.push(yyval._$);
                    newState =
                      table[stack[stack.length - 2]][stack[stack.length - 1]];
                    stack.push(newState);
                    break;
                  case 3:
                    return true;
                }
              }
              return true;
            },
          },
          lexer = (function () {
            var lexer = {
              EOF: 1,
              parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                  this.yy.parser.parseError(str, hash);
                } else throw new Error(str);
              },
              setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = ["INITIAL"];
                this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0,
                };
                if (this.options.ranges) this.yylloc.range = [0, 0];
                this.offset = 0;
                return this;
              },
              input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                  this.yylineno++;
                  this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
              },
              unput: function unput(ch) {
                var len = ch.length,
                  lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(
                  0,
                  this.yytext.length - len - 1
                );
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.first_column,
                  last_column: lines
                    ? (lines.length === oldLines.length
                        ? this.yylloc.first_column
                        : 0) +
                      oldLines[oldLines.length - lines.length].length -
                      lines[0].length
                    : this.yylloc.first_column - len,
                };
                if (this.options.ranges)
                  this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                return this;
              },
              more: function more() {
                this._more = true;
                return this;
              },
              less: function less(n) {
                this.unput(this.match.slice(n));
              },
              pastInput: function pastInput() {
                var past = this.matched.substr(
                  0,
                  this.matched.length - this.match.length
                );
                return (
                  (past.length > 20 ? "..." : "") +
                  past.substr(-20).replace(/\n/g, "")
                );
              },
              upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20)
                  next += this._input.substr(0, 20 - next.length);
                return (
                  next.substr(0, 20) + (next.length > 20 ? "..." : "")
                ).replace(/\n/g, "");
              },
              showPosition: function showPosition() {
                var pre = this.pastInput(),
                  c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
              },
              next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                  this.yytext = "";
                  this.match = "";
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                  tempMatch = this._input.match(this.rules[rules[i]]);
                  if (
                    tempMatch &&
                    (!match || tempMatch[0].length > match[0].length)
                  ) {
                    match = tempMatch;
                    index = i;
                    if (!this.options.flex) break;
                  }
                }
                if (match) {
                  lines = match[0].match(/(?:\r\n?|\n).*/g);
                  if (lines) this.yylineno += lines.length;
                  this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines
                      ? lines[lines.length - 1].length -
                        lines[lines.length - 1].match(/\r?\n?/)[0].length
                      : this.yylloc.last_column + match[0].length,
                  };
                  this.yytext += match[0];
                  this.match += match[0];
                  this.matches = match;
                  this.yyleng = this.yytext.length;
                  if (this.options.ranges)
                    this.yylloc.range = [
                      this.offset,
                      (this.offset += this.yyleng),
                    ];
                  this._more = false;
                  this._input = this._input.slice(match[0].length);
                  this.matched += match[0];
                  token = this.performAction.call(
                    this,
                    this.yy,
                    this,
                    rules[index],
                    this.conditionStack[this.conditionStack.length - 1]
                  );
                  if (this.done && this._input) this.done = false;
                  if (token) {
                    return token;
                  } else return;
                }
                if (this._input === "") {
                  return this.EOF;
                } else
                  return this.parseError(
                    "Lexical error on line " +
                      (this.yylineno + 1) +
                      ". Unrecognized text.\n" +
                      this.showPosition(),
                    {
                      text: "",
                      token: null,
                      line: this.yylineno,
                    }
                  );
              },
              lex: function lex() {
                var r = this.next();
                if (typeof r !== "undefined") {
                  return r;
                } else return this.lex();
              },
              begin: function begin(condition) {
                this.conditionStack.push(condition);
              },
              popState: function popState() {
                return this.conditionStack.pop();
              },
              _currentRules: function _currentRules() {
                return this.conditions[
                  this.conditionStack[this.conditionStack.length - 1]
                ].rules;
              },
              topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function begin(condition) {
                this.begin(condition);
              },
            };
            lexer.options = {};
            lexer.performAction = function anonymous(
              yy,
              yy_,
              $avoiding_name_collisions,
              YY_START
            ) {
              function strip(start, end) {
                return (yy_.yytext = yy_.yytext.substr(
                  start,
                  yy_.yyleng - end
                ));
              }
              var YYSTATE = YY_START;
              switch ($avoiding_name_collisions) {
                case 0:
                  if (yy_.yytext.slice(-2) === "\\\\") {
                    strip(0, 1);
                    this.begin("mu");
                  } else if (yy_.yytext.slice(-1) === "\\") {
                    strip(0, 1);
                    this.begin("emu");
                  } else this.begin("mu");
                  if (yy_.yytext) return 14;
                  break;
                case 1:
                  return 14;
                  break;
                case 2:
                  this.popState();
                  return 14;
                  break;
                case 3:
                  yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                  this.popState();
                  return 16;
                  break;
                case 4:
                  return 14;
                  break;
                case 5:
                  this.popState();
                  return 13;
                  break;
                case 6:
                  return 59;
                  break;
                case 7:
                  return 62;
                  break;
                case 8:
                  return 17;
                  break;
                case 9:
                  this.popState();
                  this.begin("raw");
                  return 21;
                  break;
                case 10:
                  return 53;
                  break;
                case 11:
                  return 27;
                  break;
                case 12:
                  return 45;
                  break;
                case 13:
                  this.popState();
                  return 42;
                  break;
                case 14:
                  this.popState();
                  return 42;
                  break;
                case 15:
                  return 32;
                  break;
                case 16:
                  return 37;
                  break;
                case 17:
                  return 49;
                  break;
                case 18:
                  return 46;
                  break;
                case 19:
                  this.unput(yy_.yytext);
                  this.popState();
                  this.begin("com");
                  break;
                case 20:
                  this.popState();
                  return 13;
                  break;
                case 21:
                  return 46;
                  break;
                case 22:
                  return 67;
                  break;
                case 23:
                  return 66;
                  break;
                case 24:
                  return 66;
                  break;
                case 25:
                  return 81;
                  break;
                case 26:
                  break;
                case 27:
                  this.popState();
                  return 52;
                  break;
                case 28:
                  this.popState();
                  return 31;
                  break;
                case 29:
                  yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                  return 74;
                  break;
                case 30:
                  yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                  return 74;
                  break;
                case 31:
                  return 79;
                  break;
                case 32:
                  return 76;
                  break;
                case 33:
                  return 76;
                  break;
                case 34:
                  return 77;
                  break;
                case 35:
                  return 78;
                  break;
                case 36:
                  return 75;
                  break;
                case 37:
                  return 69;
                  break;
                case 38:
                  return 71;
                  break;
                case 39:
                  return 66;
                  break;
                case 40:
                  return 66;
                  break;
                case 41:
                  return "INVALID";
                  break;
                case 42:
                  return 5;
                  break;
              }
            };
            lexer.rules = [
              /^(?:[^\x00]*?(?=(\{\{)))/,
              /^(?:[^\x00]+)/,
              /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
              /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
              /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,
              /^(?:[\s\S]*?--(~)?\}\})/,
              /^(?:\()/,
              /^(?:\))/,
              /^(?:\{\{\{\{)/,
              /^(?:\}\}\}\})/,
              /^(?:\{\{(~)?>)/,
              /^(?:\{\{(~)?#)/,
              /^(?:\{\{(~)?\/)/,
              /^(?:\{\{(~)?\^\s*(~)?\}\})/,
              /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
              /^(?:\{\{(~)?\^)/,
              /^(?:\{\{(~)?\s*else\b)/,
              /^(?:\{\{(~)?\{)/,
              /^(?:\{\{(~)?&)/,
              /^(?:\{\{(~)?!--)/,
              /^(?:\{\{(~)?![\s\S]*?\}\})/,
              /^(?:\{\{(~)?)/,
              /^(?:=)/,
              /^(?:\.\.)/,
              /^(?:\.(?=([=~}\s\/.)|])))/,
              /^(?:[\/.])/,
              /^(?:\s+)/,
              /^(?:\}(~)?\}\})/,
              /^(?:(~)?\}\})/,
              /^(?:"(\\["]|[^"])*")/,
              /^(?:'(\\[']|[^'])*')/,
              /^(?:@)/,
              /^(?:true(?=([~}\s)])))/,
              /^(?:false(?=([~}\s)])))/,
              /^(?:undefined(?=([~}\s)])))/,
              /^(?:null(?=([~}\s)])))/,
              /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
              /^(?:as\s+\|)/,
              /^(?:\|)/,
              /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
              /^(?:\[[^\]]*\])/,
              /^(?:.)/,
              /^(?:$)/,
            ];
            lexer.conditions = {
              mu: {
                rules: [
                  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                  37, 38, 39, 40, 41, 42,
                ],
                inclusive: false,
              },
              emu: {
                rules: [2],
                inclusive: false,
              },
              com: {
                rules: [5],
                inclusive: false,
              },
              raw: {
                rules: [3, 4],
                inclusive: false,
              },
              INITIAL: {
                rules: [0, 1, 42],
                inclusive: true,
              },
            };
            return lexer;
          })();
        parser.lexer = lexer;
        function Parser() {
          this.yy = {};
        }
        Parser.prototype = parser;
        parser.Parser = Parser;
        return new Parser();
      })();
      exports["default"] = handlebars;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      var _Visitor = __webpack_require__(6),
        _Visitor2 = _interopRequireDefault(_Visitor);
      function WhitespaceControl() {}
      WhitespaceControl.prototype = new _Visitor2["default"]();
      WhitespaceControl.prototype.Program = function (program) {
        var isRoot = !this.isRootSeen;
        this.isRootSeen = true;
        var body = program.body;
        for (var i = 0, l = body.length; i < l; i++) {
          var current = body[i],
            strip = this.accept(current);
          if (!strip) continue;
          var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
            _isNextWhitespace = isNextWhitespace(body, i, isRoot),
            openStandalone = strip.openStandalone && _isPrevWhitespace,
            closeStandalone = strip.closeStandalone && _isNextWhitespace,
            inlineStandalone =
              strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
          if (strip.close) omitRight(body, i, true);
          if (strip.open) omitLeft(body, i, true);
          if (inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i))
              if (current.type === "PartialStatement")
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
          }
          if (openStandalone) {
            omitRight((current.program || current.inverse).body);
            omitLeft(body, i);
          }
          if (closeStandalone) {
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
          }
        }
        return program;
      };
      WhitespaceControl.prototype.BlockStatement = function (block) {
        this.accept(block.program);
        this.accept(block.inverse);
        var program = block.program || block.inverse,
          inverse = block.program && block.inverse,
          firstInverse = inverse,
          lastInverse = inverse;
        if (inverse && inverse.chained) {
          firstInverse = inverse.body[0].program;
          while (lastInverse.chained)
            lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
        }
        var strip = {
          open: block.openStrip.open,
          close: block.closeStrip.close,
          openStandalone: isNextWhitespace(program.body),
          closeStandalone: isPrevWhitespace((firstInverse || program).body),
        };
        if (block.openStrip.close) omitRight(program.body, null, true);
        if (inverse) {
          var inverseStrip = block.inverseStrip;
          if (inverseStrip.open) omitLeft(program.body, null, true);
          if (inverseStrip.close) omitRight(firstInverse.body, null, true);
          if (block.closeStrip.open) omitLeft(lastInverse.body, null, true);
          if (
            isPrevWhitespace(program.body) &&
            isNextWhitespace(firstInverse.body)
          ) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
          }
        } else if (block.closeStrip.open) omitLeft(program.body, null, true);
        return strip;
      };
      WhitespaceControl.prototype.MustacheStatement = function (mustache) {
        return mustache.strip;
      };
      WhitespaceControl.prototype.PartialStatement =
        WhitespaceControl.prototype.CommentStatement = function (node) {
          var strip = node.strip || {};
          return {
            inlineStandalone: true,
            open: strip.open,
            close: strip.close,
          };
        };
      function isPrevWhitespace(body, i, isRoot) {
        if (i === undefined) i = body.length;
        var prev = body[i - 1],
          sibling = body[i - 2];
        if (!prev) return isRoot;
        if (prev.type === "ContentStatement")
          return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(
            prev.original
          );
      }
      function isNextWhitespace(body, i, isRoot) {
        if (i === undefined) i = -1;
        var next = body[i + 1],
          sibling = body[i + 2];
        if (!next) return isRoot;
        if (next.type === "ContentStatement")
          return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(
            next.original
          );
      }
      function omitRight(body, i, multiple) {
        var current = body[i == null ? 0 : i + 1];
        if (
          !current ||
          current.type !== "ContentStatement" ||
          (!multiple && current.rightStripped)
        )
          return;
        var original = current.value;
        current.value = current.value.replace(
          multiple ? /^\s+/ : /^[ \t]*\r?\n?/,
          ""
        );
        current.rightStripped = current.value !== original;
      }
      function omitLeft(body, i, multiple) {
        var current = body[i == null ? body.length - 1 : i - 1];
        if (
          !current ||
          current.type !== "ContentStatement" ||
          (!multiple && current.leftStripped)
        )
          return;
        var original = current.value;
        current.value = current.value.replace(
          multiple ? /\s+$/ : /[ \t]+$/,
          ""
        );
        current.leftStripped = current.value !== original;
        return current.leftStripped;
      }
      exports["default"] = WhitespaceControl;
      module.exports = exports["default"];
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _interopRequireDefault = __webpack_require__(8)["default"];
      exports.__esModule = true;
      exports.SourceLocation = SourceLocation;
      exports.id = id;
      exports.stripFlags = stripFlags;
      exports.stripComment = stripComment;
      exports.preparePath = preparePath;
      exports.prepareMustache = prepareMustache;
      exports.prepareRawBlock = prepareRawBlock;
      exports.prepareBlock = prepareBlock;
      var _Exception = __webpack_require__(12),
        _Exception2 = _interopRequireDefault(_Exception);
      function SourceLocation(source, locInfo) {
        this.source = source;
        this.start = {
          line: locInfo.first_line,
          column: locInfo.first_column,
        };
        this.end = {
          line: locInfo.last_line,
          column: locInfo.last_column,
        };
      }
      function id(token) {
        if (/^\[.*\]$/.test(token)) {
          return token.substr(1, token.length - 2);
        } else return token;
      }
      function stripFlags(open, close) {
        return {
          open: open.charAt(2) === "~",
          close: close.charAt(close.length - 3) === "~",
        };
      }
      function stripComment(comment) {
        return comment.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
      }
      function preparePath(data, parts, locInfo) {
        locInfo = this.locInfo(locInfo);
        var original = data ? "@" : "",
          dig = [],
          depth = 0,
          depthString = "";
        for (var i = 0, l = parts.length; i < l; i++) {
          var part = parts[i].part,
            isLiteral = parts[i].original !== part;
          original += (parts[i].separator || "") + part;
          if (
            !isLiteral &&
            (part === ".." || part === "." || part === "this")
          ) {
            if (dig.length > 0) {
              throw new _Exception2["default"]("Invalid path: " + original, {
                loc: locInfo,
              });
            } else if (part === "..") {
              depth++;
              depthString += "../";
            }
          } else dig.push(part);
        }
        return new this.PathExpression(data, depth, dig, original, locInfo);
      }
      function prepareMustache(path, params, hash, open, strip, locInfo) {
        var escapeFlag = open.charAt(3) || open.charAt(2),
          escaped = escapeFlag !== "{" && escapeFlag !== "&";
        return new this.MustacheStatement(
          path,
          params,
          hash,
          escaped,
          strip,
          this.locInfo(locInfo)
        );
      }
      function prepareRawBlock(openRawBlock, content, close, locInfo) {
        if (openRawBlock.path.original !== close) {
          var errorNode = {
            loc: openRawBlock.path.loc,
          };
          throw new _Exception2["default"](
            openRawBlock.path.original + " doesn't match " + close,
            errorNode
          );
        }
        locInfo = this.locInfo(locInfo);
        var program = new this.Program([content], null, {}, locInfo);
        return new this.BlockStatement(
          openRawBlock.path,
          openRawBlock.params,
          openRawBlock.hash,
          program,
          undefined,
          {},
          {},
          {},
          locInfo
        );
      }
      function prepareBlock(
        openBlock,
        program,
        inverseAndProgram,
        close,
        inverted,
        locInfo
      ) {
        if (
          close &&
          close.path &&
          openBlock.path.original !== close.path.original
        ) {
          var errorNode = {
            loc: openBlock.path.loc,
          };
          throw new _Exception2["default"](
            openBlock.path.original + " doesn't match " + close.path.original,
            errorNode
          );
        }
        program.blockParams = openBlock.blockParams;
        var inverse = undefined,
          inverseStrip = undefined;
        if (inverseAndProgram) {
          if (inverseAndProgram.chain)
            inverseAndProgram.program.body[0].closeStrip = close.strip;
          inverseStrip = inverseAndProgram.strip;
          inverse = inverseAndProgram.program;
        }
        if (inverted) {
          inverted = inverse;
          inverse = program;
          program = inverted;
        }
        return new this.BlockStatement(
          openBlock.path,
          openBlock.params,
          openBlock.hash,
          program,
          inverse,
          openBlock.strip,
          inverseStrip,
          close && close.strip,
          this.locInfo(locInfo)
        );
      }
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      var _isArray = __webpack_require__(13),
        SourceNode = undefined;
      try {
        if (false) {
          var SourceMap = require("source-map");
          SourceNode = SourceMap.SourceNode;
        }
      } catch (err) {}
      if (!SourceNode) {
        SourceNode = function (line, column, srcFile, chunks) {
          this.src = "";
          if (chunks) this.add(chunks);
        };
        SourceNode.prototype = {
          add: function add(chunks) {
            if (_isArray.isArray(chunks)) chunks = chunks.join("");
            this.src += chunks;
          },
          prepend: function prepend(chunks) {
            if (_isArray.isArray(chunks)) chunks = chunks.join("");
            this.src = chunks + this.src;
          },
          toStringWithSourceMap: function toStringWithSourceMap() {
            return {
              code: this.toString(),
            };
          },
          toString: function toString() {
            return this.src;
          },
        };
      }
      function castChunk(chunk, codeGen, loc) {
        if (_isArray.isArray(chunk)) {
          var ret = [];
          for (var i = 0, len = chunk.length; i < len; i++)
            ret.push(codeGen.wrap(chunk[i], loc));
          return ret;
        } else if (typeof chunk === "boolean" || typeof chunk === "number")
          return chunk + "";
        return chunk;
      }
      function CodeGen(srcFile) {
        this.srcFile = srcFile;
        this.source = [];
      }
      CodeGen.prototype = {
        prepend: function prepend(source, loc) {
          this.source.unshift(this.wrap(source, loc));
        },
        push: function push(source, loc) {
          this.source.push(this.wrap(source, loc));
        },
        merge: function merge() {
          var source = this.empty();
          this.each(function (line) {
            source.add(["  ", line, "\n"]);
          });
          return source;
        },
        each: function each(iter) {
          for (var i = 0, len = this.source.length; i < len; i++)
            iter(this.source[i]);
        },
        empty: function empty() {
          var loc =
            arguments[0] === undefined
              ? this.currentLocation || {
                  start: {},
                }
              : arguments[0];
          return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
        },
        wrap: function wrap(chunk) {
          var loc =
            arguments[1] === undefined
              ? this.currentLocation || {
                  start: {},
                }
              : arguments[1];
          if (chunk instanceof SourceNode) return chunk;
          chunk = castChunk(chunk, this, loc);
          return new SourceNode(
            loc.start.line,
            loc.start.column,
            this.srcFile,
            chunk
          );
        },
        functionCall: function functionCall(fn, type, params) {
          params = this.generateList(params);
          return this.wrap([fn, type ? "." + type + "(" : "(", params, ")"]);
        },
        quotedString: function quotedString(str) {
          return (
            '"' +
            (str + "")
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/\u2028/g, "\\u2028")
              .replace(/\u2029/g, "\\u2029") +
            '"'
          );
        },
        objectLiteral: function objectLiteral(obj) {
          var pairs = [];
          for (var key in obj)
            if (obj.hasOwnProperty(key)) {
              var value = castChunk(obj[key], this);
              if (value !== "undefined")
                pairs.push([this.quotedString(key), ":", value]);
            }
          var ret = this.generateList(pairs);
          ret.prepend("{");
          ret.add("}");
          return ret;
        },
        generateList: function generateList(entries, loc) {
          var ret = this.empty(loc);
          for (var i = 0, len = entries.length; i < len; i++) {
            if (i) ret.add(",");
            ret.add(castChunk(entries[i], this, loc));
          }
          return ret;
        },
        generateArray: function generateArray(entries, loc) {
          var ret = this.generateList(entries, loc);
          ret.prepend("[");
          ret.add("]");
          return ret;
        },
      };
      exports["default"] = CodeGen;
      module.exports = exports["default"];
    },
  ]);
});
(function (root, undefined) {
  var lib = {};
  lib.version = "0.4.1";
  lib.settings = {
    currency: {
      symbol: "$",
      format: "%s%v",
      decimal: ".",
      thousand: ",",
      precision: 2,
      grouping: 3,
    },
    number: {
      precision: 0,
      grouping: 3,
      thousand: ",",
      decimal: ".",
    },
  };
  var nativeMap = Array.prototype.map,
    nativeIsArray = Array.isArray,
    toString = Object.prototype.toString;
  function isString(obj) {
    return !!(obj === "" || (obj && obj.charCodeAt && obj.substr));
  }
  function isArray(obj) {
    return nativeIsArray
      ? nativeIsArray(obj)
      : toString.call(obj) === "[object Array]";
  }
  function isObject(obj) {
    return obj && toString.call(obj) === "[object Object]";
  }
  function defaults(object, defs) {
    var key;
    object = object || {};
    defs = defs || {};
    for (key in defs)
      if (defs.hasOwnProperty(key))
        if (object[key] == null) object[key] = defs[key];
    return object;
  }
  function map(obj, iterator, context) {
    var results = [],
      i,
      j;
    if (!obj) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    for (i = 0, j = obj.length; i < j; i++)
      results[i] = iterator.call(context, obj[i], i, obj);
    return results;
  }
  function checkPrecision(val, base) {
    val = Math.round(Math.abs(val));
    return isNaN(val) ? base : val;
  }
  function checkCurrencyFormat(format) {
    var defaults = lib.settings.currency.format;
    if (typeof format === "function") format = format();
    if (isString(format) && format.match("%v")) {
      return {
        pos: format,
        neg: format.replace("-", "").replace("%v", "-%v"),
        zero: format,
      };
    } else if (!format || !format.pos || !format.pos.match("%v"))
      return !isString(defaults)
        ? defaults
        : (lib.settings.currency.format = {
            pos: defaults,
            neg: defaults.replace("%v", "-%v"),
            zero: defaults,
          });
    return format;
  }
  var unformat =
      (lib.unformat =
      lib.parse =
        function (value, decimal) {
          if (isArray(value))
            return map(value, function (val) {
              return unformat(val, decimal);
            });
          value = value || 0;
          if (typeof value === "number") return value;
          decimal = decimal || lib.settings.number.decimal;
          var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
            unformatted = parseFloat(
              ("" + value)
                .replace(/\((.*)\)/, "-$1")
                .replace(regex, "")
                .replace(decimal, ".")
            );
          return !isNaN(unformatted) ? unformatted : 0;
        }),
    toFixed = (lib.toFixed = function (value, precision) {
      precision = checkPrecision(precision, lib.settings.number.precision);
      var power = Math.pow(10, precision);
      return (Math.round(lib.unformat(value) * power) / power).toFixed(
        precision
      );
    }),
    formatNumber =
      (lib.formatNumber =
      lib.format =
        function (number, precision, thousand, decimal) {
          if (isArray(number))
            return map(number, function (val) {
              return formatNumber(val, precision, thousand, decimal);
            });
          number = unformat(number);
          var opts = defaults(
              isObject(precision)
                ? precision
                : {
                    precision: precision,
                    thousand: thousand,
                    decimal: decimal,
                  },
              lib.settings.number
            ),
            usePrecision = checkPrecision(opts.precision),
            negative = number < 0 ? "-" : "",
            base =
              parseInt(toFixed(Math.abs(number || 0), usePrecision), 10) + "",
            mod = base.length > 3 ? base.length % 3 : 0;
          return (
            negative +
            (mod ? base.substr(0, mod) + opts.thousand : "") +
            base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + opts.thousand) +
            (usePrecision
              ? opts.decimal +
                toFixed(Math.abs(number), usePrecision).split(".")[1]
              : "")
          );
        }),
    formatMoney = (lib.formatMoney = function (
      number,
      symbol,
      precision,
      thousand,
      decimal,
      format
    ) {
      if (isArray(number))
        return map(number, function (val) {
          return formatMoney(val, symbol, precision, thousand, decimal, format);
        });
      number = unformat(number);
      var opts = defaults(
          isObject(symbol)
            ? symbol
            : {
                symbol: symbol,
                precision: precision,
                thousand: thousand,
                decimal: decimal,
                format: format,
              },
          lib.settings.currency
        ),
        formats = checkCurrencyFormat(opts.format),
        useFormat =
          number > 0 ? formats.pos : number < 0 ? formats.neg : formats.zero;
      return useFormat
        .replace("%s", opts.symbol)
        .replace(
          "%v",
          formatNumber(
            Math.abs(number),
            checkPrecision(opts.precision),
            opts.thousand,
            opts.decimal
          )
        );
    });
  lib.formatColumn = function (
    list,
    symbol,
    precision,
    thousand,
    decimal,
    format
  ) {
    if (!list) return [];
    var opts = defaults(
        isObject(symbol)
          ? symbol
          : {
              symbol: symbol,
              precision: precision,
              thousand: thousand,
              decimal: decimal,
              format: format,
            },
        lib.settings.currency
      ),
      formats = checkCurrencyFormat(opts.format),
      padAfterSymbol =
        formats.pos.indexOf("%s") < formats.pos.indexOf("%v") ? true : false,
      maxLength = 0,
      formatted = map(list, function (val, i) {
        if (isArray(val)) {
          return lib.formatColumn(val, opts);
        } else {
          val = unformat(val);
          var useFormat =
              val > 0 ? formats.pos : val < 0 ? formats.neg : formats.zero,
            fVal = useFormat
              .replace("%s", opts.symbol)
              .replace(
                "%v",
                formatNumber(
                  Math.abs(val),
                  checkPrecision(opts.precision),
                  opts.thousand,
                  opts.decimal
                )
              );
          if (fVal.length > maxLength) maxLength = fVal.length;
          return fVal;
        }
      });
    return map(formatted, function (val, i) {
      if (isString(val) && val.length < maxLength)
        return padAfterSymbol
          ? val.replace(
              opts.symbol,
              opts.symbol + new Array(maxLength - val.length + 1).join(" ")
            )
          : new Array(maxLength - val.length + 1).join(" ") + val;
      return val;
    });
  };
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports)
      exports = module.exports = lib;
    exports.accounting = lib;
  } else if (typeof define === "function" && define.amd) {
    define([], function () {
      return lib;
    });
  } else {
    lib.noConflict = (function (oldAccounting) {
      return function () {
        root.accounting = oldAccounting;
        lib.noConflict = undefined;
        return lib;
      };
    })(root.accounting);
    root.accounting = lib;
  }
})(this);
(function ($, window, document, undefined) {
  "use strict";
  var currHour = new Date().getHours();
  Handlebars.registerHelper("ifCond", function (v1, v2, options) {
    if (v1 === v2) return options.fn(this);
    return options.inverse(this);
  });
  Handlebars.registerHelper("compare", function (lvalue, rvalue, options) {
    if (arguments.length < 3)
      throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    var operator = options.hash.operator || "==",
      operators = {
        "==": function (l, r) {
          return l == r;
        },
        "===": function (l, r) {
          return l === r;
        },
        "!=": function (l, r) {
          return l != r;
        },
        "<": function (l, r) {
          return l < r;
        },
        ">": function (l, r) {
          return l > r;
        },
        "<=": function (l, r) {
          return l <= r;
        },
        ">=": function (l, r) {
          return l >= r;
        },
        typeof: function (l, r) {
          return typeof l == r;
        },
      };
    if (!operators[operator])
      throw new Error(
        "Handlerbars Helper 'compare' doesn't know the operator " + operator
      );
    var result = operators[operator](lvalue, rvalue);
    if (result) {
      return options.fn(this);
    } else return options.inverse(this);
  });
  Handlebars.registerHelper("truncate", function (str, len) {
    return $.truncate(str, {
      length: len,
    });
  });
  Handlebars.registerHelper("debug", function (optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }
  });
  Handlebars.registerHelper("date", function (date, format) {
    if (window.moment) {
      var f = format || "DD.MM.YYYY";
      return moment(date, "YYYY-MM-DD").format(f);
    }
    return date;
  });
  Handlebars.registerHelper("bnI18n", function (constant) {
    return BN.lang.i18n(constant);
  });
  Handlebars.registerHelper("siteConstants", function (constant) {
    return $("body").attr(constant);
  });
  Handlebars.registerHelper("money", function (price, options) {
    var price = accounting.formatMoney(price, {
      symbol: "€",
      format: "%v&nbsp;Euro",
      decimal: ",",
      thousand: ".",
      precision: 2,
    });
    return price;
  });
  Handlebars.registerHelper("money_number", function (price, options) {
    var price = accounting.formatMoney(price, {
      symbol: "€",
      format: "%v",
      decimal: ",",
      thousand: ".",
      precision: 2,
    });
    return price;
  });
  Handlebars.registerHelper("money2", function (price, options) {
    var price = accounting.formatMoney(price, {
      symbol: "",
      format: "%v&nbsp;%s",
      decimal: ",",
      thousand: ".",
      precision: 2,
    });
    return price;
  });
  Handlebars.registerHelper("handleUrl", function (url) {
    return url
      .toLowerCase()
      .replace("ä", "ae")
      .replace("ü", "ue")
      .replace("ö", "oe")
      .replace("ß", "ss")
      .replace("&amp;", "-")
      .replace(/\s/g, "-")
      .replace(" ", "-")
      .replace("é", "e")
      .replace("è", "e")
      .replace(/[^a-zA-Z0-9-_]/g, "");
  });
  Handlebars.registerHelper("striptags", function (txt) {
    if (typeof txt === "undefined")
      throw new Error("parameter (string) is undefined");
    return txt.replace(/<[^>]*>/g, "");
  });
  Handlebars.registerHelper("strip-div-tags", function (txt) {
    if (typeof txt === "undefined")
      throw new Error("parameter (string) is undefined");
    return txt.replace(/(<div>|<\/div>)/g, "");
  });
  var ehotelID = $("body").attr("data-ehid"),
    BN = (window.BN = window.BN || {});
  BN.vars = BN.vars || {};
  BN.vars.hotelId = 1;
  BN.vars.offerId = $("body").attr("data-offer");
  BN.vars.newsId = $("body").attr("data-news");
  BN.vars.requestId = $("body").attr("data-request");
  BN.functions = BN.functions || {};
  var current_hour = new Date().getHours();
  BN.functions.Notify = {
    container: null,
    title: null,
    message: null,
    close: null,
    page: $("body"),
    isClosedByUser: false,
    showTime: 3e3,
    showTimer: null,
    isInit: false,
    showTimeout: function () {
      return setTimeout(function () {
        BN.functions.Notify.events.hide();
      }, BN.functions.Notify.showTime);
    },
    init: function () {
      if (!BN.functions.Notify.isInit) {
        BN.functions.Notify.page.append(
          '<div class=notification><h5></h5><p></p> <a class="close" href="#">&times;</a></div>'
        );
        BN.functions.Notify.container = $(".notification");
        BN.functions.Notify.title = BN.functions.Notify.container.find("h5");
        BN.functions.Notify.message = BN.functions.Notify.container.find("p");
        BN.functions.Notify.close =
          BN.functions.Notify.container.find(".close");
        BN.functions.Notify.container
          .mouseenter(BN.functions.Notify.events.hoverStart)
          .mouseleave(BN.functions.Notify.events.hoverFinish);
        BN.functions.Notify.close.on("click", BN.functions.Notify.events.hide);
        BN.functions.Notify.isInit = true;
      }
    },
    events: {
      show: function (success, title, message) {
        if (BN.functions.Notify.showTimer != null)
          clearTimeout(BN.functions.Notify.showTimer);
        BN.functions.Notify.isClosedByUser = true;
        BN.functions.Notify.title.html(title);
        BN.functions.Notify.message.html(message);
        if (success) {
          BN.functions.Notify.container
            .removeClass("error")
            .addClass("success");
        } else
          BN.functions.Notify.container
            .removeClass("success")
            .addClass("error");
        BN.functions.Notify.container.addClass("is-visible");
      },
      hide: function (e) {
        if (typeof e != "undefined") {
          e.preventDefault();
          BN.functions.Notify.isClosedByUser = true;
        } else BN.functions.Notify.isClosedByUser = false;
        BN.functions.Notify.container.removeClass("is-visible");
        clearTimeout(BN.functions.Notify.showTimer);
      },
      hoverStart: function () {
        clearTimeout(BN.functions.Notify.showTimer);
      },
      hoverFinish: function () {
        if (!BN.functions.Notify.isClosedByUser)
          BN.functions.Notify.showTimer = BN.functions.Notify.showTimeout();
      },
    },
  };
  BN.functions.renderTemplateWeather = function ($target, callback) {
    var data = $target.data();
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=" +
        BN.lang.currLang +
        "/weatherdata?fields=today,tomorrow,mountaintoday,mountaintomorrow,evolutiontitle,evolution,dayforecast0,dayforecast1,dayforecast2,dayforecast3&hour=" +
        new Date().getHours(),
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
    })
      .done(function (responseData) {
        var data = responseData.data[0];
        callback(data, $target);
      })
      .fail(function () {
        if (window.console && window.console.error)
          console.error("Failed to retrieve weather data.");
      });
  };
  var $rocordsDetail_weather = $("#weather-data-detail");
  if ($rocordsDetail_weather.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/weather.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $rocordsDetail_weather.find(".loading").addClass("hidden");
      $rocordsDetail_weather.each(function () {
        BN.functions.renderTemplateWeather($(this), function (data, $record) {
          if (data) {
            $record.html(template(data));
          } else $("#weather-data-detail").append("<p>" + BN.lang.i18n("no_weather") + "</p>");
        });
      });
    });
  BN.functions.renderTemplateWeatherSmall = function ($target, callback) {
    var data = $target.data();
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=" +
        BN.lang.currLang +
        "/weatherdata?fields=today,tomorrow,mountaintoday,mountaintomorrow,evolutiontitle,evolution,dayforecast0,dayforecast1,dayforecast2,dayforecast3&hour=" +
        new Date().getHours(),
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
    })
      .done(function (responseData) {
        var data = responseData.data[0],
          templateContext;
        if (data) {
          templateContext = {
            dayforecasts: [
              data.dayforecast0,
              data.dayforecast1,
              data.dayforecast2,
            ],
          };
        } else
          templateContext = {
            no_weather: BN.lang.i18n("no_weather"),
          };
        callback(templateContext, $target);
      })
      .fail(function () {
        if (window.console && window.console.error)
          console.error("Failed to retrieve weather data.");
      });
  };
  var $recordsFooter_weather = $(".weatherfooter");
  if ($recordsFooter_weather.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/footer_weather.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $recordsFooter_weather.find(".loading").addClass("hidden");
      $recordsFooter_weather.each(function () {
        BN.functions.renderTemplateWeatherSmall(
          $(this),
          function (data, $record) {
            if (data) $record.html(template(data));
          }
        );
      });
    });
  BN.functions.renderTemplateServices = function ($target, callback) {
    var data = $target.data();
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/additional/" +
        BN.lang.currLang,
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
      data: {
        portal_id: 0,
        hotel_ids: ehotelID || BN.vars.hotelId,
        fields: JSON.stringify({
          "*": null,
          additionalcategories: {
            "*": null,
          },
          additionalperiods: {
            "*": null,
          },
          galleryimages: {
            "*": null,
          },
        }),
        additionalcategories: data.category,
      },
    }).done(function (data) {
      if (data && data.records && data.records.length) {
        var additionalcategories = {};
        data.records.forEach(function (additional) {
          additional.additionalcategories.forEach(function (
            additionalcategory
          ) {
            var key = additionalcategory.id;
            if (!additionalcategories[key])
              additionalcategories[key] = {
                title: additionalcategory.title,
                additionalArray: [],
              };
            additionalcategories[key].additionalArray.push(additional);
          });
        });
        data.additionalcategories = additionalcategories;
      }
      callback(data, $target);
    });
  };
  var $recordsServices = $(".service-container");
  if ($recordsServices.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/services.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $recordsServices.each(function (index) {
        BN.functions.renderTemplateServices($(this), function (data, $record) {
          if (data && data.records) {
            var records = data.records[0];
            $record.html(template(data));
            $(this).find(".loading").addClass("hidden");
            var $togglebox = $record,
              $togglemain = $togglebox.find(".togglemain");
            if ($togglebox.length) {
              $togglemain.click(function () {
                var $this = $togglebox;
                $this.find(".toggleinner").stop().slideToggle("slow");
                if ($this.find(".icon").hasClass("icon-schliessen") === true) {
                  $this.find(".icon").removeClass("icon-schliessen");
                  $this.find(".icon").addClass("icon-more");
                } else {
                  $this.find(".icon").addClass("icon-schliessen");
                  $this.find(".icon").removeClass("icon-more");
                }
                setTimeout(function () {
                  $.stellar("refresh");
                }, 500);
              });
              if (index === 0) $togglemain.trigger("click");
            }
            Mfpopup(".mfp-service");
          }
        });
      });
    });
  BN.functions.renderTemplateOfferSlider = function ($target, callback) {
    var data = $target.find(".offerSlider").data();
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/offer/" +
        BN.lang.currLang,
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
      data: {
        portal_id: 0,
        hotel_ids: ehotelID || BN.vars.hotelId,
        fields: JSON.stringify({
          "*": null,
          offercategories: {
            "*": null,
          },
          offerhotels: {
            "*": null,
            roomprices: {
              "*": null,
              roomtype: {
                "*": null,
              },
              roompriceguests: {
                "*": null,
              },
              board: {
                "*": null,
              },
            },
          },
          seasondatas: {
            "*": null,
          },
        }),
        timestamp: currHour,
        sort: data.sort + ":ASC",
        offercategories: data.category,
      },
    }).done(function (data) {
      callback(data, $target);
    });
  };
  var $recordsOfferSlider = $(".offer-slider"),
    $recordsOfferSlider_trio = $(".offer-slider-trio");
  if ($recordsOfferSlider.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/offerSlider.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $recordsOfferSlider.each(function (i, slider) {
        BN.functions.renderTemplateOfferSlider(
          $(this),
          function (data, $record) {
            if (data && data.records) {
              var records = data.records[0];
              globalFuncs.minprice_offer(data);
              $record
                .find(".offer-slider-inner .offerSlider")
                .append(template(data));
              $(".offerSlider .loading").addClass("hidden");
              Mfpopup(".mfp-offer");
              Slickslider($(slider).find(".offer-slide"));
            }
          }
        );
      });
    });
  if ($recordsOfferSlider_trio.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/offerSlider3elements.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $recordsOfferSlider_trio.each(function (i, slider) {
        BN.functions.renderTemplateOfferSlider(
          $(this),
          function (data, $record) {
            if (data && data.records) {
              var records = data.records[0];
              globalFuncs.minprice_offer(data);
              $record
                .find(".offer-slider-inner .offerSlider")
                .append(template(data));
              $(".offerSlider .loading").addClass("hidden");
              Mfpopup(".mfp-offer");
              SlicksliderTopOffers($(slider).find(".offer-slide"));
              var setMaxHeight = function (slider) {
                if ($(window).width() >= 900) {
                  var maxH = 0;
                  $(slider).find(".item").css("height", "auto");
                  $(slider)
                    .find(".item")
                    .each(function (i, el) {
                      var $el = $(el);
                      if ($el.height() > maxH) maxH = $el.height();
                    });
                  $(slider).find(".item").height(maxH);
                }
              };
              $(window).resize(function () {
                setMaxHeight(slider);
              });
              setMaxHeight(slider);
            }
          }
        );
      });
    });
  BN.functions.renderTemplateOfferlist = function ($target, callback) {
    var data = $target.data();
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/offer/" +
        BN.lang.currLang,
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
      data: {
        portal_id: 0,
        hotel_ids: ehotelID || BN.vars.hotelId,
        fields: JSON.stringify({
          "*": null,
          offercategories: {
            "*": null,
          },
          offerhotels: {
            "*": null,
            roomprices: {
              "*": null,
              roomtype: {
                "*": null,
              },
              roompriceguests: {
                "*": null,
              },
              board: {
                "*": null,
              },
            },
          },
          seasondatas: {
            "*": null,
          },
        }),
        timestamp: currHour,
        sort: data.sort + ":ASC",
        offercategories: data.category,
      },
    }).done(function (data) {
      callback(data, $target);
    });
  };
  var $recordsOfferList = $(".offerList");
  if ($recordsOfferList.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/offerList.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $recordsOfferList.each(function () {
        BN.functions.renderTemplateOfferlist($(this), function (data, $record) {
          if (data && data.records) {
            var records = data.records[0];
            globalFuncs.minprice_offer(data);
            $record.html(template(data));
            Mfpopup(".mfp-offerlist");
          }
        });
      });
    });
  BN.functions.renderTemplateOfferDetail = function ($target, callback) {
    var data = $target.data(),
      sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("offer_id="),
      offer_ids = sURLVariables[1].split("&")[0];
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/offer/" +
        BN.lang.currLang,
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
      data: {
        portal_id: 0,
        hotel_ids: ehotelID || BN.vars.hotelId,
        fields: JSON.stringify({
          "*": null,
          offerhotels: {
            "*": null,
            roomprices: {
              "*": null,
              roomtype: {
                "*": null,
              },
              roompriceguests: {
                "*": null,
              },
              board: {
                "*": null,
              },
              seasondatas: {
                "*": null,
              },
            },
          },
          seasondatas: {
            "*": null,
          },
        }),
        offer_ids: offer_ids,
        timestamp: currHour,
      },
    }).done(function (data) {
      callback(data, $target);
    });
  };
  var $recordsOfferDetail = $(".offerDetail-container");
  if ($recordsOfferDetail.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/offerDetail.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $recordsOfferDetail.each(function () {
        BN.functions.renderTemplateOfferDetail(
          $(this),
          function (data, $record) {
            if (data && data.records) {
              var records = data.records[0],
                defaultpersons,
                guestcount,
                pricepp,
                minPrice;
              data.records.forEach(function (record) {
                record.offerhotels.forEach(function (offerhotel) {
                  var table = (offerhotel.table = {
                      pricepp: [],
                    }),
                    min_price = 99999,
                    nightsArr = [];
                  if (record.minamount !== null) {
                    min_price = record.minamount;
                  } else
                    offerhotel.roomprices.forEach(function (roomprice) {
                      console.log("coll");
                      roomprice.roomtype.forEach(function (roomtype) {
                        defaultpersons = roomtype.defaultpersons;
                        roomprice.roompriceguests.forEach(function (
                          roompriceguest
                        ) {
                          guestcount = roompriceguest.guestcount;
                          if (guestcount === defaultpersons) {
                            minPrice = roompriceguest.amount / defaultpersons;
                            offerhotel.table.pricepp.push(minPrice);
                            if (minPrice < min_price) min_price = minPrice;
                          }
                        });
                        roomtype.minprice = minPrice;
                        var index = jQuery.inArray(roomprice.nights, nightsArr);
                        if (index === -1) nightsArr.push(roomprice.nights);
                      });
                    });
                  offerhotel.allNights = nightsArr;
                  offerhotel.lowestprice = min_price;
                });
              });
              data.records[0].offerhotels[0].roomprices.sort(function (
                elem1,
                elem2
              ) {
                var a = new Date(elem1.seasondatas[0].fromdate),
                  b = new Date(elem2.seasondatas[0].fromdate);
                return a.getTime() - b.getTime();
              });
              $record.html(template(records));
              var altHeader = $(".alternative_headerslider").html(),
                $headerslider = $("#header-slider");
              if ($(".alternative_headerslider").length) {
                $headerslider.html(altHeader);
                $headerslider.addClass("show");
                Slickslider("#header-slider");
              }
            }
          }
        );
      });
    });
  BN.functions.renderTemplateRooms = function ($target, callback) {
    var data = $target.data();
    $.ajax({
      url:
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/hoteldata/" +
        BN.lang.currLang,
      dataType: "json",
      cache: true,
      async: true,
      method: "get",
      data: {
        portal_id: 0,
        hotel_ids: ehotelID || BN.vars.hotelId,
        fields: JSON.stringify({
          roomtypes: {
            "*": null,
            galleryimages: {
              "*": null,
            },
            roomprices: {
              roompriceguests: {
                "*": null,
              },
              "*": null,
              minstay: null,
              maxstay: null,
              board: {
                "*": null,
              },
              seasondatas: {
                season: {
                  "*": null,
                },
                fromdate: null,
                todate: null,
              },
            },
          },
        }),
        timestamp: currHour,
      },
    }).done(function (data) {
      var records = data.records[0];
      callback(data, $target);
    });
  };
  var $records = $(".room-container");
  if ($records.length)
    $.ajax({
      url: "/fileadmin/web/extensions/content_designer/template/handlebars/rooms.tpl",
      dataType: "html",
    }).done(function (raw) {
      var template = Handlebars.compile(raw);
      $.ajax({
        url: "fileadmin/web/js/vendor/lodash.js",
        dataType: "script",
        async: true,
        cache: true,
      }).done(function () {
        $records.each(function () {
          BN.functions.renderTemplateRooms($(this), function (data, $record) {
            if (data && data.records) {
              var records = data.records[0],
                defaultpersons,
                guestcount,
                minPrice,
                pricesCol;
              data.records.forEach(function (record) {
                record.roomtypes.forEach(function (roomtype) {
                  minPrice = 0;
                  pricesCol = [];
                  defaultpersons = roomtype.defaultpersons;
                  if (roomtype.roomprices)
                    roomtype.roomprices.forEach(function (roomprice) {
                      roomprice.roompriceguests.forEach(function (
                        roompriceguest
                      ) {
                        guestcount = roompriceguest.guestcount;
                        if (guestcount == defaultpersons)
                          pricesCol.push(
                            roompriceguest.amount / defaultpersons
                          );
                      });
                    });
                  if (pricesCol.length)
                    minPrice = Math.min.apply(Math, pricesCol);
                  roomtype.minprice = minPrice;
                });
              });
              _.each(records.roomtypes, function (room) {
                var table = (room.table = {
                  stays: [],
                  seasons: [],
                });
                _.each(room.roomprices, function (roomprice) {
                  var price = _.find(
                      roomprice.roompriceguests,
                      function (price) {
                        return price.guestcount === room.defaultpersons;
                      }
                    ),
                    personPrice = price.amount / price.guestcount,
                    stay = _.find(table.stays, function (el) {
                      return (
                        el.min === roomprice.minstay &&
                        el.max === roomprice.maxstay
                      );
                    });
                  if (!stay) {
                    stay = {
                      min: roomprice.minstay,
                      max: roomprice.maxstay,
                    };
                    if (stay.min) {
                      if (
                        (stay.min === 5 && stay.max === 6) ||
                        (stay.min === 5 && stay.max === null)
                      ) {
                        stay.key = BN.lang.i18n("from") + " 5";
                      } else if (stay.max) {
                        stay.key = stay.min + "-" + stay.max;
                      } else stay.key = BN.lang.i18n("from") + " " + stay.min;
                    } else if (stay.max) {
                      stay.key = BN.lang.i18n("to") + " " + stay.max;
                    } else stay.key = BN.lang.i18n("price");
                    var stI = _.sortedIndex(table.stays, stay, function (el) {
                      return el.min || el.max;
                    });
                    table.stays.splice(stI, 0, stay);
                  }
                  _.each(roomprice.seasondatas, function (seasondata) {
                    var season = _.find(table.seasons, function (el) {
                      return el.id === seasondata.season.id;
                    });
                    if (!season) {
                      season = {
                        id: seasondata.season.id,
                        name: seasondata.season.name,
                        fromdate: seasondata.fromdate,
                        description: seasondata.season.description,
                        periods: [],
                      };
                      var sI = _.sortedIndex(
                        table.seasons,
                        season,
                        function (el) {
                          return el.fromdate;
                        }
                      );
                      table.seasons.splice(sI, 0, season);
                    }
                    var period = _.find(season.periods, function (el) {
                      return (
                        el.min === seasondata.fromdate &&
                        el.max === seasondata.todate
                      );
                    });
                    if (!period) {
                      period = {
                        min: seasondata.fromdate,
                        max: seasondata.todate,
                      };
                      var pI = _.sortedIndex(
                        season.periods,
                        period,
                        function (el) {
                          return moment(el.min, "YYYY-MM-DD").format("X");
                        }
                      );
                      season.periods.splice(pI, 0, period);
                    }
                    if (period)
                      if (!period[stay.key] || period[stay.key] > personPrice)
                        period[stay.key] = personPrice;
                    if (!season[stay.key] || season[stay.key] > personPrice)
                      season[stay.key] = personPrice;
                  });
                });
              });
              data.lang = BN.lang.locales[BN.lang.currLang];
              $record.html(template(data));
              Slickslider(".room-slider");
              var timesRun = 0,
                interval = setInterval(function () {
                  timesRun += 1;
                  if (timesRun === 10) clearInterval(interval);
                  $(".room-slider.slick-initialized").slick("setPosition");
                }, 500),
                $toggleroom = $(".room-title");
              if ($toggleroom.length)
                $toggleroom.click(function () {
                  var $this = $(this);
                  $this.next().stop().slideToggle("slow");
                  $("html, body").animate(
                    {
                      scrollTop: $(this).offset().top - 190,
                    },
                    500
                  );
                  if (
                    $this.find(".icon").hasClass("icon-schliessen") === true
                  ) {
                    $this.find(".icon").removeClass("icon-schliessen");
                    $this.find(".icon").addClass("icon-more");
                  } else {
                    $this.find(".icon").addClass("icon-schliessen");
                    $this.find(".icon").removeClass("icon-more");
                  }
                  setTimeout(function () {
                    $.stellar("refresh");
                  }, 500);
                });
              Mfpopup(".mfp-room");
            }
          });
        });
      });
    });
  var $newsletter = $(".newsletter");
  if ($newsletter.length) {
    var data = $newsletter.data();
    BN.instances = BN.instances || {};
    $("<link />")
      .attr({
        id: data.type + "_css",
        rel: "stylesheet",
        type: "text/css",
        media: "screen",
        href: "fileadmin/web/libs/brandnamic/css/newsletter.css",
      })
      .insertBefore($("head link").first());
    jQuery
      .ajax({
        id: data.type + "_js",
        url: "https://admin.ehotelier.it/bnlocalproxy.php?path=js/newsletterform.js",
        dataType: "script",
        cache: true,
      })
      .done(function () {
        if (
          typeof brandnamic_newsletterform == "function" &&
          $("#bn_newsletter").length > 0
        )
          var bnnewsletterform = new brandnamic_newsletterform({
            hotel_id: ehotelID,
            formcontainer_id: data.id,
            url_success:
              location.protocol +
              "//" +
              location.host +
              "/index.php?id=" +
              data.success +
              "&L=" +
              BN.lang.intLang,
            privacyurl:
              location.protocol +
              "//" +
              location.host +
              "/index.php?id=" +
              data.privacy +
              "&L=" +
              BN.lang.intLang,
            doubleopturl:
              location.protocol +
              "//" +
              location.host +
              "/index.php?id=" +
              data.doubleopt +
              "&L=" +
              BN.lang.intLang,
            language: BN.lang.currLang,
            onformloaded: function (form) {
              $(".bn_newsletter .bn_loader").addClass("hidden");
            },
            onSubmit: function (form) {
              if (form.find(".brandnamic_privacy input").is(":checked")) {
                form
                  .find(".brandnamic_privacy input.notvalid")
                  .removeClass("notvalid");
              } else {
                form.find(".brandnamic_privacy input").addClass("notvalid");
                BN.functions.Notify.init();
                BN.functions.Notify.events.show(
                  true,
                  BN.lang.i18n("errorheader"),
                  BN.lang.i18n("errortext")
                );
                form.find(".brandnamic_privacy .error").remove();
              }
              if (
                $("#newsletterform #brandnamic_firstname").val() == "" ||
                $("#newsletterform #brandnamic_lastname").val() == "" ||
                $("#newsletterform #brandnamic_nameprefix").val() == "" ||
                $("#newsletterform #brandnamic_email").val() == "" ||
                $("#newsletterform #brandnamic_privacy").prop("checked") ==
                  false
              ) {
                BN.functions.Notify.init();
                BN.functions.Notify.events.show(
                  true,
                  BN.lang.i18n("errorheader"),
                  BN.lang.i18n("errortext")
                );
              }
            },
          });
      });
  }
  function newsletterConfirm() {
    var bnnewsletterconfirm = new brandnamic_newsletterconfirm({
      onerror: function (message) {},
      onsuccess: function () {},
    });
  }
  if ($("body").hasClass("uid16")) newsletterConfirm();
  function loadImprint() {
    var $container = $("body").find("#bn-imprint"),
      textplugin_id = 1,
      language = $("html").attr("lang").toLowerCase(),
      imprint_url =
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/textplugin/" +
        language +
        "/" +
        textplugin_id,
      bcLink =
        "fileadmin/web/imprint/businesscard/businesscard_" + language + ".vcf",
      bnLogoLink =
        "https://cdn.bnamic.com/brandnamic_files/logo_bn/BN_Logo_2016_RGB_pos.jpg";
    $.ajax({
      url: imprint_url,
      data: {
        portal_id: 0,
        hotel_id: ehotelID || BN.vars.hotelId,
        "custom_params[business_card]": bcLink,
        "custom_params[bn_logo]": bnLogoLink,
        "custom_params[textplugins]": "4,5",
      },
    }).done(function (data) {
      $container.html(data);
    });
  }
  if ($("#bn-imprint").length) loadImprint();
  function loadPrivacy() {
    var $container = $("body").find("#bn-privacy"),
      textplugin_id = 1,
      language = $("html").attr("lang").toLowerCase(),
      privacy_url =
        "https://admin.ehotelier.it/bnlocalproxy.php?path=services/textplugin/" +
        language +
        "/" +
        textplugin_id;
    $.ajax({
      url: privacy_url,
      data: {
        portal_id: 0,
        hotel_id: ehotelID || BN.vars.hotelId,
        "custom_params[textplugins]": "6,18,9,10,14,16,17",
      },
    }).done(function (data) {
      $container.html(data);
    });
  }
  if ($("#bn-privacy").length) loadPrivacy();
  var globalFuncs = (BN.functions = BN.functions || {});
  globalFuncs.minprice_offer = function (data) {
    var defaultpersons, guestcount, minPrice, pricesCol;
    data.records.forEach(function (record) {
      record.offerhotels.forEach(function (offerhotel) {
        minPrice = 0;
        if (offerhotel.minamount > 0) {
          minPrice = offerhotel.minamount;
        } else {
          pricesCol = [];
          offerhotel.roomprices.forEach(function (roomprice) {
            roomprice.roompriceguests.forEach(function (roompriceguest) {
              (defaultpersons = roomprice.roomtype[0].defaultpersons),
                (guestcount = roompriceguest.guestcount);
              if (guestcount == defaultpersons)
                pricesCol.push(roompriceguest.amount / defaultpersons);
            });
          });
          if (pricesCol.length) minPrice = Math.min.apply(Math, pricesCol);
        }
        offerhotel.minprice = minPrice;
      });
    });
  };
  window.Mfpopup = function (container) {
    $(container).magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      image: {
        verticalFit: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
      },
    });
  };
  window.Slickslider = function (slickcontainer) {
    $(slickcontainer).each(function () {
      var $this = $(this);
      if ($this.find(".item").length > 1)
        $this
          .on("init", function (slick) {
            $(slickcontainer).fadeIn(3e3);
          })
          .slick({
            dots: false,
            infinite: true,
            speed: 450,
            fade: false,
            lazyLoad: false,
            autoplay: false,
            adaptiveHeight: true,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  infinite: true,
                  adaptiveHeight: true,
                  dots: true,
                  customPaging: function (slick, index) {
                    return "";
                  },
                },
              },
            ],
            prevArrow:
              '<button type="button" class="nav-button-prev header-slider-prev icon-less"></button>',
            nextArrow:
              '<button type="button" class="nav-button-next header-slider-next icon-more"></button>',
          });
    });
  };
  window.SlicksliderTopOffers = function (slickcontainer) {
    slickcontainer.each(function () {
      var $this = $(this);
      if ($this.find(".item").length > 1)
        $this.slick({
          dots: false,
          infinite: true,
          speed: 300,
          fade: false,
          lazyLoad: false,
          autoplay: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                adaptiveHeight: true,
                slidesToShow: 2,
                customPaging: function (slick, index) {
                  return "";
                },
              },
            },
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                infinite: true,
                adaptiveHeight: true,
                dots: true,
                slidesToShow: 1,
                customPaging: function (slick, index) {
                  return "";
                },
              },
            },
          ],
          prevArrow:
            '<button type="button" class="nav-button-prev header-slider-prev icon-less"></button>',
          nextArrow:
            '<button type="button" class="nav-button-next header-slider-next icon-more"></button>',
        });
    });
  };
})(jQuery, window, document);
(function ($) {
  "use strict";

  // Protected email with JS
  var emailE = BN.lang.locales.base.mail;
  $(".emailjs").replaceWith(
    '<a href="mailto:' + emailE + '" title="email" >' + emailE + "</a>"
  );

  function importCSS(url) {
    $.ajax({
      url: url,
      dataType: "text",
      cache: true,
      rel: "stylesheet",
      media: "screen",
      success: function (data) {
        $('<style type="text/css">\n' + data + "</style>").appendTo("head");
      },
    });
  }
  /* Import css libs */
  importCSS("fileadmin/web/fonts/icons/weather/style.min.css");
  importCSS("fileadmin/web/libs/magnific-popup/magnific-popup.min.css");
  importCSS("fileadmin/web/css/ehotelier.css");

  /* PARALLAX EFFECT */
  window.createParallax = function () {
    $.stellar({
      horizontalScrolling: false,
      hideDistantElements: false,
      responsive: true,
    });
    $.stellar("refresh");
  };
  window.destroyParallax = function () {
    $.stellar("destroy");
    var attr = $(".stellar").attr("style");
    if (typeof attr !== typeof undefined && attr !== false) {
      $(".stellar").removeAttr("style");
    }
  };
  window.triggerParallax = function () {
    enquire.register(
      "screen and (min-width: 1000px) and (min-height: 500px) and (min-aspect-ratio: 16/9)",
      {
        match: function () {
          if ($("html").hasClass("lt-ie9")) {
          } else {
            createParallax();
          }
        },
        unmatch: function () {
          destroyParallax();
        },
      }
    );
  };
  triggerParallax();

  Mfpopup(".mfp-single");

  /* Magnific Popup Gallery Image */
  $(".mfp-gallery").each(function () {
    var $this = $(this).data("counter"),
      hotelnamen = $("body").attr("data-name");
    $("." + $this).magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-gallery",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by " + hotelnamen + "</small>";
        },
      },
    });
  });
  /* IMG GALLERY */
  var $imggallery = $(".img-gallery img");
  if ($imggallery.length > 1) {
    $(".img-gallery").slick({
      slidesToShow: 4,
      //slidesToScroll: 1,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
            dots: true,
            customPaging: function (slick, index) {
              return "";
            },
          },
        },
      ],
      prevArrow:
        '<button type="button" class="nav-button-prev ' +
        'header-slider-prev icon-less"></button>',
      nextArrow:
        '<button type="button" class="nav-button-next ' +
        'header-slider-next icon-more"></button>',
    });
  }

  // Replace headerpic
  var altHeader = $(".alternative_header").html();
  var $headerslider = $("#header-slider");
  if ($(".alternative_header").length) {
    $headerslider.html(altHeader);
    $headerslider.addClass("show");
  }
  Slickslider($headerslider);

  /* NEWSSLIDER */
  // Slickslider('#uid2 .news-slider');

  var $mainImageboxSlider = $(".main .imageboxes");

  enquire.register("only screen and (max-width: 1200px)", {
    match: function () {
      /* IMG GALLERY */
      $mainImageboxSlider.slick({
        pauseOnHover: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              arrows: false,
              infinite: true,
              dots: true,
              customPaging: function (slick, index) {
                return "";
              },
            },
          },
        ],
        prevArrow:
          '<button type="button" class="nav-button-prev ' +
          'header-slider-prev icon-less"></button>',
        nextArrow:
          '<button type="button" class="nav-button-next ' +
          'header-slider-next icon-more"></button>',
      });
    },
    unmatch: function () {
      $mainImageboxSlider.slick("unslick");
    },
  });

  /* Mobile Nav */
  var $mobilenav = $(".sticky-nav");
  var $primarynav = $(".primary-nav");

  $mobilenav.click(function () {
    $primarynav.toggleClass("active");
    $("body").toggleClass("body-nav-open");

    // switch icon on click
    if ($mobilenav.hasClass("icon-menu") === true) {
      $mobilenav.removeClass("icon-menu");
      $mobilenav.addClass("icon-schliessen");
    } else {
      $mobilenav.addClass("icon-menu");
      $mobilenav.removeClass("icon-schliessen");
    }
  });

  // What is this doing?
  //
  // $(document).click(function(event) {
  //   if(!$(event.target).closest('#primary-nav').length &&
  //      !$(event.target).is('#primary-nav')) {
  //       if($('#primary-nav').hasClass('active')) {
  //           $('#primary-nav').removeClass('active');
  //           $('body').removeClass('body-nav-open');
  //       }
  //   }
  // })

  //====================================================
  // Show quickrequest on Scroll down
  //====================================================

  var $window = $(window);
  $(window).scroll(function () {
    if (!$("body").is(".uid54")) {
      if ($window.width() > 900) {
        if ($(this).scrollTop() < 700) {
          $(".quickrequest").slideUp("slow", function () {
            $(".quickrequest").css("overflow", "visible");
          });
        } else {
          $(".quickrequest").slideDown("slow", function () {
            $(".quickrequest").css("overflow", "visible");
          });
        }
      }
    }
  });

  /* Toggle Box */
  var $togglebox = $(".togglebox");
  var $togglemain = $(".togglemain");
  if ($togglebox.length) {
    //Toggle open close details
    $togglemain.click(function () {
      var $this = $(this).parent();
      // to select '.togglebox'
      $this.find(".toggleinner").stop().slideToggle("slow");
      // $('html, body').animate({
      //     scrollTop: $(this).offset().top-180
      // }, 500);

      if ($this.find(".icon").hasClass("icon-schliessen") === true) {
        $this.find(".icon").removeClass("icon-schliessen");
        $this.find(".icon").addClass("icon-more");
      } else {
        $this.find(".icon").addClass("icon-schliessen");
        $this.find(".icon").removeClass("icon-more");
      }

      setTimeout(function () {
        $.stellar("refresh");
      }, 500);
    });
  }

  // ----------------------------------------
  // helper for getting url parameter
  $.extend({
    getUrlVars: function () {
      var vars = [],
        hash;
      var hashes = window.location.href
        .slice(window.location.href.indexOf("?") + 1)
        .split("&");
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function (name) {
      return $.getUrlVars()[name];
    },
  });

  // on the request page, with either 'offer' or 'room' get parameter
  // is setted, page should scroll to form
  if ($(".uid54").length >= 1) {
    $(document).ready(function (e) {
      if ($.getUrlVar("offer_id") != null || $.getUrlVar("room_code") != null) {
        $("html, body").animate(
          {
            scrollTop: $(".eHotelieForm").offset().top - 110,
          },
          1500
        );
      }
    });
  }
})(jQuery);

/*
 * PAGINATION
 */
var getPaginationPage = function (url, extensionParams, container) {
    var result = new $.Deferred();

    $.ajax({
      url: url,
      data: extensionParams,
      dataType: "html",
      success: function (data) {
        result.resolve(
          $(data.replace(/(>)\s*(<)/g, "$1$2"))
            .find(container)
            .children()
        );
      },
    });

    return result;
  },
  primePagination = function ($pagination, $container, containerName, url) {
    var page = $pagination.data("page") || 1,
      prevBtn = $pagination.find(".prev").removeClass("active").off("click"),
      nextBtn = $pagination.find(".next").removeClass("active").off("click");

    // if (page > 1) {
    //     getPaginationPage(url, {page: page-1}, containerName).done(function($elements) {
    //         prevBtn.addClass('active').on('click', function() {
    //             $pagination.data('page', page-1);
    //             $container.html($elements); //Replace the old news with the new one
    //             $container.append($elements); //Add the new news to the old
    //             primePagination($pagination, $container, containerName, url);
    //         });
    //     });
    // }

    getPaginationPage(
      url,
      {
        page: page + 1,
      },
      containerName
    ).done(function ($elements) {
      if ($elements.length) {
        nextBtn.addClass("active").on("click", function () {
          $pagination.data("page", page + 1);
          //$container.html($elements); //Replace the old news with the new one
          $container.append($elements);
          //Add the new news to the old
          primePagination($pagination, $container, containerName, url);
        });
      }
    });
  };

var $pagination = $(".list-pagination");
if ($pagination.length) {
  var urlBase =
    "index.php?id=" +
    $("body").attr("id").substr(3) +
    "&L=" +
    $pagination.data("language") +
    "&type=1";

  $pagination.each(function () {
    var $this = $(this),
      containerName = $this.data("container"),
      $parent = $this.closest($this.data("parent")),
      $container = $parent.find(containerName),
      url = urlBase + "&uid=" + $parent.attr("id").substr(1);
    primePagination($this, $container, containerName, url);
  });
}
// nimiq
// document.querySelector('a[href^="tel:"]').addEventListener('click', () => {
//     dataLayer.push({
//         "event": "BnEventConversion",
//         "eventCategory": "Conversion",
//         "eventAction": "ClickToCall",
//         "eventLabel": document.querySelector('html').getAttribute('lang')
//     });
// });
// document.querySelector('a[href^="mailto:"]').addEventListener('click', () => {
//     dataLayer.push({
//         "event": "BnEventConversion",
//         "eventCategory": "Conversion",
//         "eventAction": "ClickToMail",
//         "eventLabel": document.querySelector('html').getAttribute('lang')
//     });
// });
