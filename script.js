/* ═══════════════════════════════════════════════════════════════════
   SERGIO GARCÍA GENÍS — script.js

   ★ HOW TO UPDATE YOUR SITE ★
   Everything is controlled from the five data arrays below.
   You never need to touch index.html or style.css for content.

   FOCUS_AREAS   → Research section: image + description per competency
   THESIS        → Thesis blog: title, abstract, text blocks + figures
   PROJECTS      → Work experience cards
   FUTURE_WORK   → Upcoming papers and research lines
   GALLERY       → Photo grid at the bottom
═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ╔════════════════════════════════════════════════════════════════╗
   ║  1 · RESEARCH FOCUS AREAS                                    ║
   ║                                                              ║
   ║  image  → relative path, e.g. "assets/research/dhm.jpg"      ║
   ║           leave "" to show the emoji placeholder              ║
   ╚════════════════════════════════════════════════════════════════╝ */
const FOCUS_AREAS = [
  {
    title: 'Digital Holographic Microscopy',
    image: 'assets/research/blood_cell_3D_visible_.png',           // ← e.g. "assets/research/dhm_fringes.jpg"
    imageAlt: 'Off-axis DHM interference fringe pattern',
    emoji: '◌',
    desc: 'Design and implementation of telecentric off-axis DHM systems for quantitative phase imaging (QPI). Phase resolution of 0.07 rad (≈λ/90), enabling sub-wavelength discrimination of nano-structures.',
    tags: ['DHM', 'QPI', 'Off-axis', 'Telecentric'],
  },
  {
    title: 'Metasurface Characterisation',
    image: 'assets/research/phase_map.png',           // ← e.g. "assets/research/phase_map.png"
    imageAlt: 'Reconstructed phase map of a dielectric metasurface',
    emoji: '⬡',
    desc: 'Experimental validation of DHM metrological performance on dielectric metasurfaces within the EU-funded DISCAMNIL / NextGenEU project. Precise phase discrimination of sub-wavelength meta-atom arrays.',
    tags: ['Metasurfaces', 'Nanophotonics', 'Metrology', 'DISCAMNIL'],
  },
  {
    title: 'NIR Optical System Design',
    image: 'assets/research/Set-up DHM.png',          
    imageAlt: 'Zemax OpticStudio telecentric system layout',
    emoji: '◎',
    desc: 'Design and alignment of near-infrared optical instruments: telecentric and afocal configurations, Mach–Zehnder geometries, camera-coupled interferometric setups modelled in Zemax OpticStudio.',
    tags: ['NIR', 'Zemax', 'Optical Design', 'Interferometry'],
  },
  {
    title: 'Computational Phase Retrieval',
    image: 'assets/research/propagation_method.png',           // ← e.g. "assets/research/phase_unwrap.jpg"
    imageAlt: 'Phase unwrapping and reconstruction result',
    emoji: '≋',
    desc: 'Hologram reconstruction pipelines: angular spectrum propagation, Fourier filtering, automatic phase-aberration compensation with Zernike fitting, and phase unwrapping. Implemented in MATLAB and Python.',
    tags: ['MATLAB', 'Python', 'Angular Spectrum', 'Phase Retrieval'],
  },
];


/* ╔════════════════════════════════════════════════════════════════╗
   ║  2 · THESIS BLOG POST                                        ║
   ║                                                              ║
   ║  THESIS.sections is an array of content blocks:              ║
   ║                                                              ║
   ║  Text block:                                                 ║
   ║    { type:'text', heading:'...', body:'...' }                ║
   ║                                                              ║
   ║  Single figure:                                              ║
   ║    { type:'figure', src:'assets/thesis/img.jpg',            ║
   ║      alt:'...', label:'Fig. 1', caption:'...' }              ║
   ║                                                              ║
   ║  Two figures side by side:                                   ║
   ║    { type:'figure-row', figures:[                            ║
   ║        { src:'...', alt:'...', label:'Fig. 2a', caption:'...'},║
   ║        { src:'...', alt:'...', label:'Fig. 2b', caption:'...'},║
   ║    ]}                                                        ║
   ║                                                              ║
   ║  Leave src:'' to show a placeholder slot.                    ║
   ╚════════════════════════════════════════════════════════════════╝ */
