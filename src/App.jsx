import './components/tag/Tag'
import Tag from './components/tag/Tag';
import Thumb from './components/thumb/Thumb';
import Dropdown from './components/dropdown/Dropdown';
import Carrousel from './components/carrousel/Carrousel';
import { data } from './data/logements';
import { about } from './data/aboutData';
import Footer from './components/footer/Footer';
import Home from './views/Home/Home';


const App = ()=> {
    console.log(data);
  return(
      <div>
        
        <Home />
        
        
        
        
        {/*
        <Dropdown name={about[1].name} content={about[1].content} type="about" />
        <Tag name={data[0].tags[0]}/>
        <Dropdown content={data[0].equipments} name="Equipements" type="equipements_description"/>
          <Thumb name={data[0].title} cover={data[0].cover} />
          <Carrousel image={data[0].cover} />
          <Footer />
        */}
        
      </div>
    )
    
  }

export default App;