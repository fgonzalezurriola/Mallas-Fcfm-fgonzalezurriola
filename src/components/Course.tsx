import React from 'react';

interface CourseProps {
  id: string;
  name: string;
  credits: number;
  color: string;
  isPrerequisite: boolean;
  isSelected: boolean;
  isBlack: boolean;
  isHovered: boolean;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  onClick: (id: string) => void;
  onRightClick: (id: string) => void;
}


const Course: React.FC<CourseProps> = ({
  id,
  name,
  credits,
  color,
  isPrerequisite,
  isSelected,
  isBlack,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onRightClick,
}) => {
  const getBackgroundColor = () => {
    if (isPrerequisite) return 'bg-amber-300';
    if (isBlack) return 'bg-black text-white';
    if (isSelected) return 'bg-blue-600 text-white';
    if (isHovered) return 'bg-blue-300 ';
    return color;
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onRightClick(id);
  };

  const largeName = (name: string) => {
    if (name.length > 36 || name.split(' ').length > 5) {
      return true;
    }
    return false;
  }

  return (
    <div
      className={`
        ${getBackgroundColor()} ${largeName(name) ? 'py-1 pb-1 pl-2 pr-2' : 'p-2'}
        border border-gray-300
        transition-colors duration-200 ease-in-out
        cursor-pointer h-[90px] w-[180px]
        flex flex-col justify-between
        hover:border-blue-400
        hover:shadow-lg ${isPrerequisite ? 'hover:shadow-yellow-600' : 'hover:shadow-blue-300'}
      `}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(id)}
      onContextMenu={handleContextMenu}
    >
      <div>
        <h3 className="font-medium text-sm leading-tight mb-0">{name}</h3>
        {!id.includes('_') && <div className="text-xs opacity-75">{id}</div>}
      </div>
      <div className="bottom-0 text-xs flex justify-between items-center mb-0">
        {!(credits === 0) && <span>{credits} créditos</span>}
      </div>
    </div>
  );
};

export default Course;
