import './comp1.css';
function Comp1()
{
    return(
        <div style={{position:"fixed"}}>
        <div style={{display: 'flex'}} className ='img' ><img src="https://tse4.mm.bing.net/th?id=OIP.GNMirYrU1vHwClfyrcwq-QHaEK&pid=Api&P=0" alt="img" width="110px" height="70px">
        </img>
        <span className='namei'>React</span>
    <div className='divnav'>
         <a  href="#">Doc</a>
        <a href="# ">Tutorial</a>
        <a href="#">Bolg</a>
        <a href="#">Community</a>
        <a href="#" style={{paddingLeft : ' 100px',fontWeight:'lighter' }}>Search</a>
        <a href="#" style={{paddingLeft : '100px'}}>v18.2.0</a>
        <a href="#">languages</a>
        <a href="#">Github</a>
     </div>
        </div>
        </div>
    )
}
export default Comp1;