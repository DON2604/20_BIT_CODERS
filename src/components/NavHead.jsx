
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavHead(){
    return ( <nav className="nav">
        <Link to="/" className="title"> STOCKY</Link>
        <ul>
            <CustomLink to="/Stocks">Stocks</CustomLink>
            <button className="bg-purple-1000 hover:bg-purple-800 text-white font-bold py-0 px-2 rounded" >Sign in</button>
        </ul>
</nav>)

function CustomLink({to, children,...props}){
     const resolvedPath=useResolvedPath(to);
     const isActive=useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )

}

}