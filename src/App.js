import './components/tag/Tag'
import Tag from './components/tag/Tag';
import Thumb from './components/thumb/Thumb';
import {Dropdown} from './components/dropdown/dropdown';
import { data } from './data/logements';
import { about } from './data/aboutData';
import { About } from './components/about/about';


const App = ()=> {
    
  return(
      <div>
        <Tag name={data[0].tags[0]}/>
        <Thumb name={data[0].title} cover={data[0].cover} />
        <Dropdown list={data[0].equipments}/>
        <About name={about[1].name} content={about[1].content} />
      </div>
    )
    
  }

export default App;