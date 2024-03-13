import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getLocalStorageData from '../utils/getLocalStorageData';

const NotesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #a0aec0;
  border-radius: 5px;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0.5rem;
`;

const Separator = styled.hr`
  width: 90%;
  margin: -1px;
  background-color: #edf2f7;
  color: #edf2f7;
`;

const NotesList = () => {
  const notes = getLocalStorageData('notes');

  const listItems = notes.map((note, index) => {
    return (
      <ListItem key={index}>
        <h4>
          <Link to={`/edit/${note.id}`}>{note.title}</Link>
        </h4>
        <Separator />
        <p>{note.note.slice(0, 101)}</p>
      </ListItem>
    );
  });

  return (
    <NotesListContainer>
      <List>{listItems}</List>
    </NotesListContainer>
  );
};
export default NotesList;
