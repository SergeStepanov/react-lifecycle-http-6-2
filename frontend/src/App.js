import './App.css';
import { FcSynchronize } from 'react-icons/fc';
import { TiDeleteOutline } from 'react-icons/ti';
import NewNote from './components/NewNote/NewNote';
import { useEffect, useState } from 'react';
import Button from './components/generic/Button';
import List from './components/generic/List';
import ListItem from './components/generic/ListItem';

function App() {
  const [notes, setNotes] = useState([]);

  function loadNotes() {
    return fetch(process.env.REACT_APP_DATA_URL)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }

  function addNote(content) {
    fetch(process.env.REACT_APP_DATA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(content),
    }).then((res) => loadNotes());
  }

  function removeNote(id) {
    fetch(process.env.REACT_APP_DATA_URL + '/' + id, {
      method: 'DELETE',
    }).then((res) => loadNotes());
  }

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className='container'>
      <div className='mx-auto'>
        <div>
          <span className='fs-2'>Notes</span>
          <Button className='btn fs-3' onClick={loadNotes}>
            <FcSynchronize />
          </Button>
        </div>

        {notes.length !== 0 && (
          <List className='row mt-5' items={notes}>
            {(items) =>
              items.map((item) => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  className='position-relative col-6 list_item'>
                  {item.content}
                  <div className='position-absolute top-0 end-0'>
                    <TiDeleteOutline onClick={() => removeNote(item.id)} />
                  </div>
                </ListItem>
              ))
            }
          </List>
        )}

        <NewNote addNote={addNote} />
      </div>
    </div>
  );
}

export default App;
