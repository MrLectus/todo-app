import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './Header';
import Todo from './Todo';
const App = () => {
    const [item, setItem] = useState('');
    const [todoItem, setTodoItem] = useState([]);
    const [dark, setDark] = useState(false);
    const onHandleItem = (event) => {
        if (event.key === 'Enter') {
            setItem(event.target.value);
        }
    };
    useEffect(() => {
        if (!dark) {
            document.body.style.backgroundColor = "hsl(0,0%,98%)";
        } else {
            document.body.style.backgroundColor = "hsl(235,21%,11%)";
        }
    }, [dark])
    useEffect(() => {
        const createTodo = () => {
            const todo = {
                id: nanoid(),
                item: item,
                completed: false,
            };
            todo.item.length > 0 && setTodoItem((prevTodo) => [todo, ...prevTodo]);
        };
        createTodo();
    }, [item]);

    const deleteTodo = (event, id) => {
        event.preventDefault();
        setTodoItem((prevItem) => {
            return prevItem.filter((item) => item.id !== id);
        });
    };

    const Clear = (event) => {
        event.preventDefault();
        setTodoItem((prevItem) => {
            return prevItem.filter((item) => item.completed === false);
        });
    };

    const Completed = (event, id) => {
        event.preventDefault();
        setTodoItem((prevItem) => {
            return prevItem.map((item) => {
                return item.id === id ? { ...item, completed: !item.completed } : item;
            });
        });
    };
    const darkMode = () => {
        setDark(dark => !dark);
    }

    return (
        <div className="font-sans">
            <Header onHandleItem={onHandleItem} darkMode={darkMode} dark={dark} />
            <Todo
                dark={dark}
                todoItem={todoItem}
                Clear={Clear}
                Completed={Completed}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};
export default App;
