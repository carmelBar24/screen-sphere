
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import Root from "./pages/Root/Root";


const router = createBrowserRouter([
    {
        element:<Root/>,
        children: [
            {path: '/', element: <Trending/>},
            {path: '/movies', element: <Movies/>},
            {path: '/series', element: <Series/>},
            {path: '/search', element: <Search/>},
        ]
    },
])

function App() {
return (
    <RouterProvider router={router}/>
 );
}

export default App;
