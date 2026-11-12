/* 404 concepts: show the address that was asked for, so a visitor can spot a
   typo, and run the tile concept's map: pick the missing tile, play the first
   load, then keep the map live. Everything is written with textContent.
   Without JS the requested line stays hidden, the missing tile is the middle
   one, and the tiles are sharp from the start (see _not-found.scss). */
(function () {
  var path = window.location.pathname || '/';

  var targets = document.querySelectorAll('[data-nf-path]');
  for (var i = 0; i < targets.length; i++) {
    targets[i].textContent = path;
    var row = targets[i].closest ? targets[i].closest('[hidden]') : null;
    if (row) { row.hidden = false; }
  }

  /* ---- Tile map -------------------------------------------------------
     A tile's state is its data-step attribute, styled in _not-found.scss:
     0 is coarse, 1 to 3 let the sharp image through a denser scatter of
     pixels each time, and no attribute is fully sharp. The missing tile uses
     the same steps for the coarse cover over its message: whole at 0, thinner
     at each step, gone with no attribute. */

  var COLS = 5;
  var TILE_ID = { zoom: 14, x: 8288, y: 6118 };  /* address of the top-left tile */

  var RESOLVE = [1, 2, 3, null];     /* coarse to sharp */
  var COARSEN = [3, 2, 1, 0];        /* and back */
  var STEP_IN_MS = [110, 190];       /* pause between resolve steps */
  var STEP_OUT_MS = 60;              /* pause between coarsen steps */

  var FIRST_START_MS = [0, 1100];    /* first load: when each tile starts resolving */
  var FIRST_FAIL_MS = 1000;          /* first load: when the missing tile gives up */
  var FIRST_LOAD_MS = 1900;          /* first load, start to end */

  var TILE_GAP_MS = [350, 900];      /* live: pause between starting tile refreshes */
  var TILE_HOLD_MS = [400, 1200];    /* live: how long a refreshing tile stays coarse */
  var MAX_BUSY = 4;                  /* live: most tiles refreshing at once */
  var RETRY_GAP_MS = [9000, 14000];  /* live: pause between retries of the missing tile */
  var RETRY_HOLD_MS = 700;           /* live: how long a retry stays fully covered */

  function between(range) {
    return range[0] + Math.random() * (range[1] - range[0]);
  }

  function stepIn() {
    return between(STEP_IN_MS);
  }

  function setStep(el, step) {
    if (step === null) {
      el.removeAttribute('data-step');
    } else {
      el.setAttribute('data-step', step);
    }
  }

  /* Walk an element through a list of steps, pausing between them. */
  function play(el, steps, pause, done) {
    var n = 0;
    (function next() {
      setStep(el, steps[n]);
      n += 1;
      if (n < steps.length) {
        window.setTimeout(next, typeof pause === 'function' ? pause() : pause);
      } else if (done) {
        done();
      }
    })();
  }

  /* Put the hole somewhere new on each load: hide the tile it replaces, move
     the missing tile into that grid cell, and give it that cell's tile ID.
     Everything starts coarse. Returns the tiles that do hold imagery. */
  function arrange(map, missing) {
    var cells = map.querySelectorAll('.nf-map-tile');
    var pick = Math.floor(Math.random() * cells.length);
    var tiles = [];

    for (var n = 0; n < cells.length; n++) {
      if (n === pick) {
        var col = n % COLS;
        var line = Math.floor(n / COLS);
        cells[n].classList.add('is-void');
        missing.style.gridColumn = String(col + 1);
        missing.style.gridRow = String(line + 1);
        missing.style.setProperty('--c', col);
        missing.style.setProperty('--r', line);
        var id = missing.querySelector('[data-nf-tile-id]');
        if (id) {
          id.textContent = 'ID ' + TILE_ID.zoom + '/' + (TILE_ID.x + col) + '/' + (TILE_ID.y + line);
        }
      } else {
        cells[n].classList.remove('is-void');
        setStep(cells[n], 0);
        tiles.push(cells[n]);
      }
    }

    setStep(missing, 0);
    map.classList.add('is-ready');
    return tiles;
  }

  /* Live map: after the first load, keep it moving. A few tiles at a time
     drop back to coarse and resolve again, and now and then the missing tile
     retries and fails again. Its gap is long so the message stays readable.
     Nothing new starts while the tab is hidden or the map is out of view. */
  function goLive(map, tiles, missing) {
    var busy = [];
    var busyCount = 0;
    var inView = true;

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[entries.length - 1].isIntersecting;
      }).observe(map);
    }

    function idle() {
      return document.hidden || !inView;
    }

    function refresh(n) {
      busy[n] = true;
      busyCount += 1;
      play(tiles[n], COARSEN, STEP_OUT_MS, function () {
        window.setTimeout(function () {
          play(tiles[n], RESOLVE, stepIn, function () {
            busy[n] = false;
            busyCount -= 1;
          });
        }, between(TILE_HOLD_MS));
      });
    }

    function startRefresh() {
      if (!idle() && tiles.length && busyCount < MAX_BUSY) {
        var n = Math.floor(Math.random() * tiles.length);
        for (var tries = 0; busy[n] && tries < tiles.length; tries++) {
          n = (n + 1) % tiles.length;
        }
        if (!busy[n]) { refresh(n); }
      }
      window.setTimeout(startRefresh, between(TILE_GAP_MS));
    }

    function retryMissing() {
      if (!idle()) {
        play(missing, COARSEN, STEP_OUT_MS, function () {
          window.setTimeout(function () {
            play(missing, RESOLVE, stepIn);
          }, RETRY_HOLD_MS);
        });
      }
      window.setTimeout(retryMissing, between(RETRY_GAP_MS));
    }

    map.classList.add('is-live');
    window.setTimeout(startRefresh, between(TILE_GAP_MS));
    window.setTimeout(retryMissing, between(RETRY_GAP_MS));
  }

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var maps = document.querySelectorAll('[data-nf-map]');
  for (var j = 0; j < maps.length; j++) {
    (function (map) {
      var missing = map.querySelector('.nf-map-missing');
      if (!missing) { return; }
      var tiles = arrange(map, missing);
      var released = false;
      var failed = false;

      /* First load. Held until the full image is in hand, so the tiles
         resolve one by one instead of all popping when the download ends. A
         failed or slow download still releases it: the coarse tiles stay up
         and the missing tile's message appears either way. After a failed
         download the tiles have nothing to resolve to, so they stay coarse
         and the live cycle never starts. With reduced motion everything
         settles at once and the live cycle never starts either. */
      function release() {
        if (released) { return; }
        released = true;

        if (failed) {
          setStep(missing, null);
          return;
        }

        if (reduceMotion) {
          for (var n = 0; n < tiles.length; n++) { setStep(tiles[n], null); }
          setStep(missing, null);
          return;
        }

        for (var m = 0; m < tiles.length; m++) {
          (function (tile) {
            window.setTimeout(function () {
              play(tile, RESOLVE, stepIn);
            }, between(FIRST_START_MS));
          })(tiles[m]);
        }
        window.setTimeout(function () {
          play(missing, RESOLVE, stepIn);
        }, FIRST_FAIL_MS);
        window.setTimeout(function () {
          goLive(map, tiles, missing);
        }, FIRST_LOAD_MS);
      }

      var img = new Image();
      img.onload = release;
      img.onerror = function () {
        failed = true;
        release();
      };
      img.src = map.getAttribute('data-src');
      window.setTimeout(release, 4000);
    })(maps[j]);
  }
})();
