import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NotesList = () => {
  const existing = localStorage.getItem('notes');
  const notes = existing ? JSON.parse(existing) : [];

  const listItems = notes.map((notes, index) => {
    return (
      <ListItem key={index}>
        <Link to={`/edit/${notes.id}`}>{notes.title}</Link>
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
