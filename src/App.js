import Posts from "./components/Posts/Posts";
import Missions from "./components/Spacex/Missions";
import Users from "./components/Users/Users";

function App() {
    return (
        <div>
            {/*// з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
            {/*// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
            {/*// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}

            <Posts/>

            {/*є API от SpaceX*/}
            {/*https://api.spacexdata.com/v3/launches/*/}
            {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
            {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}

            <Missions/>


            {/*#Advance*/}

            {/*вивести всіх юзерів з плайсхолдеру*/}
            {/*в кожного юзера має бути кнопка яка буде показувати пости цього юзера*/}

            {/*пости мають виводитись під компонетою Users (в App компоненті)*/}

            <Users/>
        </div>
    );
}

export default App;
