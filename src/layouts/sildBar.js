import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.css';
import { connect } from 'dva';
import sildBarConfig from './sildbarConfig';

let config = new sildBarConfig();

console.log(config.data)

function SildBar({ secondChildren,showIndex ,dispatch}) {
    let arr = config.data;
    console.log(showIndex)
  return <div className = { styles['sildbar'] } >
            <div className={styles['sildbar-container-left']}>
                {
                    arr.map((item, index)=>{
                        return  <div key={index} data-key={index} onClick={(e)=>dispatch({type:"example/changesildBar",showIndex:e.target.getAttribute("data-key")})} className={styles['sildbar-container-left-item']}>{item.topNavName}</div>
                    })
                }
            </div>        
            <div className = { styles['sildbar-container'] } > {
            arr.map((item, index) => {
              console.log(showIndex)
              if(index == parseInt(showIndex)) {
                    return (item.childerList.map((x,y)=>{
                        console.log(x)
                        return <div className = { styles['sildbar-container-item'] } key = { y } >
                                <div className = { styles['sildbar-container-item-title'] } data-key={x.id} onClick={(e)=>dispatch({ type: 'example/changeSecondSildBar', secondChildren:(e.target.getAttribute("data-key"))})}> { x.sildBarName } < /div>
                                <div style={{display:(secondChildren==x.id)?"block":"none"}} className={styles['sildbar-container-second']}>
                                    {
                                        x.sildBarChilder.map((i, d)=>{
                                            return <Link className={styles['sildbar-container-second-item']}  key={d} to={"/"+i.secondName}>
                                                    <div  data-key={i.secondId} onClick={(e)=>dispatch({type:"example/changeSecondSildBar",showIndex:e.target.getAttribute("data-key")})} className={styles['sildbar-container-second-item']}>
                                                    {i.secondSildBarName}</div>
                                                </Link>
                                        
                                    })
                                    }
                                </div>
                            </div>
                    }))
                }
              })
            } 
            </div>
        </div>
}

function mapStateToProps(state) {
  const { secondChildren,showIndex } = state.example;
  return {
    secondChildren,
    showIndex
  };
}

export default connect(mapStateToProps)(SildBar);