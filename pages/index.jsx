import { Link } from 'components';


export default Home;

function Home() {
    return (
        <div>
            <h1 class="text-primary">Webby</h1>
            
            <button type ="button" class="btn1"><Link href="/users"> Manage Roles</Link></button>
           
        </div>
    );
}
