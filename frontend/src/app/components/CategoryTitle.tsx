export interface ICategoryTitleProps {
  title: string;
}

export const CategoryTitle = ({ title }: ICategoryTitleProps) => (
  <div className="bg-white py-2 px-4 border-b border-b-gray-100">
    <h2 className="text-base  text-gray-700">{title}</h2>
  </div>
);
