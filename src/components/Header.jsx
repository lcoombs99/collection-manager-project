  // App -> Header
  // role: Display Page Title, Button to reset data (temp)
  // props: onResetData
function Header({onResetData}) {

  return (
    <div>
      <h1>Food Journal</h1>
      <button className="button" onClick={onResetData}>Reset Dev Data</button>
      <br/>
    </div>
  );
}

export default Header;