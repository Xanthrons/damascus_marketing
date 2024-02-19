function loadGlobalScripts() {
  if (
    (document.querySelector(".cursor__hide") &&
      gsap.utils.toArray(".cursor__hide").forEach((e) => {
        e.addEventListener("mouseenter", function () {
          document.body.classList.add("cursor__hidden");
        }),
          e.addEventListener("mouseleave", function () {
            document.body.classList.remove("cursor__hidden");
          });
      }),
    document.querySelector(".cursor__hover") &&
      document.querySelectorAll(".cursor__hover").forEach((e) => {
        var t = e.getAttribute("data-attribute-text");
        if (e.classList.contains("--highlight")) var r = "--highlight";
        else r = "";
        e.addEventListener("mouseenter", function () {
          (document.querySelector(".cursor span").textContent = t),
            document.body.classList.add("cursor__hover" + r);
        }),
          e.addEventListener("mouseleave", function () {
            document.body.classList.remove("cursor__hover" + r);
          });
      }),
    document.querySelector(".st__headline") &&
      gsap.utils.toArray(".st__headline").forEach((e) => {
        var t = new SplitText(e, { type: "lines", linesClass: "line__inner" });
        new SplitText(e, { type: "lines", linesClass: "line__outer" });
        if (e.classList.contains("headline__footer")) {
          var r = gsap.timeline({
            onComplete: function () {
              gsap.set(e, { pointerEvents: "initial" });
            },
            scrollTrigger: { trigger: e, start: "top 45%" },
          });
          r.from(t.lines, 0.8, {
            yPercent: 50,
            rotation: 5,
            opacity: 0,
            ease: "power2.easeOut",
            stagger: 0.1,
          });
        } else {
          r = gsap.timeline({
            onComplete: function () {
              gsap.set(e, { pointerEvents: "initial" });
            },
            scrollTrigger: { trigger: e, start: "top 80%" },
          });
          r.from(t.lines, 0.8, {
            yPercent: 50,
            rotation: 5,
            opacity: 0,
            ease: "power2.easeOut",
            stagger: 0.1,
          });
        }
      }),
    document.querySelector(".st__text") &&
      gsap.utils.toArray(".st__text").forEach((e) => {
        gsap.from(e, 1, {
          y: 40,
          opacity: 0,
          ease: "power2.easeOut",
          scrollTrigger: { trigger: e, start: "top 90%" },
        });
      }),
    document.querySelector(".st__headline--spread"))
  ) {
    var e = document.querySelectorAll(".st__headline--spread");
    e.forEach((e) => {
      if (e.classList.contains("--banner")) var t = "top top";
      else t = "top bottom";
      var r = e.closest("section"),
        o =
          (new SplitText(e, { type: "lines", linesClass: "line__inner" }),
          new SplitText(e, { type: "lines", linesClass: "line__outer" }));
      gsap.to(o.lines[0], {
        xPercent: -15,
        scrollTrigger: { trigger: r, start: t, scrub: 1.2 },
      }),
        gsap.to(o.lines[1], {
          xPercent: 15,
          scrollTrigger: { trigger: r, start: t, scrub: 1.2 },
        });
    });
  }
  document.querySelector(".st__image") &&
    gsap.utils.toArray(".st__image").forEach((e) => {
      var t = e.getAttribute("data-attribute-pos"),
        r = e.getAttribute("data-attribute-fade");
      if ("right" == t || "down" == t) {
        var o = -5;
        if (((o = "down" == t ? 5 : -5), window.innerWidth > 1024))
          var n = "25";
        else n = "20";
      } else {
        (o = 5), (n = "-25");
        if (window.innerWidth > 1024) n = "-25";
        else n = "-20";
      }
      if (r) var a = 1;
      else a = 0;
      gsap.from(e, 0.8, {
        skewY: o,
        yPercent: 35,
        opacity: a,
        scrollTrigger: { trigger: e, start: "top 100%", ease: "power3.In" },
      });
      var i = e.closest(".st__image-container");
      i &&
        gsap.to(i, {
          yPercent: n,
          scrollTrigger: { trigger: i, start: "top bottom", scrub: !0 },
        });
    }),
    document.querySelector(".st__full-width") &&
      gsap.utils.toArray(".st__full-width").forEach((e) => {
        var t = e.querySelector("img");
        gsap.to(t, {
          scale: 1,
          scrollTrigger: { trigger: e, scrub: !0, ease: "power3.Out" },
        });
      }),
    document.querySelector(".st__plax") &&
      gsap.utils.toArray(".st__plax").forEach((e) => {
        var t = e.querySelector(".st__plax--inner"),
          r = e.classList.contains("--full") ? 40 : 20;
        if (e.classList.contains("--banner")) var o = "top top";
        else o = "top bottom";
        gsap.to(t, {
          yPercent: r,
          scrollTrigger: {
            trigger: e,
            scrub: !0,
            ease: "power3.Out",
            start: o,
          },
        });
      });
  var t = document.querySelectorAll(".btn__circle");
  if (
    (t &&
      t.forEach((e) => {
        var t = 1,
          r = 1,
          o = !1;
        window.addEventListener("mousemove", function (i) {
          function s(e) {
            if (!e.getClientRects().length) return { top: 0, left: 0 };
            let t = e.getBoundingClientRect(),
              r = e.ownerDocument.defaultView;
            return { top: t.top + r.pageYOffset, left: t.left + r.pageXOffset };
          }
          var c = o ? t : r,
            l = { x: i.clientX, y: i.clientY + this.window.scrollY },
            d = e.clientWidth,
            u = e.clientHeight,
            p = s(e),
            g = { x: p.left + d / 2, y: p.top + u / 2 },
            m = l.x - g.x,
            y = l.y - g.y,
            f = Math.sqrt(m * m + y * y),
            v = !1;
          f < d * c && ((v = !0), o || (o = !0), n(m, y)),
            !v && o && (a(), (o = !1));
        });
        var n = function (t, r) {
            document.body.classList.add("cursor__hidden"),
              e.classList.add("active"),
              gsap.to(e, 0.4, {
                x: 0.4 * t,
                y: 0.4 * r,
                ease: "power2.easeOut",
              }),
              gsap.to(e.querySelector("*"), 0.4, {
                x: 0.1 * t,
                y: 0.1 * r,
                ease: "power2.easeOut",
              });
          },
          a = function () {
            document.body.classList.remove("cursor__hidden"),
              e.classList.remove("active"),
              gsap.to(e, 1, {
                x: 0,
                y: 0,
                scale: 1,
                ease: Elastic.easeOut.config(1.2, 0.4),
              }),
              gsap.to(e.querySelector("*"), 1, {
                x: 0,
                y: 0,
                scale: 1,
                ease: Elastic.easeOut.config(1.2, 0.4),
              });
          };
      }),
    document.querySelector(".st__line") &&
      gsap.utils.toArray(".st__line").forEach((e, t) => {
        gsap.to(e, 0.8, {
          width: "100vw",
          scrollTrigger: {
            trigger: e,
            start: "top bottom",
            ease: "power2.easeIn",
          },
        });
      }),
    document.querySelector(".horizontal") && window.innerWidth > 1024)
  ) {
    var r = document.querySelector(".horizontal"),
      o = gsap.to(r, {
        x: () =>
          -r.scrollWidth + r.closest(".section__wrapper").clientWidth + "px",
        ease: "none",
        scrollTrigger: {
          trigger: r.closest(".section__wrapper"),
          invalidateOnRefresh: !0,
          pin: !0,
          pinSpacing: !0,
          scrub: !0,
          start: "top top",
          end: "250% bottom",
          anticipatePin: 1,
          id: "horizontalSlider",
          onUpdate: (e) => {
            document.querySelector(".bar").style.width = 100 * e.progress + "%";
          },
        },
      });
    gsap.utils.toArray(".horizontal .col").forEach((e) => {
      gsap.to(e, {
        opacity: 1,
        scrollTrigger: {
          trigger: e,
          containerAnimation: o,
          start: "left 56%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }
  var n = document.querySelector(".footer-spacer");
  if (n) {
    var a = window.innerHeight;
    a > 650 &&
      gsap.from("footer", {
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: n,
          start: "top bottom",
          scrub: !0,
          end: () => "+=" + a,
        },
      });
  }
  if (
    (document.querySelector(".bg__trigger") &&
      gsap.utils.toArray(".bg__trigger").forEach((e) => {
        ScrollTrigger.create({
          trigger: e,
          start: "top 50%",
          end: "bottom 50%",
          toggleClass: { targets: "body", className: "bg__dark" },
        });
      }),
    document.querySelector("form"))
  ) {
    document.querySelectorAll("input, textarea").forEach((e) => {
      e.addEventListener("focus", function () {
        var e = this.closest(".input-wrapper");
        e && e.classList.add("active");
      }),
        e.addEventListener("focusout", function () {
          var e = this.closest(".input-wrapper");
          e && e.classList.remove("active");
        });
    });
    const e = document.getElementsByTagName("textarea");
    for (let t = 0; t < e.length; t++)
      e[t].setAttribute(
        "style",
        "height:" + e[t].scrollHeight + "px;overflow-y:hidden;"
      ),
        e[t].addEventListener("input", i, !1);
    function i() {
      (this.style.height = "auto"),
        (this.style.height = this.scrollHeight + "px"),
        ScrollTrigger.refresh();
    }
    const t = (e) => {
      e.preventDefault();
      const t = e.target,
        r = new FormData(t),
        o = t.getAttribute("name");
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(r).toString(),
      })
        .then(() => document.querySelector("button").classList.add("success"))
        .catch((e) => alert(e)),
        window.dataLayer.push({ event: "formSubmission", form_name: o });
    };
    document.querySelectorAll("form").forEach((e) => {
      e.addEventListener("submit", t);
    });
  }
}
function loadIndexScripts() {
  function e() {
    (i.muted = !1),
      (a.textContent = "Sound off"),
      gsap.to("#banner .btn__small, #banner aside", 0.2, {
        opacity: 0,
        ease: "power2.inOut",
      });
  }
  function t() {
    (i.muted = !0),
      (a.textContent = "Sound on"),
      gsap.to("#banner .btn__small, #banner aside", 0.2, {
        opacity: 1,
        ease: "power2.inOut",
      });
  }
  function r(e) {
    var t = e.querySelectorAll(".inner"),
      r = e.querySelector(".load-more");
    window.innerWidth < 1024 &&
      scroller.scrollTo("#clients .mentions-clients", !1);
    var o = gsap.timeline({
      onStart: function () {
        scroller.paused(!0),
          document.querySelector("#clients header").classList.add("no-pointer");
      },
      onComplete: function () {
        document
          .querySelector("#clients header")
          .classList.remove("no-pointer"),
          scroller.paused(!1),
          ScrollTrigger.refresh();
      },
    });
    o.to(".container__inner", { opacity: 0 }),
      o.set(".container__inner", { display: "none" }),
      o.set(e, { display: "flex" }),
      o.to(e, { opacity: 1 }),
      o.from(
        t,
        1,
        { y: 40, opacity: 0, ease: "power2.easeOut", stagger: 0.02 },
        "<"
      ),
      o.from(r, 1, { y: 10, opacity: 0, ease: "power2.easeOut" }, "<30%");
  }
  function o(e) {
    var t = gsap.timeline({
      onStart: function () {
        scroller.paused(!0);
      },
      onComplete: function () {
        document.body.classList.add("bg__dark"),
          scroller.paused(!1),
          ScrollTrigger.refresh();
      },
    });
    t.set(e, { display: "block" }),
      t.from(e, 1, {
        y: 40,
        opacity: 0,
        ease: "power2.easeOut",
        stagger: 0.02,
      });
  }
  document.querySelector(".barba-container").classList.remove("loading");
  var n = gsap.timeline();
  n.from(".promo", { opacity: 0, delay: 0.2, ease: "power2.easeIn" }),
    n.from(
      ".top .line__inner",
      0.8,
      {
        yPercent: 50,
        rotation: 5,
        opacity: 0,
        ease: "power2.easeOut",
        stagger: 0.1,
      },
      "<"
    ),
    n.from(
      "#banner p, #banner .btn__small",
      0.6,
      { opacity: 0, ease: "power2.Out" },
      "<50%"
    ),
    document.querySelector("#banner") &&
      (gsap.to("#banner .content", {
        opacity: 0,
        filter: "blur(5px)",
        scrollTrigger: {
          trigger: "#banner",
          start: "top top",
          ease: "expo.inOut",
          scrub: !0,
          end: () => document.querySelector("#banner .promo").clientHeight,
        },
      }),
      window.innerWidth > 1024 &&
        ScrollTrigger.create({
          trigger: "#banner .content",
          start: "top top",
          pinnedContainer: "#banner",
          pinType: "transform",
          onRefreshInit: (e) => e.scroll(0),
          pin: !0,
          end: () => document.querySelector("#banner .promo").clientHeight,
        })),
    n.to("#banner .promo", {
      scaleX: 1,
      scaleY: 1,
      scrollTrigger: {
        trigger: "#banner",
        start: "top top",
        ease: "expo.inOut",
        scrub: !0,
        end: "70% 50%",
      },
    }),
    ScrollTrigger.create({
      trigger: "#intro",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.classList.add("intro-leave");
      },
      onLeaveBack: function () {
        document.body.classList.remove("intro-leave");
      },
    });
  var a = document.querySelector(".cursor span");
  if (window.innerWidth > 768) {
    var i = document.querySelector(".promo video:not(.mobile)");
    setTimeout(() => {
      i.play();
    }, 700),
      i.addEventListener("mouseenter", function () {
        i.muted ? (a.textContent = "Sound on") : (a.textContent = "Sound off");
      }),
      (i.onclick = function () {
        this.muted ? e() : t();
      });
  } else {
    i = document.querySelector(".promo video.mobile");
    (i.onclick = function () {
      this.muted ? e() : t();
    }),
      setTimeout(() => {
        i.play();
      }, 700);
  }
  if (document.querySelector("#intro")) {
    var s = document.querySelectorAll("#intro .row");
    s.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        s.forEach((e) => {
          e.classList.remove("active");
        }),
          e.classList.add("active");
      });
    });
  }
  document.querySelector("#clients .value") &&
    ScrollTrigger.create({
      trigger: ".bg__trigger--custom",
      start: "top 50%",
      invalidateOnRefresh: !0,
      end: () => "+=10000",
      toggleClass: { targets: "body", className: "bg__dark" },
    }),
    gsap.set(".client-images", { xPercent: -50, yPercent: -50 });
  var c = document.querySelector(".client-images"),
    l = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    d = { x: l.x, y: l.y },
    u = 0.1,
    p = 0.06,
    g = gsap.quickSetter(c, "x", "px"),
    m = gsap.quickSetter(c, "y", "px");
  document.body.addEventListener("mousemove", (e) => {
    (d.x = e.x), (d.y = e.y);
  }),
    gsap.ticker.add((e, t) => {
      var r = t * p,
        o = 1 - Math.pow(1 - u, r);
      (l.x += (d.x - l.x) * o), (l.y += (d.y - l.y) * o), g(l.x), m(l.y);
    }),
    document.querySelectorAll(".container__inner").forEach((e) => {
      var t = e.querySelectorAll(".inner");
      t.forEach((e, t) => {
        e.addEventListener("mouseenter", function () {
          document.body.classList.add("cursor__image", "init__" + (t + 1));
        }),
          e.addEventListener("mouseleave", function () {
            document.body.classList.remove("cursor__image", "init__" + (t + 1));
          });
      });
    }),
    document.querySelectorAll("#clients header h2").forEach((e, t) => {
      t > 0
        ? e.addEventListener("click", function () {
            var e = document.querySelector(".-clients");
            document.body.classList.add("init__clients"), r(e);
          })
        : e.addEventListener("click", function () {
            var e = document.querySelector(".-mentions");
            document.body.classList.remove("init__clients"), r(e);
          });
    }),
    document
      .querySelector("#clients header .toggle")
      .addEventListener("click", function (e, t) {
        if (document.body.classList.contains("init__clients"))
          var o = document.querySelector(".-mentions");
        else o = document.querySelector(".-clients");
        document.body.classList.toggle("init__clients"), r(o);
      });
  var y = document.querySelector(".load-more");
  y.addEventListener("click", function () {
    if (
      (gsap.to("#clients .container", { width: "100%", ease: "power2.inOut" }),
      gsap.to(this, { opacity: 0, pointerEvents: "none" }),
      document.body.classList.contains("init__clients"))
    ) {
      var e = document.querySelectorAll(".-clients .next");
      o(e);
    } else {
      e = document.querySelectorAll(".-mentions .next");
      o(e);
    }
  });
}
function loadStudioScripts() {
  var e = document.querySelector(".headline__load"),
    t = new SplitText(e, { type: "lines", linesClass: "line__inner" });
  new SplitText(e, { type: "lines", linesClass: "line__outer" });
  gsap.fromTo(
    "#full-image img",
    {
      scale: 0.2,
      yPercent: window.innerWidth > 1024 ? -25 : -10,
      xPercent: window.innerWidth > 1024 ? -12 : -6,
      transformOrigin: "top right",
    },
    {
      scale: 1,
      yPercent: 0,
      xPercent: 0,
      transformOrigin: "top right",
      scrollTrigger: { trigger: "#banner", scrub: !0, start: "top top" },
    }
  );
  var r = gsap.timeline();
  if (
    (document.querySelector(".barba-container").classList.remove("loading"),
    r.from(t.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
    r.from(
      "#banner p",
      1,
      { y: 10, opacity: 0, ease: "power2.easeOut", stagger: 0.2 },
      "<.2"
    ),
    r.from(
      "#full-image",
      0.8,
      { yPercent: 12, skewY: -5, opacity: 0, ease: "power3.In" },
      "<.2"
    ),
    document.querySelector("#join") &&
      window.innerWidth > 550 &&
      gsap.utils.toArray(".st__image--spread").forEach((e, t) => {
        var r = t % 2 == 0 ? 100 : -100,
          o = t % 2 == 0 ? -5 : 5;
        gsap.fromTo(
          e,
          { xPercent: r },
          {
            xPercent: 0,
            rotate: o,
            scrollTrigger: { trigger: e, scrub: 1.5, end: "60% 50%" },
          }
        );
      }),
    document.querySelector("#team"))
  ) {
    var o = document.querySelector(".horizontal"),
      n = document.querySelector(".switch");
    gsap.fromTo(
      ".horizontal .col",
      { opacity: 0, xPercent: 20, rotate: 3 },
      {
        opacity: 1,
        xPercent: 0,
        stagger: 0.1,
        transformOrigin: "bottom left",
        rotate: 0,
        scrollTrigger: { trigger: "#team .container", start: "top 50%" },
      }
    );
    var a = gsap.timeline({
      paused: !0,
      onComplete: function () {
        o.classList.add("switched");
      },
    });
    a.to("#team img:nth-child(1)", 0.7, { opacity: 0, filter: "blur(10px)" }),
      a.to(
        "#team img:nth-child(2)",
        0.7,
        { opacity: 1, filter: "blur(0px)", scale: 1 },
        "<"
      ),
      n.addEventListener("click", function () {
        0 == o.classList.contains("switched") ? a.play() : a.reverse(),
          o.classList.remove("switched");
      });
  }
}
function loadContactScripts() {
  var e = document.querySelector(".headline__load"),
    t = document.querySelector("form .wrapper"),
    r = document.querySelector("textarea"),
    o = window.innerWidth > 1024 ? "27vw" : "300";
  a = gsap.timeline();
  var n = new SplitText(e, { type: "lines", linesClass: "line__inner" });
  new SplitText(e, { type: "lines", linesClass: "line__outer" });
  document.querySelector(".barba-container").classList.remove("loading");
  var a = gsap.timeline();
  a.from(n.lines, 0.8, {
    yPercent: 50,
    rotation: 5,
    opacity: 0,
    ease: "power2.easeOut",
    stagger: 0.1,
  }),
    a.fromTo(
      t,
      0.6,
      { width: "0" },
      { width: o, ease: SteppedEase.config(23) },
      "<60%"
    ),
    a.fromTo(
      ".highlight",
      0.5,
      { opacity: 0.1 },
      { opacity: 1, repeat: -1, ease: SteppedEase.config(23) },
      "<"
    ),
    a.add(function () {
      r.focus();
    }, "+=.2"),
    r.addEventListener("focus", function () {
      gsap.set(".highlight", { display: "none" }),
        r.classList.add("loaded"),
        a.paused(!0);
    });
}
function loadWorkScripts() {
  var e = document.querySelector(".headline__load"),
    t = new SplitText(e, { type: "lines", linesClass: "line__inner" }),
    r =
      (new SplitText(e, { type: "lines", linesClass: "line__outer" }),
      gsap.timeline());
  document.querySelector(".barba-container").classList.remove("loading"),
    r.from(t.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
    r.from(
      "header .container .row > *",
      1,
      { y: 20, opacity: 0, ease: "power2.easeOut" },
      "<25%"
    );
}
function loadServicesScripts() {
  var e = document.querySelector(".headline__load"),
    t = new SplitText(e, { type: "lines", linesClass: "line__inner" }),
    r =
      (new SplitText(e, { type: "lines", linesClass: "line__outer" }),
      gsap.timeline());
  if (
    (document.querySelector(".barba-container").classList.remove("loading"),
    r.from(t.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
    document.querySelector("header .content") &&
      r.from(
        "header .content",
        1,
        { y: 20, opacity: 0, ease: "power2.easeOut" },
        "<25%"
      ),
    document.querySelector(".plax__cols") && window.innerWidth > 1024)
  ) {
    var o = document.querySelector(".plax__cols"),
      n = o.querySelector(".col:nth-child(2)"),
      a = o.querySelector(".col:nth-child(3)");
    r = gsap.timeline({
      scrollTrigger: {
        trigger: o,
        start: "30% bottom",
        end: "+=220%",
        scrub: 0.7,
      },
    });
    r.fromTo(
      n,
      { yPercent: 30, ease: "power3.Out" },
      { yPercent: -30, ease: "power3.Out" }
    ),
      r.fromTo(
        a,
        { yPercent: 60, ease: "power3.Out" },
        { yPercent: -60, ease: "power3.Out" },
        "<"
      );
  }
  if (document.querySelector("#process")) {
    if (window.innerWidth > 1024)
      var i = ScrollTrigger.getById("horizontalSlider").spacer.clientHeight;
    else i = "";
    var s = window.innerWidth > 1024 ? i + "px bottom" : "150% bottom";
    ScrollTrigger.create({
      trigger: ".bg__trigger--custom",
      start: "top 50%",
      invalidateOnRefresh: !0,
      end: s,
      toggleClass: { targets: "body", className: "bg__dark" },
    });
  }
  if (document.querySelector("#why") && window.innerWidth > 1024) {
    var c = document.querySelector("#why");
    gsap.from("#why .mask", {
      xPercent: -25,
      filter: "blur(15px)",
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.7,
      scrollTrigger: { trigger: c, start: "top 60%" },
    }),
      c.addEventListener("click", function () {
        var e = gsap.timeline({ paused: !0 });
        e.fromTo(
          c.querySelectorAll(".col:nth-child(1)"),
          { filter: "blur(0px)", opacity: 1 },
          { filter: "blur(15px)", opacity: 0, ease: "power2.inOut" }
        ),
          e.fromTo(
            c.querySelectorAll(".col:nth-child(2)"),
            { filter: "blur(15px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, ease: "power2.inOut" },
            "<"
          ),
          e.fromTo(
            "#why .mask",
            { xPercent: 0 },
            { xPercent: -100, ease: "power2.inOut" },
            "<"
          ),
          e.fromTo(
            "#why .mask",
            { xPercent: 0 },
            { xPercent: -100, ease: "power2.inOut" },
            "<"
          );
        var t = gsap.timeline({ paused: !0 });
        t.fromTo(
          c.querySelectorAll(".col:nth-child(2)"),
          { filter: "blur(0px)", opacity: 1 },
          { filter: "blur(15px)", opacity: 0, ease: "power2.inOut" }
        ),
          t.fromTo(
            c.querySelectorAll(".col:nth-child(1)"),
            { filter: "blur(15px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, ease: "power2.inOut" },
            "<"
          ),
          t.fromTo(
            "#why .mask",
            { xPercent: -100 },
            { xPercent: 0, ease: "power2.inOut" },
            "<"
          ),
          this.classList.contains("active")
            ? (t.play(), this.classList.remove("active"))
            : (e.play(), this.classList.add("active"));
      });
  }
  document.querySelector("#service-wrapper") &&
    (gsap.from("#service-wrapper .row, #service-wrapper img", {
      y: 10,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.2,
    }),
    ScrollTrigger.create({
      trigger: "#intro",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.classList.add("intro-leave");
      },
      onLeaveBack: function () {
        document.body.classList.remove("intro-leave");
      },
    }));
}
function loadProjectScripts(e, t) {
  var r = document.querySelector(".top"),
    o =
      (document.querySelector("#banner").clientHeight,
      r.clientHeight,
      new SplitText(r, { type: "lines", linesClass: "line__inner" }));
  new SplitText(r, { type: "lines", linesClass: "line__outer" });
  if (
    (document.querySelector(".barba-container").classList.remove("loading"),
    "project" !== t)
  ) {
    var n = gsap.timeline();
    n.from(".promo", { opacity: 0, delay: 0.2, ease: "power2.easeIn" }),
      n.from(
        o.lines,
        0.8,
        {
          yPercent: 50,
          rotation: 5,
          opacity: 0,
          ease: "power2.easeOut",
          stagger: 0.1,
        },
        "<"
      );
  } else if ("popstate" == e || "back" == e || "forward" == e) {
    n = gsap.timeline();
    n.from(".promo", { opacity: 0, delay: 0.2, ease: "power2.easeIn" }),
      n.from(
        o.lines,
        0.8,
        {
          yPercent: 50,
          rotation: 5,
          opacity: 0,
          ease: "power2.easeOut",
          stagger: 0.1,
        },
        "<"
      );
  }
  ScrollTrigger.create({
    trigger: "#sec__001",
    start: "top 50%",
    end: "bottom 50%",
    id: "projectIntroLeave",
    onEnter: function (e) {
      document.body.classList.add("intro-leave");
    },
    onLeaveBack: function (e) {
      document.body.classList.remove("intro-leave");
    },
  }),
    window.innerWidth > 1024 &&
      gsap.utils.toArray(".pin__sticky").forEach((e, t) => {
        var r = e.querySelector(".minor"),
          o = e.querySelector(".bar");
        ScrollTrigger.create({
          trigger: r,
          start: "top 125px",
          end: "bottom 50%",
          pinnedContainer: r,
          pinType: "transform",
          onRefreshInit: (e) => e.scroll(0),
          onUpdate: (e) => (o.style.width = 100 * e.progress + "%"),
          pin: !0,
        });
      }),
    ScrollTrigger.create({
      trigger: ".footer-spacer",
      start: "-5px top",
      id: "nextProjectST",
      onEnter: (e) => {
        barba.go(e.trigger.getAttribute("href"));
      },
    });
}
function loadEggScripts() {
  if (
    (setTimeout(() => {
      if (document.querySelector(".slider__egg")) {
        const e = new Swiper(".slider__egg", {
          slidesPerView: 1,
          centeredSlides: !0,
          loop: !0,
          speed: 1e3,
          allowTouchMove: !0,
          preloadImages: !1,
          allowTouchMove: !1,
          effect: "creative",
          observer: !0,
          observeParents: !0,
          creativeEffect: {
            next: {
              translate: [0, "100%", 0],
              scale: 1.5,
              rotate: [0, 0, -15],
              origin: "right top",
            },
          },
          lazy: { loadPrevNext: !0, loadPrevNextAmount: 3 },
        });
        document
          .querySelector(".egg-event")
          .addEventListener("click", function () {
            e.slideNext();
          });
      }
    }, 500),
    window.innerWidth > 1024)
  ) {
    gsap.set(".cursor__egg", { xPercent: -50, yPercent: -50 });
    var e = document.querySelector(".cursor__egg"),
      t = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      r = { x: t.x, y: t.y },
      o = 0.1,
      n = 0.06,
      a = gsap.quickSetter(e, "x", "px"),
      i = gsap.quickSetter(e, "y", "px");
    document.body.addEventListener("mousemove", (e) => {
      (r.x = e.x), (r.y = e.y);
    }),
      gsap.ticker.add((e, s) => {
        var c = s * n,
          l = 1 - Math.pow(1 - o, c);
        (t.x += (r.x - t.x) * l), (t.y += (r.y - t.y) * l), a(t.x), i(t.y);
      });
  }
  var s = document.querySelector(".headline__load"),
    c = new SplitText(s, { type: "lines", linesClass: "line__inner" }),
    l =
      (new SplitText(s, { type: "lines", linesClass: "line__outer" }),
      gsap.timeline());
  document.querySelector(".barba-container").classList.remove("loading"),
    l.from(c.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
    l.from(".slider__egg", 1, { opacity: 0, ease: "power2.easeOut" }, "<.2");
  var d = document.getElementById("easter-egg"),
    u = d.querySelectorAll("h1"),
    p = 1.1 * u[0].clientHeight,
    g = gsap.timeline({ repeat: -1, paused: !0 });
  u.forEach((e, t) => {
    var r = e.nextElementSibling;
    if (!r) r = u[0];
    g.to(e, 1, { y: -p, rotation: -5, opacity: 0, ease: "power2.inOut" }),
      g.to(r, 1, { y: 0, rotation: 0, opacity: 1, ease: "power2.inOut" }, "<"),
      g.set(e, { y: p, rotation: 5, opacity: 0 }),
      g.addPause();
  });
  var m = document.querySelectorAll(".display");
  m.forEach((e, t) => {
    var r = e.querySelectorAll(".display__inner"),
      o = r[0].clientHeight,
      n = gsap.timeline({ repeat: -1, paused: !0 });
    r.forEach((e) => {
      var t = e.nextElementSibling;
      if (!t) t = r[0];
      n.to(e, 1, { y: -o, ease: "power2.inOut" }),
        n.to(t, 1, { y: 0, ease: "power2.inOut" }, "<"),
        n.set(e, { y: o }),
        n.addPause();
    }),
      d.addEventListener("click", function () {
        n.play();
      });
  }),
    d.addEventListener("click", function () {
      g.play();
    });
}
function load404Scripts() {
  document.querySelector(".barba-container").classList.remove("loading");
}
function loadPrivacyScripts() {
  var e = document.querySelector(".headline__load"),
    t = new SplitText(e, { type: "lines", linesClass: "line__inner" }),
    r =
      (new SplitText(e, { type: "lines", linesClass: "line__outer" }),
      gsap.timeline());
  document.querySelector(".barba-container").classList.remove("loading"),
    r.from(t.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
    r.from(
      "#banner h2, article",
      1,
      { opacity: 0, y: 20, ease: "power2.easeOut", stagger: 0.1 },
      "<.3"
    );
}
function loadLandingScripts() {
  var e = document.getElementById("smooth-content"),
    t = document.querySelector(".headline__load"),
    r = new SplitText(t, { type: "lines", linesClass: "line__inner" }),
    o =
      (new SplitText(t, { type: "lines", linesClass: "line__outer" }),
      gsap.timeline());
  if (
    (document.querySelector(".barba-container").classList.remove("loading"),
    e.classList.contains("b"))
  ) {
    var n = new SplitText(".xxl", { type: "lines", linesClass: "line__inner" }),
      a = new SplitText(".xxl", { type: "lines", linesClass: "line__outer" }),
      i = document.querySelector("#banner").clientHeight / 2,
      s = document.querySelector(".top").clientHeight / 2,
      c = i - s;
    o.from(n.lines, 0.8, {
      yPercent: 50,
      opacity: 0,
      ease: "power2.easeOut",
      delay: 0.3,
      stagger: 0.1,
    }),
      o.fromTo(".top", { y: c }, { y: 0, ease: "expo.inOut", duration: 1 }),
      o.fromTo(
        ".bottom",
        { y: -c },
        { y: 0, ease: "expo.inOut", duration: 1 },
        "<"
      ),
      o.to(".screen", 1.2, { opacity: 0.25, ease: "expo.inOut" }, "<.2"),
      o.to("#banner img", 1.2, { scale: 1, ease: "expo.Out" }, "<"),
      o.from(
        r.lines,
        0.8,
        {
          yPercent: 50,
          rotation: 5,
          opacity: 0,
          ease: "power2.easeOut",
          stagger: 0.1,
        },
        "<70%"
      ),
      o.from(
        "#banner .btn__circle",
        { opacity: 0, ease: "power2.easeOut" },
        "<.2"
      ),
      gsap.to(a.elements[0], {
        xPercent: -20,
        scrollTrigger: { trigger: "#banner", start: "top top", scrub: 1.2 },
      }),
      gsap.to(a.elements[1], {
        xPercent: 20,
        scrollTrigger: { trigger: "#banner", start: "top top", scrub: 1.2 },
      });
  } else
    o.from(r.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
      o.from(
        "#banner p, #banner .btn__small",
        1,
        { opacity: 0, y: 20, stagger: 0.2, ease: "power2.easeOut" },
        "<.2"
      );
  document.querySelector("#banner").classList.contains("is-dark") &&
    ScrollTrigger.create({
      trigger: "#featured",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.classList.add("intro-leave");
      },
      onLeaveBack: function () {
        document.body.classList.remove("intro-leave");
      },
    });
  var l = document.querySelectorAll(".anchor");
  if (
    (l.forEach((e) => {
      var t = e.getAttribute("data-attribute-scroll");
      e.addEventListener("click", function () {
        scroller.scrollTo(document.getElementById(t), !1);
      });
    }),
    document.querySelector("#banner .img-wrapper"))
  ) {
    var d = document.querySelectorAll("#banner .img-wrapper img");
    document
      .querySelector("#banner")
      .addEventListener("mousemove", function (e) {
        var t = (window.innerWidth / 2 - e.pageX) / 20,
          r = -(window.innerHeight / 2 - e.pageY) / 20;
        d.forEach((e) => {
          e.setAttribute(
            "style",
            "transform: rotateY(" +
              t +
              "deg) rotateX(" +
              r +
              "deg);-webkit-transform: rotateY(" +
              t +
              "deg) rotateX(" +
              r +
              "deg);-moz-transform: rotateY(" +
              t +
              "deg) rotateX(" +
              r +
              "deg)"
          );
        });
      });
  }
  if (document.querySelector(".mousecanvas") && window.innerWidth > 1024) {
    var u = document.querySelectorAll(".mousecanvas");
    u.forEach((e) => {
      var t = e.querySelector(".mousecanvas__hover"),
        r = t.querySelectorAll(".mousecanvas__hover--text"),
        o = e.querySelector(".mousecanvas__img-container"),
        n = o.querySelectorAll("img");
      r &&
        r.forEach((e, t) => {
          e.addEventListener("mouseenter", function () {
            n.forEach((e) => {
              e.classList.remove("init");
            }),
              n[t].classList.add("init");
          });
        }),
        gsap.set(o, { yPercent: -50 });
      var a = { y: o.clientHeight / 2 },
        i = { y: a.y },
        s = 0.1,
        c = 0.06,
        l = gsap.quickSetter(o, "y", "px");
      t.addEventListener("mousemove", (e) => {
        const r = t.getBoundingClientRect();
        i.y = e.y - r.top;
      }),
        gsap.ticker.add((e, t) => {
          var r = t * c,
            o = 1 - Math.pow(1 - s, r);
          (a.y += (i.y - a.y) * o), l(a.y);
        });
    });
  }
  if (document.querySelector(".plax__cols") && window.innerWidth > 1024) {
    var p = document.querySelector(".plax__cols"),
      g = p.querySelector(".col:nth-child(2)"),
      m = p.querySelector(".col:nth-child(3)"),
      y = gsap.timeline({
        scrollTrigger: {
          trigger: p,
          start: "30% bottom",
          end: "+=220%",
          scrub: 0.7,
        },
      });
    y.fromTo(
      g,
      { yPercent: 30, ease: "power3.Out" },
      { yPercent: -30, ease: "power3.Out" }
    ),
      y.fromTo(
        m,
        { yPercent: 60, ease: "power3.Out" },
        { yPercent: -60, ease: "power3.Out" },
        "<"
      );
  }
  if (document.querySelector("#featured").classList.contains("egg-event")) {
    p = document.querySelector("#featured");
    var f = p.querySelectorAll(".slider__title h4"),
      v = p.querySelectorAll(".slider__bg img"),
      h = 1.1 * f[0].clientHeight,
      S = gsap.timeline({ repeat: -1, paused: !0 });
    v.forEach((e, t) => {
      var r = e.nextElementSibling,
        o = "1";
      if (!r) (r = v[0]), (o = "2");
      S.to(e, 1, { filter: "blur(20px)", opacity: 0, ease: "power3.in" }),
        S.set(r, { zIndex: o }, "<"),
        S.to(r, 1, { opacity: 1, scale: 1, ease: "power3.inOut" }, "<"),
        S.set(e, { filter: "blur(0px)", zIndex: "-1", opacity: 0, scale: 1.1 }),
        S.addPause();
    });
    var w = gsap.timeline({ repeat: -1, paused: !0 });
    f.forEach((e, t) => {
      var r = e.nextElementSibling;
      if (!r) r = f[0];
      w.to(e, 1, { y: -h, rotation: -5, opacity: 0, ease: "power2.inOut" }),
        w.to(
          r,
          1,
          { y: 0, rotation: 0, opacity: 1, ease: "power2.inOut" },
          "<"
        ),
        w.set(e, { y: h, rotation: 5, opacity: 0 }),
        w.addPause();
    });
    var _ = document.querySelectorAll(".display");
    _.forEach((e, t) => {
      var r = e.querySelectorAll(".display__inner"),
        o = r[0].clientHeight,
        n = gsap.timeline({ repeat: -1, paused: !0 });
      r.forEach((e) => {
        var t = e.nextElementSibling;
        if (!t) t = r[0];
        n.to(e, 1, { y: -o, ease: "power2.inOut" }),
          n.to(t, 1, { y: 0, ease: "power2.inOut" }, "<"),
          n.set(e, { y: o }),
          n.addPause();
      }),
        p.addEventListener("click", function () {
          n.play();
        });
    }),
      p.addEventListener("click", function () {
        S.play(), w.play();
      });
  }
  if (document.querySelector("#faq")) {
    var b = document.querySelectorAll("#faq .col");
    b.forEach((e) => {
      var t = e.querySelector(".question");
      e.querySelector(".answer");
      t.addEventListener("click", function () {
        !document.body.classList.contains("init__faq") &&
          document.body.classList.add("init__faq"),
          gsap.to("#faq .container", { width: "100vw", ease: "power2.inOut" }),
          e.classList.toggle("expanded"),
          document.body.classList.add("bg__dark"),
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 400);
      });
    });
  }
  if (document.getElementById("testimonial")) {
    var x = gsap.timeline({ repeat: -1, paused: !0 }),
      q = document.getElementById("testimonial"),
      L = q.querySelectorAll(".content"),
      E = q.querySelectorAll(".col .inner"),
      T = window.innerWidth > 1024 ? 0.3 : 0,
      O = window.innerWidth > 1024 ? 0 : "-1em";
    if (q.querySelector(".img-container"))
      var P = q.querySelectorAll(".content__img");
    L.forEach((e, t) => {
      var r = e,
        o = e.nextElementSibling;
      if (o) (n = o), (a = t + 1);
      else
        var n = L[0],
          a = 0;
      if (q.querySelector(".img-container")) {
        var i = P[t],
          s = i.nextElementSibling;
        if (s) s = s;
        else var s = P[0];
        x.to(i, 0.2, { opacity: 0, ease: "power2.inOut" }),
          x.to(s, 0.2, { opacity: 1, ease: "power2.inOut" }, "<");
      }
      x.to(r, 0.6, { y: "-1em", opacity: 0, ease: "power2.Out" }, "<"),
        x.to(E[t], { y: O, opacity: T, ease: "power2.In" }, "<"),
        x.to(n, 0.6, { y: 0, opacity: 1, ease: "power2.In" }),
        x.to(E[a], { opacity: 1, y: 0 }, "<"),
        x.set(r, { y: "1em" }),
        window.innerWidth < 1024 && x.set(E[t], { y: "1em" }),
        x.addPause();
    }),
      q.addEventListener("click", function () {
        x.play();
      });
  }
  var A = document.querySelector("form .wrapper"),
    k = document.querySelector("textarea");
  if (
    (k.addEventListener("focus", function () {
      gsap.set(".highlight", { display: "none" }), C.pause();
    }),
    e.classList.contains("crtv"))
  ) {
    var C = gsap.timeline({
        scrollTrigger: { trigger: ".footer-spacer", start: "top 35%" },
      }),
      W = window.innerWidth > 1024 ? "38vw" : "300";
    C.fromTo(
      A,
      0.6,
      { width: "0" },
      { width: W, ease: SteppedEase.config(23) },
      0
    ),
      C.fromTo(
        ".highlight",
        0.5,
        { opacity: 0.1 },
        { opacity: 1, repeat: -1, ease: SteppedEase.config(23) },
        0
      ),
      C.add(function () {
        k.focus();
      }, "+=.2");
  }
}
function loadJournalScripts() {
  var e = document.querySelector(".headline__load"),
    t = new SplitText(e, { type: "lines", linesClass: "line__inner" }),
    r =
      (new SplitText(e, { type: "lines", linesClass: "line__outer" }),
      gsap.timeline());
  if (
    (document.querySelector(".barba-container").classList.remove("loading"),
    r.from(t.lines, 0.8, {
      yPercent: 50,
      rotation: 5,
      opacity: 0,
      ease: "power2.easeOut",
      stagger: 0.1,
    }),
    r.from(
      ".entry__content > div",
      1,
      { opacity: 0, y: 20, ease: "power2.easeOut", stagger: 0.1 },
      "<.3"
    ),
    document.querySelector(".posts"))
  ) {
    var o = document.querySelectorAll(".filter li"),
      n = document.querySelectorAll(".entry__item");
    o.forEach((e) => {
      var t = e.getAttribute("data-attribute-category");
      e.addEventListener("click", function () {
        o.forEach((e) => {
          e.classList.remove("active");
        }),
          e.classList.add("active");
        var r = gsap.timeline({
          onStart: function () {
            scroller.paused(!0);
          },
          onComplete: function () {
            scroller.paused(!1), ScrollTrigger.refresh();
          },
        });
        r.to(".entry", { opacity: 0, ease: "power2.easeIn" }),
          r.add(function () {
            n.forEach((e) => {
              e.classList.remove("hidden"),
                t &&
                  e.getAttribute("data-attribute-category") !== t &&
                  e.classList.add("hidden");
            });
            var e = document.querySelectorAll(
              ".entry__item:not(.hidden)"
            ).length;
            (document.querySelector(".count").textContent = e),
              (document.querySelector(".suffix").textContent =
                e > 1 ? "Entries" : "Entry"),
              ScrollTrigger.refresh();
          }),
          r.to(".entry", { opacity: 1, ease: "power2.easeOut" });
      });
    });
  }
  if (document.querySelector(".entry__content--sidebar-toc")) {
    window.innerWidth > 550 &&
      ScrollTrigger.create({
        trigger: ".entry__content--sidebar-toc",
        start: "top 100px",
        pinnedContainer: ".entry__content",
        pinType: "transform",
        onRefreshInit: (e) => e.scroll(0),
        pin: !0,
        end: (e) =>
          document.querySelector(".entry__content").clientHeight +
          e.trigger.clientHeight / 2,
      });
    var a = document.querySelectorAll(".entry__content--sidebar-toc a");
    a.forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault();
        var r = e.getAttribute("href");
        scroller.scrollTo(r, !1, "top 80px");
      });
    });
  }
}
let scroller;
document.addEventListener("DOMContentLoaded", function (e) {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText),
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
  var t = document.querySelector(".cursor"),
    r = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    o = { x: r.x, y: r.y },
    n = 0.1,
    a = 0.06,
    i = gsap.quickSetter(t, "x", "px"),
    s = gsap.quickSetter(t, "y", "px");
  document.body.addEventListener("mousemove", (e) => {
    (o.x = e.x), (o.y = e.y);
  }),
    gsap.ticker.add((e, t) => {
      var c = t * a,
        l = 1 - Math.pow(1 - n, c);
      (r.x += (o.x - r.x) * l), (r.y += (o.y - r.y) * l), i(r.x), s(r.y);
    }),
    (window.onorientationchange = function () {
      var e = window.orientation;
      switch (e) {
        case 0:
        case 90:
        case -90:
          window.location.reload();
      }
    });
}),
  window.addEventListener("load", (e) => {
    if (window.innerWidth > 1024)
      (navItems = document.querySelectorAll(
        "nav:not(.anchors) .nav-item,nav:not(.anchors) .egg"
      )),
        (containerItems = document.querySelectorAll(".nav-container__inner")),
        navItems.forEach((e, t) => {
          for (
            var r = containerItems[t].querySelector(".nav-marquee"),
              o = r.querySelector(".nav-marquee__container"),
              n = r.querySelector(".nav-marquee__inner"),
              a = n.clientWidth,
              i = Math.round(window.innerWidth / a + 1),
              s = 2,
              c = 0;
            c < i;
            c++
          ) {
            var l = n.cloneNode(!0);
            o.appendChild(l);
          }
          var d = gsap.timeline({ paused: !0 });
          d.to(o, {
            duration: s,
            ease: "none",
            x: "-=" + a,
            modifiers: { x: gsap.utils.unitize((e) => parseFloat(e)) },
            repeat: -1,
          }),
            e.addEventListener("mouseenter", function () {
              containerItems[t].classList.add("active"),
                document.body.classList.add("init__nav"),
                d.play();
            }),
            e.addEventListener("mouseleave", function () {
              containerItems[t].classList.remove("active"),
                document.body.classList.remove("init__nav"),
                d.pause();
            });
        });
    else {
      var t = document.querySelector(".nav-toggle");
      t.addEventListener("click", function () {
        document.body.classList.toggle("init__nav");
      });
    }
  }),
  document.addEventListener("DOMContentLoaded", function (e) {
    function t() {
      scroller.paused(!0);
      var e = gsap.timeline({
        onComplete: function () {
          i.classList.add("no-pointer"),
            document.body.classList.remove("intro-leave", "--project"),
            gsap.set(".nav-container", { clearProps: "all" });
        },
      });
      e.to(".page-transition", {
        skewX: 0,
        skewY: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "power3.InOut",
      }),
        e.to(
          ".barba-container, .nav-container",
          { filter: "blur(20px)", ease: "power3.Out" },
          "<"
        ),
        e.add(function () {
          let e = ScrollTrigger.getAll();
          for (let t = 0; t < e.length; t++) e[t].kill(!0);
        });
    }
    function r(e) {
      scroller.paused(!1);
      var t = gsap.timeline();
      t.to(".page-transition", { opacity: 0, ease: "power3.Out" }),
        t.set(".page-transition", { clearProps: "all" }),
        i.classList.remove("no-pointer");
    }
    function o(e) {
      document.body.classList.add("--project"),
        ScrollTrigger.getById("nextProjectST").disable(),
        ScrollTrigger.getById("projectIntroLeave").kill(),
        gsap.to(".footer-spacer .btn__circle", 0.2, {
          opacity: 0,
          ease: "power3.Out",
        }),
        scroller.scrollTo(".footer-spacer", !0);
    }
    function n(e) {
      document.querySelector(".barba-container").classList.remove("loading");
    }
    function a(e) {
      return (
        (e = e || 2e3),
        new Promise((t) => {
          setTimeout(() => {
            t();
          }, e);
        })
      );
    }
    var i = document.querySelector("nav:not(.anchors)"),
      s = i.querySelectorAll(".nav-item, .egg");
    barba.hooks.beforeEnter((e) => {
      e.current.container &&
        (e.current.container.remove(), ScrollTrigger.refresh()),
        document.body.classList.remove(
          "intro-leave",
          "cursor__hover",
          "init__nav",
          "--expanded"
        );
      var t = e.next.container,
        r = document.querySelectorAll(".full-height"),
        o = e.next.namespace;
      if (
        (window.innerWidth < 1024 &&
          r.forEach((e) => {
            e.classList.contains("--overflow")
              ? (e.style.height =
                  1.2 * document.documentElement.clientHeight + "px")
              : (e.style.height = document.documentElement.clientHeight + "px");
          }),
        "easter-egg" == o)
      ) {
        var n = document.createElement("script");
        (n.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"),
          e.next.container.appendChild(n);
      }
      s.forEach((e) => {
        var t = e.getAttribute("data-attribute-item");
        t == o ? e.classList.add("active") : e.classList.remove("active");
      }),
        imagesLoaded(t.querySelector("section:nth-child(1)"), function () {
          history.scrollRestoration && (history.scrollRestoration = "manual"),
            ScrollTrigger.clearScrollMemory(),
            window.scrollTo(0, 0),
            (scroller = ScrollSmoother.create({ smooth: 0.6 })),
            loadGlobalScripts(),
            scroller.paused(!0),
            setTimeout(() => {
              scroller.paused(!1);
            }, 100);
        });
    }),
      barba.hooks.afterEnter((e) => {
        (window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            event: "virtualPageview",
            pageUrl: e.next.url.path,
            pageTitle: document.title,
          });
        var t = document.querySelectorAll("video");
        t.forEach((e) => {
          var t = e.play();
          void 0 !== t && t.then((e) => {}).catch((e) => {});
        });
      }),
      barba.init({
        transitions: [
          {
            name: "general-transition",
            async leave(e) {
              const r = this.async();
              t(e), await a(1500), r();
            },
            async enter(e) {
              r(e);
            },
          },
          {
            name: "next-project",
            from: { namespace: ["project"] },
            to: { namespace: ["project"] },
            async leave(e) {
              var r = e.trigger;
              const n = this.async();
              "popstate" == r || "back" == r || "forward" == r
                ? (t(e), await a(1500))
                : (o(e), await a(450)),
                n();
            },
            async enter(e) {
              var t = e.trigger;
              "popstate" == t || "back" == t || "forward" == t ? r(e) : n(e);
            },
          },
        ],
        views: [
          {
            namespace: "home",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t.querySelector("#banner"), function () {
                loadIndexScripts(),
                  setTimeout(() => {
                    ScrollTrigger.refresh();
                  }, 100);
              });
            },
          },
          {
            namespace: "work",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadWorkScripts();
              });
            },
          },
          {
            namespace: "services",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadServicesScripts();
              });
            },
          },
          {
            namespace: "studio",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadStudioScripts();
              });
            },
          },
          {
            namespace: "journal",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadJournalScripts();
              });
            },
          },
          {
            namespace: "contact",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadContactScripts();
              });
            },
          },
          {
            namespace: "project",
            afterEnter(e) {
              var t = e.next,
                r = e.current.namespace,
                o = e.trigger,
                n = t.container;
              imagesLoaded(
                n.querySelector("section:nth-child(1)"),
                function () {
                  loadProjectScripts(o, r);
                }
              );
            },
          },
          {
            namespace: "easter-egg",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadEggScripts();
              });
            },
          },
          {
            namespace: "404",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                load404Scripts();
              });
            },
          },
          {
            namespace: "privacy",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadPrivacyScripts();
              });
            },
          },
          {
            namespace: "landing",
            afterEnter({ next: e }) {
              var t = e.container;
              imagesLoaded(t, function () {
                loadLandingScripts();
              });
            },
          },
        ],
      });
  });
