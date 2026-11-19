/* Tároló mérések – dashboard. Az adatokat a data.js tölti be (window.DATA). */
(function () {
  "use strict";
  var D = window.DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var fmt = function (v) {
    if (v == null || v === "") return "";
    if (typeof v === "number") {
      var d = Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2;
      if (Number.isInteger(v)) d = 0;
      return v.toLocaleString("hu-HU", { minimumFractionDigits: 0, maximumFractionDigits: d });
    }
    return String(v);
  };

  /* ---------- téma ---------- */
  $("#themeBtn").addEventListener("click", function () {
    var root = document.documentElement;
    var cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- táblázat ---------- */
  function table(el, t) {
    if (!t || !t.rows.length) { el.innerHTML = '<p class="muted" style="padding:0 20px">Nincs adat.</p>'; return; }
    var h = "<table><thead><tr>" + t.columns.map(function (c) { return "<th scope=\"col\">" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
    t.rows.forEach(function (r) {
      h += "<tr>" + t.columns.map(function (c, i) {
        var v = r[c];
        var empty = v == null || v === "";
        return (i === 0 ? "<th scope=\"row\" style=\"text-align:left;font-size:13px;color:var(--text)\">" : "<td" + (empty ? ' class="empty"' : "") + ">")
          + (empty ? "–" : esc(fmt(v))) + (i === 0 ? "</th>" : "</td>");
      }).join("") + "</tr>";
    });
    el.innerHTML = h + "</tbody></table>";
  }

  /* ---------- ábrák + nagyító ---------- */
  var gallery = [];
  function figs(el, list) {
    var h = "";
    list.forEach(function (f) {
      if (f.group) { h += '<h3 class="group">' + esc(f.group) + "</h3>"; }
      var idx = gallery.push(f) - 1;
      var img = '<button class="zoom" type="button" data-i="' + idx + '" aria-label="Nagyítás: ' + esc(f.title) + '">'
        + '<img loading="lazy" decoding="async" src="' + esc(f.src) + '" alt="' + esc(f.title) + '" width="' + f.w + '" height="' + f.h + '" style="--ar:' + f.w + "/" + f.h + '">'
        + "</button>";
      if (f.explain) {                       // magyarázat: függőleges ábránál mellette, egyébként alatta
        h += '<figure class="card fig ' + (f.side ? "side" : "below") + '">' + img
          + '<figcaption class="explain"><h3>' + esc(f.title) + "</h3>"
          + f.explain.map(function (x) { return "<h4>" + esc(x.h) + "</h4><p>" + esc(x.p) + "</p>"; }).join("")
          + "</figcaption></figure>";
        return;
      }
      h += '<figure class="card fig' + (f.wide ? " wide" : "") + '">' + img
        + '<figcaption class="cap"><h3>' + esc(f.title) + "</h3>" + (f.desc ? "<p>" + esc(f.desc) + "</p>" : "") + "</figcaption></figure>";
    });
    el.innerHTML = h;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button.zoom");
    if (b) openLb(+b.dataset.i);
  });

  var lb = $("#lightbox"), lbImg = $("#lbImg"), cur = 0, scope = [];
  function openLb(i) {
    var f = gallery[i];
    var panel = document.querySelector(".panel:not([hidden])");
    scope = Array.prototype.map.call(panel.querySelectorAll("button.zoom"), function (b) { return +b.dataset.i; });
    cur = Math.max(0, scope.indexOf(i));
    showLb();
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
  }
  function showLb() {
    var f = gallery[scope[cur]];
    lbImg.src = f.src; lbImg.alt = f.title;
    $("#lbTitle").textContent = f.title;
    $("#lbDesc").textContent = f.desc || "";
    $("#lbOpen").href = f.src;
    var many = scope.length > 1;
    $("#lbPrev").hidden = !many; $("#lbNext").hidden = !many;
  }
  function step(d) { cur = (cur + d + scope.length) % scope.length; showLb(); }
  $("#lbPrev").addEventListener("click", function () { step(-1); });
  $("#lbNext").addEventListener("click", function () { step(1); });
  $("#lbClose").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-stage")) lb.close(); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (tx == null) return;
    var dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    tx = null;
  });

  /* ---------- áttekintés ---------- */
  $("#kpis").innerHTML = D.kpis.map(function (k) {
    return '<div class="card kpi" style="--k:' + (k.color || "var(--accent)") + '"><div class="label">' + esc(k.label)
      + '</div><div class="value">' + esc(k.value) + (k.unit ? "<small>" + esc(k.unit) + "</small>" : "")
      + '</div><div class="sub">' + esc(k.sub || "") + "</div></div>";
  }).join("");
  $("#findings").innerHTML = D.findings.map(function (f) { return "<li><span>" + esc(f) + "</span></li>"; }).join("");
  $("#miniList").innerHTML = D.measurements.map(function (m) {
    return '<a class="mini-row" href="#meresek/' + esc(m.id) + '"><span class="badge ' + (m.kind === "felfűtés" ? "heat" : "dis") + '">'
      + esc(m.kind) + "</span><span>" + esc(m.short) + (m.note ? ' <span class="muted">· ' + esc(m.note) + "</span>" : "")
      + '</span><span class="date">' + esc(m.when) + "</span></a>";
  }).join("");

  /* ---------- szakaszok ---------- */
  table($("#heatTable"), D.heat);
  table($("#disTable"), D.dis);
  table($("#qcTable"), D.qc);
  figs($("#figsHeat"), D.heatFigs);
  figs($("#figsDis"), D.disFigs);
  $("#method").innerHTML = D.methodHtml;
  $("#generated").textContent = "Frissítve: " + D.generated;

  /* ---------- mérésválasztó ---------- */
  var groups = [["felfűtés", "Felfűtés"], ["kisütés", "Kisütés"]];
  var selected = null;                       // a két szekció ugyanazt a mérést mutatja
  function pickerHtml(filter) {
    return groups.map(function (g) {
      var ms = D.measurements.filter(function (m) { return m.kind === g[0] && filter(m); });
      if (!ms.length) return "";
      return '<div class="picker-group"><span>' + g[1] + "</span>" + ms.map(function (m) {
        return '<button class="chip" type="button" role="tab" data-id="' + esc(m.id) + '" aria-selected="false" title="' + esc(m.label + (m.note ? " – " + m.note : "")) + '">'
          + esc(m.chip) + "</button>";
      }).join("") + "</div>";
    }).join("");
  }
  function findMeas(id, filter) {
    var list = D.measurements.filter(filter || function () { return true; });
    return list.filter(function (x) { return x.id === id; })[0] || list.filter(function (x) { return x.id === selected; })[0] || list[0];
  }
  function markChips(root, id) {
    root.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-selected", c.dataset.id === id ? "true" : "false"); });
  }
  $("#picker").innerHTML = pickerHtml(function () { return true; });
  var hasAnim = function (m) { return !!m.anim; };
  $("#pickerReplay").innerHTML = pickerHtml(hasAnim);
  var measStart = gallery.length;
  function showMeas(id) {
    var m = findMeas(id);
    selected = m.id;
    markChips($("#picker"), m.id);
    $("#measInfo").innerHTML = '<div class="item"><b>' + esc(m.label) + "</b><span>" + esc(m.when) + (m.note ? " · " + esc(m.note) : "") + "</span></div>"
      + m.info.map(function (it) { return '<div class="item"><b>' + esc(it.v) + "</b><span>" + esc(it.k) + "</span></div>"; }).join("")
      + (m.excluded.length ? '<span class="badge warn">Kizárt hőmérő: ' + esc(m.excluded.join(", ")) + "</span>" : "")
      + (m.anim ? '<a class="btn" style="margin-left:auto" href="#visszajatszas/' + esc(m.id) + '">'
        + '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Visszajátszás</a>' : "");
    gallery.length = measStart;
    figs($("#figsMeas"), m.figs);
  }
  $("#picker").addEventListener("click", function (e) {
    var c = e.target.closest(".chip");
    if (c) location.hash = "meresek/" + c.dataset.id;
  });

  /* ---------- visszajátszás ---------- */
  var rImg = $("#replayImg"), rLoad = $("#replayLoading");
  rImg.addEventListener("load", function () { rLoad.classList.add("done"); });
  rImg.addEventListener("error", function () { rLoad.textContent = "Az animáció nem tölthető be."; });
  function showReplay(id) {
    if (!D.measurements.some(hasAnim)) {
      $("#replayInfo").innerHTML = '<span class="muted">Ehhez a változathoz nem készült animáció.</span>';
      return;
    }
    var m = findMeas(id, hasAnim);
    selected = m.id;
    markChips($("#pickerReplay"), m.id);
    $("#replayInfo").innerHTML = '<div class="item"><b>' + esc(m.label) + "</b><span>" + esc(m.when)
      + (m.note ? " · " + esc(m.note) : "") + " · " + esc(m.info[0].v) + " → kb. 18 s, " + esc(m.anim.speed) + "× gyorsítás</span></div>";
    var src = m.anim.src;
    if (rImg.dataset.src !== src) {
      rLoad.textContent = "Animáció betöltése… (" + m.anim.mb + " MB)";
      rLoad.classList.remove("done");
      rImg.dataset.src = src;
      rImg.style.setProperty("--ar", m.anim.w + "/" + m.anim.h);
      rImg.alt = "Visszajátszás – " + m.label;
      rImg.src = src;
    }
    $("#replayDownload").href = src;
    $("#replayDownload").setAttribute("download", m.id + src.slice(src.lastIndexOf(".")));
  }
  $("#pickerReplay").addEventListener("click", function (e) {
    var c = e.target.closest(".chip");
    if (c) location.hash = "visszajatszas/" + c.dataset.id;
  });
  $("#replayRestart").addEventListener("click", function () {
    var src = rImg.dataset.src;
    if (!src) return;
    rImg.src = "";                           // a GIF az elejéről indul újra
    rImg.src = src;
  });

  /* ---------- útvonal (hash) ---------- */
  function route() {
    var h = decodeURIComponent(location.hash.slice(1)) || "attekintes";
    var parts = h.split("/");
    var tab = parts[0];
    if (!document.querySelector('[data-panel="' + tab + '"]')) tab = "attekintes";
    document.querySelectorAll(".panel").forEach(function (p) { p.hidden = p.dataset.panel !== tab; });
    document.querySelectorAll(".tabs a").forEach(function (a) {
      if (a.dataset.tab === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (tab === "meresek") showMeas(parts[1]);
    if (tab === "visszajatszas") showReplay(parts[1]);
    var t = { attekintes: "Áttekintés", felfutes: "Felfűtés", kisutes: "Kisütés", meresek: "Mérések",
      visszajatszas: "Visszajátszás", modszer: "Módszer" }[tab];
    document.title = t + " · Tároló mérések";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
