import React from 'react';

import { Route , Switch, HashRouter} from 'react-router-dom';
import { ConstProvider } from '../contexts/Context';

import '../css/imports.css';

import Header from './Header';
import Footer from './Footer';
import Filter from './pages/filter/Filter';
import Cart from './pages/cart/Cart';

const App = () => {
    return (
       <ConstProvider>
             <HashRouter>
                <Header />
                    <Switch >
                        <Route path="/" exact component={Filter} />
                        <Route path="/cart" exact component={Cart} />
                    </Switch>
                <Footer />
            </HashRouter>
        </ConstProvider>   
    )
}

export default App;