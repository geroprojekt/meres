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
      h += '<figure class="card fig' + (f.wide ? " wide" : "") + '">'
        + '<button class="zoom" type="button" data-i="' + idx + '" aria-label="Nagyítás: ' + esc(f.title) + '">'
        + '<img loading="lazy" decoding="async" src="' + esc(f.src) + '" alt="' + esc(f.title) + '" width="' + f.w + '" height="' + f.h + '" style="--ar:' + f.w + "/" + f.h + '">'
        + "</button>"
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
  $("#picker").innerHTML = groups.map(function (g) {
    var ms = D.measurements.filter(function (m) { return m.kind === g[0]; });
    if (!ms.length) return "";
    return '<div class="picker-group"><span>' + g[1] + "</span>" + ms.map(function (m) {
      return '<button class="chip" type="button" role="tab" data-id="' + esc(m.id) + '" aria-selected="false" title="' + esc(m.label + (m.note ? " – " + m.note : "")) + '">'
        + esc(m.chip) + "</button>";
    }).join("") + "</div>";
  }).join("");
  var measStart = gallery.length;
  function showMeas(id) {
    var m = D.measurements.filter(function (x) { return x.id === id; })[0] || D.measurements[0];
    document.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-selected", c.dataset.id === m.id ? "true" : "false"); });
    $("#measInfo").innerHTML = '<div class="item"><b>' + esc(m.label) + "</b><span>" + esc(m.when) + (m.note ? " · " + esc(m.note) : "") + "</span></div>"
      + m.info.map(function (it) { return '<div class="item"><b>' + esc(it.v) + "</b><span>" + esc(it.k) + "</span></div>"; }).join("")
      + (m.excluded.length ? '<span class="badge warn">Kizárt hőmérő: ' + esc(m.excluded.join(", ")) + "</span>" : "");
    gallery.length = measStart;
    figs($("#figsMeas"), m.figs);
  }
  $("#picker").addEventListener("click", function (e) {
    var c = e.target.closest(".chip");
    if (c) location.hash = "meresek/" + c.dataset.id;
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
    var t = { attekintes: "Áttekintés", felfutes: "Felfűtés", kisutes: "Kisütés", meresek: "Mérések", modszer: "Módszer" }[tab];
    document.title = t + " · Tároló mérések";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
