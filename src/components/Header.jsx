function Header({onResetData}) {
  // props: onResetData

  return (
    <div>
      <h1>Food Journal</h1>
      <button className="button" onClick={onResetData}>Reset Dev Data</button>
      <br/>
    </div>
  );
}

export default Header;