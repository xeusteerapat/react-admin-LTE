import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      {/* Brand Logo */}
      <Link to='/' className='brand-link'>
        <img
          src='dist/img/AdminLTELogo.png'
          alt='AdminLTE Logo'
          className='brand-image img-circle elevation-3'
          style={{ opacity: '.8' }}
        />
        <span className='brand-text font-weight-light'>
          Getcode Career Test
        </span>
      </Link>
      {/* Sidebar */}
      <div className='sidebar'>
        {/* Sidebar user panel (optional) */}
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
          <div className='image'>
            <img
              src='dist/img/user2-160x160.jpg'
              className='img-circle elevation-2'
              alt='User'
            />
          </div>
          <div className='info'>
            <Link href='/' className='d-block'>
              Sonter
            </Link>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className='mt-2'>
          <ul
            className='nav nav-pills nav-sidebar flex-column'
            data-widget='treeview'
            role='menu'
            data-accordion='false'
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className='nav-item'>
              <Link to='/' className='nav-link active'>
                <i className='nav-icon fas fa-tachometer-alt' />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className='nav-item'>
              <a href='pages/widgets.html' className='nav-link'>
                <i className='nav-icon fas fa-user' />
                <p>User</p>
              </a>
            </li>
            <li className='nav-item has-treeview'>
              <a href='/' className='nav-link'>
                <i className='nav-icon fas fa-barcode' />
                <p>
                  Voucher
                  <i className='fas fa-angle-left right' />
                  <span className='badge badge-info right'>6</span>
                </p>
              </a>
              <ul className='nav nav-treeview'>
                <li className='nav-item'>
                  <a href='pages/layout/top-nav.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='pages/layout/top-nav-sidebar.html'
                    className='nav-link'
                  >
                    <i className='far fa-circle nav-icon' />
                    <p>Top Navigation + Sidebar</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/layout/boxed.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Boxed</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='pages/layout/fixed-sidebar.html'
                    className='nav-link'
                  >
                    <i className='far fa-circle nav-icon' />
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/layout/fixed-topnav.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/layout/fixed-footer.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='pages/layout/collapsed-sidebar.html'
                    className='nav-link'
                  >
                    <i className='far fa-circle nav-icon' />
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item has-treeview'>
              <Link to='/questions' className='nav-link'>
                <i className='nav-icon fas fa-question-circle' />
                <p>
                  Questions
                  <i className='right fas fa-angle-left' />
                </p>
              </Link>
              <ul className='nav nav-treeview'>
                <li className='nav-item'>
                  <Link to='/questions' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>All Questions</p>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/addquestion' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Create New Question</p>
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href='pages/charts/flot.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Flot</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/charts/inline.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Inline</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item has-treeview'>
              <a href='/' className='nav-link'>
                <i className='nav-icon fas fa-brain' />
                <p>
                  Axis
                  <i className='fas fa-angle-left right' />
                </p>
              </a>
              <ul className='nav nav-treeview'>
                <li className='nav-item'>
                  <a href='pages/UI/general.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Passion</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/UI/icons.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Mindset</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/UI/buttons.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Skills</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item has-treeview'>
              <a href='/jobs' className='nav-link'>
                <i className='nav-icon fas fa-briefcase' />
                <p>
                  Jobs
                  <i className='fas fa-angle-left right' />
                </p>
              </a>
              <ul className='nav nav-treeview'>
                <li className='nav-item'>
                  <Link href='/jobs' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>All Jobs</p>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/addjobs' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Create New Jobs</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item has-treeview'>
              <a href='/' className='nav-link'>
                <i className='nav-icon fas fa-table' />
                <p>
                  Tables
                  <i className='fas fa-angle-left right' />
                </p>
              </a>
              <ul className='nav nav-treeview'>
                <li className='nav-item'>
                  <a href='pages/tables/simple.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/tables/data.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>DataTables</p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='pages/tables/jsgrid.html' className='nav-link'>
                    <i className='far fa-circle nav-icon' />
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
