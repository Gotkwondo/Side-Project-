import DesktopMapContainer from './containers/desktopMapContainer'
import Title from './components/modules/Title/Title';
import Bar from './components/modules/Bar/Bar';


const App = () => {
  // const Desktop = useMediaQuery({
  //   query: "(min-width: 1024px)"
  // })
  // const Mobile = useMediaQuery({
  //   query: "(max-width: 1023px)"
  // })
  return (
    
    <div className="wrapper">
      <div className="container">
        <Title />
        <DesktopMapContainer />
        <Bar />
      </div>
    </div>
  )
};

export default App;
