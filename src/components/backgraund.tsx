import { Logo } from './logo';
import { Search } from "./search";

export const Backgraund: React.FC = () => {
  return (
    <div
      className=" 
      min-h-full 
      flex 
      justify-center 
      items-center 
      flex-col 
      bg-backgraund 
      bg-cover "
    >
      <Logo small />
      <Search />
    </div>
  );
};
