import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KetQuaGame } from './KetQuaGame'
import XucXac from './XucXac'
import style from '../../Assets/Styles/Components/BaiTapGameXucXac.module.css'

export class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className={` ${style['bg-game']} m-0 p-0 `}>
          <h3 className='text-center display-4 pt-3'> Bài tập game xúc xắc </h3>
          <XucXac/>
          <KetQuaGame/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapGameXucXac)