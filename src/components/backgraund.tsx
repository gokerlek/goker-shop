import back from './back.png'
import { Logo } from './logo'
import { Search } from './search'

export const Backgraund:React.FC =() => {

    return (
      <div className=" min-h-full flex justify-center items-center flex-col "
        style={{backgroundImage: `url(${back})`, 
                backgroundSize:"cover"
                }}>
        <Logo/>
        <Search/>
      </div>
    );
}