const THESIS = {
  kicker:      'MSc Thesis · University of Valencia · 2024–2025 · Maximum Grade',
  title:       'Design and Implementation of a Digital Holographic Microscopy System in the Near-Infrared',
  supervisors: 'Supervisors: Genaro Saavedra Tortosa · Juan Carlos Barreiro Hervás · PhotonicSensors & Algorithms S.L.',
  abstract:    `This thesis presents the study and implementation of Digital Holographic Microscopy (DHM)
    for the characterisation of biological samples and metasurfaces. DHM enables recovery of the complete
    wavefront diffracted by an object — both amplitude and phase — from a single capture, providing
    quantitative phase measurements and numerical refocusing via digital propagation algorithms.
    The system was implemented in a compound microscope adapted for both the visible and near-infrared
    ranges, enabling the characterisation of complex photonic devices such as metasurfaces.
    Experimental results were compared with theoretical models, establishing a framework for the
    validation and optimisation of future designs. Awarded with maximum grade.`,
 
  sections: [
 
    // ── 1. INTRODUCTION ──────────────────────────────────────────
    {
      type: 'text',
      heading: '1. Introduction & Motivation',
      body: `The inspection of microscopic samples by optical techniques is conventionally based on
      differences in absorption or reflectance, which translate into recordable intensity variations.
      However, many objects of interest — biological cells and nano-structured optical devices alike —
      present nearly constant transmittance, producing featureless images where internal details are
      invisible. This limitation is especially relevant for fresh biological samples and for the
      characterisation of micro- and nano-structured materials and devices.
      <br><br>
      Two parallel developments motivate this work: (i) the need for non-invasive, label-free
      imaging of living cells without the use of staining agents that could alter cellular morphology
      or behaviour; and (ii) the emergence of metasurfaces — two-dimensional arrays of sub-wavelength
      dielectric nano-structures — which can locally control the phase, amplitude, and polarisation of
      light with nanometric precision, but whose characterisation demands wavefront-sensitive techniques.
      Digital Holographic Microscopy (DHM) addresses both challenges by recovering the full complex
      wavefront from a single interferometric capture.`,
    },
 
    // ── 2. CLASSICAL & DIGITAL HOLOGRAPHY ────────────────────────
    {
      type: 'text',
      heading: '2. Mathematical Formalism of Holography',
      body: `The holographic principle was first described by Dennis Gabor in 1948 (Nobel Prize, 1971)
      as a method to overcome spherical aberration in electron microscopes by recording an interference
      pattern — a hologram — between the object-scattered wave and a coherent reference wave, and later
      reconstructing the object optically. The term "hologram" (from the Greek <em>holos</em>, "whole")
      reflects the technique's ability to encode both amplitude and phase of the optical field.
      <br><br>
      In the <strong>off-axis configuration</strong> (Leith &amp; Upatnieks, 1962), the reference beam
      is introduced at a tilt angle θ with respect to the optical axis. Upon recording the intensity
      pattern on a detector, three diffraction orders appear in the Fourier domain: a central DC term
      (order 0) and two laterally displaced conjugate terms (orders +1 and −1). The separation between
      orders scales as |sin θ|/λ and must exceed 3u'<sub>c</sub> (where u'<sub>c</sub> = NA/λM is
      the coherent cut-off frequency of the microscope) to avoid spectral overlap. This condition,
      together with the Nyquist bandwidth of the sensor, defines the operating range of the tilt angle.
      <br><br>
      In <strong>Digital Holography (DH)</strong>, the photographic plate is replaced by a CMOS or
      CCD sensor, enabling numerical reconstruction: the recorded intensity is Fourier-transformed,
      the +1 order is isolated with a circular filter, back-propagated to the object plane, and the
      complex argument of the resulting field yields the quantitative phase map — the basis of QPI.`,
    },
 
    {
      type: 'figure-row',
      figures: [
        {
          src:     'assets/thesis/fig1a.png',   // ← assets/thesis/fig1a_hologram_recording.jpg
          alt:     'Off-axis hologram recording scheme',
          label:   'Fig. 1a',
          caption: 'Recording scheme: object beam + tilted reference beam interfere on the sensor plane (off-axis configuration).',
        },
        {
          src:     'assets/thesis/fig1b.png',   // ← assets/thesis/fig1b_orders_fourier.jpg
          alt:     'Diffraction orders in Fourier domain',
          label:   'Fig. 1b',
          caption: 'Fourier-domain layout of the three diffraction orders. The +1 order is isolated for reconstruction.',
        },
      ],
    },
 
    // ── 3. DHM IN A COMPOUND MICROSCOPE ──────────────────────────
    {
      type: 'text',
      heading: '3. Digital Holographic Microscopy — Telecentric Configuration',
      body: `In DHM, a compound microscope (objective + tube lens) is inserted between the sample
      and the sensor, providing the lateral magnification M = −f<sub>TL</sub>/f<sub>obj</sub> required
      to resolve microscopic features. The microscope objective acts as a low-pass spatial filter with
      coherent cut-off frequency u<sub>c</sub> = NA/λ, which limits the spectral content of each
      diffraction order and enables their separation in the Fourier domain.
      <br><br>
      A key artefact in conventional DHM is a spurious quadratic phase curvature introduced by the
      tube lens when it is not placed at its focal distance from the objective's rear pupil. The
      <strong>telecentric-afocal configuration</strong> — where the objective's image focal plane
      coincides with the tube lens's object focal plane (l = f<sub>TL</sub>) — eliminates this
      wavefront curvature entirely (C → ∞), yielding a flat phase background that is essential for
      accurate QPI. Any residual curvature from mechanical imperfections can be further suppressed
      by normalising the reconstructed field with a blank background hologram.`,
    },
 
    {
      type: 'figure',
      src:     'assets/thesis/fig2.png',   // ← assets/thesis/fig2_telecentric_scheme.jpg
      alt:     'Telecentric-afocal DHM configuration scheme',
      label:   'Fig. 2',
      caption: 'Telecentric-afocal compound microscope configuration. The objective image focal plane and tube lens object focal plane coincide, eliminating the quadratic phase curvature at the sensor.',
    },
 
    // ── 4. EXPERIMENTAL SETUP ─────────────────────────────────────
    {
      type: 'text',
      heading: '4. NIR DHM — Experimental Setup',
      body: `The system uses a <strong>Mach–Zehnder interferometer</strong> as its backbone.
      A fibre-coupled NIR laser (CNIТМ MDL-E-852-25mW, λ = 852 nm) is collimated by an achromatic
      doublet (f = 150 mm) and split by a 70/30 beam splitter (BS1) into object and reference arms.
      Two plane mirrors (M1, M2) and a second beam splitter (BS2) recombine the beams at the sensor.
      <br><br>
      The <strong>object beam</strong> passes through a 5× telescope (to increase illumination
      intensity on the sample), the sample itself, and the telecentric microscope — a
      <strong>Mitutoyo Plan Apo NIR 20×</strong> objective (NA = 0.4, f<sub>obj</sub> = 10 mm)
      coupled to a 200 mm tube lens — before reaching the CMOS sensor.
      The <strong>reference beam</strong> is reflected by M2 and BS2, arriving at the sensor at a
      controlled tilt angle θ, which generates the off-axis carrier fringes.
      The sensor (OnsemiТМ AR2020, 5120 × 3840 px, Δp = 1.4 µm) records the full hologram.
      <br><br>
      The entire alignment procedure was performed first with a He-Ne laser (λ = 632.8 nm) using
      achromatic elements, then repeated with the NIR source, verified at each stage with a shear
      plate interferometer to confirm wavefront flatness. The Abbe resolution limit at 852 nm is
      d<sub>c</sub> = λ/NA ≈ 2.1 µm, well above the Nyquist limit set by the sensor (≈ 0.14 µm),
      confirming that diffraction is the effective resolution constraint.`,
    },
 
    {
      type: 'figure',
      src:     '',   // ← assets/thesis/fig3_setup_photo.jpg
      alt:     'NIR DHM optical bench — experimental setup photo',
      label:   'Fig. 3',
      caption: 'Experimental NIR DHM setup on optical bench. Mach–Zehnder configuration with Mitutoyo 20× NIR objective, 200 mm tube lens, and OnsemiТМ AR2020 CMOS sensor.',
    },
 
    // ── 5. ORDER SEPARATION & OPTIMISATION ───────────────────────
    {
      type: 'text',
      heading: '5. Off-Axis Optimisation — Order Separation',
      body: `Correct off-axis DHM requires the +1 and −1 diffraction orders to be fully separated
      from the DC term in the Fourier domain, without being clipped by the sensor bandwidth.
      The non-overlap condition demands |sin θ| > 3 · NA/M, while the non-clipping condition demands
      |sin θ| ≤ λ/(2A·Δp) − NA/(M·A), where A accounts for the fringe orientation.
      <br><br>
      Optimal bandwidth utilisation is achieved by rotating the sensor so that the carrier fringes
      run at 45° (k<sub>x</sub> = k<sub>y</sub>), maximising the usable filter radius to
      u'<sub>c</sub>. Additionally, a neutral-density filter (ND = 0.65, T ≈ 22%) on the reference
      arm equalises the two beam intensities (I<sub>O</sub> ≈ I<sub>R</sub>), maximising fringe
      visibility (V → 1) and improving the accuracy of automatic +1 order centring.`,
    },
 
    {
      type: 'figure-row',
      figures: [
        {
          src:     '',   // ← assets/thesis/fig4a_orders_overlap.jpg
          alt:     'Fourier spectrum with overlapping orders',
          label:   'Fig. 4a',
          caption: 'Orders overlapping (insufficient tilt): 3u\'c = 0.071 µm⁻¹, order separation = 0.049 µm⁻¹.',
        },
        {
          src:     '',   // ← assets/thesis/fig4b_orders_separated.jpg
          alt:     'Fourier spectrum with separated orders',
          label:   'Fig. 4b',
          caption: 'Correct separation (θ ≈ 7°): order centroid distance = 0.161 µm⁻¹ > 3u\'c.',
        },
      ],
    },
 
    // ── 6. RECONSTRUCTION PIPELINE ───────────────────────────────
    {
      type: 'text',
      heading: '6. Reconstruction Pipeline & Digital Refocusing',
      body: `The reconstruction software, developed in MATLAB®, follows a three-stage pipeline:
      <br><br>
      <strong>(i) Spatial filtering:</strong> The hologram is cropped to N × N pixels and
      Fourier-transformed. A half-plane mask suppresses the −1 order and a circular mask of radius
      2u'<sub>c</sub> suppresses the DC term. The +1 order centroid is located by centre-of-mass
      subpixel fitting, then shifted to the origin (equivalent to removing the reference beam tilt).
      <br><br>
      <strong>(ii) Phase correction:</strong> Any residual linear phase ramp from sub-pixel centring
      errors is corrected by synthesising a conjugate reference beam exp(i2π·Δε·x), as described by
      Castaneda &amp; Doblas (2021). Background hologram normalisation removes the residual quadratic
      curvature, yielding the telecentric field U'<sub>TM</sub>(x).
      <br><br>
      <strong>(iii) Amplitude &amp; phase recovery:</strong> The reconstructed complex field gives
      intensity |U'|² and phase φ = arctan(Im/Re). For samples with phase excursions below 2π,
      no unwrapping is needed. For multi-plane studies, a <strong>digital refocusing</strong> step
      propagates the field numerically using the angular spectrum method (for z'<sub>p</sub> < z'<sub>Ny</sub>)
      or convolution kernel (for z'<sub>p</sub> ≥ z'<sub>Ny</sub>), with autofocus guided by a
      composite loss function L(z') = Var(|U'(x)|) + ΣₓI∇φ(x)I².`,
    },
 
    {
      type: 'figure',
      src:     '',   // ← assets/thesis/fig5_reconstruction_flowchart.jpg
      alt:     'Hologram reconstruction pipeline flowchart',
      label:   'Fig. 5',
      caption: 'Complete reconstruction pipeline: Fourier filtering → +1 order isolation → background normalisation → amplitude and phase recovery.',
    },
 
    {
      type: 'figure-row',
      figures: [
        {
          src:     '',   // ← assets/thesis/fig6a_simulated_hologram.jpg
          alt:     'Simulated USAF-1951 hologram',
          label:   'Fig. 6a',
          caption: 'Simulated off-axis hologram of a USAF-1951 target (Δφ = 1.25 rad, λ = 852 nm).',
        },
        {
          src:     '',   // ← assets/thesis/fig6b_reconstructed_phase.jpg
          alt:     'Reconstructed phase map of simulated hologram',
          label:   'Fig. 6b',
          caption: 'Reconstructed phase map. Phase step matches the design value Δφ introduced in simulation.',
        },
      ],
    },
 
    // ── 7. METROLOGICAL CALIBRATION ──────────────────────────────
    {
      type: 'text',
      heading: '7. Metrological Calibration — USAF-1951 Phase Targets',
      body: `Quantitative validation was performed using BenchmarksTM binary phase USAF-1951
      targets with nominal step thicknesses between 50 nm and 350 nm, characterised independently
      by a PTB-traceable Atomic Force Microscope (AFM).
      <br><br>
      For each target, the reconstructed phase map φ(x; λ) is converted to thickness via
      e(x) = λ·φ / [2π·(n(λ) − 1)], using the manufacturer-certified refractive indices
      n(632.8 nm) = 1.5092 and n(852 nm) = 1.5027.
      The phase step Δφ is extracted by fitting the histogram of each sub-region to a
      double-Gaussian probability density function, whose two centres correspond to the
      plateau phase levels.
      <br><br>
      Results across seven targets show a systematic precision of <strong>σ<sub>φ</sub> = ±0.09 rad
      at 632.8 nm</strong> and <strong>σ<sub>φ</sub> = ±0.07 rad at 852 nm</strong>, corresponding
      to optical path difference sensitivities of λ/80 and λ/90 respectively — consistent with the
      theoretical noise floor of the system.`,
    },
 
    {
      type: 'figure-row',
      figures: [
        {
          src:     '',   // ← assets/thesis/fig7a_usaf_3d.jpg
          alt:     '3D reconstruction of 350 nm USAF target',
          label:   'Fig. 7a',
          caption: '3D surface reconstruction of the 350 nm USAF-1951 phase target at λ = 852 nm.',
        },
        {
          src:     '',   // ← assets/thesis/fig7b_double_gaussian.jpg
          alt:     'Double-Gaussian PDF fit for phase step extraction',
          label:   'Fig. 7b',
          caption: 'Double-Gaussian fit to the phase histogram. Δφ is extracted from the distance between Gaussian centres.',
        },
      ],
    },
 
    {
      type: 'figure',
      src:     '',   // ← assets/thesis/fig8_error_analysis.jpg
      alt:     'Phase measurement error vs AFM reference',
      label:   'Fig. 8',
      caption: 'Deviation of DHM phase measurements from AFM reference values. Mean residual: −0.012 rad at 852 nm; σφ = ±0.07 rad (≈ λ/90).',
    },
 
    // ── 8. QPI RESULTS ───────────────────────────────────────────
    {
      type: 'text',
      heading: '8. QPI Results — Biological Samples & Optical Elements',
      body: `The validated DHM system was applied to three distinct sample types:
      <br><br>
      <strong>Red blood cells (HbA1c test):</strong> Phase maps of erythrocytes showed phase shifts
      in the range 3.2 ± 0.09 rad, consistent with the characteristic range of healthy (non-diabetic)
      individuals (2.94–3.30 rad) as reported in the literature. Diabetic patients show elevated
      phase shifts (3.51–4.01 rad) due to glycation of haemoglobin (HbA1c), which alters the
      intracellular refractive index. This demonstrates the potential of DHM as a rapid, non-invasive
      diabetes screening tool.
      <br><br>
      <strong>Fresnel Zone Plate (FZP):</strong> A millimetre-scale binary FZP fabricated by UV
      photolithography was reconstructed. The measured phase step Δφ<sub>FZP</sub> = 3.14 ± 0.09 rad
      corresponds to an etch depth of 1.27 ± 0.02 µm (n ≈ 1.5), consistent with design specifications.
      The measured zonal radii yielded a focal length f = 2.8 ± 0.1 cm, in agreement with the design.
      Surface defects from the fabrication process were also identified in the phase map.`,
    },
 
    {
      type: 'figure-row',
      figures: [
        {
          src:     '',   // ← assets/thesis/fig9a_rbc_hologram.jpg
          alt:     'Hologram of red blood cells',
          label:   'Fig. 9a',
          caption: 'Recorded hologram of a red blood cell sample.',
        },
        {
          src:     '',   // ← assets/thesis/fig9b_rbc_phase.jpg
          alt:     'QPI phase map of red blood cells',
          label:   'Fig. 9b',
          caption: 'Quantitative phase map of three isolated red blood cells. Phase shift Δφ = 3.2 ± 0.09 rad — within the healthy range.',
        },
      ],
    },
 
    {
      type: 'figure',
      src:     '',   // ← assets/thesis/fig10_fzp_phase.jpg
      alt:     'Phase map and 3D reconstruction of Fresnel Zone Plate',
      label:   'Fig. 10',
      caption: 'Reconstructed phase map and 3D surface of the binary Fresnel Zone Plate. Measured phase step Δφ = 3.14 ± 0.09 rad; focal length f = 2.8 ± 0.1 cm.',
    },
 
    // ── 9. METASURFACE CHARACTERISATION ──────────────────────────
    {
      type: 'text',
      heading: '9. Metasurface Characterisation — Beam Deflectors',
      body: `Dielectric metasurfaces consist of two-dimensional arrays of sub-wavelength dielectric
      nano-pillars acting as effective resonators that locally control the phase of the transmitted
      or reflected wave. By varying the pillar radius across a super-cell, an arbitrary phase profile
      can be imparted to an incident wavefront with sub-wavelength spatial resolution — surpassing
      the capabilities of conventional refractive or diffractive elements.
      <br><br>
      The samples characterised in this thesis are <strong>beam deflectors (BD)</strong> designed by
      PhotonicSensors &amp; Algorithms S.L. using Tidy3D FDTD electromagnetic simulations at
      λ = 850 nm. The design specifies a linear phase ramp of 2π rad per super-cell (period ≈ 21.5 µm),
      redirecting a normally incident plane wave into a single diffraction order.
      <br><br>
      DHM measurements of the fabricated BDs revealed a periodic phase profile with a mean period of
      21.4 µm — matching the nominal design — and a measured phase step of Δφ = 2.11 ± 0.07 rad per
      super-cell. The deviation from the design value of 2π rad and the curvature of the phase ramp
      (rather than the expected linear profile) indicate fabrication imperfections in the nano-pillar
      diameters. These results provide a direct, quantitative feedback for design correction in
      subsequent fabrication iterations, demonstrating DHM as a powerful metrology tool for
      industrial metasurface development within the EU DISCAMNIL project.`,
    },
 
    {
      type: 'figure-row',
      figures: [
        {
          src:     '',   // ← assets/thesis/fig11a_metasurface_design.jpg
          alt:     'FDTD simulation of beam deflector phase profile',
          label:   'Fig. 11a',
          caption: 'FDTD-simulated phase profile for one BD super-cell (Tidy3D, λ = 850 nm).',
        },
        {
          src:     '',   // ← assets/thesis/fig11b_sem_image.jpg
          alt:     'SEM image of fabricated metasurface',
          label:   'Fig. 11b',
          caption: 'SEM image of the fabricated dielectric nano-pillars at the boundary between two BD super-cells.',
        },
      ],
    },
 
    {
      type: 'figure',
      src:     '',   // ← assets/thesis/fig12_metasurface_phase_map.jpg
      alt:     'DHM phase map and profile of beam deflector metasurface',
      label:   'Fig. 12',
      caption: '2D/3D quantitative phase map of a beam deflector chip. Measured phase step Δφ = 2.11 ± 0.07 rad per super-cell (design: 2π rad). Period = 21.4 µm (design: 21.5 µm).',
    },
 
    // ── 10. CONCLUSIONS ──────────────────────────────────────────
    {
      type: 'text',
      heading: '10. Conclusions',
      body: `This thesis has demonstrated that DHM is a robust and versatile technique for
      quantitative phase imaging of both biological samples and advanced optical structures.
      <br><br>
      The telecentric NIR DHM system built and characterised in this work achieves a phase sensitivity
      of <strong>σ<sub>φ</sub> = ±0.07 rad (≈ λ/90)</strong> at 852 nm, confirmed by comparison
      with a PTB-traceable AFM on calibrated phase targets. Applied to red blood cells, the system
      successfully discriminated healthy from diabetic phase ranges without any staining or sample
      preparation. Applied to a Fresnel Zone Plate, it recovered design geometry and etch depth with
      high accuracy. Applied to dielectric metasurface beam deflectors, it provided quantitative
      phase feedback that directly informs the fabrication correction cycle.
      <br><br>
      The reconstruction software — including telecentric background correction, subpixel centring,
      digital refocusing, and autofocus — constitutes an integrated MATLAB® pipeline ready for
      deployment in an industrial R&D metrology context. Future work will focus on extending the
      system to shorter periods and higher phase-step metasurfaces, improving sensitivity through
      phase noise reduction, and publishing the metrological validation results in a peer-reviewed
      journal.`,
    },
 
    // ─── ADD MORE SECTIONS / FIGURES BELOW AS YOUR WORK GROWS ────
    // { type: 'text',   heading: 'Future Work', body: '...' },
    // { type: 'figure', src: 'assets/thesis/new_result.jpg', alt: '...', label: 'Fig. 13', caption: '...' },
  ],
};
 

