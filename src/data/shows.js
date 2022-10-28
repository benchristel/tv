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
    # Cortex

    zDAjDP1brqA 1:21:19 How to Make a TTRPG Space Adventure Using Cortex Prime Part 1
    nX8XB-T-hNE 1:32:04 How to Make a TTRPG Space Adventure Using Cortex Prime Part 2
    YKpjvZ37240 1:24:27 How to Make a TTRPG w/ Jasmine Bhullar | Underwater Cortex Prime Setting
    81-1ksVQ9pg 1:38:17 How to Make a TTRPG w/ Jasmine Bhullar | Underwater Cortex Prime Setting Part 2
    TQ5LbIw3mJs 1:21:26 How to Make a TTRPG w/ Danielle Radford | Soap Opera Sorcery Build
    RgntV6f-LVI 1:18:15 How to Make a TTRPG w/ Danielle Radford | Soap Opera Sorcery Build Part 2

    # Geek Gamers - Intro to Solo
    qdLYSh8rzfI 1:07:09 being your own GM demo
    46ERVhpRsRg 58:01 Dungeon Crawl DIY!
    ir6HHyBXyFg 23:27 A session starter
    IHl9yhoUhww 1:11:49 Solo RPG DIY
    hDND-lzxjyk 21:16 An Adventure Starter for You
    ZDJAGNsHN7o 26:58 creating settings for your solo RPG sessions
    im6gq4z5aRg 20:59 how to start a solo RPG??
    kaCM-QQwBQA 13:44 my solo RPG wallet revealed!
    fJzaVQvviWQ 1:05:33 RPG Adventuring, DIY!
    c78zydTroy8 20:08 My favorite game design books
    rx89-ScdnhE 20:40 Random table design
    peoJ-KC3SL0 28:17 Easy and cheap fantasy RPG rules for solo play
    7azbJxO3-Go 48:35 AD&D DM Guide: My best RPG book
    7Sut96WcbHg 43:17 Developing Themes in Solo RPG
    _zhTYnBj0Xo 49:53 Creating Story in Solo RPG
    W07rIanhQYQ 11:12 5 tips for matching an RPG and a game
    aFZH6MMOL3g 20:40 Favorite RPG resources
    9I4Qf-3GkDg 27:43 Solo RPG tutorial (the basics)
    SQzBJ3oLIxQ 37:38 NPCs in solo d&d
    iEmuToC6N3c 7:21 The Solo GM's Best Friend
    wpFU5qwLufI 17:10 Social Combat in RPGs
    9GBPTec5TZA 47:11 Easy Ways to be your own GM (solo RPGing)
    pfnFp83pvKM 9:35 Thinking Like a Solo GM

    # Assorted
    5DKUeyAHrfM 11:17 Dungeon Master's Toolkit: Progress Clocks
    teZQLC0Jlqs 8:35 Dungeon Master's Toolkit: Stealthy Scheme Roll

    iVrGcXto5RM 6:36 Using Progress Clocks from Blades in the Dark in your D&D Game
    CGUPmGZdZFM 38:10 What the Hex?! Intro to Hex Crawls Part 1 - Web DM
    JRocAzz-fzg 56:27 Dungeon world: Fronts Discussion
    Cb5QmchisOc 37:43 Dungeon World Basics 08 - Fronts
    4tFyuk4-uDQ 3:49 I've been running social encounters wrong for 5 years!? D&D 5E
    KGZnKBHTcmg 13:36 Let's Talk About Social Encounters: Dungeon Master Advice
    ZK29NiUkRRc 17:02 West Marches Planning - Quests: How are they generated?
    R5mmzbHd-x8 5:15 Open World D&D Made Easy in 5 Minutes
    vKQv4GC0N9Q 3:22 (animated) D&D How I DM.
    THtUhV_616s 1:18:59 Worldbuilding: The Lords of Capital Part One
    vfe-eNq-Qyg 10:31 The Silk Road and Ancient Trade: Crash Course World History #9
    jb09RvByv4g 9:23 Advanced Hexcrawling Kung Fu: Techniques and Tools
    EEPoXcdz0dU 1:21:16 GM Prep: Sandboxes From Scratch
    -k5jRghKSOU 52:51 Tokaido soundtrack complete
    mcKMbVXpRRA 20:56 On Worldbuilding: Place Names — countries, cities, places
    1mphOIMTl9Y 7:57 Hex Maps for Tabletop RPGs - QED's Corner
    eC-h1haFSIA 34:37 How to Hexcrawl (Dungeons & Dragons, OSR)

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

// Should be one episode
// w_RRcWVmt98 3:15 Writing a Gamebook Part 1
// yg0lJLhloFw 7:30 Writing a Gamebook Part 2
// qL2U4rIeNpE 7:09 Writing a Gamebook, part 3
// pYkjufnRCyc 8:50 Writing a Gamebook, part 4
// xndYEwXa5Tw 6:50 Writing a Gamebook, part 5
// Wqcz8v5gdSE 8:49 Writing a gamebook, part 6
// FdRSYWfzc3Q 4:16 Writing a Gamebook, Part 7

