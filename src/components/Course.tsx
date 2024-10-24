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
    if (isBlack) return 'bg-black text-white';
    if (isSelected) return 'bg-blue-600 text-white';
    if (isHovered) return 'bg-blue-100';
    if (isPrerequisite) return 'bg-yellow-100';
    return color;
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onRightClick(id);
  };

  return (
    <div
      className={`
        ${getBackgroundColor()}
        p-3 rounded border border-gray-300
        transition-colors duration-200 ease-in-out
        cursor-pointer h-[90px] w-[180px]
        flex flex-col justify-between
        hover:border-blue-400
      `}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(id)}
      onContextMenu={handleContextMenu}
    >
      <div>
        <h3 className="font-medium text-sm leading-tight mb-1">{name}</h3>
        {!id.includes('_') && <div className="text-xs opacity-75">{id}</div>}
      </div>
      <div className="text-xs flex justify-between items-center">
        {!(credits === 0) && <span>{credits} créditos</span>}
      </div>
    </div>
  );
};

export default Course;