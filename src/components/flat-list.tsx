import { item } from "../interfaces/item";

interface FlatListProps {
  searchResults: item[];
}

export const FlatList: React.FC<FlatListProps> = ({ searchResults }) => {
  return searchResults?.length > 0 ? (
    <div className="bg-white mt-4 text-sm border-transparent rounded-lg py-2 px-4 flex flex-col w-1/3 cursor-pointer">
      <ul>
        {searchResults.map((item) => (
          <li key={`${item.id}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  ) : null;
};