export const channel2Videos: Array<Video> = parseVideos(`

    # Animated History
    _i54q6j3rtc 26:11 The Animated History of Sweden
    6wKur11fXHc 20:23 The Animated History of Argentina
    JEY00w1xtms 21:33 The Animated History of Korea
    l_5kpplGMS4 15:07 The Animated History of Mongolia
    zJvz3Ai9Ppw 17:02 The Animated History of Ukraine
    Q4kF0lRzGnI 25:41 The Animated History of Mexico
    JzYvFypr26U 16:10 The Animated History of Iceland
    TABlbP-tTkk 18:16 The Animated History of Croatia
    vTGDFhi7z4U 9:26 The Animated History of Christmas
    snFjkU85EqI 16:50 The Animated History of Switzerland
    8Zwi3XXLci8 25:10 The Animated History of Japan
    Rd0CV1nmWWY 7:01 The Animated History of The Netherlands
    Pd57hj5rWwA 7:50 The Animated History of England | Part 2
    z9Nn89imUpg 5:55 The Animated History of England | Part 1
    yoCsM3XBiFk 5:46 The Animated History of Hong Kong
    CJVDqlWJ7vY 7:32 The Animated History of the USSR
    QIDDIDS2Tjk 7:26 The Animated History of Australia
    XaYcSBYgcK4 8:04 The Animated History of Brazil
    BnUQAQ5spWE 10:02 The Animated History of Venice & Genoa | Italy Part 3
    zw2MzEorTu0 9:11 The Animated History of Germany | Part 2
    FjFh_GFmQLA 9:44 The Animated History of Denmark | Part 1
    GU5HC06c590 8:49 The Animated History of China | Part 2
    YP1qjTzxQNE 10:06 The Animated History of China | Part 1
    N5gguBcXhgg 10:11 The Animated History of Italy | Part 2
    8P1y2v0BwnM 5:11 The Animated History of Poland | Part 3
    Y16QLJOVP6s 8:06 The Animated History of Italy | Part 1
    iPAwnvyN6xw 7:56 Roman Mythology Animated
    8CwFHH_y2So 11:29 The Animated History of Poland | Part 2
    jV98XaAlg1o 12:33 The Animated History of Poland | Part 1
    dQvaGt9B6H0 10:03 The Animated History of Ireland
    TcXXJis03SE 10:01 The Animated History of Finland
    nPcfZLaMoAo 9:22 The Animated History of Spain
    EMF7mgycg9M 8:49 The Animated History of Russia | Part 1
    ZNk2QOn9oGE 4:59 The Animated History of France
    DgheO1Hbbt8 4:29 The Animated History of Germany | Part 1
    -qbZNM_SSAs 3:19 The Animated History of ISIS
    Jc11rgAIe44 4:03 The Animated History of Scotland

    # Empires Playlist

    26EivpCPHnQ 17:23 Three Kingdoms - OverSimplified
    fc7-Ja26AqQ 16:25 History of The Umayyad Caliphate | Casual Historian | Islamic History
    CO3senO4JZ0 1:34:16 Ancient China and Rome: 1000 Years of Contact // DOCUMENTARY
    XBk9KywTIgk 5:38 The rise and fall of history’s first empire - Soraya Field Fiorio
    BNURBs091pk 13:26 The Byzantine Empire Explained in 13 Minutes
    uficJwaZygw 4:41 All Korean kingdoms explained in less than 5 minutes ( Over 2,000 years of Korean history)
    BnOS90_cwQA 5:15 The rise of the Ottoman Empire - Mostafa Minawi
    Okph9wt8I0A 5:21 The rise and fall of the Byzantine Empire - Leonora Neville
    MNMoi5Af1SY 4:17 The city of walls: Constantinople - Lars Brownworth
    2KdM6AlyLUY 21:50 Yuezhi Migration and Kushan Empire - Nomads DOCUMENTARY
    8I8X7ZOdvTc 12:28 Could YOU have survived as a Roman Legionary during 2nd Invasion of Britain? - TO BRITAIN! - Part 1
    IFhns9MOUt8 5:12 The rise and fall of the Kingdom of Man - Andrew McDonald
    UO5ktwPXsyM 5:46 The rise and fall of the Inca Empire - Gordon McEwan
    m8bDCaPhOek 5:32 How did Polynesian wayfinders navigate the Pacific Ocean? - Alan Tamayose and Shantell De Silva
    6BALmDghybk 5:17 The most successful pirate of all time - Dian Murray
    LaLvVc1sS20 4:58 The history of tea - Shunan Teng
    eC3pKWGjM0c 15:34 All 8 Samurai Wars of the Heian Era (Before the BIG ONE) | History of Japan 59
    10Kc7NmPpME 52:20 Ancient Mesopotamian Warfare in Sumer and Akkad


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
    # Templin Institute | Science Fiction

    KYEddTRGOxI 7:18 Harvesters | Independence Day
    vhj8uOE6KkE 6:45 Rodger Young Type Corvette Transport | Starship Troopers
    xevMy_dl1_g 6:12 United Defense Force | Edge of Tomorrow
    BqcrGNr6xWQ 12:33 Cylons | Battlestar Galactica
    7nhCYGwvGjY 10:00 The Ori | Stargate
    zb96yWd30LY 8:41 United Earth Federation | Supreme Commander
    d72x3BHyZ3E 8:11 Spartan Operations | Halo
    mqMPpTRrySc 9:00 Breen Confederacy | Star Trek
    Vd8nLW6mjEQ 5:33 A First Look At The 25th Century Starfleet | Star Trek
    56_TqNCABtc 11:25 D'Deridex Class Romulan Warbird | Star Trek
    x_7pwreWdto 8:58 House Atreides | Dune
    tvoh6hUbNqI 8:01 Jabba's Criminal Empire | Star Wars
    wq_7oLhbMkE 9:19 Nation 01 // The Machines | The Matrix
    YiQuqUo25bc 9:52 United States Colonial Marine Corps | Alien
    8aUi3Nf3_Ek 13:18 The Flood | Halo
    RvcnnvEwDVk 5:01 Pan-Asian Coalition | Battlefield 2142
    1JQh4jGylFM 7:57 USG Ishimura // Planet Cracker Class Industrial Ship | Dead Space
    VeOLDSunFWo 4:58 Ornithopters | Dune
    3gsIS6xNs8Y 8:41 Citadel Council | Mass Effect
    VhoDNBeaY5k 14:01 Atlas Corporation | Call of Duty: Advanced Warfare
    _HyjQO2vPLY 5:32 Sentinel Hunter-Killers | The Matrix
    FZ45yU85w8c 7:57 Republic of Liberty | Freelancer
    39qKdC5QXSc 6:24 Nar Shaddaa | Star Wars Legends
    fwbttyaokHg 15:41 United Empire of Earth | Star Citizen
    FTNwAwa0I-k 8:41 Chernobyl Exclusion Zone | S.T.A.L.K.E.R.
    saOla22AFnU 9:54 Deep Space Nine | Star Trek
    S3yiGCe3adg 7:26 War Against the Machines // Judgement Day | Terminator
    Rqn79oPcs-M 5:04 Lord Humongus' Marauders | Mad Max
    mubr5zYCz4Q 7:10 Sera | Gears of War
    Ej9mvtY7Yo8 4:53 Auraxis | Planetside
    QjxSHngiXJk 16:57 Adeptus Custodes | Warhammer 40,000
    gJzBYraabec 18:10 The Emperor of Mankind | Warhammer 40,000
    78JmdVyeU0k 19:39 North American Commonwealth | Frontlines
    2nqJH4X3c_4 5:08 Red Bamboo | Godzilla (Showa)
    S9iJ3_-d3XM 10:04 181st Imperial Fighter Wing | Star Wars Legends
    tFlvg1OOpMU 11:14 Rebel Alliance Starfighter Corps | Star Wars
    uUAtgENs62Y 7:39 Scolar Visari | Killzone
    aj6COIw8vOc 41:54 Building Your Interstellar Navy | Ship Types, Naming Conventions, & Fleet Doctrines
    Sp9uZEwnSbM 6:23 Task Force 29 | Deus Ex
    1h22jb--4Z0 7:04 Area X | Annihilation
    kCSTBnOByvs 22:22 Necron Dynasties | Warhammer 40,000
    0aLTJ5SjL4c 13:58 Imperial Fists Chapter | Warhammer 40,000
    l5JLVQ6j2S4 4:50 Blue Sun | Firefly
    fVzL1g-nezo 17:39 Could the Galactic Empire Take Over The Earth?
    t3MtPlYq0yA 11:49 Global Defense Initiative | Command and Conquer
    QJ0eOVNEc7g 12:18 Starfleet Command | Star Trek
    8yB7gYvJaH0 5:31 Mars | Destiny
    nXf4ijlTOgQ 23:14 Galactic Empire | Star Wars
    kSmZmXqJcJg 7:11 The Heritor | Age of Wonders: Planetfall
    x3HmL8usVMw 4:24 Democratic Order of Planets | Futurama
    UOeNl5IScDE 8:36 Mandalorian Clans | Star Wars
    j7CMrKUAnTM 12:10 Krogan Clans | Mass Effect
    nNwi5US6Qfk 21:31 Astra Militarum // Imperial Guard | Warhammer 40,000
    G70cEyFeKP4 6:47 The Syndicate | Age of Wonders: Planetfall
    29s8UaMsd4Q 6:15 The Amazons | Age of Wonders: Planetfall
    hqodyy-UgCQ 5:54 The Dvar | Age of Wonders: Planetfall
    KHD5R3yKido 6:44 Kir'Ko Swarm | Age of Wonders: Planetfall
    SHM2Mrzd9yA 7:11 Vanguard Expeditionary Forces | Age of Wonders: Planetfall
    _HjJRHvxXfU 11:06 Star Union | Age of Wonders: Planetfall
    q-1BoZ1PruM 4:54 The Koprulu Sector | StarCraft
    10FHXR71DsQ 11:35 United Nations | The Expanse
    21P0nqPNz1w 15:45 The Role of Artificial Intelligence in Science Fiction | Detroit: Become Human | Hello Future Me
    EGwQTsW7OZU 17:51 The Orks | Warhammer 40,000
    a3Kjh_yRRkc 8:10 The Red Line | Metro 2033
    JDE4LHqilVU 10:03 The Chimeran War | Resistance
    geh9yajkhgQ 9:54 Grand Moff Tarkin | Star Wars
    TZVO8vCjYK0 9:07 The Combine | Half-Life
    _XG1d6GdTII 6:38 Battlefleet Gothic | Warhammer 40,000
    hPS51S7FxPM 6:09 Echo Base | Star Wars
    JrZ-yq7-9pQ 5:48 Snowpiercer Train | Snowpiercer
    5Geybk8AwZg 7:40 New Helghan Republic | Killzone
    nkWRjrEq4lI 10:20 Cadia | Warhammer 40,000
    X1M9wQVB5bA 6:48 Pan Pacific Defense Corps | Pacific Rim
    5Laftg2pVLs 8:05 Aperture Science | Half Life
    4ImNht75rRc 12:48 Caesar's Legion | Fallout
    oGIDD5rD7Tw 7:23 Omni Consumer Products | RoboCop
    3XWDIE0jrgo 9:24 Terran Confederation | Wing Commander | Audio Log Pilot
    tkXsyRQRZ8M 10:35 The Brotherhood of Steel | Fallout
    vgxGV4GqPk4 6:41 Coruscant | Star Wars
    W1wR1-6BY64 8:15 Death Guard Legion | Warhammer 40,000
    CSOHCPfAWDU 9:13 Geth Consensus | Mass Effect
    SELfIwsfeEI 8:12 The World of Infinite Warfare Doesn't Work
    pStKgw5zMH8 6:01 Ellen Ripley | Alien
    MquIxA_yUJY 7:10 S.H.I.E.L.D. | Marvel Cinematic Universe
    qOFtx1AarFk 4:41 Zoë Alleyne Washburne | Firefly
    QgHXba9TgG0 5:33 Tyrell Corporation | Blade Runner
    JGI3M77PEUI 6:41 Rapture | BioShock
    SNe9BbwnSts 5:34 The Justice Department | Judge Dredd
    MzXtXSUcwic 7:52 Marshal Jim Raynor | StarCraft
    8ULWOL0IbsQ 5:26 Dalek Empire | Doctor Who
    k5eIHKV_pL8 10:57 An Overview & History of the UNSC Navy | Halo Lore ft Templin Institute
    VhCqE07r9Xw 6:41 The Citadel | Mass Effect
    fDtj-f0TwYI 8:53 InGen | Jurassic Park
    ND7d7O9puSY 7:16 Are BattleMechs Useless in Combat? | Battletech | Debates Pilot
    8NHB96xd7Wc 10:56 Star Kingdom of Manticore | Honor Harrington | Audio Log Pilot
    zhuV9ut0GS8 14:18 The Covenant | Halo
    TFDvtXDFJes 8:12 Immortan Joe's Empire | Mad Max
    6rd6dmNEImI 9:48 Carja Sundom | Horizon Zero Dawn
    8bFrGsBmK18 9:34 The Maquis | Star Trek
    IGxjMhMMa-g 8:20 Weyland-Yutani Corporation | Alien
    5X_wUoKV_0U 11:05 Terran Dominion | StarCraft
    1aqK-nMdAHg 9:39 Grand Admiral Thrawn | Star Wars Legends
    f_hJKT7-yuU 5:46 Multi National United | District 9
    bEQame19KVY 5:15 An Overview of The Expanse | Overview Pilot
    bKHUFeHRAEA 7:18 William Adama | Battlestar Galactica | Dossier Pilot
    9ofT1JrwKyY 4:50 Arrakis Sandworms | Dune | Bestiary Pilot
    Z9xMnVfg_n0 16:01 Imperium of Man | Warhammer 40,000
    aIYGTkhASAQ 12:49 Systems Alliance | Mass Effect
    tFVi2rTKVRA 7:54 United Colonies of Kobol | Battlestar Galactica
    UDxQHhRLOTo 9:23 Stargate Command | Stargate
    GTWeLPvnagY 11:24 Minbari Federation | Babylon 5
    58aaAiIhL0I 10:26 Realm of Ultramar | Warhammer 40,000
    vGPORFUhs2g 10:47 Helghan Empire | Killzone
    d5ax_vbHfQs 9:34 United Nations Space Command | Halo
    0SzkxfsVKwY 10:36 The Enclave | Fallout
    -mp-MDCpc9M 4:52 Hawkins National Laboratory | Stranger Things
    DHAQqez3cKk 4:27 Black Mesa | Half-Life
    yN_pGoj7Dnk 4:43 Transdimensional Citadel of Ricks | Rick & Morty
    GDbPvaicYoY 9:22 Klingon Empire | Star Trek
    nJABKm6gM0I 3:44 Union of Allied Planets | Firefly
    ZmSBn-BiXXM 10:08 Turian Hierarchy | Mass Effect
    07DWHRKlUhA 8:19 Romulan Star Empire | Star Trek

    #TravellerCon

    f_JrMGImGAQ 1:09:00 Interview with Craig A. Glesner of Thornwood-Daarnulud LLC - Mayday Traveller RPG Day 2020
    3Z4mPILP8lo 19:21 Traveller RPG Cybernetic Implants: Live Player Panel- Mayday Traveller RPG Day 2020- Part 1
    b5ZNcIwa8JA 39:29 Interview with Neil Thorpe of 2D Storyteller - Mayday Traveller RPG Day 2020
    CpWF9Hfgv5c 20:48 Live Player Panel Discusses Character Backstory- Mayday Traveller RPG Day 2020- Part 2
    U41AyWTX8ls 1:00:43 Interview with Paul Elliott of Zozer Games - Mayday Traveller RPG Day 2020
    LO_WTUlzF1A 2:23 Discussion of Solo and Hostile: Live Player Panel- Mayday Traveller RPG Day 2020- Part 3
    15zarST8jtw 38:02 Interview with Omer Golan-Joel of Stellagama Publishing - Mayday Traveller RPG Day 2020
    pvQKl-S1iXI 18:03 Traveller Character Development: Live Player Panel- Mayday Traveller RPG Day 2020- Part 4
    VQK0oU9Plsk 46:07 Interview with John Watts of Independence Games - Mayday Traveller RPG Day 2020
    d3ghFcFBV4Y 13:45 Playing Traveller with Your Kids: Family Game Night- Mayday Traveller RPG Day 2020- Part 5
    JbE9exAyhV8 51:26 Interview with Mike Leonard of El Cheapo Products - Mayday Traveller RPG Day 2020
    625aMawJEVw 6:29 Diagnosing Space Madness - Live Player Panel - Mayday Traveller RPG Day 2020 - Part 6
    p9xuEr7c3Bg 42:34 Interview with Matthew Sprange of Mongoose Publishing - Mayday Traveller RPG Day 2020
    _ilEP-NtnT4 16:44 Traveller Character Backstory - Live Player Panel - Mayday Traveller RPG Day 2020 - Part 7
    Tg9Gr5NR0ZQ 1:09:29 Interview with Marc Miller of Far Future Enterprises - Mayday Traveller RPG Day 2020
    1lqMmCmwDas 57:58 Live Player Panel and Credits - mayday traveller rpg day 2020 - part 8

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

    RbIwm94P-Sk 31:14 Behind the Claw - Episode 001
    mtnAHBwvdZU 24:34 Behind The Claw - Episode 002
    G3SQBSb471M 24:58 Behind the Claw Episode 3
    9RdPrQiXukc 23:56 Behind The Claw Episode 004
    WmdrTCwhSCo 22:47 Behind The Claw Episode 005
    yTnLdsI48eg 26:25 Behind The Claw 021
    hP-7mBLJYfE 26:30 Behind The Claw Episode 022
    UscQTU_jLlo 23:33 Behind The Claw Episode 023
    sBaETy8Ac48 24:04 Behind The Claw 024
    LxIOJPS1ZF4 26:44 Behind the Claw 025
    EXmpNLhjvoM 26:28 Behind the Claw episode 26
    T1lO5HMpPNY 20:34 Behind the Claw episode 027
    pSY07d6lKDY 21:49 Behind The Claw 028
    f4ZclYQcrIE 21:49 Behind The Claw 029

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
    MHPAb_QNPZg 52:10 TVB Drama | 一劍鎮神洲 01/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    pbY2tNCNkRU 37:53 TVB Drama | 一劍鎮神洲 02/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    ewu9i0BO1BM 46:16 TVB Drama | 一劍鎮神洲 03/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    HZNpqf6Mxa0 44:16 TVB Drama | 一劍鎮神洲 04/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    dGlGISAch-I 47:09 TVB Drama | 一劍鎮神洲 05/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    V8LqxXDxBi0 50:20 TVB Drama | 一劍鎮神洲 06/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    Hkb3SC22dtw 46:54 TVB Drama | 一劍鎮神洲 07/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    kGU_duo23JM 49:46 TVB Drama | 一劍鎮神洲 08/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    9evI6nh58JQ 51:15 TVB Drama | 一劍鎮神洲 09/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    RdwnSQ0fNqY 42:22 TVB Drama | 一劍鎮神洲 10/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    3qF9eOqgeHw 46:10 TVB Drama | 一劍鎮神洲 11/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    gxtKDwoUa74 45:31 TVB Drama | 一劍鎮神洲 12/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    ifF7DgTljUQ 49:42 TVB Drama | 一劍鎮神洲 13/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    bF2ybeDxRZg 40:06 TVB Drama | 一劍鎮神洲 14/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    Y_-1ww3wqyE 44:01 TVB Drama | 一劍鎮神洲 15/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    S1IajcmRL38 46:58 TVB Drama | 一劍鎮神洲 16/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    RqoTS3PkWts 48:17 TVB Drama | 一劍鎮神洲 17/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    cqYuToGVJrc 49:15 TVB Drama | 一劍鎮神洲 18/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    mAyjSLrtHL0 44:43 TVB Drama | 一劍鎮神洲 19/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    v_ML7jHPxps 48:32 TVB Drama | 一劍鎮神洲 20/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    AfXwsCJZv84 48:33 TVB Drama | 一劍鎮神洲 21/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    uWnyLFLSzAY 48:58 TVB Drama | 一劍鎮神洲 22/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    mZVif3zLqDs 40:48 TVB Drama | 一劍鎮神洲 23/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    hOuBbcsN0mA 49:32 TVB Drama | 一劍鎮神洲 24/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    Ow0thiXQ0i8 45:15 TVB Drama | 一劍鎮神洲 25/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978

    liyJmN6Zl28 42:32 TVB Drama | 呂四娘 01/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    oldkvAyjubE 41:33 TVB Drama | 呂四娘 02/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    17xkyK4MbGY 41:29 TVB Drama | 呂四娘 03/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    b2ljRTP8vfA 39:36 TVB Drama | 呂四娘 04/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    X50sYUgC61g 41:05 TVB Drama | 呂四娘 05/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    Q0-fH4OTMZU 41:44 TVB Drama | 呂四娘 06/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    YsZWwEsATcg 41:38 TVB Drama | 呂四娘 07/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    pza00z7I6-s 42:16 TVB Drama | 呂四娘 08/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    TuMIqMsNB6A 39:49 TVB Drama | 呂四娘 09/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    6u-1GGtZSU4 40:34 TVB Drama | 呂四娘 10/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    8S5rB_DoyLY 42:08 TVB Drama | 呂四娘 11/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    uEXtzqIbHvQ 39:45 TVB Drama | 呂四娘 12/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    HhSvKrLXCCw 40:30 TVB Drama | 呂四娘 13/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    JLSpWzei2ts 42:09 TVB Drama | 呂四娘 14/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    QKCLH_fkNkU 41:20 TVB Drama | 呂四娘 15/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    BcoPYv_-gco 42:26 TVB Drama | 呂四娘 16/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    O62Nnb0R4Lw 42:22 TVB Drama | 呂四娘 17/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    buZPaoa3nSM 38:41 TVB Drama | 呂四娘 18/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    7Z6QQXjKe_I 38:34 TVB Drama | 呂四娘 19/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    krMzCCHUJ2g 40:21 TVB Drama | 呂四娘 20/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    on4OAHXpbCM 42:06 TVB Drama | 呂四娘 21/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    peDLXhp0dn8 40:28 TVB Drama | 呂四娘 22/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    DA8Kor9XpPI 42:08 TVB Drama | 呂四娘 23/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    9QvLHhxYEdo 41:35 TVB Drama | 呂四娘 24/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    C-ok5_VsmHs 37:06 TVB Drama | 呂四娘 25/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984

    b6Tkqi4jbCA 47:17 楊家將 01/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    UGggRztpn_8 42:50 楊家將 02/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    iJwk2H2Wp_Y 41:37 楊家將 03/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    Nzq4PzVQ1YE 55:46 楊家將 04/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    mt9zmzt_MF0 52:51 楊家將 05/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    lvbgJadfHPY 37:40 楊家將 06/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985

    sQsLNYNHR1c 45:34 TVB Drama | 南拳北腿 01/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    7tyDXPm1TVI 45:32 TVB Drama | 南拳北腿 02/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    nzGMyw5UhJk 46:21 TVB Drama | 南拳北腿 03/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    f2ml_x5TkLo 46:14 TVB Drama | 南拳北腿 04/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    zF_1TyOVXVo 45:38 TVB Drama | 南拳北腿 05/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    UQ_QLMiPU0k 45:27 TVB Drama | 南拳北腿 06/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    gO2q_PSomG8 45:34 TVB Drama | 南拳北腿 07/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    7x9pQSJCayg 45:38 TVB Drama | 南拳北腿 08/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    okURZ5jqBD8 45:11 TVB Drama | 南拳北腿 09/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    zRMbswrhw3s 43:08 TVB Drama | 南拳北腿 10/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    GlxzVLyvvqY 44:57 TVB Drama | 南拳北腿 11/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    fAAU2NLJOf8 45:57 TVB Drama | 南拳北腿 12/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    wKJy7-_1Lcg 44:31 TVB Drama | 南拳北腿 13/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    jzT8QcSAfrQ 42:16 TVB Drama | 南拳北腿 14/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    tRVk3jrnobY 45:01 TVB Drama | 南拳北腿 15/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    pCfVLZ_KpoI 45:20 TVB Drama | 南拳北腿 16/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    N_98aAvIlLQ 45:41 TVB Drama | 南拳北腿 17/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    6EBKXUjtsQ0 45:27 TVB Drama | 南拳北腿 18/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    Tv9oKUMOIxs 45:31 TVB Drama | 南拳北腿 19/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    9VBXyAqGFLM 46:04 TVB Drama | 南拳北腿 20/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995

    ZZG3CqKp1xM 46:01 絕代雙雄第一集 | 隋唐群英會 01/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    RaVkNxLoi_k 45:57 絕代雙雄第二集 | 隋唐群英會 02/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    Qa95caZAYno 46:07 絕代雙雄第三集 | 隋唐群英會 03/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    blbMC1ralNk 45:43 絕代雙雄第四集 | 隋唐群英會 04/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    8z2025A8ngY 45:43 絕代雙雄第五集 | 隋唐群英會 05/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    uREM87b_qmA 45:38 風塵三俠第一集 | 隋唐群英會 06/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    B2zf7cuu_Xw 45:45 風塵三俠第二集 | 隋唐群英會 07/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    9z8O5RJM2S8 45:51 風塵三俠第三集 | 隋唐群英會 08/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    b0j0Ijlg1YQ 45:52 風塵三俠第四集 | 隋唐群英會 09/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    WR7nSFwgfcI 45:40 風塵三俠第五集 | 隋唐群英會 10/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    jjgv-Zc0SBk 45:33 瓦崗寨風雲第一集 | 隋唐群英會 11/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    klmw-565kSA 46:02 瓦崗寨風雲第二集 | 隋唐群英會 12/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    rwmGvKXKbm8 45:39 瓦崗寨風雲第三集 | 隋唐群英會 13/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    GvMuCaEB0EQ 45:55 瓦崗寨風雲第四集 | 隋唐群英會 14/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    Jh-8SHmQtxo 45:56 瓦崗寨風雲第五集 | 隋唐群英會 15/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    lTwgt4BNED4 45:40 義師勤王第一集 | 隋唐群英會 16/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    E4x_CU819Cc 45:32 義師勤王第二集 | 隋唐群英會 17/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    VSaujXFTRx8 45:37 義師勤王第三集 | 隋唐群英會 18/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    5wMIrzPWT78 45:36 義師勤王第四集 | 隋唐群英會 19/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    c4YhMBKn1To 45:29 義師勤王第五集 | 隋唐群英會 20/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996

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

    gfrGJc3c8Ek 43:45 太極 01/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    18ukcv0vym4 43:43 太極 02/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    D92mah_buog 43:18 太極 03/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    Bqf55dA1pr4 43:25 太極 04/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    5azhfJCC_Jk 43:33 太極 05/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    HcpicGzFIVU 43:33 太極 06/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    dIRu-muoLLk 43:32 太極 07/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    X2-T9wY-DPQ 43:40 太極 08/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    Yy_j31lRGtk 43:33 太極 09/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    5tYV71h-6ik 43:32 太極 10/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    MHCxT-My7PU 43:22 太極 11/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    KvkbG3ODDCk 43:45 太極 12/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    qnut0Zavsmg 43:45 太極 13/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    KjgBEEuqJWg 43:39 太極 14/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    3Q_Jzv8vI70 43:45 太極 15/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    CO6ReyyG80E 43:33 太極 16/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    rPY7oaZbEV0 43:39 太極 17/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    JHrP5SyU1W4 43:26 太極 18/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    5ltPE8IkDPs 43:40 太極 19/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    UeoBtCwxXjE 43:39 太極 20/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    Nx89vuftc0M 43:35 太極 21/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    8GnujcZnXR8 43:20 太極 22/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    CWlJZQDW-r4 43:13 太極 23/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    l_PKQBzXcSg 43:46 太極 24/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    bPdlfUNptlg 43:38 太極 25/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008

    NUwKCtFG-gw 43:48 包青天再起風雲 01/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    TjeyUzyaLi0 43:42 包青天再起風雲 02/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    PH0QDf1mRnc 44:02 包青天再起風雲 04/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    Bhx3X0PO3no 44:02 包青天再起風雲 03/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    8bQY7nPcps0 43:56 包青天再起風雲 05/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    wZrwyqz_41Q 44:00 包青天再起風雲 06/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    xKOorez7ieM 44:00 包青天再起風雲 07/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    4Xzm3Vp5Z78 43:48 包青天再起風雲 08/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    G2qMf-vwHWw 44:01 包青天再起風雲 09/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    iRi2Ehhb-oo 44:01 包青天再起風雲 10/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    9-TL1V2kmfI 43:55 包青天再起風雲 11/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    ITBnDKGGDLU 44:00 包青天再起風雲 12/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    vBWOPbP7ZdE 43:55 包青天再起風雲 13/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    KcVX1OTM0h0 43:55 包青天再起風雲 14/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    _THstURHwfk 43:43 包青天再起風雲 15/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    JzHyETp8M6g 44:02 包青天再起風雲 16/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    y9VJ-eBTZM4 44:01 包青天再起風雲 17/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    Uw71g-Supvw 43:58 包青天再起風雲 18/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    yoMuUX8BsP8 43:57 包青天再起風雲 19/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    dEiGnmXcUFg 43:59 包青天再起風雲 20/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    rr0sUCd6l90 43:56 包青天再起風雲 21/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    GCAPB86ptts 43:42 包青天再起風雲 22/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    FMcsDqvvhzY 43:48 包青天再起風雲 23/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    NAxg1lUk2Mo 43:44 包青天再起風雲 24/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    8EU2a3QGqZ4 44:01 包青天再起風雲 25/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    MPFe0ZA4MCU 43:41 包青天再起風雲 26/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    0CMG_C4BAKA 43:56 包青天再起風雲 27/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    FIl6HM5vQag 43:56 包青天再起風雲 28/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    -llByQ7sZPo 44:02 包青天再起風雲 29/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    nHhxOvoxpZU 43:38 包青天再起風雲 30/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
`)

