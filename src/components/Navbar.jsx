// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//         <a class="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/Home">
//                  Home
//               </Link>
//             </li>

//              <li className="nav-item">
//                <Link className="nav-link" to="/Home2">
//                 Home2
//                </Link>
//              </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };


import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>

      <button
        className="navbar-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">

           {/* <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/home2">
              Home2
            </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link" to="/mapdemo1">
              MapDemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo2">
              MapDemo2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo3">
              MapDemo3
            </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link" to="/mapdemo4">
              MapDemo4
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/mapdemo5">
              MapDemo5
            </Link>
          </li> 

           <li className="nav-item">
            <Link className="nav-link" to="/functiondemo1">
             Function Demo
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/usestatedemo1">
             Use StateDemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/usestatedemo2">
             Use StateDemo2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/usestatedemo3">
             Use StateDemo3
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/myportfolio">
              My PortFolio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/homecomponent">
              HomeComponent
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixhome">
              NetflixHome
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixshows">
              NetflixShows
            </Link>
          </li>

            <li className="nav-item">
            <Link className="nav-link" to="/netflixmovies">
              NetflixMovies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/watch">
              Watch
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/errornotfound">
              ErrorNotFound
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cardcomponent">
              CardComponent
            </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link" to="/employee">
              Employee
            </Link>
          </li> */}

           <li className="nav-item">
            <Link className="nav-link" to="/inputdemo1">
              InputDemo1
            </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link" to="/inputdemo2">
              InputDemo2
            </Link>
          </li>

           <li className="nav-item">
            <Link className="nav-link" to="/formdemo1">
              FormDemo1
            </Link>
          </li>

            <li className="nav-item">
            <Link className="nav-link" to="/myformdemo1">
              MyFormDemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/formdemo2">
              FormDemo2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/formdemo3">
              FormDemo3
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/formdemo4">
              FormDemo4
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/apidemo1">
              ApiDemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/myapidemo1">
              MyApiDemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/myapidemo2">
              MyApiDemo2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/omdbapi">
              OmdbApi
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/apidemo2">
              ApiDemo2
            </Link>
          </li> 

        </ul>
      </div>
    </nav>
  );
};