# Portfolio Documentation

**Project:** Basic Web E-Portfolio  
**Course:** PBSIT 002 LAB  
**Portfolio:** Thirdy Portfolio  

## 1. Web System and Architecture

### Technologies and Tools Used

The portfolio uses **HTML5**, **CSS3**, and **JavaScript**. HTML contains the content and structure of each page. CSS handles the red-and-black design, cards, image layout, responsive rules, buttons, hover effects, and the Spotify-inspired music interface. JavaScript controls the music player, including play/pause, previous/next track, progress, seeking, volume, playlist selection, automatic next-track playback, and Spotify links.

**Visual Studio Code** is used to edit the files. **Live Server** can be used to run the website locally.

### Client Side

The browser is the client side of the portfolio. It loads and displays the HTML pages, applies CSS, runs JavaScript, displays images, and plays local MP3 audio.

### Server Side

This is a static web portfolio. A database and server-side programming language are not required. When published through GitHub Pages, GitHub Pages serves the static HTML and asset files to the user's browser.

### How the Main Parts Work Together

- `index.html` is the Home page.
- `about.html` contains the About, Motivation, Hobbies, My Game, and Music sections.
- `contact.html` contains the original contact information and social-media cards.
- `address.html` contains the original address, email, phone number, and map button.
- Images are loaded from the existing public Thirdy Portfolio.
- Audio is loaded from `assets/audio/`.
- JavaScript inside `about.html` controls the music player.

## 2. Interactive Web Interface

The portfolio contains the following interactive elements:

- Home / About / Contact / Address navigation
- social-media buttons
- Start button
- Play Game button
- card hover animations
- Google Maps button
- email / telephone links
- Spotify-inspired audio player
- play / pause button
- previous / next buttons
- seek/progress control
- volume control
- clickable playlist rows
- Spotify links

## 3. Multimedia Integration and Optimization

The portfolio uses at least two multimedia types:

### Images
The Home, About, Motivation, and Gym images are displayed throughout the portfolio. Images below the initial screen use `loading="lazy"` and `decoding="async"` where appropriate.

### Audio
Three MP3 slots are provided:

- `assets/audio/song1.mp3`
- `assets/audio/song2.mp3`
- `assets/audio/song3.mp3`

The HTML audio element uses `preload="metadata"`. This allows the browser to read basic audio information without automatically loading an entire song before the user requests playback.

## 4. Multimedia Delivery and Performance

The website should be tested by:

1. opening each navigation page;
2. confirming all original images display;
3. playing all three audio tracks;
4. testing pause, next, previous, seeking, and volume;
5. opening a Spotify link;
6. checking the map, email, telephone, and social links;
7. resizing the browser to confirm the responsive layout;
8. using Chrome DevTools > Lighthouse if a browser-generated performance report is required.

Written evidence is stored in the `evidence` folder.

## 5. Evaluation

See `evidence/evaluation-and-improvements.md` for the required:

- two things that work well;
- two weaknesses; and
- two improvements.

## 6. Final Portfolio / Presentation

The visible portfolio no longer has a dedicated Exam tab. The required explanation and evidence are kept in this documentation and the `evidence` folder so the personal portfolio remains clean and consistent with the original design.
