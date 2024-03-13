import { Route, Routes } from 'react-router-dom';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import HomePage from './pages/Home';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
