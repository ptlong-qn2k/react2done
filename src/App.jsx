import { useState } from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import Component6 from './Components/Component6';

function App() {
    const [count, setCount] = useState(0);
    const [sidebar, setSidebar] = useState(false);

    const statusSidebar = (value) => {
        setSidebar(!sidebar);
    };

    return (
        <div className="w-[full] m-auto font-gotham md:w-[375px] md:px-[32px] md:pt-5">
            <Header sidebar={sidebar} statusSidebar={statusSidebar} />
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component5 />
            <Component6 />
        </div>
    );
}

export default App;
