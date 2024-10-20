# NewTube

**NewTube** is a YouTube clone application built to provide a similar experience to YouTube, allowing users to search and watch videos. It leverages the **YouTube Data API** via **RapidAPI** to fetch data dynamically, displaying the latest videos, channels, and search results.

## Key Features

- **Search Videos**: Allows users to search for videos from YouTube's massive library using the YouTube Data API.
- **Watch Videos**: Stream videos with an integrated video player.
- **Responsive Design**: Fully responsive user interface that adapts to desktop and mobile devices.
- **Channel Information**: View detailed information about channels including subscriber counts and video lists.
- **Trending Videos**: Displays trending videos dynamically from YouTube's database.
- **Video Recommendations**: Related video suggestions on the video playback screen.
- **Seamless User Experience**: Simple and intuitive navigation for users.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **RapidAPI**: Used for fetching data from the YouTube API.
- **YouTube Data API**: Accesses YouTube video, channel, and search data.
- **Axios**: For making API requests to RapidAPI and handling data responses.
- **React Router**: For navigating between pages (search, video playback, etc.).
- **Context API**: For managing global state and sharing data across components.
- **CSS Modules**: For styling and ensuring a modular design.
  
## Installation

To run NewTube locally, follow these steps:

1. Clone the repository:
    ```bash
     git clone https://github.com/your-username/NewTube.git
    ```
    
2. Navigate to the project directory:
   ```bash
   cd NewTube
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a .env file in the root directory and add your ChatEngine and Firebase credentials.
    ```
    REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
    REACT_APP_YOUTUBE_API_URL=https://your-rapidapi-youtube-endpoint
    ```

5. Start the development server:
    ```bash
    npm start
    ```

6. Visit http://localhost:3000 in your browser to use PingMe.

## Demo
You can try out the live demo [here](https://newtubeapp.netlify.app/).

## Contributing
Contributions are welcome! If you'd like to contribute, please open an issue or submit a pull request.
