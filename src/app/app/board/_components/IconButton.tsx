

interface IconButtonProps  {
    onClick: () => void;
    children: React.ReactNode;
    isActive?: boolean;
    disabled?: boolean;
  };
  
  export default function IconButton(
    { onClick, children, isActive, disabled }: IconButtonProps
  ) {
    return (
      <button
        className={` ${isActive ?" w-50" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }