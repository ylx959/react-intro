
import { useEffect, useRef, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import classNames from 'classnames'
import { v4 as uuidV4 } from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

// 當前登入使用者資訊
const user = {
  // 使用者id
  uid: '30009257',
  // 使用者頭像
  avatar,
  // 使用者暱稱
  uname: '黑马前端',
}
// 導航 Tab 陣列
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

// 封裝請求資料的Hook

function useGetList () {
  // 獲取介面資料渲染
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
        {/* 使用者名稱 */}
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
            <span className="reply-time">点赞数:{item.like}</span>
            {/* 條件：user.id === item.user.id */}
            {user.uid === item.user.uid &&
              <span className="delete-btn" onClick={() => onDel(item.rpid)}>
                删除
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
    // 對commentList做過濾處
    setCommentList(commentList.filter(item => item.rpid !== id))
  }

  // tab切換功能
  // 1. 點選誰就把誰的type記錄下來
  // 2. 通過記錄的type和每一項遍歷時的type做匹配 控制啟用類名的顯示
  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    console.log(type)
    setType(type)
    // 基於列表的排序
    if (type === 'hot') {
      // 根據點讚數量排序 
      // lodash 套件
      //_.orderBy(要排序的資料, 按照什麼排序, 排序方向)"desc"=descending
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      // 根據建立時間排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }

  // 發表評論
  const [content, setContent] = useState('')
  // 建立一個 ref 物件，之後透過 inputRef.current 取得 DOM 元素
  const inputRef = useRef(null)
  const handlPublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidV4(), // 隨機id
        user: {
          uid: '30009257',
          avatar,
          uname: '黑马前端',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'), // 格式化 月-日 時:分
        like: 10,
      }
    ])
    // 1. 清空輸入框的內容（useState用法)
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
            <span className="nav-title-text">评论</span>
            {/* 評論數量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮類名： active */}
            {/* classNames(靜態的類名,動態類名key表示要控制的類名,value表示條件，true 的時候顯示類名) */}
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
          {/* 當前使用者頭像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 評論框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              ref={inputRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* 釋出按鈕 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlPublish}>发布</div>
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
