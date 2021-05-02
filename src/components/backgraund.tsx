import back from './back.png'
import { Logo } from './logo'
import { Search } from './search'

export const Backgraund:React.FC =() => {

    return (
            <div className="relative"
        style={{
          backgroundImage: `url(${back})`,
        }}>
        <Logo/>
        <Search/>
        </div>
    );
}