export const Backgraund: React.FC = ({ children }) => {
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
      {children}
    </div>
  );
};
