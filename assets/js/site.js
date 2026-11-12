(function () {
  // Topic filter on the Blog page
  document.querySelectorAll('.chips').forEach(function (group) {
    var list = document.getElementById(group.getAttribute('data-target'));
    var empty = document.getElementById(group.getAttribute('data-empty'));
    if (!list) return;
    group.addEventListener('click', function (event) {
      var chip = event.target.closest('.chip');
      if (!chip) return;
      group.querySelectorAll('.chip').forEach(function (other) {
        other.setAttribute('aria-pressed', other === chip ? 'true' : 'false');
      });
      var topic = chip.getAttribute('data-topic');
      var shown = 0;
      list.querySelectorAll('.row').forEach(function (row) {
        var topics = ' ' + (row.getAttribute('data-topics') || '') + ' ';
        var match = topic === 'all' || topics.indexOf(' ' + topic + ' ') > -1;
        row.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown > 0;
    });
  });

  // Reading progress: the blue line across the top of a post
  var bar = document.getElementById('progress-bar');
  function progress() {
    if (!bar) return;
    var article = null;
    document.querySelectorAll('[data-progress]').forEach(function (el) {
      if (!article && el.offsetParent !== null) article = el;
    });
    if (!article) { bar.style.width = '0'; return; }
    var rect = article.getBoundingClientRect();
    var total = rect.height - window.innerHeight;
    var done = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
    bar.style.width = (done * 100).toFixed(1) + '%';
  }
  window.addEventListener('scroll', progress, { passive: true });
  window.addEventListener('resize', progress);
  window.addEventListener('hashchange', function () { setTimeout(progress, 0); });
  progress();
})();
