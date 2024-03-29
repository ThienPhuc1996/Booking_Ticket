import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGheAction } from '../../redux/Action/BookingTicketAction';
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
     
  
      let cssGheDaDat = '';
      let disable = false;
        // Ghế đã đặt
      if(ghe.daDat){
          cssGheDaDat ='gheDuocChon';
          disable = true
      }

      // Ghế đang chọn
         let cssGheDangDat = '';
         let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
         if(indexGheDangDat !== -1){
            cssGheDangDat = 'gheDangChon'
         }

       return <button onClick={() => {
         this.props.datGhe(ghe)
       }} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
         {ghe.soGhe}
       </button>
    })
  }
  

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang,index) => {
      return  <button className='rowNumber'>
        {hang.soGhe}
      </button>
    })
  }


  renderHangGhe = () => {
    if(this.props.soHangGhe === 0) {
       return <div className='ml-4'>
          {this.props.hangGhe.hang} {this.renderSoHang()}
       </div>
    } else{
    return <div>
      {this.props.hangGhe.hang} {this.renderGhe()}
    </div>
    }
  }


  render() {
    return (
      <div className='text-light text-left ml-5 mt-2' style={{fontSize:'30px'}}>
      {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    datGhe: (ghe) => {
      dispatch (datGheAction(ghe)) 
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);