/* ╔════════════════════════════════════════════════════════════════╗
   ║  3 · PROJECTS & EXPERIENCE                                   ║
   ╚════════════════════════════════════════════════════════════════╝ */
const PROJECTS = [
  {
    date:      'Sep 2025 – Dec 2025',
    title:     'NIR Digital Holographic Microscope — Design & Validation',
    company:   'Photonicsensors & Algorithms S.L. · DISCAMNIL / NextGenEU',
    desc:      `Design and implementation of a telecentric NIR DHM system achieving a lateral phase
                resolution of <strong>0.07 rad (≈λ/90)</strong>. Reconstruction and analysis software
                developed in MATLAB and Python. Experimental validation applied to multiple dielectric
                metasurfaces for advanced material characterisation.`,
    tags:      ['DHM', 'NIR', 'MATLAB', 'Python', 'Metasurfaces', 'EU Project'],
    image:     '',   // ← e.g. "assets/projects/dhm_setup.jpg"
    imageAlt:  'NIR DHM setup on optical bench',
    emoji:     '◌',
  },
  {
    date:      'Feb 2025 – Sep 2025',
    title:     'Research Laboratory Assistant — Optical Systems Validation',
    company:   'Department of Optics · University of Valencia',
    desc:      `Experimental support for advanced optical system characterisation: interferometric
                measurements, optical alignment and performance verification. Active involvement in
                experimental design, data acquisition and simulations. Work culminated in a joint
                Master's Thesis <strong>awarded with maximum grade</strong>.`,
    tags:      ['Interferometry', 'Zemax', 'Optical Alignment', 'LabVIEW'],
    image:     '',   // ← e.g. "assets/projects/lab_uv.jpg"
    imageAlt:  'University of Valencia Optics Laboratory',
    emoji:     '▣',
  },
  // ─── ADD PROJECTS BELOW ──────────────────────────────────────
  // {
  //   date:     'Month Year – Month Year',
  //   title:    'Project Title',
  //   company:  'Institution / Company',
  //   desc:     'Description. <strong>HTML</strong> is allowed.',
  //   tags:     ['Tag1', 'Tag2'],
  //   image:    'assets/projects/img.jpg',
  //   imageAlt: 'Alt text',
  //   emoji:    '◎',
  // },
];


