// @flow
import type { Video } from "./types";
import { parseVideos } from "./ingestion";

export const videos: Array<Video> = parseVideos(`

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
undefined SHORTS WIKITONGUES: Najib speaking Kalasha
rEqO7tkF_04 4:20 WIKITONGUES: Rino speaking Balantak
VPnXITN30VU 6:41 WIKITONGUES: Ana speaking Croatian Sign Language
kDyUnJ0p8JE 1:04 WIKITONGUES: Riku speaking Assamese
RtvgMwWEjSo 0:59 WIKITONGUES: Safulo Kacaw speaking Amis
Gt0jbL8p8AM 2:20 WIKITONGUES: Mary speaking Soli
QMypNaOcn1E 3:47 WIKITONGUES: James speaking Zambian Sign Language
undefined SHORTS WIKITONGUES: Keith speaking Maltese
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
undefined SHORTS WIKITONGUES: Dmitry speaking Altai
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
undefined SHORTS WIKITONGUES: Hiljiardo speaking Esperanto
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
undefined SHORTS WIKITONGUES: Sunny speaking Taiwanese Min Nan
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
yijwlGeOlOM 3:04 Jordan Peterson - The Pathway to Redemption
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
M3i4Zcld30g 3:01 Jordan Peterson - Just People Putting Their Lives Together
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
LNJ8jfz9Nm4 2:21 Jordan Peterson - Conservatives And Liberals
ONvyz1AThLc 4:02 Terence McKenna - Electronic Tribalism
uJjR3aUhsOk 26:30 Terence McKenna - Self Transforming Elf Machines
sH43VpDkERc 1:01 Terence McKenna - Meeting With My Publisher
wJWGCF1NTiw 5:01 Terence McKenna - Paradise Lost
o2rpkM846Ic 5:28 Terence McKenna - Humanity Has A Purpose
W0kNgji6kzM 1:37 Terence McKenna - Culture Is A Flight From Reality
-kB-Vrrjjyo 18:33 How To Save The World - Terence McKenna
X7ghslwtrJc 9:32 Terence McKenna - Ideology Has Poisoned The Last Thousand Years
0BXZst265Es 6:02 Book Review
V3ADKHMwSoI 1:25 Jordan Peterson Explains Consciousness
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
Ecyo5NOCi54 6:32 Jordan Peterson Easter Message
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
tdu6iN0CM3s 4:36 Jordan Peterson - Don't Strive For Happiness
DenxHRuaZ50 10:00 The Best Terence McKenna Quotes Of All Time
tnGI8aADZro 3:38 Jordan Peterson - Food Of The Gods (The Mystical Experience)
wqfpSAf1Y6o 2:08 Terence McKenna - Who Knows The Answer?
EmzppDaX0_o 3:41 Take Nature As A Teacher - Terence McKenna
olvVeDDqv2w 3:51 How Weird People Shall Be Allowed To Be? - Terence McKenna
FJonUTXopBY 1:14 JBP Drinking Coke
w8M7t-gbwCk 14:22 We Plants Are Happy Plants Live At Toldi (2017)
NQS7ziJ02l8 3:13 Go Forward Into The Shamanic Domain Of The Spirit - Terence McKenna
kO93SAHrd1E 4:01 How Jordan Peterson And His Wife Make Their Marriage Work
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
0jQY5E4NUvc 2:12 Jordan Peterson - Jump Straight Up (Remix)
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
dYMz_UArCAo 1:41 Rats Are So Afraid Of Cats - Jordan Peterson (Remix 2)
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
CuiPzPV6nw0 1:08 Jordan Peterson as Jerry Seinfeld
BCMTi9AU_5Q 8:09 Terence McKenna - Growing Up
dOy7v44WE2o 2:14 Terence McKenna - Curiosity
i4sB3agikXI 3:50 Terence McKenna - Transformation Of Man Into A Galaxy-Roving Bodhisattva
54JA1AHqnI8 1:10 We Have To Awaken To Our Past - Terence McKenna
L3b-FB_2-nk 7:24 We Plants Are Happy Plants - Not Waiting For Anything
wieYC04FAcw 1:06 Terence McKenna - Show!
bg5mE5yp-5g 3:04 Jordan Peterson - Plan Your Future
EpZzkNBqOJQ 2:47 Terence McKenna - Anarchy And Social Responsibility
qDSeL8wSN20 6:10 Jordan Peterson - I Suffer Therefore I Am
uJBgj8U3lw0 4:34 Jordan Peterson - Psychedelics
WVGPoAofey8 1:01 Terence McKenna - You Can Give It A Theme
cQvd8a1Z6vo 5:15 Terence McKenna - Evolution Of Language
pUqBbOzBZ5Y 2:19 Jordan Peterson - Rats Are So Afraid Of Cats (Remix)
Q2IJ9ZTLfY0 6:46 Terence McKenna - Transition
9apmGBM-hiI 1:49 Jordan Peterson - Stories And Myths
_VlJCtPAmbg 3:58 Terence McKenna - Lisbon Interlude
MdsVC_qR4t0 5:34 Jordan Peterson - Nihilism, Totalitarianism, and The Divine Individual
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
YOG1L7ZMjs0 3:15 We Plants Are Happy Plants - Tipsiness And Rapture
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

# Concerts

i0djHJBAP3U 1:18:43 Huun-Huur-Tu - Live Berkely

# Culadasa Audio Archive

UG-0XGpesgs 39:10 Sit, Breath, Wake Up! Meditation #1 - Culadasa
IeXWFRs5cGk 42:45 Sit, Breath, Wake Up! Meditation #2 - Culadasa
SRqXq570Cf0 45:40 Sit, Breath, Wake Up! Meditation #3 - Culadasa
aNFc4veG61E 20:10 Sit, Breath, Wake Up! Meditation #4 - Culadasa
LBDV7jmZL8s 51:40 Sit, Breath, Wake Up! Joy, Meditation #7 - Culadasa
gB4_JS4jsb0 34:20 Sit, Breath, Wake Up! Meditation #5 - Culadasa
nbvx7K_Zh0U 45:25 Sit, Breath, Wake Up! Still Point, Meditation #8 - Culadasa
SpTDGyhoFho 24:55 Sit, Breath, Wake Up! Metta, Meditation #9 - Culadasa
4XGLpEJBq5c 1:59:40 Sit, Breath, Wake Up! Part 1, Including Meditation - Culadasa
xySz7-vJbjo 1:24:50 Sit, Breath, Wake Up! Part 2, Including Meditation - Culadasa
Ok347OnJyYc 1:38:25 Sit, Breath, Wake Up! Part 4, Including Meditation - Culadasa
-lYvn_JxiaM 1:14:50 Sit, Breath, Wake Up! Part 3, Including Meditation - Culadasa
Mw0GWsCYSho 1:52:30 Sit, Breath, Wake Up! Part 7, Including Joy Meditation - Culadasa
pyFa9lezeLE 49:45 Sit, Breath, Wake Up! Part 5, Including Meditation - Culadasa
F-SO2jLEl94 59:00 Sit, Breath, Wake Up! Part 6 - Culadasa
mtdUEXGAxIc 1:17:05 Sit, Breath, Wake Up! Part 8, Including Still Point Meditation - Culadasa
DBrpnFgXZY4 1:05:15 Sit, Breath, Wake Up! Part 9, Including Metta Meditation - Culadasa
F1qKILcv9eA 1:30:55 tcmc-weekend-03-22-2013a-trim-lc-amp-comp
8d0NJNnc90E 1:16:55 tcmc-weekend-03-23-2013c-trim-lc-amp-comp
ZReyxVVZlHA 52:50 tcmc-weekend-03-23-2013b-trim-lc-amp-comp
Jd-ymGtmsAs 1:23:10 tcmc-weekend-03-23-2013d-trim-lc-amp-comp
1fesc0JmB0s 1:17:10 tcmc-weekend-03-24-2013f-trim-lc-amp-comp
oDAWRHX1ez8 1:17:00 tcmc-weekend-03-23-2013e-trim-lc-amp-comp
6UzBUJCMDLM 50:45 tcmc-weekend-03-24-2013g-trim-lc-amp-comp
Os78CbIOCaU 1:13:15 tcmc-weekend-03-24-2013h-trim-lc-amp-comp
-VgYwj3QLY8 1:28:35 tcmc-weekend-03-24-2013i-trim-lc-amp-comp
xwIuNvfs3-A 1:14:40 The Path to Awakening in Daily Life, Part 1 - Culadasa
akF9g-7p18g 1:11:10 The Path to Awakening in Daily Life, Part 3 - Culadasa
EsyJiZJ7y4Q 1:04:40 The Path to Awakening in Daily Life, Part 2 - Culadasa
Ay3t8b-I9xk 1:19:15 The Path to Awakening in Daily Life, Part 4 - Culadasa
uFDhnyJzzLE 55:55 The Path to Awakening in Daily Life, Part 5 - Culadasa
iqBvQ_b0zEE 1:09:30 The Path to Awakening in Daily Life, Part 7 - Culadasa
8Y9wpzzarAc 1:01:50 The Path to Awakening in Daily Life, Part 6 - Culadasa
2k-NO_vUAqk 40:50 The Path to Awakening in Daily Life, Part 8 - Culadasa
4E2e3AZZuVw 38:50 Discussion about the Anapanasati Sutta - Culadasa
jVoK8u6LDMM 46:25 The Magic of Mindfulness, Part 1 - Culadasa
Ds5Um2pZ2a8 1:23:15 The Magic of Mindfulness, Part 4 - Culadasa
zF6rkzTtvI4 1:15:40 The Magic of Mindfulness, Part 3 - Culadasa
N_HB_wpsmOc 35:55 The Magic of Mindfulness, Part 2 - Culadasa
-7rQQq9FI4E 45:25 The Magic of Mindfulness, Part 5 - Culadasa
6wmmWA-oxVk 1:25:10 The Magic of Mindfulness, Part 8 - Culadasa
6jQ6pXPu8gM 37:00 The Magic of Mindfulness, Part 6, Guided Meditation - Culadasa
oXOrlj_Us8Q 1:01:30 The Magic of Mindfulness, Part 7 - Culadasa
-6D8fCaLGqw 1:28:10 The Magic of Mindfulness, Part 9 - Culadasa
Ce_M5w83mMo 1:35:50 The Magic of Mindfulness, Part 10 - Culadasa
Xiz1DkB1JeU 46:40 The Magic of Mindfulness, Part 9, Meditation Only - Culadasa
KdQRPJsCpV0 43:25 The Magic of Mindfulness, Part 11 - Culadasa
5RxJHGQIo6c 34:35 The Magic of Mindfulness, Part 11 - Meditation Only
WbqhyGbIkic 1:49:15 Meditation and Insight, Part 1 - Culadasa
holYpHpF_v8 1:17:45 Meditation and Insight, Part 2 - Culadasa
G_X9f5tPcv0 1:27:05 Meditation and Insight, Part 3 - Culadasa
BdNzQ5mpMPM 1:16:15 Meditation and Insight, Part 4 - Culadasa
dp1YUUw9_xQ 44:20 Meditation and Insight, Part 5 - Culadasa
pUJGCaaECnY 22:40 Meditation and Insight, Part 3, Meditation Only - Culadasa
X3I8gD_VuH0 1:17:30 Meditation and Insight, Part 6 - Culadasa
litqY-oF1DY 1:09:15 Meditation and Insight, Part 8 - Culadasa
irovcJniM34 45:30 Meditation and Insight, Part 7 - Culadasa
xGDw947qcO4 47:55 Meditation and Insight, Part 9 - Culadasa
om9lc05kShI 1:11:20 Meditation for Peace, Part 1 - Culadasa
XWs7iJuRlNk 1:03:05 Meditation for Peace, Part 2 - Culadasa
gc4OIzNCzJE 1:18:10 Meditation for Peace, Part 4 - Culadasa
i2smsi-Po5s 1:00:25 Meditation for Peace, Part 3, Meditation Followed by Discussion - Culadasa
_c0SvbC3n0E 1:04:45 Meditation for Peace, Part 5 - Culadasa
_O0HwUi4L8M 19:45 Meditation for Peace, Part 6 - Culadasa
X2I1Xkpu1ao 1:05:35 Meditation for Peace, Part 8 - Culadasa
w5yfStrGXZs 46:25 Meditation for Peace, Part 7, Guided Metta - Culadasa
PbKB7L3wXN4 1:37:35 Joy & Meditation, Part 1, Introduction - Culadasa
4h_jZo7D8nY 52:25 Joy & Meditation, Part 3 - Culadasa
pnVa5LOFYMI 12:45 Joy & Meditation, Part 2, Meditation - Culadasa
Xfj-XisH-f8 33:35 Joy & Meditation, Part 4, Guided-Meditation - Culadasa
WuHTnUFJvTY 57:45 Joy & Meditation, Part 5 - Culadasa
x8f4ywGuz7E 1:05:40 Joy & Meditation, Part 6 - Culadasa
5P-EcrWA3JE 56:05 Joy & Meditation, Part 8 - Culadasa
QdWx1DyPoG4 34:55 Joy & Meditation, Part 7, Guided-Meditation - Culadasa
VvWGrbkl7XU 27:10 Joy & Meditation, Part 9 - Culadasa
GEJPm0EpZIY 1:20:00 Joy & Meditation, Part 11 - Culadasa
-UjegcD2NOI 40:25 Joy & Meditation, Part 10, Guided-Meditation - Culadasa
kLLUeGyKLFw 39:20 Joy & Meditation, Part 12 - Culadasa
7pXwbEuqlds 49:00 Joy & Meditation, Part 13, Closing Meditation - Culadasa
sJ02xiHY1KI 1:14:25 What Is Enlightenment, Part 1 - Culadasa
hM2qhko-5V0 53:10 What Is Enlightenment, Part 2 - Culadasa
gTTbURalWwY 1:27:35 What Is Enlightenment, Part 4 - Culadasa
6udxIzA9B8I 50:05 What Is Enlightenment, Part 3 - Culadasa
GoiFe39LKiE 1:19:25 What Is Enlightenment, Part 5 - Culadasa
aOKWj4Kk2rg 1:14:05 What Is Enlightenment, Part 6 - Culadasa
BwmcPn-7oMI 1:41:10 What Is Enlightenment, Part 7 - Culadasa
JwpiFIrG4bk 1:27:35 When the Buddhadharma Came to the West, Part 1 - Culadasa
ARdWVSNy7U8 1:23:45 When the Buddhadharma Came to the West, Part 3 - Culadasa
gGKT2sxn2Vs 1:17:10 When the Buddhadharma Came to the West, Part 2 - Culadasa
hoik390Dg9k 1:13:40 When the Buddhadharma Came to the West, Part 4 - Culadasa
R3nftLD2eMA 52:55 When the Buddhadharma Came to the West, Part 5 - Culadasa
8sEeiWdGW-o 1:38:00 When the Buddhadharma Came to the West, Part 6 - Culadasa
sMPeNHk6Srs 1:16:10 When the Buddhadharma Came to the West, Part 8 - Culadasa
S9xqIz51SbM 29:10 When the Buddhadharma Came to the West, Part 7 - Culadasa
TJcy0n9NnKI 1:29:25 The Jhanas, Part 5 - Culadasa
qstlQPwmHq8 4:25 How Do We Project Reality - Culadasa
oufkssKC5qA 4:15 How Do I Meditate - Culadasa
WLx5Fvh91eE 30:45 The Jhanas, Part 6, Meditation - Culadasa
YplfDrwaZNA 59:00 The Jhanas, Part 4 - Culadasa
HeZuKlcaRTs 1:23:40 The Jhanas, Part 3, Meditation and Discussion - Culadasa
3z3Mt0Bw4GE 1:20:00 The Jhanas, Part 2 - Culadasa
M8vpuW34HcI 1:36:35 The Jhanas, Part 1 - Culadasa
YZSsmNBUWEw 1:14:15 Meditation for Peace, Part 1 - Culadasa
xY7BdB32DEk 1:06:35 Meditation for Peace, Part 8 - Culadasa
YiO0UpLWbcA 48:00 Meditation for Peace, Part 7 - Culadasa
wc-EslQfkDU 1:05:50 Meditation for Peace, Part 5 - Culadasa
DQG0WzQTZfI 1:21:15 Meditation for Peace, Part 4 - Culadasa
AT9ZRu_4XMY 19:55 Meditation for Peace, Part 6 - Culadasa
qsgmBFeb5Cw 1:01:35 Meditation for Peace, Part 3 - Culadasa
rBerwigAmAQ 1:04:00 Meditation for Peace, Part 2 - Culadasa
tbF2gwJLEWQ 1:06:35 Meditation for Peace, Part 8 - Culadasa
WB76phVVvsA 1:21:15 Meditation for Peace, Part 4 - Culadasa
ApfkpAp3aC0 1:14:15 Meditation for Peace, Part 1 - Culadasa
An5pQGuPyRk 1:05:50 Meditation for Peace, Part 5 - Culadasa
Hwd9DnGRjpg 1:01:35 Meditation for Peace, Part 3 - Culadasa
90JkxrK8QjM 1:04:00 Meditation for Peace, Part 2 - Culadasa
hYYjVAJfOPM 48:00 Meditation for Peace, Part 7 - Culadasa
ENWUs9QqTCU 19:55 Meditation for Peace, Part 6 - Culadasa
5mlUleMSiTQ 1:38:30 When the Buddhadharma Came to the West, Part 6 - Culadasa
lsNaJVfKwZs 1:16:10 When the Buddhadharma Came to the West, Part 8 - Culadasa
VAPcuZvr9JA 1:29:15 When the Buddhadharma Came to the West, Part 1 - Culadasa
q1NkYOCYlA4 1:14:10 When the Buddhadharma Came to the West, Part 4 - Culadasa
KvG4Rw0YuJY 1:24:25 When the Buddhadharma Came to the West, Part 3 - Culadasa
ZpBlVT8okLQ 54:25 When the Buddhadharma Came to the West, Part 5 - Culadasa
3UVOXvaG6z8 1:18:20 When the Buddhadharma Came to the West, Part 2 - Culadasa
unnYRQF04BE 29:15 When the Buddhadharma Came to the West, Part 7 - Culadasa
wpj0hT4_dwk 22:35 What is the Space Between Thoughts? - Culadasa
WUYh-0Tkvjk 17:10 The Five Aggregates and “No-Self” - Culadasa
mStFqLFqXRA 31:30 Piti (Joy) - Culadasa
zPv549Jmia4 18:35 What is Karma? - Culadasa
ROwydcA-Mkc 17:40 Will Power and Achievement - Culadasa
pgK3cLIO5DM 21:30 Motivation for Morality - Culadasa
Wprau239F-E 11:55 Progressing on the Path - Culadasa
oOCtnXOL6mk 10:50 Silence of the Mind - Culadasa
krRHH83qbiU 20:30 How to Develop Introspective Awareness - Culadasa
ud6Ndl6i2rE 2:25 Walking Meditation - Culadasa
PSal7mqWPps 3:50 Subtle Distractions and Gross Dullness - Culadasa
ourDJ0u2Xbo 7:30 Role for Psychedelics in the Path - Culadasa
M7G5Xt5GRb8 4:45 Is the Hologram a Good Model for Ultimate Reality? - Culadasa
MflPS9FAV5E 5:25 How Does the Mind Create the World? - Culadasa
2aQgp47Fknc 4:25 How Do We Project Reality? - Culadasa
kCkR5wINMBA 4:15 How Do I Meditate? - Culadasa
oTBUDL8SfwU 15:55 Can Suchness Be Reduced to Energy? - Culadasa
IVUYdz_yzAw 9:20 Concentration vs Blissful States and Dullness - Culadasa
Qvb1JL94ikU 5:30 Focus on Sensations vs Absorption at Stage 4 - Culadasa
nFMPD65ccTI 9:10 A Model for Understanding Dullness - Culadasa
u-FD7WijOxk 1:00:10 TCMC Thursday #20, Part 2 - Culadasa
5yrF0tBrnP4 1:00:15 TCMC Thursday #10 - Culadasa
vBrDgkMNh3Q 1:50:05 Bisbee Zen Sangha Lecture - Culadasa
pO2ChM2NFgY 1:53:45 Q&A - Culadasa, Stronghold Retreat #1, Part 5
cVU1rikYX9Y 45:25 Guided Meditation, TCMC Weekend #1, Part 7 - Culadasa
5_KI-CwG37c 1:04:40 TCMC Thursday #28, Part 2 - Culadasa
uw3S_pDNjkQ 1:18:05 UWest Meditation Camp #2, Part 1 - Culadasa
8smu6ilczdI 54:45 Uposatha Day #26 - Culadasa
jCLVsQIdY8w 1:08:57 TCMC Thursday #27, Part 2 - Culadasa
0P3Yyat-BaY 46:00 Uposatha Day #27 - Culadasa
1R9xgzbRF5Q 6:20 Tips on Developing Full-minded Awareness with Concentration (Stage 5) - Culadasa
W3xULt6Uatc 39:15 TCMC Thursday #28, Part 1 - Culadasa
rm9zAOF0mr8 29:25 TCMC Thursday #27, Part 1 - Culadasa
id7tS03tufI 57:20 TCMC Weekend #1, Part 9 - Culadasa
e7W5JRI1c8g 1:18:50 Uposatha Day #23 - Culadasa
-pqILBXTL0A 1:10:15 Uposatha Day #20 - Culadasa
lQBtlKV-8A4 13:30 Can a Cessation Be an Object of Consciousness? - Culadasa
vaVhcfOqIVE 1:13:15 UWest Meditation Camp #2, Part 8 - Culadasa
GC-n9-dWYsg 1:00:30 Uposatha Day #25 - Culadasa
M22w9lxOtAo 1:07:10 Uposatha Day #22 - Culadasa
dL02xlODGbI 47:10 Uposatha Day #24 - Culadasa
eG5VxQUctPQ 1:04:15 TCMC Weekend #1, Part 6 - Culadasa
uHWxeRv9M5Y 1:39:15 Guided Metta - UWest Meditation Camp #2, Part 10 - Culadasa
eqL6CsQ3lFg 1:00:15 UWest Meditation Camp #2, Part 6 - Culadasa
Bv9_koMGnWc 33:30 Uposatha Day #21 - Culadasa
pyoewXHdww0 1:03:55 UWest Meditation Camp #2, Part 5 - Culadasa
a9NKE-7GrZQ 1:19:20 TCMC Weekend #1, Part 2 - Culadasa
wILUJC_sqRY 51:35 TCMC Weekend #1, Part 8 - Culadasa
R0f7KOhA7Qc 1:12:00 TCMC Weekend #1, Part 4 - Culadasa
lfPThV3AARs 38:35 UWest Meditation Camp #2, Part 4 - Culadasa
lTQj8xh-BfM 1:26:30 TCMC Weekend #1, Part 1 - Culadasa
KdkOwnxE9rY 1:23:50 TCMC Thursday #21, Part 2 - Culadasa
hqnyTNVcSik 1:04:35 TCMC Weekend #1, Part 3 - Culadasa
iChmRArdaLo 23:25 UWest Meditation Camp #2, Part 7 - Culadasa
920eFHwVlJs 58:55 TCMC Weekend #1, Part 10 - Culadasa
h3JLS4-ZWbE 1:09:30 Dharma Talk - Culadasa, Santa Fe Vipassana Sangha
rEgW_al38u4 47:10 TCMC Thursday #26 - Culadasa
UC6Xouvoi7k 13:15 UWest Meditation Camp #2, Part 3 - Culadasa
RN8SwjbPlWE 1:02:30 TCMC Thursday #24, Part 2 - Culadasa
D2yc0g73YBU 1:09:25 TCMC Thursday #23, Part 2 - Culadasa
sp9KKBWN5Wk 9:10 The Awakening Process - Culadasa
6Fgux1RwmYQ 1:26:20 Q&A - Culadasa, Stronghold Retreat #1, Part 4
wrw7vKh_9BU 19:00 TCMC Weekend #1, Part 5 - Culadasa
q-W_rfqczBw 1:07:35 TCMC Thursday #22 - Culadasa
b56ubFUSw6w 1:38:35 Dharma Talk - Culadasa, Stronghold Retreat #1, Part 2
1216dY3Pvdk 22:50 TCMC Thursday #25 - Culadasa
nRLmVRSEcUM 55:25 Q&A & Dharma Talk - Culadasa, Stronghold Retreat #1, Part 3
u6qjNcZ9GCA 42:50 TCMC Thursday #20, Part 1 - Culadasa
-dh1sQUjMts 58:30 Dharma Talk - Culadasa, Stronghold Retreat #1, Part 1
WP1tvBUKI_Q 28:35 TCMC Thursday #23, Part 1 - Culadasa
n2uF0xD7x7E 21:25 TCMC Thursday #24, Part 1 - Culadasa
DZg8pCJlzX8 26:40 TCMC Thursday #21, Part 1 - Culadasa
pYowT4zFgwc 14:05 Levels After the First Nine Meditation Stages - Culadasa
0CcyCbcTovA 23:10 Guided Meditation, UWest Meditation Camp #2, Part 2 - Culadasa
Mu0SkCBR0nM 20:30 How Does Insight Fit into the Meditation Systems - Culadasa
rXJZhFgX2tk 11:25 Bypassing Steps to Awakening? - Culadasa
T7DJRmgDweE 34:30 Q&A - Culadasa, Retreat in California #4, Part 2
luJk8sbK2SI 1:38:01 UWest Meditation Camp #1, Part 4 - Culadasa
uxb_0HNI48Q 1:37:15 University of the West Lecture - Culadasa
oLY0mG2MdRk 1:08:15 Uposatha Day #18 - Culadasa
z3lTL0k4UmA 49:00 Uposatha Day #19 - Culadasa
ZDlU3G0eYiE 1:27:55 TCMC Weekend #1, Part 1 - Culadasa
oDDk6RJTWxY 58:05 Uposatha Day #17 - Culadasa
uWElZuDMpMM 52:50 Uposatha Day #16 - Culadasa
oaGu4A4KfVs 15:55 What is Free Will - Culadasa
9y6eFyPZCSQ 1:18:40 TCMC Thursday #17, Part 2 - Culadasa
e2KkHo8wGMo 43:20 Uposatha Day #14 - Culadasa
NHfqniV75Aw 58:47 UWest Meditation Camp #1, Part 8 - Culadasa
8HnEWG5qDLI 1:15:50 TCMC Thursday #18, Part 2 - Culadasa
y2gLtq8JRHM 1:47:15 Dharma Talk - Culadasa, Retreat in California #4, Part 9
7f_BEI7XJhU 16:40 When We’ve Done Wrong - Culadasa
CNPdu6jjeNI 1:05:20 TCMC Thursday #19, Part 2 - Culadasa
HvfqSSF_QFE 46:55 Uposatha Day #13 - Culadasa
eFVkkRZ9WDM 1:20:35 TCMC Thursday #15, Part2 - Culadasa
4JFLsHNdE3s 1:11:55 TCMC Thursday #16, Part 2 - Culadasa
oLiFFYFIFp4 1:42:20 Dharma Talk - Culadasa, Retreat in California #4, Part 7
iOIQjYjy7n4 6:30 Uposatha Day #15 - Culadasa
ENDA8TKB9jI 1:28:25 Dharma Talk - Culadasa, Retreat in California #4, Part 5
_j_XSDukuPQ 35:10 TCMC Thursday #18, Part 1 - Culadasa
6iGOYQE-0ZQ 21:30 TCMC Thursday #19, Part 1 - Culadasa
LLLKVOWuhRM 28:00 TCMC Thursday #17, Part 1 - Culadasa
UMMCB-f3ALM 1:31:10 Dharma Talk - Culadasa, Retreat in California #4, Part 13
uRYLMUOPMlM 1:40:50 Dharma Talk - Culadasa, Retreat in California #4, Part 14
it4uodKgY5Q 34:10 TCMC Thursday #16, Part 1 - Culadasa
dsOl0vFkkTU 24:15 Q&A - Culadasa, Retreat in California #4, Part 4
bPHS6mdr0fA 30:05 TCMC Thursday #15, Part 1 - Culadasa
c7fH8AR978U 1:22:40 Dharma Talk - Culadasa, Retreat in California #4, Part 3
okEjvyYOx88 33:55 Q&A - Culadasa, Retreat in California #4, Part 6
L1HXCZV8XL0 1:32:45 Dharma Talk - Culadasa, Retreat in California #4, Part 11
tYZOM-C5hZ8 23:40 Q&A - Culadasa, Retreat in California #4, Part 8
MD39KrPZQmE 28:50 Q&A - Culadasa, Retreat in California #4, Part 10
vJgT3_2lZWQ 9:00 Sleepiness and Dullness - Culadasa
qQsfqL9FxqA 1:09:10 Dharma Talk - Culadasa, Retreat in California #3, Part 19
6YcrRxk1PgE 33:00 Guided Beginner Meditation, UWest Meditation Camp #1, Part 10 - Culadasa
7wnt72CF_Gg 24:00 Mind Unification - Culadasa
8sBGx0VwCuo 1:07:10 Dharma Talk - Culadasa, Retreat in California #4, Part 1
w3dwsnoJQZM 14:40 Q&A - Culadasa, Retreat in California #4, Part 12
IEwgfA68m6c 15:00 Mindfulness Practice - Culadasa
SRM4bNmg0-g 15:30 Behind the Veil - Culadasa
jWLJhhrTokU 1:25 Lengthening Meditation Times - Culadasa
PTUZxS9cjwQ 20:05 Changing Your Destiny - Culadasa
UeJYk6Nm0r0 8:50 Benefits of Meditation - Culadasa
4IVxof5UQkg 4:35 Counting as Meditation Tool - Culadasa
L5cLz8A9k3A 5:55 Brain vs Mind - Culadasa
Xj06Lc7y21I 1:07:05 TCMC Thursday #11, Part 2 - Culadasa
XazGRf3OnNc 1:27:25 UWest Meditation Camp #1, Part 6 - Culadasa
LENVuV2yeR4 1:34:15 Uposatha Day #11 - Culadasa
OPeTSpVFgzI 1:44:25 UWest Meditation Camp #1, Part 11 - Culadasa
YpbZSm8nEcs 1:00:20 UWest Meditation Camp #1, Part 5 - Culadasa
LVISBodOXac 55:55 Uposatha Day #10 - Culadasa
lTCNyukce0k 1:00:45 UWest Meditation Camp #1, Part 7 - Culadasa
wZaVkac9oK4 47:50 UWest Meditation Camp #1, Part 9 - Culadasa
LqUfbmBn0XQ 1:15:00 UWest Meditation Camp #1, Part 1 - Culadasa
maQ7WNnMMVI 1:12:53 UWest Meditation Camp #1, Part 14 - Culadasa
w3SZAD7VZ8c 1:03:47 UWest Meditation Camp #1, Part 12 - Culadasa
t-RLX9JA21M 16:05 Uposatha Day #8, Mindfulness in Daily Life - Culadasa
gD9WB4zI4eo 56:25 UWest Meditation Camp #1, Part 3 - Culadasa
P1gZHKsPF_Y 23:55 Uposatha Day #12 - Culadasa
9J70of2c8Xw 29:40 Uposatha Day #7 - Culadasa
Vrn-GhJofeU 1:07:50 Q&A - Culadasa, Retreat in California #3, Part 8
WZN9NuUeH6Q 1:08:35 TCMC Thursday #12 - Culadasa
vd0s3TREqok 1:25:20 TCMC Thursday #13 - Culadasa
HHVCSTDsF6s 1:08:10 Dharma Talk - Culadasa, Retreat in California #3, Part 9
S3nX3gm9JBA 1:08:00 TCMC Thursday #14, Part 2 - Culadasa
3ENaibWuA0w 56:40 Q&A - Culadasa, Retreat in California #3, Part 2
6aWXvmIjDAE 1:08:50 Q&A - Culadasa, Retreat in California #3, Part 13
MZQqa2NvoHg 1:08:10 Q&A - Culadasa, Retreat in California #3, Part 4
DJBBZ9pKLcE 1:02:25 Q&A - Culadasa, Retreat in California #3, Part 15
w9jAKb2Mqi8 35:10 TCMC Thursday #14, Part 1 - Culadasa
Da44vOqxXLw 29:30 TCMC Thursday #11, Part 1 - Culadasa
c-KuXPdIZe8 1:00:50 Q&A - Culadasa, Retreat in California #3, Part 17
9jH8MpuXlHc 1:03:00 Q&A - Culadasa, Retreat in California #3, Part 10
0G8q942gfzM 58:40 Q&A - Culadasa, Retreat in California #3, Part 6
q-XQicy6HR0 1:05:50 Dharma Talk - Culadasa, Retreat in California #3, Part 14
8GE5M0wrjss 1:38:30 Dharma Talk - Culadasa, Retreat in California #3, Part 16
ZYV2X_7YNQc 36:30 Guided Metta - Culadasa, Retreat in California #3, Part 18
sacyPpJK7gg 44:00 Opening - Culadasa, Retreat in California #3, Part 1
0Uork0NCSis 1:22:10 DM Retreat #2 - Culadasa
_FCO92IIMLE 1:11:30 Dharma Talk - Culadasa, Retreat in California #3, Part 3
HiyQfOzsSms 59:35 Dharma Talk - Culadasa, Retreat in California #3, Part 11
3efUiakSwiI 56:05 Dharma Talk - Culadasa, Retreat in California #3, Part 5
R0Crl1r_4Fk 1:09:10 Dharma Talk - Culadasa, Retreat in California #3, Part 7
6ghUvwHiq-Y 1:14:15 Beginner Guided Meditation, UWest Meditation Camp #1, Part 2 - Culadasa
8yz0HxXTVFY 28:25 Guided Metta - Culadasa, Retreat in California #3, Part 12
70qMmwmaccQ 1:13:15 DM Retreat - Culadasa
xmmPRYagq3s 26:05 Guided Metta Meditation, UWest Meditation Camp #1, Part 13 - Culadasa
wU0RjslXxlo 14:00 Analytical Meditations, What and How - Culadasa
SdYgWK-mYrg 3:00 First Stage of Meditation Tips - Culadasa
oQixjDgWq9g 1:28:13 Cochise Stronghold 10 Day Retreat #1, Part 1 - Culadasa
Zl0zl_Yd1-I 1:25:15 Cochise Stronghold 10 Day Retreat #1, Part 3 - Culadasa
TnasBvYIsHE 59:00 Closing Dharma Talk - Culadasa, Cochise Stronghold Weekend #1, Part 3
EpupNjzIt-M 1:13:15 Cochise Stronghold 10 Day Retreat #1, Part 4 - Culadasa
nLQ_1dSc8ZQ 51:00 Cochise Stronghold 10 Day Retreat #1, Part 2 - Culadasa
QGlXc2UWBJY 1:10:15 Cochise Stronghold 10 Day Retreat #1, Part 6 - Culadasa
yA-q5TQn0NM 7:15 Brightening the Mind to Combat Subtle Dullness - Culadasa
dqxHOoBS8e8 1:04:45 Cochise Stronghold 10 Day Retreat #1, Part 7 - Culadasa
FqYQWfh1GJw 46:30 Cochise Stronghold 10 Day Retreat #1, Part 5 - Culadasa
iPZTuq11gqA 1:57:05 TCMC Thursday #5 - Culadasa
yAqvatURbgs 1:26:10 Dharma Talk, Q&A - Culadasa, Cochise Stronghold Weekend #1, Part 2
PSg_Pxe89bA 1:43:30 TCMC Thursday #7 - Culadasa
WeQ-VzAFDzU 1:29:25 TCMC Thursday #6, Part 3 - Culadasa
m13cmG7uhu8 43:20 Guided Metta Meditation, TCMC Thursday #6, Part 2 - Culadasa
-8JH-QPG6lA 19:45 Combating Depression and Dissastifaction During Transition - Culadasa
8-dkvQ8T89o 15:05 Loving Kindness Practice - Culadasa
Xx-QIXKainU 12:25 Craving, What’s it All About? - Culadasa
Idkm7mG3ohI 3:40 Exchanging Self and Others - Culadasa
w9i_1vp2OCg 6:20 How do I develop mindful awareness and good concentration - Culadasa
GGOS42Ws7_I 1:14:45 TCMC Thursday #9, Part 2 - Culadasa
1kXIzUKS0TM 11:55 The Benefits and Practice of Letting Go - Culadasa
-TmI4U9JYFc 4:40 Physical Suffering vs Mental Suffering - Culadasa
wRZdcZUz1ks 21:45 TCMC Thursday #6, Part 1 - Culadasa
mywGH24zu60 41:35 TCMC Thursday #8, Part 2 - Culadasa
-2rXnz9RUuc 31:15 TCMC Thursday #8, Part 1 - Culadasa
KRxHUtQ3Vjc 42:40 Uposatha Day #5 - Culadasa
ZCiDLdvHDyI 25:55 TCMC Thursday #9, Part 1 - Culadasa
HuKdJQUR2TY 15:00 Uposatha Day #3 - Culadasa
endc5cDy8zM 10:50 Uposatha Day #4 - Culadasa
293vximFQW4 1:25 Working with Post Traumatic Stress Disorder - Culadasa
V5v-nNBgYSM 45:20 Guided Meditation - Culadasa, California Retreat #2, Part 6
25GQobBP1C0 1:42:35 TCMC Thursday #4 - Culadasa
F_MDEaOBWI0 1:57:45 TCMC Thursday #1 - Culadasa
8EetwP74CF0 1:25:40 TCMC Thursday #2 - Culadasa
5Rz0LSfeRyQ 1:34:05 TCMC Thursday #3 - Culadasa
1akIBebwVOQ 1:04:50 Introduction - Culadasa, Cochise Stronghold Weekend, Part 1
GlaQy-CRY_Q 35:15 Uposatha Day #2 - Culadasa
8o-qawkwkeE 1:23:00 Dharma Talk - Culadasa, California Retreat #2, Part 4
vxkieoMDKsk 1:01:20 Q&A – Culadasa, Retreat in California #2, Part 8
m8rijuciZWg 1:25:05 Dharma Talk – Culadasa, Retreat in California #2, Part 11
12gfXprvTWo 59:20 Q&A – Culadasa, Retreat in California #2, Part 5
y9h7KzDwMMU 1:27:10 Dharma Talk – Culadasa, Retreat in California #2, Part 9
cSjkj8p1bzw 1:04:25 Q&A – Culadasa, Retreat in California #2, Part 10
YbZyAR4bKRw 1:02:10 Dharma Talk – Culadasa, Retreat in California #2, Part 7
U6nPD02iPf8 37:15 Closing – Culadasa, Retreat in California #2, Part 12
-mbGcDSEEcI 2:13:40 Dharma Talk - Culadasa, California Retreat #1, Part 15
FMDdB2RpckY 1:50:35 Dharma Talk - Culadasa, California Retreat #1, Part 17
VVXIYCC5Tg8 1:59:40 Dharma Talk - Culadasa, California Retreat #1, Part 13
CKSVmsDZjAg 1:53:35 Dharm Talk - Culadasa, California Retreat #1, Part 11
qNVfPuGbJcc 1:25:10 Dharma Talk – Culadasa, Retreat in California #2, Part 2
K6bhtKYvUc4 1:22:55 Q&A – Culadasa, Retreat in California #2, Part 1
k8zFTjBnNl8 1:13:55 Retreat Closing - Culadasa, California Retreat #1, Part 18
J_dFNqelBfI 1:04:10 Q&A – Culadasa, Retreat in California #2, Part 3
W4rdBy2rS0E 1:12:10 Q&A - Culadasa, California Retreat #1, Part 16
9izV_lZ2gF4 1:01:20 Q&A - Culadasa, California Retreat #1, Part 12
-eWefpzBzqQ 59:45 Q&A - Culadasa, California Retreat #1, Part 14
-9bu9P6OjIo 2:01:45 Dharma Talk - Culadasa, California Retreat #1, Part 9
wQkmlFKLONM 2:22:10 Evening Opening - Culadasa, California Retreat #1, Part 1
ZIVpqZ12n5s 1:15:55 Dharma Talk - Culadasa, California Retreat #1, Part 7
wE7ONOW73zE 1:01:00 Q&A - Culadasa, California Retreat #1, Part 10
b8zAJ3JCc_k 1:14:35 Dharma Talk - Culadasa, California Retreat #1, Part 5
eptT3fEFeWM 1:01:55 Q&A - Culadasa, California Retreat #1, Part 8
CpVvyfvHs4I 1:01:55 Q&A - Culadasa, California Retreat #1, Part 6
JexBXhxlXnU 1:04:25 Q&A - Culadasa, California Retreat #1, Part 4
Ep2XB4eZVDQ 1:08:35 Dharma Talk - Culadasa, California Retreat #1, Part 3
ev2a4H1ZO88 59:50 Q&A - Culadasa, California Retreat #1, Part 2
iS_hjBoApQY 1:12:15 Uposatha Day #1 - Culadasa

# Culadasa

edd2fS8BRdM 1:48:18 Culadasa May 2021 Patreon Q&A No1
fmn_lz7tGFc 1:29:09 Culadasa April 2021 Patreon Q&A No2
8Uc_gewR1gY 1:27:55 Culadasa April 2021 Patreon Q&A No1
-hKGfbBuemA 1:15:01 Culadasa March 2021 Patreon Q&A No2
qppnBfQ_KEI 1:22:26 Culadasa February 2021 Patreon Q&A No2
1nPhm73Aaxw 1:34:44 Culadasa February 2021 Patreon Q&A No1
qIuZg6jBNsM 1:25:03 Culadasa January 2021 Patreon Q&A No2
ZbmFWHoT0YE 1:21:16 Culadasa January 2021 Patreon Q&A No1
d4x3_ffTPC0 1:42:07 Culadasa December 2020 Patreon Q&A No1
z2aOw9Uhc-w 2:01:19 Culadasa November 2020 Patreon Q&A No3
9KYmlShAz_g 1:26:29 Culadasa November 2020 Patreon Q&A N°2 Recording
K0KKBU46hNM 1:33:03 Culadasa November 2020 Patreon Q&A N°1 - Sunday the 1st
rXySJwIZMP8 1:32:17 Culadasa October 2020 Patreon Q&A N°2 Recording
JK0q0tgsw2U 1:37:12 Culadasa October 2020 Patreon Q&A N°1 Recording
GWThVC6FEzA 1:46:16 Culadasa September 2020 Patreon Q&A N°2 Recording
81mCT4D6w1I 1:39:36 Culadasa September 2020 Patreon Q&A N°1 Recording
BJzM7GH9-nE 1:22:54 Culadasa August 2020 Patreon Q&A N°2 Recording
kwyGPfavfFY 1:44:59 Culadasa August 2020 Patreon Q&A N°1 Recording
YU_gUvXkkVY 1:43:06 Culadasa July 2020 Patreon Q&A N°2 Recording
nlB-Dk8MkVE 1:41:08 Culadasa July 2020 Patreon Q&A N°1 Recording
a8XJrNx7iN0 1:42:38 Culadasa June 2020 Patreon Q&A N°2 Recording
1-bzZgZd-sg 1:45:21 Culadasa June 2020 Patreon Q&A N°1 Recording
BYtQAyNyA8E 1:57:23 Culadasa May 2020 Patreon Q&A Recording N°2
eL36yVnWcb8 2:02:09 Culadasa May 2020 Patreon Q&A Recording N°1
omNF2wQYVxs 1:53:06 Culadasa April 2020 Patreon Q&A Recording
FnQVRtDu0kQ 1:46:48 Culadasa February 2020 Patreon Q&A Recording Nº 2 - Sunday
IamWcgYWKcw 1:30:15 Culadasa February 2020 Patreon Q&A Nº 1 - Saturday
BAWrOls6I8U 0:54 New Channel 4 My Journey
AdiW7_HcjiE 1:13:05 My Journey: Episode 6 - The Ups and Downs of Practice (and Life!) - RE-UPLOAD WITH BETTER SOUND
BR7D92whYXA 1:09:49 My Journey: Episode 5 - Unifying life around the Dharma (re-upload)
TrK3NBylnVA 1:23:23 My Journey: Episode 4 - Stranger in a Strange Land
E48ByR0Xt6U 1:10:46 My Journey: Episode 3 - Experiences don't mean sh...
Yg6l-DsFEz8 1:32:25 Culadasa March 2021 Patreon Q&A No1
OAfkxskGREo 1:07:21 My Journey: Episode 2 - A Series of Miracles
kn050yBN37U 59:17 My Journey: Episode 1 - The path of the lay practitioner, commitment, and the early years
Uf_su1wDk94 8:57 Introduction to "My Journey" discussion series
UjBXtI1Q2as 1:04:56 Culadasa discusses meditation and the "Dark Night": What it is, what it isn't, and how to avoid it
6nxZFnYCjbc 1:16:17 Nihilism vs Eternalism; Meaning in life; Is Awakening worth it? How long does it take?
lVvii04Sa3I 1:14:39 Culadasa December 2020 Patreon Q&A No2
aJ16ifG-udI 1:23:30 Culadasa January 2020 Patreon Q&A N° 2 (Monday)
c7GSUFa_lF4 1:22:12 Culadasa January 2020 Patreon Q&A Nº 1 - Sunday
eERQSG0eMFY 1:17:41 Culadasa December 2019 Patreon Q&A Video - Monday the 16th
_c94GntI6qM 1:31:22 Culadasa December 2019 Patreon Q&A Video - Sunday the 15th
Wmg-SOl9Sk4 1:28:38 Culadasa November 2019 Patreon Q&A Video - Friday the 29th
-pqnkm1tQ0E 1:42:39 Culadasa November 2019 Patreon Q&A - Monday
YfRp9cMPSNk 1:33:47 Culadasa November 2019 Patreon Q&A - Sunday
X7brJ8qrLBo 1:35:54 Culadasa July 2019 Patreon Q&A
MapEQWUQakY 1:34:42 Culadasa June 2019 Patreon Q&A
kGgpbE_etV8 1:32:49 20190517 Culadasa Patreon Q&A
mW3_WGR2Llo 1:13:02 Culadasa March 2019 Patreon Q&A Catchup
Dp3l_XnTd20 1:25:44 Culadasa April 2019 Patreon Q&A
7UdHOJqB03o 1:54:58 March 2019 Culadasa Patreon Q&A
eKMKZGZy6sc 1:29:33 February 2019 Culadasa Patreon Q&A
zRa9I0ZkdKM 1:24:01 February 2019 Culadasa Patreon Q&A catch-up
ewiA5sh-otw 1:28:44 Culadasa January 2019 Patreon Q&A
By0s1KVLYBw 1:33:21 Culadasa December 2018 Patreon Q&A
urCb5Ryp8SU 1:42:43 Culadasa November 2018 Patreon Q&A
_m3ou_CA1Wk 1:16:31 November 23, 2018 Culadasa Q&A Catch Up
DO4vExydTKA 1:30:28 October 29, 2018 Culadasa Patreon Q&A
aM0o-BkrwkY 1:48:46 September 2018 Patreon Q&A
EhtU5ei6YaM 1:30:00 20180816 Patreon Meetup Video
mz0MlFOwaek 1:49:44 July 25, 2018 Culadasa Patreon Q&A
rqpZrRRC1sU 1:24:06 Culadasa June 2018 Patreon Q&A
pYZ7kiIbLWs 1:32:29 Culadasa May 2018 Patreon Q&A
0nC9ZUx-Xs4 1:48:10 Culadasa April 2018 Patreon Q&A
3ZM2Hq-wiwU 2:00:47 Culadasa April 2018 Patreon Q&A Catch-Up
YD02MC1RaUs 1:42:10 Culadasa February 2018 Patreon Q&A
e1kss-E0IKU 1:22:37 Culadasa October 2017 Patreon Q&A
9GCa0epZVs8 1:01:04 Culadasa March 2018 Patreon Q&A
RarJIUBrysw 1:31:37 Culadasa January 2018 Patreon Q&A
uuBr-5G0zoE 1:59:49 Culadasa December 2017 Patreon Q&A
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

dpgVOHFhI6M 10:47 LEGO Horizon Forbidden West Tallneck Lighting Kit Build!
sMV99wKhcLg 8:29 Adam Savage Inspects a Prototype Machined Brass Pen!
dYaS2MeXQk0 9:15 Adam Savage's Favorite Tools: Cordless Heat Gun!
NM9Hxpk_tPo 18:32 Adam Savage's One Day Builds: Annular Cutter Storage!
fSIC_xODA_o 10:22 Star Wars Vintage Action Figure Guides!
aZYOugt3Bmw 15:24 Inside Wētā Workshop's Animatronics Lab!
CERnsE9nlfQ 17:21 Making a Custom Figure Display Case with LED Spotlights!
t3dfhHEj0Ow 20:38 How Wētā Workshop Creates "Bigature" Landscapes Out of Foam!
Zi4Zsu5y-mw 15:02 Show and Tell: 2001 A Space Odyssey 1/6 Scale Spacesuit!
1GCy0oOSPYo 11:02 What Adam Regrets About His Tattoo
rbZ33EWIZt0 16:05 How to Make Laser-Cut Wood Kits Look Handcrafted!
SGUtT2Lo944 1:16:13 Adam Savage's One Day Builds: AT-AT Walker Garage Kit!
Tr5JBIiXI88 17:52 World-Building a "Bigature" for Wētā Workshop Unleashed!
uK9XO_Qmt9E 18:47 Adam Savage Lockpicks Open This Tachograph!
hD94rKE0aAQ 14:12 Let's Build: Transformers ThreeZero DLX Jetpower Optimus Prime!
l9jVjAUiraw 19:08 Adam Savage Behind the Scenes at Wētā Workshop Unleashed!
FFt_6ANv1FA 55:54 Adam Savage's Live Builds: KiwiCo Astronaut Starter Kit!
Cx3z5Xv6J5o 1:26:22 Adam Savage Upgrades His R2-D2 Astromech Droid Build!
U07mw3eQurw 33:56 How To Easily Apply Gold Leaf To Your Artwork!
y0kxoQi4m5Q 32:26 Adam Savage Restores a Leather Briefcase!
xw8DCnuFwkE 36:27 How to Make Vintage Hand-Painted Signs with a Laser Cutter!
JjuXjqy3AFA 9:13 Adam Savage's 'Man with No Name' Holster Replica!
ApZy-PSeytM 14:55 LEGO Minifigure-Scale Airbus A380 Airplane! (40,000+ Bricks!)
n564Cw0lHLk 19:57 Adam Savage's Curta Calculator Gets CT Scanned!
rioVXjVCSYI 6:15 Awesome LEGO Chinatown Themed Cityscape!
RfNIlmKXOWg 32:40 Adam Savage's One Day Builds: Custom Poker Chip Carrier!
eC2kqv-yKHk 9:28 Massive LEGO Eiffel Tower! (25,000+ Pieces)
uJuH_b-vSiQ 40:29 Bandai Cup Noodle Model Kit?!? Let's Build It!
onZDAKJq6z4 7:52 Adam Savage's Aluminum Foil Ball Cut In Half! (Ft. Waterjet Channel)
iA5ZMHQzhr4 10:01 Adam Savage's Collection of Narnia Swords!
DPTu47FBkpg 46:04 Adam Savage's One Day Builds: Chinatown Stunt Knife (Corridor Crew FX Challenge!)
dXbd6XC7WyA 3:15 Adam Savage Inspects the 'Passengers' Spacesuit
6Imz_hZf1Qg 11:18 Star Trek Filming Miniature Model and Hand Props!
YrfIMtjYIWQ 9:18 Original Star Trek Uniforms and Borg Costume!
E9nBwursJpM 11:14 Adam Savage Inspects Original Aliens Colonial Marine Props!
l3EsiXhNGTM 8:28 Original Animatronic Gizmo Puppet From Gremlins!
bJp3B3jZkhE 36:16 Adam Savage's One Day Builds: Aliens Motion Tracker Prop!
0dQyqMDJfuo 7:13 1,000 Pound Monster Clay Creature Sculpture!
Ha8wTXm0oHk 8:58 Elite Creature Collectibles' Guardian Alien Design!
EvxRQ_r_cfw 14:54 Adam Savage Surprised By Indiana Jones Prop Details!
RM7x5lr_eCo 7:48 X-Plus Classic Sci-Fi Movie Model Kits!
kdhp1wxvY1M 8:07 Raf Grassetti's Incredible Character Art and 3D Prints!
CTtNXOQ0Eiw 6:58 The Original Terminator T-800 Metal Endoskeleton Arm Prop!
rr7j7ie-Y9Y 7:47 Silicone Creature Masks at Monsterpalooza 2022!
5Jj8gZW_BkM 8:51 Batman's Original Working Grapple Gun Prop!
Arm0Mvx45Us 12:28 Adam Savage's One Day Builds: Adding Casters to Costume Cases!
vwJo-ik39eE 9:27 Concept Sculptor Simon Lee's Monsterpalooza Showpiece!
k4Ps9-1naUk 10:35 The Sci-Fi Robot Helmets of BurgerStrings!
YIW8KHn_mBo 10:04 The Stop-Motion Animated Puppets of Gremlins 2!
TjS2GE_MuC8 11:40 Adam Savage Meets Original Kill Bill Bride Katana Prop!
52nftjuvCzo 9:43 HasLab's Reva Force FX Elite Lightsaber Prototype!
aey9t9rOFGU 11:19 Star Wars Archive Collection Character Maquettes!
A4v97zfHzcU 28:44 Adam Savage's One Day Builds: Aliens Welding Torch!
1qtdH5yFt04 8:44 Life-Size Star Wars Imperial Probe Droid Robot Build!
Zqz05dYFYu8 13:17 Original X-Wing Model from Star Wars: Episode IV!
rOWF3LPTqD0 17:48 Elegoo Saturn 2 8K Resin 3D Printer: First Test Prints!
hAp4W18qX14 17:08 Adam Savage Stunned By This AT-AT Walker Garage Kit!
SSvcKIa1Uws 1:02:37 Adam Savage's One Day Builds: Moby Dick Diorama Maquette!
heVfGT0f22k 27:45 Adam Savage's Guide to Sanding Tools!
SBvohm4TaN0 32:48 The Amazing Miniature Sign Builds of Route 9 Signs!
5kYtfwKXzSQ 3:55 Adam Savage Tests His Temporary Ruler Tattoo!
rzJG_TapQZI 13:55 LEGO Star Wars Trench Run Automata + Lighting Build!
2MlWsXDsKc8 12:07 Adam Savage Unpacks Fan Gifts from Planet Comicon!
7KN9wF3DlaU 27:51 Tested: SLR Magic Cine Lenses for Micro Four Thirds Cameras!
K0FcUntHyKw 58:02 Adam Savage's One Day Builds: Razor Crest Mods, Part 1!
2u1z1bApFo4 14:40 How to Use Threaded Inserts for Wood, Metal, and 3D Prints!
b94cKIw435E 9:09 Show and Tell: Adam Savage's LEGO Minifigure Collection (Including Muppets!)
YfoHVH6wwRo 9:54 Let's Build: Japanese Steamed Bun Shop Kit!
7DjbNwhhDdE 9:21 Why Adam Savage ALWAYS Uses Center Drills
GtLCJ2b6XEc 21:46 Adam Savage's One Day Builds: Mandalorian Vibroblade Kit!
ev2MGnrxHIo 18:02 Adam Savage's Chronicles of Narnia Telmarine Armor!
jC0Uxc5RKGg 8:32 Jack White Made Me This Surprise Gift!
FUqD4FMtI-8 23:23 The Wandering Earth 1/6 Spacesuit Lighting Mod!
WkLf69Cy-q8 15:19 A Tale of Two Syd Mead Blade Runner Blasters
m9lFcduaZPU 6:43 Adam Savage's Rant on Laser Printers
iAMPkNggLJ0 16:35 The Origin of Ghostbusters' Belt Gizmo Prop!
5RL7EYSbc_g 55:52 Adam Savage's One Day Builds: The Matrix EMP Switch! Blitzway's 1/4 Scale Apollo 11 Astronaut!
NMGtR9OLAao 19:17 LEGO Back to the Future DeLorean + LED Lighting Kit Build!
elIcfzl3-e0 28:52 The Color Theory of Star Trek Costumes in 1/6 Scale
d5MTFw9gUc8 8:21 Ghostbusters Prop Replica: Venkman's ESP Test Machine!
wmjZL8nm3MM 46:58 Adam Savage's One Day Builds: Inglourious Basterds Knife Replica!
YY1_X_-cTpM 21:34 Adam Savage Repairs His 20-Year-Old Shop Sign!
98C9zxR4xTk 25:57 How to Make Diorama Bushes with Old Paint Brushes!
zR4X775Y-9E 34:51 Adam Savage Reacts To His First One Day Build!
DxEn4Zj7tow 11:48 Adam Savage's Spring Collection!
J6oPJmGsioA 9:38 Show and Tell: Adam Savage's Recent Road Trip Acquisitions! 4K DLP Projector vs OLED TV!
Vhumui9T9og 5:34 Adam Savage's New Precision Dial Calipers!
S5o9NORnF1o 57:32 Adam Savage's One Day Builds: Papier-Mâché Mask!
aUYeR2q2Axo 9:06 [ASMR] 1/220 Scale Papercraft Model Kit Build
ammrI9a1GoU 8:47 Quick Builds: 1/220 Scale Papercraft Model Kit!
0M93BCHCjAs 5:44 Adam Savage's Favorite Tools: Solvent Dispensing Can!
o8_8T3IoouU 14:25 Star Trek: The Motion Picture's 1/6 Scale Figures!
GBr13DOC2j8 22:37 The Making of Modern Star Trek Figures
FuMf6-9ZsJo 40:29 Adam Savage's One Day Builds: Vintage Bicycle Restoration!
cfmqdNTN8rk 22:45 How to Make Fake Concrete Sidewalks for Dioramas!
ruSOwI2xAYI 28:29 Adam Savage's Apocalypse Now Kurtz Dossier Replica Project!
rL7k8kjIdow 1:03:48 Adam Savage's One Day Builds: James Bond's Spectre Cane!
veSJ4K5rwWU 14:30 LED Lighting for Miniatures and Dioramas!
NMEkK9cdEqg 30:44 Adam Savage's One Day Builds: RoboCop 2's Cain Stop-Motion Puppet!
0lAHy9cW-ps 13:20 How to Make Diorama Landscapes with Foil and Plaster!
9cE4c61Ya0g 13:03 Adam Savage's Dirk Gently Steampunk Crossbow Hero Prop!
jOXidWIB-gY 20:13 Adam Savage's One Day Builds: Drill Press Modifications!
vCzSaO4yajI 21:37 Cyberpunk 2077 Diorama Display Build!
BfQb7giwRz0 11:59 Behind The Scenes of Adam Savage's Dart Blaster Video Shoot!
4GcuGnjv2Aw 29:01 Adam Savage's One Day Builds: Special Effects Syringe!
uHukgTMBzKk 16:39 How To Turn Your Sketches Into Digital Drawings!
ioLtieMWRT8 5:39 Adam Savage Demos Hydraulics with Cheap Plastic Syringes
7og5Ps7Cx0Q 34:19 Reorganizing Adam Savage's Workshop Materials Stock!
H9eqjVIH6OE 53:16 Adam Savage's Live Builds: KiwiCo Articulated Desk Lamp!
9LVFVTMleio 46:32 Adam Savage’s One Day Builds: Head-Mounted Dart Blaster!
UtQTIZSf8Mo 38:38 Guide to Prototyping in Cardboard and Foam Core!
nCoeD7okrU8 8:12 Leonardo Da Vinci's Codex Leicester Replica!
8PN8MPw-NE0 23:13 Adam Savage's One Day Repairs: UGG Boots Part Deux!
YIbb-Bck8wc 46:43 Adam Savage's One Day Builds: Blade Runner 2049 Helmet Parts!
LttWb771mjw 11:07 LEGO Airplane Dogfight Kinetic Diorama!
q_YZX1SgZ5Y 27:32 Adam Savage Takes the Aluminum Foil Ball Challenge!
bzJE9Rlb_3s 25:40 Adam Savage's One Day Repairs: Old Wood Hand Plane!
_cZJSHDMxTs 9:55 Show and Tell: Adam Savage's Custom Welding Cart!
uzF351VecZA 40:38 Adam Savage's One Day Builds: Painting The HasLab Razor Crest!
kRXcDIwq4XM 24:28 Adam Savage's Leonardo Da Vinci Notebooks Collection!
b581gVb34AQ 11:04 Portable Smoke Machine for Cosplay and Props!
xHS83PFsek4 24:20 Adam Savage's One Day Builds: Weathering the Blaster Vault!
PX0ra2GarkM 12:49 Adam Savage Explains What to Do When You Drop Gobs of Loose Hardware Valve's Handheld Gaming PC Tested!
jxDSEulomCg 43:06 Adam Savage's Sci-Fi Blaster Storage Vault!
Ub0efbg1caw 13:58 Adam Savage's Guide to Flush Cutters and Nippers!
R33QA--RdYc 9:37 Adam Savage's Favorite Screwdrivers Sent By Fans!
xMkJGIWrtVA 19:30 Adam Savage Restores An Old Desk Chair!
rQyFoKpDRAw 5:44 Why the Space Shuttle Discovery Delights Adam Savage SO MUCH
TRRRRJph9rE 14:58 Adam Savage's Vintage Cinematography Gear!
NYkF5EwaDBU 19:29 Adam Savage's One Day Builds: RoboCop 2's Cain Robot!
rgYby0IJSVs 26:37 Adam Savage Upgrades His Knife Sharpener!
bNHbyebM8n4 5:24 How Smithsonian Transports and Hangs Their Historic Aircraft
KAdg-ap-OtI 16:47 Why the National Air and Space Museum Is (Temporarily) Closing
wgB77v1GUEw 28:31 Adam Savage's One Day Repairs: Arriflex Camera Battery Pack
TJYK69F8ULk 45:07 Adam Savage's One Day Repairs: Arriflex 35mm Camera Motors!
BNyKb87iU5I 9:22 Practical Special Effects of Ghostbusters: Afterlife!
xXNg8Rlo2ak 34:38 Adam Savage Remembers His Mentor in Model Making
Sy_cxDhWJPk 6:37 Adam Savage Inspects Amelia Earhart's Record-Breaking Aircraft!
2ZWZjAOLeDI 10:51 Adam Savage Examines the Wright Brothers 1909 Military Flyer
hX5Qsrpj9Ao 31:26 Adam Savage's One Day Builds: Surface Plate Cover
QF4veKPSS1Y 13:09 Making An Acrylic LED Cross-Section Display!
V0kQDCVU_48 36:38 Adam Savage's One Day Builds: Mini Apple Box!
DgT4eSpAQVg 13:48 Adam Savage Visits Ghostbusters: Afterlife's Art Department!
zMfMAePNpB4 5:17 Adam Savage Reflects on the Small Spaces Astronauts Must Endure
-WPg7xTl6ZE 11:53 Adam Savage Checks Out Smithsonian's Mannequins!
IeFIhKaJEFo 31:34 Adam Savage's One Day Builds: Dune Sand Compactor Replica!
elGK9St0kJ8 5:46 Adam Savage's Quick Tips: How to Fill Nicks in Wood
H3o2XkVjxzc 23:10 Amazing Laser-Cut Star Wars Shadowbox!
uEcx6yb5yXQ 41:33 Adam Savage's One Day Builds: Magnetic Lathe Chuck!
1bmB9Ms-X10 19:56 The Production Design of Ghostbusters: Afterlife!
93D-JZ_QtUI 14:11 Adam Savage Examines a WWI Aircraft!
kuWZyFCHRIs 18:42 Adam Savage's One Day Repairs: Cleaning Micrometer Gauges
wAOtz5uKDSk 26:30 Wonder Woman Golden Armor Diorama Build!
ykr2IMSYDMc 30:43 Adam Savage's One Day Builds: Ping Pong Ball Launcher!
ZoeL2lwLpXs 9:10 Creating Ghostbusters: Afterlife's On Location Set!
NiZPuE0wBE8 40:58 Adam Savage's Guide to Model Spaceship Paneling!
n7LFYB8B-IE 11:26 Adam Savage Tours National Air and Space's Conservation Lab!
jQSTJSniXKM 32:25 Adam Savage's One Day Builds: Fixing the Mill's Motor Fan
3qOJakmE7Pk 33:52 Adam Savage's One Day Builds: Mythbusters Blueprint Display with Kyle Hill!
pzaXdNp38hE 18:14 Adam Savage Visits Ghostbusters: Afterlife's Costume Department!
JPpPE0uf74E 8:20 Adam Savage's Favorite Screwdriver Design!
5glDh3xNfEg 8:08 Adam Savage Checks Out the Apollo 11 Command Module!
gaJgfS_2LZ4 32:36 Adam Savage's One Day Builds: Gauge Block Storage Rack!
FOwv35You7k 14:09 Adorable Mini C-Stand + D-I-Y LED Ring Light!
u5CDKWnWpPs 9:46 How Ghostbusters: Afterlife Brought Back THAT Legacy Character [SPOILER WARNING!]
_2kmXLP_uXg 33:13 Adam Savage's One Day Builds: Machining Mystery Prop!
qE7dYhpI_bI 45:08 Adam Savage's Epiphany on the Science of Measurement!
6BecCJoMRng 4:48 Grant Imahara's Scratch-Built Hoverboard
0EfPI-MY2Y4 8:56 Tested: Atlas Orion Anamorphic Cinema Lenses!
2qqxZKWSXio 12:42 Adam Savage Cosplays as Doctor Strange!
m6VYpHdBG84 15:48 Adam Savage's One Day Builds: Weathering a Sword Blank!
vDsVwbWiVFI 8:28 Adam Savage's Quick Electronics Wiring Tips!
XGstRBM2UDs 15:40 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 10)
fuCRr4c21mY 15:37 The Making of Tested's Short Film "The Beacon"!
q4SHatvp_Jk 18:41 Makers Secret Santa: The Butt Keyboard From Hell!
7bhKD5t09cY 28:33 Adam Savage's Favorite Tools: Quick-Change Tool Holders!
e12PRNqwpHc 20:23 Behind The Scenes of Tested's Short Film "The Beacon"!
x5DqW3RKxNA 23:01 Adam Savage's Spacesuit Secrets!
UmEdray7a0E 14:45 Show and Tell: MythBusters Fart and Plane Boarding Props
yzy_8tT4TO0 24:35 Adam Savage's One Day Builds: Miniature Astronaut Display!
XYYvIRaEGR0 17:53 JoyToy 1/18 Scale Mecha Diorama Kit!
j7HiJWulFdo 20:22 Adam Savage in Alien's Nostromo Crew Uniform!
9TZ5yflpmq4 42:15 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles!
BIf7fuOIB1Q 21:17 Adam Savage's Guide to Staplers and Nail Guns!
jk8Fu6zHFzQ 10:06 Grant Imahara's BB-8 Replica!
l6ZRDCG1ZDA 13:38 Adam Savage's Favorite Books, Movies, and YouTube Channels of 2021!
Zkx6GR_x7wo 9:45 Adam Savage's One Day Repairs: Broken Pot Lid!
xScE3qxQ03I 19:45 Tested in 2021: Favorite Coffee Table Books!
9yzg3a91F5o 45:20 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 4)
jA8D_bL5Whg 28:46 Jen Schachter’s Snow Globe Diorama Kit!
2O92DT4x0tg 1:04:21 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 3)
ntpthBbzK70 26:48 Playing Chess in Quest 2 Mixed Reality — Awesome Unity Slices Demo!
HAirnq80dcQ 1:28:50 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 2)
XhBSibI2nuA 21:36 Adam Savage and Jason Reitman Talk Ghostbusters: Afterlife!
Uc2jXrxI1SU 32:14 Adam Savage Inspects Hasbro's Ghostbusters Proton Pack! Dune Crysknife Replica Prop!
TjdqmqPwhks 18:45 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 9)
yc8yHGvviY8 12:20 Camera Gear for Science Exploration and Expeditions
OshKZcTFEZY 32:21 Adam Savage's One Day Builds: Ghostbusters: Afterlife Hand Prop!
0FKxM-zNZBk 1:10:32 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 1)
sSH1jS9FMcQ 12:25 Adam Savage's Favorite Tools: Drill Powered Paint Can Mixer!
ovHk5PRE_Lo 3:11 Adam Savage's Personal Connection to the Viking Lander
Y44_IgT3K9w 23:21 How To Make Mini LED Tube Lights!
SswGAImAlls 4:28 The Beacon | A Tested Short Film
2Wjl_Y_iw7Y 10:13 Adam Savage Inspects Original Aliens Hand Prop!
69JSHw4ERuk 10:33 What's Inside The "National Treasure" Book of Secrets!
NvWEkWnnWBI 8:26 Rick Baker Mutant Mask from American Werewolf in London!
yjd7zBd2c98 9:01 Blade's Original Hero "Sword of the Daywalker"!
Dx2RLH_6nJc 13:13 ILM's "Batteries Not Included" Robot Puppet!
L5ZZq_VOHok 8:27 Original Gladiator Maximus Hero Movie Helmet!
mbAxW6LMnpA 10:41 Adam Savage Learns About Ghostbusters: Afterlife's Visual Effects!
dj3HqRtC-T8 7:59 Adam Savage Explains Möbius Strips and Klein Bottles!
zHxTO7oN7W8 53:58 Adam Savage's Live Builds: KiwiCo Tilt-And-Fold Desk Kit!
dB6kKNF-JWE 14:08 What's In Your Explorer Bag, Ariel Waldman?
gZcqcfH5IGA 6:26 Adam Savage's Ghostbusters Prop Department Gift!
bdzU4Bws_4k 31:19 How Google's Wing Drone Delivery Aircraft Works
HXzzXkJZiJU 4:00 Comparing U.S. vs. Soviet Spacesuits at Smithsonian Hasbro's Ghostbusters Neutrona Wand!
QL7bwm_FqlA 12:09 $15 Wireless LED Light Kit Tested—Does It Work?
NhjZAkDOOck 1:01:30 Designing and Prototyping Laser Cutter Projects - Q&A!Insane Display Detail!
n9kfjOioQU4 4:32 Adam Sees One of National Air and Space's Favorite Artifacts!
I093ix5wAEE 3:28 Adam Savage's Replica NASA Moon Mission Plaques!
BDdOBorpp5s 11:02 Adam Savage Inspects Ghostbusters: Afterlife's Hero Props!
_kyaFVwKNOs 7:51 Adam Savage Meets the Paladins of Cosplay
f24n1GKqyNc 12:58 Adam Savage Incognito as a Ghostbuster!
cS7mlM5yy1A 1:25:32 Myths Adam Regrets Tackling on MythBusters and Much, Much More
_a2uE8-i_tE 15:19 Amazing Princess Bubblegum and Marceline Cosplay!
6Uc-jDkPyjk 8:47 Grant Imahara's R2D2 Replica!
8uLzRDExhBk 7:14 Smithsonian Welcomes The Expanse
zhe8d9NgcsI 19:41 How To Use Flexible LED Filament Wire for Lighting Projects!
qfaWpsfSDd4 18:36 Haunted House Miniature Diorama Build!
dloSR3a57IA 43:24 Adam Savage's One Day Builds: Ghostbusters Proton Pack!
Uoh4Q-I03tQ 9:08 Grant Imahara's Battlebot Deadblow
UF1fxk-aIVI 5:29 Adam Savage Meets Alan Shepard's Mercury Suit!
s1JfjEqBG8o 9:00 The One Thing Adam Became Expert at During MythBusters
nfYBlBNreCY 12:07 Grant Imahara's Animatronic Grogu Replica
NxL4SLzAkao 1:27:29 Adam Savage's One Day Builds: Aliens Colonial Marines Armor!
lDSylp8r4EY 7:25 Adam Savage's Favorite Tools: Electric Cast-Cutting Saw!
i2crXD9HjSM 8:15 Working on a Fiction-Based Aircraft as a Smithsonian Museum Specialist
hsCSTO8SaQU 10:16 A Tour of Grant Imahara's Shop
iEaf3t3KUyg 27:25 Adam Savage's One Day Builds: Hasbro Mandalorian Helmet Repaint!
l0b960BZEAs 6:39 Adam Savage's Favorite Tools: Heat Gun and Iron!
W3XUKBUCLUU 6:07 Conserving the X-Wing at Smithsonian
eTtoN191-Wo 18:58 How to Add Smoke and Fog to Props, Miniatures, and Photography!
Jwk_-c6_jAw 5:42 The Mystery of This Original Rocketeer Stunt Pack
dG6rEzyWSyc 12:54 Adam Savage Tours Ghostbusters: Afterlife’s Farmhouse Set!
Rd1mTLESWMI 6:24 Adam Savage: How I Wear My Face Mask
CZojRDHNggI 6:11 Why There's an X-Wing in the Smithsonian
It8h2YJiyhY 9:08 How the Original MythBusters Series Would Be Different Today
Ew084i7Vmdc 10:02 How To Give LED Strip Lights Special Effects for $10
d9N5SJpHkfY 14:29 Making Miniature Papercraft Architecture!
9ythps074zk 9:08 Evil Dead 2's Cabin in the Woods Miniature Model!
3M0JPy9LNSg 18:01 Inside an Arriflex 16mm Film Camera!
VZyIWF1VftI 14:34 Adam Savage's Last Film Before MythBusters
ieR2wRkTZcQ 35:02 Savage Inside: Lenovo Legion 7i Shadowbox Display! (Intel® Gamer Days)
jJ6VUAzejmw 43:54 Adam Savage's Live Streams: Conventions, Tennis Elbow, 3D Printing and More
QKp6SHZHAo0 6:53 Star Trek: Discovery's Klingon Costumes and Armor
lg1YuthqB9g 8:13 Adam Savage Incognito as Iron Man!
VswBDMmMgsU 6:26 Adam Savage Drives Ghostbusters: Afterlife’s Ecto-1!
BFXspOEUY7g 7:33 On Jamie Drinking for Science
yhmY7csugzQ 12:42 Adam Savage and Fon Davis Reminisce About Galaxy Quest!
-59CTZkMI4M 5:24 How to Shoot a Zombie Volunteer in the Face Safely
xfmD1yYqP6k 24:55 Adam Savage's First Gundam Build—RX-78-2 Perfect Grade Unleashed!
VinT6N1yhBg 8:01 Adam Savage Inspects New Pages from Indiana Jones' Grail Diary!
RYZgz2vfGvk 4:54 MythBusters: Where Cameras Went to Die
tzrAM-pKErA 24:21 How Vintage 16mm Cameras Work!
HbiO-MDyMPY 4:43 MythBusters' Largest Weapon of War
QVZn7YaRMd8 20:45 How To Make a Custom Neon LED Sign!
n0IMjn7jJhY 7:59 The Mysterious Origins of Buster, the Crash Test Dummy
wwvGwxwBwCk 18:08 Tested Favorite Tools: Paper Crafting Cutters!
0STyxqVXaXI 11:47 Batman (1989) Original Batwing Restored!
_CaQ3xYIb0g 43:27 Adam Savage's Guide to Cosplay and Prop Electronics!
xeGWJLsIVbA 4:24 No Bibles Were Harmed ...
bVCFCdiThxU 4:46 One Example of Adam and Jamie's Competing Methodologies
SdXBi_Hgies 30:41 Infinity Mirror Mysterio Display Case Build!
xDthNAUMXYs 15:29 How Star Trek: Discovery's Costumes Are Made!
AQ6UpH8eUKo 6:28 Adam Savage's Mini Excalibur Sword!
HLzSECYoIgM 3:24 Creepiest MythBusters Prop Ever?
zisLHqEr4Fw 7:54 More Weird and Wonderful Vintage Analog Clocks!
L6ErHPYuoXI 3:25 A Physical Example of Jamie's Brilliance
PgiyoweaPb4 18:00 How Lightfield Displays Will Make Holograms Possible
VxvLpFUMQkU 11:10 Behind MythBusters' Early Blueprints
2TdeBrw2g_M 2:21 Announcing Adam Savage Behind the Scenes of Ghostbusters: Afterlife!
snNL5GgOq_c 6:52 Why "Golf Ball Car" Is Pivotal in MythBusters' History
KziugYW6uLk 11:20 MythBusters' Rocket Car Rockets!
Cs5YHMgw2tY 29:33 Adventures in CNC: Making a Plywood Room Divider!
u3QGyagPUSY 9:02 The Return of MythBusters' ROBOSHARK (from Shark Week)!
Iyl2ZuHRNT0 8:30 Weird and Wonderful Vintage Analog Clocks!
OLAwyHF8cwg 8:16 How We Manage All Our Video Footage + Edit Off a NAS!
rSOiusnpddc 9:57 Iron Man, Stranger Things, and Transformers at Sideshow Con 2021!
V60_AA7Cwgk 10:52 Hot Toys Prototype Figures at Sideshow Con 2021!
zginChewoKU 31:35 Adam Savage's One Day Builds: 2001 Spacesuit Helmet Repair!
vetc7rEYnjI 25:03 Adam Savage's Guide to Drill Bits!
bg-xRlTIXnw 14:19 Star Wars Sculpts and Figures at Sideshow Con 2021!
6pIZI-TyyGM 9:04 Adam Savage's Lifecasts Collection!
1g5XhaIp-i4 11:22 3D Printing Hagglethorn Hollow Tabletop Miniatures!
xOPO2DskYhE 10:51 Adam Savage and Fon Davis Discuss Working on Matrix
-imr0Cy7NQY 39:42 Adam Savage's One Day Build: Acrylic Display Box!
HtkdNq-hiS0 12:38 Adam Savage's One Day Beard!
4Vliuu9KZ4I 23:04 Making a Custom Lightsaber Display!
ifIySD3apIU 11:38 Adam Savage Reunites With Fon Davis' Mouser Mecha-Catbot from Battlebots!
0WhqePxTYpo 23:54 Adam Savage Makes a Papercraft Animal Mask!
s8idSAuc7uI 18:02 How to Make Alcohol Inks from Old Markers!
2A9iGfUb4kQ 23:55 Adam Savage Inspects a $500 Suit of Armor!
S6J6t6bv3aE 16:29 Show and Tell: Adam Savage's 2001: A Space Odyssey Space Suit!
kcjCJkXw-NM 12:51 Adam Savage and Fon Davis Talk About Working on Star Wars!
xePxGWc_mH0 34:00 Adam Savage's One Day Build: Fake Beard Wiring!
D25Cnn74o1A 13:03 Tested Favorite Tools: Hot Wire Foam Carving Set!
HjZvC0sEq80 6:24 Mondoshawan Ship Model from The Fifth Element!
67nQzkYXlXg 4:05 Original Ghostbusters Terror Dog Puppet!
oClWPnCphfA 22:58 3D Printing an Anatomical Cross-Section Sculpture!
1dbUewjfipE 6:09 Adam Savage Meets Original Statler and Waldorf Muppets!
ijosoNfEBP4 37:21 Adam Savage's One Day Builds: Aliens Colonial Marines Shoulder Lamp!
0gu14BC-vEY 8:07 The FX History of the Dinosaur Input Device!
AhO8rcGb-GE 9:19 Adam Savage Meets Original Star Wars Props!
duIiGF7inro 8:37 Adam Savage and the Original Indiana Jones Fedora!
CAGd_7djUF8 21:04 How to Make Custom LED Lights for IKEA Display Cabinets!
iiZ5rh3Uo1o 1:14:52 Adam Savage's One Day Builds: Excalibur Henchmen Armor!
IiGPSn3fklI 15:03 Adam Savage's Guide to Workshop Hammers!
cnFynrqs7Fw 14:36 Kayte's Miniature Models from 'Real Steel'!
dlCiIAS6fsA 26:51 Adam Savage's One Day Builds: MacReady's Hat from The Thing!
3hXfsHjDAhk 18:28 How Holographic Doom Works on a Lightfield Display!
NNNcGCZHvxE 53:53 Adam Savage's One Day Builds: Foamcore Architectural Model!
RWxCvMzvxlQ 15:25 Adam Savage's Favorite Tools: Great Budget Vacuum Former!
j8_EoUXvTJk 21:41 Adam Savage's New Milling Machine!
ajHmyFX9zvk 24:47 Adam Savage's One Day Builds: Workbench Vise Upgrade!
OUHShx43JVU 1:01:48 Adam Savage's One Day Builds: Miniature Piano!
ieoSisOIWE4 8:56 Adam Savage's Beskar Spear Prop Replica!
WAxxrBF5V3M 1:16:33 Adam Savage's One Day Builds: Famous Gemstones Collection!
7D8sXR0ozeE 1:24:21 Adam Savage's One Day Builds: Animatronic Bear Head!
ttexR6ZgBzs 18:01 Adam Savage's Guide to Workshop Scissors
0wxpcfMB-qc 29:34 How To Professionally Frame Your Artwork at Home!
uWdYs5R7mJk 21:24 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 8)
0znjWy-Tr4Q 55:55 Adam Savage's One Day Builds: OneWheel Electric Skateboard Mods!
mXR_0Yq25W4 14:21 3D Printing a Miniature Cityscape Diorama!
TjvX8GiYA5w 44:30 Adam Savage's One Day Builds: Monster Puppet Kit!
_61DYROQNNU 13:37 Adam Savage's Favorite Tools: Fabric Steamer (and a New Hat!)
5-gurx0S1ks 21:56 Behind the Scenes: Editing Spatial Audio in Virtual Reality!
QWBFHoJrosY 35:49 Adam Savage's One Day Builds: Star Wars Acrylic Paints Rack!
l4Uew4czJ1o 41:51 Adam Savage's One Day Builds: Queen Elizabeth's Buzzer Bell!
f2ajmCIVe9U 7:20 Tested Favorite Tools: Soldering Fume Extractor!
kZSz0weq7GU 4:47 Adam Savage Geeks Out Over EVA Foam Scale Maille!
cLrqogSndWs 1:09:07 Adam Savage's One Day Builds: Epoxy Headcast Helmet Skullcap!
NsFBHqbNKvA 16:34 The Animatronic Robot Designs of Mark Setrakian!
DcNPYycz4nU 57:13 Adam Savage's One Day Builds: Mandalorian Blaster Paint and Weathering!
lloesAf3CV8 8:53 Medieval Alleyway Book Nook Diorama!
BXWTNRHkDmQ 8:55 Adam Savage Rancor Maquette Statue Reveal!
8DkBLbQ1WE4 19:13 Adam Savage Reorganizes His Workshop's Material Storage!
4hhOA5TFvt8 9:09 How to Make a Fake Frosty Beer Bottle!
Cj0uLKibPW4 1:37:37 Adam Savage's One Day Builds: Mandalorian Amban Blaster Replica!
Hv14-nlQJ2s 4:17 Inside Adam Savage's Cave: The Return of Moly Dee!
AFypEVQr7QI 9:27 How the Mythbusters Flatus Containment Device Works!
4ufQUvxpuAo 36:53 Adam Savage's One Day Builds: Car Engine Model Kit!
gQi9THORs1A 24:50 3D-Printing Lord of the Print's Godzilla Model!
r0aae4df3Aw 37:18 Adam Savage's One Day Builds: LEGO Blade Runner Spinner Model!
iHAkCYwxUb0 9:52 Adam Savage's Favorite Tools: Plastic Forming Strip Heater!
sdoO1kZOQS4 24:58 Adam Savage's Indiana Jones Grail Diary Prop Replica!
W1DrW_f_vNo 32:11 Adam Savage's One Day Builds: Hyperdodecahedron Model Kit!
teteroQeKGY 4:28 Adam Savage Tries on Puppet Mouth Masks!
drLGYpPbrZg 53:36 Adam Savage's One Day Builds: Painting Iron Man Armor, Part 2!
agH0c5v18WU 8:24 Adam Savage's Vintage Automatic Testing Micrometer
AwXZPxKPnX0 7:40 How Adam Savage Stores His Vintage Aerospace Sunglasses
2tQf7cruUMA 37:37 Adam Savage's One Day Builds: Galloping Horse Animation Machine!
17JxWEZPN4o 5:27 Adam Savage's Replica Creature Head from The Thing!
CtGMBOqs0us 1:06:18 Adam Savage's One Day Builds: Painting Iron Man Armor!
F5YmVHB3P5I 12:20 Adam Savage's Favorite Tools: Japanese Hand Saws!
HqUlPoxrzjM 40:02 Adam Savage's One Day Builds: Hellboy Samaritan Replica Finale!
ND4Y0gx4aTI 1:05:27 Adam Savage's One Day Builds: Iron Man Armor Boots!
xf3ma1XFt9Y 8:04 Adam Savage's Favorite Tools: Safe Rust Remover!
ye0Fws__fVQ 4:55 Adam Savage's Van Gogh Painting Replica!
zWaQNVGhuyU 30:56 Adam Savage's One Day Builds: 3D Print UV Curing Oven!
mCzHH3fE5V0 16:30 Tested: ResinLapse 3D Printing on Elegoo Saturn!
eJUbdNhdhkk 1:46:32 Adam Savage's One Day Builds: Remaking The Crown!
JFJYbIawnCI 12:10 Adam Savage's Favorite Tools: Portable Benchtop Parts Washer!
lcJN-arQ92Y 8:48 Adam Savage's Rare Taylor Pressure Helmet!
I5dH96JunrQ 55:55 Adam Savage's One Day Builds: Resin 3D Printer Station!
9pTeyhp1ETE 21:34 Tested's New CNC Machine: Assembling the X-Carve Pro!
jmYBQSqXnQ4 47:57 Adam Savage's One Day Builds: Shop Dust Collection System!
VZqf5rOJNCE 24:43 Adam Savage's Favorite Tools: Superglue and Glue Accelerators!
AhEStPPzkvk 9:40 Adam Savage's First Mechanical Hand Build!
88otijaNOg4 13:41 Adam Savage's Favorite Books on Pool Hustlers, Card Sharps, and Con Artists!
ptIF5Mn334Y 28:30 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 7)
a23XlIqhffI 17:33 Iron Giant 1/50 Scale Diorama Build!
of9qY62tWKo 40:53 Adam Savage's One Day Builds: Tabletop Maker's Vise!
hd-35yJAYBo 19:36 Adam Savage's Favorite Tools: Woodworking Chisel Sharpening!
8e_cMCGpR-k 24:08 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 6)
ATfL9JQ--JE 1:03:05 Adam Savage's One Day Builds: Hellboy Samaritan Prop Barrel Rifling!
M-d16zmseGw 10:36 Adam Savage's Favorite Tools: Reciprocating Air Saw!
5NH1-3NBcOk 1:28:31 Adam Savage's One Day Builds: Micrometer Gauge Box Set!
yc0GaUfUi-4 17:01 Star Wars Japanese Dojo Diorama Build!
Z3-Fx-flm6M 40:56 Adam Savage Tests Boston Dynamics Spot's New Robot Arm!
36J86bTnYnA 8:28 Stormtrooper Exploded-View Model Kit Build!
T8lMmVU30W8 10:04 Adam Savage: Blade Runner's VFX and How 2049 Holds Up
jfUL73pRYq4 1:02:53 Adam Savage's One Day Builds: Studio Ghibli Diorama!
5Cu9Y2vPMgA 5:53 Adam Savage's Favorite Tools: C-Thru Triangle Ruler!
uBWIFzgXAuQ 17:40 Adam Savage's King George Costume!
UG5DapCtqc0 25:25 Adam Savage in Real Time: God of War Leviathan Axe Blade
MiFLyAPyP2U 30:27 Adam Savage Assembles a Mandalorian Blaster Kit!
lUwMEjh2-78 1:12:07 Adam Savage's One Day Builds: St. Edward's Crown
e_IXwHmKU2g 14:50 Adam Savage Tests the AIR Active Filtration Helmet!
7FYb1gwi-30 15:10 Weta Workshop's 3D-Printed Giant Eyeballs!
9MLQEC2Hv28 24:51 Adam Savage's One Day Builds: Wire Storage Solution!
tkR3bQ8Ak-8 30:37 Adam Savage's Live Builds: Real-Time Box Build!
r93bWMzGo60 1:14:57 Adam Savage's One Day Builds: Custom End Tables!
t9ATZdlUKww 25:10 Adam Savage's Favorite Tools: Haimer 3D Edge Finder!
perVeCFBrdE 12:39 Adam Savage's Inigo Montoya Princess Bride Sword!
Ic2S9ySxO0I 11:26 Adam Savage's One Day Builds: Lathe Collet Storage!
Mg5gzXzY92k 14:12 Tested: Edge-Lit LED Panel and Figure Display Lights
apeZO6C0ZeA 51:52 Adam Savage's One Day Builds: God of War's Leviathan Axe!
gN5QqFKHGo0 7:58 Adam Savage's Favorite Tools: Moly Dee Tapping Fluid
wr7U82Q3r-E 14:02 Adam Savage's Nagra Spy Recorder Collection!
im1G0nIzEYE 4:37 Adam Savage's Bronze Beskar Ingot Gift!
sbqytCVtQb4 21:09 Adam Savage's One Day Builds: New Drill Press Table!
4iIBa0TLe9E 33:32 Adam Savage's One Day Builds: Mercury Spacesuit Wrist Rings, Part 2
fM9FtG01wMg 45:11 Adam Savage's One Day Builds: Spacesuit Glove Wrist Rings!
smQFsyrTWhk 16:20 Adam Savage's Essential Modelmaking Cutting Tips
eu7pZukFQ7w 6:27 Adam Savage's Favorite Tools: Blundstone Work Boots!
FEHYccr5bC8 15:14 Adam Savage Finally Fixes His Giant Swiss Army Knife!
DF2Mmfj7yxc 12:20 Adam Savage Repairs His Ugg Boots!
80YLonnG-Lo 28:24 Adam Savage's One Day Builds: Knight Lighter!
2SpNjBI1lu0 18:53 How Boston Dynamics' Spot Robot Learns to Dance!
ZlXGlBFFzJg 6:21 Adam Savage's Favorite Tools: Monkey Wrench!
fkWsmKFMxRw 5:49 Adam Savage's Miniature Model from Star Wars: Episode 2!
WQA-x2eYn5E 19:06 Adam Savage's One Day Builds: Custom Painting Shop Tools!
ssfLP2Z_S50 10:08 Favorite Worldbuilding Coffee Table Books
FQajiZVQWRs 19:47 Adam Savage's Live Streams: Weathering a Beskar Ingot Prop
xDvqlJGjh-w 47:41 Writing Science Books with Mary Roach - The Adam Savage Project - 1/6/21
8Sqo8njgt_0 36:20 Adam Savage's One Day Builds: New Lathe Chuck!
rUIpT2oytXQ 5:58 Tested: Our Favorite Smart Home Wi-Fi Plug
2UeghPJrUxE 29:12 Adam Savage's One Day Builds: New Workbench Lights!
gCva75a8ATQ 18:30 Adam Savage's One Day Builds: Electronics Tool Cart!
M_XYZSHz6DI 48:54 The Mandalorian Season 2 Finale SPOILERCAST - The Adam Savage Project - 12/29/20
8kbu34dk92s 9:27 Adam Savage's Favorite Tools: McMaster-Carr Catalog!
4ycLw4LFXDM 5:14 Adam Savage's Chewbacca Bowcaster Replica!
uY7zpvjLx4Q 1:17:58 Adam Savage's One Day Builds: Iron Man Mark I Helmet!
-R8wUybrspo 43:27 Adam Savage Modifies Boston Dynamics Spot's Robot Form!
gKjkre4TqPo 37:01 Shop Organization with Laura Kampf - The Adam Savage Project - 12/22/20
5NbK_H0QmOI 12:26 Adam Savage's Favorite Tools: Hot Wire Cutter!
BC3grbtsN2g 14:25 What's Inside Adam Savage's Hip Pack!
nEh5__V9zW8 5:47 Adam Savage Tests His New Pressure Washer!
beGXa1TO6vo 1:47:53 Adam Savage's One Day Builds: Wookiee Feet!
YG_c6evzyEM 14:06 Tested: Blackmagic ATEM Mini Pro ISO Video Switcher!
dXqsdsB9emE 4:23 Tested: Ooni Koda 16 Gas Powered Pizza Oven!
Vt0RxHzEhws 1:16:24 Adam Savage's One Day Builds: Iron Man Mark I Armor!
Wf15R6uZloY 47:42 Mike Birbiglia - The Adam Savage Project - 12/15/20
8rajGZ_sjo4 10:00 Adam Savage's Favorite Tools: The Savage Industries Apron!
PJyfQkEFV9w 5:16 Inside Adam Savage's Cave: LED Space Helmet!
BZ0b7s5i6r8 27:32 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 5)
WBWUxWoNI5o 1:23:25 Adam Savage's One Day Builds: Hellboy Samaritan Storage Display!
eBAWHbi4THs 39:39 Adam Savage's One Day Builds: Hellboy Samaritan Full Teardown!
ImsjC-f56dQ 52:19 The Mandalorian Season 2 SPOILERCAST - The Adam Savage Project - 12/8/20
gkNfD_CO3T8 11:31 Adam Savage's Favorite Tools: Blow Dryer Oven!
zIzXQNVPHmA 9:00 Adam Savage's Alien: Covenant Spacesuit Helmet!
N_tKi14mFrk 23:16 Adam Savage's One Day Build: Sticky Storage!
EmoB4tds0dM 36:07 Making a Hidden World Book Nook Diorama!
JYWfikf-3DI 24:31 Adam Savage's One Day Builds: Chewbacca's Bowcaster!
lp3w3CqYGqI 36:21 BattleBots 2020 - The Adam Savage Project - 12/1/20
lqZkBK6lbH4 6:50 Adam Savage's Favorite Tools: All About Awls!
T5FbjENMND4 9:45 2001: A Space Odyssey Moon-Watcher and Bone Replica!
ihmSRV95F_c 7:36 Filming Model Miniatures from Moon!
iuNjDzT6PWo 55:53 Adam Savage's One Day Builds: Luke's Lightsaber!
Ww7Ts37eN2g 42:55 Adam Savage's One Day Builds: Hellboy Samaritan Bandolier!
DhEAGJrDaEU 41:00 Foamsmithing - The Adam Savage Project - 11/24/20
GYIa_ryJsOo 9:45 Power Rangers 1995 Movie's Original Costumes!
SutetC6n9so 42:04 Adam Savage's One Day Builds: Hellboy Samaritan Carrying Case!
YqZGA99RoTI 1:06:59 Adam Savage's Live Builds: KiwiCo Ukulele Kit!
e-wwk2RVjWY 5:58 Inside Adam Savage's Cave: Alien Nostromo Crew Wings!
4GehjvyAsZs 48:48 Adam Savage's One Day Builds: Baby Yoda Mod and Repaint!
41zypEN8hqQ 40:13 Late Night Comedy Writing - The Adam Savage Project - 11/17/20
7tFwHXpxNLY 11:46 Adam Savage's Favorite Tools: Mobile Filming Rig!
4oH0vkudKWY 8:14 Inside Adam Savage's Cave: Chronicles of Narnia Sword!
rR8M8_-5rXc 3:38 Inside Adam Savage's Cave: LEGO Minifig Blade Runner Blaster!
wnMH1s36WXo 41:14 Adam Savage's One Day Builds: How to Make an Apple Box!
AmWgRWYyN6o 25:15 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 4)
NkktALohXwQ 4:19 Adam Savage's Custom Ginger Beer Bottle!
VIMMKlKRbD4 9:48 Tested: Hollyland Mars 400S Pro Wireless HDMI Kit!
4JQ4O1SPHSY 56:14 Adam Savage's One Day Builds: How to Build a $5 Sword!
Jh1a4M3YA_0 47:12 Alie Ward's Ologies - The Adam Savage Project - 11/10/20
-5zSadDZMhA 9:54 Adam Savage's Favorite Tools: Annular Cutters!
cYH6UuHQCwk 8:20 Adam Savage's Distortion Helmet!
aLI-6SmkJLU 1:02:15 Adam Savage's One Day Builds: Han Solo's Holster Belt!
ziIKLeacBDo 18:52 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 4!
3sVWJThNzrI 39:53 Ted Lasso SPOILERCAST - The Adam Savage Project - 11/3/20
rq__Lz1uf7w 8:11 Adam Savage's Favorite Tools: Wireless Endoscope!
Qg1vsumLXcY 25:45 Adam Savage's New Custom Workbench!
MvkYVuxMy0k 25:08 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 3)
WfJtqnSexss 29:01 Adam Savage's One Day Builds: Restoring a Fabric Chair!
AumnIehXwyI 35:57 Adam Savage's One Day Builds: Staple Sorter and Organizer!
hhdZxzCxhd4 42:01 Comfort Movies During Lockdown - The Adam Savage Project - 10/27/20
0cQcFsb_5Jc 8:25 Adam Savage's Favorite Tools: 3 Essential Pliers!
u1kpYxCth5w 13:03 How to Make Creepy Specimen Jars for Halloween!
csu4jQNFfzA 32:44 Adam Savage's One Day Builds: Drafting Tools Sorting Drawer!
12RwfqvTMZk 27:44 How to Make Creepy Plaster Hand Casts for Halloween!
EEgc5m5LWPk 32:14 Jen's Foam Wig Project - The Adam Savage Project - 10/22/20
wInlwbGet5A 41:26 Making an EVA Foam Wig for Cosplay and Halloween!
1NWAxkDZ9xs 34:13 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 3!
MPy0JzpZuvY 5:52 Adam Savage's Favorite Tools: Safety Wire Pliers
D5BO1JmYLN0 21:16 Age of Mecha: Awesome 1/35th Scale Mech Figures!
gygyNt2AnKA 26:24 Adam Savage's One Day Builds: Giant Swiss Army Knife Repair!
UkYR3ik19nw 8:10 Adam Savage's Favorite Tools: Folding Rulers!
Rf_6etOJXfE 18:35 Augmented Reality Telepresence in HoloLens 2 and Quest 2!
inQ16HamIWk 52:25 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 2!
vPhtXBUZxIo 46:48 Muppet Performer Dave Goelz! - The Adam Savage Project - 10/13/20
AYXdr7G4EHY 4:22 Adam Savage's Favorite Tools: Angle Finder!
eeUoZp8sgT0 10:23 Adam Savage's New Machining Parallels!
BdqsoDxCui8 23:51 Challenge Accepted: Drifting with Zoe Bell, Part 3
lsXLGT5N2uo 1:17:55 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles + Vacuum Former Rebuild!
AuADKoSjJbw 7:17 Life-Size Mercury Space Capsule Cockpit Poster!
Pb1BpA7QN3U 47:41 Adam Savage's One Day Builds: Hellboy's Samaritan Prop!
ClxSdX3ynGQ 46:37 99% Invisible - The Adam Savage Project - 10/6/20
7iss1tfYfyM 8:47 Adam Savage's Favorite Tools: iFixit Repair Toolkit!
zWTxrnETT9s 18:02 Adam Savage's Cave Loft Tour!
BCahfydXxaI 15:44 Challenge Accepted: Drifting with Zoe Bell, Part 2
HWnDC6KzLg8 28:19 Adam Savage's One Day Builds: LEGO Mandalorian Razor Crest!
H9dX1UV_onk 21:09 Panasonic S1H & S5 Full Frame Camera Testing!
chbZJAJ9y68 25:33 Adam Savage's One Day Builds: Miniature Shipping Container!
fdVm29yWCCY 34:16 The Boys Season 2 SPOILERCAST - The Adam Savage Project - 9/29/20
nTLA_nnCxEo 3:49 Adam Savage's Favorite Tools: Optical Center Punch!
MtGAiEQEIXE 35:49 How ILM Made The Mandalorian's Razor Crest Motion-Controlled Miniature!
jFNhmBOsALo 11:49 "Grant Imahara's R2D2 Work" (Sept. 14, 2020, Q&A Part 4)
j-u0iOtg3mM 23:36 Challenge Accepted: Drifting with Zoe Bell, Part 1
7aGfiNy9Oos 28:23 Adam Savage's One Day Builds: Table Saw Fence Upgrade!
70Xl70z8Tv0 14:44 "First Star Wars Prop Built as an ILM Employee" (Sept. 14, 2020, Q&A Part 3)
gSx4P0kQQNk 23:39 How to Light Hot Toys Figures Without Batteries
fIwJwRb5qKI 14:02 "Star Wars Prop I'm Most Proud Of" (Sept. 14, 2020, Q&A Part 2)
u4ZWkIsS9eA 18:51 Tested: VR Simulator Cockpit Rig Build!
BEVEYvAO3rI 21:32 Adam Savage's One Day Builds: Car Seat Dog Bed!
Bbo45M8nGW8 12:09 "What Star Wars Can Teach Us Today" (Sept. 14, 2020, Q&A Part 1)
OOU8yadI2sY 35:21 Cosplay in the COVID Era - The Adam Savage Project - 9/22/20
2RFEs4mQb44 3:39 Adam Savage's Favorite Tools: Trammel Points and Rotape Beam Compass!
nBiZRlomFNs 19:03 Adam Savage's Live Builds: LEGO Rickshaw
0dn0d4WQ9wY 6:51 Adam Savage's ILM Modelshop Greeblie!
SQ9bbMu3mdo 15:11 "About the Shop Floor" (Sept. 7, 2020, Q&A Part 7)
8PEc5blz_fY 21:20 Adam Savage's One Day Builds: Planer and Spindle Sander Station!
ObJFWGW_Doc 5:39 "Most Used Tool Regardless of Project" (Sept. 7, 2020, Q&A Part 6)
KJgRis_qAGw 18:49 Lighting Setup for 1/6 Scale Figure Photography!
BbrQ4OX-1-E 32:29 Adam Savage's One Day Builds: New Cut and Sew Station!
VZrz3e5Yv3c 11:04 "COVID Changes That Should Stay" (Sept. 7, 2020, Q&A Part 5)
N_NahbrqFwI 35:47 Evan Narcisse - The Adam Savage Project - 9/15/20
AjJFTXFQWMk 4:59 Adam Savage's Favorite Tools: Socket Driver Adapters!
nRQujY8kNVA 7:45 Adam Savage's Very First Lightsaber Prop Replica!
s-eCil_0gK0 11:23 "Mrs. Donttrythis and the Watering Can" (Sept. 7, 2020, Q&A Part 4)
sBqJ8wfRJUs 14:32 "Lockdown Constraints With Interesting Outcomes" (Sept. 7, 2020, Q&A Part 3)
eu3T8x6eWq8 11:39 Inside Adam Savage's Cave: Spilled Sortimo Storage Box Sorting!
GEK0EeAM2Ws 15:04 Testing iPhone 11 Lens Attachments + Custom Storage Box!
hcQWtjzkt1w 9:42 "Being Good Natured About Mistakes" (Sept. 7, 2020, Q&A Part 1)
XVEww6Ylw5c 41:23 Adam Savage's One Day Builds: Thread Tapping Guide Block!
N02xowDuu04 35:27 Simone Giertz - The Adam Savage Project - 9/8/20
n5laGi3GO7M 11:26 Adam Savage's Favorite Tools: Machinist's Blue Layout Fluid
EXaDxl60rTQ 54:24 Adam Savage's One Day Builds: Brass Watering Can!
O2ICDTv3VJA 9:16 Adam Savage Interviews Expanse Production Designer Tony Ianni
OxkszitNWN8 17:46 Adam Savage's One Day Builds: Upgrading Captain America Shield!
BlRaAcVYUbU 43:52 We're Back - The Adam Savage Project - 9/1/20
cDiAYVTlgnQ 7:12 Adam Savage's Favorite Tools: Artificial Catgut Sinew
EEWu7HbMzbk 8:39 Adam Savage Cosplays the Outbreak Hazmat Suit!
SsHYEHVBfKw 4:59 Adam Savage Finishes Sorting His LEGO Collection!
BfEq4-ld2uU 10:00 Snap Ships Modular Spaceship Building Kits!
7CDzNJXRmDs 28:22 How To Make Custom 1/6 Scale Fluorescent Tube Lightsabers!
lp85yyPSP10 43:29 Adam Savage's One Day Builds: Custom Workshop Apron!
s288Yuz35qQ 9:52 Creature Puppets from Aliens, Flubber, Labyrinth, and Men in Black!
7wNjATKTzcs 9:02 Adam Savage's Miniature Model from A.I. Artificial Intelligence!
zVXSOB8wTWw 9:05 Scale Model Miniatures from Star Wars, Alien, and Star Trek!
pg6vx5YdSh4 12:50 Original Costumes for Rocketeer, Pacific Rim, and V for Vendetta!
ivaxOv25RaI 16:13 Adam Savage's One Day Builds: Letter Stamp Holder!
LuwcsjyfSP0 9:39 Stop-Motion Puppets from Star Wars, RoboCop, and Jurassic Park!
J170jeH0yXU 34:59 Adam Savage's One Day Builds: Foam Prop Safe!
K9fQn1bQVsQ 7:23 Adam Savage's Favorite Tools: Best Budget Multimeter!
X3ZA2vRE_Ps 12:32 Adam Savage's Kill Bill Bride Sword Replica!
BTGN5QNyA-8 42:41 Adam Savage's One Day Builds: Machinist Tool Drawers!
MhFqT0jYhHA 26:31 How To Make a Star Wars Action Figure Diorama (Free Design!)
M5ZAfMGXChw 21:19 Star Wars Book Nook Diorama Build!
4MVxJNawefM 23:26 Adam Savage's One Day Builds: Tintype Photo Clamp for Gary Oldman!
H2UJqIihJBA 6:00 Adam Savage's Favorite Tools: Best Hot Glue Gun!
Zwzqm_63zcE 5:46 Inside Adam Savage's Cave: Awesome Tengu Masks!
VPChPpzIvSE 8:51 Adam Savage Builds an Octopus Puzzle! (Part 4)
m-ayU2GCQ_Q 34:50 Adam Savage's One Day Builds: Drill Press Modification!
_KfaSiD-7iY 38:35 Adam Savage's One Day Builds: Lathe Chuck Rolling Rack!
okbsoGc456g 11:32 Adam Savage's Favorite Tools: Wiggler Machining Center-Finder
d_dvuaUzq-4 9:30 Adam Savage's Leather Aragorn Vambraces!
uMPPUZiqU5k 27:04 Raising Octopuses in a Home Aquarium and Laboratory! (Part 3)
fru2G4bGL14 40:30 Adam Savage's One Day Builds: Lathe Tailstock Repair!
ALesylse5a0 10:39 How to Draw and Annotate on Live Videos!
98MCz9gQaiE 32:41 Adam Savage's One Day Builds: Giant Nut and Bolt!
4ugXRgM-jUQ 4:42 Adam Savage's Favorite Tools: Safety Goggles!
6SPhGBnvvyU 4:26 Adam Savage's Pet Dragon Puppet!
lIUICaQSOz0 26:10 Adam Savage Builds an Octopus Puzzle! (Part 2)
R-De84JfQBU 24:26 Adam Savage's One Day Builds: Spacesuit Display Stand!
a2ovDhGGCas 12:39 Sideshow Collectible's New Quarter-Scale Superhero Statues!
KuSP_6F9nxY 15:56 Building a New Gaming and VR PC!
H24rPSj-9l4 22:08 3D-Printing King Atlan's Artifact Prop from Aquaman!
eiQuBonhGiw 31:00 Adam Savage's One Day Builds: Workshop Filming Slate!
HwjLlbBFiXU 11:22 Hot Toys 2020 Star Wars and Marvel Figure Reveals!
gdPODQSjgQs 8:39 Adam Savage's Favorite Tools: Ratchet and Socket Set!
jKA6D_k-cFA 6:50 Life-Size Baby Yoda! Sideshow Collectibles' The Child Prototype
jVoj61CcQAY 25:23 Adam Savage Builds an Octopus Puzzle! (Part 1)
EWXcnVTY3pk 46:48 Adam Savage's One Day Builds: Air Tools Sorting Boxes!
RQtY8Y6IDLU 10:03 How to Shoot Drone Videos (4K)
2fHcqHpGi8Q 18:35 The Beautiful Architectural Model Kits of Metropolitan Craft
ieDYlkJTNYI 20:38 Adam Savage's One Day Builds: Custom Pistol Whip Controller!
mIb-3GN2BlU 5:22 Adam Savage's Favorite Tools: EDC Hammer!
1vk9cDrblOA 12:46 Adam Savage's Mercury Space Capsule Cockpit Replica!
9lH2q6A4WNI 19:41 Building the 1/5000 Star Destroyer Model Kit! (Part 2)
hIs3lioHoAo 21:44 Adam Savage's One Day Builds: Headphone Rack!
fSQD8DBLODE 25:46 VR Immersive Theater in The Under Presents: Tempest!
R7LGexbvOKE 18:49 Star Wars Death Star Corridor Figure Diorama!
qE68mYkpZvQ 31:02 Adam Savage's One Day Builds: Portable Audio Recorder Rig!
TqBbVcJ_-WM 6:00 Adam Savage's Favorite Tools: Woodworking Thread Taps
mquypbwrF94 15:47 Adam Savage's Apollo A7L Spacesuit Upgrade!
fMpVSadUV0A 26:44 Building the 1/5000 Star Destroyer Model Kit! (Part 1)
sKadzTMSh5s 29:41 Adam Savage's Weekend Builds: Material Storage Improvements
H8042TfPETg 7:39 Adam Savage's Favorite Tools: 4" Calipers
9JnP9qNtnIQ 12:46 Adam Savage's New Tiny Parts Sorter and Storage!
oSHoo_thI2Y 37:24 Adam Savage's One Day Builds: Front Porch Table!
w1ECGIEqnik 1:29:24 Live Q&A and Sword Prop Show and Tell with Adam Savage (June 23, 2020)
c8DJp8pCUak 16:55 Making an Illuminated Action Figure Display Stand!
TsWG4nSi-Hs 42:45 Adam Savage's One Day Builds: Stitching Pony Clamp!
YU2RTL77oXY 4:56 Adam Savage's Favorite Tools: Heavy Duty Bearing Swivel
HwSqLrRTkGY 8:54 Adam Savage's Octopus Cane!
frwLir1A_qg 42:55 Adam Savage's One Day Builds: Making a Stable Workbench!
iDuNZRtZrp8 25:18 Cyberpunk VR Game LOW-FI + QuestDraw AR!
rYUUYEV6JlQ 31:07 DJI Mavic Air 2 vs. Skydio 2 Autonomous Drone!
ritwf-_iOlg 1:08:55 Adam Savage's One Day Builds: Mini Chop Saw!
roXwRxFTfCI 4:02 Adam Savage's Favorite Tools: Essential Shop Rags!
KHgstunB5fE 6:29 Adam Savage's Favorite High-Power LED Flashlight!
f7ht0J8Z4aQ 11:58 Laser Cut Vintage Billboard Sign Project!
-xWGRVL-ExA 18:38 Adam Savage's One Day Builds: Mini Machine Vise!
dXEKp211XAw 16:17 3D-Printed VR Blaster Grip and Adventure Lab Escape Room!
FlaRH1v6p8c 1:30:03 Live Q&A and ACES Helmet Show and Tell with Adam Savage (June 9, 2020)
xDxQMZjHR4s 15:49 Model Behavior: Weathering a Transformers Blitzwing Figure!
65r_1TzJXaQ 50:07 Adam Savage's One Day Builds: Rhombic Dodecahedron with Matt Parker!
PVQFvHuJHec 14:18 Adam Savage's Favorite Tools: Awesome Circle Drawing Tools!
RiakgHPRZd8 9:43 Adam Savage's Airplane Cockpit Prop for MythBusters!
vOROGorDG6s 33:34 Adam Savage's One Day Builds: Fiber Optic Microscope Ring Light!
raCqLesHjRE 7:26 Adam Savage's Favorite Tools: Extended Grabber Micro Forceps!
V6fU3d_4w_8 10:28 Making a Cutting Mat Riser and Lighting Platform!
gjz8V-2xiyQ 47:24 Adam Savage's Workshop Office Door Build!
bZhUwQqmvnk 7:24 Adam Savage's Magnolia Frog Props!
28h_WlfD4k4 40:56 Adam Savage Upgrades His Mini Bandsaw!
q1JcvQLmiUM 7:59 PinSim Mini Arcade Joystick and Virtual Pinball Controller!
BYqDBC0efj4 1:02:17 Adam Savage Builds a Mini Tabletop Bandsaw!
dj9lNlLTC_U 12:04 Adam Savage's Favorite Tools: Glass-Cutting Rotary Bit
W38HXRhsLAo 5:18 The Story of Adam Savage's Contradictory Wall Sign!
2EGnVPxXYgM 11:12 LEGO BrickHeadz Anatomy Custom Figure!
wvCdjyu0QJ4 8:42 Adam Savage's Weekend Builds: Lathe Chuck Rebuild!
eyMuYC9_fiM 36:08 Adam Savage's Live Builds: LEGO Orca Fishing Boat (from Jaws!)
GW9Spy4xXNA 8:51 Custom Display and Sorter for Instax Instant Film
zZUOazRFLaA 31:01 Adam Savage Builds a LEGO Sorting and Storage System!
tDxUEMPLm3U 4:21 Adam Savage's Favorite Tools: Multi-Blade Utility Knife!
EWrDR6P6Kl0 15:19 Adam Savage's Giant Music Player Prop!
A3-9Vk_2be4 32:31 Adam Savage's One Day Builds: NASA Retro-Reflector Replica!
igEqC3snaYY 40:10 Adam Savage's Live Builds: Weathering Prop Money!
FSww64aUklY 23:55 Tested From Home: Making Wood-Fired Neapolitan Pizza!
cz_MgCS_w8Y 4:49 No $80 Cable Needed: Oculus Quest Link Works Out of the Box!
NvryPJFkPlM 23:43 Tested From Home: Customizing Home Studio LED Lights!
TT8PzFaZ0Zw 36:54 Adam Savage's One Day Builds: Lithium Ion Battery Charging Station!
TCSeWvHCIF4 6:06 Adam Savage's Favorite Tools: Workshop Utility Apron + Everyday Carry!
Ouf2nz5fyMo 7:10 Adam Savage's Sculpture of a Mechanical Hand!
IiqfkYAv3Dw 42:24 "How do you deal with knowing someone dislikes your work?" Adam Q&A (5/5/20)
I7U-QCTS9Os 39:29 Adam Savage's One Day Builds: Repairing Vintage Aviators!
J0KhC1GpLSQ 36:30 Hand Physics Lab: Hand Tracking Demos in Oculus Quest!
4mcBcUrPjBo 46:58 Adam Savage's Live Builds: Weathering a Thermal Detonator Kit!
97aH5D29KbU 13:11 Tested: Microphones for Podcasts, Livestreams, Vlogs, and Virtual Meetings!
nCrB0FnW__s 28:19 Adam Savage's One Day Builds: Movie Sword Rack!
8TJcFbu7gWE 6:29 Adam Savage's Favorite Tools: Bondhus Hex T-Handles!
Otid9rax1Go 7:06 Adam Savage's "Cabin Fever" Coat Hanger Sculpture!
5GYbjDot67A 11:30 The Art of Sideshow Collectibles' Star Wars Figures
0nLlCmZspVM 20:57 Adam Savage's One Day Builds: Tweaking the Table Saw!
ePgysAtyO5I 52:19 Adam Savage's Live Builds: LEGO Women of NASA!
ebptyVvDtE8 11:06 How To Use Your iPhone or DSLR as a Webcam!
yWRLz_r_d3A 33:32 Adam Savage's One Day Builds: Little Thwacker Hammer!
96ZIry7YG7U 5:32 Adam Savage's Favorite Tools: Wearable Magnifiers!
ZGJsZE-xobE 7:32 Adam Savage's Original Matrix Lightning Gun!
A9B81mICvrE 32:58 Adam Savage Answers Your Questions! (4/21/20)
IQhzpoI4ptc 9:08 Tested From Home: LEGO Builds and Camera Test!
ZNwvjaIW-pU 1:00:10 Adam Savage's One Day Builds: Making a Die Filer Machine!
OopnMjPHWOE 32:36 Adam Savage Paints and Weathers the Ghostbusters Ecto-1 Model Kit!
rEyLLtTzAl4 6:05 Behind the Scenes: Using a Vintage Color Meter!
fOfKTJPVxFE 49:22 Adam Savage's Live Builds: LEGO Blade Runner Spinner!
RAucP_zpZco 6:59 Tested From Home: Kayte Sabicer's Projects!
eVnWyEvT-KY 27:09 Adam Savage's One Day Builds: Lathe Infrastructure Upgrades!
hV0OfVGCIuY 3:54 Adam Savage's Favorite Tools: Precision Rotary Tool!
nbKG9SjZjvQ 5:54 Adam Savage's New Mechanical Claws!
7vKa8YZ64uE 29:36 Adam Savage Answers Your Questions! (4/14/20, Part 2)
PLHUcP8LfkM 1:28:25 Adam Savage's One Day Builds: LEGO International Space Station!
2Mhtdb2jJy4 35:04 Adam Savage Answers Your Questions! (4/14/20, Part 1)
ieUVI-J_nyU 10:30 Tested From Home: Joey's Production Studio!
jPAGZpNZrwU 54:21 Adam Savage's One Day Builds: How To Build a Box!
Wxd7Q4BqsQc 11:26 Adam Savage Examines an Embalming Toolkit!
Sfhv9EuJ03E 21:31 Designing a Book Nook Laser-Cut Kit!
cMthV33CgzE 3:08 Show and Tell: Guru del Toro Collectible Figure!
m911Q-jZ7Vo 5:28 Adam Savage's Favorite Tools: Making Circles and Holes!
SVeFSzzWj4A 5:15 Tested From Home: Foam and 3D-Printing Projects!
R-PdPtqw78k 19:53 How Boston Dynamics' Spot Robot Works!
hIbgY1n5bDo 57:50 Adam Savage Answers Your Questions! (4/7/20)
vQY647vSzw8 3:16 How Adam Savage Films Himself in Self-Isolation
eaGnyaR2B7s 12:38 Adam Savage Explains His Scary Hand Injury!
slvJzIJ_YXM 28:15 Adam Savage Answers Your Questions! (3/31/20, Part 3)
BFcS9DX-dyA 31:20 Adam Savage Answers Your Questions! (3/31/20, Part 2)
CN2qhhyk9HE 31:55 Adam Savage Answers Your Questions! (3/31/20, Part 1)
ccmnSXJG3QE 11:39 Tested From Home: How to Find Tardigrades In Your Backyard!
z_Ti4GP0ntE 1:07:08 Adam Savage's One Day Builds: Refrigerated Cooling Suit!
EBlcbou4JEM 2:06 Inside Adam Savage's Cave: Mystery Stone Head from MythBusters
lfkjRGarGSk 10:32 Tested From Home: Sean Charlesworth's Projects!
NTHM1xj_wgY 33:30 Star Trek: Picard Finale Discussion! - Offworld Episode 35
SO6sbHP6f7g 17:29 Tested: GoPro Hero8 Black vs DJI Osmo Action!
dUUjobt39Ew 3:15 Tested From Home: Jen Schachter's Projects!
dsoo-lUcw0g 9:31 Adam Savage's Chewbacca Display Case!
p4odzVGI9oQ 1:52:01 Adam Savage's Live Builds: Ghostbusters Gizmo Kit!
rEtgF7YTkLY 53:33 Half-Life: Alyx VR Walkthrough of First Hour!
0KG5Y55ewWI 1:58:54 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 2)
3hiNN3CuTNk 16:48 Configuring a Gaming Laptop for VR and Content Creation
uWpw1NTWBcY 1:28:46 Adam Savage's Live Builds: Ghostbusters Ecto-1 Kit (Part 1)
HbsiV1MIOHY 2:54 Adam Savage's Favorite Tools: Westworld Safety Visor!
ZjpPgv9XtJA 19:46 Adam Savage's One Day Builds: Thermal Detonator Kit!
dFmmvfteEso 10:14 Adam Savage's Dream Diary Sculpture
351DxQghbh0 16:39 Making the Custom Microphones for Hamilton!
jZDe18k7T8o 9:55 Adam Savage's Nailer and Stapler Storage Rack
Sz4mxsYOwzQ 2:00 Adam Savage's Favorite Tools: Chicago Screws
VTmtoLIzq2M 7:29 Adam Savage Reveals What's Left of the Original Buster!
60OpF3DCVls 11:26 Adam Savage Explores the Sound Mixing of Hamilton!
cRVXhA0-TI4 27:25 Inside Valve: Making Half-Life: Alyx for Virtual Reality
SgCJeoDNmYU 41:21 Adam Savage's One Day Builds: Poker Table!
HrYrcJTv4H4 4:45 Adam Savage's Favorite Tools: Jewelry Clamps
wfTLzG7EL44 6:15 Adam Savage's Custom Cosplay Storage Case!
gDf75VS1NEo 27:30 Adam Savage's Captain America Stealth Suit!
aNUv3Ad6jrQ 12:26 Adam Savage Goes Backstage at Hamilton!
x8YTMPuvTGw 33:49 Adam Savage's One Day Builds: Dinosaur Skull Lamp!
Q2wqMTtbOOw 3:17 Adam Savage's Favorite Tools: Labelmaker
fq71nnVrc08 15:51 Adam Savage Tours The Expanse's Practical Effects Shop!
JwlTGoAKKDk 5:54 Adam Savage's Model Shop Archive Props!
3D7xNAsi0uo 11:51 Adam Savage Examines the Props of Hamilton!
Bw-ttd_EELA 13:54 Adam Savage's One Day Builds: Rickshaw Carriage!
dvFS_ZEzwKg 4:27 Adam Savage's Favorite Tools: Automatic Wire Strippers
-q4phZ4He8A 43:52 Inside ILMxLAB: Making Star Wars Vader Immortal!
zyaocKS3sfg 28:18 Adam Savage's Spot Robot Rickshaw Carriage!
ig-2xlXfex4 44:37 Adam Savage Book Club: Humble Pi: When Math Goes Wrong in the Real World
0KObb7e2y5Q 16:58 Assembling the X-Wing Cutaway Model Kit!
m_AB7RnD_FQ 2:58 Adam Savage's Favorite Tools: Handheld Sheet Metal Brake
TqWhLPsEJE8 23:21 Adam Savage's One Day Builds: A Fake Can of Beans!
Z-MIGpKYJDk 29:46 The Science and State of Cloning - Offworld Episode 34
NiRcGebkcho 19:49 Painting a Rusted Fallout Fusion Flea!
nos70z2-MSM 10:43 Adam Savage Opens His 2019 Reddit Secret Santa Gift!
x8KmARIgCdY 10:23 Adam Savage Geeks Out Over EVA Foam Chain Mail!
oGl4Vq_FcV4 3:45 Adam Savage's Favorite Tools: Machinist Squares
__kZC06KbTU 4:24 Adam Savage's Very First Vacuuming Forming Project!
ziJ7gNJOZbU 26:43 Star Trek: Picard Discussion! - Offworld Episode 33
0CnIGE3ALd0 12:16 The Walking Dead: Saints & Sinners VR Impressions
k7s1sr4JdlI 6:39 Adam Savage Tests Boston Dynamics' Spot Robot!
hmEijVgUKkE 2:33 Adam Savage's Favorite Tools: Pica Marker
Dtkey7YUyPg 6:43 Custom Cricut Maker Vinyl Cutter Workshop Cart!
yr0M5a1eTW0 1:41 Announcing the Adam Savage Book Club!
3TkEPnim798 6:16 Adam Savage Meets the Expanse's Stunt Coordinator!
okhgjDIrRFQ 7:44 Adam Savage's "Keys to Hell" Sculpture!
8uGS11yuVyo 34:37 Adam Savage's One Day Builds: Portable Soldering Station!
l-4HgOGb7bM 8:54 Show and Tell: Relio² Desktop Lighting System
VwpFS1guqTg 16:22 Tested at the AWS DeepRacer Championship Cup!
gg-5_4ZOEcw 8:30 Adam Savage Talks Costumes on the Expanse Set!
3t0b7GfIFfQ 4:41 Adam Savage's Favorite Tools: Dial Caliper
t2c6lduDuIA 17:01 Hydro Dipping Carbon Fiber Blaster Grips!
b9wuK8Bcx9c 8:03 Inside Adam Savage's Cave: Modelmaking Inspiration from Weta Workshop!
7MsorS3LpkU 3:32 Inside Adam Savage's Cave: Leather Man Sculpture!
7Kpj8mJGIls 9:53 Adam Savage Speaks to an Expanse Graphic Designer!
JMv0PlMKkbs 20:54 Adam Savage's One Day Builds: Gaslamp Lantern Prop!
FBtP35yIUQo 9:54 Adam Savage Meets the Expanse's Key Stunt Rigger!
fFiyUqMg1Hw 28:57 Could Earth Be Moved to a New Solar System? - Offworld Episode 32
_FHVAPAL8cM 1:20 Adam Savage's Reddit Secret Santa Gift for HungryBaconElephant!
ZfNJvwNZZ2k 14:05 Adam Savage Talks with The Expanse's Wes Chatham!
CF65tmxtkuo 10:07 Adam Savage Learns Simple Tricks From The Expanse's Prop Master!
6_RicQnHicM 23:23 Adam Savage Tours SFMOMA's Spacesuit and Space Art Exhibit!
dcrFCu249pI 4:29 Concept Art to Art Statues: Pascal Blanché's Derelict Planet
xG8vq5q1Trw 26:45 The Expanse Season 4 Discussion - Offworld Episode 31
6Y8F9bqttmg 20:27 Adam Savage Chats with The Expanse's Dominque Tipper and Steven Strait
GtarhjRLx30 7:43 Adam Savage's Rounders Poker Chips and Case Replica!
117TSpgk_v0 2:06 Inside Adam Savage's Cave: Human Anatomy Model!
rWHk4ht-boM 22:38 Using Haptic Gloves to Control an Amazing Telepresence Robot!
ItEqzD2gpV8 21:50 Skydio 2 Autonomous Drone That Never Crashes!
ULwuz_8jyzc 6:46 The Nostalgic Niche Collectibles of ISH
cNjW7teSRFw 5:16 Articulation Innovations of 1000Toys' Synthetic Human
JVfDiEYvO-k 5:28 Imagining Future Fashion with Sixth-Scale Figure Design
WGtBXFzEKes 9:59 BigShot Toyworks Engineers Some of Our Favorite Toys
IDBGHxKDw80 12:13 Directing Pixar's "Wind", a SparkShorts Film!
RgL6YRh2oUc 12:13 How Machine Learning Enables DeepRacer's Autonomous Driving!
6ps4vbQ6Tk0 28:02 Adam Savage's One Day Builds: Workshop Hardware Storage!
WPSbtyGQyJk 2:37 Adam Savage's Hellboy Spear Replica!
rPrG-nvYaa4 5:35 Reina Koyano Transforms Sneakers into Pin-Up Art
xBl2GVOGMEY 6:16 The Mythical Art Figures of Manas+SUM!
fXMPnlkn0Y0 4:16 Remixing Pop Culture Icons into Modern Toys
fEDHihXH4K0 5:28 Mondo's New Iron Giant at DesignerCon!
wq3rtbhbinQ 8:09 Lumecluster's Phoenix Gauntlet Lineup!
dlGTdew6qkY 7:18 The Monstrous Kaiju Sculptures of James Groman!
JFAEx6BIuCM 25:24 The Alternate Space Race History of "For All Mankind" - Offworld Episode 30
Lh_vE9WikNs 7:09 Maschinen Krieger Scale Model Diorama!
vbGNBBsIgUw 9:02 DesignerCon 2019 is This Weekend in Anaheim!
EGuc7Z1RfsQ 12:03 Tesla Cybertruck Test Ride and Impressions!
rV5kRH-xaOE 4:48 Vintage Gundam Kit Converted to Statue Diorama!
3Cr15S-TAZU 2:58 Adam Savage's Soft Flail Sculpture!
fzhiBjgf750 7:25 3D Modeling, Printing, and Painting a Custom Gundam!
3JRbGcyPUnk 26:11 Adam Savage's One Day Builds: Custom Beat Saber Hilts!
Xq49o5LhdGM 16:19 Designing a Star Wars Pop-Up Book!
qwxOkqrca2M 17:49 Model Behavior: A Primer on Paintbrushes!
Bu1y4m7Y738 7:34 Adam Savage Checks in With North Bergen Student Cosplayers
giSvH_EYWCo 25:58 Adam Savage Tours North Bergen High School's Alien: The Play Artifacts!
cGtPAOJSTEo 33:36 Science Fiction's Influence on UFO Pop Culture - Offworld Episode 29
XEa2Mxsmox4 33:21 Model Behavior: Painting 1/6 Scale Portraits
MP5pbJ6Ajjc 24:32 Adam Savage's One Day Builds: Space Camera Shroud!
TOQ7CDKj4Rk 17:34 How Mixed Reality Game Trailers Are Made
iodElsICUS8 7:51 Felicia Neely Shows Adam Savage Her Enfys Nest Costume!
XY_RldJvCWs 36:58 Adam Savage Tours the MET's Last Knight Exhibit!
tYv--yvszw8 30:40 Apollo 13's Attention to Detail - Offworld Episode 28
MbwLsfy1h1w 7:31 Adam Savage Examines SKS Props' Foam Armor!
1HCDLdjmHt8 5:35 Show and Tell: New Travel Camera Bag
Htn8GUVKS9U 4:47 Kawaii Mayhem Shows Adam Savage Her Scratch-Built Mysterio Costume!
W6Tfz5JInKg 6:27 Arcade 1-Up's 3/4 Scale Gaming Cabinets
Ncg55eo_-Rw 5:40 Uncle Jessy Shows Adam Savage His Magneto Costume!
kjxdWnUBmpU 37:16 Adam Savage's One Day Builds: No-Face Animatronic Mouth!
pGwydXktims 6:40 X-Plus's World of Kaiju and Godzilla Collectibles
41HIH7wGZcY 10:13 Cosplayer Beverly Downen Shows Adam Savage Her Rebuilt Hela Costume!
PyfELJYoc9g 16:18 Adam Savage Meets Cowbutt Crunchies Cosplay!
f1pmfmOBKn8 7:28 King Korpse: Designer Toy of the Year
L7vKjZakY04 12:10 Adam Savage Checks Out Lumecluster's New Armor Cosplay!
Gl2fKdGIV2Y 6:37 XM-Studios' Impressive Superhero Statues
7AMJOOaOT3I 12:28 Shooting and Editing VR 180 Video with the Z Cam K1 Pro!
lA_WL68CfPM 26:50 The Space Science of Ad Astra - Offworld Episode 27
5ZHXEJgSnfM 3:57 Cyclops Warrior Makeup Demo!
jQZLj5zTY9I 5:08 Adam Savage's New No-Face Cosplay!
CriCoimi4MQ 8:03 The Striking Animatronic Sculptures of Ben Schwenk
MN-n-bd1x14 6:07 The Custom Plush Creatures of Ivonne Escoto
bls-WyVt_XE 5:00 Show and Tell: Fallout Pip-Boy Bluetooth Speaker Kit
JFxYqD60zuY 4:43 The Assemblage Art of Gmonik
jsFPnt6790M 5:41 The Creatures and Costumes of Creative Character Engineering
6O_8IJ47Tgg 14:33 LG 4K OLED vs. Samsung 8K QLED Technology Differences!
K2zLneGGbk8 36:03 Oculus Quest Hand Tracking Demo and Impressions!
Dt6BQPNGGTw 41:52 Adam Savage's One Day Builds: Star-Lord Cosplay!
VG1dNQ7RbEg 10:17 Adam Savage Meets a Smithsonian Exhibit Designer!
BW-pMnAFb6g 7:14 Adam Savage Learns About Smithsonian Exhibits' Installation Process!
X_rqQcvATtM 6:22 Adam Savage Sees How Smithsonian Uses Replicas to Tell Stories
_Kl-2wGSuZI 9:41 Adam Savage Meets the Youngest Modelmaker at Smithsonian Exhibits
oVafAOa_UIE 26:07 Adam Savage Tours the Graphics Department at Smithsonian Exhibits!
tAdaJZx4Ps8 9:51 Adam Savage Meets a Smithsonian Exhibit Developer!
dntMcmUfxHs 24:40 Adam Savage Explores the 3D Printing and Modelmaking Shop at Smithsonian Exhibits!
VlsUBj27GqY 12:01 Adam Savage Learns About Smithsonian Exhibits!
zLSvjwd99SU 9:37 Adam Savage Tours Smithsonian Exhibits' Fabrication Shop!
4qH-2c0dJ5E 10:45 Tested: Assembling a VR 180 Camera Rig!
1dck2mdY2h0 12:53 Inside Adam Savage's Cave: New Apollo EVA Gloves!
1BTcmCZhPe8 12:09 Tested Visits The NASA Ames Maker Space!
voJwBHBVyEk 4:09 The Great Wall Armor Showcase and Giveaway!
vqqEFEgx-ZI 35:00 Adam Savage's One Day Builds: Star-Lord's Walkman!
3jdF1yVBWdc 20:09 Adam Savage’s One Day Builds: Project Egress Apollo Hatch!
cgqv-MKbogQ 28:16 Digitizing Objects from Smithsonian's Enormous Collection!
8L_PxZXCH8o 13:56 Making Snow Effects for Diorama Miniatures!
49xYK0U1gfc 13:25 Adam Savage's Gorgeous Great Wall Armor!
r3S0i4Ankgk 2:18 Adam Savage Examines the Mother Ship Model from Close Encounters of the Third Kind!
Vxko8OhUv7s 7:11 Adam Savage's New Leatherworking Toolbox!
OExgiEZj6u4 5:27 Inside Adam Savage's Cave: Book-Turned-Hammer!
cKsOWxtUkFE 6:04 The Amazing Man-Spider Cosplay!
lvGglqATUvw 12:38 Driving a Robot on NASA's Roverscape!
pF-7vxrVGbQ 7:40 Adam Savage Incognito Cosplaying as Star-Lord!
X_YusHiUFYo 5:23 Adam Savage Learns About Preserving Alan Eustace's StratEx Suit!
KBgvGmhLFXk 14:26 Tested at NASA Ames Research Center (with Simone Giertz!)
zoyIA-n_UQ4 15:59 Adam Savage's Knights of Ren Cosplay, Part 4
_d24VJE8K94 32:26 Asteroid Exploration and Mining - Offworld Episode 26
jyyHLZy6fu4 28:32 Adam Savage's Knights of Ren Cosplay, Part 3
QSXsqFQ3Y-c 45:45 Adam Savage's Knights of Ren Cosplay, Part 2
9RKkRAWJ_sg 41:10 Adam Savage's Knights of Ren Cosplay, Part 1
EezjG4A2f-c 12:56 Tested: Deploying Ocean Sensors from a Plane!
WFSnf0MSAFc 22:08 Adam Savage Visits National Air and Space Museum's Restoration Hangar!
ESJcPH7KSvs 11:11 Inside Adam Savage's Cave: Ryan Nagata's First Spacesuit!
aNTq7qOAFeg 6:55 Adam Savage Builds a Hero's Engine Sweet Cream Pourer!
2V65z9nT55o 7:20 Adam Savage Examines the Space Shuttle Discovery!
BQapjBMt6b4 14:12 Painting and Aging Miniature Buildings!
Wxh6rVrpTnA 9:00 Adam Savage Goes Behind the Scenes of Apollo 50: Go for the Moon
ZgzghAnYrD0 13:51 Marvel's Daredevil Costumes and Props!
bKrpiCqZq_8 16:20 Inside Adam Savage's Cave: High School Alien Play Spacesuit!
G5YpglkGN8Y 11:22 Designing the Stranger Things Season 3 Biohazard Suit!
m2esyN4fuiA 11:11 Adam Savage Meets Neil Armstrong's Apollo 11 Spacesuit!
D-Ptuq85R8Y 3:50 Adam Savage Talks about His Hearing Loss!
9e9T3LrEt28 4:20 Adam Savage: Help Peter Jackson Solve a WWI Mystery!
YOp3X0KzKLg 5:27 The Orville Ship Model Replica!
54k1M8WwTxE 6:53 Chatting Designer Toys with DesignerCon's Founder!
Fn-EothtxOw 7:27 Star Wars Creature Busts and Replicas from Regal Robot!
gHwnXcHK34I 7:21 The Orville's Costumes, Creatures, and Ship Miniature!
N6a5b-oWfWM 5:55 Awesome Star Trek USS Enterprise 1701-D Replica!
eHryKKH3l1s 9:45 Batman Museum Costumes and Props Tour!
oFFw48pF1mE 6:57 Adam Savage's Zorg Industries ZF-2!
cB8ETl0iodE 6:21 Star Trek: Picard Prop and Costume Museum Tour!
EJSNNXjvljw 30:03 Science Fiction's First Moon Landing - Offworld Episode 25
Srg47mr4X5A 14:01 Adam Savage's One Day Builds: LEGO Lunar Lander
wrQhkJt4eho 6:33 Show and Tell: ArtBones Articulated Action Figures
tFgCLiPn-k4 6:17 LEGO Great Ball Contraption Mini-Golf Modules!
Th9Fuo8EYyE 5:15 LEGO Abrams Tank that Deploys a Bridge!
Bh6C2O77EpI 14:39 Adam Savage's One Day Builds: Cave Museum Display!
2zTdOfqO6g4 33:50 Building a Retro Moon Suit Garage Kit!
pTHRVsrqyiw 10:13 Warcraft Movie Props, Weapons, and Armor!
gr4YjCiabOc 37:33 Poppy Northcutt, First Woman in Mission Control! - Offworld Episode 24
Ew-qden-ha8 8:13 Inside Adam Savage's Cave: New Spacesuit Hardware!
aOQTunQ4Oug 9:27 Show and Tell: Nike's Adapt BB Power-Lacing Shoes!
hNgC3s5Nne0 38:50 Model Behavior: Painting Shiny Model Cars!
YZV4A4Kl0yM 28:20 Adam Savage's One Day Builds: Hero Prop for TV Show!
iYb84RjpudE 8:48 Toy Photography with Miniature Sets and Dioramas
Mx3Yyghttn8 7:41 Making the Borderlands 3 Giant Character Statues!
Ts42FtG9SGY 29:40 What Exoplanets Look Like in Film vs. Reality - Offworld Episode 23
bQQW0khYaOs 3:48 Inside Adam Savage's Cave: Star Wars Tauntaun Statue!
sNeou5p5f5s 13:33 Replicating Neil Armstrong's Apollo Spacesuit!
AnxBy32fJX8 32:55 Adam Savage's Week at Weta Workshop, Part 6
hQKvQmprGgs 20:48 Painting a God of War Leviathan Axe!
2NYtPWhdhhQ 15:54 Adam Savage's One Day Builds: Iron Man Armor Stand!
fMR7jClFKnc 25:00 Adam Savage's Week at Weta Workshop, Part 5
8_XwRFD5Lqs 24:31 Behind the Scenes of Weta Workshop's 'I Am Mother' Robot!
6nw-RdxJzcY 32:43 Science Fiction Spacesuits - Offworld Episode 22
5DstR_8RhPM 3:13 Tobor, The Dinosaur Controlled by Power Glove
_4gbxlKBJlA 23:43 Adam Savage's Week at Weta Workshop, Part 4
MOOihfy3Iwo 4:04 Adam Savage's Very First Shop Project
hF86Qd-B4SE 10:37 Show and Tell: Gundam Upgrade Garage Kits!
vY9-3COB2S4 15:21 Shop Tips: Know Your Screw Threads
Lp3GaB43_3k 10:51 Show and Tell: Synology DS1019+ NAS
T4xboOb8868 51:11 Adam Savage's Week at Weta Workshop, Part 3
4IWO-tuRnBg 14:31 Looking Glass Pro Holographic Display!
HuobWbxGfnY 29:31 Valve Index VR Headset In-Depth Impressions!
uvpGmiR5HnA 5:53 Mech Warfare with Airsoft Firing Robots!
RQEIGfHcDMg 4:17 Avid CNC's 4-Axis CNC Machines!
f7V14iY_4-E 4:41 Giant Flying LEGO Helicopter!
dA2ikno_4z0 3:40 The Fantasy Metal Creatures of Perkunas Design Studio
7uS7A4x31PY 34:16 Adam Savage's One Day Builds: Scratch-Built Spaceship!
2PGjTt4xkWM 3:06 Self-Solving Rubik's Cube Robot!
rjlYsDZUk3w 1:09:34 Adam Savage's Week at Weta Workshop, Part 2
m-pGHh9NNko 5:26 Show and Tell: Foam Starter Projects
_F5bIcT_rOc 31:26 Black Holes in Science Fiction Films - Offworld Episode 21
PRN3x5RqQ4E 9:55 Sophy Wong's Wearable Tech Projects!
4rzDdnlDOcc 45:53 Adam Savage's Week at Weta Workshop, Part 1
ng3Ivf0eZIY 16:02 Inside Adam Savage's Cave: Concept Art Reimagining Star Wars!
ABb_1WsxJFk 29:55 The Science of Starship Troopers' Space Bugs - Offworld Episode 20
aB8IJ6aLiSo 6:28 Projection Mapped Floating Head Kit!
fA-wOQM_5hY 16:02 Bits to Atoms: Starlords Arcade Cabinet, Part 7
TfwKYUmoC-k 5:02 Adam Savage's Computer History Collection!
y0R8-F4TmPI 8:09 Show and Tell: Animatronic Raven Kit!
S9xXE44ZZmY 29:38 Would Cyborgs Make Better Astronauts? - Offworld Episode 19
pn027jfK5fs 4:25 Realistic Flying Monkey Sculpture!
9RDpcRZaO8s 20:04 Bits to Atoms: Starlords Arcade Cabinet, Part 6
BteSyEo3GiM 27:45 How to Make Diorama Water Effects!
zIlTuZUL02I 9:03 Adam Savage's Top 5 Science Fiction Books
T6cAwHw1C4M 10:06 3D Printing and Molding the Key to Erebor!
peU_LMrwKAY 5:34 Ironhead Collectibles’ Striking Character Masks!
o1TArnQOzMw 19:29 Bits to Atoms: Starlords Arcade Cabinet, Part 5
djRZeAv4DeA 4:36 Custom Creature Model Kit Dioramas!
YBqqdHzA53A 6:54 The Silicone Creatures of Immortal Masks!
qfQPLUirCL4 5:50 The Shape of Water Creature Maquette!
QsXWn25EnwQ 5:57 Aurum FX's Destiny Blaster Props!
ad1Wmzcwa1M 42:53 Bits to Atoms: Starlords Arcade Cabinet, Part 4
ysoY-VKMBlk 5:49 Manas Workshop's Striking Creature Sculpts!
vCi5usulDIo 1:20:48 Adam Savage's One Day Builds: Swordmaking at Weta Workshop!
qqUxntC6Hu4 4:20 Hyper Realistic Daruma Dolls!
80iGijMPN9U 5:55 Creatures and Garage Kits at Monsterpalooza 2019!
FLC97Gh0BRM 32:48 How Would a Mars Sample Return Work? - Offworld Episode 18
rUdsoAIPaD0 25:39 Modeling the Key to Erebor for 3D Printing!
mtEu2fiMoWw 14:29 Bits to Atoms: Starlords Arcade Cabinet, Part 3
Ieu9bdbYeQU 33:26 Tested: Dremel Digilab LC40 Laser Cutter
XegCqbSK4TA 10:34 Show and Tell: Laser-Cut Orrery Kit
EuOJsm40Brc 7:40 Shop Tips: Tools for Punching Holes
vKcrtVt-cNU 27:59 Bits to Atoms: Starlords Arcade Cabinet, Part 2
1JyF9d9wXnM 26:01 Star Trek and The Golden Record - Offworld Episode 17
EQ1uYsyQ-uA 14:57 Restoring Classic Arcade Games in Mini Cabinets!
gm7Goyk4QSE 28:27 Bits to Atoms: Starlords Arcade Cabinet, Part 1
UYFChEd85YY 8:50 Custom Figure Clothing in Toy Photography!
pyV_eEmlZfk 18:29 Model Behavior: Acrylic vs. Oil Washes
F-i-YF9NdE8 23:54 The Potential and Problems of Spaceship A.I. - Offworld Episode 16
r8D1n6JzX1I 21:30 Model Behavior: Weathering a Model (Space)Ship!
AalujgiTnYo 6:57 Insta360 EVO Convertible VR180 Camera!
YcZRsFUA3jQ 5:05 Building Laser-Cut Miniature Wargaming Terrain Kits!
P67oL01urJU 42:29 Model Behavior: Making Miniature Wood Flooring!
T1Uez7Mj-w4 3:20 Adam Savage's King Arthur Armor Build: Epilogue
iqxZ_VpwEd8 10:23 Creating Blast Effects in Toy Photography!
d_R2Y7y6-Tc 5:00 Show and Tell: Clockwork Dreams Automata Kits
yBnQps8ZH0Y 29:49 How Would Space Politics Work? - Offworld Episode 15
e66jA45z3OE 20:37 Adam Savage's King Arthur Armor Build, Part 7
Q2PGhy_oLYA 11:49 Creating Snow Effects in Toy Photography!
oVAhC9HjiIQ 13:50 Prototype Toys and Vintage Collectibles Showcase!
aj861JuD2wk 7:36 Tested: GodHand Nippers for Plaster Model Kits!
vuTzDaIO178 10:26 Adding Lights to the Iron Giant Garage Kit!
OAPOE8eRAJw 24:21 Adam Savage's King Arthur Armor Build, Part 6
-qawJndVSJ4 19:52 Practical Effects in Professional Toy Photography!
0bvl1H-CpIk 8:59 Vintage Star Wars Collectibles Showcase!
L-PCcS1A9GM 5:02 The Cut and Sew Clothing in Mezco's 1:12 Figures
ffYpNr3PiOs 24:42 Adam Savage's King Arthur Armor Build, Part 5
djJIjkdJ77A 10:13 Internet-Connected ScreenTimer Project!
gIyykNaWrlM 2:44 Tested: USB-Powered Soldering Iron!
80QXP5ls850 6:18 Maker Spaces: Cirque du Soleil's Traveling Workshop
kkuePUZ3j24 16:31 Making a Real-Life RC Tank Soccer Game You Can Play!
ECAEuXDra7w 26:54 Adam Savage's King Arthur Armor Build, Part 4
-kdWUMA4Lqc 9:16 Tested: Behind the Scenes of Cirque du Soleil's Volta!
zcSIvvUcm5c 1:44 Adam Savage Reveals the New Tested T-Shirt!
oxI8SFkCz0I 28:08 Adam Savage's King Arthur Armor Build, Part 3
At7BZ1t7Cuw 12:39 Tested: Games in a Tesla with Atari Controller!
etLOLUowvPI 7:40 How to Build an SLA 3D Print Resin Curing Oven
fHFpKAv2Sk4 17:49 Adam Savage's King Arthur Armor Build, Part 2
eABESL7Ia6I 7:08 Tested: Sony 1000XM3 Noise-Cancelling Headphones
742wx_H-VIo 29:11 Star Trek: Discovery Season 2 Discussion! - Offworld Episode 14
Ek76Q0SEvC0 22:53 Tested: Dremel 3D45 3D Printer!
vib1-V8ArzM 33:53 Adam Savage's King Arthur Armor Build, Part 1
Lo3E25GXCEw 10:03 Making a Light-Up Miniature SXSL Sign!
_zIFAi5gz2A 16:34 Modeling Achilles' Sword for 3D Printing!
GQevJ_9W55s 9:19 Show and Tell: Pip Boy 2000 Mod!
IEZX3-A63RY 11:33 Adam Savage's Blade Runner Blimp Replica!
tP8xbr_hn6U 6:13 Tested in 2018: Favorite Coffee Table Books!
dVSu-WWe5XY 4:43 Tested: Tilta Wireless Follow Focus Lens Control System
2xntfsLWlDg 11:45 Maker Spaces: Kinetic Sculpture Artist Nemo Gould
J1mEMmY2ZB8 1:03:38 Peter Jackson and Christian Rivers on the Making of Mortal Engines!
jbuB1LpNupQ 18:51 Adam Savage Wears Lumecluster's Phoenix Gauntlets!
WauW_IMUioI 6:50 Classic Children's Television Puppets and Props!
lLBrhDqof7A 9:05 Classic Science-Fiction Television Hand Props!
kK0LDHPZxvw 12:11 Batman (1966) Props and Costumes!
7oGslDjTnHI 29:33 Adam Savage's One Day Builds: Mortal Engines Hand Cannon!
K4mxREx11Fo 31:28 In-Depth with The Visual Effects of Mortal Engines!
KwT0aZd2PQM 7:34 The Kinetic Sculptures of Nemo Gould
6iIZ9rnS6HU 1:02:24 Adam Savage's One Day Builds: Eric Idle's Guitar Case!
CDn91YfTZzI 9:19 Shop Tips: Drill Bits
AqLVpBb2gGw 10:58 Simone's Every Day Calendar
GlX72rwmHAI 5:29 Shop Tips: Learning Injection Moldmaking
t3Ktff1Bui4 21:41 Modeling a Judge Dredd Helmet for 3D Printing!
tCIGE-aTzw0 6:11 Incredible 'Steam Siege' Custom Gundam Diorama!
WfHcNntVb3E 19:18 The Martian Spacesuit Project Lives!
u1GKS-eMoGk 6:36 The Striking Poster Art of Jason Edmiston
AG5DEe4eWa4 5:07 The Makers of the Harry Potter Pop-Up Book
TbbwHoexcss 4:51 The Pop and Poster Art of Tom Whalen
VXGcwEntYJk 24:58 Adam Savage Meets the Spacesuits from First Man!
Cc0HvlmAuAY 26:00 How Could Genetic Engineering Affect Space Exploration? - Offworld Episode 12
qBBpnSY5cqY 5:29 XM Studios' Samurai Batman Statue!
1zGvioP_-_I 8:37 Adam Savage's NASA ACES Spacesuit Replica!
L-D8MBphXN4 16:11 Alan Eustace's World-Record Stratosphere Jump Pressure Suit!
5B3IgefQ-QU 3:41 Adam Savage on The Problem of Recasting
N1CKRNv2ivk 9:13 Adam Savage's Starchild from 2001: A Space Odyssey!
CkImNCToc9w 10:47 Meet the xArm 7 Programmable Robot Arm!
oLSt0Q-2Bdo 19:53 What Would "First Contact" Be Like? - Offworld Episode 11
rOmdQQCVjjI 22:44 Adam Savage Meets Barnaby Dixon's Puppets!
-aMEm9uxFh0 20:46 Aftermarket Lighting Upgrades for Model Kits!
Szc2yDh6IDU 6:29 Accucraft's Model Steam Trains
p5X_z2z8oXc 5:09 Scratch-Built Model Steam Trains!
2O4-b6bFBpg 3:01 Adam Savage's Least Favorite Material for Making
hv9E3INSgd0 14:32 Awesome Model Trains with Steam Locomotives!
eyszbfcbeMk 15:41 3D-Printing a Custom Wonder Woman's Tiara for Cosplay!
RXm3HJ4MASQ 8:41 Laser Cutting a Westworld Data Card!
Ly5ZDcX1tuo 3:46 Tested Mailbag: Human-Scale 3D-Printed LEGO!
Y09ET7bpE1A 8:37 Collecting Material Samples for Your Workshop
ZfvtGrhYk0I 26:44 Adam Savage's One Day Builds: Kit-Bashing and Scratch-Building!
Pta2RH9_umA 4:41 Tested Mailbag: AT-DP Garage Kit!
QyTzTGsySqo 17:41 Assembling the 2,500 Piece 3D-Printed Sculpture!
JtV_-cLBoH0 4:38 Show and Tell: 2001 EVA Pod Model Kit!
-5PhT20VC7o 11:46 Designing the National World War I Memorial Sculpture
6HJarJg1npk 11:07 Custom Model Paint Racks for the Tested Workshop!
MxLOoriXkMc 46:22 Adam Savage's One Day Builds: Overengineered Bottle Opener!
0AVVXNKHDUw 11:34 Tested: Formlabs Wash and Cure Stations
xVYmQlUZfVM 22:22 3D Printing in Multiple Colors with the Palette 2
ebQU7GipJcA 17:50 Weta Workshop Sculptor's Tabletop Miniature World!
cxrpog9KOEo 1:04:27 Making a Mechanical Pong Game!
YDJQyn8F1yc 15:25 Color Grading a Short Film with the Blackmagic Micro Panel!
7MRb1VqX0ag 23:20 How Dangerous is Orbital Debris? - Offworld Episode 10: Gravity
XJ9c1OcuJ7Q 18:36 3D-Printing a NASA ACES Helmet for Adam Savage!
Aq57iMONXV0 5:11 Awesome Animated LEGO Sculpture!
RbxEQ6HnH-g 12:29 Adam Savage Paints an Astromech for Magic Wheelchair!
q1tL6-xCTN4 12:42 Weta Workshop's "The Scale of Our War" Exhibit
n6gDoxxq_4w 4:46 Impressive LEGO Dystopian Monorail City!
2AKXyD18DBo 7:11 Star Trek: Discovery Ship Models from Eaglemoss!
GEhBPI2QVBI 0:34 Last Call for Adam's One Day Builds T-Shirt!
QCBcWm85gWo 15:33 Adam Savage's One Day Builds: Kit-Bashing a Robot!
2n5YCFhHjqA 6:47 New 2001: A Space Odyssey Discovery Model!
h7tz689ZsIM 9:37 Star Wars Star Destroyer Model Replica!
KGsr4NPr_Uw 10:19 How the LEGO Voltron was Designed!
o9AoaPXPQiA 5:03 Weta Workshop's First Mech Model Kit!
XV7qb5Ct3J4 6:30 Adam Savage presents: “A Farewell to Arms”
7LxFtGqyDls 10:28 Studio-Scale Star Trek: Discovery Starship Models!
BpaYqFd5S5c 0:48 Adam Savage's New "One Day Builds" T-Shirt!
WnJDYjbWCwI 1:10:53 Adam Savage's One Day Builds: The First Spacesuit!
LlvOUpXPIjM 4:04 Minifigure-Scale LEGO Saturn V Rocket!
jzfktNl2Y0k 27:25 Let's Paint: Dinosaur Garage Kits!
bbtka70PGWE 10:21 Tested: Kessler Motorized Camera Slider!
OVGbp9ZkXHg 28:00 Loneliness in Space Travel? - Offworld episode 9
AXzurpmc8SE 39:15 Adam Savage's One Day Builds: Everyday Carry Bag!
3EQX8M9cI38 8:00 Weta Workshop's MOOSE Attack Robot from Chappie!
eJqjGHAfm6E 6:40 Weta Workshop Artists Make Custom 'Giant Killer Robots'!
HgQgGzUzgKI 30:53 How to Apply Zombie Prosthetic Makeup!
2we_2-WS344 38:28 Modding 'The Getaway' Pinball Machine!
dncRHH9f6MI 3:14 Adam Savage Explains the Universal Greeblie!
PGmFOnSGjrA 35:18 How to Make Miniature Underwater Dystopian Cityscapes!
lF_2B47Guts 21:35 What's Needed in Space Robots? Offworld episode 8: WALL-E
2ZjxvW17cZ0 19:21 Adam Savage Builds a Onewheel Electric Skateboard!
mqxP_SvseXU 8:09 How to Make a Laser-Cut Prop Stand!
3b_0pJTKWGo 35:53 Painting Robot Kits to Look like Rusted Metal!
mu2usjcYeZM 6:36 Show and Tell: Laser-Cut Sixth-Scale Scooter!
9U3tmOGhYQA 41:47 Bits to Atoms: The Co-op Quadcopter Challenge!
0Y_h8QOjH5g 3:31 REMIX: 1000 NERF Balls vs. Dinosaurs
i631vjJnqJw 12:11 Mind-Controlled Plumbob Crystal from The Sims 4!
G7MDrUG4cws 36:59 Adam Savage's One Day Builds: 1000 Shot NERF Blaster!
E10407LU3NY 19:12 Bits to Atoms: Adding Smoke and Sounds to Toys!
l7-bZbePQKE 5:58 The Modelmaking of European Train Enthusiasts! Drifting with Adam Savage and Zoe Bell!
wHtTzCGe9hI 10:05 Show and Tell: Destiny-Inspired Airsoft Mod!
AoZa3DQZNds 6:31 3D Printing Multiple Colors with Prusa i3's Upgrade!
s8hP2-f_66Q 14:08 Tested: Indoor Skydiving with Virtual Reality!
M89MIJiWljo 4:13 Model Trains with Working Steam Engines!
32y7W29Cync 7:24 How the Prosthesis Mech Works!
aZVFluepenM 20:58 What's Changed in Astronaut Culture? Offworld episode 7: The Right Stuff
Gm9aZv2tiFs 4:01 TapGlo Light-Up Ping Pong Table!
zqXpbqrfrfY 6:39 Dremel's Laser Cutter: What You Should Know
mAeXBaAqyvE 3:44 Google AIY Kits for Experimenting with Artificial Intelligence
qS9a9h4qk30 3:00 Custom-Built Live-Streaming Arcade Cabinet!
XE-oFwSRhek 7:13 Awesome Fallout 4 T-60 Armor!
bZ6XLACOtUo 6:10 Kitbashing Model Spaceships with Snap Ships
b1zuO_piTfQ 3:38 Hacked Star Wars Landspeeder Toy Car!
krTMy64VusE 14:25 Adam Savage's Maker Faire 2018 Talk!OZ4YKLVoFzs 33:41 Bits to Atoms: The Pi Score Arcade Cabinet
2Xfr7_UxioE 7:11 Paint Masking Using a Laser Cutter!
Ydh0lnHiTKs 14:44 Tested: How To Photograph a NASA Rocket Launch!
38H41lwZP14 12:03 Adam Savage's New Warcraft Armor!
_feYE4YYuyI 13:31 Star Wars Studio Scale Y-Wing Model!
MZAtxIm9ukM 16:21 Tested at the NASA InSight Rocket Launch to Mars!
pZvZypeDPkY 19:10 How Could Alien Communication Work? Offworld episode 6: Arrival
Uayaya9x3kc 1:24 Adam Savage Build Tip: Airbrush Anatomy
rRSD3h0PooU 1:47 Adam Savage Build Tip: Protecting Chrome Paint Finish
_pPtEA3d2mY 1:50 Adam Savage Build Tip: Using a Scroll Saw
9XB4Be6TjHU 55:21 Adam Savage's One Day Builds: Snub-Nosed Blade Runner Blasters!
FaQNtcxmJKY 3:19 Star Trek Tricorder with Working Display!
83NLPlACMus 4:38 James Bond "Moonraker" Prop Collection!
K-8zSrByqH4 0:57 Adam Savage needs your help for his next build!
69PIm52Jrss 8:46 Inside Adam Savage's Cave: Ghost in the Shell Props!
JJjw1VvXJ0U 5:13 The Creature Art of Akihito
OUFsT2RYk84 6:56 3D-Printed Sculptures Made in Virtual Reality
f72i6JJLYcE 8:14 Realistic Frankenstein Monster Sculpture!
6_DkHsFBDs8 7:08 Turning Art into Collectible Statues
RHSNyJGlB1Y 5:40 The Concept Sculptures of Simon Lee
cnSmc91hY2s 6:53 Fantasy Sculptures of the Shiflett Brothers
3l6V_DtkOps 7:56 The Creature Model Kits at Monsterpalooza 2018!
eebeOIE-Lr4 6:55 Designing Wolverine's Costume from X-Men 2
J8aWOwfXBng 5:53 Testing the Tilta Gravity G2X Handheld Camera Gimbal
ZXKHIwg0cmM 6:22 Fallout Pip-Boy 1.0 Prototype Prop!
3YwyrpHgii0 7:19 Ghost in the Shell and Warcraft Props from Weta Workshop!
UwFyrxoCvDQ 4:53 Creepy Minion Costumes at Monsterpalooza 2018!
j1GwZhUQWDA 1:13 We're Nominated for Webby Awards!
dAOZa7JYnsw 9:05 Adam Savage Repairs Totoro Cosplay!
oJ2Bs3qieJw 12:15 Adam Savage Incognito as the Knights of Ren!
sNr4VrKslEE 23:07 Alien Life in Our Solar System? Offworld episode 5: Europa Report (2013)
1_aVYTabJDo 5:11 Life-Size K-2SO Puppet Cosplay!
JL3uZ88vA_0 19:54 Adam Savage's One Day Builds: Custom Workbench LED Lamp!
BYQ7MXhg1GY 9:52 Show and Tell: Laser-Cut Memory Sphere Display
F48rk7h-GDo 35:33 Adam Savage's One Day Builds: Foam Ringwraith Gauntlet!
eZTx6G8z9wA 22:44 Worst Space Billionaire Plot? Offworld episode 4: Moonraker (1979)
xj6XRUj81Zw 15:54 Testing a Laser-Cut Mini Boat!
P99037H-Bac 26:14 Storyboarding a Stop-Motion Animated Film
RHbLEgmQjcQ 23:22 On the Shooting Set of Aardman Animations' Early Man!
MBdOPgsfdGA 12:29 Designing the Stop-Motion Sets of Aardman Animation's Early Man!
MBoQPTdOLlQ 4:23 Show and Tell: Augmented Reality Model of the Moon
eNnjpTXdiJ8 4:57 Tested Mailbag: Mercury Spacesuit-Inspired Shoes
NnmwaTVihAM 6:24 Organizing a Stop-Motion Film Production at Aardman Animations
g_RGiFrnK8Q 12:43 Giant LEGO Computer Console Model!
wGa-eBLH11Y 15:08 Animating Stop-Motion Characters at Aardman Animations
4n1HO1THh8I 6:54 Show and Tell: Fat Shark 101 FPV Quadcopter
tIX15aiy4TM 6:02 Adam Savage Meets Aardman Animations Director Nick Park!
stSYs7a2UHE 23:11 The Stop-Motion Puppets of Aardman Animations!
Hy3SErA6R_M 22:18 What's Space Camp like? Offworld, Episode 2: Space Camp (1986)
E5t_DXgZmFM 10:15 The Clay in Stop-Motion Animation at Aardman Studios
a5idlVDdwls 4:34 Tested Mailbag: Power Loader LEGO MOC!
SvHLsI4OfdA 13:23 Testing the Shaper Origin Handheld CNC!
xNjbYwXaPDI 26:03 How are we searching for aliens? Offworld, Episode 1: Contact (1997) with Dr. Jill Tarter
YoM1e7_hWIA 6:33 Inside Adam Savage's Cave: Gods of Egypt Stunt Weapons!
Qsdns4hhAxk 4:17 Show and Tell: Microscape's City Miniatures
wl558EoTuEQ 30:19 Adam Savage's One Day Builds: Blade Runner 2049 Binoculars!
wHvLlH-aZxI 3:52 Our Favorite Projects with Frank Ippolito!
nM8OCxceK2E 10:37 Plasma Cutting a Tested Logo Sign!
J8V9ZMjP9As 3:53 Adam Savage Opens His Imgur Secret Santa Gift!
xguSbuThulc 9:48 Adam Savage Opens His Reddit Secret Santa Gift!
8OTwT0WFBmg 27:58 Building a CNC Router and Plasma Machine!
DWu9z20_h-o 29:40 Testing: Multi-Material and Multi-Color 3D Printing!
_8RN01G-fuU 13:01 Behind the Scenes: LED Studio Lighting in Tested Productions!
BDZDJaj_vOk 9:44 3D-Printing the Star Wars Battlefront 2 Messenger Droid Helmet
kz1Sa3JjmYI 2:07 Tested Mailbag: Surprise Christmas Tree Ornament!
vdPh-6IREWA 1:00 We Need Your Input and Feedback!
IMg6uiTZG8g 7:00 Making a San Francisco Sutro Tower Scale Model!
hOe7VPUQHJU 15:08 Tested Live Show 2017: Mechanical Pong!
42ZXaL-oU60 24:09 Tested Live Show 2017: Science Friday's Undiscovered
FNPn7B6n-Iw 15:39 Tested Live Show 2017: The Most Important Part of Sausage
7O4vfA03h-Q 9:28 Making a Body Form for the Star Wars Battlefront 2 Messenger Droid Cosplay
Ix_eKtEYZFw 17:52 Tested Live Show 2017: Allen Pan Deconstructs Thor's Hammer!
0UVHiVy9jjk 13:48 Tested Live Show 2017: Simone's New Applause Machine!
0CotcLbm1jE 13:25 Adam Savage's LEGO Han Solo Blaster!
S9Jvf5EzCGI 13:37 Tested at the BALLS 2017 Rocket Launch Event!
OHfHzAz70gU 14:42 Glen English's Scratch-Built Motorcycle Replicas
Yirumj7Ftr8 7:37 Making the Creature Costume for "Yoshua"
A7u1CVe9BYE 23:08 The Making of Adam Savage's Chewbacca Mask!
F1PI1FOYJoM 10:43 Lifelike Animatronic Abraham Lincoln!
7Rt6ohHQg6M 15:26 Adam Savage Explores Star Trek Costumes and Props!
cNysz0nnopk 16:45 Regal Robot's Awesome Star Wars Furniture and Art!
sw_xSzgoFmU 15:56 Adam Savage Learns about Prop and Animatronic Restoration!
OU7RIwQpzzo 6:27 Adam Savage's Maker Tour: Making a Wooden Bowl
I88amr7JpwQ 6:04 Scatch-Built Miniature Models of LA City Streets
Qr1p5R6KU8s 7:15 The Art of Custom Mechanical Keyboard Keycaps
INRnuut6nTE 8:07 Artist Jason Freeny on Toy Design and His Anatomical Sculptures
IdaX96pvI1E 32:13 Adam Savage Tours the Jim Henson Exhibition!
nsy7P48EL2o 8:36 Adam Savage on Blade Runner 2049's Massive Water Set!
OgCggQ7RY6w 5:10 Heavy Poly's Hoverbike Resin Garage Kit!bmuw3BqTX8Y 9:17 Adam Savage's Maker Tour: Lower 48
pLfo8f11uVY 8:23 Rock-afire Explosion Billy Bob Figure Prototype!
6VhU_T463sU 5:05 The Making of Hela's Headdress from Thor: Ragnarok
p0ACKtJgXpM 8:50 Sculpting the Star Wars Battlefront 2 Messenger Droid Mask
eaJhTDkR-Pk 9:46 Machination Studio's Mechanized Armored Walker!
zMsBtOPMeIw 2:41 Adam Savage Explores the Blade Runner 2049 "Farmhouse" Set!
bmUtS3KAb0A 4:39 Adam Savage Visits The Crucible Maker Space
3F1fHnXmxLg 14:13 Adam Savage's Maker Tour: NIMBY
XzTg8-ZST50 9:44 Inside Adam Savage's Cave: The Deep Blue Bag
XINwlwgprBM 5:26 Star Trek LCARS Mechanical Keyboard from Roddenberry Entertainment!
1fAk0CObPE4 21:15 Adam Savage Explores the Props of Blade Runner 2049!
U5rlLL7cOtw 15:06 Adam Savage and Vsauce's Michael Stevens Geek Out Over Watches
Vs4HqezCbE0 5:41 Star Wars Battlefront 2 Messenger Droid Cosplay!
c_9iv9HwO5Q 6:32 Adam Savage's Set Tour of the Blade Runner Universe!
kXVZF41-Fp0 19:41 The Orville's Krill Makeup Demo at KNB EFX!
bt03QFQ0koU 4:47 The Weird World of Bootleg Toys
oTiWLYKXuQ0 6:52 Toyqube: Turning 2D Art into Sculpted Collectibles
itBGEiGTr00 13:31 Adam Savage Incognito as 2001: A Space Odyssey's Moonwatcher!
cXQUObfBXYk 5:48 Adam Savage Becomes an Extra in Blade Runner 2049 Short!
ZTNOGfr7QFU 7:49 Star Wars Slave I Studio Scale Model Replica!
CU0B5XdzEwY 8:11 Star Trek Starships Collection at NYCC 2017!
FqdsYn9TdWQ 8:05 Adam Savage Examines the Blade Runner 2049 Blasters!
qSX9hhHU2xg 20:54 Adam Savage's Maker Tour: Ponyride
CfbGxtE7-LU 8:27 Futuristic NASA Spacesuit from 'The Martian'!
Owa7wVAdkA4 1:08 Announcing Tested: Deconstructed Live Show!
gc1x1CexBKI 35:46 Let's Build: LittleBits Droid Inventor Kit (with Anthony Carboni!)
VZ-5U1xGEb0 20:02 How To Make a Silicone Brush-Up Mold!
CEcrgOuBiUM 12:00 Adam Savage Explores the Science-Fiction Spacesuits of FBFX!
QKlrY33asnE 8:47 Adam Savage's Maker Tour: Incite Focus' Open-Source Adjustable Table
H9L3pX8zTPE 10:27 Adam Savage's One Day Builds: Cave Bathroom Upgrade
SnWAF7vNbaM 4:18 Adam Savage Listens to his Vinyl Record Test Pressing!
IQZFmozrdaA 29:52 Adam Savage's Maker Tour: Incite Focus
XWqiGi-KSSE 52:39 LEGO with Friends: UCS Batman Tumbler, Part 1
8qvlpRBeMNY 25:19 Adam Savage's One Day Builds: Foam Cosplay Sword!
r3Vh5Xj9K_E 13:08 Casting a Glow-in-the-Dark Slimer Model!
m16_lObyanw 3:23 Announcing the 2017 Tested Premium Community Gift!
1qg5s-LPvrE 7:33 Starlord's Hero Helmet in Prop Store's Live Auction
j9uRckJLqLk 8:36 The 3D-Printed Curta Calculator
T_mwsQCHU74 11:08 How To Use Spray-On Chrome on Resin Castings!
1won7AYden0 7:02 Adam Savage Gets Scanned and Replicated in Foam!
9YIQgfk0Hcc 1:23 Shop Tips: Storing 3D Printer Filament
EZX9spm4LU0 4:23 Adam Savage's New $30 Blade Runner Blaster
YNqamYSvPOM 7:03 Simone Giertz Goes to CERN!
Fef_lS6nm70 13:31 Making a Large Laser-Cut Dymaxion Globe!
JtKi8lNSqvw 30:32 Adam Savage's Maker Tour: MIT's Center for Bits and Atoms (Part 4)
GPwY7O8HS5k 9:40 Adam Savage's New Thracian Warrior Armor!
SyDJRxDLV14 17:11 Phil Tippett's Lost Star Wars Holochess Figures
1ah2oALAk0Y 4:34 Adam Savage Meets Alien: Covenant's Xenomorph Animatronic!
kyywuojz8f0 7:58 Adam Savage's Maker Tour: MIT's Center for Bits and Atoms (Part 3)
-1YEigQ8ch8 15:05 Laser Cutting the Maker Puzzle, Part 3
i8GD33DsRw8 58:11 Adam Savage and Vsauce's Michael Stevens Build a Kendama!
IeO2yamsjiQ 16:34 Adam Savage Incognito in the Alien: Covenant Spacesuit!
WcS7RsPTiUY 50:31 Building an AMD Ryzen PC for Video Editing!PF4A4wdnXkU 27:45 Adam Savage Visits Third Man Records!and VR Cover
dnGoJv3vmLs 3:12 Bandai Perfect Grade 1/72 Millennium Falcon!
HqwiZZ-uPDc 4:53 Anatomy Tools' Sculpting Reference Maquettes
BGlcF4Bpg78 37:01 Adam Savage's One Day Builds: Excalibur Sword!
44Hjx9uf1hI 6:02 The Scratch-Built Mech Model Kits of Luca Zampriolo
NZeEtF1jmfM 6:00 UD Replicas' Detailed Superhero Suits
pY3Dwq4HOYM 4:40 Adam Savage Explores David's Lair in Alien: Covenant
fdbdvlIrtg4 17:21 Magic Wheelchair Makes Awesome Costumes for Kids
_PysPtkCtkg 5:57 The Stop-Motion Puppets of Laika Animation Studio!
vI8E4cda_ww 9:21 Adam Savage Meets Richard Browning's Flight Suit!
8deORCW6Qiw 6:30 Star Wars First Order Stormtrooper Blaster Kit!
u-BxRb89Qsc 14:35 Adam Savage Geeks Out Over Weta Workshop Props from Spectral!
uyYeMQ3otZI 7:58 Making The Lich King Armor for Blizzard!
px2S_2TdBq8 14:50 Making a Star Wars Battlefront 2 Helmet for Janina Gavankar! (Sponsored)
_kFC0CBjk1Q 16:05 Adam Savage's Maker Tour: MIT's Center for Bits and Atoms (Part 2)
SKj3wlpYx8E 11:16 3D Printing Molds for Silicone Masks!
jMyUi_umDZg 14:07 Tools and Techniques for Repairing Broken Camera Lens Filters
RaHMDNf56W4 9:26 Adam Savage's Maker Tour: MIT's Center for Bits and Atoms (Part 1)
CiL8GTXsL8M 8:15 Automated 3D Printing with Form Cell!
yhJUh4QUe5Y 5:35 Adam Savage Visits Black Girls Code Workshop!
gY-9LEKobAw 18:01 Laser Cutting the Maker Puzzle, Part 2
J4qI8RC7QrM 7:37 Adam Savage Removes Camera Lens Filter with Band Saw!
Yud8-l68vm8 14:09 Tested's Media Management Workflow!
a-FHY5FNsWc 12:03 Adam Savage's Maker Tour: Making a Metal Fidget Spinner
p8npZuQdf0Q 5:18 Tested Celebrates National Week of Making, Day 7
GY1It4I7JXA 5:31 Tested Celebrates National Week of Making, Day 6
JXS1oV1ESYE 3:57 Tested Celebrates National Week of Making, Day 5
hxqn0RJIQn0 2:23 Tested Celebrates National Week of Making, Day 4
tW_z6MZ1kyk 22:07 Adam Savage's Maker Tour: Artists of Artisan's Asylum
9GEVucnjcrw 6:17 Tested Celebrates National Week of Making, Day 3
SrRW6W0k6J0 3:23 Tested Celebrates National Week of Making, Day 2
PQEBEWm1gOc 2:59 Tested Celebrates National Week of Making!
0vfuOW1tsX0 27:12 Alonso Martinez's 3D-Printed Animated Robots!
dqmF2_h8icM 38:35 Adam Savage's One Day Builds: A Better Tape Dispenser!
lp39A2qPGQk 2:06 Shop Tips: Identifying your Fasteners, Nuts, Bolts, and Hardware
8lT-nHeKR9g 9:55 Building a Working Miniature Apple II Replica!
6IXD_d8OcF0 26:26 Adam Savage's Maker Tour: Artisan's Asylum
JnnqmxHF1QE 8:04 Adam Savage Assembles the Maker Puzzle!
M2bx_q1P4AM 4:58 Customizing a Pelican Case with Our Laser Cutter!
IrFYt3uUdrI 18:34 Formlabs Fuse 1 SLS 3D Printer Demo!
xpkcg2K6Ras 16:53 Adam Savage's Maker Tour: 49ers STEM Leadership Institute
UxtUrloLlm8 20:08 Adam Savage Builds the LEGO NASA Apollo Saturn V!
lQe4vm3DobA 6:45 Adam Savage's New Moon Model Globe
ZGTnFohXGWg 4:41 Tested: HTC Vive Deluxe Audio Strap
fTM-0tevCBM 8:59 Behind the Scenes: The Makeup Effects of Alien: Covenant!
ifhYsCxj2CU 12:00 Cooking Sous Vide with ChefSteps Joule
O3WAdt_yksg 14:58 Laser Cutting the Maker Puzzle, Part 1
Y6ALUsXcZZU 5:27 Tiny Playable Arcade Cabinet Kit!
ABK00ZncNG8 5:23 Restoring Showbiz Pizza's Animatronic Robots!
aoS1iKaiWPY 4:04 Prusa i3 3D Printer Upgrade Prints 4 Colors!
i5h821pEA0Q 5:59 CNC Router That Runs on a Robot
ZKmJ1x2xfbY 3:48 Behind the Scenes: The Sounds On Set of Alien: Covenant!
wznaCyVBnxw 7:19 Working 3D-Printed Car Engine Models!
gL5llIO3NcU 18:54 The "Monolith", a Teensy-Powered Interactive Synthesizer!
8n8ywfqdGyE 57:59 Adam Savage's Maker Faire 2017 Speech!
1TtYKEhLt9A 15:02 Tested: Fujinon's 18-55mm Cinema Lens
puOgFtOVhLA 18:21 Adam Savage's Maker Tour: Stanford Adolescent and Young Adult Cancer Program
y60q6U7NjTQ 19:43 Meet Maslow, the $350 CNC Cutting Machine
R_p9z-tRzCs 20:57 History of the Camera Lucida Drawing Tool
1JOSSwuOpZk 1:14 Announcing a New Show: Science in Progress!
4ikfAQeMx5o 8:34 Tested: RIVER Mobile Power Station
i_kr8mAM5Dg 7:54 The Creature and Special Effects of Alien: Covenant!
9xpPXpnnCNI 39:25 Adam Savage's One Day Builds: Chewbacca and C-3PO!
x9YUO7QeitU 7:51 Simone Giertz Tests the Makey Makey!
hcBMnlPte9Y 9:33 Adam Savage Puts On Alien: Covenant's Spacesuit!
RCW_7-odq_4 6:49 Tested Mailbag: Terminator Props and Costume!
MTEyz_8Aiwc 18:19 Adam Savage's Maker Tour: Albert and Tina Small Center For Collaborative Design
TF9bf9uKQQk 14:12 Adam Savage Cooks the Impossible Burger with Traci Des Jardins!
YyDMlXEZqb0 5:54 Tested: Thermal Imaging CPU and GPU
nhJQSUwcHEs 11:46 Alien Covenant's Armor, Weapons, and Blood Effects!
H6JQesX0tFA 8:38 Adam Savage Incognito: Double Totoro!
JSdFnM_rPMQ 3:12 Tested Mailbag: Foam Props!
5ckzgnAU33Y 9:27 Adam Savage's Maker Tour: Travis Early College High School
99agf1QHSwI 11:03 Adam Savage: The Enemy of Science is Bias
f5gxApaRczQ 5:02 Adam Savage Behind the Scenes of Alien: Covenant!
UhIdclSF_qs 11:40 Adam Savage Incognito as Chewbacca with C-3PO!
mX2tsl_lLXw 15:59 Adam Savage's Maker Tour: Thinkery
2VLx7e9glwc 6:17 VertVixen's 3D-Printed Lich Queen Armor!
Ey4plfNX9xM 5:35 Intricate Animatronic Music Boxes!
7hJEuWAfSPY 10:22 Maker Spaces: Touring Frank Ippolito's Upgraded Shop!
WpOSKRmTap8 3:12 Adam Savage Gets 3D Scanned on the Expanse Set!
ik4r2pGMsog 7:42 Fan-Made Tomorrowland Jetpack!
7m6qKjD0wKE 1:48 Adam Savage Demonstrates Blind Spot Detection Technology
T7c5kFSEk3s 11:36 Making a Life-Size K-2SO Droid Puppet!
Zv7xOAxk6Mc 6:46 Adam Savage's Maker Tour: Carnegie Mellon's IDeATe Lab
3KfsGHDenNA 3:21 The Creature Effects of Pat Magee
4yqX-P6PKkk 7:53 Making Superhero Costumes for Hollywood Films
PaJ2CtTsk8I 6:15 Creature Sculpting and Concept Design at Monsterpalooza
sgfYJj8_pNg 1:13 Adam Savage Tests Lane Keeping Support
IPcWWYTzqv4 9:54 Nick Marra's Incredible 'Quint' Sculpture from Jaws!
mEfTi57pXSE 3:11 Adam Savage Chats With The Expanse's Wes Chatham!
4ZUJqEd_AXM 4:47 Mike Hill's Bride of Frankenstein Sculpture
QpuT92ymy3Q 1:28 Adam Savage Experiences Crash Imminent Braking
MEqKTjE50FI 6:48 Hyper-Real Ren and Stimpy Masks!
jQ1v_ONZo98 14:47 Adam Savage's Maker Tour: Human Engineering Research Laboratories
2atm-Iq_ww0 14:03 Monsterpalooza 2017 Walking Tour!
-YmBm7alNKU 7:26 Catching Up with BB-8 Droid Builders at WonderCon 2017
MNc74kTzVyQ 6:46 Star Wars Mouse Droids Fan Builds!xKtQ-fplUgo 1:42 Adam Savage Shoots an Expanse Prop Machine Gun!RAhXfv4XbLg 1:18 Adam Savage Tests Forward Collision Warning
ZGR1NDNSROI 9:16 Simple Science Project with Physics Girl!
8nWJSwkhxdI 4:58 Original Power Rangers Helmet Prop!
-YxRzUVhpkM 5:32 2001: A Space Odyssey Discovery Model Kit!
FxsPtEzCC1k 1:03 Adam Savage Demos Pedestrian Automatic Emergency Braking
LeAidkWM8tU 5:17 Adam Savage's Maker Tour: Carnegie Science CenterEpGYkb4s_1M 20:09 Walking Tour of WonderCon 2017!
S7FG0Jv15jg 2:43 Adam Savage Prepares for His Expanse Cameo!
a-HKrbPRSVM 17:32 Tested Arctic: A Short Film
xT9wpjhbDLw 11:00 Adam Savage's Maker Tour: Elizabeth Forward High School
1nqzrpq4jVU 1:07 Adam Savage Is Joining the March for Science!
Lk6g7mSMFUs 7:29 Show and Tell: Our New Shop Laser Cutter!
HwJdYxRwxoo 18:59 Modelmaking Toys with Virtual Reality Sculpting
oXphx5mpv5k 1:13 Shop Tips: Using a Durometer Tester
Yq7r3HFCCq4 9:21 Adam Savage's Maker Tour: Children's Museum of Pittsburgh
uYAGDfXPRzU 28:32 Tested: Blackmagic URSA Mini 4.6K Cinema Camera and Color Grading
WxUoqIrXd9E 6:45 How Weta Workshop Made Ghost in the Shell's Robot Skeleton!
2sRXD2VHd30 14:28 Adam Savage Embarks on His Makerspace Tour!
hlUQgj2jhzs 6:44 Adam Savage's SXSW Makers Scavenger Hunt!
BdQNUeuDpxE 5:21 Making a Better Nintendo Switch Stand!
YKufwAJxumE 0:41 Shop Tips: Keeping Your Digital Scales Clean
nbCyXVEVpKk 5:50 How Weta Workshop Made Ghost In The Shell's Thermoptic Suit!
tjgkCf4G9R0 15:32 The Work in Process: Vectorizing Drawings for Laser Cutters
KosBvDyWgnA 13:34 Adam Savage Behind the Scenes of Ghost in the Shell!
TU3q_rXMHz8 4:11 Show and Tell: Weta Workshop's Giant Killer Robots Board Game
jitCQtP4npY 4:43 Tested: Positive vs. Negative Air Pressure
1gJ4_Hc17cM 35:38 Adam Savage's One Day Builds: Chewbacca's Bandolier!
ez1oPe0pMiA 25:51 How To Mold and Cast Foam Props!
kE_e323FofM 12:37 Tested: Sony a6500 Mirrorless Camera
EPe93qavQFc 2:10 Adam Savage Catches Lightning in a Bottle - Unimpossible Missions
LWktnug6J2I 4:10 Shop Tips: Using Spray Paint Nozzle Tips
cwOXSXkW-uE 31:49 Adam Savage's One Day Builds: Custom NERF Rifle
QXwe51lkJ6M 11:35 Adam Savage Examines the Props and Spacesuits of The Expanse!
-fJoWSOYn6U 5:00 Adam Savage Explores the Costumes of The Expanse!
K-YoOYEzuws 3:17 Adam Savage Talks to a Wall - Unimpossible Missions
XuBo_lHvgjQ 3:38 Shop Tips: Cutting Foam for Propmaking
-HfaLqmRO1k 21:52 Adam Savage's One Day Builds: Ping Pong Machine Gun!
DzQJ-h2UJDc 4:04 Simone Giertz Laser Cuts Her Secret Santa Gift!
Ymux31cmZcU 2:53 Adam Savage Gives a Snowball a Chance in Hell - Unimpossible Missions
lSl-dgvmg68 4:24 Shop Tips: How To Properly Clean Your Paint Brushes
4Ir4y2JwbEw 26:28 Tested: Driving the Chevy Bolt Electric Vehicle!
J4HSmv5PLeo 11:19 How MegaBots is Building a League of Giant Fighting Robots
oOhN9Q3Y1fM 2:39 Adam Savage Unrings a Bell - Unimpossible Missions
p4vRNjur7nc 3:47 Adam Savage's Apollo A7L Spacesuit Replica!
FRl8m-zTO3c 5:55 Meet the Picobrew Home Beer Brewing Machine
tGOB0Rf5DI0 3:18 Adam Savage Fights Fire with Fire - Unimpossible Missions
uMho8iFZby0 4:07 Tested Mailbag: Apollo 11 Hardware Poster!
wcP98zlwojE 6:43 Razer's "Project Valerie" 3-Screen Gaming Laptop Prototype!
z9So2VzcflY 9:58 Adam Savage Checks Out Weta Workshop's "Giant Killer Robots"
SYy2Ov8OHAY 5:47 Weta Workshop Artist's Hand-Sculpted Skulls
BmTcYfn618U 9:42 Learning about Silicone Prosthetics at Weta Workshop
tnBa-3d-70c 6:00 Adam Savage at Weta Workshop's Model Painting Shop!
8G_oYnnUqJg 7:20 Inside Weta Workshop's Collectibles Department!
fhGIkttRiQs 7:45 Weta Workshop Sculptor's Labyrinth Model
K1vMaYlptNg 19:24 Adam Savage Goes Behind the Scenes of Thunderbirds Are Go!
8buG9E37AKQ 2:45 The White House's SXSL: Designing Adaptive and Assistive Technologies
0y7QFmiZrf4 3:57 Adam Savage Opens His Secret Santa Gift!
DwHruarHj40 8:03 Planet Express Spaceship for Futurama Fan Film!
LCdJJqVWQ1M 13:32 Behind the Scenes of the Futurama Fan Film!
M4M3I0nXEMI 23:41 Adam Savage's One Day Builds: Vsauce Glasses Hack!
fuRdfJXpUZo 2:00 The White House's SXSL: Making Programming More Accessible
NvqorYw72B8 6:17 Adam Savage Interviews Naren Shankar of The Expanse!
rvCgPRzOa3s 17:02 Behind the Scenes in The Lion King's Puppet Shop
YUdse5fl3bw 11:30 Tested: Blackmagic Micro Cinema Camera
CFEnQzvRe9Y 5:28 Adam Savage Interviews the Creators of The Expanse!
xrTtVZzJ0Do 3:52 Adam Savage Chats with Chef José Andrés at The White House
G96YQQ7vW8w 20:26 Adam Savage's One Day Builds: Pedal-Powered Strandbeest!
IiQykhvPG-Q 2:21 Star Wars Rogue One Death Trooper Replica Helmet by Anovos!
7fYrEC_WDN4 10:04 Tested: DJI Phantom 4 Pro Quadcopter Drone
2lvpk74mWPM 8:42 Tested: HP Omen 17 Gaming Laptop
l-tRS_ERYH4 9:07 Making an Aliens Power Loader Suit for Ripley the Puppy!
VH7xZKV4EME 8:41 Peter Jackson and Adam Savage Open John Chambers' CIA Make-Up Kit!
Pf8sKAuzR0k 34:18 Professional Sculpting in Virtual Reality with Oculus Medium
C7iJWO7Q_Uk 29:29 Tested: Oculus Touch VR Controller
o8tcbpxYwSc 5:07 Ruben Cabrera's Eyestranaut Toy Concept
nHzrMBNBWu0 7:08 Elaborate Custom Dioramas for Action Figures!
Fjuadt-_VDc 6:48 Sculpting Gas Masks and Helmets from Sneakers!
eIbYsYqZxPQ 10:09 Peter Jackson's Original King Kong Stop-Motion Armature
C7DH0LTNsZQ 4:19 The Taxidermy Diorama Art of Brooke Weston
Xf4PDt4ThfA 9:21 Tested: Stalling and Rolling in a Biplane!
rU4_qj8eJ_0 6:25 Sam Cobb's Amazing Automata Sculptures!
telMVIbLucU 26:42 Walking Tour of DesignerCon 2016!
cZDbWHfmPU4 6:17 DesignerCon 2016: Miss Monster's Masks and Sculptures
_dr_F2Aho2Y 10:45 Adam Savage Tours Tom Sachs' Space Program Exhibit!
-7XIvORSyXU 11:15 Features Not Standard: Building a Motocross Mobile Pit Stop!
BkwTVbqH-88 7:01 Adam Savage Tours Peter Jackson's Movie Prop Collection!
YBqlDwdR3NI 18:04 What's New: DJI Phantom 4 Professional and Inspire 2
y5CqPCJK4ZQ 3:35 Show and Tell: Astro A50 Wireless Gaming Headset
8rrMzgexgH4 10:59 Making Laser-Cut Mechanized Hands for Creature Effects!
7JrCejRYGAM 56:27 Adam Savage's One Day Builds: NASA Spacesuit Parts!
pY_x-tLZqQ4 14:43 Features Not Standard: Weather Balloon Launch and Recovery!
V02oCPDj5u4 7:07 The Star Wars Concept Art of Ralph McQuarrie
0EVmJWuQjJE 9:11 Microsoft's Surface Studio and Windows 10 Creator Update
YO1E7DBuqtc 2:23 Between Worlds: Augmented Reality in Storytelling
MuNMeLwXPeg 7:49 Adam Savage's Zorg ZF-1 Prop Replica!
NMUecLjmw9Q 3:59 Show and Tell: Laser Cutting Norm's Wedding Favors
_DsK65T6AxQ 13:54 Adam Savage and John Scalzi Chat Sci-Fi!
BdMqIUGZ3QQ 4:41 Izmojuki's Beautiful Urban Mech Robot Model!
XFVwO42Ny8A 9:14 The Design and Development of High-End Collectible Toys
L9O3KWrvxKA 42:47 Adam Savage's One Day Builds: Totoro Costume!
qLC7R6eAkiY 12:19 Adam Savage and John Hodgman Talk Comics and Film!
EpdEd5NbRtc 6:37 Adam Savage Chats Cosplay with Jay Justice!
pPifX92BeGU 6:04 Adam Savage Meets Machination Studio's Codename Colossus!b54RAg-dFhs 7:56 Features Not Standard: Sous-Vide Ribs in a Truck!
UhbOaBVSedE 20:32 Phil Tippett's Film Props and Special Effects Legacy
r0ybnM03DwM 13:38 Adam Savage Learns Comic Art from Chris Eliopoulos!
ODEZHq4IEKs 6:00 2001: A Space Odyssey 1/6th Scale Figures!
Uie6efMPghU 4:35 3A 1/6th Scale Judge Dredd Figure!
G-CJEXuy8rs 9:39 Tested: Hover Camera Quadcopter Drone
kGF9uArH5dI 7:27 Adam Savage Meets Mouse Guard Creator David Petersen!
hNel07iqsQc 7:45 Features Not Standard: Simone Giertz Builds a Bathtub in a Truck!
X_vyVXuc1Rc 35:21 Oculus VR 'Santa Cruz' Prototype Impressions
7mBdo75DtO0 11:03 Show and Tell: Game Frame Pixel Art Display
pf9YlUWa128 6:18 Features Not Standard: Turning a Truck into a Treehouse!
jBgDx3MK3aY 9:20 Features Not Standard: Adam Savage's Portable Movie Theater
Pdj1bHqMWsQ 2:07 Watch BattleBots Matches in 360 Video!
QVZLsw3tNSU 3:23 BattleBots Behind-the-Scenes in 360 Video!
BQJ-c_Gci1w 3:15 BattleBots Rumble Matches in 360 Video
CIo-epgTjCs 6:54 How USC's Automultiscopic 3D Display Works
jB2zSY955SU 31:43 How To Build the 3D-Printed Cutaway Lightsaber Kit
y_IS1T7O_qQ 5:06 How Virtual Humans Learn Emotion and Social Intelligence
-0oDYvbnt6M 16:39 Adam Savage Meets a Weebo Animatronic Robot!
c6QJT5CXl3o 18:49 Digitizing Photorealistic Humans Inside USC's Light Stage
2ErLOmGZQMA 10:44 Weathering Techniques for Cosplay Costumes
IJbAqAqjFKI 13:50 Tested: VR Projects at USC's Mixed Reality Lab
BDD2uEFjt-0 13:33 Making a 3D-Printed Sith Lightsaber Kit!
MMaEP_NIjDg 1:44 Tested Mailbag: Adam's Cardboard Man!
XOxmMurUv3Q 5:02 USC Mixed Reality Lab's VR Redirected Walking Demo
l3pPfq6hjLA 19:09 Adam Savage Meets Aardman Animations' Puppets!
wSc1bfTMn4I 9:53 Star Wars Han Solo in Carbonite Refrigerator!
L7wxpEpyw24 4:11 Real-Life Futurama Hypnotoad Animatronic!
u0U-LlB7teU 3:06 Adam Savage's Bear Cosplay Design Poster!
SoMriIFuHgI 10:40 Tested: Shooting and Editing 360-Degree Video!
0cQ91lO4pH0 30:03 Adam Savage's One Day Builds: Bear Costume!
qVWVsiHp7UI 7:35 Futurama Fan Film Props, Puppets, and Costumes!
xJ21Y3DmLkY 9:02 Star Wars: The Force Awakens Prop Replicas!
-Nx4N97SVNg 18:57 Painting the Realistic LEGO Cosplay Mask!
z9zFt5t6FBc 6:23 The Fantasy Sculptures of the Shiflett Brothers
XbkPbfTyFvE 11:52 Oculus Medium Sculpting Demo with DC Comics Artist
P2O7vyKnYfo 15:28 Sculpting a Realistic LEGO Cosplay Mask!
c7KYrPXvZSM 6:55 Real-Life LEGO MiniFig Cosplay!
jCQtsAXnWS4 5:31 The Creature Sculptures of Dominic Qwek
628p6_FmarM 11:05 Star Trek Beyond and Star Wars Costumes from Anovos
DdtfLvg5LZ0 8:40 Black Panther and Suicide Squad Prop Replicas!
SGTa4-bkrEQ 3:20 Back to the Future Delorean Time Machine Conversion
E0qK_srR81U 8:39 Cutaway Millennium Falcon Model Miniature!
gAwqvynkMeY 7:46 Ghostbusters Ecto-1 Replica Car!
46lG4MMzwL4 9:30 Adam Savage's Star Trek Beyond Costume!
wBbsWRtzp8E 11:08 Tested Goes to the 2016 Replica Prop Party!
_eWmYzp1Ca8 1:17 2 Million Subs! Thank You from Tested!
PQKBmeb5no8 6:23 Star Wars TIE Bomber Cross Section Model!
quhA4ZtbX_U 6:23 Working "Lost in Space" Analog Computer Replica!
3Zq8_LzlYfM 10:27 Dave Goldberg's Star Wars Model Builds!
M0Sloitb9Jg 11:09 Adam Savage Visits the Stanley Kubrick Exhibition!
BgL_6jWNP2c 21:14 How to Build a Foam Cosplay Helmet! (For Honor game)
779RGOWsfOM 10:17 Testing a Drone Claw with Simone and Norm!
qSr_qLkVqDw 19:08 Adam Savage's One Day Builds: Kylo Ren's Costume Gorget!
NmSnKx2jELg 14:29 Making Historical Fantasy Cosplay Armor for E3! (For Honor Game)
lVskyd1GPos 9:55 Test Riding the Segway MiniPro Personal Transporter!
ZfumU7ss1Cg 2:59 Adam Savage's Overlook Maze Model at the Stanley Kubrick Exhibition!
JB1x0O-bhrw 33:12 Adam Savage Tests the Best Ways to Sear a Steak!
yAWgrwYq0iY 12:28 How To Slush Cast a Prop Helmet
Z3KL7cC8bDw 4:51 Shop Tips: Respirators vs. Dust Masks
6CWg22nRP_I 3:08 How Much Weight to Burst an Exercise Ball?
Sup-IBtNCEI 11:47 Adam Savage's New Medieval Armor Costume!
Xa3dqTViETM 55:06 Tested Builds: Painting Resin Model Kits, Part 1
RlHsOYBaNCU 1:04 Ridley Scott on Why Science Fiction is Essential
is4Ym5m31r8 1:17 Correction: Kylo Ren Helmet Prop Makers
B4HQOa9chss 3:37 Adam Savage Celebrates the National Week of Making!
2-AT7hRdyIg 8:10 Costumes and Props at Star Trek Beyond's Fan Event
zYGVYLzN06g 9:55 Strandbeest: The Dream Machines of Theo Jansen Exhibit Tour
jQdcaBEOVI8 12:06 How to Paint a Latex Zombie Mask!
U02qqB-2nbs 5:14 Adam Savage Meets Theo Jansen's Strandbeest!
AINgh4vF4VU 4:16 Show and Tell: SixKeyBoard Custom Keyboard
NA2XJ7PTT3M 3:06 Shop Tips: Mixing Superglue and Baby Powder
rCaNa2L-heE 6:54 Adam Savage's New Kylo Ren Helmet!
gVeVYC6wqoU 1:42 Join the Tested Community! (New Poster!)
QMR_GpsrIzM 3:35 Testing Hail Damage to Solar Panels!
q3HBcWZkxn0 16:48 Tested Attends Autonomous Vehicle Track Day
xv1yDV38UUQ 8:05 Tested: ODROID C2 $42 Tiny Computer!
uecY5ikWdCI 3:43 Multi-Color 3D Printing with Palette Filament Splicer
Zh9Xh2OA-j4 3:16 FLUX All-in-One 3D Printer/Scanner/Laser Engraver/Plotter
KHTrK1L3jRk 3:33 Rubik's Cube Solving Machine at Maker Faire!
mLOMYCWaDYU 2:56 Meet Kniterate, a CNC Knitting Machine!
13872p-UynI 3:46 Pocket NC 5-Axis Desktop CNC Mill!
kdLky-YkOVw 1:04:45 Adam Savage's Maker Faire 2016 Talk!
iZkCLOolYo0 8:32 Adam Savage Meets Sci-Fi Ray Gun Replicas!
hXDizTasY6A 4:30 Pocket CHIP $49 Indie Game Console
MaDduAOWmYM 7:55 OpenROV's New Trident Underwater Drone!
pM6LUQsvM3M 15:48 Tested: Mechanical Gaming Keyboards
3GuZiNdeueI 5:23 3D Printed Open Source Telepresence Robot!
MaQ6LeHS2rM 26:24 Tested Builds: Foam Propmaking, Part 1
LdLnO2WJ5BE 40:49 Adam Savage Interviews District 9 Director Neill Blomkamp!
MG-gf0A9WPM 2:30 Shop Tips: Save Your Silicone Pads
Cacr1WeKOzY 6:13 Adam Savage's Vacuum Forming Machine
O2thSsQrZUM 24:31 Carbon M1 Super Fast 3D Printer Demo!
XwXpO_IAm6U 9:05 Maker Spaces: Inside Frank Ippolito's New Workshop!
OLPUpsd58nQ 26:23 Adam Savage Meets Amazing NASA Spacesuit Replicas
aRylsPJ4EGE 8:26 Tested: WeBoost Cell Phone Signal Booster
elmx-suesKE 7:21 3D Printer Material You Can Sculpt!
YXLzEm2i35M 13:06 Maker Spaces: Adam Savage Tours a Spacesuit Replica Workshop!
EY0F0ER2m-w 11:37 Star Wars BB-8 Droid Replica 2.0!
AMpuqFAt29M 3:23 The Martian Spacesuit Project: Patterning
EBi_TqieaQ4 12:43 Ironhead Studio's Incredible Movie Costumes
ng5T-bZwT40 5:14 The Amazing Art of Akihito
_Vk-8vKc-QI 3:21 Awesome Monsters vs. Zombies Diorama!
Gvx4OH_q4N0 6:45 The Best Creatures of Monsterpalooza 2016!
3KpdjGlHB30 12:44 Adam Savage's One Day Builds: Iron Giant Bolt!
sUB56nic3lk 12:11 Show and Tell: Rey's Blaster Replica Kit!
BjZbAzUM9Ao 4:44 Tested: Eero Wi-Fi Router and Extender
ssxCQuv3KzE 13:45 Adam Savage's One Day Builds: Foamcore House!
BL0OvdTqzBs 5:28 Tested Visits the Shenzhen Electronics Market!
m1HyEpxyBro 10:59 Simple Feats of Science: Liquid Nitrogen Experiments!
pEa-qTf-BZw 1:48 Tested Mailbag: Codenames Box
LOOhNpjVX_E 4:56 Shop Tips: Covering Your Work Tables
U46Yo_6z_F4 21:30 Adam Savage's One Day Builds: LEGO Sisyphus Automata!
UNAa5-uCowY 37:49 Tested: Driving the Tesla Model X w/ Autopilot!
97eMRhbSGBI 1:21 Adam Savage Mini Science Fair Project
EBieKwa2ID0 35:45 Tested In-Depth: Oculus Rift vs. HTC Vive
2XhY6swcs_o 1:09:38 Tested Builds: Perfect Grade Gundam Kit, Part 1
U4LZbewqB-E 23:29 Adam Savage and Simone Giertz Make a Popcorn Machine!
8AKZk2ldPWs 0:24 Simone Giertz's Popcorn Machine!
6MYc5aEsiKM 11:30 3D Mapping The Exploratorium with Matterport!
pzh5tp0g_44 4:29 Show and Tell: Radian 2 Time-Lapse Motion Controller
g01qhIqPeGw 2:16 Tested Mailbag: 3D-Printed Blaster!
18EcIxywXHg 12:22 Oculus Rift Virtual Pinball Cabinet Mod!
Ea5-htcUss0 8:06 Adam Savage Incognito as Comic-Book Hellboy!
UZXL78b_D-4 9:22 Behind the Scenes: How We Light Our Videos!
M9k6iS2siz0 9:20 Simple Feats of Science: Bed of Nails
G-BSI5l_c0Q 2:29 Tested Mailbag: Adam Fan-Figurine!
MsqF2NbHSXM 7:32 Shop Tips: Working with Water-Based Clay
3735B42v-wI 4:02 Adam Savage's New Milling Machine!
jTaeXuMQXx0 2:05:54 Episode 344 - The Inmates Are In Charge - 3/24/2016
qQrXlfn7tJA 39:23 How To Build a $1000 Virtual Reality Gaming PC
vGFRoWj0YOw 7:23 Installing a Video Card in the Razer Core (External GPU)
1Cy2Qs_n1J8 3:21 Show and Tell: Sailing Ship Kite!
Y4IyJYP42PY 20:22 Tested Builds: Fallout 4 Mini Nuke Kit, Part 1
uvVwdBl5K7M 18:05 HTC Vive Final Hardware and Valve's The Lab Impressions!
M72lRZ3R-VQ 21:16 Playing a Full Dragon Front Multiplayer Match in Oculus Rift
lD4LF-9ou6E 43:48 Oculus Rift's Virtual Reality Consumer Launch Lineup
7_vBVTbEYgQ 9:32 Filming MythBusters with a Custom Chase Car Camera Rig
mri1MLhm43w 17:32 ILMxLAB: Star Wars and Cinematic Storytelling in Virtual Reality
UslTgWF7fpY 5:08 Tested: Avegant Glyph Personal Theater Headset
RXlpn2W5G1w 1:06:59 Let's Play VR: HTC Vive Demos!
nwsDK_kSdPU 30:58 In-Depth with the 3D-Printed GhostBusters Ghost Trap!
gcDCZ2TmTck 29:20 Adam Savage's One Day Builds: Hellboy Sword!
z6KmX_poEV8 11:44 Making a Working Ghostbusters Ghost Trap!
ZN5VuU9UjFo 8:20 Tested: Raspberry Pi 3 $35 Computer!
zN4ftjzjooI 13:04 Visualizing Energy Inside a Microwave Oven!
GEM0xbezsMY 3:59 What's in the Box: DJI Phantom 4
oxQfWGMdwno 4:50 Shop Tips: Know Your Hot Glue Guns
8UmBKWQ52oQ 27:53 Adam Savage's One Day Builds: Puppy Car Seat!
etxb8eSQTt8 28:12 Tested In-Depth: Nexus 6P Android Smartphone
4ELdR3XvQwA 32:05 Tested Builds: Stop-Motion with Action Figures!
uFRaeUFa2oo 3:21 Tested Mailbag: Custom Hot Wheels!
fBvaQPxXCGQ 11:21 Finishing and Painting 3D-Printed Models!
rQvIINq6WJA 10:03 Replicating 'The Martian' Spacesuit, Part 1: Building Reference
2gfjCncKZj8 4:03 Shop Tips: How To Pour from Large Containers
TDwZ-LiDFl4 8:57 Tested: The $5 Raspberry Pi Zero Computer!
epT11oriccU 12:26 Breaking Glass Panes with Car Speakers!
wPUcfmVDRCM 14:34 Tricking Your Brain in Virtual Reality
Cil7OT8bGik 28:31 Virtual Reality's Psychological and Behavioral Effects
SBabu7ea9Zc 16:47 Tested In-Depth: Roku 4 Streaming Player
JRKBxhVdvuU 2:46 Show and Tell: Adam Savage's New Bullwhip
gXjldZpOLEk 2:03 Tested Mailbag: Catching Up!
wggcGPMtsR0 7:06 Adam Savage's Custom Glue and Paint Carts
HkILCsAOMcQ 38:06 Tested In-Depth: Formlabs Form 2 SLA 3D Printer
t54t7k6pkYg 13:33 Designing a 3D-Printed Model Airplane Kit!
FoG9Dc1YVLY 9:58 Destroying a Soda Can with a Ping Pong Ball!
LXRWsMNaESk 9:14 Designing a 3D-Printed Prosthetic Arm!
ITiJkdL5QEQ 9:05 Adam Savage Meets the Blade Runner Blaster Prop!
lr-Okj4xmBk 22:54 Tested In-Depth: Apple TV (4th Generation)
0IKPYx-NrOA 5:19 Show and Tell: Jason Freeny's Anatomical Figures
WvTu_N-LB5Y 2:08 Meet Finn!
JYwNuP7cwJs 35:37 Adam Savage's One Day Builds: Making a Puppet!
O3PqiCGmn9M 18:43 Tested In-Depth: Dell XPS 13 Laptop (Skylake)
Lg4tAIr4R2o 14:38 Adam Savage Meets STEAM Educators in Baltimore
6mUakBwTwrQ 10:41 Meet Gordon Tarpley, C-3PO Suit Builder!
6SS013Lf7P4 5:43 Adam Savage Inspects the Spacesuit from The Martian!
MREQUtbXiYo 11:25 Designing a 3D-Printed Ducati Motorcycle!
iR976W8_nfg 11:56 Building a Star Wars Shadowtrooper Helmet Kit!
PC7HFvotXkA 4:42 LEGO Education Brings Building Kits to the Classroom
xFltp_OE_I0 4:47 Meet the Hexo+ Autonomous Camera Drone
rCy2cp0MTxw 6:20 PowerUp FPV Turns Paper Airplanes into RC Drones
iDlFE1ekn1I 5:07 Meet the Acton Blink Electric Skateboard
4Uhkmvd3XnI 13:48 Meet the Best $500 Pair of Speakers We've Ever Heard!
O98kwszk6NE 12:44 Flying FPV Drones with Avegant Glyph Retinal Headset
m2Vqbi71Lek 3:56 Meet Dell's New 30-Inch OLED Monitor!
5cJKLZg53qw 10:58 Designing 3D-Printed Mechwarrior Mechs!
2DRJ2oUK4-E 9:43 This 3D Printer Builds Full-Color Paper Models!
zbD1V6EJjZk 14:45 In-Depth with Steam VR and HTC Vive Pre at CES 2016
Cn-AwhYOHZE 7:30 Kodak's New Super 8 Camera at CES 2016!
JQvFidopZug 14:20 Oculus Rift Price and Hardware at CES 2016
SCt2jmgeJDo 5:01 What Makes a Good Digitizer Stylus for Artists?
XbiIy4_6lMM 6:01 Checking In with Razer's OSVR Hacker Dev Kit
CrXxIq5haO0 4:48 Meet the Yuneec Typhoon H 4K Camera Drone
8rxCF41Cg20 5:53 Competition to Make Real-Life Star Trek Tricorders
6VNXwfD-dh0 6:08 Meet the Sony Alpha A7 II Cameras
CuKY_pufFrQ 5:55 Meet Parrot Disco, a Ready-to-Fly Fixed Wing Drone
7GCbHz5d71Q 4:40 Bonus: Favorite Collectibles of 2015!
G0kac3ZFkkw 29:48 Behind-the-Scenes: Making the Stop-Motion Puppets for Star Wars: The Force Awakens!
Sexd06I8mzg 11:22 Making of Holochess for Star Wars: The Force Awakens!
g7WJ_LVD7u4 48:02 Tested Builds: Automata Model Kit, Part 1
c7Sizrlvqno 4:37 Tested in 2015: Norm's Favorite Coffee Table Books!
UHUTnZUHUz0 17:22 Adam Savage Learns from STEAM Educators
DUTbvXJg_P0 17:08 Making a Working BB-8 Droid Replica!
dk_WmU7PM7k 9:00 How to Introduce Kids to Star Wars
ZjjqJIq_Gg4 8:00 Adam Savage Uncovers STEAM Leaders in Atlanta
WLTqqjvHCGA 8:05 Show and Tell: Hacking RC Toys with Arduino Control
kQJbkyDhuYA 9:51 Making of Our GoPro + Gimbal + NERF Video Test
UmEJmRxfz80 15:44 EVE: Valkyrie on Oculus Rift VR Playtest!
Xz9_VwW7rbs 17:25 Designing the 3D-Printed Lightsaber!
I-tUmhCtcR4 2:46 Show and Tell: LEGO Mystery Build #14
wVwBOv4pgZA 5:27 Tested Mailbag: Surprise for Jeremy!
MGjLscsBBjg 17:41 How to Take Apart and Clean an Airbrush
e4rGhOiTg_s 9:58 Real-Life Professor Farnsworth Makeup Application!
TJapir1Tddc 17:18 Tested In-Depth: High-End Headphones and Amps
CDk8kJHJQZY 6:40 Building a Dark Crystal Skeksis Puppet!
4EZYwc_DEok 6:40 GoPro Hero+ Wi-Fi Gets Tested! (w/ Gimbal and NERF!) || AWESOME STUFF WEEK
fI4om0iJ2zM 4:31 Sculpting Creatures at Designer Con 2015!
KytdElsPSno 7:32 LEGO Comic Book Covers at Designer Con 2015
Q62aE811Vj0 10:06 Tim Gore's Oddities and Paints at Designer Con 2015
_xqmOEIGip0 11:44 A Brief History of Tested (from Tested: The Show!)
PjTQL8pflEU 20:36 Adam Savage Interviews NASA's Deputy Administrator
GzVVTB8TSdc 8:15 Art Toy Collaborations at Designer Con 2015
Mmswu2P_Ufw 9:10 Building a Rancor Costume (from Tested: The Show!)
D2AKkVDZ7OY 13:57 Controlling Robots on Mars (from Tested: The Show!)
qb9wXNqs9ZI 17:38 Walking Tour of DesignerCon 2015!
WwVbqveNe6c 15:15 Flying Drones Over Volcanoes (from Tested: The Show!)
d7r3dHOWLgg 10:52 A Pocket History of Space Electronics (from Tested: The Show!)
T_gQgkCfj7w 12:30 Adam Savage's Tintype Portrait (from Tested: The Show!)
ZfkBEw2D2x0 8:25 Show and Tell: Our Audio Recording Gear!
P2ccdaScxQ8 48:09 Tested Builds: Repainting Action Figures, Part 1
hRwZYVq1kxQ 2:52 Tested Mailbag: Sipping Assistance
zcAR_2bNojE 12:08 Meet Pleurobot, an Amphibious Robot!
uOh2ZY1VHGE 22:35 Awesome BioRobots Inspired by Animal Movements!
qsb4W144YNg 20:49 Tested In-Depth: How to Listen to High-End Audio
Kn4vXDKSW1o 6:47 Massive LEGO Mouse Guard Display at BrickCon 2015
0qAQSWler7Y 3:00 Tested Mailbag: Get Dapper!
5xQwkICq9eo 5:37 Best LEGO Castle at BrickCon 2015!
9r134rRrLIk 3:00 Adam Savage Gets Animated by Artist Marty Cooper!
ScVEL2GjJ5g 22:11 Tested In-Depth: 3Doodler 3D Printing Pen
RD1eoeTzUEg 3:04 Show and Tell: Halo 5 Needler Full-Size Replica!
kOkKn8CfMac 9:44 Tested Skillshare: Making Will's Trading Card!
Wq3xtZ8AjPE 57:07 Adam Savage, Astronaut Chris Hadfield, and Andy Weir Talk 'The Martian'
6T6gFX8bAPA 26:32 Tested In-Depth: iPhone 6S and 6S Plus
fhsPq3i3nNY 4:47 Inside Adam Savage's Cave: New Original Props!
SOdvmybALMU 4:12 Tested Mailbag: A Package from France!
0JOdJ9Sn_w4 1:00:52 LEGO with Friends: UCS Millennium Falcon, Part 1
3l_jd3qWjj4 3:24 Tested Mailbag: Hawkcat Returns!
omfIecTlyYk 2:42 How Baseball on TV is Mixed in Real-Time (iPhone 6S 4K Video Test)
ZwlxiWxP634 6:32 How the Glowforge Laser Cutter Works
F2qQIR1jZxw 0:41 Adam Savage's Duck Army Bomb Test
IniwqWIMMlw 22:04 Adam Savage's Ultimate Duck Army
BNBEckyMA-k 23:14 Tested In-Depth: DxO One Camera for iOS
14RtNisg34w 2:04 Show and Tell: Portable Folding Keyboard
0hSxZOG7hIE 51:57 Tested Builds: Laser-Cut Millennium Falcon Kit, Part 1
2_zD5y5Q6Fk 0:26 Tested: The Show 2015 On Sale Now!
beaHxW5o-uw 28:14 Building a Star Wars Shadowtrooper Armor Kit! (Part 2)
b0U6LgmB0j4 32:27 Let's Build: 3D-Printed Steampunk Scuttlefish!
L_qaJjsIzUE 10:57 360 Camera Rigs at Oculus Connect 2
7m0qh6hZ1c0 5:52 Show and Tell: Electric Objects EO1 Digital Picture Frame
033HmiCFb7Q 3:37 Tested Mailbag: Numbers in Our Heads
peVuqvB7RPQ 12:23 Job Simulator: Making VR Games for Oculus Touch and HTC Vive
5FHtcR78GA0 11:46 How the BB-8 Sphero Toy Works
yxAD1TIks_k 24:13 Tested In-Depth: Google OnHub Router
kIskZmv1aY0 12:05 Virtual Reality Shooters and 'Bullet Train' with Epic Games' Tim Sweeney!
fwkGKWD9U5s 2:24 Show and Tell: New Zojirushi Mug!
s37pjmMU33U 27:33 Tested: Oculus Connect 2 Demos and Impressions
0R3mMUsHFvU 22:20 Meet the Glowforge 3D Laser Printer
KixJe5qEzNc 43:20 Tested In-Depth: Apple iOS 9 for iPhone and iPad
EN_epinHIAU 4:21 Show and Tell: Nerf Rival Blasters (in FPV!)
DJX5J6B66f8 2:09 Tested Mailbag: An Actual Bag!
Szv30aUEsxM 10:01 Tested Builds a Hydrogen Converter
CvS0OUutb4I 9:13 Tested: Logitech UE Boom 2 Bluetooth Speaker
4kBch_UqRTA 4:15 Show and Tell: Jaybird X2 Wireless Earbuds
6sO2zs6LnBs 6:09 Tested Mailbag: No Such Thing as Bad Pocky
gfJat6kRWko 15:47 Walking Tour of Dragon*Con 2015
JXhzkV5J7UY 8:41 Making Sci-Fi Armor for a Video Game Trailer
m0dhJ_9xAj0 24:17 Tested In-Depth: OnePlus 2 Android Smartphone
egNsGoQJgIw 0:38 Announcing Tested: The Show 2015!
TV_qxzaqnA4 5:52 Show and Tell: Pebble Time Steel Smartwatch
PY6Xh7_JTrg 3:28 Tested Mailbag: Essential to the Utility Belt
KWOvPFj_j4k 56:48 Adam Savage Interviews Jason Reitman - The Talking Room
WssyvNOqbRw 12:20 Tested: DJI Phantom 3 Professional Quadcopter Drone
8j4a4CTe7-8 9:20 Show and Tell: More Japanese Papercrafts!
nTj_pLj2Sdo 16:58 Building the Star Wars Rancor Costume, Part 4
hcMrp-EOcRA 2:31 Tested Mailbag: Full Blockhead Set
hSnhVpn9YVk 17:00 Prop Store's Original Movie Prop Collection
fmvE01Ub00E 3:59 Inside Adam Savage's Cave: Hellboy 2 Prop
TxG5xZfmkZw 13:08 Building the Star Wars Rancor Costume, Part 3
SGSEIX9-Y0w 4:22 Tested Mailbag: From Belgium!
DNMkLgTSn4k 10:29 Real Virtuality Multiplayer VR Demo
kfZ9RrxQ5NM 1:12:32 Adam Savage Interviews Author Mary Roach - The Talking Room
M7X5QLtZYO0 16:00 Tested In-Depth: Nest Cam Security Camera
KiuaV2uPpN0 2:58 Show and Tell: LEGO Mystery Build #13
kO0MiHzMt_o 14:02 Building the Star Wars Rancor Costume, Part 1
gwywTBNUWi4 16:19 Building the Star Wars Rancor Costume, Part 2
xO8QDnpHnkA 2:10 Tested Mailbag: Blaster from the Past!
KSO8rshzcw4 7:36 Ryan Nagata's Space Suit Replicas
G6R2XAIl_J4 6:33 Studio Scale Star Wars TIE Bomber Replica
FQmeub_LIsE 39:51 Tested In-Depth: Ultimaker 2 3D Printer
hIp3ix4ZcS0 3:00 Show and Tell: RC Bionic Bird
OAfXxj-gEIY 5:13 Jurassic Park Jeep Conversion Project
TWQAYfGxsPE 14:45 Adam Savage's Custom Tool Storage Stands
rtg9z_xx9vE 8:37 Back to the Future 2 Nike Air Mag Replicas!
MfIBCMyu2Oo 34:27 Tested In-Depth: Pebble Time Smartwatch
aRJi7oZNItE 1:05:16 LEGO with Friends: Bonnie Burton, Part 1
2lDTIIitQlc 5:05 Show and Tell: Papercraft Creatures
4nOdlHDZ9AY 5:10 PinballBulbs' Mini Virtual Pinball Cabinet
CM70mddypOo 31:55 Tested Builds: DIY Arcade Cabinet Kit, Part 1
xcPWf9RjvnU 4:13 Show and Tell: Robugtix T8X Robot Spider!
fGlBLBwvFRo 11:42 FPV Quadcopter Racing at the Drone Nationals!
7wqsltXziTA 4:04 Tested Mailbag: 1:220 Scale Models Kits!
nP5pl6pON2k 2:56 Show and Tell: Tiny Arcade Cabinet!
kc8kK5wuVGU 6:28 Adam Savage Incognito in Judge Dredd Cosplay!
g_MVy5W0gns 7:04 Terminator, Ghostbusters, and Blade Runner Movie Prop Replicas
Vcd6dOyGKjk 6:00 Star Trek USS Enterprise Model from QmX
L_jOTnpGmhs 12:32 Original Star Trek, Blade Runner, and Rocketeer Props
5MdGqgspHD8 2:59 Show and Tell: Palette Modular Controller
OFbBs9M0cqw 20:31 Building a Star Wars Shadowtrooper Armor Kit! (Part 1)
O31iSarGySs 2:02 Show and Tell: LEGO Mystery Build #12
HH_8ECuuRsg 28:04 Tested Builds: Millennium Falcon Studio Scale Replica, Part 3
6Z3BnWv80vk 3:59 Meet Gimball, a Collision-Tolerant Drone
WnWNrDK-HP4 2:30 Tested Mailbag: "What's Encom?"
jGnsH9ecCMg 4:54 Designing an Ultra-Efficient Walking Robot
8XpjVlGn6_o 10:50 Meet RoboSimian, NASA JPL's Ape-Like Robot!
L_HvQQjMSZI 3:29 DARPA Robotics Challenge: Team THOR
P44Xp3BCMwA 3:39 Telepresence Camera System with Head-Tracking!
83PCCR0LKP0 5:51 Meet the Inflatable Robots of Pneubotics!
YRLI7Ti7jL4 6:51 Show and Tell: Camera Slider Gear
27xunbG3OWo 1:04:18 LEGO with Friends: Carl Merriam, Part 1
uKhxcOLQhKk 8:10 Realistic Robot Arm: Meet the Modular Prosthetic Limb!
tt1fcdNEYvE 8:07 DARPA Robotics Challenge: Team IHMC's Atlas Robot
7TpuTVDtaAo 3:22 Tested Mailbag: Our First Gundam
UErbxoBhWoM 24:55 Adam Savage Interviews Google X's Astro Teller - The Talking Room
7GB0SAjfBbk 45:55 Testing Samsung Gear VR for Galaxy S6 Game Demos
LGvV72uMii4 53:57 Tested Lessons: Painting Model Kits, Part 1
C99NCS8Nn9c 1:09 Show and Tell: Living Room Couch Keyboard
GnACo3zgI5k 16:09 Tested: Meet the New BattleBots!
WE001LO3sUE 6:23 Alpha Dominche "Steampunk" Brewing Machine
KyrCt0kCCzo 18:37 'Oculus Touch' Virtual Reality Controller Thoughts
5SemyzKgaUU 55:18 Adam Savage Interviews 'The Martian' Author Andy Weir - The Talking Room
v8w4hufoujg 28:08 How To Make a Realistic Horror Skull Prop!
UXmhMygDGwA 3:41 Adam Savage Reacts to The Martian Trailer!
wFo21xrFGr0 8:17 DJI M100 with Collision Avoidance System
rRsX430nql8 2:38 Show and Tell: Rubber Band Machine Gun!
v1UjBuiv9pE 6:57 Making Espresso Coffee at Home with the La Marzocco Linea Mini
x0x5ok-H-xo 13:23 Science Food! Making Aerated Granny Smith Sorbet
dK9NtpS3_RI 11:51 How To Cook Amazing Ribs without Smoke or Fire!
W5axvYiT5tQ 10:27 Adam Savage Improves a Cat Exercise Wheel
R14UXLcrduY 8:27 How To Cook Vegetables Perfectly with a Microwave!
hc_SFK1eZh0 14:39 Touring the ChefSteps Kitchen Laboratory
IgtlO_g9RyY 3:58 Show and Tell: New Nintendo 3DS XL!
TaAepL-FgbI 37:22 Tested Builds: Millennium Falcon Studio Scale Replica, Part 1
kmwNyLZZoAk 3:10 Pour-Over Brewing with Manual Coffeemaker Nº1
Og-ZdRFJ7c4 32:02 Rick Baker's Make-Up and Special Effects Legacy
J6bAZ8RhBY4 58:56 Adam Savage Interviews Traci Des Jardins - The Talking Room
wDbHwi2EJ-k 5:27 Justin Gray's Armored Destruction Robots
3NeJisPvHcU 3:54 Robot Spiders Controlled by Intel's Edison Chip
58qT9hVtLC0 7:52 The Anatomy of an R2-D2 Astromech Droid!
ceEgHJRgeg8 2:28 Show and Tell: Bluetooth FM Transmitter That Works!
OFYcx7ze0uY 38:41 LEGO with Friends: Phil Broughton, Part 1
oIWEtvHD78c 4:25 Google's Project Wing Delivery Drone Prototype
F5jj6gBKGK8 7:50 Google Research's Projects at Maker Faire
1maD5WzsEs8 5:58 Megabots' Giant Fighting Robot!
fJAM-eRJGGY 8:21 The Chemistry of Coffee Brewing with Blossom One
srZBejBnjLE 4:22 8x8x8 Programmable LED Cube!
ZgOTS61PX3c 3:58 Hovership's 3D-Printed FPV Racing Quadcopters
AI0XwnY-vvQ 5:38 Rick Baker's Men in Black Puppets and Animatronics!
2upOx4Tv5Jc 4:51 The Denny Next-Gen Bicycle Concept
nJbbemJ3NWM 19:59 Tested In-Depth: PCIe Solid State Storage
xrsUMEbLtOs 11:37 SteamVR's "Lighthouse" for Virtual Reality and Beyond
AVV3ZiKZr0s 1:40 Show and Tell: Favorite Helping Hands!
00XoEWDcQaE 45:38 Tested Builds: ErgoDox Mechanical Keyboards, Part 1
kELkXqjE59o 4:21 La Colombe's 'The Dragon' Coffee Brewer
Z1CkJtA2yEQ 4:11 Original Gremlins Puppets and Animatronics!
jaVi06DaTk0 37:21 Adam Savage's One Day Builds: Star Trek Captain's Chair
KfeLJUnVpQI 31:57 Tested In-Depth: Smart Home Connected LED Light Bulbs
x9aPZ0stk4s 5:29 Making Needle Felted Star Wars Characters!
1A7LW-VANwQ 2:52 Show and Tell: Convention Art Sculpts
btUXT9p1fUQ 6:19 Brewing Grit-Free Coffee with Espro French Presses
jEihvAA2X_Y 3:30 Tested Mailbag: New Furry Friend!
5B7a9_F85_8 22:15 How to Make Vulcan Ear Prosthetics!
8-KJlvzpefE 44:41 Tested In-Depth: Samsung Galaxy S6 Smartphone
aPSXDh1TrTY 4:36 Star Wars The Force Awakens: Rey's Speeder Replica
fCSQLCOip4I 5:38 Making a Life-Size Star Wars Sandcrawler Tread
Pk7UUeT1vNE 13:40 Making Dessert at America's Test Kitchen!
aS17GkEHIuY 3:53 The Science of Meat Texture at America's Test Kitchen
bIWC5cKuRmE 7:36 Making Kale Delicious at America's Test Kitchen!
WAUpelESAXo 8:33 Making Butter Burgers at America's Test Kitchen!
DPKk3WL_vTY 42:44 Tested In-Depth: Apple 12-Inch MacBook (2015)
lhkFV1X3iYQ 11:04 America's Test Kitchen Laboratory Tour!
WiKe9G-zvmk 4:10 Amazing Custom R2-D2 Droid Sculptures!
3RVKffJ6DH8 2:19 Show and Tell: Universal Mobile Keyboard
K8Pt3eb51TQ 4:06 Rancho Obi-Wan's Star Wars Fan Artifacts Collection
KeIKvF7LzaM 4:58 The Force Awakens Stormtrooper Armor by Anovos
K30nmvkX9rI 30:09 Apple Watch: Common Questions Answered!
MTHyn7gT5do 9:21 Original Star Wars Props and Costumes!
oMXUNr2mb3k 10:56 Star Wars Studio Scale Ship Replicas
uO2ppYsaZd0 10:17 Tested: Self-Balancing Electric Unicycle
hfl21nK9sZI 5:11 Making a Life-Size Rancor from Star Wars
oKrFZBncjmU 8:37 Star Wars Celebration 2015: Props, Costumes, Collectibles!
wPXAbPRFS08 2:37 Show and Tell: Navy SPH-3 Flight Helmet
FSl_Xpncujc 5:26 Science-Fiction Replica Ship Kits from Moebius Models
LHITcrnGn1U 1:08:35 Adam Savage's One Day Builds: Cylon Models with Battlestar Galactica's Aaron Douglas!
e5oOAO4j3MQ 25:34 Tested In-Depth: Panasonic Lumix LX100
JFF1n_m-MvE 5:47 Crafting Felt Creatures with Woolbuddy
ac1CL98QISQ 2:07 Show and Tell: Nixie Tube Clock
a8xxBZml-2c 5:11 Realistic Teenage Mutant Ninja Turtles!
zZRlJidQvqA 2:19 Tested Mailbag: Tabletop Game!
U48niAkKMzg 4:15 Screen-Used Star Wars Episode IV Stormtrooper Armor Replica
6agLHOv23_U 5:06 Real Life-Size EVE Robot (from Wall-E!)
ldYhakCAkRY 29:17 Tested In-Depth: Samsung Galaxy Note 4
plaJGj3oq8Y 4:56 Animatronic 'Westworld' Gunslinger Robot!
3qcvgiaMk4s 1:20:20 LEGO with Friends: Veronica Belmont, Part 1
QC7hB6fZsCU 1:21 Show and Tell: Favorite USB 3.0 Card Readers
iSMdb0Vt_hM 6:36 Special Effects Creatures at Monsterpalooza 2015
r3f_DnQCNQQ 2:41 Tested Mailbag: More Fan Art!
1fe9IDx3vCs 10:04 Jamie Hyneman's 'Arborist' Quadcopter Test
GVbCyHuHH7M 6:59 Tested: Feiyu G3 Ultra 3-Axis GoPro Gimbal
VcDSat3eg7Q 2:41 Show and Tell: Parrot Rolling Spider Mini-Quadcopter
I92AH_F2LOs 13:50 Flying FPV Multi-rotors with Team Blacksheep
EgKshqhqNQE 21:31 Testing the BMW i3 Electric Car
4FJE-vBxIl0 4:42 Show and Tell: StarCraft Raynor Sixth Scale Figure
uJe-yT36BAQ 3:43 Testing the New Apple Force Touch Trackpad
CgPiXENd5Mg 4:01 Adam Savage's Navy Mark IV Helmet!
huyd7FqQGFY 46:53 Testing the Samsung Gear VR: Game Demos
Tw7xb7nAvB4 1:40 Show and Tell: Favorite Smartphone Stand
rmV5lS9C9ZE 5:14 Will's Favorite Games at PAX East 2015
Sd494pYAStI 3:28 Tested Mailbag: We Can Smell It
Hg02Z5OQ750 12:43 Jamie Hyneman's Robot Racing Spiders: Postmortem
-JsGggcQRTM 18:07 Adam Savage's Custom Quadcopter Gear
jcOTwpFmMsM 8:05 Crytek's 'Back to Dinosaur Island' VR Demo
wIS-8PlYehc 1:00:53 Dads Gone Wild - A Bunch of Dads #7 - 3/08/2015
2lY3XI0zDWw 4:03 Virtual Reality Lightsaber Demo with Sixense STEM!
GGk7PYkAl_w 6:39 Show and Tell: Smooth-On's 3D Print Coating
ICblwRtUito 28:42 Building a Home Server for Backups and Ripping Blu-Rays
87h5Bwy6rUg 5:54 Jamie's Racing Spiders, Episode 4: The Race
7UxFJbQHuZQ 4:23 Show and Tell: Replica Starfleet Tricorder
B2aXylTy3q8 1:23 Teaser: Adam Savage's 'Brazil' Commentary
NRAqx8stEnY 34:10 In-Depth: Replicating 'The Shining's' Overlook Maze Model
zAGu2TPt_78 24:21 Adam Savage's Overlook Hotel Maze Model
ZZObqLXEpQQ 21:36 Tested In-Depth: Dell Venue 8 7000 Android Tablet
TiUWWYrDZ5s 5:02 Jamie's Racing Spiders: Episode 3: The Test
gC876aWMc1Y 4:04 Show and Tell: R2-D2 Sixth Scale Figure
bDGW9f7FiuY 10:05 The Secrets of Samurai Armor
CBHQ7lQGOf0 1:00:04 Adam Savage's One Day Builds: Cosmonaut Model Kit
YmGS2D0Q8vY 22:11 Tested In-Depth: LG Ultra Widescreen Monitor
4kdE8ANxPjw 3:36 Jamie's Racing Spiders, Episode 2: The Build
pB5K3ta9JgQ 3:18 Show and Tell: Seek Thermal Imaging Camera
gz7WWyNREC8 3:29 Tested Mailbag: Awesome Fan Art!
DiLnRVzbmlg 13:58 How To Make Kill Bill's 'F*ck U' Shoes
l6Mt7v11jLg 23:40 Tested In-Depth: Sling TV Streaming Service
xBm1I8gpeCs 5:28 Jamie's Racing Spiders, Episode 1
ZaCm9xe_N3I 3:23 Show and Tell: LEGO Mystery Build #11
WQyWTivri1g 16:57 The Puppets Inside Jim Henson's Creature Shop
nT5U9T9Uyok 10:38 Flying the DJI Inspire 1 Quadcopter with Adam Savage
_Uw0VNRMOr8 21:53 Tested: Canon 7D Mark II vs. 6D Cameras
kLsXE5CuxRU 2:31 Show and Tell: Papercraft Skull Kit
785pkNzwIQw 54:23 LEGO with Friends: Patrick Norton, Part 1(with Cortana!)
zta6rggdNQs 30:06 Adam Savage Visits the Hollywood Costume Exhibition
gwZJ-R-Q_eo 22:20 Tested: Canon G7 X vs. Sony RX100 III
R3wNZSgvsSc 1:01:18 How to Get Started with Basic Sculpting
XLw2vpxwNjU 4:33 Show and Tell: Ricoh Theta 360 Degree Camera
5bX4aOfs1co 4:17 ImmersionRC's Vortex Racing Quadcopter
gHmd6w1Qc4I 9:13 Quadcopter Combat with "Game of Drones"
p7TfIvVUu9Q 6:05 Aerial Mapping with Quadcopters and Drones
t9gQTmM-GSE 5:40 Test Riding the "Rocket Skates"!
1gO6ugKy9iA 6:09 Razer Forge TV and Turret for Couch Gaming
Sz77Tq9xzpM 4:47 Checking Out the Ultimaker 2 Series of 3D Printers
BTbXIsc_2cc 2:35 Teaser: We Learn Sculpting Basics!
EBZBlu0boqI 2:06 Tested Mailbag: Punished Props Surprise!
tjDVzbUcYSs 2:54 Riding the InMotion Electric Unicycle!
TodyZWardp4 3:37 Print the Mystery Object - AA Great Thing to Have - 1/16/2015
HcSK_CvnKPk 6:58 FPV Racing Phantom 2 Quadcopters!
RiPQpiE4_qY 14:23 3D Printer that Prints Carbon Fiber
9DgJc6o-mhI 4:35 Testing Handheld Gimbal Camera at CES 2015
gvjrT4aSCfc 2:12 The Reversible USB Plug is Here!
JUxrCFxavO8 9:52 Inside Adam Savage's Cave: The Tarantino Shelf
64W6tLqEkfQ 5:52 What's in Your Bag, Norm? (CES 2015)
eTsSXzApUco 8:48 What's in Your Bag, Will? (CES 2015)
i4-ZPWwiux0 2:28 Show and Tell: Hypnocube LED Cube!
8tkpWmvCIzU 11:13 4K Monitor That's Good for PC Gaming?
1aptKJ_Z7Pw 1:44 Help Will and Frank Choose a Cosplay!
2u4ZLGsw1zo 18:18 Testing Apple's Touch ID with Fake Fingerprints
a8JyCGXrFbk 33:56 How to Build a FPV Racing Quadcopter!
6BH3K6fDh10 3:27 Print the Mystery Object: Tip of the Hat
ofPJoE38yR4 5:20 Behind the Scenes with Jamie and Adam's PSA
v8hFcDhBgZ8 13:02 Tested In-Depth: Boosted Electric Skateboard!
uKCcgs8P7rs 2:20 12 Days of Christmas: Legendary Board Game
kND-3dTgkNY 3:22 Print the Mystery Object - Do Do Do Do, Do Doo, Doot - 12/12/2014
QWiqr-lwYA0 1:07:23 Adam Savage's One Day Builds: Barbarella's Space Rifle
mnOzzbl0Uqw 21:40 Tested In-Depth: Structure Sensor 3D Scanner
0SMm10NC8Lk 3:38 Print the Mystery Object - Walk Like an Egyptian - 12/5/2014
6kNNGNAQtZA 51:19 How To Replace a Cracked Smartphone Screen!
uLqy_ZZvsYk 3:09 Female Anna's Hummingbird at 240fps
I3wMvh8_I_s 11:12 Building a Custom Arcade Cabinet, Part 7
sWEdt2lBUdM 2:51 Show and Tell: LEGO Mystery Build #10
rX5fJfpoqdo 8:50 Tested Mailbag: What's in the Second Box?
Ke9ecIB96bM 30:37 Tested Plays #IDARB!
H19z1X3V4UQ 11:44 Quadcopter Racing with First Person Video!
5INybRmEzDo 7:22 Slow Motion Water Balloon vs. Face Slap
t7QqmdlFEgo 6:11 Show and Tell: 3A Dead Cosmonaut Figure
JV9BMksNXbw 7:31 Tested Mailbag: Gears of War 3 Hammerburst Replica!
97a0uhi8Xc4 11:51 Rebecca Watson on Women in Geek Culture
Y4DcbrZX3Vs 8:32 Jamie Hyneman's Racing Spiders Project
jr6eg7Z0YBE 7:16 A Story in 256 Pixels (from Tested: The Show!)
umQDc0wPsGg 27:20 Tested In-Depth: Apple iPad Air 2
qpV6XdyG5XY 5:40 Making Food with Cricket Flour (from Tested: The Show!)
9PhF4B9pjwA 6:41 Star Trek in Cinerama (from Tested: The Show!)
rjYDpDxmhiY 4:25 Tested Mailbag: One for Each of Us
TStUjbIxcy8 8:21 Real-Life Professor Farnsworth from Futurama!
DEVi0mEaJJQ 35:21 How to Mold and Cast a Lightsaber!
pNDPLF1hxAc 6:15 Show and Tell: 3D Printed Steampunk Octopod
psyZzEve9I8 4:04 Print the Mystery Object - Homegrown - 11/7/2014
Wb6eFGbwPeA 5:02 NYU's Interactive Wooden Mirror Project
RftmyK9AhQw 19:35 Tested In-Depth: Amazon Kindle Voyage
hGxw2mzD5C0 13:10 Adam Savage's WWII Uniforms from The Pacific!
w4WD15EgLWc 10:52 The Graphics Technology of Big Hero 6
MMt-yK6R4Xo 5:12 Show and Tell: 3D Printing a Lightsaber
etLOZWdZSs4 11:08 Worldbuilding and Storytelling in Big Hero 6
SLMVkgkfX8U 5:53 Adam Savage's Ghostbusters Costume
31dBpwsYbG8 9:54 The Creature and Portrait Sculptures of Mike Hill
x6Y8sLnv8TQ 6:58 Show and Tell: Quicksilver's Stereobelt Replica
p2HNT5aET0M 3:05 Tested Mailbag: From Japan!
s8zwlbs_QvM 13:10 Testing the Form 1+ 3D Printer
EzfFytHyof4 36:24 Tested In-Depth: SmartThings Home Automation
bPS-W6YZFb4 38:05 How To Make a Gory Hand Prop for Halloween!
8uyLlzUXC00 30:40 Tested In-Depth: Moto X (2014)
LhYyyLd5ZTg 13:18 How Holograms are Made
Hhlf9s3ryNA 1:44 Show and Tell: Bluetooth Hands-Free Adapter
KSj2oeJs4W0 3:24 Who Said That? - Print the Mystery Object - 10/17/2014
oJg_rV6kgDc 31:17 Tested In-Depth: Mac OS X 10.10 Yosemite
f0sSa90x2AE 6:06 Triforce's Video Game Replica Props
NVws0ryS3-E 19:54 How Lifelike FX Creature Masks are Made
9XxRmYMqAh8 8:40 NECA Toys' Alien Nostromo Spacesuit Figure
St1sNrYGqaQ 3:41 Show and Tell: Ultimate Ears Boom Speakers
5LhFXX2kSok 2:13:53 Will Plays - Alien: Isolation on the Oculus VR - Previously Recorded
ITUKD95SckQ 2:29 Tested Mailbag: Hammer Time!
tQg-2GTnoOQ 3:34 Print the Mystery Object - It Seemed Like a Good Idea at the Time - 10/10/2014
vwd1nLrJXqY 2:16 Show and Tell: Astro A38 Bluetooth Headset
N4txwfhGmpo 3:12 Print the Mystery Object - That's Our Joey - 10/3/2014
g0jNhmaSV84 9:30 Testing Nvidia's GeForce GTX 980 Video Card
xtG-JbiH-Gc 0:43 Jamie Hyneman's Racing Spiders: Sneak Peek
yxzkk_9Jvb4 8:58 Adam Savage's Samurai Armor Costume!
7L1Ny40zlUo 38:54 Guardians of the Galaxy SPOILERCAST - The Adam Savage Project - 9/30/2014
O4yiHxiQ3c4 24:21 Building a Custom Arcade Cabinet, Part 6
e_RQ6E61JHM 0:50 Announcing Tested: The Show!
eBUI9ZGjm_c 4:02 Show and Tell: The Useless Box Kit
sRbNiyozMAI 3:45 Tested Mailbag: For the Suit
335SumFfoDk 2:25 MakerBot Mystery Build: For Ice Cream
sZXlwxAe9co 29:28 Tested In-Depth: Desktop 3D Scanning and 3D Printing
bY7SbH_VSyA 13:17 iPhone 6 Plus: Most Common Questions Answered!
cEeNG_MP7GE 26:05 Building a Custom Arcade Cabinet, Part 5
AR0PQ05-dlo 1:03:23 Will Answers Your Questions Live! - No Jars Allowed - 9/19/2014
oDi5V-_1IiY 5:47 Tested Mailbag: Gonk Gonk!
8_QRlS5Kipc 2:32 Makerbot Mystery Build: It's Friday!!!
3XOFu2vxzlk 43:24 Tested In-Depth: Building a PC with Haswell-E, X99, DDR4
DhLjrprVYHc 4:01 Tested + Spacesuit Infographics Poster
2tZ0t6gArAk 21:22 Building a Custom Arcade Cabinet, Part 4
ll6ETFW9r8I 3:16 Show and Tell: LEGO Mystery Build #9
ksIrXYXCOFg 5:20 Tested Mailbag: Not the Police
xfSNE4ow5zU 35:11 Tested In-Depth: 3D Printing with Printrbot Simple Metal
o8Y8HMCz7p4 5:37 iPhone 6 Plus Mockups and Size Comparisons
2zJO8ne-QxI 33:57 Tested In-Depth: Sony RX100 III Compact Camera
Pa8FGlOPJEs 7:36 Show and Tell: Star Wars Imperial Probe Droid Project
sVLnM9fMGdw 10:16 Building a Custom Arcade Cabinet, Part 3
TQhURnHS0lc 5:56 Octoprint Timelapse Test
omn3233E8zc 1:14 MakerBot Mystery Build: A Fast One!
6uOE7LVdiT0 1:20:08 Episode 270 - PAX Prime Report - 9/4/2014
UkDpUbkNKs8 9:27 Robocop 2 Cain Stop-Motion Puppet Replica
gWLHIusLWOc 5:31 Flying the Birdly Virtual Reality Simulator
V_xeOvdOnsQ 11:30 Building a Custom Arcade Cabinet, Part 2
mN2PTsyQ1Hk 4:42 Show and Tell: LEGO Ideas Research Institute
W4kPt1HI_hg 3:34 MakerBot Mystery Build: Beware the Vertices
kKpVxL0KbMQ 4:21 Adam Savage's Incredible Muscle Suit
W8Lc9toLxng 33:08 Tested In-Depth: Amazon Fire Phone
SIYx2Altf2k 8:14 Building a Custom Arcade Cabinet, Part 1
A0GsOkRVRjE 1:58 Show and Tell: Favorite Exercise Armband
0QQGCDvPYUo 6:01 Tested Mailbag: American Tiki
Q2ppdTX-lqw 3:17 MakerBot Mystery Build: Soft Boiled
xjkqE76Ebxs 12:45 Adam Savage's Alien Spacesuit
y60u-1tiIR4 35:59 Tested In-Depth: Nvidia Shield Tablet
J1jDaZX6PCk 27:16 How To Make Resin Copies of 3D-Printed Figures
MGkHIYu9z3E 7:07 Show and Tell: Vintage Nagra Spy Recorder
Yu4IAyMHXg0 8:47 SDCC 2014: Sideshow Collectibles Booth Tour
alpaxt7gGZU 37:04 Tested In-Depth: Microsoft Surface Pro 3
Uj1hFkc3Q68 30:10 Oculus Rift DK2 with Elite: Dangerous + HOTAS
MfGS8MY4jqw 6:13 Star Trek and Firefly Starship Models from QmX
7e5zfsm9VS4 2:26 Show and Tell: Laptop Screen Privacy Filter
JR2td-7HRLs 2:46 Mystery LEGO Mosaic Art! (Designed by Brick-A-Pic)
jNgKm8AfWhY 49:13 Testing the Oculus Rift Development Kit 2: Game Demos
Mi2Qrr45jlg 7:33 SDCC 2014: The Giant Creature Project
dxUpiVRsBSM 2:31 Will & Norm Are Going To Build LEGO Again
DvRhsFc4NKI 3:13 SDCC 2014: Ghostbusters Terror Dog
P0cGjC62XRQ 10:54 Show and Tell: The Curta Calculator
6izghxhFGPg 4:41 Tested Mailbag: Thanks, Elon!
_K5mV2MP8kI 9:13 SDCC 2014: Original Batman and Pacific Rim Props
Lxty1ztIp9M 3:12 MakerBot Mystery Build: You'll Never Guess
ENWhVYheWUw 16:56 3D Printing on Adam Savage's Hellboy Glove Project
CCjKNMONGF4 28:30 Tested In-Depth: Android Wear LG G Watch
2-IyoqV1My8 4:21 Show and Tell: LEGO Mystery Build #8
gIt4Ly9yAn4 3:14 MakerBot Mystery Build: Typeset
HJd4sJfpOLU 14:28 Adam Savage's Hellboy Mecha-Glove Replica
uN6vptYpo5I 7:03 Adam Savage's Prop Replica Drawings
GxqNyjjLbCE 1:32 Show and Tell: Favorite Slim Wallet
YRXEY1fS7BI 3:15 MakerBot Mystery Build: New Studs
MIGkFgi6Qs0 1:26:06 Tested Builds: $540 3D Printer, Part 5
hnq6xqQSHbQ 52:50 Tested Builds: $540 3D Printer, Part 4
VzEvKPAU_QU 12:28 Robocop 2's Cain Robot with Phil Tippett
2At1Zdn106A 40:18 Tested Builds: $540 3D Printer, Part 3
HUuC97V6lpw 36:11 Tested Builds: $540 3D Printer, Part 2
1tE78yHgYaQ 2:22 Show and Tell: LEGO Mystery Build #7
jrXxBqzb9mA 45:50 Tested Builds: $540 3D Printer, Part 1
kZ1d4nX6qtw 3:31 MakerBot Mystery Build: Hot Potato
YmYkFQG3jho 4:22 How To Walk Like an Ape (for Motion Capture)
NIzBROiWVBU 13:35 Building a Custom Computer Desk, Part 4
l9AqYaSRjw0 17:37 Tour of Adam Savage's Cave!
qbpQIp3870c 34:07 Tested In-Depth: OnePlus One Android Smartphone
dcA6g-YPz1I 1:41 Show and Tell: 3D Messenger Bag
UJPIQpeUtRo 2:05 MakerBot Mystery Build: Cubicle
ivQKRnGwNmQ 7:54 Animating Adam Savage's Workshop
fwbXiSGd1OU 11:13 Building a Custom Computer Desk, Part 3
ZJ-hey-o1F0 51:51 The Science and Mysteries of Booze
0xLCOC1Pd8Y 1:57 Show and Tell: Favorite Kindle Paperwhite Case
kMlWgQCiHxA 3:42 MakerBot Mystery Build: Crime Fighter
yTgt6RGo7hU 19:00 Building a Custom Computer Desk, Part 2
QFvvdnSmg5M 27:38 Tested In-Depth: Pebble Steel Smart Watch
k77Ke_BXlzA 3:08 Tested Mailbag: Squirrel or Raccoon?
FyYQxdJdNi8 5:22 Show and Tell: Batman & Harley Quinn Statues
DZCG3YzkofM 3:22 MakerBot Mystery Build: Six Foot Turkey
ONWWFjRFdPM 12:18 Making a Life-Size Dragon! (Monster Hunter 4 Ultimate)
wuFN5Hegzz0 15:37 Building a Custom Computer Desk, Part 1
BOORNX0qWPw 3:20 MakerBot Mystery Build: Choose You!
YIqVI8DU-Wk 22:15 Tested In-Depth: Homemade Pizza with Baking Stones and Steel
xKBD_CPyqq0 29:34 Building a Custom Headphone Hook
Et9U1_DgEwg 5:45 Show and Tell: RoboCop ED-209 Scale Replicas
WRwzsdD0LJs 3:38 RAWR! - MakerBot Mystery Build - 6/6/2014
F8oTXcBxZxg 30:10 Tested In-Depth: Best Entry-Level DSLR Camera
n4cnY0bNAlY 3:59 Show and Tell: Bonelab Skeleton Kits
7mm974A4JcM 14:03 Sideshow Collectibles Behind the Scenes: Sculpting and Painting
vRznvFG5dlQ 2:01 MakerBot Mystery Build: Propped Up
QBNzFUZiFY8 13:19 Behind the Scenes at Sideshow Collectibles!
RnyuONwUKHQ 4:16 Game of Drones: Fight Club for Quadcopters
g-i-e5FDr9M 4:51 What Makes a Drone?
mZ4Ph5V_LQ8 8:59 We Make Papercraft Big Head Costumes!
vI-0OYuE76k 5:10 Meet Titanoboa, the Giant Robot Snake
Bnq96pn4O9Q 3:55 Show and Tell: RC Nano-Quadcopter
fv_dhhFg-No 3:22 MakerBot Mystery Build: Orderly
uqzfzWOLSEA 7:06 Making Real Armor for Cats and Mice
8JV9dF6tYr8 1:52 How Quantum Levitation Works + Demo
iskueKcIEBA 5:13 How GigaPixel Macro Photos are Taken
eV_mmzh_F3A 5:06 Maker Faire 2014: How RC Model Submarines Work
Pe6eo_ntVlU 7:58 Making a RoboCop ED-209 Life-Size Replica!
ER7rhQ7N69k 43:41 Adam Savage's 10 Commandments of Making
Qk1SOcs-_wI 3:17 Show and Tell: LEGO Mystery Build #6
mvX3pGoCTmE 3:31 MakerBot Mystery Build: Stay Fresh
4m6EjnEYEEg 16:51 How Giant Tesla Coils Work (with ArcAttack)
Et-JvYrQ84o 30:39 Adam Savage's One Day Builds: Custom Multi-Tool Belt Holster
20vv-fqbQ8Q 4:10 Show and Tell: Prototype Boba Fett
Phny15bR5UY 2:18 MakerBot Mystery Build: Needs One Penny
baBJdKHw-zQ 13:46 Making a Real-Life Zoidberg Costume!
KcuHMKBruPM 29:47 Meet Roman Mars, Creator of 99% Invisible
7ZeZNk6JOGI 3:45 Show and Tell: Intel's NUC Mini-PC
m5ZzAI29UfM 8:42 Quadcopter Fun Flight Fridays #1
xBtlJBUbjV0 17:51 What Makes a Supercomputer?
LhRVO1CPAL4 2:30 Tested Mailbag: Blockhead Papercrafts!
z-48VdzFPwM 6:02 Show and Tell: Romo 2.0 Telepresence Robot
JQwLcOJBNL0 6:12 Recreating the Original Star Wars Y-Wing Model
zQ8ntEzNvfg 14:32 Painting and Airbrushing The Zoidberg Project
Sk9BRLDn3v4 29:25 Tested In-Depth: HTC One M8 Smartphone
FUtSrLEw5ik 4:55 WonderCon 2014: Todd Coyle's Costume Replicas
OFOiN3VhGC0 5:51 Show and Tell: Sansaire Sous Vide Immersion Circulator
TT-drWxwbRY 2:50 MakerBot Mystery Build: Sorting It Out
eKMKtpaq1gE 8:04 Jamie Hyneman's High-Pressure Air Gun
ujSlgsASlf4 32:44 Tested In-Depth: Amazon Fire TV
yDMfrCe6zWQ 3:49 Show and Tell: BioShock's Motorized Patriot (in LEGO!)
982Pfs5ysmQ 4:03 MakerBot Mystery Build: Something Isn't Quite Right Here
ptVJGrOpyok 24:05 Tested: DJI Phantom 2 Vision+ Quadcopter Drone
VyEMGGe9RtM 2:29 MakerBot Mystery Build: Keep it Toasty
losKkFExneo 6:05 Adam Savage's Gladiator Armor
vnm4xFC2xNo 15:19 Tested: We Buy a Bitcoin!
c6sH2svXVEg 9:25 Show and Tell: Custom LEGO Creations
jclNJThsO0E 8:42 Tested Mailbag: Slamming Tim Tams and 3D-Printed Wonders
bf_43POmSFE 3:37 Makerbot Mystery Build: Failure is an Option
zPd2OiDjI_c 42:00 Tested In-Depth: Sony a7 Full-Frame Mirrorless Camera
f8vXgSDSSFs 4:19 Inside Adam Savage's Cave: What's in the Mailbag?
x9AphhE_jyw 3:25 Jamie Hyneman's Hitchhiking Survival Story
6nCDG4ft7_I 5:17 Show and Tell: Papercraft Architectural Models
GM29uf4HATw 3:25 MakerBot Mystery Build: Mr. Rogers Would Approve
BVoAB5CBPLg 2:21 Jamie Hyneman Describes His Perfect Sunday
JgBNkwE5qRU 2:45 Show and Tell: Guts of Glory Boardgame
Aeqn70e4ty0 3:37 MakerBot Mystery Build: Big Floppy Ears
EjOwusjrpmg 54:00 Adam Savage's SXSW 2014 Keynote: Art and Science
0T3nIk3S8Wc 5:40 Jamie Hyneman on His Home Improvement Projects
RMEAObJXv60 4:04 Show and Tell: LEGO Mystery Build #5
ELhaKZZZpbE 3:22 MakerBot Mystery Build: Could Use Some Propping
8WZW-Nx_8gY 1:54:41 Live Free or Dad Hard - A Bunch of Dads #5 - 3/6/2014
aKflhTrRh2k 8:22 Adam Savage's Terminator T-800 Endoskeleton
opDulWLCV5s 39:01 Tested In-Depth: Audio Gear for Podcast Recording
LNSWYAGNcfo 1:52 Show and Tell: Favorite LED Light Bulb
EgSGB0hfUio 2:19 Tested: Grinding Peanut M&Ms at 2500 Frames Per Second
L8BAvQhdLp0 39:45 Tested In-Depth: High-Speed Camera Technologies
BHkUc23UlR0 6:30 Tested: Shattering Car Windows at 5000 Frames Per Second
AbKyy4IsGvI 3:21 Tested: Detonating an Airbag at 2500 Frames Per Second
9ODmcdjQcHQ 11:17 Tested: Grinding Coffee at 2000 Frames Per Second
AEm0WBXv-Fw 1:34 Show and Tell: Settlers of Catan Boards
qlvoBP1lbyQ 3:38 MakerBot Mystery Build: Running Cool
O1--0DLJv-8 25:10 One Day Builds: Customizing Adam's Hero Sword
lN4X4grFZa0 23:31 The Game Frame Pixel Art Project
pdxRSDzy_xY 4:56 Show and Tell: Cardboard Kinetic Creatures
O0NSqNTGs_Y 2:38 MakerBot Mystery Build: A Little Twisted
J1LMWCHQiNI 4:53 Jamie Hyneman Answers: What's One Myth You've Always Wanted to Test?
G2NiBiqhzo8 1:32 Jamie Hyneman Answers: What More Can Be Done to Introduce Science to Girls?
aLOVS5Fl1OY 16:40 Adam Savage's Mercury Spacesuit Replica
Oa7uT_CKM-Q 3:15 Show and Tell: LEGO Mystery Build #4
rAMSdtxYWT4 9:59 Tested Mailbag: Flavors That Some Would Deem...Unnatural
MxGT6rVkKSo 49:29 Tested In-Depth: SteamOS Beta and In-Home Streaming
cU-cO0RvpwQ 35:10 Jamie Hyneman: "Innovation, Explosions, and the Benefit of Adolescent Behavior"
-3huzae6gzA 3:44 Show and Tell: A Gummi Bear's Anatomy
0XUkD3JH8Dk 3:43 MakerBot Mystery Build: The 24-Hour Print
stgPC7MPpfM 4:11 Inside Adam Savage's Cave: Space Glove Vacuum Chamber
J9DvVx1nXE0 3:26 Show and Tell: Apply Directly to Forehead
xbtVjqgpmJQ 3:16 MakerBot Mystery Build: For Dug
lPLvkrtqkJ8 33:00 Adam Savage's One Day Builds: Traveling Beaver Box
c7g-IfbG4Jg 22:39 Tested In-Depth: Nest Protect Smart Smoke Detector
82c9y-YW6aY 4:48 Show and Tell: LEGO Mystery Build #3
sjJOYa--EUo 1:48 Linksys WRT-1900AC Router Looks Familiar
S_rPKPYc434 4:34 MakerBot Mystery Build: Upgrading the Replicator!
yVMRINlZ3i8 3:35 CES 2014: Parrot MiniDrone Quadcopter
8WWHpWgaq7I 5:26 Taste Testing 3D-Printed Food!
_f-EZJpK5rE 11:54 CES 2014: MakerBot's 3 New Replicator 3D Printers
as-4sm2EIiA 9:48 CES 2014: Sony's Full-Frame Compact Cameras
z13JOE8RZUA 5:57 CES 2014: Modern Pinball Machines
E61feV3zLAE 6:21 CES 2014: Razer's "Project Christine" Gaming PC Concept
SSNgdML7XBM 18:35 Making a Lifecast of Norm for The Zoidberg Project
-RELJD0LBg8 13:28 What's Inside Xbox One's Kinect Sensor
1JAhv9Ed-N4 25:26 PlayStation 4 Teardown! (with iFixit)
btp-Esylx0A 14:29 What's Inside Microsoft's Xbox One Console
-0t-EPgeP_E 2:14:45 So Long, 2013! - Episode 195 - 12/19/2013
iGvv7KwqIU0 1:02:23 Adam Savage Interviews Damon Lindelof - The Talking Room
C06yRS1BRMo 16:46 What's Inside Apple's iPad Mini with Retina Display
n00v3OiOwJA 3:25 Adam Savage Explores a Military Surplus Store
s7xXOjXjBvQ 24:37 The State of Practical Special Effects in Filmmaking
-RWgjtEwQYQ 21:40 What's Inside the Google Nexus 5 Smartphone
y2Gm5YHdllQ 1:06:01 Tested In-Depth: Fun with PlayStation 4 and Xbox One Consoles
X-ewNAQQtqg 2:29 Show and Tell: LEGO Mystery Build #2
cRl4g-75Mo4 1:08:26 The Lies We Tell Our Kids - A Bunch of Dads - 12/5/2013
-vVblGlIMgw 10:46 Inside Adam Savage's Cave: Awesome Robot Spider!
sK1s6Y4qSJM 1:57 How Jamie and Adam Get Ready for "Behind the Myths"
N9y9T3AfqQY 5:26 Show and Tell: 2013 Coffee Table Books
v6ChP280th4 34:58 Tested In-Depth: Sous Vide Cooking with Immersion Circulators
0Z-D8YGqqMk 7:34 The Inventern Episode 15: The Grand Finale!
6AW-ZMm9cjA 2:33 Show and Tell: Copper Coca-Cola Bottle
TwyQWwxTmuw 5:50 The Inventern Episode 14: Building a Crossbow
H86lDi_7ea8 6:09 The Inventern Episode 13: Building a Steadicam
QNPLrbdUzVA 1:46 Join the Tested Premium Member Community!
EOewTV5FOlI 6:04 The Inventern Episode 12: Building a Jetpack
5ujPobTnOB0 1:03:01 Adam Savage Interviews Vince Gilligan - The Talking Room
BJyoema32vk 5:15 The Inventern Episode 11: The Final Challenge
YVHPpPlYPAg 5:49 The Inventern Episode 10: Home Challenge Projects
PYzaGCBp9bI 4:07 The Inventern: Episode 9
HGjSJwlHK6M 9:06 Tested: PlayStation 4 Hard Drive vs. SSD vs. Hybrid Drive
xDpiPQYH2zM 4:34 Show and Tell: Japanese Papercrafts
LnVkyjtg1hc 4:59 The Inventern: Episode 8
8Dv9rA6khlc 2:25 MakerBot Mystery Build: Back for Realsies
ad0dsgy32jc 13:38 Meet Fred Bieser, World War II Airplane Turret Restorer
6uaE47MSmBg 0:32 Welcome to Tested!boMsQ9yh0mw 3:30 Show and Tell: Our Favorite Pencil
WFO_wMDBESo 2:25 Adam Savage Answers: What's a Myth You Won't Test?
KEopyF186UQ 3:34 Adam Savage Answers: Is It Fun Working with Jamie?
v-eK_cpTsOw 7:08 Adam Savage Answers: What's the Scariest Experience You've Had on Mythbusters?
sMYnJF8m3FU 4:15 Show and Tell: H.R. Giger's Alien Diaries
6o5KrRVzOIQ 4:58 The Inventern: Episode 7
34xtfs1PQCk 4:01 Tested Presents The Zoidberg Project!
nKK_4Cj2gk0 4:23 The Inventern: Episode 6
Ji8Gck7kUXE 2:02 Show and Tell: Just the Tips
eAlGjnkiwvM 3:27:49 OCTOBERKAST 2013 - Part 8 - Jeff Gerstmann, Jeff Green, Vinny Caravella, Darren Gladstone
8jVevyfhSI8 2:57:55 OCTOBERKAST 2013 - Part 5 - Giant Bomb's Alexis and Drew, Phil Broughton, Oculus Euro Truck Sim 2
djPGaD24LK8 3:06:21 OCTOBERKAST 2013 - Part 7 - LEGO Build Off, Bill Doran, Jeff Gerstmann, Adam Savage
-TEyV7kHNko 2:53:40 OCTOBERKAST 2013 - Part 6 - Oculus Euro Truck Continues, Oculus Horror Begins
escvJ0_Yk5g 3:05:07 OCTOBERKAST 2013 - Part 4 - Veronica Belmont, The Idle Thumbs, Roberto Baldwin
2GDA-YmjMBo 4:50 The Inventern: Episode 5
XRm4-cPiwtw 3:01:12 OCTOBERKAST 2013 - Part 3 - Carl Merriam, Brad Muir, Roger Chang
KcYAU1NOEcM 2:54:50 OCTOBERKAST 2013 - Part 2 - Colin Campbell, Jeremy Williams, Loyd Case
E9E2Ur1buTc 2:57:10 OCTOBERKAST 2013 - Part 1 - Intro, Brad Shoemaker, Dave Snider
LXfPSpkeLHM 2:52 Tested Mailbag: Fireballed
fDAexTmvgrM 11:22 How To Apply a Realistic Bloody Wound or Scar Makeup
xgYazH1YvtQ 2:54 Show and Tell: LEGO Mystery Build
C4Zs233kngE 4:07 The Inventern: Episode 4
WsZVaOel4_Q 11:19 Tested Mailbag: A Double Whammy
Vs6Gcqkb11g 12:20 Meet Nathan Sawaya, LEGO Brick Artist and Master Model Builder
GpmKq_qg3Tk 21:54 Testing the CastAR Augmented Reality Glasses
5c7wbvusIPA 2:49 Show and Tell: The Nifty MiniDrive
61ToDfOUyVQ 4:41 The Inventern: Episode 3
UiD3YJD2RVU 12:08 Testing the Puffing Gun and Unexpected Food Explosions
dHoUedEmkcw 16:20 The Tools of Prop Making: Tested Tours Volpin Props' Workshop
3ml20dmRvlI 3:33 Show and Tell: A Model of Scum and Villainy
g3iC_Zp4O1s 3:34 The Inventern: Episode 2
pk3n0abUWj4 2:27 MakerBot Mystery Build: Back from Sabbatical
ZXuTtFx6H7I 7:13 Meet Othermill, a Desktop CNC Milling Machine
R0KqaAo85F0 7:42 World Maker Faire 2013: Designing Spacesuits for NASA
VPFHjh7mbhk 5:51 World Maker Faire 2013: OpenROV 2.5 Underwater Robot
Uf6MKHIfqns 3:58 The Inventern: Episode 1
4LxLJl8gCZU 2:31 World Maker Faire 2013: D-I-Y Tesla Coil Kit
0fgqDWyR-oM 4:24 World Maker Faire 2013: MakerBot Digitizer 3D Scanner
mfYadx1hTAU 5:44 World Maker Faire 2013: Making Sound Boxes from Everyday Objects
tNgcCm2YeE8 4:52 World Maker Faire 2013: Pour Steady Coffee Brewing Robot
cxLxwbm7FMA 55:03 Adam Savage Interviews Tom Sachs - The Talking Room
guZ53cSUuOk 1:19:35 How To Build a PC Optimized for Gaming
-kZBrZ3jsmU 3:53 Show and Tell: Adam Savage's Favorite Video Game
KJyG1_SZqU0 2:06 Chloe the Corgi vs. the Hose - iPhone 5s High Speed Test #1
pssuG0pK0d4 13:16 Making a Real-Life Halo Needler Prop
VH1hTh7dbEE 42:41 Tested In-Depth: Nvidia Shield Handheld Game Console
NikSmEoECgg 43:03 Tested In-Depth: Apple iOS 7 for iPhone and iPad
vv6l_oG0gvs 7:53 Adam Savage's Eventful Day at the Schmemmys
078XSj1zKCs 5:09 Show and Tell: Rollin' With Sphero 2.0
79JxJ3R69WI 7:31 Adam Savage Incognito as Jack Sparrow at Dragon*Con 2013
ccUSBPX54RI 0:31 Work for Adam Savage!
fDDTEefXxP4 1:22:05 Watch Will Drink Coffee During the iPhone 5S/5C Introduction - Previously Recorded!
3354QxdbbCs 3:46 Show and Tell: More Kirk Than Sulu
2h1jVCRVqJM 54:57 Jamie and Adam's Dragon*Con 2013 Panel
mOEORip90TI 9:32 George Lucas' Super Live Adventure Show (1993)
onPEtV54a00 11:22 Cooking Sous Vide with the Sansaire Immersion Circulator
TEpw5KHRdPc 1:57 Adam Savage Pays Homage to Animal House at Dragon*Con
ZK5FRPwIWVE 29:10 Tested In-Depth: Leap Motion Controller
3Ee3IV7Vse4 6:50 Tested Mailbag: The Secret Box
VdjwNnPp-n8 57:55 Adam Savage, Phil Plait, and Veronica Belmont Talk Science
hZLRLlHatfY 2:40 MakerBot Mystery Build: Spinning and Winning
Q7RoL1FUR1g 1:02:43 Adam Savage Interviews John Landis - The Talking Room
l-gpge-756w 1:52:08 A Bunch of Dads 3 - Dad Hard With a Vengence - 8/29/2013
Qd-YXqAPFK0 21:15 Jamie Hyneman on His Time as a Boat Captain Sailing the Caribbean
kA_BVP5Sxjc 7:39 Google Street View Inside the Tested Office!
TCVZ0jZCUs4 2:34 MakerBot Mystery Build: Lessons in Failure
3mgCbXCCrRI 4:46 Show and Tell: Gakken SX-150 DIY Synthesizer
PpIg92-3MT0 2:18 MakerBot Mystery Build: Smart Cookie
QoaNS-Pthno 37:06 Tested In-Depth: New Game Demos On The Oculus Rift VR Goggles
TnJD7aoWrlI 13:30 The One Million Movie Props at The Hand Prop Room
uvyh3-V9VI0 4:02 Tested Mailbag: We Have the Technology
63K1_qB0J1I 1:59 Show and Tell: Behold the Bug-A-Salt
Ol6YD93HsAg 12:49 Making Adam Savage's Admiral Ackbar Cosplay Costume (Geek Week!)
BpvAAuejxng 0:31 How To Work for Adam Savage!
IKJMPixyHTE 22:34 Tested In-Depth: Lenovo Yoga 11S Ultrabook
-bg7WFmqR9c 15:47 Testing Adam Savage's New Dissection Microscope (Geek Week!)
qxpqPynM20M 4:55 Show and Tell: Six Million Dollar Home
7oVSaUWeKt0 7:39 Making a Real Life-Size Wall-E Robot
H5AWG8g7IwQ 1:16 What is Tested?
LgkRiMcvDUE 2:04 MakerBot Mystery Build: Swear To Me
hi_c2h9r1YI 35:44 Tested In-Depth: HTC One Google Play Edition
WOty2weC-Nk 6:10 Star Trek: Into Darkness Starship Models from Quantum Mechanix
fgRKG2Rmd60 2:20 Show and Tell: Emergency Home Lantern
HVLId_4GjOM 2:17 MakerBot Mystery Build: 19,000 Solutions
ZWhnHFPLbYA 13:18 Jamie Hyneman on Killer Death Robots and Robot Bloodsport
q4A7hR2k-5Q 3:45 Show and Tell: Hot Toys Iron Man Mark VII 1/6 Scale Figure
-okuey77X9E 3:59 Tested Mailbag: We're Being Watched
4sCReGjfZ_A 16:37 Adam Savage's One Day Builds: Han Solo's DL-44 Blaster
VhNNzgNZaLA 9:08 Adam Savage Geeks Out Over Woodworking Saws
hKfRcop0MAs 10:32 Jamie Hyneman on Electronics and Microcontrollers
o8qnOUc_zOQ 4:25 Show and Tell: Mechanical FlipBook Kit
u19mQlQeMmE 14:08 How NASA's Mission Control Supports Space Missions
VsdoJy8rzZg 10:58 How Astronauts Put on Space Suits
BRPb0J8lZcY 7:07 How Astronauts Train Underwater at NASA's Neutral Buoyancy Lab
ZwwEgZvxljQ 8:31 Jamie Hyneman's Interest in Russian Linguistics
dPZyz7LlTAc 2:46 Show and Tell: Roost Laptop Stand
-fxeJI_gWP8 2:31 MakerBot Mystery Build: Home Office Basketball
xrc1uIIeppk 27:01 Tested In-Depth: Apple 11-Inch MacBook Air (2013)
qAGIpTupW54 52:47 Adam Savage Interviews David Chang - The Talking Room
b7MLhzxOwb0 1:14 Show and Tell: Easy Desktop Cable Management
H1Zc1rsGFJI 0:53 Google Glass vs. Public Bathrooms
hSdlobMmJW0 9:54 Tested at CERN: How The ATLAS Experiment Works
EnBYZd2Ey6U 19:43 Tested Visits The Large Hadron Collider and ATLAS Experiment
Ctzc8QSF6mQ 29:04 Tested In-Depth: Google Glass Explorer Edition
aHZnqffmiwA 7:34 Show and Tell: Tron Arcade Cabinet Miniature Model
JxQpLfxyA_0 2:34 MakerBot Mystery Build: Uno Dos Tres
0eGiQzf6nac 15:55 Inside Adam Savage's Cave: The New Laser Cutter!
EUgeB46JiXw 30:37 Tested In-Depth: Getting Started with Arduino
HhmDGbYueTo 5:31 Brad and Patrick from Giant Bomb on the Xbox One Event - E3 2013 - Recorded With Google Glass
rkUj3lomdMw 33:01 Q&A With Adam Savage and Will Smith (not that one)
t7-cqcFNYRA 2:52 Show and Tell: Podcasts in the Shower
dEmZAH63gy4 2:19 MakerBot Mystery Build: Where the Pros Go
EmsNaVIzDIU 8:06 Inside Adam Savage's Cave: Hacking a Flashlight for Adam's EDC
HwrkXSO4788 16:22 The Making of a Gaming Mouse: Inside Logitech's Labs
k2d05_v8FWE 3:42 Handheld 3D Scanner at Maker Faire 2013
nJK4LlOwVds 7:26 Maker Project: RGB LED Animated Pixel Box
2QQKMlDK148 2:11 Makerbot Mystery Build: Meow Mix
l-OkZ7M4J0M 1:08:16 60 Minutes of Your Dumb Questions Answered: LIVE! No Jars Allowed - 5/30/2013
Q69LkrvTyUo 6:01 Touring The Nautilus Submarine Art Car at Maker Faire 2013
DOI2W7qwfqg 3:40 Meet the Shopbot Handibot - It's a Smart CNC Router - MakerFaire Bay Area 2013
9HYESMMI9_g 2:39 Giant Walking Pod Robot at Maker Faire 2013
r2oNpvtKGuE 9:33 Maker Project: Lighting Up Old Pinball Playfields
zwuZplvlw6s 3:11 Programmable LED Shades at Maker Faire 2013
78ndKQj6sHc 3:53 Flying The Viper 2.0 Flight Simulator at Maker Faire 2013
f8-UKqGZ_hs 10:51 Astronaut Chris Hadfield and Chef Traci Des Jardins Make a Space Burrito
5qAfcyQFk6Y 12:36 Adam Savage on Working Smart at Maker Faire 2013
cobJzLQqUmo 9:44 Astronaut Chris Hadfield Plays Jamie Hyneman and Adam Savage's Space Game on the ISS
b8GhQ6wilw0 1:44 Show & Tell: Favorite Electric Pour Over Kettle
qFM5khxxGaw 2:17 MakerBot Mystery Build: Booster Packs
49TkVLRWKoc 12:25 Astronaut Chris Hadfield and Chef David Chang Test Gourmet Space Food
6vVle67Tfjc 19:22 Tasting Astronaut Food: Inside NASA's Space Food Systems Laboratory
cJ3Q1cuUDbA 5:01 Motion Time-Lapse Photography Testing with the Radian
BZdGVSCmzWY 1:31:43 A Bunch of Dads 2 - Dad Harder - 5/12/2013
iyBFBmZGVnE 1:54 MakerBot Mystery Build: Shenron By Another Name
IAGOJytpEt8 1:20 David Chang and Traci Des Jardins Taste Astronaut Coffee
UAHHs8XpmBc 1:47 Show and Tell: Favorite Cable Organizer
qn6nWLSIfPM 2:08 Makerbot Mystery Build: Keeping Your Details Secure
wns4oLXHNRI 1:44:38 Episode 168 - On Carbonated Beverages - 5/2/2013
bgzxuJ-BCqU 19:09 Tested: Centrifugal vs. Masticating Juicers
FWF69cmT6-I 4:16 Show and Tell: Collecting Screenprinted Posters
A_D50Xp9bSQ 2:01 MakerBot Mystery Build: Concert Festival Essential
EKhp4H3DUwE 17:53 Jamie Hyneman Tests the Oculus Rift Virtual Reality Goggles
jBtyyb9dMGY 1:25 Show and Tell: How Wide is It?
1p-oAyymw1M 9:54 Jamie Hyneman's Thoughts on Designing and Making with CAD
eSYQyAljYOY 4:37 Hacking a $20 Toy Helicopter into an Autonomous Drone
7854iZT6PLs 6:33 MakerBot Mystery Build: Smooth Move, Ferguson
ffk3mf8BwqQ 1:40:56 Episode 166 - Lake Wobegon Is a Lie - 4/18/2013
R9S0fTOVug4 3:27 Testing the Puzzlebox Orbit Brain-Controlled Helicopter
qhMdNxV3g38 2:36 How To Brew Coffee with the Able Kone Brewing System Not for Most People
qBWl-LQmp_M 1:56 Show and Tell: Favorite Pocket Flashlights
R9Z6HVNF3ok 3:14 MakerBot Mystery Build: Nemo's Friend
0JnTThZMJAg 13:12 Adam Savage's One Day Builds: Strandbeest Model Kit Fitbit Zip Wireless Activity Tracker
GvzIFxdPN-E 3:35 Show and Tell: Battle Wizards
Qu6VoMtydDk 3:04 WonderCon 2013: Metal Gear Solid's Raiden Cosplay
9kr9h0UEjQc 1:08:14 Episode 164 - Will's Dead MacBook - 4/4/2013
F7cSsnLlXIQ 4:24 Restoring the Star Trek: The Next Generation Enterprise Bridge
P50fvL_EWYY 44:08 Testing the Oculus Rift Development Kit: Team Fortress 2 Virtual Reality
vBqT9ZFyeTU 4:55 WonderCon 2013: How To Be a Ghostbuster
I0_lIUd92e4 5:32 Show and Tell: Tested Goes to WonderCon 2013
fDxRVJANES4 4:46 Sandboxr at GDC: 3D Printing Made Simple
NcsovUKD0lU 1:58 MakerBot Mystery Build: Swing the Sword
py4v10Vlc0Q 6:19 Oculus Rift at GDC: How Hawken and Team Fortress 2 Work in Virtual Reality
bypi7h6WOGg 8:05 Adam Savage's Everyday Carry (EDC)
kjcterqHPZk 1:36:32 Episode 163 - Vader Helmet - 3/28/2013
hTCIlO0oLP8 28:36 Introduction to 3D Printers: The Promise and Pitfalls of Desktop Manufacturing
3VQEOkCWEVY 2:19 Whale Tagging: Marine Biologist Ari Friedlaender Tags Whales for Science!
9bOixhxmTd0 1:14 Show and Tell: Geek Dad
LWkU51YjCMg 3:46 MakerBot Mystery Build: Time Crisis Avoided
7I0rX7t1J0Q 15:48 Tour of Adam Savage's Home Office
zQaZ_-i0EJM 17:09 Robot Bartenders of BarBot 2013 Serve Up Drinks
xLOWjeDkiFk 3:16 Show and Tell: Never Do Anything Small
mQWzFxVlMB4 9:09 Tested Mailbag: What Flag is That?
5ziTbDQC0gA 3:43 MakerBot Mystery Build: A New Home
1dGBRGtyzX0 20:30 Cooking Perfect Omelettes with Adam Savage (and Traci Des Jardins!)
6XnU8MPjp1Y 1:38:38 How to Build a Kick-Ass Gaming PC 2013
beOKjMbD9YA 3:51 Show and Tell: Putting Old Glass to Work
gY0rAVnzt0M 3:52 MakerBot Mystery Build: Choose the Red Pill
MPsUBmgBXX4 1:34:30 A Bunch of Dads - 3/7/2013 Google Nexus 4 Smartphone
OkOB4uLn06s 41:34 Tested In-Depth: Google Nexus 4 Android Smartphone
oKw1Bdf5eGQ 3:18 Show and Tell: Your Very Own Sad Keanu
ZlA15Uaw4MA 18:06 The Bay Lights Project: Attaching 25,000 Lights to the Bay Bridge
tycMj1Kv-Lk 4:41 MakerBot Mystery Build: Bear[d] with Me
YXzxEqdvuIE 31:11 One Day Builds: Adam Savage Demonstrates Weathering Tricks Mophie Juice Pack Helium for iPhone 5
_8DZ-9yQiGw 30:55 The Adam Savage Project - Shop Safety - 2/26/2013
HczkH88KdZk 1:45 Show and Tell: The Writer's Best Friend
jZ-l_BLOg5o 3:36 MakerBot Mystery Build: Not Included
lOuDa7wszZ0 4:04 The Best and Worst of Bootleg Star Wars Toys
uRW-YxKWzjA 7:23 Rare Star Wars Toys That Never Made it to Stores
T-rZ528C8Ss 17:00 The World's Largest Star Wars Memorabilia Collection at Rancho Obi-Wan
lbBY0TrMURE 6:08 Show and Tell: The World of Art Toys
p5z5_9nIqcY 3:43 MakerBot Mystery Build: Plastic, Not Tin
-tUHJnl8qPM 32:11 One Day Builds: Adam Savage Makes Something Wonderful from Scratch Sony NEX-5R Mirrorless Interchangeable Lens Camera
XfYWPN2O1yk 4:57 Show and Tell: Not Your Typical Action Figure
DBRsMzCyM98 3:23 MakerBot Mystery Build: Empty Your Pockets
a7U45gRkBPA 13:22 w00tstock Founder's Night with Adam Savage, Wil Wheaton, Paul and Storm
AkOA3dn9TmM 10:11 Adam Savage Geeks Out Over Camera Gear
IsXk4wsBaiY 4:25 Show and Tell: Star Wars Behind-the-Scenes
szjuBzkxnh8 4:45 Tested: GoPro Hero 3 Black Edition vs. GoPro Hero 2 Video Quality
rl0puahT5Eg 2:34 Show and Tell: The Best Rubber Band Gun Ever
J5HOvQRK4WA 7:54 PC Build Race 2013: The Return
cJQPbMvWC6A 8:55 Behind the Signs of The Las Vegas Neon Boneyard
L9_Cm8lLumo 1:28 CES 2013: Norm Drives the Mondo Spider
yeQJ3TQOl5Y 3:40 MakerBot Mystery Build: So Damn Itchy
r6NZf8VH90w 8:13 CES 2013: 3D Systems CubeX Trio 3D Printer
jbj8WpPSDoY 7:16 CES 2013: MakerBot Industries Replicator 2X 3D Printer
hiSTxKkqHTY 4:58 CES 2013: How Liquipel Will Make Your Phone Waterproof
Aqx8zfdcmlI 7:18 CES 2013: Xi3 Computer System Optimized for Steam
v6lpUX8Yavk 5:06 Tested Mailbag: Starting the Year Off Right
rGem_fxBAo8 4:59 Makerbot Mystery Build - Puzzling
uZiPX6pseL4 1:03:31 Tested at CES 2013 Day 4: Audiophiles, Nvidia Shield, 3D Printers
RTX4hE2JIsY 1:05:58 Tested at CES 2013 Day 3: Wirecutter, PC Build Race, Lenovo
euWMMENNjv4 1:18:25 Tested at CES 2013 Day 2 Recap with Wired Gadget Lab
WdBgIKrsI1s 1:11:26 Tested at CES 2013 Day 1: Press Conferences, 1080p Phones, 4K TVs
1WA6n5lORV0 1:10:30 Tested at CES 2013 Day 0: Unveiled, Augmented Reality, Nvidia's Shield
N_KwUmMMCK0 1:38:46 Episode 153 - Happy New Year! - 1/3/2013 Sony Cyber-Shot RX100 Digital Camera
cfxMFhkt6Ls 3:20 MakerBot Mystery Build: Run of the Mill
4DUULvPJTgk 26:27 Adam Savage's Blade Runner Blaster Obsession
4pg8A0ab6S4 14:10 Tested Learns the Craft of Letterpress Printing
Hyl95NRnz_8 18:53 Tested Visits the Space Shuttle Enterprise
vYb_gOVRMlw 3:20 MakerBot Mystery Build: For the Careless Lenovo Ideapad Yoga 13 Laptop
vKRG6amACEE 20:27 Inside Adam Savage's Cave: Model Making for Movies
9jTTZPARY90 17:08 The Awesome Aircraft at the Intrepid Sea, Air and Space Museum
Uf6VQZ-ny6c 49:45 Tested In-Depth: Discussing Microsoft Windows Phone 8
bSYt6-dJ0NY 3:48 MakerBot Mystery Build: Line Waiting
FXYcHgDf10U 10:40 Inside Adam Savage's Cave: The Dodo Birds Project
INaV40Hy66Q 22:47 Tested Test Drives the Tesla Model S Electric Car
Zt0ObjJMIcg 33:26 Tested In-Depth: Discussing the Amazon Kindle Fire HD 8.9" Tablet Amazon Kindle Fire HD 8.9" Tablet
ZxbFAsizQV4 2:44 Slow Motion Massive Water Balloons vs. Face—Who Wins?
EpKCkpwu6JA 3:43 MakerBot Mystery Build: They Call Me
pIpN8yWEqNQ 11:32 Learning How To Make Dovetail Joints with Adam Savage
88vcFHIQG7A 13:38 The Awesome Robot Battles of ComBots Cup 2012
cVpr9ufcMOI 8:15 Tested: Does a Bullwhip Break the Speed of Sound
-NgRRZ0ZTqI 3:27 MakerBot Mystery Build: OK to Go
0EjkQaB8dvw 4:37 Welcome to the New Tested Office: Part 3
Yk3DXfphLEw 3:41 Makerbot Mystery Build: On My Shoulders
c6Rmbj6NSUc 4:14 MakerBot Mystery Build: Incomplete Without It
hT6ZQJ2eIG4 10:19 Tested vs. The Liquid Nitrogen Dewar
jWKlUur7ROo 2:08:22 OCTOBERKAST 2012 - Part 12 - Jason Cross, Patrick Klepek, The Exciting Conclusion
qxhPdKCb2-o 1:49:52 OCTOBERKAST 2012 - Part 11 - Loyd Case, Jason Cross
_WU9HMTp_QA 1:53:33 OCTOBERKAST 2012 - Part 10 - Jeff Green, Ryan Block
byIjDlwrskE 4:36 MakerBot Mystery Build: Spare a Hand
KVQIZw3UvU4 2:16:04 OCTOBERKAST 2012 - Part 9 - Adam Savage, Jeff Green
SinOtIpjhBw 1:52:56 OCTOBERKAST 2012 - Part 8 - Jeff Gerstmann, Brad Shoemaker, Darren Gladstone
rx1FbHfiA0k 2:01:42 OCTOBERKAST 2012 - Part 7 - Bricked Conclusion, Jeff Gerstmann, Brad Shoemaker
Rem30sfm_x4 5:57 Adam Savage Builds Patton Oswalt's Halloween Costume
u4qWe60BVgE 1:56:19 OCTOBERKAST 2012 - Part 6 - Patrick Norton, Drew Scanlon, Bricked Begins!
4kIsSXMNT54 1:56:57 OCTOBERKAST 2012 - Part 5 - Alexis Gallisa, Patrick Norton, Drew Scanlon
EQrDphoVNn0 2:00:30 OCTOBERKAST 2012 - Part 4 - Roberto Baldwin, Alexis Gallisá
Z9eOgEmuXAA 1:53:19 OCTOBERKAST 2012 - Part 3 - Scott Sorenson and Bill Doran
m1wv16Q_12U 6:57 Tested vs. The Slow Motion Camera
2apCzJSEhSw 1:55:41 OCTOBERKAST 2012 - Part 2 - The Idle Thumbs, Vinny Caravella
KY5Fo-aQvxY 1:48:55 OCTOBERKAST 2012 - Part 1 - Welcome to the Show, Roger Chang, Brad Muir, Ryan Davis
WGr4URdeoEI 10:04 World Maker Faire 2012: The Power Racing Series
NAvwsnVFNng 56:00 No Jars Allowed - 60 Minutes of Dumb Questions Answered
zaAF6ZMMPnA 14:25 Tested Visits the MakerBot Store in New York!
hQWcIkoqXwg 9:39 Inside Adam Savage's Cave: Geeking Out about Bits and Bytes
e52fXpS9YCY 12:14 Meet Kelvin, Smitten Ice Cream's Liquid Nitrogen Machine
djoicg92kwQ 2:58 World Maker Faire 2012: Brooklyn Aerodrome
vTcMxXWtzus 8:22 Tested Visits the NYC Resistor Hacker Space in New York
4yYp70X4BNc 4:11 World Maker Faire 2012: Liquidware Amber Custom Android Tablets
Rn0gHb9hDw4 6:00 World Maker Faire 2012: Dug North's Wooden Automata
cMz87PlKTvs 18:03 Inside the Botcave: A Conversation with MakerBot Industries' Bre Pettis
0RPgn41EXpE 2:23:59 Episode 142 - OCTOBERKAST Announced! - 10/04/2012
fkjiqdvElsw 4:34 Tested Goes to World Maker Faire 2012 in New York!
iA7GYjUOp1E 3:31 World Maker Faire 2012: Project Sentry Gun
YzpVtkwkxMc 6:46 World Maker Faire 2012: Formlabs Form 1 3D Printer
WCEWC2B6YoM 3:41 MakerBot Mystery Build: Hello, My Name Is
UapwPPEPwsA 3:29 Tested Mailbag: We're Knitwits
NNSCGV_x_f0 16:17 Meet Dezsö Molnár and His Flying GyroCycle
z_2zHW6KaoY 8:42 Tested Mailbag: It's a MakerBot Mystery
hce-0xeXxoQ 8:48 Inside Adam Savage's Cave: C-3PO Protocol Droid
M_D5_LGhSaU 20:15 Adam Savage's Keynote at the XOXO Festival
Nby46qvL-bQ 5:48 MakerBot Mystery Build: Figure it Out!
pwp5Z3ghYss 2:32:21 Episode 139 - The iPhone 5 Arrives - 9/13/2012
p5VJpITFXnM 6:38 Inside Adam Savage's Cave: Master and Commander Costume
25pNpxiCE_E 1:01:37 No Jars Allowed - 60 Minutes of Dumb Questions Answered
B4K1l-QQBJ0 3:39 Makerbot Mystery Build: It's In a Box
bQbbtnTz1KE 18:49 Inside Adam Savage's Cave: The Bourne Identity Burn Bag
C8o33SiG74M 3:21 MakerBot Mystery Build: Back to the Basics
EA1jeViV4l8 14:07 Jamie Hyneman On Welding in His Workshop
WHfNecS6gEw 3:05 Makerbot Mystery Object - It's Full of Facets!
w-OFy6vCs_c 3:16 Makerbot Mystery Build - Wow, That's Tall!
2oelkn4qTWg 3:25 Inside Adam Savage's Cave: Deadmau5 Helmet
pNeHJY1XODQ 19:33 Tested: Flying the Boeing 737 Flight Simulator
J5BmA3ejyHY 13:12 Tour the Boeing 737 Flight Simulator Built in a Garage
PT06dNHKArk 3:43 MakerBot Mystery Build: The Triumphant Return!
Y9GIMaNwUEM 7:20 Inside Adam Savage's Cave: Spirited Away No-Face Cosplay
PNkxpXcn4tM 10:40 Quantum Mechanix's USS Enterprise 1701-D Artisan Replica
dleIC3KX_uM 6:29 Welcome to the New Tested Office: Part 2
_hYBDDZjgiw 8:10 Inside Adam Savage's Cave: Iron Man Mark I
YyVz84m2KLM 6:55 Tested: Cooking the Perfect Pizza at Home
1zUPgXqyV7o 3:46 Inside the Modernist Cuisine Kitchen: Quail Eggs
I_tgxzXmpKQ 16:46 Inside the Modernist Cuisine Kitchen: Cryo-Fried Steak and Perfect French Fries
E6L-uT3XOI0 7:14 How Modernist Cuisine Photographs Cross-Section Cooking
LO8xKv0iUd8 26:34 Not Exactly a Mailbag: The Makerbot Replicator Arrives
TNa4NaYF9jQ 22:35 Inside the Modernist Cuisine Kitchen: Elote and Pistou
gDm1PChnF-A 11:26 Tested Tours the Modernist Cuisine Laboratory Kitchen
_EV2qq2-Lck 12:48 Jamie Hyneman's Electric Outboard Boat Motor
qSJsEwKqAbU 9:16 Inside Adam Savage's Cave: The Blade Runner Blaster Pistol
sx_-SkW24P0 3:54 Welcome to the New Tested Office: Part 1
qAUBqPwlpao 13:45 Tested: Apple MacBook Air 13" (Mid 2012)
1OPSbF6kM9k 5:48 Inside Adam Savage's Cave: The Tool Boxes
QlA9N5WZ2hs 18:51 The As Yet Untitled Adam Savage Project #5 - Skeptics - 07/03/2012
MplNEsW_fEI 7:01 How to Properly Light a Charcoal Grill
QiVmFiOecRg 8:34 Inside Adam Savage's Cave: Indiana Jones Bullwhip
JwbTfcB0QHg 24:37 The As Yet Untitled Adam Savage Project 4 - Girls - 6/26/2012
Q0pF38ZCJ2c 14:01 Testing the New Able Brewing KONE Coffee Filter
e4c3iGPoCgY 2:03 Tip of the Day: Custom Vibration Alerts
4jYZTFBTKsM 5:55 Inside Adam Savage's Cave: The Rocketeer Rocket Pack
VErGD1A_iwA 13:23 Tippett Studio Tour: Starship Troopers, Jurassic Park, and Robocop
7iLD6b69O28 23:13 The As Yet Untitled Adam Savage Project #3 - Being a Geek Dad - 6/19/2012
lVgQ6khAI20 9:12 Inside Adam Savage's Cave: Metal Lathe with Digital Readout
RlemDMFWNbQ 17:59 Meet Phil Tippett and his Mad God
rt76k1awa6I 22:56 The As Yet Untitled Adam Savage Project #2 - Getting Started Making - 6/11/2012
gLVgipHFUXU 4:21 E3 2012: Hokra at Indiecade
W8s1Vc01iNs 9:26 E3 2012: Microsoft's Xbox SmartGlass Technology
cFwgG-3ZPjw 3:22 Inside Adam Savage's Cave: Tyrannosaurus Rex Skull
IIRMysBP1qA 16:12 The As Yet Untitled Adam Savage Project #1 - On the Subject of Man Caves - 6/5/2012
DneujRTXwic 14:21 The Science of Tintype Photography
vkBl3ELm1bU 8:48 Inside Adam Savage's Cave: Rasputin's Mecha Glove from Hellboy2cHymaxPFgI 14:56 Maker Faire 2012: The Viper Motion Controlled Flight Simulator
IU8AUNhGLBU 3:25 Maker Faire 2012: Warhammer 40K Space Marine Armor
a-XGT8rPZs8 3:33 Maker Faire 2012: The Undersea Voyager Project
S0frjbVACig 1:21:43 Episode 122 - Don't Do the Dew - 5/24/2012
7cs7FGCrkPw 5:29 Maker Faire 2012: The Wall-E Builders Club
nxeK16pdoyE 6:40 Maker Faire 2012: OpenROV Underwater Robots
Q6ZqbYA2lzo 5:32 Tested Goes to Maker Faire Bay Area 2012
_otrgJ8Lmx4 19:33 Adam Savage's Maker Faire 2012 Talk: Why We Make
8O5IfnFaNUs 7:07 How To Build a Third-Person Camera Rig with HD Video
j_n8p22ku0E 8:37 Inside Adam Savage's Cave: The Zorg Industries ZF-1
b1OAH0vf1_0 1:10 24fps Filmic Pro Test Video #2
d9XIywFP9xU 1:49 24fps Filmic Pro Test Video #1
dVdxN7793-I 25:30 Will and Norm Visit the Reed Research Reactor
WRZVxM_ByQ8 1:57 Tip of the Day: Remote Camera Shutter for iPhone
BVf2gk3-ppw 5:11 Third Person Camera Test #2
grRit8dwWuU 9:16 NAB Show 2012: Zacuto's Steve Weiss and Bruce Logan, A.S.C.
T8Sc47ZcbmI 2:09 Coffee Sipping, Slurping, and Spitting at SCAA 2012
nGbHXzK_zeI 4:48 The New Espro Press: 35 oz of Clean Brewed Coffee
MjR1iVLHsfg 3:12 Third Person Camera Test #1
FtBYnoHEPzU 3:07 Interview with the 2012 World Aeropress Champion
CCttopY0PWs 2:25 The Elaborate Shooting Galleries of NAB Show 2012
GyC4bFEQRKw 2:14 Canon EOS 60Da: A DSLR Made for Astrophotography
QE48v2Lg5ms 1:49 What Shooting Photos at 11 Frames Per Second Sounds Like (Nikon D4)
9sMxyIsTfxM 5:11 How To Aerate a Bottle of Wine in 30 Seconds
YLS4UGD-2Zk 13:27 How To Cook a Steak in a D-I-Y Sous Vide Cooler
fyYB5wDbvJE 1:24 Tip of the Day: Mass Delete Your Email Spam
ysZdR1HCS8g 3:24 Molecular Gastronomy: What is Spherification?
5OEQQw3UO2U 4:41 Tested: Is Norm a Supertaster?
aWCG_mFyZdE 7:22 Exploring Modernist Cuisine: The Science of Contemporary Cooking
OAMCxxHR6CM 4:52 Tip of the Day: How To Stop Your Glasses from Slipping
fDCSwDnCXk4 23:30 How To Properly Take Apart a Sony PlayStation Vita
bb9gYOc6BKc 1:09:05 No Jars Allowed - April 4, 2012
yHgWtK18qxk 2:50 Tip of the Day: Macro Photography with Interchangeable Lenses
rEJ6r8qNSpk 0:28 Stop Motion of a Lego Midi-scale Star Destroyer Build
3tQeJ5rDjbc 9:09 The Secrets of The World Record Paper Airplane Design
JjczuYEL_qQ 7:04 How To Fold and Tweak a Great Paper Airplane
FQwGIYyuAgM 1:44 Tip of the Day: Quick Access to iOS Settings
lxsw97NjBqo 16:00 Meet John Collins, "The Paper Airplane Guy"
35bpCipofRM 7:06 Tested Mailbag: We Were Not Prepared for This
MLl8etbmm3w 12:16 Maker Interview - Harrison Krix of Volpin Props
HKr63RC8sqE 1:12 iPhone Tip of the Day: Tap and Drag
Z7tiqnZMXF8 24:43 iPad Autopsy - Will and Norm Disassemble Apple's New iPad
bbTV6M8rPa0 1:05 Jamie and Adam Welcome You to Tested!
CFavhTixcKM 1:55:30 The Amazing Test: Bricked! Finale, Part 2
5h_fpGOY4mo 1:40:17 The Amazing Test: Bricked! Finale, Part 1
xctpfYEGfJg 2:10:39 Episode 110 - L.E.A.H. - 3/1/2012
tiy1x5nBKSA 57:56 The Amazing Test: Bricked 21
ov2GmP1nob4 47:02 The Amazing Test: Bricked 20
hRZRuecE-pc 35:56 The Amazing Test: Bricked 19
mXUTBAEHpZs 34:38 The Amazing Test: Bricked 18
jUtBG2IJxc0 35:29 The Amazing Test: Bricked 17
51ok9A3ekLo 35:56 The Amazing Test: Bricked 16
MtGiRar6d34 37:21 The Amazing Test: Bricked 15
qnjENg0JiJs 36:12 The Amazing Test: Bricked! 14
snqqBtu39r4 35:02 The Amazing Test: Bricked 13
T5C2jdxd8fI 47:46 The Amazing Test: Bricked! 12
5XsuAUjkUYs 36:25 The Amazing Test: Bricked! 11
240E6n58tEY 33:52 The Amazing Test: Bricked! 10
uuw19cwySw8 2:14:44 Episode 107 - Animal Crackers - 02/09/2012
Evta9HhKSgo 33:29 The Amazing Test: Bricked! 09
vRyFafcS4GU 33:49 The Amazing Test: Bricked! 08
pFM9Uno45_c 36:50 The Amazing Test: Bricked! 07
yQg0Erb641E 34:51 The Amazing Test: Bricked! 06
3C6XzhWjJpA 33:42 The Amazing Test: Bricked! 05
j9WL9aT188Y 2:39:54 Episode 106 - Groundhog Day - 02/02/2012
znGRCNqvwSI 35:22 The Amazing Test: Bricked! 04
afmuziMmgLw 33:18 The Amazing Test: Bricked! 03
8Q6HiZnBj68 33:27 The Amazing Test: Bricked! 02
4voIKGvMrtY 33:28 The Amazing Test: Bricked! 01
ZuyUS3MDxQY 2:18:37 Episode 105 - The Fast and the Fourier - 01/26/2012
xUXC73puhbA 1:11:37 No Jars Allowed - Delayed, But Not Forgotten
sIFU61EKBlk 1:18:47 No Jars Allowed—Early Morning Edition
Ptq93jgG0Fo 2:39:34 Episode 96 - Listener's Choice! - 12/15/2011
-9BjZSr-6z4 2:23:28 Episode 95 - Dire Straits Hate - 12/8/2011
vZwyqJCLWLg 1:14:29 Late Night With Will, No Jars Allowed [PREMIUM]
WGbhWuqBwFA 2:17:36 Episode 94 - Stuffing All Year 'Round - 12/1/2011 [PREMIUM]
QgbgltGRaUU 2:31:54 Episode 93 - Talkin' Turkey About Tech - 11/23/2011 [PREMIUM]
d-jhnaVbgLc 5:38 The Perplexus Epic vs. Norm [PREMIUM]
Hvd-sQgxUcM 44:12 Red Phone Diaries - Episode 1 - Will [PREMIUM]
0cPCeFxK-Hg 5:53 The Perplexus Epic vs. Dave [PREMIUM]
exKdsFDmODc 1:01:39 Whiskey Media: Happy Hour 08/12/11
O0YQBLf6t_4 1:03:04 Whiskey Media: Happy Hour 07/22/11
idqSjyGI1LI 56:58 Whiskey Media: Happy Hour 07/15/11
P2LRFmCkLnI 53:11 Whiskey Media: Happy Hour 07/08/11
OWhQeH3SWEw 1:01:59 Whiskey Media: Happy Hour 06/17/11
5cFWJUE-K1A 1:04:11 Whiskey Media: Happy Hour 06/10/11
soCrquaytSI 1:08:41 Whiskey Media: Happy Hour 05/06/11
gTS-hHAJM38 1:02:36 Whiskey Media: Happy Hour 04/15/11
wInEpU89iwg 1:05:11 Whiskey Media: Happy Hour 04/08/11
wDyp0iUxP70 1:14:18 Whiskey Media: Happy Hour 03/18/11
ED_6asYE2yk 1:40:24 How To Build a Future-Proof $1500 PC
YjHnAwno-LI 1:59:13 Whiskey Media: Happy Hour 03/04/11
IPzb2o1tfC8 48:52 Whiskey Media: Happy Hour 02/18/11
XHcrsSwsOMw 1:07:05 Whiskey Media: Happy Hour 10/22/10
w_FBUNJFOJQ 1:17:24 Whiskey Media Happy Hour - 10/01/2010
3WLG8_dfX9M 0:53 Good News Everyone!
Vdf8WTWq6kQ 2:16:36 Episode 109 - The Wrong Side of History - 02/23/2012
hcc6U-Ez-k8 1:08:50 Whiskey Media: Happy Hour - 9/24/2010
tuxM-avNfLo 1:42 LEGO Super Star Destroyer VS. LEGO Death Star
i_ioWxz0xGU 6:47 MakerBot Returns: Reboot
gRjAoKWKBrE 1:10:37 The Amazing Test: Bricked!
xwWemnH5x2w 9:29 The Best New Products at CES 2012
TwzIw6TmCPk 11:11 The Best New Technologies at CES 2012
njMEuW1-f4s 9:04 Quick Look: Phone Accessories for Your Car
4d8msfKla7g 6:51 CES 2012: Day 03 Wrap-Up
F4WVg7InsGQ 2:04:22 Episode 103 - Leaving Las Vegas - 01/12/2012
HZtiJLWsvlc 3:47 CES 2012: Toshiba 4K Display
oaj9QJzg6Oo 7:22 CES 2012: Day 02 Wrap-Up
H9iBSZwsubE 5:34 CES 2012: Day 01 Wrap-Up
0SVMhTe22e8 1:58:10 Podcast
UI6A4qVTEKo 6:23 CES 2012: Day 00 Wrap
uTWgJ0S9Jno 5:49 CES 2012: The Road To Vegas
sxvXWcUZGbk 2:12 Tested CES Suite Tour
H6X8Dr_QrwA 6:47 CES 2012: What's in Your Bag, Wes?
Vsg6ftfoxNA 8:23 What's in your bag, Will? (2012)
TgSSI9eRjtU 6:16 What's in your bag, Matt? (2012)
pphH-fcv-uc 7:48 What's In Your Bag, Norm? (2012)
k6iR9k_3ycg 1:53 MakerBot Mystery Build: Inception
nZL_UOksXQM 24:51 Tested: Our Favorite iPad Apps of 2011
edgdIxE6zKk 31:18 Tested: Our Favorite iPhone Apps of 2011
iITi9yRYhyQ 4:37 Tested Mailbag: Watch Us Get Board
NmqBg7cvJhk 1:51 MakerBot Mystery Build: Croctastic
_QAyJCvAUyM 5:00 Quick Look: Lighted Kindle Covers
g8zDc0HFkkA 1:04 The Best Keyboard Shortcuts in the World #2
bLjyV24KpeY 8:15 Quick Look: Vusix Wrap 1200VR 3D Glasses
IDaLHNXWOBw 17:57 How To Deep Fry a Turkey without Burning Your House Down
ysAEfbbmDP8 9:22 name goes here
txDTIFZysEY 2:58 MakerBot Mystery Build: Tighten Up
A2y6jzC5Jj0 3:31 Quick Look: The PlugBug
ys0by-8aw_k 4:11 Quick Look: Oakley HDO-3D Gascan Glasses
4h-HLMl8ygg 4:20 Tested Mailbag: Blast From The Past
MQDvO9hxa-Y 2:39 MakerBot Mystery Build: Everything In It's Place
uEWZai9S9wU 14:55 How To Make the Most Out of Siri on Apple's iPhone 4S
JLxOKgJy2tc 2:29 MakerBot Mystery Build: Heal Thyself
pGYPtJX4ZeI 18:13 How To Take Apart a Fourth Generation Kindle
q1ZQ0XMXnZw 2:02 MakerBoy Mystery Build: Can't Have Too Many
hlTNFzHZwHI 1:53 MakerBot Mystery Build: Keep Out
-UuORIzrwk8 19:31 The Best New Features in Apple's iOS 5 for iPad, iPhone, and
Tiz5Qq-EvTU 2:45 Tested Mailbag: Gift Wrapped Caffeine
JKPhZ6tPxdg 2:45 Tested Mailbag: Gift Wrapped Caffeine
07yOaCwQAkU 50:34 Whiskey Media: Happy Hour 09/02/11
rXjF3gvf_zQ 50:34 Whiskey Media: Happy Hour 09/02/11
b6jIwgQIVXY 2:08 MakerBot Mystery Build: Seeing Red
RCCjVG_YS2A 2:08 MakerBot Mystery Build: Seeing Red
Y0ZDij5kYbY 5:54 Tested: Asus Eee Pad Transformer TF101
w7Ks0gMS7v4 5:54 Tested: Asus Eee Pad Transformer TF101
zkE_gemhIcE 5:57 Tested: Three Headphones for Listening to Music in Bed
ZfscTkV1O78 2:14 MakerBot Mystery Build: Tracing Your Every Move
pRcXQZXa9XU 4:08 Building Windows 8: Windows Explorer
8Q87GMbAKH4 4:08 Building Windows 8: Windows Explorer
7tLDkQR7_YQ 2:14 MakerBot Mystery Build: Tracing Your Every Move
foZpKAfjj4I 5:11 MakerBot Mystery Build: Refinement
guP-99rHJYc 4:20 Tested: HP's Now-Discontinued Touchpad
S5vAIXX0D1Y 4:20 Tested: HP's Now-Discontinued Touchpad
xGO44RWKA_I 57:43 Whiskey Media: Happy Hour 07/29/11
NAOF987AkUo 2:38 Tested Mailbag: Ginger Kids
TyBS69hrm_g 2:38 Tested Mailbag: Ginger Kids
HxNgkArVeDk 3:26 MakerBot Mystery Build: Hang Loose
d2df0kSlvgc 1:58 MakerBot Mystery Build: Better Dead Than Red!
MJRDqvScz2E 1:58 MakerBot Mystery Build: Better Dead Than Red!
7NNH22gw8I4 4:12 High-End CNC for Anyone: Tested Tours TechShop
CuKxtsh8tus 4:12 High-End CNC for Anyone: Tested Tours TechShop
teNxk4vPhhY 3:12 Tested Mailbag: 22 lbs of Awesome
8i8Pi1YMhAo 3:12 Tested Mailbag: 22 lbs of Awesome
j_BkCfu3QII 6:04 What's In Your Bag, Matt?
CfQK-F6oE40 6:04 What's In Your Bag, Matt?
FATRDEVWABU 58:53 Whiskey Media: Happy Hour 06/24/11
oDEu_-kmf0s 2:58 Will and Norm's Amazing Race Season 20 Audition
45-9mTPuhbc 2:01 Tested Mailbag: Three Wolf WANG
y8UPnCuSZpQ 2:01 Tested Mailbag: Three Wolf WANG
xveQ4Hp6S54 1:29 Ask Tested: DSL Router Modem Conundrum
E_eUkbHL8zc 1:17 Ask Tested: How To Clean LCD Monitors
i4vb7VTuZoE 1:17 Ask Tested: How To Clean LCD Monitors
6CToQ2t13r0 2:47 MakerBot Mystery Build: It's That Time Again
RruX0jsgiJY 2:47 MakerBot Mystery Build: It's That Time Again
nbf31DTEBRo 2:26 MakerBot Mystery Build: Make Mine Neat
h_qeBO9_D6E 2:26 MakerBot Mystery Build: Make Mine Neat
RviAuWTfpxo 2:41 Tested Mailbag: Poisoning America's Youth
Bu72RIuhWIA 2:41 Tested Mailbag: Poisoning America's Youth
LHfPjn1NB4Q 1:31 Ask Tested: 2.1 Speakers for the Xbox 360 or PlayStation 3
JxdDpOvtN30 1:31 Ask Tested: 2.1 Speakers for the Xbox 360 or PlayStation 3
o4yod0zcD08 2:00 Ask Tested: What Version of Chrome Should I Use?
wOKVl7L6Mpg 2:00 Ask Tested: What Version of Chrome Should I Use?
MQC9q_--KaM 2:54 MakerBot Mystery Build: Mind Your Manners
l1Y_g-x4eB0 2:54 MakerBot Mystery Build: Mind Your Manners
ZV_54nFd7tw 5:28 Maker Faire 2011: How To Pick a Lock
fSlFt14hSxI 4:42 Tested Mailbag: Always Be Snacking
Wcaox4wqkmE 3:05 MakerBot Mystery Build: Espectro Printronus!
EN_X10Y3TDY 4:42 Tested Mailbag: Always Be Snacking
eYnAEuMCAWQ 1:18:30 Whiskey Media: Happy Hour 04/22/11
eemTCIV3Uw4 2:19 Ask Tested: How Do I Pick the Perfect Video Card?
VQNvYDz9RaY 2:19 Ask Tested: How Do I Pick the Perfect Video Card?
K3RRsaNoxgA 19:53 Quick Look EX: Infinity Blade Multiplayer Update
Gi7vXjaVc_Y 19:53 Quick Look EX: Infinity Blade Multiplayer Update
Yo6lNxDxb5c 3:57 MakerBot Mystery Build: This One's a Keeper
VphLengZCto 3:57 MakerBot Mystery Build: This One's a Keeper
-jTRnKFLzCo 1:49 Ask Tested: Is Now a Good Time To Upgrade My Phone?
bhNtZurqMlQ 1:49 Ask Tested: Is Now a Good Time To Upgrade My Phone?
AxiUolt4GHc 2:58 MakerBot Mystery Build: Stand Up for Your Phone
xwR6UQR4yxE 1:28:21 Whiskey Media: Happy Hour 04/29/11
9KCh1Ch6FLg 5:14 Tested: iPhone Apps vs Real-World Utilities
CS-hPpf9If0 2:58 MakerBot Mystery Build: Stand Up for Your Phone
ODcHaO4tkFA 5:14 Tested: iPhone Apps vs Real-World Utilities
j3ibTvSF46w 2:41 SCAA 2011: US Barista Championship & More Coffee Contests
4foCXjVx7Zs 0:57 Ask Tested: Intel's Hyper-Threading vs. TurboBoost?
44kZq_4U7Wg 4:16 MakerBot Mystery Build: A Barrel Full of What?
z84iKIahOKA 2:12 SCAA 2011: Baratza Coffee Grinder Lineup
65Q7XHuJfUo 8:47 SCAA 2011: What's Coming Next In Pro Espresso
p0xImO3E2rk 2:12 SCAA 2011: Baratza Coffee Grinder Lineup
jjniJRGTXA8 11:07 SCAA 2011: What's New In Automated Pourover Machines
zrKdoCLEduY 4:27 SCAA 2011: Tour of the Show Floor
Tn08mha2_oE 4:27 SCAA 2011: Tour of the Show Floor
VIDQjTspnnU 1:27:49 Whiskey Media: Happy Hour 04/01/11
_gVN2WA-524 5:16 MakerBot Mystery Build: Take That, Wind
pr_3-mqfIHo 2:58 MakerBot Mystery Build: Happy Easter, Really
V5Ba9RI4jdU 3:15 MakerBot Mystery Build: Don't be a Blowhard
WlUZKKbb5hc 3:19 Hot Tip: How to Measure Accurately for Great Coffee
cCwuK43ZjXs 3:19 Hot Tip: How to Measure Accurately for Great Coffee
4QasnIP-3yM 3:15 MakerBot Mystery Build: Don't be a Blowhard
7gEjHkw8yG8 3:40 Tested: Ben & Jerry's Americone Dream vs Late Night Snack
Zg8GjCeenLo 3:40 Tested: Ben & Jerry's Americone Dream vs Late Night Snack
NJyiGbkpVQg 3:59 MakerBot Mystery Build: For Real This Time
lslhSoiZ-fg 3:59 MakerBot Mystery Build: For Real This Time
gym9fdktpm8 3:59 MakerBot Mystery Build: Not Safe for Consumption
33UwLDi2Sgs 3:59 MakerBot Mystery Build: Not Safe for Consumption
TC3bQN5BMp4 3:19 MakerBot Mystery Build: The Prototyping Will Be Televised
t9sUngmd0Nw 3:19 MakerBot Mystery Build: The Prototyping Will Be Televised
E4vWUbyyEwo 2:44 Tested Mailbag: Good Fortune to You, Sir
AtKLpwWDpRI 1:14:47 Whiskey Media: Happy Hour 02/25/11 (Free)
U0CDV60wdH4 1:10:42 Whiskey Media: Happy Hour 01/28/11
kJa0ObKmTxo 4:35 Microsoft: Recognizing Pen Grips for NUI
c2g2Pw-XScI 2:30 MakerBot Mystery Build: Man of Few Words
e31VvUuBHq4 4:35 Microsoft: Recognizing Pen Grips for NUI
wdmgU98atO4 2:00 MakerBot Mystery Build: Top of the Morning!
gWiUthV_qHE 2:00 MakerBot Mystery Build: Top of the Morning!
ccBEfjZtQ8Y 3:56 MakerBot Mystery Build: Good Times with Weapons
33E7ruQC9Qw 3:20 MakerBot Mystery Build: Time for Real Time
xZMAbxxpRrM 3:20 MakerBot Mystery Build: Time for Real Time
efg0QlOVYZM 6:46 What's in Your Bag, Coonce?
RmDZXFBI_zE 5:24 Tested Mailbag: Surviving the Snowpocalypse
nRUNL7x1UbQ 3:55 MakerBot Mystery Build: I Can Hear You Now
mGDA14EFauY 5:24 Tested Mailbag: Surviving the Snowpocalypse
S46VosFXMdA 3:55 MakerBot Mystery Build: I Can Hear You Now
ceST2JelA7A 1:52 MakerBot Mystery Build: In Search of Redemption
T1MHXUN-52s 1:52 MakerBot Mystery Build: In Search of Redemption
GPe2dmr9MEg 6:09 Tested Mailbag: It Came from Across the Pond
uH30RmD519o 4:55 MakerBot Mystery Build: Oh Please Oh Please Work
OhIFF8IHyak 4:54 MakerBot Mystery Build: Oh Please Oh Please Work
HdIHpqxmcwA 3:49 MakerBot Mystery Build: Noodling Around with ABS
Ut8HfBPU8VQ 3:49 MakerBot Mystery Build: Noodling Around with ABS
NKuZxjCcBVk 3:32 MakerBot Mystery Build: Always Be Fresh
d0LchG3P7Vw 8:40 CES 2011: Day 3 Wrapup
mJIJRnMvsNY 8:40 CES 2011: Day 3 Wrapup
FmGbkTnWWj8 7:02 CES 2011: Samsung Booth Tour
ft-VgoOggSo 5:43 CES 2011: Catching Up with MakerBot Industries
xjCsA-Awgjk 3:32 MakerBot Mystery Build: Always Be Fresh
dHpzw5X81oY 5:43 CES 2011: Catching Up with MakerBot Industries
eultan2PqYE 2:48 CES 2011: The Adventure Begins Here!
f7_crKn_Xcc 3:59 Ana's Top Ten Technologies of 2010
G7foH2rMf10 8:46 Tested: Our Favorite Games of the Year
vUu-D6a7zjU 8:46 Tested: Our Favorite Games of the Year
dgG7n5jEF7Q 14:59 The Tested Mailbag Hasn't Seen Harry Potter
QDl-274w2X4 2:48 CES 2011: The Adventure Begins Here!
Zc1_CjXw6do 9:30 Tested: Our Favorite Apps of the Year
o2brh9mv2l8 14:59 The Tested Mailbag Hasn't Seen Harry Potter
W6l-oLuqDJc 3:59 Ana's Top Ten Technologies of 2010
Z6RKZkn8IzY 9:30 Tested: Our Favorite Apps of the Year
3BD8oAI3xtg 6:58 MakerBot Mystery Build: Not Historically Accurate
t22Uq-0Xcjo 6:58 MakerBot Mystery Build: Not Historically Accurate
7CecdUNRgcI 1:28:49 Whiskey Media: Happy Hour 10/29/10
rlli9HF53cw 2:47 MakerBot Mystery Build: An Outline for the Holidays
J0hElT-x208 2:47 MakerBot Mystery Build: An Outline for the Holidays
OMIgaeajJnY 3:54 MakerBot Mystery Build: A Tool to Help You Get Twisted
6pyfc6I-iAA 3:54 MakerBot Mystery Build: A Tool to Help You Get Twisted
EKyQ7kYEBCw 3:23 Happy Hour Excerpt: Alcokehol
xaczDEai-e8 3:23 Happy Hour Excerpt: Alcokehol
Z7c2fUFogRQ 4:32 MakerBot Mystery Build: Get on My Lawn!
rVSWC_BQNXc 5:19 MakerBot Mystery Build: The One You're Looking For
_tdVPMOdX5k 13:31 The Tested Mailbag Unlocked an Aug
kKS2qygenO0 13:31 The Tested Mailbag Unlocked an Aug
4Pdp4DlVxQ4 4:32 MakerBot Mystery Build: Get on My Lawn!
i5C5mee4YHY 5:19 MakerBot Mystery Build: The One You're Looking For
2uQRi5-HCpo 6:20 How To Make the Perfect Regular Cup of Coffee
Fn9T3jCR1vE 1:46 GeForce GTX 580 Demo: Alien vs Triangles
fjt__ID6_ek 10:35 The Tested Video Mailbag is Clean-Shaven
YqN1gS9Fi3s 1:46 GeForce GTX 580 Demo: Alien vs Triangles
hCmlzhUDnQA 10:35 The Tested Video Mailbag is Clean-Shaven
ud0pdtKsYKo 1:41 GeForce GTX 580 Demo: Endless City
PHMFUkcV_28 6:30 MakerBot Mystery Build: This Looks Mighty Familiar
rVwIxDMCy8Q 6:30 MakerBot Mystery Build: This Looks Mighty Familiar
2DpjXUg7C-8 3:22 MakerBot Mystery Build: The Triumphant Return!
OcLwNKjn1AA 3:22 MakerBot Mystery Build: The Triumphant Return!
837PXrQZ8E4 1:02 WhiskeyQuest
oAjCm-VHOEY 6:57 Poor Man's Tested: Folgers Instant Coffee
SsYXunZVaFY 1:02 WhiskeyQuest
_VpvxToSGM4 6:57 Poor Man's Tested: Folgers Instant Coffee
SdexoHypTyM 21:27 The Tested Video Mailbag Answers Questions From a Bar
cT7cfMYFxwQ 6:27 Tested After Dark - Makin' Hooch Outta Grape Juice
cB0MzySkp4g 6:48 How To Replace a Busted Fan in a MacBook Pro
L0GK8-29hjo 19:10 The Tested Mailbag: Vibram Driving and Upgrades
Sip9KtQJjUg 6:28 Tested After Dark - Makin' Hooch Outta Grape Juice
NFKMOUjirMk 2:45 Poor Man's Tested: Air Hog Helicopter Pushed to Its Limits
4r1eCn6sKk4 16:35 Tested Video Mailbag: Your Questions Answered!
VsexGWvzfhA 19:10 The Tested Mailbag: Vibram Driving and Upgrades
PND3JfvGwYQ 2:45 Poor Man's Tested: Air Hog Helicopter Pushed to Its Limits
uUDOWjEe0Ms 3:28 Sony PlayStation Move Heavy Rain Video
0-sqJ6W_TeY 1:41 Sony PlayStation Move Sports Champions Video
DwtFGjLgD-A 14:58 Mailbag Sunday! Joss Whedon, Upgrading, and Podcasts
PO1nHS4GryA 3:28 Sony PlayStation Move Heavy Rain Video
HxKJ9lnmCKg 1:41 Sony PlayStation Move Sports Champions Video
419-QspcJR0 18:05 As Seen on Tested: The Great Bacon+Eggs Challenge
oTKc8PoJ0y0 14:58 Mailbag Sunday! Joss Whedon, Upgrading, and Podcasts
UAEyeN_L7wk 4:00 Tested Mailbag: Not at All What We Expected
5YN7LLsbf-4 4:00 Tested Mailbag: Not at All What We Expected
9JvI3EryzRE 7:48 As Seen on Tested: Fancy Footwear for the Foolish
sXKBCJgwWl8 7:48 As Seen on Tested: Fancy Footwear for the Foolish
nVrbWmtVepA 14:12 As Seen on Tested: Sauna Suits and HD Glasses (BLLS Archive)
6I3DJNDuF8o 8:07 Tested Mailbag: The Potpourri of Deliciousness Edition
MbFcVj08sSw 8:07 Tested Mailbag: The Potpourri of Deliciousness Edition
jaU83NydMYg 14:54 The Late, Late Tested Mailbag
UMumOA4H5y4 4:11 How to Make an Even Better Cup of Coffee with the Aeropress
MXWyFxKNhyA 14:54 The Late, Late Tested Mailbag
g39_mcV5r5s 2:36 Tested: Talk Time on a Full Charge for Six Smart Phones
htx0MzQN5g0 2:36 Tested: Talk Time on a Full Charge for Six Smart Phones
4R_icCxEbSI 17:47 The Tested Video Mailbag Returns
dW3DOOAQ6gQ 11:55 How To Take Apart a Kindle (3rd Gen)
WdAogANpuoc 17:47 The Tested Video Mailbag Returns
52Ry9caQy1E 13:45 Print a Mystery Object - The Makerbot Gets an Upgrade
lBnAbCH1F_0 11:55 How To Take Apart a Kindle (3rd Gen)
opRLtWMV-_g 4:11 This is Why Digital Movie Services Beat Blu-Ray Discs
3DJpN5ePbnk 15:20 The Tested Video Mailbag Voyages to Outer Space
9ylsUrePi6A 17:23 Tested Video Mailbag: 22 Questions Answered!
8skQqXdLXsQ 4:48 MakerBot Mystery Build: Ahh, So Refreshing!
d7FgJm4JELQ 2:32 MakerBot Mystery Build: We're Not Squares
BSf6tGlW8XM 13:15 Introducing: The First Tested VIDEO Mailbag!
4X2eJpo3Onk 4:48 MakerBot Mystery Build: Ahh, So Refreshing!
n38dwcYiJYQ 2:32 MakerBot Mystery Build: We're Not Squares
oMuWgO86FYY 3:19 MakerBot Mystery Build: Prepare to Be Invaded
anpxolJNhws 3:19 MakerBot Mystery Build: Prepare to Be Invaded
OtzrmSjSK4k 8:07 What's in Your Camera Bag, Ana?
dd7gtIvfl30 8:07 What's in Your Camera Bag, Ana?
PUDRCG0GEzg 15:14 How To Build an Awesome $500 Home Server
445CPBycXy0 5:01 MakerBot Mystery Build: Don't Be a Tool
47BFEJxg0e8 5:01 MakerBot Mystery Build: Don't Be a Tool
yU7U__Etdj8 2:04 Chloe's Day Out
OhzsyQCJBVI 4:13 Our MakerBot Returns for a Mystery Build of the Week!
BEQ1PotpQu0 8:12 How To Take Apart an Xbox 360 Gamepad
xL6pU6Kh9ag 2:04 Chloe's Day Out
1M0pRVRGbXI 18:24 New Xbox 360 Teardown: Guts Compared to Original 360!
EX98iN_Bzcw 8:59 Tested: iPhone 4 vs. iPhone 3GS Performance
Cj0fRqppTB4 1:43 How To Make Awesome Frozen Yogurt
XM_D9W5aJcU 2:42 In Search of the Perfect iPad Case
QuvgGIMm9e0 2:42 In Search of the Perfect iPad Case
DbfrDgFIEfU 18:24 New Xbox 360 Teardown: Guts Compared to Original 360!
gOXR_qfkwuM 3:43 Here is iPhone 4 FaceTime Working on a Cellular Network
5jKblxDMNGA 15:14 How To Build an Awesome $500 Home Server
WEVMG2QJmxs 4:54 Bodies-On with Kinect Adventures and Joy Ride
_bxPTCZQ0LM 4:54 Bodies-On with Kinect Adventures and Joy Ride
z30RZfRvjI4 12:48 How To Repair a Cracked iPhone Screen
rVL-76Ht-Cw 12:48 How To Repair a Cracked iPhone Screen
WgjGk9MRrks 3:39 Tested Goes Body-On with Kinect and Dance Central
8ywpVGU5a0Q 3:39 Tested Goes Body-On with Kinect and Dance Central
KNePGl3erSg 2:03 We Teach You How To Properly Solder
MxB-vH5aGdQ 40:32 How To Build an Awesome $1500 PC
JlKq59hBMew 2:25 Cupcakes & Cosmonauts! Highlights from Maker Faire 2010
idwOqkOKwpY 2:25 Cupcakes & Cosmonauts! Highlights from Maker Faire 2010
TIRPMo9goIo 3:09 Microsoft Research's Multi-Image Fusion
a4YU-NgRFNo 3:09 Microsoft Research's Multi-Image Fusion
bstJD8tfQ4c 3:50 Robot, I Command You to Make Me a Tasty Beverage!
fCNxbC_KaJQ 3:50 Robot, I Command You to Make Me a Tasty Beverage!
_rzcYjKJHWg 1:52 Mobile Safari on the iPad
J5pFkzZFRNg 1:40 Typing on the iPad
wJtaix4bWX0 1:40 Typing on the iPad
scwUq29Sidg 1:40 iPad User Interface and Web Performance
R6LngMkjw8U 22:33 iPad Autopsy Video: We Take Apart an iPad!
cOy9i0_1JGE 22:33 iPad Autopsy Video: We Take Apart an iPad!
UwzSooGb-z8 3:46 MakerBot Mystery Build: Tight Squeeze
WiFv4RlqnQE 2:23 Tested Mailbag: Don't Think
xCHAgWHvURI 1:13 MakerBot Mystery Build: Tech Support
pypZqtEfcjk 3:09 MakerBot Mystery Build: On The Rocks
1WkT0oXOBJs 4:45 Tested Redesign Pre-Launch Gathering
kk5GV1nZjCI 6:08 How To Swap a MacBook's Optical Drive with a Hard Drive
tunkveEIIF4 3:48 MakerBot Mystery Build: A Palace of Plastic
bHyB2udEWHs 2:01 Ask Tested: Living Completely in the Cloud
DCq-T2t9xW4 0:57 Big Live Live Show Live 2 - Ana Discusses Star Wars
fFJaA_pN73g 1:36 Gary Whitta Taking Your Calls - Members Only Redphone
TBrQd9b2uWw 1:14 Vidrhythm Test #1
Y0Hu6n629Z8 0:31 Big Live Live Show Promo #1
QJRo1DzE-Q4 0:31 Big Live Live Show 2 - Promo #2
FuKsIgq6sv0 0:31 Big Live Live Show 2 - Promo 4
mYX7wZkRejo 0:31 Big Live Live Show 2 - Promo #3
xK_eEMJhpVQ 0:31 Big Live Live Show 2 - Promo 5
N_yOFmQ1M0s 13:51 Tested: The Show - Computer Numerical Control - Episode 1
XhAI6XYIDsM 42:17 Quick Look: Lion
MHe80IHRIQ4 3:27 Quick Look: Razer Mamba
qp6Y30Iw-bg 7:58 Lemon Lens: Jinx and the Caravella Brothers
kNY21FHTeI8 3:39 Fixing Broken Headphones
NIue4h0ecwY 1:14 Lemon Lens- The Pooch
Ds246qcElcQ 2:31 E3: Minecraft for the Xperia Play Demo
NbzZwktl-X8 6:12 Tested.com: Thermos Comparison Tests
HpCHl2Ia7EE 7:34 Tested Tests the Nintendo Wii U
7gMHCOzf218 14:06 5 Great Games on the Xperia Play
TIYdisqmetg 4:44 Tested.com at Maker Faire 2011
-85re-nSmnA 2:53 How To Make Iced Coffee with the Hario Cold Brewer
nSugEQdmyd4 1:09 The Best Keyboard Shortcut In The World
wsBAz1Y7VXU 3:07 Tested: Roxio Game Capture
gl0baXtse1c 6:17 Tested: Razer Onza Game Controller
khaOH6W1Z0Y 3:01 Tested: Hauppauge Personal Video Recorder
UngyDzJm28s 10:21 Tested: 3 Alternative Web Browsers for the iPad
0Z5qFFKXjPA 15:02 Tested.com: OnLive MicroConsole
fMrnX1nFvI0 3:33 Samsung Galaxy S II Hands On: Tested.com
bWp5fZe48qE 6:57 Testing the Guinness Surger - Tested.com- Tested.com
VyuPo4U56HE 48:09 Tested.com iPad 2 Demo & Analysis
HVAqN0_MUVc 2:49 A Dog Tests the iPad 2 - Tested.com
wPewCDEO7LE 7:45 10 Essential iPad 2 Apps from Tested.com
RofUan8zSJY 6:45 TDK Three-Speaker Boombox - Tested.com Quick Look
8kvDH48Qdzg 6:43 Xperia Play Demo - Tested.com
DjBprzu2Koo 5:32 Tested Goes to GDC 2011
V6_gKNsQ1vQ 4:26 How To Make Pour-Over Coffee with a Hario Dripper
Q1A0WdLLjG8 13:46 Video Tour of the Atrix Webtop OS - Tested.com Quick Look
RFTOQ4hKOUM 5:02 Steelseries Sibera Neckband Headset - Tested.com Quick Look
zIGgFOVAZJA 10:43 How To Take Apart an iMac
Ua5smxPXy8E 2:59 How To Make 2D Glasses for 3D Movies
rREXnkX2z4E 1:16 Remove Product Logos With Sugar
AOJNPt6NNfw 3:31 Razer Ferox Demo - Tested.com Quick Look
_JPI1vrkkGs 7:28 PC Build Race DocuDrama - A Tested.com Story
DgSCHyF_XO8 4:41 Yama Siphon Coffee Pot Demo - Tested.com Quick Look
zgTfAlWMxt8 5:12 TiVo Premiere App for iPad - Tested.com Quick Look
0LRDZTwS4TQ 5:09 Saitek Pro Flight System - Tested @ CES Hands On
FpPGmOitrZ8 2:54 Bowers & Wilkins Audio - Tested @ CES Hands On
Y0lI1K2UzSQ 4:01 CES 2011: Rise of the Cleaning Robots
g7bQZV0GmKA 3:10 Tested @ CES: Gorilla Glass Stress Test
X0iMYIjXqJ4 3:23 CES 2011: Convention Hall Carpet Quest
vDLMZAOLMgE 5:06 CES 2011: LG Magic Remote and Smart Refrigerator
pYcg_8ziiew 6:35 CES 2011: Toshiba Autostereocopic Displays
4di9jHXixCM 3:50 Tested @ CES: Taser Practice
Qmc_JQy5v5A 2:39 CES 2011: Nvidia's Tegra 2 System on a Chip
kkWOC56Ytz0 3:05 CES 2011: Panasonic Booth Tour
xP3a16-TT3U 5:15 CES 2011: Razer Hydra Motion Controller
9i99KkYLVrw 1:23 Lady Gaga Polarez GL20 Glasses
TA9qCGZckcA 3:37 CES 2011: Razer Switchblade Mobile Gaming PC
E5YpKcl7akM 5:08 LG Optimus 2X, Optimus Black, & Revolution - Tested @ CES
ZMeWq8mEtws 6:30 CES 2011 Saturday Highlights w/ Tested.com
mYsEv4Gsfu8 7:43 Tested.com @ CES 2011: Day 1 Video Highlights
Ylckj-kqFI0 4:37 Tested @ CES: BlackBerry PlayBook
fu-ljpdky2c 2:13 Tested @ CES: Samsung LED D8000 Series TV
XhB9pkprxLo 6:06 CES 2011 Highlights & Keg Computer
lDcg1Q__wyo 14:59 Tested.com: How To Take Apart a Microsoft Xbox 360 Kinect Samsung Focus (with Windows Phone 7)
ral-W95X3rU 7:08 Tested.com: Robot Tea Maker Quick Look
wQwyEsm1iTY 3:10 Tested.com: Cell Phone Fisheye and Macro Lenses Quick Look
iglI7zc1I14 5:41 Tested: Which Streaming Box Is Right For You?
wwyOEOfuKy0 6:49 Tested.com: Eye-Fi Pro X2 SDHC Memory Card Quick Look
Vq0_84kBa9k 9:26 Tested.com: Windows Phone 7 App Essentials
I2SiBDveg0s 11:06 Tested.com: Kinect for Xbox 360 Roku XD|S Media Streamer
TcBHPr9IKr8 9:21 Tested: zBoost SOHO Cell Signal Booster
Q6ACOxs_wXA 11:23 How To Take Apart an Apple TV (2nd Generation)
TGMc5eUUagA 8:45 Tested: The Parrot AR.Drone Pushed to Its Limits
NCiuqNqSGS4 3:06 Tested.com: Cyborg R.A.T. 7 Gaming Mouse
dk8_HabWkW0 5:07 Tested.com Tests Kopi Luwak Coffee
gxTaI-KkNKI 5:35 Tested.com Android App Demos
BN2tnTOXzHc 8:21 PlayStation Move Controller Teardown
0fxQezK4Ahg 6:38 Tested.com: The Parrot AR.Drone Quadricopter
DOsBcij6cJs 4:48 MakerBot Mystery Build: Mmmm...Frosty
9quICF6k2Aw 10:28 MakerBot Mystery Build: Even More Upgrades!
V9QED9sNlZU 14:37 Tested.com Tests the Windows Phone 7
0u-9Ak_xr6k 11:55 Tested.com: Kindle 3rd Gen Teardown
Il2QKbVecVI 9:56 How To Roast Your Own Coffee Beans at Home
Dmi7gacx8KE 3:44 Testing the Wet Circuits Power Strip
vNBd0dnSs9Y 9:04 How To Cold Brew Coffee with the Toddy
aGLFJ1YTza4 3:36 Tested.com Tries Vibram FiveFingers Footwear
-OG2Z44IxrQ 1:11 How Not To Destroy Your MacBook Power Cord
Pg1udSz9FEk 8:05 How To Take Apart and Recover Faulty External Hard Drive
ABRiCAjPylI 3:02 MakerBot Mystery Build: Saw It On the Internets
JtitBgQXk-o 3:55 Tour of the New Whiskey Media Office
bTjDETwIVkI 6:30 The Tested iMovie for iPhone Video Challenge
zHW5ucY8wmA 1:18 Noe Valley Farmers Market (360p)
SAU_fOZe-1Y 4:54 Tested.com Plays the Microsoft Kinect
UVzplVvEp7k 3:39 Tested.com Grooves To Lady Gaga with Kinect & Dance Central
CZMI6djZa9M 1:53 MakerBot Mystery Build: This UFO Refuses to be Identified
R7OfRk5h8Q0 7:08 What's in Your Bag, Ryan?
-u52P0eByIs 6:09 MakerBot Mystery Build: The Emperor Will be Pleased
BxgpuBx4lV0 4:31 How To Make a Perfect Cup of Coffee with Chemex
NO8CITRfhLk 10:03 How To Take Apart a Nintendo DSi XL
o3Stgn_es5g 2:53 Maker Faire 2010: All Hail the Mondo Spider
EnXYZIzyZwc 3:19 Tour of the Raygun Gothic Rocket (MakerFaire 2010)
aZJonX-17Jg 6:10 Sony Dash vs Chumby: More than Just Alarm Clocks
50cRLvnSZBE 2:25 Maker Faire CA 2010 Highlights
y0Vb0Wjkqtc 3:27 Egads! Our Makerbot Prints a Mystery Object!
C_xVEiL9YTI 8:40 Tested: Easy Tweaks to Expand Your Wi-Fi Coverage
ANJKyDV8ozc 6:29 iPad Wi-Fi vs iPad 3G: What's the Difference?
OOrr_HpxBhY 3:06 Our Makerbot Prints a Mystery Object!
ngPjZHXIGQc 5:23 Tested: Wireless Internet Speeds in San Francisco
_b4_02ZjjpQ 6:21 Marvel at Amazing Robots that Kill, Crush, and Destroy
MUL-fF5Btdk 3:50 Robot Bartender Demo at RoboGames 2010
QFSxdf1jbxk 4:18 Our MakerBot Builds its First Mystery Object
c5nhkVDRrF4 7:11 How To Replace Your Macbook's Hard Drive
72G91KO6IdA 9:58 How to Take Apart a Flip HD Camera
cgxT5gVjZfA 9:12 What's In Your Bag, Gary Whitta?
H3xdcx2WUcU 3:29 A Dog Tests the iPad - Tested.com
kL-PmNVmO5E 2:26 CTIA 2010: Dell 5" Tablet, Opera for iPhone, and Weird Stuff
6oIMgGuVt3k 5:02 How to Make a Perfect Cup of Coffee with the Aeropress
pD0raHXzwyA 2:03 CTIA 2010: Samsung Galaxy S vs HTC EVO 4G
aYoSpxyUqPk 5:57 What's In Your Bag, Norm?
fN_jdMzNUvA 4:36 What's In Your Bag, Will?
bJLKTQ-fUrs 2:58 Electronics and Condoms: Tested

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

CMqMKLYGMuY 3:02 Stadstuinieren - Limonade met bramen - Zo maak je dat
3_7j8XGfOLc 3:31 Stadstuinieren - Zelf zaden zakjes vouwen - Zo doe je dat
kJe_EqzsMxQ 3:07 Stadstuinieren - Tomatillo kweken en oogsten
NzhKvcN3YdA 3:39 Stadstuinieren - Hoekjeskool of Rubras - een nieuw gewas
P4V3XwK1-js 3:08 Stadstuinieren - Herfst en Wintergewassen voorzaaien
W49dfzlUUDE 5:50 Stadstuinieren - Tuinen kijken - Moestuin klooster Oud Bijdorp
E2DYK7RG36I 4:16 Stadstuinieren - Wortels kweken en oogsten + Recept voor een lekkere risotto
0-xcXvqz8aY 3:02 Stadstuinieren - Recept Gevulde Courgette
KJXHqmlBuRM 5:24 Stadstuinieren - Van peulen naar vruchtbaar aardbeienbed
uonGXvtYVnE 3:13 Stadstuinieren - Recept met munt: Muntsoep
bnGuzmUkva8 1:03 Het leukste tijdschrift voor de moestuinier 🌱
reBnrC-zh6A 8:00 Stadstuinieren - Aardappels oogsten - Knollen, bessen en beestjes
IGLOSqR0YbA 3:40 Stadstuinieren - Rode bieten kweken en oogsten + Recept Rode bieten hummus
Ds5dYclBWz4 4:49 Stadstuinieren - Tuinen kijken - in de Loire Vallei in Frankrijk
7gwvtR60Zto 3:11 Stadstuinieren - Snijbiet kweken en Snijbietquiche maken
3HQ5kMugXTI 4:14 Stadstuinieren - Genoeg te doen in de moestuin
BMt4lmiD__s 3:53 Stadstuinieren - Te kleine tuin of balkon? - Kijk omhoog!
jBAkUJatRY8 3:35 Stadstuinieren - Aardbeien kweken
lnb6TkuI23c 3:25 Stadstuinieren - Vogels én een nest! - In de stadstuin
xkLc19m8DcQ 3:03 Stadstuinieren - Meiraap oogsten + Recept meiraapfrietjes
TYXf9Ri-0bc 8:56 Stadstuinieren - Tomaten en druiven dieven - Zo doe je dat
9KTVTyP9NHY 3:03 Stadstuinieren - Komkommerfamilie uitplanten
BGOyHKxqfVw 8:21 Stadstuinieren - Een rondje door de moestuinen - eind mei
2t4k7W1iASk 7:00 Stadstuinieren - Rabarber oogsten - Zo doe je dat
L4jVJxP2oAE 3:02 Stadstuinieren - Uitplanten in mei - Aubergines en prei
Gwt3Vbu6ghE 0:54 Het leukste tijdschrift voor de moestuinier 🌱
Hji6-JO61p0 3:52 Stadstuinieren - Sla zaaien en oogsten + Recept Slasoep
aDmnOspdOgg 4:39 Stadstuinieren - Broccoli kweken en uitplanten
Qjbc01PoPr8 3:03 Stadstuinieren - Gojibes planten en kweken
KkM5XMbuyX8 4:49 Stadstuinieren - Tomaten buiten planten, na de ijsheiligen
lLx1lAsvJuw 3:30 Stadstuinieren - Groene asperges oogsten - Zo doe je dat
JFA-3KwNLt8 10:26 Stadstuinieren - Basilicum kopen, zaaien en stekken
YOCocNOGtxg 3:13 Stadstuinieren - Paardenbloem oogsten
hQw-YE6Q60k 5:11 Stadstuinieren - Een rondje door de moestuin - half april
7EUnkkzgUhs 3:24 Stadstuinieren - Snijbiet zaaien
N9O_3MlpTrc 3:22 Stadstuinieren - Bloesem, vorst en bestuiving
u7q5aJJ39HA 3:21 Stadstuinieren - Eeuwig Moes - meerjarig koolgewas
VtfD9kN84nw 3:33 Stadstuinieren - Wasmiddel maken met Klimop
DuQxd9UgKug 3:08 Stadstuinieren - Recept Salade radijs en munt
OmuB1U0HxbI 4:46 Stadstuinieren - Vroege aardappels poten - Zo doe je dat
jej9Qe9rwWU 3:19 Stadstuinieren - Kruiden snoeien
fYj-frPfeF0 5:37 Stadstuinieren - Tomaten, Pepers en Aubergine voorzaaien - Wanneer doe je dat
6BVS7fR-XI0 3:03 Stadstuinieren - Paprika's verspenen
5z3gLZIoInA 7:05 Stadstuinieren - Aardappels voorkiemen - Zo doe je dat
d2tcq38UB1c 4:00 Stadstuinieren - Zaaien in maart in moestuin of pot
bEmCUcU-cvQ 4:45 Stadstuinieren - Zaaien en planten - begin maart
b8FiiO40C-8 3:14 Stadstuinieren - Winterspinazie oogsten + recept omelet
rYYCAKxfOnA 2:52 Stadstuinieren - Optimaal gebruik maken van zonlicht - Zo doe je dat
Hp6oHbeGCRo 3:38 Stadstuinieren - De moestuin in februari Aardpeer planten
3rF8f4r_EJk 3:08 Stadstuinieren - Zaden bewaren - Tips
abMdcAUTSpA 3:02 Stadstuinieren - Weefkunst met natuurlijke materialen
a5RE1H_5tJc 11:47 Stadstuinieren - Zaaien en voorzaaien in februari - het seizoen is begonnen!
aELlmAvkmoY 7:12 Stadstuinieren - Eenjarige, tweejarige of meerjarige gewassen? - Zo zit dat
QOs8wj13KtM 3:43 Stadstuinieren - Peterselie kweken
TEk4W8nGZxk 3:04 Stadstuinieren - Plantenvoeding maken van bananenschillen
ZNCLazWortw 5:43 Stadstuinieren - Moestuinplanning maken
Y9W4BvVkyIs 3:59 Stadstuinieren - Zonnebloemen zaaien
O-mp3lcvT2w 4:02 Stadstuinieren - Tips Sla kweken
7pA4pkBxK0k 5:15 Stadstuinieren - Tomaten zaaien
wKM6xq8mBNY 3:01 Stadstuinieren - Recept Andijviestamppot uit eigen tuin
i8GE9UKFchA 3:23 Stadstuinieren - Limonade van Tijmsiroop
AlcyADSIGoQ 3:10 Stadstuinieren - Zelf Tijmsiroop maken
jN0JQpKAfu4 4:54 Stadstuinieren -Tips zaaien pepers en paprika
YtDQlH7VdWU 3:02 Stadstuinieren - Spinazie Zaaien + Recept smoothie met spinazie
t_Bbi_3oWHI 4:35 Stadstuinieren - Prei en ui kweken
WHfIyMV2F6Q 3:35 Stadstuinieren - Kiemhoofdjes maken met de kids
MVQHmlNEMIU 3:17 Stadstuinieren - Rozemarijn Thee uit de tuin
X53i6_GJYl8 3:02 Stadstuinieren - Kweekpotjes maken van papier
lXbijluLCmg 3:09 Stadstuinieren - Radijsjes en Worteltjes kweken
GYsIM5LFtS4 3:48 Stadstuinieren - Recept Aardbeienjam
N_bnpLHvfAU 3:31 Stadstuinieren - Tomatenplanten snoeien
dYG9JvPn3lE 3:36 Stadstuinieren - Courgette kweken + Recept Courgette soep
8pXh8vDcbD4 3:31 Stadstuinieren - Tomaten dieven, zo doe je dat
O3QD8b4SAXs 5:20 Stadstuinieren - Recept Pavlova
u1898_IG_sQ 3:59 Stadstuinieren - Recept pesto met radijs
qmvy2o3CXVQ 4:16 Stadstuinieren - Tomatenplanten verpotten
SFd-7ZhvSG8 7:06 Stadstuinieren - Tomaten in de stadstuin - update juli
QPEz6lSjI58 4:47 Stadstuinieren - Tomaten uitplanten
yGkOEic-Gzc 5:22 Stadstuinieren - Sla zaaien
JA5GleBebjw 5:52 Stadstuinieren - Lage slaboontjes kweken en oogsten
SUhmC63jLh4 6:08 Stadstuinieren -Wilde bramen plukken
P2o1U9bkPuo 4:48 Stadstuinieren - Komkommers oogsten
VboSbAq482Q 3:09 Stadstuinieren - Zaden ordenen
4xb7-lQ7peY 4:22 Stadstuinieren - Dahlia's planten
y_eMkCNZU18 3:20 Stadstuinieren - Recept Chilisaus
E2qBOiWSsjw 3:20 Stadstuinieren - Aardappelen kweken
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
undefined SHORTS First OAE Player session of 2022🥳 #Shorts
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
j5cpxSJStWE 2:04:59 Live Play-Through "Lewis and Clark: The Expedition!"
QAL-9V0635Y 11:22 Were They Afraid to Drink Coffee 250 Years Ago?
5CdgQkw41dU 41:25 Finale! Townsends Book Club Episode 17 - Autobiography of Benjamin Franklin
vsvYZtFyqM4 10:20 How To Eat Like Benjamin Franklin
H94KCQ75gmc 48:30 Townsends Book Club Episode 16 - Autobiography of Benjamin Franklin
8USEQGCyFqE 8:32 Wood-Fired Steak from 1788 - Frontier Food
IOaz6EQZgg0 11:12 Summer Sweetness! - Mulberry Pudding Delight - Historical Boiled Pudding
Cl2NUnEjM7A 37:10 Townsends Book Club Episode 15 - Autobiography of Benjamin Franklin
3ky02udlbpI 10:32 Barbecue Pork on the Frontier in 1824 - BBQ with Gravy?
yXDI3WJ4Cng 50:30 Townsends Book Club Episode 14 - Autobiography of Benjamin Franklin
aRoukj48bkc 11:38 Unusual and Delicious Pan Fried Puddings from 1773
iCrJBiO0GLg 9:51 Let's Get This Straight - Primitive Levels
6fs6DtYM400 44:35 Townsends Book Club Episode 13 - Autobiography of Benjamin Franklin
KzcoUtLufps 8:59 200 Years Before "Mayberry" - The Self Sufficient Small Town Of Early America
do--rwss7UA 42:21 Townsends Book Club Episode 12 - Autobiography of Benjamin Franklin
4JdW-B0bQ9I 10:12 Whole Almonds Crushed To Make Flour? - Almond Cheesecakes
8t5Asj6kK0M 54:06 Townsends Book Club Episode 11 - Autobiography of Benjamin Franklin
EcATbhRA8-4 8:23 Inside A Woodturners Woodshop - Old vs. New
fsJbnWaa4tA 11:55 Breakfast Waffles Over The Fire - 18th Century Cooking

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

`)