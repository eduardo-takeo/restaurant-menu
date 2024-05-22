export interface ITagProps {
  text: string;
  isActive?: boolean;
}

export const Tag = ({ text, isActive = false }: ITagProps) => {
  return (
    <div
      className={`px-4 py-1 border rounded-lg ${
        isActive ? "bg-black border-none" : "bg-white"
      }`}
    >
      <p
        className={`text-sm font-light ${
          isActive ? "text-white" : "ttext-gray-800"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
