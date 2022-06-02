import React  from 'react';
import Post from './Post';

export default function Livro({ book,ToSelect }){

  return (
    <Post aoSelecionar={ToSelect} data={book} />
  );
};
