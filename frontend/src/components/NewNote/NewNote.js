import React, { useState } from 'react';
import './NewNote.css';
import { FcUpload } from 'react-icons/fc';
import Button from '../generic/Button';

export default function NewNote({ addNote }) {
  const [textNote, setTextNote] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setTextNote((prevVal) => (prevVal = value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNote({ content: textNote });

    setTextNote('');
  };

  return (
    <form className='form-floating mt-5' onSubmit={handleSubmit}>
      <h3>New Note</h3>

      <textarea
        className='form-control note-text'
        id='new-note'
        name='name'
        value={textNote}
        onChange={handleChange}
        required></textarea>

      <Button className='btn fs-3'>
        <FcUpload />
      </Button>
    </form>
  );
}
