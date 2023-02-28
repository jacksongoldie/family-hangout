import './App.css';
import { Box, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react"
import theme from '..';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span as="img">💕</span>Family Hangout<span as="img">💕</span></h1>
        <Signup />
        <Tag
          size={theme.fontSizes.sm}
          color={theme.colors.pink}
        >
      <TagLabel>Green</TagLabel>
      <TagCloseButton />
    </Tag>
        <Box bg='red' w="100%" h="200px" />
      </header>
    </div>
  );
}

export default App;
