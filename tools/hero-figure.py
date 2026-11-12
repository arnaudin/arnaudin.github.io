#!/usr/bin/env python3
"""Generate the home hero figures: _includes/hero-figure.html.

Run from the repo root:  python3 tools/hero-figure.py

Two inline SVGs, both aria-hidden. CSS picks one per theme. They sit in the
home hero as a quiet watermark: linework only, no labels, no motion.

1. Airfoil (Paper, Blueprint). Potential flow past a Joukowski airfoil.
   Uniform flow + doublet + bound vortex around a circle in the zeta plane,
   circulation set by the Kutta condition so the flow leaves the sharp
   trailing edge smoothly, then mapped to the airfoil with z = zeta + c^2/zeta.
   Streamlines are traced in the zeta plane and mapped, so they follow the
   same exact solution as the body: none cross, the front one ends on the
   stagnation point, and equal stream-function steps bunch up over the upper
   surface where the flow is fastest. A radial mask fades the streamlines out
   away from the airfoil. The airfoil is a Joukowski section
   (about 12% thick, 3% camber), not a NACA section: the NACA equations give
   a shape the Joukowski flow does not wrap exactly, so streamlines near the
   nose would not sit on it.

2. Orbit (Satellite, Map). Orthographic globe with a 15 degree graticule,
   one pass of a sun-synchronous ground track (inclination 97.8 deg, period
   about 99 min, earth turning under it), the swath edges either side, and one
   scene footprint on the track.

Pure Python, no numpy. Output paths are simplified to about 0.3 px.
"""

import cmath
import math
import os

W, H = 560, 420
OUT = os.path.join(os.path.dirname(__file__), "..", "_includes", "hero-figure.html")


# ---------------------------------------------------------------------------
# Path helpers
# ---------------------------------------------------------------------------

def rdp(pts, eps):
    """Ramer-Douglas-Peucker simplification."""
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy) or 1e-12
    dmax, idx = 0.0, 0
    for i in range(1, len(pts) - 1):
        x0, y0 = pts[i]
        d = abs(dy * x0 - dx * y0 + x2 * y1 - y2 * x1) / norm
        if d > dmax:
            dmax, idx = d, i
    if dmax > eps:
        return rdp(pts[: idx + 1], eps)[:-1] + rdp(pts[idx:], eps)
    return [pts[0], pts[-1]]


def path_d(pts, closed=False, eps=0.3):
    pts = rdp(pts, eps)
    out = ["M%.1f %.1f" % pts[0]]
    px, py = round(pts[0][0], 1), round(pts[0][1], 1)
    for x, y in pts[1:]:
        x, y = round(x, 1), round(y, 1)
        out.append("l%s %s" % (fmt(x - px), fmt(y - py)))
        px, py = x, y
    if closed:
        out.append("z")
    return "".join(out)


def fmt(v):
    s = ("%.1f" % v).rstrip("0").rstrip(".")
    if s in ("-0", ""):
        s = "0"
    return s.replace("0.", ".", 1) if s.startswith("0.") else s.replace("-0.", "-.", 1)


# ---------------------------------------------------------------------------
# 1. Joukowski airfoil in potential flow
# ---------------------------------------------------------------------------

C = 1.0                          # Joukowski constant
MU = complex(-0.095, 0.065)      # circle center: thickness (Re) and camber (Im)
A = abs(C - MU)                  # radius, so the circle passes through zeta = c
ALPHA = math.radians(6.0)        # angle of attack
U = 1.0
EA = cmath.exp(1j * ALPHA)

# Kutta condition: dW/dzeta = 0 at the trailing edge (zeta = c).
_k = U * (1 / EA - A * A * EA / (C - MU) ** 2)
GAMMA = (-2 * math.pi * (C - MU) * _k / 1j).real


def W_(z):
    s = z - MU
    return U * (s / EA + A * A * EA / s) + 1j * GAMMA / (2 * math.pi) * cmath.log(s)


def dW(z):
    s = z - MU
    return U * (1 / EA - A * A * EA / (s * s)) + 1j * GAMMA / (2 * math.pi * s)


def psi(z):
    return W_(z).imag


