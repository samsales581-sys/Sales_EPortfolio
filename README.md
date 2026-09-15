# Thirdy Portfolio — Preliminary Exam Final Version

This project keeps the original **Thirdy Portfolio** layout and design from the GitHub Pages website, while applying the requested changes:

- Removed the **Exam** navigation item.
- Removed the **Exam Requirements** button from Home.
- Removed the full visible **Preliminary Exam Requirements** section.
- Restored the **Contact** page content and design from the original GitHub portfolio.
- Restored the **Address** page content and design from the original GitHub portfolio.
- Removed the video feature.
- Replaced the old **Gaming** card in About with a functional **Spotify-inspired music player**.
- Kept **Home, About, Contact, Address, Gym, My Game, Motivation, images, text, red/black design, cards, and hover effects**.

## How to Open in VS Code

1. Extract the ZIP file.
2. Open **Visual Studio Code**.
3. Click **File > Open Folder**.
4. Select `Thirdy-Portfolio-Prelim-Music-Final`.
5. Open `index.html`.
6. Install **Live Server** if you do not have it.
7. Right-click `index.html`.
8. Click **Open with Live Server**.

## Music Player

The music player is located on the **About** page, in the place where the old Gaming card was.

It includes:

- play / pause
- previous song
- next song
- progress bar / seek
- current time and duration
- volume control
- playlist selection
- automatic next song
- animated now-playing artwork
- Spotify link button

### Replace the Local Audio

Open:

```text
assets/audio/
```

You will see:

```text
song1.mp3
song2.mp3
song3.mp3
```

Replace any of those files with your own MP3. Keep the same filenames unless you also edit the `src` values in `about.html`.

### Change Song Names and Spotify Links

Open `about.html` and search for:

```javascript
const tracks = [
```

Each track contains:

```javascript
{
    title: "Night Drive",
    artist: "Demo Track 1",
    src: "assets/audio/song1.mp3",
    spotify: "https://open.spotify.com/"
}
```

Change `title`, `artist`, and `spotify` to your song information.

Example:

```javascript
{
    title: "Your Song",
    artist: "Artist Name",
    src: "assets/audio/song1.mp3",
    spotify: "https://open.spotify.com/track/YOUR_TRACK_ID"
}
```

## How the Exam Requirements Are Still Covered

The visible Exam tab was removed as requested, but the project still includes the required work through the actual portfolio and the evidence files.

- **Web system / architecture:** `PORTFOLIO_DOCUMENTATION.md`
- **Interactive interface:** navigation, buttons, hover effects, My Game link, and music player
- **Two multimedia elements:** images + audio
- **Optimization:** lazy-loaded images and `preload="metadata"` for audio
- **Multimedia testing:** `evidence/testing-checklist.md` and `evidence/test-results.txt`
- **Evaluation:** `evidence/evaluation-and-improvements.md`
- **Evidence:** `evidence/before/` and validation files
- **Presentation:** `PRESENTATION_GUIDE.md`

## Important

The original photos use the same image URLs from your public GitHub portfolio. Internet access is needed for those images and Font Awesome icons when opening this version locally.

The audio files are stored locally, so the music player itself works without an internet connection. Spotify links require internet access.
