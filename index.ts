import axios from 'axios';

(async () => {
  const lastChangeUrl =
    'https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win%2FLAST_CHANGE?alt=media';

  const { data } = await axios.get<string>(lastChangeUrl);

  const lastChange = parseInt(data, 10);

  process.stdout.write(lastChange.toString());
})();