PSI_BODY = GAMMA / (2 * math.pi) * math.log(A)


def joukowski(zeta):
    return zeta + C * C / zeta


# Display: rotate by -alpha so the freestream is horizontal and the airfoil
# pitches nose up. Then scale into the SVG.
ROT = cmath.exp(-1j * ALPHA)
SCALE = 94.0
CX, CY = W * 0.47, H * 0.47


# Near-field mask: streamlines are full strength next to the airfoil and gone
# before they straighten out into the far field, where evenly spaced level
# lines read as more of the hero's grid wash. Centered a little high, so more
# of the bunched flow over the top shows than the flat flow underneath.
NEAR_X, NEAR_Y = CX + 6, CY - 14
NEAR_RX, NEAR_RY = 285, 160


def to_svg(z):
    p = joukowski(z) * ROT
    return (CX + SCALE * p.real, CY - SCALE * p.imag)


def trace(z0, direction=1.0, max_len=14.0, stop=None):
    """RK4 along the velocity field in the zeta plane, ~fixed step in z."""
    pts = [z0]
    z = z0
    travelled = 0.0

    def f(zz):
        v = dW(zz).conjugate()        # velocity (u - iv)* -> u + iv
        m = abs(v) or 1e-12
        j = abs(1 - C * C / (zz * zz)) or 1e-12
        h = min(0.02 / j, 0.04)
        return direction * v / m * h

    for _ in range(4000):
        k1 = f(z)
        k2 = f(z + k1 / 2)
        k3 = f(z + k2 / 2)
        k4 = f(z + k3)
        z_new = z + (k1 + 2 * k2 + 2 * k3 + k4) / 6
        travelled += abs(joukowski(z_new) - joukowski(z))
        z = z_new
        pts.append(z)
        if stop and stop(z):
            break
        x, _ = to_svg(z)
        if travelled > max_len or (direction > 0 and x > W + 20) or (direction < 0 and x < -20):
            break
    return pts


def seed(psi_target, upstream=True):
    """Point far up- or downstream (display frame) on streamline psi_target."""
    x_far = -4.2 if upstream else 4.6
    # Line perpendicular to the freestream in the display frame.
    lo, hi = -6.0, 6.0
    def at(t):
        p_disp = complex(x_far, t)
        p_z = p_disp / ROT
        # invert Joukowski: zeta = (z + sqrt(z^2 - 4c^2)) / 2, outer branch
        r = cmath.sqrt(p_z * p_z - 4 * C * C)
        zeta = (p_z + r) / 2
        if abs(zeta - MU) < A:
            zeta = (p_z - r) / 2
        return zeta
    for _ in range(80):
        mid = (lo + hi) / 2
        if psi(at(mid)) < psi_target:
            lo = mid
        else:
            hi = mid
    return at((lo + hi) / 2)


def airfoil():
    streams = []
    step = 0.30
    n_up, n_down = 7, 7
    for k in range(-n_down, n_up + 1):
        if k == 0:
            continue
        pts = trace(seed(PSI_BODY + k * step))
        streams.append([to_svg(z) for z in pts])

    # Dividing streamline: upstream piece to the stagnation point, downstream
    # piece from the trailing edge.
    near_body = lambda z: abs(z - MU) < A * 1.002
    front = trace(seed(PSI_BODY), stop=near_body)
    back = trace(seed(PSI_BODY, upstream=False), direction=-1.0,
                 stop=lambda z: abs(z - C) < 0.01)
    streams.append([to_svg(z) for z in front])
    streams.append([to_svg(z) for z in back])

    # Body outline.
    body = [to_svg(MU + A * cmath.exp(1j * t))
            for t in [2 * math.pi * i / 720 for i in range(720)]]

    return streams, body


# ---------------------------------------------------------------------------
# 2. Orthographic globe, graticule, ground track, swath
# ---------------------------------------------------------------------------

R_GLOBE = 178.0
GX, GY = W * 0.5, H * 0.47
LAT0, LON0 = math.radians(24.0), math.radians(-70.0)
LAM0_DEG = -38.0   # longitude of the first node; slides the pass across the disk


