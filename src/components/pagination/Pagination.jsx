import React from 'react';
import { usePages } from '../state/BreedProvider';

const Pagination = () => {
  const {page, setPage} = usePages();

  return (
    <section className="flex w-8">
      <button className="p-2 bg-gray-700 rounded-l-lg text-white" disabled={page <= 1} onClick={() => setPage(prevPage =>   prevPage - 1)}>prev</button>
      <span className="p-2 bg-gray-600 text-white">{page}</span>
      <button className="p-2 bg-gray-700 rounded-r-lg text-white" onClick={() => setPage(prevPage => prevPage + 1)}>next</  button>
    </section>
  )
}

export default Pagination;

