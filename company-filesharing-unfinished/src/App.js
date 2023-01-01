import './App.css';
import SideBar from './sidebar'
import Upload from './uploading'
import Home from './home' 
import {Container} from 'semantic-ui-react'
import {Route} from 'wouter'

function App() {
  return (
    <>
      <Container className='background'>
        <SideBar />
        <Route path='/upload-search'>
          <Upload />
        </Route>
        <Route path='/'>
        <Home />
        </Route>
      </Container>
    </>
  )
}

export default App;
