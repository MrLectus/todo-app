const Todo = ({ todoItem, deleteTodo, Completed, Clear, dark }) => {
    console.log(todoItem);
    const todo = todoItem.map((items) => {
        return (
            <div
                key={items.id}
                id={items.id}
                className={
                    'flex w-full h-10 items-center ' +
                    (items.completed && 'line-through text-dark-gray-blue-800') + (dark ? " bg-dark-gray-blue-801 text-dark-gray-blue-500 border-b border-b-dark-gray-blue-800" : " bg-white border-b border-b-dark-gray-blue-101 text-dark-gray-blue-500")
                }
            >
                <span
                    onClick={(event) => Completed(event, items.id)}
                    className={
                        'block ml-3 w-5 h-5 border rounded-full ' +
                        (items.completed &&
                            'bg-icon-check bg-blue-500 bg-no-repeat bg-center bg-cover object-center bg-clip-content')
                    }
                ></span>
                <p className="text-xs text-ellipsis overflow-hidden whitespace-nowrap mx-4 basis-8/12 md:basis-9/12">
                    {items.item}
                </p>
                <span
                    onClick={(event) => deleteTodo(event, items.id)}
                    className="block w-5 h-5 bg-icon-cross rounded-full cursor-pointer"
                ></span>
            </div>
        );
    });
    return (
        <main className="px-5 md:px-40 translate-y-[-20px]">
            <div className="rounded-xl">
                {todo}
                {todoItem.length > 0 && <div className={(dark ? "bg-dark-gray-blue-801" : "text-dark-gray-blue-100 bg-white") + " flex flex-row justify-between px-5 w-full h-10 rounded-sm items-center rounded-b"}>
                    <p className="text-xs">{todoItem.length} Items left</p>
                    <p onClick={(event) => Clear(event)} className="text-xs">
                        Clear completed
                    </p>
                </div>}
                {todoItem.length > 0 && <div className={(dark ? " bg-dark-gray-blue-801" : " bg-white text-dark-gray-blue-800") + " rounded h-10 flex flex-row items-center mt-10 text-xs justify-around"}>
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </div>}
            </div>
        </main>
    );
};

export default Todo;
