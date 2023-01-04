// @flow
import type { Episode, Video } from "./types"
import { parseEpisodes, parseVideos } from "./ingestion";

export const debuggingVideos: Array<Video> = parseVideos(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
    zBIx-gP-I8c 0:51 Strong Bad Email #1 - Some Kinda Robot
    BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
    wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
    Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`)

export const channel1Videos: Array<Video> = parseVideos(`

# LOTR extras

xJNKs4InzUc 1:24:54 Lord of the Rings Fellowship of the Ring Extras (Part 4)
8sZMTUIegE0 1:37:27 Lord of the Rings Fellowship of the Ring Extras (Part 3)
V9HrGfkI2mw 1:42:26 Lord of the Rings Fellowship of the Ring Extras (Part 2)
ZobbJ-HH59c 52:22 Lord of the Rings Fellowship of the Ring Extras (Part 1)

# Wikitongues

5Gc--eO0ok8 6:22 The Manchu language, casually spoken | Shihuan, Ronglu, and Shiyu speaking Manchu | Wikitongues
OjT3DSOZGCg 6:54 The Korean language in Uzbekistan | Olga speaking Koryo-mar and Russian | Wikitongues
QAK3clpBLNg 11:15 Yiddish songs with Russian explanations | Olga speaking Russian and Yiddish | Wikitongues
faidns4sK3Q 26:51 Announcing the 2022 grant recipients
yJGfF8iDMzo 2:36 Yorkshire English, casually spoken | James speaking West Riding Yorkshire dialect | Wikitongues
HuhNYr_p9g8 3:14 The Louisiana Creole language, casually spoken | Taalib speaking Kouri-Vini | Wikitongues
rUE1bzIx3u8 3:16 The Manx language, casually spoken | Owen speaking Manx | Wikitongues
M82TbP5Gan4 1:51 The Mazanderani language, casually spoken | Negar speaking Mazanderani | Wikitongues
FqAnl_8tMmI 2:06 The Hakka language, casually spoken | Dungsan speaking Hakka Chinese | Wikitongues
NNep7NOeaVI 2:27 The Mahasuvi language's Rohruri dialect, casually spoken | Wikitongues
r8R0FbhpGuE 1:57 The Hokkien language, casually spoken | Selly speaking Median Hokkien | Wikitongues
9Fa1TOfPuJ0 1:41 The Kaitag language, casually spoken | Magomed speaking Kaitag | Wikitongues
4S5ZOg05dVY 1:07 The Turkic Karachay-Balkar language, casually spoken | Raya speaking Karachay-Balkar | Wikitongues
QnlFfV60Qeo 29:05 The Nahuat language, casually spoken | Nantzin speaking Nawat | Wikitongues
msL692DxAS4 1:53 Yiddish and Scottish English, casually spoken | Harold speaking Yiddish | Wikitongues
MiyopZEfuJI 2:34 The Surzhyk language, casually spoken | Andrij speaking Surzhyk | Wikitongues
fiOglXiVbjo 3:20 The East Pomeranian language, casually spoken | Lilia Jonat speaking Pomeranian | Wikitongues
_7ZdE-msDOQ 5:34 The Low Saxon language, casually spoken | Albert speaking Rouveen Low Saxon | Wikitongues
eHN_bCg-JuQ 4:40 The Shona language, casually spoken | Rue speaking Karanga Shona | Wikitongues
u3c9Ke5yDNk 2:19 The Kayan language, casually spoken | Wahyu speaking Kayan Mahakam | Wikitongues
J2aryUaVSBQ 5:28 Acadian French, casually spoken | Nicholas speaking Acadian French | Wikitongues
qpfxFvpLAJ8 28:53 The Portuguese language, casually spoken | Ygor speaking Brazilian Portuguese | Wikitongues
ArS9-GVw8nc 4:26 The Juhuri language, casually spoken | Vera speaking Judeo-Tat and Russian | Wikitongues
9EpGjIsie44 6:45 The Javanese language, casually spoken | Davi and Jonathan speaking Surabaya Javanese | Wikitongues
_oCwNGxY5Co 2:18 The Sirmauri language, casually spoken | Kirnesh speaking Giripari dialect | Wikitongues
ZgaPLvMBeFo 1:43 Kupang Malay, casually spoken | Engelbirth speaking Kupang and Bahasa Indonesia | Wikitongues
N4RMhrlk60E 4:35 The Basque language, casually spoken | Andrew speaking Biscayan | Wikitongues
pAUaSmVQ1Sg 3:28 The Twents language, casually spoken | Martin speaking Twents | Wikitongues
FvuH1eaV8Xw 1:33 Yoruba and Nigerian Pidgin, casually spoken by Ayooluwa | Wikitongues
M0KK_ogkLDw 1:02 The Turoyo language, casually spoken | Adam speaking Aramaic | Wikitongues
Jfqg5yEV2to 2:17 The Qʼeqchiʼ language, casually spoken | Amalaia speaking Kekchi Mayan | Wikitongues
e-rY2zkCNtU 2:07 The Teochew language, casually spoken | Widya speaking Pontianak Teochew | Wikitongues
lgVhTfdkWAw 2:29 Kenya's Yaaku language, casually spoken | Leteyion speaking Yaaku | Wikitongues
mN7592r79vM 0:57 The Georgian language, casually spoken | Mariam speaking Georgian | Wikitongues
zOb8s6GAj5E 2:16 The Wu Chinese language, casually spoken | Chengxi speaking Hangzhou Chinese | Wikitongues
YyYrWgfaRwk 0:41 The Yoruba language, casually spoken | Bisola speaking Yoruba | Wikitongues
5UQPNAEDa4Y 1:10 Zambia's Lungu language, casually spoken | Daniel speaking (and singing!) Mambwe-Lungu | Wikitongues
35f7h4GsURo 35:25 The Ladino language, casually spoken | Isaac speaking Ladino | Wikitongues
TCLzMvpaB8M 1:46 The Maltese language, casually spoken | Elena speaking Maltese | Wikitongues
kKg2gaNzBK4 27:20 Italy's Piedmontese language, casually spoken | Giorgio speaking Piedmontese | Wikitongues
ilGopSRCea0 1:14 The Tigrinya language, casually spoken | Michael and Sennite speaking Tigrinya | Wikitongues
E3qV-_Ba4PU 6:17 The Ladino language, casually spoken | Sara speaking Ladino | Wikitongues
ZvdvKBvPH9M 4:25 The Lisaan ud Da'wat language, casually spoken | Ali speaking Lisaan ud Da'wat | Wikitongues
wIlOPJLhks4 2:43 The Swedish language, casually spoken | Johanna speaking Swedish | Wikitongues
TlMUj5JDMWE 2:42 Listen to the Fante language of Ghana | Collins speaking Fanti | Wikitongues
4nJ1AjNeYys 5:02 The Bangla language spoken | Zarrin speaking Bengali | Wikitongues
jZgofxN6rmk 1:20 Listen to the Khmer language of Cambodia | Chantara speaking Khmer | Wikitongues
fbOOrqY7b_o 1:42 Pasquale speaking Materano and Italian | Romance languages in Italy | Wikitongues
WlqTafVa5pU 3:47 Sanhaja de Srair, a Berber language from Ketama, Morocco | Mohammed speaking Shelha | Wikitongues
8GsglYcXhyg 1:33 Listen to the Veps language of Karelia | Eniisi speaking Vepsian | Wikitongues
5F5m6W95U_M 0:50 The Judeo-Arabic language of Egyptian Jews | Ben speaking Judeo-Egyptian Arabic | Wikitongues
gTt6LkoZ1z4 2:44 Listen to Cabo Verde Creole | Patrick speaking Cape Verdean Creole | Wikitongues
pjtSNq2yXVE 1:55 Listen to the Luo language of Kenya and Tanzania | Dholuo language | Wikitongues
mORCaQbggIo 9:41 Listen to the Kurdish language in Iraq | Xatun speaking Sorani | Wikitongues
Zk376vSlUyA 2:53 Listen to the language of Cochin Jews | Thapan speaking Judeo-Malayalam | Wikitongues
nMEKd_KSf30 2:42 Listen to Sinhala, a language of Sri Lanka | Shehan speaking Sinhalese | Wikitongues
1xGw9kQjHWI 2:04 60,000 people speak this language from Sulawesi, Indonesia | Nita speaking Mamuju | Wikitongues
e9y_WshNAyE 5:06 Listen to Gallo, a Romance language of Brittany, France | Anton speaking Gallo | Wikitongues
rSTBr8QbCtg 4:17 Beautiful click consonants in Namibia's Khoekhoe language | Emeloelaj speaking Nama | Wikitongues
vfXBjv-uMZM 3:18 Speaking Irish Gaelic in New York City | Frances speaking the Irish language | Wikitongues
oY8ihozIYng 1:00 A prayer in the Aramaic language | Jeries speaking Syriac | Wikitongues
GohjqZQHDlM 2:44 The Sasak language of Indonesia | Raden speaking Sasak and Indonesian | Wikitongues
vFbZR5shzCk 1:23 The Turkana language of Kenya and Ethiopia | John speaking Turkana | Wikitongues
6UctiHFsUrE 1:05:21 Radio in Language Diversity | Conversations from Jamaica and Zambia | Wikitongues
-lVudWbCaik 2:18 Vietnamese language conversation | Loan and Lian speaking Hue Vietnamese | Wikitongues
I-xiEyYtAwo 5:19 Norman, a Romance language of Britain and France | Jean speaking Cauchois | Wikitongues
lRujenUdJng 10:34 The Arabic language in Kurdistan, Iraq | Rashad speaking Iraqi Arabic | Wikitongues
Ddydi1lcvGU 10:35 The Kurdish language in Iraq | Dara speaking Sorani | Wikitongues
Bzlwr2_8ljg 3:37 The Lombard language in Brescia, Italy | Marco speaking Bresciano | Wikitongues
yBSatcQrbVw 0:57 Sign language in Brazil | Abel speaking Brazilian Sign Language, also known as Libras | Wikitongues
iDPp2yORw94 1:09:11 Music in Language Diversity | Conversation and music with Call Me Córdoba | Wikitongues
JQR2KOO7-No 5:32 Poetry in Zambia’s Ila language | Mojack speaking Ila | Wikitongues
1nCw24V3nV8 1:26 Polyglot learner of Sakha, a Turkic language | Albert speaking Sakha (Yakut) | Wikitongues
HaYhISDoVyM 26:16 Wikitongues Updates, September 2020
5yx8o4JOQRA 2:26 The Huli language of Papua New Guinea | Anneth speaking Huli | Wikitongues
7q4G38S-Wm4 4:34 The West-Flemish language of Belgium | Bontje speaking West-Vlams | Wikitongues
B56nxfnSV4U 1:30 Guangxi Cantonese language conversation | Ying and Lian speaking Cantonese | Wikitongues
MMfozbb4w74 2:18 The Lombard language in Brescia, Italy | Nicole speaking Bresciano | Romance languages | Wikitongues
hs6qyMcOwjY 7:24 Bahasa Indonesia, an Austronesian language | Pualam Abadi speaking Indonesian | Wikitongues
mDycRy0tZXs 2:12 Reviving the Injinoo Ikya language | Aboriginal Australians & Torres Strait Islanders | Wikitongues
olM7YMyxd5I 3:05 Rusyn, a Slavic language | Ivan speaking Pannonian Rusyn | Wikitongues
QMNBUmWBZ-o 10:24 Kurux, an Indigenous language of India | Dr. Abhay Xaxa speaking Kurux | Wikitongues
qlJ7A9kbH40 2:18 Austronesian languages of Kalimantan, Indonesia | Victor speaking the Bahau language | Wikitongues
A9BO3Sv1MEE 1:52 Native Esperanto speaker | Stela speaking the Esperanto language | Wikitongues
8sP3R7aCAno 4:11 Zazaki, an Iranian language from Turkey | Cemre speaking Southern Zazaki | Wikitongues
etUt37dgA4o 2:07 John speaking Maasai | East African language | Wikitongues
2UmHjJvPGec 2:49:21 Wikitongues Virtual Birthday Party
8vZwNYjN1CE 3:29 Arimardan speaking Bhojpuri | Languages of India | Indo-Aryan languages | Wikitongues
yyFsmiNXqXg 3:01 Britta speaking Chichewa (Nyanja) | Bantu languages | Folk songs | Wikitongues
98uqtsvCWwU 6:44 Ramzy speaking Minangkabau | Minangkabau language | Wikitongues
V1hLSrjKNas 2:35 Annie speaking Bassa | West African language | Wikitongues
3ghwdhXaLoo 4:02 Ingrid speaking Nyungar | Aboriginal Australians and Torres Strait Islanders | Wikitongues
NI9lRDW_x2E 9:32 Adrian speaking Caribbean Spanish | Romance languages | Wikitongues
DoQdMWN5C8A 2:03 Zita speaking Twi and Dagaare | Ghanaian languages | Wikitongues
3428HkaqA94 2:50 Edward speaking Hong Kong Cantonese | Sino-Tibetan languages | Wikitongues
RObSwrdDnN8 3:08 Mahuton speaking Fon, Gun, and Eastern Xwla | Niger-Congo languages | Wikitongues
1fuNjOEhNvI 2:06 Éanna speaking Irish and English | Celtic languages | Wikitongues
4f2IQ219Xg4 2:09 Muadz speaking the Central Asmat language | Papuans | Wikitongues
pDDrFE3CaTc 2:05 Alfred speaking Gunggay | Aboriginal Australians and Torres Strait Islanders | Wikitongues
dgT6xExNcns 3:20 Blossom Speaking Igbo | Niger-Congo languages | Wikitongues
SMgN7tClSM8 1:45 Dhrubhagat speaking Hiligaynon | Austronesian languages | Wikitongues
zhQNFQCcMxI 1:29 Sheree speaking Kalkutungu and English | Aboriginal Australians and Torres Strait Islanders
tUWWNDUV2Tg 7:48 Ahmad speaking Aleppo Arabic and English | Semitic languages | Wikitongues
k19I3vyu0WU 1:22 Juan Carlos speaking Santiagueño Quichua and Spanish | Quechuan languages | Wikitongues
Mfd16z-ucWY 0:48 Census 2020 Language Project, in Egyptian Arabic | League of Women Voters
ld_92xGvyng 2:12 Mireille speaking French | Census 2020 Language Project | League of Women Voters
XhRzY5ApkBc 2:00 Tarya and Carys speaking Spanish | Census 2020 Language Project | League of Women Voters
1UutaDfzaqc 1:05:06 How do I save my language? Introducing the Language Sustainability Toolkit
x7cFUScyj4g 1:10 Census 2020 Language Project in Korean | League of Women Voters
dm1e9mJ2BJQ 1:36 What's the Census 2020 Language Project? | League of Women Voters
pEU_EC7OcdE 1:04:38 Tim Brooks from Endangered Alphabets | FIRST-EVER Wikitongues live-stream!
xAw_7w-hQwU 23:32 Hangi speaking Kihunde | Central African languages | Wikitongues
qiti3HaADlo 43:16 Speaking of Us, Ep. 1: Anna Luisa Daigneault | Languages Podcast by Wikitongues
g92Og21FC6Y 2:03 Thomas speaking Walloon and English | Romance languages | Wikitongues
m8IQRKl7UT0 3:16 Deola speaking Sijunjung Simaung | Minangkabau language | Wikitongues and Wikimedia Indonesia
csUZolJETdI 0:57 Nasser speaking Arabic and Siwi | Egyptian languages | Wikitongues
IM-g4Kh0G8w 3:31 Anne speaking Yumplatok | Aboriginal Australians and Torres Strait Islanders | Wikitongues
4NwcTJ8_ZWY 3:22 Azad speaking Rohingya | South Asian language | Wikitongues
klhzWSo4MTQ 7:03 Gianluca, Bruno, and Franca speaking Abruzzese | Romance languages | Wikitongues
eVUBHDW5ccY 2:58 Tricia speaking Lintau Minangkabau | Minangkabau language | Wikitongues
mygnGGT679A 3:16 Francesc speaking Valencian Catalan | Romance languages | Wikitongues
ym-Wmc3aJAo 5:15 Nama speaking Ewondo | Cameroon language | Wikitongues
xPixyaLG86Y 2:18 Alexander speaking Banat Swabian (Bavarian) | Germanic languages | Wikitongues
j7N_qP2mt3o 1:42 Bonaventure speaking Murrinhpatha | Aboriginal Australians and Torres Strait Islanders | Wikitongues
VyuK6ggrZCc 4:07 Meninet speaking Tigrinya | Semitic language | Wikitongues
2b_aZQDIr1k 4:13 Adrian speaking Galician | Romance languages | Wikitongues
OLf2L_0XvRM 1:40 Dominic speaking Mauritian Creole and French | French Creole language | Wikitongues
SfmhsM67L_U 1:43 Shaun speaking Yugambeh | Aboriginal Australians and Torres Strait Islanders | Wikitongues
pfi1mvVB0iU 4:22 Kamran speaking Wakhi | Central Asian languages | Wikitongues
0CoY1psR5bs 5:40 Menlu speaking Koto Marapak | Minangkabau language | Wikimedia Indonesia and Wikitongues
rsmIHIUXAa8 4:11 João Pedro speaking Rioplatense Spanish, Portuguese, and English | Romance Languages | Wikitongues
jlPhkYBIUZs 2:16 Karina speaking Yankunytjatjara | Aboriginal Australians and Torres Strait Islanders | Wikitongues
JeRb7Ud1kSU 2:06 Andrey speaking Russian | Slavic languages | русский язык | Wikitongues
Q5r3K3O_9no 2:14 Nzonou speaking Kabiyè | Niger-Congo languages of Africa | Wikitongues
GPjY_W_Lq0M 4:33 Kristen and Michel speaking Haitian Creole | Haitian Flag Day | Wikitongues Conversation
sJ06GMMcGVM 2:51 Supiak speaking Sijunjung-Simaung | Minangkabau language | Wikimedia Indonesia and Wikitongues
iFUPTM1rX28 4:45 Jamal speaking Tachelhit | Berber language (Berbers) | Wikitongues
uOYnyIX_8Gw 3:01 Ludovic speaking Tourangeau | Romance Languages | Wikitongues
GPaZb-MzzpQ 8:36 Gabrièu speaking Nissart Occitan | Romance languages | Wikitongues
S7nctC7ckbU 2:07 Srinivas speaking Bijapur Kannada | Dravidian languages | WIKITONGUES
Cy3FzYLmUQc 8:48 Leo speaking Pulaar and West African French | Fula language | Wikitongues
xNlyppTb0Xw 13:05 Steve's language learning story | Lingq | WIKITONGUES
d5gC7zVKnkY 3:17 Aydyn speaking Tuvan | Siberian language | WIKITONGUES
4PSRh2q4AYo 3:45 WIKITONGUES: Atul speaking Nepali
CNFK7h0G5a4 6:47 WIKITONGUES: Suzana speaking Croatian Sign Language (HZJ)
hgJeqdSw4aI 2:19 Pascual speaking Sakapulteko and Spanish | Mayan peoples | WIKITONGUES
F9OpKOhJs-c 1:32 WIKITONGUES: Vaine Kae speaking Cook Islands Māori
k7Earnq8sHw 4:54 WIKITONGUES: Tajaun speaking Jamaican Creole English | Jamaican "Patois"
NmmrJbZvWmc 0:40 WIKITONGUES: Nafiseh speaking Turkmen and Turkish
u0cJXVvo5I4 2:09 WIKITONGUES: Lior Markus speaking Occidental Campidanese Sardinian and Hebrew
Opv58piY_bs 2:43 WIKITONGUES: Gerard and Yakuma speaking Sekpele
yIO-F3l4b7w 4:26 WIKITONGUES: Eveliina speaking Finnish
C9M-Sep16Dg 1:13 Wikitongues: How are you feeling?
uRC9W6v4NuU 2:13 WIKITONGUES: Lalita Roshni speaking Kurux and English
Y76c6UqN0dc 4:25 WIKITONGUES: Adolphus speaking Liberian English
0MtwwhL5G0g 6:05 WIKITONGUES: Lilita and Ivars speaking Latvian Sign Language
361y-JDT_bs 1:11:55 WIKITONGUES: Abdul Mateen speaking Torwali
nFC974Eua-U 4:48 WIKITONGUES: Shahida speaking Rohingya
itdBLyLCiU0 4:49 WIKITONGUES: Jakob speaking Zipser German
EMITnQ-w-04 1:01 WIKITONGUES: Hirwa signing Rwandan Sign Language
hrxUsCrOQ-c 1:35 WIKITONGUES: Faraz speaking Majhi Punjabi
PWVzPFUgHEo 0:47 WIKITONGUES: Sanjana speaking Nepali
rEqO7tkF_04 4:20 WIKITONGUES: Rino speaking Balantak
VPnXITN30VU 6:41 WIKITONGUES: Ana speaking Croatian Sign Language
kDyUnJ0p8JE 1:04 WIKITONGUES: Riku speaking Assamese
RtvgMwWEjSo 0:59 WIKITONGUES: Safulo Kacaw speaking Amis
Gt0jbL8p8AM 2:20 WIKITONGUES: Mary speaking Soli
QMypNaOcn1E 3:47 WIKITONGUES: James speaking Zambian Sign Language
OWoKDqJQt1c 1:44 WIKITONGUES: Malek speaking Eastern Balochi
IA4PxlO9OOU 2:58 WIKITONGUES: Evan speaking Hñähñu
1LIEW4IaKWQ 0:33 WIKITONGUES: Gabriel speaking Hungarian
zNwcnycMMwY 6:39 WIKITONGUES: Claudio speaking Abruzzese
KW7axC1WJZI 1:15 WIKITONGUES: Lian speaking Tày
5Ae2e2mmMMU 4:52 WIKITONGUES: Paolo speaking Emilian
PeqeZ9MysUI 3:49 WIKITONGUES: Iñaki speaking Basque
hd5MB1W5Rg8 3:55 WIKITONGUES: Lene and Børre speaking Northern Sami
K7QRD82tlls 0:32 WIKITONGUES: Kenneth speaking Papiamento
NORD_cH_kMY 3:24 WIKITONGUES: Kitty speaking Car Nicobarese
aQNZL4zrDaY 12:13 WIKITONGUES: Edgar speaking Northern Sotho
bY_TcgYvcLk 1:26 WIKITONGUES: Monique speaking Dutch and Frisian
lebFgTHooNE 1:40 WIKITONGUES: Maly speaking Lao
YGaGz7t8Ov4 1:42 WIKITONGUES: Krishna speaking Hindi
dyg_z_ywVzA 0:40 WIKITONGUES: 王奕 speaking Wu
BOtJvy4ybc4 3:05 WIKITONGUES: Kini speaking English, Tok Pisin, and Kalo
jxNQZklmQCY 6:23 WIKITONGUES: Ross speaking Lacandon
cJ4yFQ_C3f0 5:47 WIKITONGUES: Paulu speaking Corsican
Ho2vOSl9v0E 2:49 WIKITONGUES: Zahida speaking Dinga Punjabi
_DSEp-UKmzA 3:51 WIKITONGUES: Samuel signing Rwandan Sign Langugae
icBfqfPlKjU 1:34 WIKITONGUES: Nicholas speaking Niuafo’ou
dtxuztEDsms 5:56 WIKITONGUES: Lingson and Grem speaking Nsenga
dsUH7my4fTs 3:15 WIKITONGUES: Peji speaking Sukuma
gBM-kh4k-PY 5:40 WIKITONGUES: Andrés speaking Yshyr
O7GpkfCPZ4k 1:37 WIKITONGUES: Vishwanatha speaking Tulu
o5m5OwJ65cM 2:35 WIKITONGUES: Luis speaking Tenek
76qruGReJeM 5:02 WIKITONGUES: Loran signing Maltese Sign Language
e_dh1q75LSo 7:44 WIKITONGUES: Vira speaking Ukrainian
KDoOg1XL-j4 0:46 WIKITONGUES: Célestin speaking Lega-Shabunda
hMQxZzrmKiI 1:28 WIKITONGUES: Azim speaking Kyrgyz
pfaUytO5zg8 2:06 WIKITONGUES: Neha speaking Garhwali
Ji5HuAPQquo 2:30 WIKITONGUES: Rizwan speaking Balti
wWns5Q6-ShY 6:59 WIKITONGUES: Varvara speaking Even
LUsMwdkXpYY 2:05 WIKITONGUES: Louis speaking Sapo
dZdCsqX_nEY 4:03 WIKITONGUES: Nela speaking Croatian
cQB3BFVAHF0 2:51 WIKITONGUES: Dorian speaking Krio
MChNEkV_wt8 1:24 WIKITONGUES: Sara speaking Portuguese
_z62HlBXJJ8 1:12 WIKITONGUES: Ibrahima speaking Pular
BCEO_U7713M 0:57 WIKITONGUES: Sukanya speaking Indian Sign Language
BTdYsYaoRn0 4:59 WIKITONGUES: Hyun speaking Jejueo
PGqlzdlO_rM 2:57 WIKITONGUES: Irina speaking Artsakh Armenian
tTBDXjKZB08 13:26 WIKITONGUES: Trey speaking Bermudian English
C380uSo4Ils 1:43 WIKITONGUES: Rose speaking Kikamba
z2GFNc-X6mA 0:46 WIKITONGUES: Kaisanan speaking Taokas
zeApE-aD3fI 0:56 WIKITONGUES: Yernur speaking Kazakh
NG-rV0oGZ9s 1:30 WIKITNOGUES: Ni Luh speaking Balinese
ak9Zqiddtt8 1:09 WIKITONGUES: PuingAke'Kuking speaking Bah-Biau Punan
nJU_XnQzzHk 5:03 WIKITONGUES: Nezahualcoyotl speaking Nuyoo Mixtec
ZjPiQYvtnLA 2:12 WIKITONGUES: Classen speaking Ju|’hoan
nnBQMqgEJB0 2:15 WIKITONGUES: Kavyanjali speaking Hindi
bzHIfJ6H9Vw 9:02 WIKITONGUES: Naren speaking Telugu
yLyMILKtFHo 1:30 WIKITONGUES: Esther speaking Grebo
LVCtvZ19tv8 3:28 WIKITONGUES: Kouta speaking Pampangan and Filipino
Gdr_yKrlf4I 6:46 WIKITONGUES: Yorick speaking Oiltjers Dutch
5cidz5Y3KFQ 1:17 WIKITONGUES: Cindy speaking Gan
CproO8ZhtF8 2:09 WIKITONGUES: Gereon speaking German
LTsoLZtf4Dw 19:25 WIKITONGUES: Kees, Albert, Anja, and Jan speaking West-Veluws
vkVHspUH9U4 13:10 WIKITONGUES: Donyashel speaking Khoibu
IX7cRsZD1Ks 2:59 WIKITONGUES: Jacopo speaking Lombard
quGhsKtq88A 1:16 WIKITONGUES: Muktesh speaking Kumaoni and Hindi
VTCLy0kejbg 2:08 WIKITONGUES: Marta speaking Polish
GyxYnfM_y5M 1:42 WIKITONGUES: Yenal speaking Circassian
wziUoXmcCVc 1:56 WIKITONGUES: Samuel speaking Gaa
Ty3IAWxANi4 4:17 WIKITONGUES: Mustafa, Gulnisa, and Elise speaking Uyghur
Ex0SVHRSEe4 3:02 WIKITONGUES: Tuulõ speaking Võro
ReWdgF-fdrE 8:39 WIKITONGUES: Toomas speaking Võro
ibq-hS-G1JQ 2:42 WIKITONGUES: Rachael speaking Esperanto
XFAXrpmuITQ 7:13 WIKITONGUES: Marika speaking Võro
zKbTMMFldZk 1:00 WIKITONGUES: Safal speaking Nepali
XVVrouF3bzE 29:57 WIKITONGUES: Jaan speaking Võro
0t189tY4hEM 2:09 WIKITONGUES: Annita speaking Italian and Piedmontese
yNLgivKN5z4 16:10 WIKITONGUES: Aare speaking Võro
XBhFAFqVT2w 1:54 WIKITONGUES: Tao speaking Thai
BT7Pgimrq4g 11:57 WIKITONGUES: Egle speaking Võro
7ZFaAtiiVIk 1:24 WIKITONGUES: Imouda speaking Shimwali
X7Yvsw2dnDE 18:50 WIKITONGUES: Sulev speaking Võro
4NTFvW2nUzw 2:33 WIKITONGUES: Jeremie speaking Nyindu
bT99iXQa7DM 1:55 WIKITONGUES: Mohamad speaking Kurmanji Kurdish
dgxGqecUCwU 10:46 WIKITONGUES: Naruko speaking Dunan and Japanese
dpfq9Ehf5JI 2:08 WIKITONGUES: Mereinur speaking Kazakh
mVo1WW5vfXM 1:24 WIKITONGUES: Kangkana speaking Assamese and English
kAUsuyOVd_Q 1:51 WIKITONGUES: Adela speaking Bicolano
r0FS2UF3qCo 10:57 WIKITONGUES: Håkan speaking Finland-Swedish Sign Language
x9NkreemeO0 2:38 WIKITONGUES: Matteo speaking Lombard
xfVWIUdCGgI 24:58 WIKITONGUES: Kasper and Janne speaking Danish Sign Language
AYwEA-FLS_s 4:53 WIKITONGUES: Rajen speaking Karbi and English
SuNKWIMUjQo 1:08 WIKITONGUES: Aditya speaking Marwari
cfO536EExPw 2:30 WIKITONGUES: June speaking Ilocano
3fOoyoDpBFw 1:51 WIKITONGUES: Afek speaking Tunisian Arabic
V3KNAMr3u4Q 1:26 WIKITONGUES: Mazhar speaking Sindhi
AqGXY9fohac 4:05 WIKITONGUES: Brian Mumba speaking Bemba
8iE0R8b3tq4 3:07 WIKITONGUES: Elfie speaking Bahasa Aru
w-PP0r8ohF8 2:53 WIKITONGUES: Rhyan speaking American Norwegian
oOr8uPY5PNQ 0:46 WIKITONGUES: Tarkhan speaking Jek
oRWL2htbGK0 1:45 WIKITONGUES: Rukku speaking Kundagannada
VCxeM27OAlQ 7:30 WIKITONGUES: Marcus speaking Tobian
AtBWbZmCceU 5:14 WIKITONGUES: Pamela speaking Herero
EC5Ae63LasY 4:25 WIKITONGUES: T.A., Iqbal, and Kalam speaking Acehnese
hfxJCEIChIk 3:05 WIKITONGUES: Roussow speaking Afrikaans
UlRd8RkVdfo 4:04 WIKITONGUES: Netha speaking Malayalam
IdYu9RBWv0o 1:36 WIKITONGUES: Hendrik speaking Benyadu
82RTpFpp3OA 4:12 WIKITONGUES: José Manuel speaking Chicahuaxtla Triqui
eA92yZCjXA8 7:04 WIKITONGUES: Armandina speaking Paipai
6NCIYV3Q4d4 6:47 WIKITONGUES: Iain William speaking Breton
tzUaooThBzI 0:54 WIKITONGUES: Sathi speaking Santhali
6htms5vFurs 0:48 WIKITONGUES: Victorinus speaking Beahe
PRVPB9OA0s4 1:52 WIKITONGUES: Mohammed speaking Dagbani
xhLQcnmX54g 1:50 WIKITONGUES: Yulius speaking Bekati
wpNIOUjOa8c 2:17 WIKITONGUES: Olaniyan speaking Yoruba
9S8lDVmQSCQ 5:14 WIKITONGUES: Theo speaking Gronings
0PKycEkSsF8 4:06 Happy 2019 from Wikitongues
-Mh9bFzUYzQ 0:59 WIKITONGUES: Zairul speaking Malay
A9l639zi6Ik 1:34 WIKITONGUES: Robertson speaking Dan
WKxxsUnObj8 23:37 WIKITONGUES: Nicolas speaking Sadri, Kharia, and Sambalpuri
gymwIdhFlWM 2:38 WIKITONGUES: Manuel speaking Yucatecan
pjWd-n1tVeQ 1:24 WIKITONGUES: Cristiano speaking Barwe and Portuguese
O5os_Cf8NzE 2:47 WIKITONGUES: Imtimeren speaking Mongsen and English
oVRij25QNlQ 3:04 WIKITONGUES: Anugrah speaking Li Niha
AEcRxyWrFBw 7:33 WIKITONGUES: Daniel speaking Extremaduran
g2L_YR5P5KE 4:14 WIKITONGUES: Chabota speaking Nyanja
K2iYeGTwcU8 0:34 WIKITONGUES: Casiano speaking Quechua
tkMujSf5Djo 1:58 WIKITONGUES: Aminah Abba speaking Wolof
808KeQLlP0I 3:29 WIKITONGUES: Jackson speaking Konobo
MODU1yhBb-8 0:15 WIKITONGUES: Alessandro speaking Ligurian
AYgWSuv00pc 2:34 WIKITONGUES: Twaha speaking Luganda
HWYnyZEOVeE 4:38 WIKITONGUES: Isso speaking Lemerig
4ZGmauJA23c 0:51 WIKITONGUES: Reda speaking Algerian Arabic
7vwcbBfETXA 1:29 WIKITONGUES: Sanda speaking Hakka
5as9jMrmjpU 2:04 WIKITONGUES: Ricardo speaking Sardinian
03KULxOT31E 1:54 WIKITONGUES: Naw speaking Burmese
IT7iuHWerbQ 2:08 WIKITONGUES: Carolin speaking Bavarian
ysQrLUOGhkE 3:53 WIKITONGUES: Jarvis signing Kenyan Sign Language
DHH91F52IYc 56:21 WIKITONGUES: Donna and Elisabeth speaking Tunica and English
SdfMpBDPVis 3:17 WIKITONGUES: Sunkist speaking S’gaw Karen
cAyhRppr5QM 2:16 WIKITONGUES: Zeferino speaking Totonac
qnlqAuPiigY 0:55 WIKITONGUES: Esther speaking Ibibo
_GDuaW95qUQ 1:38 WIKITONGUES: Alex speaking Afrikaaans
DJ0NRqv5r7g 3:49 WIKITONGUES: Haingo speaking Malagasy
b6eEK15bgAE 2:00 WIKITONGUES: Tarlan speaking Azeri
v1WsoWZFZZ4 3:12 WIKITONGUES: Piotr speaking Silesian and English
XSXBcko8wNQ 4:00 WIKITONGUES: Allan speaking Gwich'in
0KDTO6q3tdM 1:19 WIKITONGUES: Anna speaking Bildts
kQIy1RLuwNo 1:11 WIKITONGUES: Paison speaking Kiga and English
b_DtKXDXLFY 5:46 Luzmila speaking Otavalo Kichwa | Wikitongues
KSkO2sJlMxc 1:47 WIKITONGUES: Finny speaking Musi
JLKQVIvtfZ8 6:24 WIKITONGUES: Victor speaking Asturian
h8rq3IQI-z0 3:20 WIKITONGUES: Edgar speaking Lugwere
chsL-GSpTBc 1:54 WIKITONGUES: Anna speaking Tehali
TdrrTxT99PA 5:22 WIKITONGUES: Genesis speaking Mano
ou02UU2iLY4 0:20 WIKITONGUES: Risata speaking Batak Toba
8OBVOJxBU7E 4:57 WIKITONGUES: Joseph speaking Siyi Yue
wpqaGLWxZUY 1:05 WIKITONGUES: Albina and Donawati speaking Bedineh
lGPQI5bOfqU 0:39 WIKITONGUES: Phoebe speaking Gonja
8D0rOCam_hQ 4:36 WIKITONGUES: Michael speaking Fataleka
nbbdx1UmjXE 1:51 WIKITONGUES: Nimita speaking Bhojpuri
cxiGMkEZvKQ 1:44 WIKITONGUES: Nilo speaking Kukama and Spanish
Vp8g0znA-tU 2:07 WIKITONGUES: Aakriti speaking Kashmiri
CJkijDWHQeQ 1:25 WIKITONGUES: Ghiles speaking Kabyle
TF4fO7Yv8Z8 4:26 WIKITONGUES: Barbara speaking Navajo
QUSLdT-YkHY 0:40 WIKITONGUES: Michael speaking To’abaita
98mMMwkyPzU 1:21 WIKITONGUES: Daniel speaking Farsi
5_-yVH92IY0 6:49 WIKITONGUES: Bryan speaking French and English
AYLkkOp5gW8 2:04 WIKITONGUES: Kami speaking Lo-Toga
gs-Hs_ZarnE 3:47 WIKITONGUES: Klazina and Huib speaking Zeelandic
usLABtKtRho 1:24 WIKITONGUES: Pavlin speaking Albanian
vtbwPtyPmbQ 1:11 WIKITONGUES: Semere speaking Amharic
ivcyiIgDY_E 0:47 WIKITONGUES: Steffi speaking Bavarian
rF7X9yCZTl8 2:14 WIKITONGUES: Anass speaking Tarifit
B-UiHe5DIt4 1:14 WIKITONGUES: Siro speaking Nauruan
dhRoN1V1rQI 6:57 WIKITONGUES: Luz speaking Shipibo
hoyuxNukrbY 3:03 WIKITONGUES: Linekela Paul speaking Namibian Sign Language
4j9xBWlMUqA 5:04 WIKITONGUES: Xwatsá and Basilisa speaking Iraqw
1seeNWS-8Fc 3:56 WIKITONGUES: Chingis speaking Tatar
raX_B10ytWI 1:28 WIKITONGUES: Priscilla speaking Tok Pisin
1TEQACUZMp0 4:57 WIKITONGUES: Dimas speaking Osing
aZGyISJ3djo 1:36 WIKITONGUES: Sjoukje speaking West Frisian
BfHinOzTkK4 2:09 WIKITONGUES: Abderrahman speaking Tachelhit
vVys2adt-zA 0:42 WIKITONGUES: Dorothea speaking Swiss German
jzgaOtKpCd0 1:17 WIKITONGUES: Paulo speaking Tuvaluan
n43kwuSOj2E 4:32 WIKITONGUES: Anass speaking Moroccan Arabic
CSkxXFxg8z4 0:46 WIKITONGUES: Ankita speaking Bengali
ttp2NTXqkl8 5:55 WIKITONGUES: Steven speaking Sicilian
glqy1koOinI 1:07 WIKITONGUES: Hannah speaking Oshiwambo
QA_5uU6DE20 0:42 WIKITONGUES: José Benito speaking Leonese
bhp5qYy8uCo 1:13 WIKITONGUES: Alana speaking Ossetian
yMf1aVKqsSQ 5:19 WIKITONGUES: Dominique speaking Alsatian
elpkRzfMFCE 1:01 WIKITONGUES: Sofie speaking Dutch Sign Language
x5nIUaB98dQ 10:24 WIKITONGUES: Jerry speaking Kpelle
NMBVCEq8TLU 1:38 Michael speaking Kouri-Vini | Louisiana Creole language | Wikitongues
XdPkJUX5q6A 5:42 WIKITONGUES: Disa and Niken speaking Javanese
N7T85Q0ez1o 6:24 WIKITONGUES: Mandala speaking Bantenese
CIAqJsKZLBA 3:07 WIKITONGUES: Latonian and Yankee speaking Lenape and Nanticoke
QLLyXc24Vcc 1:23 WIKITONGUES: Achille speaking Mooré and Dioula
yOrLAkSNe5c 5:52 WIKITONGUES: Jacques and Yvette speaking Chiac
32tIfTcXopo 2:44 WIKITONGUES: Regianna speaking West Ambae
cHTNty8YeT0 2:15 WIKITONGUES: Román speaking Zapotec and Spanish
6OTT7m8MgAI 2:12 WIKITONGUES: Musu speaking Mandingo
-UCw1Q9ni2E 4:24 WIKITONGUES: Sonia speaking Booráá
CDeE2dZyb0M 0:43 WIKITONGUES: David speaking Syrian Arabic
xpDBaE9TSe8 0:33 WIKITONGUES: Chez speaking Tamang
vjK-2lc0KQU 2:26 WIKITONGUES: Khup speaking Zom
IyBNVrLQ2-A 2:53 WIKITONGUES: Yann speaking Breton
rzkKRTvwGG8 0:58 WIKITONGUES: Patricia speaking Natqnnga
uh9hePNiPfg 1:42 WIKITONGUES: Cristian speaking Aromanian
xF_CJUadatY 0:52 WIKITONGUES: Karen speaking Cantonese
mNyEuC2GxGk 1:44 WIKITONGUES: Owen speaking Manx
xe6ebodfmKU 0:36 WIKITONGUES: Jasmin speaking Newari
kAenLJSfNWM 5:56 WIKITONGUES: Maxime speaking Québecois French
8ieQ9HfbqwY 2:39 WIKITONGUES: Yusuf speaking Sundanese
Nop4WnhX-k4 3:30 WIKITONGUES: Xheladin speaking Gheg Albanian
pUfu40JELyM 0:31 WIKITONGUES: Alex speaking Karankawa and English
reNXOCf-9z0 1:59 WIKITONGUES: Serah speaking Mwotlap
uPa84Ro8SrU 1:29 WIKITONGUES: James speaking Nur
MnghW2JB9j4 4:58 WIKITONGUES: Zubah speaking Loma
4sgX-jvskfI 3:49 WIKITONGUES: Priya speaking Sri Lankan Tamil
tvNW5-lnx0g 4:35 WIKITONGUES: Stefano speaking Abruzzese
IVFfgzvSLXI 1:40 WIKITONGUES: Jan speaking Brabants
k-uKyuTveuA 1:04 WIKITONGUES: Carlos speaking K'iche'
WaTpyPIBGOc 0:23 WIKITONGUES: Paola speaking Italian and Sicilian
OJvsp6XNUzQ 2:05 WIKITONGUES: Senful speaking Malay
Kxdd3bUVnuI 0:48 WIKITONGUES: Betsy speaking Vurës
vUeMj9_XrJA 3:19 WIKITONGUES: Angel speaking Aromanian
J0Yx_sLr6Vo 0:39 WIKITONGUES: Margaret speaking Haitian Creole
c47B6Y5fbss 9:10 WIKITONGUES: Txeli speaking Basque
AYoVFf6ZRyA 1:07 WIKITONGUES: Jide speaking Yoruba
gs3rmilVQLM 7:00 WIKITONGUES: Ayu speaking Javanese
YdgWeFznE2M 8:21 WIKITONGUES: Alaric speaking Afrikaans
ZKcvZmtar9g 0:53 WIKITONGUES: Frances speaking Irish
WmoSv7Cl1-M 16:07 WIKITONGUES: Martha and Albert speaking Gottscheerish
JrcogiyJGCk 0:33 WIKITONGUES: Mónica speaking Spanish Sign Language
3FGc0zaIg2k 6:03 WIKITONGUES: Suzy speaking English
a7rbopMACEo 1:52 WIKITONGUES: António speaking Kimbundu
5imsaweRZWQ 2:46 WIKITONGUES: Daisy speaking North Ambae
wjn_ayKh1G0 2:49 WIKITONGUES: James speaking Namakura
TVMfOk6x8VI 3:29 WIKITONGUES: Garfeen speaking Mandingo
FiBkz0nnhtk 2:26 WIKITONGUES: Vitória speaking Portuguese
WUrJB96-BuE 2:24 WIKITONGUES: Ihsan and Septiadi speaking Palembangnese
fG0X7P1WFZk 2:09 WIKITONGUES: James speaking Filipino, English, and Spanish
LZoRgfFdXXQ 3:38 WIKITONGUES: Ying speaking Henan Chinese
ftqet7jH91g 1:55 WIKITONGUES: Golala speaking Sorani Kurdish
O2eX3XuzWBM 3:50 WIKITONGUES: Rama speaking Javanese
30d4TyH_9Ts 7:21 WIKITONGUES: Wayne speaking Breton
ok7DGXbk8Mk 0:51 WIKITONGIES: Fabiola speaking Trentino
8jAAPdvTld0 5:40 WIKITONGUES: Stéfane speaking Japanese, French, English, and Portuguese
-128MZD3rKU 2:02 WIKITONGUES: Revival speaking English, Khoekhoegowab, and Afrikaans
U9NivlodX8c 1:37 WIKITONGUES: Tay Za speaking Falam
A1QY9Ul5_iM 3:04 WIKITONGUES: Nawal speaking Moroccan Arabic
F4xgvj4kSnU 2:39 WIKITONGUES: Raj speaking Bagri
f7Msppvklb0 2:32 WIKITONGUES: Riike speaking Danish
CwGK0BmHbmY 3:44 WIKITONGUES: Dr. Karel Oliva speaking English, Czech, Bulgarian, Italian, German, and Russian
t6a5LmxqW6c 1:53 WIKITONGUES: Otmar speaking Po Naszymu
aXeID-fJdt8 1:27 WIKITONGUES: KK speaking Hong Kong Sign Language
w1Bugj3Ws7w 0:44 WIKITONGUES: Inna speaking Adyghe
CbiVj4rV3dY 4:48 WIKITONGUES: Changjiu and Chaofen speaking Guiyangese
yE9HBsnhEc8 1:44 WIKITONGUES: Dessire speaking Swiss German
enXPLO5kT3U 0:57 WIKITONGUES: Youssef speaking Egyptian Arabic
UZNsPtr9Ekg 0:45 WIKITONGUES: Aigul speaking Kyrgyz
3jpoUySC6sk 4:01 WIKITONGUES: Nicholas speaking Chipileño
Z2lYJyGr0vc 2:57 WIKITONGUES: Afou speaking Nyarafolo
S-It8jeuq-w 0:52 WIKITONGUES: Movsar speaking Chechen
nYLSU5faTIM 1:26 WIKITONGUES: Myrizinn speaking Breton
M34j7R6biR0 3:35 WIKITONGUES: Eetu signing Finnish Sign Language
NAhK_HlNNJM 2:53 WIKITONGUES: Theresa speaking Twi
kc8rKa11EzI 2:38 WIKITONGUES: Neceadin speaking Crimean Tatar
pS5Adkwaf-U 0:25 WIKITONGUES: Zarina speaking Kudarsky
9ZV7Rb2bAIc 3:17 WIKITONGUES: Prionsías speaking Irish
qW0GpWnioTQ 5:02 WIKITONGUES: Michael speaking Slovak
KncKzJEIUko 2:07 WIKITONGUES: John speaking Klao
vwWzzl2oZTk 2:19 WIKITONGUES: Fanny speaking Vlach
wuP_E0oFZkY 0:40 WIKITONGUES: Winnie speaking siLozi
EBLGBob9ZFA 1:09 WIKITONGUES: Kevin and Fuad speaking Kristang
YqFbV7vFIK8 3:44 WIKITONGUES: Carolien speaking Limburgish
ykypP-uOqq0 2:33 WIKITONGUES: Daria speaking Russian Sign Language
BT4Kbgs0llE 6:03 WIKITONGUES: Musuweu speaking English and Subiya
mfRie6DsS44 3:18 WIKITONGUES: Mária speaking Swabian and Hungarian
VihQkH66RoA 9:43 WIKITONGUES: Pau speaking French, Lithuanian, Italian, English, Spanish, and Catalan
pBksbW_fXKo 0:35 WIKITONGUES: Sister Cookson speaking Maori
stVATHE414E 2:03 WIKITONGUES: Zaeem speaking Hindko and Pashto
xHQKFgYEw3w 2:53 WIKITONGUES: Tylis speaking Crow
_N4HGvswrjE 0:36 WIKITONGUES: Elisa speaking Veronese
X1me0E0OGqU 2:46 WIKITONGUES: Liam speaking English
i_B6BJFumno 1:52 WIKITONGUES: Yabi speaking Amharic
hPozChGO_LA 3:23 WIKITONGUES: Slobodan speaking Serbian
6TiSKGRjYLs 1:34 Raluca speaking Romanian | Romance languages | Wikitongues
oGVRFnENVlI 1:12 WIKITONGUES: Nurkhalis speaking Banjar
tpltPC_ckqw 2:06 WIKITONGUES: Laura speaking Swiss-Italian Sign Language
JssdxmMLYHs 4:51 WIKITONGUES: Varney and Omoru speaking Vai
8xdzebPGPHI 0:38 WIKITONGUES: Sedang speaking Iban
uv_6J0heNVc 0:26 WIKITONGUES: Sister So'oalo speaking Samoan
GVkbhzm3VJE 0:34 WIKITONGUES: Foffo speaking Neapolitan
hHAm7Gpp8zI 4:53 WIKITONGUES: Camille speaking French
0cj-CL9sRR0 2:28 WIKITONGUES: Thomas speaking Transylvanian Saxon
ys7MtFK3ReI 2:18 WIKITONGUES: Hiroyuki speaking Miyako
whHnH3a-olo 10:17 WIKITONGUES: Aneli speaking English, Croatian, French, Spanish, and Portuguese
stQwzNjm-WI 2:39 WIKITONGUES: Omar speaking Mandinka
YEij6a6wt0Y 3:42 WIKITONGUES: Musamoni speaking Baleswari Odia
jeSxC2RNSkk 4:38 WIKITONGUES: Siobhán speaking Irish
VV0bmwKLHX0 4:48 WIKITONGUES: Richard speaking Waⁿdat
-8ZNc02x-U0 2:54 WIKITONGUES: Simon Piera speaking Lule Saami
UibNKykq4do 3:41 WIKITONGUES: Augusto speaking Portuguese
yjBhhSKuBd8 6:16 WIKITONGUES: Lgeik'i and Naakil.aan speaking Lingít
2bhYs6APqtU 4:33 WIKITONGUES: Diego speaking Portuguese, English, Spanish, French, Italian, and German
wAipXzYNztM 3:58 WIKITONGUES: Castelline speaking Haitian Creole
vHWpv_3NmBs 2:45 WIKITONGUES: Asimenia speaking Greek and Pontic
p45O8FiMED4 1:42 WIKITONGUES: speaking Dotyali
6u8gvwDevxE 3:41 WIKITONGUES: Mauro speaking Spanish
905hv_a4URY 6:02 WIKITONGUES: Alexander speaking Breton
lM7P_th3I6E 2:27 WIKITONGUES: Marapun speaking Tamil
QLFOGwmPei0 12:33 Isabel speaking Mirandese | Romance languages | Wikitongues
SVu7sUmEJgY 5:44 WIKITONGUES: Dora speaking English
89yLb3goapY 4:14 WIKITONGUES: Lena speaking Danish
jshv9n3xAO4 5:52 WIKITONGUES: Evelyn speaking Texas German
HXg_tCZfuWg 1:11 WIKITONGUES: Amu speaking Tsonga
a9XYhuJhJY8 1:45 WIKITONGUES: Evgenii speaking Chukchi
xj26oHydbyE 5:54 WIKITONGUES: Iasmin speaking Cantonese
kysjEWRwL98 5:10 WIKITONGUES: Giacomo speaking Romagnol
QKV3eHkFAZY 2:38 WIKITONGUES: Tom speaking Korean
xYUS0HFhkW0 1:32 WIKITONGUES: Sali speaking Pomak
cZItz2uKXUo 2:12 WIKITONGUES: Arlon speaking Triestine
bwx4tkODJm8 1:15 Oluchel speaking Palauan | Pacific Islander languages | Wikitongues
yorpVTOyeSE 0:54 WIKITONGUES: Namrata speaking Nepali and English
c05NPQFxnlc 4:01 WIKITONGUES: Krishna speaking Bhojpuri
xMmfbZIIclw 1:56 WIKITONGUES: Stéfane speaking Angolan Portuguese
5Uo-B9GaciQ 4:02 Aurora and Ademar speaking Mirandese | Romance languages | Wikitongues
sPeI8MR9fCU 3:10 WIKITONGUES: Isabel speaking Spanish
bY8HBFwRE-w 1:19 WIKITONGUES: Stere speaking Aromanian
_jJyzGnFfSE 2:46 WIKITONGUES: Roberta speaking Lombard
QUoTxiFdOmY 4:24 WIKITONGUES: Aboubacar speaking English and Zarma
NSczRqnBvFU 1:12 WIKITONGUES: Gjyste speaking Gheg Albanian
k3x-2IhJwjo 5:19 WIKITONGUES: Naoki speaking Okinawan, Kalmyk, Erzya, and Prussian
p1YqLLFxl4k 1:43 WIKITONGUES: speaking Khmu
I2sFAUpUhI0 1:13 WIKITONGUES: Tenzin speaking Tibetan
qxXq9iP-CGw 1:02 WIKITONGUES: Mounir speaking Tunisian Arabic
sNDAfGlc-4c 2:50 WIKITONGUES: Daniel speaking Nam Trik
ISFBfGJWiU8 0:48 WIKITONGUES: Dolma speaking Nepali
SMy4jzw2W08 3:30 WIKITONGUES: Tereza speaking Csángó Hungarian
Ui1fZPJ_Wr4 0:59 WIKITONGUES: Sister So'oalo and Sister Cookson speaking Tongan
MRjC-OyprJU 1:32 WIKITONGUES: Nir speaking Hebrew and Russian
Mwgy2kuoBBU 5:50 WIKITONGUES: Julia speaking Swiss German
xMaydZp_J30 7:02 WIKITONGUES: Jack speaking Ladino
z8eTwjQCCuA 2:04 WIKITONGUES: Hilario speaking Yucatecan
tFoIGW7FLUk 7:28 WIKITONGUES: Venecia speaking English and Jamaican Patois
1w_SXQUCfsw 6:25 WIKITONGUES: Suri speaking Yiddish
wGVjEJfE2e8 7:03 WIKITONGUES: Adrien speaking Chavacano and Spanish
-UlCJviJ8MQ 0:56 WIKITONGUES: Mario speaking English, Mandarin, Japanese, and Portuguese
pmwUGyC-Hh0 2:35 WIKITONGUES: Navas speaking Byari
Pr_BHjAdZNo 4:04 WIKITONGUES: Francesco speaking Sardinian
TPWT57Wuwac 0:50 WIKITONGUES: Isaaka speaking Tem
oMeQ8llXq6o 1:37 WIKITONGUES: Mohammad speaking Bakhtiari Farsi
Bozt5oUv74w 0:29 WIKITONGUES: Aaku speaking Newari
VkeAbRwP-lY 1:43 WIKITONGUES: Zerovsho speaking Tajik
j48ZhSpCczs 1:37 WIKITONGUES: Islem speaking Dari
5u4r0SUv10g 1:44 WIKITONGUES: Adam speaking Uzbek
dHCf9k3u2IQ 5:08 WIKITONGUES: Giuseppe speaking Sicilian and Griko
192WARvBmLg 0:44 WIKITONGUES: Sandra speaking English and Guyanese Creole
1_dH403pqRU 6:56 WIKITONGUES: Vernell speaking Texas German
rUfeztn-xz0 2:30 WIKITONGUES: Camila speaking English and Portuguese
qSTFLIgHQ5A 7:03 WIKITONGUES: Jessica speaking Spanish, Swedish, and English
MehharK-ZmA 3:54 Celena speaking Mirandese and Portuguese | Romance languages | Wikitongues
16uK2Gbyk2k 3:13 WIKITONGUES: Rose speaking Haitian Creole
M1YFrwaQL1I 1:12 WIKITONGUES: Matt speaking Hebrew
UOZOR4sBEEY 2:00 WIKITONGUES: Hussein speaking Dari
7l8wsBlSCpQ 0:57 WIKITONGUES: Khulan speaking Mongolian
iXUwLs4kNvc 2:46 WIKITONGUES: Valentine speaking Igbo
2IzpOFfd4Zs 1:08 WIKITONGUES: Anna speaking Kildin Saami
MQasAsvyqfE 2:19 WIKITONGUES: Thadoe speaking Burmese
YTgDOQuuvdc 0:53 WIKITONGUES: Labaram speaking Koussountou
o9_h--Obpvw 2:39 WIKITONGUES: Karl speaking Filipino
ofWA7ERRwzs 3:02 WIKITONGUES: Simon speaking Cumbrian
DcPu6zLpZoQ 1:01 WIKITONGUES: Victor speaking Mapudungun
Ms9kzKnXHA4 4:51 WIKITONGUES: Paul speaking Gallo
zUDEten_j9o 1:44 WIKITONGUES: Raphael speaking Twi
G1ZIzrAxWbA 2:41 WIKITONGUES: Maxim speaking Russian and Albanian
f5ah6REtNmg 1:58 WIKITONGUES: Azariah speaking Spanish
MEe25QALOn0 2:41 WIKITONGUES: Bety speaking Tojolabal
-kFzjAR-05M 2:12 WIKITONGUES: Tory speaking Martinique Creole
YKURmilQeTk 3:00 WIKITONGUES: Irena speaking Gheg Albanian
UyldsoCWcSE 5:33 WIKITONGUES: Marty speaking Cornish
hG5rMFqZ-XQ 0:44 WIKITONGUES: Matt speaking Yiddish
a0TKySIPH0E 1:17 WIKITONGUES: Nitesh speaking Haryanvi
vistydJ8zRM 3:03 WIKITONGUES: Mazhar speaking Bugis
9pBU2VGlvB8 3:52 WIKITONGUES: Joaquin speaking Spanish
oxs3msgKZ_I 7:08 WIKITONGUES: Jennifer speaking English
wFpaLd1Ddtk 1:16 WIKITONGUES: La speaking Lao
VnVR__nf0HI 2:51 WIKITONGUES: Hans speaking Sranan
T8cLcztsDXY 1:37 WIKITONGUES: Miarisoa speaking Malagasy
29euYj0k1Kk 5:26 WIKITONGUES: Jean Luc speaking Breton
TmWrYi9qZrs 2:58 WIKITONGUES: Charles speaking Linhainese
jOlXLLU2fgg 3:06 WIKITONGUES: Abdurrahim speaking English, Kazakh, German, Czech, and Russian
SZyN7kXmwLU 2:11 WIKITONGUES: Jaswant speaking Bazigar
RJVqf4vz-rQ 2:25 WIKITONGUES: Julia speaking Portuguese
wjwQkOzzSAg 5:47 WIKITONGUES: Irena speaking Northern Sami
Hh0nDkWeI5w 1:27 WIKITONGUES: Benjamin speaking Bosnian
WMXxcrFjY1o 2:25 WIKITONGUES: Andi speaking Batak Toba
ozo3HCJVJEA 2:36 WIKITONGUES: Lillotama speaking Seraiki
Iw-dUwsWyzs 2:04 WIKITONGUES: Edith speaking Spanish
z8bNnjovo88 1:12 WIKITONGUES: Fabia speaking Swiss German
38mq_FwgCNs 8:41 WIKITONGUES: Max speaking Finnish and Swedish
YbIyO-cMwhw 0:50 WIKITONGUES: Ram speaking Tamang
5bYNuCOdd_Q 2:02 WIKITONGUES: Sanjoy speaking Bengali
7EJud2CMRyo 4:25 WIKITONGUES: Ibrahim speaking Fulfulde, Zarma, French, Hassaniya Arabic, and Tamazight
22HBqPN8Oco 2:14 WIKITONGUES: John speaking English, Spanish, and Greek
oMDajMXC3fs 6:18 WIKITONGUES: Bart speaking Dutch
LmS0eUGBIrE 7:23 WIKITONGUES: John speaking English
rJYH4xad_fE 0:59 WIKITONGUES: Randeep speaking Powadhi Punjabi
m4l6NewVbes 3:21 WIKITONGUES: Stefano speaking Arbëresh
gaUt3gTwwzU 2:25 WIKITONGUES: Ivy speaking Shanghainese
4iB0W72Bv0Y 1:46 WIKITONGUES: Yannic speaking German
hCwfqiqDLWw 3:14 WIKITONGUES: Cal speaking Portuguese, English and French
6gyKLNQH44I 2:37 WIKITONGUES: Franco speaking Venetian
iLtnCoAi5R4 1:46 WIKITONGUES: Marília speaking Portuguese
SvlLbX3oyAk 3:35 WIKITONGUES: Ljóni speaking Icelandic
DIrFYr6WQi4 4:29 WIKITONGUES: Ciaran speaking English
tZOsIs1wIBg 1:04 WIKITONGUES: Khady speaking Wolof and French
zLaE0SmZdMo 6:36 WIKITONGUES: Bertha speaking Seminole Creole
9xl5oi4tEVw 13:00 WIKITONGUES: Dragan speaking Serbian
1_2f6rnIybA 1:52 WIKITONGUES: Leo speaking Spanish
3PZd-DmY_dE 4:09 WIKITONGUES: Wayan Pindi signing Kata Kolok
RDKfqr2jVeQ 4:47 WIKITONGUES: Vseslav speaking English, German, French, Polish and Ukrainian
eyPtlVS09RQ 1:38 WIKITONGUES: Souleymane speaking Senoufo, French, Arabic, and Mandingo
fZmLy_Acth8 4:06 WIKITONGUES: Sita speaking Manggarai
i9WbGqPeY8k 1:31 WIKITONGUES: Orsolya speaking Hungarian
8v2n3lBibWk 0:40 WIKITONGUES: Thressia speaking Dela
5TiS3AkpeI0 2:21 WIKITONGUES: Anne speaking Swabian
1P6ygw-VKKo 0:25 WIKITONGUES: Daisy speaking Kinyarwanda
oMbvC_siQyc 7:34 WIKITONGUES: Dale speaking Pennsylvania German and English
5ax900reMWM 6:24 WIKITONGUES: Yochai speaking Hebrew
w_FJ_D1BVkI 4:20 WIKITONGUES: Simon speaking Piedmontese
DGnbG3OhC5E 0:33 WIKITONGUES: Roanne speaking Crow
_WN-6t58HdM 2:54 WIKITONGUES: Pablo speaking Garifuna
pI1feWHeUq4 1:11 WIKITONGUES: Teruyo speaking Ainu
8n-c4DIqBuw 3:19 WIKITONGUES: Darma speaking Minangkabau
Er4liSo00nA 1:55 WIKITONGUES: Nila speaking Indonesian
N_WS0_9PZgw 5:20 WIKITONGUES: Giuseppina speaking Arbëresh Albanian
A2brIzxJvkM 3:00 WIKITONGUES: Francesco speaking Friulian
ux9UuNoCruo 1:08 WIKITONGUES: Sebastian speaking Bavarian
Y-WNHB4FEZA 1:34 WIKITONGUES: Soner speaking Laz
Sra5evn--8c 3:20 WIKITONGUES: Andrea speaking Solandro
t5mO8vWRPo8 1:31 WIKITONGUES: Valerian speaking Mingrelian
xJat2lF9Aio 3:57 WIKITONGUES: Sebastijan speaking Croatian
HHjmbeH7iM8 1:23 WIKITONGUES: Dragan speaking Macedonian
Ph5MuSHtgS0 1:15 WIKITONGUES: Rejzka speaking Upper Sorbian
MfS4oDLBpp0 1:02 WIKITONGUES: Pavel speaking Belarusian
LAnWWcSrTFU 3:33 WIKITONGUES: Daniel speaking Romansh
3Ptre1OzsJ4 2:39 WIKITONGUES: Enkelejd speaking Tosk Albanian
qH9Qp747MTA 2:34 WIKITONGUES: Titus speaking Latin
y3RQlAZSNfk 3:35 WIKITONGUES: Ibnu Sina Sam speaking Banjar
w8iwYaa41uo 1:06 WIKITONGUES: Saro speaking Kigiryama
uizL1thcRXg 6:37 WIKITONGUES: Véronique and Sandra signing Swiss-French SL and Swiss-German SL
SSOxL2VRIeE 6:25 WIKITONGUES: Julius speaking Batak Toba
RTr00PeXZ6I 1:42 WIKITONGUES: Keely speaking English, Spanish and Catalan
q_EJdzfnPSg 2:44 WIKITONGUES: Erika speaking Lithuanian
vydhTL5SoIs 1:22 WIKITONGUES: Martha speaking Aymara
nQmB8u7aBZs 3:24 WIKITONGUES: Matic speaking Slovene
eg0bYuuHzkI 1:21 WIKITONGUES: Nila speaking Javanese
-gnJtZFyzZA 8:12 Antônio, Domingos, and Porfirio speaking Mirandese | Romance languages | Wikitongues
lxQjwbUiM9w 7:15 WIKITONGUES: John speaking Lojban
qfKmOf3d0fc 1:42 WIKITONGUES: Sanjib speaking Tharu
H8t_snz8B5A 1:32 WIKITONGUES: Candy speaking Malagasy
P2PYuwhtwro 2:12 WIKITONGUES: Marco speaking Italian, Venetian, and Cimbrian
eLX1KG3FnBg 2:51 WIKITONGUES: María speaking Guarani
321JX9QiME0 6:50 Listen to the Tsakonian language of Greece | Manolis speaking Tsakonika | Wikitongues
JFp2hDgjIyM 1:57 WIKITONGUES: Isayev Mahammad speaking Avar
EqvGJERHbOY 0:43 WIKITONGUES: Nikoloz speaking Georgian
KBEQH7Ad7H8 1:02 WIKITONGUES: Nastya speaking German, French, Russian, Czech, and English
cYWddQLxdu4 1:01 WIKITONGUES: Mark speaking Chechen
b8WMfsLoUAo 1:35 WIKITONGUES: Danio speaking Romagnolo
mfprxIS-ANg 1:35 WIKITONGUES: Marvin speaking German
z_cAYz0Q5DI 1:00 WIKITONGUES: Đức speaking Vietnamese
Vbpr0ryoroA 1:31 WIKITONGUES: Liisi speaking Estonian
SrLPH5590RU 1:48 WIKITONGUES: Junior speaking Lakota
Q6ici_SMBvM 8:20 WIKITONGUES: Peter speaking Portuguese, Spanish, Italian, and English
8HAidhktzjU 1:30 WIKITONGUES: Recep speaking Turkish
1fBDgdfX4vk 2:34 WIKITONGUES: Gustavo speaking Portuguese
ZrfoXAsPHD4 0:44 WIKITONGUES: Mark speaking Greenlandic
9Nl_ttQDYkQ 1:49 WIKITONGUES: Rolf speaking Atlaans
mCghaYzVDxw 1:16 WIKITONGUES: Ali speaking Hausa and Kanuri
8i4EEb5QMgU 1:08 WIKITONGUES: Anna speaking English, French, Czech, Russian and Latvian
kb3Xs56iCg8 0:40 WIKITONGUES: Memmed speaking English, Czech and Azeri
vkheU0nXKKY 1:52 WIKITONGUES: Tony speaking Esperanto
fO0ZyO_Yk9I 1:19 WIKITONGUES: Gül speaking Zazaki
buuGVrfI2jo 9:05 WIKITONGUES: Thong speaking Isan
fQOCFYGadcQ 2:23 WIKITONGUES: Nigel speaking Welsh
buK4KwQ2QcE 2:30 WIKITONGUES: Alan speaking Scottish Gaelic
kho_Esw789Y 2:18 WIKITONGUES: Katalina speaking English
753D2NuKgKU 2:23 WIKITONGUES: Manjunath speaking Kannada
z3ou0vZj_80 1:02 WIKITONGUES: Lucy speaking Mekeo
yiVuJhiTyrE 3:20 Ratulevu speaking Kadavu Fijian | Pacific Islander languages | Wikitongues
rK43HXX2fS0 0:12 WIKITONGUES: Rama speaking Swahili
JUa_phPM77s 2:16 WIKITONGUES: Sandra speaking Welsh
_lTVSjRv10k 0:19 WIKITONGUES: Opoka speaking Acholi
qJVY25bli80 1:32 Artur Mas speaking Catalan | Romance languages | Wikitongues
M5alRFKK43Y 7:03 WIKITONGUES: Argo speaking Indonesian
Z5B7eKSJHBQ 3:03 WIKITONGUES: Ilir speaking Gheg Albanian
dxtFwV5Es7k 6:17 WIKITONGUES: Miriam speaking English, Dholuo, and Swahili
-TEtqv0RTew 6:39 WIKITONGUES: Johannes and Esben speaking English, Danish and Portuguese
PaZqV91ybbM 2:25 WIKITONGUES: Alexandra speaking Halländska Swedish
Oybanf47dwQ 3:59 WIKITONGUES: Miguel speaking Majorcan Catalan
IvwbztWHe0I 1:26 WIKITONGUES: Nila speaking Ambonese
dDQLdHkhPTE 0:24 WIKITONGUES: Florentina speaking Aromanian
j6voxaLLoDw 0:44 WIKITONGUES: Watas and Wari speaking Sa
8IvBOcstwCU 2:14 WIKITONGUES: Yan speaking Huasteca Nahuatl
-7Ch2p6xPAM 3:39 WIKITONGUES: Muhned speaking Zuwara Berber
lhufdY1uT3k 1:45 WIKITONGUES: Candela signing Argentinian Sign Language
6QWwVtNHmuM 1:09 WIKITONGUES: Hassan speaking Cherokee
Ribtybmtb3k 2:07 WIKITONGUES: Sedday speaking English, Swahili and Somali
fvtbdq3WiyU 5:46 WIKITONGUES: Hywel speaking Welsh
9UaAyI-uI30 3:48 WIKITONGUES: Elizabeth speaking Cornish
SGTGWJf4dWw 1:07 WIKITONGUES: Drita signing Kosovar Sign Language
rTLBhwuaq_M 4:33 WIKITONGUES: Daria speaking Russian, English, Spanish and Catalan
gH8m9Ubcbi0 1:41 WIKITONGUES: Mª Ángeles speaking Spanish
9pBaJojzNOI 2:10 WIKITONGUES: Janek speaking Polish
rPokZgAdXSo 1:04 WIKITONGUES: Rosemary speaking Scottish Gaelic
30CWWm0BcNs 4:09 WIKITONGUES: Enrique speaking Spanish
pCfEViYa110 2:02 WIKITONGUES: Simane speaking Drehu
0c5vl2Vx0wQ 2:03 WIKITONGUES: Ajriz speaking Gorani Našinski
p85oX1cewf4 1:19 WIKITONGUES: Artur speaking Galician
G5WqvFD-ELo 0:54 WIKITONGUES: Shuang speaking Mandarin
1JWnPIXkXeA 4:21 WIKITONGUES: Pietro speaking Lombard
9on81ZtUf5A 0:55 WIKITONGUES: Niḍāl speaking Syrian Arabic
T9JkzyrvbP4 4:17 WIKITONGUES: Julian speaking Albanian
o6FUP_2RmcI 1:14 WIKITONGUES: Anneli speaking Swedish
1uIg0COZE5A 1:52 WIKITONGUES: Alim speaking Fula
rEJb7j61-es 1:20 WIKITONGUES: Ela speaking Turkish
-NrSATT7Y7M 2:11 Toukala speaking Bislama | Pacific Islander languages | Wikitongues
cyhc6ddqdhc 2:22 WIKITONGUES: Ron speaking Limburgish
o4R1-TLkxBs 0:52 WIKITONGUES: Sho speaking Japanese
zLTgmdLaQJ4 2:06 WIKITONGUES: Daut speaking Romani
vPY5v6SBkxM 0:51 WIKITONGUES: Vseslav speaking Russian
2asptk633iA 1:12 WIKITONGUES: Mirjana speaking Serbian
Rm9fBd0k1LY 1:46 WIKITONGUES: Paul speaking Lau
fMRTimDnx4A 2:23 WIKITONGUES: Sai speaking Tamil
zyup0YLKCvw 2:32 WIKITONGUES: Leonhard speaking Swahili
osuIdwM0urk 2:42 WIKITONGUES: Naveed speaking English, Urdu and French
pFXjD9J-JE0 0:50 Mila speaking Fijian | Pacific Islander Languages | Wikitongues
GZcV67w2o1g 1:26 WIKITONGUES: Devika speaking English, Marwadi, Marathi and Hindi
9D2ZymNG4rE 1:46 WIKITONGUES: Afro Amado speaking Portuguese and Sena
yIlm9CoOhPc 3:10 WIKITONGUES: Teddy speaking Esperanto
sQXzn-H0kjY 1:53 WIKITONGUES: Mirela speaking Bosnian
CW8z9FeyOZ0 5:08 WIKITONGUES: Suna speaking Balkan Gagauz Turkish
EP5QqODoeHw 2:21 WIKITONGUES: Donald speaking Scottish Gaelic
le3cBRlWSE8 6:57 WIKITONGUES: David speaking Doric Scots and English
m0EwquC6wBU 9:14 WIKITONGUES: Christine speaking Shetlandic
8xVxOJCBPSw 2:56 WIKITONGUES: Iain speaking Scottish Gaelic
9p-xnXddSy8 2:19 WIKITONGUES: Hugo speaking Mapudungun and Quechua
hwQbxuwXGhc 8:34 WIKITONGUES: Àdhamh speaking Scottish Gaelic
57m0PfhE68c 1:35 WIKITONGUES: Milen speaking Bulgarian
674za6Yr3Po 1:21 WIKITONGUES: Sorcha speaking Irish
mrnxCBfLHFQ 1:40 WIKITONGUES: Tiger speaking Shangaan
0GsYpjHWDis 2:33 WIKITONGUES: Maxi speaking Spanish, English, Portuguese, Catalan and Italian
PpNr0MgTAbY 2:04 WIKITONGUES: Aldade speaking Portuguese and Chuwabo
Uq2x_P34bTQ 4:22 WIKITONGUES: Ayesha speaking Bengali
E-ohZtbkyxI 0:53 WIKITONGUES: Martin Speaking Swedish and Polish
72L2JsuGcH0 0:51 WIKITONGUES: Anis Speaking Lebanese Arabic
8RyDKy_HUj0 1:40 WIKITONGUES: Michael speaking Shangaan
IahmVXN7xEQ 3:23 WIKITONGUES: Ashwath speaking Konkani
Kz6bU7RqIjc 3:44 WIKITONGUES: Tural Speaking Azerbaijani, Turkish and Russian
gygesoisNhw 4:30 WIKITONGUES: Plator speaking Gheg Albanian
CG0OnKUqziA 3:40 WIKITONGUES: Jeremi speaking Afrikaans
E-hVDqrQq6M 2:10 WIKITONGUES: Manjusha speaking Telugu
DCNH-f-CC98 11:49 WIKITONGUES: John Speaking English
-oarxcgzsXY 2:21 WIKITONGUES: Lopez speaking Nafasana
pqPtJM4ZRQE 2:28 WIKITONGUES: Priscilla speaking Nakanamanga
RHJOlCbQbbU 2:05 Ladonna speaking Bislama and Neverver | Pacific Islander languages | Wikitongues
H3g87x0nL1M 9:49 WIKITONGUES: Marks speaking Latvian
mD24h-bbdMU 2:22 WIKITONGUES: Marta Speaking Polish
fMTSDqjcvEk 4:06 WIKITONGUES: Galib Speaking Azerbaijani
_nZiBMOqcUU 2:11 WIKITONGUES: Tio Bang speaking Daakaka
zXM5DJNZhFI 2:25 WIKITONGUES: Sidra Speaking Urdu and Norwegian
Flo8cPtcg6o 2:48 WIKITONGUES: Anthony speaking Swiss German
4dfcO_bsB90 1:58 WIKITONGUES: Hani speaking Swedish
P2vfi0HAaCU 0:26 WIKITONGUES: Fahed speaking Syrian Arabic
OFHx0-4wU38 11:37 WIKITONGUES: Ricky speaking English, Maori and Spanish
boFQzRB3OuQ 3:48 Sònia Speaking Aranese Occitan | Romance languages | Wikitongues
DmvDD9kJipE 3:56 WIKITONGUES: Omar Speaking English and Jamaican Patois
z_f7kpXW0tQ 1:39 WIKITONGUES: Suseong speaking Korean
nFLhxxsN7gQ 0:52 WIKITONGUES: Presi Speaking Bisayan
mcqxSaoqQ3A 2:34 Fugi Speaking Aranese Occitan | Romance languages | Wikitongues
KwAvCpU-z-w 4:33 WIKITONGUES: María José Speaking Spanish
UP3FhvITMX8 2:00 WIKITONGUES: Landon speaking English
eYwvcqHcKW8 3:04 WIKITONGUES: Conor speaking Spanish
ZMfuNUWBlYE 4:36 WIKITONGUES: Kevin speaking English
Oz0hBgB5ixs 5:53 WIKITONGUES: Timothy speaking Penang Hokkien
hVhqmUHKnqI 6:16 WIKITONGUES: Leslie speaking English
L2ST-UU6Ns8 2:31 WIKITONGUES: Dang speaking Thai
Ynx3JxV5U6I 2:12 WIKITONGUES: Joshi speaking Esperanto
tqftb3zad1o 2:42 WIKITONGUES: Adrian speaking English, Spanish, and Portuguese
wdiVss0X6V0 2:23 Joan-Lluís Lluís speaking Catalan | Romance languages | Wikitongues
_IXEev5Z7ao 0:57 Ares speaking Aranese Occitan | Romance languages | Wikitongues
suK34prc56o 6:47 Jon speaking Basque | Basque people | WIKITONGUES
N0GY23080G0 6:30 WIKITONGUES: Rachal speaking Cantonese
r6xt8HZy1-k 5:24 WIKITONGUES: Päivi speaking Finnish
2iu0f8GKFgQ 3:07 WIKITONGUES: Caitlin speaking English
jjiXgRO8qDw 1:51 WIKITONGUES: Sebastiano speaking Italian
ZtXr7bckLyc 6:16 WIKITONGUES: Tatenda speaking Shona
B-qxGhkRojc 4:36 WIKITONGUES: Wanyu speaking Mandarin
pru-95YczT4 1:58 WIKITONGUES: Seema speaking Urdu
PUYoRT2EA5Q 9:34 WIKITONGUES: Jerry speaking English and Cherokee
pdYpvY6Efos 2:24 Josèp speaking Aranese Occitan | Romance language | Wikitongues
Yxrq9zhgla8 1:47 WIKITONGUES: Majid speaking Farsi
gV7XWdt72Vo 2:42 Luis speaking Galician | Romance languages | Wikitongues
z1Jfor9KJdE 3:00 WIKITONGUES: Mark speaking Luxembourgish
1tgBuR2dWh4 3:07 WIKITONGUES: Lolly speaking Zulu
T_8snLihxWs 2:03 WIKITONGUES: Lindie speaking Afrikaans
BIV7gCJRY0k 3:20 WIKITONGUES: Jovana speaking Serbian
iCd5W4gwJsI 17:26 WIKITONGUES: Caroline speaking Gullah and English
AUtRgfFUCl8 1:44 WIKITONGUES: Ani speaking Armenian
R4VeecQEbA0 5:56 WIKITONGUES: Michael speaking English
At6KGp45FdM 1:42 WIKITONGUES: Stella speaking Russian, English & Armenian
L1jLUZXXYUc 2:53 WIKITONGUES: Michell speaking English
lXR8P4dOmAU 4:31 WIKITONGUES: Lee speaking English
1R5dPw4sYrE 5:53 Louis speaking Louisiana French (Cajun) and English | Romance languages | Wikitongues
NM0DpalXJ8s 5:49 WIKITONGUES: Alexis speaking English
G0n970JRNII 3:43 Sam speaking Louisiana French | Romance languages | Wikitongues
Vg4cGwY-q2c 7:52 Horace speaking Louisiana French | Romance languages | Wikitongues
SWn1t4o0QC0 2:25 WIKITONGUES: Stephen speaking Gikuyu
0iVQwo-1hHM 9:37 WIKITONGUES: Marion speaking English
3Ve8Gf5rAhA 2:54 WIKITONGUES: Jane speaking English
9OkYYixgCes 1:28 WIKITONGUES: Pascal speaking German
Ki4W4QVm2Hk 1:15 WIKITONGUES: Joyce speaking Cantonese
GaN884-JfB8 6:01 WIKITONGUES: Krzyś speaking Polish
nN4fDhAcGTM 2:49 Ona speaking Catalan | Romance languages | Wikitongues
M6ZdYNFo6gM 2:28 Anita speaking Catalan | Romance languages | Wikitongues
xSaGl8fiiYk 1:14 WIKITONGUES: Michael speaking Khmer
jBDZOm0HXO4 1:56 WIKITONGUES: Angelo speaking Portuguese
nqOtvem2dxs 1:12 WIKITONGUES: Lama speaking English and Palestinian Arabic
M2xmsclh3UA 3:26 WIKITONGUES: YiShan speaking Mandarin
fk3Cq0mR6_4 3:28 WIKITONGUES: Emily speaking Norwegian
WQ4W-UqaaMo 3:24 WIKITONGUES: Javier speaking Nahuatl & Spanish
w9MvPytHDvk 0:57 WIKITONGUES: Kimberly speaking Lakota
FxrCNf8utsE 3:12 WIKITONGUES: Jenni speaking Finnish
RCZF42aj2Po 3:38 WIKITONGUES: Natasha speaking English
DbArjSCZvOQ 1:27 WIKITONGUES: Will speaking Mandarin
iWRrLD7H98s 4:03 WIKITONGUES: Freddie speaking Portuguese
VgzHAbJjteQ 0:36 WIKITONGUES: Clara speaking French
vO87PpdQKV4 3:28 WIKITONGUES: Joel speaking English & Hebrew
cC50MO--CGQ 3:36 WIKITONGUES: Manuel speaking Totonac
CouHEysgsPo 2:05 WIKITONGUES: Octavia speaking Hessian
P2jdy8NC-JU 5:00 WIKITONGUES: Sofia speaking Russian & English
7zQSfU5HkUc 1:53 WIKITONGUES: Lorenzo speaking K'iche' Mayan
4SR39iWfZdk 1:53 WIKITONGUES: Regina speaking Spanish
v2jD_SU9KZo 2:59 WIKITONGUES: Mario speaking Aragonese

# We Plants Are Happy Plants

tDl7O05ljZE 1:17:34 Terence McKenna - Speaking Metaphorically (FULL TALK)
dGVXtLe3XRo 4:09 Terence McKenna - Nature Is Full Of Secrets
WUYP6S5IU-Q 3:24 We Plants Are Happy Plants - Change
IeEBq692Pz0 6:51:07 Terence McKenna Talks
AXVk-HLzPeY 4:17 Terence McKenna - History Has Failed
HE8eiwP0NQE 4:05:22 Terence McKenna Talks
sVeSNR8USE8 5:40:56 Terence McKenna Talks
2Azkg3-p7Rs 3:47 We Plants Are Happy Plants - Simple Satori
r_CZQxS2j2c 9:02 Creating AI Art of Terence McKenna While He Talks About Technology
Q6KhbXXbdh0 5:37:48 Terence McKenna - Understanding The Chaos At History's End
9ZubqvL4Hzc 15:44 Terence & Kat McKenna - How To Trip On Mushrooms
6QHTlZ60Jcg 3:55 We Plants Are Happy Plants - Ticking Time
VrlKrpwA368 9:54:47 Terence McKenna - Turning The Tide
CMOcmUXJdlw 6:13 Terence McKenna - The Ethical Life
ScfCI5gQ6r0 4:01 We Plants Are Happy Plants - Escape Into The Dream
j2V_NkhMPB4 4:13 We Plants Are Happy Plants - Elf Calling
dv43YbR-UNU 1:29:13 Terence McKenna - Existence Beyond The Grave
M0e4Wfc75Jc 8:31 Terence McKenna - The Guiding Image
6YAVu2c78WY 6:31 Terence McKenna - The Human Body Is An Instrument For Exploration
PQFRHlu141w 9:47 Terence McKenna - The End Of The Road
1gLDjn1FFDg 7:42 Terence McKenna - The Male Ego Led Us Astray
P-EhXbjRWTk 12:59 Terence McKenna Predicted The International Sanctions On Russia
d1k_8z0yl20 12:22 Terence McKenna On War
LZ8Q_gbx1LQ 34:05 Terence McKenna - The Emanation Of Wisdom
vU6j_qIyvsc 7:35 Terence McKenna on Modern Art
iYrhzAb5Sp4 7:03 Terence McKenna - Cleansing In Nature
ct7fVzG_VEk 7:04 Terence McKenna - Scenarios Of The Future
6DjhTfeI16E 6:05 Terence McKenna - The Unspoken Truth Of Creativity
JTjDbW7ecKk 7:54 Terence McKenna - The Mushroom Looks Engineered
LgtmJxrSko8 7:33 Terence McKenna - The Way Out
UrStQRq95NY 7:23 Terence McKenna - The Alchemical Child At The End Of Time
Ty2SIGIjRnE 2:57:38 Terence McKenna - Choosing Your Fate
zyU-susjUKc 7:06 Terence McKenna's Seven-Minute Flight Of Ideas
pOGXKRWIwWY 22:49 Terence McKenna On Transcendence
dyUopIVjvHg 12:13 Terence McKenna Metaverse Interview (Virtual Reality)
fClsFKfw1xg 10:16 Terence McKenna Tells Four Stories In Ten Minutes
DhE7E9_tenM 3:04 The Quiet Center (Trailer) John C. Lilly Documentary
hI2OkMfmH-0 11:13 Terence McKenna on Noam Chomsky And Marshall McLuhan
mdY5zFmq7BA 6:49 Terence McKenna - The End Of Culture
ixBPSX-gFP0 59:30 Terence McKenna - New Phase Of Human Existence
ZyQLlWzOvYw 1:29:52 Terence McKenna - Everything Teaches
9Ew3XLRkDIU 5:57 Terence McKenna - Language Can Do Anything
nLNtpAXOlHk 5:02 Terence McKenna - The Cure For Boredom
AmsiTPbbJhc 3:37 Terence McKenna - Calm Down
QHtt_QhsUUY 5:49 Terence McKenna - Existence Is An Illusion
sE8-5pQJPL4 12:31 Terence McKenna on Time Travel (Addendum)
P52emKeqHrE 16:39 Terence McKenna - Shaping Destiny
J4jIWnmx-Pg 16:02 Terence McKenna - Boundary Dissolution Parties
Txm5JlpiXKM 3:46 Terence McKenna On Sacrifice
ru-WouAYQzM 14:25 Terence McKenna - No Place For True Believers
iwGiSe6WFqY 19:07 Terence McKenna On Magick
KZQq0Oejfy8 6:01 Terence McKenna - A Cautionary Tale
fsXt7ys03WE 53:44 Terence McKenna - Closing Lecture (Palenque 1994)
-obcZEABgS8 7:13 Terence McKenna On History
rt_IKefTJn0 30:17 Terence McKenna On Quantum Physics
3FnaQmg6gnI 10:22 Terence McKenna On Aliens
bAZ0b6GHxiw 4:49 Terence McKenna On Determinism
v6lsQoGMzGc 8:43 Terence McKenna - Subtle Evolution
oKtR5o1X_NQ 53:37 Terence McKenna - Morning Lecture (Palenque 1994)
vprIgkBGql4 3:49 Terence McKenna - Seeking Enlightenment
0X8iBM3F5Uw 6:01 Terence McKenna - Walk The Golden Streets Of The Imagination
_8UCpLZ7Nqc 9:48 Terence McKenna On DMT Elves
OwkQRqOzg70 8:39 Terence McKenna - The Power Of Art
TVHYiQIq9b0 8:59 Terence McKenna - Repairing Syntax
SPF4m6r_Urk 6:21 Terence McKenna - We Are Living Out Fantasies
qWKCsrwA1PY 25:28 Terence McKenna On Fractals
EBYgq08akYs 4:21 Terence McKenna - Strange Datura Experience
voJ1LBHPk_4 4:21 Terence McKenna - Burning Our Bridges
RzTVv4vghCI 5:47 Terence McKenna - The Great Dilemma
0ZLaRCE2qY0 1:00:35 Terence McKenna Funny Bits (Compilation)
cqfJlaB7-Y8 6:17 Terence McKenna - Ripping The Membrane
QaB2aZ0Q5FY 10:59 Terence McKenna - Human Impact On Prehistoric Nature
_zXkWiGxSb0 17:12 Terence McKenna - The Ego Is Not Our Finest Achievement
mJ9koe-UxrE 40:02 Terence McKenna on Time Travel
pfgHHd2sIjs 2:32 Terence McKenna - Pattern Out Of Chaos
dVtnZ5r9Bt8 17:05 Terence McKenna - Childhood Stories (Compilation)
kch1qKPcKNE 6:33 Terence McKenna Encounters Hyper-Dimensional Pirates
3duAI-as5-g 5:28 Terence McKenna - We Don't Have The Faintest Idea
WekiRl16Oug 3:15 Robert Anton Wilson Talks About Crypto-Currency In 1997
XTrwm4tbqkg 7:33 Terence McKenna - Times Of Confusion
r4eSt4nH1NA 5:44 You Are Responsible For Yourself - Terence McKenna
01eM6bIch2w 6:17 Terence McKenna On Wealth Inequality
qn2w20Z0X6A 19:07 Terence McKenna - Don't Follow Leaders!
qhxyA-lJtAo 11:34 Terence McKenna - Complete Experience Of Existence
uQWadGDIedY 6:17 Terence McKenna - Digital Liberation
XPeHEWAa_rc 8:10 Terence McKenna - Alienated From History
AqP6IX4U8Wc 24:01 Terence McKenna "I Ching" Interview
K2daXV4AxYY 7:07 Terence McKenna - The Fractal Faith
ia9kVAxg-hc 6:25 Terence McKenna - The Still Small Voice
DhLTWbxOGWo 1:19:17 Terence McKenna - Casting Doubt On Assumptions
0o6yaBWWp-o 11:49 Terence McKenna - When Prophecy Fails
CmAXFemOSFM 10:52 Terence McKenna - Constant Scientific Revolution
WBZatEPUHIE 8:50 Terence McKenna - Alien Spores
uFyLPZoPhOk 4:17 Terence McKenna - The Reconstruction Of Eden
MwxkNpc9i-8 1:18:03 Terence McKenna - Brave New World
GowIF-nIEvM 7:33 Terence McKenna - The Departure
YkBcpsor1rk 5:20 Just McKenna Being McKenna For Five Minutes
6vhFoVFOx1A 4:52 Terence McKenna - This Too Shall Pass
kyf6GoPMQv0 4:30 Terence McKenna - Death Has No Sting
En9JhgZcvj8 7:19 Terence McKenna - We Are Ruled By Corporations
W5WsD0M2X3s 5:03 Terence McKenna Quoting Famous People For Five Minutes Straight
tLdp9yyxNns 6:18 Terence McKenna - The Nightmare Of Modernity
qNgXcp4i3gs 9:36 Terence McKenna Reads From Finnegans Wake
ryeogBb4q3w 3:09 We Plants Are Happy Plants - Butterflies
Pjl72SLA1qk 10:00 We Plants Are Happy Plants - Razz (Shift Of Consciousness Mix)
QB7fRkyoIuo 6:33 Terence McKenna - The Big Picture
CXEj666l-rs 11:28 The Future Is Virtual (Terence McKenna VR Documentary)
_4Y4_r_iK0A 7:35 Terence McKenna - Science Is A Branch Of Art
ivJp447eOu8 7:34 The Peculiar Humor Of Terence McKenna (Part 9)
kbL8r35jQxU 33:47 The History Of Reason And Intuition - Terence McKenna
uF_SSTmDZCc 2:43 McKenna Toons: Alienation (EP1)
NK5-W_bvzBU 8:47 Terence McKenna - When Media Becomes Reality
feLFulK4Vbw 13:07 Terence McKenna - When Culture Fails
0rkRJXBQ8ds 13:52 The Momentum Of Our Ideologies - Terence McKenna
KVNPUt56GOs 12:06 Terence McKenna - Technologies and Our Flaws
rTpxbsaAxhU 15:50 Bad Trips (In Depth) - Terence McKenna
-fZQPkkSk2o 9:32 Terence McKenna - Everyone Is Ordinary
vzZ08mXqpgs 5:09 Terence McKenna - Digital Existence
rRgJwR65Cms 22:58 Terence McKenna Around The World (90's Travel Vlog Compilation)
aLtJx7APLzk 7:31 Terence McKenna - The Sword Of Wisdom
oxN8QKGPJ7I 8:03 Terence McKenna - Lunar Time
MgQrCVVx5P8 15:35 Terence McKenna - Taoism (Compilation)
wN0ZyRu55O8 12:55 Terence McKenna - The Plant Connection
MsU6R0oMyZA 27:37 Terence McKenna - The Price Of Miracles
0xefRtWIZnE 7:18 Terence McKenna - This Is The Way
5Rq4tpWt5Bk 2:03 Terence McKenna Video Game (Teaser)
e_N7pKY5s7U 6:13 Terence McKenna - The Power To Transform
ax0RvqExzYk 4:58 Terence McKenna - The Game Of Understanding
647yqQOTa_Y 9:39 Terence McKenna - The Fabric Of Time And Language
s6B0d3MfB7s 2:21 Terence McKenna - We Are Awakening
Blw6TMMNb38 11:21 Terence McKenna - Anxious Biology
355TKLo4xsw 5:56 Terence McKenna Tribute (Narrated by Dennis McKenna)
O3MCodNInhY 8:47 Terence McKenna - We Are Frustrated Monkeys
ssRUz_tNdJw 6:37 Terence McKenna - Spiritual Objects
qWeawgG-QwE 5:44 Terence McKenna - Coincidences Rule Our Lives
-F_n-0kBE9c 13:45 Terence McKenna - Messiahs And Flying Saucers
E8ocbqwSzP4 8:49 Terence McKenna - How To Talk To Elves
HaOYys4SfhI 7:49 Terence McKenna - The Only Escape
TV5wIIQPTYc 11:17 Terence McKenna - The Mind Is A Hidden Organ
arUfiA3nm70 28:25 Terence McKenna - The History Of New Age
U3cfHrs7Un4 2:37:52 We Plants Are Happy Plants (Music Mix)
I94YZHrmzO4 7:27 The Peculiar Humor Of Terence McKenna (Part 8)
h8pwa68KWmo 5:35 How To Live Your Life (Terence McKenna)
8x05V_lPm70 19:31 Terence McKenna - We Are Divided From Each Other
4UC6A9rIJZU 5:43 Terence McKenna - Hacking Reality
IOppvLvCbcw 4:45 Terence McKenna - It's Going To Get Crazier
RFUPh6y7Bh0 5:29 Terence McKenna - We Have No Idea What Is Possible
6MRs3qNZ64o 5:10 Terence McKenna - Truth Can Be Known
-8VE04-by9Q 10:25 Terence McKenna - What's Going On?
ltG9_pE62eQ 5:33 Terence McKenna - Ocean Of Thought
5aRpsBX8ByA 5:33 Terence McKenna - Globalism vs Fragmentation
BO0pTiFjiIo 4:21 Terence McKenna - Language Makes Reality
Fln4HO5xrIU 12:05 Terence McKenna - Challenges Of The Future
0CorHrZHHHU 12:25 Terence McKenna - Consciousness Wars
4Wb2ZxG95R8 4:00 Terence McKenna - Resonance
fZk93k5T4iA 3:47 Terence McKenna - Chillum
0b3outdSSoM 3:40 We Plants Are Happy Plants - Spirits In The Room
g5TR5eezJXo 5:43 Terence McKenna - A Life Well Lived
gnDYIUnMcYk 13:26 Terence McKenna - Spirit And Impermanence
YhacmHCDsNs 6:47 Terence McKenna - Specialized Diets
juYcaOD6lN8 5:49 Terence McKenna - We Are Lost
QFm6xYglx4E 10:04 Terence McKenna - Social Unrest, Anarchy, Responsibility
vU90ybDgEzM 12:52 Terence McKenna - Language Of Emotion
Ix-JuTYKahc 4:49 Kathleen Harrison & Terence McKenna - Botanical Dimensions
K_hDX3GzROo 7:43 Terence McKenna - Build Your Own Myth
cn9cSBCQ5BA 1:02:09 Terence McKenna - The Weirdest Tales (Compilation)
HUDvVq56vDw 6:52 Terence McKenna - The Lost Connection
HWRjGPCxV_4 4:33 Terence McKenna - The Imagination is God (In The Dream)
S9Po0KU5_nU 12:53 Terence McKenna - Green Anarchy
2OiATjkR4uI 23:50:20 Terence McKenna - What Nature Teaches Us
p_HCCHptP5Y 4:00 We Plants Are Happy Plants - Satori
0Bhiy0797qo 4:51 Terence McKenna - Ride The Tao
wSb7-DT7oK4 10:25 Terence McKenna - You Have Two Choices
LUH-0iFJbYs 7:28 Terence McKenna - You Could Change Your Reality
WPDF7lQVGRI 8:08 Terence McKenna & Anne Armstrong - Disasters Bring People Together
MTJeljGJRgY 49:25 Terence McKenna: The Wordsmith
k-AhCEAVtvQ 3:34 Terence McKenna - Tested To The Limits
s6gaBZUZFHI 8:13 Terence McKenna - The Fire Of Consuming Hope
J8mK4dPna18 11:12 Terence McKenna - Work On What Has Been Spoiled
P7Ltbw9L1VU 9:45:36 Terence McKenna - Turning The Tide
ziqYvPfJcmE 7:21 Terence McKenna - Don't Panic
WjEK2CIK6nY 7:15 Terence McKenna - Viruses and Social Life
7_qxFjk4BIk 5:21 Terence McKenna - We're Inside A Larger Organism
yZQtrzUKj9Q 8:02 The Peculiar Humor Of Terence McKenna (Part 7)
Zs0_ySA__cI 5:21 Terence McKenna - Your Feelings Are Correct
bCYbSFbWoe8 10:17 Terence McKenna - Rearranging The Deckchairs On The Titanic
QJBOMwsGsYs 10:17 Terence McKenna - Searching For Patterns
C0o7JGkM9Fk 8:06 Terence McKenna - The Transmundane Plane
vrvSvxOf2dY 6:43 Terence McKenna - Speech Makes Mountains
_pihM8MjxoE 8:43 Terence McKenna - Everything is Double-Edged
XQrJyR0t67g 5:49 Alan Watts - Give Yourself To The Water
0U2Ag_Za7nc 4:51 Terence McKenna - The Best Stuff Is In Your Own Head
FK-N6ZdDXfc 3:14 We Plants Are Happy Plants - All Of Me
bb_A3kG0tmg 5:56 Terence McKenna - Action Assumes Understanding
YjzsP-8FXO8 3:34 Terence McKenna - Make The Alien Your Friend
Mb_boK7kuhA 8:25 Terence McKenna - Hard Enlightenment
3blPu5GalPY 5:09 Terence McKenna - DMT Chronicles
oyXnLjcncxM 7:45 The Peculiar Humor Of Terence McKenna (Part 6)
OT-bjR8Dxak 36:15 Terence McKenna - The Nature Of Nature
j56caHC--t8 4:21 Terence McKenna - We Need To Do Our Best
r4co3bQr39I 16:25 Terence McKenna - We Don't Know Anything (Belief Is For Kids)
DrsgNo6JuUU 4:58 Terence McKenna - What Life Is For
YiIvoY3ikLs 5:15 Terence McKenna - Strategies For Leaving Earth
mD66opUGI2o 5:19 Terence McKenna - This is an Art
0-pdh1dLPzc 5:01 Terence McKenna - Singing And Synesthesia
K3Xy0AfBszI 6:37 Terence McKenna - Creativity and Alienation
v0VvC4WYKrM 2:54:10 Terence McKenna Digital Revival (Full Series)
6pqBG3Zcy98 7:31 The Peculiar Humor Of Terence McKenna (Part 5)
nWCFrfuPFi8 3:53 Terence McKenna - The Ego Does Not Want You To Take Psychedelics
FXtWoFLG-p4 2:58 Terence McKenna on the Joe Rogan Experience
qSyq7m5-xeY 3:22 We Plants Are Happy Plants - Syzygy
qcFuTVGsX5I 0:11 Terence McKenna - There's No Business Like Show Business
KYsI-4_Ilvo 5:22 Terence McKenna - You Can't Take Materialism With You
r0pdF_FRv7M 2:03 Terence McKenna - Return To Authentic Being
Fsax_JFUQyg 7:12 The Peculiar Humor Of Terence McKenna (Part 4)
dJYoQd4o65k 5:07 Terence McKenna - The Spiritual Life
gNTV7XEpxNg 2:01 McKennAI (Introduction)
7XJHPL90t3o 4:32 Terence McKenna - Love Is The Realm Of True Being
YWEwIzNADv8 7:28 The Peculiar Humor Of Terence McKenna (Part 3)
1brilAv_gFQ 7:13 Terence McKenna - Know Your History
sNR7CmN3ZiM 10:18 Terence McKenna - Jesus Christ (Stories and Controversies)
QrXvIsqRPn4 7:25 The Peculiar Humor Of Terence McKenna (Part 2)
G2OPrIZzHFs 7:00 Terence McKenna - To Groove With What's Going On
DKemHGIsA4k 7:08 The Peculiar Humor Of Terence McKenna (Part 1)
Iaf_L9sO5w8 3:17 We Plants Are Happy Plants - The Way (Official Music Video)
8n0gaCif_x4 5:03 William S. Burroughs - Take Nirvana
PV4qr7xEDw0 4:34 Terence McKenna - You're A Performer
c09UgsmFxp0 2:19 McKenna Sipping Water For 2 Minutes
01EBcUq8_S0 5:50 Terence McKenna - Ideas Are For Play
E3FudiU1r8U 7:31:06 Terence McKenna - The History Of Shamanism
rGJTwqLEsXY 5:31 Terence McKenna - How I Got To Be Who I Am
k2VYcReT4ro 3:16 Terence McKenna - The Truth Cannot Be Repressed
rhrgf0a8c84 7:13 Terence McKenna - The Art Of Memory
Py9gLDk16fM 9:27 Terence McKenna - Just Take Hold Of Yourself
T4w-HS3pUic 0:48 Terence "One Of The Gang" McKenna
0HrK0u2f_dk 3:25 Paul Stamets on Terence McKenna
OnIM9gBEZiA 6:13 Terence McKenna - An Anthill Is A Mind
FJnyQwNDkW0 6:22 Terence McKenna - The Difference
rqcqzv4FcvY 0:22 It's "Terence"
-ZwAUDOhfJE 8:17 Terence McKenna - The Mushroom Said To Me (Compilation)
PeJfgBCs21U 4:13 Terence McKenna - A Message Of Feeling
Hye5MxihJVE 7:12 Terence McKenna - Extraterrestrial Mushrooms
fvRMjcH77iU 0:41 Best McKenna Snippet Ever
SB52qYDgGwQ 1:19 Terence McKenna Has His Cake and Eats It Too
# # yijwlGeOlOM 3:04 Jordan Peterson - The Pathway to Redemption
6YNl7Eaikf0 3:32 Terence McKenna - Reaping The Fruits Of Sowing The Fields Of Mind
Cbbl5xNa-pQ 8:07 Terence McKenna - Play The Game Of Life With A Full Deck
bZkES0bOw0U 2:14 Terence McKenna - Faith In Progress
edtpx9iqC-g 6:54 We Plants Are Happy Plants - The World Is A Labyrinth (featuring Terence McKenna)
6uUdecUFta4 4:32 Terence McKenna - Alien Mind With An Agenda
h4UKAvPTpr0 17:05 True Hallucinations Video Game Walkthrough (Part 3)
PVSXgEYt4NE 2:09 We Plants Are Happy Plants - Alchemical Morning
ijA5RHTJaV4 12:09:24 Terence McKenna - The Mystery Of Language
6CC_em2fn-I 6:13 Terence McKenna - Ritual Is A Substitute For Understanding
tF2q_V582i8 4:46 Terence McKenna - Live In The Light Of Paradox
6j1D6s8vjdw 4:00 We Plants Are Happy Plants - Rites Of Spring
5pjlpgkJpUg 39:44 Terence McKenna - Ecological Crisis (Video Compilation)
MYl7Pjm2bT4 2:01 Alan Watts - We Put Ourselves In Boxes (Rare Footage)
6sg5XwPnRS0 3:34 We Plants Are Happy Plants - Your Happiness (Featuring John Lennon)
ICifGzyR1gE 5:49 Terence McKenna's Vision For Humanity
khvJbfoAnqU 23:46 True Hallucinations Video Game Walkthrough (Part 2)
PytgplWvBWs 4:42 We Plants Are Happy Plants - History Ends In Green
vs7a_tkF0Iw 3:16 We Plants Are Happy Plants - Nature Is A Teacher
msvESq62PTo 2:11 The Plants Return
a92EZz6IQRA 19:04 Terence McKenna Digital Revival - The Buddha Blues (Episode 12)
OxgLgwIfPSM 26:52 Terence McKenna Interview 1992 - Digital Revival Series (Episode 11)
EPhuBLV0f1E 17:52 Terence McKenna Digital Revival - Shamanic Drumming (Episode 10)
XtUmaSKOZDE 20:25 Terence McKenna Digital Revival - Are We Changing The World? (Episode 9)
Myw2V4gInTY 16:11 Terence McKenna Digital Revival - LSD Studies (Episode 8)
ez1GUqlgq3w 5:01 Terence McKenna Witnesses A Miracle (420 Special)
XvsjzrBdT-A 12:02 A Day In Prague With Terence McKenna (Digital Revival Series - Episode 7)
cy7WTprLjlU 21:42 Terence McKenna Digital Revival - Intuition (Episode 6)
1YwyaSqcVIw 13:09 Terence McKenna Digital Revival - Poetry and Nature (Episode 5)
xg_dKzZMoTI 17:07 Terence McKenna Digital Revival - Alchemical Mysteries (Episode 4)
s2F_JFtAmvM 12:26 Terence McKenna Interviews Ralph Metzner (Digital Revival Series - Episode 3)
BrcfKO1azc8 20:25 Terence McKenna Digital Revival (Episode 2) - The Water Birth Method
YMJ8cQi5pfQ 13:53 Terence McKenna Digital Revival Series (Episode 1) - Alien Abduction Experiences
JajxYcZI2R8 2:48 Terence McKenna - Vortexes Of Connectedness
YGqZ6tjJOzQ 0:45 Terence McKenna Lives On In Cyberspace
7wBa488-JDY 2:30 Terence McKenna - We Are Being Manipulated
QNmGbiIARKA 4:00 Alan Watts - The Force Of Love
jVwfmarlwhM 6:01 Terence McKenna - Find The Others
x7L87cPWD8U 3:48 Terence McKenna - The Gaian Fury
_dfuZPiicAw 3:24 Terence McKenna - It's Not Too Late!
SiPe1Cx1X4c 2:53 Terence McKenna - The Big Questions
DR0PNLFJHn0 5:18 Terence McKenna - Discipline Yourself
23lbZz4fj4s 4:22 Terence McKenna - We Are Amnesic
E__bB38ct6w 5:29 Terence McKenna - Have Your Mantras Polished And Your Yantras Ready
CikveyZjum4 5:52 Terence McKenna - Hard Truths
f5_R1C0tqSU 4:21 Terence McKenna - The Impulse
equlEnNzGJ8 22:53 True Hallucinations - The Game (Walkthrough Part 1)
hl28tz5JDJI 4:53 Terence McKenna - Our Destiny
7O3GLn78CAA 7:45 Terence McKenna - The Final Illusion
By7T4SyGhPU 1:31 True Hallucinations - The Game (OUT NOW!)
Hn0GQMPkKU8 3:48 Terence McKenna - Something We Lost
IhozWjUMEwM 4:21 Terence McKenna - Two Funny Stories
FNUvHA_6Jf0 4:45 Terence McKenna - The Tale Of Sophia
iXbDfIEbVUE 6:48 We Plants Are Happy Plants - Scepter Of Power
11U8-mDleZM 3:42 Terence McKenna - The World Is Magic
G3xUd6e06T0 6:19 Terence McKenna - We Are Language
Tbx5vHePL-4 2:15 Terence McKenna - Why Are Boys In Charge Of Everything?
# M3i4Zcld30g 3:01 Jordan Peterson - Just People Putting Their Lives Together
K2zn8Ouwcmw 3:20 Terence McKenna - Is Man Good?
UH3P5XzTNQE 2:29 Terence McKenna - The Hunt
s0xn03i9DRA 4:42 Terence McKenna - Virtual Reality
HfcqC88tQJk 1:44 Terence McKenna - Iosteck and Pinkastairs
GQ5_rlIdnbs 1:26 Terence McKenna - Plants Which Hold The Gods
CfUDLW8v8KE 3:34 Terence McKenna - Mama Matrix Most Mysterious
V-E8Aun0P3s 21:15 Terence McKenna Tells A Story From Greek Mythology
55RzIdrTwAQ 2:31 2001: A Shamanic Journey (Explained by Stanley Kubrick)
iPzRme85KIQ 8:16 Albania Roadtrip
zLcZLfF8eH8 5:16 The Mushroom Hunter - Paul Stamets
qRfH0LocDUU 5:13 Terence McKenna On Taoism
gk_nhjzvN8k 1:01 Terence McKenna - You Must Humble Yourself
# LNJ8jfz9Nm4 2:21 Jordan Peterson - Conservatives And Liberals
ONvyz1AThLc 4:02 Terence McKenna - Electronic Tribalism
uJjR3aUhsOk 26:30 Terence McKenna - Self Transforming Elf Machines
sH43VpDkERc 1:01 Terence McKenna - Meeting With My Publisher
wJWGCF1NTiw 5:01 Terence McKenna - Paradise Lost
o2rpkM846Ic 5:28 Terence McKenna - Humanity Has A Purpose
W0kNgji6kzM 1:37 Terence McKenna - Culture Is A Flight From Reality
-kB-Vrrjjyo 18:33 How To Save The World - Terence McKenna
X7ghslwtrJc 9:32 Terence McKenna - Ideology Has Poisoned The Last Thousand Years
0BXZst265Es 6:02 Book Review
# V3ADKHMwSoI 1:25 Jordan Peterson Explains Consciousness
EhR-Qm0mc-s 7:02 Terence McKenna Explains Everything
DGISua0YrEU 4:55 Terence McKenna - Private Miracles And Channeling
oN93Lbh_uPg 4:22 Terence McKenna - Communities Fragmented And Suspicious Of Each Other
YL3b47OMOoA 5:27 We Plants Are Happy Plants - Way Of The Wizard (Jewel In The Lotus Version)
52sot1dhEGo 7:52 What's On My Bookshelf?
jim0L_e2kc4 5:35 Terence McKenna - The Coming And Going Of Male Ego
HpP1izuTeus 4:35 Alan Watts - The Happening
17fw4nEUlO4 3:37 Nothing Lasts - Terence McKenna
8_MWyOastoY 3:18 Terence McKenna - Astrology
_r16TDBLI9Y 10:42 John C. Lilly - Looking Into Inner Space
1p5s3jHpeKk 4:22 Terence McKenna - All About Plants
aQKM8LUGLt8 3:43 Terence McKenna - Magical Connectedness
QkDdojfTgbg 2:03 Terence McKenna on John C. Lilly
lAFJEKnWwiU 14:02 Terence McKenna - Thoughts About Death
Lvv8HhTw0D8 3:01 Men Are The Creation Of Choices Made By Women - Terence McKenna
AJdqvnUEE-k 1:46 Anxiety Is Inappropriate - Terence McKenna
3CvkTDyMOx0 0:29 When The Moment Comes - Terence McKenna
# Ecyo5NOCi54 6:32 Jordan Peterson Easter Message
ipqUz7EwjZs 3:22 Terence McKenna - Check Your Beliefs
0iOCeQBVyIA 9:36 Terence McKenna - All About Mushrooms
k7eJOKAPZxo 6:00 We Plants Are Happy Plants - Not Waiting For Anything (Variation On A Theme)
GilviNXq3LM 4:21 Terence McKenna - We're Burning Our Bridges
uHM-NN71F-U 3:37 Jim Carrey's Art and Paintings
ZQaJaLvdBZU 1:59 Terence McKenna - My Website
F4Zmvq67rgU 3:27 What Is God? - Terence McKenna
btJpNVMQwQQ 2:20 Marxism And Capitalism - Terence McKenna
LpPu663buHg 3:26 This Garden Party Is Over - Terence McKenna
8OGKc3MYlP0 22:29 Terence McKenna - Memories
HLZ75T6xX3c 15:09 Terence McKenna - Embedded In Biology But Transcendent To It
qXVytj4S_M0 1:11:15 We Plants Are Happy Plants
QFAZ-xRrkDg 0:56 Terence McKenna - Why Us?
kztxwCsn9pk 1:56 Terence McKenna - All Flows
S8id3RQK2ew 10:12 Terence McKenna - DMT: The Weirdest Thing
e0Pzc6eCu08 8:25 Terence McKenna - I'm An Alienated Intellectual
-NLfXHL-2MM 5:46 What Is This Channel All About?
b4S-eH-1PTw 9:48 All About Shamanism - Terence McKenna
kLLUHioKKdE 6:10 We Plants Are Happy Plants - Beyond The Beyond
DpqUn_szhhU 4:37 Terence McKenna - San Francisco State Strikes 1968
66LFkWyCmuU 2:31 John C. Lilly - Go With The Indeterminate Flow
iRNTd-dS0vo 1:37 John C. Lilly - Creativity Is Uncertain
# tdu6iN0CM3s 4:36 Jordan Peterson - Don't Strive For Happiness
DenxHRuaZ50 10:00 The Best Terence McKenna Quotes Of All Time
# tnGI8aADZro 3:38 Jordan Peterson - Food Of The Gods (The Mystical Experience)
wqfpSAf1Y6o 2:08 Terence McKenna - Who Knows The Answer?
EmzppDaX0_o 3:41 Take Nature As A Teacher - Terence McKenna
olvVeDDqv2w 3:51 How Weird People Shall Be Allowed To Be? - Terence McKenna
FJonUTXopBY 1:14 JBP Drinking Coke
w8M7t-gbwCk 14:22 We Plants Are Happy Plants Live At Toldi (2017)
NQS7ziJ02l8 3:13 Go Forward Into The Shamanic Domain Of The Spirit - Terence McKenna
# kO93SAHrd1E 4:01 How Jordan Peterson And His Wife Make Their Marriage Work
ziy-Tuv_vmM 2:09 You Can Beat On The Truth With Ball-Peen Hammers And It Will Do Just Fine Thank You
9CuH0AVAy3s 1:25 Terence McKenna - Sci-Fi Plot Idea
treb7g9nNOE 1:26 Terence McKenna - My Political Stance
bniT_r5VgZw 1:21 The World Is Like A Novel - Terence McKenna
3FqmVITeiwQ 5:09 Terence McKenna - Lizard Land
f924acEAG3M 2:16 Terence McKenna Reads Sailing To Byzantium
ujBzJMbPMFg 16:52 Awakenings Of Jim Carrey
VQ4MpZ9Vbks 3:43 Synchronicity Story - Terence McKenna
I7D0KdKOSXM 4:45 The Perfect Relationship (Meditation) Wouldn't It Be Nice If...
A8mVUPySzLI 9:02 We Plants Are Happy Plants - 9
U6Iglfuyu5s 5:23 The Parable Of The Match Bearer
BhgZXzqOubc 1:24 Terence McKenna MasterClass Trailer
cTgGvPiVwic 4:47 We Plants Are Happy Plants - Downstream
# 0jQY5E4NUvc 2:12 Jordan Peterson - Jump Straight Up (Remix)
AWHj7Ilaz8E 1:01 A Good Examination Of Conscience - Terence McKenna
hjsl3CzYuY0 2:05 The Reality Of The Transcendent - Terence McKenna
k8Luyrezxfo 3:31 Apocalypse - Terence McKenna
MckOyxy5NIM 4:22 We Addict To Everything - Terence McKenna
EB0JMbr0BPQ 2:41 Terence McKenna - The Secret Adam
CBLSC55FgOU 3:59 We Plants Are Happy Plants - Sands Of Time
-usWe5iOmPM 1:04:37 Terence McKenna - Personal Stories
o7CEzTBQgeA 1:33 Terence McKenna - The Historical Octave
TRZVxFQre6U 1:35 True Hallucinations (New Jim Carrey Movie) Trailer
M42j9p9LKdE 1:56 Terence McKenna - Clear Thinking
dfDthR_yLh0 0:08 Terence McKenna Reaction Meme
zV84ou1NbSA 9:19 Terence McKenna - Jesus Christ (Brief History Of Early Christianity)
mjiWHhvRrgE 3:08 Terence McKenna - The Witch Doctor
3kI-wmdt3_o 1:28 Joe Rogan Falls For Jim Carrey Movie Rumor
IwgMEwIs_kI 2:42 Jim Carrey - There is Just What is Happening
puDtuBCMpxw 2:08 Eternal Life - Maria Szepes
EGeQcPEoizM 2:46 We Plants Are Happy Plants - Guide Me Home
aIsTzobBsNU 1:21 Terence McKenna - The Idea Of Unity
7a9weV8I9Mc 4:39 The Epiphany Of Understanding - Terence McKenna
yjUVFA-aIJw 5:24 We Plants Are Happy Plants - An Incredible Pearl
JNotQ_gKq0s 5:02 Terence McKenna - Ayahuasca Stories
psgccV9i6HU 4:02 Terence McKenna - Tripping With Other People
CyB5VwSCoCc 3:59 Terence McKenna - When I Was Schizophrenic
no5PTajeEa8 2:16 Terence McKenna - Mushroom Tea At A London Party
FdXNHgmS9H8 4:01 Seth Speaks - The Validity Of Your Being
T9fg20CcltE 1:56 Terence McKenna - Rome Falls Nine Times An Hour
KT981LRibP8 5:08 Terence McKenna - Strange Things At La Chorrera
3R8FDHu7AqY 4:41 Terence McKenna - A Weird Experience
# dYMz_UArCAo 1:41 Rats Are So Afraid Of Cats - Jordan Peterson (Remix 2)
ysvWrqLpTM8 3:15 Terence McKenna - Let's Create A New World
W6gaFOtZI5w 3:19 IMAGINATRIX - Terence McKenna
APqkta_1OYY 1:45 Terence McKenna - Something Is Going On In This Species
i6DrTfegMtY 5:27 We Plants Are Happy Plants - An Incredible Pearl (Featuring Terence McKenna)
r3VF7fIyRtg 2:41 Jim Carrey Set To Play Psychonaut Terence McKenna In New Biopic?
-LD5tU9a3hk 1:52 Terence McKenna - To Make Language More Poetically Compelling
aUeickoampI 1:46 Terence McKenna - Making Sense
G1fxGm_l1J4 4:04 We Plants Are Happy Plants - Hermes Thrice Greatest
JB0mb26M9VY 2:29 Terence McKenna - If Anything Undoes Us, This Will Be It
2475UMbj19I 1:14 Terence McKenna - The Truth Will Be Persuasive For Those Who Doubt It
sdbJicB0go0 3:23 We Plants Are Happy Plants - Wind Of Intuition
ZELaYHgCDs8 1:28:36 Terence McKenna - The Future Of Art (Esalen 1998 August 7)
G2aA8n6suKY 3:51 Terence McKenna - Cyberspace Is A Land Of Opportunity
E0gyOk8wqeg 0:29 The Bohemian Impulse
B8aVtYTdkhQ 4:13 Terence McKenna In Thailand
hvRkr6fdRxc 3:37 Terence McKenna Reading List
ePO5jbLF2NY 4:58 Terence McKenna Debunks Crop Circles In Under 5 Minutes
3r7V3oRYLJI 6:37 Terence McKenna - Plain Talk
UYV7uPLVNXY 2:39 Terence McKenna - I Was Flaming And It Took Me Years And Years To Dial It Down (True Hallucinations)
WeL83yuTVao 0:51 Terence McKenna - We Look Like Everybody Else
# CuiPzPV6nw0 1:08 Jordan Peterson as Jerry Seinfeld
BCMTi9AU_5Q 8:09 Terence McKenna - Growing Up
dOy7v44WE2o 2:14 Terence McKenna - Curiosity
i4sB3agikXI 3:50 Terence McKenna - Transformation Of Man Into A Galaxy-Roving Bodhisattva
54JA1AHqnI8 1:10 We Have To Awaken To Our Past - Terence McKenna
L3b-FB_2-nk 7:24 We Plants Are Happy Plants - Not Waiting For Anything
wieYC04FAcw 1:06 Terence McKenna - Show!
# bg5mE5yp-5g 3:04 Jordan Peterson - Plan Your Future
EpZzkNBqOJQ 2:47 Terence McKenna - Anarchy And Social Responsibility
# qDSeL8wSN20 6:10 Jordan Peterson - I Suffer Therefore I Am
# uJBgj8U3lw0 4:34 Jordan Peterson - Psychedelics
WVGPoAofey8 1:01 Terence McKenna - You Can Give It A Theme
cQvd8a1Z6vo 5:15 Terence McKenna - Evolution Of Language
# pUqBbOzBZ5Y 2:19 Jordan Peterson - Rats Are So Afraid Of Cats (Remix)
Q2IJ9ZTLfY0 6:46 Terence McKenna - Transition
# 9apmGBM-hiI 1:49 Jordan Peterson - Stories And Myths
_VlJCtPAmbg 3:58 Terence McKenna - Lisbon Interlude
# MdsVC_qR4t0 5:34 Jordan Peterson - Nihilism, Totalitarianism, and The Divine Individual
Oiog0RHir8A 2:34 Trigger - Ralph Abraham, Terence McKenna
i3S2ftdAHdw 0:56 Was Terence McKenna CIA?
0FRrjqSm0vo 1:31 Religion - Terence McKenna
64IPmS_87UM 6:32 My Trip to Thailand and Cambodia
4DbWAMWPCKs 3:00 Bullshit - Terence McKenna
7pLiUd5N_Cg 3:14:17 Terence McKenna Meme Movie (FULL HD)
syhZ_0loMZk 3:27 We Plants Are Happy Plants - Full Of Sound (Variation On A Theme)
1aMZrc3uv5M 0:43 11 16
cgDOvJg3-dQ 9:37 We Can Make A Difference - Terence McKenna Environmental Speech
czGSwEvblRI 2:57 An Entirely New View Of What Time Is - Terence McKenna
RCnJVTT9vyk 2:40 Revolution - Terence McKenna
2aW9IUDPdNk 2:01 The Mind Is Poised On A Precipice Of Incomprehension - Terence McKenna
FpMlrRbOJHI 1:40 Absence Of An Emotional Vocabulary - Terence McKenna
ubQ5sWxvr4U 1:36 People Raving On Streetcorners About The Approaching Doom - Terence McKenna
75iR-P7QlSo 5:35 Two Kinds Of People, Artists And Marks - Terence McKenna
mJLXr9OXlDk 0:40 Steve Buscemi As Terence McKenna (2)
osDZ9j69EqU 1:25 A Standard Story Of Mine - Terence McKenna
2HKGxcDw27s 1:38 The Dialogue - Terence McKenna
TdthFYYrpGc 1:32 Noetic Archaeologist - Terence McKenna
R7lKPDNSa-g 2:51 Rational Discourse Conducted At High Volume - Terence McKenna
-MGX_VxLbOw 0:47 Terence McKenna On Meeting Carl Sagan (2)
Kt5btMF4LGQ 1:08 The Fate Of A Whole Planet - Terence McKenna
l1x3c7o_J40 0:55 To Be Able To Stand Up And Yell 'Bullshit!' - Terence McKenna
dJJKBtbyfeY 3:34 Science Is The Plumbing Level Of Reality - Terence McKenna
hWqdZIrG1q8 1:14 I Sorted Through Just As I Assume You Are Doing - Terence McKenna
An8X9myD7SQ 1:39 A Feeling Of Optimism And Wholeness - Terence McKenna
ZA1aOcF-Aag 2:08 Terence McKenna Describes European Thinking Of The Early 17th Century
fRUpjfN-Ihg 2:07 What Is My Reality? - Terence McKenna
RIsK65Hc3nM 4:10 Our Role Is Not To Understand But To Appreciate - Terence McKenna
U0eyaBmz3Mg 1:36 We Want More Consciousness - Terence McKenna
Hr3f6gIz0-k 4:17 The Forward Escape - Terence McKenna
pAZ7tLLJDXU 0:29 Funny Terence McKenna Soundbite
_zKpweQyNtI 2:24 The Tao Of The Ancestors - Terence McKenna
qRFfjmBJwFg 1:31 Democracy - Terence McKenna
NQwGZojmwDM 7:53 Terence McKenna Rave Session
kjG8AaLjR9k 3:22 Recordings Which People Find Extremely Alarming - Terence McKenna
pOvmnc2BTrQ 4:31 Moving The Boundaries Of What Can Be Said - Terence McKenna
_Lcmd-bMlAE 10:00 We Plants Are Happy Plants - Razz (Shift Of Consciousness Mix)
5XMfIgA7ZUU 3:23 One Of The Hardest Evenings I Ever Spent - Terence McKenna
A-cYANDZ_Mo 0:45 Steve Buscemi As Terence McKenna
J1MAd9LpCxE 2:31 Half In and Half Out - Terence McKenna
qN3NLeKMImk 3:08 The Famous 55 Gallon Drum - Terence McKenna
YtROWN9angY 1:15 The Tim Award - Terence McKenna
xwucF9MKJM8 0:45 Captain Ahab In Space - Terence McKenna
E7wITcn0StM 11:56 The Jackalope - Terence McKenna
WjONF4Uqt5c 1:27 You're As Good As The Dalai Lama - Terence McKenna
zZoQwKUwjXc 6:11 A Story Of True Hallucinations - Terence McKenna
fQSbvZ86Hi4 1:01 Alchemy - Terence McKenna
g4n43UUZ8Y8 0:54 Nature Is Alive
dxkfiKW6BiY 1:35 Terence McKenna Introduction
xuHEfAZpr7s 0:56 Terence McKenna - Language Evolution
lBDPM2JpoCM 3:23 Why Culture Is Not Your Friend - Terence McKenna
sqJYQ_TUC7c 44:48 Terence McKenna - Alchemical Youth On The Edge Of The World (Full Talk)
a9zqS1pMTRA 2:29 Terence McKenna - The Anticipation Of The Unspeakable
NUi_n7k1kyM 30:15 Visual Meditation with 432 Hz Music
zAkrTm3IlYE 6:22 The Real Meaning Of The Holy Grail
xtxuSCyIoq0 0:19 Robert Anton Wilson - The Sad Man Lives In...
Yb8BCUcB2oM 17:15 We Plants Are Happy Plants - Tao (Variation On A Theme)
SoRVFpAjCZ0 1:10 Terence McKenna On Meeting Carl Sagan
ruOH-6fnjKw 5:19 Brilliant Reading Of Moby-Dick by Terence McKenna
9Ejn4APak1w 2:32 Terence McKenna - Meme Theory
y8xAXuHaR9Y 1:29 Terence McKenna - We're Not Bullshitting You
xp0sktrYVAE 6:25 Terence McKenna - Consciousness Research
ktizo51HXBU 0:41 Terence McKenna - The Precondition For Democracy
MBufYdcVk0g 2:40 Terence McKenna Knocks Bill Clinton
6UiAqbqcMxM 2:25 We Have To Send Artists - Terence McKenna
JWPqI5OyiHs 2:51 If You Could Have Anything - Terence McKenna
OAag7w0iRg8 6:12 Terence McKenna - 5DGISD
CYUDWw_MauU 3:22 We Plants Are Happy Plants - Light At Eventide
OkkZZV73ZUM 45:25 We Plants Are Happy Plants - Any Day Now (Full Album)
bLggYY_Ibmk 4:33 Terence McKenna - Tension Over Values
dHFC1BB2gOU 4:06 Terence McKenna And The Howling Tao
7cexhOG4UZY 5:25 Terence McKenna Reads Hermetic Lore
# YOG1L7ZMjs0 3:15 We Plants Are Happy Plants - Tipsiness And Rapture
cBKK7Nvk1ZA 1:45 Terence McKenna - Keep The Faith
vO95PjQk0pQ 1:04 Terence McKenna - Up And Out
7MztB_TQLaI 1:16:33 We Plants Are Happy Plants - Time Is A Landscape (Full Album)
e5L_-4yZ2vY 3:08 Terence McKenna - Alien Forms
wGdz1y0kqRM 1:12 Terence McKenna - Energy and Time
h3sndgdol5I 1:43 Terence McKenna - How It Began
mNcKZVVnG9o 0:49 My channel is back!
MXAD6SimTOc 3:42 We Plants Are Happy Plants - In Search Of The Holy Grail
ZWl13ZxYc2s 2:33 Robert Anton Wilson - High And Happy
hUFKa53936o 2:08 Terence McKenna Raves Into The Future
TsutY3dgGJ8 4:33 We Plants Are Happy Plants - Waves Of Eternity
aAcHPkj4aNE 3:09 Inner And Outer Space (Are Exactly The Same)
033b8jN55q0 3:00 We Plants Are Happy Plants - Butterflies
zywkOFcehbc 5:09 Terence McKenna - The Mushroom Speaks
8MG5gFtZ3U8 2:48:44 Terence McKenna's True Hallucinations (Full Movie) HD
tJmNduaK5Sw 4:41 We Plants Are Happy Plants - She Created The Door
WWoiWyHhvcg 0:55 Teaser: Terence McKenna's True Hallucinations (5)
fwK8NRKkSCA 1:22 Teaser: Terence McKenna's True Hallucinations (4)
Qeka6BcHRlc 0:37 We Plants Are Happy Plants - New Album Promo
fhy2l4XmAGg 2:05 Terence McKenna - Money and Donald Trump
1rhgZgL7KhI 6:10 We Plants Are Happy Plants - The First Man In Another Galaxy
6caUfg7XZ24 0:34 Teaser: Terence McKenna's True Hallucinations (2)
_H8oTI2fgns 1:41 Terence McKenna - Falling In Love
CcGgfUiTDaU 4:33 We Plants Are Happy Plants - I Am You
flvXnQdrqEs 4:13 We Plants Are Happy Plants - Vortex
flwyJEWwcbE 1:12 Jim Carrey at a Terence McKenna lecture
bbqc7OdbloA 5:05 Terence McKenna - High Water Weirdness Event
N4pLehjPBZU 5:40 We Plants Are Happy Plants - Life Is Living You
XlBzIecpxfE 16:58 Terence McKenna - The DMT Experience (The Transcendental Object At The End Of Time)
l6osSqvn1R4 1:29 Teaser: Terence McKenna's True Hallucinations
xQXP31A9Rl8 1:31 Terence McKenna - The Dizziness Of The Things Unsaid
4rL_gR-dCT4 6:03 We Plants Are Happy Plants - Euphrosyne
heGCdpuhLso 15:36 Terence McKenna - Last Thoughts (The Transcendental Object At The End Of Time Movie)
8YsLiSYTIJM 7:36 We Plants Are Happy Plants - Razz
PWHWK0pe8SY 4:15 Ralph Abraham - The Sandy Beach (Terence McKenna, Rupert Sheldrake)
H-O6sEaI7nw 4:51 Terence McKenna - The Archaic Revival
Z5rCDfJh9pE 4:37 We Plants Are Happy Plants - The Transcendental Object At The End Of Time
ZpTF8pFDVR4 6:21 We Plants Are Happy Plants - Tao
D2bkYB7kNpo 2:31 TRAILER 2: Terence McKenna's True Hallucinations
F4nGuEVs-JA 3:35 Alan Watts - The Potato Speaks
IMaygY8aagg 3:09 TRAILER: Terence McKenna's True Hallucinations
B__BY-d4nXA 22:18 We Plants Are Happy Plants @ Toldi Mozi (2015)
TX0GZI-lvTE 1:33 Robert Anton Wilson - Belief Systems (BS)
6uqcnfhH1T4 0:13 Terence McKenna - You Can't Go Forward and You Can't Stand Still
fJQ6rvFjmSg 3:31 We Plants Are Happy Plants - Alignment
ZvOGPQydTxw 5:32 Terence McKenna - From Monkeydom To Starshiphood
e0-RH5t47fA 6:04 We Plants Are Happy Plants - One Million Years
sopijO_cftE 1:40 Terence McKenna - The Shaman
oJgyMzfTT9w 3:17 We Plants Are Happy Plants - MK3
5tfMknBJbDk 4:36 We Plants Are Happy Plants - Cloud Hidden
bcRTUen6TcA 4:21 We Plants Are Happy Plants - My Love Song
rkANK7DbHQo 4:44 We Plants Are Happy Plants - Warren Commission
MoB5p-bAkIY 4:57 We Plants Are Happy Plants - The Secret
aAlaRdrcQcY 3:34:49 The Transcendental Object At The End Of Time (Terence McKenna Movie) FULL HD
0Bvf4PpW5m8 4:30 We Plants Are Happy Plants - Mantra Of The Universe
6nLsFix-6e0 1:33 Terence McKenna - You (The Transcendental Object At The End Of Time TEASER)
r42NFBzPk-4 2:37 TEASER: The Transcendental Object At The End Of Time (Terence McKenna Movie)
1r97VpcKgJ4 3:25 The Love Unlimited Orchestra - Bayou (We Plants Are Happy Plants Rework)
2Der6EhLocU 4:51 TRAILER: The Transcendental Object At The End Of Time (Terence McKenna Movie)
pWKZLW_vfTI 5:25 We Plants Are Happy Plants - Way Of The Wizard
N5ot2RmJmZ0 4:01 Terence McKenna - The Future Of The Human Race
97aZ8nC9Wj0 48:05 Daft Punk - Alive 2014 (presented by We Plants Are Happy Plants)
sTSvj37D-zE 4:31 We Plants Are Happy Plants - Tuned In (Official Music Video)
_S9q-phYxmI 5:17 We Plants Are Happy Plants - Apollo
XrcEn5peCik 4:33 We Plants Are Happy Plants - Purple And Blue
XAuEsy6_o2s 6:18 We Plants Are Happy Plants - We Plants Are Happy Plants (Original Mix)
2pPmt9xNj0I 5:29 We Plants Are Happy Plants - Full Of Sound
l9GLDrC3amA 4:12 We Plants Are Happy Plants - Twilight Of The Dawn
16dcYDscO5Q 4:24 We Plants Are Happy Plants - Planetary Exploration
NG-nXMabvO4 4:09 We Plants Are Happy Plants - Lullaby
_7VAScNbTa0 2:42 JJ Abrams - Star Wars (2015)
jaUAs2sPXbs 4:33 We Plants Are Happy Plants - Simply Be Aware
zVayyPuKSI0 0:37 Charlie Gonzo
HXTwB6ANiec 4:39 We Plants Are Happy Plants - Bluebird (2010)
Ty5eZ0ZqSW0 5:29 Cloud Atlas Theme Song (We Plants Are Happy Plants Remix)
SuiPc-F4i50 6:01 Zagar - Wings Of Love (We Plants Are Happy Plants Remix)
d97PjM7g6to 5:10 We Plants Are Happy Plants - Apollo 2012
YfsCnB2oisY 6:09 We Plants Are Happy Plants - Rise And Fall
RC1FPUk5p_4 7:24 We Plants Are Happy Plants - The End
zXL9LVf9VP4 5:02 We Plants Are Happy Plants - M42
wmoFjGqypMs 3:33 We Plants Are Happy Plants - Prelude
yMYM7xe4JNY 6:41 Hans Zimmer - Time (Inception) We Plants Are Happy Plants Remix
WSkzlLIY3ew 3:46 Dec 21, 2012 Terence McKenna - TimeWave Zero
YVHXap0k1rc 6:01 We Plants Are Happy Plants - Love Is Silent
Y-Q20YE9q7E 6:16 Om Namah Shivaya (We Plants Are Happy Plants Remix) 2012 HQ
uC_vFa3FZg8 4:33 We Plants Are Happy Plants - Perception Of Dimensions
byxSazKYnw8 6:16 Om Namah Shivaya (We Plants Are Happy Plants Remix)
_uMSap7ntuw 6:01 We Plants Are Happy Plants - Underneath The Form
1Q8d9MNM-lw 3:33 We Plants Are Happy Plants - Earth Mars Venus (Official Music Video)
fvSX8cA5H78 3:33 We Plants Are Happy Plants - Galactic Spiral Arms (Official Music Video) 432 Hz
sdIlzZMQxVY 3:38 Aaren Reale - Black Part 2 (We Plants Are Happy Plants Remix) feat. Jim Carrey
toq3WTB1fAA 8:55 We Plants Are Happy Plants - Sell Your Soul (Dream Version) and Apollo
RgBQdvKLpCc 4:48 Aaren Reale - Black Part II (We Plants Are Happy Plants Remix)
XhpKOM541gc 3:58 Radiohead - Codex (We Plants Are Happy Plants Remix)
4HMJuRJHa1Y 4:26 We Plants Are Happy Plants - Apollo (HD)
dyCyyPfWMl4 2:17 We Plants Are Happy Plants - My Love Song (New Earth EP Promo)
wiTP02UGsoE 1:12 We Plants Are Happy Plants Live @ A38 03.18.2011
RSghspRAqLc 4:04 We Plants Are Happy Plants - Razz (OFFICIAL MUSIC VIDEO)
wdoG41SYotg 6:14 We Plants Are Happy Plants - We Plants Are Happy Plants
-CNMXnIwEvQ 3:56 We Plants Are Happy Plants - Flatlanders
fDRnt3jktsk 7:23 We Plants Are Happy Plants Live @ U26 (Perfect Audio)
CmQbvv9VZSY 3:08 We Plants Are Happy Plants - Sailing In A Dreamboat (2010)
hh_nYnPGvKE 4:12 We Plants Are Happy Plants Live @ A38 2008
1tvcMbbtsyw 4:14 We Plants Are Happy Plants - Sell Your Soul (OFFICIAL MUSIC VIDEO)
r4IgyZ-NEvk 5:10 We Plants Are Happy Plants - We Wave Goodbye
U9GI3dhjCac 4:20 We Plants Are Happy Plants - Invisible Elephant
18vcPGnmijM 3:59 We Plants Are Happy Plants - Twilight Of The Dawn vs Wonderwall
dzjiCduRVw0 3:27 We Plants Are Happy Plants - Long Live Space Race
9brQTel8SUc 4:56 We Plants Are Happy Plants - Trance Steel

# Culadasa Audio Archive

# UG-0XGpesgs 39:10 Sit, Breath, Wake Up! Meditation #1 - Culadasa
# IeXWFRs5cGk 42:45 Sit, Breath, Wake Up! Meditation #2 - Culadasa
# SRqXq570Cf0 45:40 Sit, Breath, Wake Up! Meditation #3 - Culadasa
# aNFc4veG61E 20:10 Sit, Breath, Wake Up! Meditation #4 - Culadasa
# LBDV7jmZL8s 51:40 Sit, Breath, Wake Up! Joy, Meditation #7 - Culadasa
# gB4_JS4jsb0 34:20 Sit, Breath, Wake Up! Meditation #5 - Culadasa
# nbvx7K_Zh0U 45:25 Sit, Breath, Wake Up! Still Point, Meditation #8 - Culadasa
# SpTDGyhoFho 24:55 Sit, Breath, Wake Up! Metta, Meditation #9 - Culadasa
# 4XGLpEJBq5c 1:59:40 Sit, Breath, Wake Up! Part 1, Including Meditation - Culadasa
# xySz7-vJbjo 1:24:50 Sit, Breath, Wake Up! Part 2, Including Meditation - Culadasa
# Ok347OnJyYc 1:38:25 Sit, Breath, Wake Up! Part 4, Including Meditation - Culadasa
# -lYvn_JxiaM 1:14:50 Sit, Breath, Wake Up! Part 3, Including Meditation - Culadasa
# Mw0GWsCYSho 1:52:30 Sit, Breath, Wake Up! Part 7, Including Joy Meditation - Culadasa
# pyFa9lezeLE 49:45 Sit, Breath, Wake Up! Part 5, Including Meditation - Culadasa
# F-SO2jLEl94 59:00 Sit, Breath, Wake Up! Part 6 - Culadasa
# mtdUEXGAxIc 1:17:05 Sit, Breath, Wake Up! Part 8, Including Still Point Meditation - Culadasa
# DBrpnFgXZY4 1:05:15 Sit, Breath, Wake Up! Part 9, Including Metta Meditation - Culadasa
# F1qKILcv9eA 1:30:55 tcmc-weekend-03-22-2013a-trim-lc-amp-comp
# 8d0NJNnc90E 1:16:55 tcmc-weekend-03-23-2013c-trim-lc-amp-comp
# ZReyxVVZlHA 52:50 tcmc-weekend-03-23-2013b-trim-lc-amp-comp
# Jd-ymGtmsAs 1:23:10 tcmc-weekend-03-23-2013d-trim-lc-amp-comp
# 1fesc0JmB0s 1:17:10 tcmc-weekend-03-24-2013f-trim-lc-amp-comp
# oDAWRHX1ez8 1:17:00 tcmc-weekend-03-23-2013e-trim-lc-amp-comp
# 6UzBUJCMDLM 50:45 tcmc-weekend-03-24-2013g-trim-lc-amp-comp
# Os78CbIOCaU 1:13:15 tcmc-weekend-03-24-2013h-trim-lc-amp-comp
# -VgYwj3QLY8 1:28:35 tcmc-weekend-03-24-2013i-trim-lc-amp-comp
# xwIuNvfs3-A 1:14:40 The Path to Awakening in Daily Life, Part 1 - Culadasa
# akF9g-7p18g 1:11:10 The Path to Awakening in Daily Life, Part 3 - Culadasa
# EsyJiZJ7y4Q 1:04:40 The Path to Awakening in Daily Life, Part 2 - Culadasa
# Ay3t8b-I9xk 1:19:15 The Path to Awakening in Daily Life, Part 4 - Culadasa
# uFDhnyJzzLE 55:55 The Path to Awakening in Daily Life, Part 5 - Culadasa
# iqBvQ_b0zEE 1:09:30 The Path to Awakening in Daily Life, Part 7 - Culadasa
# 8Y9wpzzarAc 1:01:50 The Path to Awakening in Daily Life, Part 6 - Culadasa
# 2k-NO_vUAqk 40:50 The Path to Awakening in Daily Life, Part 8 - Culadasa
# 4E2e3AZZuVw 38:50 Discussion about the Anapanasati Sutta - Culadasa
# jVoK8u6LDMM 46:25 The Magic of Mindfulness, Part 1 - Culadasa
# Ds5Um2pZ2a8 1:23:15 The Magic of Mindfulness, Part 4 - Culadasa
# zF6rkzTtvI4 1:15:40 The Magic of Mindfulness, Part 3 - Culadasa
# N_HB_wpsmOc 35:55 The Magic of Mindfulness, Part 2 - Culadasa
# -7rQQq9FI4E 45:25 The Magic of Mindfulness, Part 5 - Culadasa
# 6wmmWA-oxVk 1:25:10 The Magic of Mindfulness, Part 8 - Culadasa
# 6jQ6pXPu8gM 37:00 The Magic of Mindfulness, Part 6, Guided Meditation - Culadasa
# oXOrlj_Us8Q 1:01:30 The Magic of Mindfulness, Part 7 - Culadasa
# -6D8fCaLGqw 1:28:10 The Magic of Mindfulness, Part 9 - Culadasa
# Ce_M5w83mMo 1:35:50 The Magic of Mindfulness, Part 10 - Culadasa
# Xiz1DkB1JeU 46:40 The Magic of Mindfulness, Part 9, Meditation Only - Culadasa
# KdQRPJsCpV0 43:25 The Magic of Mindfulness, Part 11 - Culadasa
# 5RxJHGQIo6c 34:35 The Magic of Mindfulness, Part 11 - Meditation Only
# WbqhyGbIkic 1:49:15 Meditation and Insight, Part 1 - Culadasa
# holYpHpF_v8 1:17:45 Meditation and Insight, Part 2 - Culadasa
# G_X9f5tPcv0 1:27:05 Meditation and Insight, Part 3 - Culadasa
# BdNzQ5mpMPM 1:16:15 Meditation and Insight, Part 4 - Culadasa
# dp1YUUw9_xQ 44:20 Meditation and Insight, Part 5 - Culadasa
# pUJGCaaECnY 22:40 Meditation and Insight, Part 3, Meditation Only - Culadasa
# X3I8gD_VuH0 1:17:30 Meditation and Insight, Part 6 - Culadasa
# litqY-oF1DY 1:09:15 Meditation and Insight, Part 8 - Culadasa
# irovcJniM34 45:30 Meditation and Insight, Part 7 - Culadasa
# xGDw947qcO4 47:55 Meditation and Insight, Part 9 - Culadasa
# om9lc05kShI 1:11:20 Meditation for Peace, Part 1 - Culadasa
# XWs7iJuRlNk 1:03:05 Meditation for Peace, Part 2 - Culadasa
# gc4OIzNCzJE 1:18:10 Meditation for Peace, Part 4 - Culadasa
# i2smsi-Po5s 1:00:25 Meditation for Peace, Part 3, Meditation Followed by Discussion - Culadasa
# _c0SvbC3n0E 1:04:45 Meditation for Peace, Part 5 - Culadasa
# _O0HwUi4L8M 19:45 Meditation for Peace, Part 6 - Culadasa
# X2I1Xkpu1ao 1:05:35 Meditation for Peace, Part 8 - Culadasa
# w5yfStrGXZs 46:25 Meditation for Peace, Part 7, Guided Metta - Culadasa
# PbKB7L3wXN4 1:37:35 Joy & Meditation, Part 1, Introduction - Culadasa
# 4h_jZo7D8nY 52:25 Joy & Meditation, Part 3 - Culadasa
# pnVa5LOFYMI 12:45 Joy & Meditation, Part 2, Meditation - Culadasa
# Xfj-XisH-f8 33:35 Joy & Meditation, Part 4, Guided-Meditation - Culadasa
# WuHTnUFJvTY 57:45 Joy & Meditation, Part 5 - Culadasa
# x8f4ywGuz7E 1:05:40 Joy & Meditation, Part 6 - Culadasa
# 5P-EcrWA3JE 56:05 Joy & Meditation, Part 8 - Culadasa
# QdWx1DyPoG4 34:55 Joy & Meditation, Part 7, Guided-Meditation - Culadasa
# VvWGrbkl7XU 27:10 Joy & Meditation, Part 9 - Culadasa
# GEJPm0EpZIY 1:20:00 Joy & Meditation, Part 11 - Culadasa
# -UjegcD2NOI 40:25 Joy & Meditation, Part 10, Guided-Meditation - Culadasa
# kLLUeGyKLFw 39:20 Joy & Meditation, Part 12 - Culadasa
# 7pXwbEuqlds 49:00 Joy & Meditation, Part 13, Closing Meditation - Culadasa
# sJ02xiHY1KI 1:14:25 What Is Enlightenment, Part 1 - Culadasa
# hM2qhko-5V0 53:10 What Is Enlightenment, Part 2 - Culadasa
# gTTbURalWwY 1:27:35 What Is Enlightenment, Part 4 - Culadasa
# 6udxIzA9B8I 50:05 What Is Enlightenment, Part 3 - Culadasa
# GoiFe39LKiE 1:19:25 What Is Enlightenment, Part 5 - Culadasa
# aOKWj4Kk2rg 1:14:05 What Is Enlightenment, Part 6 - Culadasa
# BwmcPn-7oMI 1:41:10 What Is Enlightenment, Part 7 - Culadasa
# JwpiFIrG4bk 1:27:35 When the Buddhadharma Came to the West, Part 1 - Culadasa
# ARdWVSNy7U8 1:23:45 When the Buddhadharma Came to the West, Part 3 - Culadasa
# gGKT2sxn2Vs 1:17:10 When the Buddhadharma Came to the West, Part 2 - Culadasa
# hoik390Dg9k 1:13:40 When the Buddhadharma Came to the West, Part 4 - Culadasa
# R3nftLD2eMA 52:55 When the Buddhadharma Came to the West, Part 5 - Culadasa
# 8sEeiWdGW-o 1:38:00 When the Buddhadharma Came to the West, Part 6 - Culadasa
# sMPeNHk6Srs 1:16:10 When the Buddhadharma Came to the West, Part 8 - Culadasa
# S9xqIz51SbM 29:10 When the Buddhadharma Came to the West, Part 7 - Culadasa
# TJcy0n9NnKI 1:29:25 The Jhanas, Part 5 - Culadasa
# qstlQPwmHq8 4:25 How Do We Project Reality - Culadasa
# oufkssKC5qA 4:15 How Do I Meditate - Culadasa
# WLx5Fvh91eE 30:45 The Jhanas, Part 6, Meditation - Culadasa
# YplfDrwaZNA 59:00 The Jhanas, Part 4 - Culadasa
# HeZuKlcaRTs 1:23:40 The Jhanas, Part 3, Meditation and Discussion - Culadasa
# 3z3Mt0Bw4GE 1:20:00 The Jhanas, Part 2 - Culadasa
# M8vpuW34HcI 1:36:35 The Jhanas, Part 1 - Culadasa
# YZSsmNBUWEw 1:14:15 Meditation for Peace, Part 1 - Culadasa
# xY7BdB32DEk 1:06:35 Meditation for Peace, Part 8 - Culadasa
# YiO0UpLWbcA 48:00 Meditation for Peace, Part 7 - Culadasa
# wc-EslQfkDU 1:05:50 Meditation for Peace, Part 5 - Culadasa
# DQG0WzQTZfI 1:21:15 Meditation for Peace, Part 4 - Culadasa
# AT9ZRu_4XMY 19:55 Meditation for Peace, Part 6 - Culadasa
# qsgmBFeb5Cw 1:01:35 Meditation for Peace, Part 3 - Culadasa
# rBerwigAmAQ 1:04:00 Meditation for Peace, Part 2 - Culadasa
# tbF2gwJLEWQ 1:06:35 Meditation for Peace, Part 8 - Culadasa
# WB76phVVvsA 1:21:15 Meditation for Peace, Part 4 - Culadasa
# ApfkpAp3aC0 1:14:15 Meditation for Peace, Part 1 - Culadasa
# An5pQGuPyRk 1:05:50 Meditation for Peace, Part 5 - Culadasa
# Hwd9DnGRjpg 1:01:35 Meditation for Peace, Part 3 - Culadasa
# 90JkxrK8QjM 1:04:00 Meditation for Peace, Part 2 - Culadasa
# hYYjVAJfOPM 48:00 Meditation for Peace, Part 7 - Culadasa
# ENWUs9QqTCU 19:55 Meditation for Peace, Part 6 - Culadasa
# 5mlUleMSiTQ 1:38:30 When the Buddhadharma Came to the West, Part 6 - Culadasa
# lsNaJVfKwZs 1:16:10 When the Buddhadharma Came to the West, Part 8 - Culadasa
# VAPcuZvr9JA 1:29:15 When the Buddhadharma Came to the West, Part 1 - Culadasa
# q1NkYOCYlA4 1:14:10 When the Buddhadharma Came to the West, Part 4 - Culadasa
# KvG4Rw0YuJY 1:24:25 When the Buddhadharma Came to the West, Part 3 - Culadasa
# ZpBlVT8okLQ 54:25 When the Buddhadharma Came to the West, Part 5 - Culadasa
# 3UVOXvaG6z8 1:18:20 When the Buddhadharma Came to the West, Part 2 - Culadasa
# unnYRQF04BE 29:15 When the Buddhadharma Came to the West, Part 7 - Culadasa
# wpj0hT4_dwk 22:35 What is the Space Between Thoughts? - Culadasa
# WUYh-0Tkvjk 17:10 The Five Aggregates and “No-Self” - Culadasa
# mStFqLFqXRA 31:30 Piti (Joy) - Culadasa
# zPv549Jmia4 18:35 What is Karma? - Culadasa
# ROwydcA-Mkc 17:40 Will Power and Achievement - Culadasa
# pgK3cLIO5DM 21:30 Motivation for Morality - Culadasa
# Wprau239F-E 11:55 Progressing on the Path - Culadasa
# oOCtnXOL6mk 10:50 Silence of the Mind - Culadasa
# krRHH83qbiU 20:30 How to Develop Introspective Awareness - Culadasa
# ud6Ndl6i2rE 2:25 Walking Meditation - Culadasa
# PSal7mqWPps 3:50 Subtle Distractions and Gross Dullness - Culadasa
# ourDJ0u2Xbo 7:30 Role for Psychedelics in the Path - Culadasa
# M7G5Xt5GRb8 4:45 Is the Hologram a Good Model for Ultimate Reality? - Culadasa
# MflPS9FAV5E 5:25 How Does the Mind Create the World? - Culadasa
# 2aQgp47Fknc 4:25 How Do We Project Reality? - Culadasa
# kCkR5wINMBA 4:15 How Do I Meditate? - Culadasa
# oTBUDL8SfwU 15:55 Can Suchness Be Reduced to Energy? - Culadasa
# IVUYdz_yzAw 9:20 Concentration vs Blissful States and Dullness - Culadasa
# Qvb1JL94ikU 5:30 Focus on Sensations vs Absorption at Stage 4 - Culadasa
# nFMPD65ccTI 9:10 A Model for Understanding Dullness - Culadasa
# u-FD7WijOxk 1:00:10 TCMC Thursday #20, Part 2 - Culadasa
# 5yrF0tBrnP4 1:00:15 TCMC Thursday #10 - Culadasa
# vBrDgkMNh3Q 1:50:05 Bisbee Zen Sangha Lecture - Culadasa
# pO2ChM2NFgY 1:53:45 Q&A - Culadasa, Stronghold Retreat #1, Part 5
# cVU1rikYX9Y 45:25 Guided Meditation, TCMC Weekend #1, Part 7 - Culadasa
# 5_KI-CwG37c 1:04:40 TCMC Thursday #28, Part 2 - Culadasa
# uw3S_pDNjkQ 1:18:05 UWest Meditation Camp #2, Part 1 - Culadasa
# 8smu6ilczdI 54:45 Uposatha Day #26 - Culadasa
# jCLVsQIdY8w 1:08:57 TCMC Thursday #27, Part 2 - Culadasa
# 0P3Yyat-BaY 46:00 Uposatha Day #27 - Culadasa
# 1R9xgzbRF5Q 6:20 Tips on Developing Full-minded Awareness with Concentration (Stage 5) - Culadasa
# W3xULt6Uatc 39:15 TCMC Thursday #28, Part 1 - Culadasa
# rm9zAOF0mr8 29:25 TCMC Thursday #27, Part 1 - Culadasa
# id7tS03tufI 57:20 TCMC Weekend #1, Part 9 - Culadasa
# e7W5JRI1c8g 1:18:50 Uposatha Day #23 - Culadasa
# -pqILBXTL0A 1:10:15 Uposatha Day #20 - Culadasa
# lQBtlKV-8A4 13:30 Can a Cessation Be an Object of Consciousness? - Culadasa
# vaVhcfOqIVE 1:13:15 UWest Meditation Camp #2, Part 8 - Culadasa
# GC-n9-dWYsg 1:00:30 Uposatha Day #25 - Culadasa
# M22w9lxOtAo 1:07:10 Uposatha Day #22 - Culadasa
# dL02xlODGbI 47:10 Uposatha Day #24 - Culadasa
# eG5VxQUctPQ 1:04:15 TCMC Weekend #1, Part 6 - Culadasa
# uHWxeRv9M5Y 1:39:15 Guided Metta - UWest Meditation Camp #2, Part 10 - Culadasa
# eqL6CsQ3lFg 1:00:15 UWest Meditation Camp #2, Part 6 - Culadasa
# Bv9_koMGnWc 33:30 Uposatha Day #21 - Culadasa
# pyoewXHdww0 1:03:55 UWest Meditation Camp #2, Part 5 - Culadasa
# a9NKE-7GrZQ 1:19:20 TCMC Weekend #1, Part 2 - Culadasa
# wILUJC_sqRY 51:35 TCMC Weekend #1, Part 8 - Culadasa
# R0f7KOhA7Qc 1:12:00 TCMC Weekend #1, Part 4 - Culadasa
# lfPThV3AARs 38:35 UWest Meditation Camp #2, Part 4 - Culadasa
# lTQj8xh-BfM 1:26:30 TCMC Weekend #1, Part 1 - Culadasa
# KdkOwnxE9rY 1:23:50 TCMC Thursday #21, Part 2 - Culadasa
# hqnyTNVcSik 1:04:35 TCMC Weekend #1, Part 3 - Culadasa
# iChmRArdaLo 23:25 UWest Meditation Camp #2, Part 7 - Culadasa
# 920eFHwVlJs 58:55 TCMC Weekend #1, Part 10 - Culadasa
# h3JLS4-ZWbE 1:09:30 Dharma Talk - Culadasa, Santa Fe Vipassana Sangha
# rEgW_al38u4 47:10 TCMC Thursday #26 - Culadasa
# UC6Xouvoi7k 13:15 UWest Meditation Camp #2, Part 3 - Culadasa
# RN8SwjbPlWE 1:02:30 TCMC Thursday #24, Part 2 - Culadasa
# D2yc0g73YBU 1:09:25 TCMC Thursday #23, Part 2 - Culadasa
# sp9KKBWN5Wk 9:10 The Awakening Process - Culadasa
# 6Fgux1RwmYQ 1:26:20 Q&A - Culadasa, Stronghold Retreat #1, Part 4
# wrw7vKh_9BU 19:00 TCMC Weekend #1, Part 5 - Culadasa
# q-W_rfqczBw 1:07:35 TCMC Thursday #22 - Culadasa
# b56ubFUSw6w 1:38:35 Dharma Talk - Culadasa, Stronghold Retreat #1, Part 2
# 1216dY3Pvdk 22:50 TCMC Thursday #25 - Culadasa
# nRLmVRSEcUM 55:25 Q&A & Dharma Talk - Culadasa, Stronghold Retreat #1, Part 3
# u6qjNcZ9GCA 42:50 TCMC Thursday #20, Part 1 - Culadasa
# -dh1sQUjMts 58:30 Dharma Talk - Culadasa, Stronghold Retreat #1, Part 1
# WP1tvBUKI_Q 28:35 TCMC Thursday #23, Part 1 - Culadasa
# n2uF0xD7x7E 21:25 TCMC Thursday #24, Part 1 - Culadasa
# DZg8pCJlzX8 26:40 TCMC Thursday #21, Part 1 - Culadasa
# pYowT4zFgwc 14:05 Levels After the First Nine Meditation Stages - Culadasa
# 0CcyCbcTovA 23:10 Guided Meditation, UWest Meditation Camp #2, Part 2 - Culadasa
# Mu0SkCBR0nM 20:30 How Does Insight Fit into the Meditation Systems - Culadasa
# rXJZhFgX2tk 11:25 Bypassing Steps to Awakening? - Culadasa
# T7DJRmgDweE 34:30 Q&A - Culadasa, Retreat in California #4, Part 2
# luJk8sbK2SI 1:38:01 UWest Meditation Camp #1, Part 4 - Culadasa
# uxb_0HNI48Q 1:37:15 University of the West Lecture - Culadasa
# oLY0mG2MdRk 1:08:15 Uposatha Day #18 - Culadasa
# z3lTL0k4UmA 49:00 Uposatha Day #19 - Culadasa
# ZDlU3G0eYiE 1:27:55 TCMC Weekend #1, Part 1 - Culadasa
# oDDk6RJTWxY 58:05 Uposatha Day #17 - Culadasa
# uWElZuDMpMM 52:50 Uposatha Day #16 - Culadasa
# oaGu4A4KfVs 15:55 What is Free Will - Culadasa
# 9y6eFyPZCSQ 1:18:40 TCMC Thursday #17, Part 2 - Culadasa
# e2KkHo8wGMo 43:20 Uposatha Day #14 - Culadasa
# NHfqniV75Aw 58:47 UWest Meditation Camp #1, Part 8 - Culadasa
# 8HnEWG5qDLI 1:15:50 TCMC Thursday #18, Part 2 - Culadasa
# y2gLtq8JRHM 1:47:15 Dharma Talk - Culadasa, Retreat in California #4, Part 9
# 7f_BEI7XJhU 16:40 When We’ve Done Wrong - Culadasa
# CNPdu6jjeNI 1:05:20 TCMC Thursday #19, Part 2 - Culadasa
# HvfqSSF_QFE 46:55 Uposatha Day #13 - Culadasa
# eFVkkRZ9WDM 1:20:35 TCMC Thursday #15, Part2 - Culadasa
# 4JFLsHNdE3s 1:11:55 TCMC Thursday #16, Part 2 - Culadasa
# oLiFFYFIFp4 1:42:20 Dharma Talk - Culadasa, Retreat in California #4, Part 7
# iOIQjYjy7n4 6:30 Uposatha Day #15 - Culadasa
# ENDA8TKB9jI 1:28:25 Dharma Talk - Culadasa, Retreat in California #4, Part 5
# _j_XSDukuPQ 35:10 TCMC Thursday #18, Part 1 - Culadasa
# 6iGOYQE-0ZQ 21:30 TCMC Thursday #19, Part 1 - Culadasa
# LLLKVOWuhRM 28:00 TCMC Thursday #17, Part 1 - Culadasa
# UMMCB-f3ALM 1:31:10 Dharma Talk - Culadasa, Retreat in California #4, Part 13
# uRYLMUOPMlM 1:40:50 Dharma Talk - Culadasa, Retreat in California #4, Part 14
# it4uodKgY5Q 34:10 TCMC Thursday #16, Part 1 - Culadasa
# dsOl0vFkkTU 24:15 Q&A - Culadasa, Retreat in California #4, Part 4
# bPHS6mdr0fA 30:05 TCMC Thursday #15, Part 1 - Culadasa
# c7fH8AR978U 1:22:40 Dharma Talk - Culadasa, Retreat in California #4, Part 3
# okEjvyYOx88 33:55 Q&A - Culadasa, Retreat in California #4, Part 6
# L1HXCZV8XL0 1:32:45 Dharma Talk - Culadasa, Retreat in California #4, Part 11
# tYZOM-C5hZ8 23:40 Q&A - Culadasa, Retreat in California #4, Part 8
# MD39KrPZQmE 28:50 Q&A - Culadasa, Retreat in California #4, Part 10
# vJgT3_2lZWQ 9:00 Sleepiness and Dullness - Culadasa
# qQsfqL9FxqA 1:09:10 Dharma Talk - Culadasa, Retreat in California #3, Part 19
# 6YcrRxk1PgE 33:00 Guided Beginner Meditation, UWest Meditation Camp #1, Part 10 - Culadasa
# 7wnt72CF_Gg 24:00 Mind Unification - Culadasa
# 8sBGx0VwCuo 1:07:10 Dharma Talk - Culadasa, Retreat in California #4, Part 1
# w3dwsnoJQZM 14:40 Q&A - Culadasa, Retreat in California #4, Part 12
# IEwgfA68m6c 15:00 Mindfulness Practice - Culadasa
# SRM4bNmg0-g 15:30 Behind the Veil - Culadasa
# jWLJhhrTokU 1:25 Lengthening Meditation Times - Culadasa
# PTUZxS9cjwQ 20:05 Changing Your Destiny - Culadasa
# UeJYk6Nm0r0 8:50 Benefits of Meditation - Culadasa
# 4IVxof5UQkg 4:35 Counting as Meditation Tool - Culadasa
# L5cLz8A9k3A 5:55 Brain vs Mind - Culadasa
# Xj06Lc7y21I 1:07:05 TCMC Thursday #11, Part 2 - Culadasa
# XazGRf3OnNc 1:27:25 UWest Meditation Camp #1, Part 6 - Culadasa
# LENVuV2yeR4 1:34:15 Uposatha Day #11 - Culadasa
# OPeTSpVFgzI 1:44:25 UWest Meditation Camp #1, Part 11 - Culadasa
# YpbZSm8nEcs 1:00:20 UWest Meditation Camp #1, Part 5 - Culadasa
# LVISBodOXac 55:55 Uposatha Day #10 - Culadasa
# lTCNyukce0k 1:00:45 UWest Meditation Camp #1, Part 7 - Culadasa
# wZaVkac9oK4 47:50 UWest Meditation Camp #1, Part 9 - Culadasa
# LqUfbmBn0XQ 1:15:00 UWest Meditation Camp #1, Part 1 - Culadasa
# maQ7WNnMMVI 1:12:53 UWest Meditation Camp #1, Part 14 - Culadasa
# w3SZAD7VZ8c 1:03:47 UWest Meditation Camp #1, Part 12 - Culadasa
# t-RLX9JA21M 16:05 Uposatha Day #8, Mindfulness in Daily Life - Culadasa
# gD9WB4zI4eo 56:25 UWest Meditation Camp #1, Part 3 - Culadasa
# P1gZHKsPF_Y 23:55 Uposatha Day #12 - Culadasa
# 9J70of2c8Xw 29:40 Uposatha Day #7 - Culadasa
# Vrn-GhJofeU 1:07:50 Q&A - Culadasa, Retreat in California #3, Part 8
# WZN9NuUeH6Q 1:08:35 TCMC Thursday #12 - Culadasa
# vd0s3TREqok 1:25:20 TCMC Thursday #13 - Culadasa
# HHVCSTDsF6s 1:08:10 Dharma Talk - Culadasa, Retreat in California #3, Part 9
# S3nX3gm9JBA 1:08:00 TCMC Thursday #14, Part 2 - Culadasa
# 3ENaibWuA0w 56:40 Q&A - Culadasa, Retreat in California #3, Part 2
# 6aWXvmIjDAE 1:08:50 Q&A - Culadasa, Retreat in California #3, Part 13
# MZQqa2NvoHg 1:08:10 Q&A - Culadasa, Retreat in California #3, Part 4
# DJBBZ9pKLcE 1:02:25 Q&A - Culadasa, Retreat in California #3, Part 15
# w9jAKb2Mqi8 35:10 TCMC Thursday #14, Part 1 - Culadasa
# Da44vOqxXLw 29:30 TCMC Thursday #11, Part 1 - Culadasa
# c-KuXPdIZe8 1:00:50 Q&A - Culadasa, Retreat in California #3, Part 17
# 9jH8MpuXlHc 1:03:00 Q&A - Culadasa, Retreat in California #3, Part 10
# 0G8q942gfzM 58:40 Q&A - Culadasa, Retreat in California #3, Part 6
# q-XQicy6HR0 1:05:50 Dharma Talk - Culadasa, Retreat in California #3, Part 14
# 8GE5M0wrjss 1:38:30 Dharma Talk - Culadasa, Retreat in California #3, Part 16
# ZYV2X_7YNQc 36:30 Guided Metta - Culadasa, Retreat in California #3, Part 18
# sacyPpJK7gg 44:00 Opening - Culadasa, Retreat in California #3, Part 1
# 0Uork0NCSis 1:22:10 DM Retreat #2 - Culadasa
# _FCO92IIMLE 1:11:30 Dharma Talk - Culadasa, Retreat in California #3, Part 3
# HiyQfOzsSms 59:35 Dharma Talk - Culadasa, Retreat in California #3, Part 11
# 3efUiakSwiI 56:05 Dharma Talk - Culadasa, Retreat in California #3, Part 5
# R0Crl1r_4Fk 1:09:10 Dharma Talk - Culadasa, Retreat in California #3, Part 7
# 6ghUvwHiq-Y 1:14:15 Beginner Guided Meditation, UWest Meditation Camp #1, Part 2 - Culadasa
# 8yz0HxXTVFY 28:25 Guided Metta - Culadasa, Retreat in California #3, Part 12
# 70qMmwmaccQ 1:13:15 DM Retreat - Culadasa
# xmmPRYagq3s 26:05 Guided Metta Meditation, UWest Meditation Camp #1, Part 13 - Culadasa
# wU0RjslXxlo 14:00 Analytical Meditations, What and How - Culadasa
# SdYgWK-mYrg 3:00 First Stage of Meditation Tips - Culadasa
# oQixjDgWq9g 1:28:13 Cochise Stronghold 10 Day Retreat #1, Part 1 - Culadasa
# Zl0zl_Yd1-I 1:25:15 Cochise Stronghold 10 Day Retreat #1, Part 3 - Culadasa
# TnasBvYIsHE 59:00 Closing Dharma Talk - Culadasa, Cochise Stronghold Weekend #1, Part 3
# EpupNjzIt-M 1:13:15 Cochise Stronghold 10 Day Retreat #1, Part 4 - Culadasa
# nLQ_1dSc8ZQ 51:00 Cochise Stronghold 10 Day Retreat #1, Part 2 - Culadasa
# QGlXc2UWBJY 1:10:15 Cochise Stronghold 10 Day Retreat #1, Part 6 - Culadasa
# yA-q5TQn0NM 7:15 Brightening the Mind to Combat Subtle Dullness - Culadasa
# dqxHOoBS8e8 1:04:45 Cochise Stronghold 10 Day Retreat #1, Part 7 - Culadasa
# FqYQWfh1GJw 46:30 Cochise Stronghold 10 Day Retreat #1, Part 5 - Culadasa
# iPZTuq11gqA 1:57:05 TCMC Thursday #5 - Culadasa
# yAqvatURbgs 1:26:10 Dharma Talk, Q&A - Culadasa, Cochise Stronghold Weekend #1, Part 2
# PSg_Pxe89bA 1:43:30 TCMC Thursday #7 - Culadasa
# WeQ-VzAFDzU 1:29:25 TCMC Thursday #6, Part 3 - Culadasa
# m13cmG7uhu8 43:20 Guided Metta Meditation, TCMC Thursday #6, Part 2 - Culadasa
# -8JH-QPG6lA 19:45 Combating Depression and Dissastifaction During Transition - Culadasa
# 8-dkvQ8T89o 15:05 Loving Kindness Practice - Culadasa
# Xx-QIXKainU 12:25 Craving, What’s it All About? - Culadasa
# Idkm7mG3ohI 3:40 Exchanging Self and Others - Culadasa
# w9i_1vp2OCg 6:20 How do I develop mindful awareness and good concentration - Culadasa
# GGOS42Ws7_I 1:14:45 TCMC Thursday #9, Part 2 - Culadasa
# 1kXIzUKS0TM 11:55 The Benefits and Practice of Letting Go - Culadasa
# -TmI4U9JYFc 4:40 Physical Suffering vs Mental Suffering - Culadasa
# wRZdcZUz1ks 21:45 TCMC Thursday #6, Part 1 - Culadasa
# mywGH24zu60 41:35 TCMC Thursday #8, Part 2 - Culadasa
# -2rXnz9RUuc 31:15 TCMC Thursday #8, Part 1 - Culadasa
# KRxHUtQ3Vjc 42:40 Uposatha Day #5 - Culadasa
# ZCiDLdvHDyI 25:55 TCMC Thursday #9, Part 1 - Culadasa
# HuKdJQUR2TY 15:00 Uposatha Day #3 - Culadasa
# endc5cDy8zM 10:50 Uposatha Day #4 - Culadasa
# 293vximFQW4 1:25 Working with Post Traumatic Stress Disorder - Culadasa
# V5v-nNBgYSM 45:20 Guided Meditation - Culadasa, California Retreat #2, Part 6
# 25GQobBP1C0 1:42:35 TCMC Thursday #4 - Culadasa
# F_MDEaOBWI0 1:57:45 TCMC Thursday #1 - Culadasa
# 8EetwP74CF0 1:25:40 TCMC Thursday #2 - Culadasa
# 5Rz0LSfeRyQ 1:34:05 TCMC Thursday #3 - Culadasa
# 1akIBebwVOQ 1:04:50 Introduction - Culadasa, Cochise Stronghold Weekend, Part 1
# GlaQy-CRY_Q 35:15 Uposatha Day #2 - Culadasa
# 8o-qawkwkeE 1:23:00 Dharma Talk - Culadasa, California Retreat #2, Part 4
# vxkieoMDKsk 1:01:20 Q&A – Culadasa, Retreat in California #2, Part 8
# m8rijuciZWg 1:25:05 Dharma Talk – Culadasa, Retreat in California #2, Part 11
# 12gfXprvTWo 59:20 Q&A – Culadasa, Retreat in California #2, Part 5
# y9h7KzDwMMU 1:27:10 Dharma Talk – Culadasa, Retreat in California #2, Part 9
# cSjkj8p1bzw 1:04:25 Q&A – Culadasa, Retreat in California #2, Part 10
# YbZyAR4bKRw 1:02:10 Dharma Talk – Culadasa, Retreat in California #2, Part 7
# U6nPD02iPf8 37:15 Closing – Culadasa, Retreat in California #2, Part 12
# -mbGcDSEEcI 2:13:40 Dharma Talk - Culadasa, California Retreat #1, Part 15
# FMDdB2RpckY 1:50:35 Dharma Talk - Culadasa, California Retreat #1, Part 17
# VVXIYCC5Tg8 1:59:40 Dharma Talk - Culadasa, California Retreat #1, Part 13
# CKSVmsDZjAg 1:53:35 Dharm Talk - Culadasa, California Retreat #1, Part 11
# qNVfPuGbJcc 1:25:10 Dharma Talk – Culadasa, Retreat in California #2, Part 2
# K6bhtKYvUc4 1:22:55 Q&A – Culadasa, Retreat in California #2, Part 1
# k8zFTjBnNl8 1:13:55 Retreat Closing - Culadasa, California Retreat #1, Part 18
# J_dFNqelBfI 1:04:10 Q&A – Culadasa, Retreat in California #2, Part 3
# W4rdBy2rS0E 1:12:10 Q&A - Culadasa, California Retreat #1, Part 16
# 9izV_lZ2gF4 1:01:20 Q&A - Culadasa, California Retreat #1, Part 12
# -eWefpzBzqQ 59:45 Q&A - Culadasa, California Retreat #1, Part 14
# -9bu9P6OjIo 2:01:45 Dharma Talk - Culadasa, California Retreat #1, Part 9
# wQkmlFKLONM 2:22:10 Evening Opening - Culadasa, California Retreat #1, Part 1
# ZIVpqZ12n5s 1:15:55 Dharma Talk - Culadasa, California Retreat #1, Part 7
# wE7ONOW73zE 1:01:00 Q&A - Culadasa, California Retreat #1, Part 10
# b8zAJ3JCc_k 1:14:35 Dharma Talk - Culadasa, California Retreat #1, Part 5
# eptT3fEFeWM 1:01:55 Q&A - Culadasa, California Retreat #1, Part 8
# CpVvyfvHs4I 1:01:55 Q&A - Culadasa, California Retreat #1, Part 6
# JexBXhxlXnU 1:04:25 Q&A - Culadasa, California Retreat #1, Part 4
# Ep2XB4eZVDQ 1:08:35 Dharma Talk - Culadasa, California Retreat #1, Part 3
# ev2a4H1ZO88 59:50 Q&A - Culadasa, California Retreat #1, Part 2
# iS_hjBoApQY 1:12:15 Uposatha Day #1 - Culadasa

# Culadasa

# edd2fS8BRdM 1:48:18 Culadasa May 2021 Patreon Q&A No1
# fmn_lz7tGFc 1:29:09 Culadasa April 2021 Patreon Q&A No2
# 8Uc_gewR1gY 1:27:55 Culadasa April 2021 Patreon Q&A No1
# -hKGfbBuemA 1:15:01 Culadasa March 2021 Patreon Q&A No2
# qppnBfQ_KEI 1:22:26 Culadasa February 2021 Patreon Q&A No2
# 1nPhm73Aaxw 1:34:44 Culadasa February 2021 Patreon Q&A No1
# qIuZg6jBNsM 1:25:03 Culadasa January 2021 Patreon Q&A No2
# ZbmFWHoT0YE 1:21:16 Culadasa January 2021 Patreon Q&A No1
# d4x3_ffTPC0 1:42:07 Culadasa December 2020 Patreon Q&A No1
# z2aOw9Uhc-w 2:01:19 Culadasa November 2020 Patreon Q&A No3
# 9KYmlShAz_g 1:26:29 Culadasa November 2020 Patreon Q&A N°2 Recording
# K0KKBU46hNM 1:33:03 Culadasa November 2020 Patreon Q&A N°1 - Sunday the 1st
# rXySJwIZMP8 1:32:17 Culadasa October 2020 Patreon Q&A N°2 Recording
# JK0q0tgsw2U 1:37:12 Culadasa October 2020 Patreon Q&A N°1 Recording
# GWThVC6FEzA 1:46:16 Culadasa September 2020 Patreon Q&A N°2 Recording
# 81mCT4D6w1I 1:39:36 Culadasa September 2020 Patreon Q&A N°1 Recording
# BJzM7GH9-nE 1:22:54 Culadasa August 2020 Patreon Q&A N°2 Recording
# kwyGPfavfFY 1:44:59 Culadasa August 2020 Patreon Q&A N°1 Recording
# YU_gUvXkkVY 1:43:06 Culadasa July 2020 Patreon Q&A N°2 Recording
# nlB-Dk8MkVE 1:41:08 Culadasa July 2020 Patreon Q&A N°1 Recording
# a8XJrNx7iN0 1:42:38 Culadasa June 2020 Patreon Q&A N°2 Recording
# 1-bzZgZd-sg 1:45:21 Culadasa June 2020 Patreon Q&A N°1 Recording
# BYtQAyNyA8E 1:57:23 Culadasa May 2020 Patreon Q&A Recording N°2
# eL36yVnWcb8 2:02:09 Culadasa May 2020 Patreon Q&A Recording N°1
# omNF2wQYVxs 1:53:06 Culadasa April 2020 Patreon Q&A Recording
# FnQVRtDu0kQ 1:46:48 Culadasa February 2020 Patreon Q&A Recording Nº 2 - Sunday
# IamWcgYWKcw 1:30:15 Culadasa February 2020 Patreon Q&A Nº 1 - Saturday
BAWrOls6I8U 0:54 New Channel 4 My Journey
AdiW7_HcjiE 1:13:05 My Journey: Episode 6 - The Ups and Downs of Practice (and Life!) - RE-UPLOAD WITH BETTER SOUND
BR7D92whYXA 1:09:49 My Journey: Episode 5 - Unifying life around the Dharma (re-upload)
TrK3NBylnVA 1:23:23 My Journey: Episode 4 - Stranger in a Strange Land
E48ByR0Xt6U 1:10:46 My Journey: Episode 3 - Experiences don't mean sh...
# Yg6l-DsFEz8 1:32:25 Culadasa March 2021 Patreon Q&A No1
OAfkxskGREo 1:07:21 My Journey: Episode 2 - A Series of Miracles
kn050yBN37U 59:17 My Journey: Episode 1 - The path of the lay practitioner, commitment, and the early years
Uf_su1wDk94 8:57 Introduction to "My Journey" discussion series
UjBXtI1Q2as 1:04:56 Culadasa discusses meditation and the "Dark Night": What it is, what it isn't, and how to avoid it
6nxZFnYCjbc 1:16:17 Nihilism vs Eternalism; Meaning in life; Is Awakening worth it? How long does it take?
# lVvii04Sa3I 1:14:39 Culadasa December 2020 Patreon Q&A No2
# aJ16ifG-udI 1:23:30 Culadasa January 2020 Patreon Q&A N° 2 (Monday)
# c7GSUFa_lF4 1:22:12 Culadasa January 2020 Patreon Q&A Nº 1 - Sunday
# eERQSG0eMFY 1:17:41 Culadasa December 2019 Patreon Q&A Video - Monday the 16th
# _c94GntI6qM 1:31:22 Culadasa December 2019 Patreon Q&A Video - Sunday the 15th
# Wmg-SOl9Sk4 1:28:38 Culadasa November 2019 Patreon Q&A Video - Friday the 29th
# -pqnkm1tQ0E 1:42:39 Culadasa November 2019 Patreon Q&A - Monday
# YfRp9cMPSNk 1:33:47 Culadasa November 2019 Patreon Q&A - Sunday
# X7brJ8qrLBo 1:35:54 Culadasa July 2019 Patreon Q&A
# MapEQWUQakY 1:34:42 Culadasa June 2019 Patreon Q&A
# kGgpbE_etV8 1:32:49 20190517 Culadasa Patreon Q&A
# mW3_WGR2Llo 1:13:02 Culadasa March 2019 Patreon Q&A Catchup
# Dp3l_XnTd20 1:25:44 Culadasa April 2019 Patreon Q&A
# 7UdHOJqB03o 1:54:58 March 2019 Culadasa Patreon Q&A
# eKMKZGZy6sc 1:29:33 February 2019 Culadasa Patreon Q&A
# zRa9I0ZkdKM 1:24:01 February 2019 Culadasa Patreon Q&A catch-up
# ewiA5sh-otw 1:28:44 Culadasa January 2019 Patreon Q&A
# By0s1KVLYBw 1:33:21 Culadasa December 2018 Patreon Q&A
# urCb5Ryp8SU 1:42:43 Culadasa November 2018 Patreon Q&A
# _m3ou_CA1Wk 1:16:31 November 23, 2018 Culadasa Q&A Catch Up
# DO4vExydTKA 1:30:28 October 29, 2018 Culadasa Patreon Q&A
# aM0o-BkrwkY 1:48:46 September 2018 Patreon Q&A
# EhtU5ei6YaM 1:30:00 20180816 Patreon Meetup Video
# mz0MlFOwaek 1:49:44 July 25, 2018 Culadasa Patreon Q&A
# rqpZrRRC1sU 1:24:06 Culadasa June 2018 Patreon Q&A
# pYZ7kiIbLWs 1:32:29 Culadasa May 2018 Patreon Q&A
# 0nC9ZUx-Xs4 1:48:10 Culadasa April 2018 Patreon Q&A
# 3ZM2Hq-wiwU 2:00:47 Culadasa April 2018 Patreon Q&A Catch-Up
# YD02MC1RaUs 1:42:10 Culadasa February 2018 Patreon Q&A
# e1kss-E0IKU 1:22:37 Culadasa October 2017 Patreon Q&A
# 9GCa0epZVs8 1:01:04 Culadasa March 2018 Patreon Q&A
# RarJIUBrysw 1:31:37 Culadasa January 2018 Patreon Q&A
# uuBr-5G0zoE 1:59:49 Culadasa December 2017 Patreon Q&A
Zk2XQFwESIk 1:11:22 Creating the optimal state of mind for Meditation - Culadasa at NYIMC
2LYa1YCdZH8 1:15:37 Culadasa -The 5 ultimate insights that lead to direct awakening.
vtWoFpEHTBs 27:27 How do you know whats true? - Culadasa at NY Insight
RKsqA6qFZBc 56:10 Engaged Compassion, Part 4; Gloucester MA, July 2, 2016
vLp738BdVCI 1:39:15 Engaged Compassion, Part 3; Gloucester MA, July 2, 2016
xWDs1ovmeqo 59:02 Engaged Compassion, Part 2; Gloucester MA, July 1, 2016
oge5XL_vdPw 1:36:53 Engaged Compassion, Part 1; Gloucester MA, July 1, 2016
Mzlk1iq_LRs 12:21 benefits of meditation, therapy and awakening
NndWvacogTk 2:51 Practice Advice for Everyday Life
aCwUGQk-0gQ 1:50 Welcome - Meditation instruction from Buddhist and Scientific perspective - Culadasa
xrUlWLRqQEM 1:23 Why Teach Meditation in Stages - Buddhist Wisdom meets Brain Science - Culadasa
XaRnabvBKOQ 3:07 Awakening & Insight - Buddhist Wisdom meets Brain Science - Culadasa
MAY3lh-4xIE 4:49 Attention, Awareness & Mindfulness - Buddhist Wisdom meets Brain Science - Culadasa
9_7sTiQ-jIM 1:20 Rattlesnake Round-up
u5He0q5u5yY 2:34 Here Comes the Sun: Achieving Awakening Without the Dark Night
33lZZhsKJw0 9:36 Training the Mind -- Buddhist Wisdom meets Brain Science - Culadasa
XFrOYVJxO80 9:41 Suffering and the End of Suffering -- Buddhist Wisdom meets Brain Science - Culadasa
GVoIxju59lc 9:02 Mind-Wandering in Meditation -- Buddhist Wisdom meets Brain Science - Culadasa
R9dqNii3Vmc 1:48 A Higher Level of Consciousness -- Buddhist Wisdom meets Brain Science - Culadasa
BT1HpYIg-oE 5:46 Developing Introspective Awareness -- Buddhist Wisdom meets Brain Science - Culadasa
r-n-Ca_RqUQ 4:27 Physics, Philosophy and Emptiness -- Culadasa - Buddhist Wisdom meets Brain Science
JraPD3iMJYE 9:58 Where do the Four Elements Cease? - Buddhist Wisdom meets Brain Science - Culadasa
G-JUhLJdJ3w 7:51 What is Rebirth? - Buddhist Wisdom meets Brain Science - Culadasa
HSv2dindx7o 9:56 What is Equanimity? - Buddhist Wisdom meets Brain Science - Culadasa
8IqXwOlYiWs 9:55 Reality is Mind-Created - Buddhist Wisdom meets Brain Science - Culadasa
BdJWwlWVkzk 9:50 The Nature of Suffering - Buddhist Wisdom meets Brain Science - Culadasa
fcWxNIsXd4M 10:00 The Nature of Ultimate Reality - Buddhist Wisdom meets Brain Science - Culadasa (Q&A 6 of 12)
0F8Oub7tYsk 9:58 Seeing What Really Is - Buddhist Wisdom meets Brain Science - Culadasa
B00XPYTvCRY 10:02 Introspective Awareness in Meditation - Buddhist Wisdom meets Brain Science - Culadasa
-x-ONEhLDlA 10:03 Positivity and Awareness in Meditation - Buddhist Wisdom meets Brain Science - Culadasa
7Rv4Dh0FWRI 7:47 Uninterrupted Continuity of Attention -- Buddhist Wisdom meets Brain Science - Culadasa

# Adam Savage's Tested

dXdkfaEbeLQ 10:18 Ask Adam Savage: When Did You Know Making Would Be A Sustainable Career?
PbnDO_IMMoY 7:39 Ask Adam Savage: What IS It About The Matrix?
kBoNZjWsrOY 15:21 Ask Adam Savage: All About Clamps
6HOWrW4p-Xg 11:29 Ask Adam Savage: Adam's Top 5 Movie Soundtracks
Wz-iPCiim9U 5:01 Ask Adam Savage: “Did You Have Work/Life Balance During MythBusters?”
UUNBBNLCqmU 7:39 Ask Adam Savage: Best Glue for Foam
eGRfEvMEoSM 6:16 Ask Adam Savage: "Do You Have Lucid Dreams?"
qQlF7upgTlA 10:03 Ask Adam Savage: "What Do You Think Will Be Your Legacy?"
7KllsOwtHK0 7:39 Ask Adam Savage: Ark of the Covenant Replicas and Duct Tape Bullwhips
5CRSXcoasQQ 12:00 Ask Adam Savage: Creating With ADHD
W7XvCLDzY10 7:51 Ask Adam Savage: How to Set Up a New Shop
KZWWL3Kdhhk 9:04 Ask Adam Savage: On Sharing Space With Mrs Donttrythis
vyCrHLYiGNo 10:09 Ask Adam Savage: Efficiency and First Order of Retrievability in Shops
6LqBJzLB5jg 5:57 Ask Adam Savage: Best Tools and Projects for First-Time Makers
L3D8BhJIfL0 11:12 Ask Adam Savage: Avoiding Accidents and "The Hands"
eS8aLmXEmQQ 11:20 Ask Adam Savage: When to Ask for Help on a Job
TpqUG6iFEBE 7:38 Ask Adam Savage: What's the One Thing Visitors Flock to in The Cave?
IVE3G_uCW1Y 9:05 Ask Adam Savage: Building vs. Modifying Tools
WBbxrHO8zq8 7:28 Ask Adam Savage: Favorite Miniature and Jumbo Versions of Tools
8Q_7nkvjl-g 8:58 Ask Adam Savage: The Origin of Adam and Jamie's "MythBusters Look"
usB6jqa4Yt4 7:56 Ask Adam Savage: When to Buy and How to Mark Your Tools
riyvh8zOG_A 5:58 Ask Adam Savage: On Reading Critical Viewer Comments
G9TJQEJJZKI 6:58 Ask Adam Savage: Current TV Series Adam Would Want to Address on MythBusters
fWZ8rUEdhUc 7:58 Ask Adam Savage: What's on Adam's Personal Bucket List?
WrGW5oGnILo 7:58 Ask Adam Savage: Setting Up a Shop in Your Garage
2tZ0EGJIgD8 15:16 Ask Adam Savage: Adjusting to Life Post-Mythbusters
jIAbRPW0jXg 5:41 Ask Adam Savage: On Making "In Universe" Prop Build Decisions
E1tuc-levnI 6:14 Ask Adam Savage: Do I Want to Go to Space?
a6E0FMtdJpM 10:51 Ask Adam Savage: Who Modified the Cars on MythBusters?
aRln8atkNaY 13:43 Ask Adam Savage: Behind the MythBusters Cement Truck Explosion
mqXtr7C5VCg 11:45 Ask Adam Savage: Job Interview Advice, Jamie's Flamethrower and More
lbnGzrLWlBw 5:25 Ask Adam Savage: The Origin of M5, M6 and M7 (Plus, Their Neighbors)
DNhbUQhiVf8 7:51 Ask Adam Savage: Will I Ever Retire, Plus Combatting Negative Feedback
Bh6VLA7uUvM 11:21 Ask Adam Savage: The Challenge of Using Explosives and Firearms in San Francisco
I1XVHq3sTdk 7:59 Ask Adam Savage: When to Keep/Store a Project, Plus Favorite Puppet in Film History
MztikUm9T1c 15:34 Ask Adam Savage: My Favorite Build of Jamie's
c6TopwNu7Ok 8:22 Ask Adam Savage: How Useful Is My Tattoo?
6HV37guAllc 6:23 Ask Adam Savage: Makers in the Film Industry
l1RemggFxwA 8:16 Ask Adam Savage: How to Weather Leather
jP4DGyMUbMA 6:50 Ask Adam Savage: My "Why Didn't I Think of That" Moments
Z10JnKiu4Tg 6:49 Ask Adam Savage: Post-Build Depression, Custom Lightsabers and Unfinished Blasters
AlcLyaOw-ls 8:22 Ask Adam Savage: The "One Day Build" Concept
8fgfi7Kc1hg 13:30 Ask Adam Savage: How I Jump Back Into a Set-Aside Project
DXyc91HL7Y8 7:47 Ask Adam Savage: Does Self-Filming Make Builds Longer?
LprSB3_rles 11:12 Ask Adam Savage: When to Make vs. Buy Something
8mXv0_N_NHg 8:17 Ask Adam Savage: The Myth Jamie Suggested That I LOVED (But We Didn't Do)
qkz19jFh7x0 8:06 Ask Adam Savage: Bailing on Boring Projects
FIDJ2XMTb_s 10:06 Ask Adam Savage: Land Cruiser Pros and Cons Plus Drywall Screws
stMPdtH3S9E 11:10 Ask Adam Savage: Metric Blocks, Biscuit Bazooka and Barrel of Bricks
L5De68zSf14 11:55 Ask Adam Savage: Should You Take Jobs at a Loss to "Get Your Name Out"?
_Xt-YHdRlQI 12:00 Ask Adam Savage: Stewart/Colbert Rally to Restore Sanity and/or Fear Invite
IuF1tWlV6nE 9:33 Ask Adam Savage: Blade Runner 2099, Workbench Tops and Custom Lightsabers
psgf9pqjkPs 8:37 Ask Adam Savage: Is Failure Still an Option?
qPlWUFxXFGs 10:24 Ask Adam Savage: Tips for Organizing Reference Materials (Both Digital and Physical)
5Oe2S_xvL5o 9:01 Ask Adam Savage: The MythBusters Pilot Episodes
WfyZuedOsF4 9:12 Ask Adam Savage: On Finding Organizational Inspiration and Discarding Things You Need Later
9mxGo7QglRU 12:36 Ask Adam Savage: Transitioning From Jamie's Employee to Equal
CVU3EZnjmUg 9:33 Ask Adam Savage: How to Store One-Off Items (Plus Home Organization Issues With Mrs. Donttrythis)
70TZua1j3Fc 11:27 Ask Adam Savage: When to Discard Scrap Materials
56NXn-6nqMA 8:58 Ask Adam Savage: Why the Hindenburg Episode Was Huge (and Fun!) for MythBusters
4m-lTiCmSro 6:45 Ask Adam Savage: Airbrushing Tips and DIY Tools
QmRXguvO0bs 13:45 Ask Adam Savage: Managing Tools and Materials When You Have Two Shops
F_YVzJfhC6o 10:47 Ask Adam Savage: Tips for Building Within Tight Budget Constraints
d4O2wtDW2LA 10:17 Ask Adam Savage: The Tool That Does Only One Thing, But Does It Well
H0X9y0iyBmY 12:13 Ask Adam Savage: Lathe Tips (Plus Adam's Watch!)
qeRcHlwp2AQ 9:43 Ask Adam Savage: The Tool That Makes Adam Giddy
q3sCIpFZzfU 8:04 Ask Adam Savage: The Tool That Didn't Live Up to My Hopes
Gj0OMUozEKw 8:25 Ask Adam Savage: Favorite Play/Musical Experience
7oieelDea5o 10:28 Ask Adam Savage: Do I Do Projects at Home?
8zIOfPy7sCg 10:48 Ask Adam Savage: Myths Adam Wishes Were Taken Further
V1XbZPafG7M 14:56 Ask Adam Savage: How to Deal With Creative Block
aNwZQdUmR7A 11:58 Ask Adam Savage: Weirdest Things Fans Ask to Be Signed
AoXNSquNsbY 14:00 Ask Adam Savage: The Myth That Pushed Adam to His Breaking Point
uKlQyWwdqXk 11:13 Ask Adam Savage: Is Mrs. Donttrythis a Maker?
QuzIlMxLnQM 12:42 Ask Adam Savage: Collaborating/Competing With Jamie on MythBusters
r1uxC8RUiKU 9:05 Ask Adam Savage: Feeling Overwhelmed by STUFF
D_yHttkfWCA 11:43 Ask Adam Savage: Origin of "Well, There's Your Problem" on MythBusters
Ie79jtBfr1M 11:59 Ask Adam Savage: Movie Scene That Had the Biggest Emotional Impact
REXSV1x18Y8 11:37 Ask Adam Savage: Most Egregious Errors in TV and Movies
fW8R-WbLQEs 11:14 Ask Adam Savage: Films Where the Props Were Better Than the Film Itself
EtdAto9ymA8 9:22 Ask Adam Savage: Coming Out of Prop-Making "Retirement"
BW2l9UE05No 8:47 Ask Adam Savage: Criteria for Removing Items From Shop
KvnWuo_vTFU 9:58 Ask Adam Savage: Origin Story of the Cave
8-1NoqJXX-c 6:32 Ask Adam Savage: If I Could Rebuild My Shop From Scratch
UBIoaI_zqxU 6:33 Ask Adam Savage: Pegboard and Other Storage Solutions
rpBxyXYzJnU 8:13 Ask Adam Savage: Inspiration from Cosplays Seen in Recent Conventions
25eZ17IoRK4 11:34 Ask Adam Savage: On Storage, Compressed Air and Expendables
04uc8uEE36k 10:13 Ask Adam Savage: Making a "Renter Friendly" Home Workshop
dNry9KLISYo 5:30 Ask Adam Savage: 3D Printer vs Vacuum Former for Cosplay
sHz3zZu3Z0o 8:54 Ask Adam Savage: Managing Distraction While Working
sN-wQYRDECw 12:15 Ask Adam Savage: How Mandalorian's Digital Effects Are Game-Changing
NRDWkJbrcrU 11:43 Ask Adam Savage: On Interacting With Fans
KoEw_A1MfC0 11:40 Ask Adam Savage: Is Hacking Making?
L-s3jFny6M8 12:19 Ask Adam Savage: Has Celebrity Changed Adam's Con Experience?
uK-0Yndxmss 11:27 Ask Adam Savage: Managing Anxiety When Delivering Creative Work
kDzhe6Ll1sA 14:50 Ask Adam Savage: On Turning a Hobby Into a (Still Enjoyable) Business
Gf-7RlvDeaw 12:14 Ask Adam Savage: How Scripted Was Shark Week?
tiByvxW3-SQ 9:12 Ask Adam Savage: On Being Clever vs. Good in the Workplace
-GzHr2MYS0w 16:47 Ask Adam Savage: On Being a Freelancer (and Setting Prices)
NSPHIP9BM8I 12:01 Ask Adam Savage: My Past in Theatre
1wR9i5BLjeU 10:49 Ask Adam Savage: My Worst and Most Tedious Jobs
YpEHNIADWiA 10:22 Ask Adam Savage: First Job Ever Plus That Charmin Commercial
uiS1iR9uWQU 10:24 Ask Adam Savage: How Much Is Cosplay Physical vs. Mental?
rnfbjySCtCU 5:43 Ask Adam Savage: Machining vs 3D Printing
x0N2A8lNUXo 9:47 Ask Adam Savage: Transforming Toys into Realistic-Looking Props
D4ZYMUc8vng 12:58 Ask Adam Savage: "How I Broke My Neck"
V4PrNE8HsuI 12:18 Ask Adam Savage: "Which Star Wars Scenes Bring You Joy?"
mzC97eXYrDI 4:35 Ask Adam Savage: MythBusters Celebrity Guests That (Sadly) Never Happened
5A6ZGOmV0CM 7:16 Ask Adam Savage: Favorite Object Built on MythBusters
ZuW7_-rbvJc 5:24 Ask Adam Savage: Which Previous Job Adam Would Do Again (and Again)?
Nr81hpP5wK4 6:55 Ask Adam Savage: The Day I Saw Unparalleled Joy on Jamie's Face
RTa_oneCUPg 11:51 Ask Adam Savage: When to Intervene and When to Let Mistakes Happen
uXL8zhR17ts 15:37 Ask Adam Savage: Thoughts About Galaxy's Edge
x6c32uqznyQ 15:18 Ask Adam Savage: When Good Lightsaber Battles Go Bad
HNzigDaI5u8 12:15 Ask Adam Savage: Why Waterslide Wipeout Was Less Fun Than It Looked
xjHGCalVf6U 8:16 Ask Adam Savage: Managing Failure as a Maker
ELauebvLb1M 15:17 Ask Adam Savage: Coping With (and Learning From) Failure
y-0bBTuLAR8 11:09 Ask Adam Savage: Favorite Life Experience as a Result of MythBusters
tgx0bPAi8Q8 6:56 Ask Adam Savage: Learning to Stunt Drive on MythBusters
thRFK-MSZAw 6:26 Ask Adam Savage: MythBusters' Contribution to Science
jHwM-nnG-vI 9:45 Ask Adam Savage: Collecting Failures
LihTFh63wpM 14:01 Ask Adam Savage: Managing Negative Emotions During a Build
jEfQAo-BuB0 7:19 Ask Adam Savage: "Why I Actually Hate Duct Tape"
2T7lh1HzZjw 9:14 Ask Adam Savage: How to Approach Building an Accurate Costume
8FBNmf9H-_4 10:01 Ask Adam Savage: Performing for an Audience vs. a Camera
T6BlB3l-F4U 7:14 Ask Adam Savage: Proportion vs. Measurement in Cosplay
9a1eQAge2sg 11:06 Ask Adam Savage: Choosing Which Version of a Character to Cosplay
T5fjMnfSSbQ 7:23 Ask Adam Savage: A Caution Against the "Comparing Mind"
hSAuQETf79M 6:35 Ask Adam Savage: Which Myth Didn't Get the Love It Deserved?
16ctTeUJvSU 13:03 Ask Adam Savage: How Adam Chooses His Cosplays (Plus a Nathan Fillion Story!)
HU--YQtD-xk 6:59 Ask Adam Savage: Training a New Shop Employee With "All the PPE"
v3TYRKECRNA 7:13 Ask Adam Savage: Predicting Results on MythBusters
_iu7u0SQCUk 13:37 Ask Adam Savage: How MythBusters' Crew Size Changed Over Time
8UXDae5czgs 7:08 Ask Adam Savage: On Sharing Your Workshop
sosCBJv2tV8 6:59 Ask Adam Savage: Shop Anchor Points
XorzjtqIDWM 6:53 Ask Adam Savage: Testing the Bulletproof Water Myth
QCcIdfIdfD0 6:58 Ask Adam Savage: Designing Mobility in a Small Shop
g7nz1yCPFk0 4:59 Ask Adam Savage: How to Keep Track of Rarely Used Items
ZMIetBwWKoI 5:36 Ask Adam Savage: How Dangerous Was Duct Tape Canyon?
Sn6_TE9i5r8 9:00 Ask Adam Savage: About M5's Wall of Labeled Storage Bins
dsN__voQd8o 10:32 Ask Adam Savage: Tips for Setting Up a Workshop
beVj_xinOHY 12:33 Ask Adam Savage: When Good Materials Go Bad
v6JPhkWg_ok 8:44 Ask Adam Savage: Testing Myths With "No Basis in Science"
xUjcHW7SHaI 11:05 Ask Adam Savage: Plane on a Conveyor Belt Controversy
oFrjTAa7N4M 7:22 Ask Adam Savage: The Importance of Practical Effects
am5MLfCk8dc 10:37 Ask Adam Savage: "Which film most impacted modern cinema: Blade Runner or Alien?"
Z4dG9DYGSdA 11:56 Ask Adam Savage: The Myth More Dangerous Than It Seemed
vpAb8YkKKWg 10:50 Ask Adam Savage: Favorite Actor from Alien
Z9UIbpuppkM 9:19 Ask Adam Savage: About MythBusters' Narrator
Lcf0IOb0VY0 7:31 Ask Adam Savage: Working on R2D2 at ILM
h70kbIzPgig 13:09 Ask Adam Savage: How Lead Balloon Changed MythBusters
mFwzgXnxG30 7:09 Ask Adam Savage: Why M7 Spun Off from M5
bUAa1TgSY1c 9:30 Ask Adam Savage: Testing Fiction-Based Myths on MythBusters
EAlX_NOFYDI 12:04 Ask Adam Savage: High Speed and MythBusters
ztE3xoVDtG0 6:30 Ask Adam Savage: Voight-Kampf Machines and Electric Sheep
2FyfZeAgv54 4:06 Ask Adam Savage: Myth Adam Would Like to Test Today
rdNPws3pyHw 10:14 Ask Adam Savage: Why I Still Like Blade Runner
uw4csWqepkA 10:41 Ask Adam Savage: How MythBusters' Stunt Training Later Saved Adam's Life
Uxx4Y1lOM00 12:43 Ask Adam Savage: Favorite Blade Runner Cut (Plus: Is Deckard a Replicant?)
zdkqBWtVNSA 14:04 Ask Adam Savage: Savage Builds' Complex Builds, Plus Those Rocket Gloves
DXWzAcWj6b0 13:40 Ask Adam Savage: Remembering the U2 and Blue Angels Flights from MythBusters
H6yVtuPG1lc 13:58 Ask Adam Savage: Working With Tory on Savage Builds
ei2jLKORXn4 14:19 Ask Adam Savage: Savage Builds Wheel of Death Re-Do and Unrealized Ideas
2WFFhicVeXI 12:00 Ask Adam Savage: Origin of "I Reject Your Reality ..."
zyNdK6iXcyM 8:57 Ask Adam Savage: Most Important Myth
4OnOyyTyvcc 11:29 Ask Adam Savage: "Is ADHD a Positive or Negative for Makers?"
XkRHl8v5vrU 4:35 Ask Adam Savage: "Would You Go Back to ILM?"
COh6jTqWZmU 15:46 Ask Adam Savage: "What's Your End-of-Life Plan for Your Shop?"
yqmPea6d8ec 8:30 Ask Adam Savage: From Messy to (More) Organized
mwdHPG_heV0 8:44 Ask Adam Savage: Public Education, Doctor Who and Scissors
ebDc1uWiJD4 11:04 Ask Adam Savage: The Importance of Portfolio
4CHlcNqB20Q 8:42 Ask Adam Savage: Props from Literature and Favorite Animation as a Youth
YBILSR7Hu5o 9:36 Ask Adam Savage: Best Age to Introduce the Creative Process
7vRG0QpAT24 7:57 Ask Adam Savage: When Grant Met NSYNC
8aOzfsbex8U 3:50 Ask Adam Savage: Favorite Recent ILM CG or Artwork
qvU5PZgSowk 9:06 Ask Adam Savage: "Was ILM Your Dream Job or a Stepping Stone?"
ZN-9DiI4jr0 10:11 Ask Adam Savage: Digital vs. Practical Effects, Boredom and Never-Seen Props
qvBAoxuf9zE 11:36 Ask Adam Savage: ILM Hiring Practices and Prop Policies
j26Xc4ngIaM 8:33 Ask Adam Savage: Most Valuable Skill Acquired at ILM
PhkZQeTQ6oM 5:31 Ask Adam Savage: How Ridiculous Was Filming the MythBusters Herding Cats Episode?
2GGkWdLm7PI 10:19 Ask Adam Savage: My First Day and Movies at ILM
IkawOT_Cg-s 8:41 Ask Adam Savage: Would You Have Changed Anything About MythBusters?
mxPQBIu_Hro 8:43 Ask Adam Savage: Were Any Myths Deemed Too Simple to Test on MythBusters?
AkBxe0DXzZs 7:07 Ask Adam Savage: Most Obscure Skill Acquired During MythBusters
4u7I-6AcA00 6:38 Ask Adam Savage: "Which MythBusters' Result Impacted Your Everyday Life?"
kaI-Ri7Ias4 7:23 Ask Adam Savage: What Projects Are Best to Attract New Makers?
HMzg0bVY2Ds 11:09 Ask Adam Savage: Key Quality in a MythBusters Reboot
8wG-gr_IRHQ 9:34 Ask Adam Savage: Most Surprising MythBusters Result
rDnGHwqnfyM 10:33 Ask Adam Savage: M5 vs. M7 Myths
GC4oa5YKN-M 6:35 Ask Adam Savage: "Are You a Ghostbusters II Fan?"
VEgqBVdsJZg 9:34 Ask Adam Savage: "Do You Own a Screen-Used Prop from Ghostbusters?"
DUsBoLT1Yv8 5:25 Ask Adam Savage: What Is a "Maker"?
-AvhYMPvPR4 5:45 Ask Adam Savage: Is Adam an Adrenaline Junkie?
gGzGX8YfSaw 6:53 Ask Adam Savage: Prototyping on MythBusters
N-XpBXr7YHQ 12:00 Ask Adam Savage: Ghostbusters' All-Female Reboot, Abandoned Props and FX
MOsOlF0-Gas 7:01 Ask Adam Savage: The Myth That "Got Away"
MhPrj-32Y88 9:05 Ask Adam Savage: "Do You Have a Bill Murray Story?"
StQcRsCkIjw 8:13 Ask Adam Savage: Those Scripted MythBusters Blueprint Segments
_9bfOcx4h-4 8:35 Ask Adam Savage: Favorite Wood for Building Storage
qSDzoOQxG-I 9:08 Ask Adam Savage: Exciting Maker Tour Discoveries
I5ol3lM2HDo 9:56 Ask Adam Savage: Pros and Cons of "Worldwide Fame"
iUNnmuMkGxs 7:44 Ask Adam Savage: "Is There Anything Too Dangerous to Repair Yourself?"
fsb8NxzNozo 4:31 Ask Adam Savage: LEGO MOCs
-8JUTYj7Q30 16:02 Ask Adam Savage: What MythBusters DIDN'T film, the Bomb Range and Simultaneous Myths
wSoCA0bO1_M 11:19 Ask Adam Savage: "Did MythBusters Influence Your Current Creative Problem-Solving?"
cgFmFqh90PU 13:02 Ask Adam Savage: MythBusters' Unsung Heroes
zyFAlep9CA4 8:48 Ask Adam Savage: Grossest MythBusters Myth
OSMLCySKMWo 8:23 Ask Adam Savage: First Thought When Jamie Asked Me on Board
U0QqMQ2Makg 12:12 Ask Adam Savage: "Was MythBusters Intended to Be Educational?"
mlBnrx5Z3Ww 9:55 Ask Adam Savage: "Do You Lament Being a Generalist?"
EDLU4k9R81c 9:00 Ask Adam Savage: "Why Do You Refuse to Acknowledge Some Indiana Jones Films?"
jp2wZ4q68FQ 5:45 Ask Adam Savage: Tips for Projects in a Limited Work Space
a6voK4rDiUM 13:43 Ask Adam Savage: Stolen Indiana Jones Whip Update
HypnuwjJUgY 5:37 Ask Adam Savage: Ideal Qualities in a Collaborator
h-5hIMkLxRs 12:23 Ask Adam Savage: Essential Pieces for Indiana Jones Cosplay
hjINCIPY4Wo 4:58 Ask Adam Savage: Organizing Tupperware
nTmpDF3VtwQ 11:33 Ask Adam Savage: Favorite Scene from Raiders of the Lost Ark
pZ2qSzZPyPw 11:40 Ask Adam Savage: Fondest Berkeley Repertory Memories
DQnS5SdZ9BE 3:39 Ask Adam Savage: Preferred Sketchbook
hjx2vezyhj4 3:43 Ask Adam Savage: Most Underappreciated TV Series
B9aa__BK8Zk 16:30 Ask Adam Savage: What Books Changed Your Way of Thinking?
wldwf-9B-Us 13:17 Ask Adam Savage: Researching and Recommending Tools
Af-jExEh4SU 3:39 Ask Adam Savage: Best Pen for Writing Labels
nIP3AI8DsG0 4:47 Ask Adam Savage: How to Find Garage Kits
AEHsxb_rSAk 4:56 Ask Adam Savage: Destigmatizing Hearing Loss
4BJAKHv-NLE 13:56 Ask Adam Savage: "Funny Stories about Grant Imahara"
XGFSn2Xm8ks 1:00:23 Ask Adam Savage: "Did you ever meet George Lucas?"
H4-jGNoMlWU 49:07 Ask Adam Savage: "Do you ever just chill out in your shop?"
7COvFaFTAy4 40:33 Ask Adam Savage: "Do you ever feel imposter syndrome?"
Ki0g7I3mASA 28:52 Ask Adam Savage: "Are You an Educator or Entertainer?"
Zt3649jao68 2:49 Ask Adam Savage: What Full-Size Working Prop Would You Want to Make?
nZZlEbttaO0 5:37 Ask Adam Savage: Career Paths for Makers and Polymaths
HMsKjzt7Gpk 3:01 Ask Adam Savage: What's the One Thing You'd Save in a Fire?
aWFHIfmzTYE 2:59 Ask Adam Savage: Preferred Shop Stools
XHHp3dW-TCw 3:46 Ask Adam Savage: Costume Storage
cHEq3HkZf-8 4:49 Ask Adam Savage: Working With Other Makers
1jx_O0no0pY 1:12 Ask Adam Savage: What is Savage Builds?
o_xUJfX-Hy0 4:17 Ask Adam Savage: A Movie You Wish You'd Worked On
tZ4Uyo3oIg4 4:48 Ask Adam Savage: Least-Used but Most Important Tool
5i1zcFjjYAE 3:49 Ask Adam Savage: The Role of Cardboard in Making
qD528UrBNLA 3:53 Ask Adam Savage: How to Interact With Famous People
IDcnw167dN0 2:06 Ask Adam Savage: Connecting to Crafting
qjJwbi8yADM 1:34 Ask Adam Savage: Most Difficult Myth
R9Qm5DQAuag 2:02 Ask Adam Savage: Failed Explosions on MythBusters
exCrXc8hAAA 2:32 Ask Adam Savage: How Does Adam Savage Decide Next Projects?
MwsLhlVlaZc 2:32 Ask Adam Savage: Adam's Favorite Cosplay
1XFhm8nry-Y 2:29 Ask Adam Savage: How to Deal With Success
yw8gFo2DJvM 3:37 Ask Adam Savage: The Role of Social Media
OO8xF-kgMJU 1:55 Ask Adam Savage: Nourishing Kids' Interest in Science and Art
8VDiTgL0qL4 2:15 Ask Adam Savage: Cosplaying as a Celebrity
GRSq75EdzmE 3:11 Ask Adam Savage: Ah-Ha Moments
e3YB3z0YIh8 1:18 Ask Adam Savage: Small, Extra Arms vs. Prehensile Tail
Nx73IDlgSF4 2:34 Ask Adam Savage: Favorite Guest on MythBusters
CaFR4vGKrvc 1:50 Ask Adam Savage: Which Tools Don't Work?
Xwpufxg__6A 1:28 Ask Adam Savage: Best Adaption of a Book
-BM_ghu0qq8 4:03 Ask Adam Savage: Worst Injury While Making?
kmHgfmkEwDE 3:25 Ask Adam Savage: Getting Over Maker's Block
8Cu9Zxr-fjg 3:43 Ask Adam Savage: Favorite Shop Tools!
jY3O8Kt2IVg 3:09 Ask Adam Savage: Favorite Things to Take Apart
X-UWkbx3ppU 2:24 Ask Adam Savage: State of Mind for Making
lgQ2N-dFgQc 2:01 Ask Adam Savage: Overcoming Large Learning Curves
LImkIx2wasw 2:12 Ask Adam Savage: Old vs New Technology
4t1B0iH4jb4 2:20 Ask Adam Savage: Tips for Kids to Become Makers
GVnoTrJNAtc 3:07 Ask Adam Savage: Who Cleans Up the Mess after Builds?
yzYS9yEcJAY 2:48 Ask Adam Savage: Giving Ourselves More Credit
9okIF3RZRcc 2:36 Ask Adam Savage: Recovering from a Mistake
J-9dGGKAQPE 2:15 Ask Adam Savage: Biggest Explosion?
0PQul0uH_oc 2:43 Ask Adam Savage: Most Satisfying Recent Project?
iCl8ek0gLPA 3:44 Ask Adam Savage: Being Dropped in Bubble Wrap?
40dx0L5t8-s 2:31 Ask Adam Savage: What Do You Do After Work?

NM9Hxpk_tPo 18:32 Adam Savage's One Day Builds: Annular Cutter Storage!
SGUtT2Lo944 1:16:13 Adam Savage's One Day Builds: AT-AT Walker Garage Kit!
RfNIlmKXOWg 32:40 Adam Savage's One Day Builds: Custom Poker Chip Carrier!
DPTu47FBkpg 46:04 Adam Savage's One Day Builds: Chinatown Stunt Knife (Corridor Crew FX Challenge!)
bJp3B3jZkhE 36:16 Adam Savage's One Day Builds: Aliens Motion Tracker Prop!
Arm0Mvx45Us 12:28 Adam Savage's One Day Builds: Adding Casters to Costume Cases!
A4v97zfHzcU 28:44 Adam Savage's One Day Builds: Aliens Welding Torch!
SSvcKIa1Uws 1:02:37 Adam Savage's One Day Builds: Moby Dick Diorama Maquette!
K0FcUntHyKw 58:02 Adam Savage's One Day Builds: Razor Crest Mods, Part 1!
GtLCJ2b6XEc 21:46 Adam Savage's One Day Builds: Mandalorian Vibroblade Kit!
5RL7EYSbc_g 55:52 Adam Savage's One Day Builds: The Matrix EMP Switch! Blitzway's 1/4 Scale Apollo 11 Astronaut!
wmjZL8nm3MM 46:58 Adam Savage's One Day Builds: Inglourious Basterds Knife Replica!
zR4X775Y-9E 34:51 Adam Savage Reacts To His First One Day Build!
S5o9NORnF1o 57:32 Adam Savage's One Day Builds: Papier-Mâché Mask!
FuMf6-9ZsJo 40:29 Adam Savage's One Day Builds: Vintage Bicycle Restoration!
rL7k8kjIdow 1:03:48 Adam Savage's One Day Builds: James Bond's Spectre Cane!
NMEkK9cdEqg 30:44 Adam Savage's One Day Builds: RoboCop 2's Cain Stop-Motion Puppet!
jOXidWIB-gY 20:13 Adam Savage's One Day Builds: Drill Press Modifications!
4GcuGnjv2Aw 29:01 Adam Savage's One Day Builds: Special Effects Syringe!
9LVFVTMleio 46:32 Adam Savage’s One Day Builds: Head-Mounted Dart Blaster!
YIbb-Bck8wc 46:43 Adam Savage's One Day Builds: Blade Runner 2049 Helmet Parts!
uzF351VecZA 40:38 Adam Savage's One Day Builds: Painting The HasLab Razor Crest!
xHS83PFsek4 24:20 Adam Savage's One Day Builds: Weathering the Blaster Vault!
NYkF5EwaDBU 19:29 Adam Savage's One Day Builds: RoboCop 2's Cain Robot!
hX5Qsrpj9Ao 31:26 Adam Savage's One Day Builds: Surface Plate Cover
V0kQDCVU_48 36:38 Adam Savage's One Day Builds: Mini Apple Box!
IeFIhKaJEFo 31:34 Adam Savage's One Day Builds: Dune Sand Compactor Replica!
uEcx6yb5yXQ 41:33 Adam Savage's One Day Builds: Magnetic Lathe Chuck!
ykr2IMSYDMc 30:43 Adam Savage's One Day Builds: Ping Pong Ball Launcher!
jQSTJSniXKM 32:25 Adam Savage's One Day Builds: Fixing the Mill's Motor Fan
3qOJakmE7Pk 33:52 Adam Savage's One Day Builds: Mythbusters Blueprint Display with Kyle Hill!
gaJgfS_2LZ4 32:36 Adam Savage's One Day Builds: Gauge Block Storage Rack!
_2kmXLP_uXg 33:13 Adam Savage's One Day Builds: Machining Mystery Prop!
m6VYpHdBG84 15:48 Adam Savage's One Day Builds: Weathering a Sword Blank!
yzy_8tT4TO0 24:35 Adam Savage's One Day Builds: Miniature Astronaut Display!
9TZ5yflpmq4 42:15 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles!
9yzg3a91F5o 45:20 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 4)
2O92DT4x0tg 1:04:21 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 3)
HAirnq80dcQ 1:28:50 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 2)
OshKZcTFEZY 32:21 Adam Savage's One Day Builds: Ghostbusters: Afterlife Hand Prop!
0FKxM-zNZBk 1:10:32 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 1)
dloSR3a57IA 43:24 Adam Savage's One Day Builds: Ghostbusters Proton Pack!
NxL4SLzAkao 1:27:29 Adam Savage's One Day Builds: Aliens Colonial Marines Armor!
iEaf3t3KUyg 27:25 Adam Savage's One Day Builds: Hasbro Mandalorian Helmet Repaint!
zginChewoKU 31:35 Adam Savage's One Day Builds: 2001 Spacesuit Helmet Repair!
-imr0Cy7NQY 39:42 Adam Savage's One Day Build: Acrylic Display Box!
xePxGWc_mH0 34:00 Adam Savage's One Day Build: Fake Beard Wiring!
ijosoNfEBP4 37:21 Adam Savage's One Day Builds: Aliens Colonial Marines Shoulder Lamp!
iiZ5rh3Uo1o 1:14:52 Adam Savage's One Day Builds: Excalibur Henchmen Armor!
dlCiIAS6fsA 26:51 Adam Savage's One Day Builds: MacReady's Hat from The Thing!
NNNcGCZHvxE 53:53 Adam Savage's One Day Builds: Foamcore Architectural Model!
ajHmyFX9zvk 24:47 Adam Savage's One Day Builds: Workbench Vise Upgrade!
OUHShx43JVU 1:01:48 Adam Savage's One Day Builds: Miniature Piano!
WAxxrBF5V3M 1:16:33 Adam Savage's One Day Builds: Famous Gemstones Collection!
7D8sXR0ozeE 1:24:21 Adam Savage's One Day Builds: Animatronic Bear Head!
0znjWy-Tr4Q 55:55 Adam Savage's One Day Builds: OneWheel Electric Skateboard Mods!
TjvX8GiYA5w 44:30 Adam Savage's One Day Builds: Monster Puppet Kit!
QWBFHoJrosY 35:49 Adam Savage's One Day Builds: Star Wars Acrylic Paints Rack!
l4Uew4czJ1o 41:51 Adam Savage's One Day Builds: Queen Elizabeth's Buzzer Bell!
cLrqogSndWs 1:09:07 Adam Savage's One Day Builds: Epoxy Headcast Helmet Skullcap!
DcNPYycz4nU 57:13 Adam Savage's One Day Builds: Mandalorian Blaster Paint and Weathering!
Cj0uLKibPW4 1:37:37 Adam Savage's One Day Builds: Mandalorian Amban Blaster Replica!
4ufQUvxpuAo 36:53 Adam Savage's One Day Builds: Car Engine Model Kit!
r0aae4df3Aw 37:18 Adam Savage's One Day Builds: LEGO Blade Runner Spinner Model!
W1DrW_f_vNo 32:11 Adam Savage's One Day Builds: Hyperdodecahedron Model Kit!
drLGYpPbrZg 53:36 Adam Savage's One Day Builds: Painting Iron Man Armor, Part 2!
2tQf7cruUMA 37:37 Adam Savage's One Day Builds: Galloping Horse Animation Machine!
CtGMBOqs0us 1:06:18 Adam Savage's One Day Builds: Painting Iron Man Armor!
HqUlPoxrzjM 40:02 Adam Savage's One Day Builds: Hellboy Samaritan Replica Finale!
ND4Y0gx4aTI 1:05:27 Adam Savage's One Day Builds: Iron Man Armor Boots!
zWaQNVGhuyU 30:56 Adam Savage's One Day Builds: 3D Print UV Curing Oven!
eJUbdNhdhkk 1:46:32 Adam Savage's One Day Builds: Remaking The Crown!
I5dH96JunrQ 55:55 Adam Savage's One Day Builds: Resin 3D Printer Station!
jmYBQSqXnQ4 47:57 Adam Savage's One Day Builds: Shop Dust Collection System!
of9qY62tWKo 40:53 Adam Savage's One Day Builds: Tabletop Maker's Vise!
ATfL9JQ--JE 1:03:05 Adam Savage's One Day Builds: Hellboy Samaritan Prop Barrel Rifling!
5NH1-3NBcOk 1:28:31 Adam Savage's One Day Builds: Micrometer Gauge Box Set!
jfUL73pRYq4 1:02:53 Adam Savage's One Day Builds: Studio Ghibli Diorama!
lUwMEjh2-78 1:12:07 Adam Savage's One Day Builds: St. Edward's Crown
9MLQEC2Hv28 24:51 Adam Savage's One Day Builds: Wire Storage Solution!
r93bWMzGo60 1:14:57 Adam Savage's One Day Builds: Custom End Tables!
Ic2S9ySxO0I 11:26 Adam Savage's One Day Builds: Lathe Collet Storage!
apeZO6C0ZeA 51:52 Adam Savage's One Day Builds: God of War's Leviathan Axe!
sbqytCVtQb4 21:09 Adam Savage's One Day Builds: New Drill Press Table!
4iIBa0TLe9E 33:32 Adam Savage's One Day Builds: Mercury Spacesuit Wrist Rings, Part 2
fM9FtG01wMg 45:11 Adam Savage's One Day Builds: Spacesuit Glove Wrist Rings!
80YLonnG-Lo 28:24 Adam Savage's One Day Builds: Knight Lighter!
WQA-x2eYn5E 19:06 Adam Savage's One Day Builds: Custom Painting Shop Tools!
8Sqo8njgt_0 36:20 Adam Savage's One Day Builds: New Lathe Chuck!
2UeghPJrUxE 29:12 Adam Savage's One Day Builds: New Workbench Lights!
gCva75a8ATQ 18:30 Adam Savage's One Day Builds: Electronics Tool Cart!
uY7zpvjLx4Q 1:17:58 Adam Savage's One Day Builds: Iron Man Mark I Helmet!
beGXa1TO6vo 1:47:53 Adam Savage's One Day Builds: Wookiee Feet!
Vt0RxHzEhws 1:16:24 Adam Savage's One Day Builds: Iron Man Mark I Armor!
WBWUxWoNI5o 1:23:25 Adam Savage's One Day Builds: Hellboy Samaritan Storage Display!
eBAWHbi4THs 39:39 Adam Savage's One Day Builds: Hellboy Samaritan Full Teardown!
N_tKi14mFrk 23:16 Adam Savage's One Day Build: Sticky Storage!
JYWfikf-3DI 24:31 Adam Savage's One Day Builds: Chewbacca's Bowcaster!
iuNjDzT6PWo 55:53 Adam Savage's One Day Builds: Luke's Lightsaber!
Ww7Ts37eN2g 42:55 Adam Savage's One Day Builds: Hellboy Samaritan Bandolier!
SutetC6n9so 42:04 Adam Savage's One Day Builds: Hellboy Samaritan Carrying Case!
4GehjvyAsZs 48:48 Adam Savage's One Day Builds: Baby Yoda Mod and Repaint!
wnMH1s36WXo 41:14 Adam Savage's One Day Builds: How to Make an Apple Box!
4JQ4O1SPHSY 56:14 Adam Savage's One Day Builds: How to Build a $5 Sword!
aLI-6SmkJLU 1:02:15 Adam Savage's One Day Builds: Han Solo's Holster Belt!
ziIKLeacBDo 18:52 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 4!
WfJtqnSexss 29:01 Adam Savage's One Day Builds: Restoring a Fabric Chair!
AumnIehXwyI 35:57 Adam Savage's One Day Builds: Staple Sorter and Organizer!
csu4jQNFfzA 32:44 Adam Savage's One Day Builds: Drafting Tools Sorting Drawer!
1NWAxkDZ9xs 34:13 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 3!
gygyNt2AnKA 26:24 Adam Savage's One Day Builds: Giant Swiss Army Knife Repair!
inQ16HamIWk 52:25 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 2!
lsXLGT5N2uo 1:17:55 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles + Vacuum Former Rebuild!
Pb1BpA7QN3U 47:41 Adam Savage's One Day Builds: Hellboy's Samaritan Prop!
HWnDC6KzLg8 28:19 Adam Savage's One Day Builds: LEGO Mandalorian Razor Crest!
chbZJAJ9y68 25:33 Adam Savage's One Day Builds: Miniature Shipping Container!
7aGfiNy9Oos 28:23 Adam Savage's One Day Builds: Table Saw Fence Upgrade!
BEVEYvAO3rI 21:32 Adam Savage's One Day Builds: Car Seat Dog Bed!
8PEc5blz_fY 21:20 Adam Savage's One Day Builds: Planer and Spindle Sander Station!
BbrQ4OX-1-E 32:29 Adam Savage's One Day Builds: New Cut and Sew Station!
XVEww6Ylw5c 41:23 Adam Savage's One Day Builds: Thread Tapping Guide Block!
EXaDxl60rTQ 54:24 Adam Savage's One Day Builds: Brass Watering Can!
OxkszitNWN8 17:46 Adam Savage's One Day Builds: Upgrading Captain America Shield!
lp85yyPSP10 43:29 Adam Savage's One Day Builds: Custom Workshop Apron!
ivaxOv25RaI 16:13 Adam Savage's One Day Builds: Letter Stamp Holder!
J170jeH0yXU 34:59 Adam Savage's One Day Builds: Foam Prop Safe!
BTGN5QNyA-8 42:41 Adam Savage's One Day Builds: Machinist Tool Drawers!
4MVxJNawefM 23:26 Adam Savage's One Day Builds: Tintype Photo Clamp for Gary Oldman!
m-ayU2GCQ_Q 34:50 Adam Savage's One Day Builds: Drill Press Modification!
_KfaSiD-7iY 38:35 Adam Savage's One Day Builds: Lathe Chuck Rolling Rack!
fru2G4bGL14 40:30 Adam Savage's One Day Builds: Lathe Tailstock Repair!
98MCz9gQaiE 32:41 Adam Savage's One Day Builds: Giant Nut and Bolt!
R-De84JfQBU 24:26 Adam Savage's One Day Builds: Spacesuit Display Stand!
eiQuBonhGiw 31:00 Adam Savage's One Day Builds: Workshop Filming Slate!
EWXcnVTY3pk 46:48 Adam Savage's One Day Builds: Air Tools Sorting Boxes!
ieDYlkJTNYI 20:38 Adam Savage's One Day Builds: Custom Pistol Whip Controller!
hIs3lioHoAo 21:44 Adam Savage's One Day Builds: Headphone Rack!
qE68mYkpZvQ 31:02 Adam Savage's One Day Builds: Portable Audio Recorder Rig!
oSHoo_thI2Y 37:24 Adam Savage's One Day Builds: Front Porch Table!
TsWG4nSi-Hs 42:45 Adam Savage's One Day Builds: Stitching Pony Clamp!
frwLir1A_qg 42:55 Adam Savage's One Day Builds: Making a Stable Workbench!
ritwf-_iOlg 1:08:55 Adam Savage's One Day Builds: Mini Chop Saw!
-xWGRVL-ExA 18:38 Adam Savage's One Day Builds: Mini Machine Vise!
65r_1TzJXaQ 50:07 Adam Savage's One Day Builds: Rhombic Dodecahedron with Matt Parker!
vOROGorDG6s 33:34 Adam Savage's One Day Builds: Fiber Optic Microscope Ring Light!
A3-9Vk_2be4 32:31 Adam Savage's One Day Builds: NASA Retro-Reflector Replica!
TT8PzFaZ0Zw 36:54 Adam Savage's One Day Builds: Lithium Ion Battery Charging Station!
I7U-QCTS9Os 39:29 Adam Savage's One Day Builds: Repairing Vintage Aviators!
nCrB0FnW__s 28:19 Adam Savage's One Day Builds: Movie Sword Rack!
0nLlCmZspVM 20:57 Adam Savage's One Day Builds: Tweaking the Table Saw!
yWRLz_r_d3A 33:32 Adam Savage's One Day Builds: Little Thwacker Hammer!
ZNwvjaIW-pU 1:00:10 Adam Savage's One Day Builds: Making a Die Filer Machine!
eVnWyEvT-KY 27:09 Adam Savage's One Day Builds: Lathe Infrastructure Upgrades!
PLHUcP8LfkM 1:28:25 Adam Savage's One Day Builds: LEGO International Space Station!
jPAGZpNZrwU 54:21 Adam Savage's One Day Builds: How To Build a Box!
z_Ti4GP0ntE 1:07:08 Adam Savage's One Day Builds: Refrigerated Cooling Suit!
ZjpPgv9XtJA 19:46 Adam Savage's One Day Builds: Thermal Detonator Kit!
SgCJeoDNmYU 41:21 Adam Savage's One Day Builds: Poker Table!
x8YTMPuvTGw 33:49 Adam Savage's One Day Builds: Dinosaur Skull Lamp!
Bw-ttd_EELA 13:54 Adam Savage's One Day Builds: Rickshaw Carriage!
TqWhLPsEJE8 23:21 Adam Savage's One Day Builds: A Fake Can of Beans!
8uGS11yuVyo 34:37 Adam Savage's One Day Builds: Portable Soldering Station!
JMv0PlMKkbs 20:54 Adam Savage's One Day Builds: Gaslamp Lantern Prop!
6ps4vbQ6Tk0 28:02 Adam Savage's One Day Builds: Workshop Hardware Storage!
3JRbGcyPUnk 26:11 Adam Savage's One Day Builds: Custom Beat Saber Hilts!
MP5pbJ6Ajjc 24:32 Adam Savage's One Day Builds: Space Camera Shroud!
kjxdWnUBmpU 37:16 Adam Savage's One Day Builds: No-Face Animatronic Mouth!
Dt6BQPNGGTw 41:52 Adam Savage's One Day Builds: Star-Lord Cosplay!
vqqEFEgx-ZI 35:00 Adam Savage's One Day Builds: Star-Lord's Walkman!
3jdF1yVBWdc 20:09 Adam Savage’s One Day Builds: Project Egress Apollo Hatch!
Srg47mr4X5A 14:01 Adam Savage's One Day Builds: LEGO Lunar Lander
Bh6C2O77EpI 14:39 Adam Savage's One Day Builds: Cave Museum Display!
YZV4A4Kl0yM 28:20 Adam Savage's One Day Builds: Hero Prop for TV Show!
2NYtPWhdhhQ 15:54 Adam Savage's One Day Builds: Iron Man Armor Stand!
7uS7A4x31PY 34:16 Adam Savage's One Day Builds: Scratch-Built Spaceship!
vCi5usulDIo 1:20:48 Adam Savage's One Day Builds: Swordmaking at Weta Workshop!
7oGslDjTnHI 29:33 Adam Savage's One Day Builds: Mortal Engines Hand Cannon!
6iIZ9rnS6HU 1:02:24 Adam Savage's One Day Builds: Eric Idle's Guitar Case!
ZfvtGrhYk0I 26:44 Adam Savage's One Day Builds: Kit-Bashing and Scratch-Building!
MxLOoriXkMc 46:22 Adam Savage's One Day Builds: Overengineered Bottle Opener!
GEhBPI2QVBI 0:34 Last Call for Adam's One Day Builds T-Shirt!
QCBcWm85gWo 15:33 Adam Savage's One Day Builds: Kit-Bashing a Robot!
BpaYqFd5S5c 0:48 Adam Savage's New "One Day Builds" T-Shirt!
WnJDYjbWCwI 1:10:53 Adam Savage's One Day Builds: The First Spacesuit!
AXzurpmc8SE 39:15 Adam Savage's One Day Builds: Everyday Carry Bag!
G7MDrUG4cws 36:59 Adam Savage's One Day Builds: 1000 Shot NERF Blaster!
9XB4Be6TjHU 55:21 Adam Savage's One Day Builds: Snub-Nosed Blade Runner Blasters!
JL3uZ88vA_0 19:54 Adam Savage's One Day Builds: Custom Workbench LED Lamp!
F48rk7h-GDo 35:33 Adam Savage's One Day Builds: Foam Ringwraith Gauntlet!
wl558EoTuEQ 30:19 Adam Savage's One Day Builds: Blade Runner 2049 Binoculars!
H9L3pX8zTPE 10:27 Adam Savage's One Day Builds: Cave Bathroom Upgrade
8qvlpRBeMNY 25:19 Adam Savage's One Day Builds: Foam Cosplay Sword!
BGlcF4Bpg78 37:01 Adam Savage's One Day Builds: Excalibur Sword!
dqmF2_h8icM 38:35 Adam Savage's One Day Builds: A Better Tape Dispenser!
9xpPXpnnCNI 39:25 Adam Savage's One Day Builds: Chewbacca and C-3PO!
1gJ4_Hc17cM 35:38 Adam Savage's One Day Builds: Chewbacca's Bandolier!
cwOXSXkW-uE 31:49 Adam Savage's One Day Builds: Custom NERF Rifle
-HfaLqmRO1k 21:52 Adam Savage's One Day Builds: Ping Pong Machine Gun!
M4M3I0nXEMI 23:41 Adam Savage's One Day Builds: Vsauce Glasses Hack!
G96YQQ7vW8w 20:26 Adam Savage's One Day Builds: Pedal-Powered Strandbeest!
7JrCejRYGAM 56:27 Adam Savage's One Day Builds: NASA Spacesuit Parts!
L9O3KWrvxKA 42:47 Adam Savage's One Day Builds: Totoro Costume!
0cQ91lO4pH0 30:03 Adam Savage's One Day Builds: Bear Costume!
qSr_qLkVqDw 19:08 Adam Savage's One Day Builds: Kylo Ren's Costume Gorget!
3KpdjGlHB30 12:44 Adam Savage's One Day Builds: Iron Giant Bolt!
ssxCQuv3KzE 13:45 Adam Savage's One Day Builds: Foamcore House!
U46Yo_6z_F4 21:30 Adam Savage's One Day Builds: LEGO Sisyphus Automata!
gcDCZ2TmTck 29:20 Adam Savage's One Day Builds: Hellboy Sword!
8UmBKWQ52oQ 27:53 Adam Savage's One Day Builds: Puppy Car Seat!
JYwNuP7cwJs 35:37 Adam Savage's One Day Builds: Making a Puppet!
jaVi06DaTk0 37:21 Adam Savage's One Day Builds: Star Trek Captain's Chair
LHITcrnGn1U 1:08:35 Adam Savage's One Day Builds: Cylon Models with Battlestar Galactica's Aaron Douglas!
CBHQ7lQGOf0 1:00:04 Adam Savage's One Day Builds: Cosmonaut Model Kit
QWiqr-lwYA0 1:07:23 Adam Savage's One Day Builds: Barbarella's Space Rifle
Et-JvYrQ84o 30:39 Adam Savage's One Day Builds: Custom Multi-Tool Belt Holster
O1--0DLJv-8 25:10 One Day Builds: Customizing Adam's Hero Sword
lPLvkrtqkJ8 33:00 Adam Savage's One Day Builds: Traveling Beaver Box
4sCReGjfZ_A 16:37 Adam Savage's One Day Builds: Han Solo's DL-44 Blaster
0JnTThZMJAg 13:12 Adam Savage's One Day Builds: Strandbeest Model Kit Fitbit Zip Wireless Activity Tracker
YXzxEqdvuIE 31:11 One Day Builds: Adam Savage Demonstrates Weathering Tricks Mophie Juice Pack Helium for iPhone 5
-tUHJnl8qPM 32:11 One Day Builds: Adam Savage Makes Something Wonderful from Scratch Sony NEX-5R Mirrorless Interchangeable Lens Camera

# Tasting History

hIKx0G4ghpA 18:44 The Noble Origins of Afternoon Tea
R-dPIBUvVC8 17:25 Byzantine Honey Fritters
SoFxrwuMuQs 20:42 Medieval Table Manners
iWlqxGQXZx8 20:24 A History of Ketchup
Kz-VpoNEWXM 17:38 A History of Tacos
zN1bzdxZdbg 17:59 The Absinthe Murder
OnTtA9z3ZeQ 16:52 The Day the Viking Age Began
FPi0RiAsegQ 13:13 What is Gruel?
KaTjWWJSei0 15:54 When Potatoes were Illegal
2ZcrScIlaQ4 20:26 The History of the Wine Glass
o9-rCHqPLj4 17:30 The Ninja Diet of Feudal Japan
CsjL0wBINnI 17:22 1950's Fish Pudding
S5bHN6UYiTA 13:32 Ancient Greek Breakfast - Teganites
0Uot4uVKrVk 16:56 Victorian Ice Cream & The Queen of Ices
MjjEjf3TI0U 16:24 A Tudor Salad for May Day
9NEyzsxjc2w 18:28 Anzac Biscuits from World War One
7hYBesohRK0 24:31 Dining First Class on the RMS Titanic
bbCD6zRHfbg 10:07 Punch Romaine from The RMS Titanic
qJ3gqoAaHG8 21:20 The Titanic's Crew Member Experience
GanHDpGstZI 20:18 Titanic's Second Class Experience
ob-TBojkaxw 10:12 The True Story of Titanic's Baker
JbmHZbTpoDY 19:24 Dining Third Class on the RMS Titanic
SGf_0_2Ji5I 21:08 Medieval Irish Food: Peasant to King
MNIrP_aqwQY 11:18 How to Make Coffee a Better Way
ux5VjS7o2gA 16:54 How the Doughnut got its Hole
KTVPV-15GL0 16:10 Hardtack & Hell Fire Stew
q3LdGNl2veo 17:55 Medieval Mardi Gras
2-4SOrYtTS4 15:10 Secret Foods of the Spanish Inquisition
AuzIBemYVaQ 9:29 Victorian Vinegar Valentines
x3ku4JFvPx8 16:33 Ancient Rome's Naked Fertility Festival
UolBvOIodEg 18:35 Icelandic Volcano Bread - Rúgbrauð
16Ityys4dx4 17:14 Feeding a Templar Knight
Pl55tJHadZc 20:19 Samosas of Mughal India
GSGNiDjILiU 13:19 Ancient Rome's Wonder Medicine: Cabbage
B0-TCPUNdbI 22:00 1600s Chicken & Cherries with Ken Albala
Mda8Jetfnx8 16:34 Hogmanay Shortbread from 1779
BjyRlYO6MDI 1:10:07 1 Million Subscribers Live Q&A
Oy17ef4cEL4 14:26 Quick Panettone: A controversial recipe
JJnOtxBQEgo 16:09 A Bakewell Tart from World War One
CRH5DODIgE0 15:12 Victorian Mincemeat With Actual Meat
9pNb7iQXhdU 10:34 Smoking Bishop from A Christmas Carol
xtOhZEkyY2I 14:33 Aztec Sacrifice & Pozole
40uw6VkWpaI 15:41 The Incredible Spiced Wine of Ancient Rome
h2tY_qqTk-E 18:08 What did Genghis Khan eat?
htARnZjxQGs 14:58 Ancient Babylonian Lamb Stew
sIFlPc-TW94 14:24 The History of Pecan Pie
-__hMt0lKPc 10:03 Tasting Forbidden Flavors
EajBNo-rBJY 13:55 Ancient Roman Steak Sauce
oQVCBWZSdnY 14:39 1915 Yorkshire Parkin for Bonfire Night
4QGq4XpavQ8 17:17 450 Year Old Pumpkin Cheesecake
-ghf587Nihw 9:27 Johnny Appleseed: American Weirdo
Y3R_ljOuptM 16:19 Why Vampires Hate Garlic - A Transylvanian Recipe from 1580
tCD_eMscy0g 16:21 Apple & Cheese Pie from 1553
4Glo4KM5Q_M 11:35 Weird Wedding Traditions & the Wedding Sip
WdWcPvZg6Wc 17:57 Making A Wedding Cake From 1769
mdOPg-4_R60 9:21 Gladiator Gatorade
H3KANWtAHDc 16:45 Feeding a Roman Gladiator
dR846JS3zbA 18:22 Viking Blood Bread
QiTLyQjHtSw 11:25 Captain Kidd's Punch from 1688
jlhkXj4miZI 17:14 Feeding A Medieval Knight
fH25yRShofE 14:25 The Lost Episode of Tasting History: Prince Biskets
_cFCvZL-JGA 11:04 The London Beer Flood of 1814
D_FabMorrMU 17:31 Ancient Egyptian Tiger Nut Cake
-tmAAlfTOGY 14:59 Fannie Farmer & the Modern Recipe
LcnZAAoq5mg 11:28 The Sweet History of Lemonade
de93oyukEyY 15:59 Escoffier's Kitchen Revolution
TQmA7RyFr_g 14:35 The Cookbook of Nostradamus: Prophecies in the Kitchen
BhrmGARFEVc 6:46 Drinking History: The Man in the Green Hat
IZLYPbJaefA 17:59 Egypt's 28 Ingredient Hummus
FNg71yR7b-E 15:24 Pirate Guacamole & Bumbo
PIxN-pr3g7c 19:11 History's Most Expensive Spice: Saffron
h9xX78pauXQ 19:21 Japan's Edo Era Noodles (1643)
4eFHcfnWc70 19:26 The Talking Cows of Ancient Rome
BR7fywQ-vUE 21:28 A History of Ice Cream | A Recipe from 1789
qqAk9-00Z6o 16:19 Coca de Sant Joan & the Fires of Saint John's Eve
JLbej0adpKs 14:51 Fried Chicken Face-Off: 1911 vs 2021
Mbaz5P7kHfg 17:51 Toad in the Hole & the Cows of Scotland
hZFfs3sJamI 19:43 Adobo: Filipino or Spanish?
uNwXMvp9sCE 16:46 Ancient Greek Olives - Gifts from A Goddess
h6XvMKdD2tY 19:05 500 Year-Old Pizza VS Today
37O-by0BthQ 14:38 Korean Flower Pancakes - 17th Century Eumsikdimibang
zk0FUS3Oq8s 17:45 An English Manor for a Bowl of Stew?
giPXpKy2lQ0 18:52 Baking An Ancient Roman Cheesecake
NvQkpdFjqJY 16:29 Ancient Roman Honeyed Pork
k6VBdGAEJyc 17:12 How To Feed A Roman Emperor: Vitellius & the Year of 4 Emperors
jHpkqBFKmvA 3:27 I Quit
qj5vg2fjOtk 18:52 Feeding a Roman Legion | Posca & Laridum
DvBNqLUuHLI 19:08 Dragon Heart for a Viking King
FVIng1x_6BU 17:51 Fabulous French Feasts of the 1700s
n7T5abyBiUg 15:48 Queen Victoria's Easter Cake
S8KpFs1CHgw 19:28 Irish Stew From 1900 & The Irish Potato Famine
MaYPEvDuo1I 17:21 Aztec Chocolate - Blood & Spice
biE0ifWNfU4 16:49 Making Ancient Egyptian Bread
X-L2fVjnHFE 16:21 The Legendary Medieval Cockentrice | 1st Anniversary Episode!
RJsjHSyWlPE 1:17:50 Tasting History 1st Anniversary Q&A
0Ljm5i5N6WQ 17:38 Semlor: The Dessert That Killed A King
An6myivFE8A 17:10 Ancient Nian Gao | Lunar New Year Cake
oPTdSMOQRnY 18:31 How to Eat Like a Pirate: Hardtack & Grog
r38ZpdaAX8c 16:52 The London Gin Craze and Beyond
PhbkD0CuVtc 17:33 Béchamel & the Death of Monsieur Vatel
qtmOdxEVytA 14:42 Ancient Roman Fast Food Restaurants
zz0y1d6IIpY 18:21 Skinny Monk vs Fat Monk: Medieval Rule Breakers
7IYYhoO-hiY 18:04 A 4000 Year Old Recipe for the Babylonian New Year
7bsHOxQtBW4 15:47 Eggnog: A Christmas History
hNIvtkADcCA 14:08 Making Medieval Gingerbread
mvURMFzcIqc 16:26 Celebrating Saturnalia with Cato's Globi
s2JyN7JF8bs 19:35 Unwrapping Aztec Tamales | The Tamale Wars
2qauMSeqWpU 18:57 Figgy Pudding | A Victorian Christmas Tradition
zKa5GRu4LwE 16:16 What Did Medieval Peasants Eat?
FF0HnhuzGak 16:03 Pumpion Pie from 1670
1MAB-VVqjOE 18:47 Making Medieval Mead like a Viking
D-QHd4_1geE 18:42 Silphium: The Lost Aphrodisiac of Ancient Rome
1hHYk2evUZQ 1:00:31 Election Cake with Q&A
tpWdzXJObZ0 12:24 Soul Cakes & Trick-or-Treating
M2bh80b40D4 18:47 The History of Sugar Part 2 | Victoria Punch
ehVesZ0JS8Q 17:32 The History of Sugar Part 1 | Medieval Arabian Pistachio and Rose Candy
o4YmvQt29ko 17:46 Scappi's Renaissance Herb Torte
oqQzWg9pXmg 15:57 Spartan BLACK BROTH | Melas Zomos
uA98IonYvb4 15:40 Precedella | 1500's Pretzels made with Wine
eXWYmTf93Ms 1:02:28 Making Baked Pumpkin "Doughnuts" & Live Q&A
2FpEEb44suM 16:55 Yuanxiao from the Ming Dynasty
NPxjQetKPoo 15:26 Quesadillas Cernidas & Aztec Maize
luz_AqzDkKI 11:10 FARTS OF PORTINGALE | A Shakespearean Treat
6LynenQ5h2Y 16:56 The Strange Flavor of Parthian Chicken from Ancient Rome
CilkAVJLBUY 16:47 Loseyns - Medieval English Lasagna!
spjaUo2J4Nc 44:01 Tasting Canned Haggis & Q&A
SD3WKbXhm6M 15:13 The Wonderful History of Pancakes
3xZ0QJQpn1g 13:20 Payasam | Medieval India & Dessert for the King
XtkAU4juIZU 13:56 KYKEON | The Drink of Greek Heroes
IB1C0BL0ZlA 13:28 Civil War Bread Pudding
9apP8NYt9LA 1:06:29 Tasting History Q&A #1
LYBccRqsv6M 17:31 Making Hippocras at Home | Medieval Spiced Wine
Sw2qrt6tOKw 12:18 The Bread of ANCIENT ROME | Pompeii's Panis Quadratus
beBQgxdu2eY 10:50 The Poisonous History of Tomatoes | Pomodori Farciti all’Erbette (1773)
DOMlXRxuwlM 13:59 A Dish for the First 4th of July... and why it should be on the 2nd.
upos2b7-O7s 15:31 A Tart to Topple a King - Lombardy Custard
paHt8qHMo7o 1:18 THANK YOU!
A--e0axoGxc 13:21 Oldest Cookbook in the West | APICIUS | Ancient Roman Mussels
5S7Bb0Qg-oE 16:02 I finally made GARUM | Ancient Rome's favorite condiment
2OFUZ_hd8_k 13:15 Cooking from THE FORME OF CURY: England's First Cookbook | Galyntyne Sauce
CQksGGtDB2w 13:12 History's Fluffiest Dessert! - Everlasting Syllabub
TdvRfPCrR3A 16:46 How to Bake Medieval Rastons | The Life of a Miller
w36CYveyCxU 14:42 The Softest Bread In England | How To Make 18th Century Sally Lunn Buns
NhSj_VMjmUA 12:13 Anglo-Saxon Oatcakes - How Not To Burn King Alfred's Cakes
J4sgFGcU9Bs 12:58 Making a Medieval TART DE BRY (Brie Tart) | Brie: The King of Cheese
yYo5QdWMXcE 0:36 Tasting History with Max Miller
_o7Oq-OjKu8 8:45 Making Medieval Fig Spread - Rapé | History of the Fig
bN4Ai2AqNCc 5:46 Cooking A CAPON Dish For A Medieval King - Sweet Measure
rQT-aY9sTCI 7:49 How to Make a MEDIEVAL TRENCHER - Torte Bread
ENJbVgjFwF0 10:12 What does a 1920s BIRTHDAY CAKE taste like?
eKH7pP102c8 9:00 Weird Cures for the Black Plague - Candied Horseradish
jtCKA_NeEQ0 7:37 Apple Muse for the Plague | The Four Humors
ugk4AW8V6_c 9:09 Cooking Medieval Dessert for Lent: Bruet of Almaynne in lente
ZlMhZvOX2ps 8:18 Making 400 Year Old Buttered Beere
GCCJ2Qpr1nM 11:29 Baking A Medieval Cheesecake - The History of the Sambocade
vlQZ3NPnoLk 6:49 How to Make Medieval Cheese

# Sally Pointer

sXYo0t_W-hs 4:34 Harvesting Lime Bast: part two
38F2rsfXtMM 22:44 Making a Tasselled Belt for a Bronze Age outfit
4VSocZCxl8M 4:06 Stinging Nettle Friendship Bracelet Challenge
7g4SLai6US0 5:19 Hedge-bothering walk filmed on a Blackview phone
x-oVz8OZCJ4 5:15 Harvesting Lime Bast for Cordage and Basketry
ZqDPJ3jB7vk 9:23 Make an Anglo-Saxon style Ring Pouch
TdaHQrQ2FPg 23:16 A Rummage Through My Fibre & Cordage Stash
4fKKLOUNOHU 8:42 How to 'Run a Heel'. Reinforcing knitting before it needs darning.
aztSSF78-ts 3:49 October Update 2021
idsZ-h1HArU 16:09 Making Simple Prehistoric-style Leather Shoes
8TKsjPX8wxs 9:15 Palaeolithic Crafts at Creswell Crags
Mkwu9j8epXE 14:50 Minimum Effort Stinging Nettle Fibre
OBJfAb-Z7Bk 24:06 Making a Palaeolithic Beaded Tunic
IIbU6poSaW0 22:28 Make a Lavender Stalk Basket
JInRLAfgVqI 14:45 Stinging Nettle Sprang Bag #3nettlechallenge 2021
vixSpsIb1bg 19:03 A 'grene dorge' Fingerloop Braid Hatband
jw-OT_aMsGE 7:05 Preserving Lime (Linden) Leaves to use in Dolmade Style Wraps
OBM9GqHTWEk 4:54 Three Nettle Challenge 2021
sMp3YFgON0I 9:02 Foraging for Wood Ears
MSbm1pSIWvs 22:48 Is the Nettle Fibre Ready to Harvest Yet? (May 31, 2021)
D7VKbLHIwnI 15:20 Turning knitted Stockings into Sleeves.
GYQ38RGWyYc 5:56 Making a hat display from a wig stand
XkKsnkfo228 4:34 Make a Cone Distaff for flax spinning. Recycled materials.
JrU7Lmx5lbo 13:15 Stinging nettle, wild garlic, poppyseed and acorn flour bread
nzxKRP3Wpr8 1:59 A quick update: April 11, 2021
1VS-vsuEjUY 30:39 Making a Twelve Strand Braid Belt
WmNLhkHhWYM 35:50 Palaeolithic Hair-net Experiment
z-gIGbhViD4 16:07 Vintage Inkle Loom: making it work & exploring the history of this style
UtGQgWaxiS4 4:21 Stocking Caps, how they are made & how to wash them
f6rNS_lgqWI 4:26 Spindle Tree (spindle berry)
OOal36EBBbM 20:28 Oak trees, Acorn flour & dye
nZ7uP0hMupI 12:34 Autumn Equinox walk 2020
MceuEIhJcDQ 13:56 Hedgerow Hot Toddy Syrup
TOOdGs7HJ1k 16:52 Horse Chestnut, natural 'soap' & natural dye
whVgvyo0uuI 11:42 Making Damson Hoisin Sauce
S04Ic3CLQ2k 26:54 One Nettle Sewing Thread Challenge
tTs6YfVQfJg 0:49 Nap Raising with a Fuller's Teasel
efHLsyyqbwE 18:07 Prehistoric Nettle Textiles: part two, update on progress
cygarW3B94E 8:47 Making a Bronze Age Egtved Outfit: part one
gHg-cQoVxfg 17:08 Setting up, improving, and using a toy Weaving Loom
Suwzcaf2WtU 7:16 Preparing Wild-crafted Plant Fibres for Storage
k_bVVwxdwxA 6:54 Make a Herb Vinegar Hair Rinse
5Eq7fyLMu9I 29:57 Prehistoric Nettle Textiles, scraping and splicing
v7AUf0PG1kg 17:22 Burdock & Bramble Coil Basket: part two
Z6c2wmIUpvM 19:28 Burdock & Bramble Coil Basket: part one
dxZC7rvOQJc 14:04 Preparing Burdock for use in Basketry
8inVU_BmvYM 5:28 Midsummer morning, searching for fairies!
wR6WZyFZb5I 21:02 Looped-around-a-core "Tybrind Vig" style nalbinding in lime bast cordage
XF6USicwYNs 2:13 Using a replica bronze Cupping Vessel
muoODo4sFq0 10:14 How to make Pickled Ash Keys
8jAew50DZ2w 28:00 Making a Warp Weighted Loom, Part Seven: Starting to weave.
q43ZxJLs1qE 21:11 Making a Warp Weighted Loom, Part Six: knitting the thread heddles
KAZ_4WcxYYk 20:21 Making a Warp Weighted Loom, Part Five: attaching loom weights and chaining the warp
SFbHecxFJfA 6:50 Foraging for Hop Shoots, what to pick and what to avoid!
9X3xtoK7cHA 30:30 Making a Warp Weighted Loom, part four: a tablet woven starting border and test warp
DqX1YbI-KsQ 14:21 How to draw an Interlace Pattern Dragon
gFN6fRd0qNs 16:14 Making Sourdough Saffron Buns for Easter
ggihfhUs27U 9:49 Tie-dyed & 'Tipsy' Walnut Dyed Yarn
xFP2KyuUjKc 4:01 Make a Rainbow Magic-fold Journal
qG2OjuJqEzg 13:05 Make a tasty Nettle Pudding
HD5T6kj8BZU 14:36 The "Crescent" Patent Darner. An Edwardian aid to efficiency?
fye1ccacE4U 2:56 Hedge-bothering for Hop Shoots & Nettles
Vk7OzyKhlCc 7:06 Making a Warp Weighted Loom: part three, pegging it together
cuUzPcuWATo 11:00 New Puffs for old Powder Compacts
BK-tprKgMaw 3:14 Making Froglets inspired by The Clangers!
qelKILeE9s8 6:09 Making a Warp Weighted Loom: part two, cutting to size
XzZBHSB0DFs 4:47 Making a Warp Weighted Loom: part one, choosing materials
QJ-Jjn7sBxI 6:44 Mending Knitwear: Laddered Stitches
tCQzaODgUo0 20:15 Vintage Sock Machine Intro (making silk stockings)
2i7ONQpSads 3:22 Little Knitted Pumpkins
HsV-qheD5-c 23:10 Make a Bronze Age or Iron Age Sprang Hair-net
MJ7OncBeVAg 13:45 How To Reshape a Tudor Knitted Cap
ESsnU-ECYnw 15:12 Iron Age Dyes: Woad, Weld & Madder
QANdOXLcjvo 11:08 Nalbinding at the Weald and Downland Museum
3FukAjL7aXE 6:42 Collecting Whitby Jet & Kimmeridge Shale for prehistoric jewellery
YiYmjV2dNb8 9:07 Making Oak Gall Ink with Alyia
YYpcfzd4ov0 11:49 How to make a Corn Dolly
HmXqSlxLN_Q 16:21 Simple Looping: the oldest form of Nalbinding?
ioruvT-qYK0 24:58 Early morning hedge-bothering, 24/7/19
fBdkXN0nq74 5:08 Making Nocino, green walnut liqueur
veuWj8JsLoM 8:53 Natural Plant Dyes: Weld
vPxJpugApEY 18:47 Making an Antler Needle Using Flint Tools
upN3lkBaYVA 2:29 Casting a Bronze Pendant
0grnnvmpn1A 13:56 Basic Nettle String
2qltFSRG3Vg 6:15 Roman Cosmetics
fBnBdnrICQg 20:51 Making a net bag for a Roman Legionary
3SJdWjSEN6g 8:12 Preparing bramble fibres for cordage.
3xrgvf6KrRY 7:46 Last Burdock forage of the season
Z34hxQsEMrM 6:59 Making String from Rhubarb!
vHaYLVoP7s4 5:56 Making Thorn Pins
ZTGLUDEEWko 11:27 Nettle Fibre Processing
62PvfIR0xDg 4:42 Simple Cordage Instructions
ebYZidfmn-0 7:55 Making Natural Cordage from Horseradish

# Pellwolok an Gernewegva

hST4dBO3u8s 31:05 An Mis 59 - mis Gortheren / July 2022
NbNKeTKQoh0 31:21 An Mis 58 - The Month - mis Metheven/June 2022
tX0PGd9OXvI 31:47 An Mis 57 - mis Me 2022 (May 2022)
kp-H_njhc98 14:50 'Bys Lowartha' (Gardening World) Episode 2 (Gwenton/Spring)
Lsowfu5IUPw 31:43 An Mis 56 - mis Ebrel 2022 (April)
sfaaIvV8hyA 3:11 'Gas vy a'm growedh' (Lay me down) - Skwardya
mQZHscVD_L4 32:58 An Mis 55 - mis Meurth 2022.
y7NwRVV0P3w 32:45 An Mis 54 - mis Hwevrer 2022
IK6cAOHSGKw 32:15 An Mis 53 - Mis Genver 2022 / January 2022
jAQVxCEtxiQ 30:31 An Mis 52 - mis Kevardhu / December 2021
ekEedaK7Yiw 2:22 Neyj vy bys dhe'n loor / Fly me to the moon (Cornish version)
jeLvFsFyIhA 8:24 'Like a Buried City' - promo 1
WvHNt_qOKkU 29:49 An Mis 51 - Mis Du - November 2021
VLwenMVn5MQ 12:42 Bys Lowartha - Kevres 1 - rann 01
lM5fme6fhi4 29:22 An Mis 50 / mis Hedra 2021
tJhGVZakyZs 21:22 An Tonji 4 - Cornish language music show
xSpFs0pvGhs 32:58 An Mis 49 - mis Gwynngala
qFx0hr2Ou38 30:44 An Mis - Derivas Arbennek: Pan dheuth an bys dhe Gernow
wqjy31E3qf0 23:11 Skwardya dhe Wooth Kernow 2021
bE_Q7gYLzD8 35:19 An Mis 48 - mis Est 2021
65u_bPtWa7k 1:10 bys lowarthoryon crowdfunder
MVt6X4OyiM4 30:02 An Mis 47 - mis Gortheren 2021
nRZQbc9hc10 0:21 GoothKeltek2021 - argemmyn
A7ni6KGBjug 36:59 An Mis 46 - mis Metheven 2021
Jk9S7vt4T1s 4:44 Tansys Golowan Sen Stedhyan
jtsesAy0BSk 0:38 Howard Curnow
QkIafpJCmHE 32:23 An Mis 45 - mis Me
PVE5sAUf5kU 19:39 An Tonji 3
LrRJOxlyRCQ 29:14 An Mis 44 - mis Ebrel 2021
3huASEi-wFE 32:48 An Mis 43 - mis Meurth 2021
ES9x_XR0h8s 34:00 An Mis 042 - mis Hwevrer
2MLxi4qn344 4:57 'Trelawny' - Skwardya
_xumHvG-iZk 22:55 An Tonji 2
PTkosdVrgqY 32:55 An Mis 041 - Mis Genver 2021
TvG5r_d1xeM 30:34 An Mis 040 - mis Kevardhu
bRUL7MmIcq4 33:31 An Mis 039 - Mis Du 2020
2tbWSy0SY1M 19:24 Joan Petchey - Elowen
BkCeQ3Wl3EM 23:10 An Tonji 001 (The Sound house)
3kJ2UYCSRp4 35:15 An Mis 038 - mis Hedra
HvMTJI40Bdk 0:19 Remembering Joan Petchey - pioneer of spoken Cornish revival
tJ3NkvF84jg 0:14 Joan Petchey 100th birthday - Julian German
rG8whm7dgbo 0:21 Joan Petchey 100th birthday - Grand Bard
6w4O5OCGIY0 30:50 An Mis 37 - Mis Gwynngala 2020
KAsk7fUBQdg 30:08 An Mis - Mis Est - AnMis036
hq_KKbV0kVo 35:22 An Mis 035 - mis Gortheren
Kz2FhpXZOUI 1:34 My a gar... esedha...
Tho_CwU6y3g 30:45 An Mis 34 - Mis Metheven
jSrN64FEYp0 0:10 My a gar an mor - Malcolm Bell
M2iZQn1JVp4 2:58 Kernewek y'n Chi - An Karrji
Dq6tFyGG0ho 29:35 An Mis 33 - Mis Me 2020
1nD6VHPriK8 30:06 An Mis 032 - Mis Ebrel
RXtjWJp3IqM 3:52 "Omwith" - Graham Sandercock
17D3tdvpjoo 8:25 Cornish in the House - 'dydh pobas' (baking day)
A7YwXxxSP_M 2:39 Cornish in the house - Goskeusel an lugarn - The lamp-shade
a7ThtBY4Ocw 2:39 Cornish in the House - 'Diank am gweli'
Pv0DJ3WjnfA 3:41 Cornish in the House: Mr Movyer
af0s5f6pyiU 2:50 Cornish in the house - Tidying records.
zGKonqZLW8A 3:25 'Gortos Tre' (Staying Home) - gans Matthi ab Dewi
1E_8o3wIVV0 4:19 Cornish in the house - Gardening - Lowartha
wKhYRwI39js 1:52 'Ponn' - Dust
-KQerOL4Lfo 4:39 Cornish in the house: Making tea
CY6ZUuk70ZQ 4:35 Cornish in the house - Washing hands
hvnIOVEJot4 35:13 An Mis 31 - Mis Meurth 2020
IxVOIyTlAtQ 32:07 An Mis 30 - mis Hwevrer
4gKEtfJIHKI 30:25 An Mis 29 - mis Genver
WYCQlnSewXc 10:19 Kan rag Kernow 2020
u8AwFZ58CGQ 30:05 An Mis 28 - mis Kevardhu
pMhx4zKXdO4 31:05 Jerry hag Erel 2
MgfqJeniYjU 32:31 An Mis 27 - Mis Du
Uz1a6DJeORg 26:05 Jerry hag Erel - 01
zIXaFxkUuxc 35:28 An Mis 26 - Mis Du
TPpy8Q3TNSk 43:37 AnMis025 - Mis Gwynngala
1rz85vods5M 32:56 AnMis024 - Mis Est
loNp_fyr6BE 33:10 An Mis 023 - Mis Gortheren
GMA-F6FKG14 43:40 An Mis 22 - Mis Metheven
hPTMBGMYAD8 2:22 speakcornish19
j4hDlYuxcVM 29:19 AnMis 021 - Mis Me / May
pEsG6tE7MRs 1:06 The Cornish Language Fellowship / Kowethas an Yeth Kernewek
_RpVpyonWzM 5:00 Cornish Language Plan 2019 is accepted.
UNwn9KfYmMo 32:09 An Mis 020 - Mis Ebrel
3Fqz1sEJenA 32:22 AnMis 019 - Mis Meurth
bH2kWCcBxc0 4:41 Bramm ha Bramm 2
FefgSevflVM 12:48 Viaj an Delow
TCy5l4Ok3KE 33:42 An Mis 018 - Mis Hwevrer
DJn_KZw7WfM 45:32 An Mis 017 - Mis Genver
xyh0rdu2cRk 0:48 Cornish Language Weekend 2019
zaEj2oD2rWY 27:27 Jaqi ha Jerry 2
cxZXIAGey6Y 0:33 Yn Kov Stephen Gainey
yWCAbXAYzbo 36:22 AnMis016
sKPoZxjmo6g 30:27 Esedhvos Morganow
pokwOfUWqz4 30:51 AnMis015 - Mis Du
p9rfNkL46JY 32:14 An Mis 014 - Mis Hedra
x_UgtFKQuWo 35:12 AnMis013 - Mis Gwynngala
mltwoDJLE5Y 31:12 An Mis 012 - Mis Est
VxJA5lAbg2k 30:08 AnMis011 - Mis Gortheren
3oikqiJNX2I 28:25 AnMis010 - Mis Metheven
-FckxK3Tc_g 0:11 George Eustice MP
Q-d-RZhLODE 31:05 An Mis 009 - Mis Me
wpxenPf6G2w 26:37 Anmis008 - mis Ebrel 2018
2t2VHovxkkc 23:05 Jaqi ha Jerry 1
FDA_kP66Af4 28:37 An Mis 7 - Mis Meurth 2018
F7GV8o-Wqbw 27:11 An Mis 6 - mis Hwevrer 2018
yfFCrkLGzxQ 34:20 An Mis 005 - mis Genver 2018
bsVoZaiIYBk 4:10 tresor rowan tree
wwWSrsuo9UQ 27:12 An Mis 4 - Mis Kevardhu 2017
m5sSQW1ujyU 23:10 An Mis 3 - mis Du 2017
oqfJVbG8K4Y 20:47 An Mis 2 - Mis Hedra 2017
HPmZYBTXUGk 2:39 Kresen Kernow
fvJYqvKzZQ8 6:27 An Mis 1 - mis Gwynngala 2017
aQRXRYnUf1Q 14:21 rosya03
7oipzomINU8 23:28 lorient2017 ENGLISH
DJG8RU6cHjM 23:54 An Oriant 2017
t_1EzCsq9Lw 0:44 Dhe'n Arvor / To the coast
KpjTGpMcnRE 1:40 Gool An ikyon
6vARZEZKk3Q 1:36 geekfest2
J1omcf8w470 0:23 Mernans Spock
DLa6UMrZRs4 8:38 Ni a vynn mos y'n tren
UKH5sLLwX84 10:18 G&S An Hwedhel
G5GkypWgxzg 1:21 George ha Samantha rag seythen #SpeakCornish
lesAwe_zL7M 11:03 solempnyans an gov
70fwGphbztg 0:18 speak cornish in 'Kowsva'
4kVjWipsd84 6:15 Dydh Musi 2017 / Mazey Day 2017
5XYHI-6RcHk 11:42 Rosya: rann 2
P-Qlv15TM7I 0:14 Business Cornwall speaks Cornish
akZnCjlQbbo 13:13 Rosya: An Fordh Goth
e_nS8UyqmLU 0:08 Equality for Speak Cornish Week 2017
4gDRQ5dW5Iw 0:08 Mind the seagulls - Speak Cornish Week 2017
AxHgq__Rd5Q 0:27 Speak Cornish with Gin
NtjwIhJv9lQ 0:30 Speak Cornish at the Chocolate Factory
NAdrlR8PzUA 0:49 Speak Cornish Week - on the beach / War an treth
ukr3-qd0fEs 8:20 dasserghi dew 01
-hHLi1Kk5ok 27:38 dasserghyans klappya
TQEyY_PFN_Q 9:04 Dalva an Yeth 2017
0arzUimI104 10:03 Dasserghi (fylm onan) heb istitlow
Z-M6k6316ro 10:03 Dasserghi (fylm onan) WITH ENGLISH SUBTITLES
F2diSuzdrrc 14:15 Pennseythen Gernewek 2017
8HBMZ1zA1xc 7:18 George ha Samantha - 'Nadelik'
_nTDhkRccs8 4:51 Keskusulyans Mebyon Kernow
ctuMN57gTaI 14:36 Kensa Keskan Lowender Peran 2016
wHvx3_GnoaY 3:23 Protest erbynn Kernans
9ynq2HiZfCk 3:06 Bretonyon yn Kernow
SDzET-dSnco 5:25 Dalva an Yeth
9SzVoghYC1o 5:28 Skians 2016 rann 2
NBnA9awnfVI 2:47 Skians 2016
3qMwFN1k_MM 33:10 PanCeltic 1984 Teach Siamsa session
qjJnCodDVm4 2:01 Keur Heb Hanow
tmHSUKyx37g 5:35 Cam Kernewek on RTE in 1982 at Killarney PanCeltic
m67g3_B4a_w 25:11 Kernowpalooza
xEz8SaQtUJg 58:11 krena
2m-Teyq7HbI 25:04 Cornish language weekend - rann 1
_-EK5GI3VTo 29:15 An Bennseythun Gernewek 1996
6q71U85p7Ow 22:42 An Bennseythun Gernewek 1991 Rann dhiw
4qzowCnMn5c 25:05 An Bennseythun Gernewek 1991 rann onan
zIPg_NnldAg 11:59 Skwardya Byw - rann 3
JFac8af6-R8 19:12 Skwardya Byw - rann 2
ZA7OdUcv-c4 19:18 Skwardya Byw - rann 1
O98zydPvQTs 4:26 Benjad a gan dhe Dewyn Bleustri
FCbto7wD-zU 0:45 Gol KesKeltek an Oriant 2015
DdKO4QlGDCM 20:33 Graham Sandercock plays at the Cornish Language Weekend
BAh3gkTcFaA 2:01 keur heb hanow
MhjICIv0atw 2:51 Hanterhir - "Whatever happened to Whitford"
txnsyXlyi3g 0:41 Argemmyn Gwydhyo RanG
s4Jr_sHpCpo 2:41 Peboryon
31Ks1xEWnNg 2:24 Cornish Language on Great British Railway Journeys

# Archif Teledu Cymru
leb645Xu6uo 9:54 Captain Murderer - Emlyn Williams
Ga8tNxnHjt4 3:39 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
F7G9Un6NXeY 2:45 Seatbelts To Become Compulsory - 1982
OfODO9_46EI 1:10 Restoration at the Screen and Sound Archive
YwE8HRn1Hlk 3:22 Beth sydd ar y Lleuad?
p4XGZpcGGPE 1:42 Old Tom, Barry, 23 November 2000.
P7U3uKQSXa8 5:29 CALAN GAEAF - RHAGWELD MARWOLAETH
jjdtl2T6s1k 6:07 COB PORTHMADOG
8Cst_9m-rT4 10:23 Trailblazers - 1989
EjjvbdbSHEw 3:52 The Strongman From Newport, 1968.
uHLH3lqWalY 1:32 Heatwave 1976
XUJSODg81MQ 4:48 What do people think of the EEC - 1984
lYLkbFmv9wA 4:57 Beth mae plant yn ei wylio ar y teledu? - 1962
rQmjGlHT7g4 1:48 Newport Ghost Story - NEW SERIES OF WALES ON TELEVISION - STARTING MAY 23d on ITV WALES
TGqt6aeHVYg 3:53 SPORTS TABLE FOOTBALL - New Series of Wales on Tv - starting May 23rd
CIkNOLrDYng 1:48 Guildford Crescent Baths - Cardiff - NEW SERIES OF 'WALES ON TV' - STARTING MAY 23d
SxUrHORkh3A 3:16 Gorilla in Caerphilly - WALES ON TELEVISION - NEW SERIES - MAY 23d
U10qGwR2Dkk 1:21 Bara Lawr
Poxi1veht6U 12:19 ECETERA ECETERA, 1969.
ksVqmC4u5x8 1:57 Roald Dahl Day
iBz9ugqnNE4 2:38 Ayrton Senna tests a McLaren at Pembrey Circuit - 21 September 1988
nitlc-XYa6I 3:15 Ryan Davies - 1965
5ui2rFSP6AM 2:30 Capel Celyn Revealed, Wales At Six, 1989.
q_P323GWpPc 1:25 Ian Rush arrives at Juventus - 1987
8Xd6ZrhY-cM 5:22 Roger Moore interview 1963
g2zHpWMN758 2:20 Penscynor - 1985
S2hPg-SkVcE 23:41 Gwrthwynebiad i gloddio Glo Brig ym Mrynaman - 1972
EUOolXqCdZk 1:29 Ford Escort XR3 - 24/11/1980
2EX6KGcy7jE 3:28 Potted history of St David's Day Festival
JlF5i2Aw__U 3:09 Tell Laura I Love Her, 'Here Today', 1960.
JwdFkadzovw 1:51 Do Women Enjoy Wearing Short Skirts?, 1960.
DFbzdtjIUu4 2:40 Uchelwydd - Caerfyrddin 1971
VLw2BA6eVjE 3:10 Do You Think Christmas is Too Commercialised? 1960.
c1hXcs8l5hs 5:47 Carwyn James
WBUVR361aoo 5:46 Noson Calan Gaeaf: Dic Harris, Preseli, 1984
cxdlYUCo9LU 6:04 Diwrnod Etifeddiaeth Glyweledol y Byd UNESCO / UNESCO’s World Day for Audio-Visual Heritage
kqUA9wF5uc0 6:42 Drovers
JKVhMjaKouo 3:29 El Bandito
XWKSnfoSYwo 4:26 Kyffin Williams, 1987
rmbKX2vaCQw 4:36 Y Coliseum - Porthmadog, 1984
cszpjfVOHIs 1:27 Heulfan, Rhyl, 1983
4GCJH4r_sz0 3:06 Tommy Cooper, 1981
XrfjzdMCsX0 3:32 Handball
vdfe1Vn_FpI 3:50 Quoits
vUB737fnFtc 13:09 500 years of the Royal Mail
ULJ7XEqddmI 2:53 Penmaenpool Boat Disaster - 22 July 1966
Nw1JHDQrib0 2:58 Gwynfor yn ennill Caerfyrddin - 14/7/1966
1GXYqaoYyGs 3:58 Sheep nuisance - Trefechan near Merthyr - 1966
dOLqXB8CeTQ 20:33 Severn Ferry - 1966
e4wsN_aJPds 2:38 Clint Eastwood - 1967
4RGmy0tU9CY 2:50 Miss World Controversy - 1974
YtwubKGEgGQ 2:49 The Hennessys at Swansea Festival, 1987 - The Steelworks Song
MaF0O-0jOTQ 4:01 Towyn neu Tywyn? 1968
1eMOe9bc20U 4:33 Myfyrwyr Aberystwyth - 1933
FBMiMuJex5Q 3:58 Doll Hospital - 1960
KaA5T0sekWw 4:56 Ymsgafnu - 10.6.1968
3xhh3QPHPYo 1:50 Busker Jones - Marchnad Llambed 1984
9mCS1p45e6Q 4:32 Barry Island prepares for Easter 1962
Vva4vNXGEP0 7:18 Nansi ac Edith
oHk3LZP_Zs0 2:17 K-nockers, 1971
YCmWPIAemPM 5:10 Top Rank nightclub - Cardiff 1964
pLGXZXNso9g 5:08 Datblygu - Ser - 1984
CCIFGoz2Nd8 4:51 Fred Abel's One Man Circus - 1960
eblZpwvd2d4 0:43 Pancake Making Machine
ohDINBtPJr0 0:54 Football Quiz
VTV13XoymHM 7:12 Ymweliad a Phort Talbot
j0B3pE5i5qE 3:41 Merched Llandybie
wKDd3T5lzeM 5:11 Y Byd Ar Bedwar - 1988 - sgwrs a Muammar Gaddafi
Nj0H3jKIjBc 2:45 Les Dawson in Caerphilly - 1976
k9Fq-uMtpQA 4:46 Jayne Mansfield - 1967
9M1LWsWsy0s 4:16 Celebration - 1973
V56HtgsXgB0 2:40 Be wyt ti ishio i Nadolig? - 1971
iInlRNviEJE 27:43 Yr Wythnos - Albert Jenkins
BTdh3DkZiYw 2:18 Dosbarth Etiquette Seren Wib 1977
IiazL375zNA 5:40 A Portrait of Pontypridd, 1963
vx0-v-fOOKE 5:21 skateboard craze 1977
AM3HCotmCjw 5:40 Casino - Port Talbot
jnilSGDxN5M 2:58 Noson Calan Gaeaf - 1977
jO2KcnDbHrg 3:54 3 Year Old Boy Climbs 100ft Chimney! (1966)
8UhME8dcOqc 1:40 The Prescott Punch - Rhyl, 2001
YbkdDWsCemA 3:19 Cows watching television
waM5L_nJoOg 10:13 Gwlad Y Gan - Land Of Song
ujsbeFJMxEs 4:53 Lady Godiva rides at Beddau Carnival
CBuyNbOWmE4 11:41 Ffalabalam - 1987
1ImpStYT9zo 0:38 Dog Fashion Show - Cardiff, 1970
-xZa3lnk2fM 1:54 Seremoni 'Rhent y Brenin' Llanbister 1958 / King's Rent Ceremony - Llanbister 1958
W9LOe-omp20 12:57 Protest yn erbyn y Tywysog Charles - 1969
qClwUbc6_3w 3:50 Dorothy Squires - 1966
TqmkcjCoBXg 4:06 Traffic Wardens in Cardiff - 1964
YdL7JfkC8vg 4:00 Cilla Black, 1964
NTWvbVQAK8A 3:56 Y Cyrff, 1985
1TBQ1qYzWes 4:18 Amphicar, Aberystwyth
Lk0dVFKtEM8 6:10 Welsh Baseball
ush4dN6F4VM 0:51 Amateur TV Station, Prestatyn.
yeMCXM16Mi8 26:18 Cwm Tawelwch - 1966
e_uci-VZDx8 4:46 Gambling in Merthyr - 1964
n4AfS9O-k8Y 3:50 Whiw! Mae Mistar Urdd yn fyw!
9Yh4tJXoQ18 6:48 Bob Monkhouse
8AYwlgV6pIw 2:19 Strip Club, New Tredegar, 1966
8-ZOMa5xjzI 1:30 Dim Teledu.1973
KIIWoqL0xqs 3:42 'Can i Janis' - Heather Jones
qZB6jL97RMY 6:14 Dillad Laura Ashley - 1979
rFGk44P2YYM 14:44 Shane speaks Welsh
GFrOx6QZ08w 2:50 Microwave Oven - 1968
l5NsU3RdZWE 3:26 Poltergeist, Rhondda St, Swansea - December 1965
5z6LhA27v9s 3:27 Sex shop - Cardiff
rGFTR-1LCMc 2:22 Status Quo, July 1976
TbmCIZJCccg 3:58 Olew pen i wared moelni - Jack Oliver Llambed
-rZ53Yq7JA4 1:53 Do You Believe in Flying Saucers?, 1967
tpt8NgODHQY 30:09 Ceinewydd 1959
tbCaRQNUQeY 7:23 Gwyliau blynyddol merlod pwll glo Graig Merthyr - 1965
eQMs0luCPw0 2:34 Croesoswallt - Oswestry
_OBetbOYnZE 4:44 Papur Newydd Y Deillion
aVftj5NDZLw 3:16 Mary Quant, 1966
hrO5u2qZY_M 5:27 The Lost Village Of Pwlldu
XsNbvon5M54 3:48 Elma Williams
vO-MilzhJ-k 5:20 Carrefour - Wales' first Hypermarket 1972
E81MZ_fbYB8 10:16 Hanes I. D. Hooson - Rhosllannerchrugog, 1960
kbZSuVHtk4Y 2:00 The man who stopped the motorway
Ynf2W6EcGgc 5:22 Enoch Powell
S8Vy5KbT4cs 2:31 Dathliadau Dewi Sant
GbyIw4dEfhI 4:20 This World Of Wales, 1963
8gPTKPApLL8 2:52 St David's Day, Carmarthen. 1957
dNUCEutjzB8 2:07 Bwyta Cennin ar Ddydd Gwyl Dewi, Yr Almaen, 1973
kOdv5X5La0I 3:03 Saltney Ferry
BxEiJekU2pg 7:48 Free Wales Army
TO_SLAICVyU 4:37 The Demoliton Of Old Cardiff Housing, 1962
0FqInlD1DAQ 4:31 'Warhol'
YaIWjByHrBE 3:50 Llanbedr Pont Steffan (Llambed)
73DDBc_VeK0 3:35 Y Blew - 1967
hIGigL9ccdQ 28:28 A Near Myth - 1980
B0t5rUHy2G8 7:26 Gareth Edwards - 1974
-d6udPavLBE 0:55 The Try
L2fIi0JTWN8 5:47 Lost Railways - Last train from Newport to Brecon 1962
FRwzYORTh3Q 2:42 Teenagers: Would You Use A Marriage Bureau? 1962
xAL9JZVNqOQ 5:44 Sunday Opening, 1961
_rWos5G-CQQ 23:17 Miri Mawr - 1975
uQo1w8GhMz0 1:04 Filming 'The Inn Of The Sixth Happiness', Nantmor, 1957
AHRWHKXb0oU 3:19 UFO HOLIDAY - MILFORD HAVEN 1978
DAYXDcolbpU 5:31 January Sales, 1969
63JwNSVafCA 3:27 Addunedau Blwyddyn Newydd - 1964
peYhPAbQYME 5:05 Pelham Puppets, December 1959
VUx1K9PVq5o 4:41 Spike Milligan
j3T_9wJixAI 3:16 Trwynau Coch - 1979
FN7xGSsW9uM 5:39 Nadolig Llawen a Blwyddyn Newydd Dda - Merry Christmas and a Happy New Year
wr4vZN5ufKs 3:20 Tegannau Ystlumddyn - Batman - Ffactri Mettoy 1976
je1OtICKtSQ 2:32 Turkey Run, Miners Strike Christmas 1984, Bedlinog.
52q9vrK_iio 2:29 Away In A Manger - 1959
iYc7ITz03B0 5:41 Christmas Toys 1979 - Louis Marx Toy Manufacturers, Swansea
-3UTr7FRCko 1:29 What Do You Want For Christmas?, 1959
wWND_j1zNok 3:24 Plufio Twrcwn - 1965
lk86qzgEdxI 3:09 Dyniadon Ynfyd Hirfelyn Tesog - Awst 1972
9tfu8bNdFUI 3:27 Butetown, 1960s
QJyuBioq33I 2:48 Mari Lwyd - Noswyl Nadolig - 1964
17fMiuiLb1A 7:45 10 Rillington Place
Bij9-969FBg 4:27 Gilbern - The Welsh Car
rOxmfRyzsRg 4:03 Pop Talent School, 1963
6FbpZp1Mp58 2:17 Lloches Niwcliar 1965
d656y-ikmMs 3:24 A Sailors Life For Me - Cwch Cathod
3Uad0Z_2Ido 3:05 Langland Bay Swimmers
0ZGjCkbWwmo 2:24 Ralio Mini - 1968
lGshDSgVF-4 3:28 Filming Carry On Up The Khyber, Snowdonia, 1968
hdJtA2bZADA 2:16 Should Welshmen Wear Kilts?
pZ1FjCn6b6M 4:32 Caffi Gaerwen - 1969
le2_Co8mUqA 4:46 Ray Reardon - snooker
MbxJ5W3A25E 4:25 Dwylo Dros Y Môr, 1985
PFz5aY8hWLE 3:41 Sport Aid in Cardiff
6KtSEOE4JpY 5:26 Cockle Gatherers At Penclawdd - 1961
8eGwjqh_eQQ 5:03 Disco - 1979
KAdPNx0ArRc 0:54 Man Attempts to Fly Home Made Contraption
0BlGnM3664Q 1:45 Wolf Whistle
LYJvx-_tx68 5:33 Gwenallt
OR8knvMvlHs 2:46 A yw merched Sir Forgannwg yn rhy dew?
Ob7f1W2jvrg 2:56 Acker Bilk at Barry Island Funfair, 1969
5SOjQIMz6-0 4:37 Noson Ysbrydoleg - Seance Cwm Tawe - 24.2.1967
3ADfpEKWyVQ 15:31 Welsh Food Show 1960 - with Philip Harben
nP729S6Bxzs 2:30 Ford Cortina Mark IV -1976
azZCi3cmJ5o 1:56 Classic Idents
A7e8J1kozqU 28:33 A Day in the Life of Cardiff - 1959
tL6UW7H8yko 4:45 Babs y car cyflymaf yn y byd
0nNS5j6a-UA 12:55 'Elinor': Kenneth Williams
q_N1__ZDttQ 4:23 Corgi Car Factory - Swansea 1960
K323iuDlbYI 4:58 Muhammad Ali
3dMGnSvCmTg 0:29 Car Shaped Hat
EcvYV_5shIY 3:19 Dyfais Newydd i Heddlu Swydd Stafford
LxErt4TRse8 2:25 Ym Mle Ganwyd Iesu Grist?
qW9q1YhvNMA 5:57 The Hypnotic Powers Of Mr Blythe - 1961
d9PfNtouslQ 3:26 Barry Welsh Is Coming
abt0PZ_lfFk 4:14 Helfa
NmfAz2eVoyY 3:35 Radio Myfanwy
CsC-KpeViWA 2:37 Sidan - 1973
nNBlU_h6XVw 3:16 Ghost Village 1962
B10yc-Y4lq0 3:46 Andrew Vicari - The Artist At Work
VFrOhV_lR_8 26:16 Return to Maerdy Colliery, 4/3/1985
0yPuL3XWV2I 3:06 Anarchy In Caerphilly - The Sex Pistols Perform
18jFrg8ewX8 4:09 It's In Wales - Friend or Foe (1988)
m-seM5LWow8 0:50 Last Service At St. Teilo's Church - Now Standing At St. Fagan's National History Museum
3D3WPsMu24w 3:14 computer
njuMXSu-BT4 4:31 Spiritual Healing
SpvcCvVqEE0 13:51 Eisteddfod 1976
J2DtOGXBen0 1:52 Dylan Thomas - Fern Hill
Ho4_Gp8ylGk 5:12 24 Hour Jiving Marathon 1960 - 77 Sunset Club, Barry
LjaZbjt4Wtc 7:24 Investiture of Prince Charles, Caernarfon Castle. 1969
QYtj4F8bG5k 4:00 Atgofion Cyn Lowr o Rhydaman - 1969
CWqbh0zdKqI 3:52 Butetown Carnival Week, Cardiff 1987: The Little Butes
M8kjfSd5Qco 0:41 Birds Nesting In Westcot House
2HRQFTrFWHY 4:21 Torri Mawn - Cwm Cynllwyd - 1967
FNixta5aJpI 4:48 Seren Wib
tIbBIK5ceCQ 2:25 Who Wants To Be A Spaceman? - 1961
hcfqEuFSqaA 4:38 Meet The Cheshires - 1961
LjfQ4Q55K48 0:54 Mechanical Shark In Midst Of Holiday Makers - 1961
s8fOzrOTVXs 1:14 Cardiff Cinema Montage 1961
M8IB7GB756w 3:44 Broc Mor - Aberaeron 1967
103JPrPH8Ms 0:36 Pet Lioness In Garage - Cardiff 27.2.69
57zTtr693ss 2:59 Tom The Tramp
NxCOX42M31s 2:39 Y Rhewgell
Lvcz5E1BhJY 0:45 Lampeter Pram Race 1967
ztl0SxXSOWo 6:02 Salem
FGI_ZaZY5e0 4:33 Sianel Deledu i Gymru - 'Y Dydd' 17/09/1980
jh6Q1N-iwzU 1:51 Greenham Common Peace Camp, 1982
2MWNLYa_bqM 3:16 Electricity Comes To Ystradfellte
CPLWbeUq8Z0 2:32 Harold Macmillan

# Simon Roper
1Ntcj97LNyI 1:15:42 Reflections on First Time in the US (California)
i1GjSKR5udY 15:52 The Disappearance (and Survival) of 'Thou'
C1xN-fjyCvU 15:31 Problems of Studying Emotion Cross-Culturally
s38tEcEXUAo 15:37 Some Words from Proto-Germanic to Old English
eKS7iJIs_ZM 14:03 Regn, wæter, spearwan, ūlan
7kV_bLrfUxs 17:17 Grammatical Gender - An Accidental Response to Luke Ranieri
iLEbaAkt-P0 1:18:52 Runes and Other Topics with Dr Jackson Crawford
EWlil3g8LwU 12:27 Do Languages Get Simpler Over Time?
bq4XbdA3dTk 33:27 The History of the 'R' Sound in English
Uf7kA8ZVPVU 16:09 Time Capsule Reflection
eJLj6rDJl7I 15:40 'Wiggle Room' in Reconstructed Old English Pronunciation
q77x0_znB3I 12:46 The FOOT-STRUT Split: Why Northerners Rhyme 'Foot' with 'Cut'
HNd29yYK8V8 12:01 The Elves and the Shoemaker
5OULnCCvdk8 1:01:02 'English After RP' with Dr Geoff Lindsey
SwVANDKzG60 21:13 Pirahã Phonology
KVPx9rp_HiI 30:22 Reconstruction of a Naturalistic Conversation from 1960s Southern England
9KhPVWXpNIc 1:54:27 A Chat with Luke Ranieri
2nVVX74sy8o 18:41 Dissection of the American English Video
AXaXnQv6knQ 7:49 A Northern US Accent from the 18th to the 21st Centuries
dESrl58Phso 25:17 Proto-Germanic Reconstruction: Some Examples
ChoZRnLs7K0 9:28 A Medieval Medicinal Recipe with Modern Applications
Ggq5BrRvwpU 13:21 A Sentence from Proto-Germanic to Modern English
JcitAgN7tE4 59:08 Trying to Learn some Polish using Google Translate
HINRA6vzx6U 13:23 Is There an 'Oldest' English Dialect?
W3zLKzRhAzg 18:51 Do You Remember 1960s Southeastern England?
HX2Hbv07yPw 17:57 Formants - Why are Voices and Vowel Qualities Different?
WUY2a-rvXYg 17:09 'Gutteral' Sounds (Back Fricatives) in English
V29OhkbzwuQ 25:23 19th-Century Cockney and RP
X82qgBoA-qA 4:26 Patreon
vZuO4IjXN2o 23:39 *contains vulgar language*
vL4p5U5vpuo 13:17 Livestock in Early Medieval England
njZw_SrMkjA 9:44 Hypotheticals - What if the Great Vowel Shift Happened Today?
ask7ClK9m7A 13:32 Intonation
AzUHWrWH8WU 3:33 Keàty Curbison Cat - A Little Cumbrian Poem
VJ-jdYA9ISM 12:03 A Little Neanderthal Work-in-Progress
6psfNuKWl00 11:04 The English Language 'Family Tree'
Jx4IObS4rV4 37:53 A Beginner's Guide to IPA, Phones & Phonemes - Part 1
78l_PcPuYSk 9:52 Some Thoughts about 'The Seafarer'
OQNj4G5itkg 14:26 The Great Vowel Shift in the North of England
2_wM_EOWHqY 2:10:40 Old Norse Colour Terms (and other topics) with Jackson Crawford
SdlkLAJpfpw 1:36:05 Universal Grammar & Neurology with Caroline Cypranowska, PhD
b8X4xKIppS8 11:47 Scouse Phonology and Where it Came From
7mw7gBOOPS4 29:03 How We View the Past
K-eWQZw29t4 10:48 What if English Still Had Grammatical Gender?
0O7H8FYZOkw 20:01 Reconstructing Some Sounds of Early Modern English
Diay7U-hRec 38:49 'Early Anglo-Saxon Cemeteries' with Professor Duncan Sayer - Part 2
RERyg5h1IMc 7:32 Ingressive Speech - A Short Overview
EgK0jvPJlbk 18:47 Thinking About Human Evolution
fNNrDdNQEgo 15:36 Old English Syntax - Building a Sentence
DKzJEIUSWtc 58:45 A Conversation in Old English and Old Norse
luibV6sh-pQ 12:26 AAVE, Implicit Bias & Prescriptivism with Blayzen BM
fzeneXX6MBU 13:55 Old Norse Influence on Northern English
GyRO93tOVHA 49:55 'Early Anglo-Saxon Cemeteries' with Professor Duncan Sayer
Ov0OEAF5Fv8 13:40 Cumbria & Yorkshire - An Older Dialect Comparison
Zf0L5lXpvuQ 24:11 Anglo-Saxon Coins and Sceattas (with Ben Normington)
-NuZ1FmCewg 6:00 Why 'Mice', not 'Mouses'? I-umlaut in English
S4_OCLhhicI 14:30 Geordie and Northeastern Phonology
5ZNdgBdUhIk 11:11 Yule *REUPLOAD*
3lXv3Tt4x20 18:10 A London Accent from the 14th to the 21st Centuries
-iPu8hMxfq0 3:46 A (Hopefully) Positive Message
McFEbFWioXQ 14:07 German and English Cognates - A Little Analysis
QKhYWdaxcvo 14:06 The Importance of Anthropology in Anglo-Saxon Studies
JQ6oT5c1jks 23:57 A Conversation about AAVE
fopQPzaXXXc 12:28 Proto-Indo-European - Frequently Asked Questions
_5edmlyJ67w 12:08 Hærfest - Autumn & Celebration in Anglo Saxon England
TGjZ75UzsKE 14:30 Older English - The West Country Connection
pPUqjK71llE 14:36 How did Language Start? - Part 3: Universal Grammar
eQPbSAvtVjY 12:51 New Orleans English - The Speech of Louis Armstrong & Dr. John
Yp7MHcyJkGM 19:09 A Little Q&A
y5cgb1nDCMg 13:25 Wild Animals in the Anglo Saxon Mind
fuh6f_y5ycc 4:37 Two Readings in Old English
mheR9cIFuQ8 11:21 T'northern English Definite Article
xLNJyV_4_FU 12:34 How did Language Start? - Part 2: Primate Communication
e34U4eltQyQ 15:43 Anglo-Saxon Regional Dialects
mSq4hu5w7io 21:39 Medical Pluralism with Hannah Chisholm
s-9TEC5OqVE 7:06 Pronouncing some Anglo-Saxon Words
Y5-gkQmFCiM 12:35 How Did Language Start? - Part 1
nqtg6pb3WuA 8:48 Vowel Length in English
OMEf9AqI-b0 16:07 Monarchs' Accents through the Ages
PvDuObTfklw 7:58 Stress & Pitch Accent in Germanic Languages
AYaqLFh4GkA 13:55 Witches in Anglo Saxon England
KjfiB_Kcwhk 8:16 Reconstructing 'Stone' in Proto-Germanic
ARgGguQlQ0w 18:26 How Much did English Speakers Swear in the Past?
WFxS0tXBS00 9:20 Case & Gender in Old English
12oPAK9G2J0 14:27 Revisiting Neanderthals
Ev6b9YAiFqo 2:24 Two Readings in Northern Middle English
4kmIV9yOTyg 13:45 Leftovers from Older English
lsYt4725-tE 6:29 Philosophy and Cultural Relativism
ngnh76-mxsU 14:37 Proto-Indo-European - Laryngeal Theory
zWv3zxqjP5c 9:24 Lencten - Spring in Anglo Saxon England
CODUPylO46M 12:19 Elision & Contraction in Old English
YN6veU0fI9A 9:32 Problems with Reconstruction
U0pipKUFNAk 17:38 Introduction to IPA and Regional Accents
tBwdRs-D8lU 8:46 The Difference Between 'Thou', 'Thee', 'You' and 'Ye'
ieWm9T_GgSA 0:08 I'm lost
o5kjQONRAyU 13:15 The Migration Period
eBLvnK57lqM 9:16 Interview with an Anglo-Saxon in Old English | 2 [PLEASE READ DESCRIPTION]
FtcAbzO19Kg 17:20 Development of Cumbrian | 2 of 2 | 1400-2020
63zAgbh5RFE 9:02 Mindfulness
48GSUUW5VH0 9:27 The Earliest Germanic People
B9aILOeTYas 14:14 Development of Cumbrian | 1 of 2 | 800-1400
Nrs6U5vYstw 10:11 Proto Indo-European: Some Unexpected Cognates
H61_y6jH330 17:55 How we Know what Old English Sounded Like
ABmxoMWWChc 8:34 Q&A Part 2 of 2
KnBc8RnmKSw 13:02 Q&A Part 1 of 2
qS-l3PqToJo 2:17 A Little Update
lm9MUUQN3VY 12:58 The Pronunciation of Later Cumbrian
69eEJMYz3OY 21:32 What They Say | Starring GAMEY HEMP
-IdKScLLjVE 1:15 The Development of Cumbrian in One Phrase
h3I20xqH4kc 13:36 Anglo Saxon Pre-Christian Religion
3hqQpziIETo 6:27 The Great Vowel Shift
J-WjIVxyR5c 6:06 Religion and Practicality
lAKWmKnmc_k 6:41 Changing Meanings
oFX1nbD3dV0 3:25 Interview with an Anglo-Saxon in Old English [PLEASE READ DESCRIPTION]
Pc45XKv_OEw 4:28 Casual Conversation in History
iHG5-wMFJ-4 12:36 The Feast of Stephen | Starring ZAMY ZEMP
QWI_dFxbzyg 6:23 Old English and Middle English; why are they so different?
oqvpg0md4xY 2:04 Misconceptions | American was the Original Accent
_CSAmA_VYuk 8:29 Corresponding Cognates
ZHmUYlyzQZg 4:26 Notes on Pronunciation - Part 1
JiwTuM8R0ak 1:45 I'm Back-ish
2Om-FGi4fTk 6:23 These Riddles Three
ohxIKbf6cbg 2:36 The Plight of the Goat
EsOefKbGh4k 9:56 Team Gent(le)sir Exposed | Episode 2 | Starring KEORGE GEMP
VMXlvr5Kf4s 10:28 Team Gent(le)sir Exposed | Episode 1 | Starring GEORGE KEMP
7y_Acv-0jo8 2:06 The Saxon House
RuFHXJ350k4 2:26 Burne, Roper & Sons Whisky Advertisement 2016
q69tb_H94ao 3:17 La Ferrassie 1 - A Painted Reconstruction

# Stadstuinieren

# CMqMKLYGMuY 3:02 Stadstuinieren - Limonade met bramen - Zo maak je dat
3_7j8XGfOLc 3:31 Stadstuinieren - Zelf zaden zakjes vouwen - Zo doe je dat
# kJe_EqzsMxQ 3:07 Stadstuinieren - Tomatillo kweken en oogsten
NzhKvcN3YdA 3:39 Stadstuinieren - Hoekjeskool of Rubras - een nieuw gewas
# P4V3XwK1-js 3:08 Stadstuinieren - Herfst en Wintergewassen voorzaaien
W49dfzlUUDE 5:50 Stadstuinieren - Tuinen kijken - Moestuin klooster Oud Bijdorp
# E2DYK7RG36I 4:16 Stadstuinieren - Wortels kweken en oogsten + Recept voor een lekkere risotto
# 0-xcXvqz8aY 3:02 Stadstuinieren - Recept Gevulde Courgette
KJXHqmlBuRM 5:24 Stadstuinieren - Van peulen naar vruchtbaar aardbeienbed
# uonGXvtYVnE 3:13 Stadstuinieren - Recept met munt: Muntsoep
# bnGuzmUkva8 1:03 Het leukste tijdschrift voor de moestuinier 🌱
reBnrC-zh6A 8:00 Stadstuinieren - Aardappels oogsten - Knollen, bessen en beestjes
# IGLOSqR0YbA 3:40 Stadstuinieren - Rode bieten kweken en oogsten + Recept Rode bieten hummus
Ds5dYclBWz4 4:49 Stadstuinieren - Tuinen kijken - in de Loire Vallei in Frankrijk
# 7gwvtR60Zto 3:11 Stadstuinieren - Snijbiet kweken en Snijbietquiche maken
3HQ5kMugXTI 4:14 Stadstuinieren - Genoeg te doen in de moestuin
BMt4lmiD__s 3:53 Stadstuinieren - Te kleine tuin of balkon? - Kijk omhoog!
# jBAkUJatRY8 3:35 Stadstuinieren - Aardbeien kweken
lnb6TkuI23c 3:25 Stadstuinieren - Vogels én een nest! - In de stadstuin
# xkLc19m8DcQ 3:03 Stadstuinieren - Meiraap oogsten + Recept meiraapfrietjes
TYXf9Ri-0bc 8:56 Stadstuinieren - Tomaten en druiven dieven - Zo doe je dat
# 9KTVTyP9NHY 3:03 Stadstuinieren - Komkommerfamilie uitplanten
BGOyHKxqfVw 8:21 Stadstuinieren - Een rondje door de moestuinen - eind mei
2t4k7W1iASk 7:00 Stadstuinieren - Rabarber oogsten - Zo doe je dat
# L4jVJxP2oAE 3:02 Stadstuinieren - Uitplanten in mei - Aubergines en prei
# Gwt3Vbu6ghE 0:54 Het leukste tijdschrift voor de moestuinier 🌱
# Hji6-JO61p0 3:52 Stadstuinieren - Sla zaaien en oogsten + Recept Slasoep
# aDmnOspdOgg 4:39 Stadstuinieren - Broccoli kweken en uitplanten
# Qjbc01PoPr8 3:03 Stadstuinieren - Gojibes planten en kweken
KkM5XMbuyX8 4:49 Stadstuinieren - Tomaten buiten planten, na de ijsheiligen
lLx1lAsvJuw 3:30 Stadstuinieren - Groene asperges oogsten - Zo doe je dat
JFA-3KwNLt8 10:26 Stadstuinieren - Basilicum kopen, zaaien en stekken
# YOCocNOGtxg 3:13 Stadstuinieren - Paardenbloem oogsten
hQw-YE6Q60k 5:11 Stadstuinieren - Een rondje door de moestuin - half april
# 7EUnkkzgUhs 3:24 Stadstuinieren - Snijbiet zaaien
N9O_3MlpTrc 3:22 Stadstuinieren - Bloesem, vorst en bestuiving
u7q5aJJ39HA 3:21 Stadstuinieren - Eeuwig Moes - meerjarig koolgewas
# VtfD9kN84nw 3:33 Stadstuinieren - Wasmiddel maken met Klimop
# DuQxd9UgKug 3:08 Stadstuinieren - Recept Salade radijs en munt
OmuB1U0HxbI 4:46 Stadstuinieren - Vroege aardappels poten - Zo doe je dat
# jej9Qe9rwWU 3:19 Stadstuinieren - Kruiden snoeien
fYj-frPfeF0 5:37 Stadstuinieren - Tomaten, Pepers en Aubergine voorzaaien - Wanneer doe je dat
# 6BVS7fR-XI0 3:03 Stadstuinieren - Paprika's verspenen
5z3gLZIoInA 7:05 Stadstuinieren - Aardappels voorkiemen - Zo doe je dat
# d2tcq38UB1c 4:00 Stadstuinieren - Zaaien in maart in moestuin of pot
bEmCUcU-cvQ 4:45 Stadstuinieren - Zaaien en planten - begin maart
# b8FiiO40C-8 3:14 Stadstuinieren - Winterspinazie oogsten + recept omelet
rYYCAKxfOnA 2:52 Stadstuinieren - Optimaal gebruik maken van zonlicht - Zo doe je dat
# Hp6oHbeGCRo 3:38 Stadstuinieren - De moestuin in februari Aardpeer planten
3rF8f4r_EJk 3:08 Stadstuinieren - Zaden bewaren - Tips
abMdcAUTSpA 3:02 Stadstuinieren - Weefkunst met natuurlijke materialen
a5RE1H_5tJc 11:47 Stadstuinieren - Zaaien en voorzaaien in februari - het seizoen is begonnen!
aELlmAvkmoY 7:12 Stadstuinieren - Eenjarige, tweejarige of meerjarige gewassen? - Zo zit dat
# QOs8wj13KtM 3:43 Stadstuinieren - Peterselie kweken
# TEk4W8nGZxk 3:04 Stadstuinieren - Plantenvoeding maken van bananenschillen
# ZNCLazWortw 5:43 Stadstuinieren - Moestuinplanning maken
# Y9W4BvVkyIs 3:59 Stadstuinieren - Zonnebloemen zaaien
# @removed - wrong aspect ratio
# O-mp3lcvT2w 4:02 Stadstuinieren - Tips Sla kweken
# 7pA4pkBxK0k 5:15 Stadstuinieren - Tomaten zaaien
# wKM6xq8mBNY 3:01 Stadstuinieren - Recept Andijviestamppot uit eigen tuin
# i8GE9UKFchA 3:23 Stadstuinieren - Limonade van Tijmsiroop
# AlcyADSIGoQ 3:10 Stadstuinieren - Zelf Tijmsiroop maken
# jN0JQpKAfu4 4:54 Stadstuinieren -Tips zaaien pepers en paprika
# YtDQlH7VdWU 3:02 Stadstuinieren - Spinazie Zaaien + Recept smoothie met spinazie
# t_Bbi_3oWHI 4:35 Stadstuinieren - Prei en ui kweken
# WHfIyMV2F6Q 3:35 Stadstuinieren - Kiemhoofdjes maken met de kids
# MVQHmlNEMIU 3:17 Stadstuinieren - Rozemarijn Thee uit de tuin
# X53i6_GJYl8 3:02 Stadstuinieren - Kweekpotjes maken van papier
# lXbijluLCmg 3:09 Stadstuinieren - Radijsjes en Worteltjes kweken
# GYsIM5LFtS4 3:48 Stadstuinieren - Recept Aardbeienjam
# N_bnpLHvfAU 3:31 Stadstuinieren - Tomatenplanten snoeien
# dYG9JvPn3lE 3:36 Stadstuinieren - Courgette kweken + Recept Courgette soep
# 8pXh8vDcbD4 3:31 Stadstuinieren - Tomaten dieven, zo doe je dat
# O3QD8b4SAXs 5:20 Stadstuinieren - Recept Pavlova
# u1898_IG_sQ 3:59 Stadstuinieren - Recept pesto met radijs
# qmvy2o3CXVQ 4:16 Stadstuinieren - Tomatenplanten verpotten
# SFd-7ZhvSG8 7:06 Stadstuinieren - Tomaten in de stadstuin - update juli
# QPEz6lSjI58 4:47 Stadstuinieren - Tomaten uitplanten
# yGkOEic-Gzc 5:22 Stadstuinieren - Sla zaaien
# JA5GleBebjw 5:52 Stadstuinieren - Lage slaboontjes kweken en oogsten
# SUhmC63jLh4 6:08 Stadstuinieren -Wilde bramen plukken
# P2o1U9bkPuo 4:48 Stadstuinieren - Komkommers oogsten
# VboSbAq482Q 3:09 Stadstuinieren - Zaden ordenen
# 4xb7-lQ7peY 4:22 Stadstuinieren - Dahlia's planten
# y_eMkCNZU18 3:20 Stadstuinieren - Recept Chilisaus
# E2qBOiWSsjw 3:20 Stadstuinieren - Aardappelen kweken
g0AFu5x4IUE 6:18 Stadstuinieren - Wortelonkruiden bestrijden - Zo doe je dat
MB3St12AoSs 3:08 Stadstuinieren - Bietjes kweken
XE1qiaT5-NQ 4:08 Stadstuinieren - Radijsjes oogsten + recept Tzatziki van radijsjes
fCJUYM2z--s 3:03 Stadstuinieren - Aardappelen oogsten
icNSctLWZFg 3:10 Stadstuinieren - Planten Afharden
NlBbRH1KkGU 4:25 Stadstuinieren - Cantaloupe meloen kweken
P_mM0ATJHSQ 3:14 Stadstuinieren - Avocadopit planten
xDiUFUCeczM 4:59 Stadstuinieren - Worteltjes kweken + Recept worteltaart
6PwM_f-kyVE 3:09 Stadstuinieren - Recept Pompoensoep
hJsSB-D6XbA 3:51 Stadstuinieren - Zo maak je Tandpastapoeder
ES9NtOExpEo 3:19 Stadstuinieren - Zaden oogsten van radijs
9pl0uelqV-Y 3:32 Stadstuinieren - Rode bieten oogsten + recept Rode bieten smoothie
Tv9dnLsmYvg 3:34 Stadstuinieren - Broccoli kiemen
Lf4YxNnUzow 3:41 Stadstuinieren - Recept Broccolitaartjes
5ydtkro30lA 3:56 Stadstuinieren - Peultjes kweken
3in7UL3g8gc 4:42 Stadstuinieren - De kip en het eierkoeken
PYA9HiNCQhs 3:33 Stadstuinieren - Recept chilivlokken
zHq66Av6ucM 3:24 Stadstuinieren - Vogelvoerhanger
RjDRlj_B1vU 3:55 Stadstuinieren - Groot Kaasjeskruid kweken en oogsten
VB0pKyGFsAI 3:46 Stadstuinieren -Tuingereedschap schoonmaken
d1V0KQKBdWk 4:44 Stadstuinieren - Composteren
N23wua8Fa8U 5:38 Stadstuinieren - Italiaans moestuinplan
OQOgSc8ZAtU 3:49 Stadstuinieren - Prei oogsten recept
sRTQL4N9nKI 3:12 Stadstuinieren - Olijfkomkommer kweken
OqW1M1qgRi0 3:15 Stadstuinieren - Muismeloen kweken
wZ116aJL-Ik 3:28 Stadstuinieren - Uien telen
QOB7nNP5wCk 4:01 Stadstuinieren - Tuinkers zaaien - kiemen kweken
CsUiyp9z74s 5:11 Stadstuinieren - Zo maak je een bijenhotel
fUvxDmhr-64 3:28 Stadstuinieren - Tomatenketchup maken
DC6wrGkFRmk 3:48 Stadstuinieren - Kruidenolie maken
auODFWiObCg 6:18 Stadstuinieren - Watermeloen kweken
jmwVp8e0q-I 6:36 Stadstuinieren - Kiwano kweken
yJIKC-7LHgo 4:27 Stadstuinieren - Bosui laten hergroeien
nxWdx40wP8A 3:53 Stadstuinieren - Kruiden uit de winkel. Hoe houd je ze goed?
HLqfG3GdAOg 3:37 Stadstuinieren -Kruiden uit de winkel. Hoe houd je ze goed? 2
TaL6eLq1CO8 3:43 Stadstuinieren - Kiemen uit Chiazaad kweken
01lxSFW3Uwk 3:36 Stadstuinieren - Maiskiemen
G61Dxxp_RQE 3:08 Stadstuinieren - Bietjes kweken
dYdL9cp_KfQ 5:44 Stadstuinieren - De planning van zaaien, planten en voorbereiden
2tZPw8P3hTA 6:45 Stadstuinieren - het einde van een jaar én het begin van een nieuw teeltjaar
-iIOepJdj3s 3:01 Stadstuinieren - een snoephaag kado - voor basisschool de Nettelhorst
6UDizNS84sM 2:38 Stadstuinieren - De tuin in december - een rondje door de moestuin
eJ47LdEdoX4 2:23 Stadstuinieren - Wekenlang kiwi's en kiwisap - uit de achtertuin
8HLTv_W_3oU 4:02 Stadstuinieren - Wie vreet er van de kool?
R1PmF_H38TY 3:52 Stadstuinieren - De tuin in oktober - een rondje door de moestuin
96tbAkKkveE 3:53 Stadstuinieren - Twee eetbare bloemen - lekker en gezond
zm9tinuS3LU 4:38 Stadstuinieren - Bedden vol bladgewas - voor de wintermaanden
RowrX48x9s0 2:41 Stadstuinieren - Rode spitskool - een groente met een verhaal
-vWrk6lX3og 3:29 Een fruittuin vol pispotjes - de eerste grote opruiming
63wUpkx6cP8 2:35 Stadstuinieren - Bonen oogsten en drogen - om te eten en als zaaigoed
mga7oQEUlX8 3:26 Stadstuinieren - tomaten - zaden oogsten, drogen en bewaren
yTNpLg7SV5c 6:00 Stadstuinieren - Zaaien in september en oktober
cR2G41P3Bqs 4:22 Stadstuinieren - Instortingsgevaar - het wordt langzaam herfst
jsTfFzafTP4 7:39 Stadstuinieren - Een moestuin in Zuid-Frankrijk - inspiratie van verderweg
9vHULMQCEDM 3:21 Stadstuinieren - De bladgewassen - Families in de moestuin
cNci8FE2lxY 3:23 Stadstuinieren - Tuinen kijken - Moestuin landgoed Staverden
4KcZwlF62oQ 3:42 Stadstuinieren - De vruchtgewassen - Families in de Moestuin
HF1hxleQSUo 2:45 Stadstuinieren - Phytophthora in tomaten - buiten telen blijft risicovol
9SOH3ESRtEM 3:27 Stadstuinieren - De schermbloemigen - families in de moestuin
SZRwsiTRCC8 6:26 Stadstuinieren - Zonder zorgen op vakantie - Zo doe je dat
nH8fmg6KxzU 4:48 Stadstuinieren - Planten stekken - Zo doe je dat
W5bTR3uvZTY 6:02 Stadstuinieren - Planten in potten - zo doe je dat op je balkon, terras of daktuin
Ix8RAZlTkt0 1:38 Stadstuinieren - Vlierbloesemchampagne. Zo maak je dat!
vteCudJLIOM 3:20 Stadstuinieren - Midzomer in de moestuin - het begin van het vruchtseizoen
7F6LTmjNXOU 3:11 Stadstuinieren - Aardbeien - verschillende rassen junidragers
HR9j-SYsGQs 2:22 Stadstuinieren - Afstand houden! - een schoffelbreedte tussen de rijen
X4yje4T66ak 2:16 Stadstuinieren - Tomaten aanbinden - Zo doe je dat
nWsKBAj0aZo 7:27 Stadstuinieren - Een rondje door de moestuin - half mei
Fj2OiTv-GRg 3:19 Stadstuinieren - Opvolgend en gevarieerd zaaien - voor een doorlopende en afwisselende oogst
jG_-FXk_m7Y 5:11 Stadstuinieren - Wieden, bemesten, zaaien en bewateren - De handigste volgorde
K80syvOV0bc 3:02 Stadstuinieren - Snelle blaadjes telen - Zo doe je dat
bCZPuWtcFi4 3:22 Stadstuinieren - Kolen planten - zo (diep) doe je dat
MF7StHWFQl4 2:09 Stadstuinieren - Zomerwortel en pastinaak zaaien
wHzcTN8FmQY 11:21 Stadstuinieren - zaaien - waar moet je op letten
yJ9_2ZvCxLw 2:23 Stadstuinieren - Tuinen kijken - Moestuin de Hof van Hackfort
CkNUdcDJzgw 2:57 Stadstuinieren - de eerste bloesem - pas op voor vorst én vogels
3-bJsJCrToA 6:23 Stadstuinieren - bladgewassen zaaien in een kasje - zo doe je dat
gMs6bPRTi_8 4:04 Stadstuinieren - houtige kruiden snoeien - zo doe je dat
RrnlUq_Yq4U 3:05 Stadstuinieren - puzzelen met tijd en ruimte - door een koud weekend
9sW9Wswc5qs 6:52 Stadstuinieren - Prei en uien telen uit zaad - begin op tijd
fXaUkHeSx5w 2:38 Stadstuinieren - aardappels vervroegen - door voorkiemen
o5uuy65xfoY 2:02 Stadstuinieren - Rabarber bleken - zo kan je de oogst vervroegen
VXYcJXxjS18 4:17 Stadstuinieren - tomaten, peper en aubergine - voorzaaien in de vensterbank
hufQVdhEfC8 2:25 Stadstuinieren - de allereerste zaaisels en onverwachte oogst
un2NH98Ue3s 2:21 Stadstuinieren - Erwten, peulen, kapucijners en tuinbonen voorzaaien
cmqHodIhSVg 4:00 Stadstuinieren - Een nieuw tuinseizoen - klaar voor de start!
jtXP7Ln7Ok0 1:59 Stadstuinieren - Erwtenscheuten telen - voor een heel vroege oogst
JIh2RHMvJC8 7:25 Stadstuinieren - Groenten in bakken - Zo doe je dat
RVuG9_1PDA4 4:16 Stadstuinieren - Palm- en boerenkool - winteroogst
JLulkEQd2Ss 4:17 Stadstuinieren - Winterpostelein en andere blaadjes
gaSOZBo82-U 6:35 Stadstuinieren - Bodem bedekking - de moestuin onder zeil
rc0pLAmuSPY 2:07 Stadstuinieren - Midwinter in de moestuin
GV10-OsD8hI 2:52 Stadstuinieren - Groene Asperges - ook iets voor in jouw tuin?
74IbDgcqp8k 1:50 Stadstuinieren - Eetbare Kerstkrans
Ca8JdQjV9A8 5:03 Stadstuinieren - Zaden bestellen - hoe te kiezen?
Cc7Hcff76DE 5:02 Stadstuinieren - De tuin in november - een rondje door de moestuin
NoLVJvnAeKA 3:13 Stadstuinieren - Kiwi kweken in de stadstuin - van bloei tot oogst
_BOcyYKlYmc 4:45 Stadstuinieren - Frambozen snoeien - voor een extra lange oogst
T_dEm1DQur0 6:43 Stadstuinieren - bodembedekking in de winter - hoe doe je dat
MXR_GDyn8q8 5:27 Stadstuinieren - De tuin winterklaar maken - of niet
Y9hrzYPT_8U 8:31 Stadstuinieren - Bessen snoeien - Zo doe je dat
QeFeY0H5wGQ 3:34 Stadstuinieren - Een pergola en een groen afdak - meer ruimte en meer schaduw
uP6m3NCaqwg 2:39 Stadstuinieren - Een moestuin beginnen - recht of rond
gYqfM-LOF9o 4:06 Stadstuinieren - Knoflook poten - doe je in oktober
mjAJE-cnY14 3:09 Stadstuinieren - Prei telen per stuk of in clusters
wX03GOuWVmI 3:28 Stadstuinieren - Bieten in alle kleuren
1NhjE16v_xo 2:57 Stadstuinieren - Zonnebloemen - door snoeien meer bloemen
bCXbobqzGf4 3:20 Stadstuinieren - Kwartels in de stadstuin
gOg7B3SSkVE 7:44 Stadstuinieren - De tuin eind september - een rondje door de moestuin
9GX3IzBLwN0 3:13 Stadstuinieren - Winterpeen zaaien en oogsten
egkjt5f-H4M 3:17 Stadstuinieren - Verticaal tuinieren
k9TG0qYGdR8 2:41 Stadstuinieren - Boerenkool, palmkool en spruiten
CaNgr23wkJI 3:20 Stadstuinieren - Appels drogen
kgWUBHvH9Dk 2:19 Stadstuinieren - Zaaien in september - Veldsla en Spinazie
FrNe_UdtT5s 2:05 Stadstuinieren - Suikermaïs, de bevruchting
he_1A9qwqdY 3:22 Stadstuinieren - Kiwano of Snoskommer
cLgN2QOrvrg 2:50 Stadstuinieren - Een kruidenspiraal maken
qgbYI5X3FEQ 3:33 Stadstuinieren - Blije bijen, hommels en vlinders door vaste planten
LyU52hgpO2g 3:17 Stadstuinieren - Kamperen bij de b(r)oer
42JZ6ENGjMU 2:50 Stadstuinieren - Metamorfose van een achtertuin - Moestuin aanleggen
as-sDoz_H4k 5:26 Stadstuinieren - Tuintour: Historische moestuin Park Scherpenzeel
SU2QqMQ0Nws 3:29 Stadstuinieren - Bloemen in de moestuin
ZnBn9T4Pgnc 6:00 Stadstuinieren - Help! Slakken in de moestuin.
Dkd5KTHsSRY 3:10 Stadstuinieren - Aardbeien stekken - half juli
IJio-x62tiU 4:50 Stadstuinieren - Een rondje door Taco's Tuinen - half juli
BZHNMNKbiTo 4:39 Stadstuinieren - Metamorfose van een voortuin - van grind naar groenten
Hth0bIOEl3I 2:51 Stadstuinieren - Bessen oogsten met een snoeischaar
bZEDmhkdVPY 5:58 Stadstuinieren - Voorbereidingen voor de tweede helft van het teeltseizoen - begin juli
xR0nzIuPd24 2:06 Stadstuinieren - Water bewaren - water besparen
EUX5Kn1Ih38 3:41 Stadstuinieren - Lei en klimfruit
ercJjKRKLys 4:48 Stadstuinieren - oud & nieuw in de moestuin - Midzomer
vTlylQiHg1w 5:51 Stadstuinieren - Aardbeien en aalbessen in rood, wit, roze en geel - half juni
lsBJ0fTHh2o 3:41 Stadstuinieren - Kapucijners & Grauwe erwt, oogsten met je ogen dicht - half juni
uQ-_WZp3vEQ 4:38 Stadstuinieren - Coloradokevers in de aardappels - half juni
T2ovNa7DGTI 7:50 Stadstuinieren - Knoflook en ui oogsten en knoflook vlechten - half juni
vFh-J9857MI 3:17 Stadstuinieren - Een bed vol bladgewassen: sla, spinazie, snijbiet en meer
IjxatQiO7Jc 4:46 Stadstuinieren - Peulgewassen: mooi, lekker en superchique
zI3YQt2VZcE 3:28 Stadstuinieren - Frambozen en bessen aanbinden
QQnz2XyquJQ 3:39 Stadstuinieren - Water geven (2)
TsAHDytOx2A 3:43 Stadstuinieren - kruidenthee uit eigen tuin - 2e helft mei
uznPI4qhlB8 7:07 Stadstuinieren - Courgette & Co (ook pompoenen en komkommers) uitplanten, met een stokje?
-It5vkwIea4 4:11 Stadstuinieren - aardbeien op stro - 'strawberries'
hJMBnQujKE0 3:16 Stadstuinieren - Piepers in potten - dat gaat prima
laTu_DqTcyU 9:15 Stadstuinieren - Stand van zaken in moestuin en kas - 1e helft van mei
08O4kvTUMp0 6:52 Stadstuinieren - Schoffelen - Hoe doe je dat goed?
Y0IaJt1BssA 6:52 Stadstuinieren - Bonenstokken stevig zetten
2ZDNFO1pJbo 8:34 Stadstuinieren - Water geven (1)
FWOxggid7p4 6:57 Stadstuinieren - Maak kennis met Taco's (moes)Tuinen
lwyEJumnSK4 5:05 Stadstuinieren - Courgette & Co - Warmteminnaars en Koukleumen - 2e helft van april voorzaaien
ZYNBci2s-6s 4:14 Stadstuinieren - Bonen voorzaaien in houtsnippers - 2e helft van april
GdoDRJfSYfo 5:13 Stadstuinieren - Waarom zou je groenten en kruiden voorzaaien? En waarin?
sYQiViie-78 3:36 Stadstuinieren - Tomaten en Pepers verspenen / oppotten - begin april
L3fkz90fND4 9:25 Stadstuinieren - De aardbeien en bieten gaan naar buiten - begin april
HVHceitbQsw 3:22 Stadstuinieren - Bloemen, kruiden en sla voorzaaien - begin april

# Alan Watts

53k--lN1QmE 2:03:35 It just is - nature of consciousness Alan Watts Black Screen, No Music

# Orchestra of the Age of Enlightenment

t_ERVpRupDQ 10:16 Introducing the Baroque Timpani | Evolution of Timpani Part 1
oOmDgEOiInI 5:38 Music for Superstar Castrato Senesino: GIOVANNI ANTONIO GIAJ - Fra l’orror d’atra foresta
viMru6SyyCY 10:26 Exploring Beethoven's Fortepiano
bLExM-KbeuY 2:25:00 LIVE AT THE HEX
G6SdhFI7h84 5:50 JS BACH: St John Passion - Evangelist recit (No. 6) and 'Von den Stricken' (No. 7)
N56wrMeGRts 13:23 BEETHOVEN: 6th Symphony 'Pastoral', 1st Movement - on Original Instruments
hTaw9TwFZ1s 1:14:03 LIVE: The Night Shift at The Old Queen's Head
LMyEXljumCI 32:04 LIVE: The Night Shift at The Old Queen's Head
Iq8WkkPZWjk 1:26:04 LIVE: The Night Shift at the George Tavern
riIpboxWv3U 8:13 Introducing the Chalumeau
7k_TGe-crFw 3:51 The Rediscovery of Schumann's Violin Concerto
G-8hUg-nRdM 8:54 Introducing the Cor Anglais
6gU_zn5uGsM 4:06 TELEMANN: Trio Sonata in A major TWV 42:a6, Allegro
0yDoqwjarNQ 3:24 JS BACH: Jesus bleibet meine Freude, BWV 147
ueTWLXIZwtc 3:41 JS BACH: Magnificat
KKTqN894UCc 3:49 MICHAEL PRAETORIUS: Es ist ein Ros’ entsprungen
_-XIpGwLR34 5:32 TELEMANN: Umschlinget uns, ihr sanften Friedensbande, Aria
ikzjRR-_-JI 4:12 GIOVANNI GABRIELI: Canzon Duodecimi Toni (Arranged For 8 Violins)
nws3KudckOo 3:26 TELEMANN: Trio Sonata in G minor
GnKDt1xp5zk 15:16 JS BACH: Cantata - Nun danket alle Gott BWV 192 from Bach, the Universe & Everything
aJuxUrz61kY 1:40 Look, No Bass!
anf22WLxMR0 3:26 How can you spell BACH in music?
MK79MKfNG5U 1:17 Kristian Bezuidenhout plays Schubert's Trout
UtGYDyfPlCg 4:58 What is Chamber music? | Illustrated Theory of Music #11
4GKO8MaXxr8 10:31 Introducing the Cornett
WDLIVYoSVJU 0:30 Announcing 'The Wilderness Pleases'
1zOMzjIniVs 12:56 An Inside Scoop On The History Of Gut Strings | Illustrated Theory Of Music #10
oFZyFkXMu5k 1:52 Sea Voyages and Salvation with Roderick Williams
0mXCQZOYMcU 10:08 MOZART: Piano Concerto No.23, K488, Last Movement (Steven Devine: Fortepiano)
66g6i5FVLfw 4:01 What Power Art Thou (Purcell) film inspired by Gotye | Dingle Yandell
XLUF0uo2wlo 0:53 Specialise in music from a particular era? Too restricting.
HBC92ISqLJs 46:56 OAE Meet the Band with Kinga Ujszaszi
Gccx824NVVo 8:23 Making sense of the suffering in Bach's St John Passion | Mark Padmore, Nakhane and Grant Gee
M5gPcBqtDt4 2:51 Why does the Oboe Da Caccia move us to tears in St John Passion?
hRMA9q5n9bc 3:17 What is the secret to St John Passion's enduring relevance?
oAJnQ3tdNYk 7:42 Continuo in St John Passion | A closer look at the Viola da Gamba
RxEbYxjVoNw 2:04 OAE Regeneration Appeal
tCj3D2iXq_A 1:36 Bach | St John Passion
VgOBxnmdTf8 6:32 Rameau's Les Indes Galantes | modern interpretation by Acland Burghley students
vA281KN8f_I 4:06 Mezzo-Soprano Helen Charlston reacts to her Coldplay inspired music video
ybig-0BBihA 11:26 Introducing the Lirone
19RJKnh9hbU 3:54 Dido's Lament (When I am Laid) film inspired by Coldplay | Helen Charlston - Remember me - Purcell
m13ajql-WXo 3:22 WAGNER Tristan und Isolde
U0t59VxBPfE 10:26 The Curious History of the Clef | Illustrated Theory of Music #9
98hJ1B8uhko 3:10 Introducing Mozart's Single Action Pedal Harp
jpQaGJTh2mU 11:43 Introducing the Sackbut
JEMn4veCPLE 2:09 Beethoven and Brahms on OAE Player
MqKmNjAc-xs 5:07 Introducing the Evolution of the Bow
8DSP6PQBL88 1:49 Handel's Messiah trailer
EB3EEJX5ejw 0:31 Mozart's Minor Miracles in the Age of Reason Trailer
KK0vyTsc2NE 6:33 Baritone James Newby reacts to the making of his music video
CF5bOdRpNh4 6:16 Handel ‘Cara pianta’ from Apollo e Dafne | inspired by Radiohead 'No Surprises' with James Newby
zmVjpiMEHYo 0:33 'Seeing Double' with Nicola Benedetti and the Orchestra of the Age of Enlightenment
Qzvp4_igvyw 12:34 The Harmonic Series | Illustrated Theory of Music #8
Gj7j0PXOLeo 0:53 Introducing OAE PLAYER
0rgM3PVukb0 59:16 'What is the Value of Digital Art?' Panel Q&A
PV9Jut4Iu6A 19:43 The Voice: Anatomy, Function and Covid | Dr Declan Costello
siHMpS8TStM 8:01 What is the Canon? | Illustrated Theory of Music #7
xOsZ10z-iMc 5:35 What is the Secret to the Chorale? Part 2 | Illustrated Theory of Music #6
4OLDcvOpXKw 7:41 What is the Secret to the Chorale? Part 1 | Illustrated Theory of Music #5
O7XG8aRRb3E 5:52 Something Special Happens: Camden New Voices 2020
QeDjTYH7MBQ 3:35 What is a Cantata? | Illustrated Theory of Music #4
AOPYv2rjVIo 2:05 Telemann Concerto in A minor, TWV 44:42 - Allegro | Bach, the Universe & Everything
sQgNgs5EzaQ 8:53 Introducing the Oboe d'amore
fgJDrNjQyfI 5:18 The Hemiola | Illustrated Theory of Music #3
SyBYRlB6VW4 3:11 Introducing the Hurdy Gurdy
o59bjj3WUUo 29:02 Musicians on Call Online 6: All About the Bass
hJVoN_JQPT4 12:22 Appoggiatura | Illustrated Theory of Music #2
NdlANO97RiU 33:59 Musicians on Call Online 5: A Folk Journey
nr95NjOL21o 48:06 Schrödinger’s Pandemic | Bach, the Universe & Everything
-7xlZARdd28 2:12 Introducing the Illustrated Theory of Music
s684W1WbXTY 8:02 What are Barlines? | Illustrated Theory of Music #1
shWTiybxBEE 34:06 Musicians on Call Online 4: Pastime with Good Company
VrFUHFL34as 32:11 OAE TOTS: interactive sing and play for 2 - 5 year olds
_KNPIJHcqtA 35:15 Music and Chat for a While - OAE Interview with Ian Bostridge
I4IEF6F5MW4 27:52 Musicians on Call Online 3: Learning New Skills
8E4-Db2-p7g 29:25 Musicians on Call Online 2: Instruments Galore
gL_lgsysAiw 30:02 Musicians on Call Online 1: Hello!
eumxlVBlG5k 3:57 Quarantine Sessions: Bach's Air on a G string
EptO4p-ynQk 34:07 Can Bacterium Compute? | Bach, the Universe & Everything
jQC4mglx5uE 2:20 Introducing the Baroque Spoons
XQoE3JyOjqs 12:37 A New Created World
fFo-VJ8jUkU 2:15 The Night Shift on hold
nb-AkHlKgKA 2:41 What Classical Musicians Give Up For Their Careers
FcM0Jt6Xf-Y 1:31:16 LIVE STREAM: Classical Music, Minus the Rules - The CLF Art Cafe, Peckham
U0KLAQ_iiEM 2:02 A Quick Guide to Thomas Mann's novel, Doctor Faustus
ptQJdIv2uUI 9:23 Introducing Beethoven's Flute
TBV6U-dUJwY 3:49 Why support us?
lv9W7qrYhbk 7:15 Bach vs AI: spot the difference
BO2JeKiwbvQ 10:38 Introducing the Viola da Gamba
rLYRfHjZIy8 6:47 Introducing the Baroque Contrabassoon
QAcp9useNxc 2:12 The fine line between Salvation and Damnation
FAnjAVtuck8 2:54 Quiz: Organ in the office
Y7k7pX6x8g4 2:10 What is Enlightenment?
G1rrUCTUOKU 12:41 Our Band | Orchestra of the Age of Enlightenment
HMgD6ezml7U 4:27 Introducing Goossens' Oboe
wPNWrcYQujE 1:27 Sibelius Symphony no.2 (rehearsal)
HNt6-q3suo8 6:29 Max explains... where we play
I7QAqZkuV5s 0:48 Toutes Suites NOT Toot Sweets
I5l7yNxX6ps 1:09 Gilbert and Sullivan - Once More Gondolieri
ocvATSndzFA 7:09 The Birth of the Symphony
cPvpyI-bmEM 5:16 Introducing the Oboe da Caccia
iRO4yreLSmw 3:46 Introducing the 19th Century Horn
ifBHEcsWMHg 1:45 Love and Duty, with Magdalena Kožená
eVabz8LneI4 9:59 Introducing the Baroque Theorbo
1z2xtmkqaAs 4:31 Lagrime Mie - Barbara Strozzi
D3NCGSvKHCQ 8:41 Introducing Mozart's Clarinet
v-J3YkRKn7c 6:45 Introducing Handel's Organ
9owI4Mnym0w 3:36 Fantasia on a Theme by Thomas Tallis | Vaughan Williams
pfLPYKw5h38 3:35 Life, Liberty and the Pursuit of Happiness: 2018-19 season trailer
sBD6OhkyW-Y 3:54 Why are we so obsessed with sending music into space? | Dallas Campbell
MgwE22lg9cA 4:01 Mozart Horn Concerto No.4, Rondo - on natural horn
h9g1c2bZSq8 4:23 What is Chamber Music?
hcfl3lYQy9M 3:23 Introducing the Clavichord
gMoOhCh_GUM 5:32 Introducing Beethoven's Contrabassoon
KfBoVGIoobY 10:29 Introducing the Baroque Double Bass
2ef95BZfYcw 4:52 Introducing Mozart's Fortepiano
fAGsmq2gZ5c 3:07 Why is it called the Surprise Symphony? The secret of Haydn's success
eFn992wz-ss 3:43 The Science of Attraction
zXAWa_rnyus 0:33 The Best of Dance 1692
YRBuoup80UY 2:27 VIERDANCK | THE NIGHT SHIFT
VhMzEiLqlrY 0:54 Dangerous Liaisons | The Greatest Hits of French Baroque
4LoqTzrFl7c 2:37 Our Rosenkavalier Film Orchestra
es4wecjHXCg 4:35 A lost art: music in silent film
6oAjCirkZjc 5:43 Introducing Haydn's Oboe
oVXL-OTgjuo 0:44 Der Rosenkavalier
7vuq9Ls2OVs 4:13 Mozart's Naughty Notes | Rondo from Horn Concerto No.1
PLHC8I8RwMg 4:24 Introducing Mozart's Horn
-Kl71jEniLA 4:18 Mark Padmore explains Bach's St Matthew Passion
MHmZYZPCb_4 0:34 The Night Shift trailer 2019
ZO88Ydj-S9k 5:49 Introducing the Baroque Cello
nhLcMFgPoBY 1:42 What is it like to be a mezzo-soprano?
wOkIZ9TjvYE 1:34 Nicola Benedetti: Beethoven on period instruments
PbCEybm0by4 1:02 Life, Liberty and the Pursuit of Happiness : 2018/19 season teaser
eLpAaIqJPck 2:51 What are period instruments?
X8XdmhIUzJs 16:39 Particle physicist Tara Shears on Antimatter | Bach, the Universe, and Everything
PMwszGtyfTk 1:28 The Big Give Christmas Challenge - Rising Stars
f4ZU4PlXqu4 3:31 What is a Cantata?
UDMCWta1dns 2:35 Trad Klezmer, Die goldene chasene
Z4o14vNIOIw 2:57 Double bass bow: French or German?
LQ2MuAvIz0A 3:32 Sir John Pendry: What is light?
lHvTU9q5K-0 1:56 OAE back at West London Synagogue
HfTZ_c22N4w 0:30 Bach, the Universe and Everything
cdRX9Ba1Nx8 2:09 Soprano Louise Alder on Handel's Semele | Orchestra of the Age of Enlightenment
rHxcrZwtPEY 4:50 G minor Chacony by Henry Purcell | The Night Shift
UEgOgkrncx8 3:23 Roman Krznaric: Is love what you think it is?
aKEBRD9skkY 6:00 Judas: Can the ultimate betrayal ever be forgiven?
l5R9tVMp9HM 1:10 What Is Right and What is Wrong? The Judas Passion and St Matthew Passion
ls-bij2qMT4 3:02 Introducing the Baroque Bassoon
QNxV92-6Gnc 1:26 From Baroque to Rock: Handel & Björk
_jGHJ3PprvI 2:29 From Baroque to Rock: Bowie & Beyoncé
Pl13kjCSCs8 1:50 From Baroque to Rock: Handel & Radiohead
DYpaoStM4js 5:45 Sam Hall, 18th Century folk song | The Night Shift
doRUl1jfJDY 2:57 Introducing the Baroque Viola
KLrVKBzfAZ8 0:36 The Musical Landscapes of King's Lynn
vVXveQ4DHpE 1:05 Introducing the Piccolo Violin
H_SS0WLaUsI 2:32 Introducing the Baroque Violin
YnwDlLIac_A 5:08 Introducing the Baroque Oboe
n6Ts2z9tXg8 4:56 Introducing the Baroque Flute
UT5OqjubfiI 5:07 Mozart's Horn Quintet, 1st Movement (on a hosepipe horn) at The Night Shift, Islington.
6XN_qgbM6Dc 6:51 Introducing the Baroque Trumpet
HEMeybr5Rdo 2:21 Introducing the Baroque Horn
BRNhNR8EbKU 0:33 Come and hear the musical landscapes of Lowestoft
yXxe5wMNE3I 2:50 Steven Isserlis and Haydn's Cello Concerto in C | Orchestra of the Age of Enlightenment
T0i3AOzLICg 0:35 Musical Landscapes - Durham | Orchestra of the Age of Enlightenment
7qagu9sTU5o 3:47 Sarah Connolly on Berlioz's Les nuits d'été | Orchestra of the Age of Enlightenment
bwnfAe3PAso 0:55 OAE in 60 seconds
lQNdEWutiZk 7:05 Vivaldi’s Four Seasons with Kati Debretzeni, pt4: In Depth
JyYBZmth6zk 4:52 Vivaldi’s Four Seasons with Kati Debretzeni, pt3: In Depth
OovG_RWEqVE 8:54 Vivaldi’s Four Seasons with Kati Debretzeni, pt2: In Depth
ozYcv8_CICk 3:32 Visions, Illusions and Delusions: 2017–18 season trailer
3t_M-fVRnz8 5:07 Vivaldi's Four Seasons with Kati Debretzeni, pt1: In Depth
7uFz-HkH_r0 3:06 Christmas in the 17th Century | The Geffrye Museum
soeq9TR5evw 2:19 Noel: A Christmas Celebration, Kings Place
Z7jWYiQz1cA 2:56 Introducing the Harpsichord
egL0z-lBMBQ 5:33 Passacaglia in D minor by Fischer | The Night Shift
03z6sTP2jRQ 0:30 Mad skillz from footballer turned harpsichordist Ottavio Dantone
gnz4CgYS_oM 2:33 BBC 'Embedded' composer Matthew Kaner chats about his new piece for The Night Shift
kqV1ye-AMWk 2:04 The Choir of the Age of Enlightenment 'Faire is the Heaven - Sacred Songs of Love'
Mtq2aB_F27I 4:58 Polacca By Punto | The Night Shift, The George Tavern
WSlvLS1t0XU 2:55 Vibrato with violinist Julia Kuhn | Orchestra of the Age of Enlightenment
XXVMQS8wScI 0:09 The Night Shift live from Old Queen's Head, 26th July
DLuM8cbc1dM 6:06 Explaining Pitch | Orchestra of the Age of Enlightenment
3g_PCnAGnfg 2:26 Introducing the Schnellar Timpani
nBC7zSACN6U 1:31 "Play as if from the depths of the forest"
bNyfOQgCjY0 0:38 New Night Shift venue: The Bussey Building, Peckham
lTHP_RKMO8k 2:36 Max Mandel on Mozart and Michael Gordon.
TSqBYccihhU 9:55 In Depth: Sarah Connolly on Mahler and more
4NWoXEgs0HU 2:30 Lisa Beznosiuk on the flute in Bruckner
bSMTB1lkXUk 2:38 Philip Dale on the trombone in Bruckner
bF18Hst1ILY 5:36 Watercycle 2015
Qn8oKHRmGhw 3:30 Roger on the the Horn in Mahler
d0JHZhhA7pc 2:51 Daniel Bates on the Oboe in Mahler 2
N5vy5lrbkqc 4:25 Vladimir Jurowski on Mahler
aEag95NcMfA 2:30 Madness and genius - an overstated connection?
9tkib1MezlY 1:48 Hen party - Haydn's 'Fowl' Symphony
1MqId5hqql0 4:14 Schumann’s Violin Concerto
oEQ01yS4J6U 1:20 OAE musicans reveal their New Years Eve plans
R0uEobFss5k 2:27 The Piano Tuner: Sjoerd Heijda
m9zEjAzUes0 0:49 DJ plays Bach at the Boiler Room!
MaKnfDddgLI 4:46 OAE Archive #1: Bach's Double Violin Concerto (1st movement)
HJyut2PIXN0 0:07 The Night Shift: 30 November 2015, St John's Smith Square.
eC-0V4kV5XI 3:06 OAE at West London Synagogue
DZy6qJykJsU 1:48 30 Years of Breaking the Rules
SpmrBUGSpk0 0:16 The Night Shift: What the audience thought
dPVXATS21Hk 2:11 Watercycle in Brighton: Part 2
ZJghuZ6kHuQ 1:54 Watercycle in Brighton: Part 1
dpG1b0VHHZ4 0:55 Behind the scenes at our Birthday Photoshoot
0sZHfw6Fn5g 21:17 Violinist Catherine Mackintosh on her career and her instrument
xh7GLNG8pRw 6:55 Violinist Alison Bury: Her Instrument
zIUH_XlP_bs 3:29 New Music for Old Instruments: Stevie Wishart on her new composition
6-h-j55SELE 0:06 The Night Shift: 12 May, Southbank Centre
6YjMZ3WIvw4 1:33 The Night Shift: ask the musicians #01
sVkE6TtRYHM 31:36 Post-concert discussion with Steven Isserlis, Isabelle Faust and Robert Levin.
DcVqcIpel_Y 1:08 Best of Both
u3yvfFz42d4 3:07 Adam Fischer talks about working with the OAE and Dvorak.
Gm9539tpXKg 1:52 The Night Shift NY - 1 March 2015
uhQjCsoTNw0 0:41 Rules? What rules? The Night Shift at the George Tavern
HZIW70PQ5cg 2:17 Vladimir Jurowski on Mussorgsky's Boris Godunov on period instruments
iPcqkfs0QvU 2:05 Flying the Flag: The Bohemians - Myslivecek
V50kq9aJapg 2:31 The Tempest at the Sam Wanamaker Playhouse
MGTacLQ_r1k 1:35 Vladimir Jurowski on Tchaikovsky
k0RydjhU908 3:16 Andrew Mellor on Handel's Messiah
3FFur8rHqds 2:41 What happened when the OAE took The Night Shift to Duckie?
4MDm_2rNrt4 0:28 H Factor teaser Kings Cross has got the H Factor. Have you?
mHuYJjdUyiw 2:41 "It should make you smile" - OAE musicians talk about our 'Lord of the Strings' concert
EwixYN2WZ1g 3:12 Richard Tognetti on the 'Lord of the strings' programme
rYolBRiNsGw 1:29 The Works: Your guided tour of the classics
OxafORb8LCE 1:13 What the audience thought - Le Malade Imaginaire at Sam Wanamaker Playhouse
vnIuFrxlB_s 2:34 Preview: Le Malade Imaginaire at the Sam Wanamaker Playhouse
RZO3rWanwoA 2:54 David Kempster talks about Donizetti's Les Martyrs
lrBDq-ra9Bw 0:39 They've been. Have you? Join our A-list audiences* and get 15% off tickets
nxEGDaELCVU 1:46 2014-2015 concerts trailer: True Sound, True Music
6LZCVQsQk38 4:12 Rameau's Zaïs
pdsfU510IZ0 0:41 Introducing...the 'other' Beethoven
Qt0W1Keaqtk 2:08 Two minutes on...the Ophicleide
84LH1alXfQc 3:20 In rehearsal: Sir Roger Norrington conducts Berlioz
YqiCl8KDg6o 1:03 OAE in rehearsal: Rameau's Anacréon
O_m0lKpzRdI 2:52 OAE Education: Watercycle
XUkTkfdc6vE 4:04 'Fairest Isle' by Purcell | The Night Shift
azcdjEia7xI 3:03 Sir Mark Elder and Joyce El-Khoury talk about Donizetti's Les Martyrs
bOaXH6oAZIU 1:08 Boyce's Solomon - in rehearsal
yAld19m8P6o 0:35 Mildly Rude
QyrPkxvFVuo 0:54 The Night Shift - Burning up the rule book
FrZvTWT5M_A 1:23 Sir Simon Rattle rehearses Haydn's Creation with the OAE
pcEuhEUuTJQ 5:52 Rameau's Zaïs
UkCNJtLMGVk 1:19 Gamechangers: Symphonic Greats - audience reaction
-qTxxQbwJN0 2:19 Spinal Chords by Sally Beamish | Orchestra of the Age of Enlightenment
xxkryCD6xuc 1:38 Introducing... The Night Shift
GLfXDIbUIjY 1:12 The OAE rehearses Schubert's Symphony No. 9, 'Great'
XD4kNY34AoE 3:15 Introducing the Violoncello da Spalla
S5Np9ncOId8 1:13 OAE: The Works (Trailer)
iiI76msHiiQ 1:28 'French Fancies' audience reactions...
SpP8uVR0JX4 6:18 How to make a hosepipe horn
3fcVU_i0QrI 3:54 An interview with the Labèque sisters
km__RL6HhC8 0:52 Offenbach's Fantasio: Trailer
j_cxE7dZhrA 4:00 Sarah Connolly and Sir Mark Elder on Offenbach's Fantasio
HDQLdXXKbEE 2:20 Fantasio by Offenbach: The Story
2-Z5BnAnEBs 1:18 The Night Shift: Beethoven at the movies
YKNVOM3cYwI 3:08 Performing Beethoven's Symphony No.8 from the first edition parts
bViZG58urQc 3:52 Vivaldi's Four Seasons - Winter, Allegro | Choreography by Henri Oguike
KliIwPMqU1A 3:28 Composer Clare Connors
fHfhs85kgm4 3:31 Kim B Ashton interview
8_zZLhix4wg 2:39 The Night Shift Pub Tour: The story so far
FRqJryj97rQ 2:52 William Christie on Rameau
CZjy10dK5TU 1:13 Add fireworks to your Monday. (and get 10% off)
UIKHiVEu63w 1:05 MONDAY
mKevUFEljS8 2:23 OAE New Season Trailer 2013-2014
h6onNwsjd68 4:01 Laurence Cummings chats about The Night Shift at Wilton's Music Hall, 31st July
8-R4qvKTHNk 5:50 3 June 'A Tribute to Lorraine Hunt Lieberson' Audience Reactions
AZ6R9nfYUdg 2:14 OAE Photoshoot Audience Interviews
k84Dv_DGSf8 1:12 OAE Season Brochure 2013-2014, hot off the press!
iZqvZINQtBM 2:18 The Night Shift: The Amersham Arms, New Cross, 23 April 2013, Audience Reaction
zcxWFoEUmWI 1:16 OAE: Music for Everyone
_HRWZcdpLeU 1:58 Bach Unwrapped Audience Reaction: April 2013
lKZh25_HBn0 2:44 John Butt on Bach
mR_tZ1FZFD4 1:52 The Night Shift: The Amersham Arms, New Cross, 23 April 2013
aHJpWirnEjI 1:00 Mozart - Making Ennui Epic
uKBFjR6mZlM 2:16 OAE: By Jupiter, January 2013: Audience reaction
8CuC4UMLdU8 4:40 V4: The Seasons - In Depth
-ful9sG6FZM 1:50 OAE: Creation, January 2013: Audience reaction
wMG4E6GZZs4 1:51 The Night Shift: 22 November, Queen Elizabeth Hall: Audience feedback
gwFOEhhs0Ec 1:10 V4: The Seasons: OAE & Vivaldi & Henri Oguike
Gb1-N1JTCX4 2:27 OAE Education: Shine a Light
h0S0uHMkvLg 1:50 The Night Shift: Audience feedback, 25 October 2012 Queen Elizabeth Hall
Xcl_dv4BfPM 2:09 Art, Music and Other Visible Things: OAE@Whitechapel Gallery
dBQ5U-PrTNw 1:53 OAE: Handel's Messiah 2012 - Audience reaction
cqBuOss-ysM 3:19 Messiah: the best bits
EKk8pDwgeKo 3:46 Rob Howarth and Handel's Messiah
TQSL7dg6zpA 2:46 The Night Shift: Old Queen's Head, 25 September 2012
V1WYwJphMyg 1:37 Queens, Heroines & Ladykillers: 30 September 2012, Royal Festival Hall
XWGKNdB48wo 1:55 Queens, Heroines & Ladykillers: 8 November 2012, Queen Elizabeth Hall - Audience feedback
dyWWOPoTNCU 1:54 The Works: Audience feedback from March 2012
v1f5fLoXTEs 0:57 OAE Big Give Christmas Challenge
po3K92bMwxI 3:08 Mozart's Horn Concerto No.4 on the Natural Horn
Mal53MsgQk8 1:40 'Dubussy' Remix Contest Judge Chapelier Fou gives advice on how to approach your remix
-Mj6RvyZw1Q 2:45 Beethoven Symphony No.9 CD and Sir Charles Mackerras
GFE4YB2qKhQ 2:19 OAE: 'Queens, Heroines & Ladykillers' Competition
AqlM961J3Fo 2:42 French Impressionists tour with Sir Simon Rattle. Part 2
55MYnHqGvY4 1:03 The Night Shift at the Little Top, Greenwich
a7wA4KZywQw 2:21 The Night Shift comes to Blackheath...in a tent
J1RnQjm5v3s 4:10 The making of the OAE 2012-2013 brochure - behind the scenes at the photoshoot
jU7C20gWs9Y 27:41 Steven Isserlis, Isabelle Faust and Robert Levin chat post-concert
zFHThUVYwLQ 9:19 The OAE on tour - with Sir Simon Rattle and the Labèque Sisters
Cng6wq1O5Gc 4:54 OAE: Pierre-Laurent Aimard talks about Ravel's piano concerto for the left hand
_mqhtwX4oNI 1:51 Look! No conductor! Audience Feedback
fsoDc9Tkn2M 1:59 Bostridge sings Bach: Audience feedback
7eTlLMBttZ4 0:50 OAE Season 2012-2013 brochure: Teaser
vJIBxM6IDvw 1:07 Introducing the OAE Green Travel Mug
feIJma92Dek 2:16 OAE: Audience Reaction voxpops - Berlioz Romeo & Juliet
O6fRUQyaQAo 3:33 OAE: Beethoven's Missa Solemnis Audience Reaction
KRqCAhxTJpE 26:29 A Royal Invitation
_DWb4UOQb4A 0:55 Anthem for a Child 2012
B-7pxFOuX5c 1:43 The Works is back with Bach
fMD_NnncFZU 1:57 The Night Shift in rehearsal, with Jon Jacob
A1FoKqEtFBs 2:46 A musical stalker...
RynJicZQacA 0:47 The Night Shift at the Roundhouse / Reverb 2012: Trailer
Zy38DobmhBw 3:06 The Night Shift Pub Tour: The George & The Amersham
gPy6y65nFc4 4:47 Ceri and Will talk about The Night Shift pub tour
qnW78hnbHl8 2:34 The Glory of Venice: Audience reaction
q2V18CnEX9M 1:38 The Night Shift Pub Tour Trailer
Z6XgSc5RQHU 0:33 The OAE and me
DEDAPTCyi5M 3:14 OAE: Laurence Cummings on Handel's Messiah
OYFIhlp4HZ0 3:25 Orchestra of the Age of Enlightenment: Beethoven's Missa Solemnis
RuJz3oCWEGA 5:30 Pianist Robert Levin on taking risks in performance.
vyIE-S8Ez1Q 1:02 OAE: The Works Trailer
W5hQDjRDmQ8 2:24 The Night Shift: Pub Tour Appeal
dK1oACCIsq8 1:09 OAE: Edinburgh in 60 seconds
_JdZm7_17NA 2:50 OAE at the Edinburgh International Festival
vy_j50dpKHE 2:39 OAE: The 'mini' Night Shift
1fq3SJlXoq8 2:10 OAE: Audience Reaction - Sir Simon Rattle & the Labèque Sisters
8_N1tyGsgzU 1:33 OAE: 'May the fours be with you' - 4 May Voxpops
-KSPHtbew_E 4:50 The Night Shift: Behind the Scenes at Village Underground
38xSPP53g5I 4:36 The Night Shift at Village Underground, Shoreditch
vlHgLS62lhQ 4:54 OAE: The story of Mr John
6yrAxCB9VFk 2:34 The Night Shift: 4 May Audience Vox Pops
4hsJHaEWWwo 0:53 The Night Shift: OAE on Handel
JGQL9hRuvvE 1:59 The Night Shift: Handel
gQwBAmbwXLI 3:26 OAE on Sir Simon Rattle
BSTXaQFfRmg 4:36 OAE: Megan's Alphabet Challenge (AKA the A-Z of touring)
wbQYGLTWRA4 2:05 Handel: What's the appeal?
0qhJO0DN5P4 1:05 OAE players on Handel
BBmCi3csiTg 2:46 The Night Shift: Conductor Roy Goodman on Schubert's Symphony No.4, 'Tragic'
tC6SPGuOOHQ 3:42 OAE: Baroque Contrasted Vox Pops
1tj4xLMNIGg 7:48 OAE tour diary: Sheffield
mOPLCChomj8 3:06 The Night Shift Vox Pops
vuCtJFWrXb0 5:44 OAE: Matthew Truscott (violin) on 'Baroque. Contrasted.' at Kings Place
T4otceedkh0 6:49 OAE staff on 'Baroque. Contrasted.' at Kings Place
7Y3EAbtruMU 8:06 On tour to Paris with the OAE: Will's video diary
fESVfVa_gMU 5:39 The other amazing Mr. Bach
IiVlCgCb3vQ 4:45 OAE: A Royal flute lesson
prMEDOFzXlU 2:15 OAE: Symphonic Enlightenment Vox-pops
X-afM0tMIlI 5:47 OAE Released: Artwork concept
4xosip6yBxs 4:03 OAE Released: Monteverdi's Vespers
x2Oan94pnCc 12:05 Vladimir Jurowski Interview
m6UcRGk0JRo 5:24 Sarah Connolly on Mahler's 'Lieder Eines Fahrenden Gesellen'
8Q0l_K1ZrnY 5:59 Cylindrical Vs Conical: Lisa Beznosiuk on Flutes, Mahler, Wagner and Liszt
rqbwGacYpew 5:48 Crooks Vs Valves. Martin Lawrence on Horns, Mahler, Wagner and LIszt.
jeEhatHlwvQ 1:45 The Night Shift: OAE players on death, vomit... and Mahler
WEYw8ca_Io0 1:52 OAE on Mahler
lXSvlG-_Eo8 1:59 Ceri Jones 'Seraglio' OAE Tour Diary
PRKb_SWBFg8 1:57 Audience reactions to Mozart's 'Abduction from the Seraglio' performed by the OAE
VgIqVSzeaLs 8:45 French Connections - Orchestra of the Age of Enlightenment
wAsehXN6l80 1:23 OAE staff comment on Cherubini's Overture Medée
Rj2-ZjbzElM 3:38 The Night Shift at Wilton's Music Hall, Aug 2010
nqwiuPRDzCs 3:23 Songs of Wars I Have Seen
VsGlckg8gq0 3:24 Orchestra of the Age of Enlightenment perform Haydn's Symphony No.64 at The Night Shift
UL7CVtQjIBc 4:46 The Night Shift: Backstage
YWfSmZectL8 3:20 The Night Shift - 28 April 2008
zYL_I2F93tU 1:40 The Night Shift

# Townsends

_FbwRSfedoE 9:07 Sewing Histories' Most Popular Garment - The Fabric Of History - Townsends
oGA-NrSW6XU 1:02:05 Live In The Nutmeg Tavern!
E2xJjgY9RDQ 41:31 Full Cabin Build - 4K Full Length - Townsends Wilderness Homestead
4wzZi6AmDlI 59:11 Live In The Nutmeg Tavern!
pcOy34qn4B4 8:07 No Cars, Just Boats - Travel 300 Years Ago
7GuplGQ6ZhI 17:52 What is an Apple Dumpling? - 257 Year Old Recipe
XnC4U9S_qjg 8:44 Our Favorite Fire Clips Compiled - Peaceful Music - Enjoy!
ouAwIVABrSE 54:56 Oh, So Dated - Live In The Nutmeg Tavern!
1QiWyqBdREU 27:31 Reacting to Antiquated Medical Practices! - Archaic Antidotes
yzldWkxGt4k 59:00 The Book of Trades - Live In The Nutmeg Tavern!
UUCuubcxkFc 13:08 Roofing in the Wilderness - Thatch - Townsends Wilderness Homestead
jbEGABYnuIU 58:41 The Well Digger - Live In The Nutmeg Tavern!
sbcByPNuA5c 10:22 How To Make Brown Bread Ice Cream - Recipe From 1806!
Sl7Ta7r-irQ 1:05:41 Chicken Contest! - Live In The Nutmeg Tavern!
RvNhHIgVSVw 8:52 Log Homes of the Early American Frontier - Investigating and Re-building
uPMG681IwN8 9:38 Keeping Livestock on the Frontier - Wattle Fence Build
J6gmU0S7t4o 58:36 Live In The Nutmeg Tavern!
LgpqLcR8a4w 12:25 Secrets to Building with Logs - Frontier Log Barn - Extended
FzOVLy2eH58 15:04 How To Make Homemade Raspberry Wine: Time-Tested Recipe!
IASqjWncv6I 1:01:35 Ice Cream in the 18th Century! - Live In The Nutmeg Tavern!
ps6NxaoR69M 17:24 Hand-Dug Well Using Primitive Tools? - Frontier Well - Townsends Wilderness Homestead
# @removed - books and let's-plays aren't good TV
# j5cpxSJStWE 2:04:59 Live Play-Through "Lewis and Clark: The Expedition!"
QAL-9V0635Y 11:22 Were They Afraid to Drink Coffee 250 Years Ago?
# 5CdgQkw41dU 41:25 Finale! Townsends Book Club Episode 17 - Autobiography of Benjamin Franklin
vsvYZtFyqM4 10:20 How To Eat Like Benjamin Franklin
# H94KCQ75gmc 48:30 Townsends Book Club Episode 16 - Autobiography of Benjamin Franklin
8USEQGCyFqE 8:32 Wood-Fired Steak from 1788 - Frontier Food
IOaz6EQZgg0 11:12 Summer Sweetness! - Mulberry Pudding Delight - Historical Boiled Pudding
# Cl2NUnEjM7A 37:10 Townsends Book Club Episode 15 - Autobiography of Benjamin Franklin
3ky02udlbpI 10:32 Barbecue Pork on the Frontier in 1824 - BBQ with Gravy?
# yXDI3WJ4Cng 50:30 Townsends Book Club Episode 14 - Autobiography of Benjamin Franklin
aRoukj48bkc 11:38 Unusual and Delicious Pan Fried Puddings from 1773
iCrJBiO0GLg 9:51 Let's Get This Straight - Primitive Levels
# 6fs6DtYM400 44:35 Townsends Book Club Episode 13 - Autobiography of Benjamin Franklin
KzcoUtLufps 8:59 200 Years Before "Mayberry" - The Self Sufficient Small Town Of Early America
# do--rwss7UA 42:21 Townsends Book Club Episode 12 - Autobiography of Benjamin Franklin
4JdW-B0bQ9I 10:12 Whole Almonds Crushed To Make Flour? - Almond Cheesecakes
# 8t5Asj6kK0M 54:06 Townsends Book Club Episode 11 - Autobiography of Benjamin Franklin
EcATbhRA8-4 8:23 Inside A Woodturners Woodshop - Old vs. New
fsJbnWaa4tA 11:55 Breakfast Waffles Over The Fire - 18th Century Cooking
Qwyyi5-Ye7c 9:13 Hide Glue! - Primitive Adhesive from the 1700's
HidS4xItLsM 1:02:11 Live In The German Kitchen!
# cspSM6eTLB8 49:35 Townsends Book Club Episode 10 - Autobiography of Benjamin Franklin
rEXcs8bR_VE 25:23 Making Pottery with Jon - Grease Lamp - Kicking the Wheel
iTGqzVXD36k 9:03 The Myth of "The Rugged Individual"
# PVtsgaoLrP0 51:56 Townsends Book Club Episode 9 - Autobiography of Benjamin Franklin
8HTgcZpDE1s 10:54 London Leftovers from 1669 - Citrus and Meat Hash
# lo_ZBwkVgEg 38:10 Townsends Book Club Episode 8 - Autobiography of Benjamin Franklin
Zgi4Gbu1ZFE 13:28 350 Year Old Chicken Curry - 18th Century Cooking - Townsends
PnDi0URKwVU 8:02 Inside a Longhunter Camp - American Frontier Trek
# IwuN96WPX3w 54:26 Townsends Book Club Episode 7 - Autobiography of Benjamin Franklin
ld1_Wsx5L3k 9:31 Poor People Food: Budget Cooking In Early America - Boiled Dumplings
# Pkc4xGlzaeQ 55:00 Townsends Book Club Episode 6 - Autobiography of Benjamin Franklin
JBYvgOc1PY8 9:15 Beer for Breakfast? A Working Class Morning: London Print Shop Circa 1725
# 2j7ZKdIMatI 53:00 Townsends Book Club Episode 5 - Autobiography of Benjamin Franklin
QsWja0-_3Ww 11:13 Navy Captain Food in the 18th Century - Cheshire Pork Pie - Pork & Potatoes
p5LK5EOjUYI 10:29 Frontier Blacksmith: A Day in the Life - Decorative Blacksmithing
# DUTGxDmRQlM 56:00 Townsends Book Club Episode 4 - Autobiography of Benjamin Franklin
zqSa3fycEKE 8:59 Shoe Repair: The Work Of The Cobbler - Historical Buckle Shoe Repair
# lEuoxW120Ls 56:51 Townsends Book Club Episode 3 - Autobiography of Benjamin Franklin
P-Mcbf38GfQ 6:20 Potatoes and Greens! 100% Irish Cooking - Happy St. Patrick's Day!
3OX0yGfvRoo 9:05 "What Do I Want To Do When I Grow Up?" - Benjamin Franklin Autobiography
# 0gDIW_7fHQc 57:55 Townsends Book Club Episode 2 - Autobiography of Benjamin Franklin
vg4OIFd5-aA 23:08 Sailor, Soldier, & Explorer Rations: Food for the Commoner - Salt Pork
# nvfBf8Pbi_A 58:25 Townsends Book Club Episode 1 - Autobiography of Benjamin Franklin
zH8xnJQKQVc 29:21 What's In Early American Kitchens? - Colonial Cookware
InmrHSCLKKA 11:35 Preserved Cod Pie From 1769 - "Saltfish Pie" - Townsends
aQd4C7ReaB4 1:02:35 Victorian Era Cocktails and Spirits with Guests, Brian and Amy Cushing of "The Victorian Barroom"
BJE44WX0lf8 11:36 Weird Twist on Famed Depression Era Dish - Bubble and Squeak - 18th Century Cooking
ZQqhtXR4vIs 11:52 Hand-Make Your Own Leather Storage Box - Skills & Trades
hllh5nGIr1w 9:06 Molding Primitive "Plastic" - Horn Spoons in Early America
ODsoWIyyUxw 10:06 Delicious and Hearty Winter Food Storage - Peas Pudding 200 Years Old
up6GNDDTIlg 49:12 The Man Behind Townsends: The "How and Why" Behind a 14 Year Old YouTube Channel
zYQd7afTzrU 1:02:56 Jon Celebrates His Father - Live In The Nutmeg Tavern!
CaVO51lHtB0 10:41 Make A Historical Leather Knife Sheath! - Leather Work - Townsends
WMjY0HVuSDw 8:50 Perfect Breaded Pork Cutlets from 1767 - Classic Steak House Food In Early America
N1Biy5776ec 8:48 Too Much Butter?? - Butter Boiled Chicken - 18th Century Cooking - Townsends
_5qZ-WVhnRo 10:23 Horn: The Plastic Of History - Making A Horn Comb
uRFsHziiyvw 13:43 The Most Complex Broth I've Ever Made - Cullis - Townsends
pbvEN7OVj-0 9:41 Spiced Chicken and Rice from 200 Years Ago! - 18th Century Cooking
Z6adp3fNmdI 22:14 Making “Thatched Roof Pie” with Joe Pera- 18th Century Cooking
kXpAjKwBFM0 8:52 "We have Exactly What We Need" - Townsends Year End Thoughts
QqPSfOO2nnk 17:13 Toasts, Christmas Trees, and Parties with Joe Pera!
RmwlealqwQE 13:16 Gingerbread: Medicine or Christmas Cookies??
HE-BUYK71wY 13:10 Christmas "Cheesecake" Treats From The 1700's
30NL420FLfQ 14:29 Handmake Your Leather Hunting Pouch
2fs-GP5xHGM 11:57 No Seafood? Why Call It "Sea Pie"? - Naval Food
DpwQyt5t2k8 8:02 Unusual Potato Cakes From 1797
Aljq84vtrww 7:04 Joe Pera Reads Nicholas Cresswell - Eating Raw Potatoes!
fLbfpGYf89Y 11:44 Pumpkin Pie Recipe from 1797 - 18th Century Cooking
saKksG37hag 8:25 Fitting a New Axe Handle - Hand Tools - Townsends Wilderness Homestead
xQrA_ShU8wU 16:03 Recipe Failed, But it Tasted Great! - Herb Pudding From The 1700's
5-p0SXLzxNc 9:22 Food Storage: Not Just For Preppers
OzUR8qUZ5VI 11:57 Joe Pera Reads From History
IR4GDrBz8VM 11:33 Early American Fabric Dye
_cReamNHcRA 58:13 The Fall of the House of Usher - Full Readthrough - Happy Halloween!
ey5JYMbI64I 15:19 Joe Pera Makes a Stool for Our Cabin - Townsends Wilderness Homestead
WdenN9TwCc0 13:22 Roofing In The Wilderness - Wood Shingles Log Cabin Roof - Townsends Wilderness Homestead
RLa5hWI1Tv8 10:08 Gridiron Steaks on an Open Flame!
J3vNJ30tWxg 15:51 The First Jelly Roll? - Ancestors Of Our Favorite Foods
nBbvqT4G_e8 11:25 Pumpkin Spice Pancakes In The 18th Century? 300 Year Old Recipe
jfltiViRYLI 6:28 Time For A New Roof On Our Cabin! - Townsends Wilderness Homestead
SM83GxIhT9M 15:12 Let's Give This A Try! - Hertfordshire Cakes With No Amount For Ingredients
IB9oX76oElk 13:18 Crispiest Homemade Crackers From the 1700's!
QJHQmCJMtZY 8:02 Can You Rely on Your Neighbor? - Small Community Living
DNdKzXFnbBA 16:56 Toaster Pastry from the 1700's?
kXXkSnSq8cA 13:38 Into The Woods For Wild Clay!
SmjXpVvR8JI 11:18 The Art of Leatherwork
usA-aMmQ1zc 15:50 Budget Cooking in 1755 - Meatballs Two Ways
c261Ig8Ryj0 13:31 Beer: Then and Now
YBUMHFsANQY 9:18 What We Hand Down To Our Children
TJdaZUmw8qY 18:57 Dayton, OH's 1850s Gravity Fed Brewery
IVkfONU8FjY 15:11 The Evolution of the Biscuit
aBV1DummRt8 9:08 Fair Food Or Breakfast? Charlotte Mason Recipe From 1777
EvGnKheMsaA 11:24 Oysters and Chicken From 1777
QWLRuiD2PzQ 11:23 Roughing It On The Homestead - Hand Forged File
yQbMGLstlbg 13:08 Libraries, Universities and Churches - Travels In North America Part 3
mIhZxwYkYtA 25:22 Do You Know the Difference? Shilling, Sixpence, Halfpenny?
gHVBLTY5iJU 11:00 Handcraft Your Own Leather Canteen
1W9RAHtmBUU 13:16 Beef Stew From 1775
G5xA-fiB59A 14:39 Bumping Into Benjamin Franklin - Travels In North America Part 2
Xxs0tsJeSE0 16:06 Handmade Inkwell - Kicking the Wheel With Jon Townsend
66ulzo52XjM 11:29 Travels In North America - Part 1
I5INCV7AQTI 35:41 The History of Money in America
ViwkhixV8fs 8:55 Almost Deviled Eggs... But Not Quite! - Unpacking The Pantry
l6jn0Cp3a_w 13:20 Trading With Native Americans
zX9UgxyDaRs 6:30 Best Way To Fix Boring, Bland Chicken - Celery Sauce!
YQCyvJjeCgs 11:59 Being a Good Steward to the Land
Rv2dohnuTpk 11:56 Interior of the Cabin - Big Plans
Nr77xiQV-Jw 9:03 Potato Apple Pie From 1783
zQIZSIoiKSI 10:15 Early American Ammunition
eIpDILFHTBw 27:31 Food That Held Up A Nation
W7LXvXbhy4c 3:11 Stockfish: The Return (Unboxing)
82C_QMthO2Y 1:30:55 Cowboy Kent Rollins Joins Us In The Nutmeg Tavern!
d-H6z6M2_8U 12:49 Morel Mushrooms Cooked Perfectly - Forest Food
KwZkJunAglw 1:02:10 The Outhouse! - Live In The Nutmeg Tavern!
szB5Ibyp1Xg 8:34 "Beef The Vinegar"
na_wewqQdSE 7:04 When My Modern Life And History Collide
SToEkpwpANM 11:11 Weird, Hot Cereal "Panada" - 18th Century
UW2zKU3xnHk 17:01 Apothecary - Medicine in the 1700s
ZSD-eDy2l5g 13:36 Oldest House in the Oldest City in the US
BqxHXB6_Ggk 20:41 Did They Have Germs Back Then? - Spanish Military Hospital 1784
NWKQpIzXzJA 1:09:56 Come Hear Our Most Exciting News Ever! - Live In The Nutmeg Tavern!
lQh23Wicq78 8:32 Tools of the Trade - Townsends Wilderness Homestead - Hand Forged Hammer
0Fsqft2KpV8 10:09 Swamp Expeditions in Early America
tXh_VT5ygOY 11:46 Historic Food Preservation - Potted Salmon
1bv6y6G5ZCg 1:00:26 How Townsends Does YouTube - Live In The Nutmeg Tavern!
sjzWYB3kefk 12:07 Sealing The Door - Log Cabin Maintenance
xfRpxj29RXE 10:12 A Terrible Discovery! - Historic Stewed Crab Dish
SndRUcYaePw 6:46 We Swear This is Yummy! - Surf & Turf From 200 Years Ago
7HWkCFhW-p4 54:45 Special Guest, Michael Dragoo! - Live In The Nutmeg Tavern!
LsQBI1LGyoU 8:23 Fast Food In History - Meatball Slider, Ancestor To The Burger?
yUX-m-BsoS0 12:41 Public Transportation Was a TRAINWRECK in the 18th Century
uMXm8hDofzo 6:14 Laying Our Handmade Bricks, Finally!
-WjvTGkRzZM 14:57 Doing Much With Very Little
7pH4Hb5CZWE 1:18:56 Trades That Stood The Test Of Time - Live In The Nutmeg Tavern
YTojZ-aqyvc 9:39 Winter Food Storage - The Bleak Frontier
RLkI38HxWV0 5:36 This Is Why I Do What I Do
Q4o1wYwkv9g 15:15 The ORIGINAL Christmas Dessert
ntX1Nlr5u3k 1:51:00 Unpacking A Christmas Carol With Carol Jarboe - Live in the Nutmeg Tavern!
NTX51pbc630 1:01:31 A Christmas Carol Read Part 5 - The End of It
nOB7QEuRVzk 7:11 Custard Tarts With Candy Surprise!
D2kUbviJ_o8 48:21 A Christmas Carol Read Part 4 - The Ghost of Christmas Yet to Come
IqcNlA0Mpac 1:11:31 A Christmas Carol Book Read Part 3 - The Ghost of Christmas Present
O_tm1cmvzMg 6:28 Chicken Pie "Deluxe"
QHxH6veIL5g 54:20 The Ghost of Christmas Past - A Christmas Carol Book Read Part 2
pZwS_60M3oY 52:11 A Christmas Carol Book Read Part 1 - Marley's Ghost
KW2dcbhHnbE 5:53 Leftovers: The Best Part of Thanksgiving!
a77fbAhG2Tg 59:32 A Bountiful Feast - Live in the Nutmeg Tavern Replay!
tgWSa3nSfhc 14:20 The Great Turkey Cook-Off Of 1796
e1bmfrWZlzI 13:24 The Ultimate Experiment - Handmade Brick Firing
WigF_qQ5yXs 40:30 He Slept Through Election Day!
BveXvC_UVyc 7:25 Everything Is Going To Be Fine.
# DJ04V_2WXUo 55:57 The Legend of Sleepy Hollow Reading - Live in the Nutmeg Tavern!
pBLW7ZP2vRs 10:31 The Last Meal of Ichabod Crane
Q_qUYM4Oc_4 58:09 Lanterns and Lighting in the 18th Century - Live in the Nutmeg Tavern!
3WLebI5eNlg 11:14 The Simplest Apple Pie Ever
3hWREO1skW8 56:55 Food Preservation in Early America - Live in the Nutmeg Tavern!
biDi70wZw98 13:19 Coffin Pies - Death and Chocolate
b4DQjwyMjtw 1:27:16 Log Cabin Anniversary Celebration! - Live in the Nutmeg Tavern
_JTLr8t3AeU 8:12 How Many Bread Loaves?
6bEZrN1OJEM 13:04 The First Meal
zGNfsHqmYKw 1:31:13 Tasting History Joins Us! - Live From The Nutmeg Tavern Replay
JcwwZREsx8I 11:58 How To Build a HUMONGOUS Earthen Oven
xCVuoyrnAss 1:34:39 Beer in the Revolutionary War Days - Live From The Nutmeg Tavern Replay!
_4UR0MUBnOM 13:30 The Great Wheat Shortage of 1797 - Bread for the Commoners
vQuCBfjPsmU 3:45 The Perils of the Navy - Full Immersion 1812 Tall Ship
gEA6wpFG8LA 57:41 Bread Making in the 18th Century - Live From The Nutmeg Tavern!
mzJoImT__xc 8:48 The Ancient Art Of Brickmaking - Impervious Building Blocks Handmade From The Earth
JgVdZ35MqR4 8:49 How To Melt Iron With Nothing But Wood, Leather, and Clay - Townsends Blacksmith Shop
9wVNOEU_-Es 14:20 Homemade Historical Bellows: 18th Century Blacksmith Shop
yIkOt1kJJlc 8:12 The Drunken Sailor - The Backbone of Commerce
k_FvHQCujC4 8:05 Hand Carving Spoon and Bowl - Our Cabin Needs Utensils
lOcFIhHE-dg 12:26 I Drove 14 Hours for This Piece of History...
FJt_arITVTQ 9:31 Unheard of Cooking Method! "Collared" Pork Belly
747NDrLKkZA 8:26 Venison and Corn - 265 Year Old Party Food!
q6twaIOakMk 10:21 Manual Foot-Powered Vise? - Build A Shavehorse By Hand
TBbLw8RiVOE 5:19 Frontier Dessert? - Wild Berries and Cream!
ZEu6z3L34v8 9:23 A Single Spice Blend For Your Entire Kitchen - Kitchen Pepper From 1777
malu-aagdko 7:19 Making Tools From The Forest - Townsends Wilderness Homestead
C87qGIpkR8E 7:56 Campfire Cocktails! - Excellent Cherry Bounce From The 1700's
IShxXtAev9U 7:52 A Pole Lathe For Our Cabin! - Townsends Wilderness Homestead
Z66-vzg62Rc 7:38 Repairing Our Bark Roof - Homestead Log Cabin Repair Part 2
1BbtiLju9Rk 7:39 Repairing Our Homestead Log Cabin - Chimney Maintenance
qpaBeS7bTIU 3:57 You Eat This Every Day! - 1792 Breakfast Omelette
r3NXAVPEkgE 6:30 Classic Apple And Pork Combination - Meat Pie From 1792
A4sKg8YWFM4 4:54 Keto Recipes in the 18th Century?
8tVF_tPZH6U 5:27 Pan-Fried Pork Chops in Gravy - Classic Steak House Food In Early America
TifCuQSEBio 10:26 Fried Crème Brûlée Cooked Three Times
cOSMTC7L7AI 7:51 Best Chicken Wings! - 200 Year Old Recipe
S-tHwzdXJWQ 5:12 Three Minutes From Certain Demise - Dangers of Historical River Travel
0WHtiE0nZps 3:03 Wild Buffalo Water Chase - Cresswell At It Again!
XVIXbdQQtQY 7:37 Middle Eastern Influence In Early English Cooking - Mutton Kebabs
HAx8sb0Uovk 7:28 No Nails - Frontiersman Survival Shelter
U2QsmqPN1pM 8:01 Dangerous Backwoods Adventure - Travelling Across Three Rivers
-heI0TqcxFo 5:08 Stale Bread, A Block of Cheese...It's Suppertime! - Cheese Soup
N-AiIlSsMw4 9:13 Vicious Voyages.
S93EI42Tgwg 5:19 Leftovers to the Rescue! - Potato Pancakes from 1732
Wk8gZNXrsEg 3:37 A Traveler's Refuge - Historical Tavern Dinner
bS8gxx3oUsk 7:07 Surviving Mysterious Disease
Nm-QS_oxf6I 3:54 Jon Hates Asparagus. Will This Change His Mind?
dGr-8P_vEZA 4:55 ...Hope On The Horizon
nXFujMqpJ2Q 6:45 Half Pork. Half Fat. All The Herbs From The 1770's!
3DVtSkm65sU 4:41 Rich Food for Poor Folk - Frontier Potatoes!
ajnvKEd8RfI 8:43 Classic Steak House Food in Early America - Steaks With Oyster Sauce
JB7pk7AfV2E 8:18 Sober Sailors - Rum Rations In The Navy: Grog
NPThw8DOTJo 5:58 Open Fire Ribs in the Cabin!
8J1PNDnqsfA 9:55 How To Make Bread With No Yeast In Historical America
Es_Ga7g2k30 7:06 What Were They Thinking?? - Lobster From 1755
tQWETcw-E74 9:08 1755 Scrambled Eggs - Quarter Pound of Butter?
XgNuPXIIvC8 11:19 Journey of the Journey Cake - Any Grain Will Do
14F0ncvWjhI 15:11 Honing Your Longhunter Trekking Kit
oW0bxD7FWVo 9:55 Potstickers? Bacon Dumplings? - Something Similar From 1750
S04mZtUjTyA 6:43 Popular Drink Fallen Into Obscurity - "Flip" From The 1820's
YbpF5IQrqSM 9:53 A Very Dickens Christmas Dinner - Goose Over an Open Fire
vds2Igr4uAU 15:39 Battling the Wafer Iron! - Christmas Wafers From 1723
frhBaVaOLW8 1:02:12 All Things Horses With a Special Guest! - Live From The Nutmeg Tavern!
SzgszJsswSU 8:40 Crunchy on the Outside, Soft in the Middle - German Puffs From 1777
p0sdliHLTSA 40:06 Traditional Holiday Music by Log Cabin Fire - Full Length
XRUOuH1uFXQ 8:10 No Syrup Allowed! - New England Pancakes From 1777
BeV3DLfeWGQ 7:56 Frontier Comfort Food In The Cabin - 18th Century Welsh Rabbit
Cq02zqJlibw 12:31 Chimney & Fireplace Before Snowfall? - Townsends Homestead Part 3
6ql1TVqRb9E 5:02 Happy Thanksgiving! Pumpkin Pie From 1839
8oYpQ4qCSj8 15:44 Weatherproofing and Insulating Your Log Cabin
u76Yv3Feazk 6:53 You've Never Had Pumpkin Bread Like This - 1750 Recipe
xydLamF1Z2k 13:36 Will The Roof Hold Up? - Townsends Homestead Part 2
xkmyK8XqVpQ 9:31 Essential Frontier Tools - An Axe For Every Job
FVpkrRKphcU 18:56 Spies, Espionage, And Secret Writing In 1770's
UlVENzhq_Xw 15:49 Building Log Cabin Walls - Townsends Homestead Part One
03ABJtEZhfU 4:04 A New Food In The New Frontier - Corn Over An Open Fire
-b6Ojpeb-oQ 5:02 Paw Paws To The Rescue! - The Fruit That Saved Lewis And Clark
bGxZFMlQ-Bc 5:56 Camp Oven Cornbread - Feeding Hungry Workers
jv3hsU1NlPo 26:39 Townsends On The Road! - The Search For The Perfect Cabin
# @removed - too meta
# bz38QhBT06w 1:13:50 One Million Subscriber Celebration! - Live From The Nutmeg Tavern
7hBSwK7BkfM 8:01 Breakfast Casserole In The 18th Century? - Egg And Bacon Pie
ZEXic7y1X-Y 4:12 Open Fire Shrimp With Black Pepper Butter Sauce - 1600's Recipe
xxb-XqsgaqM 20:43 Postage: The Dos and Don'ts Of Sending A Letter In The 18th Century
tpoMQ5hNd1Y 11:10 "Whipt Cream, Like Snow" - Not Your Typical Whipped Cream
zbFhIlxGElc 8:40 Jon Is Disgusted... Coffee Eggs From 1769
WxLf02kD8oI 29:17 Owner and Editor of Muzzleloader Magazine - Jason Gatliff Interview
MPEZv7e5Wbs 8:09 Caribbean Cooking In The 18th Century - Pepperpot from the 1700's
5fks4Vnu8P0 13:08 We Didn't Always Get Paper From Trees - Historical Writing Series Part 3
JahRSIlom8U 20:55 Making A Three-Course Meal - Roast Beef, Onion Rings, and Syllabub With Natalie and Tara!
LYDXDGoutRg 4:16 Handmade Wooden Bowl On A Foot-Powered Lathe
P582srfq_14 9:56 The Secrets Behind Ink In The 18th Century - Historical Writing Series Part 2
5GzbzjqTPEQ 5:12 We Need To Reconnect Through History
k3aPOXkzNPk 17:39 Turning A Feather Into A Pen - Historical Writing Series Part 1
tpNMmKL2vkg 20:55 The Life Of A Frontier Gunsmith - An Interview With Mike Miller
zV1FuzftraI 6:53 Barley Water From 1734 - Perfect Drink For This Summer Heat!
Xj71BY1LCuc 12:37 Building A Bark Canoe In 12 Hours? - Elm Bark Canoe Part 2
i9XZyz9hm1s 3:25 Cancelling Our Trip - The Dangers of Canoe Travel
lLbb0ZX5up0 16:09 Building A Bark Canoe In 12 Hours? - Elm Bark Canoe Part 1
mXVat5ggTIA 12:44 Accidental Chemistry: Historical Laundry Part 4
Mr0-mCOfMX4 8:31 Primitive Bread Baking In Early America - Rye and Indian Bread
vVQHoWhYSLE 4:06 Did The Dugout Canoe Survive The Winter?
RgLC_DRd2cg 15:00 Colonial Army Rations: Beer Every Day! - Spruce Beer In Early America
KJEGV0LZk7Y 7:06 Historical Laundry Part 3: The Evolution Of The Washing Machine
1xenLzd2-Dk 12:25 Historical Laundry Part 2: No Washing Machine, No Dryer, Hit It With A Stick?
wK9OyW4Jx_g 9:22 Historical Laundry Part 1: Who Did The Laundry In The 18th Century?
R0in8rhggVk 5:33 Testing Yourself - Practicing History in Their Shoes
e2LqoIWdAlE 10:23 Boring? We Thought It Would Be - 260 Year Old Artichoke Recipe
QdzAt6e1l-c 8:33 Sailor Rations - Stockfish Aboard Ship
hVw32cE748w 8:07 Boiled Pudding: Not Just for the English
81MyU3RBVsM 6:11 The Quintessential British Soldier Kit
PjoUKQ4inGc 5:43 Beef Stew For The Middle Class
BIlVveuUviQ 8:10 Our Best Dessert Ever - WhitePot Revisited
i1NcWU0xTog 7:20 Sailor Rations in the 18th Century - Burgoo
OqD82Jv8e2g 1:56 What Have I Been Reading?
aiXbloUoWow 4:01 Potato Chips in the 18th Century?
A70ekrOrrko 15:31 The Nutmeg Academy - Pilot Episode ft. Brian Cushing
OEVHL-AjkMY 4:46 Vegetarian Pie From 1769
nt0OUVnx-y4 9:51 Who Were The Longhunters?
AXomSThPCjo 9:23 Live History on Your Terms
tlwF34TkT3o 13:01 19th Century Apple Brandy at Historic Locust Grove
vOMjZ-6yXKo 1:01:56 Nutmeg Tavern! - Round Table Discussion - Maggie Delaney Story
jqOgWngL5aY 58:31 Maggie Delaney: Her Story - Feature Length
DUgwZz49MJI 1:01:59 Live Music at The Nutmeg Tavern!
5CgCrPQMRDA 36:52 Creating Maggie - "Remember the People That Were Down at the Bottom"
xV9spqCzSkQ 4:48 We Promise, This is Delicious - Simple, Roasted Onions From 1808
0c64-qVBl8k 55:06 Special, Mid-Week Show! - Brian Cushing of Historic Locust Grove
dlOCcvwYOdo 5:47 Wine on Fire in History - 1650's Recipe
NGzUrkOQEEM 2:43 Don't Worry, I'm Still Alive!
zAa5hau_9lo 6:18 Ocean Trout in Champagne - 1755 French Cooking
lNn94A3LLvo 7:31 The Perfect Beginner Recipe - Boiled Dumplings
oQdFSo73jz0 6:56 French, 1755 Chicken Fricassee with White Wine
8slxejFz4ME 5:55 1787 Brown Gravy - Take Your Flavors to the Next Level!
UGWcm9SJ27I 7:05 18th Century Duck with Wine, Herbs, and Broth
O1T6G0Q3arQ 7:35 A 200 Year Old Spinach Tart Recipe!
pnurZrCxt7U 59:55 Introducing Nutmeg Tavern Coffee! - w/ Guest Dave Taylor
Aqzxg0g2aHY 10:42 The Perils of Pre-Revolution Ocean Travel
ZHMGdYuyDCM 6:28 Is This Just Another "Red Herring" From 1767?
kADoyiKMlz4 3:15 A Topping For Christmas Apple Pie From 1769
dYVS7AnUAhg 13:52 Flintlock Rifle Breakdown and Cleaning
a4gFHlRE3KM 10:01 1773 Apple Pie - One of the Earliest Recipes
MSwmMZq-6Ao 6:45 The Quintessential Trekking Kit
dAn5_2JdYJA 15:36 Brandy vs. Sugar - 18th Century Fruit Preservation
D7ZXuSFEPXg 58:04 Ancient Technology With Erik Vosteen!
G8suyLb-ZTg 12:04 From Tree to Canoe Part 3 - Ready For Adventure?
BEwSXhzaF8E 10:29 Clothes vs. Money: Status and Self Worth in the 18th Century
v4z5x35IoWA 7:14 Surprisingly Delicious Poor People's Food From the 1700's
thD0V85Rs70 9:37 From Tree to Canoe Part 2 - Aches, Pains, and More Chopping
ISCF9-8ukPI 8:26 600 Year Old Stone Axe vs. Steel Axe
-I4zkHgdw2w 10:16 From Tree to Canoe Part 1 - Chopping and Burning
fD3JxZBy7WU 3:36 Is Our Quest For History Ruined by Present-Day Distractions?
FfF_Z-_M8WE 6:49 Rare 1760's Recipe - A Whole Bird Inside a Dumpling
yqO5sG14x38 5:49 Reliving The Frontier Dugout Canoe Experience
99ynmb_Oqsk 2:01 Don't Be Afraid To Succeed
piYcgGdO8_w 3:40 Across the Sea to Mrs Crocombe - English Heritage Collaboration
vsRqPmI-zEA 4:57 Did They Gamble in 1777?
hcrbFoChX3w 5:14 We Haven't Gone Far Enough. We're Starting Now.
oAVdpC7hiDU 9:40 1780's Dutch Oven Pot Roast with Bacon, Sour Cream (?), and Carrots!
pyxhexVlxoc 8:02 Handmade Log Building with Primitive Tools
75hG3PSBmtg 6:45 1787 Beer Soup from Germany!
qSuM25N-5Js 7:17 Vanity: The Rich and the Poor, Boston 1700s
Af_OHNZmCWI 7:18 18th Century Mint Sandwich From Switzerland
kMb3wC-dXg0 10:59 Who Decided the U.S. State Lines?
BJ80SWdUd-8 8:16 Forging Wrought Iron For 30 Years
ahUc9NGLIO8 11:52 Lives of The Downtrodden in Early America
VGwmAbXFDK8 13:23 Townsends Presents: "Raising a Log Barn"
BJJAWSFiDLM 10:22 Historic Harvest Soup with Pumpkin Bowl
1wb3oENnS8k 5:18 Life Now vs. Life in the 18th Century
fbKEcOdXvis 9:56 Fish Pie! - French Cooking in the 17th Century
GW2NYe-qmZM 1:17:05 18th Century Sailors - Special Guest, Dave Taylor in the Nutmeg Tavern
PUwGO8HtrVc 3:33 Why We Took The Video Down
p1mpT9Nd6fY 9:13 Pine Nuts and Spinach? - 18th Century Spanish Cooking
3ZZnUaLpUk0 1:10:50 Live From the Nutmeg Tavern!
LqVGuvUbpCE 3:43 Working With Your Hands: It's Even More Important Today
6i7OvSwRFBk 3:53 From Forests to Ships
DjrGceca5zc 9:09 Spanish Cooking - Salmon and Onions From 1750
QjthdIBFvwQ 3:56 Untouched American Wilderness
iqjfwhirsVo 14:04 Oil Cloth - Waterproof Coverings for Your Campsite
qUYY-Ccdvuw 5:59 History: I've Been Wrong All Along
wvisp58xIU4 11:46 Creating a Wooden Mallet on the Frontier
m_BUCPTXmbI 11:08 River Travel 100 Years Before Mark Twain
Oz2o3SYqGlk 8:53 "Omelette of Asparagus" - A Recipe from 1787
koaSqUec2Mk 10:48 Historic Georgia - Early American Travels
Nu48wAGygcA 4:18 Are We Limiting Ourselves on YouTube?
cwVDhwDJIxM 6:46 Politics Have Always Been Divisive
AJH6fv5M0Q4 7:20 They Called This "Soup"?
H_4-k4Jkbn0 6:24 Losing Connection With the Seasons?
2MBxcdv8EDc 9:47 No Wheat? Rice Bread - Gluten Free Recipe
0zG7DmusziY 1:09:47 A Craftsman From Townsends - Recorded Live
rYpuSfVehg8 5:58 Braving the Frontier with Daniel Boone
Kv8DTEJD6HE 6:21 Fried Tripe with Dipping Sauce
Dy_st0el6yU 5:57 Preserving the Music of the 18th Century
HN1Cmt3IS5o 6:29 Struggling With YouTube...
uTWUi5ailVk 54:41 LIVE - The Founder of Townsends!
JxetF_xrzCs 10:40 Anatomy of a Flintlock with Tim Williams
T5AoYGFTl8I 8:52 "A Spring Greens Pie" - Forcemeat, Greens, and Puff Paste
lknbjbxgEp4 5:39 Cabin Life on the Frontier - Uncovering History in Journals
T-x9ZxpPvG0 6:50 Unboxing a Food Parcel from Great Britain
MattBVhFSwM 6:36 Fatwax: A Surprising Resource to Protect Your Gear
qjV_lRjn_eI 9:37 Fire Starting: No Matches, No Lighter - The American Frontier
hLO8YsSHMHY 15:14 The Origins of Colonial Candy
1zRY9gO9sWY 9:05 Making Your Bed With Dead Leaves? - The American Frontier
9WyzXSRwxLg 5:27 Nothing Goes to Waste on the Frontier - Venison Heart
fjgqSsf2uM0 7:17 Shelters That Fit in Your Bedroll - The American Frontier
48VgSMnmsX4 7:03 A Simple Campfire Meal on the Trail - The American Frontier
EmaxKO_1QFs 4:00 A Story from a Forgotten War
-2zJvJn_Ihw 7:57 Meat Preservation by Smoking - The American Frontier
TBj3zWf_AkQ 10:45 A Survival Item From Tree Bark? - The American Frontier
McpCJkPluFM 12:02 Cooking Systems in the Backwoods - The American Frontier
gMskLUQyo5g 1:32 Introducing "The American Frontier" - A New Series from Townsends
4rT6J0OxEmM 5:52 Beef, Mushrooms, Eggs, and Gravy - 1730 Scotch Collops
pPNiSBD9Ih8 9:35 Sorry the Internet Broke - Follow up Q/A with Dan Wowak 18th Century Bushcrafter
5ag8uQxSQYY 5:52 Pulled Pork From The 1700's
# @removed - too meta
# wAWBpbnWSvY 1:11:05 500K Subscriber Celebration! (With Michael Dragoo)
3cPizm6i15A 8:27 Offering a Bed for the Night
bvbZ1_h9HW8 7:58 A Poor Man's Rice Pudding
UQe5Y2m6QfM 8:32 A Well-To-Do Rice Pudding
0QQMzGqdNoI 7:10 Boston to New York - Traveling in 1788
1pb8rEYDLHc 7:45 Carrots Deep-Fried in Suet
lYxnLD5jmqc 9:12 Trading Goods on the Frontier
hV-yHbbrKRA 5:52 "Macaroni" - A Recipe From 1784
u9Vuq4j7IBY 4:47 History Beneath our Parking Lots
9cLuZdH5w3w 6:23 A Dish for the Common-Folk in the 18th Century
QI02y2mg9xg 7:00 Turning Beets into Pancakes - A Recipe from 1803
gcooAPbpqQg 19:07 Growing Tobacco In Early America (Re-Upload)
3T0nnskSkwk 4:52 Candy in Early America
Ama7a0tc5Fs 2:47 What Inspires You? - A Question from Jon
W1EVhCTIJME 4:15 Steaks Fried in Ale - A Recipe from The Art of Cookery
3HHY06pwBBM 1:07:02 Let's Make Chocolate Cream! Recorded Live
GT0eD92u1Xs 9:42 The Forgotten Soldiers of the Revolutionary War
DYSHRGNeI0A 8:00 A Savory Noodle and Turnip Wintertime Soup
2v25-rjLiXE 1:06:42 Most Popular 18th Century Tea
PfZHU8ZT-Uo 3:14 Early American Woodworking - A Craftsman Talks About his Passion
YEaEp0pTEHg 5:44 Rabbit Over an Open Fire!
J9x9YcaoQIU 10:53 No Laws or Rules - The Backwoods of Early South Carolina
v5PiGidtStM 4:45 A Winter Treat from 1796! - 18th Century Cooking
tQ5-oKvlSn8 3:34 Our YouTube Journey in 2017
ofMY-VdsaIk 7:05 Digging Deeper into Colonial America - Q&A
N5Oap34i4P8 1:10:20 Let's Make Wassail!
5Y43cD8EXM0 7:07 Rivel Soup - The Historic, German Way
xfxUMrhmX4w 6:14 Enduring Winter During the Revolutionary War
LuIXixc2qQ8 8:55 Deep Fried Cookies! - Little Deer Antlers
J8Gb-8V6CmI 6:35 Christianity In Early America
Ai17gd3zofI 6:18 Rutabaga has Never Tasted so Good
H3DBP7KxeSk 8:29 Winters in Colonial America
OGS4BY7KjTM 10:18 Roast Beef Over an Open Fire!
8ICcH-mLt3c 10:23 Revolutionary War Salt Shortage
GC4OVzQasdU 47:18 Pemmican - Is it still edible?
zPcwADGvGRo 5:51 Baked Applesauce Pudding? - An Historic German Recipe
K954BPO-XLw 6:59 What is the Purpose of our YouTube Channel?
_Tg5gptU-JE 9:50 Rabbit Cooking! A Recipe from 1747
pJI2Dsz3pTw 3:29 Throwing Tomahawks and Knives (Re-Master)
PPQTpPBXPvA 5:39 Historic German, Root Vegetable Soup
TTxV17C6Wrs 10:45 History: It's All About the Details
ig81LidLrBc 8:42 An "Acceptable", Less "Offensive" Pudding
e3lHDQ2PEV4 10:30 How Were Bullets and Shot Made? - Q&A
A--30LBHqOU 6:44 Body Snatchers of the 18th Century
B0syCKiC5L4 6:34 Bacon Pancakes?? - A 1773 Bacon Fraze
lctLdZFgyFk 5:11 What Do You Want To See?
fOgKjpq7Nws 10:15 Stale Bread? Don't Waste It! - 1773 Bread Pudding
bVZozP3jMr8 10:38 An 18th Century Waterproof Shelter - Q&A
axFFUdQdyJg 13:13 Historic Kitchens vs. Modern Kitchens
veUXxUznbj8 15:57 An Adventurer's 1774 Journal - Nicholas Cresswell
mfnHCdc3BgA 18:15 Early American Ginger Beer - 18th Century Cooking
HRtCOIbovWw 9:25 A Tour Of A Medicinal Garden
tBuO-gs-ROE 11:53 These Plants Could Have Saved You! - Historical Herbal Medicine
Y_Kj-7QKhF0 8:32 Kosher Recipes in Early America? - Q&A
b1GluGskjDk 9:19 Fish In Your Pocket? - Salmon Pasties
84q-VGfaYOA 7:34 Did You Even Know You Loved History?
zKAk2c8KfNE 14:43 "Pennsylvania Swankey" - An Easy Small Beer Recipe
eWmstIC5Sps 13:12 Sanitation and Brewing in the 18th Century
xKboeeH6QMQ 7:56 Too Much Butter?? - A Recipe From 1794
TVRo3ucGeqU 12:28 "Mead" - The Drink That Fell From Favor
MG2p5RePJBU 5:13 Edible Turnips? - A Recipe From 1824
6QdwGClotcc 6:40 The Same Food Every Day? - Q&A
ocVCsPPNxsc 12:05 Corn And Eel Succotash!
5Vdzd4LgmNw 7:08 To Dress A Dish Of Mushrooms - 18th Century Cooking
a0G6FdhmjSw 10:38 Q&A - How Common Were Potatoes In The 18th Century?
SyZd0MteJqI 6:23 Orange Marmalade Apple Dumpling
5saYI0IB57I 7:13 Q&A - Fruit Preservation In The 1700's
hTFVW0EgMkk 9:45 Connecting With Ancestors Through Living History
T0IEIJhUi00 6:53 200 Year Old Peaches...Time is of the Essence
BoT3C-ae8io 15:18 Hygiene In The 18th Century
2Q6zW-Jlxxg 4:52 A Basketmaker's Story
-CJSt7MrGfs 13:04 Salted Cod With Eggs And Butter
nhtFwQ1bxMs 6:48 Uhh, Where Is Jon?? - Q&A
l8PmjZ76juI 6:19 Living History IS For Families
k72bPCovfWI 6:37 An 18th Century German Recipe
DjEiddJQyls 13:29 The Potential Toxins In Whiskey
QjD5s7RcBdI 10:57 Finally! A German Recipe: 1795 Fried Surprise!
YIi1bjl_iqE 9:17 The Intrusion Of Modern Politics On Our YouTube Channel
T2AG545WIsg 10:47 A Dessert Fit For The Washingtons
ecnSW1t4dLk 8:22 Don't Be Confused About This Simple Quick Bread
D1YrXQ1xli4 9:53 18th Century Bacon - Q&A
0jQ_vErjDlk 7:56 Fried Catfish With Turnip Greens
MrTO2zJbqAY 56:48 LIVE Q&A 6-15-17
ejrQlhH9RyQ 10:12 The No-Meat Survival Food Pt. 2
e-AJ7AsMEHc 12:12 Butcher Shops In The 18th Century - Q&A
6ysrsvW_wPA 5:31 Making Salt-Glazed Pottery
1CmRUxqxG7Q 11:43 The No-Meat Survival Food Pt. 1
WWSY8frb6h4 9:25 Hot Peppers In The 18th Century - Q&A
yX7jCgokcUY 9:05 Delicious Catfish Stew!
AVOfp3cjrlw 9:11 The Fish Controversy - Q&A
gTUFUcxwzKk 12:26 Fresh Fish Over An Open Fire
jz0HFYR95c4 11:29 Taverns In The 18th Century - Q&A
PQh6HxmPy54 12:48 "A Soup, A Stew, And A Hash"
95M1m4UM1uk 10:08 Little Miss Muffet Ate This??
cA9ZsKTbbvI 12:34 One Of Our Top 5 Recipes Ever!
691LdhiwQQM 12:18 Beer Bread In The 18th Century? - Q&A
n3VejyKid70 41:07 Polish And Perfect - Getting Started in Living History Episode 8
NjlJObR58LU 12:03 Asparagus Forced In A French Roll
CUx9U_e4qlA 5:50 A Housewife Of The 19th Century - Kim McCann
tY8k5EnM35M 10:50 Did They Really Drink Buttermilk? - Q&A
uqqH5eZPQCI 34:04 Building The Inner Person Part Two - Getting Started In Living History
Qnc06cVXQTk 39:47 Building The Inner Person Part One - Getting Started In Living History
o51KIO9eU4s 5:23 ...Simple Fried Oysters
MVFdsqQby9o 16:53 Portraying An Enslaved Woman - Brenda Parker
XD0eRdIbCeY 4:52 YouTube Can Be Scary
V80nLUO-NqE 12:30 Let's Do It! - Getting Started in Living History Episode 6
PnwvYLl7NSs 33:23 Building the Outer Person - Getting Started In Living History Ep. 5
wH3FmxrfsdM 9:56 A Southern Feast Of Sack and Steak!
ly3VoFtN-H0 10:33 French Trapper Interview - Tony Gerard
2L2WfiD6lQY 40:50 Do Your Research - Getting Started In Living History Ep. 4
6IWss75AcdU 37:13 Choose Your Persona - Getting Started In Living History Ep. 3
bJL-HYSlvRM 12:16 Early American Dairy
4e2kLTAUozw 9:40 Longhunter Interview - James Wilson
7_KY84PYvaE 29:29 Joining A Group - Getting Started In Living History Ep. 2
Cmiv0kFUMG4 23:46 Episode 1 - Getting Started In Living History
bn-cOmca_Xo 9:54 Early American Whiskey
9pey6sVJf1I 2:03 Thank You Mount Vernon!
j9jyTCWWh4k 13:39 Behind The Recipe - The Two Cakes
3eix07Nosxc 14:57 The Tale Of Two Cakes
vj4YoNRdhhE 8:19 Rebellious Fashion In The 18th Century - Q&A
SvPpy--Yavg 5:43 Anchovies And Eggs??
EyETNsx1N20 12:52 Biscuits And Gravy - Where Do They Come From?
D8j9XGNJplY 4:57 Cod With An "Eggy" Sauce
dktBjRRKmK4 20:23 Were Tomatoes Poisonous? - Q&A
njGfm-82Y3w 10:05 Does History Change You or Do You Change History?
wJyGJUgAI_U 3:13 Tomatoes and Eggs
LRyQsIq6ZRs 12:05 This Recipe Doesn't Make Sense - Q&A
w0cLNEjCN1o 6:30 I'm Torn about Youtube and Living History
aczBmrYHZP0 4:18 Spinach and Eggs, 18th Century Style
n9esZCy6viA 13:03 Recreating History - Q&A
kvjsli7ICrI 5:15 Kush - A Hash with Cornbread featuring Michael Twitty
Hw9xNypTTBo 14:58 Types Of Tobacco In The 18th Century - Q&A
ELtVi9ZrvAA 4:39 Akara - A Fried Snack featuring Michael Twitty
gCwr_gDi4DY 13:18 Food Aboard Ship - Q&A
GwkRWIwZ43A 10:53 Food of the Enslaved: Barbecue, featuring Michael Twitty
qBWjVTELdr8 12:00 What Is Kitchen Pepper? - Q&A
0VgTtzukqPM 9:27 Okra Soup with Michael Twitty
KltspYUg7sc 11:19 How Much Gear For A Hunt? - Q&A
brLJm9nKX1o 1:44 We Need Your Ideas!
qXX_GfbO1FM 7:35 Paper Thin Edible Art - Crispy Wafers
pEyCVgsN48M 25:19 LIVE! Questions and Answers with Jon.
SdKzWQOVET4 8:55 Potted Beef In The 18th Century
tME_TMwFyes 10:32 Our Favorite Sauce Suggestions! - Q&A
fmre4xvxshM 11:31 Batter Pudding With Must Try Sauces!
HsD3QXfStp0 9:19 Home Remedies In The 18th Century - Q&A
SJD8tQnMXPk 4:23 1796 Currant Cakes Baked by Ivy
ytK0omplQPU 9:14 Disgusting Recipes We Won't Try - Q&A
A1vR61yNF1U 6:43 "Peas Pudding" - A Recipe From 1750
PcFq_Z7ydxY 7:01 Do Foods Go Extinct? - Q&A
gt4K4SO-SWY 5:45 "Fried Beets" from 1727
T-1JDFUhddY 7:29 Fat, Fat Bacon - Q&A
I9ShGvedn2Y 1:37 Why Do You Watch? - I need your help with this one.
tJVzAvGGvR8 4:01 Breakfast In The 18th Century!
8e7BWfnrf1E 13:25 Was Chocolate Only For The Rich? - Q&A
CIuqi038jVY 3:44 Hot Chocolate In The 19th Century
oUdCxN7R2yo 6:58 Is My Mushroom Ketchup Alive? - Q&A
0y0PZUVMd0o 3:15 Master Wood Turner Erv Tschanz
rP4peyGcLPY 9:56 The Crumpet Controversy
UZPVc9UyP3M 11:51 Overcoming Shyness In Reenacting - Q&A
r32tIOS5-3M 8:13 The Freshest Breakfast Sausage (1808 Recipe)
eTIhilxHZ-M 13:56 The Best Uses For "Whey" - Q&A
4B6qYQbvJWY 14:16 Cheesemaking In The Early 19th Century
dRFHdyBTXIA 2:35 Historical Strong Beer vs. Small Beer
xpKTZVQXXZI 3:08 Clickbait Title or Maybe Not...
0VAz8SMYrR0 6:18 Green Bean Tarts, Really? - 1724 Recipe
ksfS7pjp2y4 15:47 18th Century Nutrition? - Q&A
NLxNWWeEAlw 9:54 18th Century Beer Brewery Walkthrough
0gxBzLVyng8 14:27 Getting Started In Living History Case Study
RW8y4pbYTkI 2:51 Why Are Hops Used In Beers? - Q&A
Fv4ekr9HGLk 12:45 Caring For Your Tinware
4egYfaTxR3k 12:29 Making Bread From Beer At Genesee Country Village
-J6HayX1K6w 12:50 Bugs To Dye Food? - Q&A
MAQEwlEKWB8 5:22 A Harvest Succotash
# @removed - too meta
# ZDOOMEY71ro 8:32 Silver Play Button! - Q&A
Uwqlx1AuLqc 4:57 Gunsmith Tim Williams
W3-85vpDKEI 7:21 Paw Paw Pudding
969EwYCVjJk 3:24 Ice In The 18th and Early 19th Century - Q&A
Nt5w9Wri7Ug 6:09 Starting a Living History Group from Scratch
dB-wpPzRclE 4:02 An Onion Soup Recipe from 1801!
730hiahhze8 4:05 Delicious Boiled Apple Pudding!
HjvGtCRsvhk 8:26 Jon's Picks For Beginners - Q&A
XP_KHuk1rIo 5:44 Corn Meal Cooked In A Corn Husk
txDFVSUFe9k 6:19 Was He Faking It? - Q&A
OpOmmSiUNyw 6:50 Ice Cream In The 18th Century?
xf3w6gstzas 10:39 A Discussion On Barm - Q&A
0kvqebQiNRo 6:17 Best Pork Dish - Pork a la Normand
VDdStmpR9lw 7:35 18th Century Lemon Preservation - Q&A
Sp71deZlIxk 9:19 Delicious Rye & Indian Bread At Conner Prairie
WgytZ9sLnd8 11:11 Food For The Common Person - Q&A
tKCEaXZRhd8 3:08 A 260-Year Old Recipe for Apple Turnovers!
saE_Yg59O_E 5:09 Scurvy In The 1700s - Q&A
vULRz06QfXg 6:11 Vanilla In The 18th Century - Q&A
qezbTCJjXH8 6:12 Profiles of Martin's Station (1775): "Nancy Ward"
sLX3d-WbaQk 9:38 1796 Pound Cakes!
4uuBvkMx-NQ 11:47 What Is Brunswick Stew? - Q&A
mM3d8W34anQ 2:56 Curly Fries - A 190-Year Old Recipe!
Ik0QAOifBHk 10:05 Pepper In The 18th Century - Q&A
h-U59-iigWc 7:21 Two Vegetarian Desserts from 1796
LGDpoEPpCyA 7:10 Wearing Hats Indoors? - Q&A
Hm3Px069MVU 10:11 Hominy. What Exactly Is It? - Q&A
l8_0vYg3PCE 4:26 Handy Trail Food - Campfire Journey Cakes
jGUtncVoyNc 14:57 What's For Breakfast? - Q&A
Hn5plM18UKI 7:22 Profiles of Martin's Station (1775): "Captain Joseph Martin"
FRWYspsyasM 6:26 Delicious Cornmeal Pancakes From The 18th Century
l6tmis_1ooY 13:26 Were People Health-Conscious In the 18th Century? - Q&A
ppJciPagl2w 5:59 A 200-Year Old Chicken Salad Recipe!
ABuZX4LeOvQ 13:27 What About 18th Century Barbecue? - Q&A
amtDSfYcSXI 7:16 A Centuries-Old Succotash Recipe!
_Fn8x21NJcU 11:18 Dogs In The 18th Century - Q&A
1PLv76rQiq0 9:17 18th Century Cheese Curd Fritters
pWyXlJFOzWQ 11:46 Jon Shares Why You are Important to the Future of This Channel
1HOQ2U--1Fs 11:12 Keeping Meat From Spoiling - Q&A
GsyjNef2ydQ 7:11 Fried Chicken In The 18th Century? 300 Year Old Recipe
O2hMcYKik78 10:47 Colonial Hat Care - Q&A
AanONPtqaas 2:20 Comments and Questions on our Channel
tKNrksQDMto 5:07 Tasty Dessert From 1808
XyiesYyG8fU 9:24 Sweet Pies vs. Savory Pies - Q&A
ovYRr9fa_EM 4:33 Polish Nobleman Interview
d8hhRbd41rA 10:17 1796 Beef Steak Pie - Dutch Oven Baking
qz9BqylSeM4 9:37 Jon's Other Interests! - Q&A
p9g392de0NM 9:40 Dutch Oven Baking - Meat Pies
1E5H_igq530 9:05 18th-Century Pudding Sauce Q&A
s_9quRBs-Sk 5:54 Polish Winged Hussar Interview
YrTjHYeaA6g 3:24 It's All About The Sauce - Dutch Oven Pastry Baking
dtjN1qWoflk 10:33 What Is Small Beer? - Q&A
PurfdC_RXYs 3:10 18th Century Musket Builder Interview
0DRkQ8S1Kwk 7:28 Delicious 1794 Roast Beef! - Dutch Oven Cooking
kFkO_13Z0Tk 8:54 A Hobby For Everyone - Q&A
v-AalZ-VeoU 2:59 Historical Battle Reenactment - Close Combat
NGBvqNJ8H-U 10:34 Dutch Oven Baking: Getting To Know The Utensil
lXT6TR46oSE 10:13 Standing Crust Ideas - Q&A
7I_DgVqSA4o 3:50 Ivy Prepares Wonderful Turnovers!
xgixm6IS-bU 8:35 Lunch Suggestions On The March - Q&A
ofANlXsPoys 5:42 Baked Apples With Ivy!
55M_AijtbCY 6:21 You Have To Try This Delicious Onion Pie!
6KAOLnVDrYk 10:42 Bedding In The 18th Century - Q&A
LuVjjF-c7K0 4:44 "Horrible" Gruel Recipe?
LjSgtHjNcnA 9:05 Cooking Corn With Ashes - Q&A
kZ6V4askxgk 6:10 History: Discovering the Puzzle - A Conversation With Jon
iontxuLlGvY 15:02 A Glimpse Into 18th Century Life Through Art - Uncovering History, Eps. 4.
0KQK1MvtYqw 9:20 Grocery Bags Of The 18th Century - Q&A
DZuwmOkKdbU 5:08 On The Trail? A Simple Recipe For You.
0Nj8gh148i4 6:14 Storing Yeast In The 18th Century - Q&A
b1NOup3RvOw 6:01 Historical Cheesecake with No Cheese - 18th Century Cooking
0VtWHsCkqIk 9:11 Why is Nutmeg in Every 18th Century Recipe? - Q&A
z_jAzz72TDQ 7:18 We Had No Idea How This Recipe Would Turn Out
f35KeyXdkIM 6:57 Choosing Flour For Ship's Biskit - Q&A
oeqAWSuJwzQ 3:46 Food: A Bridge Between Time and Culture - A Conversation with Jon
d-QFtneb6y8 6:09 A 1747 "Forced Meat" Cabbage
dzrB9IQHCT4 10:21 Spices and Herbs in Colonial Recipes - Q&A
dzxhHB6EAIM 3:34 The Power of YouTube - A Conversation with Jon
oboVYUhD7jc 4:26 A 300-Year-Old Delicious Sausage Recipe
Xz7307Hf2p4 9:09 Safety While Cooking - Q&A
a34dP9NCwjw 6:35 Passion for History - A Conversation with Jon
lxGIMGiJNwQ 4:32 Trout Poached in Butter Sauce
1SLjOYrIaO4 7:38 Townsend Products In Movies - Q&A
4oXnJKttC8U 3:27 Frumenty Follow-Up Questions
E9LKfr23mCo 6:32 Mmmm, That's Wonderful! - Frumenty: A Wheat Pudding From the 18th Century
-gr2-NLaHTI 12:10 Tents During Wartime - Q&A
JQuZS61SezE 4:10 Imitation Coffee from the 17th and 18th Centuries
IkiC-4ZMD0o 8:04 Fashion in the 18th Century - Q&A
20ojEhM2MAo 6:34 The Story of a Copper Chocolate Pot
GBzrkLBAuYw 2:26 Ivy Makes 17th Century Jumbles!
R20a9OKHFLk 6:32 Hats as a Status Symbol - Q&A
GuT4MPZ61-E 4:07 An 18th Century Cheese Soup
cnajzi2vp6g 8:06 Cleaning With Ashes - Q&A
0xs7_EIC5iI 2:24 Washing Dishes in the 18th Century
Yv-nSG6fV1g 7:55 A Delicious Lamb in a Blanket
MsMPxt5LMBw 7:07 Children in Reenacting - Q&A
IO2R-kCEh98 2:55 The Old Wye Mill in Maryland
jeXeX9jzN1E 12:25 A Glimpse Into 18th Century Life Through Art - Uncovering History, Eps. 3.
CYrJjwJbAig 8:20 Help Us Encourage Artisans and Craftsmen - Q&A
ylcoJUauMGs 4:17 Coppersmith, Peter Goebel
BJgKI8yvTnc 9:17 The Coin in The Twelfth Night Cake - Q&A
DS1CQlacX2U 11:01 A Wonderful "Twelfth Night" Cake!
qI1u8nkqwXM 9:27 Why a "Dutch" Oven? - Q&A
jhVer2CHJlM 4:14 A Perfect Holiday Gingerbread Cake
X34YriXy-DM 5:03 Suet Tips and its Many Uses - Q&A
Hal0j27z1AI 4:57 A Natural Plant Dyer: Experiencing History Through Reenacting
oGtbcqFXV4Y 6:21 A Delicious Cheese Spread, Welsh Rabbit from 1788.
UZdO3dhdYPQ 6:52 Cookies, Treats, and Chocolates - Q&A
9gpda2XpGps 7:35 The Lightest and Crispiest Cookie You'll Eat!
XMrEoVZWfpw 10:28 Historical Time Pieces in the Kitchen - Q&A
36wA0JXlYpI 5:02 An 1812 Field Surgeon: Experiencing History Through Reenacting
Tew1_6htqmw 8:24 An American Chestnut Pudding
YucM3Zzvekg 7:24 Mixing Time Periods with Your Reenacting Props - Q&A
nnAp8ukJjyo 7:31 The Traditional Spinster: Experiencing History Through Reenacting
4Y9vDwlfm1w 8:39 A Delicious Thanksgiving Turkey
hqbxQQzUbXg 5:58 Choosing Different Meat for Your Boiled Pudding - Q&A
KWNb8ZpfKI0 7:07 Additions to Improve Your Pemmican? - Q&A
q8Je33ducec 6:00 German Farmer Interview: Experiencing History Through Reenacting
c_v_g0iIXTI 6:34 A Savory "1788" Steak Pudding
HFMZc3MqjMk 8:55 The Best Ash Cake Methods - Q&A
i6K4JXMb48Y 5:00 Weaver/Trapper Interview: Experiencing History Through Reenacting
NojtlqEUE0A 5:28 A 240-Year-Old Recipe for Pickling Eggs
m6M_kyg07GI 3:30 Advice from a Camp Follower: Experiencing History Through Reenacting
kOXdCaIYgBo 4:29 A Must-Try Recipe! - 18th Century Bread Pudding
_b-ZO8xUO8o 13:46 Finding the Right Event - Q&A
cPpAJBvD6Wg 4:05 Trapper/Camp Follower: Experiencing History Through Reenacting
mJKxQ9YC7N4 11:13 How to build an Earthen Oven and Use it the Same Day!
I0niucqP5CY 8:19 Earthen Oven Techniques - Q&A
n_MLrLz35Gc 7:00 Cooking Pumpkins Over an Open Fire
WXzZtWfbN_8 6:05 Salt Venison in the 18th Century - Q&A
uMh6lXWYEyk 8:56 The Best Survival Soup - Q&A
rlhXyUU5K6Q 6:36 Irish Farm Tour at the Frontier Culture Museum
6mCW5iibwhg 6:05 Simple Sauerkraut Soup -- a Delicious Dish for Soldiers and Sailors Alike
CbtxQsYsFTI 4:30 Making a Living in Living History - Q&A
NJHRlUtjvTA 4:24 A New Model for Building Reenacting Organizations
2iLX1V82MuU 12:52 Recruiting Young Blood into Reenacting.
_L6M8GcxCf4 9:43 Founding a New Reenacting Group - From a Handful to Hundreds
Y-3aXbGQYUY 6:11 Drinking Water and Chestnut Rails- Q&A
LVaS7zG0U34 7:13 Ash Cakes and Soldier Rations - Q&A
NFfdHL_D7Zo 4:08 How to Pickle Cabbage - when you simply can't wait for Sauerkraut
mJWRHH0VKzw 5:48 More Firewood Suggestions - Q&A
gPYZ6z_WXi4 5:12 Improving Your Portable Soup - Q&A
92xHoNQQ45s 9:40 Simple Soldier Cooking Without Utensils
9Lj2mY-3CpA 6:52 Great Sauerkraut Ideas - Q&A
M-EW8RFtZnA 4:13 More Portable Soup Troubleshooting - Q&A
MVZMvRYFMkU 6:42 Choosing The Right Firewood - Q&A
ITpr3e_Ld3U 9:14 Making Fresh Sauerkraut
3eEF9aHn9BM 6:43 Great Advice For Beginners - Q&A
3rqoh6nUPck 8:59 Advice From a Young Reenactor
6DEDkDj6JOs 12:52 Mosquitoes In The 18th Century - Q&A
r6EdE12bauo 7:42 Troubleshooting Portable Soup
napw-TfbrY8 6:37 Perfect Campfire Dumplings
EpM51WmYu7Y 15:34 Sugar In Early America - Q&A
yYLx1qu_9jQ 10:49 A Glimpse Into 18th Century Life Through Art - Uncovering History, Eps. 2.
lQTPxBi6j8c 7:49 Choosing Your Reenacting Shirt - Q&A
ztzT0Gdbf0o 4:59 A Delicious Strawberry Tart from the 18th Century
mc7XLSfDHPI 8:41 Preserving Fruit: How Does It Work?
UNTpZkiiqUs 4:48 Rediscovering A Lost Method Of Preserving Strawberries
RbJUfX2zdu8 12:16 18th Century Cookbook Resources - Q&A
Du4HOoXcMUY 11:19 Sauerkraut In Early America - Q&A
ZqI2HHDKCCc 4:41 Pickling Onions Made Easy!
ZDaS27wIExw 10:02 Food On The March: A Difficult Scenario - Q&A
ZQBZZ6P3aB0 12:31 The Perfect Campfire Coffee! - 18th Century Cooking from Townsends
MC5KxOh_VZA 6:31 Great Rose Water Questions! - Q&A
TrvIritLPCU 7:17 Could This Be The Yuckiest Recipe Yet?
eQjYDORq0Dk 8:34 Why Won't My Jelly Stay Thick?? - Q&A
rlSYXS2tV7k 4:20 Chicken Soup of the Time - Forgotten Food For The Sick
AirgjZRPGF8 7:01 Long Term Potato Storage - Q&A
yUYgguMz1qI 12:40 The Top 6 Historical Egg Preservation Techniques!
5_bHWCfT_r0 9:23 Uncovering History: Details In A Painting
gml_mCwBFpY 7:28 Getting Started Reenacting Help Is Coming! - Q&A
d9WzchoVg8U 7:14 Interview With A Longhunter - Dennis Neely
kzitnnBoOpE 3:32 Fresh Herbal Tea - Good For What Ales Ya!
bG0ahlK3kUY 8:34 Historical Eye Glasses From Jas. Townsend and Son
_BmMPKQer2o 4:24 Jon has a Question for YOU! - Q&A
l5Yeh9ajNYE 5:24 Pistachio Fried In A Flaky Crust - 18th Century Fritter
MrnUGfO15vY 3:26 Books on Brewing 18th Century Beer and Wine - Friday Resource Forum!
UFo_NYojaww 7:24 Straightening Antlers and More - Q&A
JDFpAIAkPXs 4:09 An Update On The Herb Garden
hN9AnOxpA0U 5:30 An Easy Way To Keep Green Beans -- 18th Century Food Preservation
9YEBv0kL_rE 3:32 Eyeglasses and Fabric Research - Friday Resource Forum!
KMNKgXxT7gQ 5:32 Excellent Knife Suggestions and Hasty Pudding - Q&A
0WsNJhqrWu0 9:55 Making a Quality Custom Knife, The Easy Way
w1f1vLdhUuI 4:27 Making Fresh Pasta For Pudding?
kZNYNAAWyW8 3:17 An Easy Way To Get Printed E-Books for Less! - Friday Resource Forum!
1patOYJrCQ8 5:47 Switchel, Earthen Ovens, And A Thank You! - Q&A
tZl-8mN43VU 3:49 Historical Candy: Candied Violets in the 18th Century
_a3qqIFfXdk 2:57 Friday Resource Forum! -- Today's Topic: Historic Cookbooks
C_INYlEI9J4 6:02 Herb Gardens And An Exciting Announcement! - Q&A
jP96AP3Epjg 4:35 Planting an Herb Garden with Centuries-Old Favorites
RaOfQg1V0Sk 5:29 Is That A Pudding?! - Q&A
y6NIMNkaGI4 4:48 Dessert Cocktail From 1739 - Whipped Syllabub
6PZ5eszZaO4 5:46 Tomahawks And Portable Soup - Q&A
niHMHQEaQ0A 1:22 Changes Are Coming!
2fE5KzvOZRk 5:56 Easiest Way to Make Portable Soup
iU8Tw8L3-2Q 7:25 Springtime Soup Made With Wild Greens
eMu9kMTmX94 6:34 Sealing Wax and Lemon Cream - Q&A
8VF9lvALA70 2:37 Gathering Wild Spring Greens
OMCjJpgDYgw 3:33 A Wonderful Lemon Cream from 1796 Cookbook
Cjcez07A9qA 2:24 How To Use Sealing Wax
cV36Ol9HJus 6:52 Doughnuts and Reenacting - Q&A
gjzzbFyPDtk 3:20 Why Do You Reenact?
M-xwPIWhCFc 5:05 Making Fantastic Doughnuts
3tgy9Epi9rU 4:45 Asparagus and Meat Pies - Q&A
r3-cWeMO-BA 3:01 Asparagus Soup - 18th Century Cooking S6E10
zBL_Ts0CjgM 5:43 Bone Broth and The New Catalog - Q&A
X9TV44kHgbY 6:48 Hearty Bone Broth Packed With Nutrients
bQgOe2sxQA0 9:23 Nettle Soup and Suet - Q&A
Wfbk_UuI7jo 4:07 Pasta Pudding? - Kugel in the 18th Century
KTzI_H8Hqm0 8:48 Vermicelli Soup - Bone Broth Q&A
uFQF_k7ABzk 3:38 Super Rich Broth. Handmade Noodles. What's Not To Love?
ly8JCrrf2v4 7:46 Vermicelli Pasta and More - Q&A
PtZw9-uhG58 4:11 Handmade Pasta From the 18th Century
hL9ggfKTmQw 7:28 Posset and Food Processing - Q&A
3W37acPnX8Y 5:47 Wine Custard, or Posset - 18th Century Cooking S6E5
lZu2ApLq4so 5:59 Cabbage and Salt Pork - Q&A
lkd2C3CeK4A 6:00 A Cabbage Farce - 18th Century Cooking S6E4
EmDLuESNrsY 2:57 Carrot Custard and Mushroom Ketchup - Q&A
nPT5K3EVk1E 5:34 Strawbale House - Q&A
gaMoCbuzMjk 2:28 Five Eggs. Butter. Sugar. CARROTS???
m8spJme7dPw 4:36 Carrot Pudding Substitutions Q&A
lkpBqbxUGAo 1:51 Strawbale House - Quick info and Construction Pictures
YcepS9pk4YA 5:00 Carrot Pudding - 18th Century Cooking S6E2
RM0CKaS6e_k 4:19 Pearl Ash And The Spice Kit Q&A
CIxnByZRmgs 9:56 Chemical Leavening Discoveries Final Episode - Exploring The 18th Century
e8sPaesPOiU 5:03 18th Century Energy Drink - Switchel 18th Century Cooking S6E1
1JfkJue2kBY 4:39 Brick Tea And The Kitchen Set - Q&A
DBQnI-oJj9Q 8:36 Early Domestic Use - Chemical Leavening Discoveries Part 5
TGzxss84Yuk 4:07 1824 English Gingerbread 18th Century Cooking with Jas Townsend and Son S5E18
Ld988VufjbM 3:34 Fritters, Grain, and Gingerbread - Questions And Answers With Jas Townsend And Son
WuOTHTwgHhk 0:40 Stay Tuned...
hD7mNUAj9MA 6:42 American Potash Cake 18th Century Cooking with Jas Townsend and Son S5E17
jJvrCmtVIdQ 6:15 Eggs, Currants, and Bread Questions And Answers With Jas Townsend And Son
ieHi4PVMJU0 10:53 Poison In Your Bread?! Chemical Leavening Discoveries Part 4
mIG-gJaYcG0 4:26 1796 Honey Gingerbread 18th century cooking with Jas Townsend and Son S5E16
5_XhZ6-1rrc 3:33 Facebook Fix Questions And Answers With Jas Townsend And Son
o-W1E26C4g8 14:03 Chalk In Your Bread?! Chemical Leavening Discoveries Part 3
zD2a-0X5mMU 5:10 Early American Christmas Cookie 18th century cooking with Jas Townsend and Son S5E15
gaGnBm_o02k 9:34 Chemical Leavening Discoveries Part 2: Gingerbread
qsVoPH3uCHE 3:47 1796 Holiday Feast 18th century cooking with Jas Townsend and Son S5E14
8eFEueSENg0 4:51 Hartshorn And More Questions And Answers With Jas Townsend And Son
w_ozzlKJivA 8:16 Chemical Leavening Discoveries Part 1
1p4HTYnituU 3:53 Pumpkin Pie 18th century cooking with Jas Townsend and Son S5E13
aJy121CwX6U 4:06 Salt Pork And More Exploring The 18th Century Episode 18
lQncVs8AhfU 3:05 Indian Pudding 18th century cooking with Jas Townsend and Son S5E12
FcnFya6TGQw 6:30 Yeast and Sugar Substitutes Exploring The 18th Century Episode 17
o-wHQ7B6o3E 2:47 Trail Pudding - Bonus episode - 18th Century Cooking Jas Townsend and Son
L-DpDWuhgj0 3:54 Sweet Potato Pudding - 18th century Cooking with Jas Townsend and Son S5E11
INdEZUb_7yc 3:35 Barm, Stuffing, And More Exploring The 18th Century Episode 16
3jDgaqgw6NY 5:28 Bread Stuffing and Cranberry Sauce 18th century cooking with Jas Townsend and Son S5E10
CXSOZ4N2uhE 7:17 Turkey, Art, and More Exploring The 18th Century Episode 15
rtdwWgAfZ3o 4:43 Interview with Common-Stock Entertainments
NJCLl1rPDng 8:40 Holiday Turkey - 18th century cooking with Jas Townsend and Son S5E9
fx5gJ6RhUao 3:25 Fritter Questions Exploring The 18th Century Episode 14
OuUaQhLMY6A 4:34 Painter Interview Gary Zaradka Part 2
MZrJ_81ZhrU 4:20 Apple Fritters 18th century cooking with Jas Townsend and son S5E8
nBdEfwtPTPA 6:48 Pocket Soup And More - Exploring The 18th Century Episode 13
SWUyob5-BS8 4:29 Painter Interview Gary Zahradka Part 1
lIdsJJ1w19s 7:19 Ash Cakes Revisited 18th Century Cooking S5E7
uSWkgpgsnGc 3:56 Foods Of The Rich And Poor Exploring The 18th Century Episode 12
ypvphqCUI28 4:28 Blacksmith Interview - Mark Thomas of MT Forge
oi-hih-dNOc 6:30 Portable Mud Oven - 18th Century Cooking S5E6
O-WreAhn2N8 3:49 Pemmican Storage Exploring The 18th Century Episode 11
x_3qd8W52c0 4:51 An Interview With Jim's Red Pants
a6ApJGqJOi0 3:07 Pemmican Episode 4 - 18th century cooking with Jas Townsend and Son S5E5
YwWqbkJdYYI 3:20 An Interview With Josh - Exploring The 18th Century Episode 10
uCuolUsiv6U 3:46 Butter And Gluten Free Recipes - Exploring The 18th Century Episode 9
JHMAoIJuiVU 3:24 Pemmican - The Ultimate Survival Food - Episode 3 - 18th century cooking S5E4
1oz-wAquMGA 3:33 More On Pemmican Exploring The 18th Century Episode 8
VtRyzRjpEBM 4:00 The Long "S" Exploring The 18th Century Episode 7
HQZj1-lSilw 5:43 Pemmican Part 2 - Let's Prepare It!
lnIlDeqvU9s 3:45 Pudding Exploring The 18th Century Episode 6
x_vLuMobHCI 3:32 Pemmican - The Ultimate Survival Food
kBiklTpZqVI 3:19 Earthen Ovens - Exploring The 18th Century Episode 5
vNiwTr8b2LU 3:00 Baking Hints Exploring The 18th Century Episode 4
ERWr8la3Y_M 6:20 Making Mushroom Ketchup - 18th Century Cooking with Jas. Townsend and Son
Hz8QyV1tiNQ 3:15 Research Hints Exploring The 18th Century Episode 3
oWldJdU9XrU 2:49 While Jon's Away, The Mice do Play: Bloopers
S03i1PPKuEo 2:00 Music Exploring The 18th Century Episode 2
xBA0PlNatAg 4:00 Simple Apple Pudding - 18th Century Cooking - Soldier Cooking
I305aVCKAK8 2:50 Cookbooks Exploring The 18th Century Episode 1
7_IlkvfebRA 3:19 Wild Cherries 18th Century Cooking with Jas Townsend and Son S4E15
DFEcAVT0fec 3:37 Cooking Onion Soup - 18th Century Recipe S4E14
NRRULZe0CdU 4:38 Onion Rings -18th Century Cooking S4E13
SY6mKVieHZc 2:50 Cooking Simple Hard Dumplings - 18th Century Recipe S4E12
P5jyaisfskQ 3:35 Currently Making Currant Jelly
z50nLsbF424 7:28 Red Currant Tart - 18th Century Cooking S4E10
ktT-z3KMt8g 9:26 Forcemeat Meatballs - 18th Century Cooking S4E9
xCGt5qxh5-c 8:11 18th Century Pancakes with Whipped Cream and Jam
IN03MUqeUa4 10:29 Easy Scotch Eggs in the 18th Century
Hu3EUMtftHs 3:09 Which Clay to use in my Earthen Oven? Jas. Townsend and Son
SzH5B0T2GYU 8:52 Plum pudding 18th century cooking with Jas Townsend and Son S4E6
LMh0nU1bUIk 5:02 French Beans in a Ragout 18th Century Cooking with Jas Townsend and Son S4E5
ouBe6uXkJ6Q 2:36 New Reflector Oven - Tin Kitchen at Jas Townsend and Son
kmpetFHET3w 3:46 Hot Chocolate Drink - 18th Century Cooking Jas Townsend and Son S4E4
Wmu2BawJ7ic 7:30 Chocolate Tart - 18th Century Cooking with Jas Townsend and Son S4E3
M13LaXgmr0Q 6:11 Chocolate Biscuits - 18th Century Cooking with Jas Townsend and Son S4E2
mPG_6yS6VHk 3:13 Horsetail or Scouring Rush - Helpful Hints from Jas. Townsend and Son
Yxg_dvGhIKk 6:26 Another Hasty Pudding - 18th Century Cooking with Jas Townsend and Son S4E1
U54YN7gCYEA 5:44 18th Century Beef Pasty - Part 2 18th century cooking with Jas Townsend and Son S3E16
jsVDQmx3okg 6:18 18th Century Beef Pasty - Part 1 _ 18th century cooking with Jas Townsend and Son S3E15
Tn4_CAOqG_U 5:21 Vegetable Pie - 18th Century Cooking with Jas Townsend and son S3-E14
dfpMRQsqM34 8:25 Standing Crust Shell - 18th Century Cooking with JasTownsend and Son S3E13
K7ygsDDlJxw 4:03 Stoneware Storage Jars and Imitation Bladders available at Jas. Townsend and Son
5-y_be5F2dw 8:09 Cheese Tart - 18th Century Cooking Series from Jas. Townsend and Son S3E12
7Z6zFfafDkQ 3:50 Quire of Paper - (Crepes) 18th Century Cooking Series with Jas Townsend and Son S3E11
SB1o-8b6J5U 4:54 18th Century Milk Pancakes - 18th Century Cooking Series with Jas. Townsend and Son S3E10
Iad4GJy73Ks 2:45 Revised - Dutchovens at Jas. Townsend and Son
eHABi4c_K8s 2:25 Leather Bottles and Costrels at Jas. Townsend and Son
L4lxZ_6GLhw 5:50 Potato Cheesecake Really? - 18th Century Cooking with Townsends
fnl-jOnoYgg 9:25 Lobscouse - 18th century Cooking series with Jas Townsend and Son S3E17
pTc2iGQUdQw 9:02 Standing Crust Meat Pie - 18th Century Cooking with Jas. Townsend and Son S3E8
ypRsO9KdxXk 10:52 Suet - 18th Century Cooking with Jas. Townsend and Son S3E7
qAxnt3DMI70 4:46 Cooking Historical Lemon Cheesecake - 18th Century Recipe S3E6
WrulF6z-1Mw 8:58 Christmas Mince Pie - 18th Century Cooking with Jas. Townsend and Son S3E5
BpaIrBVDsLg 5:12 Pear Tart - 18th Century Cooking with Jas Townsend and Son S3E4
-xuZ9voHjuI 3:27 How to Make Simple Pie Crust - 18th Century Cooking
js3dcJ2KyF8 8:23 How to Make Puff Paste Crust - 18th Century Cooking with Jas. Townsend and Son S3E2
OUGjxi6SHHU 7:16 Standing Paste Pie Crust - 18th Century Cooking with Jas. Townsend and Son S3E1
zs9fD40jG-o 4:32 Challenges and Thanks - 18th Century Cooking at Jas. Townsend and Son
NAoj2iA8hMQ 3:24 Blog Thoughts on 18th Century Cooking at Jas. Townsend and Son
VAQivvWHcww 3:54 Thoughts on Research - 18th Century Cooking with Jas. Townsend and Son
y2b1n5ZuYxU 3:49 Personal Thoughts about The 18th Century Cooking Series
YYTIsQQoanM 8:01 Pain Perdu - Historical French Toast - 18th Century Cooking S2E19
t8hLp0ND4OY 8:03 No-Knead French Bread: 18th Century Breads, Part 7. Cooking with Jas. Townsend and Son S2E18
KkbuIP0kby0 2:23 Dutch Ovens at Jas. Townsend and Son
2vTa6M8QyrU 3:35 Which Yeast?: 18th Century Breads, Part 6. Cooking with Jas. Townsend and Son S2E17
9q8kNsc3iv8 9:11 Sourdough from Leaven: 18th Century Breads, Part 5. Cooking with Jas. Townsend and Son S2E16
leC_cCs4i5w 9:46 Understanding Bread. What Makes It Rise?: 18th Century Breads, Part 4.
SAhL8AQTl2E 1:20 Everted Copper Sauce Pan available at Jas. Townsend and son
tVuWJ54CjpE 9:01 Cornbread: 18th Century Breads, Part 3. S2E14
0dtBjqIu5W8 9:58 Baking Historic Mixed Grain Breads: 18th Century Cooking S2E13
FyjcJUGuFVg 9:02 Ship's Bisket - Hard Tack: 18th Century Breads, Part 1. S2E12
Y8R-w0uhNGU 9:33 Delicious Asparagus Forced in a French Loaf - 18th Century Cooking S2E11
f0e6fOKQT7k 9:48 WhitePot Bread Pudding - 18th Century Cooking Series S2E10
ytLt_GLiRZs 5:53 Cleaning Copper Dishes
rWYtmcEXgPw 6:17 Cookie or Cracker? You Decide! - 18th Century Cooking Series S2E8
BPQVFQmwZMU 10:29 Mud Oven in 24 Hrs - Start to Finish
KbTn_IjmUFc 4:30 Stinging Nettle Soup - 18th Century Cooking Series with Jas. Townsend and Son S2E6
i6xwZEsEaw0 7:13 How to Season Cast Iron Cookware - 18th Century Cooking Series S2E5
_m7W8yBUIHY 3:40 Here’s Why We Built Our Kitchen.
JjNO4EH69r8 10:14 How to make a Quaking Pudding - Boiled Puddings Part 2 - 18th Century Cooking Series S2E3
KzFtoJEBtps 12:43 Boiled Plum Pudding - 18th Century Cooking Series S2E2
_Oq3mtcEGi0 6:22 Cookbooks - 18th Century Cooking Series 2 with Jas. Townsend and Son S2E1
ckELeAo-Lzo 10:05 Baked Beans - 18th Century Cooking Series at Jas Townsend and Son
2pUHi3ZV4r0 6:22 "A Pound of Meat" Soldier Food in the 18th Century
TLux39dDBWk 9:35 Baking Wiggs Seed Cakes - 18th Century Cooking Series
29u_FejNuks 6:30 Making Mushroom Ketchup, 18th Century Cooking Series at Jas. Townsend and Son - Townsends
Nlo-4ugeFU8 10:38 Cooking 18th Century Meat Pies at Jas. Townsend and Son
p3I8WzTltAo 4:08 Just Add Flour and Fry It! - Tasty Fish Cakes
WAJqGVxuJPo 7:16 Baking Bread in the Earthen Oven Part 2 - 18th Century Cooking Series
i0foHjPVbP4 12:31 How to Build an Earthen Oven
9qIEE-CeNn8 3:48 The Hardships of 18th Century Soldiers
fKNGPMefJ_A 7:33 Soup, Stew and Hash - 18th Century Soldier Cooking S1E4
ZdmPIpQZPRg 6:17 Preparing Salt Pork - 18th Century Cooking Series S1E5
f55ZjXt7rrc 10:13 Cooking Ash Cakes - 18th Century Cooking Series S1E3
# @removed - advertisements
# UVWzUUMIaI8 1:29 Townsend's Rotisserie Set
gFFxPVfJNXQ 7:17 Cooking Pumpkins - 18th Century Cooking Series S1E2
qUt1ZHs3wQ8 2:34 18th Century Soldier's Rations - Cooking Series at Jas Townsend and Son S1E1
tQfelatUur8 15:49 Death by Zombies
Zg65rB-z66Q 3:02 Starting a Fire with Flint and Steel at Jas Townsend and Son
G_iITvMJZEY 9:58 Making Beeswax Candles at Jas Townsend and Son
# Qdeao8VuOvc 3:31 Strangely Ever So Slightly Green Sale at Jas Townsend and Son
# HUPicKky8q4 5:27 18th Century Lighting at Jas Townsend and Son
# JjDaQAfIPew 1:46 Men's 1830's Clothing at Jas. Townsend and Son
# A4wUEkOdrdU 1:55 Ladies 18th Century Shortgown Outfit at Jas Townsend and Son
t9fNT33UPyk 4:18 DRESSING A LONGUNTER
lTj69MROASA 4:06 Buttons at Jas Townsend and Son
Mbp9gUQEyyM 1:49 Sewing Kit at Jas Townsend and Son
2drhn3QDgtI 9:27 Weaving on an Inkle Loom at Jas Townsend and Son
Ao1fHB9g_yA 4:08 Canteens at Jas Townsend and Son
_4mEKFl53j8 4:31 Making Pottery at Jas Townsend and Son
5d65fzLmJEs 3:46 Reed Stem 18th and 19th Century Tobacco Pipes
yAeucZG98oM 5:17 Making Hasty Pudding - Jas Townsend and Son
igBvQeQQh4M 1:38 Pocket Spice Kit Informational Video
76bfbziXgu0 1:50 Townsend's Traveling Physician - 18th Century Medicine Kit
# BW3st-zVKOE 2:59 Oak Kegs at Jas Townsend and Son
# 6GYcEKlUUYM 5:39 18th Century Work Shirts at Jas. Townsend and Son
# _Y1sYnUT5VY 1:12 JTS Video Collection on DVD
wCKkG4AMFOY 2:50 Caring for Your 18th Century Leather Shoes
# BMbtRtqu1oY 2:43 18th Century Mens Shoes at Jas Townsend and Son
# CR7hbun0Hbo 4:48 18th Century Writing Items available at Jas Townsend and Son
# dB6NaRKr--E 2:18 Folding Writing Desk at Jas. Townsend and Son
# wgwvG7M82tU 5:38 18th Century Mens Felts Hats at Jas. Townsend and Son
# BR8PuwYXMOU 2:36 Closeup view of Rev War Regimental Coat from Jas Townsend and son
# om5hXLDxta4 3:34 18th Century Style Pocket Watches at Jas. Townsend and Son
MW0b_jufUjQ 3:04 Dough Bowl Information and Care
fb198dPndE4 3:05 How to Take Care of your 18th Century Reproduction Knives
cKYGjhj9DfQ 7:33 Choosing Period Eye Glasses for Historical Reenacting
PtJuHU9nLtU 3:30 How-to Reline your Canteen with Pitch
ftst7ZfhiJw 6:50 Reproduction 18th Century Coins at Jas Townsend and Son
YYpl0In8laI 2:46 Roasting Green Coffee Beans
_O68bv_EwIg 9:10 Tour of Jas Townsend and Son
HMAvG97cLvc 8:46 Installing Shoe Buckles
WeAz_-Bl3mg 0:18 Combination Rush Light Holder S-4040
0YYAiSjgPeY 0:24 Iron Betty Lamp BL-25
d7oMkHWaoY8 1:35 Do You Always Dress Like That?
rtuIpkMaVBI 1:31 Assembling Fire Set from Jas Townsend and son
fVsZ8WXV3Us 1:02 Revolutionary War Continental Coat

# Island Voices Videos

e3y4kKTnk9I 6:03 English documentary: Craigard, with Donald MacKinnon
IfPxG5Rc1R8 6:03 Gaelic documentary: Craigard, with Donald MacKinnon
fOGTKqNe_90 24:38 Aodán Ó Cearbhaill: Taisce bheo na nGael (2)
5qL7jDY3sUI 31:32 Aodán Ó Cearbhaill: Taisce Bheo na nGael (1)
-QmoxtlXntc 36:01 Aire air Sunnd: Staing na Gàidhlig
cnNvrkkmmJU 5:07 Jane NicLeòid: Talking Points Extract
VSK03u0YeKg 11:24 Doctor Joseph Farquharson: Talking Points Extract
4xZmzCN2qRg 7:55 Professor Udaya Narayana Singh: Talking Points Extract
YRiQBOc37Pw 6:56 Audrey West: Talking Points Extract
mHuQEPKW5hw 5:58 Kalyan Das Gupta: Talking Points Extract
krLY9ATKT5w 12:46 Professor Conchúr Ó Giollagáin: Talking Points Extract
1D5dOwSOV0E 15:54 Aire Air Sunnd: Launching the Island Voices workshops
10BUSDrdr6Y 49:36 Dr Will Lamb: Progress Towards Accurate Automatic Speech Recognition for Scottish Gaelic
ObJ-c1MT0Xs 1:16:06 Language Contact - Bilingual Balance? Talking Points Discussion 3
nnZOZD-l-fM 1:18:20 Language Hierarchies - English Ascendancy? Talking Points Discussion 2
xHWdO6mPl68 1:11:58 Language Endangerment - Gaelic Trajectory? Talking Points Discussion 1
JnwtBGuvb0g 7:10 Norman Maclean Talking Points, Part 3. Language Contact - Bilingual Balance?
CvcjkU-1Ybs 7:41 Norman Maclean Talking Points, Part 2. Language Hierarchies - English Ascendancy?
vUvu8ueMecA 7:34 Norman Maclean Talking Points, Part 1. Language Endangerment - Gaelic Trajectory?
XFGInaf_DGQ 3:31 Norman Maclean's homecoming (subtitled)
NR7w2G7ihYY 2:21 Language Contact: Talking Points 3 (short)
SBqk3mSQPM4 2:20 Language Hierarchies: Talking Points 2 (short)
4lfvx4cF6-4 2:20 Language Endangerment: Talking Points 1 (short)
VNgYaDP8dbM 7:02 Di Nyuuzpiepa
m2IYhk7_xMQ 10:00 Gaelic Jorni
-nmZNvGw9vw 29:48 Caitlín Ní Bhroin (2): Taisce Bheo na nGael (Zoom)
-FgU-xdz-i0 34:37 Caitlín Ní Bhroin (1): Taisce Bheo na nGael (Zoom)
0G4pnGencqE 9:49 Seanchas: Deireadh Sliochd nan Leòdach
M9IdCRVYTKI 26:19 Anna Frater (4): Stòras Beò nan Gàidheal
NUZZi2JxqNQ 11:17 Seanchas: Coinneach Bàn, Fear-taca Lacasaigh
CFAdfqY0zDE 30:22 Anna Frater (3): Stòras Beò nan Gàidheal
FkV6H5Fw5oY 33:10 Anna Frater (2): Stòras Beò nan Gàidheal
5BCcGp3yrr0 26:35 Anna Frater (1): Stòras Beò nan Gàidheal
53S0BDgqgqA 7:21 Dijitaizieshan Senta ina di Hebrides
WR1XxF2hrmQ 5:29 ソールモールオスタイク : Sabhal Mòr Ostaig in Okinawan
AX9y0i-baK0 30:39 Alasdair MacDhòmhnaill (4): Stòras Beò nan Gàidheal
bsZR7RH2N6A 29:35 Alasdair MacDhòmhnaill (3): Stòras Beò nan Gàidheal
9ULYjB49MK0 33:39 Pàdruig Moireasdan (2): Stòras Beò nan Gàidheal
41HK5rfgqkQ 33:49 Pàdruig Moireasdan (1): Stòras Beò nan Gàidheal
605mlP1idmY 31:15 Curstaidh NicDhòmhnaill: Stòras Beò nan Gàidheal
HvFkuWeNIFI 36:15 Christine NicLeòid: Stòras Beò nan Gàidheal (Zoom)
co-6effRTxI 24:07 Clíona Ní Ghallachóir (2): Taisce Bheo na nGael (Zoom)
DHPdzMdKaM4 24:25 Clíona Ní Ghallachóir (1): Taisce Bheo na nGael (Zoom)
VlrLXiVl4FI 19:35 Anna NicAonghais (2): Stòras Beò nan Gàidheal (Zoom)
3bOakOFmte8 20:45 Anna NicAonghais (1): Stòras Beò nan Gàidheal (Zoom)
5S59NCL5n6o 25:40 Calum Alasdair Friseal: Stòras Beò nan Gàidheal (Zoom)
E5wF5Jyn488 2:20 Criomagan (English subtitles)
QSSfLqbMi-g 2:20 Criomagan
r_yHflfgbEU 36:22 Guth nan Siarach agus Staing na Gàidhlig
hZSCw-PtDy8 25:48 New Insights on the Vernacular Gaelic Communities in the Islands
eRGf-cO9lNI 33:05 Maggie Smith (3): Stòras Beò nan Gàidheal (Zoom)
aiYtcnUrWag 19:18 Maggie Smith (2): Stòras Beò nan Gàidheal (Zoom)
C9kvP85bR1k 25:19 Maggie Smith (1): Stòras Beò nan Gàidheal (Zoom)
JD8pBRRx748 6:54 Ceòlas nyári iskola
FiZ0GkauTqo 6:03 Tο Κέντρο ημέρας Craigard
RFScg-VAQB8 3:27 Mi piace questo binario! (Gaelico)
4jlJMNpP9Gc 8:39 Schnellboot nach St Kilda
vfH9jG4w9k0 6:54 Ceòlas yaz okulu: Turkish documentary
PiLzZG-p3f4 0:42 Khasi Recitation
OnTKpQokfx0 5:06 विंडसर्फिंग - Windsurfing (Hindi)
WqGxcr81ryQ 8:39 সমুদ্রপথে সেইন্ট কিলডা - Seatrek to St Kilda (Bangla)
Vdg9KbnG43A 3:30 আমার হাত বান্ধিবি - Traditional Baul Song
jkPemTDiKMU 30:27 Christine Primrose (2): Stòras Beò nan Gàidheal
SGB0wHMFBqo 22:35 Christine Primrose (1): Stòras Beò nan Gàidheal
cJRBSfQiPzg 33:34 Seònaid Mhoireach (2): Stòras Beò nan Gàidheal
jg9i8NjjMak 29:59 Seònaid Mhoireach (1): Stòras Beò nan Gàidheal
zdEm2Unuy40 22:18 Iain Greumach (2): Stòras Beò nan Gàidheal
zz8m6ci7h-k 21:24 Iain Greumach (1): Stòras Beò nan Gàidheal
SkpKC8OKHjU 29:29 Gina NicDhòmhnaill (2): Stòras Beò nan Gàidheal
KzFpoKS68wo 30:42 Gina NicDhòmhnaill (1): Stòras Beò nan Gàidheal
unbDf0APkxI 34:10 Aonghas MacPhàil (2): Stòras Beò nan Gàidheal
NXVLSUOZZZs 37:53 Aonghas MacPhàil (1): Stòras Beò nan Gàidheal
BrRnV6GgEDY 35:44 Dòmhnall MacDhòmhnaill (3): Stòras Beò nan Gàidheal
ZyNuFDHs8HI 35:57 Dòmhnall MacDhòmhnaill (2): Stòras Beò nan Gàidheal
b6oowtPH-_g 29:55 Dòmhnall MacDhòmhnaill (1): Stòras Beò nan Gàidheal
Hap5Jo1q1o4 23:37 Alasdair MacDhòmhnaill (2): Stòras Beò nan Gàidheal
IzNK8uQsI8Q 20:56 Alasdair MacDhòmhnaill (1): Stòras Beò nan Gàidheal
rKf21a8ma_8 34:38 Seonag Smith (3): Stòras Beò nan Gàidheal
oJ24vgH2z8I 31:33 Seonag Smith (2): Stòras Beò nan Gàidheal
jHO1uy8apEk 26:08 Seonag Smith (1): Stòras Beò nan Gàidheal
rvX7JEYOShs 26:48 Màiri Robasdan (2): Stòras Beò nan Gàidheal
n70qZv3d6V8 24:19 Màiri Robasdan (1): Stòras Beò nan Gàidheal
PIAlpFcwf9o 28:05 Ailig Mac a' Phì (2): Stòras Beò nan Gàidheal
ykesJEsmpq0 33:10 Ailig Mac a' Phì (1): Stòras Beò nan Gàidheal
GbbhUD-QzN4 30:13 Catrìona Nic an t-Saoir (2): Stòras Beò nan Gàidheal
9yYPB_s5SJ8 27:08 Catrìona Nic an t-Saoir (1): Stòras Beò nan Gàidheal
__QqgB0_-zo 32:09 Alasdair MacAsgaill: Stòras Beò nan Gàidheal
CSVFn79rb2w 22:22 Two Lands, Many Languages - दो देश, भाषाएं अनेक - Dà Dhùthaich, Iomadh Cànan
W-MXXM8N8V0 1:19 Juri Dutta poetry reading
mhm6BoZ-SME 7:02 அந்த செய்தித்தாள் - Am Pàipear (Tamil)
KwfyOcHZLtg 0:57 Rusa Bhowmik
ybWYSEmgerE 0:53 Dharani
jgENcQMS3Rc 21:50 Hughena NicDhòmhnaill (2): Stòras Beò nan Gàidheal
ZGq8t29yNAw 23:00 Hughena NicDhòmhnaill (1): Stòras Beò nan Gàidheal
RvazpLf5mok 29:55 Tòmas MacDhòmhnaill (1): Stòras Beò nan Gàidheal
mZUA0JQTlLs 32:11 Tòmas MacDhòmhnaill (2): Stòras Beò nan Gàidheal
Z-Q3M_eKjO8 26:36 Pàdruig Moireach - Stòras Beò nan Gàidheal
Vc6rGv2_XsY 26:39 Eairdsidh Caimbeul - Stòras Beò nan Gàidheal
wtTukz3jIcM 10:00 Un viaggio gaelico - A Gaelic journey (Italian version)
fspj74toS_o 8:02 Magaidh Smith
21CS8cXHHXY 5:33 Breton Documentary: Sabhal Mòr Ostaig
v93311R1hyc 9:49 Liam Alastair Crouse, 2018
R8cX7UmIYdQ 5:07 रीस्टोर प्रोजेक्ट - Restore Project: Hindi documentary
0sHXrjqW2fY 38:51 Cearcall a' Chuain
nNjB-mwrxkU 10:08 ゲール語圏内の旅 - A Gaelic Journey (Japanese Version): Benbecula to Ranafast
lhC267fHNZ0 7:21 Scots documentary: Kist o Riches
9WcGBnPSOiA 10:01 A Gaelic Journey (Welsh version): Benbecula to Ranafast
q__BlZuajkU 4:58 Danns' ri Puirt
q70Hf8EsINg 10:00 A Gaelic Journey (Manx version): Benbecula to Ranafast
vLsE5iy8TyA 3:40 Liam Alastair Crouse, 2017
WR8jgqj2iic 4:39 An Dr Dòmhnall Uilleam Stiùbhart
j89COOGz6vQ 5:29 Urdu Documentary: Surfing
gT_mDHN7GHA 5:09 Urdu Documentary: Restore Project
IP2xWdottZM 52:25 Dihaoine - Gàidhlig: Saoghal Thormoid
TlUzd4pKaIg 44:21 Diardaoin - Cruthachalachd: Saoghal Thormoid
NqUS1wwtCeA 53:48 Diciadain - Coimhearsnachdan: Saoghal Thormoid
eiIzDMYAI_A 35:13 Dimàirt - Foghlam: Saoghal Thormoid
nCR2mVnDcX0 38:33 Diluain - Sinnsireachd: Saoghal Thormoid
K_pFGFRTEEI 4:18 Dr Will Lamb
AxHYpaPA2xg 4:11 An Dr Uilleam Lamb
NCJXHbbAqqg 10:00 A Gaelic Journey (Basque version): Benbecula to Ranafast
rMvPI7WnHjU 5:21 Basque Documentary: Lazybeds
mW2xqxSN2mM 15:35 Birlinn Chlann Raghnaill: Alan and Bill at Kildonan
lZ34eqW-_M8 3:19 The Birlinn of Clanranald: Alan Riach at Loch Eynort
revUU6yuVR0 6:20 Professor Roibeard Ó Maolalaigh
bupT81GRgtg 5:58 Árd-Ollamh Roibeard Ó Maolalaigh
I3h-Uvhzg5M 6:13 Polish Documentary: Peatcutting
am6Cghfv7hk 4:02 Gordon Cameron: Soillse Fieldworker
urjHTiEDgds 11:56 A' Bhean-Uasal NicÌomhair à Cnoc an t-Soluis air a' Bhac
Dq9zUc0uUCY 2:57 Bodach nan Serviettes
jSYVP31__As 4:39 Dòmhnall Phàdraig agus Màiri Claire
pE7hwWrsJvo 5:12 Hàllain
9OEdOF5TmcQ 4:07 Cabhag
mj6LQcFESw4 4:30 Mìorbhailtean ann am Barraigh
OXRS4B1iN2k 3:44 Sgeulachdan Thormoid: Facal-toisich
AKQw8r_tuA0 14:00 Angus Nicholson: Marathon Man
96uNMiHKkds 5:56 Alasdair MacGillivray (Gaelic)
mVcUhG_Sx7o 4:45 Alasdair MacGillivray (English)
qULMnzVxmC0 2:21 Stuart Dunmore aig Soillse
tFjV1G5SCuY 3:23 Marsaili agus Nicola aig a' cho-labhairt
SyPoihGGi-g 1:20 Co-labhairt aig Soillse
ttnzmXJAiVA 5:22 Cothrom Nativity Play
soBxek1baRs 8:36 Ewen MacAskill
TCXxIcI7NuM 9:09 Donald MacCormick: Highland Soldiers
NNSSfeErLdI 8:29 Norman Johnson - Piper
WjA2vrpeqBw 3:07 Norman Maclean: Òran do sgoilearan Chàirinis
LAvXmN0kND0 6:50 Isa MacKillop: Companaich m' òige
e07YWWJ2dJY 6:27 Cathie Laing: Sgìths 's Cruadal
3lJf1q4gMz4 11:22 Alec Macaulay
tTB4sBGzSl8 18:27 Willie MacDonald
cquuGRtZf10 8:54 Reverend John Smith
SJeFpt-sbl4 6:06 Enterprise on the Edge
TCpQaZSm4b0 6:47 Introduction to Virtual St Kilda
B7OczE1nBog 2:56 A Very Busy Spider - in Balivanich!
try9ISkWaY0 3:55 The Story of the Dog
ThCrio5wX3A 6:36 Sgeul a' Choin
CXRO6dyYqig 4:09 Blàr Chàirinis
vanUJ2uQbdU 3:25 Sgeul an Eich
njS_lGrf9-I 4:13 The Story of the Horse
XL-_EiekT3I 2:58 Òran le Ruairidh Beag
Unx1xpaWyVU 10:00 A Gaelic Journey (English Version): Benbecula to Ranafast
Y43I66Bxi6c 4:12 Eairdsidh agus Nìall Caimbeul: Extended Conversation
7bizb_Y_mU8 10:00 A Gaelic Journey (Scottish Version): Benbecula to Ranafast
AP4V-QoxVtw 3:45 Aodh Mac Ruairí: Extended Interview
K5Rp4WyMTpY 1:45 Darragh Ó Dochartaigh: Full Recitation
sv3tdC8jbXo 5:29 Bridanna Ni Bhaoill: Extended Interview
RHZS4f1xagA 10:00 A Gaelic Journey (Irish version): Benbecula to Ranafast
rNuexnaek-Y 7:28 Àiridh na h-aon oidhche
Rj1pUb8GgQA 8:03 Iain Trumisgarry - A Conversation
ivU7CZLbm0s 8:48 Grogarry Lodge
KkI-MBBPj2Q 4:59 English Interview: Greenspace Manager Donald MacRitchie
Wjp_LOeTIpU 7:03 Gaelic Interview: Seallam! Director Chris Lawson - Services
Kr2Zn6S6d2E 5:55 Gaelic Documentary: Greenspace Research
puHYOzsj6fc 6:57 English Interview: Seallam! Director Chris Lawson - Services
BjcDY0XBKjU 7:21 Gaelic Documentary: Tobar an Dualchais
NhiShBJBQVo 7:21 English Documentary: Tobar an Dualchais
w_bD2WRw5dE 6:56 Gaelic Interview: Manager Shona MacDonald
oAg5xmlbTBo 6:32 English Interview: Manager Shona MacDonald
mMtM3eg3BsE 4:14 English Interview: Digitiser Catriona Scott
92ZDzl77Zvo 3:31 Gaelic Interview: Digitiser Catriona Scott
kfqkYEpaWOw 4:28 English Documentary: Seallam! Visitor Centre
utbihJPiANY 4:28 Gaelic Documentary: Seallam! Visitor Centre
9D625F1rr8g 5:35 English Interview: Seallam! Director Chris Lawson - Plans
5sIYPeYZEKQ 4:16 Gaelic Interview: Seallam! Director Chris Lawson - Plans
mdVwD2LtWRQ 4:38 English Interview: Local Artist Margarita Williams
SXxgPwXFAt8 4:03 Gaelic Interview: Local Artist Margarita Williams
aPRZdXED3RI 5:55 English Documentary: Greenspace Research
k1bg47R0Spc 4:47 Gaelic Interview: Greenspace Manager Donald MacRitchie
AklugRUiq6I 3:18 English Interview: Greenspace Consultant Donald MacDonald
HBux_tajzLE 4:08 Gaelic Interview: Greenspace Consultant Donald MacDonald
6noT8JNLcIo 5:00 Gaelic Interview: Greenspace Researcher Malcolm Murray
Y1XvPNsebjY 5:17 English Interview: Greenspace Researcher Malcolm Murray
CdH0UYqeNEU 4:15 English Documentary: Urras Oighreachd Ghabhsainn
nADAPb_ULDg 4:15 Gaelic Documentary: Urras Oighreachd Ghabhsainn
ggr21IALMzg 5:24 Gaelic Interview: Galson Chair Agnes Rennie - History and Work
QAjmp6VLnWw 5:06 English Interview: Galson Chair Agnes Rennie - History and Work
2Mk6yITs1Co 3:11 English Interview: Powerdown Officer Kirsty MacLennan
QiVmdURUTfM 3:26 Gaelic Interview: Powerdown Officer Kirsty MacLennan
PrnxTmbfH7E 3:15 Gaelic Interview: Galson Chair Agnes Rennie - Plans and Partnerships
_3Bwrv6EQbI 2:57 English Interview: Galson Chair Agnes Rennie - Plans and Partnerships
RRCWwcbyhJk 8:39 Gaelic Documentary: Seatrek to St Kilda
Dm69bBehc98 8:39 English Documentary: Seatrek to St Kilda
PJtltorLDWU 5:26 English Interview: Seatrek Manager Murray MacLeod
dj0UiV50cmA 4:26 Gaelic Interview: Seatrek Manager Murray MacLeod
D5ywSDeeJ_A 4:39 Gaelic Interview: Uig Resident Iain Buchanan
r5CoQnfLbl0 4:31 English Interview: Uig Resident Iain Buchanan
jN3gEaU-0bA 7:02 English Documentary: Am Pàipear
u30-ksN_ITQ 7:02 Gaelic Documentary: Am Pàipear
0Uz4rnp8VAs 4:59 Gaelic Interview: Am Pàipear Editor Archie Mackay
KWJMIJb7u10 4:41 English Interview: Am Pàipear Editor Archie Mackay
h-2d5Y6GTcU 5:59 Dhan Chamara: Gordon Wells
brEh4uC5H6o 5:05 To Camera: Gordon Wells
4MYB3_cJSV4 3:39 English Interview: Craigard Supervisor Marnie Keltie
SQ-SPY0mE0Q 2:05 Tormod MacGill-Eain: Dhan Chamara
9W9CahaP9cY 2:06 Norman Maclean: To Camera
Qq-qeP1sOkk 5:59 Gaelic Documentary: Craigard Day Centre
RWbgJx7b8i8 6:00 English Documentary: Craigard Day Centre
dSV7XmfaNXs 1:33 Gaelic Interview: Craigard Client Donald Mackinnon
kqsvPFGczy8 2:04 English Interview: Craigard Client Donald Mackinnon
2I1-odilPAQ 4:35 Gaelic Interview: Community Member Flora Macdonald
MdtddN5Eips 5:05 Gaelic Documentary: Furniture Restoration Project
F4HvA6hgLik 5:05 English Documentary: Furniture Restoration Project
SX754F42cXE 4:13 Gaelic Interview: Craftsman Seumas Macdonald
eyXENTCY52E 4:09 English Interview: Craftsman Seumas Macdonald
zdc3zSi4Txg 4:31 Gaelic Interview: Cothrom Director Neil Macdonald
5mRz6nwCsIk 3:30 English Interview: Cothrom Director Neil Macdonald
OwRUxJJ25IM 4:34 Gaelic Documentary: Hebridean Smokehouse
WE4bijFvuR8 4:34 English Documentary: Hebridean Smokehouse
B92ah2z5Gdc 6:08 Gaelic Interview: Environmental Health, Alasdair MacEachen
iIc70iBFYxE 5:32 English Interview: Environmental Health, Alasdair MacEachen
DoLxQCv_8Kg 7:03 English Documentary: Hebridean Cookery Demonstration
2Dji5JJQyZE 7:03 Gaelic Documentary: Hebridean Cookery Demonstration
tkJzq1TnfNU 2:26 English Interview: Hotelier Isabel Graham
MCaJmD5gcOY 2:05 Gaelic Interview: Hotelier Isabel Graham
4gaba9hEa7I 6:49 English Documentary: Ceolas Music Summer School
lBH7VQwJcPI 6:49 Gaelic Documentary: Ceolas Music Summer School
eqA82-ICMLw 3:58 English Interview: Ceolas Chair Mary Macinnes
KGk0yD5ysrc 4:10 Gaelic Interview: Ceolas Chair Mary Macinnes
6ph4AM-gG6s 2:26 English Interview: Ceolas Administrator Mary Ellen Stewart
IH6OY4AK5iM 2:16 Gaelic Interview: Ceolas Administrator Mary Ellen Stewart
vTH7hzGVh84 2:04 Gaelic Interview: Ceolas Student Ruairidh MacIlleathain
Op9huMFXk7Q 3:31 English Interview: Ceolas Student Dale Cummings
-O0BFGrUCro 7:22 Gaelic Documentary: Taigh Chearsabhagh Museum and Art Centre
lq3TAmvEats 7:22 English Documentary: Taigh Chearsabhagh Museum and Art Centre
XLq2zi5q0Gc 2:05 Gaelic Interview: Heritage Officer Catriona MacCuish
pdFnlRY71tQ 1:51 English Interview: Heritage Officer Catriona MacCuish
dMK4XTqQdKw 2:26 Gaelic Interview: Student Artist Donald Ferguson
ej-r01VbJhk 2:10 English Interview: Student Artist Donald Ferguson
RRmexyUMSeI 6:20 Gaelic Documentary: Bi Beo Songwriters
QBXmX5C0aWk 6:20 English Documentary: Bi Beo Songwriters
2gxdS9Yt4XY 4:22 English Interview: Lyricist James MacLetchie
nktgD8WXN00 7:35 Gaelic Interview: Lyricist James MacLetchie
3Bwp5Xz-Tlc 5:24 English Interview: Musician Kevin de Las Casas
5-ujWQLfWuM 5:05 Gaelic Song: Singer James MacLetchie
tKsWZCJ6hgg 6:51 Gaelic Interview: SMO Depute Principal John Norman Macleod
e3u-b8ZVN3I 5:07 Gaelic Documentary: Children's Parliament in Barra
M0CoVo10oJg 2:06 Gaelic Interview: MCP Sarah Macinnes
Z2FxyLkk1pE 5:07 English Documentary: Children's Parliament in Barra
OqvA-hqkZg4 1:59 English Interview: MCP Sarah Macinnes
0dCR5GZH0Cw 6:23 Gaelic Interview: Parent Isabell Macinnes
HdyIQIGZgbs 6:48 English Interview: Parent Isabell Macinnes
8V3Mn5w6QCA 7:10 Gaelic Documentary: Children's Parliament in Benbecula
1zE217N1OcQ 7:10 English Documentary: Children's Parliament in Benbecula
4Fe543X4v2s 5:56 Gaelic Interview: Health worker Isabel Steele
YJI2ABr_kQM 7:51 English Interview: Health worker Isabel Steele
GSd976uh4LY 8:09 Gaelic Interview: Teacher Catriona Black
OegXYbamM2Y 7:27 English Interview: Teacher Catriona Black
_y2QclvLeqg 7:38 Gaelic Documentary: Work Skills Courses
xzXQFHMwaiQ 7:38 English Documentary: Work Skills Courses
W5vxFXSg6Dc 5:08 Gaelic Interview: Crofter/demonstrator Neil MacPherson
QZncNeybaaY 3:43 English Interview: Crofter/Demonstrator Neil MacPherson
UB1TDIBqXJ0 2:54 Gaelic Interview: Boatbuilding pupils
_Ax25cBZ1YI 3:09 English Interview: Boatbuilding pupils
XOc-HqsKHKo 5:32 Gaelic Documentary: Scotland's Gaelic College
brvfX4QOJic 5:32 English Documentary: Scotland's Gaelic College
bv0x5WdxgrI 5:05 English Interview: SMO Depute Principal
5KUJBlCRAds 4:01 Gaelic Interview: SMO staff and students
QSrNsKXE6AA 4:42 English Interview: SMO staff and students
5O99V5-X-6g 5:50 Gaelic Documentary: Grimsay Boat Day
FTzb9yK1kx0 5:50 English Documentary: Grimsay Boat Day
USnH21qauj0 4:25 Gaelic Interview: Father, Lachie Morrison, on Grimsay and boats
-kRntPW3k9E 2:06 Gaelic Interview: Son, Padruig Morrison
YyF3wfyJMgY 4:14 English Interview: Father, Lachie Morrison, on Grimsay and boats
bQ1MJLz0usA 2:20 English Interview: Son, Padruig Morrison
1wjxcB9kSRk 7:50 Gaelic Interview: Lachie Morrison, Heisgeir reminiscence
V6bOwZ2qDRk 5:05 English Interview: Lachie Morrison, Heisgeir reminiscence
0aDmuKJEivQ 4:45 Gaelic Interview: Crofter Roddy Red Tie Macdonald
zNicypDAtMk 4:08 English Interview: Crofter Roddy Red Tie Macdonald
CLgG0vMsm3c 6:22 Gaelic Interview: Biodiversity Officer Anne Maclellan
yVLEmBGJXLs 6:09 English Interview: Biodiversity Officer Anne Maclellan
FfCv_pesimY 7:03 Gaelic Documentary: Crofting and harvesting
SI79UOktKCI 7:03 English Documentary: Crofting and harvesting
QhQx8V0i1To 3:40 English Interview: Peatcutter Archie Campbell on the peatcutting process
RN6WNGlvYcQ 6:11 Gaelic Interview: Peatcutter Archie Campbell on the peatcutting process
QTL_QuEVWbY 5:02 English Interview: Peatcutter Archie Campbell on Social Customs
tSzGGE_CTNs 5:07 Gaelic Interview: Peat cutter Archie Campbell on Social Customs
ZdNQB86k49E 3:31 English Interview: Lazy beds co-ordinator Tommy Macdonald
UosWZ6bxNTE 3:59 Gaelic Interview: Lazy beds co-ordinator Tommy Macdonald
3E015U6h1Ns 2:03 English Interview: Lazy beds demonstrator Angus Macdonald
CqE6Gku5yYM 2:24 Gaelic Interview: Lazy beds demonstrator Angus MacDonald
KMnJoV2WWmc 5:20 English Documentary: Lazy beds
L9E0ucZDZVs 5:20 Gaelic Documentary: Lazy beds
I22eWfust5U 3:42 English Interview: Razorfish Cook Mary Anne Mackay
hLm9ByfQl6g 4:24 Gaelic Interview: Razorfish cook Mary Anne Mackay
KvIcz5GfRzE 4:55 English Interview: Razorfish catcher Alec Beaton
7-JUfyHCSm4 4:18 Gaelic Interview: Razorfish demonstrator Alec Beaton
Gsqf75JZAwY 5:00 English Documentary: Catching razorfish
i_eaBU3EHl8 5:00 Gaelic Documentary: Catching razorfish
e1phTyxse-E 5:06 English Documentary: Windsurfing
rgs8o9LyX1A 6:29 English Interview: Surfer Will Lamb
ag-p7au9vBU 6:46 Gaelic Interview: Surfer Will Lamb
0nV9qsIK1sc 5:06 Gaelic Documentary: Windsurfing
t4BCnSdiS1k 3:29 English Interview: Windsurfer Angus Johnson
dmGk8x-i0Lg 4:15 Gaelic Interview: Windsurfer Angus Johnson
Xr_briCza9I 3:31 Tormod MacGill-Eain: Tighinn Dhachaidh
u8V6JgxS_BA 3:35 Norman Maclean: Creativity and Values
of5cWjD9CKg 6:08 English Documentary: Peatcutting
v0OQNvT-lAI 6:08 Gaelic Documentary: Peatcutting
UXM4jfriBhU 5:29 English Documentary: Surfing
u1IJN-TiEQY 5:29 Gaelic Documentary: Surfing

# Ben Eater

g_koa00MBLg 31:17 How do hardware timers work?
-wMU8vmfaYo 30:36 Why was Facebook down for five hours?
MCi7dCBhVpQ 33:00 SPI: The serial peripheral interface
2lPzTU-3ONI 37:20 How does n-key rollover work?
N0O5Uwc3C0o 36:15 How does USB device discovery work?
wdgULBpRoXk 34:15 How does a USB keyboard work?
dL0GO9SeBh0 20:04 Keyboard interface software
w1SB9Ry8_Jg 28:27 Keyboard interface hardware
7aXbh9VUB3U 33:07 So how does a PS/2 keyboard interface work?
PE-_rJqvDhQ 20:16 Breadboarding tips
BUTHtNrpwiI 44:25 World's worst video card gets better?
2iURr3NBprc 25:12 Installing the world’s worst video card
oOYA-jsWTmc 25:38 Interrupt handling
h0jloehRKas 36:46 What is error correction? Hamming codes in hardware
DlEa8kd7n3Q 27:36 Hardware interrupts
v3-a-zqKfgA 42:26 Binary to decimal can’t be that hard, right?
ZYJIakkcLYw 31:39 How assembly language loops work
fCbAafKLqC8 28:43 Why build an entire computer on breadboards?
omI0MrTWiMU 17:42 Subroutine calls, now with RAM — 6502 part 7
i_wrxBdXTgM 38:14 RAM and bus timing — 6502 part 6
xBjQVxVxOxc 24:25 What is a stack and how does it work? — 6502 part 5
FY3zTUaykVo 28:10 Connecting an LCD to our computer — 6502 part 4
oO8_2JJV0B4 15:35 Assembly language vs. machine code — 6502 part 3
yl8vPW5hydQ 49:42 How do CPUs read machine code? — 6502 part 2
LnzuMJLZRdU 27:25 “Hello, world” from scratch on a 6502 — Part 1
uqY3FMuMuRo 24:23 World's worst video card? The exciting conclusion
l7rce6IQDWs 32:47 The world's worst video card?
sNkERQlK8j8 53:13 Hardware build: CRC calculation
izG7qT0EpBw 47:30 How do CRCs work?
ppU41c15Xho 28:21 Checksums and Hamming distance
MgkhrBSjhag 21:42 Error detection: Parity checking
eq5YpKHXJDM 43:54 Reliable data transmission
Zg1NdPKoosU 43:10 Conditional jump instructions
ObnosznZvHY 29:27 CPU flags register
AqNDk_UJW4k 18:20 Making a computer Turing complete
hKD-lBrZ_Gg 46:59 The case against Net Neutrality?
Nws5-kp8Blk 6:23 Update and PODCAST ANNOUNCEMENT!
FCscQGBIL-Y 18:50 Adding more machine language instructions to the CPU
JUVt_KYAp-I 31:14 Reprogramming CPU microcode with an Arduino
HtFro0UKqkk 17:59 8-bit CPU reset circuit and power supply tips
dHWFpkGsxOs 43:52 8-bit CPU control logic: Part 3
X7rCxs1ppyY 18:22 8-bit CPU control logic: Part 2
dXdoim96v5A 27:52 8-bit CPU control logic: Part 1
AwUirxi9eBg 13:17 8-bit CPU control signal overview
-6JAgFWCL9w 19:11 8-bit computer build: Connecting the bus
dLh1n2dErzE 32:47 Build an 8-bit decimal display for our 8-bit computer
K88pgWhEb1M 57:30 Build an Arduino EEPROM programmer
BA12Z7gQ4P0 25:22 Using an EEPROM to replace combinational logic
7zffjsXqATg 15:33 Designing a 7-segment hex decoder
tNwU7pK_3tk 7:47 Program counter build
g_1HyxBzjl0 9:18 Program counter design
exGEmA67dNc 5:13 Binary counter
rXHSB5w7CyE 12:42 Master-slave JK flip-flop
st3mUEub99E 12:28 JK flip-flop racing
F1OC5e7Tn_o 10:03 JK flip-flop
Vw3uDOUJRGw 16:43 RAM module testing and troubleshooting
5rl1tEFXKt0 14:13 RAM module build - part 3
KNve2LCcSRc 21:02 RAM module build - part 2
uYXwCBo40iA 13:45 RAM module build - part 1
FnxPIZR1ybs 13:45 8-bit computer RAM intro
4nCMDvnR2Fg 5:42 Testing the computer's ALU
U7Q8-2YZTUU 15:10 Troubleshooting the ALU
S-3fXU3FZQc 16:17 Building the ALU
mOVOS9AjgFs 15:10 ALU Design
4qH4unVtJkE 13:49 Twos complement: Negative numbers in binary
9WE3Obdjtv0 10:53 Testing our computer's registers - 8-bit register - Part 5
CiMaWbz_6E8 9:40 Building an 8-bit register - 8-bit register - Part 4
-arYx_oVIj8 20:07 Designing and building a 1-bit register - 8 bit register - Part 3
faAjse109Q8 9:03 Tri-state logic: Connecting multiple outputs together - 8 bit register - Part 2
QzWW-CBugZo 9:36 Bus architecture and how register transfers work - 8 bit register - Part 1
SmQ5K7UQPMM 10:42 Clock logic - 8-bit computer clock - part 4
WCwJNnx36Rk 10:31 Bistable 555 - 8-bit computer clock - part 3
81BgFhm2vz8 12:50 Monostable 555 timer - 8-bit computer clock - part 2
kRlSFm519Bo 27:51 Astable 555 timer - 8-bit computer clock - part 1
HyznrdDSSGM 6:53 8-bit computer update
YW-_GkUguMM 16:01 D flip-flop
peCh_859q7Q 9:16 D latch
KM0DdEaY5sY 12:59 SR latch
sTu3LwpF6XI 13:02 Making logic gates from transistors
DXvAlwMAxiA 11:23 How a transistor works
33vbFFFn04k 15:51 How semiconductors work
wvJc9CZcvBc 13:39 Learn how computers add numbers and build a 4 bit adder circuit
Lv9Gc3Lghjk 9:11 Comparing the buffer and inverter circuits | Digital electronics (10 of 10)
hYN8C769k8A 9:21 Inverting the signal with a transistor | Digital electronics (9 of 10)
ks_VShSgPns 8:43 Using a transistor to solve our problem | Digital electronics (8 of 10)
WD14ow-1q6k 4:30 The transistor as a current controlled switch | Digital electronics (7 of 10)
BpJAh0KfgEI 5:43 Troubleshooting: Investigating why the LED is so dim (5 of 10)
uo2KgRN04XI 9:36 How a transistor amplifies current | Digital electronics (6 of 10)
KEOsmWRoT00 8:02 Connecting to a mystery signal | Digital electronics (4 of 10)
LakgUi2Ajkw 13:22 Powering our LED circuit | Digital electronics (3 of 10)
CdqvY_vY1XA 12:04 Limiting current through an LED | Digital electronics (2 of 10)
poWJTSV4Yio 10:14 Experimenting with LEDs | Digital electronics (1 of 10)
a73ZXDJtU48 7:26 Programming Fibonacci on a breadboard computer
yOyaJXpAYZQ 10:02 Comparing C to machine language
35zLnS3fXeA 11:17 Stepping through a program on the 8-bit breadboard computer
9PPrrSyubG0 15:23 Programming my 8-bit breadboard computer
aamG4-tH_m8 10:07 ARP: Mapping between IP and Ethernet | Networking tutorial (9 of 13)
F27PLin3TV0 9:31 TCP connection walkthrough | Networking tutorial (13 of 13)
MGAaTqFct_I 2:11 Lower layers of the OSI model | Networking tutorial (7 of 13)
8BhjXqw9MqI 11:47 Clock synchronization and Manchester coding | Networking tutorial (3 of 13)
xNbdeyEI-nE 8:50 Looking at ARP and ping packets | Networking tutorial (10 of 13)
VWJ8GmYnjTs 13:50 Hop-by-hop routing | Networking tutorial (11 of 13)
1XrRT0CmzYw 9:05 Frame formats | Networking tutorial (6 of 13)
i8CmibhvZ0c 9:16 Analyzing actual Ethernet encoding | Networking tutorial (4 of 13)
lUo45NqPyq8 4:27 Intro to fiber optics and RF encoding | Networking tutorial (2 of 13)
4IMc3CaMhyY 8:29 TCP: Transmission control protocol | Networking tutorial (12 of 13)
XaGXPObx2Gs 4:14 Sending digital information over a wire | Networking tutorial (1 of 13)
xrVN9jKjIKQ 8:50 The importance of framing | Networking tutorial (5 of 13)
rPoalUa4m8E 9:33 The Internet Protocol | Networking tutorial (8 of 13)
0gurk_vqGLI 3:38 KA 60 Minutes Sep 2013 rerun (10x speed)

# Sustasis

Rx8TGi2aXSc 58:07 The Nature of Matter in the Work of Christopher Alexander - Michael Mehaffy
QzVhCOJVLXE 1:00:46 Nikos Salingaros - Revolution in Architectural Thought
VumQdtXrNLM 4:35 Excerpt from The Alexander- Eisenman Debate of 1982
G7gI-nbUtMg 1:03 Future of Places - Key Messages Summary
wJCw7vSqFDY 42:29 Michael Mehaffy: The Empires New Clothes
oKO3vYjZbcs 1:22:28 Christopher Alexander - Life in Buildings (Full)
_RSc1IWFBzQ 23:00 (In)Forming Patterns: An Online Symposium
PqX6odZkumc 1:22:52 The Empire's New Clothes - Michael Mehaffy, May 12, 2021
Y4yeqD30vgQ 19:55 Unified Architectural Theory, Lecture 11: “Architecture Itself as a Biological System”.
inZ2AV2cwjQ 16:57 Unified Architectural Theory, Lecture 12: “Conclusion”.
cG22CDSFJo4 3:56 Why Pubic Space Matters - Michael Mehaffy
6NXrOzR1xDc 6:05 A tour of the Vineyard Farmers Market, Fresno
VsZIJpp6-no 17:11 Unified Architectural Theory, Lecture 10: “Ornament and human intelligence”.
8gDs89ZRIsc 19:21 Unified Architectural Theory, Lecture 8: “Fractals and ornament generate attachment”
Bx3XP1wtUZE 19:39 Unified Architectural Theory, Lecture 5: “Connecting to the World Using the Mirror-of-the-Self Test”
xQv_1qiDAXY 17:05 Unified Architectural Theory, Lect. 9: “Subliminal reality: Eye-tracking maps the field of centers”
aLX9bqred14 17:12 Unified Architectural Theory, Lecture 7: “Fifteen geometrical properties”
FT9F13QHj7I 18:16 Nikos Salingaros: The Existence of an “I” (Lecture)
tg_TmOQLb10 18:35 Unified Architectural Theory, Lecture 6: “Biophilic design influences human health”
dVGc0eduJac 1:05:06 Nikos Salingaros: “Codes That Generate Life” (Lecture)
EAzSIdckjUY 1:08:04 Nikos Salingaros: “Architectural Education Influenced by Social Engineering” (Lecture)
p4snkjKvLFQ 1:07:24 Nikos Salingaros: “Seashells, Hyperspace, and the Sacred” (Lecture)
ok4vgxQ8H9k 1:06:05 Nikos Salingaros: “A Fractal Distribution is Sustainable” (Lecture)
Ii3TIHZN6ag 1:10:06 Nikos Salingaros: “Folded or Perforated Fractals” (Lecture)
ekjzOvTE1NQ 52:19 Nikos Salingaros: “Complexity and the Fibonacci Sequence” (Lecture)
A7-bAg0SJHY 59:59 Nikos Salingaros: “Centers and Computational Reducibility” (Lecture)
qbpIqHaKzRA 16:19 Unified Architectural Theory, Lecture 4: Computing the regional adaptivity index of a form language
Syu8xwDs-AM 1:01:54 Nikos Salingaros: “Symmetries and Symmetry Breaking” (Lecture)
1KOdxv4oxAY 1:11:08 Nikos Salingaros: Step by step adaptive design (Lecture)
YWDZcaF_3ek 16:38 Unified Architectural Theory, Lecture 3: Complex versus simplistic form languages
gGTjJZhnl4A 1:07:44 Nikos Salingaros: "Christopher Alexander's Fifteen Fundamental Properties" (Lecture)
nIGnm-UiNYw 20:00 Unified Architectural Theory, Lecture 2: Form Languages and Pattern Languages
vcN5fi3zuxA 14:51 Unified Architectural Theory, Lecture 1: The Structure of Architectural Theories
82mH5gS_puc 51:50 Lessons After COVID-19: Addressing Social Isolation through the Built Environment
GEXRQdXXf9I 3:01 Michael Mehaffy Presentation for World Cities Day
3G5noYSiCu0 15:01 Gamla Stan Walking Tour with INTBAU Sweden
J8Dxm-OaE3E 40:01 Pattern Languages of Programming (PLoP) 2020 Presentation - Mehaffy
MB3eFZQtwGY 19:38 New Patterns for a Post-COVID Age
dm0MIeaZIzw 4:56 Tour of Poundbury, UK
bDbnNF20eKY 20:32 Christopher Alexander: Life in Buildings (Excerpt)
XswHZZqO0jk 7:46 Thought Leaders - Jane Jacobs (for FOP Summit - ROUGH EDIT)
o6q1dDAv6zY 4:55 Thought Leaders Christopher Alexander
D3v_F1hrBtE 5:01 Mehaffy - The Urban Dimensions of Climate Change
xaYQK8kTwHg 16:39 Overview of Metro (Oregon) 2009 "Centers and Corridors" Policy Report
nyAtltoaE0s 13:03 Mehaffy - Pattern Languages and Wikis for a New Urban Agenda - 13min Version
muuzfQQLFlc 5:01 Mehaffy - Tools and Strategies for Public Private Collaboration
VCqy00Ahib8 7:37 Mehaffy - Healthy Public Space Networks for a New Urban Agenda
sbXIk5DtVTg 7:01 Mehaffy - Pattern Languages and Wikis for a New Urban Agenda - EDITED VERSION
EzS60DaltAU 16:49 A Conversation with Ward Cunningham - Edited Version
lLy0N0tOVVI 46:24 Discussion with Ward Cunningham Feb 11 19
FkFh4IW1N_s 33:01 Sustasis Interview with Ward Cunningham Apr 5 18
qXBKZPaVHi8 4:31 Dr. Joan Clos at launch event for The Quito Papers, World Urban Forum 9
g9KivwhuCXo 4:20 Ax:son Johnson Address at Habitat III
Zv2l3_59D4M 4:04 Remarks of Michael Mehaffy at PrepCom 3
ArAIvl0hk3M 3:02 Sustasis Executive Director Mehaffy's Testimony to the City Council of Portland, Feb 4 2015
DHBzg0Rd7Yk 2:41 Sustasis Executive Director Mehaffy's Testimony to the City Council of Portland, April 20, 2016
vvKTPbjGm8A 1:13 ACINAT
u33YjyQeb_o 24:15 Nikos Salingaros Addresses ICUPD 2015
RiGlhj-wyYo 32:58 Nikos A. Salingaros on Pattern Language and Form Language
ZvN5kN5TCdY 8:59 The Selling of Sprawl
oEkiNgNnIgI 21:08 Nikos A. Salingaros on Urban Design Education
3UNfYRyGHIQ 18:37 5 Crucial Decades - Michael Mehaffy Presentation and Discussion
mRuEmDr0fuI 7:55 Joanna Alimanestianu speaking at the Future of Places Forum
06nYkNi33vA 7:42 Taller Buildings in Portland
SRwJQXTluLc 7:42 The Impacts of Taller Buildings in Portland
nGjXgHwFYqc 58:44 Vincent Scully Prize for Christopher Alexander - Mehaffy Presentation and Discussion
P5Bu9LjfcZE 2:10 Michael Mehaffy shares lessons at Orenco Station
ts_ArwNEHRk 6:00 Michael Mehaffy at Future of Places II
o2V_0BvFJuc 2:30 2014 Year-end Message from the Sustasis Executive Director
d6pX0S34CZk 10:08 Webinar, "Federated Wiki: Potential for a new generation of open-source scenario-modeling tools:

# PBS Space Time

WZfmG_h5Oyg 20:16 What Happens Inside a Proton?
184eP_KuXek 14:12 How Many States Of Matter Are There?
JnKzt6Xq-w4 18:53 What If We Live in a Superdeterministic Universe?
rQnNghhPw6o 19:28 Could We Decode Alien Physics?
wdP_UDSsuro 20:34 Is Interstellar Travel Impossible?
epSev7ovVew 14:22 Have We SOLVED The Black Hole Information Paradox with Wormholes?
v-aP1J-BdvE 18:51 What If Physics IS NOT Describing Reality?
e3jGWXeBtPo 20:30 The Evolution of the Modern Milky Way Galaxy
v4ogRCjhFDM 15:06 What If the Galactic Habitable Zone LIMITS Intelligent Life?
bUHZ2k9DYHY 17:32 Space DOES NOT Expand Everywhere
G0Q4UAiKacw 18:04 How the Higgs Mechanism Give Things Mass
I8p1yqnuk8Y 18:44 Does the Universe Create Itself?
jeRgFqbBM5E 13:01 Could The Universe Be Inside A Black Hole?
BOLHtIWLkHg 19:15 Where Is The Center of The Universe?
esayi49OAk4 15:44 What If Charge is NOT Fundamental?
LHhFFfv20-4 21:22 Is the Proxima System Our Best Hope For Another Earth?
Thw43hzXlDA 15:55 Are Cosmic Strings Cracks in the Universe?
FP6iyVJ70OU 20:16 Is The Wave Function The Building Block of Reality?
twvj9os9DLE 39:34 The Nature of Space and Time AMA
cDQZXvplXKA 18:14 How Does Gravity Escape A Black Hole?
D-wzdsSiemU 13:25 How To Build The Universe in a Computer
55c9wkNmfn0 20:53 How To Simulate The Universe With DFT
6mJXv5OBel8 14:42 How to Find ALIEN Dyson Spheres
AK44wAvv2E4 20:26 What Happens If A Black Hole Hits Earth?
X5r36VCrA_w 36:39 2021 End of Year AMA!
351JCOvKcYw 16:29 Are Black Holes Actually Fuzzballs?
0sTBZ2G4vow 18:28 What If Our Understanding of Gravity Is Wrong?
Q_CQDSlmboA 19:40 Is ACTION The Most Fundamental Property in Physics?
hYc97J2MZIo 16:19 Will Constructor Theory REWRITE Physics?
iDIcydiQOhc 17:31 New Results in Quantum Tunneling vs. The Speed of Light
dw1sekg6SUY 18:27 Why Magnetic Monopoles SHOULD Exist
EK_6OzZAh5k 19:29 How Electron Spin Makes Matter Possible
1Ou1MckZHTA 14:15 Neutron Stars: The Most Extreme Objects in the Universe
I9y62qoTsic 17:13 First Detection of Light from Behind a Black Hole
gc4pxTjii9c 13:15 How Vacuum Decay Would Destroy The Universe
IEDSAheh8Os 19:01 How to Communicate Across the Quantum Multiverse
QLSIZg0npuA 18:46 How An Extreme New Star Could Change All Cosmology
_H4xrVzd65Q 19:04 How Magnetism Shapes The Universe
z-syaCoqkZA 13:03 Where Are The Worlds In Many Worlds?
pWlk1gLkF2Y 18:10 Electrons DO NOT Spin
vgYQglmYU-8 19:36 How Quantum Entanglement Creates Entropy
snp-GvNgUt4 12:23 Can Space Be Infinitely Divided?
LkeTk-Fi_c8 16:52 Are We Running Out of Space Above Earth?
srVKjWn26AQ 16:08 What If (Tiny) Black Holes Are Everywhere?
uZDhCW-PTRM 11:02 Breaking The Heisenberg Uncertainty Principle
3sq658Okvao 19:20 How To Know If It's Aliens
Vk5bxHetL4s 18:54 The NEW Warp Drive Possibilities
qy8MdewY_TY 12:21 What If Dark Matter Is Just Black Holes?
O4Ko7NW2yQo 12:36 Why the Muon g-2 Results Are So Exciting!
SMPid7Sh0EE 17:11 Zeno's Paradox & The Quantum Zeno Effect
dsCjRjA4O7Y 18:09 The NEW Crisis in Cosmology
OHdV9aO6jaE 13:25 How Does Gravity Affect Light?
UKxQTvqcpSg 11:51 Does Time Cause Gravity?
L9L_gNogNes 18:26 Gravitational Wave Background Discovered?
GKD1vDAPkFQ 12:44 How Does Gravity Warp the Flow of Time?
fidzLZQyaJE 16:51 Is Dark Matter Made of Particles?
6MfJ59lkABY 16:43 Can We Break the Universe?
j5HyMNNSGqQ 12:58 What Happens During a Quantum Jump?
0A1ouV7iD8o 16:22 Navigating with Quantum Entanglement
3tCWWnXicC0 16:30 The Supernova At The End of Time
F0b8b_ykPQk 14:36 Why Do You Remember The Past But Not The Future?
QkWT-xMTm1M 14:21 The Arrow of Time and How to Reverse It
RY7hjt5Gi-E 13:57 Can Free Will be Saved in a Deterministic Universe?
qKVpknSKgE0 15:44 Electroweak Theory and the Origin of the Fundamental Forces
z4odQd8q3xY 16:59 How The Penrose Singularity Theorem Predicts The End of Space Time
1JCRDaa3ehk 16:31 Is The Future Predetermined By Quantum Mechanics?
EagNUvNfsUI 16:06 Do the Past and Future Exist?
nNdy-LJWNQs 15:58 Venus May Have Life!
4KCDGa98Ckc 17:43 Solving Quantum Cryptography
XNK5oahmw3I 16:17 Could Life Evolve Inside Stars?
xFKgIOX8IRE 16:55 The Truth About Beauty in Physics
hp2Ek1cA1LE 12:44 How Do We Know What Stars Are Made Of?
tJgWnbET1eE 17:49 Can Future Colliders Break the Standard Model?
Uf0q4Iq3AC8 15:18 How Stars Destroy Each Other
CJx3gLkebIA 1:23:28 Theory of Everything Controversies: Livestream
_izocEgArtQ 1:34:45 What is a Theory of Everything: Livestream
iozCwyjxhyY 2:30 Theory of Everything Livestreams with Amazing Guests
As7vWYmb5L8 15:01 The Boundary Between Black Holes & Neutron Stars
JOMrbkZqTcs 13:48 Does Antimatter Explain Why There's Something Rather Than Nothing?
1Z5fnwUmTSY 16:19 Dissolving an Event Horizon
lqGxj3Esdxc 13:27 Building Black Holes in a Lab
PC2JOQ7z5L0 18:30 What Happens After the Universe Ends?
o2ZcvPW5EcI 17:10 Can Viruses Travel Between Planets?
z91oGI5aP0A 16:42 Does Gravity Require Extra Dimensions?
4v9A9hQUcBQ 17:41 Mapping the Multiverse
M3GQM7tuq2w 18:04 How Luminiferous Aether Led to Relativity
Y6Vhh70Lw9w 17:49 How We Know The Universe is Ancient
9xIn1Ti7bz0 1:14:15 Space Time Livestream: Ask Matt Anything
ldVDM-v5uz0 17:18 Will Wormholes Allow Fast Interstellar Travel?
t8o5W425uhw 16:59 Was the Milky Way a Quasar?
vAgiHreswj0 17:25 How We Know The Earth Is Ancient
T4oYvSH6jJ8 15:15 What’s On The Other Side Of A Black Hole?
UjgGdGzDFiM 13:59 How Black Holes Spin Space Time
vSnq5Hs3_wI 19:27 How Do Quantum States Manifest In The Classical World?
QTZZUjnrbF8 17:20 Does Quantum Immortality Save Schrödinger's Cat?
GlOwJWJWPUs 15:25 How Decoherence Splits The Quantum Multiverse
CT7SiRiqK-Q 17:17 Does Consciousness Influence Quantum Mechanics?
e7yXqF32Yvw 17:01 Are Axions Dark Matter?
qT110-Q8PJI 16:56 Are there Infinite Versions of You?
GWFJteC7kIk 16:53 Hacking the Nature of Reality
et7XvBenEo8 16:17 Solving the Three Body Problem
T2pImihwFHg 14:57 How To Capture Black Holes
zw2TYNY3F8U 10:06 How To Detect a Neutrino
rFgpKlcpzNM 18:30 Do Black Holes Create New Universes?
dSvgw9ZOK3I 17:50 The Doomsday Argument
F2s7vyKucis 16:39 Is The Universe Finite?
q-6oU3jXAho 18:29 Can You Observe a Typical Universe?
YmOVoIpaPrc 17:24 Does Life Need a Multiverse to Exist?
8wa1l7M5gU8 15:59 Why We Might Be Alone in the Universe
pGnMiGrYmPE 13:01 Is Time Travel Impossible?
L2suMPiuog4 17:33 Loop Quantum Gravity Explained
fKgQYOlpxmo 14:19 Black Hole Harmonics
XglOw2_lozc 18:45 How Many Universes Are There?
CzJIWxplAbQ 18:17 Is Pluto a Planet?
FshtPsOTCP4 19:37 Could We Terraform Mars?
51usJ74pPP8 14:13 Is Earth's Magnetic Field Reversing?
n8cEZM1lN5g 12:59 How To Become an Astrophysicist + Challenge Question!
chsLw2siRW0 13:51 What Happened Before the Big Bang?
-5j98wi_M2w 5:31 Exploring Arecibo in VR 180
xJCX2NlhdTc 13:28 What Caused the Big Bang?
E8rel2-kLJA 10:12 Deciphering The Vast Scale of the Universe | STELLAR
K8gV05nS7mc 13:34 Did Time Start at the Big Bang?
_N-2Sx-FDQA 15:20 The Quantum Internet
ElulEJruhRQ 18:42 Thorium and the Future of Nuclear Energy
cqCPnXHKO5c 8:33 The Quasar from The Beginning of Time | STELLAR
FocZf26yTU0 14:33 How Black Holes Kill Galaxies
MmgMboWunkI 15:41 The Alchemy of Neutron Star Collisions
k6BL1GOXgp8 15:21 The Cosmic Dark Ages
pi7YwxxZQ5A 17:15 Why Quantum Computing Requires Quantum Cryptography
GOhOlLa4teg 12:07 The Real Science of the EHT Black Hole
5t0jaE--l0Y 14:38 No Dark Matter = Proof of Dark Matter?
klpDHn8viX8 18:24 The Holographic Universe Explained
tJevBNQsKtU 18:30 The Edge of an Infinite Universe
gEyXTQ9do-c 15:49 Could the Universe End by Tearing Apart Every Atom?
tAtVgHvt05M 18:22 Is Dark Energy Getting Stronger?
dWk9d_YCQOk 16:23 Will You Travel to Space?
rckrnYw5sOA 16:31 The Impossibility of Perpetual Motion Machines
C4CKtEQJGMY 17:11 Secrets of the Cosmic Microwave Background
PPpUxoeooZk 17:32 Sound Waves from the Beginning of Time
10AP7tio408 15:15 Perpetual Motion From Negative Mass?
72cM_E6bsOs 18:05 The Crisis in Cosmology
L2idut9tkeQ 18:27 Our Antimatter, Mirrored, Time-Reversed Universe
miGddxrvmDU 13:54 Are Dark Matter And Dark Energy The Same?
IhpGdumLRqs 18:39 Why String Theory is Wrong
UyTqgnKD3sw 17:11 Quantum Physics in a Mirror Universe
REl20rlZGTw 18:34 Did Life on Earth Come from Space?
wICOlaQOpM0 17:32 'Oumuamua Is Not Aliens
5ESFGYkkbEI 16:26 Supersymmetric Particle Found?
iTTa9YcTe1k 16:48 Why String Theory is Right
ztFovwCaOik 17:14 Are Virtual Particles A New Layer of Reality?
uhJ9lJPt09k 17:37 Will We Ever Find Alien Life?
k6TWO-ESC6A 16:38 What are the Strings in String Theory?
0GLgZvTCbaA 15:09 Computing a Universe Simulation
3HYw6vPR9qU 15:48 How to Detect Extra Dimensions
YNEBhwimJWs 16:41 Quantum Gravity and the Hardest Problem in Physics | Space Time
XxVlGAFX7vA 16:12 How Much Information is in the Universe?
Ab8JIzckx_M 12:25 The Black Hole Entropy Enigma
VmEY6T5Wc-Q 13:42 Is There Life on Mars?
Qg4vb-KH5F4 17:53 How Will the Universe End? | Space Time
7UwigY4SjKY 16:30 Quantum Theory's Most Incredible Prediction | Space Time
cOzaGEAGzzA 14:15 How Close To The Sun Can Humanity Get?
KR23aMjIHIY 14:01 Reversing Entropy with Maxwell's Demon
kfffy12uQ7g 12:20 The Misunderstood Nature of Entropy
V5kgruUjVBs 13:04 Quantum Invariance & The Origin of The Standard Model
0mXW1zPlxEE 13:49 Will A New Neutrino Change The Standard Model?
TF6GRPaeLbk 11:58 How Asteroid Mining Will Save Earth
9XkHBmE-N34 15:30 The Black Hole Information Paradox
GscfuQWZFAo 14:08 What Survives Inside A Black Hole?
HF-9Dy6iB_4 13:43 Why Quantum Information is Never Destroyed
04ERSb06dOg 13:02 Noether's Theorem and The Symmetries of Reality
Jdy09y0A4t0 10:45 How Gaia Changed Astronomy Forever
-iWGtQ03OZM 11:04 The Star at the End of Time
UVhtKAnp3G4 11:32 Black Hole Swarms | Space Time
xnwXyPU_ps0 12:47 Using Stars to See Gravitational Waves
GcfLZSL7YGw 13:41 The Physics of Life (ft. It's Okay to be Smart & PBS Eons!)
7cj6oiFDEXc 11:14 The Unruh Effect
_P1xKh_kZFU 12:02 The Andromeda-Milky Way Collision
-R9F2_D76TE 9:28 Scientists Have Detected the First Stars
qPKj0YnKANw 12:06 Hawking Radiation
wJ7d503fN-g 12:40 Should Space be Privatized? | Space Time
G7UOFZBEA_g 8:48 The Trebuchet Challenge | Space Time
iJY3y5_k0do 12:01 The Death of the Sun
PUn2izowBkw 14:19 What is Energy?
9-SxVSpSoek 9:47 Kronos: Devourer Of Worlds
wwGeCfWc100 14:15 The End of the Habitable Zone
bG-xu5H6plk 14:56 Horizon Radiation
TbWyuJYybMA 13:50 What Do Stars Sound Like?
TmD27cUuylw 1:36 Space Time VR
8HvwNOSnveE 13:09 Extinction by Gamma-Ray Burst
nYGs92-qnFY 11:36 The Origin of 'Oumuamua, Our First Interstellar Visitor | Space Time
izqaWyZsEtY 14:49 Understanding the Uncertainty Principle with Quantum Fourier Series | Space Time
tFB8MsizvBc 10:33 Citizen Science + Zero-Point Challenge Answer | Space Time
_x2nL6ukJDg 16:48 Suicide Space Robots
Rh898Yr5YZ8 10:09 Zero-Point Energy Demystified
n6jAOV7bZ3Y 11:36 The Vacuum Catastrophe
RchRrngfjQY 13:23 The Missing Mass Mystery
X5rAGfjPSWE 16:07 The Nature of Nothing | Space Time
OvgZqGxF3eo 10:41 Absolute Cold | Space Time
gtZ7OVoI2nc 13:39 When Quasars Collide STJC
YJzoelANL_Y 14:52 Are the Fundamental Constants Changing?
BIASPc89Sgk 13:40 The Future of Space Telescopes
kL81uuYW9BY 15:51 Neutron Stars Collide in New LIGO Signal?
S4aqGI1mSqo 13:27 White Holes | Space Time
OfOuBx6XW3Q 11:41 First Detection of Life
OjFKcGHfVag 14:09 Extraterrestrial Superstorms
9dqtW9MslFk 12:50 The One-Electron Universe | Space Time
xgdNBQCdhdA 12:29 Dark Flow
fG52mXN-uWI 14:25 The Secrets of Feynman Diagrams
Q8shnjlGwmg 18:06 The Real Star Wars
oQ1WZ-eJW8Y 15:21 Solving the Impossible in Quantum Field Theory
vSFRN-ymfgE 15:49 Feynman's Infinite Quantum Paths
ATcrrzJFtBY 15:22 The First Quantum Field Theory
hYkaahzFWfo 16:12 Anti-Matter and Quantum Relativity
lrS0rxX-UhA 14:00 Supervoids vs Colliding Universes!
4pSUtWBiuB4 13:28 The Fate of the First Stars
vLR_a1MAy9I 14:59 Martian Evolution
nsWhE22i4FM 11:58 The Great American Eclipse
hmVOV7xvl58 16:28 Are We Living in an Ancestor Simulation? ft. Neil deGrasse Tyson | Space Time
nhy4Z_32kQo 11:44 Are You a Boltzmann Brain?
osvOr5wbkUw 12:19 The Oh My God Particle
6ACW7GVKCxs 1:42 Here's Why I Love PBS
aHjiXTlFSSM 13:35 Telescopes on the Moon
KePNhUJ2reI 15:29 How Time Becomes Space Inside a Black Hole | Space Time
HUMGc8hEkpc 11:48 Superluminal Time Travel + Time Warp Challenge Answer
5l1KxgHH2Ek 12:43 Time Crystals!
_tmMKQ4kp_I 5:33 The Race to a Habitable Exoplanet - Time Warp Challenge | Space Time
h871oE5QkTU 12:03 The Treasures of Trappist-1 | Space Time
TQZyaMRp7_0 10:47 The Eye of Sauron Reveals a Forming Solar System!
CoQE5J346mU 13:01 Telescopes of Tomorrow
1YFrISfN7jo 16:07 The Geometry of Causality
3TZEp_n3eIc 11:54 Why Quasars are so Awesome | Space Time
-q7EvLhOK08 18:05 The Phantom Singularity | Space Time
hqoo_4wSkdg 14:43 The EM Drive: Fact or Fantasy?
q_oHv6HCMX4 11:18 How to See Black Holes + Kugelblitz Challenge Answer
Ttwl_zH_DZ8 17:57 Have They Seen Us? | Space Time | PBS Digital Studios
v3hd3AI2CAA 8:09 Escape The Kugelblitz Challenge
mht-1c4wc0Q 19:59 What Happens at the Event Horizon? | Space Time | PBS Digital Studios
RlXdsyctD50 16:32 Pilot Wave Theory and Quantum Realism | Space Time | PBS Digital Studios
u4RNGRyzt10 13:46 Strange Stars | Space Time | PBS Digital Studios
7UNLgPIiWAg 15:50 Did Dark Energy Just Disappear? | Space Time | PBS Digital Studios
ZY47bVu-0Bs 9:03 Quantum Vortices and Superconductivity + Drake Equation Challenge Answers
dzKWfw68M5U 12:53 The Many Worlds of the Quantum Multiverse
jowVq81AgGw 11:25 The First Humans on Mars
rcv_tYcRgw4 13:43 Black Holes from the Dawn of Time
BAoEnV3Zt_Q 6:22 Are We Alone? Galactic Civilization Challenge
pEJ-wXpeH6w 13:09 Life on Europa?
tafGL02EUOA 14:03 Quantum Entanglement and the Great Bohr-Einstein Debate | Space Time | PBS Digital Studios
4H55wybU3rI 12:54 Self-Replicating Robots and Galactic Domination
MuvwcsfXIIo 8:22 Is There a Fifth Fundamental Force? + Quantum Eraser Answer
jW55cViXu6s 14:31 Should We Build a Dyson Sphere? | Space Time | PBS Digital Studios
2Uzytrooz44 5:53 Quantum Eraser Lottery Challenge
8ORLN_KwAgs 14:40 How the Quantum Eraser Rewrites the Past | Space Time | PBS Digital Studios
UjmlwdUK4RE 13:27 Can We Survive the Destruction of the Earth? ft. Neal Stephenson
p-MNSLsjjdo 13:32 The Quantum Experiment that Broke Reality | Space Time | PBS Digital Studios
eJ2RNBAFLj0 8:20 The Future of Gravitational Waves
_NqbRcwWwPw 13:27 Juno to Reveal Jupiter's Violent Past
SqF_Iy0lz_M 4:21 Nuclear Physics Challenge | Space Time | PBS Digital Studios
tQSbms5MDvY 15:16 Planck's Constant and The Origin of Quantum Mechanics | Space Time | PBS Digital Studios
Dgv2WWpm7_s 13:32 The Strange Universe of Gravitational Lensing
KFOgIijPWGY 13:44 New Fundamental Particle Discovered?? + Challenge Winners!
-IfmgyXs7z8 11:07 Is Quantum Tunneling Faster than Light? | Space Time | PBS Digital Studios
ztninkgZ0ws 15:28 Is an Ice Age Coming? | Space Time | PBS Digital Studios
UwYSWAlAewc 14:48 Anti-gravity and the True Nature of Dark Energy | Space Time | PBS Digital Studios
nZQIM1C6xQw 7:02 The Cosmic Conspiracy of Dark Energy Challenge Question
fsARBnvUB2E 12:17 Will Starshot's Insterstellar Journey Succeed?
RUE_LUqcTvM 12:39 What Does Dark Energy Really Do?
-4PayaEgEZc 12:41 Why the Universe Needs Dark Energy
xZTb6sfHEX8 13:11 Will the Universe Expand Forever?
6yLGeviU8FM 13:38 We Are Star Stuff
nFYveYkSPuA 9:10 Pulsar Starquakes Make Fast Radio Bursts? + Challenge Winners! | Space Time | PBS Digital Studios
blSTTFS8Uco 13:41 How Cosmic Inflation Flattened the Universe
Aj6Kc1mvsdo 14:17 Why is the Earth Round and the Milky Way Flat? | Space Time | PBS Digital Studios
wcBjibuHxEk 5:01 Cosmic Microwave Background Challenge | Space Time | PBS Digital Studios
JDmKLXVFJzk 12:58 What’s Wrong With the Big Bang Theory? | Space Time | PBS Digital Studios
aPStj2ZuXug 12:35 Why the Big Bang Definitely Happened | Space Time | PBS Digital Studios
xGfv3Oay_pY 8:37 Planet X Discovered?? + Challenge Winners!
gw-i_VKd6Wo 9:32 LIGO's First Detection of Gravitational Waves!
o8TCUGDltqM 10:57 Will Mars or Venus Kill You First?
fHRqibyNMpw 12:32 The Origin of Matter and Time
kpuGjzdHqgI 2:17 The Photon Clock Challenge | Space Time | PBS Digital Studios
GguAN1_JouQ 9:31 When Time Breaks Down
gSKzgpt4HBU 10:48 The True Nature of Matter and Mass | Space Time | PBS Digital Studios
kixAljyfdqU 9:32 The Higgs Mechanism Explained | Space Time | PBS Digital Studios
xx4562gesw0 13:22 How to Build a Black Hole
T2m-ZXrclW0 8:05 100 Years of Relativity + Challenge Winners!
dEIjKjIgCA0 11:13 5 Ways to Stop a Killer Asteroid
NzvcVcPnSCY 3:02 Challenge: Can you save Earth from a Killer Asteroid? | Space Time | PBS Digital Studios
cJONS7sqi0o 12:11 Why Haven't We Found Alien Life?
94ed4v_T6YM 10:00 Is The Alcubierre Warp Drive Possible? | Space Time | PBS Digital Studios
1Tstyqz2g7o 11:27 Have Gravitational Waves Been Discovered?!?
EzZGPCyrpSU 13:03 5 REAL Possibilities for Interstellar Travel
msVuCEs8Ydo 12:46 The Speed of Light is NOT About Light
AwwIFcdUFrE 9:37 What Happens At The Edge Of The Universe? | Space Time | PBS Digital Studios
z3rgl-_a5C0 10:42 Does Dark Matter BREAK Physics?
VzUl3D41oIs 5:52 Watch THIS! (New Host + Challenge Winners) | Space Time | PBS Digital Studios
vNaEBbFbvcY 14:25 Do Events Inside Black Holes Happen?
MUThGpp6ze4 6:02 Challenge: Which Particle Wins This Race? | Space Time | PBS Digital Studios
pwChk4S99i4 15:21 What Physics Teachers Get Wrong About Tides! | Space Time | PBS Digital Studios
AwhKZ3fd9JA 8:53 General Relativity & Curved Spacetime Explained! | Space Time | PBS Digital Studios
U8Hx-AkFDCY 6:03 SPECIAL ANNOUNCEMENT + Flat Spacetime Geometry Comments | Space Time | PBS Digital Studios
P4rW_pPbD-U 9:19 Can You Trust Your Eyes in Spacetime?
RuPQsqZaq8A 2:21 The Leap Second Explained | Space Time | PBS Digital Studios
g1nbZ4PctOI 6:59 Curvature Demonstrated + Comments | Space Time | PBS Digital Studios
D3GVVkPb3OI 10:22 Can a Circle Be a Straight Line?
bT3hBK6kAJQ 7:37 The Calendar, Australia & White Christmas | Space Time | PBS Digital Studios
gWYEnvMM1dA 11:17 How to Signal Aliens
_UKyswjng60 1:46 What Happens to a Helium Balloon in Freefall?
NblR01hHK6U 12:33 Is Gravity An Illusion?
9Q_0vOdzw4Y 10:47 Habitable Exoplanets Debunked!
Xo232kyTsO0 10:24 The Real Meaning of E=mc²
w5TSfjvzMGs 9:38 9 NASA Technologies Shaping YOUR Future
gEagBK4Xb1w 10:39 Should the First Mars Mission Be All Women?
EHKQIC5p8MU 11:22 What's the Most Realistic Artificial Gravity in Sci-Fi?
YycAzdtUIko 8:55 Are Space and Time An Illusion?
uzgaZbbDsAA 6:22 Could NASA Start the Zombie Apocalypse?
3t0lRt329wM 1:26 How to Weigh a Fart | Space Time | PBS Digital Studios
iaN0xg2VQSo 8:09 Could You Fart Your Way to the Moon?
bcsBWPuLJsQ 9:41 Is the Moon in Majora’s Mask a Black Hole?
3tCMd1ytvWg 7:10 Cosmic Microwave Background Explained
EtExl3sm-1E 9:51 Can A Starfox Barrel Roll Work In Space?
W4UfmOHjiJg 8:08 What Will Destroy Planet Earth?
gJ5KV3rzuag 7:37 Should We Colonize Venus Instead of Mars?
QXfhGxZFcVE 6:37 How Do You Measure the Size of the Universe?
XAU9ofjcx-Y 7:52 Is It Irrational to Believe in Aliens?
McsgRggUjE4 6:13 What Planet Is Super Mario World?

# Lindsay Ellis

XP6uMQL9Od4 19:40 Nostalgic Woman - Lord of the Rings: The Fellowship of the Ring
SpsdoR1hmQc 18:06 Nostalgic Woman - Lord Of The Rings: The Two Towers
Zi_zw3xDTa8 17:03 Nostalgic Woman - Lord of the Rings: Return of the King (Part 1)
2MDNYhUdd2s 15:50 Nostalgic Woman - Lord of the Rings: Return Of The King (Part 2)
uTRUQ-RKfUs 36:49 The Hobbit: A Long-Expected Autopsy (Part 1/2)
ElPJr_tKkO4 34:43 The Hobbit: Battle of Five Studios (Part 2/2)
Qi7t_g5QObs 30:38 The Hobbit: The Desolation of Warners (Part 3/2)

# Celtic Source

9L1ugg3YRq0 9:26 Was witchcraft a religion in medieval Wales?
8REXWqYDILA 45:55 The Mabinogi Challenge: Day 1 with Dr Gwilym Morus-Baird
X3wlf8s5cUE 20:01 The Dark Side of the Hero Myth pt 2 with Dr Gwilym Morus-Baird
r__afQOreF0 17:32 The Dark Side of the Hero Myth pt 1 with Dr Gwilym Morus-Baird
4RWQmK6-rxQ 16:48 The Song of Heledd pt 2 with Dr Gwilym Morus-Baird
oOcUcP1orsY 22:53 The Song of Heledd with Dr Gwilym Morus-Baird
pLyi7YF_wvk 25:39 Did a woman write the Mabinogi? with Dr Gwilym Morus-Baird
KDFTrRr2qwA 24:50 The Battle of the Trees and The White Goddess with Dr Gwilym Morus-Baird
KJlAfYBiOYM 25:58 Ritual Masks and Channeling with Dr Gwilym Morus-Baird
OPn-vMQgHO0 26:20 Why interpret myths? with Dr Gwilym Morus-Baird
Gx1_SSiRfbA 33:13 Bardic Craft and Animal Transformations with Dr Gwilym Morus-Baird
vU0arTuhU10 24:39 The Mythic Fortress
-dIk0FmlxyM 26:33 'Who is the Gatekeeper?' with Dr Gwilym Morus-Baird
E0cwoMJK0oY 47:45 The Spoils of Annwfn with Dr Gwilym Morus-Baird
HAEqrapjkxs 24:19 'The Discourse of Arthur and the Eagle' with Dr Gwilym Morus-Baird
SSkF4gbB79U 15:49 A Welsh Cailleach? with Dr Gwilym Morus-Baird
K6PNnrSGRkg 16:28 Are Welsh Scholars misrepresenting Welsh paganism? with Dr Gwilym Morus-Baird
KwyO2Ml6KCo 17:15 The Giant's Beard in Welsh Folklore with Dr Gwilym Morus-Baird
b2eIbtHhsRY 9:58 Iolo Morganwg and Fake Myths with Dr Gwilym Morus-Baird
f9x1ZglXZIA 18:26 Barclodiad y Gawres ('The Giantess' Apronful') with Dr Gwilym Morus-Baird
SZNT-Tl-bFo 22:28 Witches, Giants and Arthur with Dr Gwilym Morus-Baird
HgFSO7Mh2cQ 9:09 From Celtic Gods to Celtic Spirits with Dr Gwilym Morus-Baird
WrcqtD9Zz3c 21:19 The Witch of Death in Welsh Folklore with Dr Gwilym Morus-Baird
bB4FvCgpQ2o 21:42 The Witch, the Hare and the Saint - with Dr Gwilym Morus-Baird
BsVC3-bSk7Q 19:31 Gwyn ap Nudd and St Collen with Dr Gwilym Morus-Baird
UBKNHP2NDaQ 13:02 Were the Welsh bards shamans? with Dr Gwilym Morus-Baird
4RFz5ygHIw8 31:00 A Celtic Wisdom Tradition? with Dr Gwilym Morus-Baird
yLt73JOQuoQ 1:33 The Magic of Meaning with Dr Gwilym Morus-Baird
bZetJZWKckI 39:32 Who wrote The Book of Taliesin? with Dr Gwilym Morus-Baird
wwIBemDZmWc 31:27 Was Taliesin a druid? With Dr Gwilym Morus-Baird
yX_Xd0Wcu0o 18:04 Mabinogi Riddles with Dr Gwilym Morus-Baird
M4_EmTUxIx0 29:01 What is The Book of Taliesin? with Dr Gwilym Morus-Baird
wJkhpeFxalo 37:34 Where did Ceridwen chase Gwion Bach? with Dr Gwilym Morus-Baird
dPWp_DbXwUM 42:26 The Welsh Bardic Triads with Dr Gwilym Morus-Baird
Y5WiifupG-4 31:53 The Celtic 'Otherworld'?
G2F5DNHB1q0 27:16 Celtic Magical Elixirs with Dr Gwilym Morus-Baird
lhDBCXYUVYU 23:17 The Roots of Celtic Myth with Dr Gwilym Morus-Baird
zccp11Oquac 29:31 Brigid and her Many Incarnations, with Dr Gwilym Morus-Baird
M-hUfg7QNyc 20:27 The Bardic Power of Myth with Dr Gwilym Morus-Baird
5wXmWjX3uYw 32:55 Awen, Symbol and Cauldron in Celtic Myth with Dr Gwilym Morus-Baird
OQAMt_-rvh0 37:50 Celtic Spirituality and Cultural Appropriation with Dr Gwilym Morus-Baird
YU5pk-Hc758 45:30 Mari Lwyd - The Welsh Sources and Meaning
vFt-ycNVA10 7:49 Celtic Source: The real power of Taliesin.
_tJSZlQDL2s 5:09 Celtic Source: What does Annwfn mean and how has it's meaning changed?
ZwsfB00_fUA 10:48 Celtic Source: What's the point of old Celtic poetry?
XjB7xUtRkx8 0:53 Celtic Source: Course Syllabus
9AfGwjT7XgQ 10:03 Celtic Source: Brú na Bóinne (Newgrange)
U4PD0jezQXI 8:05 Celtic Source: The Twrch Trwyth
4vrwA9hRXFw 6:57 Celtic Source: Christians and Pagans in Medieval Britain
cNY6vGNXFcc 8:39 Celtic Source: Is Rhiannon a goddess?
0vJz535kLU8 8:25 Celtic Source: Manannán mac Lir
nDMEgeLruSo 8:41 Celtic Source: Gaels and Picts
I7ZsGjQevO0 6:43 Celtic Source: Awen
HiU0vqUTxkM 10:21 Celtic Source: Preiddiau Annwfn ('The Spoils of Annwfn')
9uQesVGz9QU 5:12 Celtic Source: The Coligny Calendar
yWmozNPTfYM 7:17 Celtic Source: The Tablet of Chamaliẻres
ase7ZAKU-KE 8:02 Celtic Source: The Oldest Celtic Text in the World?
w_CGC28hqhk 8:02 Bardic Trickery, Gadael Tir 12.5.18
plMtPuHTxhQ 1:30 Merched Becca, Gadael Tir 12.5.18
UjSf0zEf0Os 2:43 Calon Lân, Gadael Tir 12.5.18
IYzXX2VSvIA 50:29 A Welsh Wisdom Tradition? 18.10.18
3glgKTnrjPU 28:27 Christianised Myths? Blodeuwedd and The Four Branches of the Mabinogi
k_J9i2vek2s 4:22 Speculating About Taliesin Archaeology

# A Bit of Fry and Laurie

AeOU7NNgeQg 29:18 A Bit Of Fry And Laurie S01E01
NM8McyQCRYs 29:37 A Bit Of Fry And Laurie S01E02
wEXCPHWyWAI 28:58 A Bit Of Fry And Laurie S01E03
jxd9MhFXVKM 29:16 A Bit Of Fry And Laurie S01E04
x0X6E11G_nk 29:30 A Bit Of Fry And Laurie S01E05
NOuAk7LX5no 28:26 A Bit Of Fry And Laurie S01E06

# jan Misali's Conlang Critic

l-unefmAo9k 5:32 Conlang Critic Episode One: Lojban
k_z41hk_lUM 5:33 Conlang Critic Episode Two: aUI
12bT6wGXESc 10:41 Conlang Critic Episode Three: Vötgil
ZkVF6MsVgmE 5:36 Conlang Critic Episode Four: Láadan
j-dmJtboDCk 5:35 Conlang Critic Episode Five: Ygyde
e_n3loSfejg 6:27 Conlang Critic Episode Six: Ithkuil
qnv8PVvbd-8 4:19 Conlang Critic Episode Seven: Wolflandic
XhxjI3t6Ht4 4:48 Conlang Critic Episode Eight: Kay(f)bop(t)
o2mzKGGrNi8 4:31 Conlang Critic Episode Nine: Klingon
tOf91VkVvz8 3:54 Conlang Critic Episode Ten: Na'vi
6w7y_9XrNpA 5:20 Conlang Critic Episode Eleven: FluidLang
c2G7TFybqOQ 3:22 The Perfect Language [Epic]
eLn6LC1RpAo 8:02 Conlang Critic Episode Twelve: Toki Pona
Sao9mCLy3Xo 10:17 Conlang Critic Episode Thirteen: Esperanto
TOWcRvYq9Fs 5:14 Conlang Critic Episode Fourteen: Ido
TpHqHuXvUek 6:12 Conlang Critic Episode Fifteen: Volapük / Volapꞟk
JLuKnsIqXOQ 6:21 Conlang Critic Episode Sixteen: Dovahzul
U_Bz3bt8_4w 4:42 Conlang Critic Episode Seventeen: Interlingua
tZDUVJKo5nY 4:22 Conlang Critic Episode Eighteen: Solresol
sF1R2ZUSbeo 8:56 Conlang Critic Episode Nineteen: Loglan
QkaYGEwZSrU 7:03 Conlang Critic Episode Twenty: Zese
GX4V1M9qWVc 8:30 Conlang Critic Episode Twenty One: Futurese
X2GN1mBUOFc 3:45 Conlang Critic Episode Twenty Two: Lingua Franca Nova
kpFHH57smjo 4:50 Conlang Critic Episode Twenty Three: Interslavic
KegIeZwXUDk 9:31 Conlang Critic Episode Twenty Four: Folkspraak
8nAcVA88H5M 15:06 Conlang Critic: Dothraki
GpPRiwNriys 20:48 Conlang Critic: Novial
rtomHrUihco 15:51 Conlang Critic: The IS Language
QZ_8hnT9YYo 14:50 Conlang Critic: Drsk
tdTQ7Scli0I 17:35 Conlang Critic: Sambahsa
TY7EEBUgg6Y 17:47 Conlang Critic: Sindarin (featuring Artifexian)
C9KdW66dfOk 16:00 Conlang Critic: Poliespo
97RsfY2ODw0 14:12 Conlang Critic: Kēlen
gi1-ZWiqjD8 38:53 Conlang Critic: Lingwa de Planeta
F1LBCMWDNwo 33:16 Conlang Critic: Viossa
mJYrc6oya7c 14:38 Conlang Critic: Iqglic
JICvHFl7W6o 15:35 Conlang Critic: Quenya
ZiN-1Z5O9Hc 15:56 Conlang Critic: High Valyrian

# Building a Medieval Castle

ydoRAbpWfCU 58:51 Can We Build A Castle With Medieval Tools? | Secrets Of The Castle | Timeline
_VHgw6epe14 58:25 How To Defend A Medieval Castle | Secrets Of The Castle | Timeline
GZmpn3nn2qE 58:50 The Architectural Secrets Of The Medieval Castle | Secrets Of The Castle | Timeline
s46qP1l39V8 57:53 Why Were Medieval Blacksmiths Considered Magical? | Secrets Of The Castle | Timeline
EAruY1lv6N4 58:49 How To Build A Medieval French Château | Secrets Of The Castle | Timeline
q7bE--NVBGY 3:25 Behind the scenes: Secrets of the Castle with Ruth, Peter and Tom - BBC Two

# Primitive Technology

OPIUMpiV0IY 10:09 Primitive Technology: Making Iron From Sand
TMzo9zjkuHc 10:03 Primitive Technology: Rock Throwing Catapult (Trebuchet)
dhW4XFGQB4o 11:35 Primitive Technology: Iron knife made from bacteria
fR9u2oLHFN8 7:49 Primitive Technology: Improved Multi-Blade Blower
eesj3pJF3lA 13:14 Primitive Technology: Wood Ash Cement & Fired Brick Hut
ShvAN9bLwnw 9:15 Primitive Technology: Brick kiln, brick mold and bricks
0tZLCCLMws4 10:15 Primitive Technology: Thatched Workshop
rG6nzrksbPQ 5:20 Primitive Technology: Pot Made of Wood Ash - New Clay Alternative
wrTDJbaxhOI 10:02 Primitive Technology: Brick Firing Kiln
-cgQUrdBoaM 17:52 Primitive Technology: 4 years of primitive technology
hzz36cvo88U 6:30 Primitive Technology: Adobe wall (dry stacked)
YmFTK-rnzfk 10:32 Primitive Technology: Hut burned down, built new one
RnvtXikwrIU 10:06 Primitive Technology: Crossdraft kiln
lMZY_9QNe4I 7:21 Primitive Technology: Polynesian Arrowroot Flour
FwRFH7MH5N0 10:38 Primitive Technology: Fired Clay Bricks
Ka2Eu6LxAKo 10:05 Primitive Technology: Grass thatch, Mud hut
1Ph_ORewpE0 6:48 Primitive Technology: Stone Yam planters
U7nqBgklf9E 10:04 Primitive Technology: Pit and chimney furnace
DyGLE0usN_I 10:05 Primitive Technology: Iron prills
DP0t2MmOMEA 3:54 Primitive Technology: Wood Ash Cement
J8MLpv_utfM 7:18 Primitive Technology: Yam, cultivate and cook
JgQ-07VgJuY 10:31 Primitive Technology: Blower and charcoal
vAuO3bHxSpc 10:34 Primitive Technology: Round hut
Ek3aeUhHaFY 7:08 Primitive Technology: Lime
_7985zBEM3o 9:05 Primitive Technology: A-frame hut
_YDuLCIzbN4 10:06 Primitive Technology: Pottery and Stove
qQTVuRrZO8w 8:19 Primitive Technology: New area starting from scratch
u7wAJTGl2gc 5:46 Primitive Technology: Natural Draft Furnace
D59v74k5flU 10:47 Primitive Technology: Mud Bricks
c2ExwOAjLNw 9:16 Primitive Technology: Simplified blower and furnace experiments
i-WYT2UotIc 5:48 Primitive Technology: Sandals
SjK2XlNE39Q 10:06 Primitive Technology: Reusable charcoal mound
i9TdoO2OVaA 8:51 Primitive Technology: Water powered hammer (Monjolo)
uZGFTmK6Yk4 11:27 Primitive Technology: Termite clay kiln & pottery
aZ4KNMnTsIs 6:27 Primitive Technology: Planting Cassava and Yams
_ZXUCQc2Z78 6:48 Primitive Technology: Bed Shed
e5nfrehyWDM 7:16 Primitive Technology: Freshwater Prawn Trap
rrlr02YDr5A 4:28 Primitive Technology: Spear Thrower
q9AoGc-OTCk 11:32 Primitive Technology: Barrel Tiled Shed
VVV4xeWBIxE 4:32 Primitive Technology: Forge Blower
qEUGOyjewD4 4:17 Primitive Technology: Grass hut
TTcXhYHmOx8 6:26 Primitive Technology: Sweet potato patch
ey68uVUuyvs 4:48 Primitive Technology: Woven bark fiber
SLoukoBs8TE 5:54 Primitive Technology: Bow and Arrow
GzLvqCTvOQY 5:31 Primitive Technology: Charcoal
ZEl-Y1NvBVI 8:24 Primitive Technology: Cord drill and Pump drill
kiHojsMTBeA 8:21 Primitive Technology: Baskets and stone hatchet
RzDMCVdPwnE 8:16 Primitive Technology: Sling
mL3sho1CpkI 6:39 Primitive Technology: Chimney and pots
P73REgj-3UE 14:09 Primitive Technology: Tiled Roof Hut
KzMfeQyY5xM 5:46 Primitive Technology: Palm Thatched Mud Hut
ZajpkwDeEYg 4:21 Primitive Technology: Wood shed and Native bee honey
-JcWY0rjePU 4:31 Primitive Technology: Stone Adze
eVvQnsKuOcE 4:51 Primitive Technology: Making poisonous Black bean safe to eat (Moreton Bay Chestnut)
BN-34JfUrHY 4:23 Primitive Technology: Stone Axe (celt)
z9n9rqb-lvY 4:28 Primitive Technology: Firesticks
Uwtu_DARM9I 4:24 Primitive Technology: Thatched Dome Hut
nCKkHqlx9dE 11:14 Primitive Technology: Wattle and Daub Hut

# The Future of Places

7daz8EqKQJI 1:48 Future of Places Conference Attendee Interviews 2013 - Introduction
uPx-zyE3d2w 7:14 Mohamed Aleh - Future of Places Interview 2013
v8Gu7GJe0fE 3:40 Raimond Blasi - Future of Places Interview 2013
fSXdHvO0gc0 4:39 Rich Bradley - Future of Places Interview 2013
krHq8COtvwE 7:49 Celine d'Cruz - Future of Places Interview 2013
CxOlmr7zecw 17:37 Andres Duany - Future of Places Conference Interview 2013
iQjJv14exlE 1:42 Ricardo Fernandez Future of Places Interview 2013
FCrI1IzTfNg 4:18 Harrison Fraker - Future of Places Interview 2013
9pJJ9zB7NLw 5:25 Tigran Haas - Future of Places Conference Interview 2013
Icde1E5FGbo 6:24 Elahe Karimnia Future of Places Interview 2013
-xL8ZJ5f72s 1:41 Ethan Kent - Future of Places Interview 2013
cxVu3KTFBJw 9:29 Fred Kent - Future of Places Interview 2013
m7irhrAIcRM 7:21 Christopher Leinberger - Future of Places Interview 2013
chtQ5N3dK2I 10:57 Iury Lima - Future of Places Interview 2013
uH2PfFvKHJM 5:34 Helene Littke Future of Places Interview 2013
3Eyc3alCIkQ 2:04 Ryan Locke - Future Of Places Interview 2013
lR4CpKCwhlg 15:48 Ali Madanipour - Future of Places Conference Interview 2013
KGyPOt57rVY 6:00 Thomas Melin - Future of Places Interview 2013
EeO9BtmawTI 6:43 Paul Murrain - The Future of Places Interview 2013
RyYR9bLBxdY 7:23 Patrice Todisco - Future of Places Interview 2013
v8Dti6dGHFs 5:15 Urban Think Tank - Future of Places Interview 2013

# Peter Blanchette
Cl2-pDsMkrw 1:48:52 Watermelon Wednesday 2015 - Peter Blanchette and Friends

# ClackCo TV
NXL9n2KNm1E 51:25 Mulches: The Good, The Bad, and The Really, Really Ugly
pakRIoVsCww 59:08 Growing Vegetables Year-Round with OSU Master Gardeners
7-QXI4xq3DI 59:13 Tomatoes Planting & Cultural Best Practices with OSU Master Gardeners
URBI185rlAc 1:00:18 Gardening with Wildlife with OSU Master Gardeners
eJxmR4Gh3XY 1:03:11 Creating Pretty & Delicious Containers with OSU Master Gardeners
reKcBI9YlG4 1:09:32 Soil & Planting: Lessons from Research - OSU Master Gardeners Noon-Time Chat
Ie1BBqz92IM 1:06:27 Ten Proven Ideas for Pollinator Gardens with OSU Master Gardeners
EN7Y_kgTqjM 54:02 Tomatoes: Selection and Transplanting with OSU Master Gardeners
ul863t1NbCk 6:14 Bee Ready for Spring with OSU Master Gardeners
aKofGy8an00 1:02:12 Starting Vegetables from Seeds with OSU Master Gardeners
ZF_5sELmcAI 5:27 Apple Tree Pruning with OSU Master Gardeners
sOflWwBofLY 1:12:21 Best Garden Trees with OSU Master Gardeners
xUpP6P2mknQ 49:38 Heat of the Moment: How Climate Change Impacts Insects in Our Garden
fxCK7VJ75yw 1:03:02 Orchard Mason Bees with OSU Master Gardeners
a6nfVokbaVo 3:10 Red Chair Farms Paper Quilling
RP2jKi9OjMs 4:50 Pruning Blueberries with OSU Master Gardeners
0jKXn4wByz4 6:00 Fig Tree Pruning with OSU Master Gardeners
JmbnQH0T7I0 55:58 Intro to Growing Berries with OSU Master Gardeners
SBwOl2xzD5w 55:32 Carli Creek  Project: Assessing Water Quality Improvement at an Urban Stormwater Constructed Wetland
orYl257Otgw 56:04 Raised Bed Gardening with OSU Master Gardeners
ym1ZKZYKfS0 3:53 Table Grape Pruning - OSU Master Gardeners
H05UeXOMePo 59:10 Introduction to Vegetable Gardening with OSU Master Gardeners
Vz5OmVC3lVs 54:20 Growing Your Own Tomatoes with OSU Master Gardeners
L-v77u_wVlk 1:06:39 Early Season Vegetables with OSU Master Gardeners
uq8VCMU3HHc 1:02:40 Growing & Caring for Blueberries with OSU Master Gardeners
YAgNstlT4VE 33:11 Pruning Ornamental Trees & Shrubs Question and Answer with OSU Master Gardeners - Jan. 19, 2022
0Jo0mTyBeNc 50:40 Pruning Ornamental Trees & Shrubs with OSU Master Gardeners - Jan. 19, 2022

# SMO TV
EnQ-rCqyPlQ 3:18 Stiùiriche Leasachaidh Donnie Rothach a' bruidhinn mu leasachaidhean Baile na Cille Bige, BBC An Là
cAy45O7UpKo 1:07:32 Open Day Webinar – An Cùrsa Comais | Gaelic Immersion Course
6SJ05esz6xE 4:35 A tour of the campus | Sabhal Mòr Ostaig
MtXYHpYCrNk 58:39 Club Irise 2022 Seisean 4: An Dtr Tim Armstrong
UClp9pa5qpM 58:39 Club Irise 2022 Seisean 3: An t-Ollamh Meg Bateman
t5WtjPeJAyY 45:32 Club Irise 2022 Seisean 2: Kirsty NicDhùghaill
tyXMTxvOkkI 50:54 Club Irise 2022 Seisean 1: Seonaidh Charity – Grin, F. (2016) ‘Challenges of Minority Languages’
a1fYW3j9fUA 2:14 Oideas
lRM8TjDhAm4 52:00 Club Irise Shabhal Mòr Ostaig - Coinneamh #5 - 2 an t-Ògmhios, 2021
YKb2zbbktyI 27:21 Interested in Gaelic teaching?
k7Bhcxdu-zU 24:00 Ùidh ann an teagaisg?
pL0257cpBJE 42:22 TIONAL: Cuirm-chiùil earraich air-loidhne / Spring online concert
oy0DgjDPFbU 55:53 Club Irise Shabhal Mòr Ostaig - Coinneamh #4 - 5 an Cèitean, 2021
woQptyM1_HU 3:07 CertHE Gàidhlig is Conaltradh | CertHE Gaelic and Communication – Izzy Flower, Alumna an t-Sabhail
oR77Lc4xlnA 52:58 Club Irise Shabhal Mòr Ostaig - Coinneamh #3 - 31 am Màrt, 2021
I-jwSSyGbsY 0:22 Alasdair MacGilleFhinnein
NIoic-g9Glo 0:58 Megan Dale – DipHE Na Meadhanan Gàidhlig (2021)
kTWmb5X0y-s 0:49 Eilidh NicIain – DipHE Na Meadhanan Gàidhlig (202)
qkQW_oY-TVs 5:56 Dip HE anns na Meadhanan Gàidhlig / Gaelic Media (EIFF Showcase)
iINHpvgNIwM 51:05 Club Irise Shabhal Mòr Ostaig - Coinneamh #2 - 3 am Màrt, 2021
WGNKNFaclH4 21:56 Fàs Fiot sa Ghàidhlig 4 / Fitness Workout in Gaelic 4
9Oc1HG9pD5w 16:31 Fàs Fiot sa Ghàidhlig 3 / Fitness Workout in Gaelic 3
Yz6yLne0STc 16:02 Fàs Fiot sa Ghàidhlig 2 / Fitness Workout in Gaelic 2
KkUYBaZQ7eo 21:56 Fàs fiot sa Ghàidhlig 1 / Fitness Workout in Gaelic 1
rlEAc8AhJ9U 47:44 Dr Fiona McNeill, Edinburgh University & Dr Gábor Bella, Trento University
7i6GbSECZt4 56:57 An Dr Chris Lewin - ‘An Abominable System’? Manx Orthography in its Historical Context.
REvrcgqEE6g 54:56 Dr Michael Given, University of Glasgow: Tìr ’s Co-Bheòthalachd
iXTBy5oEdrY 36:02 Dr Cassie Smith Christmas
OL5Zgf1S-jM 47:13 Dr Hugh Dan MacLennan - A’ Rannsachadh aig an Oir: A’ Tarraing bho Thobraichean an Sgarpa
5JY8n_-1xUY 31:23 The Kilravock Manuscript: Eighteenth-Century Scottish Fiddle Music & the Origins of the Strathspey
NpNPSY-F57k 49:00 An t-Oll. Meg Bateman: Làraichean na Fèinne san Eilean Sgitheanach
vFAh1y41VCU 35:00 Seiminear Rannsachaidh / Research Seminar with Dr Iain Mackinnon
OQ2AWUwen60 53:26 Club Irise Shabhal Mòr Ostaig - Coinneamh #1 - 3 an Gearran, 2021
8FlGYiTHGQE 49:25 A’ Tarraing bho Thobraichean an Sgarpa / Drawing on the Wells of Scarp (Dr Hugh Dan MacLennan)
Ju93tSDowTU 2:41 Cùrsaichean Bogaidh / Gaelic Immersion Courses (Sabhal Mòr Ostaig, UHI)
RbbQyqU1JNs 1:54 MSc ann an Cultar Dùthchasach agus Eachdraidh na Gàidhealtachd (SMO)
K814lTf8CMY 2:58 Iain MacFarlane - ‘The Glenfinnan Highland Gathering’
P9pT8Vxurag 1:29 Ingrid Henderson - ‘Eilean Fhiannan’
drwBAMJEB2c 1:35 Hamish Napier - Màthair Spè
QNpYNpDrEvA 2:35 Puirt Bhon Dachaigh le Hamish Hepburn
1NPpnH0KgRA 4:04 Christine Primrose le ‘Àite Mo Ghaoil’
Hqt0AqiU9rg 5:09 Latha nan Tagraichean SMO
WlishJ11gBU 3:55 FEASGAR FOSGAILTE SMO
C2AOdYw_IRQ 3:43 Puirt Bhon Dachaigh - An Dr. Decker Forrest
-X3WkupmzJ4 2:54 Brath bho Phrionnsapal SMO.
lDouCC83Bxw 3:41 Teachdaireachd bho Phrionnsapal SMO
wwmVypMkcP4 2:14 BA (le Urram) Gàidhlig agus Foghlam / Gaelic and Education
uVbRtWvMNL8 2:35 Thigibh beò sa Ghàidhlig | Sabhal Mòr Ostaig
RMNzU5nDITY 2:50 BA (hons) Gàidhlig is Cèol Traidiseanta / Gaelic & Traditional Music
b6AJKUgbX04 2:08 MSc Cultar Dùthchasach is Eachdraidh na Gàidhealtachd / Material Culture & Gàidhealtachd History
VQ_w7tFb6go 1:35 Fàilte bhlàth
liv6Q8WnFJU 4:09 BA Gàidhlig is Foghlam / Gaelic & Education
IzmRNc96b_A 5:07 Bliadhna air iomlaid - Gaelic Exchange Year at Sabhal Mòr Ostaig
gNOUpPJXhzU 1:09 Dioplòma anns na Meadhanan Gàidhlig / Diploma in Gaelic Media
QweQB5GiFJA 9:56 Ceit, Na Facail Fhèin
FpQt8rkz5yY 11:40 "Seònaid Tandy"
_oCE1f-cSJA 11:27 Airgiod is òr Alasdair Gillies
FIglVEFM93o 10:29 Nighean bheag à Orasaigh
Dkz6fFcKbXo 28:23 Tìr an Eòrna / Land of the Barley
FjObaoJ12w8 3:26 Hannah MacRae, Lauren Byrne & Hannah Krebs (Sabhal Mòr Ostaig)
vg-3D74LVSs 8:20 Ceòl Mòr Ostaig
U3VPk92vXAA 1:05 Flute & Whistle Course with Hamish Napier (Sabhal Mòr Ostaig)
jN7ZSBrHwug 1:29 Cùrsa Giotàr/ Guitar Course with Ross Martin
KmlJPI8v8d8 1:48 Preantasachd Tòiseachaidh / Foundation Apprenticeship (Gàidhlig)
mo-v3BAd_vk 1:48 Preantasachd Tòiseachaidh / Foundation Apprenticeship (Gaelic with subtitles)
KAqd4bbx10c 1:56 Dioplòma anns na Meadhanan Gàidhlig
Dn_AUK-CfKU 0:40 Dannsa Ceum agus Fìdhlearachd
hGYxwvZpYjQ 3:40 Sàr Dhuais na Gàidhlig 2018
0x9cAmRcncw 2:13 Latha Eòrpach nan Cànanan 2018
dYx-zub0Hog 3:20 Gàidhlig is Ceòl Traidiseanta / Gaelic and Traditionald Music at Sabhal Mòr Ostaig
yc8bEiUBhQw 19:50 Deoch-Shlàinte an Eiiein
NutZFUK-qMM 4:40 Cànan is Cultar na Gàidhlig | Gaelic Language and Culture (Sabhal Mòr Ostaig)
FJ3zbDfWxN0 2:03 Joy Dunlop (Sabhal Mòr Ostaig)
6Zpbrn8MePM 1:14:13 Òraid OGE leis an Àrd-Ollamh Meg Bateman
Weozqef3XcA 0:58 Ionnsaich Gàidhlig Air Astar / Gaelic Distance Learning
ZYuRLiA1iUc 11:00 Air an Fheansa
7vWHfZaUBw0 11:00 Gaisgeach na Gàidhlig
SnXU1gdlrHI 9:17 Coigreach gu Curaidh
7zCIdL9aAXM 9:37 Floraidh
Flhh43dBUUE 8:02 Eilean an Dannsa / "Island of Dance"
WzJ3W8xWCrg 2:06 Teisteanas Foghlam Àrd-ìre Gàidhlig is Conaltradh
mykPfMw8ikg 3:39 Pan Celtic International Song Contest 2018 - Alba
uXCgzxUa84c 3:35 Latha Eadar-nàiseanta nam Ban / International Women's Day
zo5b1wpK-Fk 1:15 Guth eile
X6t7RrGRuqg 2:59:57 SAC SKYE
D7-V99GiitA 15:00 Sgeulachd Courtney
snomzEGlSUA 10:18 An Crùbh
CawbSUOxBtk 5:19 "OMC"
IG9tprRorEQ 3:36 Christine Primrose
U1gRnSF2wWw 2:51 Ceitidh SMO Oileanaich (tòrr)
aJZbJlvQfzg 0:39 Sgoil Phìobaireachd an Eilein Sgitheanaich
ISZfA8V38Z0 2:25 An Cùrsa Comais (Cert HE)
f3Ayg8cM1sM 1:14 Isle of Skye Piping School
w5rfcg9uZWM 0:58 Dioplòma anns na Meadhanan Gàidhlig / Diploma in Gaelic Media
FjkxTYeaQCM 10:51 Beatha le Parkinsons
RmbRjlauu_o 8:39 Clann 'ic Caoidh
2tvFoqXYVLg 15:47 Baile beag, baile beò
pvKkurRa2eg 14:10 Carthannas Coimhearsnachdail
HcnF37HiJv8 10:32 "ISHGA"
GPjQwEfE6IU 15:49 Mo Roghainn 's Mo Rùn
q9YDP7CFZbU 3:50 Dhachaigh
2JNrg2tqJiQ 4:29 Fear a' Bhàta
cFZcrS5RYw0 3:12 GLACTE
D2Fmsj9kZq4 3:10 Gealladh Gun Choileanadh
BRCr1Z4X-Ho 4:05 "Cheating Our Language"
zDh5xGXW-VI 6:33 ALADAS - "An Là as dèidh an Sesh"
_Q9EVgG839I 0:58 Seallaidhean de Chultair Dùthchasach le Margaret Stewart
-lHR_iK60P8 0:46 Dannsa le Trail West
qVuIJWNc_WM 2:21 àm-lòin aig an t-Sabhal!
FQXhhl47bWg 1:43 MSc ann an Cultar Dùthchasach agus Eachdraidh na Gàidhealtachd
RbIC7_-qoYo 1:24 Ceòl na Pìoba
FyBb-3C1438 0:57 Tosta aig SMO (Human Mosaic)
mmAiX0kjiQM 0:53 Cèilidh nan Cùrsaichean Goirid
-lj3KUYkCA0 29:36 Na Piobairean Duthchasach (English subtitled version)
OnRWprVit_s 1:13:42 Prof. C. Ó Giollagáin - ‘Language Minorities in Globalised Modernity’
nOeMjMCqhZM 10:07 Dè an diofar? (What's the difference?)
oIjMzPV9s64 12:30 M' Fhearann Saidhbhir (My Rich Land)
FGCWIg69JEQ 10:42 Gaisgich an Fhearann (Heroes of the Land)
IPYwZ9AbVSg 29:36 Na Pìobairean Dùthchasach (The "Folk" Pipers)
_BXoifY4Hbo 10:28 Fosgladh Oifigeil Ionad Iain Nobail / Official opening of SMO's new building - "Ionad Iain Nobail"
YPB1UOIoBcU 12:20 Niall Stewart - "The Donald MacDonald Quaich 2015"
JP7ZmAhYRHw 12:41 Stuart Liddell - "The Donald MacDonald Quaich 2015"
WXhDeZn12GI 11:39 Bruce Gandy - "The Donald MacDonald Quaich 2015"
8ORwsvmpC28 13:07 Roddy MacLeod - "The Donald MacDonald Quaich 2015"
Zyz8-gqowIc 4:40 Crìsdean Cunnartach / Chris Dangerous
LckRwrcUM7A 38:09 Òraid an t-Sabhail 2015 – Nicola Sturgeon MSP, First Minister of Scotland
ktO0UWKM0ZA 13:30 An Geama Mòr - Sgeulachd Dhaibhidh
toTh5T_bJVc 10:10 Crossroads - Cùram is Càirdeas (Pàirt 2)
9nDwiN7Y_ig 21:53 Crossroads - Cùram is Càirdeas (Pàirt 1)
ClL0yCb2T5s 10:57 Gaisgich a' Chuain
kgFqeYXoLZA 14:09 Air Ais Dhan Sgoil (Pàirt 2)
ZqiOdkudy68 15:05 Air Ais Dhan Sgoil (Pàirt 1)
RHVpAOSuVPQ 14:16 Cur Air Chuimhne
h06i_RB2Ms8 14:48 Beartas na Beairt
pD3C_LIcng0 14:52 Bun Sgoil Ghaidhlig Phort Righ
oqrSVSaKECE 10:49 Sùileachan
BsMKuQgLv04 11:01 Slàinte an Eilein
phPBq7-Hp7c 12:31 Maise na Dealbh
9LLvDk48PnY 14:59 Maille ri Chèile
L6HqNdG5xk0 5:06 Dà Thaobh
C0X_qidQZHg 3:29 Seachd Latha
tVgbE32ZrFs 15:48 Cuisine na Croite
R72X2qZqD5w 4:59 Beatha Bàla
cLYN2caqfuo 14:08 Fàs neo Bàs
6z9XJtRIkwM 10:53 Beatha le MS
B1ZHSPWKOUs 1:23 Cùrsaichean Coimhearsnachd
nlQ_bYpefvU 12:02 Maraichean: Clann MhicLeòid
nEnHZ6yzXVA 11:41 Air a' Chroit
wgsMQzPM0JA 11:50 Còmhstritheachd
NGkApQt6mAI 11:18 Mìchael MacNèill: An Caiptean
neQ-Bktb-EQ 13:42 Meal Is Caith E!
eJJS_Gm4u5M 10:31 "Eilean a' Cheòl"
9ni1Kj-NVxs 9:41 Sgeulachd Stuart
Rao8qMzzsF8 10:46 Snaidhm Mo Chridhe
jqXJYhq6L8k 10:12 Obair Beatha
j1ST6TpqL6s 5:48 Sabhal Mòr Ostaig / Around the Gaelic College in Skye
Er89PS8_mu4 50:11 Òraid an t-Sabhail 2012 – Kenneth MacQuarrie, Director of BBC Scotland
8TyD7KUFOIY 1:21:30 Òraid an t-Sabhail 2010 – Andrew Dixon

# TA Outdoors
KmweP8s-Rds 25:09 Building a Celtic Roundhouse with Hand Tools: Bushcraft Project (PART 1)
dNIDCJ2HrJs 26:02 Iron Age Celtic Roundhouse: Building the Timber Frame Foundation | Bushcraft Project (PART 2)
gH3zo6wGiFk 33:39 Building an Iron Age Roundhouse with Hand Tools: Bushcraft Project (PART 3)
_CLVJCAWELQ 26:19 Iron Age Roundhouse: Building with Hand Tools: Bushcraft Project (PART 4)
KML_UX-unYQ 32:52 Building an Iron Age Roundhouse: Perimeter Walls | Bushcraft Shelter (PART 5)
tmow-wvqx8U 35:32 Building a Roundhouse: Clay Walls with Bare Hands | Bushcraft Shelter (PART 6)
oi5bAqcC4gM 18:34 Building a Roundhouse by Hand: Celtic Roundhouse | Bushcraft Camp (PART 7)
R0BHWcHROoA 29:28 Building a Medieval Roundhouse - Thatching the Roof | Bushcraft Shelter (PART 8)
N_aNFeYHp6o 38:35 Building an Iron Age Roundhouse - Thatching the Roof | Bushcraft Project (PART 9)
w2gChdtNs24 25:30 Medieval Camp - First Night in the Celtic Roundhouse: Bushcraft Project (PART 10)

# Open Past
sHeUNyuayCo 21:41 Making precision agricultural and archaeological remote and near-surface sensing interoperable....
VMiwBBXXZEQ 18:46 Peatland restoration and the historic environment: building sectoral skills in grant-aided....
XrW28--4E84 28:54 Using artificial intelligence for national mapping of archaeology and landscape features
wpiAH-HNNQg 16:42 Adapting to climate change action
ZTvjHsO4vIk 20:57 Novel approach of landscape planning for conservation of archaeological and natural resources
F07jUuuqStw 33:47 In our nature? Providing integrated archaeological advice in a changing world. Introduction
gKMA6Gm4CYo 16:28 Public benefit is poorly served by development-driven archaeology. It’s time for change
EyZqdE0TmYg 12:58 Pushing boundaries – what are we willing to risk to find anew and better way of working?
ucuae7_W4Yo 22:24 Dig in a void: a mammoth task
6sifuPCPQSE 18:54 It’s a long road to mitigation: how did we get here and where do we want to go next?
5d1MDsJuG_U 5:05 Pushing boundaries–what are we willing to risk to find anew and better way of working? Introduction
irLPo48mkgI 21:01 We don’t have a Jobs problem; we have a CAREERS problem
-N_ELpvw4l8 17:23 Evaluating the evaluations
-1XDIqOnwUI 21:12 Challenge vs opportunity? Changing the way in which we think about development
iBInVvvX2z8 20:26 Those are my principles, and if you don’t like them… well, I have others
NwQf-jU7F-g 18:43 Are we prepared? Skills for community engagement
pO_TKv09Fbs 9:11 How do we increase community engagement in commercial archaeology?
BNjDkb_dFSw 18:21 Embedding community engagement in everyday projects
ogeDNkT-PmE 23:38 The value of archaeology in urban regeneration – the experience in Gloucester
TRncX0X8QLY 19:24 Case study: the role of Priory Gardens in the Dunstable High Street Heritage Action Zone
cR5EAqp5Vo4 16:41 Come follow me: the value of archaeology in Grimsby’s town centre regeneration
pPrw8xZWTsY 21:44 Creating places where people want to live, work and visit: the value of archaeology
_bk0cOYPc0Q 27:42 The Elan Links Landscape Partnership: Safeguarding Heritage
s7OFapE5Lx4 11:39 Archaeology, sustainable development and value
cz0JSXkceCI 39:46 Recent Archaeological Investigations in the Brecon Beacons National Park by Black Mountains
vSFWpcVvmvw 19:07 Sustaining namibian heritage
45XV0Uumues 39:03 Every Rock is on a Journey: a Geopark landscape in deep time
O3X__5lRJuc 18:49 Building better lives through heritage
0zX1pB5P9Os 21:58 The Rivers Project: archaeology at risk in the Usk catchment
kN52rKA_HyM 19:40 Let’s go round again: revisiting sustainable development language and approaches
Rz5Wgh8u-Gc 24:48 Towards the future: developing the BBNP Historic Environment Action Plan
QHQInF6hiS0 14:37 Counting the cost of archaeology? Thinking about archaeological and heritage services
WYKmfapAfUA 20:13 Twmbarlwm 2019-2020: CPAT and Cymdeithas Twmbarlwm Societyinvestigations
EF2BtbtPoSY 26:25 Croft Gardens – great publicity or just a good site?
cIoSO00mOXo 32:59 Uncovering History at Hay Castle
LrjPhpY5FpI 21:27 Either side of furlough – the Giant and the Roman fort
nsipHNZfWZM 20:17 Saline Heritage Society and the hunt for the ‘lost’ Church
HzT4Fr4bBgQ 21:29 Hinton St Mary, Dorset – running a research and training excavation during the coronavirus pandemic
2FpyVXqxeqA 22:38 Recent fieldwork in Fife and area
6Kt2zvU2_Zw 24:37 The complete picture: the Rutland villa experience
XZscP3JDcuM 27:35 Results from the Inverkeithing Heritage Regeneration community excavation of Inverkeithing Friary
YMJyVzK194s 19:32 Running up that hill
0JJ8bAZ20aE 14:22 Early Medieval long cists and other features at Powmyre Quarry, near Kirriemuir
d6Gws-cLEKM 17:56 PCA, archaeology and CovID
eiSuiWgHVtg 22:07 Continental connections: window glass from medieval Perth and Elcho
b-IojADd-JM 23:25 Archaeology at home – using digital communication to build organisational resilience
ojg_7VhLmfA 7:04 ScARF
3kqR-BcKUiw 19:12 Back to school for HS2: learning how to unlock virtual engagement for schools during lockdown
M2FZJ4ljZUU 34:12 Excavation of an Iron Age settlement at the James Hutton Institute, Invergowrie
Rqj8jN3A2eI 21:40 Collaboration, flexibility and sustainability in engagement
L3hvbhEVSb0 19:33 Loaves and fishes in St Andrews: excavations at 100 North Street
cLvGLf-arAM 22:19 Making the most of the pandemic, for the benefit of maritime heritage
S33nzrmWLd0 19:53 The excavation of Broxy Kennels fort and souterrain, Perth
WIel6AI2h6g 22:01 St Mary’s Field Museum: planning and delivering intrapandemic educational opportunities
ZKy86oc3R4M 27:33 Bridging the skills gap: developing a distance learning training programme for mid-career upskilling
bgFfGYEgFKo 15:23 Understanding behavioural tendencies to grow the Archaeological Research Services team
Qm7l9K2MvZ4 14:07 The Archaeological Research Services Training Academy – structured for success
B2NzzGvoDmw 17:04 To teach is to learn twice: The Archaeological Research Services approach to training
7phnr2lF-Rw 21:05 Engaging citizens Wellbeing as public value in archaeology
MEUDpqjWJLc 18:42 Active participation Reaching audiences: introducing the Historic England Audience System
gw-YObSCQA0 10:32 Introduction What are Public Value Frameworks (PVFs) and why are they useful?
l4fUagwZXjI 17:04 Archaeological prospection in alluvial environments
H7g0kltoS8E 18:59 A geophysical journey: Lord Montegue’s donkey and other stories
-1DZqD73Jhs 3:08 Celebrating 50 Years of archaeological prospection: Welcome & introduction to the session
6NM98xlLvyE 43:29 Introduction to Streams 1 & 2
QXMQR-YwYRI 19:33 The Importance of Being Explicit: Metadata for Data Reuse and Preservation
vitBkM8Pm2Q 47:27 So what has archaeology done for us? Thinking about the public value of archaeology
oWjujNmBHOE 14:54 Selection Toolkit update and discussion (leading into a general discussion)
_dEx-LCJyc8 8:25 Introduction to 2022 CIFA conference
mE8bTsuI6f0 19:33 Public Engagement with our Collections: What Works Best?
DTj4e6blxR8 19:01 Innovation in Geoprospection: the spatial turn in geochemical analysis
qEOW-sIh8Qw 38:16 Ethical Considerations in Archaeological Archives
MyTx-d6mFN0 15:08 Simulating trenches and geophysical survey for archaeological evaluation
79sDLKuk9gc 28:18 The Future for Archaeological Archives Programme
ruZhatXQqzs 16:36 Sharing common ground – exploring remote and near-surface sensing practices
jrnKRbtW_lo 19:56 Dealing with Digital Data – a Contractor’s View
O7Biq7-oA50 17:06 The HS2 Phase 1 Central Section high-speed railway corridor
W_gj61KQoV0 21:43 Anything but Black and White: the Data Management of Digital X-radiography
wV-Ad6Clf4M 10:07 More than Sherds
1wChowOrHxQ 21:28 Valuing and investing in training & professional development
4c-Jg0PPriA 19:42 The 2021 CIRIA Guide on archaeology and construction – changing the value conversation
Dh8apS9D2e8 23:20 Archaeological Archiving, FAME and the Future
qUukkT-7zKc 30:05 Archaeological Standard Method of Measurement
CCqjHSDMUyY 36:17 A glitch in The Matrix?
gPTZQYdMk1s 22:43 Data standardisation and the future of recording our past
BapKAu4upkI 25:22 Trailblazing apprentices as a revolution in staff development
DI_DBrQs-9w 27:36 Scottish Museums Federation 2022 AGM
yNwRhglcU2E 19:01 Online Support for Museums: Free Resources
nACcyb-0luk 38:14 Wellbeing in Anti-Racism Practice
Y0FQeLJoL6Y 48:41 Fife’s Linoleum Project
hTfso8eu7rw 25:45 How Trade Unions Can Help to Address Wellbeing Issues Across the Sector
LErdziAgziI 22:57 They Might Be Giants - After the Fire
lPVe47i639E 23:04 Remote & Digital Volunteering/Work: The Key to Increasing Museum Accessibility
BgtxkV6qJMY 6:51 Introduction to the 2022 SMF Conference
voMaKHwy3hk 1:25 Open Past Services
JvYF7S5HOIo 12:41 Redevelopment of the Argyll and Sutherland Highlanders Museum
aGzfegOBPSA 0:53 Scottish Museums Federation's Argyll and Sutherland Highlanders Museum Event
zLbrUiAgx14 33:39 The Scottish Crannog Centre: Rising from the Ashes: The Scottish Crannog Centre development plans
mhh-kKQPJ7M 23:16 Logierait: multi-period occupation revealed in a wealth of pits, postholes, ditches and hearths
47kMBgykdlM 26:37 Warriors, beasts and boats: a re-examination of some of the carvings at the Wemyss Caves
dFwRxbtc46M 29:00 A Hidden Vernacular - Rapid Building Survey in Perth and Kinross
OUplMdA3-7k 26:32 A Neolithic pit-defined enclosure and Roman field ovens at Alyth Substation: in spring 2021
eI8Kw8J-s2w 20:16 30 Years of Adopt-a-Monument and a look to the future
F1B7nSh_pHI 14:29 Evidence of early settlement at Honeyberry, Rattray
wFJLX99jgec 36:49 Burning Matters: the Rise and Fall of an Early Medieval Fortified Centre, Clatchard Craig
83SXJKlGAIU 21:33 In memory of Oliver O’Grady with an Appreciation by David Munro and Joe Fitzpatrick
jsu3DfCmgJU 30:38 Blair Atholl Man: Re-evaluating an early medieval long cist burial using advanced scientific methods
8zeHc0gm3TI 19:33 Seggie Farm, Guardbridge: Multiperiod settlement in the shadow of a multivallate fort
-tUrFY_FIj0 9:26 Introduction to TAFAC 2021 Conference Chairman’s Opening Remarks
So48AyAIuw8 21:14 The Iron Bridge in mixed media: An artistic reflection on interdisciplinary research
AA5FbROqwwM 24:09 The industrialisation of Thames water management in the 19th century from many
UfCQEQYCsFc 21:10 The archaeology of 20th century factory management: Four factories on the Team Valley Trading Estate
LP3G-iBqqC0 9:07 Investigating industrial pasts and legacies from multi-and interdisciplinary perspective
wDGIMwsmTPU 11:44 Humanizing industrial archaeology
TgVeXp-e7P8 20:30 “Garbology” and the archaeology of industry: Field walking in the hinterlands of Royal Worcester
xrWHYBQMBik 12:14 Gideon Mendel in Calais: what are the ethical implications?
tW9ONuGenL4 12:57 The Archaeology of Uncertainty
hvTbLk7ia4s 8:04 Erased from the Past: Bringing marginalised people into Archaeology  - Panel Discussion
dZ8z-V3NTtA 6:29 No Hetero!: Making way for alternative ways of knowing within archaeology
57GSbvwUzYk 2:31 Erased from the Past: Bringing marginalised people into Archaeology - Introduction
AQpqzjj5CJw 14:32 What does archaeology actually mean to those in primary education?
rXJAbI-XmTM 12:50 Truth to Power
WkLI0pu7heE 53:08 Publishing Power - Panel discussion
2FYFdeQeJWM 17:54 Thinking about Open Research: Accessibility, Transparency, and Impact
3LlWEXqxRhM 21:07 Open access, open data, open standards (?): sharing data generated through developer
BOvA6tRDWBg 17:47 Canonising Archaeology? a publishing history
_GA_xl55xhg 16:55 Breaking down the barriers in grey literature and publications
haqmMRAllyo 11:55 Publishing Power: the power nexus in 21st century academic publishing
XsgubgLVp-A 15:24 Eurocentrism In Print And Digital Papyrology: Decolonizing A Troubled Archive And A Narrative
S12VW1wVhgs 20:37 The Archaeology of Ritual Action
5jLwkdJoMlE 18:48 Lessons from Love-Locks: The contemporary archaeology of a contemporary practice
XxtzsDql0-o 14:28 Defense against the Evil Eye: evidence for magic at Roman Wroxeter
jmHv_25Hvm4 22:27 Concerns about bodies and containment in 16th-17th century England
SObvq1meelo 20:17 Archaeology and Folkloristics at Tuberculosis Sanatoria in California
OD1O2soGJyk 21:51 An Archaeology of Myth Fulfilment
-7jc-BsCgu0 7:19 Pathways to post-conflict remembrance - Introduction
oWvH13ZhbaE 18:41 Glorious and forgotten: the remembrance of air warfare in the Spanish Civil War
IY9g7MsiIk4 22:26 Excluding the North? Marginalised memory and the legacies of conflict in the Centenary
U3mqSIjqemw 21:56 ‘Don’t mourn, organise!’: remembrance and political activism
e7yo0XFU3Cs 19:27 Archaeology and Colonial Power - The British Mandate and the Palestine Archaeological
BjXMe9LUKN4 20:18 Annexed Artifacts. Exhibitionary Bias in the public display of objects from the “Holy Land”
V7Fqz50P2B4 20:05 Messages from Mykene: Othering and Smothering. Intersectional Orientalism and Sexism
RUj0ETlO8LI 19:48 Making it up as they went along: Reconstructing the methods used to generate an early 20th century
pPIfttEK2I8 3:00 Museum Archaeology: Thinking Through Collections - Introduction
7WoZZIO9paI 16:12 Imagineering archaeology: reworking digital media in museums
htxbeOZompw 11:24 Tracing three million years of human cognitive evolution: a neuroarchaeology study
YVH2aRu1Npk 11:55 Tool-making and mind-making? Acheulean handaxes and the emergence of aesthetic sensibilities
slQpG34Fc1k 13:51 Teaching and learning Atlantic rock art: exploring cultural transmission in the Neolithic
wtnaX3PE9Qg 11:09 Style as memory: bridging past and present in the context of Minoan archaeology
vtG5Qs5-b4g 14:44 Metaplasticity and the boundaries of social cognition: exploring scalar transformations
0v15ImlCGZo 12:40 Mass consuming miniature meanings: analysing the carved stones of Neolithic Bornholm
dEabMgQCwms 5:25 Minds in situ: Material Approaches to Cognition in the Past  - Introduction
tsqYZGu7oGY 15:26 Evolutionary perspectives on human handedness and hemispheric specialization in the brain
TgvMMx3Vlqg 15:06 Do extended minds have material dreams?: a Materially Enacted Phenomenological response
9GtUtvcomOI 17:13 Creating art, shaping the mind: a psychological approach to Upper Palaeolithic cave art
-yoJ3kX0aos 13:08 Carving out an existence: understanding the chaîne opératoire from the inside out and making a name
NX1DcT4kdAY 1:56:39 Women and Power? From Conversation to Action - Open Workshop
bnuumgtpf8c 26:08 Conflict Archaeology: an audiovisual project on the invisibility of women in certain archaeologies
sZQX7mmlF4k 9:02 Women and Power? From Conversation to Action - Introduction
pv-hxnGWtZE 16:02 The Lisbon Devil: A Powerful Artefact in Portuguese Middle Ages
zzc4EBI-p6g 20:08 Attribute OR Artefact OR Attribute of Intangible Artefacts – A Case of Indus (Harappan) Script
H39qpd76QcA 19:57 Making Manuports: Unmanufactured Artefacts in Archaeological Interpretation
mEWJu8S8Wak 18:38 Hierarchies of Value? A Reassessment of Exotic and Indigenous Feasting Artefacts
h6PfK1agWcw 20:20 The Destruction of Power and the Power of Destruction: Decommissioning Powerful Artefacts
QZJpJ2dZG1I 20:50 Irish Bronze Age Cinerary Urns
KI7igf4fF3U 15:44 Brooching Power in the Viking Age
o2YKyEWD8bo 17:46 The Power of the Illicit. The Memory and Identity Captured and Maintained in the Illicit Objects
wrUR8Eyo3P0 20:56 ‘A Deep Sense of Voicefulness’
-0okJuWrTbU 21:44 View from the trench edge: reflections on working conditions in commercial archaeology
EznNwIa_ipQ 25:04 Type III fun: archaeology and infrastructure
7VdPahrARpY 21:13 Training adults: is it a processual and post-processual endeavour?
CTLu56aO5tc 22:20 The Rise and Rise of Viability in Planning: An Archaeological Perspective
FeDpWFCgEM0 18:54 An archaeologist’s view of consortiums
DCz3ljM39NA 6:24 Power over Practice in the Contracting Sector - Introduction
0fY-svWAAtw 7:27 Fact or fiction: the power of communities with knowledge of their pasts - Introduction
s4fjAm2YmIQ 12:12 Heritage and its Discontents: The Power Dynamics of Heritage Projects in Southern Mexico.
RSb8A1bMm4s 16:14 Heritage and Affect in Nepal’s Post-Disaster Recovery: Working with the Community of Langtang
MuBvPBwJLA0 25:18 Communal memory and social cohesiveness
1613AK-NRJY 18:17 Stories in the Sky: community groups and storytelling at Park Hill flats
Ad_1G8LuYBk 22:34 Where does archaeology take place
ReEy8STNHWw 19:37 Panel 2 - The Decolonisation of Archaeology and Archaeological Collections within museums
StFphqUA1bc 20:05 Panel - The Decolonisation of Archaeology and Archaeological Collections within museums
zswBIxL6bvU 22:01 Investigating Intersections of Race and Public Perceptions of Archaeology: a pilot survey run
hgF-IDz_Eks 20:41 How to Say Nothing: A Case Study of the Museum Labels on Some Looted Bronzes
E1deDDhJXQ8 22:00 From accession to access
cjqPgDekomg 16:28 A ‘Belgian compromise’ of Science and Empire along the Nile
IT9CphzDj6s 20:04 The Affect of Relating. On thingly humans and humanly things
LNBVx4gYLWQ 12:06 Moral and objects of affect in the medieval world
wSrmQ9Kt2Sk 12:06 Moral and objects of affect in the medieval world
ZPkLk9F-9rs 17:16 Ground Affect: Honestones and Emergent Capitalism in Medieval England
2MwM1gW-qSE 15:06 Affect worlds and Immanence: A Spinozan Archaeology
4D2sVdkkOyk 18:09 ‘Concepts have teeth’: capacities and transfers in the digital modelling of Blackfoot material
e7m9FJ2O0Ac 14:42 Affect and post anthropocentric architecture
_Ae9iOoYJLU 17:30 Kerbing Relations Affecting By Using Pasts
5qmA0KCEs3E 19:23 Affect and power – what difference does a word make?
_UiWSPljyZk 22:35 Marshwood Vale Forest – a land apart. Oral history of a Hookland royal forest
ohiDrlo4DA4 18:17 “Will you search through the loamy earth for me?”: Towards a Psychogeography of Danebury (Essex)
nUqYmFPw_I0 13:58 Spooky stone circles and sinister standing stones: megalith exploitation movies 1957-1990
EDQz_ngwbOg 14:35 The Toadstones of England
aOEduVijOWs 12:29 A fantasy of the lay by
ImVQ8JIAYvs 18:01 Hookland antiquary, Edgar Snell
Ar2djvP0qJg 18:21 The barrow is never empty – ghost soil excavations in Hookland
VJd9BGpHowA 3:31 Archaeologia Hookland: the archaeology of a lost County in England - Introduction
5wI2GqQD568 19:47 Colour of the dead
Af4zhnBZU_E 29:09 Revisiting Sacred and Profane: ‘domain change’ in south Italian prehistory
mPnanllLczg 17:52 Archaeology of the past, present and future!
BfdbiCuRxKU 29:01 The Power of Place in Greek Archaeology: The Impact of Text on Sensory Experience
i19Ntzuhbq8 23:46 Reflecting on Reflexivity
7pYu6J3wMRo 3:41 Sensory Archaeology across Space and Time - Introduction
-DkJZf62MbI 25:33 NO FUTURE: FROM MSC schemes to Master of Science Courses
wn9j3lfBnO0 10:14 The "power of non-violence" or "Gandhism" of Russian provincial archaeology.
yZdgN1yocT8 9:45 Coffwich Drweryn, heritage of conflict and grassroots nationalism
r-WVphSu564 10:02 “A Part of England’s Story”
t0kS1nvaZ7k 11:03 Dwelling in the landscape: a challenge to nationalist archaeology
-v_aktmJclk 11:49 The Romanian myths of origin and the postnational critique: challenging reactionary populism
4dB4qw_CHdc 13:49 The assault on Holocaust memory and history: Holocaust denial and the Leuchter Report
-izVb0oYQxY 12:28 Music, nationalism... and Vikings?
--HxWMYM3as 9:31 Living pasts: emotions and heritage in the post-truth era
r4UaceTO-ZI 13:54 I said it once before but it bears repeating: heritage is not just about our ancestors
bAyjNVkFIF8 10:49 God’s Chosen People: dangerous narratives in Early Medieval ‘history’
JPvSZ1AJED0 20:48 Archaeologists Communicate Transform!
LitRfEEltIQ 22:35 ‘The Establishment’ Strikes Back: What CIfA activists are doing and why you should care
OtpBTAntgSo 4:48 Archaeological Activists and the Untold Histories of Archaeology - Session introduction
YXWvLLnISEY 20:12 How a group of archaeologists, supported by their trade union, took on management…
_1uyzj90wjE 14:01 Rescue - A Secret Society?
sr_hHU0KpOs 17:49 Preservation and presentation of Roman archaeology in London.
fMcZBe8Me0Y 20:47 Where archaeology meets technology
wE3WTl_pWIo 14:50 Archaeology, the Romans and the National Curriculum: an archaeologist-turned-teacher’s perspective.
zyiWJ2q9OTw 15:18 Travelling Bones and Leather Bikinis: How Archaeology Inspires Fiction
GEvrvMJs11g 23:28 Becoming Archaeologist
MaNM1YxhsQg 17:00 Misogyny, Patriarchy and Female Labour in the Medieval Household
2gsdexfIdvE 17:24 Grievability, households, and violence in the Iron and Viking Ages
eziq_PmBHV0 14:31 “Nomadic subjects” and Eurasian Iron Age studies of households and feasting
smS1MQPhSaA 18:24 A post-humanist, feminist approach to power
FnHu1e3wO14 16:08 ‘Nobody knows what a [feminist] body can do’: difference, immanence and becoming
nihyUCFlxTQ 16:59 New approaches to difference? Celebrating and experiencing ambiguous bodies
Ip8rBh5IX4A 16:50 Working is Broken: Labour Conditions in Commercial Archaeology and Video Game Development
LSAtkb34MXY 3:57 New feminisms? Radical post-humanist, session introduction
J-OT96D7Z5g 14:02 (Digital) Game Archaeologies: Going Digital to understand Material/Going Material
FpDSiZr4GCI 14:39 Education or fun? Creating video games to promote archaeological thinking
vvIpXfkoUDg 17:56 How the Archaeology of Amazons helped Women in to War Games
3XDa_DXl-Oc 16:35 Booms and Bombs- Situating Breath of the Wild within the “Jomon Boom” trend
S5LNMndy9ZY 21:36 A Heritage-Focused Video Game on uKhahlamba Drakensberg Traditions
zA4fVl2ZFww 18:14 Dangerously Fun: Politics, play, past, and the phenomenon of archaeogaming
K5R-_Fd5szQ 42:16 The benefits of Consultant and Contractor collaboration in Archaeology
3fDRSaok_qM 58:03 Hiring non-UK Staff in Archaeology from 2021 onward
vpnTyapgF9Q 1:06:52 Archaeology and pipeline safety
HMjZBriffoc 34:00 The provision of hygiene bins and disposal of contents on archaeology sites
m0EHxa6GKOU 7:00 Development and first experiences with an interactive teaching movie
3haynNex9cA 16:07 Models and Metadata Revisited: Changes in Online Digital Bioarchaeological Practice
x9V758nWStE 15:45 Affordances and Purpose: Modelling Social Behaviour in the Landscape Using GIS.
CZCpujxCWGE 16:53 (De)constructing the Iron Age and Roman Landscape of Citânia de Sanfins (Portugal)
-P9YIv02ZhA 13:28 Cosmological conceptions that transformed the Nile Delta. A hydrological approach from pre-dynastic
c7LuNrRowSo 13:31 GPS Technology in Field Survey the MYCENAEAN SPERCHEIOS-VALLEY ARCHAEOGEOPHYSICAL PROJECT
og_h0j91H9Y 18:25 Indigenous Landscapes in the Caribbean: Using network analysis and spatial statistics
_RgYlJDLMzg 15:34 Prediction of paleolithic sites in KwaZulu-Natal, South Africa using remote sensing
U9-dGoSW8eQ 18:42 The missing landscape of the Mycenaean Argive Plain
ygOHMJp6UKg 18:12 Using LiDAR as a tool for remote archaeological prospection: the case of Salas
7EgRtJWYXqU 6:28 Korean perspective on digitally mediated knowledgemaps of archaeology
ajEPF7A0irc 6:27 A Brasilian Perspective in the Wake of a Knowledge Catastrophe
KsGeoN3JgPI 4:59 Mapping the bibliography of Citânia de Sanfins. New methodological approach 4 historiographic model
A6EkOngBaZs 6:36 On the Current Impossibility of Creating Digitally enabled Knowledge Maps
YuWPLgoxRZw 3:48 Our knowledge is all over the place
0_w5tC5dDCw 5:22 People Telling the Stories, the Stories Telling about the People
GETmsLHP5Q8 6:07 Queering digitally mediated access to archaeological knowledgemaps
8KqJjfDPAfw 16:49 Bayesian Species Distribution Modelling of Domesticated Plants
-rl5WhjsWPE 21:23 Spatio temporal network analysis applied to Roman Terra Sigillata data
eb2Bu6NyP2Q 19:12 The Application of Local Indicators for Categorical Data
26vcrBRX0FM 20:41 “Where did they stand?” A probabilistic approach to the study of orientation of enclosed areas
auI5FLbtAZo 20:19 ‘Riddle Mia This’ – A Mobile, Augmented Reality, Museum Puzzle Experience
p7ByQYVq_cc 20:23 Evoking memory through immersion: the case of the Laocoon cast at Glasgow School of Art
WOI_RN2Hi3w 20:20 Lochbuie, a Bronze Age focal point of astronomical knowledge
1PaZ_Jt9mec 18:49 Permission Digital Archaeoludology
zl412S9pUYs 16:30 Virtual Avebury
JhRoPez1FD4 21:14 Using immersive acoustics to communicate archaeological narratives: Listening to the Commons
FTDlZee3PeI 19:38 3D documentation of ceramic vessels with the use of modern measurement technologies
O5HaImWePFw 11:01 Digital authenticity
d1l2g-okXuE 15:42 Similarity analysis of African Red Slip Ware (ARS) with modern 3D and 2D processing techniques
1slyhCHAuBM 18:08 Interlocking Geographic and Social Urban Mobility. The Social Network of Etruscan Elites
kOfdfVIUYq0 23:10 FAME webinar: menstrual health and hygiene in the heritage workplace
bBm9I837FWc 17:52 Measuring the city – methods of layout reconstruction of regular medieval locations in Central Eur
BEpxzr2Ye_M 19:31 The evolution of the historical transport networks of the Iberian Peninsula
y7p4G5iKcgg 16:55 To Move as One: Simulating Crowd Movement Dynamics in the Ancient City
h_2pP9NxWSE 20:43 Who lived in that Roman house? Computational models applied to the differentiation of typologies
ktjq2Fb3E7o 17:34 Developing the Durham University Museum Artefact Collection for Machine Learning Applications
NwKTnw_NSNA 14:29 From manual mapping to automated detection: developing a large and reliable learning data set
iiP62GmsaJs 17:47 Improving the discoverability of zooarchaeological using Natural Language Processing
wuLZbtoOG1M 18:25 SkyEye, a machine learning software to detect archaeological structures in LiDAR Dataset
fmVcM6oybv4 11:32 Use of convolutional networks for archaeological feature detection in geophysical surveys
op8TptDy_yM 14:12 Extending the Nordic contribution to ARIADNE+
WYinHaj84MM 21:43 Combining scientific and interpretive approaches to archaeological data: multi-proxy database
TDN3Xt2Vpkw 13:03 Current status of georeferenced metadata visualization in Norwegian Stone Age
f8MQ5DVhEu0 22:11 De facto standardisation: template database models as a path to adoption
YGlw4sLSiQ4 18:35 Deir el-Bahari Projects : objective, realization, plans. Integration of data in the Database Digger
WuCjkMf7zTs 1:12:23 FAME webinar: Upskill your heritage workforce in England
YfNzYWHUDMU 15:02 Early Christian Baptisteries: Geocoding, Exploring and Analysing a Spatiotemporal Dataset
p6TrPvE29fo 50:30 FAME webinar: Duty of Care When Providing Services
hJh_1prEci8 16:34 Making excavation reports available
o_XVi4pu3Rw 19:15 Preparation palynological norwegian dataset for digital re-analysis and publication as Open Data
PJvvtYW71eo 20:48 Web-based data integration. A case study of Medieval coins in a multileveled perspective
SvTiK3MCO1E 14:05 Where have all my data gone, and how do I find them again
KIyWEFHaG5A 8:09 My little text mining minion
dckFIpSvG8o 1:37:42 FAME webinar: Archaeology, access and digital data
ywsRcnlQ198 7:40 A Linked and Open Bibliography for Aegean Glyptic in the Bronze Age
zhD2bI3K66A 8:39 Serial, fast and low cost 3D pottery on site documentation
AT20-5OgSUw 15:56 Estimating Neolithic spread rates at different scales
y_LiGK8VMpc 15:09 Complex Study of Exogenous and Antropogenic Impact within Territory of Volga-Bulgar
Fyy90ah76xM 22:32 Developing a digital documentation toolkit for the recording of coastal archaeology under threat
qYGWBUmc1Sg 28:56 Feart Maidens: The Witches of Perthshire
kws50LdSTOg 26:25 Loak Farm, Bankfoot: excavation of a prehistoric settlement
or99r11rtUc 34:37 Uniting North and South - Investigations in Southern Pictland by the University of Aberdeen
YpBb3hCMS3A 29:46 Neolithic Carved Stone Balls in context: A new find from Sheriffmuir
HdTTCbq-UfE 21:18 Arcade Teaching
VoL4R-JIWcg 7:30 Creating Immersive Multiplayer Classroom Experiences in Site Reconstructions
_HureRW_fP8 5:18 Chairman’s Opening Remarks
uCbavV134k0 21:06 An Unexpected Bronze Age Cemetery, Carnoustie, Angus
qExhFVvdIUs 21:47 Creating a new gallery for the archaeological collections of Perth Museum & Art Gallery
LmBJp4suyGE 11:04 The Perth & Kinross Archaeological Research Framework: Year 2 Update: a Framework taking form
-oUPks5JWlA 27:27 New archaeological discoveries at the Wemyss Caves
5F9aqnTtcUE 30:15 St Drostan’s Markinch. The Archaeology of a Unique 12th Century Building
q-AV_-hMZ94 7:00 Development and first experiences with an interactive teaching movie
gkBZQh28hrw 17:52 Archaeological sequence diagrams, directed graphs and Bayesian chronological models,
Y5Ch456J7_Y 15:56 Computing Archaeological Stratigraphies. A State-of-the-Art
DA5Z7tNRyik 18:15 Discovering the time of La Draga,
7JfVFuNJB4Q 13:29 Going with the flow - From sediment cores underwater to 3D stratigraphic models in ArcGis
HvabQLP1Kko 13:44 Interactive Visualisation of Stratigraphic Data
ZEUdNdM2BYA 15:01 Simultaneous Horizontal and Vertical Stratigraphic Recording Using Daily UAV Flights
DLau-7Q9F-8 19:41 Spatial Sequences: The use of 3D GIS for the identification of complex archaeological patterns.
1AEl7tujJkY 16:43 Stratigraphy and photogrammetry: the case study of the Basilica Capo Don
jbkwpfBGu3Y 18:00 Surface Correlation and the Sequence of Occupational Floors at La Draga, Banyoles (NE Iberia)
bxIpw0JWXyc 16:58 The application of 3D density analysis to archaeological data
UNBVZnURNRU 15:10 Three-dimensional documentation, reconstruction and visualization of site stratigraphy
CcU5YGfqI4g 22:58 When Harris met Allen in The Matrix: How can the conceptual modelling of stratigraphic relationships
GKiWRTBsIBk 15:18 Chasing heritage thieves
i0Gs0lsYmkQ 20:42 JCHC: an editorial and social media project as a collection and dissemination tool
Pce_KRbuD98 18:17 3D stone tool analysis in R: An introduction to the Lithics3D package
_-p5OhTejtw 15:21 Emacs, Org-mode, R and LaTeX: Power tools in the archaeological toolbox
3dc4-pzWoYc 12:32 sdsbrowser - an R Shiny Application for visualisation and analysis of SDS stone artefact data
cnFtdHhJtEo 18:51 Using R to Update Minnesota’s Archaeological Predictive Model
bkKm7hA0C6k 36:13 FAME webinar: Managing Risk
2tiYmAyzXWA 15:30 Linked (Open) Data with Provenance for Prehistoric Mining Archaeology
NTzEsZOrkHA 12:10 Enter the TechnoScape: thinking through our future toolkit.
AND1d_GptLg 15:40 Proportions vs dimensions: shedding a different light on the analysis of 3D datasets
aUe9hTKQs0o 13:01 Skeletons. We’ve all got one. What next?
za148xROT9Y 11:16 Archaeological Map of Bulgaria in ARIADNE and ARIADNEplus
6QIqSc0v9C8 16:32 Czech archaeology in the Digital Environment – Digitizing Archaeological Agenda in Theory and Practi
OD6BsGjf7PY 14:52 Digital Infrastructures for Archaeology
UuAzZ-_tEEU 15:14 Ísleif: a network-based approach to site survey
olEeQgo66ro 17:10 My data manager is a robot!
9Fb4AXL1Cp8 17:50 OpenArchaeo: an application to query archaeological data via CIDOC CRM
g2e0Gi59suk 16:25 Prospects and Potential for the National Digital Repository of Archaeological Site Reports
kZbkEF875Zc 14:14 The ADED project - a Norwegian infrastructure for excavation data
ZHf2ljbiZIM 14:37 The ARIADNE project at INRAP: inception, implementation and future
VsXztU5pJKk 16:15 FAME webinar: Archive use: outreach, exhibition, education, research
CRBmNfkNZL8 13:59 FAME Webinar: Curatorial practice: accessioning, collections care, accessibility.
6TQVv6aQvk0 13:32 FAME Webinar: Archaeological Archives: definitions; composition & the requirements of the elements
EJMz8MuSPX8 15:24 FAME webinar: An introduction to the museum context and archive creation and issues
pFMH6n1TmfM 13:40 Where is the data?
ra4s0a9P4cs 17:49 ZBIVA web application
PvWZCm3M2wY 13:59 Comparing sites, based on ceramic finds spectra
xCIpx-ybtSk 16:02 From the photo to the size groups: Seeking relationships between artefact fragmentation.
R9W1NWh6PQ0 36:03 FAME webinar 2: Collateral Warranties
zHiEMW5BcdI 15:29 A method for automatic classification of artefacts using computer vision & machine learning
aMiQv1YrRkI 17:05 A re-evaluation of the concept of type in coroplastic studies based on 3D shape analysis
LPNMlqHo_WE 19:41 An Archaeological Perspective on the Classification of Categorical Data
NC-KgJ5YhyM 19:16 An Automated Approach to the Classification of Fragmented Faunal Remains
k8cFJa-2JzI 19:26 How deep or random is your forest? Some thoughts about making the right (algorithm) choice
B1_bC6ddURA 19:20 Recovering Commonalities and Highlighting Differences in Aegean Sealings
5z7GtWIAWb8 15:53 Computing Similarity Networks of Maya Glyphs from 3D Data
D8GwoT2LHmI 12:36 From Local to Global: Nested Interaction and Community in Late Bronze Age Crete
ggYoOYXioYY 16:04 From the artefacts to material culture, Statistical modelling using R
k2Cv-wQz3Lk 14:00 Design thinking in Cultural Heritage
GW5HWGqfQHM 10:21 Engaging visitors with ‘invisible’ heritage: lessons learned on the impact of digital media
r3Fq82JI4ys 11:09 From heterogeneous data to heterogeneous public: thoughts on transmedia applications
0Q2RyEDMdIs 13:32 Inclusive Digital Engagement for Heritage
6mjuWVULc6o 12:53 Ksar es Said: Building Tunisian young people's critical engagement with their heritage
e33rbg2VfIk 13:48 Unintended Outcomes – VR, Heritage and User Engagement
tZFwuwxlRgA 12:59 Archeoinformatics and the Archaeological Digital Initiative: Successes and Challenges Teaching
nq1JL-xh_XM 10:34 Developing a master’s degree in Digital and Computational Archaeology: a view from Germany
5YxEm9yOLR8 11:58 Education of Digital Archaeology at Polish universities, different approaches
QdUX-e5qq-4 12:50 Learning to See vs Learning to Understand. Why is Teaching Digital Archaeology so Difficult?
9_ipeacO-6M 13:26 Problem- and Project-based Learning in Digital Archaeology: Potential and Challenges
2EjYO1-A7_c 10:23 Teaching 3D archaeological documentation in the field and classroom
GwuMHLdZiGc 9:41 Teaching Archeomatics at the University of Tours
x-7KzD7NpQo 12:26 Teaching Digital Archaeology at Leiden University
CLx2M7tx-t0 9:03 Don't JUST think archaeology
1CKkh_S1G2Q 9:59 Share trainings to improve the skills in digital archaeology
ZFGnQWbSfto 5:38 The ETO-SIG approach to modularisation: A Position Statement
eGLJcQwMGAI 15:44 Disrupted temporalities of digital archaeological artifacts
V0usjtb1HdA 22:27 Real-time Performative Negotiations of the Archaeological Unknown within Digital Objs & Landscapes
20LdKjcFkwA 18:26 Rethinking the cultural taxonomy of the Euro Palaeolithic through 2D elliptic Fourier analysis
RE59QuT9kFE 11:56 The fabric of a rural landscape, round trip from space to field survey (Loir-et-Cher, France)
EDsxWRac0kU 18:00 Airborne laser scanning in Białowieża Primeval Forest
rSEwGpGOmP4 15:26 Between traditional and innovative Case study of deserted forest village Neuhaus
pYzRNaF0Yf0 19:30 Geophysical survey in tropical forest
uLV0m6Dcnug 15:24 Terrestial Laser Scaning in the Rainforest: 3D documentation of the he ancient Maya centre of Nakum
WStRD0gOI2g 10:01 Understanding how everything worked out so well. Teaching computer databases for archaeologist
R9rtBEySTRA 21:02 Discussant in Round Table Session S39
vMWgsP9GEew 24:01 The European Research Council ERC and its funding schemes
b0tM8-kZbiU 13:13 Enough paperforms - a web and a mobile app for GIS-based field surveys in Bulgaria
TnvrIofWeZs 13:33 FAME Webinar: Introducing the SoDA Toolkit
LiEgnkEBt6o 13:36 Mobile GIS in the field: what people asked for and what they used - 7 years of FAIMS
dMcKPYp19N0 15:27 Placing Mobile GIS in the archaeological field survey
OLHoB1DxdN8 15:56 QField and the future of QGIS on mobile devices
gwiFp4DeBDg 17:58 Seven years of FAIMS Mobile: Strategies for field recording infrastructures
jaGxWzAYS1k 15:03 Taking not only your GIS onto the field: how to merge our individual documentation types
oEFe59Z1G5w 15:27 The Present and the Future of Field-Surveys: are we aware of the digital limitations?
qIHGf1zVeMQ 12:51 Applying Linked Open Data to non-standardised typologies: the example of Celtic coinages
lpgkBUPz3BM 20:37 Breaking down barriers
8yheFvbXKaM 10:59 Eight Years of Nomisma.org: Past, Present, and Future
X7mwRToJZbA 8:04 Taming Time Tools: Alligator and Academic Meta Tool
OFTdsdoZl3o 18:43 “Festung Brünn”: Remote sensing and spatial analysis of German World War 2 field fortification
snLBeJlrrLM 17:19 Hold position: Case study of non-destructive archaeological survey and spatial analyses
8oPjT3XCarM 16:48 An open online minor on the archaeology of conflicts
CnxnEyuEjsI 15:00 Landscapes of disappearance in São Paulo: data modelling and visual analytics
1ooez5vtlP0 15:05 Jewish religious heritage in the landscape of conflict. Relicts of military operations
NO4v0IoUuAM 16:10 Past Landscape of Pomeranian Army (1939), a remote sensing perspective
309qnQnFQu4 21:54 Nuclear "Soldiers of Freedom". Remote sensing of Cold War landscapes in Poland
KNcA5PTigbM 19:52 The survivorship bias and intimate landscapes of conflict
lXA7arR3z8M 13:12 An Automated Approach to Segmentation and Refitting of Fragmented Faunal Remains
2zxLR8lMajQ 13:51 Challenging students by integrating digital archaeology
yNklVy87-0U 19:16 Uncertain information, the Dark Matter of archaeology – use cases from numismatics
pwBG1n9J5XI 16:36 Gorram shiny: an accessible interface for reproducible landscape archaeology with R and fieldwalkr
gJT2LNwjfiM 27:42 Assessing manual, unsupervised, supervised and automatic change detection methods for detection of l
1WaRZ5dot0U 26:14 Towards best practices for monitoring and quantifying archaeological looting with SAR
TJ4R78vGN54 14:25 Percolation robustness and the deep history of regionality
zKNq_qNb6PI 13:34 Application of object detection and semantic segmentation in structure from motion mappings of mines
mb1SG0Rfy3M 6:40 Multi-scale insight into the archaeological study of an Andean archipelago settlement system
eGilUuMxV1s 15:07 Statistical methods for the exploration of the spatial information in anthropogenic soils
TUWyTcQSLT8 15:35 Combination of machine learning methods of image and natural language recognition on ancient coins
h9Q_fIeTdPg 11:48 Complex data over large spatial and temporal scales: local understandings of national significance
8sbFNNVYAtM 17:01 From picking up a sea snail to models of long-term occupation of the S Africa MidStone Age coastline
Abji44XYxd0 5:11 Attempting to make agent-based models more applicable to regional settlement models
rZrhvI7DURk 15:42 To perceive or to compute? Comparison of impressionistic & computer-aided shape classification
dD8yrew9JwU 18:06 The Swedish Digital Archaeological Workflow in Action
FRSq1Lx_ZwQ 15:42 CENIEH: A relevant source of digital paleoanthropological datasets for ARIADNEplus
2Jgwdb0Ej24 18:24 Using the Energetic Calculator for Ancient Buildings (EnCAB) to Understand the Growth of Cities
_3Rp0UsCA-E 17:29 Archiving realtime archaeological (para)data or archiving archaeological (para)data realtime?
1txVmQ58z4k 10:37 Teaching Digital Archaeology at European Universities
Jyo8QxR9Vkg 8:57 Feminist perspective on digital access to Archaeological Knowledgemaps
jEcWxRcapZA 9:20 User Interface Design and Evaluation for Online Professional Search in Dutch Archaeology
gkrzwpB1o6Q 15:29 Geometric morphometrics, visual perception of similarity, gestalt principles and creating groups
HKZDrBf7Vvo 11:38 An online collaborative museum and associated lessons for secondary school students
x5BTkCWqw6s 12:37 A Gaming Odyssey: Improving Video Game Pedagogy in Archaeology and History
2hcZYRx4vck 8:55 Active Learning Using VR, Sketchfab, and 3D Printing
xkUo1m0L4IQ 15:43 Barriers to the Adoption of Digital Systems in Field Research
sMj125KFeiM 20:58 Point and Line to Hyperplane: Set and Graph Theory for Parsing Systemic Contexts and Assemblages
GRcgF-5VJSY 18:32 Developing and using immersive experiences at Caistor Roman town
8LOMX1A1ubg 17:29 Mongolian deer stones
OsjyIB9Jcgg 20:48 Modelling spatial relations at Choirokoitia
kYMpv7mBw6Q 20:50 Modelling the origin of polis in Anatolia. From conceptual to computational approaches
c8hG9eCiSQE 16:34 UNESP/LARP-MAE/USP WebGIS: a Brazilian initiative to approach the Roman-Byzantine Period
gN0aMSZdRus 18:29 ARIADNEplus for public/community archaeology
2tJ_CuTQFrM 15:58 Modeling the Ptolemaic Cultural Export: A Quantitative Evaluation of the Spread of the Isiac Cults
nQPuGPI0uVI 11:23 Creating a unified design system across web, mobile, AR and VR
eGIiHA4ybAM 10:50 Mixable reality, Collaboration, and Evaluation
DqWlubP75ds 15:57 Analysing settlement dynamics using statistics based on archaeological theory
pvegmkUJu08 14:47 Teaching digital archaeology in Italy: still utopia or already reality?
J3ZOO9fBi58 17:15 ARS3D - Documenting facts and interpretations of African Red Slip Ware
r9zR6K_6dzc 13:47 Sharpen the image: Determining scales for questions of hominin dispersal and migration
k3OnWmzPlNY 19:15 Towards A Digital Ethics of Agential Devices
F865aw6Dbtc 21:10 GIS and spatial statistics for cultural heritage assessment
9F62w76eYIE 17:42 CRaFT Work
xV9Y6tpWtfk 26:45 Mudlarking on the Thames Foreshore
QPCqitHXb4s 26:44 London in the Age of Becket: the 12th Century Thames
mucH8p_oeRs 11:54 Diving In: The Tadpole's Year in Review
E3TSAraeD9k 5:37 What I've learnt as a TaDPole
ueAE1NSeoHE 22:24 Tideway Archaeology - A Tale of Two Tunnels
0zdgPd9s6Hc 15:19 Tideway Site 4: Barn Elms - Going to Town on an Iron Age Oppidum
ND8dFq9d_nU 15:57 Older Londoners: Final Year and New Beginnings
jkYtu9EE5SI 20:02 The Magnificent Seven Discovery Programmes
AzTNR0qqcN0 19:48 Back to the Future: TDP The Next Ten Years
fbwh-TIbzuU 25:28 Embarking the D-Day Armada: Overlord Archaeology in the South
xS4e8qMcH9Y 33:50 How to use archaeological collections beyond display - SMART Workshop
G8F7R06KB0E 1:00:49 An understanding of the standards in the care & management of archaeological collections
tlQ6Hf815eA 38:27 Introduction to the Treasure process - SMART Workshop
9qgxYstgylw 47:22 How to manage archaeological archives - SMART Workshop
THFxfSZjb10 24:52 Introduction to the Portable Antiquities Scheme - SMART Workshop
j9VGA4baiiA 23:44 Gairloch Museum
Ieaml0NYAow 22:58 Birnam & Dunkeld Historical Society
DaFN5jWnyEM 20:40 Forth and Clyde Canal Society
8zYIijekrzc 24:34 Scottish Maritime Museum
M5OJ8jJIvdM 18:21 Badenoch Great Place Scheme
u5msdE1Gomg 28:55 Hospitalfield Arts, Arbroath
LimjOgKFV88 16:48 Edinburgh Archaeology Field Society
X35T8qYh2FA 30:51 Perth & Kinross Remembers
eYnr3zrQxJs 29:24 PKARF Priorities in Progress Conference - Closing remarks
gOg8AyDg5KI 28:54 PKARF: Modern
vZGkMRbuUHI 21:13 PKARF: Post Medieval
4I3l5xHQ6oI 23:55 PKARF: Late Medieval
0rVdp4FoiRU 27:53 PKARF: Early Medieval
E4pqijA6SPM 25:35 PKARF: Iron Age
aopKkrRe_wQ 25:10 PKARF: Bronze Age
FbTPUA919DU 24:24 PKARF: Neolithic
VBAxvphbok8 15:24 PKARF: Mesolithic
TFRBYWyf-mk 6:55 PKARF Priorities in Progress Conference - Welcome
hLX6aCJV6Xg 10:41 PKARF Priorities in Progress Conference - Introduction
Ir41EL4s_7w 25:54 Driving Community Engagement and Research: a vision for Watling Street
y3d10Cx7BmU 20:31 Liverpool Rethinking the ‘slums’: Victorian archaeology in a museum context
rFuFhapd1GE 32:01 Experiencing the gods: Displaying and interpreting Romano-British religion in museums
y5zxOJiEUJY 26:19 How can I put this? Interpreting the Evil Eye for a modern audience
8Lea3hNklhc 23:43 Is Disposal a participatory practice?
93V0wRc5tXg 12:29 Treasure
0vRVpBboE0U 11:50 Graffiti
_i-wY2OZDLg 16:07 Waiting in the Wings: The content, deposition and documentation of digital archaeological archives
kx6SqR45ITc 24:13 Numismatics, Norman England and other Tricky Issues: Thematic display and marginalised collections
sxEAAKiOYcM 23:28 Studies in Digital Heritage: A New, Open Access, Peer-Reviewed Journal
fV0ltkCvYSc 41:02 Beyond the Bling: Exploring the human stories behind 4000 years of adornment
W_M9bQlKWYw 18:34 Virtual Reconstruction of the Maya Site of Vista Alegre: Multi-use Digital Assets in Context
ydS7wRbgSz8 57:58 Museum Archaeology: The Telling of Human Stories
cwc43AIdGKk 19:38 Virtual Reconstruction of the Maya Site of Vista Alegre: Multi-use Digital Assets in Context
fW7ivk2GrGs 28:44 Presenting Prehistory: Exploring the impact of prehistory-based projects at Tullie House Museum
UwXOFw--CRQ 9:10 The effect of Augmented Reality and 3D printing in the comprehension of two historical bridges
STPjJ2nYmTY 21:57 BC or not BC? Is that the question?
o1ApOdLDOO8 21:16 Exploration of methods for interacting with archaeological 3D-data using virtual reality
t_i7CQYx0Lw 28:33 Lost Landscapes
op0WEnzpFlc 11:48 Virtual reality immersive serious game to enhance learning. The case of Peña del castro
NrGCF4tuiek 28:16 Norwich Castle: Gateway to Medieval England
ICixZN_lrVw 29:32 Archaeology for the People
aSDJsUMAAHQ 15:23 Developing an optimized methodology to create a portable virtual reality tour
i2nrVSiWzow 15:11 3D GIS: The road ahead (part 2)
u4sxel28FTI 17:01 Visualizing the past: Developing tools to facilitate accurate and immer Grace Sommers
GNePMxk97zk 18:27 Auralizing past places: Repurposing visual datasets
4f9EQbFq-HU 16:26 Excavation at 100 North Street, St Andrews
URWgKvO9H40 17:57 The 3D Survey of the Basilica of S. Apollinare in Classe
hK1YK1aVO2I 30:24 There’s more to this than meets the eye – the 2019 excavation strategy on East Lomond
zElgDElXtxI 22:05 Point-based Visual Analytics and Virtual Taphonomy: A Case Study involving the Submerged Cave Site
aRKdWTYfDAk 23:26 Band of Brothers at Barry Buddon: Recent Operation Nightingale excavations on the MoD ranges
0_ol0ydgGTc 19:27 Masterhand identification in 3D - Case studies from Archaic and Classical Greece
EPvmjSz-8XA 29:28 Wemyss Caves 2019: digging deeper
ewiWJXwMyYU 18:11 The potential of multidimensional visualization in stratigraphic analysis
OkPqHXS7B28 20:57 Results of the A9 dualling archaeological works from Luncarty to the Pass of Birnam
H5xqIPnG5EM 27:10 Some tools to prepare, cluster and visualise data
WYt8s9K4h0k 14:17 The Perth & Kinross Archaeological Research Framework
0erKDiUOhoI 17:59 Exploring spatial autocorrelation in archaeological spaces using R
PXIMNyWzYo8 23:53 Reconstructing urban dietscapes in medieval Scotland
xZn8y8gSAVg 18:14 Is there anything R can't do?
j7xpabmp-kw 19:02 New work on the early medieval sculpture at St Andrews Cathedral
bUBukex30QI 13:00 Aoristic research in R: Correcting temporal categorizations in archaeology
4xsBCoFxKsE 12:36 A new Pictish cross slab in Easter Ross with strong artistic connections to southern Pictland
_HQ28PmJh9g 17:00 Reproducible research in archaeology using R & rrtools
50eSQ6MkHC0 12:49 Carmelite Friary, Perth: ongoing research
c93D6TRY1QQ 12:25 mortAAR: the analysis of archaeological mortality data in R
ctqeuNrYjhM 19:45 When all said and Dun, X marks the spot. Excavations at the Castle/House of Dun, Angus
GPheSAg4F-M 15:55 c14bazAAR & oxcAAR -- two R packages for the collection, calibration and modelling of 14C dates
qqlH_HCBuws 17:18 Energetic Cost Calculator for Ancient Architecture (EnCAB) and Open Context
qqsO4vOPqqo 20:53 Metadata and long term data survival in cultural heritage
3dqhQoZAv70 16:57 Automatic Geometry, Metrology and Visualization Techniques for 3D Scanned Vessels
j3A6dIbxv60 19:32 New approaches to Open Data in Archaeology: the blockchain revolution
N6AeBxESPG8 14:13 Using ABM to explore the role of socio-environmental interactions on Ancient Settlement Dynamics
NvB_QBNXkEY 17:06 SKOPE: Making Paleoenvironmental Data Useful and Accessible
KfLQ-V-UTt8 19:30 Geophysical Correlation: Global Versus Local Perspectives
BbQwI4eI_uk 18:53 Case Studies in Open Context Data Reuse: Implications for Curation
q2MQgO87xoI 19:06 Virtual Kinship Networks
8-m-DUbrZ4U 16:44 The field research database iDAI.field 2.0
uo7uI_8yzc8 14:20 Exploratory and Comparative Analysis of Archaeological Excavation Databases
ZnFak9grHxU 22:38 Squeezing Radiocarbon Data
_UfRwbW0PlY 14:47 Exploring the movement, exchange and transformation of metal in the Eurasian Bronze & Early Iron Age
sJrQ23txNzo 15:02 Recycling Prehistory? Reality or Myth?
c1rcbrCoszc 33:38 The structure of experience: modelling landscape visual quality
qVoh5hAKoZ4 18:28 Assemblages of networks: tracing the connectivites of the medieval Icelandic farm
ofmzS3-BLaU 21:48 Bringing Sound into the Picture: Experiencing Ancient Maya Landscapes with GIS & 3D Modeling
tNcTh44s-W8 18:12 Interoperability of heterogeneous archaeological research databases
f4WHID9Uc3k 21:40 Do we have a heading for hard questions about mobile GIS in archaeology?
MjxapRhWkp8 16:30 Peripleo 2: connecting and exploring archaeological data
YwjQhUHPjFg 19:22 Mobile GIS for Large Scale Excavations
fjhJ5eG09nA 15:25 The Grand Challenge of interlinking palaeoenvironmental data and interpretations
a3iWQdTtV9A 18:51 Evaluating QField as a Mobile GIS Solution for Archaeological Survey
V8idpZZNqf0 16:43 Discovering Hidden Connectivity
494Pl217bc4 17:07 Mobile GIS in primeval woodland landscape. Case study of the Białowieża Forest surface survey
2fvkxYAS29E 16:52 Driving interdisciplinary search for collaborative studies of long-term human ecodynamics
hvhk-u0ASGE 18:55 The recent contributions of Mobile GIS in the study of flint mining
3T9chSh286c 21:32 Relating Norwegian palynological records and archaeological datasets
OZUzRvJ-API 13:15 Site Reconstruction from Partial Information
DBxPIeZHwi8 19:32 Landscapes of commerce: a spatial approach to local market systems
_m16I4jHPCo 16:01 Advanced Numerical Models for Seismic Evaluation of Masonry Heritage Monuments
oUCrEhOtppw 19:51 Past settlement structures vs modern archaeological recognition.
NSalSQSWmpM 15:44 A new methodology for the structural analysis of 3d digitized cultural heritage through FEA
Js-Q-v6Is8M 22:59 Hunter gatherer mobility, archaeological research biases, & the interpretation of settlement pattern
-b6t9UzenJs 16:29 Loessic Landscapes and Past Population’s use: a Multidisciplinary Approach
rKEbDuNyB5s 16:44 Numerical methods for understanding & quantifying crack propagation in complex masonry constructions
ilT6T__PppU 22:08 Europe's Lost Frontiers: To the Limits of Mapping and Modelling
9zp8ympjm1s 20:15 Challenges in Palaeolithic Spatial Analysis: Two Eurasian Case Studies
5dTtCM5dFUo 25:34 A 3D geo-electric resistivity approach to assess Neolithic/ Palaeolithic sites
rps1TVWy8H4 15:29 Moving Around and Settling Down – Reconstructing Palaeolithic Land Use with GIS
xBwpQ-5he-E 26:37 Paleolandscape Characterization: An integrated work
TvOniRLf9N8 20:03 Corridors or Barriers? A GIS model to classify biome distributions in the late Pleistocene Europe
RyPcRNiRI8Q 22:17 Advances in Computational Cuneiform Analysis
WeYKw4AA_U8 21:07 The Last Interglacial period and its implications for AMH dispersal: GIS-based PalaeoMap of Egypt
BH02pLYwfa0 21:24 Rebuilding the Oldest Archive in the History of Mankind in Digital Form
K05S-GqLaJI 20:26 Using Taphonomy, GIS, & Photogrammetry to reconstruct site formation & carnivore-hominin interaction
WByjjDyr2IA 16:52 Evaluating Arabias trade routes with Least-Cost Path analysis
puYObaaHKvk 13:45 Palaeo-geography of the Channel Plain & its influence on Neanderthal lithic & landscape behaviour
OjpwR3QQ_iY 14:42 The Early Mesopotamia and the Persian Gulf Research Project
MwcaQcPvbt0 13:35 Contribution of GIS in definition of human activity areas in Middle Palaeolithic
5_tURwIEy5s 21:44 The role of modern digital techniques in documenting and rehabilitating the Syrian heritage
eYUJvkSX-Z0 23:37 “Story first, technology second.” Exploring the archaeological affordances of iDocs
1pCyFTTUAWA 23:59 Reasoning on the original appearance & use of a bronze implement with 3D models
mWxELA7Yxro 18:16 VR and the death of the frame: Filmmaking in an age of immersive technology
npr0JJI17PA 13:10 Data Quality experiences within the project Corpus Nummorum Thracorum
W16FW-lygAU 23:31 SCHARP Focus: film making as an integral part of a wider community based project
CW4ErT9iONk 21:46 Participatory Data Quality Estimation Procedures
SgVIP3lF7m8 12:58 ProfileAAR – a small tool helping to rectify archaeological profiles in QGIS
dOaDNkLWqTg 20:07 Taming Ambiguity - Dealing with doubts in archaeological datasets using LOD
IgkFyD8rrnI 14:05 Numismatic Reconciliation APIs for OpenRefine
_PoxHvl81yw 16:28 Data Quality – if not initially, how to solve it later?
Fwjfp5YltaE 21:03 Hybrid Modelling Workflow for the Representation of Destroyed Heritage Monuments
-_LI9SHvZ1M 17:41 Adapting Simple Magnetic Depth Estimation Techniques to Modern Archaeo-geophysics
siVo9cyQVCE 15:15 Beyond 3D Modelling: Analysis of archaeological artefacts based on a morphing algorithm
mCkIn3LzdVg 13:59 ‘Mark the Graves’: Adapting automation for improving the delineation of graves in GPR data
oJEBIsaXOtw 13:23 Archaeology of Sicily in 3D: An interdisciplinary Italian-American collaborative research project
u8T-znmUM0I 20:02 Computer-aided object detection in archaeological geophysics: helpful tool or mirage?
9fASod9d99s 17:56 Is 3D scanning a suitable monitoring solution for supporting the lending management?
FMbztFZDUwE 21:24 The Roles of Data Fusion in the Scientific Process of Archaeological Remote Sensing
ObbWbUX6y50 14:52 Practical SfM Balancing: How Acquisition Parameters Affect Computation Time & Reconstruction Quality
s7tqSMQkGSQ 16:56 Is the whole greater than the sum of its parts? Image fusion, analysis and interpretation approaches
knQHgYRCVyg 17:44 The Application of Digital Survey Techniques to the Recording of Burials
HRNf-XHWv8c 18:21 Connecting Iron Age Neighborhoods: An Urban Case study from Kerkenes
nIxfDYJd5Ac 18:12 Lasergrammetry and high precision topography measurements to study a complex fortified building
h8K7MJtnYRE 16:21 Reading Rubbish: modelling diachronic change at Tell Sabi Abyad, Syria
BE0Ux1Hvknc 15:07 Close range photogrammetry for field documentation of the ongoing excavations
j-Oj-2g4FZU 13:53 Reconstruction without validation? Limitations of computational and quantitative settlement analysis
r2ZyyVl9YRA 17:11 Digital Object-Based Curricula: Teaching History with Underemphasized Collections
MmifDWlLKOE 17:52 The urban past through the lens of fractals and visibility
KwqJ0sO3Xl4 23:58 Immersion and the Submerged: The Scapa 100 Project
4gisFOgZzNE 21:45 Assessing the value of minimal computational models for the study of long term settlement evolution
vDSN3iYkN-A 16:56 Digital archaeology in museums: are we getting closer to matter?
bcROg9iSaio 16:57 Site definition possibilities: Features excavated along a transect
g0pBzNydFis 21:30 Virtual Reality and Storytelling for Viking Archaeology
DzJcjW5X4vg 19:02 Sharing spatial data with a 3D component as a collaborative and dissemination tool for archaeology
gqw3PNMudKM 15:54 Democratising Access to Museum Collections & Using Digital Innovation to Explore Archaeological Data
WV3h3G7E6L8 17:50 Free and open source geospatial software for re-using archaeology open data
WOTs4X5PiDw 16:47 Matrix in the Network: assemblage co-expression networks to unlock meaning in stratigraphic matrices
rCHyfwRpITU 16:19 The Arches Cultural Heritage Data Management Platform: A flexible and expandable open source system
S2wJYhthEgc 16:20 Multispectral image analysis applied to identification of archaeological buried remains
kJfBnXApfG4 17:52 CLIMA: A webGIS platform for risk assessment in cultural heritage
KTl8_q8QniY 19:23 Using Data Mining techniques to evaluate Bronze Age metallic components
0p8hRJQOsH8 22:35 Sometimes a map is not enough: challenges & lessons from developing the dataARC data interface
6hCSWxs8zdA 17:11 Computer-aided Classification of British Isles Neolithic Group VI Axes
vYI9fQ6Yv_w 20:04 Data Aggregation and Visualisation in archaeometallurgy
hoiGW65HMMg 23:56 A Model-Based Statistical Classification Analysis for Karamattepe Arrowheads
9ImyeXn6vRE 17:08 Open source solutions for Norwegian Stone Age, Chaos theory, and the ADED-project 2018-2020
-6OhfOEHhGs 15:51 Partitioning Archaeological Chaînes Opératoires on R: dealing with huge categorical datasets?
1DJ1y0-Chko 19:18 Multidimensional Data Fusion For Archaeological Research - The Isparta Archaeological Survey
iMZA2kpwuEw 18:10 Classifying vessel shapes using automated shape extraction and unsupervised classification
75y4FZ3s7Uo 27:57 Investigating Continuous Archaeological Landscapes of Northern Mesopotamia
xGPla4dZSOU 12:57 Archaeogaming as Queergaming
PFRJZjPFAxc 14:30 Analysing the effect of spatial distribution of 2 populations over their hybrids genetic composition
ydlZgf5dszY 16:40 Exploring the Mesopotamian landscape: integrating geophysics & drone-based remote sensing
6Upt4vQAc6M 21:48 Networks of Meshworks: emerging social structure and communities in Kaushi, Taiwan
H-3N1rWtQVc 26:19 Archaeological Prospection using Drone-acquired Thermal and Multispectral Imagery
ALWi89-Fr20 18:43 Viewshed network analysis of the Cochasquí site, Ecuador
z9f1WDvvvl0 19:38 Powerful Pictures: Uncovering Data in Aerial Photogrammetric Imagery
4Q4WOQxw8xg 22:57 What’s geography got to do with it? A networked, agent-based model of exchange in Polynesia
yHgTs5vSPJQ 22:46 Stereo-Satellite Imagery for Management of UNESCO World Heritage Sites in Jam and Bamiyan
FxKFjU5zsQE 17:44 Chronological Network Analysis – A new methodical approach to the chronology of the middle Neolithic
UhCQkoevMA8 20:06 Taking the Hobbits to Isengard': Testing common practices of spatial modelling in fictional worlds
VVHQZZgqeKU 18:09 Reconstruction of Old Kingdom Administration using Data Mining
nDzAkUNT8_w 17:39 Dissecting the Neolithic Dwelling Through the Application of Geostatistics Techniques
1FHVcK6T9PQ 23:58 Identifying Late Chalcolithic & Early Bronze Age Metal Communities of Anatolia
GwRSEYL9MeY 17:14 In the mind of a Roman farmer: social interaction and predictive modelling in Northern Gaul
Wr_NZEVnp14 18:42 Epidemiological Modeling and Impact Evaluation of the Antonine Plague
nrGZDynVqCg 14:26 Is 'culture' a buzzword? Ontological challenge of an interdisciplinary project
wNY48N3BVXc 16:08 Christianization of the Roman Empire: Diffusion on a Settlement Network
LyZEJwdznP8 15:20 Neanderthals on the move: An agent-based modeling approach to simulate Neanderthal migration
j-CqWH639-Y 13:59 Networks of things: mapping quantitative and qualitative variables of archaeological artifacts
UQv15w4C0gQ 23:48 Expansions – How to create links between Neanderthal behavior, ecology and environment
c0Tek3l2u5U 20:09 The application of Network Science to the study of Atlantic Rock Art
w45EJ_uZ-BA 18:19 Tool Diversity and Mobility: Deducing Neanderthal Land Use Patterns from Lithic Assemblages
YffX2BdnnvI 16:18 Network approaches to the formation of artistic communities in the Orinoco Interaction Sphere
x9fM414nYz8 15:25 Playing with Ethics: Preliminary Results of Perceptions of Archaeological Representation in Games
SffcV_cz244 19:52 Towards a conceptually-enhanced archaeological network analytic tool
rqOtm6vg_Wo 13:56 Advanced Visual Education in Archaeology using OpenSim: The Experience of the Time Maps Project
Bbec04x_peY 23:04 The Emergence of the State in Predynastic Upper Egypt: An Agent-Based Approach
5klnKixoU9o 14:06 BibNum : reflections on a systematic approach to structure & disseminate archaeological digital data
kr1D4aF5YbU 18:42 Transferring knowledge from locational predictive models into spatial Agent Based Models
busbxc28Fug 8:09 Beyond the Virtual Reconstruction of an Archaeological Settlement
6KZXfF7BWCQ 18:25 Socio-Ecological Responses to a Changing Environment: The Mid-Holocene Elm Decline
00bsvVWnmtk 12:04 Diffusion versus dispersal wave-of-advance models and Neolithic spread
ivqfF2EJ5zs 18:04 Simulating (In)experience at Sea: Building an Agent-based Model for Iron Age Channel Crossings
kdZhNSZByag 5:00 'Out of Site': Problems in Understanding Hominin Dispersal
bUPy042wrkY 21:48 Evaluating simulation platforms to describe ancient work processes
zDCVLwt6C8s 6:00 Route selection and number of exits: Quantifying “Out of Africa”
_qljxiuioDo 8:44 Predicting the Past: Computer Simulations in Archaeology
yEJFAGOMBww 7:29 No two ancient migrations are the same: constructing null models at different scales of analysis
jiYuWiueHOU 19:22 Explicit Knowledge Representation in Archaeological ABMs
41TyIgycH74 6:03 Modeling Movement on Water: Generating past mobility corridors on the sea
J5SuiXFj9sU 16:48 Simulating the past: From Virtual Reality to SocioPhysics
2BamC0h3dXQ 9:17 Automating heritage reporting tasks with R
ToA3k6m7EEo 13:16 Agents, networks and complexity - an introduction to the session
xPo1yyVAcMA 8:30 Agent-based modelling for archaeology classes: sampling
j9qSag309Zk 15:48 Detection of Bomb Craters in WW2 Aerial Images Using Convolutional Neural Nets
K3OSAuDQSVw 14:14 Hypothesis modelling in R, using shared data
qEbOP32TveU 16:06 The use of Convolutional Neural Networks in the automated detection of archaeological objects
jHJWy7smDuQ 19:42 Defining archaeological Site Exploitation Territories using the open source statistical language R
yHjnJslk_8g 13:22 Semi-automatic mapping of cultural heritage in Arran, Scotland, using deep neural networks
sRWFD7nD1hY 10:30 EDIT DISTANCE - Software tool for analysing epigraphic data
snA57BXyTJs 15:56 Archaeological Object Detection in Airborne Laser Scanning Data Using Convolutional Neural Networks
yRPJmPdBIfQ 14:46 Towards 3D modelling as a replicable and intellectually transparent process
6u_nyH2f-CE 16:47 Extraction of linear structures from LIDAR images using a machine learning approach
h9KE982DCE4 8:55 Standalone Photoscan VS Photoscan Cluster Processing
urrL0wjqpZU 17:13 Semi-automatic detection & extraction of complex burial monuments in Arabia
bDpGxtLhGmc 13:49 The Big Problem with Big Data: automating social media harvesting
Eeac71tkZ4s 17:59 LiDAR-based automated detection of cultural heritage in Westphalia
DV7_7kZ2XHg 16:18 Not all data are born digital: Workflows to facilitate data integration & rapid 3D visualization
OjEWxlFhiNM 18:04 Computational classification in archaeology - an introduction
Q3N1BRLZVDU 20:03 New insights from the historical events in Nydam by 3D-GIS
Hd5ujceIZd8 18:02 From the Macro to the Micro; Digital shipwreck datasets
yGDMyqFvXqU 22:38 Bootstrapping data processes within the arts: creative Informatics
5jMXT-MccsQ 12:30 Monitoring protocol for the preservation conditions of the barge Arles Rhône 3 (France)
Ta12v70KqnQ 21:24 Women and data: data activism as research method and impact
OFp7ntNdk0U 24:31 Monitoring concept for deformation estimation of the Bremen Cog
ed3yj7jHYZQ 24:05 Researching heritage on social media fields: complex designs and mixed methods approaches
EjTypwgkQNA 24:38 Reconstructed one more time - The Bremen-Ship
mVvS-DhWfEo 21:28 Dollar$ and value in heritage: what people want on eBay
3stKWsPxR1o 15:50 Dirty Dishes for the WIn: Old museum collections as a source for new chemical analyses
mdlb1YUbnkQ 22:29 Collecting, Knowing and Governing the mood of "Britian's Natives" Big data, then and now
81z_Wtbz-A4 16:35 Digging in excavation diaries: digital re-assessment of stratigraphy in 3D GIS
Mh7EhhRZK2g 23:11 The UK Web Archive: challenges, opportunities and issues in collecting the UK Web
usAZ5qPWCSs 15:13 Assessing the value of legacy pre-digital landscape and survey data
PR1YReZmzwY 21:28 The National Library of Scotland’s goal to deliver 30 million collection items as data
MS8YgT74_DE 19:17 A GIS procedure to study settlement patterns from site-based survey datasets
O__7AMNmoWE 22:31 Dark archive: the case of born-digital records in the Carcanet Press collection
JBsWPsbHHyk 12:02 Synthesizing old excavation records and new archaeo-metallurgical data
ToXJfG5SF80 25:50 The Arts API Project: insights from exploring data and networks in arts organisations
htFw811CIiQ 17:23 Legacies Ancient and Modern: Hybrid Approaches to Digital Presentation of Legacy Data
2sWpw8MIDDA 51:14 Community Data Science meets Digital Heritage: Controversies about World Heritage Sites in Wikipedia
aN697JKNYv8 15:37 The Big Data Challenge. Integrative Big Data Approaches towards a Hybrid Archaeology
KcpgTqZOXgA 14:00 Introduction to Digital Heritage in a World of Big Data
gGvE0YgHeEQ 15:30 Utilising Text Mining to Unlock the Hidden Knowledge in Dutch Archaeological Reports
CM_GVgDISLY 54:31 Repurposing Social Media for Social & Cultural Research? SEVEN CRITIQUES
29wO4U98ikg 11:08 Reconstructing excavations ? Photogrammetry on 1980's Photos
6LoC80yxPy0 12:35 Geophysical Survey & Planning - a consultant’s sop or vital tool in the Armoury
tjcsfd_uPnY 17:15 Getting the Measure of Brochs: Using survey records old and new to investigate Shetland’s Iron Age
jP6mAInu_ds 10:23 Using Geophysical Survey Results During Active Commercial Site Investigations
amzRdMcFZRE 12:20 Bad Photogrammetry: Using Nonoptimal or Archived Photographs for Constructing 3D Models
zWtBwrIxAqQ 9:41 ‘New dog- Old tricks?’ Training in Action- Geophysical Training in Tunisia
DfhM61dN14s 17:36 Viability of Production and Implementation of Retrospective Photogrammetry in Archaeology
kV-MSVYBsF0 10:42 Who Regulates Professional Standards in Archaeological Geophysics?
7OlvPC9v98o 37:48 What makes the Ideal Archaeologist? & A Chat with Mark Spanjer
PieQWbNrV9E 12:42 Logical Representation of Plurality
CVZcR0LY3bw 8:12 Introduction: Geophysics: the wider context
c0gN6JHIV_o 11:58 Archaeological geophysics - a digital 'Dark Age'
VeaZvpjBrnA 15:23 An experiment in multi-user linked system for the co-creation of environmental reconstruction
2_HPIeTerAI 13:01 Magnetometer Data Display and Archiving on Large Infrastructure Projects
cyUFv9iHigM 11:21 A Computational Decipherment of Linear B
6TT5c3Dmr8o 11:00 From hectares to square kilometres; Lessons learned from large scale infrastructure projects
p_5UhHBBzEU 14:37 “Not Just a Pretty Picture”: Interpretive Visualisation as Design Practice in Archaeology
eEhBPgSa0Qg 11:30 Prospective Alternatives: Assessing Low Frequency Electromagnetic Survey
upVDxStCACs 14:24 Digital Creativity or Digital Dark Age?
htyCp1SsYe0 13:53 The use of high density GPR arrays for large area geophysical survey
ftIWChfJYLg 9:05 Introduction: Archaeological geophysics: Why aren’t we doing it like this?
TBWfZT-ijj0 22:45 Assembling an Early Medieval Cosmic Frontier on the North Sea Coast of England
msKmtnCclbQ 14:17 Metal detecting and local authority archaeology services
B8TDustJhxA 18:04 Indigenous Landscape Transformations on the First Colonized Region in the Caribbean
8SZ5qoJAkhI 18:46 Advocating a more archaeologically minded approach to hobby metal-detecting
YZAiyQwn1qo 11:51 The Dramatized Landscape: Ritual performances and Topoanalysis of a Minoan peak sanctuary in Crete
VNcQb44MiKA 22:42 Urban Terrorscapes? The Case of Pretoria, Seat of Apartheid
mOUlFpxcwuk 19:44 The Current State of Hobbyist Metal Detecting in Scotland - Where do we go from here?
GJaOv5IFDrI 18:47 Do Landscapes Move?
aQI0SXB-ItA 21:01 Structured, supervised metal detecting surveys as technique for investigating
hcB83tBDtwc 11:54 Animals and Activity areas: Integrating Faunal, Spatial and Geochemical Analysis
KEUDRy4fQyk 12:57 Where to detect? A review: metal detector surveys on developer-funded investigations
koRShuKx83E 8:43 Curious Case of Scottish Crannogology
lzuVcnh9B-4 10:01 Theatre in Heritage. Facilitating engagement with environmental and archaeological Issues
xB4eN-iRTcs 11:16 The Power of Plants: Using Palaeo-Ecology to Rethink Human-Environment Relationships
iNLxpwJGHQI 16:31 Historic Landscape Characterisation as a climate change vulnerability assessment tool
K5bjfpyAPh0 12:33 The Mesolithic Body: Articulating Science and Theory
tAeu6eZiJAA 20:28 Archive Artefacts at Work
9Fv0HiDeOeM 11:45 Approaching Hominin Healthcare
NSy_fag7pi4 32:55 Building Benefit: the value of closer integration with construction
sr2kRkiCiT0 11:16 Accessing the Individual: Genetic Relatedness and Identity
MTel0sLVy0g 14:33 Developing projects with social impacts
9buV4-SJCP8 10:53 The ‘Toolbox’ Paradigm
m7djVqB7s10 20:03 Wellbeing and the Historic Environment: what now?
y-S-g030PIE 21:09 Operation Nightingale: Working Towards a Standard Model
DlRczJYE2bA 15:31 Archaeology supporting Mental Health and well-being in London: Lessons from earlier projects
MSID0WmdDLA 12:59 Using Cheese-making to start Dialogue on the Relationship between Theory and Science
yDS1a7kYnsk 17:37 A Band of Brothers at Bullecourt: an outsiders view of a century long military bond
Ds246U3m41Q 11:56 Recording Archaeological Senses in Subterranean Environments
YAVFJIgHTFQ 12:00 The Dis/Advantages and Advantages of Enabled Archaeological Holistic Fieldwork
X-NSSVWmv_0 7:28 Archaeology Stinks! Can we find Smell in Archaeology?
xRZKMu6iwT0 21:18 Marine Operation Nightingale & HMS Montagu – achieving heritage protection & therapeutic outcomes
ig9vuCuR8do 10:12 Experimental Archaeology: A Conceptual Bridge?
k1jOsuAhxlE 15:36 Collaborating on the Coast: Making Heritage for the Future at Orford Ness
HIeF4fgRbhY 10:04 Peel Hill Thorne: Prescribing the Motte
kQ7yYozX0Ls 17:06 Bringing together Lessons Learned from Community Comics Projects in Wales and Micronesia
GhG26aOqp6U 27:18 Taking a developer's vision back in history
sTlZoMSLIkk 14:58 Public Archaeology at Bryn Celli Ddu: Sharing Prehistory
t_jyWSauXDc 21:03 Making connections between place, purpose and content
qLwG19sCr1w 16:56 Tintagel and the Kingdom of Heaven: Mythology & The Republic of the Soul
AV3ODnMp9PE 10:57 What came first, the trowel or the pen?
WgcZqpH3bqs 15:32 Audley End, Artefact Biography and the English Country House
wAbjw74Coik 8:52 Putting theory into practice
rS7zSU_COkQ 16:25 Archaeological Embroideries: Their Post-Excavation Journeys
DplorWzcZpI 24:39 Caring for Brodsworth: an impact case study of a conservation in action project
nrWWD2yZtlc 14:59 Gender Bias: from Discovery to Display
abVSOKU8MYo 18:23 Theories of change - for everyday!
6X9Z98xn7uY 18:27 Finds Processing: A Community vs. Commercial Perspective
re1HFJ5e0tI 16:28 Big Data – Does Bias Matter?
52iFVgdAwlc 15:47 From Hills to Sea. Flooding and the historic environment in the North of England
7cT_L3pSjJU 13:10 Dissertations and Detecting: Using PAS Material for Further Analysis
u4t1IFPe_dc 15:47 Managing the positive effects of oceanic climate change on underwater cultural heritage
8YNkBu7wj8I 30:28 Whose Identity Are We Talking About? The Imperial Melting Pot in Cheshire
InfEzncqiFo 14:53 Climate change: Values, Benefits and Legacies. The value of cultural heritage in climate change
ZG41g16WZWo 19:01 ‘Quick, someone call the archaeologists!’ A Provocation
EZk6SVS-ypA 16:45 Adapting to Climate Change. A Positive Legacy for Scotland’s historic environment.
OdmswBn1-KM 35:56 The Actuality of the Past: Experiences of an Archaeologist in Silicon Valley
Ce8Ay47pZAk 19:57 A Sector Adaptation Plan for Wales: incorporating positive values
SukpHT2VPSA 16:50 Lighting Fires: The Potential for Archaeological Interpreters to Influence the Next Generation
sVEdxUZdoTc 14:38 #ArchiveLottery – a different kind of digital engagement
Sc5tzR3LSvo 23:12 Art as a Creative Way to Deal with the ‘Museum of Lies’
6VdR0S3JtkU 13:08 Reconnecting with the River: Two cases studies of engagement through artefacts
0b7nz7-_LuU 30:28 Whose Identity Are We Talking About? The Imperial Melting Pot in Cheshire
CHj-52lEnUI 28:26 Small finds, big impact: volunteer empowerment in the Portable Antiquities Scheme
h7cEyI54DjI 17:57 “Through hollow lands and hilly lands”… Moving on and around Neolithic Mendip
lNW78Rbutww 14:34 Art, Fermented: Comparative Experimentation in Medieval Brewing
qgHOmE33CAM 26:57 Your DIG - Working Towards a Model of Participatory Interpretation
DdJ7PUbg3TE 15:39 Negotiating Creativity in Acoustic Heritage
68Nii9MlLnQ 15:47 Decolonising our approach to archaeological community engagement
daeN2pBbSF0 15:03 Engaging with the Ancient Cultural Landscape through Technical Creativity & 'Internet of Things'
YAqxtYQKmWw 19:58 Work Digital / Think Archive
BiNGc8X7cSw 13:35 When the Artist Outperforms the Archaeologist
doGk7keDbwQ 12:54 'But it's not FAIR!' Making data findable, accessible, interoperable and reusable
dRyxvNqxcz0 17:42 A Case for the Embedded yet Autonomous Artist: Lessons Learned on The Pallasboy Project
yMRCCm-v-oA 10:57 Introduction to Metadata Templates
AUurbJ-eDmI 15:26 Found Sculpture: Negotiating the Art and Archaeology of a Buried Skateboard Park
Oy1kHpISgA0 13:51 What did Cheddar Man look like and Why does it matter?
x3ODdVvRm4w 16:18 It’s all in the Question: Exploring our legacy of engagement in the Yorkshire Wolds
_mH5JQgELUw 14:22 Dig Greater Manchester
8RYf7bFPqIY 13:24 Seeming and being are not one and the same
w2AFEaUaE6Y 18:23 'Community Archaeology' Projects and Legacies: A case study from Nottingham, 2014-2018
_f5UBzBRABk 15:22 Notes of, Notes on, Footnotes
MrKk566TKm0 29:08 Maximising the legacy of commercial submerged landscape investigations
QmBOHJZBmOw 19:33 Bootham Crescent: Sharing Memories, Shaping Place
4f7LjaK9YXE 15:23 Hadrian’s Wall and Frontier Identities across Time
9Jr5uTm-9aU 11:07 Museums and Place-making
KmbFv3Vvk_g 17:40 Life on the Danubian Frontier 7000 Years Ago
4_zAKMpyJ2k 17:07 Lessons from the Past: The Cambourne Village College Young Roots Project
7zl884p8GGk 28:44 Belford’s Divergence: or is ‘Industrial Archaeology’ Relevant in an AONB?
YSwEPTYmakA 16:55 The Sherford Community, Old and New: Changing client’s attitudes to community engagement
3jTGpXDw3mg 23:51 Industrial Archaeology or Railway Anthropology?
_yoXCNtQckg 14:36 Look after your denarii: the benefits of object first aid training for field staff
AHLueY9JWBk 26:40 How do you Define Heritage in Fast Moving Fields such as Telecommunications?
1FmWxaveZX0 7:16 Of Plagues and Mummies: Chalk, lime and gypsum deposits in Roman burial practices
cli7UcOyXIA 18:34 OGS Crawford’s Feet: Movements through the Archaeological Site and Archive
2pnDxU6H-Nw 14:14 After Excavation: Maintaining research potential of archaeological bone
UmqxvPlNTuo 18:49 Positive Past, Present and Future Changes in Archaeology
eQEQwS7Auxk 11:43 The Shefton Archive: Enhancing a Collection’s History through Object Biographies
dN4dmcMsp28 14:32 Addressing Important Issues of Change: Creating an Equal and Diverse Archaeological Discipline
OUk1mBm5zx0 15:58 My research has gone to pieces! What destruction of metalwork can tell us about Bronze Age society
mghsuZre12k 27:36 The Role of Archaeology and Heritage in the Promotion of Recovery to Veterans
LTI5wqt0EUQ 17:21 Managing interpretation on HMS Victory
rfVLOQ_ZzCQ 14:16 Religion on the Frontier: Identity and Ritual Adaptations after the Anglo-Saxon migration
_rzYnRo-3SY 16:15 Dead Man's Chest: Historic Environment Data Archive Centres and MEDIN
dgDohTvOdNg 21:35 What we leave behind: establishing value and building a sustainable legacy
BJnnz_CYxPI 20:28 Constructing frontier identities in the face of Roman imperialism
tbyUz_QQmX4 20:55 Making a Great Place: How the Creative Arts can enhance the Heritage experience.
Ly92g-5j0VA 20:48 Investigating Frontier Identity in Roman Cheshire
u7xHfA1PI5k 15:37 Drawing on the coast – art, archaeology and future legacies
9ymmDhEHHyE 28:09 The Wider Impact and Relevance of Industrial Archaeology in the Social Sphere
J-CGm1Zec5M 16:41 Creating Archaeology: practice, process, purpose.
RddhIMGJHhM 26:13 ‘What’s in a Name?’ – Concepts, Practice and Prejudice in Industrial Archaeology
emO5-3YjkXM 17:09 Rethinking the perception of magic and rituals in archaeological contexts
hui3q-vaipA 24:35 Funky Archaeology – The Legacy of Industrial Buildings in the 20th Century.
vFiK4nQ4-Ls 20:08 From Find to Mind: how can we transform archaeology into cultural capital
mMHhZKyQow4 21:15 ‘Dig Society’: Putting the Community into Community Archaeology
JEKxuHreFLE 14:24 Motor Launch M.L. 286-A Movy for All Time
HtYR0BqVkZU 13:18 Inspiring and experiencing at the London Mithraeum
yvhc8dZnSfg 19:11 Can (and Should) Participative Public Archaeology Tackle Social Disadvantage?
0muUsVUZ3MU 51:43 Offshore Legacies: are we making the most of the marine development dividend?
WWaEOTuoaWs 10:18 Volunteering for All at Birmingham Museums Trust
8AGz9BjA5l4 10:22 Introduction to Offshore Development: Creating a Legacy for Marine Archaeology
Uud6nWAZ4tE 12:58 VIA Culture: Recording Cardiff’s Religious Landscapes for Social Inclusion
FyzdXwecHFE 18:15 Where the wind blows: A Curators Perspective on the public benefit from offshore wind developments
bWcmnoDtK_o 20:33 The CAER Heritage Project: Co-production with Disadvantaged Communities
dFvflleX0do 17:41 Creating Heritage Projects for People: Archaeology Scotland Social Impact Programme
Px3IKskbfXU 8:57 Archaeology for Change: Introduction
-u1uckWdeTg 19:27 Shifting Baselines of the British Hare Goddess(es)?
74YXTq7L0I8 16:47 Dead Dogs are so 9th Century
53fzHOSrkE8 24:08 Birds of Battle? Myths and Materialities of Eagles and Ravens in the Old Norse World
nAHrSGmGkqo 20:37 The Birds of the Manx Crosses
80pZGtOYs-A 20:35 The Oswestry Heritage Comics: Bringing the Local Past Home
bepRbkmTMCs 25:59 Prehistory to Primary Schools
zGZMwS03ea8 22:42 Secret Identity – Community Comics and Cultural Identity
7qmOWToRmJw 14:55 Roundtrip Stories: Thoughts and Experiences on Spanish Colonialism in Central Mexico
2zlVq4EJVus 16:00 From Sugar Palaces to Colonial Fortresses: discussing the heritage of Dutch Brazil
YInJsPLB4bY 14:11 'Good Intentions' are not enough: Searching the Many Faces of Colonialism in Mass Media
yD4_BqRojBs 12:27 Dismantling the Persistent Structures of Colonialism in Archaeology and Heritage Management
-VpcSiYLLlI 19:24 Roman West Cheshire: Disentangling Complex Landscapes
2GNSLHMNBGw 21:25 “Few and the Most Depraved of their Sex”: Queering Regency Female Reformers
_NpcloH1kUI 19:50 The Things we Hold Queer(ed): Questioning the Ownership of Viking Loot
DOIrznAZfpQ 12:35 Creating an Archaeogaming Zine: A Queer Public Archaeology?
f0YgRSWOHbA 18:42 Unpicking the Stitches in Time, or being Charlotte Sometimes
xAnLMMLMgXQ 12:07 Haunted Futures and Alien Archaeologies
TUPakFkv0Kc 16:24 Pausanias, Modern Folklore, and Literal Ghosts of Place
mavV-CwuAq4 14:53 Alan Garner, Archaeologists, and the Fearful Art of Storytelling
NI967cI1O8A 18:20 Exploring a Relational Approach to Mesolithic Fishing
cOPn7Qis9wQ 16:01 The Sculptor's Cave: Virtual Acoustics, Field Recording and Composing the Sounds of Place
sBIPJDXtYiY 16:23 Notes on the "Musical Archive"
laXZG1Qm3so 15:24 Manchester’s Improving Daily
s6dfs2SCh0Q 15:39 Guardians of Runes and Makers of Memories
-Pz-mf1gjB8 14:07 Memory and Place in Songwriting and Production: The Magnetic North
CFMp_ETVMgU 14:46 Where You Are, There You Are: Relating Ruin Experience with the Creative Process
Zm8n3rUzq6w 15:01 Remediating the Mythical: Heritage Culture & Artists-as-Intermediaries
mWf3Mm5pm0w 14:23 “It’s got bells on”: Space and Place in English Morris Dance
Fs75ItoRQg8 15:51 The Northern Anxiety of Terveet Kädet: From Global Buzz to Unknown Local Heritage
-wYQwxtjH3M 17:37 The Phallus in the Closet: Boundary Objects and the Movements of Classification
VujgUBvSf3c 13:18 Lithics, Books and the Embodiment of Prehistory? Mesolithic-Neolithic Transition of Britain
RvKVyhMHL18 15:28 Troublesome Cultural Heritage on the Move
sTfCtKufJ8k 13:30 Locating Micro-Histories in Background Movements
lxmDmtnelJ0 15:22 Moving and Mapping Images: Aerial Photographs, Cropmarks and Movement
9MiQ2sxSsHE 19:22 My Brilliant Friends: Biography and Archaeology, Theory and Practice
byv2lXnwd-E 21:58 Intersectionality: A Useful Category for the Historical Analysis of Oppressed Communities?
VZf3cqbFNNc 25:19 Dreams, Realities and Deleuze: Achieving Equality and Diversity in Archaeology
W4Vg1jiyfDE 25:18 Trowelblazers: Bedtime Stories and Radical Manifestoes for Feminist Archaeologists
A1fT8922r5o 27:29 Ten years of British Women Archaeologists – Was it Worth it?
wQTOU_MH79A 25:03 Roman Scotland: The Undiscovered Country?
bVo0yd7YIfY 29:04 The Western Frontier of Britannia: An Assemblage?
Dh9wDeYHwdI 26:48 Whither Roman Scotland?
ztTJuKXS7Fs 18:31 Recycling Richborough: Living on the fringes in the 4th - 5th century
ZG-a6Ty-q9k 19:40 Applying Plessner's Eccentric Positionality to Virtual Roman Frontiers
dDY7PClSarg 16:35 To Infinity and Beyond! A Social History of Frontier Theory
_96I9ODe9bQ 18:44 Not Any Old Iron, or an Axe for Every Occassion?
HvqGmEoobdc 12:44 The Influence of the Modern Idea of Progress in Historical Studies
_Q09WYLww5s 15:27 Killing off the Beaker Folk, again
PgzktDuZKhg 16:07 Hengeland: The Results of Multimodal Geophysical Surveys
C8USMvoZ_aM 17:02 Timing the M/LPPNB Transition
4KzRFG_lxXE 28:16 Transition or Revolution? Rethinking the South African Earlier-Middle Stone Age
bjB2LyVGEso 17:18 When the Virtual becomes Actual: Indigenous Ontologies within Immersive Reality Environments
guU7a7P_gVg 20:36 Animism and Patterns of Economic Activity in the European Mesolithic
3_UUl2XTTNo 17:03 Hunting Aurochs and the Making of a Significant Place
gM1opHhYyG4 18:19 Mutual Becomings in Life and Death: Human and Non-Human Animals in the Mesolithic Danube Gorges
GMBYtvVeG9E 16:23 Once Upon a Time in the Arctic...
NLUS3VBLHCA 18:13 Relationality and Early Hominin Hunter-Gatherer Worlds: A Relational Exploration of Neanderthal Art
VdusW_2Bi8g 15:30 More than a Bead: A Relational Approach for Studying Palaeolithic Personal Ornaments
aOrhIuqxYf8 18:24 Introduction: A Relational Retrospective
er7cyjv3KQw 16:54 Climate Change as Human Experience
_rXKtWNtcA0 16:00 Things Worth Telling: Considering narrative storytelling in environmental archaeology
W2Ox_6XnWuA 17:26 ‘Narrativizing Science’: Ecocriticism and peatland archaeology
bzLLgbEzkik 36:00 The ruins of the Sacred City: Alternative indigeneity in the other-history of Quilmes
V0euGHx-udI 21:26 Tracing the Mirage of the Near East: Saracens, Barbarians, Turks, Moors and Arabs
-LSiPe1ElPQ 23:19 ‘Indigeneity’ and ‘Endemicity’ in an Environmental Archaeology Narrative: A Philippine case
7VRksHhhVcc 21:58 On Cultures
YXNRCCnZxco 15:10 Apologhìa for Chronology: An appraisal of chronology as a multi-layered problem
C_cmiZdVRxQ 20:01 Some implications of ‘compound temporality’ for archaeological narratives
ZxJZRfWtjwA 21:55 Duration, Endurance, and Clumps of Ongoingness
qrK1bqKxUz0 20:51 Telling Time, Tide and Tomb
rxCS42jdzKM 21:48 Time Signatures: Bayes and the British Neolithic
yPrLRS5Tygg 15:55 In an Instant: Thoughts on an archaeological philosophy of time
HitQ3_H7qrM 22:55 Towards a hybrid approach in understanding long-term histories of caves and rock shelters
NiYuqsM9Nq4 20:08 Human Nature Plus Bias Persistence Equals an Obscure Fifth Century
toYUdQuc__Q 18:14 Is the Fifth-century Fault-line a Hallucination?
WSrRzgfgX7k 18:55 Days of Future Pasts: Material memories in past societies
UaLdcjNhdIg 14:25 Digital Interactive Visualisation of Archaeological Sites: A case study from Bronze Age Cyprus
5VVxWKd1Dh8 13:15 How analysis of DTM (Digital Terrain Model) of forest areas can boost archaeological surface survey
mCggvNv256E 17:21 To See or Not to See: Computing and sensing Atlantic art’s (in)visibility
pL3sowZtDdQ 17:30 Visualization, Depiction and Interpretation: An ongoing conversation about engaging with landscape
ABR5QNujEYg 17:53 Visualizing Prehistoric People in Japan
9ioVD0DXkro 16:03 A Critical Review of Visual Media in Artefact Shape Analysis
1C9iqE8HuNk 22:23 Hopes, Fears and Eating Cake: Brexit in the fifth century?
d13tRoc4S0U 19:55 Romans, Britons or Anglo-Saxons in Fifth Century Britain: How do we know, why should we care?
rkXWDe80VWA 23:22 Britain and the Transformation of the Roman World: Rethinking rupture, ideology, and time
6vGjdD22RbM 20:19 Time and the Fifth Century
M4Qcrsfkcl0 23:32 About the problematic usability of a nonoperational term for describing deviant prehistoric burials
ni-Cnoeizf4 34:22 Stealing Women's Clothes: Patriarchal appropriation of women's mysteries
WzSNSWEs08M 22:05 Tasting the Sweetness of Death: A timeless morality in dark shamanism?
QIPCCL-MSsw 16:52 Art and Shamanism: From cave painting to the White Cube
MAh8A8ZucUU 22:07 Multitasking aspects of shamanic practice among recent Neolithic societies in Melanesia
8XhgetM5ApU 22:20 Excavating Shamanic Objects at the Nunalleq Site Near the Village of Quinhagak, Alaska
ro_mrXl8NnQ 20:18 A geoarchaeological approach to selected issues in Norwegian archaeological geophysical prospection
c1ngJPRabmE 15:21 Peace negotiations in progress in Cyprus and prospects for protecting abandoned built heritage
bQsl9Mw5frE 19:07 Where are the Mudbricks? A Geoarchaeological Analysis of Minoan Earthen Architecture
XPx8J3vCMcg 22:42 Post-ex specialist assessments: the good, the bad and the ugly
S2eOOQN0Zwk 17:01 Site Development and Utilization in Japan and the UK
7TfBlodAEvw 17:50 Digital Experimentation and Developing Innovative Digital Tools for Global Engagement in Archaeology
nuK8LCMLShY 18:27 Treasured possessions? Heirlooms and antiquities in Medieval coin hoards, AD c.1000- 1550
NBV6MZIZj6A 21:04 Globalizing Caistor Roman Town: Challenges and approaches
3brwfcNKpsw 18:44 Global Perspectives on British Archaeology
aqE0gXX26gk 17:03 The Reuse of ‘Antiques’ in Anglo-Saxon Graves
2WPNZMaKDWo 21:04 The Antique Antique?
BMSXnbkpKqo 17:42 Fragmentation and Reassembly in the Iron Age: Tracing the biographies of heirloom objects
Tcj8qvj6Nzo 17:47 'Multi-period' Hoards from the Late Bronze Age and Iron Age in Southern Britain
RYN0QAH78ko 21:37 Becoming Urban? Actors and social identity in a Medieval Scandinavian town (c. 1100–1300 AD)
xXMYzZcd8c8 20:18 Textual Worlds, Material Worlds
Ik9Z2S28dwM 22:17 Late Medieval Books and their Fittings: A material culture study
POX-4FhqZGE 17:30 Love Sex Magic in Medieval Europe: The archaeological evidence
uARcZmvH3dk 19:48 Close to Home or Far Away? Exploring identity in early Medieval Suffolk
nFPmaU4VMgI 17:37 Creating Communities and a Sense of Place in Medieval South Wales?
5g-a1ya6RcY 16:21 Society and Personhood: Homer in (several) Iron Ages
ElYGEzVW3l4 15:14 Celtic Art in Britain and the Continent: An archival approach to understanding knowledge production
an8kvUb3RdU 19:31 Hillfort Communities in Early Iron Age Europe
P1P8ci9gwFU 15:36 Feasting, Deposition and the Dead: Social change and social integration
9k7mZoUmp3c 17:20 Unpacking the Term ‘Dolmen’ Around the Black Sea Coast
iJiHhyDNNP0 19:38 Exhibiting Failure
IyiDcR_XXX4 27:20 Let it Go: Loss is good for us
n_J72KLjk6A 25:01 Failure in the Face of Climate Change
kchaqeJMNaU 15:21 The Failure of Commercial Archaeology in the UK – Can it be fixed?
T6_W3Y_6J8E 14:14 What Price is Failure?
kztR7ENWAnQ 21:01 Failure: You’re doing it wrong
OLgXwx9A8JU 15:52 Navigating the Interpretative Dilemma: Making progress through failed analogies
6ZFOP_I3arM 18:01 Failure is not Fatal: It’s the silicosis that will kill you
-nG2K5vArWg 16:08 Theorising Value: Not for the faint-hearted!
QXRcuWYdBPw 16:58 From Place to Landscape in Heritage Discourse
rY0t3DCoGe4 21:26 From Grateful Memories to Eloquent Witnesses; War memorials in the heritage process
MUcV5jVwGK4 21:33 Using Archaeology to Understand Inequality in England Over the Last Millennium
I9Ilnqsu8o4 24:55 EVERYTHING IS AWESOME: How the LEGO movie helps me reconcile heritage practice, philosophy & theory
Bc0ysKgCDaI 25:13 Heritage Values, Where are we Now? An institutional perspective
ALfkQihu_GU 19:09 Museums and Middle Eastern Communities: Promoting well-being, memory and creative practice
3hAF0OmcRho 19:11 Human Henge: Stonehenge as a healing environment in the 21st century
2VrGe1qupUo 18:15 Environment, Nature, Nurture: The site of St. Wulstan’s Hospital, Malvern Wells, Worcestershire
Uow1FIj92yM 21:24 Archaeology and Mental Health: War Memorials Survey – Ceredigion
evZceroOlvQ 19:14 The Roman Baths: A place of recovery
1FdC0PCkEC8 19:29 Messing About on the River: Volunteering and well-being on the Thames Foreshore
rJJIJpdZ8pw 17:40 ‘Heaven Is a Place Where Nothing Ever Happens’: Exploring heritage and well-being in a seaside town
u7SV7E01P_g 13:44 Therapeutic Landscapes of Prehistory
zHGGOWergik 11:54 Walking with Intent: Culture therapy in historic landscapes
kErBzeIRe8U 12:05 Gifts from the Wrath of God: The reanimation of submerged prehistoric forests
_GL8EFo8WG8 14:20 Cornwall’s Romano-British ‘Cottage Industry’
m0Fwix3fOos 14:25 We Do Not Sow: Hunter-gatherer coastal communities on the eve of the Mesolithic-Neolithic transition
9xxoapFWSqY 22:59 3D Digital Documentation in Archaeological Conservation: Revolution or evolution?
8A7z078TFWo 20:20 Articulating Discovery: Experience from the Neolithic site of Drenovac
B2Ep-Qzwlrg 19:48 Does context change impact our phenomenological experience and ability to create agency?
HOYr6h9Q5kM 16:09 Conservation of Saruq Al Hadid (UAE): Objects as a Key for Archaeological Interpretation
0t4aja1KUaw 20:32 The paintings from Neolithic Çatalhöyük and the Delicate Balance Between Research & Conservation
8kKNaqIk6ew 15:07 Torque of the Town: Conserving the world’s largest Iron Age coin hoard
NO9DfuwIiEY 21:08 Chap with the Wings... Aldbourne, Science Fiction and Archaeology
1Zwic0OXkfc 26:50 ‘Dream Not of Today’: Archaeology in Star Trek: The Next Generation
vfxf7dIpgLs 13:34 Inverted Worlds: Where archaeology and science fiction meet
UF3159GiTUc 17:14 Ballard in the Bronze Age? Writing otherness in past and future narratives
0xk3b01j_aE 18:51 Archaeologies of a Future That Never Happened
DLGUVKH1OdI 26:16 On Most Ancient Earth: The narrative role of stratigraphy and deep time in science fiction
5VvT4hGfLi4 23:00 Speculative Pasts: Archaeology, alternate history, and excavating trauma
xIto2VQd1RQ 13:02 The Power: Speculating on the female future of the past
8J7K3f-wttI 20:41 Do Humans Dream of Analogue Sheep? The construction of memories in SF and archaeology
4NbNoSUrn2g 22:07 ‘A Veritable Collection of Erotomaniacs’: Archaeology, heritage and the post-apocalyptic museum
0mzHJrNi8JE 18:41 The End of Eternity: The future of the past as a resource
mKa7XiTY920 11:46 Against Instance: Proposing a radical epistemology of times
l7vr1UYlOFM 26:14 Times the Living Make the Dead Live
JzR9awimjf0 25:34 Hourglass Dawns: The becoming of time as space, contemporary post-phenomenological philosophy
sqLIM_c5sfM 18:07 Postphenomenology and Time
8tCpQAwTafQ 15:40 Materiality of Time and Temporality of Place
1NeBHrOmluw 19:49 Religious Liminality: Hybridized ritual formation in Post-Roman Britain
5Ngp8ok6UYA 18:20 Cash Cow: Transitional economies challenging hybridity in late prehistoric-early Medieval Ireland
sq3w6nZHDOw 15:16 Broaching the Subject: Hybridised cultures behind the Bird and Sandal fibulae from northern Britain
IJECiLRB3iw 13:43 Timing Death: Questioning the chronology of Romano- British figural funerary reliefs
ahgdg7K5O2k 23:48 How Long Does It Take To Be Local?: the Foreigner-Local Threshold
oi2-Pkm5KSw 16:57 Iconography, Hybrid Art and Self-Portrait in H.D.’s Helen in Egypt
4XEiprkHXqQ 18:34 Scribe and Scripture: Poets’ experience of a sacred Medieval landscape
HyiTsqO4DqI 18:46 Canalchemy: A collaborative walking performance series along the Glamorganshire Canal
fbKcKn8ZhxY 17:03 At the Traverse of the Wall: Archaeological transformations in Thomas Percy and David Jones
0v-hb7Hlwyo 15:46 Burial and Poetry: Exploring the limits of a metaphor
VfiKhAzUd6g 13:59 In Cimmerian Darkness: An archaeological reading of J.H. Prynne
6tAhwDlQmBw 16:41 "Of course we're safe, there's a little shop" Collecting & Curating Pop Culture Merchandise
HNfPyNW0e4s 16:19 A Hitchhiker's (brief) Guide to the Ontology of the Digitisation of Archaeology
3LQ4OInVvUI 20:07 Anticipating the future of building information modelling & archaeological practice
wQeYugnQ_po 21:11 The Gold-plated Dinosaur: What can we do to improve the public’s idea of archaeology?
EMGiGCkzcMg 16:09 Worlds.net – The Digital Ruins of an Online Chatroom
M66QFbjCY08 17:54 From Myth to Taskscape: Animals in time and space in the ancient Nile Valley
mZkxBt9tNrQ 16:36 Doing Time: Ontogenesis, causality, and the life-matter predicament
1fNwq1O2C1g 15:56 Don’t Walk That Way! Why heritage sites need psychogeography
IaBw_gVreb8 21:16 Walking Around or Walking Over? Wandering tourists and storytelling in the Ironbridge Gorge
AKH-DCjMhEo 23:40 Walking Lochbrow: Experiencing a landscape through the feet
-YmbeTPnm70 18:16 Walk on the Wild Side: Moving through past and present environments
uj0BSZRKcec 19:26 Uncertain Allies? The place of indigenous metaphysics in posthumanist thought
t91yCXfCEoY 19:51 Fear of Ontological Wolves
FKWQkZVohsc 19:37 Rethinking Relations: Characterising connections in the light of posthumanism
ydePvGb6pVc 19:25 A Posthumanist Archaeology of Byzantine Song
bpohZs_9hsU 18:53 Power in a World Without Subjects and Objects
gwZQuCM8NHU 14:46 Assessing the Role of Camelid Lifecycles in the Formation of Moche Political Institutions
-K3VN-3OJK4 22:12 Archaeology of Utopia: The future and legacy of a 19th century socialist community at Manea Fen
KP_qUI5mefM 21:02 Anticipatory Action: Archaeology, power and clairvoyance in a Medieval town
iqSC-D8yf0M 33:28 Making Sense of Past Futures: Rural landscape temporalities in Roman Britain
EGCcTp-pj98 15:17 Futures That Could Have Been Otherwise: Time and the past in an Imperial landscape
wRTqJlXLs5c 17:22 Pits and Places: Using anticipation to characterize deposits at Neolithic Çatalhöyük
PZc_ctDN8Us 18:51 Mind over Matter, and Matter over Mind: An archaeology of object attachment
Cas8WuKPxzY 19:22 Using lithic reduction sites to trace the development of planning & forethought in the humans
5hUs9_72AHQ 17:19 Cognitive Archaeology and the Evolution of Geometric Cognition
qFJ5hOSSCVg 27:02 Space: The final frontier?
13i5NezvAo0 16:46 Middle Stone Age Problem Solving: Examining the evidence for working memory
iBpOF8A7vEA 25:19 Bad Timing: Problems with chronologies and narratives by numbers in Mediterranean prehistory
Y9jMIzq9naY 21:16 Good, Bad or Absolute? Is Culture History Evil?
jy9ol3r8U1g 18:12 Evidence for the deliberate construction of a historic narrative in the British Neolithic
y1wDq_NyfP0 20:29 The Spiral of Interpretation: Thoughts on constructing narratives using precise chronologies
rh_1AKEQqcw 18:41 How Many Hands Has a Clock? Integrating chronological records: A semiotic approach
QRdb9fo0BSw 17:38 Anglo-Saxon Foodways and Faith
R7mesGKvsxw 14:59 Food Production and Consumption in Late Roman and Early Anglo- Saxon Britain
036zOLHEIHs 27:13 Historical Foodscapes: Challenges and reflections
pmFONW7WlnE 17:11 Undergraduates Don’t Hate Theory: Reflections on three decades of teaching archaeological theory
JOrgHmHSMWY 22:19 Embedding Debate From the Beginning: Teaching theory in Year 1
KLNhTrnFMdk 21:27 Theory? No Thanks. An approach to the issues of Archaeological Theory in scientific discourse
Dqe1cdp1aQk 17:11 Application of Student-centred Teaching in Learning Theory
hthFxCzJN74 16:27 Why do Undergraduates Hate Archaeological Theory? Is it only the students…?
eRNuBqsMdng 16:37 Assembling Theory: Teaching, learning and embedding archaeological theory
CvIehfANfKM 19:06 The Vallum Antonini, Grymisdyke, and the Antonine Wall
yRLBcyYyO7I 19:48 Offa’s Dyke and the Cheshire Cat Syndrome: Interrogating dykes and routeways
Ih5XbiS7z1E 15:38 Offa’s Dyke and the Creation of the Welsh March
YnF8WTYiNx4 14:57 The Early Iron Age Origins of the Cambridgeshire Dykes
yHNK-1pplsM 20:34 Dykes as Ideological Markers: Embankment and state formation in the salt marshes of Flanders
YWJ5-Rzcbdc 20:52 A New Career in a New Town: Locating sites of pilgrimage
i3kHMadQtQM 21:53 The Palmyra Arch: Places, memories and ideologies
_DpgxU0wkRA 19:05 On the Edges: Boundaries as places
dTn1a7wPXNc 20:39 Commemoration and change: remembering what may not have happened
PB-tB0Jysac 18:58 The practice of building and dismantling contemporary prehistoric dwellings in Japan
W3FuEewp34k 23:10 Archaeology, Place Theory, and Process Philosophy
CRNXWGMc5nY 15:42 ‘To Render Sensible to the Eye’: New stories for old pictures between Antiquity & the Grand Tour
W4chTnHsDDc 16:02 From Prehistoric Rock Art to Cubism: Social and cultural aspects of seeing time in space
v1g0iW_3udo 18:09 Scanning Over Time: Digital documentation of Shetland’s Iron Age brochs
0D0rsHArWLE 16:56 Let’s do the Timed-warp Again: Visualising Medieval cloth production time
i2j3Yky5gGw 21:06 Timing is Everything: The structure of Neolithic-Bronze Age calendars in the British Isles
KqRCO4QRmSk 23:07 Exploring Seasonal Behavioural Variability with Modelled Enamel d18O and d13C Values
lbKeHtjGVCQ 18:09 Continuing Bonds and the Ancient Dead
26LctFwaZZc 15:29 Tattooed Women of Ancient Egypt: Inscribing power and protection upon the body
lfyH_YirNg0 23:48 Alternating Cycles of the Politics of Forgetting and Remembering the Past in Taiwan
MtyMgodCrI4 18:52 A Powerful Dead: Decapitation and plastering of human skulls at the Ancient Near East
cUzinwmDI0A 19:56 Once, Twice, Three Times Forgotten: Material, myth, and memory in a Midlands city
jwS5H8GnwUQ 19:51 The Wasted Memories of (Tsar) Nikolai II
k7DWwoplHYA 14:11 Picturing Deer Valley: Images, visualisation, biography and heritage in a rock art landscape
KnxBjYxYo_U 21:21 Scaling Ideological Time
uxC-_6UG1bc 20:42 Narratives Against Forgetting: The archaeology of unloved objects
xX08mkCykak 18:56 Community archives in the Western Isles
beUSdRp99KA 13:49 Giants’ churches: Stone Age megastructures as multi-temporal architecture
l_TBx4dmIus 18:43 Friends of Cambusnethan Priory
7Y7lPneq9Ck 20:33 Llywarch Hen’s Dyke and the Royal Estate at Llangors: Defining space and power in Medieval Wales
BqIFHwznKe8 15:32 Understanding Peripheries: Power, performance and place in the west of Mercia
Szl7SyGGSk8 15:10 The Cateran Ecomuseum establishing a rural community group
raTguDlN8jM 14:27 Prehistory as History: Problematizing historical units and scales of analysis
25JX2ArPVK4 22:29 Nature vs Culture in Transdisciplinary Lake Village Research: Theoretical challenges
mq_xT7fFfAA 15:50 A Path Toward Reconciliation? Biographies, between scales, assemble history
RNC0Hi-X-f4 18:49 Intensive Scales and Virtual Archaeology
H_aHZURsipE 12:26 One Minute Mayhem - Scotland's 2018 Community Heritage Conference
VZjmLnSLjSI 19:52 Palimpsests of memory and the significance of place in Middle Palaeolithic occupations
lPd5EwtldH4 20:43 Community Engagement at HES
Iiwjkl2BR6A 17:33 New Discoveries at Eyemouth Fort
hBxV9w3wW_A 20:59 Sign of the Times – 1500 Years of Cultural Change Reflected in the Human-Animal Relationship
1vY9gXy5-38 19:11 Bringing the Dykes into the 21st Century: How did we get here?
YSxmqwq2Ax8 28:12 The Ridge Project, Dunbar
jf_UVyD33_k 25:30 Friends of Kilbride, Oban
yVmj1Fxvhys 14:30 Presenting Stone Age Time in Museum Displays
EpwbOQOSrYM 17:57 Digging Deeper into Treasure
LdespZRKTR4 20:36 Winging Away Time: The seasonality of birds in Scottish and North Atlantic islands
7c_9A2sYK6c 13:52 Discarded Matter: How do museums dematerialize objects?
TK-ehnb9GRc 17:55 The Friends of Stirlingshire’s Historic Graveyards
iy2Hi0kf5ig 19:44 Time for a Feast? Considering approaches to the temporality of feasting in later prehistoric Britain
AMlOrrYI4bA 20:35 Sleeping Beauties: Mummies and the fairy tale genre at the Fin de Siècle
Zyj-dsjhpzM 24:28 Portsoy Boat Festival
t6TOaQEweEk 14:46 Many coloured habits - rediscovering the friaries of medieval Scotland
136gTnkxgR8 18:31 Convals to All Hallows over 1,420 years and counting!
52s8fz4YweA 29:08 Kings Seat: Initial results from survey and excavation in 2017-2018
zM1xByOAOmE 18:58 Through a Glass, Darkly: Identity, collective memory, and visual culture in Qatar
5IWa4cyp1JA 21:53 Taking a line for a walker: an initial look at the discovered figurative Pictish stone from Tulloch
sJadohnJhwo 17:55 “Community Archaeology for Kids” – Loch Tay YAC’s Local Archaeology
-6FNWa2BywM 22:58 Recent Casual and Interesting finds from Angus and District within ANGUSalive Museums
CvVjxjvL2NY 35:35 Silver jigsaws: making sense of the Roman hoard from Dairsie, Fife
cw_wgbPz6ws 24:56 Living on Water: Island Dwelling on Loch Tay 800-400 BC
scylpod3Y7U 14:46 The Development of a Heritage App
A1UFbkIJVLk 19:45 Cailleach and Bodach Stones in Rural Perthshire
3F5sTMRl2R4 10:11 The Perth and Kinross Archaeological Research Framework: a brief introduction
IByxJo-juxs 12:22 Archaeology and Performance at Bankside’s First Tudor Playhouse
rrOE9hPyn1k 22:41 It’s about democracy
n09-f6meVg4 19:16 Hapton's Heritage 2012-2018
CVvwltvugt0 20:57 In search of Mipoundi – community engagement in Congo
Ica3ntZdbWk 21:28 In the bootsteps of their ancestors – experiences from the military community
oVUGTAaxml8 20:44 CSI: Sittingbourne - professionals, volunteers and visitors: 2009-2018
wP9GdaFe5QE 21:15 Worcester life stories: the rewards and challenges of meshing agendas in partnership
3zFrfUz59PM 58:06 Going solo: self-employment in an archaeological context- Panel
kyguFQRDGDU 19:03 Ciota Ciara Cave and the Monte Fenera Palaeolithic (Italy): New Data, New Views
k6q76iosU7E 56:03 Going solo: self-employment in an archaeological context, Setting the scene
t7SqWpYwTJg 13:39 The Endangered Archaeology Image Interpretation Methodology
QqgMmlpiqBA 15:32 Integrated data management in commercial Archaeology
YsvyUpXravU 20:43 The ‘Near Lewes Hoard’: Capturing, visualising and presenting archaeological artefacts
onhZeSHOoAM 21:45 Comparing modes of digital engagement for archaeological sites & their dissemination
LpMJTGGzvjA 21:00 Studying Animal Mummies: An exploration of non-invasive surface and content recording techniques
-htnHG885MI 12:11 Flexibility and efficiency
naS7PtebYxY 19:55 Using GIS to Understand Climate Change Risk in the Historic Environment
YxPXwtRbtNU 17:55 “The joys of upgrading!” Or, lessons learned from a simple upgrade
Ao6kg4uj3j8 15:49 Adventures in Open Data
0XIS2HIl78U 18:09 Twenty years after. Challenges and successes in digital archiving
OOO6XCNhrak 11:35 From ‘dirty’ data to accessible resource
HxAqsyuzWLs 13:05 Digital archives in archaeology; the Scottish context
kB3OLE80j4w 11:49 Use It Or Lose It
8CqzgkQsrQY 10:56 Digital Archaeology, but at What Cost? Supporting Curators in Managing the Heritage Resource
cxlOeGuVBN8 12:33 Digital Data Capture – Cost or Benefit?
8KG2OrY5QOw 13:27 Spatial data standards matter too
-Yl2aQRE7bk 29:26 Changing the game – managing data with the Arches platform
Tup2fxnWPAo 22:05 The contribution of data standards to the ARIADNE project
UlquftUfLts 15:05 Digging into Early Colonial Mexico: old sources, new approaches
7Hv8o-Stuio 17:33 Building a digital platform for research frameworks
nqHEJ2wfEFQ 17:49 Visualising and researching complex prehistoric cemetery sites: the Ossi project (Sardinia, Italy)
7C0FLNU001A 27:48 Wemyss Caves 4D: a digital future for the Pictish Wemyss Caves, Fife Scotland
ehlaJtuCrKA 19:42 HES▪SIGMA: a new geo-spatial data capture tool for managing the conservation of historic assets
6l2BCvFIz-Y 19:20 Offshore Scotland and archaeology: the challenge of big data
YkLm5hc8l84 18:27 Classifying Digital Research Methods: Linked Ancient World Data in Context
yBwbnTS4JdA 15:36 A QGIS plugin to explore landscape connectivity through circuit theory
jzttTFlbLK0 20:13 Social Media in Digital Heritage Research – data extraction, management and analysis
95oe8UejtZQ 17:21 Large-Scale Photogrammetric Recording on Commercial Projects
i71_ud7AXH8 11:30 Filling the Gaps in a Fragmentary Bronze Object: Contribution of 3D Scanning & Printing Techniques
lXsI_suTKeo 20:06 Demonstrator for data integration
xM72ZuxeoR8 19:33 Where imagination fails: New possibilities of presenting the unexcavated
zihNfaKtiVE 20:23 Quantifying uncertainty on the spread of Neolithic transition using Bayesian models
OrPUSm1c60k 17:19 Roman Frontier or Fortified Road? GIS Analysis of the Gask Ridge
DYLWxZaVQR8 21:31 The application of precision agricultural techniques to archaeological survey
cllhLry_cMA 16:47 Practical applications of digital technologies for conservation & asset management of historic sites
a1YdS-7vVJc 15:40 3D Scotland in miniature: digital topography, deep neural networks & approaches to national mapping
gHjaKn3ahtw 18:33 Finding mechanisms for a comparative study of Atlantic Rock Art
Yka1HpuOg5M 13:09 Taming the chronology of Samian found at Hadrian’s Wall & the German Limes using Linked Open Data
XmljzKrKDIs 17:47 Community co-production of 3D rock art models in Scotland
OBiqgnHCAXQ 21:53 Conservation & management of Historic vessels & the utilisation of 3D data for information modelling
cHWzAF_N-KM 14:52 Analysing the use of light and space in Neolithic Malta through the use of custom Unity3D scripting
SzmbeM6FybQ 15:53 The Antonine Wall in the Digital Age
ickHIvAKA5Y 32:03 Visualising urban heritage: Dundee's lost spaces re-imagined
D1ZaEwWlDtw 14:36 CIDOC CRM and CRMarchaeo A vision of use for the 'future'
THFGLhmlLBE 11:04 Heritage Apprenticeships
prCRQTW5COo 25:59 Citizen Science in the Sunshine State: FPAN’s Programs in Training and Mobilizing Volunteers
26uMEkaOJUE 19:23 Intertidal Archaeology in Biscay: First Results for an Ongoing Project
1lScAz3-3HM 25:34 Intertidal Archaeology in the Severn Estuary and the Study of Prehistoric Routeways
fZEi3ofcHK8 22:17 Turning the Tide? Three Years of Community Archaeology on the English Coast
xtZ8OHSxDXg 29:07 The Golden Age of Thames Antiquarians
yRKoaROwCNQ 21:26 Archaeological Evidence for Change in Tidal Levels on the Thames, an Update
CxYg3ieDM7k 13:56 When the Facts Change: Finding Officers’ Households at Roman Forts
n7p7XSjvp7M 15:23 The Colne Valley in Prehistory
PxLdmDhOxQg 20:52 Who were Roman Londoners ?
joAR2--9MAA 30:00 Archaeological Investigations at Tideway
jZmPlkmDi1c 18:08 Enabled Archaeology and the TDP
wfUshCpZUgI 13:50 Tideway Engaging with Younger People Project
86TDDve4XGQ 17:28 Older Londoners Project Update
nVbRG43uUeY 32:55 Special Mysterry FROG
Q377oK-vyx8 14:46 Art as Archaeology
SjfUmERjfXQ 11:55 Welcome and year in Review
BRWuYowL-ng 30:34 Bristol’s Brilliant Archaeology: planning for all ‘event’ …ualities
j4mHOm9uZhg 29:54 Your Dig: York Archaeological Trust’s new Participatory Community Engagement Programme
2sIIZOfYtyQ 22:27 Visitor perceptions of, and engagement with, British prehistory displays
xL3p9iCHHFY 28:25 Positive Action with a 3D Printer
krNWLyay9z4 9:58 Documentation and Curation of 3D Visualization Projects
WIJcbuT4SFM 10:35 Displaying the Dead: results of the Leeds Museum visitor survey
Lak6KUrHuh8 8:33 A new approach to rationalising archaeological shell
U7bcBmvBpdg 27:01 Charging Ahead: Exploring fees for the transfer of archaeological archives in museums in England
b8uVaR8OUtY 26:27 I like to move it, move it......into archive suitable boxes
VUCDTmUuoUk 26:42 Pottery Shop? What Pottery Shop? Re - thinking Corbridge from the base up
O3soNQ1GQkE 27:15 Improving Archaeological Reference Collections and Typologies
INl8D8eOc1M 51:56 Archaeology matters: pass it on!
vBAo3OSxBvE 25:14 Forging a positive collaboration between Swindon Museum & Art Gallery & Cardiff University
FmkNKU1CIpo 30:08 Old Collections, New Questions: Researching the Roman collections of the Yorkshire Museum
jH2s9Efk7ic 24:46 Birmingham: rediscovering archaeology for a superdiverse city
53eDGLd6j2c 27:38 Putting Cyprus on the Map: promoting the Cypriot archaeology collections at Museums Sheffield
rtrfGhPO-Qw 30:02 Papyrus for the People at the Petrie Museum
SEd-Ycb00Cs 16:12 Baston Burn: A cairney/brochy thing!
9gDvM47LHOw 28:16 After SERF: the post-excavation, writing up and legacy of a major archaeological project
vfbrCfgyC98 22:00 From Hilltop to Shoreline
frmJpjNQ5Jo 26:47 A step towards national mapping – Scotland in miniature and maximizing the use of remote sensed data
g9_4sbw-PYw 27:02 The Lismore Nave Project
JcCrgZvmYLU 21:19 In Search of the Early Medieval Monastery of Deer
FDRdqnSGjiY 18:04 Beachy Head Woman and Take the Space
JAVOWtqkeKc 27:52 Adopt a Monument – Results of evaluation
RuUQJM6mcZI 6:04 Health and safety, bullying and harassment inductions for archaeological field staff
2bnymK_vGFQ 23:24 A plethora of periods and some groovy pottery: the latest discoveries at Upper Largie quarry
DMUeFh4Ao6E 11:39 Increasing diversity through community engagement: Goathland Incline, North York Moors National Park
ReGWQf_CzWc 22:52 The Arrochar parish in the time of the Macfarlane chiefdom – recent archaeological discoveries
3ZW3ZR_Rl3g 20:08 Whose career is it? An overview of diversity and inclusion actions outside of heritage
2AJG-ViLQu0 28:20 ‘This is ane koull of Tullilum’ – excavations at Perth Whitefriars 2014-2017
WQRCxVuNOE0 16:27 Recent history and work leading to HLF bid - Whitehawk Camp Community Archaeology Project
Q9PKFypmE_s 10:30 Project outcomes and lessons learnt - Whitehawk Camp Community Archaeology Project
FHf_sMngykI 17:08 Management of Brighton’s green spaces, natural heritage and collaborative working
DGS-gCRmKzY 14:53 Brief History of Whitehawk Camp and historic impact from expanding city
60WrYgh5xxY 14:05 BHAS’s historic & current involvement in Brighton’s archaeology & exp. of working in the project
KYKvY-AchJU 9:39 Geoarchaeology
MPkwbrsoJ3E 25:33 Environmental processing
-7cK-CId74s 20:38 Careers in Archaeobotany (the study of seeds, chaff and other macroscopic plant remains)
roFViRC7sEs 20:31 A career in specialisation
YIrR3_6zEpc 28:17 The problem with archaeology is archaeologists….
MsoHJQzaBIU 13:44 Communicating ideas: the (dis)connections between theory and practice
6E7w8AjGZVY 32:51 Why bad things happen to good people
3dMkUuC7em8 23:23 Re-connecting through place
PH45JYyqdNQ 11:05 Reconnecting archaeology: introduction
73ZYMzgTSGA 27:12 What do we need to do and when? Prioritisation and implementation
9LBHhnizRYU 10:26 Introduction and background to the project
4B_0kmnI834 27:37 21st-century Challenges for Archaeology: issues discussed, and actions proposed
gqGvmGK90gw 21:04 Spare us the detail
cUOuiobxMQY 15:20 A MAP2 thing
UimNrSOCi2I 21:25 Modelling landscapes: assessing risk and opportunities at Skeffling
lKMRlNzCsnU 15:58 Post-excavation from a consultant’s perspective
GkMi6GznheQ 15:24 What do we do with those shapes?
qutjXUYiIaQ 16:20 Sunlit uplands? Managing moorland archaeology in the Yorkshire Dales National Park
t06dAB1wYIU 13:27 From flint head spear to javelin missile
viZH5wRwFrY 14:57 Exmoor Mires and the historic environment: a partnership with the past
4L_m9NIp5Ag 15:51 A risky business: reducing risks to scheduled monuments
oD3fzik3DE8 11:15 Who’s leading the charge: leadership and innovation
c1Ns1mj3i7U 16:21 What inhibits innovation: structure and outcomes
pOWV0FCZC7g 24:53 What empowers innovation: money and value
kNCXkQMikUM 16:11 The innovation survey results
sPYHAZvUwYg 26:49 Innovation, what it means and what it looks like
b2PeX6ZvPQ4 2:21 The SCAPE Trust/Scotland’s Coastal Heritage at Risk Project - Newshot Island Boat Graveyard
zk_eVV3ABY4 2:33 The Small Isles
pLaK6GX1diM 2:09 The Archaeology of Dun Deardail
-N2CJoKXuPM 2:29 Lost Lives, New Voices: Unlocking the Story of the Scottish Soldiers in 1650
47YP437O85U 2:42 Wemyss Caves 4D
4u7b3SbjRBA 2:26 London Mithraeum Bloomberg SPACE
0jQkKxf6iuI 3:02 360 Production for BBC4 Digging for Britain Series 6 - EAST
uebKL3thT6I 2:21 CITiZAN (Coastal and Intertidal Zone Archaeological Network)
mxRMoHfaRm4 2:15 National Trust Archaeology at Knole, Sevenoaks, Kent
cVYzFilsGTw 2:29 Thames Discovery Programme
Pl_DLxXplH4 11:05 One Minute Mayhem - Day 2 of SCHC
7jgi3Z5ZtVs 2:57 Launch of “Listen to the Stones”
W3Rn4S--FI4 30:18 What Do We Know? An outline for a Scotland-wide project to lift the lid on community heritage
3D4JXd-4dQE 13:32 What’s Your Heritage?
De9m6g0whRY 18:40 A new dimension on Scotland’s rock art
qD6HZH1_OZ8 20:05 Building commitment and community engagement for a living history project
4tK0SVeI9mo 19:27 Cousland Smiddy
KnlVNlypSSc 37:54 Personal reflections on community heritage in Scotland: evolution and revolution
j4xGRKL378M 23:11 Inspiring landscapes: the life and times of Muirhead Bone
7RTs7DqJRv0 18:23 Rejuvenating the West Boathouse
K3BSFh8kRt0 10:01 Walking Tours on Wheels, Paisley
KaDxihmg8P4 14:11 The importance of memory in the park context
QuYfrLss_DA 15:29 Nungate memories: the pleasures of oral recording
8gxr7ACYJxU 16:25 Tracking the Highland Drovers
f976b8R1bGQ 14:46 The physical and the virtual; the realities of young people in heritage
2s519vMM4hg 20:37 Canal College - engaging young people with Scotland’s heritage
CW4Edai164w 17:35 A beginner’s guide to brochs and bairns
OrcAutdAR9M 23:29 Friends of Kinneil
GWJuij7s39A 18:03 Edinburgh Living History
6PRhGNMNjSU 38:53 The value of volunteers in heritage tourism
VYB2RDJW49M 14:08 CINE: making virtual reality accessible for communities
sAk5qaxjygo 18:29 New Forest Archaeology: motivating communities and enhancing their engagement
WvnC875qkdQ 17:32 Save Wemyss Ancient Caves Society
YueaLNx861g 12:28 Heritage assets creating a platform for community-led regeneration
uiwEtlIS9Wc 18:01 Govanhill Baths’ experience of Community Shares
SY4HECmyILY 18:09 Securing the future of the museum
xO0bq7upMpU 18:29 EU-LAC-MUSEUMS project
BZi56UhLEHA 18:45 Best practice in museums’ dealings with communities
1CKgsnjmni4 17:54 Troyan Museum of Crafts
ei9ebQ45S04 21:49 Community comics and cultural heritage
DXjVX4PMIBc 24:01 Writing the Clydebank Blitz
2cPJucnSjjQ 27:17 Weave Parkhead
eXO0mmXJ4e8 30:50 Excavations at Clachtoll broch, Sutherland
x4aznS1WQjQ 22:26 The Living Wells Project – community heritage and the interpretation of holy wells in Wales
R2ieTY6HoXY 18:27 Feats of Clay: Bronze Age metalworking at North Kessock
Lgs463rvYFQ 1:26:33 Future skills for community heritage: a panel discussion
1RZUiNAW6XQ 20:33 100 years of defence along the North Clyde coastline
Hg84BLuki5U 19:04 Wartime remains at Invergordon
j6dH6sAhqtA 24:06 Public & community archaeologies of German PoW camps in Finnish Lapland
JFGlHXucd_U 19:43 “To our comrades who died far from home”- exploring the WWI PoW cemetery at Stobs Camp
uon746qdlKQ 34:43 Llwyn Celyn; a hall house in the Black Mountains
ANLCblH14h4 14:04 Reconstructing turf buildings
u1NDomAefBU 14:15 The work of the Gal Gael Trust
1fW6lBafugo 22:48 Digging In: People's experiences of the Great War, then and now
V1xMv_yt2Zo 9:30 Remember Us: Muslim communities and the First World War
0R_5PXaeVGM 10:52 Playing the Past: excavations at Cathkin Park
VMFY_Ab1Cjk 18:01 The Vennie Skate Park: an urban discovery
hIcarUJPKtw 21:38 Funding East Wear Bay archaeological field school: life after HLF
EpOvmflvRGc 26:13 Scotland goes south: the cemeteries of Lauderdale County
8YtA2OViF3w 22:48 Understand the stones, hear the stories and re-live the past
xUnmmjQd1Pk 10:25 One Minute Mayhem- Short talks on heritage
mGbeZr6QJDg 11:21 Opening remarks to CHC 2017
89TPCP12wxs 11:52 Welcome to Glasgow and to CHC 2017
t5x2IqNpkGg 17:10 Diving in: how volunteers are uncovering the stories of Arlington Baths
qPwW8fw8Z8Q 34:54 The Drosten Stone, St Vigeans: a cultural hybrid
3hqm-Q6YPMw 18:41 Our Portmoak: uncovering stories from the past
sa-Y5pjfgCo 33:41 Excavations at Perth Theatre and Hallhole, Meikleour
jes87S_CToY 25:56 ‘The most powerful naval fortress in the British Empire’: the defence of the Firth of Forth
Zta-eWoS_EA 27:03 Neolithic Halls, Bronze Age Roundhouses and a Late Bronze Age Hoard at Carnoustie
X7TI2ENCpNk 7:29 Mapping Dundee's historic Howff cemetery
wxUjZhfDync 28:11 New findings from East Lomond Hillfort
kkrokKIWIXs 19:43 Dundee Law: The Past, the Present and the Future
IUMJeYLr3BM 18:47 The FROG Awards - Foreshore Forum
I-9UiekCvHI 16:15 Foreshore Conference- welcome and Introduction
PEbFyUAxUeo 9:26 Edward Mudge, an interesting man?
xkeRllC-t-Q 23:52 Pots and People in the Middle Bronze Age: assessing the Heatherstone Grange cremation cemetery
0OgY0MCbz2A 25:21 Archaeology in the New Forest, 1960s to the present
3_I-2NAUyRo 20:12 Animal Maiming in the New Forest as an instrument of protest and punishment
7AKiuHJsQ68 18:43 The CHERISH Project - Understanding Climate Change and Coastal Heritage in Wales and Ireland
xyNPcuYacOc 20:34 Five Transformative Years: The Scotland’s Coastal Heritage at Risk Project
-RpC8lYJKio 17:58 CITiZAN SW Team Summary
aS9IPm7l5Io 23:21 Tusks and trackways: CITiZAN on East Mersea
99FLnIV85hE 26:15 A history of coastal defence in East Anglia and its impact on coastal archaeology
7Iim-l0O83k 20:53 CITiZAN SE Team Summary
1iDBYv955og 17:58 CITiZAN SW Team Summary
qHHaj5lX7xc 18:15 CITiZAN North Team Summary
ZXaUKUpgCKw 21:34 Did they enjoy it? Volunteer responses to CITiZAN
j3zpU_sTnbI 13:47 Volunteering with CITiZAN A Year and a half on...
cwNO5AwhBuw 8:31 Using a Drone to Survey hulks in Gosport
jEkjXG8-cuo 13:33 Morecambe Bay
WRm6LxEeRwI 33:54 The Art of Citizen Science, CITiZAN style
VMDDcibC2zQ 31:28 The Old Custom House: Recent excavations and some finds from London’s medieval foreshore
-BziWM92Uk4 18:33 Archaeological works at Chambers Wharf
beY9kfLQ-zo 22:39 Slippery when wet; working on the foreshore
UIMTIJClKQ0 16:58 Tideway and Tadpoles
wStBsEWGYgI 17:41 A catalogue and discussion of finds made in the vicinity of Tower Pier
yf_Cq_asQ5A 12:45 Changes to the Barnes foreshore: another look at two fish traps discovered during Thames Survey
YYt49Vz2c6s 9:45 From Sail to Steam
1Oi1Au-IC0g 24:06 CBT Project & Greenwich Update
kZ2CHkH7NUU 17:56 Fieldwork Review - Thames Discovery Programme
kz4ZgRYfJxA 22:45 World Heritage: meanings amongst local communities of the Ironbridge Gorge
KQp49VNSLDs 11:28 Will Buckland Rings Reveal its secrets?
YQcSP4v_G8M 35:10 East Lomond Hillfort and Late Iron Age Fife
1QFcFxfEC9k 1:01:01 The Romans and Ridgeway hillforts; Moel y Gaer Bodfari, Denbighshire, North Wales
HfaBPN107aA 28:10 Beyond the Bronze Age: Iron Age and Early Medieval Activity at Irish hillforts
cbAg9owpyhI 30:51 Reconsidering Roman Iron Age Fife
Bn5jKyAkwXE 45:50 Is that a fort on yonder hill?
ofede0kmL2Q 24:13 Cullykhan - A Coastal Promontory in NE Scotland
LXZ4bludb5A 22:57 An ecological perspective on long-term human impact within the New Forest
wIg4ZBEvixI 22:12 Excavations at the ‘Royal Hunting Lodge’ at Church Place, Denny Wait
yFflZrf1-To 16:48 New Forest Roman Pottery: the centenary of Heywood Sumner’s excavation at Ashley Rails
3Yy1TDTQEeM 24:36 Equipping the Armada: The Archaeology of Lepe Country Park
-qFs8U4PRyY 25:14 The New Forest and the Great War 1917
GRtA4NemjPU 22:16 Three sites on the coastal zone: Roman, Saxon and Medieval
iS0X-bIrvC0 14:50 HLF Funding for heritage projects
UaVxJ8i-pBU 24:17 Automated Detection of Archaeology in the New Forest using Deep Learning with Remote Sensor Data
irsZb2eckrE 16:19 Using Aerial Imagery for Desk Based Research
pTDp0TNuC5s 18:20 Gazetteer of New Forest Properties
ZtiRtognWIg 26:47 #NewForest: using social media and mobile data to manage our heritage
_SnF3Ihr73s 19:54 Protecting cultural property during armed conflict: an international perspective
JaXwFeWfqzE 14:06 The reconstruction of Dresden
bNeBJLhdfv8 34:11 Restoring and preserving cultural property in post-conflict Bosnia- Herzegovina
hpTYrCiZPgU 25:52 The arts in historic preservation – the southern Caucasus
UwYXbFGZFvQ 19:11 An Introduction to the Cultural Protection Fund
Y4V-XRa3GuM 17:20 Transnational working and the World Heritage Convention
metf4-A0ddQ 21:58 Frontiers of the Roman Empire (FRE) – the ‘ideal’ transnational WHS or a crazy idea?
ltftKG41WgY 21:20 Neanderthal connections: international research collaboration on the Gorham’s Cave Complex
nj6UWHQQ8so 16:18 Research frameworks and global heritage
3Phvi1pkz6k 15:49 Artefact Preservation in Saturated, Tropical Cave Sediments
hm1qqT_EtNQ 18:46 All Along the Watchtowers!
ZIwVUBPRGa4 21:55 Rescuing the Ranch: Geoarchaeology and Historic Resources Impact Mitigation at the FM Ranch Campsite
T-6SCQa8ha8 20:00 Deposit Modelling for Archaeological Projects: Development of Technical Guidance
DiJa4vgN46I 20:36 Geoarchaeology and Landscape History at the Squirrel Hill Archaeological Site, USA
vkvoxbOgCzI 21:13 The Battersea Channel Project: Geoarchaeological Deposit Modelling
LTujjv8NBbc 12:17 The Battersea Channel Project: development control deposit modelling work within southwest London
FHguiKAlBWs 21:12 Mineral Phases in Burned Salmonid Bone and their Relevance to Studies of Combustion Features
a6JuPrhZjEg 15:49 Blind Test Evaluation of Consistency in Macroscopic Lithic Raw Material Sorting
r_PWwcfiSV8 20:36 Characterization of Silica Mousterian Tools from Navalmaíllo
8OwFHHVbz60 32:21 An Integrated Ethno-Geoarchaeological Study of Small-Scale Nomadic Herding Sites in Woodland
vr1MXGPlWLo 20:55 Medieval Sunken Buildings in the North of France: From Samples to Micro-Features
M_x9Ke6dnys 11:51 Town Development in Mons (Belgium): The Contribution of the Geoarchaeological Study of Dark Earth
3INK0cjj3n8 18:30 The Prospects for Geoarchaeological Interpretations of Medieval Dwelling Floors
mpD-wuSjusE 19:00 Phytolith Analysis on thin Sections of Urban Dark Earth in Brussels. A State of the Art
TT8EtYu22YU 30:12 Micro-Contextual Investigations of Organic Matter in the Archaeological Sedimentary Record
Mh4M1U3zgh8 21:14 Geoarchaeological Investigations of Aghitu-3, an Upper Paleolithic Cave Site in Armenian
PA1g3bgV0k0 22:57 Evaluating the Nature and Behavioral Implications of Laterally Extensive Occupation Deposits
kd1ClS2NLg0 22:48 Breathing New Life into Archaeological Soils
smaMTKNq4aY 20:00 Manuring Practices in the Danish Late Bronze and Early Iron Age
FfecuOR2BUw 17:43 Subsistence Practices in the Arid Negev Highlands During the Intermediate Bronze Age
yu3Gavw-Wfg 19:50 Developing High-Resolution Theoretically-Informed Geoarchaeology
4-GJDw1ne74 18:55 How the Late Pleniglacial Landscape Changes Diversified the Gravettian Record of Ach & Lone Valleys
4XRCctf8Kx4 29:36 From Green Sahara to Desert River: 6000 Years of Environmental Change in the Sudanese Nile Valley
1gjVoaMGAIU 23:47 A Multidisciplinary Approach and a Double Level of Validation for the Radiocarbon Dating of Mortars
yt2xg3nCprs 20:30 Characterization and Patina Formation of Flint used on Prehistoric Sites in NW Belgium
_8Ldc9JRL_Y 22:05 Geophysical Surveys and Digital Elevation Modelling at the Roman Military Complex of Ardoch
tV9GSgXWXr8 19:19 Garbage In – Wisdom Out! Geoarchaeological Investigation of Sedimentation Processes & Waste Disposal
4GbsLK1i1nQ 23:46 An Integrated Micromorphological and Phytolith Study of Urban Dark Earths from Atuatuca Tungrorum
8qC1PyDJMWQ 19:15 Late-Glacial/Early Holocene Palaeoenvironments and Evidence for the 8.2 ka Event in the North Sea
3eLVVyTqZ3E 15:21 Patterns of Flint Raw Material Procurement and Use in the Late Neolithic Through Early Bronze Age
7QdENQLx8FE 19:15 Visualizing Skyscapes: GIS-based 3D modelling and astronomical simulation
2YeoRpOsTW8 17:33 Erosion of Archaeological Sites: Quantifying the Threat Using OSL and Fall-Out Isotopes
MkCTopXoy5w 20:44 From Shipwrecks to Sphagnum - Geaorchaeology in the Marine Zone
bOkQ_3nkYY0 20:44 Approaching Landscape Transformations Through Urban Micromorphology at Bronze Age Palaikastro, Crete
6OC5gY6zLgs 21:17 Regional Stratigraphy, Tephrochronology, and Human Occupation of the Upper Susitna Basin
hyn9Gxz2gks 1:16:03 Professional standards and ethics: making a world of difference
rj0F25OHJDA 24:32 Conflict and Resolution: a case study of the Highway 55 and the Camp Coldwater conflict
4uOpg2IkY9g 23:41 Views across the pond: different systems of reporting and engagement from North America and Europe
XyDXNMl2svg 16:29 Engaging the public with archaeology: Birmingham Museums
NdrFnp6jqVM 18:47 Archaeological output in the museum setting: a case study – The Mary Rose
4RCmQmvfFeA 21:29 The Archaeological Recording Kit (ARK) – 10 years of learning lessons
EzgxryPh_vg 25:46 Underwater cultural heritage protection in the UK: the failure to commit to the future
VyIrSV2KPjc 26:01 Managing protected landscapes through the use of remote sensing, mobile devices and citizen science
5ST3VG5o5sM 17:52 Protecting accessible marine tourism sites: the case of Scapa Flow
3OpJwb308jA 26:41 Recording and analysing in 3D
-NPEWwC0_88 21:48 Professional practice in community archaeology under UNESCO
MhTGU5AUKkM 19:52 Squaring sovereign jurisdiction of underwater cultural heritage protection in shared ocean spaces
vFm6jXKL0RU 37:36 Global standards for marine archaeological work: utopian dream or close to reality?
zQYtniTlwKs 21:16 HERDS: delivering a research-focused strategy for HS2
W_Q26Uztr1k 19:39 Infrastructure and research: a marine perspective
WoZtfOoPo60 24:40 The Batinah Expressway (packages 3 and 4) excavations
wvLumg46iWQ 24:09 Heathrow Terminal 5: a fitting legacy?
ljDQbB1ZQP8 19:01 The future is a foreign country
V5vsSaiLSlc 25:32 EAA and CIfA: going global together – possible pathways
AUQqpUlYUfQ 15:22 When the UK leaves Europe where does that leave me? The perspective of an archaeologist
KrkpEwDDO68 18:24 Introduction to the session: A broader vision for Brexit
3khMvGyy5fo 24:32 On the outside looking in: what will Brexit mean for European archaeology?
kmXYIHqoJr8 20:43 Identity, value and protection: the role of statutory heritage regimes in post-Brexit England
f1pJmSjcVSc 40:13 From Dere Street to the A1(M): what have we learnt from over 20 years of excavation and research
QWJwFXQenuY 21:44 The challenges, strategies and rewards of managing publicly owned cultural resources
2cJw6DTpK68 23:40 Safeguarding a fragile legacy: managing uKhahlamba-Drakensberg rock art
M8l-df4Qh-8 24:46 The Happiness Machine, or how to be an archaeologist in a changing world
g0F60DGrnh8 21:04 Making a difference: volunteer approaches to heritage at risk in Northumberland National Park
4vE-AQhZoPI 27:20 Remnants of farming past: cultural heritage and living landscapes in the Dales National Park
04hcFW-TKVk 26:22 A multitude of designations
O4j5Sfj_SiU 16:49 Making commercial archaeology more inclusive
GjXfMCoys8s 20:12 Archaeology and vision impairment
-FWrreffpRQ 26:16 From equality and diversity to fairness, inclusion and respect
azfcIKaNb04 17:37 A global vision on diversity and involvement in archaeology
mbp2axD22a8 29:09 Breaking down barriers to inclusion
qpV0LXCe64A 23:16 Making a full circle: cultural repatriation from museum collections
fgmUt8wehoU 22:15 Fragmentary ancestors and making monuments: international working at Manchester Museum
qfFtSGd_zoc 26:00 Bottom up or top down? Connecting local enquiry with global research
xt8bgLH-3fM 19:21 Hadrian’s cavalry: an international collaborative project on a World Heritage Site
NgxUcN0dVH8 23:19 The Must Farm pile dwelling – taste, appearance, lifestyle and communication in the Late Bronze Age
GQCOsU_1xws 26:34 Crossing boundaries: commercial archaeology, museums and universities
Zilwb1r_f9o 29:59 Chartered Archaeologist: accrediting competence on a global scale?
ZHOQJi9h_ro 33:55 Training of professional archaeologists in the United States: a path forward
lZD2E8Taunk 27:20 Discovering the archaeologists of the world
LjnT1Fet4o0 23:54 What do you mean, you don’t recognise my qualification? - Introduction
rfMl2M-Npco 23:53 Case study 1: The soft power of archaeology and cultural heritage in the Gobi Desert
hdvmHtfXvhk 27:44 Ecosystems services and green infrastructure approaches to land management in the UK
j4DGwLmfZbY 21:05 An interdisciplinary approach towards an understanding of historic landscape change
lMvs-MvxrsQ 22:39 Summer dairying and the history of upland landscapes
vykMntbLKe4 27:15 Engaging stakeholders with the management of European cultural landscapes at a local level
JX0kU25AVj4 14:27 Dissolving borders in landscape study and digital professionalism
umKrfayGZUo 23:03 Archiving digital publication: preserving two decades of digital content in Internet Archaeology
nSOMz1yBU1M 13:41 Davy Jones’ locker: Historic Environment Data Centres and MEDIN
8jTVpievKXU 16:59 A toolkit in your pocket: data creation with the CITiZAN coastal archaeology app
sVG4L8pAxQk 16:44 ADAPt or perish: developing a life-cycle approach to data management
YYoSZlWgH5g 17:01 Improving access to better preserved heritage data through the Heritage Information Access Strategy
6YfSam4A7Yw 17:08 RCAHMW guidelines for digital archaeological archives – sustainable approach to digital preservation
tvDaOkPfbpo 12:39 Joining up… digital archiving and UK archaeology
hyMzVp-o4aM 31:25 Case study 2: Cultural heritage projects, central and northern Mauritania
gBd1MBhsrnI 14:23 The Bedern Charter: digital preservation and the historic environment
s1gmKUz_4uo 14:12 Time pursued by a Bear: Ursa Major and stellar time-telling in the Paduan Salone
TQG5NP8faWg 28:02 Skate City: Film, Architecture and Urban Space
wNvaJdVdP-8 21:29 ‘Three stones in his belt’… astronomical imagery in myth and ritual sites
aKKxDsXTYlY 19:13 Early Bronze Age deep postholes alignments in Linsmeau pointing towards astronomical events
gx7kalmYgS8 20:54 The strange case of Dame Mary May's tomb
pSCi4PgIH5c 20:32 When types matter (and when they don’t)
ctykeyZOaR4 20:42 The Solar Discourse of the Welsh Cistercians
Xe7mdN_9BKU 16:02 Skyscape Exploration: From Material Site to Apparent Non-Site and Back Again
1tDnzB7YBms 19:57 A diachronic study of mid-Holocene skyscapes in southern England and Wales: preliminary results
T1Boc-U_4TQ 21:07 Reflecting the sky in water: a phenomenological exploration
gzJyAizdUDQ 21:29 Toads turning time: verifying visualizations of the Sanctuary
SdA98jYOVLI 18:49 Visualised denial of rebirth of the dead in the mortuary process: Ritual disarticulation
K_rZDih4kys 20:17 Weland’s Bones: Skeletons and Stories in Early Medieval Britain
cv0Qn_MQKj4 21:54 The use/misuse of Iron Age Bodies after Death: Denying Agency and Drawing on the Power of the Body
R6Te_LdMkWs 22:05 Visualising Taphonomy: reconstructing burial practices from 1m2 at the Xagħra Circle hypogeum
q58o4dszmBE 17:49 Human remains as evidence for grief and mourning? A reinterpretation of plastered skulls from Levant
GMuPSxNeV1o 19:43 Reclaiming past, present and future stories of a deserted medieval village
LutUoTk3Y08 18:39 The Priory Tunnels
72yi3bL4gsc 23:14 How can reflexive indexical image making expand the visual communication of liminal space?
rjzK5UO3jaU 19:15 Visualising Entropic Narratives of Deep-Time: A presentation of fieldwork from the Broads
ZX3HiiszA1o 17:27 Reassessing ‘henge’ monuments: can we see a neatly packaged monument type?
90hE7HrlP2k 17:19 Archaeologists, typologies and relational thinking: where do we go from here?
3q0-MVORcvI 20:34 Simply not my type: building and using typologies in a new materialist world
sVB0SfYN7xE 16:53 Typologies of Early Neolithic mortuary structures through the lenses of relational theory
xwB2zk9ekfA 17:20 All Things Shining: Towards ‘multi-dimensional’ typologies of Bronze Age Britain
pGFB3rtqihQ 16:59 Assessing the Role of Stone-Ard-Points and Flaked-Stone-Bars in Prehistoric Orkney?
eUE4o0fm1Yo 18:27 Tables, volcanoes, pots that (kind of) talk, and making sense of artefactual variation
OJKNKvyWTu4 9:14 Rockburn
gobLlK9Gc1M 9:58 Archaeology, Comics and Community: The Oswestry Heritage Comics Project
JsS6AQJ-QcI 10:14 Visualising Complex Material Trajectories through Creative Ceramic Practice
8AFwwfQJoK4 6:45 Site over Time (Digitally Printed Cotton & Wadding)
dqdfovAO7a0 10:48 The Reliquary Project
Y3dQIBoVrQU 8:42 An Ode to Hiort
kAJZ8-AXiwA 11:49 An imaginary tour of Orkney from Elsewhere, and Elsewhere from Orkney
8FpahH2gtaI 10:37 SERF: designing digital engagements
Vfo1unrZJB8 8:38 #slowironbridge
lReirtMLIvw 6:41 Stone Landscape
Ruj9X0xpLU4 6:21 Plastic Earth
VnCk903GI7c 9:36 Layered history, storied layers: Historic Environment Frameworks for the Ebbsfleet Valley
eVMKZGmkcSo 8:54 Time in an urban landscape: 8-10 Moorgate, in the city of London
uo-MdQP-NLY 10:56 How can we give a voice to the archaeological record?
l6yUzxQjstc 9:27 ‘Danebury Environs – The Game’ experiments in map art
YL_BNPr1MkE 9:55 Denken mit LEGO
e081UFTe6yw 25:14 Re-empowering the artisan: a case study in CGI
1-qbsKgxv_Q 20:59 “Archaeologists assemble!”: authorship as praxis in archaeological comics
WuNHsR214xY 18:44 100 years of auteur archaeologists
Z79H03d-tFg 13:10 Virtual Archaeology: Understanding the Past through a virtual reality?
qw_J_Hy9WS0 18:03 The Queer and the Digital: Critical making, praxis and play in digital archaeology
eOQrfVLL_MQ 19:03 Seeing History through a SCHARPer Lens; exploring the Wemyss Caves through community film making
aNKGMmpJNy8 11:06 Auralisation making in practice; a very visual undertaking?
xnQgw0X1PL4 12:57 Artefact Life History
9XVmTHT65AE 14:44 Geophysics: creativity and the archaeological imagination
RF_g55mBYOE 17:29 Different expressions of the same mode: apprehending the world through practice, and making a mark
rMLkXTIg8xU 14:25 Extended Practice and Digital Representations
6P5KnGpJX-A 15:57 Creating a Political Base for Archaeology: The Greater Manchester Experience
7qDsLbxJU8o 13:40 Death: Mirroring life? An exploration of the perspectives gleaned from skeletal and burial material
qM5ZGJyvJ1g 15:58 Assume the deposition: The position and effect of curated early Anglo-Saxon objects
y4IXhWqPZik 17:51 The man with the stone in his mouth; and the symbolic replacement of severed body parts with objects
kALEo3LLDW0 19:51 Punitive postures for the early medieval deviant dead
n-5Jn_0FCbs 15:45 Facing the dead: Investigations of mummification and its social dimensions. A study of Garton Slack
ii_psDXcjp0 10:14 Burial positions past and present: An introduction and some critical thoughts
v31JonjcvQ4 17:08 Local archaeology for local people?
fbBsvDKzemI 19:44 Local archaeological activism: The trials of leading horses to water
o9SHyT1smnE 14:53 Turf Wars: Politics and Peatland Archaeology in Ireland
lpPWaBiEN6Y 22:53 Where history meets legend… and produces political sparks; presenting Tintagel Castle, Cornwall
2ixtVc3CzPo 16:34 DNA and Soil: Archaeology, Palaeogenetics and Nationalism
K8a5CP2V7Pg 16:26 "Another Brick in the Wall" - Archaeological Outreach in Schools as a Political Act
v59DbP-Tun8 16:39 Time to bite the hand that feeds? Or, at the very least, give it a long, hard squeeze
s5wLQtVz-6Y 16:21 Selling a political framework for the Public Value Era
JWMbMaKjcsY 17:26 Quitting my archaeological job as a political deed.
UpDDujPR8Ww 14:16 Commercial archaeology and narratives of British exceptionalism
c3XRxxiGpa0 17:53 The politics of Brexit. Why archaeologists need to be concerned.
S-IGZoeuPyc 18:51 Clay and the art of experimentation
aYl3cRdGX_E 16:36 Substance worlds: engaging matter beyond things
xVLUJPQ-fSE 11:43 Archaeology is the science of aggregates
BaxgMRib9Wo 14:25 Dung to ash: the alchemy of prehistoric everyday substances
WjDTEK8H5iw 17:03 Bodies that co-create: the residues and intimacies of vital materials
L9MJwm5XR90 9:06 Skateboarding through the Generations
UbghGMPX4IM 19:26 Never Say Last Run: Skateboarders Challenging the Terrain and Becoming Involved in Archaeology
7j1_S2ywZ4o 18:51 Gender and skateboarding: What can skateboarders learn from archaeologists?
GitFwmfvmA8 16:59 Pathfinding and Pastfinding: a conversation between parkour and archaeology
H0gN-76gduw 20:16 Drama in Archaeology: Performative archaeology and Process Drama
BTnyrpH0ew8 16:50 Scenographic deconstruction of national mythologies connected to WWI & WWII in Norway
uEveL3K44iE 19:02 ‘Seeing’ the past, a dark art? Maps, sections and images of the Palaeolithic past
4QQGEOnz4mA 20:26 ‘Hearing’ heritage: The Kirkyard of St Mary’s of the Lowes
tLrHdxtiuiE 18:41 The New Migrationists? Resolving studies of ancient DNA and archaeological theory
dEzK1UV_Zt4 18:10 Prime movers: Considering the "driving forces" in the exploration of Creswell Crags through sound
IDDJbagOSmg 15:55 Flint Provenancing: Combining Archaeometric and Archaeological Perspectives to Tackle Stony Issues
KhyUgTKKaas 15:05 The act of creation - tangible engagements in the making and ‘re-making’ of prehistoric rock art
sX8uDc2Yayw 21:11 Neolithic stamps in the Balkans: the enigma of vibrant tools and their missing imprints
RpLjnIHsAP0 16:13 The Nile in the hippopotamus: Being and becoming in faience figurines of Middle Kingdom
KhKvEUgOuRM 18:23 Conceptualizing Human-Mountain Relations in the Ancient Andes
Zgz6rlZLDZA 14:02 A fresh slate: image, practice and multiplicity in the Manx Late Neolithic
yGltD_DdA5o 19:47 Connectivity and the making of Atlantic rock art
jnwNeqKRxz0 18:35 An Archaeology of Anthropomorphism: upping the ontological ante of Alfred Gell’s theory of art
wGfWDdiMJTs 19:54 Beyond form: Iberian Late Bronze Age stelae in-the-making
lZG-hg_SahM 18:22 Dirty RTI
6nycfhiu_m4 11:16 Going beyond the safari: the potential role of the Environmental Humanities in sub-Saharan Africa
9egfkRkTFfA 18:09 Towards an ecocritical palaeoecology
bDzAFOI5VbE 18:36 Palaeoparasitology and histories of environmental justice
L4ryRFblvgY 19:18 Archaeology and hyperart: wrecked and weird
V-aobxTsGJg 19:00 Where the past meets the present. Modern families living in the Iron Age
hhi4SV7xoBY 15:36 The uncanny archaeology of buried books
s-el5hhZN0Y 14:40 Among the Tentative Haunters: Nautical Archaeology and Other Non-Senses
URhleAU8Yvw 20:57 “Question your tea spoons:” The politics of familiarity.
mTjoJX5UKiA 9:51 “Strange and estranged: on bringing things close”
yso0IotLjvM 15:41 A research-historical and bibliometric perspective on Neanderthal occupation in Scandinavia
dAUj7Cplq8Q 16:23 A History for Prehistory? - Rediscovering the lost voices of the British Iron Age
TS6y7LLi1TU 11:52 Where time stands still: changing practices of prehistory display in the United Kingdom
wQoeG35D-3I 19:08 Prehistoric Sex Objects: The Phalli of Windmill Hill
w6IOvEZGMBk 16:06 The snowball effect: research bias in prehistoric archaeology
udevUJdaItQ 12:48 We Are Not Alone: William King and the naming of the Neanderthals
xbJjn9R7Guc 9:09 Gender (in)equalities in ancient Near Eastern studies: a retrospective look
jkTfHhCaeYE 8:34 Making Archaeology a Safe Workspace for Adults with Autism Spectrum Disorder
-7riEdE-nEA 8:05 Gender, Sex and Minority [In]Equality in Archaeology
ToSg3CZnSr4 14:53 The Eneolithic adornments as components of the costume. The case of Sultana-Malu Rosu cemetery
2VZYJiz_94I 13:28 Sewed jewelry in Old Russian costume
5iHH3jQj2xI 19:59 Purses-amulets from territory of Tuva in I mill. BC as a phenomenon of cultural symbolization
vYG3aeCpuD4 16:55 One costume – complex meanings. Women’s funerary dress in 12th-century North Estonia.
YtWNGm3hQ2U 15:17 The variety of female textile funerary equipment from nineteenth century (Biala Rawska - Poland)
RoACCid432A 10:08 Transformation of Zupan from military to elite element of the men’s costume among gentry
THK2_rdV5MY 12:06 Small adults – forms of children clothes until 2nd half of 18th c.
cqY-AVX_P0I 15:20 Women’s headwear from the burials of the III-IV centuries in Suzdal Opolie
fZhc8LDGuyA 18:04 Late Bronze and early Iron Age costumes in the Southern Baltic: unknown and unexplored
Bf5g98ZASuQ 15:33 Two costume assemblages from the Dnieper region: on the reconstruction of identities
sF2-EQ8sGnM 12:17 Attire of the adornments: the main historical stages: natural, heavy-metal, jewelry, the accessory
eGrRooh0b7g 14:45 Possible reconstruction of female dress in Grobin- Baltic influence and Scandinavian fashion
uZYmRO1sAQI 7:52 Costume of deads or costume of livings?
xFni_j1XkNU 14:45 Annular brooch in the context of the late mediaeval costume and worldview
Sm7Htb01bxM 9:43 Jewelry: decoration or a detail of construction? Theory and practice
Jbja3_NCnDI 14:55 One’s destination is never a place, but a new way of seeing things: Touring a Heritage trail
iCh5zd8qAuM 14:04 Museums in Central Asia: The Role of Cultural Institutions in disseminating Information
xBduT0ZrWVw 18:28 A journey through time: sensory tourism in the context of archaeological museums in Poland
raY-NAj5gkg 15:37 From the ground up: Experiencing Romania through excavations at Halmyris in the Danube Delta
ZkyRCqxQbpg 15:00 Unexpected experiences
ihMfMGRkqOI 12:59 Crossing borders along the Dutch Limes
Pp620LCh6yk 10:46 Bridging the gap: archaeology in tourism at the Archaeological park Emona (Ljubljana, Slovenia)
-HkPt7sz2HU 17:30 Destination management of heritage sites and towns in Croatia
EKRkYKZPya0 15:10 An agrarian town? – understanding the earliest phase of the medieval town Odense in Denmark
AplEz7h6TWs 16:21 Viking age settlement networks and the rise of the early urban centers on the Upper Volga
Sf1QNpDZZ3o 13:45 Small town in medieval Russia: the ratio of agricultural, craft and administrative functions
33P1u5wqVI8 15:35 A town in the making - exploring early urbanity of Copenhagen through the study of social practices
nFbE1Q6aIsk 16:36 Early medieval urban life in the Low Countries before the 10th-11th c.: approaches and problems
vsGapGWCSw8 15:07 Production and Distribution networks in the Diocese of Tuam, West of Ireland, AD 500-1000
QdoTASm1HY4 13:45 No town is an island
VYnSo6CoZos 15:36 Multimetal smithing - An urban craft in rural settings?
mFRR5SDtP-o 17:17 Craftspeople in emporia - the original cast. Non-ferrous metalworkers in eighth century Ribe
fanirQeWQ8k 12:06 The rural component in the early urban development of Brussels, Belgium
oDNOsLVcye8 13:09 The Trajectory of the Productive Limfjord Region AD 600-1100 – Exploring Changing Economic Patterns
ExRhSYHs7nc 14:01 The emergence of Odense, the third largest city of Denmark. Methods, definitions and dynamics
Mt67ZbWPzwM 14:23 The early urban development in the steppes
eftKt5B7ZS4 17:49 More than a landing site, less than a vicus. Medieval Gasir in northern Iceland
_p_vgwh9fXE 13:30 From late prehistoric harbours to medieval towns in the eastern coast of the Baltic
aDUWQ2T5GgQ 16:01 Jewellery on mosaics from Roman Africa. Functions, aims and reliability of representations
uiNaS_G_CaA 10:51 The origins of urbanization in the forest-steppe zone of Western Siberia
ihoOjtoUbwI 14:24 How and when Venice became Venice. Framing the urban development of a trading town in Ital
i3EZH6O-VAI 15:03 A Subersive Urbanism: Venice in the 9th century
1xDYDVJEwCM 17:42 Changing Places: a comparative discussion of London and Tours in the Early Medieval Period
TQlrhVA0OdA 17:35 Bypassing monolithic entities: diachronic and spatially informed approaches to early medieval towns
mzZ-gohTonc 18:36 Before and after the emporium. The early and late phases of Walichrum (Domburg-Oostkapelle, NL)
J6JGBtPB7kU 23:13 Emergence and Downfall of Viking Towns: The Concealed Phases within the Archaeological Record
bQ8gr6QvMjI 13:27 Discernable Traces in Textil Archaeology
88xAtzecLRU 13:37 (Inter)regional identities - performance in EIA sumptious burials of the Low Countries
jpRdOlngP_Q 20:36 A different vision of ancient settlement dynamics
1FYaxWjHtq8 24:58 Setting the scene: characterising Batavian society at the edge of empire in the Dutch river area
M_UHzKUpeBc 28:02 What did the Romans ever do for us?
5jp0gyF6iJs 28:14 The economy of Roman wine. Productive landscapes, archaeological data, quantification and modelling
NvD1aatyJ-o 30:28 Simulating land-use for the Lower Rhine-Meuse delta in the Roman period
GQfofTlHO20 22:57 Modelling evidence densities: past population variation or modern structuring affordances
OGOMskK6twI 25:21 Investigating the agricultural economy in the Roman Dutch limes zone via agent-based modelling
-W3MSuG7CNc 22:50 Linking archaeological data to demographic models of the Dutch limes
2MjkhMDNBbo 14:23 Diverse movement in a dynamic environment: modelling local transport in the Dutch Roman limes
QuMP9PAXtBU 29:38 Postdicting Roman Roads in the NW Iberian Peninsula
OhV_gdkdtmk 20:29 Walking Between Gods and Mortals: reconsidering the movement of Roman religious processions
G9RBE0PzAms 30:25 Network science in Roman studies: the potential and challenges
B5EuNaLlcFE 17:40 Possibilities and challenges in the use of networks to study socio-economic relations
ojuuOB2p-Lg 22:23 Network analysis to model and analyse the Roman transport and mobility
BTWngPQXNdE 18:52 Multi-scalar approach to long-term dynamics, spatial relations and economic networks
NJirwfDh8IE 22:27 Farmers and Forts in Moesia Inferior: Modelling agricultural strategies on the Danubian Frontier
U4E2iU0d0fs 27:41 Modelling the cultural landscape of the Dutch Roman Limes: approach, results and prospects
HkyOBT0oWRo 20:00 Integrating detection and modelling of ancient pathways
Mv45bJSh7kM 22:25 Linking archaeological data to demographic models of the Dutch limes
Gk2Hv4aqfrM 19:08 Is it gold that matters? The role of sumptuous burials of women in Bronze and Iron Age Europe
qIgmC9RTtA4 15:45 Scarcity and dearness: an obvious link? Elite’s graves (1300-300 BC) in north-alpine world
kLRIVF1ohSo 18:49 The Grave’s A Not-So-Private Place: Elite Multiple Burials in Early Iron Age West-Central Europe
9iTOEutDxpk 18:12 Barbarian chief’s “secret” burials in the forest-steppe zone of Eastern Europe
ZUMWnimUjrs 17:47 Commoners and Elites in Southeast Kazakhstan: Kurgans and Settlements of the Iron Age society
Js4p08cYG3U 18:53 Miniaturization in the Production of Funerary Aesthetics in the Pontic Iron Age, ca. 600 - 300 BC
ccbiUgfSrus 15:48 Another kind of archive: on the preservation of publications and born-digital material
00-fTTCFYvw 17:13 Endangered Archaeology in the Archives: utilizing historical aerial photography to assess heritage
IpK-8j9GUzg 16:17 The geography of a cemetery – the early Christian cemeteries of Skagafjör ur, North Iceland
nQRCedr57ss 13:54 The Aerofototeca Nazionale of Rome: a photographic archive for the study of Italian heritage
KDl4v7eTt5o 15:24 Analysing Archived Material to Unravel Wheelhouse Chronologies in the Western Isles, Scotland
kWu6rX2jTvI 12:23 The relationship between archive documents and archaeological material of a naval conflict
0uMIfIiNfbw 16:34 Archives and shipwrecks in the Baltic
gVPw8aj64mY 13:50 Digging in Archives: Writing the Scientific Biography of Archaeologist Zsófia Torma
mh658TVqrr8 10:30 Archives Vs Archaeology: the case study of the building beneath Via di San Nicola de’ Cesarini, Rome
mYrsFMQNNh8 18:48 Searching the archives in pursuit of ancient Cyrenaica
RTn2q4TnIWI 15:09 Archive and Archaeological Economy
6Rt-pxRv6Xk 17:29 Archives – Can You Dig It? Time, Materiality, and the Archaeology of Archives
33alht7LlsI 15:29 Ontology of archaeological sources and the possibilities of archive
GL8cnrICnCI 11:06 Archaeological archives – A deconstruction
46dzvUg6FQQ 16:48 Renovating practices in the history of archaeology
T28C5Y-4zMk 14:03 ”Small churches” in Norse Greenland – what became of them?
QORrK1aMKs0 20:44 Communities of death in medieval Iceland
SvpIUNv6VSw 17:40 Chapels, Church sites and Settlement in Medieval Faroe Islands
BRPXNH5AXA4 17:09 A landscape of belief: Orkney’s medieval churches
rUt9tqNxbvg 17:07 An abundance of chapels: the pre-parochial religious landscape of the Isle of Man
7prrEcd36a4 13:49 The bishop’s grave in St. Alban Church in Odense, Denmark
ux-Zst-f7ao 16:09 Hofstaoir in Myvatnssveit. An early Icelandic religious landscape
PDiqTKGMFTE 13:18 The Alp Fenga – Analysis of a post medieval alpine dairy hut in the Silvretta Alps
UgevCfH3hf8 15:12 Archaeology and religious identities: the example of the Évora Inquisition court (Portugal)
BFhcNIyFKL0 17:06 From hand to mouth: dietary perspectives on religious minorities in Medieval Portugal
3E8OCmpDDjk 18:17 Dealing with identities. Archaeological traces of Muslims and Dimmi-s in the Middle Mark
o8hJ5Elrlbs 16:14 Muslim and Protestant religious minorities and funerary spaces in south of France
BHtRVGD5CHk 15:47 Woolen textiles from the times of Roman influences, the site in Grudna, Poland
Ke6NiW4M30w 14:11 Technical Innovation in Flax Yarn in the Northwest of the Iberian Peninsula. The Spinning Bowl
lDqyUZXet6E 15:03 Does anybody still wear that? Notes on (representations of) Minoan female dress in Mycenaean Greece
OwA2W5yK0Z0 15:37 Beyond textiles: alternative uses of twisted fibers. Evidence from Akrotiri, Thera
NnwF1LAImr4 16:49 Tradition and innovation of textile manufacture in Early Bronze Age Greece
1nFgim4inIE 15:16 Innovative or traditional? Diachronic approach to weaving technology in Bronze Age Greece
TvOmML6jQMc 14:08 Textile impressions on ceramics from the late Neolithic to the early Iron Age in Central Europe
wJi1cw8_7fw 15:15 Manufacturing Traditions in Textile Archaeology
bcTKxzCHv8c 14:47 A demographic history of the plague bacillus revealed through ancient Yersinia pestis genomes
YBgdQs1p_zU 16:17 Germany and the Black Death: a zooarchaeological approach
6IY1_roCdjY 15:01 Plague in Valencia, 546: A Case Study of the Integration of Texts and Archaeology
Gn0SiAa-rgU 16:40 Bronze Age wool economy: production, trade, environment, husbandry and society
ZwpOWlH0caA 11:56 Analysis of a High-coverage Yersinia pestis Genome from a 6th Century Justinianic Plague Victim
VxApuvMlzeA 13:41 Early medieval burials of plague victims: examples from Aschheim and Altenerding (Bavaria, Germany)
3OToQN_1fks 11:45 Placing the Plague of Justinian in the Yersinia pestis phylogenetic context
GnUat489z34 14:02 Plague in the eastern Mediterranean region 1200-1000 BC?
25HL_jqfyJI 15:46 Reconstructing ancient pathogens - discovery of Yersinia pestis in Eurasia 5,000 Years Ago
fRyWKb1RgP0 13:05 Fleas, rats and other stories - The palaeoecology of the Black Death
fbeAcPRJPpA 33:38 From Mild to Murderous: How Yersinia pestis Evolved to Cause Pneumonic Plague
agw3NnfOpAw 15:38 Introduction-Plague in diachronic and Interdisciplinary perspective
ArrjVCIZwEc 19:17 Can we have that on a map? Open Source options for the dissemination of archaeological spatial data
iiSddmmCyFk 16:08 Consumption patterns and morphology of cattle in a Late Neolithic settlement Polg r–Csoszhalom
Wp88QhPXKeQ 15:57 ArchSeries: an R package for transparent estimation of chronological frequency distributions
WQrYbvzASqk 21:07 Digital media as an effective platform to archaeological data dissemination
XLaxmjr4hBg 15:52 From the edge of the settlement to the centre of attention - new building remains from Kleinklein(A)
jtJpLFZlwFc 14:39 Medieval Oslo’s Masonry Buildings Revisited
3lRbIIr8Wnw 18:01 Remnants of a Siege – The Siege of Älvsborg 1612 at the West Coast of Sweden
ArYyEOeLsHU 13:12 Kuressaare fortress (Estonia) as an example of the transformation of bastion fortifications
YPFTqB1zgJ4 14:25 The city wall in Nya Lödöse
uJNAhlE_UaI 14:13 The fortifications of Copenhagen: The western boundary as seen at Rådhuspladsen (Townhall square)
1omF2e9ooZ8 15:13 The Outdating of Medieval Fortifications – The Castle of Raseborg and the Town Wall of Vyborg
ZVSPRAdEUl4 15:48 Sveaborg (Suomenlinna), an 18th century sea fortress and the importance of water areas
eheTXPDUGo8 14:09 Prussian, early modern fortification in Pomerania, a result of the Prussian - Swedish struggle
6jRhEiibhCc 17:41 Breaching walls and sinking ships: the performance of 17th-century artillery
vY4oJ31jwyQ 14:31 From earthworks to scars of the cold war - 500 years of coastal defence on Gotland
vRrTkWQcqNI 14:33 The Early Modern Fortifications of Halmstad
VbQdsuq0-Zs 15:40 The bastions of Christian 4th
QP7nVVdaR2g 13:29 The Strong Link in the Chain? Jönköping Castle - a Swedish border fortress with hidden defects
7ZOGUgRdpa0 13:07 The new fortified Kalmar – a work in progress during the 17th century
5Yh5UQdMErk 17:48 The Fortifications of Gothenburg - A Centennial Construction Site
3dZ-MugAwHA 14:15 Creating a home. Ritual practice related to houses in a terp settlement in the northern Netherlands
A-7PdJfvoGc 14:20 Building on buildings: creating a solid foundation for the contextualisation of building remains
vcaRPYcSoSg 16:55 Family space vs. community space from the perspective of settlements from the Lower Danube Region
5DoDR-Ri9UE 15:56 ‘Private’ spaces???... Reconstructing the ‘living-rooms’ of medieval castles
PR5bYMVQAJE 19:18 Understanding household activities: an examination of two Medieval dwellings in Atlantic Scotland
FTyhDdzcvNI 15:28 Charting the microstratigraphic life-cycle of an early Roman urban property, Roman Silchester, UK
wSQ-1sYX7qI 15:20 At the hearth. Daily life, and domestic architecture in Early Iron Age farmsteads of Western Denmark
A10ovJpgunU 10:26 The use of architecture as cultural and socially discriminators in Iron Age Denmark
YPSQSCEF5X8 11:42 Forres Heritage Trust
cDhid10wMl0 10:59 Alyth Community Trust
_iui3qZZE1s 14:13 Am fasgadh Regeneration Company
I0BcKC7Jl5g 11:02 ONE MINUTE MAYHEM! 60-second presentations by conference delegates
ZUjuFWi74Ok 23:18 The Historic Township of Glenrea
Cx4Jqgqfhqk 18:28 The Lismore Nave Project
tRGp40mclEw 20:34 Damn Rebel Bitches- Scottish Women’s History Group
2CEguWP7jTQ 19:50 Ardnamurchan History & Heritage
dCvxvcENZlU 23:11 ACFA Tiree Survey 2016
XWaplm3n0xc 14:55 Oban Communities Trust
vBXYCrxDRcU 14:58 Aberdeen Women's Alliance
i94cAIZeTNA 19:06 Connecting Scotland's Sound Project
4BLk8LagNMI 12:58 One Minute Mayhem 60-second presentations against the clock
7adt4b8DWGc 12:33 Community heritage on Eigg
erbmDanFLk8 16:23 Hillhead, Balbithan and beyond
I-ZHjnFOxoo 17:36 Huntly Histories
vTSYpAVQCYw 22:59 The Salmon Bothy and traditional boat-building
b4KJI73EcJA 15:14 Spittal, Shielings and Stills
7OcWqLIgKUU 8:20 Summing up Day 2 of Past Forward Conference
MJty088nqt4 28:20 From interest to influence: How to be an advocate for archaeology
oqm0K1iqypI 29:50 The MAS, the ASM, the SMR and the HER – recording Merseyside’s Archaeology over the last 40 years
T5Pwr-Zp4Gs 22:03 Funding outside the box: Lasting impact on the "Other" volunteer
t9VPBQ7NwW0 32:28 Community archaeology and a new direction for researching landscapes
XydAtJh8nc8 35:37 Local Research Frameworks for Local People?
WS-vB9vZXh8 11:33 Summing Up Day One of Past Forward Conference
QDmHGBCwcHA 21:27 Getting Involved: Community Archaeology at National Museums Liverpool
TO6LRhj1YUs 33:16 Merseyside’s Archaeology: a short history of archaeology policies and practice in North West England
63VTsCPjV6Q 31:10 Making Merseyside: Metropolitan identity to localism in an era of public archaeology
SshCvLZKGa0 20:09 The Formation of the three-compartment rural house in medieval Central Europe
TuhzIx6n-K0 33:59 Merseyside Archaeological Society - a personal view of the last 30 years
GVXearTnAT0 16:16 The medieval hospitals of England: a complex issue
BwYBhlWVLw8 15:57 Medieval Roof Trusses in the Swedish landscape of Västergötland
lqy4cQHIDZw 23:59 The Old Hutt, Yew Tree Farm and South Castle Street: What those sites taught us
urhfHfgUJCc 15:15 The Cathedral of Anagni. A case study of the evolution of Southern Lazio in the the Middle Ages
9Utv0xS5sK8 14:53 The archaeology of medieval buildings in a borderland: a study-case
x_fDIlVw2M0 17:13 Living on the Edge: Cheshire Castles in Context
741RJTRYIH8 16:48 Special building materials? The architectural importance of placed deposits in early medieval Europe
eQICPkUgc7U 15:21 Urban life in an early byzantine small scale house
QLqRnSppFTI 16:13 The metalworker’s farm. A study of a medieval “bygård” in Oslo
-ZsIUZeajxc 15:06 Finnish medieval brickmakers’ marks as markers of identity
CEzfh-sK_bA 19:05 To build the Medieval harbourside of Gammel Strand, Copenhagen, Denmark
h-QZioSbiuQ 17:03 Buildings, Spaces and Societies: Manorial Sites in Normandy, ca 1050-1200
j2o_8aZ__Rs 12:45 Iron Slag and the Quest for Provenance
ny7NEi7qjGo 18:39 ‘Petrified’ societies? An Egyptological survey
GVBUdpGZZSg 11:24 Iron isotopes as a new tool for ancient metal tracing: comparison with classical tracing methods
5qQ09hSHkdU 17:31 Elemental and Sr/Nd isotopic investigation of late Hellenistic to early Roman glass bowls
ca2HhJooxLs 12:56 The potential of large-scale seasonality studies, results from the Farasan Island shellmound complex
cq6dTLwpygI 9:29 The geochemical relationship between soil, plant and streamwater; implications for migration studies
RuLB3P0FcgY 13:03 Stable isotope ratios and trace elements in modern mammal tooth enamel
yZZCYEhA6vY 12:48 Hydrogen stable isotope ratios measured in bone collagen from Danish prehistoric samples
5h_xiPuwMoA 13:33 Zinc isotope compositions of bone and dental enamel and their relationship to diet
h84Ee20iJns 17:52 Linked Open Data Approaches within the ARIADNE Project
88nxvZOL_gc 10:42 Integrating data for archaeology
4EREynksDYw 28:56 Requirements for open sharing of archaeological research data
n9yDiK0eC7U 19:09 Beyond the Pale: grey literature as a method of publication
_qtBH3Bw3nM 13:57 Antiquarians in the 21st Century: Opening up our data
QX-5ibS3tOM 18:42 Legacy data and archaeological archives in Europe and North Africa
HdmavQrPgJ8 14:57 Banded flint from Central Poland – new discoveries, new questions
tLCDamTYAJY 12:05 Production, distribution and use of Final Neolithic flint axes in western Poland
fm7wjwBNTY8 15:06 Lithic procurement as a social phenomenon in the Stone and Bronze Age in southern Norway
Tm9fcAXn4nQ 11:47 Double cache – single core: a case of long distance (85 km) stone tool refits from southern Norway
ZANpx93LGAg 13:23 Differences in the raw material preferences in Polgár-Csoszhalom, northeast Hungary
U_WmWkhusYk 12:29 Texture and function. The multiple uses of Greywacke among northwest Iberian prehistoric groups
weiVeqKSZmE 13:28 Provenancing Archaeological Obsidian from Bulgaria
5f4IdasDkK8 19:31 Obsidian Use on Islands Big and Small: Sicily and others in the Central Mediterranean
3CJOBwsv_Rw 16:52 Prehistoric dry-stone structures at high-altitude in the Alps: social, economic and cultural drivers
SxSOPm4UY2g 13:32 Stony landscape, petrified society? Relations between landscape and society
173exSn3iuc 15:50 Tracing “petrification” in prehistoric architectural processes
wKn05BbEMcs 15:46 Genetics, Migrations and Language Dispersals
sLtkv-L0KvA 17:40 The temporality of stone: communities and early sculptural traditions in late prehistoric Iberia
Y8wzkLKyokc 12:02 The hardness and the eternal: petrification of human images and social contradiction
YGrZ67mx0tY 14:07 When did eternity end? The so called downfall of Linear Pottery culture
RGegmAcCf14 15:57 Liquid time, petrified objects. Concepts of historical change in archaeology
VL9lnrXO3es 27:13 Petrification: a concrete comprehensive diachronic concept for past process comparison
U3kfPwK8YIw 12:05 iMIS for EAA Communities
cpA5MF4GKvk 11:25 From Incident to Structure. Possibilities for a network of professional Associations within EAA
j5HoOfXKBbo 12:43 The working group „Archaeology and Gender in Europe (AGE)”: views on the past and to the future
X4xlCyPKeNI 14:38 Experiences from the Farming, Forestry and Rural Land Management Working Group
3ppDRxA5MM4 22:34 Is the Lake District a rural area? - CHAT Orkney 2016
7g2zN-IkPng 21:27 Archaeology of Environmental Injustice- CHAT Orkney 2016
qMQU7Lk5I5Y 14:53 Semi rural- CHAT Orkney 2016
Vedb8r_5_iE 20:16 Rural Remainders, Enveloping Urbanity, and Encroaching Wilderness
btRlaHl7Dfw 19:29 Forestry Cairns and Rural Lifeways: Adelphi State Forest, Cyprus
tyrl63lw9pU 20:17 CHAT Orkney 2016 1(4) Matthew Edgeworth - Constructed Rurality
QVJ_5B1TYC4 21:11 Rurbanities: Recording Rural Urbanities
gMPdILd30nk 19:37 What Lies Between the Trees of New York City's Idyllic Rural Watershed? Artifacts of Urbanization
kggcrsRIZZg 15:21 Race and Gardening in the African-American City- CHAT Orkney 2016
oTjTsNQlMaI 22:27 Living the Good Life in Leicester, Environment City- CHAT Orkney 2016
x5MFedZb8Io 19:56 Walking Backwards - psychogeographical approaches to heritage- CHAT Orkney 2016
LM43-tEh74Y 22:21 Distant reading of storied lines: tracing tendrils of agency across 18th century Iceland.
MEPEn3_NzKM 21:30 Ultima Thule – St Kilda and Pabbay. Two remote landscapes in the Hebrides
PV-BS_yemJE 23:03 Terraforming Arcadia: An Archaeological Perspective on French Wetland Agriculture in Nova Scotia
o9_Llp6XRgM 22:27 CHAT Orkney 2016 Session 5(1) Jobbe Wijnen - Think big and think pig
8WK7ync3mWo 21:22 Access All Areas: Metal Detecting and the Mediation of Rural Landscapes
bo7clCjB7pA 22:38 CHAT Orkney 2016 Session 6(3) Amy Woolvin and Fiona Smith - Landscapes through walking
nrSw7S3GThA 21:32 CHAT Orkney 2016 Session 6(1) Alex Hale - (re)remembering rural graffiti art
or79lY71h3E 25:00 The Bennachie Colony: On migration and rural stereotypes in 19th Century Scotland
u2KuguR-OPI 20:48 CHAT Orkney 2016 Session 6(4) Mike Pearson - Deserted places, remote voices: performing landscape
3GayIq50y-w 22:05 CHAT Orkney 2016 Session 7(1) - Bob Johnston and Krissy Moore - In Ruins? Militarisation
rmctu8x3BEM 18:56 CHAT Orkney 2016 Session 7(3) Julie de Vos - Rurality as repression
tkvh98rD8zg 17:06 CHAT Orkney 2016 Session 6(5) Oscar Aldred and Gisli Palsson - The 'roots' of connectedness
zEiQYX8uPwI 20:50 CHAT Orkney 2016 Session 7(2) Gina Wall - Spectral Encounters
Q7pwQr4Jrvk 19:30 CHAT Orkney 2016 Session 8(3) Gareth Davies - Change and innovation within valued rural settings
crcqDK3AZhI 20:49 CHAT Orkney 2016 Session 7(4) Rupert Griffiths and Lia Wei - Re-interpreting rural margins
dvOaNyJxafo 23:24 CHAT Orkney 2016 Session 8(1) Linda Ross - The 'white heat' of technology
TD1g_uQHxYg 17:35 Imaginaries of ruralness in the construction of tourist space at an industrial World Heritage Site
NafmCW6-KtM 18:44 Hinterland: rurality, community and heritage in Ceredigion
nwKq1TxPsUA 23:45 CHAT Orkney 2016 Session 8(4) Alec Finlay - A Primer for the Archaeology of Energy
AMdjByGDW8c 16:05 The Place and Importance of the Working Parties & Committees in the EAA
KwiBXZHf3qg 20:58 Digging Around in the Graveyard
u1Yt5mUIsZA 16:52 Dunfermline’s New Museum
Jx9qNCkq0Vg 30:53 10 Fun Things for Children to do in a Graveyard
oiHCDLrlmGI 21:42 Forgotten but not lost: The Achavanich Beaker Burial project
Fg81VLRzRag 16:52 Feast and Famine: Excavations and monitoring between Guardbridge and St Andrews
4IqsoDoGcb8 19:44 The Kilrenny, Anstruther & Cellardyke Burgh Survey
ghv62bna_XM 18:33 The Construction and Reconstruction of St Drostan’s Kirk Markinch
va080RDPZco 15:52 Tales from Tullilum: continuing excavations at Whitefriars, Perth
YwfXyetpvWo 28:47 Early Historic Turf Longhouses at Lair, Glenshee
plcXXcbl8dI 30:27 Six hillforts on the Tay: from source to sea
z7vdbroXskU 28:39 SERF 2016: Excavations at Millhaugh
K44OCuw8a0c 39:03 Kilmagadwood urns finds
aPvEnishBrs 21:43 CHAT Orkney 2016 Session 8(2) Louise Senior - Flows of influence
oYy9l9k-wdw 7:48 Adopt-A-Monument Celebration Day - Tommy Lawton Presentation
Kw4aDxW-e_c 11:41 From Field Walking to Funding Awards: Our Journey with Adopt-a-Monument
D2_HOUZ10yw 18:38 Top Ten Tips for Collaborative Projects - The Torwood Broch Adopt-a-Monument Project
5SmLcP1F_Ao 13:23 The Mulchaich Adopt-a-Monument Project
-0ggja0gXm8 22:26 A View from Historic Environment Scotland
Mq1kBINaMmU 18:18 The Carn Glas Adopt-a-Monument Project
jdbHkcKMxVk 9:58 'Working with Adopt-a-Monument on the AHRC Funded ACCORD Project
knr7Gd0fB0E 14:54 History of the Adopt-a-Monument and its Impact on Archaeology Scotland
t7FhTJV_V6s 15:17 The swatch of antiques bronzes
QlOo5qoOpOI 14:39 Aspects regarding the production of neolithic pottery based on an experimental archaeological study
z481zM-H1S4 13:49 Prehistoric drilling and bead manufacturing: Experimental approach and cognitive insight
9CCsY8hlYmI 14:23 Research, experimentation and outreach in the early Neolithic site of La Draga (Banyoles-Spain)
LhZTTYdNTJI 13:51 Microwear analysis on early medieval combs
us5nAfAbSWg 11:43 Experimental archaeology in Latvia: some aspects possibilities for the future development
uF9RoTvxRSw 12:44 Six years of experimental traseology at Klaipėda University: accomplishments and future prospects
nKXGj9iax2w 9:25 Teaching Experimental Archaeology at Vilnius University
BPOM5oPW9bs 9:13 Testing twined clothing in Mesolithic
oorjsWARe0U 21:48 The “Arty” Way - Dutch Approach to the Presentation of Archaeological Heritage
NOHC3Xge_eg 16:06 Using Archaeological Reconstructions for Outreach and Community Engagement
Twanhue7Leo 23:52 As Planned, as Built, as Found: Reconciling Written and Field Records at Ksar es-Seghir (Morocco)
xRshLes7LVM 16:43 The Art of Perception in Archaeological Visualisations
w0miJMnlmnw 16:40 Illustrating 8,000 years of environmental change and human impact in the Areuse River Delta
2g5UPxBBmcU 15:43 The Reconstruction of three Roman Houses at the Archaeological Park at Xanten (Germany)
MlKdfQd6gh4 13:33 Turves and trusses: reconstructing an early medieval building tradition in the northern Netherlands
OE5X6hns4Ao 20:07 Rocking the Cradle of Scotland
RNyUMOt4fDE 15:01 Reconstructing the Past
3bJ21hEnBYU 14:49 WAC Indigenous Plenary - Dorothy Lippert
y9wiq-dA6E4 13:32 WAC Indigenous Plenary - Aulii Mitchell
mKrK9GDKjyo 10:26 WAC Indigenous Plenary - Sayed Gul Kalash
wGmVPWSXmT0 16:58 WAC Indigenous Plenary- Paul Tapsell
HfEqK3tCrYo 21:31 WAC Indigenous Plenary- Tadashi Kato
Cxgaj2EcHkY 4:10 WAC Indigenous Plenary- Koji Mizoguchi
jmXg1Jv9YoY 8:59 WAC at 30: Give the Past a Future- Glenn Summerhayes
suwgcwTM3_M 13:31 WAC at 30: Give the Past a Future- Mónica Berón
Etfib7FFDzo 12:09 WAC at 30: Give the Past a Future- Ndukuyakhe Ndlovu
IkHHXrGqeGI 8:39 WAC at 30: Give the Past a Future- Catherine Frieman
xomjidSauoY 12:07 WAC at 30: Give the Past a Future- Diane Gifford Gonzalez
6yyRRMXPan0 7:37 WAC at 30: Give the Past a Future- Jean Bourgeois
mzPA0Ks29d4 23:41 What does archaeology have to offer (Today)? Archaeology, creativity and technology to empower
i-Ej589fi30 9:06 Young Archaeologists Club: making a significant and positive impact on the lives of young people
EnT1lIw7rUg 32:42 Achieving And Evidencing Social Impact In An Archaeology-Based Widening Participation Programme
-ke5zLMWo6Q 21:39 Diversifying The Future Of Community Archaeology: Ethnicity, Disability And Affluence
n6fdLqQU7nA 14:49 Informal Education As A Means Of Social Integration
iiAYZye7jiY 19:43 Towards a narrative-based analysis of landscape development
6Hme4xlEaTQ 25:12 The value of ‘informed’ rapid identification surveys in the assessment of the heritage impact
FI4m8QiSQsI 18:58 Landscape archaeology in the recent past, present and near future
MYopVVOA8RM 17:16 View from the coalface
GcNXVaxRVeg 22:54 Bronze Age fancy footwork : Archaeology, schools & Bristol Museums
TehrJakTFNc 19:00 Danebury and the Andover Museum of the Iron Age: the impact of the new national curriculum
MdXjEwTIXxU 7:56 WAC at 30: Give the Past a Future- Koji Mizoguchi
tlAVFmfbo0M 17:16 Teachers and archaeologists working together
x_W3lpLYW_A 21:52 Archaeology and Classics in the community
eNG8EppVlBs 17:57 Giving teachers the tools to engage with archaeology at Durham University
aXglFclc8DU 16:59 The outdoor classroom: using the historic environment for interdisciplinary learning
w78gBOpv2ik 51:27 Chartered Archaeologist Q&A
vmchK-UzH7M 20:16 The information archaeologist: learning skills from context
GezjeXS1hVs 26:41 Ancient ales and extreme beverages: an interview with Patrick E. McGovern
N4_VLqEVW_0 16:33 The Old Brewery
uHP9HU93Azs 7:56 A manifesto for the archaeology of brewing?
j1PlCJB5NJg 29:07 Old and new brews: the archaeology of brewing in a New Zealand sociohistorical context
rimdvVxMSb8 25:42 Beer as social phenomenon
nOabeXu2ZME 26:25 The application of structure-from-motion as a documentation tool in forensic archaeology and beyond
-TBnUN2ClrI 37:20 Cloud atlas case: how 17th century actions led to a conviction in the 21st century
osgvX6UhjKA 29:47 The Building Cost Information Service and its applicability to commercial archaeology
EdfAviiXIxE 25:17 What is a Professional? the view from the ground
KuPtPEsPizs 21:43 On the right road from the start
okmu_DB6bQ4 33:43 Remodelling the market: improving professional practice, understanding value and risk
6-9Mz6BfoHY 24:25 Stewarding Scotland’s coastal heritage at risk
ijVyun-0OPg 20:14 Enriching the list: crowdsourcing, public engagement and protected heritage
jwkG4EERj8w 19:02 A Friends’ Group: Impact on participants and sustainability
pohBD5gAXVQ 21:44 Creating an archaeological community – the Greater Manchester legacy
efCp7dUgoZw 19:49 Archaeology Scotland’s adopt-a-monument scheme – twenty-something years of community led stewardship
zgb6HJIgmfA 14:05 Closing of WAC-8
83FTIy_npS8 14:38 Doing archaeology in the UK – consultants and contractors
yY1upvl4Vpg 16:50 A contractor’s dilemma: archaeological regulation and ethics in the United States
HA3iBZv0r9c 12:19 Is archaeology worth regulating? Challenges to professionalism in the UK
cWpUXNkcHzE 31:51 Advancing archaeological professionalism in the US: the Register of Professional Archaeologists
i-n8Sfz8JhI 20:55 ScARF: Knitting together the Scottish Archaeological Research Framework
7AT__2aXg7o 20:04 Public-funded archaeology in Wales – the past, present and future
2pCfNLdBwOQ 19:54 Powering the heritage research cycle – developing ways to improve access to information
kS_0LzgJl-A 14:10 People, place and time: approaches to the historic environment and HS2
DQorDQb6skA 22:32 The importance of partnerships in non-commercial archaeology
MaUcu_0FU6g 15:06 Quay Meadow 2015: Trowels and tribulations
cGPE3iMB9eo 27:22 No strangers to blue water
MJKnKRJqAcQ 19:21 Embedding practitioner skills in undergraduate learning and teaching
Samcbsxxtl4 15:44 All plain sailing? Challenges involved in community archaeology projects
pxBmOHgvmNI 14:36 Can we ‘future proof’ community archaeology?
q99AypqqVEE 11:54 What do YOU think community archaeology is? A definition from the bottom up
p8Q-P5o2PzI 12:54 The significance of historical research to participants in 2 community archaeology projects, Wales
J3zOXdREcgk 11:16 Assessing the value of community generated research
Y3wcXaubE_Q 18:59 Training the next generation of archaeologists: how a smaller company can do it and why we should
EF1xmGD3deY 28:08 Training case studies for archaeology
2CvNrJ8vpQs 20:35 An exploratory use of 3D for investigating a prehistoric stratigraphic sequence
3lF9r5ble_w 21:28 Wet Wet Wet – Maritime archaeology skills training
AL76pvI-KKw 20:53 Vocational training within the commercial environment: the trainee scheme at MOLA
a8bc5hgKCvc 20:47 Representing Archaeological Architecture―RAA
G4XYwHBaULU 20:01 Virtual Cilicia Project: Digital globes for communicating digital archaeological heritage
bmIJX0y0eEE 15:49 A virtual reconstruction of the sun temple of Niuserra: From scans to BIM
iAfe5eL51qU 21:03 The building survey of Kaasan Church
hUerrBGtkLs 11:51 Integrated methodologies for knowledge and valorisation of the Roman Casinum city
acG_cOCrQVo 16:03 A new approach for the study and presentation of an archaeological context
rXJTYdpdl60 16:20 Digital Archaeological Dissemination: Eleniana Domus in Rome
GXV_oYEjaEs 18:23 Can you analyse that? Fitting simulations to idealised outcomes for the origins of farming
nVAK6ovom-k 19:37 Content or context? Model selection of settlement growth models using entropy maximization
SNhV0m36aTc 13:08 President's Opening Speech at WAC-8
wdOYFZrvOBc 20:33 Evolving hominins in HomininSpace─Genetic Algorithms and the search for the perfect Neanderthal
0A0d-3TMWMI 21:58 Everything seems possible: Exploring the parametric space of a simulated prehistoric scenario
ww7-h7GEbIM 24:32 The emergence and process of formation of the La Tène cutlture settlement system in Upper Silesia
52fnrqYVqa8 21:16 An agent-based empirical model of collective seasonal hunting
wqjmfy_Impg 18:16 An agent-based modeling framework for Out of Africa hypotheses
E2EYNvNQ4O8 19:44 Economics and demography of the first farming expansion in the Balkans
3xwtmq1OnIw 22:41 Examining the spatio─temporal boundaries of the Guaraní expansion into the La Plata basin
fWarjQlMFSY 18:00 The versatilist’s story of human dispersal
RmcP4z-MOzs 21:37 An agent-based approach to weighted decision making
0A1S3xkFLm4 21:31 Reinforcement learning for decision making in agent-based models
yZieVsQYXVA 18:59 Simulating archaeological landscape formation to understand late Holocene population dynamics
f42XdqdzclA 19:53 Agent-based modeling and complexity science: The next step in archaeological theory?
ie4D8LJ3mNo 18:36 Assisting detection of rock art on lichen covered surfaces using photogrammetry and 3D modelling
nJb6xgO0ce8 19:49 Ex-situ preservation of exposed painted rock art. Applying photogrammetry and color manipulation
VY5FWHjBEEw 22:25 Documenting facades of Etruscan rock─cut tombs: From 3D recording to archaeological analysis
wOm5dNRE-bU 21:35 Epistemological considerations on image-based 3D representations
XinJEpjgBK0 16:52 Obstacles and (hidden) opportunities of magnetic prospection in challenging environments
7wABtIMccYY 20:41 Looking through the rocks. Geophysical research on the agora of the ancient city: Nea Paphos
RufysvQCxlc 21:29 Understanding contrast at Busayra: Geophysical surveys of an Iron Age settlement in Southwest Jordan
d_jZ_a5aajs 25:20 Magnetic geophysical prospection on prehistoric iron production sites in cultivated contexts
mPd1K4RI0QA 17:06 Geometrical and planar graphs in ancient iconography studies, a heuristic tool
UoaOOEGxTbY 18:20 Least-Cost Networks and Network Analysis: Modelling trade relations in medieval East Central Europe
cu_aeIXmhHE 19:39 Wine trade from Roman Crete: Onomastic─geographic network analysis
W_yXXzK529g 19:47 Exploring formal SNA approaches to funerary contexts in Early Iron Age Italy
Z9Ls46e4coY 22:22 A guide to good practice for archaeological network science
I_bk2qdBeTQ 25:04 Being there and then: Introducing Cultural Presence in Virtual Archaeology
FWO1FgtwUxg 24:57 The apparatus of digital archaeology
MZiDCuSE51Y 21:56 Digital interpretive technologies: A way into difficult heritage in the Middle East & Central Asia?
inCFCZfcQeo 20:55 The lives of digital machines: Evaluating the significance of historic computing machinery
hdfrJtBmQoA 23:06 Communication in archaeological fieldwork: Responses to a digital workflow
C3K3WsP_paI 21:54 How raw is raw data?
Bz0DLyRpKgI 8:55 Lived experience and digital approaches
qXKiESzg7ag 27:19 Theorising the digital turn in archaeology
MyXQXBuRLhQ 19:42 Sustaining community─sourcing platforms for heritage management and conservation by co-creation
yny367X3oMQ 16:41 DOMUS: Cyber─archaeology and education
jQJR6PivSSc 17:24 A plea for (non-mathematical) reason. Rethinking the use of computational methods in archaeology
SBqUZ25PqCo 17:07 Photomodeling and webmappingn on archeological site of Carthage
wSCtrq_JMFM 20:55 Rekrei: A public platform for digitally preserving lost heritage
0oHaONM7JdE 23:13 A 3D visualisation approach to the functional study of Early Upper Palaeolithic grinding stones
7LWl2Cn1NTo 23:58 Using Google Earth applications to enhance public engagement with cultural heritage
-xx3NyGvcMk 24:06 Experiences from the re-reading the British Memorial Project
0zEEHdd66Zg 14:31 From survey to 3D modeling to 3D printing: Bramante's Nymphaeum Colonna at Genazzano
16OLm8u12c8 9:16 Reconstruction of Koch, Russian rowing/sailing boat of the 17th century
g0YaWDrl5qI 19:28 A comparison of methods for creating 3D models of obsidian artifacts
fF0IJpkabKY 14:03 Application of Computer Vision algorithms for automatic classification of archaeological artefacts
VV2ep-yficA 20:24 A machine learning approach for 3D shape analysis and recognition of archaeological objects
2uobS7rymNI 11:17 Automated heritage monitoring software prototype implementing 3D technologies
QYJTEsq_e6g 18:30 Auralization: What can acoustics tell us about digital lived experience?
gIaBP8uYztE 26:04 A review of the use of 3D printing, touch tables and virtual environments to engage the public
QNdffSaPl8Q 18:41 From the largest to the smallest: The use of the latest technology in digitalization of the objects
arHrJhEOOWU 11:02 Fancy doing some networks?
e_r5QUt027Q 14:30 Building on expert advice to create an informed model
ptOpca-j1VA 17:04 Validation: The painful moment when the model meets the data
RyC31tJBs8U 12:46 Proof of concept: Verifying ABM with analytical methods
5VkO_Rnm9zo 13:24 Lessons already learned: Drawing from the best software practice
vZ3JjAEiy0E 1:42 A fuzzy illustration from the 2014 Scotland's Community Heritage Conference
zpXLyEzP9Gw 10:50 ABMs, because they’re worth it? Alternatives to our favourite method
Eh_fihjAM4U 15:23 Models: ‘Small and elegant’ or ‘complicated but realistic’?
McCjFjvQzxU 11:19 Simulation as middle–range research
CuqUGtBLWnQ 27:00 Model selection: What is the ‘best’ model?
vJYb9yOUmzY 13:31 What is complexity theory and why should we care about it
XGuDB_VTukM 16:16 Why Model?
2A_KnoD90xc 15:54 Vertical aspects of Stone Age distribution in Norwegian high mountains
HU8yDwRXXxc 19:07 Management of raster data and their dynamic visualization within the ROCEEH─ROAD System
68bQakQOGH8 23:08 Endangered archaeology in the Middle East and North Africa: The development of a spatial database
KzeYUNfrcnE 15:59 GIS-based data integration for mapping paleoenvironments
QN1ctC1y_wc 27:06 Transport and trade: An energyscape model and transport network approach for trade in Roman times
cckbg95zC2E 19:10 From sea to land: Reflections on freight traffic during the Iron Age of Northeastern Iberian
_m5XMYaVuWE 9:51 The need of topographic restitution in local mobility analysis
5539uZSpCAI 14:24 Testing the validity of network analysis results in research on local transport networks
5f0yPwtiXeQ 18:36 Comparison of regional and local transport networks of stone-walled structures in Gauteng Province
RJm3WpTNFh8 21:56 A network model for the evolution of terrestrial connections in Central Italy (1175/1150─500 BC ca)
1SN9AjBO6Do 18:06 Archaeology in the GIS portal of the National Heritage Board of Poland
F2bvyHsg_Tc 23:38 Historic Building Information Modelling
fm144S_Sbyo 19:02 Digitalizing the Archaeological Process in Sweden
1MhMLCQyV_0 23:51 Switching to digital tools. Archaeological heritage evaluation for preventive archaeology in Hungary
7K2WY9N1J8Y 23:38 Archaeology and Geohistory: building a multi-user platform in the Brussels Capital Region
Jkx5aGMoyeY 19:41 Saving Treasures: The DANS digital archive
msfbcIM_yTE 20:01 Current state and future visions of virtual research tools in Czech Republic
Ht6jzts9eSc 20:57 ASA: an Open Source WebGIS application for Albania
y8fb34f1eFI 19:00 New opportunities for access to cultural goods by the Hellenic Ministry of Culture and Sports
WwsWcj0mSqs 14:56 Rediscovering the Barrowburn Mill, Coquetdale
PBsaP2_Olm8 19:08 Beyond the Wall: Life and Death before and after the Romans
va2_Hx4cscs 25:55 Shootinglee: Hunting lodge, Forest Stead or Toun- survey and excavation
o2__RBTp1sc 31:13 Peregrini Lindisfarne Community Archaeology Project
g2a1rn-eccQ 28:25 More Progress on Bullets, Ballistas and Burnswark
twkqs2SBFuc 23:33 The Black Loch of Myrton: An Iron Age 'loch village' in SW Scotland
MjqfafAvIn0 20:48 Recent archaeological measured survey in the Tweed Valley Forest Park
3DBXST9LDEE 23:55 Ways to Flodden, 1513
Cnd7FalUYVg 27:22 Sculpting the Past: Exploring the art and history of George Sutherland & Sons, Sculptors
11ig4FBqSus 18:28 Come Together: Recent Work by Adopt-a-Monument in Southern Scotland
wsN0nFIWDyg 25:59 The Underexplored Archaeological Riches of the Borders
TI2aTcgvbX0 16:43 Application of New Digital Technologies in Archaeological Heritage Management in Hungary
4InQSmD0c40 14:56 On-site presentation of the invisible prehistoric landscapes
hFMKaV8N6lI 27:51 3D Icons project, and 3D Icons Ireland
n89uqFqQJgU 18:49 Why the historic environment needs a Spatial Data infrastructure
1-880BL3eQE 24:22 Long term data preservation and re-use: the work of the Archaeology Data Service
-zZp67pKFjg 16:59 Survey2GIS - A flexible, open source solution for transferring survey data into GIS
aIwK_PFIUOQ 17:26 Environmental archaeology: theorising the ‘wild’ in contemporary archaeology
yWdczq-0FxU 14:43 Following my own path: middle ground social zooarchaeology
AjCOlliR7kM 15:03 Ultra-sonic research on submarine hulls
wSNTU1AgrCo 14:12 Non-invasive archaeology in the Republic of Moldova
SD_N6USzw6Q 18:29 High resolution remote sensing data and the mapping and analysis of the archaeological landscape
Pc9pqYOmq6s 25:09 The Rae Project: Digital Documentation of a Nation’s Heritage
5Wt3MizGsiw 25:21 Pelagios Commons: Decentralizing the Web of historical data
8q4RyWSXPGc 17:53 Where is the House of the Dwarves? Enhancing granularity in the Pleiades Gazetteer
R1K6DMqmL-Y 17:51 LOD for Numismatic LAM Integration
msDK7pobuwE 22:13 When data meets the enterprise
E1pZD1lCnYQ 16:36 Linking periods: Modeling and utilizing spatio─temporal concepts in the chronOntology project
FefUJdLlLpg 17:41 A Linked (Open) Data hub at the Norwegian Directorate for Cultural Heritage: A case study
Z7xEWbaPMPM 24:33 The Matrix: Connecting time and space with archaeological research questions
gzRn4Xd6c8I 21:03 An ontology for a numismatic island with bridges to others
i9JaRG43P1U 15:57 Commercial environmental archaeology: back in the dark ages or a potential agent of change?
5GOPG1O9ev4 14:57 Beyond extractive practice: bioarchaeology, geoarchaeology and human palaeoecology for the people
qd8M1OlvP3M 14:41 Geoarchaeology: a framework for cultural heritage often ignored
SvEOUJF38Oc 12:48 Who cares about bones? The relevance of social zooarchaeology to wider archaeology
YMojTZKbwSw 19:26 Environmental archaeology – a laissez-faire approach
e71LJe8NcO8 33:17 The experience of an early career archaeologist
OVBEW_9diiM 11:06 Rules of engagement: a student perspective
pCfDKMqhg40 20:30 Kids In museums
diVWHTjEl3A 24:04 Archaeology for all – even young people!
9LldTAcyejE 20:31 CITiZAN: Young people and a national community project
SelGTXyZ-iw 0:37 The British Archaeological Awards 2016
2KceiLhUupE 15:07 Bodiam Castle and Longthorpe Tower: elemental readings of later medieval building design
555VYvW3HTg 19:51 Scientific fields? Medieval peasants, sustainable farming and elemental theory
9troIslQOaA 18:43 The Medicine Tree: pollen analysis as a window into the elemental world of Tibetan Buddhism
E8WlklLNxxg 17:39 The slightest elements of material culture
DWPNlng7dlw 17:15 Getting a sense of humors in zooarchaeology
EuLEnKnQCdo 13:47 Elemental theory: a dummies’ guide for archaeologists
0xX6rHiqodA 14:46 Food, identity and humoral theory in early modern England: a case-study from Leicestershire
X9oSPq_JPJg 14:43 Art as data: Studying corpses by drawing them
BltNSQhiBOo 19:21 The Maker’s Mind: a perfect circularity
bI078kRfqm4 18:04 Crafting contemporary heritage: perception, performance and thinking with greenwood
ATAkh3ZHVmc 25:25 The Pallasboy Project
o66wWwC6IpQ 16:23 Imaging time in the fine art/archaeology interface
2ihc2g7aDkw 17:54 Mapping sound: creating a synaesthetic landscape
PMEtdPgwef0 20:17 Introduction to Rethinking the Archaeological Map
X-ZcPvM6MNU 19:56 Mapping risk: new visualizations of maritime networks in the Aegean Bronze Age
kj3zMDSSmns 21:20 Challenges and opportunities in the interdisciplinary study of religious relics
1r0dFKiaugM 23:41 Rethinking the conversation: a geomythological deep map
Gf94U-Kmtug 27:59 Text and matter intertwined. Testing interdisciplinary on the case of inscribed stirrup jars
zG3hCvIaJjA 25:27 If the (concealed) shoe fits: The logical pairing of archaeology and folklore
enaxDruVs-c 23:02 Automating causal explanations of observed features using temporal planning
GAMRruT31xU 24:36 Consuming pasts: a storyteller’s take on taking
zSnNNlnZcH8 14:21 Philosophy and archaeology: an underrated relation
2RlkNxbTp7w 21:50 The ultimate post-excavation experience: fictionalising La Hougue Bie
ggBgOmrJGqk 20:58 Ambiguity and omission: creative mediation of the unknowable past
Q1C5iR85OtM 22:07 Try walking in my shoes: empathy and archaeology
Pq2-VABekJw 20:14 Imagined realities in the portrayal and investigation of the British Mesolithic
WmDcdFlVC_k 18:51 Writing wonders: poetry as archaeological method?
SyvJ4Km6HxE 18:33 Interrogating a new discovery of figurative early prehistoric rock art from the Lake District
lYEp2WYO-ac 17:02 The cornflakes of prehistory: the nature of fact and fiction in archaeology
_CrkaJ73rSE 18:42 Producing petroglyphs: the image and the technique
kocHlELwcHc 15:29 The Manchester's Improving Daily Project
ghuOzOjnsps 22:30 Tyrannical Tales? Fiction as Archaeological Method
ZRSw1ga57OU 17:30 The importance of colour within prehistory: identifying colourscapes within the landscape
n170RZKWgs0 17:34 Introduction to Heterarchies or Hierarchies
FbFB0EGXJU0 18:21 Messy materiality take 2
6IVrySU4Ng4 21:28 Scottish hillforts – hierarchies or heterarchies?
5rrQvlcFFYs 20:19 Heterogeneous heterarchies? The dynamics of power in the Iron Age North-western Mediterranean
xUx1jmOJ5rg 18:21 Making meta: towards ontological heterarchy
cXy2-etUERo 22:50 The significance of the landscape: towards a non-hierarchical approach to heritage protection
NtbuzA3Djl0 14:18 Institutionalization as a form of social organization
Y3IeNYjKFlA 21:59 Hierarchies or heterarchies of settlement and social organisation in landscapes
jMB3-Yv9M0M 20:10 Inclusion and therapy: archaeology and heritage for people with mental health problems and/or autism
mEF7n1_PJKs 18:53 An out of the box perspective on archaeology and heritage as contributors to dementia care in Europe
2k23Yr5lfKk 18:07 Are you OK? An exploration of suffering during archaeological fieldwork
QEpZOUhB1H8 21:06 Myth, materiality and mental health
evBCSy4USVE 18:58 Are museums in the United Kingdom less objective as a result of the 2008 recession?
83-9p5a8MMc 26:15 Can digging make you happy? Archaeological excavations, happiness and heritage
Y9qkyfT2BAM 1:21:49 Modelling the prehistoric spread of plants, animals people ad ideas
OQPAu2uC464 16:02 Funding, community archaeology, and understanding everyday life in Roman Cumbria
VyKwFXc9fD8 21:46 Transmedial archaeology: a deep map of regenerating narratives.
Vs1He5estTI 21:42 Poachers and gamekeepers: Palaeolithic archaeology as a niche market in the commercial sector
x4HQKPJN7mU 24:05 Magic kingdoms and heterotopias in Hertfordshire
Y-izNtxt_Es 14:30 Follow the money: who funds UK archaeology PhDs?
JqDi87ATYN8 23:31 Religious and allegorical iconography and the production of medieval space
Yj3R1pdDDvk 25:44 Assembling urban space: an exploration of Medieval town ‘planning’
8Rh3bVlEunI 24:00 City-states in early Medieval Southern Italy
uR19t2QHAlQ 21:00 Analysing space in the Roman world: a new model
CpJ3HrPfiOU 13:19 Contrasting the influence of factors shaping the spread of early farming
224M1a-WlRY 21:28 Competing against the status quo: Are we building digital orphans?
PIGUJ5NHkx0 22:12 Practices for archiving, management and visualisation of Structure-from-Motion data
PWKXXq8sS9U 18:31 Agent Based Modelling in Archaeology- When Will It Get Complex?
Xm9klg_NSAU 12:31 Interactive navigation and visualization of digitized archaeological excavations
geLD7Fo6crU 21:56 The Matrix Reloaded: Explorations in Directed Acyclic Graphs
1pVLMzTwZhY 22:52 The Embodied GIS. Using Mixed Reality to Explore Multi-sensory Archaeological Landscapes
Zm8jb4jtV5Y 1:34:58 ‘this house believes that archaeological resources are not finite, and are renewable’
iBWoR3pr7s4 14:21 How networks and Metapopulations can help us understand the Lower to Middle Palaeolithic Transition
QlWY3fcTGZo 13:14 First results of assessing the time cost of moving through various terrains
8ilUfnuWaY8 18:49 Quantitative Route Analysis and the Construction of Route Models
E5SKZjfqTd8 10:38 Missing Data and GIS: A Case Study Using Romano-British Metalwork Hoards
QyE2xN-BVNU 21:36 Expense vs. Effect :An analysis of selected variables that affect the production of cost surfaces
1b432DpgQRE 19:47 The way that I field: analysing field system morphology using GIS
GjFmohOcErk 23:01 The potential futures of drone recording in Archaeology and Cultural Heritage
7Bmb2tU8gyQ 16:36 Seeing things differently. The use of combined geochemical and geophysical prospection techniques
_VyYd51KJps 16:46 Community memories and virtual reality: the 3D reconstruction of St. Mary Bishophill Senior
kvAxxcGJ3KA 4:06 Projects and groups to get invovled with- Scotland's Community Heritage II
adJ-GqYtjYI 6:50 Projects and groups to get invovled with- Scotland's Community Heritage
YHLFNNNjPdw 1:27 Scotland's Community Heritage Conference Mural Timelapse
-3Ye2mJCi0g 19:45 Engaging the past in the present: ethics, challenges, opportunities
vnSHhg8WFE4 6:33 Closing Remarks of Scotland's Community Heritage Conference
GO7b9x_W49I 18:25 Glasgow Necropolis: the burial place of those who made Glasgow ‘The Second City of the Empire’
PEnUDxft6qI 17:54 Eaval – archaeological field survey in a remote area of North Uist
aOhOiEZZcrg 19:44 Oral History = Community Heritage
4c-N04kataU 18:13 Figures in the landscape
yRAKxPwAAag 10:26 Minute of Madness at Scotland's Community Heritage Conference 2015
xyg6Sd_4MbY 19:23 Bennachie Landscapes Project
WYvDwyxwMF4 19:03 Ballintoy’s Hidden History – a community project
39KAWaevTl4 21:32 Ethnic origin of past societies and contemporary land affiliation
QqMSPVLxhyQ 16:04 Race along the Dnieper – The rivalry of “Einsatzstab Reichsleiter Rosenberg” and “Ahnenerbe”
kL-YkZh97Dk 16:18 The research of German archaeologist Robert Rudolf Schmidt in Croatia (1938-1943)
yaVfZ8PdSlo 9:00 Introduction to The Legacies of Nazi Archaeology and Their Impact on Contemporary Research
FMMrz0VV-vI 15:21 Ernst Sprockhoff and the development of German megalithic terminology
U_-1kgL5eZQ 2:36 Interview 2- 2015 EAA Conference
Uq4Sea0qSBw 1:08 Interview 1- 2015 EAA Conference
-yxz1hYL4g8 3:03 Interview 6- 2015 EAA Conference
59ttvdBkihI 2:56 Interview 8- 2015 EAA Conference
6IQVQ9UD6Ew 3:05 Interview 7- 2015 EAA Conference
CZzPL-3Ju58 3:28 Interview 3- 2015 EAA Conference
JYo2Ik7DqNM 2:29 Interview 5- 2015 EAA Conference
m3vr4nYO38Y 3:39 Interview 4- 2015 EAA Conference
2ExknY4wk-g 4:16 Conference Tips from EAA 2015
4F1xB-Nq2x8 2:28 Interview 9- 2015 EAA Conference
INQ21dN4Kq4 8:07 Interview 12- 2015 EAA Conference
N620VQL0KcQ 3:38 Interview 11- 2015 EAA Conference
fgaY2FXtxg8 2:50 Interview 13- 2015 EAA Conference
sZW6ZpXcUMw 3:04 Interview 10- 2015 EAA Conference
pJNB4Do0K_0 15:26 Living History and the Public in Mitterkirchen, Upper Austria
ObyHo8hzaog 22:20 50 years of “Past Family business” between Experimental Archaeology and Living History,
cMhGuOSx00M 17:30 Reenactment of Gallo-Roman religious practices through Living History
kEUnMWh6RUI 17:27 An educational role play
zvYc1XD27xQ 16:19 From Spectator to Partaker - Changes in Visitors to the Past
IgsGXPCtg5Y 10:48 Historic Environment Scotland- A brief review
Guo77Qfoxyw 19:46 The Hunt for the Hidden Fort –results of excavation at Moncreiffe Hillfort
NW45yuZwoj0 16:36 Living Lomonds Landscape: Year 2 Update (Part 1)
ohrxrm_B-qY 17:40 Surveying Fortingall Kirkyard
4CtJTvpDctc 19:36 Pushing Boundaries: Crannogs outside of the island-dwelling heartland
mrWuQcVhig0 21:30 Crannog construction in early Iron Age Scotland: exploring duration and motivation
C81Cxz75We8 21:11 Rising damp; challenging perceptions of wetland settlement in SW Scotland
DnPaoXCsdwo 17:46 New investigations on Iron Age wetland settlements in the Northern Aquitaine (France)
Zc8fxLuPpXo 16:34 Head-hunting in the Marshes
jXZeZOJaHNE 25:19 SERF: Excavations at Wellhill, Dunning 2014 and 2015.
cJ8QaCOPA6E 1:39 Archaeology Conference Survival Kit – TAG 2015
spCLFwyW71Y 48:18 The use and reuse of stone circles: new fieldwork at five Scottish site
SCd1iRCqh7s 21:04 The Mason’s Mark Project
zrdCq9kJtvM 17:46 Living Lomonds Landscape: Year 2 Update (Part 2)
EIoKRERR0BM 15:39 Back to Tullilum – excavations at Perth Whitefriars 2014/15
3inL4bmEmsk 2:17 Introduction to Session 2: Bridging development and community
BcyBk3G4_TI 3:58 Introduction to Session 1 of the Critical Mass Conference
Dq-gyVbgoO0 10:11 Arfordir, Cymuned, Cynefin
FuT2_tp0fWg 12:48 Community collaboration at eroding coastal sites: a view from Scotland
K5elvagfqYU 5:44 Introduction to the Critical Mass Conference
76KjwAVWOtI 8:20 Assessing the Contribution of Community Generated Heritage Research
H6-yTaBtJno 16:37 Connecting Development - Led Archaeology and Community Engagement at Hungate, York
X1DohhJDM5g 12:45 Volunteer-led participatory research on the foreshore at Greenwich
kJqEJR5yZW4 13:54 Community engagement in commercial archaeology: the Greater Manchester experience
lT7TC2h7nwg 28:15 Facilitated round table discussions: Session 1 Summary
-DB5H7aV9XQ 2:33 Introduction to Session 3: Knowledge creation, contribution and access
6os5Ju4RrYM 15:00 CBA and CIfA Summing up and Next Steps
Z-y2NpXHY8k 16:22 Facilitated round table discussions: Session 3 Summary
bQZ0GCsrNbg 13:36 Facilitated round table discussions: Session 2 Summary
KubTeCZiVpc 18:35 Discovering the Northern Picts
qxRP-2tFUFw 19:44 Predicting future challenges: Creating a foresight methodology for climate change adaptation
I86WzCpDGpc 5:52 Introduction to Climate Change and Heritage Management Session
O7eIclI0jV4 20:41 Climate Change Adaptation for Scotland’s Historic Environment
7Brv3RiUsFo 17:58 Medmerry: Coastal change from the Neolithic to Medieval period
7_WQbTq1inI 17:58 Safeguarding Open-Air Rock Art
8dZhuvZ3QH4 18:25 Assessing palaeochannel resources in the light of future environmental change
9mvQ7yPKamU 15:05 Recent landscape evolution of the Rio Grande drainage basin and impacts on the Nasca lines
Gxf8FxWm7WU 14:22 Preserving and Protecting the Peatland Record post-Kyoto Protocol
V_m0Hr3O5V8 17:27 Impacts of climate and Environmental Change: The effects on coastal saltmaking in Lincolnshire, UK
jQAixsF9fcI 14:49 When an Asset Becomes a Curse.Isostatic uplift and 17th century military planning
ndkk5VcYMyI 15:49 Managing World Heritage Sites by Geoarchaeological Landscape Assessment and Modelling
_jOfKLKrBfc 21:28 Revolutionary graffiti? Locating, recording and interpreting at Kilmainham Gaol, Dublin
bBLgfyYZtAM 15:19 Banksy is a woman: gender and femininity as displayed in graffiti
eME3IdlsP7I 20:26 Wild times in wild places: Counter-cultures, graffiti and the wild at the Devil’s Spittleful
B88gc-LIKhQ 17:11 Appraising modern cave graffiti in Greece
JyAj8sHgGm8 14:41 Written in Stone: Reframing graffiti at the North Head Quarantine Station, Sydney, Australia
wsVXfVbmYSs 14:29 52 weeks in a (graffiti) year
WPo8-o673CA 15:44 Graffiti as a medium to teach and enthrall
AorzzkkHn7I 8:58 “Harry was here 1945”: Graffiti and the Nazi Occupation of Alderney
Jj_HEzx6Bx0 27:40 Buffing and Buffering: Street Art’s Accelerating Archaeologies
XX0LJnJG2Jc 14:09 Marking military identity: textual graffiti in nineteenth-century Malta
oVfXN5mPR48 19:35 Elite territoriality and the development of early medieval states
3DNMytdex40 21:02 Manifesting power - the creation of monumental Gamla Uppsala
BVvnrt41_8o 27:43 Landscape Agency and the Materialisation of Power in Viking Age Iceland
av-30lGXBZM 9:20 Intangible Cultural Heritage and Archaeological Studies of Social Identity
jE-LpC9K6eI 21:00 Form Follows Fingers - Archaeological Typologies and the Perspective of the Producer
mXzXdETB8NQ 24:35 Making Kingdoms and Creating Communities in the 1st millennium AD
r28ClySsKwA 25:30 Animals and the rise of Kingship in northern Europe.
Ax-wZC7XR6E 21:06 The Drowned Landscape of Dordrecht
b6NuAcGSzhg 18:22 Intangible cultural heritage in Mauritania: sedentarisation, adaptation and ongoing reinvention
mbbGpxyXWPU 23:11 Intangible Heritage and Archaeology in Mongolia
8n4GpXsJtAA 18:42 Climate change and the preservation of archaeological sites in Greenland
HEw4_aY6tho 20:22 CITiZAN (coastal and intertidal zone archaeological network)
d6cuIxdN1RM 20:54 Engaging the public to rescue information from eroding and destroyed coastal archaeological sites
nmGLs05_C50 13:42 Threatened Heritage and Community Archaeology on Alaska’s North Slope
wfrpdxpfIaE 17:15 Coastal erosion and Public Archaeology in Brittany (France)
0Yj8qzdYHP4 20:16 Finding and Sharing Climate Stories with Cultural Heritage
Abf2IWye-IQ 20:18 Rousay, the Egypt of the North: the story from the sea
R87T9wJXy2k 10:32 Landscape and Cultural Change on the South Alligator River, Kakadu National Park, Northern Australia
e9CoB-uKNDY 24:53 Archaeology, Art and Coastal Change
fB3-Vmpe-uY 24:55 Communities and Coastal Heritage at Risk
qpgLbVxP-wE 7:18 The Pocantico Statement on Climate Impacts and Cultural Heritage
4WwlpGfwvGk 19:51 The Men and Women behind the MASC Project (Monitoring the Archaeology of Sligo’s Coastline)
rvEWoG0fP7I 20:20 Gufuskálar: An eroding fishing station
tpBI69azkw8 19:49 Challenged by an archaeologically educated public in Wales
DvTBK6eINsQ 21:25 Beyond Ethnicity, Beyond Dacians.
yMUEP-UA5ZE 21:27 Herodotus’s peoples: relations of dependence
TP86zhwfNLc 21:11 The Last Days of Celts on Middle Danube – New Evidences
hRMosATKR0Y 23:20 Beyond Celts: Nested identities in Iron Age Europe
Rzc5FDjsdQM 20:37 Urbanisation dynamics in Celtic Europe: from sites to networks
une6r502w4Y 20:32 Culture or social rank? The 'celtic' affinities of the northern Iberians
16ZC9K-vNJ0 18:27 Celts and Cargo Cult Science
V8bUfQ-h_Pw 19:31 Fundamentally flawed logic: the question of 'Celtic ethnicity’
qMmertCoa_k 28:48 Rethinking the Celts: introduction
yzpydRIDfSE 17:55 Science dedicated to the study of archaeological textiles
hXDc3zRXTng 13:19 The stylistic unity between ornamentation of adornments from hoards and architectural carvings
QEN5aNs-EJs 16:38 Archaeology and History of Art: study of Russian arms and armor
37tY7kE9B7Q 23:45 Art and Archaeology: a happy marriage?
y8356VONPLQ 15:42 Over the Horizon and Beyond the Foreshore
5FsiBhvrofY 18:39 Communicating the value of archaeology of the contemporary to skeptical publics
rgu08SrAQ-Y 20:41 Communicating Stories through Objects and Actions
rwyciCZCQkA 18:14 Grounding Communication for Maximum Effect
i-xgE1geA04 20:13 Cultural Communications through Archaeology and Heritage in Hokkaido
ddzXjLh0X_8 17:14 Working togather and making together
-upsNprbDhA 19:48 Communicating with Community: Adapting Communication Styles to the Community
_NIsAy5WkPE 25:03 Digital Public Archaeology in Italy: what is changing and why it is important
QHnYJvJRbUU 21:24 Archaeology in the virtual: Day of Archaeology 2015 in Poland
bmcGRsaoLlA 17:53 Live from the trenches – The Social Media Presence of the Meillionydd Excavation
4QmZEC1m4-Q 17:40 “Does anyone really think that a raised plinth will deter drunk Glaswegians?”
7pklccZzHIE 12:05 Podcasting Archaeology - a Tool for Starting Conversations and Education
UISnLZNqIc4 25:20 Experiences of online archaeology - the urban excavation of the early modern town of Nya Lödöse
qVCI0l6H56w 18:25 Developing a guidebook to help archaeologists create “good” websites
FFZwg3oqb3U 18:11 Explorations of New Approaches to Online Public Outreach Archaeology in the Age of Pseudoscience
sY_wKx35Ue4 9:16 It Belongs on the Internet: Communicating Archaeology Online- Introduction
Yep7TGyOHpg 16:54 Properties of archaeological spatial data and its impact on interpretation of archaeological record
6-LQ1M3ayJM 16:06 The influence of conventions and mental stereo-types on the reproduction of landscape-images
5k3x2x8PlhM 23:49 Interpreting the Archaeological Record by the aid of GIS – The Insula 30 of Augusta Raurica (CH)
Hy2t1jLX0Fc 21:49 The Late Neolithic in Southern Bavaria – a GIS based approach
g5IjOEWD414 16:48 How Space Talks
541P5ap7F-8 20:15 Identifying and mapping lithic sites of national importance
FvhgLQSYqcs 22:32 Towards fortune and glory: Using the tools we’ve got, to build the careers we want
KMjZyAq7REU 13:13 Introduction to the 'Future of Our Profession'
njp8w6ynsoU 27:28 2050: an archaeological odyssey. A vision of the future of our profession from the New Generation
UgTskc8CGAE 19:10 Organising Archaeology – and what makes “good work”
ehqp-yIp6hM 23:02 The Newport Medieval Ship in Context
9EPK53cSYRY 11:26 Scrannying for Spidge amongst the Shipwrecks; Interviewing the Pirates of Plymouth, England.
gI9RWEQ8RNw 18:35 Maritime Archaeology in Albania: Connecting the Dots Along an Overlooked Coastline
jFVKjkdYwts 2:04:22 Traditions and Alternatives: Publishing for Students and Recent Graduates
9dTV42G-DNs 18:11 Assessing and mapping significant heritage assets in a medieval university city of Oxford
mEvff2xGw64 15:24 The future generation of architects
6kysDKbsdlM 25:11 Twenty-first century challenges for professionals and professional institutes
93p25jT49uY 17:28 Post-Charter depression and how to avoid it
SC7YIgc8jlI 20:23 Short Presentations from institutes exclusively concerned with the historic environment
GUWwJedL-yg 14:46 Reconstructing Holocene Wetlands: New Paleogeographic Models in the Humber Estuary
gyj7ZwodyPQ 10:15 Knowledge Organisation and the historic environment sector
asc8wMLZBbE 15:57 SHED +1: Working together for Scotland's Historic Environment Data
sExlGgDEFOE 17:12 Heritage Information Access Strategy, Historic England: national versus local service provision
tRKzBp9UqNw 17:13 Know Your Place: Exploring data collection strategies and impact on decision making
1YDLlPMGP64 12:49 HER databases - the Welsh context: HERs as indexes not archives, a low-cost responsive future?
KrxiVJlPrFk 7:55 Highlighting two key issues around Big Data today
ymBF4GYbqHo 11:27 UK-level data collection - ADS and OASIS, workflow and best practice
90wYQhjud6U 14:45 Working with big data
13kKqjLsDJg 17:31 Issues identified by the SMA survey and progress to date
UFjnDcKyxO8 26:32 Are building archaeologists adapting as the market changes?
_zJhfIcRvJM 24:34 Firing up for a productive collaboration
fMJ5y-ssXwQ 25:17 A perspective from those caught between developers and museums
xINS3jKAqnc 31:32 Preparing Emergency Services for Disaster Planning with Respect to Heritage Assets
yXqC21FytJo 17:47 The vital role of archaeological research in planning for a changed climate
0Qv0AAFIb9g 23:46 Future-proofing archaeological archives in Wales
3JtHL8MdLNA 17:25 Informing heritage policy in an uncertain climate – a perspective from EIRE.
4MDwYaQqPvk 27:28 Managing coastal change and the use of Sectoral Adaptation Plans – a case study from Wales
4i6HFWYv2ac 21:05 Let’s get sorted
HUOiMGro0G4 23:37 A glass half empty?
SHKviW4nXIM 17:17 Provocation, honesty and the debate on selection and access
WnJjnNMeGoY 29:24 The what, where, and so what of major environmental threats
ZZ537ZFqIiw 23:21 Managing the built environment through wider landscape assessment and modelling
xRsPHtShPqA 23:58 Heritage significance assessments to evaluate retrofit impacts
ybOYJ_cdLx4 24:07 National importance at the landscape scale: a pilot study from the Yorkshire Dales National Park
58dsB6m9CD4 28:55 Planning matters
r_y_2C5wDnQ 31:02 Identifying and mapping sites of national importance in wetland environments in East Sussex
xZLQ8MTqBuI 17:09 Introduction to 'Of National Importance: Recognising Significance for Planning'
AxaA9KVGviM 14:44 Thomas T. Tucker: A Beached US Liberty Ship in Cape Point Nature Reserve, South Africa
tsNI8k9JH30 18:21 The Cape Point Maritime Cultural Landscape: Lighthouses, Shipwrecks, Baboons and Heritage Tourism
3Cs8N_r3vFM 15:16 Sandalwood and Starfish: A Study of the Shipwreck Brunswick (1805) and Site Formation Processes
S12n56l29OE 11:48 Technology and Empire: A Comparative Analysis of British and Dutch Maritime Technologies
8Haj-FBaWKI 20:41 The Bay of Storms and Tavern of the Seas: Risk and the Maritime Cultural Landscape of Cape Town
0m8ISgYckDQ 12:44 Overwhelmed with Possibilities: A Model for Urban Heritage Tourism Development
8llJwmpZy8I 15:31 Finding Solutions for Environmental, Engineering, Cultural Resources, & Public Relations Challenges
HwWHyVQxUKw 19:11 Digital Archaeological Data: An Examination Of Different Publishing Models
66jqJiXc9yo 21:37 Present in the Past: Environmental Archaeology and Public Policy
Xa6mzcUl6iI 13:56 The Best Kept Secrets in Archaeology: The numbers no one knows, but everyone talks about.
ChhnEcWXZKU 12:37 Urban Archaeology in the City of the Saints and the Growth of a Real Frontier City
ulLgRcY6CgI 35:46 Recruitment and Retention of Underrepresented Minorities in Anthropology Programs
xi1nnCVQZds 1:18:17 Recruitment and Retention of Underrepresented Minorities in Anthropology Programs: Open Discussion
GKA7GuQXMvs 29:32 SHA 2015 Conference on Historical and Underwater Archaeology Plenary Q&A
OXa7wwACb9k 21:01 Radiocarbon dates, cremations, flatgraves and the appearance of the urnfield cemeteries in Belgium
_kez4otYUyQ 16:24 James Delgado: SHA 2015 Conference on Historical and Underwater Archaeology Plenary
ayJpXfX-omw 16:21 Experience from the front line: watching briefs, builders and child care
OBaa0qhpfCg 20:38 Let’s DO something! The potential for a CIfA Equality and Diversity special interest group
Ht4hh5RZ_NI 21:24 Gender equality and personal responsibility in the new CIfA: what being equal really means
mfRGwn_QiUQ 21:02 Parents in archaeology: challenges facing parents working in archaeology in Wales
xSWLWaZ49sI 18:33 Are we a profession yet? Archaeology and equity
wzYUj9gIw3o 13:58 Individual development and leadership: its contribution and feed-back into sector capacity-building
ZTeYTjFDces 15:07 Heritage Lottery Fund's Catalyst programme
LXgwJSr_9JY 23:30 Beyond the training room: a practical guide to organisational knowledge management
tA1E6nk1Bto 19:57 Building capacity - ensuring our profession has the skills it needs in the future
7r5Hk5vILMI 23:52 High Speed Two: A Question of Scale
kV5yU1oOOzw 20:22 Heritage 2020: building capacity through collaborative working
u7sHTyzLAb8 4:31 Carolyn White Introduction to SHA 2015 Conference on Historical and Underwater Archaeology Plenary
q3GHIPTd44I 15:53 Margie Purser: SHA 2015 Conference on Historical and Underwater Archaeology Plenary
lDcl7FCA_IA 10:13 Laurie Wilkie: SHA 2015 Conference on Historical and Underwater Archaeology Plenary
7wmsbrbVJmM 9:36 Chelsea Rose- SHA 2015 Conference on Historical and Underwater Archaeology Plenary
T0pr-0Lp5AE 16:58 Kelly Dixon: SHA 2015 Conference on Historical and Underwater Archaeology
NJIVAQ62E2U 6:53 Sharing Tips and Tricks for Engaging the Public- Becky O'Sullivan
8X_KVNvV9aE 4:18 Sharing Tips and Tricks for Engaging the Public- Build a Archaeology Site
GsubujAgHlc 4:43 Sharing Tips and Tricks for Engaging the Public- Stefan F. Woehlke
Qt0Zla2iBnM 5:46 Sharing Tips and Tricks for Engaging the Public- Kari Jones
VbHyle_GIyY 3:59 Sharing Tips and Tricks for Engaging the Public- Elizabeth Bollwerk
XveTOYktPDo 3:26 Sharing Tips and Tricks for Engaging the Pub- Joe Bagley
eAEiU36uHAs 3:58 Sharing Tips and Tricks for Engaging the Public- Karen Price
ABTQ6dhOJT4 5:21 Sharing Tips and Tricks for Engaging the Public- Mark Freeman
DldxzezNuG8 4:15 Sharing Tips and Tricks for Engaging the Public- Scott S Williams
FSpmYy6vnKA 4:02 Sharing Tips and Tricks for Engaging the Public- Bernard K Means
ZCZbApdCi2g 4:51 Sharing Tips and Tricks for Engaging the Public- Jennifer Poulsen
wLthsUysE_Q 4:51 Sharing Tips and Tricks for Engaging the Public- James Gibb
GMozLF-4hx4 1:42:57 Equity (Issues) for All, Historical Archaeology as a Profession in the 21st Century
ctGSrXAv2RU 3:26 "We Do Not Do That Any More": The future of the graphics profession in Archaeology- Introduction
6lxrYZHI3DU 36:06 Doing the same thing over and over again and expecting different results?
7DxCCRIaSIc 27:28 Interactive approaches to landscape modelling using Lidar data
Ji0ttP9sSE4 29:09 The interpreters digital toolbox
btVrDBqdv2I 13:58 Why opera refreshes the archaeology other artforms fail to reach
sdbqP49OnPM 16:23 Visible diggers? Engagement and communication: a student perspective
dSVKD-G0miE 7:04 Crowdsourcing and Community Archaeology
BQegtW0FE40 15:18 The sensory world of archaeology, accessibility and inclusivity
G4oZP_xYJws 13:11 A brief examination of public outreach currently undertaken by commercial archaeology
0OVe_zxihEo 5:20 CALCH
jzdDhh4VrIU 7:38 The work of the Clwyd-Powys Archaeological Trust
KBrFmp0_wOI 7:12 Prydain oddi Fry / Britain from Above
jZ1MWfR5jZ0 12:47 SITAR: starting point, challenges and future development of an archaeology data sharing platform
Vqh3FzpXw6I 21:55 High-performance agent-based models of worldwide human dispersals
AL0MNICpZBc 14:32 New Evidence for Iron Age Burial Practice in the Western Isles
CqDkUtG-TLA 22:18 Middle Iron Age native glass toggle production of the western seaboard
y4MUSsEqNkE 22:35 Burnswark: Siege or no Siege?
BF7Kwq0RKFg 21:55 Modelling glacial archaeological potential in the Pennine Alps – A multidisciplinary approach
G7Uov617Z44 28:32 The trigger for the demise of an eighteenth century drovers' inn
Ph2VlXhSNTE 26:39 From past to present: Reconciling years of Arctic archaeological data into a single visual database
lJcBIzA8uHY 21:10 Archaeological contents: from open access to open data
hqN8ptwkro8 21:36 What can we learn about the environmental preferences of Neanderthals and Modern Humans?
L4c6TvbXnPY 15:07 Testing the Variability Selection Hypothesis on Hominin Dispersals
L2ngbS8hO-k 17:09 Adoption of innovations and expansive phenomena in the 2nd millennium BC in Europe.
X10onLGBuAs 13:14 The Italian Manifesto for Open Data in Archaeology (MODA)
O0Ea9IY58DM 33:48 The Use of 3D Models for Intra-Site Investigation in Archaeology
fymwKagmBFc 45:09 Computer Graphics Techniques for Analysis
KFKGDGKbUAc 22:55 Legacy Data - Open strategies for closed data
rd1zLKXyl1w 19:17 Large scale population modelling in the deep past. Issues and concerns.
51KUYCAC33s 20:02 Drowning in a drip feed of molten glass
rV4S3sIVqFI 14:22 Use of cartographical Open Data in the context of the project SITAN
oAwIzL1npPc 17:29 Identification of Agent-Based Modeling elements in "Out of Africa" hypothese
iUFzeRwq9kU 20:21 The future of engagement with archaeology in rural areas: challenges and opportunities
TOs21O44X5c 16:21 The delicate relationship between the profession and 'amateur' archaeologists. Is divorce Imminent?
RA6xp8Cma0U 23:55 The Past and Future of Open Access in Archaeology
0TeYmg08Ky8 14:57 An Agent-based Model to Simulate the Balkan Neolithic Expansion
3zGDm-pKwwI 20:16 From Lamp-light to Laser-light: Opening access to the historic and contemporary imaging of monuments
5NdXnBASKJs 16:24 Digital resources for archaeology. The contribution of the on-line projects by ISMA-CNR.
fbVrxn9D1Gs 27:15 Exploring sustainable publication and the web: a case -study from the Villa Magna Project
pAsNPflZGT0 21:14 Wiggle-match dating Scottish crannogs
7LaK0i4DHzw 35:00 How to do Freelancing in UK Archaeology- Part 2
WfF6nz9fZaI 42:27 About Heritage Lottery Funding
MejBWz9R2eE 58:40 It pays to be nice: the Big Heritage model for funding archaeology
tRLlb-Xfkno 52:17 How to do Freelancing in UK Archaeology- Part 1
7-URtu5XwbQ 1:26:44 Simulating the Past: Complex Systems Simulation in Archaeology
zrtpWbMlZr0 21:32 Community driven archaeology
_Xs6Vtm-hIM 27:29 (Re)discovering the Gaulcross Hoard and other early medieval silver
R4a_dCqutKw 28:41 Living in the mountains: research on Mesolithic and Neolithic activity in the Cairngorms
vrNTP2d39TM 23:53 SAMPHIRE: Crowd-sourcing Scottish underwater archaeology
fp_LUU7vuF8 18:46 Daily activities and resource use in Neolithic Orkney: Microarchaeology at the Ness of Brodgar
155iEBNEzes 27:24 Burial in the Bronze Age: Excavations at Broich Road, Crieff
Xt_Srck0xlM 25:28 The Opening Address of CAA 2015
gob0U8iprCc 9:54 #epicfail? Has Open Source in archaeology failed?
QjDy1n2lF18 27:10 Building domain-agnostic databases using design patterns
aC5pO0im4ZM 16:49 Archaeological science as community enterprise
4yIgPXHg4jk 18:13 How to move from Relational to Linked Open Data 5 Star – a numismatic example
Arx3N8tu1Go 14:19 Using CIDOC CRM for dynamically querying ArSol, a relational database, from the semantic web.
uU63uz8Aa2w 19:36 The Syrian Heritage Project in the IT infrastructure of the German Archaeological Institute
aDPt8saYoH4 9:43 pyArchInit- python for archaeology - Part II
zWTpJx8PXiI 21:32 The Labeling System: A bottom-up approach for enriched vocabularies in the humanities
Yq92onhlNKU 20:39 Individual-based modeling of population growth and dispersal in discrete time
bcULOWbOcsY 16:36 From interoperable to interoperating Geosemantic resources
DcQqLZo9kRA 22:25 GQBWiki goes open
e-LyTku_isY 44:06 Towards a new landscape archaeology?
BZwaRqz0swo 24:09 Using GIS and Geophysics to Examine Caesar’s Campaign against the Helvetii in 58 BC
8LKE-9a5U_U 20:35 Legacy Data – Open strategies for closed data
tqSq3EL0LxA 25:12 What have the Romans ever done for us? Digital strategies for research syntheses & fieldwork reports
1N9rSnI9-Xw 32:10 Digitised Diseases: 3D digital documentation of bone change in cases of chronic disease
wc9sqjWgjy8 15:11 Exploring sustainable publication and the web: a case-study from ARK perspective
InDquoHEyts 20:09 Multidisciplinary research of Iron Age sites and landscapes of Slovenia
kJLjZ5-TSUQ 16:23 Developing a method for a spatial correspondence analysis
mM64XcBiAQU 17:42 CBA East Midlands Boundaries Project
ItP8hDAt0go 24:02 Adventures in Agriculture: Experimental modelling for economic analysis
Bb7ZPjMkuHs 24:07 Developing an integrated digital data workflow for the 100 Minories project
51CypvR71xc 23:56 Plan, Features, Sections: Using NLP to remove ambiguity from Grey Literature
MfTBq7DW_hc 16:30 Geospatial Geophysics: Processing GNSS located data in python
OsNXsCZNQxc 19:48 Archaeology for all: the role of students
YQTuuy9Ax1g 29:16 Preparing for professionalism: is a degree in archaeology really enough?
DuPrsNOrUoU 27:09 A Chartered profession: CIfA and the next generation
zAU6FWMwKpU 13:19 Learning by leading: working to encourage ownership in seminar settings
u00_YwVfc0k 24:02 40 years of statistics on archaeology students: so what do we actually know?
kDvpwZrxslQ 19:51 Talking to students: forums for initiatives, innovations and development
qtkMwa_0ENw 33:32 Careers and skills: bridging the gap
4h-up-eHGwY 21:05 Heritage Together: The Crowd-Sourcing of Digital Photographic Data for 3D Modelling
PKr2lQrxO00 16:47 Digital heritage interpretation and engagement
Z7drWnvRszI 22:06 Archaeology and Autism
tb-7UGFc0Rg 26:50 Archaeology- the Dyslexic Profession or the Profession of Dyslexics?
IPAx0yhtBnU 8:17 The Edinburgh Archaeology Outreach Project
1n2AVi8FEnM 42:47 The Unexpected Outcomes of Engaging Academics
MhAA1MQxTv0 21:02 Scaling the archaeological digital data mountain
pDJslTKRTt0 12:06 The Greatest Digital Public Archaeology Tool… that we never use.
kKrYSmAwnS8 25:23 Paranoid Android? The future of archaeological research in the collaborative and digital economy
kHO13foVwxA 22:14 The ACCORD Project (Archaeology- Community Co-Design and Co-production of Research Data)
qaMa4O14cfk 29:55 Tynwald: Assembly, Royal Inauguration and Parliamentary Tradition on the Isle of Man
PoAvqxI4-Ck 26:09 Recent excavations and community engagement at Tantallon Castle.
gG63SLCDu6c 25:18 Bringing Eyemouth Fort into the 21st century: co-creation and interpretation.
62zacsqZiOM 31:33 Scone Abbey: An Overview of its Portfolio of Lands, Rights, and Churches
osErPHiaLLI 28:06 Gathering the nations of early medieval Ireland
JXGSvnTQiG8 30:52 ‘The Kings’ Chair’ – The Royal Acclamation Tribune on Nidaros Cathedral Cemetery
Sv4V3v2YmR0 30:16 Perth/Scone and assembly government in the mid-twelfth century
7M4Kfasdzrc 24:58 Where to make the king (or queen): the importance of place in Scottish inaugurations and coronations
1E4WSufDWzI 32:26 Charlemagne’s own palatine chapel: Perception and Development of Aachen’s Carolingian Heritage
I8XsphUzMww 26:00 From Charlemagne’s Royal Residence to the German Coronation Place: Aachen Palace
L6PlkmkLero 30:11 Gamla Uppsala through a millennia – a continuous centre in constant transformation
EXf0-55lBdE 25:48 Prague Castle – Seat of the Dukes and Kings of Bohemia, Place of Their Investiture
O8jr0dC3XgA 28:01 Scandinavian Hill Forts – Symbolic sites for royal and common rituals
AKfj97ogpOQ 36:53 Launch of the Chartered Institute for Archaeologist (CIfA) Plenary
u59LEC79xIU 23:28 Cult and Kingship - Understanding the Early Pictish Royal Centre at Rhynie
gjYDUrXyrV4 31:39 Stones and stone thrones in ‘celtic’ and non-‘celtic’ kingship across the middle ages
VlU2sUsj6eM 30:36 Finlaggan, Islay – a place for inaugurating kings
YgLuSKcq9BA 28:15 At the Assembly: Elite Rituals and the Creation of Ritual Space
zdkIrF4Uu1s 23:53 The Last Coronation of a King of Scots: Charles II in 1651 at Scone
l8k8DkaFGZM 23:23 Digital reconstruction of Scone Abbey
SHZqfOcc4r0 27:50 The Princess, the Slave and the Weaver
SqIjVIPFksU 26:23 Hidden history of the Scottish Borders: community archaeology in Glenrath, Peeblesshire.
caCaZJafoaI 53:11 Tayside and Fife, 4000-1500BC: what we know and what we need to find out
wQqhvtZem7E 22:23 Future Festivals and Frameworks: ScARF and Dig It! 2015
1IQXMg9rH4E 26:13 Dark goings on at Cramond!
8DltF3-qmRs 16:34 Closing Remarks of Scotland's Community Heritage Conference
6dUhXxsWzac 18:31 Eyemouth's 16th-century Fort - Back on the Map!
04As8uatC8g 22:27 Raising the Bar
afEJ7bN0s14 9:07 Launch of the Scottish Heritage Angel Awards
H1uu-1nT-x8 24:21 Fortingall Roots and the Survey of the Kirkyard
9CZVFEFD9Fc 12:09 One Minute of Madness at SCHC 2014
ObmIjuXMbho 26:45 Restoration of the Birks Cinema, Aberfeldy
KHYHmEVXlbk 23:56 Picture this! Recent archaeological visualisation on Scotland’s national forest estate
mfqHSqAZxfk 22:04 The Search for Bridgend Medieval Royal Chapel
94Kz9ZM8D6U 18:36 Growing Research on Glasgow's Allotment Heritage
TkyX1XOxV1s 19:04 Keil Chapel and Burial Ground
uWrg5AGJkpE 30:08 Below the Brewery: Medieval industry in the heart of Edinburgh
ocH897aDt4Y 19:52 The Hills are Alive... Being Involved in the Living Legacy of Fife's Benarty & Lomond Hills
aRmROCtENQE 21:28 Leith Fort Rediscovered
DDtBgthgGQs 9:01 Scottish Churches Heritage Research
0CGV_tPtFs8 11:05 Digital reconstruction, interaction and community engagement
RR0_C2Qf9Nw 27:35 Pit, Pot or Cist? Bronze Age Burial Practices at Broich Road, Crief
9bLilhyNA1c 28:16 Living Lomonds Landscape Partnership: Discover the Ancient Lomonds
eHOOBRTpb8A 25:28 Archaic sculpturings to 4D Wemyss
GWyiw6GRuc4 24:11 Circling the square, re-imagining the Pittentian timber circle
IyjTzL8w2Tc 22:03 Adding a new dimension to Dundee's carved stones
G7DF1UCo7e8 17:42 Sweetly Refined - ceramics from Dundee's Sugar House
4xb6-04Ta8I 18:11 ADSeasy: Developing a system for data deposition [Updated Version]
Nhifi1fNjYE 17:55 When digital engagement costs you nothing: making websites in minutes [Updated version]
9qxFG3skNsM 15:04 The Next Generation of Archaeology Public Engagement [Updated Version]
igoVFw8F5DI 13:52 A Preview of the Ur Project [Updated Version]
q1Hh2utr-vY 29:30 From Khipu Knots to Instant Tweets [Updated version]
Gc15oVYVrKY 20:15 Publishing in Archaeology: Open Access and the Reward Project [Updated Version]
DlU-Op13wQw 19:20 Nothing Ventured, Nothing Gained: DigVentures and Flag Fen Lives [Updated Version]
EQhhLghCsw0 14:08 Let's Get Digital, Digital! [Updated version]
8UN6GXDk0K0 14:42 We're Tweeting But is Anyone Really Listening? [Updated version]
kxEkCdU9oBI 21:26 Not All Archaeology is Equal [Updated Version]
6OdXtzuHHhw 17:31 Integrating Technology into the Trench [Updated Version]
5esZg-pzfUM 18:42 Digital Artifact Ecosystems: The "Internet of Things" in Archaeology [Updated Version]
GmNBPZQnQdE 14:09 Evaluating the Effectiveness of the Archaeological Apps as Interpretation Tools [Updated Version]
BBykISDpOIY 17:51 Vote for Me - Interactive Ways to Digitally Engage Audiences with Archaeology [Updated Version]
OARKjAav7oQ 15:04 A Case Study in Social Media, New Audiences and Local Museums- [Updated Version]
6JOi88gWaw8 12:20 The Portable Antiquities Scheme and its impact on the public [Updated version]
Jer7Brq3XWA 15:33 Impact of the Archaeology Data Service (ADS) [Updated Version]
KP_8JF0LyQ0 13:42 The Archaeology of Digital Abandonment [Updated Version]
Ms-Yh3LK1Es 20:02 An Emerging Research Framework for Studying Public Engagement [Updated Version]
EAcd1A63150 20:23 Digital Audiences -- A Few Lessons from Arts Council Research [Updated Version]
NBpgBd4bAVQ 22:24 Making it Simpler- Access, Archives and Archaeology [Updated version]
cXp2suw22hc 17:29 Practical Augmented Visualization on Handheld Devices for Cultural Heritage [Updated Version]
UoMoj9eKOWw 26:38 Integrating excavation and analysis on urban excavations [Updated version]
LaeLVnuDGZk 28:54 Game Issues for Scholarly Discourse or for Public Understanding [Updated version]
aiXktxryegM 6:36 CAAUK 2013 Introduction from Guy Hunt [Updated version]
LHjZH3vyrOE 23:42 Digital Tabletops & Collaborative Learning for Archaeology [Updated version]
aaNzQYeJn0E 52:50 Keynote: Open Archaeology [Updated version]
Zsr6BbXChqE 16:37 SkOSifying an Archaeological Thesaurus [Updated Version]
3InJbyG8Y0M 25:39 The application of applications: The bump and grind of commercial archaeology [Updated version]
QGJ2WSjp9TM 13:02 Digital documentation through laser scanning of a cultural heritage site [Updated version]
arowHri2dkg 22:49 Cloud computing and Cultural Heritage IT [Updated Version]
T_uABqlwnIE 17:11 The movements of the Teuchitlán people [Updated Version]
CRoEpDjWM5I 21:50 Can we share? -- current status for sharing heritage data online! [Updated version]
Exf6ALCiqDs 21:49 Digital Outreach and the Thames Discovery Programme: What Next? [Updated version]
Zm28XIrFasw 23:37 Analysing and visualising the ceramiscene of Roman Nepi [Updated Version]
6ShzCu9pomM 19:23 The Wester Ross Wedigs Project [Updated version]
T_hXn5apCRc 15:27 Assynt Fire and Water [Updated version]
oVO7o9dMmkE 24:09 Bennachie Landscapes Project [Updated version]
vvL_zYXNL18 21:00 The Mavis Valley Project [Updated Version]
wc3O__8DqdA 21:03 The Dighty Connect Project [Updated version]
kzPCnY4h2dU 18:40 The Designed Landscape of Cally [Updated version]
JaEz6QIG23k 24:16 Trowels and Tea-Towels: The Hidden Heritage Project [Updated version]
KECcVaK5mW0 10:58 Closing Comments to Scotland's Community Heritage Conference [Updated version]
To_yn7hAicE 17:02 Introduction to the Scotland's Community Heritage Conference [updated version]
0w2CDINDR38 28:58 Depicting the Dead: Faces from the Past
kqhIapGpvk8 24:24 Picture this: Recent archaeological visualisation on Scotland's national forest estate
qvE3oe5k5gQ 28:47 Always chasing deer: The Scottish medieval parks project
TpsKzTzd1Bk 20:22 Monumental Iron Age Architecture in the Tay Estuary Basin
eiZqlHFX_C8 26:31 Medieval and Renaissance Planning at Falkland Palace: the evidence from the East Range
Q9ld8XYLcOI 20:24 Adopt-a-Monument and Dighty Connect: A partnership project with a different approach
nm9VAmV09so 4:49 DigIt! 2015
ADZve4PxFpY 19:19 Adding a new dimension to Dundee's medieval carves stones
DtlOeGs7-_8 26:00 An Archaeological Renaissance? A Regional Review looking out from Dundee
q39xSwO0Ors 19:42 'Those who can, do. Those who can do more, volunteer.'
cAGUbieUgWg 18:27 Scotland's Coastal Heritage at Risk
uWVIdJhUrMY 21:03 Adopt-a-Monument -- Everyone's Heritage?
W4sy9R4Q-ms 22:16 Community archaeology -- The attitudes and approaches of commercial archaeologists
3bf2KSJQzYg 17:25 Community archaeology and regional research: who's best placed to deliver?
moEYf_9ud6I 23:20 The role of Local Government Archaeologists in translating research into practice
4N3lNzd7dVg 11:16 Square pegs in round holes Fitting public archaeology into research agendas
pD7DQJ-kKZM 24:47 'Into the Great Wide Open? The sustainability of community archaeology in the long run'
zZg0XZYXKZo 20:10 The things we think and do not say: the future of our business.
etRAPDWBCro 11:51 Zero Budget Archaeology in Local Authorities as Both a Service and a Research Tool
Vi--4q1f7SI 13:01 Introduction to TACOS Workshop
nlJjql3mITA 15:21 The Portable Antiquities Scheme- TACOS Workshop
U5krs2Ay8Hg 19:08 Geosemantic Technologies
kV0HQbPpQSg 23:24 Linked Data & heritage vocabularies
oiR2aFRlU-c 16:57 Information management professional skills training
yAKCrqQCqTc 16:47 Profiling the profession: Skills gaps in information management
sAFFMqm82zk 16:07 Tomorrow's Standards Together
61gV73ale6Y 17:46 Linking datasets with archives
uAaXWLZZWA8 17:09 'Big Data' projects
n1HCBtJnInM 9:16 TACOS Workshop Ending (edited version)
jtxGghJRHo4 24:21 Trowels and tea-Towels: The Hidden Heritage Project
DEBsfvCf9JE 11:11 Closing Comments to Scotland's Community Heritage Conference.
fqSF0ipaRVM 18:46 The Designed Landscape of Cally
b8JjZBueRWk 21:08 The Dighty Connect Project
lLYXK5HrG7s 21:02 The Mavis Valley Project
agudbXAGSBU 10:42 Scotland's Community Heritage Conference Minute of Madness
ghoHCxlvd4w 24:16 Bennachie Landscapes Project
i41d5U9pLZI 15:28 Assynt Fire and Water
X2cWsYCTb8U 19:24 The Wester Ross Wedigs Project
Tml33Hg_rAU 17:06 Introduction to the Scotland's Community Heritage Conference
cAJhn1z1Xh4 17:36 Practical Augmented Visualization on Handheld Devices for Cultural Heritage
4Aq3oUj0GJw 23:38 Analysing and visualising the ceramiscene of Roman Nepi
abBMQJ9WFvA 29:02 Game Issues for Scholarly Discourse or for Public Understanding
af7mVpMAR3U 21:51 Digital Outreach and the Thames Discovery Programme: What Next?
GKhLsixlcRQ 23:43 Digital Tabletops & Collaborative Learning for Archaeology
3_3lFYhaFK4 21:58 Can we share? -- current status for sharing heritage data online!
sVSbtAcpE0w 16:42 SkOSifying an Archaeological Thesaurus
Lb10XmLYUzs 18:25 ADSeasy: Developing a system for data deposition
05OVdatYRpQ 22:54 Cloud computing and Cultural Heritage IT
NPtkKD7UCaI 52:57 Keynote: Open Archaeology
wY6lx6vbOxI 26:41 Integrating excavation and analysis on urban excavations
NBJ8-qx29io 25:42 The application of applications: The bump and grind of commercial archaeology
-kV5nBi2enU 13:04 Digital documentation through laser scanning of a cultural heritage site
SvjwNPrxv0k 17:14 The movements of the Teuchitlán people: A testimony of regional interaction in Western Mexico
mes9RI9dJBc 6:38 CAAUK 2013 Introduction from Guy Hunt
iqx1hMokems 17:53 Vote For Me -- Interactive Ways to Digitally Engage Audiences with Archaeology
-LdhhEMtrCo 17:52 When digital engagement costs you nothing: making websites in minutes
TaNRTzNK3jM 29:43 From Khipu Knots to Instant Tweets
QP7NDi8D3QU 20:09 Publishing in archaeology: Open Access and the REWARD project
_vCOfJseUqw 19:21 Nothing Ventured, Nothing Gained: DigVentures and Flag Fen Lives
3GbfRFfK2s4 14:08 Let's Get Digital, Digital!
q_L7H5mMmoY 14:42 We're Tweeting but is Anyone Really Listening?
TMD_rJB1xuM 21:28 Not All Archaeology is Equal
GroeEvsMqNE 17:32 Integrating Technology into the Trench
gT2_9kdg4ro 13:52 A Preview of the Ur Project (name still to be determined)
GGM9sFZwELw 18:42 Digital Artifact Ecosystems: The "Internet of Things" in Archaeology
yfbWgIpkHrU 14:07 Evaluating the Effectiveness of the Archaeological Apps as Interpretation Tools
Qzr5HDqjoxs 15:03 A case study in social media, new audiences and local museums -- Wiltshire Heritage Museum
EdvwNGym7hk 12:21 The Portable Antiquities Scheme and its impact on the public
fd2KhNsIRMc 15:32 Impact of the Archaeology Data Service (ADS)
n8tcEqrxe6Y 14:58 The Next Generation of Archaeology Public Engagement
o18M6AQlwco 13:41 The Archaeology of Digital Abandonment
KiZsjCKKBqI 20:01 An Emerging Research Framework for Studying Public Engagement with Digital Archaeology Resources
3TMvnqxjVBM 20:20 Digital Audiences -- A Few Lessons from Arts Council Research
0KTJl5e5XRU 22:20 Making it simpler -- access, archives and archaeology
e1ZrMuL1QbE 9:46 Introduction to the Digital Engagement in Archaeology Conference
Mi2wdVoaG9c 16:46 Barriers to Online Participation With the Portable Antiquities Scheme
y1CfdD6xodM 21:30 Archaeology Gets Inspired: Examples of Online Public Engagement From Across UCL
uqCZF7mQEk4 10:56 The Good, The Bad, and the Ugly of Archaeology and Social Media
3D192SU9pk8 23:34 The Risky Business of Organisational Social Media
tHp2FvoSJgc 15:12 Adopt-a-Monument - Digital Barriers to Our Grand Plans
DdX4uO2l7EQ 0:57 Archaeology Field Tehcnician Pay in 2010 (USA)
AsvhyPZX5iw 1:41 Archaeology Field Technician Pay Historic Trends
spK0yBjQ94g 1:01 Archaeology Field Technician Interactive Video Introduction
JPjgxPMTZPg 0:31 Archaeology Field Tehcnicain Pay Main Menu
ZGBix8KNGuw 1:01 Archaeology Field Technician Pay Region Map 2010
Yp8iVUPwAWw 1:01 Archaeology Field Technician Pay 2010: Iowa, Kansas, NB, ND, SD, MN, Missouri
aPUpUvSY5PI 1:01 Archaeology Field Technician Pay 2010: Illinois, Indiana, Michigan, Ohio, Wisconsin
oeWQfyo2ogk 1:01 Archaeology Field Technician Pay 2010: Florida, Georgia, NC, SC, Maryland, VA, WV
Z8bBxjfA9_4 1:01 Archaeology Field Technician pay 2010: Connecticut, Delaware, NY, NJ, Maine, Mass, PA, RI, VT
zsS2IZSZpcc 1:01 Archaeology Field Tecnician Pay 2010: Arkansas, Louisiana, Oklahoma, and Texas
s5KkhpF2hfo 1:01 Archaeology Field Tehcnician Pay 2010: AZ, CO, Idaho, NV, New Mexico, Montana, Utah & Wy
1RwvttpZKKU 1:01 Archaeology Field Technician Pay 2010:Alaska, California, Hawaii, Oregon, Washington
-g19axfKOuQ 1:01 Archaeology Field Technician Pay 2010: Alabama, Mississippi, Kentucky, Tennessee
`)

export const channel1Episodes: Array<Episode> = parseEpisodes([
  `# Elif'in Hecesi

    SUoqi6C8qkw 7:40 Perija and Friends - Kuzum Belo Edije ( a balkan gathering )
    p_avIhRC5aI 4:48 Maddi - Come and Go ( The ballad of the butterfly )
    Sq_kTDO97ao 3:06 Muharrem & Halil - Seni Şah'a Gider Derler
    ICdF6F3Qg_c 7:29 Mohammad Oktay - Ruhani Aşık Havası
    kLpBEkNpob0 6:51 Eren & Özgür - Yaman
    zMSdG1wpz3s 4:44 Itamar Zakai - Pleasant
  `,
  `
    zFa-n9uEcKI 8:34 All Related - Mountain Version (Nessi Gomes)
    HgBeSQaCXDQ 3:23 Akira Takeguchi - Konil Tolkyny (Көңіл толқыны)
    Oechuj3Mt7M 6:11 Perija - Sevda ( Tvojte ochi Leno mori )
    lNrIc9DTFUg 3:41 Nevra Coşkun - Güzel Mevcûdiyetim
    2X63S7FSWFs 7:23 Bacıyan - Sığmazam
    2u_dV0-TDQ8 3:49 Adaya - No Countries
    6CY6Z-8iQbM 7:09 Dunja & Tim - Welcome
    ZTVXX9iblhE 9:09 Farshad Haghighi - Tanbour Magham
  `,
  `
    7dcExfezgd0 3:43 Ayşe & Doğa - Kızılırmak
    HLe-oRtYAEM 8:33 Pouriya Raisi - Huzûr
    VXbGyJ6NQDI 10:23 Demircan & Macithan - Sığmazam
    syCrQp1OVO8 6:55 Memduh Özdemir - Canânı İster Canımız
    6Lys2SXUA5Q 10:53 A Gathering | Bir Buluşma: Doğruya Nazar Eyleriz
  `,
  `
    iLZQuO_e3Hs 11:25 Demircan Demir - Bir Yol Senden Açık
    tknEIHce5P8 4:39 Seda Seyrek Houbakht - Elif'in Hecesi
    0evfXX417co 10:06 Volkan Örgün - Efendiler Bağı
    _-dBFlwMnis 2:41 Georgi Ivanov Edrev - Karai Maicho
    IdWqBbCkDpg 4:38 Ayşe Özaltın - Ha Babam Ha
    dylcppL_yVQ 3:28 Süyümbike Güvenç - Tugan Avıl
    sk-S9ZRuT7g 3:03 Serxas - Barana Payîz
  `,
  `
    IsxCeTk5VXY 11:22 Hamed Habibpoor - Glare
    cIMKJ43TFLs 14:15 Özgür Baba - Dertli Dolap
    EE_5kmy8ZRc 3:13 Serkan Güven - Nihavend Gezinti
    8iBofAFcdBk 2:35 Bilal Karaman - Neredesin Sen
    YXbA8wzqyIQ 4:11 Aslı Büyükköksal - Güneş'le Birdirbir
    uMWm7ADcvmE 3:31 Faridah Busemann - Dertli Dolap
    Tal_1JmjI-Q 6:11 Yarden Cohen - Shaar Asher Nisgar
    ti_jsP3BJ-g 5:36 Zainab Lax - Negaresh
  `,
  `
    w-GJOnbpHRM 7:51 Burhan Alkhatib - Rumi I
    lenZMY8ESQ0 3:51 Doğa Can Yaman - Meandering
    pH-ElLzMY_E 5:04 Macithan Terzioğlu - Can Ellerinden Gelmişem
    Di8qHpVJjeI 4:54 Amin Parvin - Shoghe Rahaee
    d7pDgGR2dhY 8:11 Pouriya Raisi - Bi Zamani
    mJ8S8qxG9xk 7:33 Memduh Özdemir - Bugün Seyre Çıkmış Hublar Sultanı
    c9CfJyZxBug 7:11 Çağrı Akoğlu - Taft
    lbDuhK9F-KM 4:37 Selen Hünerli - Aşık
  `,
  `
    Udf1V3prIzU 7:14 Işık Işık - Kim Dervişlik İster İse
    JYEXS7lflYI 4:16 Seda Seyrek Houbakht - Rodos Semahı
    MECioY_N-94 4:24 Ali Naki Gündoğdu - Harabat Ehliyiz
    gTCBu37MfaI 7:17 Macithan Terzioğlu - Pınarın Başında Destin Var İmiş
    26vLRhm6bXc 3:21 Ertuğrul Küçükbayraktar - Çayın Öte Yüzünde
    lzRCuT1dUH0 3:20 Nebî - Dem-i Nesimi
  `,
  `
    qj139dE7tFI 4:01 LOTR The Fellowship of the Ring - Extended Edition - The Prologue: One Ring to Rule Them All... Pt 1
    d_NhmyrcoQ4 3:06 LOTR The Fellowship of the Ring - Extended Edition - The Prologue: One Ring to Rule Them All... Pt 2
    -PcUnqlPA8A 3:00 LOTR The Fellowship of the Ring - Extended Edition - Concerning Hobbits
    CiRu_W9tzM8 1:56 LOTR The Fellowship of the Ring - Extended Edition - A Long-expected Party Part 2
    4Yy0pPTrHlk 4:14 LOTR The Fellowship of the Ring - Farewell Dear Bilbo
    xYgc2G6ThUs 4:55 LOTR The Fellowship of the Ring - The Account of Isildur
    JZUxc-Cb5LM 1:24 LOTR The Fellowship of the Ring - Extended Edition - At the Green Dragon
    TBMiyEzOJmI 4:38 LOTR The Fellowship of the Ring - Saruman the White
    2rtpEbRyqbg 2:19 LOTR The Fellowship of the Ring - Bucklebury Ferry
    WmghV5AimjU 1:19 LOTR The Fellowship of the Ring - Extended Edition - Bree
    bYFPxU9xGZI 4:44 LOTR The Fellowship of the Ring - At the Sign of The Prancing Pony
    FTthEbYCYN8 2:12 LOTR The Fellowship of the Ring - The Nazgûl
    qofMAoY0Ts4 1:34 LOTR The Fellowship of the Ring - Extended Edition - Into the Wild
    fO9vymA8-vo 1:39 LOTR The Fellowship of the Ring - Extended Edition - The Midgewater Marshes
    wzaa-jHULLc 1:44 LOTR The Fellowship of the Ring - The Spoiling of Isengard
    LwinMu7-ZrI 2:31 LOTR The Fellowship of the Ring - The Caverns of Isengard
    LbAPwwAXaWM 3:34 LOTR The Fellowship of the Ring - The Fate of the Ring
    B1uGDjSVLOk 2:40 LOTR The Fellowship of the Ring - Extended Edition - The Sword That Was Broken
    -k3ABfmCr2I 3:34 LOTR The Fellowship of the Ring - Extended Edition - The Council of Elrond Part 1
    V1c2tUcL-jY 1:14 LOTR The Fellowship of the Ring - Extended Edition - Gilraen's Memorial
    ofDh5t1l738 1:44 LOTR The Fellowship of the Ring - Bilbo's Gifts
    brcI4oF1Kto 1:24 LOTR The Fellowship of the Ring - Extended Edition - The Departure of the Fellowship
    BuHLeZjYQrg 4:47 LOTR The Fellowship of the Ring - Extended Edition - The Pass of Caradhras
    oBkiwyEOWEU 1:07 LOTR The Fellowship of the Ring - Extended Edition - The Walls of Moria
    -jlsKzPiCbQ 2:37 LOTR The Fellowship of the Ring - Extended Edition - Moria Part 1
    UZzwaVerraA 2:45 LOTR The Fellowship of the Ring - Extended Edition - Moria Part 2
    jGUkkF8-3QQ 2:46 LOTR The Fellowship of the Ring - Extended Edition - A Journey in the Dark
    IrOqnZdvI6M 2:36 LOTR The Fellowship of the Ring - Extended Edition - Gandalf speaks to Frodo in Moria
    HKGQFkWI_bM 4:26 LOTR The Fellowship of the Ring - The Fall of Gandalf
    wbOvoGqraKY 3:55 LOTR The Fellowship of the Ring - Extended Edition - Lothlórien
    qdD6Cte8HrU 3:31 LOTR The Fellowship of the Ring - Extended Edition - Caras Galadhon
    YMjKPVBNQ0E 1:07 LOTR The Fellowship of the Ring - Extended Edition - Lament for Gandalf
    2OYsgAawB-s 2:01 LOTR The Fellowship of the Ring - Boromir and Aragorn in Lothlórien
    0I7Qs4ByI0c 5:03 LOTR The Fellowship of the Ring - Extended Edition - The Mirror of Galadriel
    tgXPRxmHk6Q 1:41 LOTR The Fellowship of the Ring - The Fighting Uruk-hai
    Ot7T7IzY--s 1:27 LOTR The Fellowship of the Ring - Extended Edition - Farewell to Lórien
    jASCi95Aw7A 3:33 LOTR The Fellowship of the Ring - Extended Edition - The Great River
    SlLC1kCH1ps 2:36 LOTR The Fellowship of the Ring - The Argonath
    LUZ29kEJLdE 3:02 LOTR The Fellowship of the Ring - Parth Galen
    9skYkQfAwus 2:43 LOTR The Fellowship of the Ring - Extended Edition - The Departure of Boromir
  `,
])

export const channel2Videos: Array<Video> = parseVideos(`
# Slow TV

3rDjPLvOShM 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, WINTER [1080HD] SlowTV
yCtt26c_AOg 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, SUMMER [1080HD] SlowTV
AWRKa0hOe98 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, FALL [1080HD] SlowTV
cNiN7gOcNI4 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, SPRING [1080HD] SlowTV
Ux8xAuQBdkk 3:00:13 4K Realtime Fireplace - Relaxing Fire Burning Video - 3 Hours - No Loop - Ultra HD - 2160p
gB3XH5t9QCA 6:04:00 4K HDR Fireplace REALTIME - 6 Hours - Relaxing Fire Burning Video & Crackling Sounds - NO LOOP - UHD
`)

export const channel4Videos: Array<Video> = parseVideos(`
if6iWVgR8h4 19:58 Silent Meditations (20 min) | 4 intervals
`)