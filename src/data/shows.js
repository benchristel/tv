// @flow
import type { Video } from "./types"
import { parseVideos } from "./ingestion"

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
