  
      // <nav className="navbar navbar-fixed-top bg-faded">
      //   <div className="container">
      //     <div className="navbar-header">
      //       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      //         <span className="sr-only">Toggle navigation</span>
      //         <span className="icon-bar"></span>
      //         <span className="icon-bar"></span>
      //         <span className="icon-bar"></span>
      //       </button>
      //     </div>
      <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li className="active">
          <Link to={'/'}>
            Home Page
          </Link>
        </li>
        <li>
          <Link to={'/events'}>
            Programmes
          </Link>
        </li>
        <li>
          <Link to={'/contact'}>
            Contact
          </Link>
        </li>
      </ul>
      {loginButtons}


    </div>
//   </div>
// </nav>