/* ╔════════════════════════════════════════════════════════════════╗
   ║  4 · FUTURE RESEARCH & PUBLICATIONS                          ║
   ║                                                              ║
   ║  status options:                                             ║
   ║    'planned'   → hollow circle                               ║
   ║    'progress'  → filled grey circle                          ║
   ║    'review'    → filled dark circle                          ║
   ║    'published' → solid black circle                          ║
   ╚════════════════════════════════════════════════════════════════╝ */
const FUTURE_WORK = [
  {
    status:      'planned',
    statusLabel: 'Planned',
    year:        '2026',
    title:       'Quantitative Phase Imaging of Dielectric Metasurfaces in the NIR: Metrological Validation',
    venue:       'Target: Optics Express / Optics Letters',
    desc:        `Journal article derived from the MSc thesis. Full experimental characterisation of
                  the NIR DHM system, phase noise analysis, and metrological validation on three
                  metasurface designs. Manuscript in preparation.`,
    links:       [],
    collab:      'Photonicsensors & Algorithms S.L. · University of Valencia',
  },
  {
    status:      'planned',
    statusLabel: 'Planned',
    year:        '2026',
    title:       'Aberration Compensation Strategies in Telecentric Off-Axis DHM',
    venue:       'Target: Journal of Optics',
    desc:        `Comparative study of numerical aberration compensation methods (Zernike fitting,
                  reference subtraction, iterative optimisation) applied to telecentric DHM systems.
                  Benchmarking phase flatness, spatial resolution, and computational cost.`,
    links:       [],
    collab:      '',
  },
  // ─── ADD ENTRIES BELOW ────────────────────────────────────────
  // {
  //   status:      'progress',       // planned | progress | review | published
  //   statusLabel: 'In Progress',
  //   year:        '2026',
  //   title:       'Paper title',
  //   venue:       'Journal / Conference',
  //   desc:        'Short description.',
  //   links: [
  //     { label: 'Preprint', url: 'https://arxiv.org/abs/...' },
  //     { label: 'DOI',      url: 'https://doi.org/...' },
  //   ],
  //   collab: 'Collaborating institution',
  // },
];


