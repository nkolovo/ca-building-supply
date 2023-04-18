const Navbar = {
    Wrapper: styled.nav`
      flex: 1;
  
      align-self: flex-start;
  
      padding: 1rem 3rem;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      background-color: white;
  
      // 40em == 640px
      @media only screen and (max-width: 40em) {
        position: fixed;
        width: 100vw;
        bottom: 0;
      }
    `,
    // ...
  };