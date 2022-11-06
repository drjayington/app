import '../index.scss';

function DesignSystem() {
  return (
    <div className="app" style={{padding: '24px'}}>
        <h1 style={{marginBottom: 16}}>Testing h1</h1>
        <div className='card'>
          <h2 style={{marginBottom: 16}}>Testing h2</h2>
          <p style={{marginBottom: 16}}>Testing p</p>
          <input style={{marginBottom: 16}} type="text"></input>
          <button>Button</button>
        </div>
    </div>
  );
}

export default DesignSystem;