/* ╔════════════════════════════════════════════════════════════════╗
   ║  5 · GALLERY                                                 ║
   ║                                                              ║
   ║  Add images to assets/gallery/ then register them here.      ║
   ║  Leave the array empty to show placeholder slots.            ║
   ╚════════════════════════════════════════════════════════════════╝ */
const GALLERY = [
  // { src: 'assets/gallery/dhm_fringes.jpg',    caption: 'Off-axis DHM interference fringes'          },
  // { src: 'assets/gallery/phase_map.jpg',      caption: 'Quantitative phase map — metasurface'        },
  // { src: 'assets/gallery/optical_bench.jpg',  caption: 'NIR DHM optical bench alignment'             },
  // { src: 'assets/gallery/zemax_layout.jpg',   caption: 'Telecentric relay — Zemax OpticStudio'       },
  // { src: 'assets/gallery/meta_sem.jpg',       caption: 'SEM image of dielectric metasurface'         },
  // { src: 'assets/gallery/phase_profile.jpg',  caption: 'Phase profile across meta-atom regions'      },
];


/* ═══════════════════════════════════════════════════════════════════
   RENDERING — do not edit below unless you want to change behaviour
═══════════════════════════════════════════════════════════════════ */

/* ── 1. Focus Areas ── */
function renderFocusAreas() {
  const el = document.getElementById('focus-grid');
  if (!el) return;
  el.innerHTML = FOCUS_AREAS.map((fa, i) => {
    const imgEl = fa.image
      ? `<img src="${fa.image}" alt="${fa.imageAlt}" loading="lazy" />`
      : `<div class="focus-placeholder">${fa.emoji}</div>`;
    const tags = fa.tags.map(t => `<span>${t}</span>`).join('');
    return /* html */`
      <div class="focus-card reveal" style="transition-delay:${i * 0.07}s">
        <div class="focus-image">${imgEl}</div>
        <div class="focus-body">
          <p class="focus-num">${String(i + 1).padStart(2, '0')}</p>
          <h3>${fa.title}</h3>
          <p>${fa.desc}</p>
          <div class="focus-tags">${tags}</div>
        </div>
      </div>`;
  }).join('');
}

