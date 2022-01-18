import axios from 'axios';

async function getLastChange(): Promise<number> {
  const lastChangeUrl =
    'https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win%2FLAST_CHANGE?alt=media';

  const { data } = await axios.get<number>(lastChangeUrl);

  return data;
}

export default getLastChange;
export { getLastChange };
