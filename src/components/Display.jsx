import './Display.css';

const Display = ({ numCopy, result }) => {

    return (

        <div className='calValue'>
          <h3>{numCopy}</h3>
          <h3>{result}</h3>
        </div>

    );
}

export default Display;

// 2+3*5-6/3 = 1
// 2+3*5-2 = 2
// 2+15-2 