export const mechaThemeSongs: Array<Video> = parseVideos(`
  96ouCiqGCNE 1:37:14 The Big O - OST 1 & 2

  S_ZvIBRk7SU 3:22 Guyver OST - Threat of Cronos
  2bBgSzB0XVc 3:28 Guyver OST - Combat Agent Member
  c2RW6UuV2GQ 2:30 Guyver OST - Marvelous Bio Boost Armor
  nalOS-AX9Xg 3:14 Guyver OST - Alien's Messiah
  JcbXvvC0mrg 3:10 Guyver OST - Devil Hands chasing
  eK55NOekRk4 3:16 Guyver OST - Challenge of Guyver II
  irv9HQBdx40 3:26 Guyver OST - Death of Bio booster
  jaknz-0rpp4 4:02 Guyver OST - Suffering
  FwYK6C8b65Y 3:44 Guyver OST - Guyver I Kidnap
  2fE-brd45rA 3:38 Guyver OST - Kyoushoku Soukou GUYVER
  S624D_HFPp4 1:06 Guyver OST - Classmates
  FD1bf2xSZOc 4:43 Guyver OST - Team 5 battle position
  Zx0a6z88kZs 1:41 Guyver OST - Guyver III Appears
  Hp8N6NCjM_c 3:25 Guyver OST - Lonely Shou
  NVkPVgY24G4 3:50 Guyver OST - Guyver I falls
  MDDYTNQ5Iho 4:01 Guyver OST - Sadness of Mizuki
  PoWjGS_BH_0 3:10 Guyver OST - Imminent Battle W Guyver
  u4Vc-nT09P4 3:12 Guyver OST - Shou and Mizuki

  VXg63oDaD3s 2:50 [Anime Classic] L - Gaim ~ Time For L-Gaim
  Z5pyMzyb5vc 4:56 shadow skill op born legend (full version)
  a4RKqvJqDJ8 4:48 Megazone 23 soundtrack - 4. Kaze no Lullaby (Lullaby of the Wind)
  HABztzndFi4 4:22 Megazone 23 Soundtrack - 11. Senaka-Goshi ni Sentimental (Sentimental Over My Back)
  TFtxRRi3ewI 3:44 Combat Mecha Xabungle Opening Full
  IacgoGWOi5M 5:12 聖獣機サイガード Cybernetics Guardian - 07 "Can't Get It Enough"
  pCQdGF7Rqx4 3:56 Fight Iczer 1~ Eien no Iczer 1
  t02JzTMJxKQ 3:23 Fight! Iczer One - Eternal Iczer-1
  oFpp9b-O_JU 3:44 Genocyber OST 1: 01. Fairy Dreamin' (Vocal) - WIZZ-KISS
  an_0IIRDlc4 4:47 Bubblegum Crisis - Opening | "Konya wa Hurricane" (There's a Hurricane Tonight) by Kinuko Ohmori
  xrjUj-FRorY 4:14 Outlaw star opening theme
  Pqn_zzd1ZkA 9:00 刀根麻理子 ／ デリンジャー～HOT STUFF
  eDv5ySacHac 4:18 Iczer 1 Music theme: NEVER RUN AWAY
  g0oU80VbSF8 3:23 Forgotten Junk: Makyou Gaiden Le Deus - OP
  Pf10yCUCq88 3:23 Blood Reign: Curse of the Yoma OST - Midori Karashima - Ashita e no Prologue (Prologue for Tomorrow)
  iFtKaw3Jksc 3:36 Dangaioh full opening song
  jCF3Z3L5SuM 4:12 Project A-ko 3: Cinderella Rhapsody - ED [Get a Chance!]

  # Mecha Anime Openings https://www.youtube.com/playlist?list=PLZ6GAQ4derFa_0gbIAJ_SLK-kOBDVWUPG
  c2zYuQqzEJQ 1:15 1963 Tetsujin 28 gou Opening Tetsujin 28 gou Duke Aces] [CKR] [0AA53060]
  2m1m-YWgQ84 1:11 Astroganger 1972 Opening
  MR7xA2JbNCQ 1:02 Mazinger Z Opening 1 Japones | マジンガーZ
  W6ahWjlP3q4 1:09 Getter Robo 1974 Opening
  UDjkXkMTg-c 1:01 Great Mazinger Opening
  07iM9PT-buE 1:10 Yuusha Raideen OP (English Captions)
  jjieygKSXpQ 1:10 Getter Robo G Opening
  9n3GEsKwhis 1:28 1975 Uchuu no Kishi Tekkaman Opening Tekkaman no Uta Mizuki Ichirou] [CKR] [53A71406]
  tW8JKCouIA4 1:12 Grendizer Opening
  pA0Uj3BJ1d0 2:01 Jeeg - opening (original version)
  G4pNfyHIi2Y 1:11 Gaiking Japanese Opening HQ
  Z52A2Nb6Q24 1:17 Dai Apolón Intro Japonés
  FNiDo84BRFE 1:15 초전자로보 콤바트라 V 오프닝 combattler v Opening
  _Qr0vzhMVT0 1:02 Groizer X
  xuKt5BUy7nA 1:01 Gakeen Opening
  rZam2ZC81bw 1:25 Mekanda Robo
  6tiUoS9-tCI 1:11 Planet Robo Danguard Ace Opening
  3wpipSyYsTE 1:09 VOLTES V
  Lt-aOnmKQhE 2:00 Balatack
  32JJ7O65nm0 1:32 Invincible Superman Zambot 3 Opening
  zQgVxUCO4RA 1:07 General Daimos Opening
  edMaT41DwOQ 1:32 無敵鋼人ダイターン3 OP (STEREO)
  L80qGAVEOTQ 2:54 宇宙魔神ダイケンゴー(ナレーション入りFULL)
  WT8itiVr4ng 2:20 未来ロボ ダルタニアス OP・ED
  GLWLy_Cz2ZY 2:46 Sub Latino, GUNDAM Opening, Vuela Gundam! 飛べ！ガンダム　機動戦士 ガンダム Hi Res Audio.
  k7dm5Gx8xUo 1:20 Gordian intro
  soMcPAwIsgk 1:27 Trider G7 Opening JAPANESE
  kpojMJXEe1M 1:20 God Sigma original opening title
  TIcYvE231q8 1:21 Space Runaway Ideon Opening 【HD】
  N2NX6cVMlkM 1:24 Space_Warrior_Baldios OP HD
  4hSuPdW_i_s 1:31 SAIKYO ROBO DAIOJA OP
  eBekEB-bMdQ 1:17 gold lighter op
  bVw5khpgbSw 1:16 Golion OP
  1f-oASal95Y 1:31 Goshogun - opening (original version)
  jLFcGXmJ6MM 3:27 六神合体ゴッドマーズ OP (FULL) GOD MARS
  R9OolcoJKpk 1:21 銀河旋風ブライガー Galaxy Cyclone Braiger OP (Eng Subs)
  IE6IKESS45E 1:32 1981 Taiyou no Kiba Dagram Opening Saraba Yasashiki Hibi yo Asada Mamoru] [CKR] [53CA8B8A]
  tpoIiK8gk8c 1:32 xabungle OP
  zbUBeU81s_s 1:32 魔境伝説アクロバンチ OP「夢の狩人」
  a73e3LjFwUo 1:30 銀河烈風バクシンガー OP「銀河烈風バクシンガー」
  sAUwdwGOh7E 1:30 Macross Op
  qK_pDGzJubo 1:21 亜空大作戦スラングル 前期OP「亜空大作戦のテーマ」
  fn1JAY6M6jU 1:32 聖戦士ダンバイン/ Aura Battler Dunbine OP BD (1080P HD)
  j8t4cHz9IAQ 1:18 Lightspeed Electroid Albegas intro
  J8hwDQJRU7E 1:31 Armored Trooper Votoms OP
  GgP4aMcm5dU 1:32 銀河疾風サスライガー OP「銀河疾風サスライガー」
  ztw3EaoxPJM 4:43 Sky-hurricane (Augus-opening Theme)
  yBR8PRoUP28 1:31 Psycho Armor Govarian OP [English subtitles]
  SehHbl24gQk 1:23 Genesis Climber Mospeada Opening HD
  fDIXVIWc0CQ 1:15 Opening Dorvack
  Qwszwb3aIPg 1:31 VIFAM OP
  Nuvca6MPO0s 1:31 L-GAIM OP 1
  kK8uSufYqD0 3:15 Video Warrior Laserion Full Theme (1984)
  N7st-s83IFk 1:31 Giant Gorg Creditless OP [English Captions]
  f7UUQd7lLbA 2:00 Super Dimension Southern Cross OP
  00E3arZ_aiU 4:15 God Mazinger - DREAMY MY LOVE (MIQ version)
  s2CiX6ArmsQ 1:31 Panzer World Galient OP
  UIyKptTyuPw 1:29 超力ロボ・ガラット OP [STEREO]
  WA8OYMwqkM8 1:45 Sei Jushi Bismark Opening
  vbAk5UcZGY0 2:18 Megazone 23 Part 1 Opening
  I5cRFv5iLvw 1:22 Dancougar - Opening [HD Remastered]
  gJWpOqrMtjs 1:42 Aoki Ryuusei SPT Layzner OP HD (Textless)
  Uq_TD0_2_1s 1:39 ninja sensi tobikage op
  t02JzTMJxKQ 3:23 Fight! Iczer One - Eternal Iczer-1
  9IBkG8E4qYc 1:32 Gundam ZZ opening HD
  xl4IqLfzHwg 1:31 Machine Robo: Revenge of Cronos OP
  eSMAsoLvEXw 1:40 머신로보 배틀 해커즈 (マシンロボ ぶっちぎりバトルハッカーズ) (Machine Robo Battle Hackers) OP
  ItCMX3A1qaE 1:31 DRAGONAR OP 1
  oQKavTdZKvA 1:21 Transformers The Headmasters Opening (HD)
  8BcM31lohl0 1:30 Dangaioh OP
  w0rb3VaSt7E 2:29 Guardian Deity - (Aura Battler Dunbine Palladium OST)
  xE6SAE1tCEE 5:35 Beyond The Time
  gX_8tobdiMc 1:22 Transformers Master Force Opening
  ZQxC1vGgyoo 1:30 Eiyuuden Mashin Wataru opening
  fMpI_bc3LrI 1:31 Mobile Police Patlabor 1988 (Early Days OVA) - opening [HD] Remastered
  GMISeKT5c-U 1:25 Opening Gunbuster Japones
  KkF13YQkPx0 3:56 Awake! Zeorymer(High Quality Sound)
  wo8W-kuPuxg 1:32 Bio Armor Jushin Liger Opening 1
  1Khksntkwis 1:21 Transformers Victory OP subtitulado
  1WwZPwVLR08 3:53 いつか空に届いて
  dUSNV-A8gts 1:30 GRANZORT
  Adno8sRTono 3:55 Mobile Police PATLABOR the Movie - Ending Theme
  Z9UtUzjUA5Q 1:32 Patlabor on Television - Opening [HD] Remastered
  GkFoLL0QmFQ 1:30 Exkaiser Op English Sub
  SNGoAkdr6hU 1:32 Mashin Hero Wataru 2 Opening 2 "Fight!"
  OxGilsRr5Yk 1:27 NG Knight Ramune & 40 - clean OP1
  4Z4l0vKVnSA 1:21 Opening Titles : Transformers: Zone
  k3WMr1EhRL8 1:34 Patlabor: The New Files OP2 (mamoritaino)HQ
  DA9asP4wCi0 1:31 太陽の勇者ファイバード OP
  rgfIFp0lfog 1:20 Getter Robo Go Opening
  uM3Ltvq22fk 4:39 Kimi wo mitumete
  cD28CY-ZAl8 1:30 raijin oh opening
  eP0U3irjIow 4:10 THE WINNER
  8mDvhVVAqf0 1:22 Detonator ORGUN
  NdpAOPKSMSo 1:31 ダ・ガーン OP 2
  pmX564UTabE 1:32 Tekkaman Blade 1st opening
  rHbWxMryIls 1:32 Genki Bakuhatsu Ganbarugar Creditless OP
  1lG1BToaLTw 1:38 鉄人２８号ＦＸ Tetsujin 28-Gou FX Opening
  o3Q0aNdLtds 1:52 Giant Robo The Animation (1992) Intro scene 1080p
  g_AZikitKcs 1:31 Might Gaine textless OP1
`)
