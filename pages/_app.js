import Head from 'next/head';
import 'styles/bootstrap.min.css'
import 'styles/globals.css';
import { Nav, Alert } from 'components';

export default App;
/**/
function App({ Component, pageProps }) {
    return (
        <>
            
                

               {/* bootstrap css */}
             
            

           <div className="app-container bg-light">
                <Nav />
                <Alert />
                <div className="container pt-4 pb-4">
                    <Component {...pageProps} />
                </div>
            </div>

            {/* credits */}
            <div className="text-center mt-4">
                <p>
                    <a href="https://github.com/aliemeenfarhan/next.js-for-webby-test.git" target="_top">Github Page for code</a>
                </p>
               
            </div>
        </>
    );
}