# Masks for the globe linework, the counterpart of the airfoil's near-field
# mask. The graticule, track and swath are strongest around the scene
# footprint and fall away across the disk. The center sits up and to the
# left of the footprint, so the globe reads as lit from the side of the hero
# text. The limb has its own fade along the same diagonal: a clear edge on
# the lit side that sinks into the ground on the far side.
LIT_X, LIT_Y = GX - 8, GY - 20
LIT_R = 192
LIMB_D = R_GLOBE * 0.7071   # limb points on the lit and far diagonals


def vec(lat, lon):
    return (math.cos(lat) * math.cos(lon), math.cos(lat) * math.sin(lon), math.sin(lat))


def ortho_v(v):
    """Project a unit vector; returns (x, y, visible)."""
    lat = math.asin(max(-1, min(1, v[2])))
    lon = math.atan2(v[1], v[0])
    return ortho(lat, lon)


def ortho(lat, lon):
    cosc = math.sin(LAT0) * math.sin(lat) + math.cos(LAT0) * math.cos(lat) * math.cos(lon - LON0)
    x = math.cos(lat) * math.sin(lon - LON0)
    y = math.cos(LAT0) * math.sin(lat) - math.sin(LAT0) * math.cos(lat) * math.cos(lon - LON0)
    return (GX + R_GLOBE * x, GY - R_GLOBE * y, cosc > 0)


def visible_runs(samples):
    runs, cur = [], []
    for x, y, vis in samples:
        if vis:
            cur.append((x, y))
        elif cur:
            runs.append(cur)
            cur = []
    if cur:
        runs.append(cur)
    return [r for r in runs if len(r) > 1]


def orbit():
    grat = []
    for lat_d in range(-75, 90, 15):
        lat = math.radians(lat_d)
        s = [ortho(lat, math.radians(l / 2)) for l in range(-360, 361)]
        grat += visible_runs(s)
    for lon_d in range(-180, 180, 15):
        lon = math.radians(lon_d)
        s = [ortho(math.radians(l / 4), lon) for l in range(-360, 361)]
        grat += visible_runs(s)

    # Sun-synchronous orbit, descending pass over the visible disk.
    inc = math.radians(97.8)
    period = 98.8 * 60.0
    we = 2 * math.pi / 86164.0
    n = 2 * math.pi / period
    lam0 = math.radians(LAM0_DEG)
    track_v = []
    # One revolution starting on the far side (descending node), so the
    # visible ascending pass is one unbroken line.
    for i in range(1800, 5401):
        u = math.radians(i / 10.0)                 # argument of latitude
        t = u / n
        lat = math.asin(math.sin(inc) * math.sin(u))
        lon = lam0 + math.atan2(math.cos(inc) * math.sin(u), math.cos(u)) - we * t
        track_v.append(vec(lat, lon))

    def cross(a, b):
        return (a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0])

    def norm(a):
        m = math.sqrt(sum(c * c for c in a)) or 1e-12
        return tuple(c / m for c in a)

    half = math.radians(4.0)   # swath half-width, widened for legibility
    left, right = [], []
    for i in range(len(track_v) - 1):
        p, q = track_v[i], track_v[i + 1]
        tang = norm(tuple(q[k] - p[k] for k in range(3)))
        nrm = norm(cross(p, tang))
        left.append(tuple(p[k] * math.cos(half) + nrm[k] * math.sin(half) for k in range(3)))
        right.append(tuple(p[k] * math.cos(half) - nrm[k] * math.sin(half) for k in range(3)))

    track = visible_runs([ortho_v(v) for v in track_v])
    sw_l = visible_runs([ortho_v(v) for v in left])
    sw_r = visible_runs([ortho_v(v) for v in right])

    # Pick the visible track point nearest the disk center for the scene.
    best_i, best_d = 0, 1e9
    for i, v in enumerate(track_v[:-1]):
        x, y, vis = ortho_v(v)
        if vis:
            d = math.hypot(x - GX - 20, y - GY + 10)
            if d < best_d:
                best_i, best_d = i, d
    span = 45   # samples along track (0.1 deg of u each)
    i0, i1 = best_i - span, best_i + span
    scene = ([ortho_v(v)[:2] for v in left[i0:i1]] +
             [ortho_v(v)[:2] for v in reversed(right[i0:i1])])
    return grat, track, sw_l, sw_r, scene


