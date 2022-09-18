// @flow

import type { Episode } from "./types"

import { parseVideos } from "./ingestion"
import { expect, is, test } from "@benchristel/taste"

const pipe: $ComposeReverse = ((...fns) => {
  return fns.reduce(rcompose)
}: any)

export const campaigns: Array<Episode> = map(
  pipe(parseVideos, (v) => ({ videos: v }))
)([
  `
    EzkW6jKQVeU 2:30:52 Delta Green: Divergence S1
    3Lsz_ay4TH4 1:54:09 Delta Green: Divergence S2
    9GpsZRBSE34 2:36:55 Delta Green: Divergence S3
    _X1jCSLs2J0 2:14:34 Delta Green: Divergence S4
    FddCpQajP44 2:29:11 Delta Green: Divergence S5
    clQHsGNjkIA 2:29:13 Delta Green: Divergence S6
    Vxlv7xn1W1k 2:24:42 Delta Green: Divergence S7
    FF6RADukj0A 2:37:51 Delta Green: Divergence S8
    fCQkP92eDKU 2:12:39 Delta Green: Divergence S9
    kGORUIIf9SY 2:09:16 Delta Green: Divergence S10
    f0FdZ9415vQ 2:11:17 Delta Green: Divergence S11
    Wo9EeHkRYic 2:33:35 Delta Green: Divergence S12 Finale
  `,
  `
    H5XhbsyaGpU 1:49:02 Dune: Adventures in the Imperium: Session 0
    GiDhUY2ev0k 2:30:23 Dune: Adventures in the Imperium: Session 1
    otkQjSbc58I 2:17:21 Dune: Adventures in the Imperium: Session 2
    mXhwDnH26fA 1:46:01 Dune: Adventures in the Imperium S3
    HBbaDXh5pJU 2:29:23 Dune: Adventures in the Imperium S4
    cVh8eE3eXq4 2:24:50 Dune: Adventures in the Imperium S5
    SjRbxQ7916g 2:22:18 Dune: Adventures in the Imperium S6
    4QccnZGaoVY 2:14:25 Dune: Adventures in the Imperium S7
  `,
  `
    uCjkjfrfJf4 2:20:33 Impulse Drive: Coriolis S1
    oPTcSSmAwCs 2:31:03 Impulse Drive Coriolis S2
    Irqbd85GqCw 2:25:10 Impulse Drive Coriolis S3
    GRUg4Je7BI0 2:43:07 Impulse Drive Coriolis S4
    Prils-YcoL0 2:48:03 Impulse Drive Coriolis S5
    v7ij7h_AQUA 2:17:24 Impulse Drive: Coriolis S6
    R_YLAeEFH0o 2:47:58 Impulse Drive: Coriolis S7
    gOdngi2QiCA 2:49:47 Impulse Drive Coriolis S8
    WhgbZ3LhMqw 2:58:07 Impulse Drive Coriolis S9
    s3tdyQ0NRco 2:37:20 Impulse Drive: Coriolis 10
    brkDAgEOUuk 2:55:30 Impulse Drive: Coriolis 11
  `,
  `
    CZ5UdIvyRxM 2:37:11 Free from the Yoke S1
    XPoonUZId8c 2:34:09 Free from the Yoke S2
    pXo19v_ikhc 2:58:47 Free from the Yoke S3
    aaqZJYaSf3M 2:42:45 Free from the Yoke S4
    2F0dL29cY1I 2:06:50 Free from the Yoke S5
    P7p71B6K1q0 2:25:44 Free from the Yoke S6
    gqPlZnIbtEI 2:29:07 Free from the Yoke S7
    j49xi7EsiOU 2:36:08 Free from the Yoke S8
    0MS6BqeTAxM 3:33:24 Free from the Yoke S9 Finale
  `,
  `
    OhT7etJ5V4I 2:37:40 Free from the Yoke: Firebird Suite Session 0
    xelc4GPmOZg 1:58:35 Free from the Yoke: Firebird Suite Session 1
    CLz1T2KhjNM 2:12:07 Free from the Yoke: Firebird Suite Session 3
    flpoLCVxOoo 2:31:52 Free from the Yoke: Firebird Suite Session 4
    nvTLkYd70PY 2:35:27 Free from the Yoke: Firebird Suite S7
    3pnhmA6h43I 2:49:39 Free from the Yoke: Firebird Suite S8
  `,
  `
    Uhy9kHa4Uls 2:54:57 The Sprawl RPG (Session One)
    tpyNSro9ycA 2:03:18 The Sprawl RPG (Session Two)
    jalJPCbh1R8 1:48:06 The Sprawl RPG (Session Three)
    -RmPE_iGhRU 3:35:26 The Sprawl RPG (Session Four)
    kCW4HZxTnis 2:28:29 The Sprawl RPG (Session Five)
    3mwZDZPgZEM 2:55:02 The Sprawl RPG (Session Six)
    HquKcaC1Q-A 1:51:15 The Sprawl RPG (Session Seven)
    4YGKRmsVSRs 2:21:33 The Sprawl (Session Eight)
    iNpTUnTzXsk 1:43:19 The Sprawl (Session Nine)
    wTj4madkSto 2:46:02 The Sprawl (Session Ten)
  `,
  `
    L7kbKOy7cH8 2:42:31 Hearts of Wulin: Gauntlet Sunday (1 of 4)
    _60X91dDNIY 2:52:36 Hearts of Wulin: Gauntlet Sunday (2 of 4)
    f0oikEVArxI 2:46:26 Hearts of Wulin: Gauntlet Sunday (3 of 4)
    P47_lDETRnI 3:03:11 Hearts of Wulin: Gauntlet Sunday (4 of 4)
    `,
  `
    R5qdFDweDqY 2:27:56 Hearts of Wulin PbtA: White River (1 of 2)
    CiU22zj99uo 2:16:01 Hearts of Wulin PbtA: White River (2 of 2)
    `,
  `
    A0FAyUG7vXs 2:41:20 Hearts of Wulin: Gauntlet Quarterly Book One S1
    obz3lKz8Gic 2:26:31 Hearts of Wulin: Gauntlet Quarterly Book One S2
    suJQ1vg6w6c 2:27:11 Hearts of Wulin: Gauntlet Quarterly Book One S3
    d6wgXsZ042o 2:38:16 Hearts of Wulin: Gauntlet Quarterly S4 Book Two
    zhOGaaWB6RQ 2:37:41 Hearts of Wulin: Gauntlet Quarterly S5 Book Two
    cvcWhMHSXpo 2:24:41 Hearts of Wulin: Gauntlet Quarterly S7 Book Two
    x8TqzySgPeM 2:20:01 Hearts of Wulin: Gauntlet Quarterly S8 Book Three
    Gv5toThs7jc 2:36:45 Hearts of Wulin: Gauntlet Quarterly S9 Book Three
    d6jfe7od7cA 2:19:36 Hearts of Wulin: Gauntlet Quarterly S10 Book Three
    HYpuQ161cq4 2:19:41 Hearts of Wulin: Gauntlet Quarterly S11 Book Three
    VcU8trxw4xU 2:47:41 Hearts of Wulin: Gauntlet Quarterly S12 Book Three
    `,
  `
    jISdydvzlfU 2:44:41 Hearts of Wulin: Gauntlet Sunday (1 of 4)
    h5ssiUM1WZk 2:40:46 Hearts of Wulin: Gauntlet Sunday (2 of 4)
    d8HkZs0b00M 2:40:45 Hearts of Wulin: Gauntlet Sunday (3 of 4)
    qwqIXjESREE 2:58:15 Hearts of Wulin: Gauntlet Sunday (4 of 4)
    `,
  `
    ufx5ASuHaiE 3:39:20 Hearts of Wulin: Black Gardens: Gauntlet Con '18
    `,
  `
    Z3bpHqPN3Ik 3:43:15 Hearts of Wulin: Green Mountain: Gauntlet Con '18
    `,
  `
    W9-rIu9x9UU 3:48:47 Hearts of Wulin: Red City: Gauntlet Con '18
    `,
  `
    P7WebLz885U 2:23:10 Hearts of Wulin: Gauntlet TGIT (1 of 2)
    SAZ-7K0yPPA 2:46:00 Hearts of Wulin: Gauntlet TGIT (2 of 2)
   `,
  `
    K0HyNuFsqF4 2:38:06 Hearts of Wulin: Podcaster Edition (1 of 3)
    1nTcKF1rOdU 2:15:46 Hearts of Wulin: Podcaster Edition (2 of 3)
    L4nlF9vEAgI 2:31:41 Hearts of Wulin: Podcaster Edition (3 of 3)
   `,
  `
    GER1LoK6op8 2:32:07 Hearts of Wulin: Song of Sorrows: Gauntlet TGIT (1 of 3)
    S2TUFCEtqXg 2:42:46 Hearts of Wulin: Song of Sorrows: Gauntlet TGIT (2 of 3)
    0VWOnAGpJaI 2:50:52 Hearts of Wulin: Song of Sorrows: Gauntlet TGIT (3 of 3)
    `,
  `
    k3rhMGLWl4w 2:45:35 Hearts of Wulin: Deadly Harmony (1 of 8)
    3eyFbu4XttQ 2:35:21 Hearts of Wulin: Deadly Harmony (2 of 8)
    dPoNN8_amfs 2:18:42 Hearts of Wulin: Deadly Harmony (3 of 8)
    YpHsIWL41R4 2:30:15 Hearts of Wulin: Deadly Harmony (4 of 8)
    oXKacaCtYbA 2:45:34 Hearts of Wulin: Deadly Harmony (5 of 8)
    qkxuhON_Z-s 2:35:25 Hearts of Wulin: Deadly Harmony (6 of 8)
    `,
  `
    PXedKEo7qA4 2:30:32 Hearts of Wulin: Court of Shadows (1 of 4)
    GVLzgWkn9zc 2:50:32 Hearts of Wulin: Court of Shadows (2 of 4)
    Fz_dMcIESmQ 2:45:11 Hearts of Wulin: Court of Shadows (4 of 4)
    `,
  `
    JWhnIS00-VE 3:30:58 Hearts of Wulin: Encounters of a Spooky King: GCOG
    `,
  `
    ZnJwmCCkOKg 2:07:04 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S1
    J0Y5xodNhH0 2:34:22 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S2
    cCxuSdf92v0 2:36:08 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S3
    cCxuSdf92v0 2:36:08 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S3
    `,
  `
    iQsi3ocGOuY 2:11:44 Hearts of Wulin: Numberless Secrets S1
    JL5MxMNgqms 1:55:59 Hearts of Wulin: Numberless Secrets S2
    P9fFAmPIDHs 2:23:40 Hearts of Wulin: Numberless Secrets S3
    AvtgD8yFn0Y 2:17:53 Hearts of Wulin: Numberless Secrets S5
    wD9XB8zYpq4 2:51:54 Hearts of Wulin: Numberless Secrets S6
    DOqY5rG5qOI 2:06:11 Hearts of Wulin: Numberless Secrets S7
    `,
  `
    FJRoD4IUtPA 3:22:46 Hearts of Wulin: Wedding of Jade and Sorrow
    `,
  `
    ZmFDOy221RM 3:49:19 Hearts of Wulin: Wedding of Petals and Steel GCOG
    `,
  `
    sBjnjElrji4 3:28:05 Hearts of Wulin: Tournament of Blood GCOG
    `,
  `
    n_PsGkMPBP8 3:17:57 Hearts of Wulin: Tournament of Sorrow GCOG
    `,
  `
    7f1mvt_0EhY 3:22:46 Hearts of Wulin: Tournament of Vengeance GCOG
    `,
  `
    479m9fl2IJ8 2:05:45 Hearts of Wulin: Wedding of Shadow and Gold Pt 1
    _h5Fgj2YSNo 2:16:45 Hearts of Wulin: Wedding of Shadow and Gold Pt 2
    `,
  `
    Fhd9UTJmJAs 2:05:30 Hearts of Wulin: Wrath of the Shark Finger Princess (1 of 2)
    qTjnm8BddPs 2:42:11 Hearts of Wulin: Wrath of the Shark Finger Princess (2 of 2)
    `,
  `
  -SCjnpy_FwI 2:05:06 Hearts of Wulin: New Vengeance of the Shark Finger Princess (1 of 2)
  3ghW-OI5uxc 2:39:46 Hearts of Wulin: New Vengeance of the Shark Finger Princess (2 of 2)
    `,
  `
  Lt8-894QKdk 2:12:07 Hearts of Wulin: The Bride with Pearl Nails S1
  m4MO1sGcaS4 2:17:59 Hearts of Wulin: The Bride with Pearl Nails S2
  D7ugxCVnPoE 2:20:21 Hearts of Wulin: The Bride with Pearl Nails S3
  `,
  `
  iRhnx4lI6TA 3:45:12 The Chain of Acheron: Ep. 1 - Red Sky at Morning | Matt Colville's D&D Campaign
  71B8BKHAYAY 3:17:48 The Chain of Acheron: Ep. 2 - Soldier Take Warning | Matt Colville's D&D Campaign
  V3QTjri2tAE 4:03:16 The Chain of Acheron: Ep. 3 - Sailors on the Sea of Stars | Matt Colville's D&D Campaign
  XEVGztx2VcU 3:22:29 The Chain of Acheron: Ep. 4 - The Dark Dream | Matt Colville's D&D Campaign
  Y3jZgnAdt2M 2:41:57 The Chain of Acheron: Ep. 5 - The God Factor | Matt Colville's D&D Campaign
  2fXNVuYkdeI 2:08:44 The Chain of Acheron: Ep. 6 - The Changeling | Matt Colville's D&D Campaign
  hk1uB5iVbuo 1:24:32 The Chain of Acheron: Ep. 7 - The HRP Broad Sword | Matt Colville's D&D Campaign
  9PalEIz7aqM 5:18 We Have A Second Channel For The Livestream!
  iS1XLx3wNoY 4:35:01 The Chain of Acheron: Ep. 8 - Arrival | Matt Colville's D&D Campaign
  a7hilOdo8Q4 3:53:26 The Chain of Acheron: Ep. 9 - At The Sign of the Dreaming Pharaoh | Matt Colville's D&D Campaign
  LhIirIjkYss 3:12:12 The Chain of Acheron: Ep. 10 - The Underdark Job, Pt. 1 | Matt Colville's D&D Campaign
  yYZkgAgx41c 2:58:23 The Chain of Acheron: Ep. 11 - The Underdark Job, Pt. 2 | Matt Colville D&D Campaign
  QXhAc9X-FXc 3:39:41 The Chain of Acheron: Ep. 12 - The Mad God's Pawns | Matt Colville's D&D Campaign
`,
  `
  4SutsOre2A8 3:51:04 Exodus: Traveller E00 - Character Creation
  fcGxsjSabX4 4:12:32 Exodus: Traveller 2e E01
  z66k8gHWOWE 3:50:10 Exodus: Traveller 2e E02
  6sWeAVGZGqg 4:01:14 Exodus: Traveller 2e E03
  IPSNjig4AR0 3:47:36 Exodus: Traveller E04
  HHfFbagdX5s 3:25:18 Exodus: Traveller #05
  4zWNYaHySQw 2:55:28 Exodus: Traveller E06
  6nfDUrj0B4c 3:33:25 Exodus: Traveller (Mongoose) E07
  WyM6MAPMpLQ 3:07:29 Exodus: Traveller E08
  98H_OgZUIGE 2:26:34 Exodus: Mongoose Traveller E009
  hpxc_aJd7io 2:42:29 Exodus: Traveller 2nd Ed E10
  wZkU6D1VVOA 2:52:24 Exodus: Traveller 2nd Ed E11
  6IRxMutp1Gg 2:41:00 Exodus: Traveller 2nd Ed E12
  OtFuP9UqoJM 2:49:58 Exodus: Traveller E13
  uDsGTh_X42o 1:18:21 Happy Jacks RPG Advice Show 25-16: Mongoose Traveller Debrief & More!
`,
  `
  xIXnNbjW-Mo 3:01:29 The Drop - Traveller 2E Episode 1 #ttrpg #ActualPlay
  6jwSMvO_Jbg 3:04:34 The Drop - Traveller (inspired) E02 #ttrpg #actualplay
  KrcmimdjXtg 3:11:42 The Drop - PBTTraveler E03 #ttrpg #actualPlay
  D6LyQDG-G0M 3:24:29 The Drop - Traveller-ish S1E4 #actualplay #ttrpg
  sxdUzV9LJn0 3:10:05 The Drop - a Traveller-like system #ttrpg #Actualplay
  4F0ssH16H5U 3:04:58 The Drop: ?!? System #06 #ttrpg #actualplay
  lLBMyBHehhE 2:56:16 The Drop - A RPG playtest S1E7 #ttrpg #actualplay #rpg #playtest
  P2A8a3OvBw8 2:54:08 The Drop: A TDS Actual Play E08 #ttrpg #actualplay #HappyJacksRPG
  8KOsFYl-KRc 2:30:20 The Drop - Traveller PBTA E9 #ttrpg #actualplay #happyjacksrpg
  rKHcqWCzv6c 3:08:12 The Drop - TDS system E10 #ttrpg #tabletop #actualplay #happyjacks
  OhyE3KWinVs 2:55:35 The Drop S1E11
  pO9D0OJgMOw 3:22:30 The Drop - S1E12
  i52np8TCKC0 3:44:53 The Drop - S1E13
`,
  `
  Te_S39tovOQ 3:35:01 Yuma Station: Traveller 2.0 E00 #ttrpg #actualplay #SPACE
  qPnM-htzLFM 3:05:38 Yuma Station: Traveller 2.0 E01 #ttrpg #actualplay #SPACE
  ZK9T6DHeSYE 3:13:26 Yuma Station E02 Traveller 2.0 #RPG #actualplay #space
  at2HNoOtta4 3:26:47 Yuma Station E03 Traveller 2.0 #RPG #actualplay #space
  kjATr5VKbxQ 3:19:10 Yuma Station E04 Traveller 2.0 #RPG #actualplay #space
  7xWQrOfdYLE 2:59:36 Yuma Station E05 Traveller 2.0 #RPG #actualplay #space
  opx9P2Mwe1g 3:03:11 Yuma Station E06 Traveller 2.0 #RPG #actualplay #space
  C33CICWeDEA 3:32:20 Yuma Station E07 Traveller 2.0 #RPG #actualplay #space
  T-s6kbYoru0 3:30:25 Yuma Station E08 Traveller 2.0 #RPG #actualplay #space
  88g4UFocjiU 3:12:27 Yuma Station E09 Traveller 2.0 #RPG #actualplay #space
  Z1WMHntvhrI 3:29:38 Yuma Station E10 Traveller 2.0 #RPG #actualplay #space
  YeolxRgm6fQ 3:26:08 Yuma Station E011: Mongoose Traveller 2
  OCwRucjdgXU 3:25:04 Yuma Station E012: Mongoose Traveller 2 #rpg #actualplay #space
  pqm35a8qJFQ 3:07:15 Yuma Station E013: Mongoose Traveller 2 #rpg #actualplay #SPACE!
  Rp90P0YnTNw 3:21:51 Yuma Station E014: Mongoose Traveller 2 #rpg #actualplay #SPACE!
  o1bRtPDJJQ4 3:41:42 Yuma Station E015: Mongoose Traveller 2 #rpg #actualplay #SPACE!
`,
  `
  IMJ3jil7v9k 1:41:21 Cyberpunk RED - Night City Highs Episode 1
  ZNnlsGA6Svc 1:35:52 Cyberpunk RED - Night City Highs Episode 2
  65SLl_nR1vk 1:42:18 Cyberpunk RED - Night City Highs Episode 3
  ko0YfFkXwNw 1:44:49 Cyberpunk RED - Night City Highs Episode 4
  EVooDwWqr20 1:36:27 Cyberpunk RED - Night City Highs Episode 5
  0ToeczITRbY 1:56:35 Cyberpunk RED - Night City Highs Episode 6 - Finale
`,
  `
  oJCuAtoD_94 2:02:01 Dune RPG - Sietch Abbikat Session 0 - Modiphius 2d20 Actual Play
  UDGQBk4v2IQ 2:08:02 Dune RPG - Sietch Abbikat Session 1 - Modiphius 2d20 Actual Play
  mhvFuUv01l0 1:52:24 Dune RPG - Sietch Abbikat Session 2 - Modiphius 2d20 Actual Play
  f4LZ2m0JvQQ 1:43:55 Dune RPG - Sietch Abbikat Session 3 - Modiphius 2d20 Actual Play
  dM8Q6tn2U-c 2:04:21 Dune RPG - Sietch Abbikat Session 4 - Modiphius 2d20 Actual Play
  H7UFjOv7dmU 1:58:28 Dune RPG - Sietch Abbikat Session 5 - Modiphius 2d20 Actual Play
  FqhFrqTwQDw 2:13:07 Dune RPG - Sietch Abbikat Session 6 Finale - Modiphius 2d20 Actual Play
`,
  `
  I51_ydzurVI 2:28:05 RenSpace Episode 0 - Mongoose Traveller 2e Actual Play
  WSPfmvbhH7Q 2:35:03 RenSpace Episode 1 - Mongoose Traveller 2e Actual Play
  k3LPeO0ZIVw 2:46:38 RenSpace Episode 2 - Mongoose Traveller 2e Actual Play
  om-TZd5nDUg 2:16:01 RenSpace Episode 3 - Mongoose Traveller 2e Actual Play
`,
  `
  FRl2bVTYDec 2:14:41 Dune RPG - Modiphius - Character and House Creation
  ro3P954Laps 2:24:06 Dune RPG - Modiphius - House Dargush - Session 1
  W_rBjdjMI6o 2:30:18 Dune RPG - Modiphius - House Dargush - Session 2
  K9V6gOnFmQk 2:48:45 Dune RPG - Modiphius - House Dargush - Session 3
  -GhuT7WZNVY 3:05:54 Dune RPG - Modiphius - House Dargush - Session 4
`,
  `
  chDEoS0Y_eQ 2:33:18 Feudal Stars Episode 1 - Mongoose Traveller 2e Actual Play
  8F2iXsDv9J4 2:43:31 Feudal Stars Episode 2 - Mongoose Traveller 2e Actual Play
  QzBoS4Fw3Hg 2:09:48 Feudal Stars Episode 3 - Mongoose Traveller 2e Actual Play
  ipwVm2KzG24 2:24:09 Feudal Stars Episode 4 - Mongoose Traveller 2e Actual Play
  KEqERZcXRrA 2:40:34 Feudal Stars Episode 5 - Mongoose Traveller 2e Actual Play
  KHgon9qXkic 2:12:28 Feudal Stars Episode 6 - Mongoose Traveller 2e Actual Play
  IfaerRrQDKw 1:50:01 Feudal Stars Episode 7 - Mongoose Traveller 2e Actual Play
`,
  `
  1XG6pQAcwSs 1:57:28 Eternal Reaches - Mongoose Traveller - S01E00 - Character Creation
  Gi4JmabZsuE 2:04:12 Eternal Reaches - Mongoose Traveller - S01E00.5 - Team Creation
  TWmtSgepZvY 2:01:25 Eternal Reaches - Mongoose Traveller - S01E01 - Journey to Kusk
  vxphHk-fsaQ 1:42:09 Eternal Reaches - Mongoose Traveller - S01E02 - Trouble at Outpost 31
  cBOG73KpcZ8 1:53:40 Eternal Reaches - Mongoose Traveller - S01E03 - Friend or Foe
  krFI8NQ9iwQ 2:05:42 Eternal Reaches - Mongoose Traveller - S01E04 - Lesser Lifeforms
  Ri4pxtoiV9o 2:08:14 Eternal Reaches - Mongoose Traveller - S01E05 - Fundamental Reclamation
  xvB9EPihCtY 1:47:30 Eternal Reaches - Mongoose Traveller - S01E06 - All Hail the Reclaimator!
  Fzn23u3cUNs 1:52:19 Eternal Reaches - Mongoose Traveller - S01E07 - Out of the Frying Pan
`,

  `
  IHQWptPSg0Y 1:54:01 Star Trek: Morpheus Session 0 Part 1 - Galaxy Creation - Star Trek Adventures
  TUoYiVmiVlc 2:20:44 Star Trek: Morpheus Session 0 Part 2 - Character Creation - Star Trek Adventures
  6eLyegkkqRI 1:59:57 Star Trek: Morpheus S01E01 - Star Trek Adventures - Lacuna Colony
  2q1Fadk1bI8 2:21:48 Star Trek: Morpheus S01E02 - Star Trek Adventures - Lacuna Colony Part 2
  lo08qR08Fis 1:58:38 Star Trek: Morpheus S01E03 - Star Trek Adventures - Primogeniture Part 1
  Me2UUQ01N0M 2:04:44 Star Trek: Morpheus S01E04 - Star Trek Adventures - Primogeniture Part 2
  Y96Wt3QGeMc 1:58:46 Star Trek: Morpheus S01E05 - Star Trek Adventures - Primogeniture Part 3
  oJuLk1IysvM 1:40:44 Star Trek: Morpheus S01E06 - Star Trek Adventures - Primogeniture Part 4
  Jbapv81KZNw 2:07:03 Star Trek: Morpheus S01E07 - Star Trek Adventures - Primogeniture Part 5
  fki98cpK7GM 1:53:58 Star Trek: Morpheus S01E08 - Star Trek Adventures - Waste of Time Part 1
  7uDHW0MJbn8 1:40:00 Star Trek: Morpheus S01E09 - Star Trek Adventures - Waste of Time Part 2
  Na9BYg0pwlk 2:07:32 Star Trek: Morpheus S01E10 - Star Trek Adventures - Waste of Time Part 3
`,
  `
  QG3YFpf17cw 2:46:29 Mothership RPG Actual Play - USCSS Conrad One Shot
  `,
  `
  DAB3ZVEVN0k 4:54:40 Mothership RPG Actual Play - Halloween One-Shot Special!
  `,
  `
  1LXZHOTctms 2:53:20 Mothership RPG Actual Play - It Fell From the Stars
  `,
  `
  ku64lQbTUrc 1:33 Mothership RPG - One Shot Teaser
  `,
  `
  nzNy0Nw36gc 1:33 Mothership RPG Halloween Special Teaser & Giveaway
  `,
  `
  ak6_MTBTGtY 56:05 Mothership RPG - Live Character Creation!
`,
])

test("pipe", {
  "given one function"() {
    const inc = (x) => x + 1
    expect(pipe(inc)(1), is, 2)
  },

  "given two functions"() {
    const inc = (x) => x + 1
    expect(pipe(inc, inc)(1), is, 3)
  },
})

function rcompose<T, U, V>(f: (T) => U, g: (U) => V): (T) => V {
  return (...args) => g(f(...args))
}

function map<T, U>(f: (T) => U): (Array<T>) => Array<U> {
  return (array) => array.map(f)
}