/* ── 2. Thesis Blog ── */
function renderThesis() {
  const el = document.getElementById('thesis-post');
  if (!el) return;

  const header = /* html */`
    <header class="thesis-header reveal">
      <p class="thesis-kicker">${THESIS.kicker}</p>
      <h3>${THESIS.title}</h3>
      <p class="thesis-supervisors">${THESIS.supervisors}</p>
      <blockquote class="thesis-abstract">${THESIS.abstract}</blockquote>
    </header>`;

  const body = THESIS.sections.map(renderThesisBlock).join('');

  el.innerHTML = header + body;

  // Attach lightbox click to all thesis figures that have a real src
  el.querySelectorAll('.t-figure[data-src]').forEach(fig => {
    fig.addEventListener('click', () => {
      openLightbox(fig.dataset.src, fig.dataset.caption);
    });
  });
}

function renderThesisBlock(block) {
  if (block.type === 'text') {
    return /* html */`
      <div class="t-section reveal">
        <h4>${block.heading}</h4>
        <p>${block.body}</p>
      </div>`;
  }
  if (block.type === 'figure') {
    return buildFigure(block, true);
  }
  if (block.type === 'figure-row') {
    return /* html */`
      <div class="t-figure-row reveal">
        ${block.figures.map(f => buildFigure(f, false)).join('')}
      </div>`;
  }
  return '';
}

