// @flow

import type { Video, Episode } from "./types";
import { episode, parseVideos } from "./ingestion"
import {pipe, map} from "../lib/fns"

export const christmasSongs: Array<Video> = parseVideos(`
CThjvN0snQ4 2:46 YULE - In Dulci Jubilo - Celtic Harp , Guitar , Lute
N5IG0874s2Q 2:24 WASSAIL - Sussex Carol - Celtic Harp , Guitar and Lute
Ao0CtiGxVHE 2:14 THE CELTIC CONSORT - Ev Chistr LAOU - Celtic Harp , Lute and Guitar
9G2O-DkEl8U 2:28 WASSAIL - The Somerset Wassail - Celtic Harp , Guitar and Lute
gPXyqZPwsWU 2:03 WASSAIL - Past Three O'Clock - Celtic Harp , Lute and Guitar
PnIHkDXsnNk 3:26 HOLLY EVE - La Lune de Noel - Celtic Harp , Lute and Guitar
YwtCCEquNmc 3:03 WASSAIL - Down In Yon Forest - Celtic Harp , Guitar and Lute
-cPHy2MCVtw 1:54 YULE - Green Grow'th The Holly - Celtic Harp , Guitar , Lute
ovGlf8Gwwhk 2:53 YULE - Herrick's Carol - Celtic Harp , Guitar , Lute
rVXtxklc8-Y 3:02 THE CELTIC CONSORT - The Snowy Breasted Pearl - Celtic Harp , Lute and Guitar
ca0iTvacifs 2:52 THE CELTIC CONSORT - Hewlett - Celtic Harp , Lute and Guitar
1-ffeCSrNhY 2:31 HOLLY EVE - Blessed Be Thou Heavenly Queen - Celtic Harp , Lute and Guitar
sJUwQVcnOvY 2:26 CHRISTMAS DAY IN THE MORNING - THE GOWER WASSAIL - A REVELS CELEBRATION - TRACK 1
JP8sTCyKh0w 1:21 CHRISTMAS DAY IN THE MORNING - JOLLY OLD HAWK - A REVELS CELEBRATION - TRACK 2
36UCY97HMBI 3:36 CHRISTMAS DAY IN THE MORNING - COUNTRY DANCES - A REVELS CELEBRATION - TRACK 3
f8whNrSNUaA 1:40 CHRISTMAS DAY IN THE MORNING - KING HEROD AND THE COCK - A REVELS CELEBRATION - TRACK 4
M3wMhL081g0 1:50 CHRISTMAS DAY IN THE MORNING - I SAW THREE SHIPS - A REVELS CELEBRATION - TRACK 5
ji6gl8lmhxU 1:58 CHRISTMAS DAY IN THE MORNING - LILLIBURLERO - A REVELS CELEBRATION - TRACK 6
bpusZOOadvU 2:24 CHRISTMAS DAY IN THE MORNING - WHILE SHEPHERDS WATCH'D THEIR FLOCKS - A REVELS CELEBRATION - TRACK 7
RfgqXcgzhVs 4:40 CHRISTMAS DAY IN THE MORNING - SPERED HOLLVEDEL - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 8
fCtMBsy9fVk 3:38 CHRISTMAS DAY IN THE MORNING - ESTAMPIE - A REVELS CELEBRATION OF THE WINTER SOLSTICE - TRACK 9
Qe_nwyWMFa8 2:41 CHRISTMAS DAY IN THE MORNING - THE WEXFORD CAROL - A REVELS CELEBRATION - WINTER SOLSTICE - TRACK 10
9pBACRxcNNQ 1:14 CHRISTMAS DAY IN THE MORNING - PLEASE TO SEE THE KING - A REVELS CELEBRATION - TRACK 11
_rjZqg-nP3A 2:26 CHRISTMAS DAY IN THE MORNING - PERSONENT HODIE - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 12
j7pMlxnP6o4 2:22 CHRISTMAS DAY IN THE MORNING - ANGELUS AD VIRGINEM - A REVELS CELEBRATION - TRACK 13
sqcYIiceRRk 1:50 CHRISTMAS DAY IN THE MORNING - GREEN GROW'TH THE HOLLY - A CELEBRATION OF WINTER SOLSTICE - TRACK 14
ihFwOsBl2vA 1:24 CHRISTMAS DAY IN THE MORNING - WELCOME TO OUR SAVIOR - A REVELS CELEBRATION - TRACK 15
8sc4yKIAgO0 2:09 CHRISTMAS DAY IN THE MORNING - THE CHRIST CHILD'S LULLABY - A REVELS CELEBRATION - TRACK 16
yFkOaNIIIDM 2:21 CHRISTMAS DAY IN THE MORNING - THE FIRST NOWELL - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 17
p9xFxVz6m2o 2:21 CHRISTMAS DAY IN THE MORNING - THE FIRST NOWELL - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 17
dM0Ce_JMdI4 3:24 CHRISTMAS DAY IN THE MORNING - BRIGHTEST AND BEST - A REVELS CELEBRATION - TRACK 18
izUPtQZ4sfs 1:44 CHRISTMAS DAY IN THE MORNING - WE'VE BEEN A WHILE A-WANDERING - A REVELS CELEBRATION - TRACK 19
rxbCDYtN0iE 1:00 CHRISTMAS DAY IN THE MORNING - DAME , GET UP AND BAKE YOUR PIES - CELEBRATION OF WINTER - TRACK 20
j0VQMHOF_80 2:50 CHRISTMAS DAY IN THE MORNING - THE BACCA PIPES JIG - A CELEBRATION OF THE WINTER SOLSTICE - TRACK 21
sr5riC9fvsw 2:28 CHRISTMAS DAY IN THE MORNING - MILFORD - A REVELS CELEBRATION OF THE WINTER SOLSTICE - TRACK 22
_48s52ku3Pc 2:36 CHRISTMAS DAY IN THE MORNING - GOD REST YOU MERRY - A REVELS CELEBRATION - TRACK 23
Dy6m7vmnqys 2:23 HOLLY EVE - Tomorrow Shall Be My Dancing Day - Celtic Harp , Lute and Guitar
FjfPGaUKZbw 2:23 WASSAIL - King Herod And The Cock - Celtic Harp , Guitar and Lute
z-YdaWydcRI 2:13 Wassail - The Cuckoo - Celtic Harp , Guitar and Lute
nXWx8bpB0yo 2:12 YULE - Blessed Be That Maid Marie - Celtic Harp , Guitar , Lute
Ai3fQdFIAao 2:17 YULE - Bring A Torch Jeanette Isabella - Un Flambeau Jeanette Isabella - Celtic Harp , Guitar , Lute
Buld-HMlF1s 1:48 YULE - Here We Come A Wassailing - Celtic Harp , Guitar , Lute
5hkRgVSwXxY 3:23 YULE - The Wexford Carol - Celtic Harp , Guitar , Lute
CC2-oddbWk8 4:14 YULE - Villancico De Navidad - Celtic Harp , Guitar , Lute
rCSiS3N5BZY 2:56 YULE - The Hunt's Up - Celtic Harp , Guitar , Lute
uaLiXuSFhqs 2:11 YULE - Canarios - Celtic Harp , Guitar , Lute
wCRRqXhKkvM 3:13 YULE - Once In Royal David's City - Celtic Harp , Guitar , Lute
znzni7IxV3w 3:05 YULE - The Gower Wassail - Celtic Harp , Guitar , Lute
-5dMtY2m_ZA 3:30 YULE - El Noy de la Mare - Celtic Harp , Guitar , Lute
lYranzubajU 4:59 YULE - The Castle Keep / Masters In The Hall - Celtic Harp , Guitar , Lute
okG9573LHtY 1:51 KEMPER CRABB - WHAT CHILD IS THIS - A MEDIEVAL CHRISTMAS - TRACK 1
igAT2mamGD4 4:00 KEMPER CRABB - DOWN IN YON FORREST - A MEDIEVAL CHRISTMAS - TRACK 2
NdhjU4mR8d8 4:41 KEMPER CRABB - O COME , O COME EMMANUEL - A MEDIEVAL CHRISTMAS - TRACK 3
8EVSJZHg6_U 2:17 KEMPER CRABB - ES KOMMT EIN SCHIFF - A MEDIEVAL CHRISTMAS - TRACK 4
mG2tjrYjLiY 3:29 KEMPER CRABB - DIVINUM MYSTERIUM - A MEDIEVAL CHRISTMAS - TRACK 5
Be6mKWa4k9U 2:30 KEMPER CRABB - WESSEX CAROL - A MEDIEVAL CHRISTMAS - TRACK 6
BKlwgGoHNaw 2:30 KEMPER CRABB - COVENTRY CAROL - A MEDIEVAL CHRISTMAS - TRACK 7
RATTwWEi5yw 3:24 KEMPER CRABB - LET ALL MORTAL FLESH - A MEDIEVAL CHRISTMAS - TRACK 8
yQSrrEzy_Wo 3:30 KEMPER CRABB - GOOD KING WENCESLAUS - A MEDIEVAL CHRISTMAS - TRACK 9
WOq9H77Kxnk 11:03 KEMPER CRABB - GOD REST YE MERRY GENTLEMEN - A MEDIEVAL CHRISTMAS - TRACK 10
Xth3IpWc3Fg 4:35 SINFONYE - GABRIEL FRAM EVENE KING - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 1
GKXnvjWxXyE 2:56 SINFONYE - SALVA NOS , STELLA MARIS - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 2
TGctg-r8ODs 4:26 SINFONYE - MIRI IT IS - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 3
o8zbyIYQoV8 1:41 SINFONYE - SALVE , VIRGO VIRGINUM - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 4
NekVCJivblE 1:20 SINFONYE - AVE MARIA , VIRGO VIRGINUM - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 5
JGHjqXCCDOs 2:35 SINFONYE - PROCEDENTI PUERO - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 6
iCLafWSZsuA 2:00 SINFONYE - ECCE MUNDI GAUDIUM - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 7
HIcnhw00M3Q 1:41 SINFONYE - UT IAM CESSET CALAMITAS- MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 8
gKNm2uUvUsI 2:12 SINFONYE - GABRIEL FRAM EVENE KING - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 9
jg65EHOKTuw 5:27 SINFONYE - UNTITLED INSTRUMENTAL PIECE - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 10
TTc51FIIe28 3:34 SINFONYE - VIDE MISER ET IUDICA / WYNTER - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 11
n4TpyXjec1E 6:48 SINFONYE - ESTAMPIE - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 12
jzT_YJ9lKPU 4:48 SINFONYE - THER IS NO ROSE OF SWYCH VERTU (part 1)- MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 13
YjlxrAoEPkI 2:22 SINFONYE - THER IS NO ROSE OF SWYCH VERTU (part 2) - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 14
Z199VURxcQs 10:51 SINFONYE - LOLAY LOLAY - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 15
RAUH2QxYPG0 7:22 SINFONYE - NOWELL , NOWELL , NOWELL! - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 16
xDPbWnjsRuE 2:16 CANZONE DEI ZAMPOGNARI - Christmas Music from the Freiburg Minster
aBTT1UDcc-k 3:03 CHRISTMAS ROSE - Pat A Pan - Bronn Journey - Celtic Harp
Ke3uJoJqpkM 3:00 YULE - Lo How A Rose Is Blooming - Celtic Harp , Guitar , Lute
YIoG54HzlCw 2:28 THE CELTIC CONSORT - Planxty O'Rourke - Celtic Harp , Lute and Guitar
lvoZ3Wp0K9k 2:33 WASSAIL - Personent Hodie - Celtic Harp , Guitar and Lute
HPuZoAENMFw 4:02 JE ME SUIS LEVE PAR UN MATINET - Christmas Music from Freiburg Minster
A6_WTYqHf0c 1:34 HOLLY EVE - Noel Nouvelet - Celtic Harp , Lute and Guitar
ZVKkVF4YkUc 2:47 YULE - Merrily On High - Celtic Harp , Guitar , Lute
hkYHL6LlEM0 4:03 A MINUIT FUT FAIT UN REVEIL / LAISSEZ PAITRE VOS BESTE - Christmas Music from Freiburg Minster
67iPFUzmYkc 5:45 THE CELTIC CONSORT - Country Dance Medley - Celtic Harp , Lute and Guitar
9yhe7Tl5H_g 3:41 CHRISTMAS ROSE - Huron Carol - 'Twas In The Moon Of Wintertime - Bronn Journey - Celtic Harp
AJuaLHRjhGo 4:39 IN DULCI JUBILO - Christmas Music From Freiburg Minster
nMU5Jo5Mh6A 1:48 WASSAIL - Gloucestershire Wassail - Celtic Harp , Guitar and Lute
c0xHRjtYZPQ 1:51 HOLLY EVE - Breton Carol - Celtic Harp - Lute and Guitar
XbgAUuMaR2g 2:24 HOLLY EVE - Gdy sliezna Panna ( As The Lovely Maiden ) - Celtic Harp , Lute and Guitar
CyfPuiSosc8 3:26 YULE - We Three Kings - Celtic Harp , Guitar , Lute
IqAAOVu1MyA 4:51 RECERCARDAS OTTAVA - Christmas Music from the Freiburg Minster
JfncJavzoB8 4:16 Gloucestershire Wassail
VdO-7_NRa-g 42:36 Christmas Music of the 15th and 16th Centuries
cKMu6b2Ls8s 51:29 Christmas at the Time of Praetorius
eW79ejQcrDo 51:44 A Baroque Christmas
r7adETaOYiQ 1:30 The Boar's Head Carol
2AjFT4Rcp_U 3:41 Cantiga De Santa Maria, No.48

# Celtic Christmas III
# pgaiDhAqQ44 3:45 The Wexford Carol
# 9Mk8QHA9V3A 3:53 Angels In The Snow
# 8K8UTaiNX2g 3:42 Lully Lullay
# SUPhRLA_YFU 4:46 Circle Of Joy
# PTOEoRzG_D4 4:46 Sails Of Galway
# XPmJmLmIHmU 3:35 The South Wind
# A1T76harrKo 4:09 A Raven In The Snow
# 5FLXVSLyucI 3:37 The Snows
# Od1wf7XvJHU 4:51 Home
# GvveCAnh97w 5:40 Lament
# b_kavTJhfPk 5:06 Sister Moon
# sG7s5hUryzk 3:52 Maiden Dance
# 7ABzGGcpHik 4:36 Fields of Gold
# ATWktqTDlCg 4:36 Nightingale
# jpD4TAPUrdM 4:31 Branwin's Secret
# jQkkIKtsSIs 3:54 The Shine Of A Shane
# IYnvN2Ubb5k 4:41 Crimson Morn
# AY3DSuA92f0 5:01 A Gentle Place
# ppZTePgt5p8 5:02 Way Of The World
# pQT6swI1IAM 4:17 Gossamer Heart
# o7fD3rys1TQ 4:59 Lake Of Dreams
# OssyaZNYN64 5:46 O Come O Come Emmanuel
# Z1j65-WiKFo 4:11 God Rest Ye Merry, Gentlemen
# 75Uxnqr4N1g 3:39 The First Noél
# UxjDLhAQHsI 3:14 Hey Ho, Nobody’s Home
# roXhc0Yy8KM 3:56 Away In a Manger
# IJW1uJ-cgwU 4:27 I Wonder As I Wander
# vg9uk7-qVLs 3:44 St. Basil’s Hymn
# 8LJdZSR64kM 2:34 Deck the Halls
# Jq5kYhXQsiQ 4:25 We Three Kings of Orient Are
# YrjDMptr4eI 2:47 Gaudete
# NnRI7QyU3WQ 2:59 Entre le boeuf et l’ ane gris
# 3h77jLw8W80 4:50 Silent Night
# bh73TSEHTyk 3:28 Coventry Carol
# U1ikJQI9rGc 3:48 The Flight Into Egypt
# tLbGK5-juYI 5:08 Strathglass
# JGQUl84J304 4:20 The Green Fields Of Amerikay
# q7Cl7utRbnI 3:39 By The River Shannon
# T_lG1Zlu5rA 3:26 Ga Gréine
# rOMxFuudX1A 3:11 Flow Gently Sweet Afton
# Ab4VfUz8KO8 6:34 Barbara Allen
# qo5ZF3gmqc4 4:02 The Heron
# -LUmPeXAeWw 4:34 Carolan's Farewell
# LhH6rXI5hsE 4:44 No Room at the Inn
# 4AuGUFoirY0 3:59 Down The Chimney
# Z5tD-cjZUpI 3:14 Here We Come A-Wassailing
# 0xq4lyan4UQ 3:44 Deck the Halls
# Cj9ORqxf7io 3:55 Coventry Carol
# nsrZ2-s0lKU 2:51 Love Came Down at Christmas
# PaS0qJL_HHc 3:14 Joy to the World
# fwNqd-yTdpE 4:58 Greensleeves
# gt9yj7F1EYo 3:41 Santa Claus Is Coming to Town
# lt4DS_Z4U_I 3:20 Christmas in Killarney
# CzzpmCWuyEk 3:26 Adeste Fidelis
# rp3cDcVH8u0 4:11 Sussex Carol
# BekklrlUf1c 3:35 The Holly She Bears a Berry
# 4fgwV3QKlBQ 3:53 Silver Bells
# fnuqX_Z9L90 3:55 The Wexford Carol
# hia_n-Xik28 3:44 It Came Upon a Midnight Clear
# iFsVQiiOXoA 4:10 Once in Royal David's City
# Kd7Lym48H9M 3:53 Lo, How a Rose Ere Blooming
# mF-UUbI9Glo 4:46 In the Bleak Midwinter
# WNHt9_1oehk 4:16 Sìor-Uaine (Evergreen)
# ntqAJAbYFtE 3:49 Derdriu
# smGClMb5dkA 5:09 Airdí Cuan
# ItRr7UsuUww 3:48 Sweeney's Buttermilk
# dCLiiL-sM1A 5:07 Cradle Song
# NBllWsdc1m8 4:11 Morning Star
# sF-d4WuXkrM 2:57 Ar Droim Na Gaothe
# RSTzacJwOOE 3:32 Whiter Than Snow
# s_1D1A4JGYw 4:27 St. Stephen's Green
# JjIkeO7Pe3g 2:49 December Rain
# rmyRBNcQAmM 3:02 Kitty Magennis
# 0z0_ZsNZmos 2:43 Christmas Time's A Comin'
`)

export const christmasAlbums: Array<Episode> = map(pipe(parseVideos, episode))([
  `
    # Windham Hill - Celtic Christmas II
    7jOsFtZghxM 3:47 Chanonry Point
    vN8nlmA8RSM 4:33 Amanecer
    dTL7l-7AJxg 3:26 The Wexford Carol
    4VK5-TPlGK8 3:59 Bríd Og Ní Mháille
    yeYa_7s24pg 4:45 The Day's Last Light
    If3peqjJKY0 3:41 Muladach Mi Is Mi Air M'Aineol
    w9y6dWVdBJU 4:49 Listen To The River
    Q2YBArGX4Dc 3:37 After Aughrim's Great Disaster
    nd1ZGC0Bpls 4:26 The Star Of The County Down/Sweeney's Buttermilk/Jenny's Chicken's
    _vVq05JqE9o 3:53 I'll Rock You To Rest
    PB6MYWOao-8 5:24 Johnny Seoighe
    hcOB2m4lBqk 3:01 The Dove's Return
  `,
])