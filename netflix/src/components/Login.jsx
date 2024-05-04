

const Login = () => {

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return(
    <div className="login">
      <div className="holder">
        
        <br/>
        <form>
          <input 
            className="form-control" 
            value={email} 
            onChange={emailOnChangeHandler} 
            type="email" 
            placeholder="Email"/>
          
          <input 
            className="form-control"
            value={password} 
            
            type="password" 
            placeholder="Password"/>
          <button className="btn btn-danger btn-block" onClick={ctaClickHandler}>
          </button>
          <br/>
          {
            page && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Hatırla
            </label>
          </div>
          }
        </form>
        <br/>
        <br/>
      
        <div className="login-form-other">
          <div className="login-signup-now">
    
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
  )
}

export default Login;