function buildFigure(f, wrapReveal) {
  if (!f.src) {
    return /* html */`
      <div class="t-figure-placeholder${wrapReveal ? ' reveal' : ''}">
        <span>+ Figure</span>
        <span>Set src in THESIS.sections</span>
      </div>`;
  }
  const cls = wrapReveal ? 'class="t-figure reveal"' : 'class="t-figure"';
  const captionFull = `${f.label} — ${f.caption}`;
  return /* html */`
    <figure ${cls} data-src="${f.src}" data-caption="${captionFull}" tabindex="0" role="button" aria-label="Enlarge figure">
      <div class="t-figure-img">
        <img src="${f.src}" alt="${f.alt}" loading="lazy" />
      </div>
      <figcaption>
        <span class="fig-label">${f.label}</span>
        <span class="fig-caption">${f.caption}</span>
      </figcaption>
    </figure>`;
}

/* ── 3. Projects ── */
function renderProjects() {
  const el = document.getElementById('projects-list');
  if (!el) return;
  el.innerHTML = PROJECTS.map(p => {
    const imgEl = p.image
      ? `<img src="${p.image}" alt="${p.imageAlt}" loading="lazy" />`
      : `<div class="project-placeholder">${p.emoji}</div>`;
    const tags = p.tags.map(t => `<span>${t}</span>`).join('');
    return /* html */`
      <article class="project-row reveal">
        <div class="project-image-col">${imgEl}</div>
        <div class="project-body">
          <p class="project-date">${p.date}</p>
          <h3>${p.title}</h3>
          <p class="project-company">${p.company}</p>
          <p>${p.desc}</p>
          <div class="project-tags">${tags}</div>
        </div>
      </article>`;
  }).join('');
}

