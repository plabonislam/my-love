# Background Music Setup

To add background music to your app, you need to add an MP3 file to the public directory.

## Steps:

1. Find a romantic/love themed background music MP3 file
2. Rename it to `music.mp3`
3. Place it in the `/public` folder of your project
4. The music player will automatically work!

## Recommended Music Sources:

- **Free Music Sites:**
  - YouTube Audio Library (https://www.youtube.com/audiolibrary/music)
  - Free Music Archive (https://freemusicarchive.org)
  - Incompetech (https://incompetech.com/music/)
  - Pixabay Music (https://pixabay.com/music/)

- **Search Terms:**
  - "Romantic piano"
  - "Love theme"
  - "Dreamy ambient"
  - "Emotional instrumental"

## File Requirements:

- **Format**: MP3
- **Name**: music.mp3
- **Location**: /public/music.mp3
- **Recommended Duration**: 2-5 minutes (it will loop automatically)
- **Volume**: The player is set to 30% volume by default

## Alternative:

If you want to use a different filename, edit this line in `app/page.tsx`:

```typescript
const audio = new Audio('/music.mp3');
```

Replace `'/music.mp3'` with your desired filename.

