import logo from './logo.svg';
import Comp1 from './Comp1.js';
import Comp2 from './Comp2.js';
import Comp3 from './Comp3.js';

function App() {
  return (
    <>
    
    <Comp1/>
    <Comp2/>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Comp3 
    name="Declarative" 
    para1="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
    para2="Declarative views make your code more predictable and easier to debug."
    />
   <Comp3
    name="Component-Based"
    para1="Build encapsulated components that manage their own state, then compose them to make complex UIs."
    para2="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
    />
    <Comp3
    name="Learn Once, Write Anywhere"
    para1="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."
    para2="React can also render on the server using Node and power mobile apps using React Native."/>
    </div>
   
     </>
  )
};
export default App;
