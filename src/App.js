import {Link, Routes, Route} from "react-router-dom";

import Todos from "./components/Pages/TodoPages/Todos";
import Albums from "./components/Pages/AlbumsPage/Albums";
import Comments from "./components/Pages/CommentsPage/Comments";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
    return (
        <div className="App">
            <div>
                <ul>
                    <li><Link to={'todos'}>Todos</Link></li>
                    <li><Link to={'albums'}>Albums</Link></li>
                    <li><Link to={'comments'}>Comments</Link></li>
                </ul>
            </div>
            <div>
                view
                <Routes>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={':id'} element={<PostDetails/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
