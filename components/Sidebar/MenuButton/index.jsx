export default function MenuButton({ Icon, id, title, handleClick }) {
  return (
    <div
      className="icon"  
      id={`${id}`}
      title={title}
      onClick={handleClick}
    >
      {Icon}
    </div>
  );
};