/* ── 4. Future Work ── */
function renderFutureWork() {
  const el = document.getElementById('future-list');
  if (!el) return;
  el.innerHTML = FUTURE_WORK.map(fw => {
    const links = fw.links && fw.links.length
      ? `<div class="future-links">${fw.links.map(l =>
          `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
        ).join('')}</div>`
      : '';
    const collab = fw.collab
      ? `<p class="future-collab">Collab: ${fw.collab}</p>`
      : '';
    return /* html */`
      <div class="future-row reveal">
        <div class="future-status">
          <span class="status-pip ${fw.status}"></span>
          <span class="status-text">${fw.statusLabel}</span>
        </div>
        <div class="future-content">
          <h3>${fw.title}</h3>
          <p class="future-venue">${fw.venue} · ${fw.year}</p>
          <p>${fw.desc}</p>
          ${links}
          ${collab}
        </div>
      </div>`;
  }).join('');
}

/* ── 5. Gallery ── */
function renderGallery() {
  const el = document.getElementById('gallery-grid');
  if (!el) return;
  if (!GALLERY.length) {
    el.innerHTML = Array(6).fill(0).map(() => /* html */`
      <div class="gallery-empty reveal">
        <span>＋</span>
        <span>assets/gallery/</span>
      </div>`).join('');
    return;
  }
  el.innerHTML = GALLERY.map((img, i) => /* html */`
    <div class="gallery-item reveal" data-index="${i}" tabindex="0" role="button" aria-label="${img.caption}">
      <img src="${img.src}" alt="${img.caption}" loading="lazy" />
      <div class="gallery-caption"><span>${img.caption}</span></div>
    </div>`).join('');

  el.querySelectorAll('.gallery-item').forEach(item => {
    const open = () => {
      const idx = parseInt(item.dataset.index, 10);
      openLightbox(GALLERY[idx].src, GALLERY[idx].caption);
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}

/* ── Lightbox ── */
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-caption').textContent = caption || '';
  lb.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('lb-img').src = '';
}

/* ── Navbar ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 55);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Hamburger ── */
function initHamburger() {
  const btn   = document.getElementById('nav-burger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

/* ── Scroll reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Hero wave canvas ── */
function initWave() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const NUM = 9;
    for (let i = 0; i < NUM; i++) {
      const frac  = i / NUM;
      const amp   = 10 + frac * 30;
      const freq  = 0.007 - frac * 0.0005;
      const speed = 0.004 + frac * 0.002;
      const yBase = H * (0.25 + frac * 0.55);
      const alpha = 0.04 + frac * 0.07;

      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = yBase
          + Math.sin(x * freq + t * speed * 9)  * amp
          + Math.sin(x * freq * 1.8 - t * speed * 5) * (amp * 0.4);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.lineWidth = 0.9;
      ctx.stroke();
    }
    t++;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── Footer year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFocusAreas();
  renderThesis();
  renderProjects();
  renderFutureWork();
  renderGallery();
  initNavbar();
  initHamburger();
  initWave();

  /* Lightbox close */
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* Reveal needs the DOM fully painted */
  requestAnimationFrame(() => requestAnimationFrame(initReveal));
});
