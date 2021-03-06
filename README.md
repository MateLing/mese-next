MESE-Next Server
===

About MESE
---

MESE (Management and Economics Simulation Exercise) is a business simulator which students create virtual companies, sell products, and compete in their companies' MPI (MESE Performance Index). MESE was created in 1980s and widely used by JA (Junior Achievement) in its course JA Economics before 2013.

MESE-Next
---

MESE-Next is a fan-made MESE variant. It is not an equivalent of MESE, but an online game based on a similar mathematical model to MESE. Players can sign up on a MESE-Next Server and compete with other players on the Internet. MESE-Next is made by [hczhcz](https://github.com/hczhcz) as a replacement of IMese (Internet-based MESE Platform).

> Workflow: MESE-Next Engine <=> MESE-Next Server <=> Web Browsers

### Difference between MESE-Next and MESE

* MESE-Next is web-based;
* MESE-Next supports more than 8 players in the same game (32 players maximum by default);
* MESE-Next supports more game settings;
* MESE-Next provides 8p-feeling settings in any game;
* Classic MESE have paper-based reports (for MESE-Next, you might print the web pages);
* Classic MESE supports bots;

### Difference between MESE-Next and [JA Titan](http://titan.ja.org/)

* MESE-Next is not a single website but a deployable software;
* MESE-Next supports higher maximum players, higher maximum periods, and more settings;
* JA Titan supports pick-up games, and human-vs-bot games;

### Difference between MESE-Next and IMese

* MESE-Next does not need a MESE executable;
* MESE-Next supports higher maximum players, and multiple games at the same time;
* IMese supports encrypted connection, history record analysis, and messaging;
* IMese only runs under Windows x86 environment;

Client Side Requirements
---

A browser supports HTML5, CSS3, and ES5 features is required.

MESE-Next Web Frontend works best under:

* Firefox 38+
* Chromium 42+
* IE 10+ (works under IE 8+)
* Safari 8+ & Safari iOS 8+

MESE-Next does not support:

* IE 7-
* QQ (WeChat) Browser on Android

Server Side Requirements
---

MESE-Next Server may require:

* Node.js 0.12+
* MongoDB 2.x
* Node.js packages: MongoDB, Express 4 & Compression, Socket.IO
* MESE-Next Engine (released in MESE China Group)

Installation
---

MESE-Next Server itself does not need installation.

Before running MESE-Next, you may need the following steps:

1. Clone this repository;
2. Install Node.js and MongoDB;
3. Install NPM (Node.js Package Manager);
4. Install required packages: `mongodb`, `express`, `compression` and `socket.io`;
5. Get MESE-NEXT Engine from our group or by contacting us, and put it under the same directory as MESE-Next Server's;
6. Edit `mese.config.js` if you want to change some configurations;
7. Now, you could run `mese.js` using Node.js.

License
---

MESE-Next - Copyright (C) hczhcz

MESE-Next is **only** distributed in GitHub and MESE China Group, and released **without** any warranty. As this distribution is not under any license, commercial use, public use, and redistribution outside GitHub are not allowed. Contact us if you need a licensed version.
