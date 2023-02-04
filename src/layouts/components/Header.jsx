import React from 'react';

function Header() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Datadao</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="dashboard">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="mycourse">My Course</a>
      </li>
    </ul>
    <button class="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">Sign Up</button>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Connect To Metamask</button>
  </div>
</nav>
    </>
  );
}

export default Header;