# ---------------------------------------------------------------------------
# Emit
# ---------------------------------------------------------------------------

def line(d, cls):
    return '<path class="%s" d="%s"/>' % (cls, d)


def main():
    streams, body = airfoil()
    s_paths = "".join(
        line(path_d(p), "hf-line hf-stream")
        for p in sorted(streams, key=lambda p: min(y for _, y in p)))
    body_d = path_d(body, closed=True, eps=0.15)

    airfoil_svg = f"""<svg class="hero-figure-svg hero-figure-airfoil" viewBox="0 0 {W} {H}" aria-hidden="true" focusable="false">
<defs><radialGradient id="hf-near" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate({NEAR_X:.0f} {NEAR_Y:.0f}) scale({NEAR_RX} {NEAR_RY})"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#fff" stop-opacity=".9"/><stop offset=".75" stop-color="#fff" stop-opacity=".38"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="hf-mask" maskUnits="userSpaceOnUse" x="-100" y="-100" width="{W + 200}" height="{H + 200}"><rect x="-100" y="-100" width="{W + 200}" height="{H + 200}" fill="url(#hf-near)"/></mask></defs>
<g mask="url(#hf-mask)">{s_paths}</g>
<path class="hf-line hf-body" d="{body_d}"/>
</svg>"""

    grat, track, sw_l, sw_r, scene = orbit()
    g_paths = "".join(line(path_d(r, eps=0.4), "hf-line hf-grat") for r in grat)
    t_paths = "".join(line(path_d(r), "hf-line hf-track") for r in track)
    w_paths = "".join(line(path_d(r), "hf-line hf-swath") for r in sw_l + sw_r)
    scene_d = path_d(scene, closed=True, eps=0.2)
    orbit_svg = f"""<svg class="hero-figure-svg hero-figure-orbit" viewBox="0 0 {W} {H}" aria-hidden="true" focusable="false">
<defs><radialGradient id="hf-lit" gradientUnits="userSpaceOnUse" cx="{LIT_X:.0f}" cy="{LIT_Y:.0f}" r="{LIT_R}"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#fff" stop-opacity=".8"/><stop offset=".75" stop-color="#fff" stop-opacity=".25"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="hf-mask-orbit" maskUnits="userSpaceOnUse" x="-100" y="-100" width="{W + 200}" height="{H + 200}"><rect x="-100" y="-100" width="{W + 200}" height="{H + 200}" fill="url(#hf-lit)"/></mask><linearGradient id="hf-limb-fade" gradientUnits="userSpaceOnUse" x1="{GX - LIMB_D:.0f}" y1="{GY - LIMB_D:.0f}" x2="{GX + LIMB_D:.0f}" y2="{GY + LIMB_D:.0f}"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".1"/></linearGradient><mask id="hf-mask-limb" maskUnits="userSpaceOnUse" x="-100" y="-100" width="{W + 200}" height="{H + 200}"><rect x="-100" y="-100" width="{W + 200}" height="{H + 200}" fill="url(#hf-limb-fade)"/></mask></defs>
<circle class="hf-line hf-limb" cx="{GX:.1f}" cy="{GY:.1f}" r="{R_GLOBE:.1f}" mask="url(#hf-mask-limb)"/>
<g mask="url(#hf-mask-orbit)">{g_paths}{w_paths}{t_paths}</g>
<path class="hf-line hf-scene" d="{scene_d}"/>
</svg>"""

    html = f"""{{% comment %}} Generated by tools/hero-figure.py. Do not hand edit; rerun the script. {{% endcomment %}}
<div class="hero-figure" aria-hidden="true">
<div class="hero-figure-frame">
{airfoil_svg}
{orbit_svg}
</div>
</div>
"""
    with open(OUT, "w") as f:
        f.write(html)
    print("wrote", os.path.normpath(OUT), len(html), "bytes; Gamma =", round(GAMMA, 4))


if __name__ == "__main__":
    main()
