(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41896], {
    31730: function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/demo-aquarelle", function() {
        return a(4287)
      }])
    },
    33284: function(e, t, a) {
      "use strict";
      a.d(t, {
        Z: function() {
          return i
        }
      });
      var i = (0, a(31134).Z)("palette", [
        ["circle", {
          cx: "13.5",
          cy: "6.5",
          r: ".5",
          fill: "currentColor",
          key: "1okk4w"
        }],
        ["circle", {
          cx: "17.5",
          cy: "10.5",
          r: ".5",
          fill: "currentColor",
          key: "f64h9f"
        }],
        ["circle", {
          cx: "8.5",
          cy: "7.5",
          r: ".5",
          fill: "currentColor",
          key: "fotxhn"
        }],
        ["circle", {
          cx: "6.5",
          cy: "12.5",
          r: ".5",
          fill: "currentColor",
          key: "qy21gx"
        }],
        ["path", {
          d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
          key: "12rzf8"
        }]
      ])
    },
    26499: function(e, t, a) {
      "use strict";
      var i = a(24043),
        o = a(85893),
        n = a(67353),
        s = a(67294),
        l = a(33284),
        r = a(30461);
      t.Z = function(e) {
        var t = e.colors,
          a = void 0 === t ? [] : t,
          c = e.maxWidth,
          d = e.minWidth,
          u = (0, i._)((0, s.useState)(!1), 2),
          m = u[0],
          p = u[1],
          v = (0, r.$)().t;
        return 0 === a.length ? null : (0, o.jsx)(n.E.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1.2
            }
          },
          className: "pointer-events-none fixed bottom-16 z-30 w-full",
          children: (0, o.jsx)("div", {
            className: "mx-auto flex w-full ".concat((void 0 === c ? void 0 : c) ||
              "max-w-md", " justify-end"),
            children: (0, o.jsxs)("div", {
              className: "pointer-events-auto relative",
              children: [(0, o.jsx)("button", {
                onClick: function() {
                  return p(!m)
                },
                className: "mr-5 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#575757]",
                children: (0, o.jsx)(l.Z, {
                  className: "h-6 w-6",
                  strokeWidth: 1.5,
                  color: "white"
                })
              }), m && (0, o.jsx)(n.E.div, {
                initial: {
                  opacity: 0,
                  y: 10
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  y: 10
                },
                className: "absolute bottom-full right-5 mb-2 w-auto rounded-lg bg-white p-2 shadow-lg",
                children: (0, o.jsx)("div", {
                  className: "relative flex w-auto flex-col gap-2 "
                    .concat((void 0 === d ? void 0 : d) || ""),
                  children: a.map(function(e, t) {
                    return (0, o.jsxs)("a", {
                      className: "flex items-center justify-start gap-2",
                      href: e.href,
                      children: [(0, o.jsx)("div", {
                        className: "h-4 w-4 rounded-full border-2 border-[#575757] "
                          .concat(e.value, " ").concat(
                            0 === t ? "animate-pulse" :
                            "")
                      }), (0, o.jsx)("span", {
                        className: "text-sm capitalize "
                          .concat(0 === t ?
                            "underline" : ""),
                        children: v("product.color."
                          .concat(e.name))
                      })]
                    }, t)
                  })
                })
              })]
            })
          })
        })
      }
    },
    8541: function(e, t, a) {
      "use strict";
      a.d(t, {
        a: function() {
          return o
        }
      });
      var i = new Date("2026-11-22T17:30:00");
      console.log(i);
      var o = {
        id: "1SeLAg4yEmMdOK0iJTMCLw6qfQPCEwcbaWMd8WjnQxxo",
        slug: "ingrid-y-miqueas",
        languages: ["en", "es"],
        invitation: {
          demo: !0,
          date: i.toISOString(),
          person1: "Ingrid",
          person2: "Miqueas",
          coupleImg: "invitations/ingrid-y-miqueas-aquarelle/cover.jpg",
          song: "https://static.hyperions.work/song5.mp3",
          envelope: !0,
          stampInitials: !0
        },
        assistForm: {
          assist: {
            order: 1,
            type: "radio",
            options: ["yes", "no"],
            required: !0
          },
          adultsCount: {
            order: 2,
            type: "select",
            options: ["1", "2", "3", "4", "5", "6"],
            required: !0
          },
          kidsCount: {
            type: "select",
            options: ["0", "1", "2", "3", "4", "5", "6"],
            required: !0,
            order: 3
          },
          bus: {
            order: 4,
            type: "radio",
            options: ["1", "2"],
            hiddenFilters: ["2"],
            required: !0
          },
          song: {
            order: 5,
            type: "string",
            required: !1
          }
        },
        customLabels: {
          es: {
            "invitation.clic.to.enter": "\xa1Pulsa aqu\xed y desliza!",
            "invitation.we.marry": "\xa1NOS CASAMOS!",
            "invitation.quote.text.1": "Que encuentro feliz, cuando dos espíritus no se quieren sino para amar mejor a Dios.<br/>San Francisco de Sales",
            "invitation.quote.text.2": "Contar con tu presencia har\xe1 este d\xeda a\xfan m\xe1s especial",
            "invitation.place.clic.maps": "(Pulsa para ver en Maps)",
            "invitation.place.title.1": "Ceremonia",
            "invitation.place.address.title.1": "Parroquia Sagrado Corazón de Jesús",
            "invitation.place.address.img.src.1": null,
            "invitation.place.address.1": "Enrique Carbó 461",
            "invitation.place.address.sub.1": "Paraná, Entre Ríos",
            "invitation.place.address.hour.1": "17:30 h",
            "invitation.place.address.href.1": "https://maps.app.goo.gl/V2XuzneGMhMwG5xt7",
            "invitation.place.title.2": "Celebraci\xf3n",
            "invitation.place.address.title.2": "Camping Pucará VIII",
            "invitation.place.address.img.src.2": null,
            "invitation.place.address.2": "Juan Ambrosetti 295",
            "invitation.place.address.sub.2": "Paraná, Entre Ríos",
            "invitation.place.address.hour.2": "19:30 h",
            "invitation.place.address.href.2": "https://maps.app.goo.gl/cYprYk9uSEQXKXkz8",
            "invitation.dress.code.title.1": "DressCode",
            "invitation.dress.code.type.1.1": "Semi-formal",
            "invitation.dress.code.type.text.1.1": "Dejamos algunas recomendaciones para la vestimenta",
            "invitation.bus.place.clic": "(Pulsa para ver parada)",
            "invitation.bus.title.1": "Autob\xfas",
            "invitation.bus.text.1": "Para facilitar el traslado entre la Iglesia y el restaurante, pondremos a vuestra disposici\xf3n el siguiente servicio de autob\xfas:",
            "invitation.hotels.title.1": "Alojamientos",
            "invitation.hotels.text.1": "Si quer\xe9is hacer noche por la zona, os dejamos algunas opciones para que pod\xe1is gestionar la reserva.",
            "invitation.clic.to.see": "(Pulsa para ver)",
            "invitation.assist.title.1": "Asistencia",
            "invitation.assist.subtitle.1": "\xbfNos acompa\xf1as?",
            "invitation.assist.clic": "(Pulsa en el sobre)",
            "invitation.gift.text.1": "Tu presencia es lo m\u00e1s importante para nosotros.<br/>Si adem\u00e1s quer\u00e9s hacernos un regalo te contamos c\u00f3mo hacerlo.",
            "invitation.gift.more.info": "M\u00e1s informaci\u00f3n",
            "invitation.gift.account.title.1.1": "ingridreitano (Mercado Pago) <br/> A nombre de: Ingrid María Reitano",
            "invitation.gift.account.title.2": "A nombre de: Ingrid María Reitano",
            "invitation.gift.account.1.1": "0000003100055939841231",
            "invitation.photo.carousel.title.1": "Recuerdos de\nnuestro amor",
            "invitation.qr.title.1": "\xc1lbum de fotos",
            "invitation.qr.subtitle.1": "\xa1Ay\xfadanos a inmortalizar cada momento!",
            "invitation.qr.text.1": "Escanea este QR o haz clic en \xe9l y comparte las fotos que tomes durante la boda. \xa1Nos har\xe1 much\xedsima ilusi\xf3n verlas!",
            "invitation.qr.code.label.1": "C\xf3digo del \xe1lbum",
            "invitation.qr.code.1": "BODA-N&P25",
            "invitation.counter.title.1": "Nos vemos en..."
          },
          en: {
            "invitation.clic.to.enter": "Click here and slide!",
            "invitation.we.marry": "WE ARE GETTING MARRIED!",
            "invitation.quote.text.1": "Love is the only thing that multiplies when shared",
            "invitation.quote.text.2": "Having your presence will make this day even more special",
            "invitation.place.clic.maps": "(Tap to open in Maps)",
            "invitation.place.title.1": "Ceremony",
            "invitation.place.address.title.1": "Palma Cathedral",
            "invitation.place.address.img.src.1": null,
            "invitation.place.address.1": "Pla\xe7a de la Seu, Centro",
            "invitation.place.address.sub.1": "07001 Palma",
            "invitation.place.address.hour.1": "6:00 PM",
            "invitation.place.address.href.1": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6151.304720947887!2d2.6483273!3d39.56744555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792457daf8f55%3A0x540c9be89afd81aa!2sCatedral-Bas%C3%ADlica%20de%20Santa%20Mar%C3%ADa%20de%20Mallorca!5e0!3m2!1ses!2ses!4v1742633157812!5m2!1sen!2ses",
            "invitation.place.title.2": "Reception",
            "invitation.place.address.title.2": "S'Olivaret Restaurant",
            "invitation.place.address.img.src.2": null,
            "invitation.place.address.2": "Carretera Alar\xf3-Orient, Km 3,",
            "invitation.place.address.sub.2": "07340 Alar\xf3,",
            "invitation.place.address.hour.2": "7:30 PM",
            "invitation.place.address.href.2": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.6683505500055!2d2.802171254092839!3d39.73440297632312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297e9c8566df2d5%3A0x7651cbc49055958d!2sHotel%20Rural%20S'Olivaret%20%26%20Spa!5e0!3m2!1ses!2ses!4v1764938071659!5m2!1sen!2ses",
            "invitation.dress.code.title.1": "DressCode",
            "invitation.dress.code.type.1.1": "Formal",
            "invitation.dress.code.type.text.1.1": "White is reserved for the bride,<br/>we’d love to see you in other colors!",
            "invitation.bus.place.clic": "(Tap to view stop location)",
            "invitation.bus.title.1": "Bus",
            "invitation.bus.text.1": "To make it easier to get from the Church to the restaurant, we will provide the following bus service:",
            "invitation.hotels.title.1": "Accommodation",
            "invitation.hotels.text.1": "If you would like to stay overnight in the area, here are some options to help you plan your reservation.",
            "invitation.clic.to.see": "(Tap to view)",
            "invitation.assist.title.1": "Attendance",
            "invitation.assist.subtitle.1": "Will you join us?",
            "invitation.assist.clic": "(Tap the envelope)",
            "invitation.gift.text.1": "Your presence is the most special gift on our big day, but if you would like to give us a present, here is our account number!",
            "invitation.gift.account.title.1.1": "Ingrid Garc\xeda",
            "invitation.gift.account.1.1": "ESXX XXXX XXXX XXXX XXXX",
            "invitation.photo.carousel.title.1": "Memories of\nour love",
            "invitation.qr.title.1": "Photo Album",
            "invitation.qr.subtitle.1": "Help us capture every moment!",
            "invitation.qr.text.1": "Scan this QR or tap it to upload the photos you take during the wedding. We can’t wait to see them!",
            "invitation.qr.code.label.1": "Album Code",
            "invitation.qr.code.1": "BODA-N&P25",
            "invitation.counter.title.1": "See you in..."
          }
        }
      }
    },
    13032: function(e, t, a) {
      "use strict";
      a.d(t, {
        J: function() {
          return o
        }
      });
      var i = a(85893),
        o = function(e, t, a, o) {
          var n, s, l, r, c, d, u, m, p = !(arguments.length > 4) || void 0 === arguments[
            4] || arguments[4],
            v = p ? "".concat(null == e ? void 0 : null === (n = e.invitation) || void 0 ===
              n ? void 0 : n.person1, " & ").concat(null == e ? void 0 : null === (s = e
              .invitation) || void 0 === s ? void 0 : s.person2) : "".concat(null == e ?
              void 0 : null === (l = e.invitation) || void 0 === l ? void 0 : l.person1, " ")
            .concat((null == e ? void 0 : null === (r = e.invitation) || void 0 === r ?
              void 0 : r.person1LastName) || ""),
            f = "es" === a ? "/".concat(o) : "/".concat(a, "/").concat(o);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("title", {
              children: v
            }), (0, i.jsx)("meta", {
              name: "author",
              content: "Specially Love"
            }), (0, i.jsx)("meta", {
              name: "color-scheme",
              content: "light"
            }), (0, i.jsx)("meta", {
              property: "og:title",
              content: v
            }), (0, i.jsx)("meta", {
              property: "og:description",
              content: t("invitation.page.seo.title")
            }), (0, i.jsx)("meta", {
              property: "og:url",
              content: "https://specially.love".concat(f)
            }), (0, i.jsx)("meta", {
              property: "og:image",
              content: "https://specially.love".concat((null == e ? void 0 :
                null === (c = e.invitation) || void 0 === c ? void 0 : c
                .coupleImgSeo) || (null == e ? void 0 : null === (d = e
                .invitation) || void 0 === d ? void 0 : d.coupleImg))
            }), (0, i.jsx)("meta", {
              property: "og:type",
              content: "website"
            }), (0, i.jsx)("meta", {
              property: "og:site_name",
              content: "Specially Love"
            }), (0, i.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image"
            }), (0, i.jsx)("meta", {
              name: "twitter:title",
              content: v
            }), (0, i.jsx)("meta", {
              name: "twitter:description",
              content: t("invitation.page.seo.title")
            }), (0, i.jsx)("meta", {
              name: "twitter:image",
              content: "https://specially.love".concat((null == e ? void 0 :
                null === (u = e.invitation) || void 0 === u ? void 0 : u
                .coupleImgSeo) || (null == e ? void 0 : null === (m = e
                .invitation) || void 0 === m ? void 0 : m.coupleImg))
            }), (0, i.jsx)("meta", {
              name: "google",
              content: "notranslate"
            }), (0, i.jsx)("meta", {
              name: "robots",
              content: "noindex, nofollow"
            })]
          })
        }
    },
    4287: function(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: function() {
          return _
        }
      });
      var i = a(72253),
        o = a(14932),
        n = a(85893),
        s = a(54064),
        l = a.n(s),
        r = a(190),
        c = a.n(r),
        d = a(11622),
        u = a.n(d),
        m = a(17296),
        p = a.n(m),
        v = a(9008),
        f = a.n(v),
        h = a(11163),
        g = a(21307),
        y = a(30461),
        b = a(13032),
        x = a(26499),
        w = a(8541);

      function _() {
        var e = (0, h.useRouter)().query,
          t = e.name1,
          a = e.name2,
          s = e.date,
          r = (0, y.$)((null === w.a || void 0 === w.a ? void 0 : w.a.customLabels) || {}),
          d = r.t,
          m = r.locale;
        if (!w.a.languages.includes(m)) return (0, n.jsx)("p", {
          children: "Esta invitaci\xf3n no est\xe1 disponible en este idioma"
        });
        var v = (0, o._)((0, i._)({}, w.a), {
          invitation: (0, i._)({}, w.a.invitation)
        });
        if (t && a && s) {
          var _ = sessionStorage.getItem("previewImage");
          v.invitation = (0, o._)((0, i._)({}, w.a.invitation), {
            coupleImg: _ || w.a.invitation.coupleImg,
            person1: t,
            person2: a,
            date: s
          })
        }
        var C = [{
          type: "mainPhoto"
        }, {
          type: "coupleName"
        }, {
          type: "date"
        }, {
          type: "quote"
        }, {
          type: "place"
        }, {
          type: "place"
        }, {
          type: "dressCode",
          dialog: !0,
          dialogHtml: "<p style=\"color:#005a8d;font-size:1.125rem;font-weight:500;margin-bottom:0.75rem\">Informaci\u00f3n adicional</p><p>Agradecemos su colaboración para mantener la solemnidad de la celebración religiosa. Les solicitamos asistir con vestimenta modesta, rogando evitar escotes pronunciados, remeras cortas (crop tops), espaldas muy descubiertas y prendas por encima de la rodilla. Por otro lado, no contamos con un código de color específico (pueden asistir con el color de su preferencia, incluso blanco); el único requisito es respetar las pautas mencionadas. ¡Muchas gracias por su comprensión!</p>"
        }, {
          type: "quote"
        }, {
          type: "assist",
          coupleData: w.a
        }, {
          type: "photo",
          aspectRatio: "3/4",
          imgSrc: "invitations/ingrid-y-miqueas-aquarelle/middle.jpg"
        }, {
          type: "itinerary",
          blocks: [{
            type: "ceremony",
            hour: "18:00 h"
          }, {
            type: "cocktail",
            hour: "19:00 h"
          }, {
            type: "food",
            hour: "20:00 h"
          }, {
            type: "party",
            hour: "21:30 h"
          }]
        }, {
          type: "photoCarousel",
          aspectRatio: "3/4",
          photos: [{
            src: "invitations/ingrid-y-miqueas-aquarelle/1.jpg"
          }, {
            src: "invitations/ingrid-y-miqueas-aquarelle/2.jpg"
          }, {
            src: "invitations/ingrid-y-miqueas-aquarelle/3.jpg"
          }]
        }, {
          type: "gift",
          accounts: [1],
          dialog: !0,
          dialogHtml: "<p>Pueden hacernos un regalo econ\u00f3mico al siguiente alias:</p>"
        }, {
          type: "qr",
          imgUrl: "https://photos.app.goo.gl/XdjgDkia8WV5GkzJ7",
          imgSrc: "invitations/test/qr.png"
        }, {
          type: "timer"
        }];
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(f(), {
            children: (0, b.J)(w.a, d, m, w.a.slug)
          }), (0, n.jsx)(g.AquarelleInvitation, {
            t: d,
            data: v,
            blocks: C,
            theme: "sky",
            fonts: {
              coverFont: c().className,
              titleFont: "".concat(l().className, " darrel"),
              subtitleFont: p().className,
              contentFont: p().className,
              quoteFont: u().className
            }
          }), (0, n.jsx)(x.Z, {
            colors: [{
              name: "pink",
              value: "bg-[#cb717e]",
              href: "demo-aquarelle"
            }, {
              name: "emerald",
              value: "bg-[#42838d]",
              href: "demo-aquarelle-emerald"
            }, {
              name: "lightblue",
              value: "bg-[#7bacdd]",
              href: "demo-aquarelle-lightblue"
            }]
          })]
        })
      }
    },
    17296: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__contentFont_b393b5', '__contentFont_Fallback_b393b5'"
        },
        className: "__className_b393b5"
      }
    },
    190: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__coverFont_254e0d', '__coverFont_Fallback_254e0d'"
        },
        className: "__className_254e0d"
      }
    },
    54064: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__titleFont_582cfa', '__titleFont_Fallback_582cfa'"
        },
        className: "__className_582cfa"
      }
    },
    11622: function(e) {
      e.exports = {
        style: {
          fontFamily: "'__altFont_b867c0', '__altFont_Fallback_b867c0'"
        },
        className: "__className_b867c0"
      }
    },
    9008: function(e, t, a) {
      e.exports = a(23867)
    }
  },
  function(e) {
    e.O(0, [91715, 67353, 50362, 28471, 98130, 87513, 33906, 21421, 60706, 92888, 49774, 40179],
      function() {
        return e(e.s = 31730)
      }), _N_E = e.O()
  }
]);
