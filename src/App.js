import UserForm from "./components/Users/UserForm";
import CommentForm from "./components/comments/CommentForm";
import Cars from "./components/Cars/Cars";

function App() {
    return (
        <div>
            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users*/}
            <UserForm/>
            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments*/}
            <hr/>
            <CommentForm/>
            {/*Реалізувати створення, видалення та оновлення машин*/}
            <hr/>
            <Cars/>
        </div>
    );
}

export default App;
