import { Route, Routes, Link } from 'react-router-dom';
import ProductCompentent from '../products/products.js';
import ServiceCompentent from '../service/service.js';
import UserData from '../user/user.js';
import ClassCompnent from '../class/class.js';
import FunctionComponent from '../function/function.js';



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"./navbar"}>Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={'/navbar'}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/service">Service</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/user">User's</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Components
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                  <li>
                    <Link class="dropdown-item" to="/class">Class Component</Link>
                  </li>
                  {/* <li><hr class="dropdown-divider" /></li> */}
                  <li>
                    <Link class="dropdown-item" to="/function">Function Components</Link>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item">
              //   <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              // </li> */}
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='./navbar' element={<Navbar></Navbar>} />
        <Route path='/products' element={<ProductCompentent />} />
        <Route path='/service' element={<ServiceCompentent />} />
        <Route path='/user' element={<UserData />} />
        <Route path='/class' element={<ClassCompnent />} />
        <Route path='/function' element={<FunctionComponent />} />
      </Routes>
    </div>
  );
}

export default Navbar;