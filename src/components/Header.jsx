function Header({onResetData}) {
  // props: onResetData

  return (
    <div>
      <h1>Food Journal</h1>
      <hr/>
      <h5 className="feature">Custom Features: App uses local storage for data persistence and provides the ability to edit existing entries</h5>
      <button className="button" onClick={onResetData}>Reset to Sample Data</button>
      <hr/>
      <br/>
    </div>
  );
}

export default Header;