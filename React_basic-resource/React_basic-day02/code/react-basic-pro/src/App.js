
import { useEffect, useRef, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import classNames from 'classnames'
import { v4 as uuidV4 } from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

// 當前登入用戶資訊
const user = {
  // 用戶id
  uid: '30009257',
  // 用戶頭像
  avatar,
  // 用戶暱稱
  uname: '黑馬前端',
}
// 導航 Tab 陣列
const tabs = [
  { type: 'hot', text: '最熱' },
  { type: 'time', text: '最新' },
]

// 封裝請求資料的Hook

function useGetList () {

  // 取得介面資料並渲染
  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    // 請求資料
    async function getList () {
      // axios請求資料
      const res = await axios.get(' http://localhost:3004/list')
      setCommentList(res.data)
    }
    getList()
  }, [])

  return {
    commentList,
    setCommentList
  }
}


// 封裝Item元件

function Item ({ item, onDel }) {
  return (
    <div className="reply-item">
      {/* 頭像 */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt=""
            src={item.user.avatar}
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* 用戶名 */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* 評論內容 */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* 評論時間 */}
            <span className="reply-time">{item.ctime}</span>
            {/* 評論數量 */}
            <span className="reply-time">按讚數:{item.like}</span>
            {/* 條件：user.id === item.user.id */}
            {user.uid === item.user.uid &&
              <span className="delete-btn" onClick={() => onDel(item.rpid)}>
                刪除
              </span>}
          </div>
        </div>
      </div>
    </div>
  )
}


const App = () => {
  // 渲染評論列表
  // 1. 使用useState維護list
  // const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'))
  const { commentList, setCommentList } = useGetList()

  // 刪除功能
  const handleDel = (id) => {
    console.log(id)
    // 對commentList做過濾處理
    setCommentList(commentList.filter(item => item.rpid !== id))
  }

  // tab切換功能
  // 1. 點擊誰就把誰的type記錄下來
  // 2. 通過記錄的type和每一項遍歷時的type做匹配 控制啟用類別名稱的顯示
  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    console.log(type)
    setType(type)
    // 基於列表的排序
    if (type === 'hot') {
      // 根據按讚數量排序
      // lodash
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      // 根據建立時間排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }

  // 發表評論
  const [content, setContent] = useState('')
  const inputRef = useRef(null)
  const handlPublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidV4(), // 隨機id
        user: {
          uid: '30009257',
          avatar,
          uname: '黑馬前端',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'), // 格式化 月-日 時:分
        like: 66,
      }
    ])
    // 1. 清空輸入框的內容
    setContent('')
    // 2. 重新聚焦  dom(useRef) - focus
    inputRef.current.focus()
  }

  return (
    <div className="app">
      {/* 導航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">評論</span>
            {/* 評論數量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮類別名稱： active */}
            {tabs.map(item =>
              <span
                key={item.type}
                onClick={() => handleTabChange(item.type)}
                className={classNames('nav-item', { active: type === item.type })}>
                {item.text}
              </span>)}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 發表評論 */}
        <div className="box-normal">
          {/* 當前用戶頭像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用戶頭像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 評論框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="發一條友善的評論"
              ref={inputRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* 發布按鈕 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlPublish}>發布</div>
            </div>
          </div>
        </div>
        {/* 評論列表 */}
        <div className="reply-list">
          {/* 評論項 */}
          {commentList.map(item => <Item key={item.id} item={item} onDel={handleDel} />)}
        </div> 
      </div>
    </div>
  )
}

export default App
