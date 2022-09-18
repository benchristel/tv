// @flow
import type { Episode } from "./types"
import type { Video } from "./types"
import { parseVideos } from "./ingestion"

const pipe: $ComposeReverse = ((...fns) => {
  return fns.reduce(rcompose)
}: any)

function rcompose<T, U, V>(f: (T) => U, g: (U) => V): (T) => V {
  return (...args) => g(f(...args))
}

function map<T, U>(f: (T) => U): (Array<T>) => Array<U> {
  return (array) => array.map(f)
}

export const debuggingVideos: Array<Video> = parseVideos(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
    zBIx-gP-I8c 0:51 Strong Bad Email #1 - Some Kinda Robot
    BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
    wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
    Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`)

export const channel1Videos: Array<Video> = parseVideos(`
    # Running the Game
    e-YZvLUXcR8 1:39 Intro: Running the Game
    zTD2RZz6mlo 12:24 Your First Adventure | Running the Game
    1K8hGhpQzKg 12:38 Your First Session | Running the Game
    jvQXGs8IVBM 34:24 Running Your First Dungeon | Running the Game
    0K9mKpAMREU 23:04 Making Characters | Running the Game
    Ama2wMxq84o 11:05 Why Do We Play D&D? | Running the Game
    nTbD1GJUFC0 13:29 Your Town | Running the Game
    Uw-j-vjEAAo 4:35 Dead Ends | Running the Game
    EHUCi6ZbVxU 11:21 The Sociology of D&D | Running the Game
    aO0HMmrZ4xs 16:15 The DM Screen | Running the Game
    b5pz46kEhIM 23:04 The Deck of Many Things | Running the Game
    LQsJSqn71Fw 19:32 Different Kinds of Players | Running the Game
    EkXMxiAGUWg 17:08 The Sandbox vs the Railroad | Running the Game
    8Q8bVPpc84A 33:43 Catastrophic Failure | Running the Game
    DgPhiLBW7jo 35:47 Alignment | Running the Game
    FUrlRZu2uCc 30:20 Bad Guys! | Running the Game
    YgNQ3NXqqiQ 20:19 Alignment Examples
    jPZZAavOugo 29:51 Random Encounters | Running The Game
    fUCpolL_6Tk 27:28 Miniatures! | Running the Game
    r_hxIv79S30 8:31 Story Vs Adventure | Running The Game
    Xm4EvRUo4YQ 22:00 Information | Running the Game
    4g1KAE0sI-M 23:25 Terrain! | Running the Game
    GvOeqDpkBm8 22:36 Skill Challenges | Running the Game
    NwJxM1ABLJM 30:18 NPCs! | Running the Game
    HpiT6RTlLYc 27:55 Politics 101: The Central Tension | Running the Game
    zYlLTtS-tfQ 23:29 The Politics of Peace | Running the Game
    dqth2dFlIzQ 29:34 High Level NPCs, Followers, and DMPCs | Running the Game
    DWAhcY9QroQ 28:40 Sandboxing! | Running the Game
    QoELQ7px9ws 58:44 Using 4E to Make 5E Combat More Fun | Running the Game
    V2OiQ5ruiGE 17:45 Fantasy vs Fiction | Running the Game
    9XgBVYo1Dek 11:19 Ignorance vs Confusion | Running the Game
    oGAC-gBoX9k 30:39 The West Marches | Running the Game
    j6MLI30n7Ak 6:34 TIME | Running the Game
    gKBAfzQQZNE 7:59 Slog | Running the Game
    4u3DWxPknYU 21:35 Losing | Running the Game
    ZtFfq_yQQR4 32:00 Building Calendars and Tracking Time | Running the Game
    g6w_DRHRDDM 9:38 Verbs! | Running the Game
    _TKFW_Zru_E 14:16 Funhouse Dungeons | Running the Game
    jXYORWtiLF0 32:00 Prepping An Adventure | Running the Game
    21fEFmyekS4 11:58 Cinematics | Running the Game
    HWt0AQWjhPg 19:52 Diplomacy | Running the Game
    QgTIGo6zJbs 30:02 Monkeying With Monsters | Running the Game
    fzI_9WHlUJY 9:05 On Rails, | Running the Game
    O7j1skECRV4 15:37 Surrender, Running the Game #43
    xANZTijbrw8 13:56 Challenge Rating | Running the Game
    icQx5NH_h88 18:44 Undead | Running the Game
    mPbMicg8yqM 19:25 Let's Start In A Tavern! | Running the Game
    4cSHIULQ06M 21:52 Undead Again! | Running the Game
    YDjD0Gjtgik 25:59 Dice Math | Running the Game
    -BZAjzUBYmU 54:11 Vecna & Running Epic Bad Guys | Running the Game
    MtH1SP1grxo 15:41 Pitching Your Campaign | Running the Game
    gINL0sXG27M 50:00 Red Hand of Doom! Running the Game #52
    FP9ejX8Q1l0 23:11 Hobgobglins & Low Level Play! | Running the Game
    RinFvgNdHLs 13:56 Range and Altitude in Three Dimensions | Running the Game
    1IyWfaMmhrM 42:05 Metagaming | Running the Game
    dScrFJdcb5s 8:36 Stealth Checks | Running the Game
    -lEi9DAn9rE 20:30 Problem Players | Running the Game
    UvQ2JgZIjVI 24:34 Making Travel Interesting | Running the Game
    HZe-YKDttGo 6:17 Speeding Up Combat | Running the Game
    4MhCSx9LEZE 13:14 The Monster Wrangler | Running the Game
    4GqBTyXYCJE 14:43 Dead Empires | Running the Game
    9capmKmysAE 27:38 Your First Town | Running the Game
    0MhjHHrfreo 17:01 On Being A Good Player | Running the Game
    kVuF4fkRD2c 30:12 On Being An Evil Character | Running the Game
    262aEO3cWPQ 18:23 Let's Split The Party! | Running the Game
    zKN0xPyxu2Y 15:21 Fudging Die Rolls | Running the Game
    xZdS8lP-Sdo 23:38 Let's Kill A PC! | Running the Game
    BVKRUrBDCGc 22:52 The Dungeon | Running the Game
    FfYItCw00Z4 24:12 Tactics and Strategy | Running the Game
    nHv1EUYkqoM 10:14 Break Your Heart | Running the Game
    eswaBOK1pAs 11:16 Pitching Your Character | Running the Game
    5RvgZ7IEm4g 10:48 The Handout | Running the Game
    31IAzJO-BEA 10:56 Orcs Attack! | Running the Game
    tv1JfBMEm8E 8:02 Onboarding | Running the Game
    JoYR3eCFqoA 10:51 The Wangrod Defense | Running the Game
    jKGcCBnBhuY 8:49 The B Plot | Running the Game
    GKMqxDkc0gY 11:26 Law vs Chaos | Running the Game
    -H3HUG5kiFE 9:48 Betrayal | Running the Game
    kB9iJUSL1xo 16:20 The Politics of War | Running the Game
    2BqKCiJTWC0 12:39 The Local Area | Running the Game
    I-nfsi6B8d4 17:08 Collaborating With A Player | Running the Game
    7YCVHnItKuY 46:40 Roleplaying | Running the Game
    y_zl8WWaSyI 26:20 Action Oriented Monsters | Running the Game
    cGyYxE5moA8 13:52 Inspiration | Running the Game
    2fZWUPxUmYQ 23:12 Downtime | Running the Game
    canhaxHlFg8 9:43 Skill Dogpiling, Running the Game #87
    l1zaNJrXi5Y 14:17 Many Fail States | Running the Game
    OoJMNkgEqKA 20:49 One-on-One D&D, Running The Game #89
    w8xcK69brd8 30:55 Politics V: Black Panther & The Origins of Executive Power | Running The Game
    Fwj9M4qVafE 15:44 Traps!, Running The Game #91
    n-fM9UQIaLE 15:15 The DM is also a Player, Running The Game #92
    KqIZytzzFKU 23:08 Railroading, Agency, and Choice | Running the Game
    _iWeZ-i19dk 18:02 Engaging Your Players | Running the Game
    6St9pH4-16E 21:23 "No." | Running The Game
    i9fTMczJTlg 16:03 Hot Start, Running The Game #93
    OIkwABECfR0 15:11 Language, Not Rules
    7In4ftJddEo 6:41 Why? | Running The Game
    cTp9SdpcvF8 16:06 Everybody Loves Zombies | Running The Game
    N-FKBmI5Wl0 16:31 Oracles, Visions, and Prophecies! | Running the Game
    U_r_Xy1ZRbc 40:36 Running The Game 100

    # Artifexian Worldbuilding
    HwjZwnmqhPk 3:41 Evolution of low mass stars
    PRwn6fftmLU 3:32 The life cycle of Brown Dwarfs
    sy7hHBvMg7U 4:52 Supermassive stars
    x55nxxaWXAM 3:28 How to Build a Star!
    oijt3hnLesY 3:30 What are galaxies?
    NwZ3URDATTY 4:19 The Milky Way and Spiral Galaxies
    5SIWeNVXFrU 3:05 An Open Letter to Elliptical Galaxies
    nGpy4QRtCrU 3:06 Galactic Habitable Zone - 7 considerations
    NVyLgFP2X9o 4:31 Galactic Musings
    sxD1iPCNuqE 4:14 Formation of the Solar System
    J5xU-8Kb63Y 4:40 How to Create a Classical Planetary System
    SCz6JY-24Yo 5:11 Other Planetary Systems
    1nV2ygdKZ3s 6:41 Build your own Tatooine
    mVh84wBCP_s 3:54 Build your own Anti-Tatooine (S-type Planetary Systems)
    IE805Vdm0sk 2:43 Introduction to Multiple-Star Systems
    uCHkm2lV9zY 5:26 Build your own Battlestar Galactica System
    1YaVTWbf0bg 6:02 Lagrange Points and other Trojan Ramblings
    1sM6YBlKgg4 5:43 Perception of the Heavens
    5dTI5LZHO0E 7:21 Weekly Challenge Video Response - Colors
    w-q_7qIR8JY 1:36 Weekly challenge showcase: Color in Librus
    norkDnRhUy8 7:08 Dwarf Planets
    wK3lMcz8zcA 6:36 Gas Giant Myths
    yNYERPMnO3I 6:39 Extrasolar Gas Giants
    bUPypOgNs_A 7:53 The Trouble with Terrestrials
    xlq5Sn3B-fI 8:20 7 (Poké)planet Types
    XEIsZjQ_OdU 4:56 Build your own Dwarf Planet: Physical Characteristics
    80oQBGD7g34 4:23 Build your own Gas Giant: Physical Characteristics
    RxbIoIM_Uck 3:58 Build your own Terrestrial Planet: Physical Characteristics
    Ig_DzmEEJ1M 6:20 What is an Orbit?
    lfY7NOpmClg 6:36 Build your own Orbit (Hot Jupiters)
    qE8WKDmSNNQ 5:01 Other Gas Giant Orbits
    YGw0kQufhgM 5:49 Resonant Dwarf Planet Orbits
    1J4iIBKJHLA 7:15 If Planets Were Donuts
    TrpOJYshfE4 7:38 Orbits For Earth-like Planets
    W_Hzadieo8I 2:57 "Peanut" by Eric Lange | Stories by Worldbuilders
    hG1of0MroM8 10:30 How to Build 1000 Stars
    CItDiuBWP5I 9:32 If Earth had Rings
    J4K3H9aNLpE 8:06 Seasonbuilding 101: Axial Tilt
    t6i6TPsqvaM 10:46 Terrestrial Moons
    Evq7n2cCTlg 12:18 Gas Giant Moon Systems and Habitable Moons
    iTeS2b2IAVY 9:25 Constructing Solar Calendars
    c3EPovK2-Uw 10:00 Constructing Lunar Calendars | Single and Multiple Moons
    _7pHeFtQDpM 10:45 Constructing Lunisolar Calendars
    y3Kb_ik5f-I 8:09 Albedo: Mapping with Temperature
    tXan6Sw_okc 6:43 How To ACTUALLY Design A Flag
    x_Tn66PvTn4 8:37 Fantasy Maps & Plate Tectonics
    yGMKmbGTEHQ 18:02 Fantasy Maps & Plate Tectonics | Tutorial
    9-j_JOWPLj8 8:39 Designing Earth-like Atmospheres
    LifRswfCxFU 9:22 Atmospheric Circulation: Wind, Weather, and Mordor
    fwauz9uIl9M 7:23 Alien Atmospheres: How To Make Plastic Trees
    n_E9UShtyY8 6:54 Ocean Currents: Terrestrial, Waterworld & Tidally Locked Planets
    wsuejZRqus4 8:21 Tides: The Tide-pocalypse & More
    L9MNC45Jr6Q 13:44 SKY & PLANT COLOR ft. Worldbuilding Notes
    5lCbxMZJ4zA 8:47 Worldbuilding: How To Design Realistic Climates 1
    fag48Nh8PXE 7:44 Worldbuilding: How To Design Realistic Climates 2
    JcSu8NfJqvM 11:11 How To Simulate Continental Drift in GPlates
    RNfrYrIl9o8 6:39 Worldbuilding: Climate Zones Of RETROGRADE Planets
    cnKUbcVrZVg 9:42 Worldbuilding: Hot & Cold Planet Climates
    b9qvQspSbWc 10:47 Where Metals Are Found On Fantasy Worlds!
    cqMiMKnYk5E 12:11 How To River
    UIp5F5WVS_8 14:48 If Planets Were Pizzas
    ztemzsxso0U 14:13 Coastal Landforms for Fantasy Mapping
    vPPyDhQ5WHQ 9:26 Glaciers I: Glacial Landsystems & Locations
    LDHlklxH8po 17:15 Glaciation II: What Happens When Glaciers Retreat

    # Hexed Press: Hexcrawls, Hex Maps, & Sandboxes
    DCysDGrD-1Y 15:45 DM Tools: A Rabbit Hole of Wilderness Tables
    q8iGqqye_UI 1:11:13 Hexcrawling 101: Monthly Q&A, AMA 05 -- Let's Chat About Hexcrawls and Noodle in Hextml!
    83YbiVlpkmg 1:13:32 Dungeoncrawling 101, Field Trip 02: Stonehell Megadungeon!
    EAIEIuLFjZ0 1:12:08 Hexcrawling 101: A Few (Map) Generators More
    BpL26_sHFUQ 1:10:58 Dungeoncrawling 101, Field Trip 01: The Caverns of Thracia!
    _Vid0zGIUyY 1:11:21 Hexcrawling 101: A Fistful of Map Generators!
    UQJ_SVJnils 1:08:00 Hexcrawling 101, Class 09: Do We Need Dungeons?
    TZlHVji7NvI 1:22:16 Hexcrawling 101: Monthly Q&A, AMA 04 -- Let's Chat About Hex Crawls and Read Some Random Wisdom!
    25RVfxRwX04 1:06:36 Hexcrawling 101, Class 08: Searching & Discovering Hex Features
    kyf0UcTCX1o 1:07:14 Hexcrawling 101 Lab 03: Let's Flesh Out Our Starting Village!
    iaQSz-2mcgo 37:15 Rulebook Read-Along: Manual of Hexterity by BroadswordBard
    iMXNwKvb-4k 1:01:58 Hexcrawling 101: Monthly Q&A, AMA 03 -- Let's Chat About Hex Crawls and Read Some Random Wisdom!
    erk-T6v2vZM 1:02:47 Rulebook Read-Along: Mass Combat Rules from TSR's AD&D 2E Birthright Setting!
    EyNOqOWNw8Y 1:02:32 Rulebook Read-Along: Domain Play Rules from TSR's AD&D 2E Birthright Setting!
    SqwEpnTJ7Qg 1:15:05 Hexcrawling 101 Lab 02: Let's Add Wandering Monsters to Our Hexcrawl!
    VdLXb_LBh1E 1:08:22 Hexcrawling 101, Class 07: Wandering Monsters
    JAus0haUTA8 1:10:57 Hexcrawling 101, Class 06: Another Hex Starter Kit + Hex Flower Madness from Goblin's Henchmen!
    1ga0S3Ca_fE 1:05:51 Hexcrawling 101 LAB 01: Let's Build a Simple Hexcrawl!
    tcF50OMN3ic 1:05:52 Hexcrawling 101, Class 05: What's the Best Starter Hexmap Setup?
    Hisgu62UyYc 1:11:57 Hexcrawling 101: Monthly Q&A, AMA 02 -- Let's Chat About Hex Crawls and Do Some Hex Noodling
    VHxNnULeJ7U 1:18:31 Hexcrawling 101, Class 04: Player Maps and Translating Hexes into Fiction
    dLlFX3l0W8M 1:04:35 Rulebook Read-Along: "Filling in the Blanks," Populating Hexcrawls by Todd Leback
    dSMNgQ6PuLw 1:03:43 Hexcrawling 101, Class 03: The Art of Getting Lost
    fit7F6Uf7eU 9:00 Hexcrawling 101: Hex Features vs Sub-Hex Features or How to Spot a Feature from a Long Way Away
    Sn-jgMlibHw 6:03 Hexcrawling 101: 1d6 Features Per Hex?
    9jjrcHFBpSU 1:12:38 Hexcrawl 101, Class 02: Why Hexcrawl?
    1rFfQP8eO2k 1:06:02 Hexcrawl 101, Class 01: Basic Structure of Play
    TLhtuYGcF7M 1:07:40 A Sandbox and Hexcrawl Q&A!
    e_R__PsiLHk 1:15:03 Bandit's Keep x Hexed Press 04: Populating Dungeons & Wilderness
    jTrU7OnH3WU 21:00 What Makes a Hexcrawl Experience Different from a Dungeoncrawl?
    K71-wW_r46g 1:03:52 Rulebook Read-Along: A Fistful of TTRPG Idea Generators
    nd0EJ0Zn78Y 1:04:14 Rulebook Read-Along: Hexalege by Fernando Salvaterra
    i9OBGYKTicI 1:11:11 Rulebook Read-Along: The Isle of Glaslyn, A Hexcrawl Adventure for OSE
    s3LQhQqRgPw 1:26:18 Rulebook Read-Along: Sidequest Decks from Inkwell Ideas!
    YDR0pr6vnik 1:02:59 Hexcrawl Tools: Threats from "Beyond the Wall: Further Afield"
    iasi60-4Yh4 1:14:04 Rulebook Read-Along: The One Ring 2nd Edition, Fellowship Phase + Shadow & Hope
    Eo9rDU8or4I 1:17:06 Rulebook Read-Along: The One Ring 2nd Edition, Adventuring Phase
    Kz8IoDS1Wy8 26:38 Hexcrawls: Quickly Create Planet-Scale Hexmaps with "Songs of the Eons" & Worldographer
    aF91Wp7dYjE 1:07:21 Rulebook Read-Along: World Without Number's Campaign Creation Tools, Part 2
    Sk8rA2kDHrM 1:06:06 Rulebook Read-Along: World Without Number's Campaign Creation Tools, Part 1
    h3Zei5STrRo 5:27 Hexcrawling: What is Clever Exploration?
    J8qIt3AKDsc 6:52 DM Tips: Minimalist d20 Hexcrawl Mechanics?
    pbNBqjVSQbU 10:27 Let's Look at the Camping Mechanics from "Don't Worry I've Got A Sword" Blog
    I9hd3hi2w4I 1:13:25 Hexcrawl Tools: "The Wilding Way" Wilderness Rules from "Into the Wyrd & Wild" OSR RPG
    -5pWfath72k 1:01:27 Hexcrawl Tools: Journeys in The One Ring and OSR Wilderness Player Mechanics
    yve2evN4TJg 9:21 Hexcrawl Tools: D30 Sandbox Companion
    ytRtEXwfelE 1:24:57 Hexcrawl Tools: D30 Sandbox Companion, Part Deux!
    GVauvBrUCmc 1:01:23 A Hexcrawling Primer for OSR RPGs
    F9xJ-3sXGA0 1:00:22 How to Keep Hexcrawling Interesting in Your D&D, OSR, or Other TTRPG Campaign
    KDTresBOcL8 20:57 Use Motifs to Describe Terrain in Your Hexcrawls
    o5_lB2AFkVg 16:42 Fun with Hexes Addendum!
    Zl3KvPlkQlY 24:09 Fun with Hexes! Some Tips & Tricks
    4qg15igqSKg 35:59 Sandbox Campaigns: What Are They? Am I Sure I Want One? How Do I Get One?
    Kl8TLh4nYFk 29:42 #DnD #DMTips: Run Your Campaign Using Radial Prep (A Bottom-Up Technique)
    ghq1eSjxFZY 28:17 DM Tips: "A Grove of Red Delirium" and Creating Unique or Unusual Features for Your D&D Hexcrawl
    ck5LCQw6ePk 50:01 A Dungeon Master's Stream: A Look At The Black Hack 2nd Edition's Hexcrawl Resources
    C2moCRxnWlI 44:12 A Dungeon Master's Stream: Making a Hexmap With Worldographer (Hexographer 2)
    EI8GANbQ77s 27:59 #OSR #DnD #DnD5E #DMTips: Generating World Events with Rory's Story Cubes & Mythic
    qPu-YERDkHg 34:58 DM Tips: Designing a Random Encounter System for your Dungeons & Dragons Hexcrawl
    Jt5EpFQyHjc 28:09 How to DM PC Class Abilities in Your Dungeons & Dragons Hex Crawl (Or Anywhere Else)
    bBqe8Z-D9-U 26:54 How To Play Through a Hexcrawl in Your D&D Campaign
    2RPW4km81jg 34:11 A Dungeon Master’s Intro to Running a Hexcrawl in a D&D, OSR, or Fantasy TTRPG Campaign
    XloPH6_ZlnM 14:38 DM Tips: Hex-Mapping for Your Dungeons and Dragons Campaign!
    61vj9JIk2W8 13:18 DMTips: Prepping Your Hex Map for a Hexcrawl Campaign

    # Sly Flourish: DM Tips

    NjpGbgwQ27I 5:54 Smooth Out Your D&D Game with Four Words – "Pause for a Minute" #dnd #lazydm
    wJhdpTbCEJA 8:27 Build Robust D&D Campaigns
    hB1tc_ASgcY 5:57 Tell, Don't Show – Tell Players What's Going On #dnd #lazydm
    GVioSvrSM1s 2:44 Give D&D Villains Evocative Titles #dnd #lazydm #dmtips
    614Pcm1f3hU 4:48 The 7th Level Shift in D&D #dnd #lazydm
    WnPjCnVoL84 2:19 List Ten Things #dnd #lazydm
    Qr-Wb-Szedo 8:07 Seven Tools for Better D&D Improvisation #dnd #lazydm
    08LOtj3IRLc 6:21 Five Tips to Integrate Characters Into Your D&D Campaign #dnd #lazydm
    EVNI5S7wcTo 6:57 Lightning Rods – D&D Monsters that Showcase Character Abilities #dnd #lazydm
    R5lMiOWlwqw 7:50 Relics: Single-Use Magic Items for Dungeons & Dragons #dnd #lazydm
    66u5v-Balrs 3:27 Harvest Ideas from your D&D Characters with Campfire Stories #dnd #lazydm
    6G6v9Kl68Q8 9:32 Text-Based Combat Tracking for Online D&D Games #dnd #lazydm
    AOYWPYaqvf4 5:23 Using the 13th Age Escalation Die in 5th Edition D&D #dnd #lazydm #dndtips
    VfZ1lVUZKTs 3:30 Three Lazy D&D Tips: Add Damage Up, Show Initiative, and Promote Shared Notetaking #lazydm #dmtips
    KLoIVtL_jdk 4:35 Situation-based D&D
    yaLGPjfvqH4 6:08 Getting Started with D&D #dnd #dungeonsanddragons #lazydm
    DZ7vaEqlh6o 6:02 Run One-on-One D&D! #dndtip #lazydm #dnd
    iCr1rxfYD6U 4:17 Using Upward and Downward Beats in D&D #dmtip #lazydm #dnd
    ELd7q9XPKbg 9:41 Build Complex D&D Adventures with Random Tables
    tw_WMNESHZo 3:36 Call On Individual Players During Online D&D Games
    iVrGcXto5RM 6:36 Using Progress Clocks from Blades in the Dark in your D&D Game
    PoQYKcSKGok 2:56 Five Minutes to D&D Pep Talk
    PKCuvfVtZCY 5:38 Including the Three Pillars of D&D Into Your Game
    uVA5VaTmSWU 4:30 Three Tips for Scheduling Regular D&D Games
    pPM5VZY_r8U 15:33 Set up Castle Ravenloft in 10 Minutes with the Owlbear Rodeo Virtual Tabletop
    hUBz7Pdme0o 6:17 Mashing Up Monsters: Combining D&D Monster Stat Blocks
    thwe8XG9pUI 8:03 Writing a Single Page D&D Campaign Guide
    fdZsB3NtFf0 5:14 Changing a Monster's Hit Points Once a D&D Battle Has Begun
    3PW55nREKHM 5:02 How Much D&D Advice is Too Much?
    CLYLVoYItOo 4:53 How Long Does it Take to Prep a D&D Game?
    Iu7M090KkSE 3:33 Building Lazy Magic Items in D&D
    ogUPg1_a8JU 2:15 Improvising NPCs with Just a Name in D&D
    2Zq2TZD9GuQ 3:04 This Foe is Beyond You – Declaring Deadly Situations in D&D
    k9lG9XfetVE 1:43 Declare a Monster's Deadly Intent in D&D
    bvUcT-ET3nw 2:19 Take a Break in D&D
    CPiUKsTgdcI 2:26 Offer Three Options in D&D
    S12yX3QULlg 6:31 Customizing Published D&D Adventures
    y2H9VZhxeWk 7:21 Spiral Campaign Development in D&D
    EURxj9L1KJc 2:22 D&D Campaign Closure Montages: One Year Later
    I6NNchL-P5o 2:55 D&D Random Encounters: Non-Focal, Previous, Future, and Mashups
    ezfC3IHioQo 3:29 Help D&D Players Make Choices
    TRVtf4Lig6o 4:13 Good Behaviors for D&D Players
    puN60oRDhBY 7:07 Improvising Legendary D&D Boss Monsters
    450wJNt5Up4 5:46 The Best D&D Subsystem – The Ability Check
    RQDTu8eSTaQ 6:04 Ten Uses for Index Cards in D&D
    HrZOHNXp_3A 3:48 How to Roleplay - Think Through the Eyes of your D&D NPCs #dnd #lazydm
    G7y2Vf9vED0 2:51 The Case for Average Monster Damage in D&D
    h4WQCqfUnYM 3:58 Recovering from a Bad D&D Game
    uTtcWeiP5Ho 3:15 "You Are Not Prepared for your Next D&D Game" – Battling the Resistance
    f7SFkQFpbRg 4:31 End Your D&D Session Before a Big Fight
    7dZrA2JKuYE 13:16 Tools of the Lazy Dungeon Master – Updated Lazy DM's Kit for 2021 #dnd #lazydm #dndtools
    76J-GqtB5t0 4:02 Reinforce Cooperative Character Motivations in D&D
    wNo5R-mW7M4 3:40 Darkvision in D&D Isn't As Good As You Think
    J_cuwkKlVJs 3:16 Need to Ponder Your D&D Game? Go for a Walk!
    CtxqFcjf9xk 3:29 Realism vs. Fun in our D&D Games
    I-1LdMNfkzY 4:31 Wielding Knives in D&D – Using the Fiction Players Bring to the Table
    2T2Z3f-1Z3I 3:36 The Best Ways to Improve your D&D Game are Free
    x9TMDEUh0CU 4:46 Handling Rests in D&D
    w8EiScJfFrQ 3:31 Running Small D&D Battles in the Theater of the Mind
    LGzfuxhcpQE 4:19 Facilitating Decisions in D&D
    3qxYK2DgmW4 3:30 Types of D&D Secrets and Clues and How to Find Them
    GZtfpvoxkmI 2:40 Using Stars and Wishes for feedback on your D&D Game
    yt66FTk3jX8 6:47 Preparing for your D&D Game in 15 Minutes
    sRN1yw5g5D0 4:10 Use Villainous Heralds in D&D
    ZNLTdryItt0 3:09 Player-Driven Monster Descriptions for D&D
    qayEBg1lbl0 6:01 Two Tools for Better D&D 5e Encounter Building
    LE2MT8l_pn8 3:03 Be Nice to 1st Level Characters in D&D
    YL2aeEj7zoU 2:28 Finding D&D Maps (Dyson Logos, the DMG, and the Lazy DM Workbook)
    3qdemNbuWxQ 4:35 Secrets Serve You – Understanding the Killer Feature of the Lazy D&D DM
    bpLyKJ6SVJA 3:07 Run Simple D&D Adventures
    H8Xgct3N9JU 2:50 Use Published D&D Material
    M2kdRLnnma0 3:48 Run Easy D&D Battles
    t1sfmcoSG1M 3:04 D&D DMs: Focus On Your Next Game
    odCkl7AqSvs 3:34 Three Tips to Draw D&D Players Into the Fiction in Three Minutes
    SfqcVlSnf2k 19:10 Running Hordes: Guidelines for D&D Battles with Hundreds of Monsters
    rw_v0tCEwnw 12:06 On D&D Ability Checks, Failing Forward, and Succeeding with a Cost
    _bgpZPlBgwQ 10:18 D&D Quest Model: The Three-of-Five Collection Quest
    l-jZpx958HQ 19:29 Game Pacing in D&D
    E2z4ZECoYvE 18:23 Advice for D&D DMs: Be on the Players' Side
    Ul1YjYDIuFo 17:05 Running Awesome D&D Combat
    SjI-Dl0XJBU 23:47 Safety Tools in D&D – X-card, Lines and Veils, and Script Change
    JXhVlKvMe6A 16:01 Run Pointcrawls for Overland Travel in D&D
    05VWofhNMHI 20:07 The Deadly Encounter Benchmark – The Lazy D&D Way to "Balance" Combat Encounters
    8AfbMNAsyr4 29:28 Notion for the Lazy D&D Dungeon Master
    d3-QWlnDSCg 24:47 Owlbear Rodeo for the Lazy D&D Dungeon Master
    1XYInHFWamw 26:41 Running a Deadly Lich in D&D
    Uw-x7JVY-Qg 37:58 The Lazy DMs Workbook Walkthrough
    _Yg-GyrcccI 31:09 Playing D&D Online with Discord
    J-0dWFWvJ-g 9:23 Making Universal D&D Monster Tokens for Thirty Cents
    W1uL3tpVlac 19:08 Using Maps in D&D Games
    yaRpkhrvLAU 25:32 Introducing New Players to D&D
    r4jFR5hSow0 3:06 The Most Important Lazy D&D DM Tool: A Good List of Names
    AJJsUfKgUnA 4:13 Intent and Default Distances in D&D Theater of the Mind Combat
`)

export const channel2Videos: Array<Video> = parseVideos(`
    # Crash Course: World History

    Yocja_N5s1I 11:11 The Agricultural Revolution: Crash Course World History #1
    n7ndRwqJYDM 9:35 Indus Valley Civilization: Crash Course World History #2
    sohXPx_XZ6Y 12:06 Mesopotamia: Crash Course World History #3
    Z3Wvw6BivVI 11:55 Ancient Egypt: Crash Course World History #4
    Q-mkVSasZIM 11:39 The Persians & Greeks: Crash Course World History #5
    8Nn5uqE3C9w 12:17 Buddha and Ashoka: Crash Course World History #6
    ylWORyToTo4 12:12 ‎2,000 Years of Chinese History! The Mandate of Heaven and Confucius: World History #7
    0LsrkWDCvxg 11:02 Alexander the Great: Crash Course World History #8
    vfe-eNq-Qyg 10:31 The Silk Road and Ancient Trade: Crash Course World History #9
    oPf27gAup9U 12:26 The Roman Empire. Or Republic. Or...Which Was It?: Crash Course World History #10
    TG55ErfdaeY 11:37 Christianity from Judaism to Constantine: Crash Course World History #11
    3PszVWZNWVA 12:44 Fall of The Roman Empire...in the 15th Century: Crash Course World History #12
    TpcbfxtdoI8 12:53 Islam, the Quran, and the Five Pillars: Crash Course World History #13
    QV7CanyzhZg 12:08 The Dark Ages...How Dark Were They, Really?: Crash Course World History #14
    X0zudTQelzI 11:33 The Crusades - Pilgrimage or Holy War?: Crash Course World History #15
    jvnU0v6hcUo 10:31 Mansa Musa and Islam in Africa: Crash Course World History #16
    szxPar0BcMo 11:31 Wait For It...The Mongols!: Crash Course World History #17
    a6XtBLDmPA0 10:15 Int'l Commerce, Snorkeling Camels, and The Indian Ocean Trade: Crash Course World History #18
    UN-II_jBzzo 10:12 Venice and the Ottoman Empire: Crash Course World History #19
    etmRI2_9Q_A 10:47 Russia, the Kievan Rus, and the Mongols: Crash Course World History #20
    NjEGncridoQ 10:38 Columbus, Vasco da Gama, and Zheng He - 15th Century Mariners: Crash Course World History #21
    Vufba_ZcoR0 11:33 The Renaissance: Was it a Thing? - Crash Course World History #22
    HQPA5oNpfM4 12:09 The Columbian Exchange: Crash Course World History #23
    dnV_MTFEGIY 11:08 The Atlantic Slave Trade: Crash Course World History #24
    rjhIzemLdos 10:46 The Spanish Empire, Silver, & Runaway Inflation: Crash Course World History #25
    j0qbzNHmfW0 12:20 The Seven Years War: Crash Course World History #26
    2yXNrLTddME 10:33 The Amazing Life and Strange Death of Captain Cook: Crash Course World History #27
    HlUiSBXQHCw 11:27 Tea, Taxes, and The American Revolution: Crash Course World History #28
    lTTvKwCylFY 11:54 The French Revolution: Crash Course World History #29
    5A_o-nU5s2U 12:35 Haitian Revolutions: Crash Course World History #30
    ZBw35Ze3bg8 13:43 Latin American Revolutions: Crash Course World History #31
    zhL5DCizj5c 11:05 Coal, Steam, and The Industrial Revolution: Crash Course World History #32
    B3u4EFTwprM 14:03 Capitalism and Socialism: Crash Course World History #33
    Nosq94oCl_M 11:53 Samurai, Daimyo, Matthew Perry, and Nationalism: Crash Course World History #34
    alJaltUmrGo 13:46 Imperialism: Crash Course World History #35
    _XPZQ0LAlR4 11:45 Archdukes, Cynicism, and World War I: Crash Course World History #36
    UUCEeC4f6ts 12:11 Communists, Nationalists, and China's Revolutions: Crash Course World History #37
    Q78COTwT7nE 13:13 World War II: Crash Course World History #38
    y9HjvHZfCUI 12:16 USA vs USSR Fight! The Cold War: Crash Course World History #39
    T_sGTspaF4Y 12:49 Decolonization and Nationalism Triumphant: Crash Course World History #40
    5SnR-e0S6Ic 11:51 Globalization I - The Upside: Crash Course World History #41
    s_iwrt7D5OA 13:55 Globalization II - Good or Bad?: Crash Course World History #42
    3k0v5ZvZrVQ 57:52 Crash Course Office Hours: World History

    # Crash Course: European History

    WhtuC9dp0Hk 6:36 Crash Course European History Preview
    rNCw2MOfnLQ 14:09 Medieval Europe: Crash Course European History #1
    tecocKSclwc 14:34 Florence and the Renaissance: Crash Course European History #2
    EuzAbE-kPkM 14:02 The Northern Renaissance: Crash Course European History #3
    wOclF9eP5uM 15:40 The Age of Exploration: Crash Course European History #4
    AcphphFoijY 16:34 Expansion and Consequences: Crash Course European History #5
    0eO0pPrGi6o 15:44 The Protestant Reformation: Crash Course European History #6
    PbBDP1Elbbg 13:38 Reformation and Consequences: Crash Course European History #7
    mU2dhPlJWyY 15:34 Commerce, Agriculture, and Slavery: Crash Course European History #8
    xy_M4pDjafo 13:44 Catholic Counter-Reformation: Crash Course European History #9
    rW4XFiHUQAs 15:33 Witchcraft: Crash Course European History #10
    cmKHYpC_jVs 13:30 The 17th Century Crisis: Crash Course European History #11
    w70BkCqgyyI 15:08 Scientific Revolution: Crash Course European History #12
    YYPAFqQgbqE 13:16 Absolute Monarchy: Crash Course European History #13
    dyk3bI_Y68Y 14:36 English Civil War: Crash Course European History #14
    35PinDPNPw0 13:44 Dutch Golden Age: Crash Course European History #15
    VwlrvAvcO28 15:18 Eastern Europe Consolidates: Crash Course European History #16
    FBzRaxLdjZE 14:56 The Rise of Russia and Prussia: Crash Course European History #17
    NnoFj2cMRLY 16:23 The Enlightenment: Crash Course European History #18
    k108xCzJhbs 13:41 Enlightened Monarchs: Crash Course European History #19
    xbbYCe2o1SI 14:59 18th Century Warfare: Crash Course European History #20
    5fJl_ZX91l0 15:29 The French Revolution: Crash Course European History #21
    Pd6E38FfuMg 15:54 Napoleon Bonaparte: Crash Course European History #22
    DuVw9sGpWUc 14:01 The Congress of Vienna: Crash Course European History #23
    zjK7PWmRRyg 17:06 The Industrial Revolution: Crash Course European History #24
    _uKp4FHPjHU 14:06 Reform and Revolution 1815-1848: Crash Course European History #25
    cXTaP1BD1YY 16:25 Revolutions of 1848: Crash Course European History #26
    KSjDe9_jZk8 14:22 Italian and German Unification: Crash Course European History #27
    eBA7P-zKbi8 13:14 Expansion and Resistance: Crash Course European History #28
    MN8fjAjLLpg 13:58 Migration: Crash Course European History #29
    meC5Zl5PC1U 14:33 Modern Life: Crash Course European History #30
    xGjpTjeGuZc 15:09 Modern Thought and Culture in 1900: Crash Course European History #31
    KGlmlSTn-eM 15:01 The Roads to World War I: Crash Course European History #32
    IIiDULrXaqQ 14:16 World War I Battlefields: Crash Course European History #33
    dPXNZkGYJHM 14:07 WWI's Civilians, the Homefront, and an Uneasy Peace: Crash Course European History #34
    U6KR4cLLVzQ 14:16 Russian Revolution and Civil War: Crash Course European History #35
    xzWL2XPBHMk 14:48 Post-World War I Recovery: Crash Course European History #36
    Ojo8-GhhQcA 16:34 Economic Depression and Dictators: Crash Course European History #37
    Hs_JMydrxZM 16:15 World War II: Crash Course European History #38
    rlx6ur_D51s 14:25 World War II Civilians and Soldiers: Crash Course European History #39
    iQeDvnapdlg 13:39 The Holocaust,Genocides, and Mass Murder of WWII: Crash Course European History #40
    -rkIqtV07HE 14:46 Post-War Rebuilding and the Cold War: Crash Course European History #41
    nlp068CmQaE 15:57 Post-World War II Recovery: Crash Course European History #42
    FlMKqRCNX9c 13:23 Decolonization: Crash Course European History #43
    zDEmHQhGkBg 15:14 Revolutions in Science and Tech: Crash Course European History #44
    fs_SvMr5IPE 12:28 Protests East and West: Crash Course European History #45
    aStaPgdvIdI 13:59 The Soviet Bloc Unwinds: Crash Course European History #46
    OfJ8Wzanhr4 13:25 The Fall of Communism: Crash Course European History #47
    UauE2FUQYH0 11:57 Europe in the Global Age: Crash Course European History #48
    -_6978boAQ8 12:46 21st Century Challenges: Crash Course European History #49
    1hAraGgEiAo 15:07 What History Was, Is, and Will Be: Crash Course European History #50

    # Crash Course: World Mythology

    iRCVcuA6yZQ 2:00 Crash Course World Mythology Preview
    HeX6CX5LEj0 13:02 What Is Myth? Crash Course World Mythology #1
    4eVFgfQ2694 12:22 Creation from the Void: Crash Course World Mythology #2
    7fHDIiqLz9w 12:22 Cosmic Sexy Time, Eggs, Seeds, and Water: Crash Course World Mythology #3
    TlFVFRkEfwo 12:07 Earth Mothers and Rebellious Sons - Creation Part 3: Crash Course World Mythology #4
    PBbTkzakiM8 10:33 Social Orders and Creation Stories: Crash Course World Mythology #5
    T6f1-nEjDdM 11:03 Humans and Nature and Creation: Crash Course World Mythology #6
    EcQ-6Zd1638 13:08 Pantheons of the Ancient Mediterranean: Crash Course World Mythology #7
    V_NJAJGCKD8 12:31 Indian Pantheons: Crash Course World Mythology #8
    XNCQ9w59I7M 12:46 The Greeks and Romans - Pantheons Part 3: Crash Course World Mythology #9
    CyU54gV_PWM 12:45 The Norse Pantheon: Crash Course World Mythology #10
    J2se_zimj40 11:10 African Pantheons and the Orishas: Crash Course World Mythology #11
    blFaiB5kj6I 12:15 Theories of Myth: Crash Course World Mythology #12
    cpM-pfh-WWo 11:11 Great Goddesses: Crash Course World Mythology #13
    X8_uTpbrHQE 12:27 Fire and Buffalo Goddesses: Crash Course World Mythology #14
    ue2PPZnaaNc 11:46 Archetypes and Male Divinities: Crash Course World Mythology #15
    VA3j5_vKQfc 10:23 Noah's Ark and Floods in the Ancient Near East: Crash Course World Mythology #16
    A90jB9WlvYY 9:25 Yu the Engineer and Flood Stories from China: Crash Course World Mythology #17
    GrTXHeSHGSE 9:00 American Floods: Crash Course World Mythology #18
    iW7H1KfSJ8s 10:44 The Dying God: Crash Course World Mythology #19
    RW1ChiWyiZQ 10:10 Tricksters: An Introduction: Crash Course World Mythology 20
    udj1FReC2TI 12:00 Hermes and Loki and Tricksters Part 2: Crash Course World Mythology #21
    eAKHGe6x8n8 12:33 Coyote and Raven, American Tricksters: Crash Course World Mythology #22
    FyZFoa7Vu1o 12:03 The Apocalyspe: Crash Course World Mythology #23
    yBG10jlo9X0 12:20 Ragnarok: Crash Course World Mythology #24
    XevCvCLdKCU 13:20 The Hero's Journey and the Monomyth: Crash Course World Mythology #25
    sWppk7-Mti4 13:46 The Epic of Gilgamesh: Crash Course World Mythology #26
    qsuqbPda5uo 13:25 Rama and the Ramayana: Crash Course World Mythology #27
    Ik3Y4Oq6TwU 13:32 Galahad, Perceval, and the Holy Grail: Crash Course World Mythology #28
    Kcfww2-y2K8 12:42 The Mwindo Epic: Crash Course World Mythology #29
    R0qkSTvRQa8 12:52 Herakles. Or Hercules. A Problematic Hero: Crash Course World Mythology #30
    eBB3RKazIj8 13:24 Ma'ui, Oceania's Hero: Crash Course World Mythology #31
    XEjvhTHNx3s 10:41 Mythical Caves and Gardens: Crash Course World Mythology #32
    SZN-JbiEtvg 11:42 Mythical Mountains: Crash Course World Mythology #33
    iNw7RIOY7SA 11:27 Mythical Trees: Crash Course World Mythology #34
    9EbZBJZruAc 12:25 Cities of Myth: Crash Course World Mythology #35
    r0T3gpfH_-w 10:30 Monsters. They're Us, Man: Crash Course World Mythology #36
    klXMVUR-Y7Q 11:17 Mythical Horses: Crash Course World Mythology #37
    SWXNSkE3YEk 11:24 Serpents and Dragons: Crash Course World Mythology #38
    0OCPQG4bMFs 9:41 Witches and Hags: Crash Course World Mythology #39
    PgsWcqATeLQ 12:55 Freud, Jung, Luke Skywalker, and the Psychology of Myth: Crash Course World Mythology #40
    qmpDK-8ib2Y 12:49 Mythical Language and Idiom: Crash Course World Mythology #41
`)

// Traveller
export const channel4Videos: Array<Video> = parseVideos(`

    # 10 Minute Traveller

    UGnuIgM8ZjM 10:07 10 Minute Traveller RPG Pt 1 The 70s
    OzrhxcxZkq8 11:15 10 Minute Traveller RPG Pt 2
    dpN4T8yE1BA 11:37 10 Min Traveller RPG Pt3
    G8ClXQWD7uQ 11:10 10 Min Traveller Part 4 Basic Skills
    _ZPEYnZJzEI 12:00 10 Min Traveller RPG Part 5 Essential Skills
    gRLHDwHElG0 9:46 10 Minute Traveller RPG Part 6 Services, Terms and Enlistment
    T9wxnJG70hk 21:00 10 Min Traveller RPG Part 7 Creating a Character
    uatk19Ob0sQ 7:49 10 Min Traveller Supplemental, Extended Characters
    gAuh7HTVaZo 16:32 10 Min Traveller Part 9 COMBAT
    5V0bmV8Pu0I 11:06 10 Min Traveller Supplemental. Space Combat
    7xl9pD1o8Gs 20:04 10 Min Traveller Part 10 Drugs, Computers and Money
    Ao_yJEbRFMU 9:31 10 Min Traveller PT11 Travelling, The meaning of Passages.

    # Seth Skorkowsky: Traveller Reviews

    Tym86AcYwuU 23:00 Traveller: High and Dry - RPG Review
    Q4vULypIu1U 19:08 Traveller: Mission to Mithril - RPG Review
    YzO3GGma57I 10:12 Traveller Starter Set - RPG Review
    Kz_xhT9obRo 19:00 Traveller: Marooned on Marduk - RPG Review
    ijtLp8KCLPE 24:27 Traveller: Annic Nova - RPG Review
    HZ6M8pGa138 25:50 Traveller: Murder on Arcturus Station - RPG Review
    rTPzJidorZg 18:34 Traveller: The Ship in the Lake - RPG Review
    LpJbTE2t8eg 21:55 Traveller: The Calixcuel Incident - RPG Review
    LEOjVNkL8iI 18:30 Traveller: Rule of Man Commemorative - RPG Review
    fUN3zc2hnU0 20:04 Traveller: Chariots of Fire - RPG Review
    pwhJCQs69Jw 32:44 Traveller: Flatlined - RPG Review
    AH1oyUjjUj4 30:44 Traveller: Death Station - RPG Review
    LCIn30dPTnM 17:00 3D Printed Traveller Scout Ship - Review
    O4zoiDztAPQ 26:26 Traveller: Mysteries on Arcturus Station - RPG Overview
    SJhJLbqDeiw 17:24 Traveller: A Dagger at Efate - RPG Review
    PydWXlEYJes 29:24 Traveller: Islands in the Rift - RPG Review

    # HR Diagram

    TQK5FH_pj6c 44:26 4.21 HR Diagram

    # Gamemaster Growth: Traveller & Sci-Fi

    OuG-Y6EFYTM 20:33 A Whistle-Stop Tour of the Traveller RPG Universe
    Qz6IGb1aDNY 13:41 Traveller RPG’s 3rd Imperium setting: more relevant than ever
    UQjh_8LFz5w 10:01 Traveller's RPG’s Jump drive is kind of a big deal
    2X0zWpn3jaM 17:47 GURPS Traveller developed the 3rd Imperium Setting like nothing before or since.
    LxdIPzwcWmE 9:43 Why Traveller Leads the pack of Sci-Fi RPGs?
    SKfU7S1wr30 9:36 Traveller’s iconic starships: a Breed Apart
    vybGM6mXGrU 12:10 A Traveller Renaissance?
    K6ycC-TlBJM 15:19 History of the Traveller RPG Universe (OTU): part the first
    ZjRP8_ZJVYI 22:17 Mongoose Traveller 2nd Edition: Character Creation in an App?

    # Page121 Traveller

    6f2ACQQ80eQ 12:26 JTAS: A magazine for the Traveller RPG
    RbWgPXcfGJM 8:48 Traveller Presented By Far Future Enterprises
    fw5jKA9L7aE 11:09 Megatraveller By GDW
    6-FuBofUoro 9:33 Challenge: A Magazine For Traveller by GDW
    X2w0hmdfA6Y 13:56 Let's Play Traveller
    dQVIPPFDUCE 11:46 Let's Play Traveller Snapshot
    GVVW8jlON9g 15:07 The Travellers' Digest By Digest Group Publications
    5RHjkOeK8DA 9:42 Ship Deckplans By FASA For Traveller
    tttkHB59uWM 7:12 Freelance Traveller: A Magazine Anyone Can Afford
    _e35s97JL-Y 13:03 A Look At A Great Issue of Challenge Magazine
    lMOGig9QIso 9:18 Traveller The New Era
    Ios2hRQNO5M 10:17 Traveller Library Data Supplements
    P2P6wIK0pk8 8:48 Judges Guild: A Traveller Licensee
    JhiymVvJpNk 11:14 Marc Miller's Traveller
    aLqyG5A7a7s 9:21 Traveller Group One
    -qOPDunj1xI 8:31 Tarsus World Beyond The Frontier by GDW
    l8himS3ZZhU 12:25 Traveller Map Online
    c-FigQJ_npg 8:55 Starter Traveller Box Set By GDW
    ITv7P86ZWbY 12:39 Traveller Starship Operators Manual By DGP
    VSrMFicV920 7:40 Adventure Class Ships II By FASA For Traveller
    gLNz9DwCHts 10:28 GURPS Traveller By Steve Jackson Games
    NxZx2ePqwi8 11:03 Traveller Alien Module 1 Aslan By GDW
    tIlVwyKGr6U 9:43 Beltstrike A Traveller Adventure By GDW
    Eq3GhBOkNMM 11:30 Atlas of the Imperium For Traveller By GDW
    ypqgTavGVPw 11:09 Grand Survey For Traveller By DGP
    GM8ddQROJGo 11:28 Traveller GM And Players Helpers By Judges Guild
    BO2JEtoqUUM 7:40 Grand Census For Traveller By DGP
    zRTZ6CWggsc 24:06 The Third Imperium For Mongoose Traveller 2nd Edition
    _DAb3T--yjU 7:05 Traveller Minis By Grenadier
    dIUTID2vNUw 8:54 Merchant Class Ships For Traveller By FASA
    cM2nFPx8fwc 7:53 Aslan Mercenary Ships For Traveller By FASA
    APMOPZQEIs4 8:45 Traveller Explorer's Edition By Mongoose
    BtzJAcJtfN0 2:20 Death Station For Mongoose Traveller 2nd Edition
    VEPIP-UB2oQ 9:51 Kamsii The Pleasure Planet For Traveller
    sP9Bk98EnYA 7:41 Traveller Double Adventure 1 By GDW
    ApYvmw8C-JY 11:46 Agent of the Imperium: A Traveller Novel By Marc Miller
    A_ezWFcgudE 11:34 Fighting Ships of the Shattered Imperium For Megatraveller
    z6_fql-LkvI 10:12 Traveller 101 Robots By Digest Group Publications
    A9ymXhnWNH4 11:27 Mongoose Traveller 2E Referee Screen
    E-_ncsmiLlk 14:26 Megatraveller Imperial Encyclopedia By GDW
    nufwArmdjZo 10:39 Traveller Free Trader Beowulf Deck Plan by GURPS
    bwMunH1WIJ8 15:09 Megatraveller PC Games From 1990 91
    zav3xT4B-Sg 14:32 Traveller T20 By Quik Link Interactive
    NXAOLRqQFvw 9:29 Deepnight Revelation For Mongoose Traveller 2E First Look
    HBnCUeJMIdA 11:56 What Is The Lorenverse In Traveller?
    kowlk7usc-M 10:35 Luna of Terra In Traveller From Dragon Magazine
    p5b8pSX--Do 16:30 The Rebellion Sourcebook For Megatraveller
    geE6nY_mhn8 11:00 Traveller TNE Star Vikings by GDW
    W-CVy1Yn6CA 15:35 Tech Levels In Traveller Explained
    8dAUQtModMg 11:55 What Is A Major Race in Traveller?
    nq81D7q9YEg 18:11 Jumpspace In Traveller
    0Ke8GWMwB1k 12:54 K'Kree: A Major Race In Traveller
    gm1L_GM3Jm8 14:29 Megacorporations In The Official Traveller Universe
    hXaSc1RbW04 11:37 Traveller HERO By Comstar Games
    8zQApJrltTg 15:43 Journal of the Traveller's Aid Society By Mongoose
    Xlc1UxrABBQ 11:32 Types of Passage in Traveller
    moMFbRBnG78 16:37 Mercenaries In Traveller Over The Years
    I88YtBT6yk0 18:24 Mongoose Traveller 1st Edition
    5e2bCNdjJDE 14:59 COACC For Megatraveller by GDW
    CZs5RuWLi-U 19:43 Pocket Empires From Marc Miller's Traveller
    C8xaLwxwrhU 15:36 Law Levels In Traveller
    5AdFJXMYdUo 14:36 System Defense Boats In Traveller
    4QppMblydtU 17:03 Game Master Screens For Many Editions of Traveller
    bAutdcAYzZs 27:38 Mongoose Traveller 2nd Edition 2022 Update
    gmqq8xkflaI 15:38 A Look At Mongoose JTAS Volume 2
    mJVkjxOJBFs 15:14 What Is The Traveller's Aid Society In Traveller?
    QBuP4R3SDjM 15:17 Vampire Fleets For Traveller TNE
    kuX36ACzhiM 10:00 The Agent Career Path In Traveller RPG
    7XOkaSWGJgw 19:12 Traveller Customizable Card Game
    WFuReZZLFc4 15:31 Signal GK Traveller Adventure 13: Part of Traveller History
    N5Nrtd6j7fQ 8:23 Zhodani Base: A Great Traveller Resource
    Ykbx1Qsi9Ys 16:11 Traveller Campaign Tips 1: Early Choices
    wg5livPg7EM 15:31 Traveller Campaign Tips 2: Session Zero
    YZHqkx0n3g8 30:37 Traveller Campaign Tips 3: Skills
    B78F5amt10E 14:12 Black Globe Generators In Traveller
    HAOfQEFbOT4 9:43 Traveller Seeker Deck Plans From GURPS
    FYlgZTLzaL0 10:33 Tinkerturf Terrain For Traveller, Star Frontiers, Cepheus, Champions and Other Sci Fi Gaming
    cR4zXN4sYhY 21:14 Traveller Campaign Tips 4: Equipping Your Travellers
    688xv4-MLL4 27:10 Traveller Campaign Tips 5: Personal Combat
    43j9Pwwd2Sw 21:44 Traveller Campaign Tips 6: How Are Your Travellers Travelling?
    rs5R6lhTuO4 15:09 A Look At The Referee's Companion For Megatraveller
    HZuau3WxH3s 2:38 A New DGP Product From Marc Miller
    7bfSQstd-Zk 17:05 Traveller Campaign Tips 7: The Ship's Locker
    PJMsWZDWJks 23:16 Manhunt: A New Megatraveller Adventure From FFE
    AfxtJUjbB8s 15:50 Open Table And Closed Table Play For Traveller
    7okYd2-x9fw 24:43 Field Catalogue For Traveller 2nd Edition From Mongoose
    JfmtuZORR3E 12:45 Traveller Campaign Tips 8: Wilderness Refueling
    AKVEXR2w5ws 23:41 Dying During Character Creation In Traveller
    tq6ov8bNFyE 15:07 Traveller Campaign Tips 9: Patrons
    5j3mKsedjr0 25:49 Behind the Claw For Mongoose Traveller 2nd Edition
    cJArHTnTKAE 19:09 Traveller Campaign Tips 10: Medicine
    nfQ5aWJdLEE 16:01 Traveller CCG Booster Packs By Horizon Games
    OwLC9MUcvJg 16:36 Hobby Shop 1982 Episode 4: Azhanti High Lightning For Traveller
    Zstvvfn--78 15:17 101 Vehicles By Digest Group Publications for Megatraveller
    XKmO08qY2yk 15:59 Official and Unofficial Traveller Novels
    0272XXSMGbg 13:18 NPCs In Traveller
    LUruvkcZeTI 15:01 A Look At Supplements 1 and 4 For Traveller
    MEaptsYJALo 11:03 BITS Traveller
    6-jyZ2UP_4o 12:19 The Wagner Incident For My 100th Traveller Episode
    Q_I5dhFerDE 21:56 A Look At Offerings From Far Future Enterprises For Traveller

    # Surprise! Hertzsprung-Russell Diagram

    _EtlJCfaxdc 9:53 Stars and Galaxies: The Hertzsprung-Russell Diagram

    # Traveller5 Perusal

    K1Z-r06md_E 1:14:22 1. Basics & Ranges: Traveller5 Science Fiction RPG Flip-Through
    76wYsyqOdF8 47:37 2. Benchmarks & Characteristics: Traveller5 Science Fiction RPG Flip-Through
    5f6cppxSEtY 40:31 3. Character Generation (1/2): Traveller5 Science Fiction RPG Flip Through
    Ap5yohn9hVE 39:19 4. Character Generation (2/2): Traveller5 Science-Fiction RPG Flip-Through
    V33YU5nS08k 52:07 5. Land Grants, Ship Shares & Genetics: Traveller5 Science-Fiction RPG Flip-Through

    # Seth Skorkowsky: Traveller Intro

    QdCq91MP9wE 13:34 Traveller: Part 1 - Introduction
    LEwwopcCONY 39:45 Traveller: Part 2 - Character Creation
    22pbSwPFmwM 21:50 Traveller: Part 3 - Skill Mechanics
    uaW5R5c-ojo 27:07 Traveller: Part 4 - Combat
    D-MleY7W5Fw 31:22 Traveller: Part 5 - Spacecraft Operations
    fUoXPfaXO6g 38:23 Traveller: Part 6 - Space Combat
    WYxWJOmH_pI 10:22 Traveller: Part 7 - Psionics
    QKTuaJQi4b4 23:27 Traveller: Part 8 - Worlds & Starports
    wcfofeYpO3Q 32:24 Traveller: Part 9 - Passengers & Cargo
    673QZdUrwiQ 26:15 Traveller: Part 10 - Final Thoughts
    ylYmiTm1GV8 47:02 Traveller: Spacecraft Construction

    # Game On! Everything Traveller

    T0HOhmFrsZc 12:58 Mongoose’s Traveller 2e makes space travel serious business 🚀 RPG Review & Mechanics
    A7gpvNt5Sx8 12:04 Traveller My Favorite Science Fiction RPG | [A Quick Overview]
    1lQXcYQzqwM 16:47 Learn to Play Traveller RPG Ep 1 Introduction
    ptWbIvKG4rc 15:34 Let's Make A Traveller Character [Part 1]
    4tp4_akZ1Tw 15:09 Let's Make A Traveller Character [Part 2]
    bG0YRBsRmEw 11:15 Let's Make A Traveller Character [Part 3]
    GvlZoJgIRzU 15:43 Let's Make A Traveller Character [Part 4]
    KDWrtXidl8E 19:19 Eve Vs Elite Dangerous - Play Traveller!
    6vX9za9nel0 6:31 Traveller RPG Lore- Terra (Earth)
    PZ1AcRqzxmI 1:54 Random Character Creation For D&D 5th Ed [Traveller Style]
    eyFuvpjRGQg 9:16 Make Your RPG Space Battles More Exciting - [3 Easy Steps!]

    # Dwarven Tavern: Traveller

    Uj1E3cq84dg 27:03 Traveller Central Supply Catalogue - Dwarven Tavern Review
    L8ReClrg9l4 1:12:42 Traveller Core Rules - Dwarven Tavern Review
    cX8HbXKBiz8 5:53 Traveller Characters Interviews - Royce Bloopers
    YJDw3dcFXno 4:29 Traveller Character Interviews - Sheridan and Simone Bloopers
    ZdTnvPHmY5M 7:40 Traveller Character Interviews - Royce
    A1jsHKoe2so 5:16 Traveller Character Interviews - Simone
    Wf41nIpV7bI 5:50 Traveller Character Interviews - Sheridan
    9PU_Cyz4ogw 21:57 Traveller Review - Dwarven Tavern - Part 4
    hTwO99L_RYw 29:31 Traveller Review - Dwarven Tavern - Part 3
    x72hO1wFEgc 12:04 Traveller Review - Dwarven Tavern - Part 2
    JZ8kDdWOBb8 14:22 Traveller Review - Dwarven Tavern - Part 1
    Zrzs4fOMxnU 22:38 Traveller Vehicle Handbook - Dwarven Tavern Review
    cS0_6tKyP6U 20:42 Traveller: High Guard - Dwarven Tavern Review
    aYTk9zXEs6U 42:33 Traveller Starter Set - Dwarven Tavern Review
    sFc-qxKvE6s 35:07 Traveller: The Great Rift - Dwarven Tavern Review
    MBmBJ6_hlTc 27:30 Traveller: Pirates of Drinax - Dwarven Tavern Review
    HyjSee-0EyQ 34:36 Traveller: The Trojan Reach - Dwarven Tavern Review
    HkK46HsmW50 12:38 Traveller: Ships of the Reach - Dwarven Tavern Review
    bp6UkPzI7kQ 22:16 Traveller: Mercenary - Dwarven Tavern Review
    lJYdajjkJ9I 31:48 Traveller - Aliens of Charted Space Vol. 1 - Dwarven Tavern Review

    # A Hertzsprung-Russell Diagram

    LNtA8nhhh3M 35:41 The Hertzsprung-Russell Diagram

`)

export const channel4Segments: Array<Episode> = map(
  pipe(parseVideos, (v) => ({ videos: v }))
)([
  `
    BShj3SPzpSk 7:15 Eternal Reaches - Lodaris Sub-sector worlds
    Thj22uZuWa4 4:38 Eternal Reaches GIVEAWAY - Mongoose Traveller 2ed Starter Set - Competition NOW CLOSED
    11_7X-Ey7AA 22:56 Eternal Reaches - Lodaris Sub-Sector Interstellar Factions
    _lorRfxn-sU 13:06 Eternal Reaches - The Intersection - Traveller Setting
`,
  `
    4-OoJwwDLm4 1:52:32 RenSpace - Traveller MgT2e Worldbuilding - Session 1
    2OFEebuUg9M 1:15:54 RenSpace - Traveller MgT2e Worldbuilding - Session 2
    uQsqPKM9_jo 1:27:35 RenSpace - Traveller MgT2e Worldbuilding - Session 3
`,
])

// Scifi Ambience
export const channel5Videos: Array<Video> = parseVideos(`
    IoOsnVFOgpM 1:00:00 Derelict Ship | Sci-fi ASMR Ambience | 1 Hour
    2b_d1EylEvQ 2:00:00 Space Ship Suite | Ambience | 2 hours
    7BABfeQa83A 2:00:00 Space Hangar | Port Ambience | 2 hours
    gpvznAiKblU 10:00:00 Starship Sleeping Quarters | Sleep Sounds White Noise with Deep Bass 10 Hours
    s6RGexFYeU4 1:30:35 1.5 hours Ambient Space station - Chill Relax - Eve Online Dodixie
    nmt17DsZf4o 1:03:01 Spaceship Ambience for Sleep or Studying | ASMR Space Travel Sounds
    QGf3V5MCbGY 1:00:01 SPACESHIP COCKPIT SOUNDS 🎧 For Studying | Relaxing | Sleeping (THE OUTER WORLDS Ambience | ASMR)
    i6Yvk8eT2Ss 1:59:59 Space Station | Ambience | 2 hours
    Uj8DYegtrHg 10:03:01 10 hours | CityScape of Mars Base Alpha-1: Ambient Space Music, Sci-Fi, Future World
    BtfzACa0kIg 10:00:00 Space Sounds Sleep 🚀 Spaceship White Noise for Sleeping 10 Hours
    ALodybtL_8s 3:34:11 Spaceship Ambience ASMR Sc-Fi Restaurant Cafe Dinner in a Starship
    ZQnPUt8rZHA 1:00:01 Elite Dangerous Background Radio Chatter and Ambient Space Static
    lydlOOKbet8 1:42:56 Elite Dangerous - Agriculture docking bay ambience
    PVnabdGyI_Y 1:07:39 Elite Dangerous - High tech docking bay ambience
    7KmCvk9clIY 1:17:42 Cyberpunk City Ambience For Gaming, Relaxing & ASMR
    8VfuELVQjaA 1:35:21 Space Ambient Mix 33 - Frozen Dreams by The Intangible
    _sn6Ka9A210 7:00:00 ASMR Cyberpunk Future City Window Sound Ambience 7 Hours 4K Wallpaper - Sleep Relax Focus Chill
    x5zX1eRKEDM 7:00:00 ASMR Blade Runner Balcony Cyberpunk City Rain Sound Ambience 7 Hours 4K - Sleep Relax Focus Chill
    C4MpzSMkinw 1:18:44 Productivity Music — Maximum Efficiency for Creators, Programmers, Designers
    HFBjfzsOtx0 2:00:01 Spaceship Bedroom Ambience – Space Sleeping Quarters (White Noise, Relaxation, ASMR)
    TCyzw2R9eFE 1:00:21 Starship Covenant / Interstellar Space Ambient - Alien Unofficial Soundtrack
    NWwpCinP_MM 1:00:01 SPACESHIP NOSTROMO SOUNDS 🎧 For Studying | Relaxing | Sleeping (ALIEN ISOLATION Ambience)
    llDMztU5JGk 10:00:01 Blade Runner - Ambient for sleeping ASMR
    yttvb9ByOtY 7:00:00 ASMR Cyberpunk Future City Aerial Sound Music Ambience 7 Hours 4K - Sleep Relax Focus Chill Dream
    7aDpCIDYDc8 1:06:24 Songs for Dead Planets
    yp7Mqp-X2wk 7:00:00 ASMR Cyberpunk Future City Hacker Room Sound Ambience 7 Hours 4K - Sleep Relax Focus Chill Dream
    bDe8EXaKg3I 1:53:52 Dune Ambient Music | Hans Zimmer
    k3fz6CC45ok 1:52:42 Vangelis - Blade Runner Soundtrack (Remastered 2017)
    7aDpCIDYDc8 1:06:23 Songs for Dead Planets
`)

export const channel6Videos: Array<Video> = parseVideos(`
    CePcXyN5JrM 46:58 【ENG SUB】The LAUGHING IN THE WIND EP01 | The magic swords of ling
    ju2VqMQyLAc 46:14 【ENG SUB】The LAUGHING IN THE WIND EP02 | The magic swords of ling
    Jlcm0GDKHdU 46:21 【ENG SUB】The LAUGHING IN THE WIND EP03 | The magic swords of ling
    42_K0OQfPWs 46:15 【ENG SUB】The LAUGHING IN THE WIND EP04 | The magic swords of ling
    qB-bV2dP42c 46:26 【ENG SUB】The LAUGHING IN THE WIND EP05 | The magic swords of ling
    ZnrbsskDlp0 46:58 【ENG SUB】The LAUGHING IN THE WIND EP06 | The magic swords of ling
    rsoaMMK5I74 46:31 【ENG SUB】The LAUGHING IN THE WIND EP07 | The magic swords of ling
    Pw26KAoxleI 46:23 【ENG SUB】The LAUGHING IN THE WIND EP08 | The magic swords of ling
    _DA1VrSBhMM 46:12 【ENG SUB】The LAUGHING IN THE WIND EP09| The magic swords of ling
    zxcft5ieOQM 46:21 【ENG SUB】The LAUGHING IN THE WIND EP10| The magic swords of ling
    z0KjQjfbn_0 46:38 【ENG SUB】The LAUGHING IN THE WIND EP11| The magic swords of ling
    x0jA8X_0QpE 46:58 【ENG SUB】The LAUGHING IN THE WIND EP12| The magic swords of ling
    SW8bWImmkOQ 46:57 【ENG SUB】The LAUGHING IN THE WIND EP13| The magic swords of ling
    7JaSWs0LzIA 46:32 【ENG SUB】The LAUGHING IN THE WIND EP14| The magic swords of ling
    rjAy3VbC6Pc 47:10 【ENG SUB】The LAUGHING IN THE WIND EP15| The magic swords of ling
    8A_aVCM9JYg 46:58 【ENG SUB】The LAUGHING IN THE WIND EP16| The magic swords of ling
    sJ0bJMyDXRA 46:12 【ENG SUB】The LAUGHING IN THE WIND EP17 | The magic swords of ling
    _qlz4qtkusI 46:46 【ENG SUB】The LAUGHING IN THE WIND EP18| The magic swords of ling
    bpi6bfbOOxg 46:20 【ENG SUB】The LAUGHING IN THE WIND EP19| The magic swords of ling
    dUWNv6zb0yE 46:28 【ENG SUB】The LAUGHING IN THE WIND EP20| The magic swords of ling
    bi4_NAsOBFc 46:14 【ENG SUB】The LAUGHING IN THE WIND EP21| The magic swords of ling
    VsDwjKaLc0I 46:32 【ENG SUB】The LAUGHING IN THE WIND EP21| The magic swords of ling
    aigAMjQcQIY 46:48 【ENG SUB】The LAUGHING IN THE WIND EP23| The magic swords of ling
    MryX4f5ldYA 46:24 【ENG SUB】The LAUGHING IN THE WIND EP23| The magic swords of ling
    HOG7UMwxFcQ 46:23 【ENG SUB】The LAUGHING IN THE WIND EP25 | The magic swords of ling
    jvyh4hNBAjc 46:44 【ENG SUB】The LAUGHING IN THE WIND EP26 | The magic swords of ling
    ui5wdVbVsi8 46:15 【ENG SUB】The LAUGHING IN THE WIND EP27 | The magic swords of ling
    KJ0efSE4v5g 46:32 【ENG SUB】The LAUGHING IN THE WIND EP28 | The magic swords of ling
    KAR-JCwO3Ac 46:53 【ENG SUB】The LAUGHING IN THE WIND EP29 | The magic swords of ling
    3edRMDfvzsQ 46:19 【ENG SUB】The LAUGHING IN THE WIND EP30 | The magic swords of ling
    Onm9Gg4aGbQ 46:38 【ENG SUB】The LAUGHING IN THE WIND EP31 | The magic swords of ling
    PsSc-48haoE 46:46 【ENG SUB】The LAUGHING IN THE WIND EP32 | The magic swords of ling
    u-LPs-0ICEI 46:49 【ENG SUB】The LAUGHING IN THE WIND EP33 | The magic swords of ling
    0wHziG39GBw 46:20 【ENG SUB】The LAUGHING IN THE WIND EP34 | The magic swords of ling
    QQZpF_AM8cM 47:04 【ENG SUB】The LAUGHING IN THE WIND EP35| The magic swords of ling
    YW-9ew2kDhc 46:26 【ENG SUB】The LAUGHING IN THE WIND EP36 | The magic swords of ling
    CeMgP00pbMg 46:39 【ENG SUB】The LAUGHING IN THE WIND EP37 | The magic swords of ling
    q7lAu_PZKkU 46:50 【ENG SUB】The LAUGHING IN THE WIND EP38 | The magic swords of ling
    3wP6xfAr4-s 46:54 【ENG SUB】The LAUGHING IN THE WIND EP39 | The magic swords of ling
    XTLfFfI1Gj8 46:21 【ENG SUB】The LAUGHING IN THE WIND EP40 | The magic swords of ling
`)
