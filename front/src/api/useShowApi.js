import { useEffect, useState } from 'react';
import { publicData } from './api';

function useShowApi() {
  const [latestList, setLatestList] = useState([]);
  const [musicalList, setMusicalList] = useState([]);
  const [classicList, setClassicList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await publicData({ numOfRows: 100 });
      let items = res?.response?.body?.items?.item || [];

      const allItems = Array.isArray(items) ? items : [items];

      // 이미지
      const withImage = allItems.filter(item => item.IMAGE_OBJECT);

      // 장르
      const filterGenre = genre => withImage.filter(item => item.GENRE?.includes(genre));

      setLatestList(withImage.slice(0, 20));
      setMusicalList(filterGenre('뮤지컬'));
      setClassicList(filterGenre('클래식'));
    };

    fetchData();
  }, []);

  return { latestList, musicalList, classicList };
}

export default useShowApi;
