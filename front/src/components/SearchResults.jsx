import React from 'react';
import { motion } from 'framer-motion';
import useSearchResults from '../api/useSearchResults';
import ShowCard from '../components/ShowCard';

import '../styles/components.scss';

function SearchResults({ keyword }) {
  const { data, loading } = useSearchResults(keyword);

  if (!keyword) return <p className="search_message">검색어를 입력해주세요.</p>;

  if (loading) {
    return (
      <div className="loading_wrapper">
        <div className="dot_bounce_wrapper">
          <motion.span
            className="dot"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >.</motion.span>
          <motion.span
            className="dot"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          >.</motion.span>
          <motion.span
            className="dot"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          >.</motion.span>
        </div>
        <p className="search_message">공연을 찾고 있어요</p>
      </div>
    );
  }

  if (!loading && data.length === 0) {
    return <p className="not_message">검색 결과가 없습니다.</p>;
  }

  return (
    <div className="search_results_grid">
      {data.map((item, index) => (
        <ShowCard
          key={item.id || index}
          title={item.title}
          genre={item.genre}
          image={item.image}
          audience={item.audience}
          period={item.period}
          eventPeriod={item.eventPeriod}
          charge={item.charge}
          description={item.description}
          url={item.url}
      />
      ))}
    </div>
  );
}

export default SearchResults;
