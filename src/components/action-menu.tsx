const ActionMenu = ({
  menuActions,
  setMessage,
  setShow,
}: {
  menuActions: string[];
  setMessage: (message: string) => void;
  setShow: (value: boolean) => void;
}) => {
  return (
    <div
      className="p-2 absolute right-0 shadow-md space-y-2 w-full z-[99999] -top-36 rounded-[10px] border border-[#92909526] bg-[#FAFAFA] option-menu"
      onMouseDown={(e) => e.preventDefault()} // Prevent blur from happening when clicking menu
    >
      {menuActions.map((option) => (
        <button
          key={option}
          onClick={() => {
            setMessage(option);
            setShow(false);
          }}
          className="px-4 py-2 border hover:bg-gray-50 border-[#92909526] text-[#929095CC] w-full text-sm bg-white text-left cursor-pointer rounded-md"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ActionMenu;
