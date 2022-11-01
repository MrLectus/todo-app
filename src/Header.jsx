export function Circle() {
  return (
    <span className="left-3 absolute inline-block border lock w-5 h-5 rounded-full"></span>
  );
}

const Header = ({ onHandleItem, darkMode, dark }) => {
  return (
    <header className={(dark? "bg-mobile-dark md:bg-desktop-dark": "bg-mobile-light md:bg-desktop-light") + " bg-no-repeat w-full h-44 flex flex-col justify-evenly px-5 md:px-40"}>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-xl tracking-widest text-white">TODO</p>
        <div onClick={darkMode} className={"w-7 h-7 bg-no-repeat flex bg-cover justify-center " + (dark? "bg-icon-sun" : "bg-icon-moon")}  ></div>
      </div>
      <div className={" relative flex items-center"}>
        <Circle />
        <input
          type="text"
          name="todo"
          onKeyDown={(event) => onHandleItem(event)}
          className={(dark? "bg-dark-gray-blue-801":"bg-light-gray-100") + " h-12 w-full rounded pl-10 outline-none placeholder:text-xs"}
          placeholder="Create a new tasks..."
        />
      </div>
    </header>
  );
};

export default Header;
