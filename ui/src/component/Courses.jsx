import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Courses() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/pyfullstack')
  }
  const handleDsClick = () => { 
    navigate('/jfullstack')
  }
  const handleDsClicks = () => { 
    navigate('/PowerBi')
  }
  const handles = () => {
    navigate('/saleforce')
  }
  const handless = () => {
    navigate('/sap')
  }
  const handled = () => {
    navigate('/datascience')
  }
  const handlesp = () => {
    navigate('/swift')
  }
  const handleai = () => {
    navigate('/ai')
  }
  const peg = () => {
    navigate('/pega')
  }
  const st = () => {
    navigate('/sf')
  }
  const aws = () => {
    navigate('/aws')
  }
  const as = () => {
    navigate('/andriod')
  }
  const web = () => {
    navigate('/web')
  }
  const gp = () => {
    navigate('/gp')
  }
  const cy = () => {
    navigate('/cyber')
  }

  const net =() => {
    navigate('/net')
  }
  
  

  return (
    <div className="container mt-4">
      <h3 className="pb-1 mb-4">Latest Courses</h3>

      {/* First Row */}
      <div className="row g-4 mb-4">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handleCardClick('/python-full-stack')} 
          >
            <img src="Python_logo_01.svg" className="card-img-top" alt="Python Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>PYTHON FULL STACK</Link></h5>
            {/* </div> */}
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="col-md-3">

        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handled('/python-full-stack')}> 
            <img src="data-science.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>DATA SCIENCE</Link></h5>
              {/* </div> */}
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handleDsClick('/jfullstack')} >
            <img src="java.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>JAVA FULL STACK</Link></h5>
              {/* </div> */}
          </div>
        </div>

        {/* Card 4 */}
        
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handleai('/python-full-stack')} >
            <img src="AI.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>ARTIFICIAL INTELLIGENCE </Link></h5>
              {/* </div> */}
          </div>
        </div>
      </div>

      {/* Additional Row */}
      <br /><br /><br />
      <h2 className="pb-1 mb-4">Latest Courses</h2>

      <div className="row g-4 mb-4">
        {/* Card 5 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handleDsClicks('/PowerBi')}> 
            <img src="powerbi.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>POWER BI </Link></h5>
                 {/* </div> */}
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handlesp('/python-full-stack')}> 
            <img src="Swift.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>SWIFT </Link></h5>
              {/* </div> */}
          </div>
        </div>
        {/* Card 7 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handless('/python-full-stack')}> 
            <img src="sap.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>SAP </Link></h5>
              {/* </div> */}
          </div>
        </div>
        {/* Card 8 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => handles('/python-full-stack')}> 
            <img src="saleforce.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>SALESFORCES </Link></h5>
              {/* </div> */}
          </div>
        </div>
      </div>
      <br /><br /><br />


     
            {/* Additional Row */}
            <br /><br /><br />
      <div className="row g-4 mb-4">
      
        {/* Card 5 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => peg('/python-full-stack')}> 
            <img src="pega.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>PEGA </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
        
      
        {/* Card 6 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => st('/python-full-stack')}> 
            <img src="test.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>SOFTWARE TESTING </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
        {/* Card 7 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => aws('/python-full-stack')}> 
            <img src="amazon.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>AMAZON WEB SERVICES </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
        {/* Card 8 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => as('/python-full-stack')}> 
            <img src="and.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>ANDRIOD STUDIO </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
      </div>
      <br /><br /><br />
      <div className="row g-4 mb-4">
      
        {/* Card 5 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => web('/python-full-stack')}> 
            <img src="web.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>WEB DESGIN </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
        
      
        {/* Card 6 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => gp('/python-full-stack')}> 
            <img src="gp.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>GRAPHICS </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
        {/* Card 7 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => cy('/python-full-stack')}> 
            <img src="cy.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>CYBER SECURITY </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
        {/* Card 8 */}
        <div className="col-md-3">
        <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}onClick={() => net('/python-full-stack')}> 
            <img src="net.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            > */}
              <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{textDecoration: "None"}}>NETWORKING </Link></h5>
              {/* </div> */}
          </div>
        </div>
        
      </div>

      {/* You can repeat the above pattern for additional rows */}
    </div>
  );
}

export default Courses;
